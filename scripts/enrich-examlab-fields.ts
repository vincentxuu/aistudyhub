/**
 * Enrich questions with ExamLab-style fields:
 * - feedback: per-option short verdict (extracted from explanation/whyOthersWrong)
 * - optionAnalysis: structured A/B/C/D analysis
 * - references: official documentation links based on key terms
 * - plainExplanation: left null (requires AI)
 *
 * Usage: npx tsx scripts/enrich-examlab-fields.ts [--dry-run]
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

interface QuestionOption {
  label: string
  text: string
  feedback?: string | null
}

interface Reference {
  title: string
  url: string
}

interface Question {
  id: string
  stem: string
  examCode: string | null
  options: QuestionOption[]
  correctAnswers: string[]
  explanation: string | null
  whyOthersWrong: string | null
  plainExplanation?: string | null
  optionAnalysis?: Record<string, string> | null
  references?: Reference[] | null
  domain: string
  domainNumber: number
  keyTerms: string[]
  [key: string]: unknown
}

// --- Reference URL mapping by service/concept ---
const REFERENCE_MAP: Record<string, Reference> = {
  'Amazon Bedrock': {
    title: 'Amazon Bedrock User Guide',
    url: 'https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html',
  },
  'Bedrock Guardrails': {
    title: 'Amazon Bedrock Guardrails',
    url: 'https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html',
  },
  'Bedrock Agents': {
    title: 'Amazon Bedrock Agents',
    url: 'https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html',
  },
  'Bedrock Knowledge Bases': {
    title: 'Amazon Bedrock Knowledge Bases',
    url: 'https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html',
  },
  'Amazon SageMaker': {
    title: 'Amazon SageMaker Developer Guide',
    url: 'https://docs.aws.amazon.com/sagemaker/latest/dg/whatis.html',
  },
  'SageMaker JumpStart': {
    title: 'SageMaker JumpStart',
    url: 'https://docs.aws.amazon.com/sagemaker/latest/dg/studio-jumpstart.html',
  },
  'SageMaker Canvas': {
    title: 'SageMaker Canvas',
    url: 'https://docs.aws.amazon.com/sagemaker/latest/dg/canvas.html',
  },
  'SageMaker Clarify': {
    title: 'SageMaker Clarify',
    url: 'https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-fairness-and-explainability.html',
  },
  'SageMaker Model Monitor': {
    title: 'SageMaker Model Monitor',
    url: 'https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html',
  },
  'SageMaker Autopilot': {
    title: 'SageMaker Autopilot',
    url: 'https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-automate-model-development.html',
  },
  'Amazon Comprehend': {
    title: 'Amazon Comprehend Developer Guide',
    url: 'https://docs.aws.amazon.com/comprehend/latest/dg/what-is.html',
  },
  'Amazon Transcribe': {
    title: 'Amazon Transcribe Developer Guide',
    url: 'https://docs.aws.amazon.com/transcribe/latest/dg/what-is.html',
  },
  'Amazon Polly': {
    title: 'Amazon Polly Developer Guide',
    url: 'https://docs.aws.amazon.com/polly/latest/dg/what-is.html',
  },
  'Amazon Lex': {
    title: 'Amazon Lex Developer Guide',
    url: 'https://docs.aws.amazon.com/lexv2/latest/dg/what-is.html',
  },
  'Amazon Rekognition': {
    title: 'Amazon Rekognition Developer Guide',
    url: 'https://docs.aws.amazon.com/rekognition/latest/dg/what-is.html',
  },
  'Amazon Textract': {
    title: 'Amazon Textract Developer Guide',
    url: 'https://docs.aws.amazon.com/textract/latest/dg/what-is.html',
  },
  'Amazon Translate': {
    title: 'Amazon Translate Developer Guide',
    url: 'https://docs.aws.amazon.com/translate/latest/dg/what-is.html',
  },
  'Amazon Kendra': {
    title: 'Amazon Kendra Developer Guide',
    url: 'https://docs.aws.amazon.com/kendra/latest/dg/what-is-kendra.html',
  },
  'Amazon Personalize': {
    title: 'Amazon Personalize Developer Guide',
    url: 'https://docs.aws.amazon.com/personalize/latest/dg/what-is-personalize.html',
  },
  'Amazon Forecast': {
    title: 'Amazon Forecast Developer Guide',
    url: 'https://docs.aws.amazon.com/forecast/latest/dg/what-is-forecast.html',
  },
  'Amazon Q': {
    title: 'Amazon Q Developer Guide',
    url: 'https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/what-is.html',
  },
  'AWS IAM': {
    title: 'AWS IAM User Guide',
    url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',
  },
  'AWS KMS': {
    title: 'AWS KMS Developer Guide',
    url: 'https://docs.aws.amazon.com/kms/latest/developerguide/overview.html',
  },
  RAG: {
    title: 'Retrieval Augmented Generation (RAG) — Amazon Bedrock',
    url: 'https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html',
  },
  'prompt engineering': {
    title: 'Amazon Bedrock Prompt Engineering Guidelines',
    url: 'https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-engineering-guidelines.html',
  },
  'prompt injection': {
    title: 'Amazon Bedrock Guardrails',
    url: 'https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html',
  },
  'fine-tuning': {
    title: 'Custom Models in Amazon Bedrock',
    url: 'https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models.html',
  },
  'model evaluation': {
    title: 'Model Evaluation in Amazon Bedrock',
    url: 'https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation.html',
  },
  'responsible AI': {
    title: 'AWS Responsible AI',
    url: 'https://aws.amazon.com/machine-learning/responsible-ai/',
  },
  'data drift': {
    title: 'SageMaker Model Monitor — Data Drift',
    url: 'https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-data-quality.html',
  },
  'Amazon A2I': {
    title: 'Amazon Augmented AI (A2I)',
    url: 'https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-use-augmented-ai-a2i-human-review-loops.html',
  },
  'Ground Truth': {
    title: 'Amazon SageMaker Ground Truth',
    url: 'https://docs.aws.amazon.com/sagemaker/latest/dg/sms.html',
  },
  // Claude / Anthropic
  Claude: {
    title: 'Anthropic Claude Documentation',
    url: 'https://docs.anthropic.com/',
  },
  'Claude API': {
    title: 'Anthropic API Reference',
    url: 'https://docs.anthropic.com/en/api/',
  },
  MCP: {
    title: 'Model Context Protocol',
    url: 'https://modelcontextprotocol.io/',
  },
  // NVIDIA
  'NVIDIA NIM': {
    title: 'NVIDIA NIM Documentation',
    url: 'https://docs.nvidia.com/nim/',
  },
  TensorRT: {
    title: 'NVIDIA TensorRT Documentation',
    url: 'https://docs.nvidia.com/deeplearning/tensorrt/',
  },
  Triton: {
    title: 'NVIDIA Triton Inference Server',
    url: 'https://docs.nvidia.com/deeplearning/triton-inference-server/',
  },
  // Azure
  'Azure OpenAI': {
    title: 'Azure OpenAI Service Documentation',
    url: 'https://learn.microsoft.com/en-us/azure/ai-services/openai/',
  },
  'Azure AI Search': {
    title: 'Azure AI Search Documentation',
    url: 'https://learn.microsoft.com/en-us/azure/search/',
  },
  'Semantic Kernel': {
    title: 'Semantic Kernel Documentation',
    url: 'https://learn.microsoft.com/en-us/semantic-kernel/',
  },
}

function findReferences(q: Question): Reference[] {
  const refs: Reference[] = []
  const seen = new Set<string>()
  const text = q.stem + ' ' + q.options.map((o) => o.text).join(' ') + ' ' + (q.explanation || '')

  for (const [keyword, ref] of Object.entries(REFERENCE_MAP)) {
    if (text.includes(keyword) && !seen.has(ref.url)) {
      refs.push(ref)
      seen.add(ref.url)
    }
  }

  if (refs.length > 3) return refs.slice(0, 3)
  return refs
}

// --- Extract per-option feedback from explanation ---
function extractOptionAnalysis(q: Question): Record<string, string> | null {
  const analysis: Record<string, string> = {}
  const source = [q.explanation, q.whyOthersWrong].filter(Boolean).join(' ')
  if (!source) return null

  for (const opt of q.options) {
    const label = opt.label
    const isCorrect = q.correctAnswers.includes(label)

    // Try patterns like "A：...", "A 是...", "選項 A..."
    const patterns = [
      new RegExp(`${label}[：:]\\s*([^。]+[。])`, 'u'),
      new RegExp(`${label}\\s*(?:是|為|因為|因)([^。]+[。])`, 'u'),
      new RegExp(`選項\\s*${label}[：:，,]?\\s*([^。]+[。])`, 'u'),
      new RegExp(`\\b${label}\\b[：:.]\\s*([^.]+\\.)`, 'u'),
    ]

    for (const pattern of patterns) {
      const match = source.match(pattern)
      if (match) {
        analysis[label] = match[1].trim()
        break
      }
    }

    if (!analysis[label]) {
      if (isCorrect && q.explanation) {
        const firstSentence = q.explanation.split(/[。.]/)[0]
        if (firstSentence.length > 10 && firstSentence.length < 100) {
          analysis[label] = `正確，因為${firstSentence.endsWith('。') ? firstSentence : firstSentence + '。'}`
        }
      }
    }
  }

  if (Object.keys(analysis).length === 0) return null
  return analysis
}

function generateOptionFeedback(q: Question): void {
  const analysis = q.optionAnalysis
  for (const opt of q.options) {
    if (opt.feedback) continue

    const isCorrect = q.correctAnswers.includes(opt.label)
    if (analysis?.[opt.label]) {
      opt.feedback = analysis[opt.label]
    } else if (isCorrect && q.explanation) {
      const short = q.explanation.split(/[。.]/)[0]
      if (short.length > 5 && short.length < 80) {
        opt.feedback = short + (short.endsWith('。') ? '' : '。')
      }
    }
  }
}

// --- Main ---
const dryRun = process.argv.includes('--dry-run')
const questionsPath = resolve(process.cwd(), 'data/questions.json')
const questions: Question[] = JSON.parse(readFileSync(questionsPath, 'utf-8'))

let refsCount = 0
let analysisCount = 0
let feedbackCount = 0

for (const q of questions) {
  // References
  if (!q.references || q.references.length === 0) {
    const refs = findReferences(q)
    if (refs.length > 0) {
      q.references = refs
      refsCount++
    } else {
      q.references = null
    }
  }

  // Option analysis
  if (!q.optionAnalysis) {
    q.optionAnalysis = extractOptionAnalysis(q)
    if (q.optionAnalysis) analysisCount++
  }

  // Per-option feedback
  const beforeFeedback = q.options.filter((o) => o.feedback).length
  generateOptionFeedback(q)
  const afterFeedback = q.options.filter((o) => o.feedback).length
  if (afterFeedback > beforeFeedback) feedbackCount++

  // plainExplanation — leave null (requires AI)
  if (!q.plainExplanation) {
    q.plainExplanation = null
  }
}

console.log(`=== ExamLab Fields Enrichment ${dryRun ? '(DRY RUN)' : ''} ===`)
console.log(`Total questions: ${questions.length}`)
console.log(`References added: ${refsCount}`)
console.log(`Option analysis extracted: ${analysisCount}`)
console.log(`Option feedback generated: ${feedbackCount}`)

// Coverage report
const hasRefs = questions.filter((q) => q.references && q.references.length > 0).length
const hasAnalysis = questions.filter((q) => q.optionAnalysis && Object.keys(q.optionAnalysis).length > 0).length
const hasFeedback = questions.filter((q) => q.options.some((o) => o.feedback)).length
console.log(`\n=== Coverage ===`)
console.log(`With references: ${hasRefs}/${questions.length} (${Math.round((hasRefs / questions.length) * 100)}%)`)
console.log(
  `With option analysis: ${hasAnalysis}/${questions.length} (${Math.round((hasAnalysis / questions.length) * 100)}%)`,
)
console.log(
  `With option feedback: ${hasFeedback}/${questions.length} (${Math.round((hasFeedback / questions.length) * 100)}%)`,
)
console.log(`With plain explanation: 0/${questions.length} (requires AI)`)

if (!dryRun) {
  writeFileSync(questionsPath, JSON.stringify(questions, null, 2))
  console.log(`\nWritten to ${questionsPath}`)
} else {
  console.log('\n(dry run — no files written)')
}
