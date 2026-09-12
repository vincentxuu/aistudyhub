import questionsData from '../../data/questions.json'
import type { Question } from './question-types.ts'

const allQuestions = questionsData as Question[]

export function getAllQuestions(): Question[] {
  return allQuestions
}

export function getExamQuestions(examCode: string): Question[] {
  return allQuestions.filter((q) => q.examCode === examCode)
}

export function getQuestionsByDomain(examCode: string, domain: string): Question[] {
  return allQuestions.filter((q) => q.examCode === examCode && q.domain === domain)
}

export function getDomains(examCode: string): string[] {
  const domains = new Set<string>()
  for (const q of allQuestions) {
    if (q.examCode === examCode) domains.add(q.domain)
  }
  return [...domains].sort()
}

export function getDomainCounts(examCode: string): Record<string, number> {
  const counts: Record<string, number> = {}
  for (const q of allQuestions) {
    if (q.examCode === examCode) {
      counts[q.domain] = (counts[q.domain] || 0) + 1
    }
  }
  return counts
}

export function getRandomExamSet(examCode: string, count: number): Question[] {
  const pool = getExamQuestions(examCode)
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}

const DOMAIN_WEIGHTS: Record<string, { domainNumber: number; count: number }[]> = {
  'AIF-C01': [
    { domainNumber: 1, count: 13 },
    { domainNumber: 2, count: 16 },
    { domainNumber: 3, count: 18 },
    { domainNumber: 4, count: 9 },
    { domainNumber: 5, count: 9 },
  ],
}

export function getRealisticExamSet(examCode: string): Question[] {
  const weights = DOMAIN_WEIGHTS[examCode]
  if (!weights) return getRandomExamSet(examCode, 65)

  const pool = getExamQuestions(examCode)
  const byDomain = new Map<number, Question[]>()
  for (const q of pool) {
    const list = byDomain.get(q.domainNumber) || []
    list.push(q)
    byDomain.set(q.domainNumber, list)
  }

  const selected: Question[] = []
  for (const { domainNumber, count } of weights) {
    const domainPool = byDomain.get(domainNumber) || []
    const shuffled = [...domainPool].sort(() => Math.random() - 0.5)
    selected.push(...shuffled.slice(0, Math.min(count, shuffled.length)))
  }

  return selected.sort(() => Math.random() - 0.5)
}

export function getDiagnosticSet(examCode: string): Question[] {
  const pool = getExamQuestions(examCode)
  const byDomain = new Map<number, Question[]>()
  for (const q of pool) {
    const list = byDomain.get(q.domainNumber) || []
    list.push(q)
    byDomain.set(q.domainNumber, list)
  }

  const selected: Question[] = []
  for (const [, domainPool] of [...byDomain.entries()].sort(([a], [b]) => a - b)) {
    const shuffled = [...domainPool].sort(() => Math.random() - 0.5)
    selected.push(...shuffled.slice(0, 4))
  }

  return selected.sort(() => Math.random() - 0.5)
}

export function getFilteredQuestions(
  examCode: string,
  options: {
    domains?: string[]
    difficulties?: number[]
    count?: number
  },
): Question[] {
  let pool = getExamQuestions(examCode)
  if (options.domains && options.domains.length > 0) {
    pool = pool.filter((q) => options.domains!.includes(q.domain))
  }
  if (options.difficulties && options.difficulties.length > 0) {
    pool = pool.filter((q) => options.difficulties!.includes(q.difficulty))
  }
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  if (options.count && options.count < shuffled.length) {
    return shuffled.slice(0, options.count)
  }
  return shuffled
}

export function isAnswerCorrect(question: Question, selectedAnswers: string[]): boolean {
  if (selectedAnswers.length !== question.correctAnswers.length) return false
  if (question.type === 'ordering') {
    return selectedAnswers.every((answer, index) => answer === question.correctAnswers[index])
  }
  return question.correctAnswers.every((answer) => selectedAnswers.includes(answer))
}

export interface ExamSession {
  id: string
  examCode: string
  mode: 'exam' | 'practice'
  questions: Question[]
  answers: Record<string, string[]>
  flagged: Set<string>
  startedAt: number
  completedAt: number | null
  timeLimitMs: number
}

export interface ExamResult {
  id: string
  examCode: string
  totalQuestions: number
  correctCount: number
  score: number
  timeTakenMs: number
  completedAt: string
  domainBreakdown: {
    domain: string
    correct: number
    total: number
    percentage: number
  }[]
  questionResults: {
    questionId: string
    stem: string
    domain: string
    options: { label: string; text: string }[]
    selectedAnswers: string[]
    correctAnswers: string[]
    isCorrect: boolean
    explanation: string | null
    hint: string | null
    trap: string | null
    mnemonic: string | null
  }[]
}

export function computeResult(session: {
  id: string
  examCode: string
  questions: Question[]
  answers: Record<string, string[]>
  startedAt: number
  completedAt: number
}): ExamResult {
  const questionResults = session.questions.map((q) => {
    const selected = session.answers[q.id] || []
    const isCorrect = isAnswerCorrect(q, selected)
    return {
      questionId: q.id,
      stem: q.stem,
      domain: q.domain,
      options: q.options,
      selectedAnswers: selected,
      correctAnswers: q.correctAnswers,
      isCorrect,
      explanation: q.explanation,
      hint: q.hint,
      trap: q.trap,
      mnemonic: q.mnemonic,
    }
  })

  const correctCount = questionResults.filter((r) => r.isCorrect).length
  const totalQuestions = session.questions.length

  const domainMap = new Map<string, { correct: number; total: number }>()
  for (const r of questionResults) {
    const entry = domainMap.get(r.domain) || { correct: 0, total: 0 }
    entry.total++
    if (r.isCorrect) entry.correct++
    domainMap.set(r.domain, entry)
  }

  const domainBreakdown = [...domainMap.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([domain, { correct, total }]) => ({
      domain,
      correct,
      total,
      percentage: Math.round((correct / total) * 100),
    }))

  return {
    id: session.id,
    examCode: session.examCode,
    totalQuestions,
    correctCount,
    score: Math.round((correctCount / totalQuestions) * 100),
    timeTakenMs: session.completedAt - session.startedAt,
    completedAt: new Date(session.completedAt).toISOString(),
    domainBreakdown,
    questionResults,
  }
}

export function saveResult(result: ExamResult): void {
  try {
    const key = `exam-results`
    const existing = JSON.parse(localStorage.getItem(key) || '[]')
    existing.push(result)
    localStorage.setItem(key, JSON.stringify(existing))
  } catch {
    // localStorage unavailable
  }
}

export function loadResult(sessionId: string): ExamResult | null {
  try {
    const key = `exam-results`
    const existing = JSON.parse(localStorage.getItem(key) || '[]') as ExamResult[]
    return existing.find((r) => r.id === sessionId) || null
  } catch {
    return null
  }
}

// --- Wrong Answer Journal ---

export interface WrongAnswer {
  questionId: string
  examCode: string
  selectedAnswers: string[]
  correctAnswers: string[]
  reflection: string | null
  attemptedAt: string
  reviewedAt: string | null
}

const WRONG_ANSWERS_KEY = 'wrong-answers'

export function saveWrongAnswer(wa: WrongAnswer): void {
  try {
    const existing = getWrongAnswers()
    const idx = existing.findIndex((e) => e.questionId === wa.questionId)
    if (idx >= 0) {
      existing[idx] = { ...existing[idx], ...wa, reflection: existing[idx].reflection }
    } else {
      existing.push(wa)
    }
    localStorage.setItem(WRONG_ANSWERS_KEY, JSON.stringify(existing))
  } catch {
    // localStorage unavailable
  }
}

export function saveWrongAnswersFromResult(result: ExamResult): number {
  let count = 0
  for (const qr of result.questionResults) {
    if (!qr.isCorrect) {
      saveWrongAnswer({
        questionId: qr.questionId,
        examCode: result.examCode,
        selectedAnswers: qr.selectedAnswers,
        correctAnswers: qr.correctAnswers,
        reflection: null,
        attemptedAt: result.completedAt,
        reviewedAt: null,
      })
      count++
    }
  }
  return count
}

export function getWrongAnswers(examCode?: string): WrongAnswer[] {
  try {
    const all = JSON.parse(localStorage.getItem(WRONG_ANSWERS_KEY) || '[]') as WrongAnswer[]
    if (examCode) return all.filter((wa) => wa.examCode === examCode)
    return all
  } catch {
    return []
  }
}

export function updateReflection(questionId: string, reflection: string): void {
  try {
    const all = getWrongAnswers()
    const wa = all.find((w) => w.questionId === questionId)
    if (wa) {
      wa.reflection = reflection
      localStorage.setItem(WRONG_ANSWERS_KEY, JSON.stringify(all))
    }
  } catch {
    // localStorage unavailable
  }
}

export function markReviewed(questionId: string): void {
  try {
    const all = getWrongAnswers()
    const wa = all.find((w) => w.questionId === questionId)
    if (wa) {
      wa.reviewedAt = new Date().toISOString()
      localStorage.setItem(WRONG_ANSWERS_KEY, JSON.stringify(all))
    }
  } catch {
    // localStorage unavailable
  }
}

export function clearWrongAnswers(): void {
  try {
    localStorage.removeItem(WRONG_ANSWERS_KEY)
  } catch {
    // localStorage unavailable
  }
}

export function getQuestionsByIds(ids: string[]): Question[] {
  const idSet = new Set(ids)
  return allQuestions.filter((q) => idSet.has(q.id))
}
