import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

interface QuestionOption {
  label: string
  text: string
}

interface Question {
  id: string
  stem: string
  options: QuestionOption[]
  correctAnswers: string[]
  explanation: string | null
  whyOthersWrong: string | null
  hint: string | null
  trap: string | null
  mnemonic: string | null
  keyTerms: string[]
  difficulty: 1 | 2 | 3
  domain: string
  domainNumber: number
  [key: string]: unknown
}

const AWS_SERVICES = [
  'Amazon Bedrock', 'Amazon SageMaker', 'Amazon Comprehend', 'Amazon Transcribe',
  'Amazon Polly', 'Amazon Lex', 'Amazon Rekognition', 'Amazon Textract',
  'Amazon Translate', 'Amazon Kendra', 'Amazon Personalize', 'Amazon Forecast',
  'Amazon Q', 'Amazon CodeWhisperer', 'Amazon GuardDuty', 'Amazon Macie',
  'Amazon CloudWatch', 'Amazon CloudTrail', 'AWS IAM', 'AWS KMS',
  'AWS Artifact', 'AWS Config', 'AWS Lambda', 'Amazon S3',
  'Amazon DynamoDB', 'Amazon EC2', 'Amazon ECS', 'Amazon EKS',
  'AWS CloudFormation', 'AWS Glue', 'Amazon Athena', 'Amazon Redshift',
  'Amazon OpenSearch', 'AWS Step Functions', 'Amazon EventBridge',
  'Amazon SageMaker JumpStart', 'Amazon SageMaker Canvas',
  'Amazon SageMaker Data Wrangler', 'Amazon SageMaker Feature Store',
  'Amazon SageMaker Autopilot', 'Amazon SageMaker Clarify',
  'Amazon SageMaker Model Monitor', 'Amazon SageMaker Pipelines',
  'Amazon Bedrock Guardrails', 'Amazon Bedrock Agents', 'Amazon Bedrock Knowledge Bases',
  'AWS Trusted Advisor', 'AWS Well-Architected', 'AWS Organizations',
  'PartyRock', 'Amazon Route 53',
]

const ML_TERMS = [
  'Recall', 'Precision', 'F1', 'Accuracy', 'AUC', 'ROC', 'ROUGE', 'BLEU', 'RMSE', 'MAE',
  'overfitting', 'underfitting', '過擬合', '欠擬合', '過度擬合',
  'CNN', 'RNN', 'LSTM', 'GAN', 'Transformer', 'Attention',
  'supervised', 'unsupervised', '監督式', '非監督式', '強化學習',
  'classification', 'regression', 'clustering', '分類', '迴歸', '聚類',
  'embedding', 'tokenization', 'fine-tuning', '微調', 'pre-training', '預訓練',
  'RAG', 'ICL', 'in-context learning', 'few-shot', 'zero-shot',
  'prompt engineering', 'context window', 'token',
  'hallucination', '幻覺', 'bias', '偏差', 'fairness', '公平性',
  'gradient descent', 'learning rate', 'batch size', 'epoch',
  'dropout', 'regularization', 'L1', 'L2', 'early stopping', '早停法',
  'confusion matrix', 'cross-validation', 'feature engineering',
  'NLP', 'NLU', 'NLG', 'computer vision', 'CV',
  'Foundation Model', 'FM', 'LLM', 'diffusion', 'VAE',
  'inference', '推論', 'batch inference', 'real-time inference',
  'serverless', 'endpoint',
  'temperature', 'top-p', 'top-k', 'stop sequence',
  'responsible AI', '負責任 AI', 'explainability', '可解釋性',
  'compliance', '合規', 'governance', '治理',
  'data drift', 'model drift', 'concept drift',
  'agentic AI', 'MCP', 'context engineering',
  'model distillation', '模型蒸餾', 'prompt caching',
]

function extractKeyTerms(q: Question): string[] {
  const terms: string[] = []
  const text = q.stem + ' ' + q.options.map(o => o.text).join(' ')

  for (const svc of AWS_SERVICES) {
    if (text.includes(svc)) terms.push(svc)
  }

  for (const term of ML_TERMS) {
    const regex = new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i')
    if (regex.test(text) || text.includes(term)) {
      if (!terms.some(t => t.toLowerCase() === term.toLowerCase())) {
        terms.push(term)
      }
    }
  }

  if (terms.length > 4) return terms.slice(0, 4)
  return terms
}

function getCorrectOptionText(q: Question): string {
  const correct = q.options.find(o => q.correctAnswers.includes(o.label))
  return correct ? correct.text : ''
}

function getFirstWrongOption(q: Question): string {
  const wrong = q.options.find(o => !q.correctAnswers.includes(o.label))
  return wrong ? wrong.text : ''
}

function truncate(s: string, max: number): string {
  if (s.length <= max) return s
  // Try to break at a space or CJK boundary
  let cut = s.lastIndexOf(' ', max - 1)
  if (cut < max * 0.5) cut = max - 1
  return s.slice(0, cut).trimEnd() + '…'
}

function cleanOptionText(text: string): string {
  return text
    .replace(/[（(][^)）]*[)）]/g, '')
    .replace(/\s+/g, '')
    .trim()
}

function extractKeyPhrase(text: string, maxLen: number): string {
  const cleaned = text
    .replace(/\$[^$]+\$/g, '')
    .replace(/\*\*/g, '')
    .replace(/[（(][^)）]*[)）]/g, '')
    .trim()

  const firstSentence = cleaned.split(/[。.；;！!？?]/)[0].trim()
  return truncate(firstSentence, maxLen)
}

function generateHint(q: Question): string {
  const correctText = getCorrectOptionText(q)

  // Try to extract a short conceptual nudge from explanation
  if (q.explanation) {
    // Look for a quoted key concept
    const quoted = q.explanation.match(/「([^」]{2,12})」/)
    if (quoted) return `關鍵概念：${quoted[1]}`

    // Look for a "的定義是" or "用於" pattern
    const defn = q.explanation.match(/([一-鿿]{2,8})(?:的定義是|是指|用於|專門|負責)/)
    if (defn) return `想想「${defn[1]}」的用途`
  }

  // Use domain as hint category
  if (q.domainNumber > 0) {
    const domainHints: Record<number, string> = {
      1: '這是 ML 基礎概念題',
      2: '這是 GenAI 基礎題',
      3: '想想該用哪個 AWS 服務',
      4: '從負責任 AI 角度思考',
      5: '從安全與合規角度思考',
    }
    if (domainHints[q.domainNumber]) return domainHints[q.domainNumber]
  }

  return '從題幹最後兩句找關鍵字'
}

function generateTrap(q: Question): string {
  const wrongText = getFirstWrongOption(q)
  const correctText = getCorrectOptionText(q)

  if (wrongText && correctText) {
    const w = truncate(cleanOptionText(wrongText), 10)
    const c = truncate(cleanOptionText(correctText), 10)
    return `「${w}」易混淆，選「${c}」`
  }

  return '注意題幹的限定條件'
}

function generateMnemonic(q: Question): string {
  const correctText = getCorrectOptionText(q)
  const short = truncate(cleanOptionText(correctText), 10)

  // Try to find a key condition in the stem
  const stemKeyword = q.stem.match(/「([^」]{2,8})」/)
  if (stemKeyword) {
    return `${stemKeyword[1]} → ${short}`
  }

  // Use domain-based prefix
  const prefixes: Record<number, string> = {
    1: '基礎',
    2: 'GenAI',
    3: '應用',
    4: '負責任',
    5: '安全',
  }
  const prefix = prefixes[q.domainNumber] || ''
  return truncate(`${prefix}: ${short}`, 20)
}

function estimateDifficulty(q: Question): 1 | 2 | 3 {
  const stemLen = q.stem.length
  const hasScenario = /公司|企業|團隊|工程師|組織|機構|company|team|engineer|organization/i.test(q.stem)
  const optionTotalLen = q.options.reduce((s, o) => s + o.text.length, 0)
  const isMulti = q.correctAnswers.length > 1
  const hasComparison = /比較|差異|區別|不同|哪一種最|最適合|最佳|differ|compare|best/i.test(q.stem)

  let score = 0
  if (stemLen > 200) score += 2
  else if (stemLen > 100) score += 1
  if (hasScenario) score += 1
  if (optionTotalLen > 200) score += 1
  if (isMulti) score += 1
  if (hasComparison) score += 1

  if (score >= 3) return 3
  if (score >= 1) return 2
  return 1
}

// --- Main ---

const questionsPath = resolve(process.cwd(), 'data/questions.json')
const questions: Question[] = JSON.parse(readFileSync(questionsPath, 'utf-8'))

let hintCount = 0
let trapCount = 0
let mnemonicCount = 0
let keyTermsCount = 0
let difficultyCount = 0

for (const q of questions) {
  if (!q.hint) {
    q.hint = generateHint(q)
    hintCount++
  }

  if (!q.trap) {
    q.trap = generateTrap(q)
    trapCount++
  }

  if (!q.mnemonic) {
    q.mnemonic = generateMnemonic(q)
    mnemonicCount++
  }

  if (!q.keyTerms || q.keyTerms.length === 0) {
    q.keyTerms = extractKeyTerms(q)
    keyTermsCount++
  }

  if (q.difficulty === 1) {
    const estimated = estimateDifficulty(q)
    if (estimated > 1) {
      q.difficulty = estimated
      difficultyCount++
    }
  }
}

writeFileSync(questionsPath, JSON.stringify(questions, null, 2))

console.log(`=== Metadata Enrichment ===`)
console.log(`Total questions: ${questions.length}`)
console.log(`Hints generated: ${hintCount}`)
console.log(`Traps generated: ${trapCount}`)
console.log(`Mnemonics generated: ${mnemonicCount}`)
console.log(`Key terms extracted: ${keyTermsCount}`)
console.log(`Difficulty upgraded: ${difficultyCount}`)
console.log(`\nWritten to ${questionsPath}`)

// Verify coverage
const noHint = questions.filter(q => !q.hint).length
const noTrap = questions.filter(q => !q.trap).length
const noMnem = questions.filter(q => !q.mnemonic).length
const noKey = questions.filter(q => !q.keyTerms || q.keyTerms.length === 0).length
console.log(`\n=== Coverage After ===`)
console.log(`Missing hint: ${noHint}`)
console.log(`Missing trap: ${noTrap}`)
console.log(`Missing mnemonic: ${noMnem}`)
console.log(`Missing keyTerms: ${noKey}`)

const diffBreakdown = { 1: 0, 2: 0, 3: 0 }
for (const q of questions) diffBreakdown[q.difficulty]++
console.log(`Difficulty: ⭐${diffBreakdown[1]} ⭐⭐${diffBreakdown[2]} ⭐⭐⭐${diffBreakdown[3]}`)
