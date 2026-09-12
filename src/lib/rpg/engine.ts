import type { Question } from '../question-types.ts'

export interface RpgQuestion extends Question {
  familyId: string
  conceptId: string
  contentVersion: string
}
export interface Attempt {
  attemptId: string
  runId: string
  questionId: string
  familyId: string
  conceptId: string
  contentVersion: string
  questionHash: string
  answer: string[]
  correct: boolean
  hintUsed: boolean
  answeredAt: number
}
export interface ReviewItem {
  familyId: string
  conceptId: string
  contentVersion: string
  questionHash: string
  stage: number
  dueAt: number
}
export interface QuestRun {
  runId: string
  questId: string
  questions: RpgQuestion[]
  index: number
  drafts: Record<string, string[]>
  hints: string[]
  attempts: Attempt[]
  status: 'active' | 'completed'
  startedAt: number
  completedAt: number | null
  victory: boolean
  isReview: boolean
}
export interface RpgSave {
  schemaVersion: 1
  examCode: string
  campaignVersion: 1
  xp: number
  activeRun: QuestRun | null
  attempts: Attempt[]
  reviews: Record<string, ReviewItem>
  rewardClaims: string[]
  completedQuests: string[]
}
const DAY = 86_400_000
const INTERVALS = [1, 3, 7, 14, 30]
export function createSave(examCode: string): RpgSave {
  return {
    schemaVersion: 1,
    campaignVersion: 1,
    examCode,
    xp: 0,
    activeRun: null,
    attempts: [],
    reviews: {},
    rewardClaims: [],
    completedQuests: [],
  }
}
export function startRun(
  save: RpgSave,
  questId: string,
  questions: RpgQuestion[],
  now = Date.now(),
  isReview = false,
): RpgSave {
  if (
    !questions.length ||
    questions.some((q) => q.examCode !== save.examCode) ||
    new Set(questions.map((q) => q.familyId)).size !== questions.length
  )
    return save
  if (save.activeRun?.status === 'active') return save
  return {
    ...save,
    activeRun: {
      runId: crypto.randomUUID(),
      questId,
      questions: structuredClone(questions),
      index: 0,
      drafts: {},
      hints: [],
      attempts: [],
      status: 'active',
      startedAt: now,
      completedAt: null,
      victory: false,
      isReview,
    },
  }
}
export function setDraft(save: RpgSave, answer: string[]): RpgSave {
  const run = save.activeRun
  if (run?.status !== 'active' || run.attempts.length > run.index) return save
  const id = run.questions[run.index].id
  return { ...save, activeRun: { ...run, drafts: { ...run.drafts, [id]: [...answer] } } }
}
export function useHint(save: RpgSave): RpgSave {
  const run = save.activeRun
  if (run?.status !== 'active' || run.attempts.length > run.index) return save
  const id = run.questions[run.index].id
  return run.hints.includes(id) ? save : { ...save, activeRun: { ...run, hints: [...run.hints, id] } }
}
export function isRpgAnswerCorrect(q: Question, answer: string[]): boolean {
  if (answer.length !== q.correctAnswers.length || new Set(answer).size !== answer.length) return false
  return q.type === 'ordering'
    ? answer.every((a, i) => a === q.correctAnswers[i])
    : answer.every((a) => q.correctAnswers.includes(a))
}
export function submitAnswer(save: RpgSave, now = Date.now()): RpgSave {
  const run = save.activeRun
  if (run?.status !== 'active' || run.attempts.length > run.index) return save
  const q = run.questions[run.index],
    answer = run.drafts[q.id] || []
  if (!answer.length) return save
  const correct = isRpgAnswerCorrect(q, answer),
    hintUsed = run.hints.includes(q.id)
  const attempt: Attempt = {
    attemptId: `${run.runId}:${run.index}`,
    runId: run.runId,
    questionId: q.id,
    familyId: q.familyId,
    conceptId: q.conceptId,
    contentVersion: q.contentVersion,
    questionHash: q.hash,
    answer: [...answer],
    correct,
    hintUsed,
    answeredAt: now,
  }
  const old = save.reviews[q.familyId],
    same = old?.contentVersion === q.contentVersion
  const due = same && old.dueAt <= now
  const reviews = { ...save.reviews }
  if (!same || due || !correct || hintUsed) {
    const stage = correct && !hintUsed && due ? Math.min(old.stage + 1, 4) : 0
    // An early failure can bring review forward, but cannot postpone an existing due event.
    const dueAt = now + INTERVALS[stage] * DAY
    reviews[q.familyId] = {
      familyId: q.familyId,
      conceptId: q.conceptId,
      contentVersion: q.contentVersion,
      questionHash: q.hash,
      stage,
      dueAt: same && !due ? Math.min(old.dueAt, dueAt) : dueAt,
    }
  }
  let xp = save.xp
  const rewardClaims = [...save.rewardClaims]
  const firstKey = `first:${q.familyId}:${q.contentVersion}`
  const reviewKey = `review:${q.familyId}:${q.contentVersion}:${old?.dueAt}`
  if (correct && !rewardClaims.includes(firstKey)) {
    xp += hintUsed ? 5 : 10
    rewardClaims.push(firstKey)
  } else if (correct && !hintUsed && due && !rewardClaims.includes(reviewKey)) {
    xp += 5
    rewardClaims.push(reviewKey)
  }
  return {
    ...save,
    xp,
    reviews,
    rewardClaims,
    attempts: [...save.attempts, attempt],
    activeRun: { ...run, attempts: [...run.attempts, attempt] },
  }
}
export function advanceRun(save: RpgSave, now = Date.now()): RpgSave {
  const run = save.activeRun
  if (run?.status !== 'active' || run.attempts.length <= run.index) return save
  if (run.index + 1 < run.questions.length) return { ...save, activeRun: { ...run, index: run.index + 1 } }
  const victory = run.attempts.filter((a) => a.correct).length / run.questions.length >= 0.8
  const reward = victory && !run.isReview && !save.completedQuests.includes(run.questId)
  return {
    ...save,
    xp: save.xp + (reward ? 20 : 0),
    completedQuests: reward ? [...save.completedQuests, run.questId] : save.completedQuests,
    rewardClaims: reward ? [...save.rewardClaims, `quest:${run.questId}`] : save.rewardClaims,
    activeRun: { ...run, status: 'completed', victory, completedAt: now },
  }
}
export function reconcileQuestions(save: RpgSave, questions: RpgQuestion[], now = Date.now()): RpgSave {
  let changed = false
  const reviews = { ...save.reviews }
  for (const q of questions) {
    const old = reviews[q.familyId]
    if (old && old.contentVersion !== q.contentVersion) {
      reviews[q.familyId] = {
        familyId: q.familyId,
        conceptId: q.conceptId,
        contentVersion: q.contentVersion,
        questionHash: q.hash,
        stage: 0,
        dueAt: now,
      }
      changed = true
    }
  }
  return changed ? { ...save, reviews } : save
}
export function getDueQuestions(save: RpgSave, questions: RpgQuestion[], now = Date.now()): RpgQuestion[] {
  const seen = new Set<string>()
  return questions
    .filter((q) => {
      const r = save.reviews[q.familyId]
      if (!r || seen.has(q.familyId) || (r.contentVersion === q.contentVersion && r.dueAt > now)) return false
      seen.add(q.familyId)
      return true
    })
    .sort((a, b) => save.reviews[a.familyId].dueAt - save.reviews[b.familyId].dueAt)
}
export type ConceptStatus = 'unexplored' | 'learning' | 'recall' | 'mastered' | 'reinforce' | 'insufficient'
export function getConceptStatus(save: RpgSave, conceptId: string, questions: RpgQuestion[]): ConceptStatus {
  const current = questions.filter((q) => q.conceptId === conceptId)
  const attempts = save.attempts.filter(
    (a) =>
      a.conceptId === conceptId &&
      current.some((q) => q.familyId === a.familyId && q.contentVersion === a.contentVersion),
  )
  if (!attempts.length) return 'unexplored'
  const successes = attempts.filter((a) => a.correct && !a.hintUsed)
  const distinct = new Set(successes.map((a) => a.familyId))
  const recall = successes.some((a) =>
    successes.some((b) => a.familyId === b.familyId && a.answeredAt - b.answeredAt >= DAY),
  )
  if (distinct.size >= 3 && recall) {
    // A success on another family must not erase an unresolved error or assisted answer.
    const latestByFamily = new Map<string, Attempt>()
    for (const attempt of attempts) latestByFamily.set(attempt.familyId, attempt)
    return [...latestByFamily.values()].every((attempt) => attempt.correct && !attempt.hintUsed)
      ? 'mastered'
      : 'reinforce'
  }
  if (new Set(current.map((q) => q.familyId)).size < 3) return 'insufficient'
  return successes.length ? 'recall' : 'learning'
}

// Import guards cover every field consumed by the UI, including nested question snapshots.
const record = (x: unknown): x is Record<string, unknown> => !!x && typeof x === 'object' && !Array.isArray(x)
const str = (x: unknown): x is string => typeof x === 'string' && x.length <= 100_000
const strings = (x: unknown): x is string[] => Array.isArray(x) && x.length <= 10_000 && x.every(str)
const num = (x: unknown): x is number => typeof x === 'number' && Number.isSafeInteger(x) && x >= 0
const safeId = (x: unknown): x is string =>
  str(x) && x.length > 0 && !['__proto__', 'constructor', 'prototype'].includes(x)
function questionValid(q: unknown, exam: string): q is RpgQuestion {
  if (
    !record(q) ||
    !['id', 'hash', 'familyId', 'conceptId', 'contentVersion'].every((k) => safeId(q[k])) ||
    q.examCode !== exam
  )
    return false
  if (
    !['single', 'multi', 'ordering', 'matching'].includes(String(q.type)) ||
    !['en', 'zh-TW'].includes(String(q.lang)) ||
    !['human', 'ai'].includes(String(q.generatedBy)) ||
    !['certification', 'course', 'series'].includes(String(q.track))
  )
    return false
  if (
    !['stem', 'domain', 'questionStyle', 'sourceFile'].every((k) => str(q[k])) ||
    !['tags', 'concepts', 'keyTerms', 'correctAnswers', 'relatedQuestionIds'].every((k) => strings(q[k]))
  )
    return false
  if (
    ![
      'courseCode',
      'seriesSlug',
      'topicSlug',
      'hint',
      'explanation',
      'plainExplanation',
      'whyOthersWrong',
      'trap',
      'mnemonic',
      'sourceArticleUrl',
    ].every((k) => q[k] === null || str(q[k]))
  )
    return false
  if (
    !num(q.domainNumber) ||
    !num(q.difficulty) ||
    ![1, 2, 3].includes(q.difficulty) ||
    typeof q.reviewed !== 'boolean'
  )
    return false
  if (
    !Array.isArray(q.options) ||
    !q.options.length ||
    q.options.length > 100 ||
    !q.options.every(
      (o) =>
        record(o) &&
        str(o.label) &&
        str(o.text) &&
        (o.feedback === undefined || o.feedback === null || str(o.feedback)),
    )
  )
    return false
  if (q.optionAnalysis !== null && (!record(q.optionAnalysis) || !Object.values(q.optionAnalysis).every(str)))
    return false
  return (
    q.references === null ||
    (Array.isArray(q.references) && q.references.every((r) => record(r) && str(r.title) && str(r.url)))
  )
}
function attemptValid(a: unknown): a is Attempt {
  return (
    record(a) &&
    ['attemptId', 'runId', 'questionId', 'familyId', 'conceptId', 'contentVersion', 'questionHash'].every((k) =>
      safeId(a[k]),
    ) &&
    strings(a.answer) &&
    typeof a.correct === 'boolean' &&
    typeof a.hintUsed === 'boolean' &&
    num(a.answeredAt)
  )
}
export function parseSave(json: string, examCode: string): RpgSave {
  if (json.length > 10_000_000) throw new Error('Save is too large')
  const s: unknown = JSON.parse(json, (key, value) => {
    if (['__proto__', 'constructor', 'prototype'].includes(key)) throw new Error('Unsafe save key')
    return value
  })
  if (
    !record(s) ||
    s.schemaVersion !== 1 ||
    s.campaignVersion !== 1 ||
    s.examCode !== examCode ||
    !num(s.xp) ||
    !Number.isInteger(s.xp) ||
    !strings(s.rewardClaims) ||
    !strings(s.completedQuests) ||
    !Array.isArray(s.attempts) ||
    !s.attempts.every(attemptValid) ||
    !record(s.reviews)
  )
    throw new Error('Invalid RPG save')
  for (const [key, r] of Object.entries(s.reviews))
    if (
      !record(r) ||
      key !== r.familyId ||
      !['familyId', 'conceptId', 'contentVersion', 'questionHash'].every((k) => safeId(r[k])) ||
      !num(r.dueAt) ||
      !Number.isInteger(r.stage) ||
      Number(r.stage) < 0 ||
      Number(r.stage) > 4
    )
      throw new Error('Invalid review')
  const r = s.activeRun
  if (r !== null) {
    if (
      !record(r) ||
      !safeId(r.runId) ||
      !safeId(r.questId) ||
      !Array.isArray(r.questions) ||
      !r.questions.length ||
      r.questions.length > 100 ||
      !r.questions.every((q) => questionValid(q, examCode)) ||
      !Number.isInteger(r.index) ||
      Number(r.index) < 0 ||
      Number(r.index) >= r.questions.length ||
      !record(r.drafts) ||
      !Object.values(r.drafts).every(strings) ||
      !strings(r.hints) ||
      !Array.isArray(r.attempts) ||
      !r.attempts.every(attemptValid) ||
      !['active', 'completed'].includes(String(r.status)) ||
      !num(r.startedAt) ||
      !(r.completedAt === null || num(r.completedAt)) ||
      typeof r.victory !== 'boolean' ||
      typeof r.isReview !== 'boolean'
    )
      throw new Error('Invalid quest run')
    if (
      r.attempts.length < Number(r.index) ||
      r.attempts.length > Number(r.index) + 1 ||
      (r.status === 'completed' && r.attempts.length !== r.questions.length) ||
      new Set(r.questions.map((q) => q.familyId)).size !== r.questions.length
    )
      throw new Error('Invalid quest progress')
    const questions = r.questions
    const questionIds = new Set(questions.map((q) => q.id))
    if (
      questionIds.size !== questions.length ||
      !Object.keys(r.drafts).every((id) => questionIds.has(id)) ||
      !r.hints.every((id) => questionIds.has(id))
    )
      throw new Error('Invalid quest answers')
    if (
      !r.attempts.every(
        (a, i) =>
          a.runId === r.runId &&
          a.questionId === questions[i].id &&
          a.contentVersion === questions[i].contentVersion &&
          a.familyId === questions[i].familyId &&
          a.conceptId === questions[i].conceptId &&
          a.questionHash === questions[i].hash,
      )
    )
      throw new Error('Mismatched quest attempt')
  }
  return s as unknown as RpgSave
}
