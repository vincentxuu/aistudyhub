import { saveResult as saveResultToServer } from '../server/api/results.ts'
import { createSession } from '../server/api/session.ts'
import { syncData } from '../server/api/sync.ts'
import { saveWrongAnswer as saveWrongAnswerToServer } from '../server/api/wrong-answers.ts'
import type { ExamResult, WrongAnswer } from './questions.ts'

const SYNC_QUEUE_KEY = '_syncQueue'

interface QueuedItem {
  type: 'result' | 'wrongAnswer'
  data: unknown
  timestamp: number
}

function getQueue(): QueuedItem[] {
  try {
    return JSON.parse(localStorage.getItem(SYNC_QUEUE_KEY) || '[]')
  } catch {
    return []
  }
}

function addToQueue(item: QueuedItem): void {
  try {
    const queue = getQueue()
    queue.push(item)
    localStorage.setItem(SYNC_QUEUE_KEY, JSON.stringify(queue))
  } catch {
    // localStorage unavailable
  }
}

function clearQueue(): void {
  try {
    localStorage.removeItem(SYNC_QUEUE_KEY)
  } catch {
    // localStorage unavailable
  }
}

export async function initSession(): Promise<boolean> {
  try {
    const result = await createSession()
    if (result && typeof result === 'object' && 'ok' in result && !result.ok) {
      return false
    }
    await flushQueue()
    return true
  } catch {
    return false
  }
}

async function flushQueue(): Promise<void> {
  const queue = getQueue()
  if (queue.length === 0) return

  const results = queue
    .filter((q) => q.type === 'result')
    .map((q) => q.data as ExamResult)
    .map((r) => ({
      id: r.id,
      examCode: r.examCode,
      score: r.score,
      totalQuestions: r.totalQuestions,
      correctCount: r.correctCount,
      timeTakenMs: r.timeTakenMs,
      domainBreakdown: r.domainBreakdown,
      completedAt: r.completedAt,
    }))

  const wrongAnswers = queue.filter((q) => q.type === 'wrongAnswer').map((q) => q.data as WrongAnswer)

  try {
    await syncData({ data: { results, wrongAnswers } })
    clearQueue()
  } catch {
    // Will retry on next page load
  }
}

export async function persistResult(result: ExamResult): Promise<void> {
  try {
    const key = 'exam-results'
    const existing = JSON.parse(localStorage.getItem(key) || '[]')
    existing.push(result)
    localStorage.setItem(key, JSON.stringify(existing))
  } catch {
    // localStorage unavailable
  }

  try {
    await saveResultToServer({
      data: {
        id: result.id,
        examCode: result.examCode,
        score: result.score,
        totalQuestions: result.totalQuestions,
        correctCount: result.correctCount,
        timeTakenMs: result.timeTakenMs,
        domainBreakdown: result.domainBreakdown,
        completedAt: result.completedAt,
      },
    })
  } catch {
    addToQueue({ type: 'result', data: result, timestamp: Date.now() })
  }
}

export async function persistWrongAnswer(wa: WrongAnswer): Promise<void> {
  try {
    await saveWrongAnswerToServer({
      data: {
        questionId: wa.questionId,
        examCode: wa.examCode,
        selectedAnswers: wa.selectedAnswers,
        correctAnswers: wa.correctAnswers,
        reflection: wa.reflection,
        attemptedAt: wa.attemptedAt,
      },
    })
  } catch {
    addToQueue({ type: 'wrongAnswer', data: wa, timestamp: Date.now() })
  }
}
