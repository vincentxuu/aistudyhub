import type { RpgQuestion } from './engine.ts'

export type { RpgQuestion } from './engine.ts'
export type RpgLanguage = 'zh-TW' | 'en'
export type RpgText = Record<RpgLanguage, string>

export interface RpgRegion {
  id: number
  name: RpgText
  domain: RpgText
  available: boolean
}

export interface RpgQuest {
  id: string
  domainNumber: number
  conceptId: string
  title: RpgText
  description: RpgText
  npc: RpgText
  familyIds: string[]
}

export const RPG_REGIONS: RpgRegion[] = [
  {
    id: 1,
    name: { 'zh-TW': '起源草原', en: 'Origin Meadows' },
    domain: { 'zh-TW': 'AI 與 ML 基礎', en: 'Fundamentals of AI and ML' },
    available: true,
  },
  {
    id: 2,
    name: { 'zh-TW': '生成秘林', en: 'Generative Grove' },
    domain: { 'zh-TW': '生成式 AI 基礎', en: 'Fundamentals of GenAI' },
    available: false,
  },
  {
    id: 3,
    name: { 'zh-TW': '應用工坊', en: 'Application Workshop' },
    domain: { 'zh-TW': '基礎模型應用', en: 'Applications of Foundation Models' },
    available: false,
  },
  {
    id: 4,
    name: { 'zh-TW': '公平議院', en: 'Fairness Council' },
    domain: { 'zh-TW': '負責任 AI 指引', en: 'Guidelines for Responsible AI' },
    available: false,
  },
  {
    id: 5,
    name: { 'zh-TW': '治理堡壘', en: 'Governance Citadel' },
    domain: { 'zh-TW': 'AI 安全、合規與治理', en: 'Security, Compliance, and Governance' },
    available: false,
  },
]

export const RPG_QUESTS: RpgQuest[] = [
  {
    id: 'forest-learning',
    domainNumber: 1,
    conceptId: 'learning-paradigms',
    title: { 'zh-TW': '辨認學習的足跡', en: 'Recognize the Learning Trails' },
    description: {
      'zh-TW': '協助森林嚮導分辨資料中的標籤與模式，找回三枚路標。',
      en: 'Help the forest guide distinguish labels and patterns to recover three trail markers.',
    },
    npc: { 'zh-TW': '森林嚮導・露米', en: 'Lumi, Forest Guide' },
    familyIds: ['aif-learning-supervised', 'aif-learning-clustering', 'aif-learning-semi-supervised'],
  },
  {
    id: 'forest-lifecycle',
    domainNumber: 1,
    conceptId: 'model-lifecycle',
    title: { 'zh-TW': '修復預測觀測站', en: 'Restore the Prediction Observatory' },
    description: {
      'zh-TW': '觀測站的模型出了狀況。釐清訓練、推論與泛化，讓訊號再次亮起。',
      en: 'The observatory needs help. Distinguish training, inference, and generalization to restore its signal.',
    },
    npc: { 'zh-TW': '觀測員・伊恩', en: 'Ian, Observatory Keeper' },
    familyIds: ['aif-lifecycle-training', 'aif-lifecycle-batch', 'aif-lifecycle-overfitting'],
  },
  {
    id: 'forest-services',
    domainNumber: 1,
    conceptId: 'ai-services',
    title: { 'zh-TW': '找回聲音與文字', en: 'Recover Voices and Words' },
    description: {
      'zh-TW': '圖書館需要重新聽見、朗讀並理解文字。依照需求選出合適的 AWS 服務。',
      en: 'The library needs to hear, read aloud, and understand text again. Choose AWS services for each need.',
    },
    npc: { 'zh-TW': '圖書員・米拉', en: 'Mira, Librarian' },
    familyIds: ['aif-service-transcribe', 'aif-service-polly', 'aif-service-comprehend'],
  },
]

export function getAvailableRpgQuests(questions: readonly RpgQuestion[]): RpgQuest[] {
  const families = new Set(questions.map((question) => question.familyId))
  return RPG_QUESTS.filter((quest) => quest.familyIds.every((familyId) => families.has(familyId)))
}
