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
  'aip-c01': {
    code: 'AIP-C01',
    name: 'AWS Certified Generative AI Developer – Professional',
    shortName: 'AWS GenAI Pro',
    vendor: 'AWS',
    questionCount: 65,
    timeLimitMin: 170,
    prepGuideUrl: null,
    domainWeights: [
      { domainNumber: 1, count: 20 },
      { domainNumber: 2, count: 17 },
      { domainNumber: 3, count: 13 },
      { domainNumber: 4, count: 8 },
      { domainNumber: 5, count: 7 },
    ],
  },
  pmle: {
    code: 'PMLE',
    name: 'Google Cloud Professional Machine Learning Engineer',
    shortName: 'Google MLE',
    vendor: 'Google',
    questionCount: 55,
    timeLimitMin: 120,
    prepGuideUrl: null,
    domainWeights: [
      { domainNumber: 1, count: 9 },
      { domainNumber: 2, count: 10 },
      { domainNumber: 3, count: 12 },
      { domainNumber: 4, count: 10 },
      { domainNumber: 5, count: 7 },
      { domainNumber: 6, count: 7 },
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
  'ncp-aai': {
    code: 'NCP-AAI',
    name: 'NVIDIA Certified Professional Agentic AI',
    shortName: 'NVIDIA Agentic',
    vendor: 'NVIDIA',
    questionCount: 65,
    timeLimitMin: 120,
    prepGuideUrl: null,
    domainWeights: [
      { domainNumber: 1, count: 10 },
      { domainNumber: 2, count: 9 },
      { domainNumber: 3, count: 8 },
      { domainNumber: 4, count: 7 },
      { domainNumber: 5, count: 6 },
      { domainNumber: 6, count: 6 },
      { domainNumber: 7, count: 6 },
      { domainNumber: 8, count: 5 },
      { domainNumber: 9, count: 4 },
      { domainNumber: 10, count: 4 },
    ],
  },
  'ncp-genl': {
    code: 'NCP-GENL',
    name: 'NVIDIA Certified Professional Generative AI LLMs',
    shortName: 'NVIDIA GenAI Pro',
    vendor: 'NVIDIA',
    questionCount: 65,
    timeLimitMin: 120,
    prepGuideUrl: null,
    domainWeights: [
      { domainNumber: 1, count: 13 },
      { domainNumber: 2, count: 13 },
      { domainNumber: 3, count: 13 },
      { domainNumber: 4, count: 13 },
      { domainNumber: 5, count: 13 },
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
