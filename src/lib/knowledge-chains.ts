export interface KnowledgeChain {
  domain: string
  domainNumber: number
  chain: string
}

export const AIF_C01_CHAINS: KnowledgeChain[] = [
  {
    domain: 'Fundamentals of AI and ML',
    domainNumber: 1,
    chain:
      'AI/ML 基礎 → 監督式/非監督式/強化學習 → 分類/迴歸/聚類 → Precision/Recall/F1 → 過擬合/欠擬合 → SageMaker/Comprehend/Transcribe/Polly',
  },
  {
    domain: 'Fundamentals of Generative AI',
    domainNumber: 2,
    chain:
      'Token → Embedding → Transformer → Foundation Model → 預訓練/微調/ICL/RAG → Prompt Engineering → Context Window → Token 計價 → 幻覺偵測',
  },
  {
    domain: 'Applications of Foundation Models',
    domainNumber: 3,
    chain:
      'FM 選型 → Bedrock → Agent/AgentCore → MCP → RAG Pipeline → Guardrails → 模型蒸餾 → 批次/即時推論 → 成本優化',
  },
  {
    domain: 'Guidelines for Responsible AI',
    domainNumber: 4,
    chain: '偏差/公平性 → 可解釋性 → 透明度 → 人類監督 → 社會責任 → AWS AI Service Cards',
  },
  {
    domain: 'Security, Compliance, and Governance for AI Solutions',
    domainNumber: 5,
    chain: 'IAM → 資料加密 → VPC → CloudTrail → Artifact → 合規框架 → 資料治理 → 模型治理',
  },
]

export function getKnowledgeChains(examCode: string): KnowledgeChain[] {
  if (examCode === 'AIF-C01') return AIF_C01_CHAINS
  return []
}

export function getChainForDomain(examCode: string, domain: string): KnowledgeChain | undefined {
  return getKnowledgeChains(examCode).find((c) => c.domain === domain)
}
