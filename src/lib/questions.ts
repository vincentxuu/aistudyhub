import { getStoredLocale } from '../i18n/index.ts'
import type { DomainInfo } from './domains.ts'
import { getExamConfig } from './exam-registry.ts'
import type { Question } from './question-types.ts'

function currentLang(lang?: string): string {
  return lang || getStoredLocale()
}

export async function getExamQuestions(examCode: string, lang?: string): Promise<Question[]> {
  const l = currentLang(lang)
  try {
    const { fetchExamQuestions } = await import('../server/api/questions.ts')
    const result = await fetchExamQuestions({ data: { examCode, lang: l } })
    if (result.ok) return result.questions
  } catch {}
  return []
}

export async function getDomainInfo(examCode: string, lang?: string): Promise<DomainInfo[]> {
  const l = currentLang(lang)
  try {
    const { fetchDomainInfo } = await import('../server/api/questions.ts')
    const result = await fetchDomainInfo({ data: { examCode, lang: l } })
    if (result.ok) return result.domains
  } catch {}
  return []
}

/** @deprecated Prefer getDomainInfo so labels and counts are fetched together. */
export async function getDomains(examCode: string, lang?: string): Promise<string[]> {
  return (await getDomainInfo(examCode, lang)).map((domain) => domain.label)
}

/** @deprecated Prefer getDomainInfo so labels and counts are fetched together. */
export async function getDomainCounts(examCode: string, lang?: string): Promise<Record<string, number>> {
  return Object.fromEntries((await getDomainInfo(examCode, lang)).map((domain) => [domain.label, domain.count]))
}

export async function getRealisticExamSet(examCode: string, lang?: string): Promise<Question[]> {
  const l = currentLang(lang)
  const config = getExamConfig(examCode)
  const weights = config?.domainWeights
  try {
    const { fetchExamSet } = await import('../server/api/questions.ts')
    const result = await fetchExamSet({
      data: {
        examCode,
        lang: l,
        mode: 'realistic',
        domainWeights: weights,
        count: config?.questionCount ?? 65,
      },
    })
    if (result.ok && result.questions.length > 0) return result.questions
  } catch {}
  const pool = await getExamQuestions(examCode, l)
  if (!weights) {
    const shuffled = [...pool].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, Math.min(config?.questionCount ?? 65, shuffled.length))
  }
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

export async function getDiagnosticSet(examCode: string, lang?: string): Promise<Question[]> {
  const l = currentLang(lang)
  try {
    const { fetchExamSet } = await import('../server/api/questions.ts')
    const result = await fetchExamSet({ data: { examCode, lang: l, mode: 'diagnostic' } })
    if (result.ok && result.questions.length > 0) return result.questions
  } catch {}
  const pool = await getExamQuestions(examCode, l)
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

export async function getFilteredQuestions(
  examCode: string,
  options: {
    domainNumbers?: number[]
    difficulties?: number[]
    count?: number
    lang?: string
  },
): Promise<Question[]> {
  const l = currentLang(options.lang)
  try {
    const { fetchFilteredQuestions } = await import('../server/api/questions.ts')
    const result = await fetchFilteredQuestions({
      data: {
        examCode,
        lang: l,
        domainNumbers: options.domainNumbers,
        difficulties: options.difficulties,
        count: options.count,
      },
    })
    if (result.ok && result.questions.length > 0) return result.questions
  } catch {}
  let pool = await getExamQuestions(examCode, l)
  if (options.domainNumbers && options.domainNumbers.length > 0) {
    pool = pool.filter((q) => options.domainNumbers!.includes(q.domainNumber))
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

export async function getQuestionsByIds(ids: string[]): Promise<Question[]> {
  if (ids.length === 0) return []
  try {
    const { fetchQuestionsByIds } = await import('../server/api/questions.ts')
    const result = await fetchQuestionsByIds({ data: { ids } })
    if (result.ok) return result.questions
  } catch {}
  return []
}

export function isAnswerCorrect(question: Question, selected: string[]): boolean {
  if (selected.length !== question.correctAnswers.length) return false
  if (question.type === 'ordering') {
    return selected.every((label, index) => label === question.correctAnswers[index])
  }
  return selected.every((label) => question.correctAnswers.includes(label))
}

// --- Non-async types and functions (localStorage-based, no D1 needed) ---

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
    domainNumber?: number
    correct: number
    total: number
    percentage: number
  }[]
  questionResults: {
    questionId: string
    stem: string
    domain: string
    options: { label: string; text: string; feedback?: string | null }[]
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

  const questionsById = new Map(session.questions.map((question) => [question.id, question]))
  const domainMap = new Map<number, { domain: string; correct: number; total: number }>()
  for (const r of questionResults) {
    const question = questionsById.get(r.questionId)
    if (!question || question.domainNumber <= 0) continue
    const entry = domainMap.get(question.domainNumber) || { domain: r.domain, correct: 0, total: 0 }
    entry.total++
    if (r.isCorrect) entry.correct++
    domainMap.set(question.domainNumber, entry)
  }

  const domainBreakdown = [...domainMap.entries()]
    .sort(([a], [b]) => a - b)
    .map(([domainNumber, { domain, correct, total }]) => ({
      domain,
      domainNumber,
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
    const key = 'exam-results'
    const existing = JSON.parse(localStorage.getItem(key) || '[]')
    existing.push(result)
    localStorage.setItem(key, JSON.stringify(existing))
  } catch {}
  import('../lib/persistence.ts').then((m) => m.persistResult(result)).catch(() => {})
}

export function loadResult(sessionId: string): ExamResult | null {
  try {
    const key = 'exam-results'
    const existing = JSON.parse(localStorage.getItem(key) || '[]') as ExamResult[]
    return existing.find((r) => r.id === sessionId) || null
  } catch {
    return null
  }
}

export interface WrongAnswer {
  questionId: string
  examCode: string
  selectedAnswers: string[]
  correctAnswers: string[]
  reflection: string | null
  attemptedAt: string
  reviewedAt: string | null
  easeFactor: number
  interval: number
  repetitions: number
  nextReviewAt: string | null
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
  } catch {}
  import('../lib/persistence.ts').then((m) => m.persistWrongAnswer(wa)).catch(() => {})
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
        easeFactor: 2.5,
        interval: 1,
        repetitions: 0,
        nextReviewAt: new Date().toISOString(),
      })
      count++
    }
  }
  return count
}

export function updateSR(questionId: string, quality: 0 | 1 | 2 | 3 | 4 | 5): void {
  try {
    const all = getWrongAnswers()
    const wa = all.find((w) => w.questionId === questionId)
    if (!wa) return

    let { easeFactor, interval, repetitions } = wa

    if (quality < 3) {
      repetitions = 0
      interval = 1
    } else {
      if (repetitions === 0) {
        interval = 1
      } else if (repetitions === 1) {
        interval = 6
      } else {
        interval = Math.round(interval * easeFactor)
      }
      repetitions++
    }

    easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
    if (easeFactor < 1.3) easeFactor = 1.3

    const nextDate = new Date()
    nextDate.setDate(nextDate.getDate() + interval)

    wa.easeFactor = easeFactor
    wa.interval = interval
    wa.repetitions = repetitions
    wa.nextReviewAt = nextDate.toISOString()
    wa.reviewedAt = new Date().toISOString()

    localStorage.setItem(WRONG_ANSWERS_KEY, JSON.stringify(all))
  } catch {}
}

export function getDueForReview(examCode?: string): WrongAnswer[] {
  const all = getWrongAnswers(examCode)
  const now = new Date().toISOString()
  return all.filter((wa) => wa.nextReviewAt && wa.nextReviewAt <= now)
}

export function getWrongAnswers(examCode?: string): WrongAnswer[] {
  try {
    const raw = JSON.parse(localStorage.getItem(WRONG_ANSWERS_KEY) || '[]') as WrongAnswer[]
    const all = raw.map((wa) => ({
      ...wa,
      easeFactor: wa.easeFactor ?? 2.5,
      interval: wa.interval ?? 1,
      repetitions: wa.repetitions ?? 0,
      nextReviewAt: wa.nextReviewAt ?? wa.attemptedAt,
    }))
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
  } catch {}
}

export function markReviewed(questionId: string): void {
  try {
    const all = getWrongAnswers()
    const wa = all.find((w) => w.questionId === questionId)
    if (wa) {
      wa.reviewedAt = new Date().toISOString()
      localStorage.setItem(WRONG_ANSWERS_KEY, JSON.stringify(all))
    }
  } catch {}
}

export function clearWrongAnswers(): void {
  try {
    localStorage.removeItem(WRONG_ANSWERS_KEY)
  } catch {}
}
