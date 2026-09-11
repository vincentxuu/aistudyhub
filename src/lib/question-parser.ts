import { createHash } from 'node:crypto'
import { nanoid } from 'nanoid'
import type { Format, Question, QuestionOption } from './question-types.js'

function normalize(text: string): string {
  return text
    .replace(/[⭐🎯🔑⚠️💡✅📘🧠☁️]/gu, '')
    .replace(/[，。、；：？！""''（）【】·]/g, '')
    .replace(/\s+/g, ' ')
    .toLowerCase()
    .trim()
}

function questionHash(stem: string, correctAnswers: string[]): string {
  const input = `${normalize(stem)}|${correctAnswers.sort().join(',')}`
  return createHash('sha256').update(input).digest('hex').slice(0, 16)
}

export function detectFormat(content: string, filename: string): Format {
  if (filename.endsWith('.json')) return 'F'
  if (/^---\n(?:exam|course|series):/m.test(content)) return 'D'
  if (/^## Question \d/m.test(content) && content.includes('⭐')) return 'B'
  if (/^### Q\d/m.test(content) && content.includes('<details>')) return 'A'
  if (/^\*\*\d+\.\*\*/m.test(content) && /\*\*答案[：:]/m.test(content)) return 'C'
  if (/^\d+[.)]\s/m.test(content) && /^Answer:/m.test(content)) return 'E'
  throw new Error(`Unrecognized format in ${filename}`)
}

function extractDetails(block: string, label: string): string | null {
  const patterns = [new RegExp(`<details>\\s*<summary>[^<]*${label}[^<]*</summary>\\s*([\\s\\S]*?)</details>`, 'i')]
  for (const p of patterns) {
    const m = block.match(p)
    if (m) return m[1].trim()
  }
  return null
}

function parseOptions(text: string): { options: QuestionOption[]; type: 'single' | 'multi' } {
  const options: QuestionOption[] = []
  const optionRegex = /^[-\s]*([A-F])[.)]\s*(.+)$/gm
  let m
  while ((m = optionRegex.exec(text)) !== null) {
    options.push({ label: m[1], text: m[2].trim() })
  }
  if (options.length === 0) {
    const altRegex = /^([A-F])\.\s+(.+)$/gm
    while ((m = altRegex.exec(text)) !== null) {
      options.push({ label: m[1], text: m[2].trim() })
    }
  }
  return { options, type: 'single' }
}

function extractCorrectAnswers(answerBlock: string): string[] {
  const cleaned = answerBlock
    .replace(/\*\*/g, '')
    .replace(/[（(].*?[)）]/g, '')
    .trim()

  const multiMatch = cleaned.match(/([A-F])[,、\s]+(?:和|and|&)?\s*([A-F])/i)
  if (multiMatch) {
    const all = cleaned.match(/[A-F]/g)
    return all ? [...new Set(all)] : []
  }

  const single = cleaned.match(/^([A-F])\b/m) || cleaned.match(/([A-F])/)
  return single ? [single[1]] : []
}

const DOMAIN_MAP: Record<number, string> = {
  1: 'Fundamentals of AI and ML',
  2: 'Fundamentals of Generative AI',
  3: 'Applications of Foundation Models',
  4: 'Guidelines for Responsible AI',
  5: 'Security, Compliance, and Governance for AI Solutions',
}

function guessDomain(text: string): { domain: string; domainNumber: number } {
  const m =
    text.match(/Domain\s+(\d)\s*[-—:：]\s*(.+?)(?:\n|$)/i) ||
    text.match(/第\s*(\d)\s*章\s*[：:]\s*(.+?)(?:\n|$|[（(])/i) ||
    text.match(/Domain\s+(\d)/i)
  if (m) {
    const num = parseInt(m[1], 10)
    return { domain: DOMAIN_MAP[num] || m[2]?.trim() || `Domain ${num}`, domainNumber: num }
  }
  return { domain: 'Unknown', domainNumber: 0 }
}

function guessDifficulty(text: string): 1 | 2 | 3 {
  const stars = (text.match(/⭐/g) || []).length
  if (stars >= 3) return 3
  if (stars === 2) return 2
  if (stars === 1) return 1
  if (/困難|difficult|hard/i.test(text)) return 3
  if (/中等|medium/i.test(text)) return 2
  return 1
}

function guessQuestionType(text: string): 'single' | 'multi' | 'ordering' | 'matching' {
  if (/複選|multiple|select\s+(?:two|three|all)/i.test(text)) return 'multi'
  if (/排序|排列|order|rank/i.test(text)) return 'ordering'
  if (/配對|match/i.test(text)) return 'matching'
  return 'single'
}

// --- Format A parser ---
function parseFormatA(content: string, filename: string): Partial<Question>[] {
  const questions: Partial<Question>[] = []
  const blocks = content.split(/^---$/m).filter((b) => b.trim())
  let currentDomain = { domain: 'Unknown', domainNumber: 0 }

  for (const block of blocks) {
    const domainMatch = guessDomain(block)
    if (domainMatch.domainNumber > 0) currentDomain = domainMatch

    const qMatch = block.match(/###\s*Q(\d+)\s*[（(]([^)）]+)[)）]/)
    if (!qMatch) continue

    const stemMatch = block.match(/[)）]\s*\n([\s\S]+?)(?=\n\s*-\s*[A-F]\.|\n[A-F]\.)/)
    if (!stemMatch) continue
    const stem = stemMatch[1].trim()

    const { options } = parseOptions(block)
    if (options.length === 0) continue

    const answerRaw = extractDetails(block, '答案')
    if (!answerRaw) continue
    const correctAnswers = extractCorrectAnswers(answerRaw)

    const explanation = extractDetails(block, '詳解') || extractDetails(block, '解析')
    const answerDetail = answerRaw.replace(/^\*\*[A-F].*?\*\*\s*/m, '').trim()

    questions.push({
      stem,
      options,
      correctAnswers,
      type: guessQuestionType(qMatch[2]),
      explanation: explanation || (answerDetail.length > 10 ? answerDetail : null),
      ...currentDomain,
      difficulty: guessDifficulty(block),
      sourceFile: filename,
    })
  }

  return questions
}

// --- Format B parser ---
function parseFormatB(content: string, filename: string): Partial<Question>[] {
  const questions: Partial<Question>[] = []
  const blocks = content.split(/^## Question \d+/m).filter((b) => b.trim())

  for (const block of blocks) {
    const domainInfo = guessDomain(block)

    const keyTermsMatch = block.match(/🔑\s*題幹關鍵字[^`]*`([^`]+)`/)
    const keyTerms = keyTermsMatch ? keyTermsMatch[1].split(/[、,]/).map((t) => t.trim()) : []

    // Try multiple patterns to extract stem - skip key terms, domain metadata
    const stemMatch =
      block.match(/(?:`[^`]+`\s*\n\n)([\s\S]+?)(?=\n[A-F]\.)/) ||
      block.match(/(?:Domain\s+\d[^]*?\n\n)([\s\S]+?)(?=\n[A-F]\.)/) ||
      block.match(/(?:🎯[^\n]+\n\n)([\s\S]+?)(?=\n[A-F]\.)/)
    if (!stemMatch) continue
    const stem = stemMatch[1]
      .replace(/^\*\*🔑\s*題幹關鍵字\*\*\s*\n`[^`]+`\s*\n\n?/m, '')
      .replace(/^\*\*Domain\*\*\s*\n[^\n]+\n\n?/m, '')
      .trim()

    const { options } = parseOptions(block)
    if (options.length === 0) continue

    const answerRaw = extractDetails(block, '答案')
    if (!answerRaw) continue
    const correctAnswers = extractCorrectAnswers(answerRaw)

    const hint = extractDetails(block, 'Hint')
    const explanation = extractDetails(block, '詳解')
    const mnemonic = extractDetails(block, '記憶口訣')

    const trapMatch = block.match(/⚠️\s*\*\*常見陷阱\*\*\s*\n>\s*\n>\s*([\s\S]*?)(?=\n\n|<details|$)/)
    const trap = trapMatch ? trapMatch[1].replace(/^>\s*/gm, '').trim() : null

    let whyOthersWrong: string | null = null
    if (explanation) {
      const m = explanation.match(/其他選項為什麼不對[：:]\s*([\s\S]*?)$/)
      if (m) whyOthersWrong = m[1].trim()
    }

    questions.push({
      stem,
      options,
      correctAnswers,
      type: guessQuestionType(block),
      ...domainInfo,
      difficulty: guessDifficulty(block),
      keyTerms,
      hint,
      explanation,
      whyOthersWrong,
      trap,
      mnemonic,
      sourceFile: filename,
    })
  }

  return questions
}

// --- Format C parser ---
function parseFormatC(content: string, filename: string): Partial<Question>[] {
  const questions: Partial<Question>[] = []

  // Split into lines and track current domain
  const lines = content.split('\n')
  let currentDomain = { domain: 'Unknown', domainNumber: 0 }
  let currentBlock = ''

  function flushBlock() {
    if (!currentBlock.trim()) return

    const qMatches = [...currentBlock.matchAll(/\*\*(\d+)\.\*\*\s*([\s\S]*?)(?=\*\*\d+\.\*\*|$)/g)]
    for (const qm of qMatches) {
      const block = qm[2]
      const parts = block.split(/\*\*答案[：:]\s*/m)
      if (parts.length < 2) continue

      const questionPart = parts[0]
      const answerPart = parts[1]

      const stemEnd = questionPart.search(/\n[A-F]\.\s/)
      if (stemEnd === -1) continue
      const stem = questionPart.slice(0, stemEnd).replace(/^\s+/, '').trim()

      const { options } = parseOptions(questionPart)
      if (options.length === 0) continue

      const correctAnswers = extractCorrectAnswers(answerPart)

      const explanationMatch = answerPart.match(/\*\*\s*(?:（[^）]*）)?\s*\n([\s\S]*?)$/)
      let explanation = explanationMatch ? explanationMatch[1].replace(/^解析[：:]\s*/m, '').trim() : null
      if (explanation && explanation.length <= 5) explanation = null

      questions.push({
        stem,
        options,
        correctAnswers,
        type: guessQuestionType(stem),
        ...currentDomain,
        difficulty: 1,
        explanation,
        sourceFile: filename,
      })
    }
  }

  for (const line of lines) {
    const domainHeader = line.match(/^##\s+Domain\s+(\d)[:\s]/i)
    if (domainHeader) {
      flushBlock()
      currentBlock = ''
      const num = parseInt(domainHeader[1], 10)
      currentDomain = { domain: DOMAIN_MAP[num] || `Domain ${num}`, domainNumber: num }
      continue
    }
    currentBlock += `${line}\n`
  }
  flushBlock()

  return questions
}

// --- Format B-hints (same questions as B, but simpler structure) ---
function parseFormatBHints(content: string, filename: string): Partial<Question>[] {
  const questions: Partial<Question>[] = []
  const blocks = content.split(/^## 第 \d+ 題/m).filter((b) => b.trim())

  let currentDomain = { domain: 'Unknown', domainNumber: 0 }

  for (const block of blocks) {
    const domainInfo = guessDomain(block)
    if (domainInfo.domainNumber > 0) currentDomain = domainInfo

    const stemMatch = block.match(/^\s*\n([\s\S]+?)(?=\n[A-F]\.)/)
    if (!stemMatch) continue
    const stem = stemMatch[1].trim()
    if (stem.length < 10) continue

    const { options } = parseOptions(block)
    if (options.length === 0) continue

    const answerRaw = extractDetails(block, '答案')
    if (!answerRaw) continue
    const correctAnswers = extractCorrectAnswers(answerRaw)

    const hint = extractDetails(block, 'Hint')
    const explanation = extractDetails(block, '詳解')

    let whyOthersWrong: string | null = null
    if (explanation) {
      const m = explanation.match(/其他選項為什麼不對[：:]\s*([\s\S]*?)$/)
      if (m) whyOthersWrong = m[1].trim()
    }

    questions.push({
      stem,
      options,
      correctAnswers,
      type: guessQuestionType(block),
      ...currentDomain,
      difficulty: guessDifficulty(block),
      hint,
      explanation,
      whyOthersWrong,
      sourceFile: filename,
    })
  }

  return questions
}

// --- Format D parser (recommended for AI-generated) ---
function parseFormatD(
  content: string,
  filename: string,
): { meta: Record<string, string>; questions: Partial<Question>[] } {
  const questions: Partial<Question>[] = []

  // Extract YAML frontmatter
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/)
  const meta: Record<string, string> = {}
  if (fmMatch) {
    for (const line of fmMatch[1].split('\n')) {
      const kv = line.match(/^(\w[\w-]*):\s*(.+)/)
      if (kv) meta[kv[1].trim()] = kv[2].trim()
    }
  }

  const domainFromMeta = meta.domain || 'Unknown'
  const domainInfo = guessDomain(domainFromMeta)

  // Split by ## Q markers
  const blocks = content.split(/^## Q\d+/m).filter((b) => b.trim())

  for (const block of blocks) {
    // Skip the frontmatter block
    if (block.includes('---') && !block.match(/^[A-Z]\./m)) continue

    // Parse metadata lines
    const typeMatch = block.match(/^Type:\s*(.+)/m)
    const diffMatch = block.match(/^Difficulty:\s*(\d)/m)
    const tagsMatch = block.match(/^Tags:\s*(.+)/m)

    // Extract stem: text between metadata lines and first option
    const metaEnd = block.search(/\n[A-Z]\.\s/)
    if (metaEnd === -1) continue

    // Find where metadata ends and stem begins
    const lines = block.slice(0, metaEnd).split('\n')
    const stemLines: string[] = []
    let pastMeta = false
    for (const line of lines) {
      if (/^(Type|Difficulty|Tags|Concepts):/i.test(line.trim())) {
        pastMeta = true
        continue
      }
      if (pastMeta && line.trim()) {
        stemLines.push(line)
      } else if (pastMeta) {
        // Allow blank lines within stem after meta
        if (stemLines.length > 0) stemLines.push(line)
      }
    }
    const stem = stemLines.join('\n').trim()
    if (!stem) continue

    // Parse options
    const optionSection = block.slice(metaEnd)
    const options: { label: string; text: string }[] = []
    const optRegex = /^([A-F])\.\s+(.+)/gm
    let m
    while ((m = optRegex.exec(optionSection)) !== null) {
      options.push({ label: m[1], text: m[2].trim() })
    }
    if (options.length === 0) continue

    // Parse answer
    const answerMatch = block.match(/^Answer:\s*(.+)/m)
    if (!answerMatch) continue
    const answerRaw = answerMatch[1].trim()
    const correctAnswers = answerRaw
      .split(/[,，]\s*/)
      .map((a) => a.trim())
      .filter(Boolean)

    // Parse other fields
    const hintMatch = block.match(/^Hint:\s*(.+)/m)
    const explMatch = block.match(/^Explanation:\s*([\s\S]*?)(?=^(?:Why others wrong|Trap|Mnemonic|---|\n## Q))/m)
    const whyMatch = block.match(/^Why others wrong:\s*([\s\S]*?)(?=^(?:Trap|Mnemonic|---|\n## Q))/m)
    const trapMatch = block.match(/^Trap:\s*([\s\S]*?)(?=^(?:Mnemonic|---|\n## Q))/m)
    const mnemonicMatch = block.match(/^Mnemonic:\s*(.+)/m)

    const type = typeMatch ? typeMatch[1].trim().toLowerCase() : 'single'

    questions.push({
      stem,
      options,
      correctAnswers,
      type: type as 'single' | 'multi' | 'ordering' | 'matching',
      domain: domainInfo.domainNumber > 0 ? domainInfo.domain : domainFromMeta,
      domainNumber: domainInfo.domainNumber || 3,
      difficulty: diffMatch ? (parseInt(diffMatch[1], 10) as 1 | 2 | 3) : 1,
      hint: hintMatch ? hintMatch[1].trim() : null,
      explanation: explMatch ? explMatch[1].trim() : null,
      whyOthersWrong: whyMatch ? whyMatch[1].trim() : null,
      trap: trapMatch ? trapMatch[1].trim() : null,
      mnemonic: mnemonicMatch ? mnemonicMatch[1].trim() : null,
      keyTerms: tagsMatch ? tagsMatch[1].split(/[,，]\s*/).map((t) => t.trim()) : [],
      sourceFile: filename,
    })
  }

  return { meta, questions }
}

function detectSubFormat(content: string): 'B-full' | 'B-hints' {
  if (/^## Question \d/m.test(content) && content.includes('⭐')) return 'B-full'
  return 'B-hints'
}

export function parseQuestions(
  content: string,
  filename: string,
  overrides: {
    examCode?: string
    courseCode?: string
    seriesSlug?: string
    lang?: 'en' | 'zh-TW'
    generatedBy?: 'human' | 'ai'
  } = {},
): Question[] {
  let format: Format
  try {
    format = detectFormat(content, filename)
  } catch {
    if (/^## 第 \d+ 題/m.test(content)) {
      format = 'B'
    } else {
      throw new Error(`Cannot detect format for ${filename}`)
    }
  }

  let rawQuestions: Partial<Question>[]

  if (format === 'A') {
    rawQuestions = parseFormatA(content, filename)
  } else if (format === 'B') {
    const sub = detectSubFormat(content)
    rawQuestions = sub === 'B-full' ? parseFormatB(content, filename) : parseFormatBHints(content, filename)
  } else if (format === 'C') {
    rawQuestions = parseFormatC(content, filename)
  } else if (format === 'D') {
    const result = parseFormatD(content, filename)
    rawQuestions = result.questions
    if (result.meta.exam && !overrides.examCode) overrides.examCode = result.meta.exam
    if (result.meta.lang && !overrides.lang) overrides.lang = result.meta.lang as 'en' | 'zh-TW'
  } else {
    throw new Error(`Parser for format ${format} not yet implemented`)
  }

  const lang = overrides.lang ?? (content.includes('答案') ? 'zh-TW' : 'en')
  const track = overrides.examCode ? 'certification' : overrides.courseCode ? 'course' : 'certification'

  return rawQuestions.map((q) => {
    const correctAnswers = q.correctAnswers || []
    const hash = questionHash(q.stem || '', correctAnswers)

    return {
      id: nanoid(12),
      hash,
      track,
      examCode: overrides.examCode || null,
      courseCode: overrides.courseCode || null,
      seriesSlug: overrides.seriesSlug || null,
      topicSlug: null,
      domain: q.domain || 'Unknown',
      domainNumber: q.domainNumber || 0,
      difficulty: q.difficulty || 1,
      type: q.type || 'single',
      questionStyle: 'other',
      tags: [],
      concepts: [],
      stem: q.stem || '',
      keyTerms: q.keyTerms || [],
      options: q.options || [],
      correctAnswers,
      hint: q.hint || null,
      explanation: q.explanation || null,
      whyOthersWrong: q.whyOthersWrong || null,
      trap: q.trap || null,
      mnemonic: q.mnemonic || null,
      relatedQuestionIds: [],
      sourceArticleUrl: null,
      sourceFile: q.sourceFile || filename,
      generatedBy: overrides.generatedBy || 'human',
      reviewed: overrides.generatedBy !== 'ai',
      lang,
    }
  })
}

export function dedup(allQuestions: Question[]): {
  unique: Question[]
  merged: number
  related: [string, string][]
} {
  const byHash = new Map<string, Question>()
  let merged = 0
  const related: [string, string][] = []

  for (const q of allQuestions) {
    const existing = byHash.get(q.hash)
    if (existing) {
      merged++
      if (!existing.hint && q.hint) existing.hint = q.hint
      if (!existing.explanation && q.explanation) existing.explanation = q.explanation
      if (!existing.whyOthersWrong && q.whyOthersWrong) existing.whyOthersWrong = q.whyOthersWrong
      if (!existing.trap && q.trap) existing.trap = q.trap
      if (!existing.mnemonic && q.mnemonic) existing.mnemonic = q.mnemonic
      if (existing.keyTerms.length === 0 && q.keyTerms.length > 0) existing.keyTerms = q.keyTerms
      if (existing.difficulty === 1 && q.difficulty > 1) existing.difficulty = q.difficulty
    } else {
      byHash.set(q.hash, q)
    }
  }

  const unique = [...byHash.values()]

  for (let i = 0; i < unique.length; i++) {
    for (let j = i + 1; j < unique.length; j++) {
      const a = unique[i],
        b = unique[j]
      if (
        a.correctAnswers.join(',') === b.correctAnswers.join(',') &&
        a.domain === b.domain &&
        a.domainNumber === b.domainNumber
      ) {
        const aNorm = normalize(a.stem)
        const bNorm = normalize(b.stem)
        const shorter = Math.min(aNorm.length, bNorm.length)
        const longer = Math.max(aNorm.length, bNorm.length)
        if (shorter / longer > 0.6) {
          let same = 0
          const aWords = new Set(aNorm.split(' '))
          for (const w of bNorm.split(' ')) {
            if (aWords.has(w)) same++
          }
          if (same / Math.max(aWords.size, bNorm.split(' ').length) > 0.5) {
            related.push([a.id, b.id])
            a.relatedQuestionIds.push(b.id)
            b.relatedQuestionIds.push(a.id)
          }
        }
      }
    }
  }

  return { unique, merged, related }
}
