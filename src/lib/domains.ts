export interface DomainInfo {
  domainNumber: number
  label: string
  count: number
}

export type DomainLocale = 'en' | 'zh-TW'
type LocalizedLabel = Record<DomainLocale, string>

export const DOMAIN_LABELS: Record<string, Record<number, LocalizedLabel>> = {
  'AIF-C01': {
    1: { en: 'Fundamentals of AI and ML', 'zh-TW': 'AI 與 ML 基礎' },
    2: { en: 'Fundamentals of Generative AI', 'zh-TW': '生成式 AI 基礎' },
    3: { en: 'Applications of Foundation Models', 'zh-TW': '基礎模型的應用' },
    4: { en: 'Guidelines for Responsible AI', 'zh-TW': '負責任 AI 指引' },
    5: {
      en: 'Security, Compliance, and Governance for AI Solutions',
      'zh-TW': 'AI 解決方案的安全、合規與治理',
    },
  },
  'AIP-C01': {
    1: {
      en: 'Foundation Model Integration, Data Management, and Compliance',
      'zh-TW': '基礎模型整合、資料管理與合規',
    },
    2: { en: 'Implementation and Integration', 'zh-TW': '實作與整合' },
    3: { en: 'AI Safety, Security, and Governance', 'zh-TW': 'AI 安全、資安與治理' },
    4: { en: 'Operational Efficiency and Optimization', 'zh-TW': '營運效率與最佳化' },
    5: { en: 'Testing, Validation, and Troubleshooting', 'zh-TW': '測試、驗證與疑難排解' },
  },
  PMLE: {
    1: { en: 'Architecting Low-Code AI Solutions', 'zh-TW': '低程式碼 AI 解決方案架構' },
    2: { en: 'Scaling Prototypes into ML Models', 'zh-TW': '原型擴展為 ML 模型' },
    3: { en: 'Developing ML Models', 'zh-TW': 'ML 模型開發' },
    4: { en: 'Automating ML Pipelines and MLOps', 'zh-TW': 'ML 管線自動化與 MLOps' },
    5: { en: 'Deploying and Serving Models', 'zh-TW': '模型部署與服務' },
    6: { en: 'Monitoring, Optimization, and Responsible AI', 'zh-TW': '監控、最佳化與負責任 AI' },
  },
  'NCA-GENL': {
    1: { en: 'Core Machine Learning and AI Knowledge', 'zh-TW': '機器學習與 AI 核心知識' },
    2: { en: 'Software Development', 'zh-TW': '軟體開發' },
    3: { en: 'Experimentation', 'zh-TW': '實驗設計' },
    4: { en: 'Data Analysis', 'zh-TW': '資料分析' },
    5: { en: 'Trustworthy AI', 'zh-TW': '可信賴 AI' },
  },
  'NCP-AAI': {
    1: { en: 'Agent Architecture and Design', 'zh-TW': '代理架構與設計' },
    2: { en: 'Agent Development', 'zh-TW': '代理開發' },
    3: { en: 'Evaluation and Tuning', 'zh-TW': '評估與調校' },
    4: { en: 'Deployment and Scaling', 'zh-TW': '部署與擴展' },
    5: { en: 'Cognition, Planning, and Memory', 'zh-TW': '認知、規劃與記憶' },
    6: { en: 'Knowledge Integration and Data Handling', 'zh-TW': '知識整合與資料處理' },
    7: { en: 'NVIDIA Platform Implementation', 'zh-TW': 'NVIDIA 平台實作' },
    8: { en: 'Run, Monitor, and Maintain', 'zh-TW': '執行、監控與維護' },
    9: { en: 'Safety, Ethics, and Compliance', 'zh-TW': '安全、倫理與合規' },
    10: { en: 'Human-AI Interaction and Oversight', 'zh-TW': '人機互動與監督' },
  },
  'NCP-GENL': {
    1: { en: 'LLM Foundations and Prompting', 'zh-TW': 'LLM 基礎與提示詞' },
    2: { en: 'Data Preparation and Fine-Tuning', 'zh-TW': '資料準備與微調' },
    3: { en: 'Optimization and Acceleration', 'zh-TW': '最佳化與加速' },
    4: { en: 'Deployment and Monitoring', 'zh-TW': '部署與監控' },
    5: { en: 'Evaluation and Responsible AI', 'zh-TW': '評估與負責任 AI' },
  },
  'AI-901': {
    1: { en: 'Identify AI Concepts and Capabilities', 'zh-TW': '辨識 AI 概念與能力' },
    2: { en: 'Implement AI Solutions by Using Microsoft Foundry', 'zh-TW': '使用 Microsoft Foundry 實作 AI 解決方案' },
  },
  'MLA-C02': {
    1: { en: 'Data Preparation for Machine Learning', 'zh-TW': '機器學習的資料準備' },
    2: { en: 'ML Model Development', 'zh-TW': 'ML 模型開發' },
    3: { en: 'Deployment and Orchestration of ML Workflows', 'zh-TW': 'ML 工作流程的部署與編排' },
    4: { en: 'ML Solution Monitoring, Maintenance, and Security', 'zh-TW': 'ML 解決方案的監控、維護與安全' },
  },
  'AI-103': {
    1: { en: 'Plan and Manage an Azure AI Solution', 'zh-TW': '規劃與管理 Azure AI 解決方案' },
    2: {
      en: 'Implement Generative AI and Agentic Solutions',
      'zh-TW': '實作生成式 AI 與代理型解決方案',
    },
    3: { en: 'Implement Computer Vision Solutions', 'zh-TW': '實作電腦視覺解決方案' },
    4: { en: 'Implement Text Analysis Solutions', 'zh-TW': '實作文字分析解決方案' },
    5: { en: 'Implement Information Extraction Solutions', 'zh-TW': '實作資訊擷取解決方案' },
  },
}

function normalizeDomainAlias(domain: string): string {
  return domain
    .normalize('NFKC')
    .replace(/^domain\s+\d+\s*[-—:：]?\s*/i, '')
    .replace(/[（(].*?[)）]\s*$/, '')
    .replace(/，/g, ',')
    .replace(/\s*,\s*/g, ',')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
}

const DOMAIN_ALIASES = new Map<string, Map<string, number>>(
  Object.entries(DOMAIN_LABELS).map(([examCode, domains]) => {
    const aliases = new Map<string, number>()
    for (const [domainNumber, labels] of Object.entries(domains)) {
      for (const label of Object.values(labels)) {
        aliases.set(normalizeDomainAlias(label), Number(domainNumber))
      }
    }
    return [examCode, aliases]
  }),
)

for (const [alias, domainNumber] of [
  ['Fundamentals of GenAI', 2],
  ['GenAI 基礎', 2],
  ['負責任 AI', 4],
  ['Security, Compliance and Governance', 5],
  ['Security, Compliance, and Governance', 5],
  ['Security, Compliance and Governance for AI Solutions', 5],
  ['安全、合規與治理', 5],
] as const) {
  DOMAIN_ALIASES.get('AIF-C01')?.set(normalizeDomainAlias(alias), domainNumber)
}

export function resolveDomainNumber(examCode: string, domain: string | undefined, domainNumber?: number): number {
  const code = examCode.toUpperCase()
  const configuredDomains = DOMAIN_LABELS[code]
  if (domainNumber && (!configuredDomains || configuredDomains[domainNumber])) return domainNumber
  if (!domain) return 0
  return DOMAIN_ALIASES.get(code)?.get(normalizeDomainAlias(domain)) ?? 0
}

export function getDomainLabel(examCode: string, domainNumber: number, lang: string, fallbackLabel?: string): string {
  const locale: DomainLocale = lang === 'zh-TW' ? 'zh-TW' : 'en'
  const configured = DOMAIN_LABELS[examCode.toUpperCase()]?.[domainNumber]?.[locale]
  if (configured) return configured

  const fallback = fallbackLabel?.trim()
  if (fallback && fallback.toLowerCase() !== 'unknown') return fallback
  return `Domain ${domainNumber}`
}

export function canonicalizeDomain(
  examCode: string,
  domain: string | undefined,
  domainNumber: number | undefined,
  lang: string,
): { domain: string; domainNumber: number } {
  const resolvedNumber = resolveDomainNumber(examCode, domain, domainNumber)
  return {
    domain: resolvedNumber > 0 ? getDomainLabel(examCode, resolvedNumber, lang, domain) : 'Unknown',
    domainNumber: resolvedNumber,
  }
}
