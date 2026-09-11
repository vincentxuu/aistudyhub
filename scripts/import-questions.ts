import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs'
import { resolve, basename } from 'node:path'
import { parseQuestions, dedup } from '../src/lib/question-parser.js'
import type { Question } from '../src/lib/question-types.js'

const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const examCode = args.find((_, i) => args[i - 1] === '--exam') || null
const generatedBy = (args.find((_, i) => args[i - 1] === '--generated-by') || 'human') as 'human' | 'ai'
const lang = (args.find((_, i) => args[i - 1] === '--lang') || undefined) as 'en' | 'zh-TW' | undefined
const paths = args.filter(a => !a.startsWith('--') && args[args.indexOf(a) - 1]?.startsWith('--') === false || (!a.startsWith('--') && !['--exam', '--generated-by', '--lang', '--dry-run'].includes(args[args.indexOf(a) - 1])))

const inputPaths = args.filter(a => !a.startsWith('--')).filter(a => {
  const prev = args[args.indexOf(a) - 1]
  return !['--exam', '--generated-by', '--lang'].includes(prev)
})

if (inputPaths.length === 0) {
  console.log(`Usage: npx tsx scripts/import-questions.ts <file-or-dir> [--exam AIF-C01] [--lang en] [--generated-by ai] [--dry-run]`)
  process.exit(1)
}

function collectFiles(p: string): string[] {
  const stat = statSync(p)
  if (stat.isDirectory()) {
    return readdirSync(p)
      .filter(f => f.endsWith('.md') || f.endsWith('.json'))
      .map(f => resolve(p, f))
  }
  return [resolve(p)]
}

const allFiles = inputPaths.flatMap(collectFiles)
const allQuestions: Question[] = []

for (const file of allFiles) {
  const content = readFileSync(file, 'utf-8')
  const name = basename(file)
  try {
    const questions = parseQuestions(content, name, {
      examCode: examCode || undefined,
      generatedBy,
      lang,
    })
    console.log(`✓ ${name}: ${questions.length} questions parsed`)
    allQuestions.push(...questions)
  } catch (e) {
    console.error(`✗ ${name}: ${(e as Error).message}`)
  }
}

console.log(`\n--- Deduplication ---`)
const { unique, merged, related } = dedup(allQuestions)
console.log(`Total parsed: ${allQuestions.length}`)
console.log(`Exact duplicates merged: ${merged}`)
console.log(`Semantic similar pairs: ${related.length}`)
console.log(`Unique questions: ${unique.length}`)

// Show domain breakdown
const byDomain = new Map<string, number>()
for (const q of unique) {
  const key = q.domain || 'Unknown'
  byDomain.set(key, (byDomain.get(key) || 0) + 1)
}
console.log(`\n--- Domain Breakdown ---`)
for (const [domain, count] of [...byDomain.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
  console.log(`  ${domain}: ${count}`)
}

// Show metadata coverage
const withHint = unique.filter(q => q.hint).length
const withExplanation = unique.filter(q => q.explanation).length
const withTrap = unique.filter(q => q.trap).length
const withMnemonic = unique.filter(q => q.mnemonic).length
const withKeyTerms = unique.filter(q => q.keyTerms.length > 0).length
console.log(`\n--- Metadata Coverage ---`)
console.log(`  Hint: ${withHint}/${unique.length}`)
console.log(`  Explanation: ${withExplanation}/${unique.length}`)
console.log(`  Trap: ${withTrap}/${unique.length}`)
console.log(`  Mnemonic: ${withMnemonic}/${unique.length}`)
console.log(`  Key Terms: ${withKeyTerms}/${unique.length}`)

if (dryRun) {
  console.log(`\n[DRY RUN] No changes written.`)
} else {
  const outPath = resolve(process.cwd(), 'data/questions.json')
  writeFileSync(outPath, JSON.stringify(unique, null, 2))
  console.log(`\nWritten ${unique.length} questions to ${outPath}`)
}
