import { createServerFn } from '@tanstack/react-start'
import { nanoid } from 'nanoid'
import { getDB } from '../d1.ts'
import { getSessionId } from '../session.ts'

interface SaveWrongAnswerInput {
  questionId: string
  examCode: string
  selectedAnswers: string[]
  correctAnswers: string[]
  reflection?: string | null
  attemptedAt: string
}

export const saveWrongAnswer = createServerFn({ method: 'POST' })
  .validator((input: SaveWrongAnswerInput) => input)
  .handler(async ({ data }) => {
    const sessionId = getSessionId()
    const db = await getDB()
    if (!sessionId || !db) return { ok: false as const }

    const id = nanoid(12)
    await db
      .prepare(
        `INSERT INTO wrong_answers
         (id, session_id, question_id, exam_code, selected_answers, correct_answers, reflection, attempted_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)
         ON CONFLICT(session_id, question_id) DO UPDATE SET
           selected_answers = excluded.selected_answers,
           correct_answers = excluded.correct_answers,
           attempted_at = excluded.attempted_at`,
      )
      .bind(
        id,
        sessionId,
        data.questionId,
        data.examCode,
        JSON.stringify(data.selectedAnswers),
        JSON.stringify(data.correctAnswers),
        data.reflection ?? null,
        data.attemptedAt,
      )
      .run()

    return { ok: true as const }
  })

export const getWrongAnswers = createServerFn({ method: 'GET' }).handler(async () => {
  const sessionId = getSessionId()
  const db = await getDB()
  if (!sessionId || !db) return { ok: false as const, wrongAnswers: [] }

  const { results } = await db
    .prepare('SELECT * FROM wrong_answers WHERE session_id = ? ORDER BY attempted_at DESC')
    .bind(sessionId)
    .all()

  return {
    ok: true as const,
    wrongAnswers: results.map((r) => ({
      questionId: r.question_id as string,
      examCode: r.exam_code as string,
      selectedAnswers: JSON.parse(r.selected_answers as string),
      correctAnswers: JSON.parse(r.correct_answers as string),
      reflection: r.reflection as string | null,
      attemptedAt: r.attempted_at as string,
      reviewedAt: r.reviewed_at as string | null,
    })),
  }
})

export const updateReflection = createServerFn({ method: 'POST' })
  .validator((input: { questionId: string; reflection: string }) => input)
  .handler(async ({ data }) => {
    const sessionId = getSessionId()
    const db = await getDB()
    if (!sessionId || !db) return { ok: false as const }

    await db
      .prepare('UPDATE wrong_answers SET reflection = ? WHERE session_id = ? AND question_id = ?')
      .bind(data.reflection, sessionId, data.questionId)
      .run()

    return { ok: true as const }
  })
