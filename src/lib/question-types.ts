export interface QuestionOption {
  label: string
  text: string
}

export interface Question {
  id: string
  hash: string

  track: 'certification' | 'course' | 'series'
  examCode: string | null
  courseCode: string | null
  seriesSlug: string | null
  topicSlug: string | null

  domain: string
  domainNumber: number
  difficulty: 1 | 2 | 3
  type: 'single' | 'multi' | 'ordering' | 'matching'
  questionStyle: string
  tags: string[]
  concepts: string[]

  stem: string
  keyTerms: string[]
  options: QuestionOption[]
  correctAnswers: string[]
  hint: string | null
  explanation: string | null
  whyOthersWrong: string | null
  trap: string | null
  mnemonic: string | null

  relatedQuestionIds: string[]
  sourceArticleUrl: string | null

  sourceFile: string
  generatedBy: 'human' | 'ai'
  reviewed: boolean
  lang: 'en' | 'zh-TW'
}

export type Format = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'I'
