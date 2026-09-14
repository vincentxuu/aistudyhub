import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { execSync } from 'node:child_process'
import type { Question } from '../src/lib/question-types.js'

const remote = process.argv.includes('--remote')
const target = remote ? '--remote' : '--local'
console.log(`Seeding D1 (${remote ? 'PRODUCTION' : 'local'})...`)

const questions: Question[] = JSON.parse(readFileSync(resolve('data/questions.json'), 'utf-8'))
console.log(`Loaded ${questions.length} questions`)

function escSql(s: string | null | undefined): string {
  if (s == null) return 'NULL'
  return `'${s.replace(/'/g, "''")}'`
}

function jsonOrNull(val: unknown): string {
  if (val == null) return 'NULL'
  if (Array.isArray(val) && val.length === 0) return 'NULL'
  return escSql(JSON.stringify(val))
}

const BATCH_SIZE = 10
const batches: string[][] = []
let current: string[] = []

for (const q of questions) {
  const values = [
    escSql(q.id),
    escSql(q.hash),
    escSql(q.examCode),
    escSql(q.lang),
    escSql(q.domain),
    String(q.domainNumber),
    String(q.difficulty),
    escSql(q.type),
    escSql(q.stem),
    jsonOrNull(q.options),
    jsonOrNull(q.correctAnswers),
    escSql(q.hint),
    escSql(q.explanation),
    escSql(q.whyOthersWrong),
    escSql(q.trap),
    escSql(q.mnemonic),
    jsonOrNull(q.keyTerms),
    jsonOrNull(q.tags),
    escSql(q.sourceFile),
    escSql(q.generatedBy),
    q.reviewed ? '1' : '0',
    escSql(q.plainExplanation),
    jsonOrNull(q.optionAnalysis),
    jsonOrNull(q.references),
  ].join(', ')

  current.push(`(${values})`)
  if (current.length >= BATCH_SIZE) {
    batches.push(current)
    current = []
  }
}
if (current.length > 0) batches.push(current)

console.log(`Split into ${batches.length} batches of ~${BATCH_SIZE}`)

const tmpDir = resolve('.wrangler/tmp')
execSync(`mkdir -p ${tmpDir}`)

for (let i = 0; i < batches.length; i++) {
  const sql = `INSERT OR REPLACE INTO questions (id, hash, exam_code, lang, domain, domain_number, difficulty, type, stem, options, correct_answers, hint, explanation, why_others_wrong, trap, mnemonic, key_terms, tags, source_file, generated_by, reviewed, plain_explanation, option_analysis, references_json) VALUES\n${batches[i].join(',\n')};\n`

  const sqlFile = resolve(tmpDir, `seed-batch-${i}.sql`)
  writeFileSync(sqlFile, sql)

  const maxRetries = 3
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      execSync(`wrangler d1 execute aistudyhub-db ${target} --yes --file=${sqlFile}`, {
        stdio: 'pipe',
        timeout: 60000,
      })
      process.stdout.write(`\r  Batch ${i + 1}/${batches.length} ✓`)
      break
    } catch (e) {
      if (attempt === maxRetries) {
        console.error(`\n  Batch ${i + 1} FAILED after ${maxRetries} retries:`, (e as Error).message?.slice(0, 200))
        process.exit(1)
      }
      process.stdout.write(`\r  Batch ${i + 1} retry ${attempt}...`)
      execSync('sleep 2')
    }
  }
}

console.log(`\n✅ Seeded ${questions.length} questions into D1 (${target})`)
