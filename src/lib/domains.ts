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
  'CCAO-F': {
    1: { en: 'Output Evaluation and Validation', 'zh-TW': '輸出評估與驗證' },
    2: { en: 'Workflow Integration and Solution Design', 'zh-TW': '工作流程整合與解決方案設計' },
    3: { en: 'Governance, Risk, and Responsible Use', 'zh-TW': '治理、風險與負責任使用' },
    4: { en: 'Prompting and Task Execution', 'zh-TW': '提示詞與任務執行' },
    5: { en: 'Product and Model Selection', 'zh-TW': '產品與模型選擇' },
    6: { en: 'Configuration and Knowledge Management', 'zh-TW': '組態與知識管理' },
    7: { en: 'Troubleshooting and Optimization', 'zh-TW': '疑難排解與最佳化' },
  },
  'NCA-GENL': {
    1: { en: 'Core Machine Learning and AI Knowledge', 'zh-TW': '機器學習與 AI 核心知識' },
    2: { en: 'Software Development', 'zh-TW': '軟體開發' },
    3: { en: 'Experimentation', 'zh-TW': '實驗設計' },
    4: { en: 'Data Analysis', 'zh-TW': '資料分析' },
    5: { en: 'Trustworthy AI', 'zh-TW': '可信賴 AI' },
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
