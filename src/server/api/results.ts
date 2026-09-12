import { createServerFn } from '@tanstack/react-start'
import { nanoid } from 'nanoid'
import { getDB } from '../d1.ts'
import { getSessionId } from '../session.ts'

interface SaveResultInput {
  id: string
  examCode: string
  score: number
  totalQuestions: number
  correctCount: number
  timeTakenMs: number
  domainBreakdown: { domain: string; correct: number; total: number }[]
  completedAt: string
}

export const saveResult = createServerFn({ method: 'POST' })
  .validator((input: SaveResultInput) => input)
  .handler(async ({ data }) => {
    const sessionId = getSessionId()
    const db = await getDB()
    if (!sessionId || !db) return { ok: false as const }

    const id = data.id || nanoid(10)
    await db
      .prepare(
        `INSERT OR REPLACE INTO exam_results
         (id, session_id, exam_code, score, total_questions, correct_count, time_taken_ms, domain_breakdown, completed_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .bind(
        id,
        sessionId,
        data.examCode,
        data.score,
        data.totalQuestions,
        data.correctCount,
        data.timeTakenMs,
        JSON.stringify(data.domainBreakdown),
        data.completedAt,
      )
      .run()

    return { ok: true as const, id }
  })

export const getResults = createServerFn({ method: 'GET' }).handler(async () => {
  const sessionId = getSessionId()
  const db = await getDB()
  if (!sessionId || !db) return { ok: false as const, results: [] }

  const { results } = await db
    .prepare('SELECT * FROM exam_results WHERE session_id = ? ORDER BY completed_at DESC')
    .bind(sessionId)
    .all()

  return {
    ok: true as const,
    results: results.map((r) => ({
      ...r,
      domainBreakdown: JSON.parse(r.domain_breakdown as string),
    })),
  }
})
