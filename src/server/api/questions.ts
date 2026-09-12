import { createServerFn } from '@tanstack/react-start'
import { canonicalizeDomain, type DomainInfo, getDomainLabel } from '../../lib/domains.ts'
import type { Question, QuestionOption } from '../../lib/question-types.ts'
import { getDB } from '../d1.ts'

interface QuestionRow {
  id: string
  hash: string
  exam_code: string
  lang: string
  domain: string
  domain_number: number
  difficulty: number
  type: string
  stem: string
  options: string
  correct_answers: string
  hint: string | null
  explanation: string | null
  why_others_wrong: string | null
  trap: string | null
  mnemonic: string | null
  key_terms: string | null
  tags: string | null
  source_file: string | null
  generated_by: string
  reviewed: number
  plain_explanation: string | null
  option_analysis: string | null
  references_json: string | null
}

function rowToQuestion(row: QuestionRow): Question {
  const domainInfo = canonicalizeDomain(row.exam_code, row.domain, row.domain_number, row.lang)
  return {
    id: row.id,
    hash: row.hash,
    track: 'certification',
    examCode: row.exam_code,
    courseCode: null,
    seriesSlug: null,
    topicSlug: null,
    ...domainInfo,
    difficulty: row.difficulty as 1 | 2 | 3,
    type: row.type as 'single' | 'multi' | 'ordering' | 'matching',
    questionStyle: 'other',
    tags: row.tags ? JSON.parse(row.tags) : [],
    concepts: [],
    stem: row.stem,
    keyTerms: row.key_terms ? JSON.parse(row.key_terms) : [],
    options: JSON.parse(row.options) as QuestionOption[],
    correctAnswers: JSON.parse(row.correct_answers) as string[],
    hint: row.hint,
    explanation: row.explanation,
    plainExplanation: row.plain_explanation,
    optionAnalysis: row.option_analysis ? JSON.parse(row.option_analysis) : null,
    whyOthersWrong: row.why_others_wrong,
    trap: row.trap,
    mnemonic: row.mnemonic,
    references: row.references_json ? JSON.parse(row.references_json) : null,
    relatedQuestionIds: [],
    sourceArticleUrl: null,
    sourceFile: row.source_file || '',
    generatedBy: (row.generated_by || 'human') as 'human' | 'ai',
    reviewed: row.reviewed === 1,
    lang: row.lang as 'en' | 'zh-TW',
  }
}

export const fetchExamQuestions = createServerFn({ method: 'GET' })
  .validator((input: { examCode: string; lang: string }) => input)
  .handler(async ({ data }) => {
    const db = await getDB()
    if (!db) return { ok: false as const, questions: [] as Question[] }
    const result = await db
      .prepare(
        `SELECT * FROM questions
         WHERE id IN (
           SELECT MIN(id) FROM questions
           WHERE exam_code = ? AND lang = ? AND domain_number > 0
           GROUP BY hash
         )`,
      )
      .bind(data.examCode, data.lang)
      .all<QuestionRow>()
    return { ok: true as const, questions: result.results.map(rowToQuestion) }
  })

export const fetchDomainInfo = createServerFn({ method: 'GET' })
  .validator((input: { examCode: string; lang: string }) => input)
  .handler(async ({ data }) => {
    const db = await getDB()
    if (!db) return { ok: false as const, domains: [] as DomainInfo[] }
    const result = await db
      .prepare(
        `SELECT domain_number, MIN(domain) AS fallback_label, COUNT(DISTINCT hash) AS cnt
         FROM questions
         WHERE exam_code = ? AND lang = ? AND domain_number > 0
         GROUP BY domain_number
         ORDER BY domain_number`,
      )
      .bind(data.examCode, data.lang)
      .all<{ domain_number: number; fallback_label: string; cnt: number }>()
    const domains: DomainInfo[] = result.results.map(
      (row: { domain_number: number; fallback_label: string; cnt: number }) => ({
        domainNumber: row.domain_number,
        label: getDomainLabel(data.examCode, row.domain_number, data.lang, row.fallback_label),
        count: row.cnt,
      }),
    )
    return { ok: true as const, domains }
  })

export const fetchExamSet = createServerFn({ method: 'GET' })
  .validator(
    (input: {
      examCode: string
      lang: string
      mode: 'realistic' | 'diagnostic' | 'random'
      domainWeights?: { domainNumber: number; count: number }[]
      count?: number
    }) => input,
  )
  .handler(async ({ data }) => {
    const db = await getDB()
    if (!db) return { ok: false as const, questions: [] as Question[] }

    if (data.mode === 'diagnostic') {
      const domains = await db
        .prepare(
          `SELECT DISTINCT domain_number FROM questions
           WHERE exam_code = ? AND lang = ? AND domain_number > 0
           ORDER BY domain_number`,
        )
        .bind(data.examCode, data.lang)
        .all<{ domain_number: number }>()
      const questions: Question[] = []
      for (const d of domains.results) {
        const batch = await db
          .prepare(
            `SELECT * FROM questions
             WHERE id IN (
               SELECT MIN(id) FROM questions
               WHERE exam_code = ? AND lang = ? AND domain_number = ?
               GROUP BY hash
             )
             ORDER BY RANDOM() LIMIT 4`,
          )
          .bind(data.examCode, data.lang, d.domain_number)
          .all<QuestionRow>()
        questions.push(...batch.results.map(rowToQuestion))
      }
      return { ok: true as const, questions }
    }

    if (data.mode === 'realistic' && data.domainWeights) {
      const questions: Question[] = []
      for (const w of data.domainWeights) {
        const batch = await db
          .prepare(
            `SELECT * FROM questions
             WHERE id IN (
               SELECT MIN(id) FROM questions
               WHERE exam_code = ? AND lang = ? AND domain_number = ?
               GROUP BY hash
             )
             ORDER BY RANDOM() LIMIT ?`,
          )
          .bind(data.examCode, data.lang, w.domainNumber, w.count)
          .all<QuestionRow>()
        questions.push(...batch.results.map(rowToQuestion))
      }
      return { ok: true as const, questions }
    }

    const count = data.count || 65
    const result = await db
      .prepare(
        `SELECT * FROM questions
         WHERE id IN (
           SELECT MIN(id) FROM questions
           WHERE exam_code = ? AND lang = ? AND domain_number > 0
           GROUP BY hash
         )
         ORDER BY RANDOM() LIMIT ?`,
      )
      .bind(data.examCode, data.lang, count)
      .all<QuestionRow>()
    return { ok: true as const, questions: result.results.map(rowToQuestion) }
  })

export const fetchFilteredQuestions = createServerFn({ method: 'GET' })
  .validator(
    (input: { examCode: string; lang: string; domainNumbers?: number[]; difficulties?: number[]; count?: number }) =>
      input,
  )
  .handler(async ({ data }) => {
    const db = await getDB()
    if (!db) return { ok: false as const, questions: [] as Question[] }

    let subquery = 'SELECT MIN(id) FROM questions WHERE exam_code = ? AND lang = ? AND domain_number > 0'
    const bindings: (string | number)[] = [data.examCode, data.lang]

    if (data.domainNumbers && data.domainNumbers.length > 0) {
      const placeholders = data.domainNumbers.map(() => '?').join(', ')
      subquery += ` AND domain_number IN (${placeholders})`
      bindings.push(...data.domainNumbers)
    }

    if (data.difficulties && data.difficulties.length > 0) {
      const placeholders = data.difficulties.map(() => '?').join(', ')
      subquery += ` AND difficulty IN (${placeholders})`
      bindings.push(...data.difficulties)
    }

    let sql = `SELECT * FROM questions WHERE id IN (${subquery} GROUP BY hash) ORDER BY RANDOM()`

    if (data.count) {
      sql += ' LIMIT ?'
      bindings.push(data.count)
    }

    const stmt = db.prepare(sql)
    const result = await stmt.bind(...bindings).all<QuestionRow>()
    return { ok: true as const, questions: result.results.map(rowToQuestion) }
  })

export const fetchQuestionsByIds = createServerFn({ method: 'GET' })
  .validator((input: { ids: string[] }) => input)
  .handler(async ({ data }) => {
    const db = await getDB()
    if (!db || data.ids.length === 0) return { ok: false as const, questions: [] as Question[] }

    const placeholders = data.ids.map(() => '?').join(', ')
    const result = await db
      .prepare(
        `SELECT * FROM questions
         WHERE id IN (
           SELECT MIN(id) FROM questions WHERE id IN (${placeholders}) GROUP BY hash
         )`,
      )
      .bind(...data.ids)
      .all<QuestionRow>()
    return { ok: true as const, questions: result.results.map(rowToQuestion) }
  })
