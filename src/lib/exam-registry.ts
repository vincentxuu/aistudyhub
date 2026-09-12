export interface ExamConfig {
  code: string
  name: string
  shortName: string
  vendor: string
  questionCount: number
  timeLimitMin: number
  prepGuideUrl: string | null
  domainWeights: { domainNumber: number; count: number }[]
}

export const EXAM_REGISTRY: Record<string, ExamConfig> = {
  'aif-c01': {
    code: 'AIF-C01',
    name: 'AWS Certified AI Practitioner',
    shortName: 'AWS',
    vendor: 'AWS',
    questionCount: 65,
    timeLimitMin: 90,
    prepGuideUrl: 'https://quidproquo.cc/posts/ai/2026-08-18-aws-aif-c01-prep-guide/',
    domainWeights: [
      { domainNumber: 1, count: 13 },
      { domainNumber: 2, count: 16 },
      { domainNumber: 3, count: 18 },
      { domainNumber: 4, count: 9 },
      { domainNumber: 5, count: 9 },
    ],
  },
  'ccao-f': {
    code: 'CCAO-F',
    name: 'Claude Certified Associate',
    shortName: 'Claude',
    vendor: 'Anthropic',
    questionCount: 60,
    timeLimitMin: 120,
    prepGuideUrl: 'https://quidproquo.cc/posts/ai/2026-08-18-claude-certified-associate-prep-guide/',
    domainWeights: [
      { domainNumber: 1, count: 13 },
      { domainNumber: 2, count: 10 },
      { domainNumber: 3, count: 9 },
      { domainNumber: 4, count: 8 },
      { domainNumber: 5, count: 7 },
      { domainNumber: 6, count: 7 },
      { domainNumber: 7, count: 6 },
    ],
  },
  'nca-genl': {
    code: 'NCA-GENL',
    name: 'NVIDIA Generative AI LLMs Associate',
    shortName: 'NVIDIA',
    vendor: 'NVIDIA',
    questionCount: 50,
    timeLimitMin: 60,
    prepGuideUrl: 'https://quidproquo.cc/posts/ai/2026-08-18-nvidia-nca-genl-prep-guide/',
    domainWeights: [
      { domainNumber: 1, count: 15 },
      { domainNumber: 2, count: 12 },
      { domainNumber: 3, count: 11 },
      { domainNumber: 4, count: 7 },
      { domainNumber: 5, count: 5 },
    ],
  },
  'ai-103': {
    code: 'AI-103',
    name: 'Azure AI Apps and Agents Developer',
    shortName: 'Azure',
    vendor: 'Microsoft',
    questionCount: 50,
    timeLimitMin: 120,
    prepGuideUrl: 'https://quidproquo.cc/posts/ai/2026-08-18-microsoft-ai-103-prep-guide/',
    domainWeights: [
      { domainNumber: 1, count: 14 },
      { domainNumber: 2, count: 17 },
      { domainNumber: 3, count: 7 },
      { domainNumber: 4, count: 6 },
      { domainNumber: 5, count: 6 },
    ],
  },
}

export function getExamConfig(code: string): ExamConfig | undefined {
  return EXAM_REGISTRY[code.toLowerCase()]
}

export function getAllExamCodes(): string[] {
  return Object.keys(EXAM_REGISTRY)
}
