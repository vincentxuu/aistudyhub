import { createServerFn } from '@tanstack/react-start'
import { nanoid } from 'nanoid'
import { getDB } from '../d1.ts'
import { getSessionId } from '../session.ts'

interface SyncPayload {
  results?: Array<{
    id: string
    examCode: string
    score: number
    totalQuestions: number
    correctCount: number
    timeTakenMs: number
    domainBreakdown: { domain: string; correct: number; total: number }[]
    completedAt: string
  }>
  wrongAnswers?: Array<{
    questionId: string
    examCode: string
    selectedAnswers: string[]
    correctAnswers: string[]
    reflection: string | null
    attemptedAt: string
  }>
}

export const syncData = createServerFn({ method: 'POST' })
  .validator((input: SyncPayload) => input)
  .handler(async ({ data }) => {
    const sessionId = getSessionId()
    const db = await getDB()
    if (!sessionId || !db) return { ok: false as const, reason: 'no session or D1' }

    const batch: D1PreparedStatement[] = []

    if (data.results) {
      for (const r of data.results) {
        batch.push(
          db
            .prepare(
              `INSERT OR REPLACE INTO exam_results
               (id, session_id, exam_code, score, total_questions, correct_count, time_taken_ms, domain_breakdown, completed_at)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            )
            .bind(
              r.id,
              sessionId,
              r.examCode,
              r.score,
              r.totalQuestions,
              r.correctCount,
              r.timeTakenMs,
              JSON.stringify(r.domainBreakdown),
              r.completedAt,
            ),
        )
      }
    }

    if (data.wrongAnswers) {
      for (const wa of data.wrongAnswers) {
        batch.push(
          db
            .prepare(
              `INSERT INTO wrong_answers
               (id, session_id, question_id, exam_code, selected_answers, correct_answers, reflection, attempted_at)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?)
               ON CONFLICT(session_id, question_id) DO UPDATE SET
                 selected_answers = excluded.selected_answers,
                 correct_answers = excluded.correct_answers,
                 attempted_at = CASE
                   WHEN excluded.attempted_at > wrong_answers.attempted_at THEN excluded.attempted_at
                   ELSE wrong_answers.attempted_at
                 END`,
            )
            .bind(
              nanoid(12),
              sessionId,
              wa.questionId,
              wa.examCode,
              JSON.stringify(wa.selectedAnswers),
              JSON.stringify(wa.correctAnswers),
              wa.reflection,
              wa.attemptedAt,
            ),
        )
      }
    }

    if (batch.length > 0) {
      await db.batch(batch)
    }

    return { ok: true as const, synced: batch.length }
  })
