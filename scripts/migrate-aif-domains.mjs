#!/usr/bin/env node

import { execFileSync } from 'node:child_process'
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import ts from 'typescript'

const QUESTIONS_FILE = resolve('data/questions.json')
const TEMP_DIR = resolve('.wrangler/tmp/aif-domain-migration')
const COMPILED_PARSER = resolve(TEMP_DIR, 'question-parser.mjs')
const COMPILED_DOMAINS = resolve(TEMP_DIR, 'domains.js')
const AIF_CODE = 'AIF-C01'
const REPARSE_SOURCES = new Set(['aif-c01-set-g-scenario.md', 'aif-c01-set-i-learning.md'])
const CLASSIFIED_SOURCE = 'aif-c01-set-j-gemini.json'
const CLASSIFIED_SOURCE_PATH = resolve('data/raw-questions', CLASSIFIED_SOURCE)

// This legacy JSON source arrived without domain metadata. Each assignment was
// reviewed against the five domains in the AIF-C01 exam guide.
const SET_J_DOMAIN_NUMBERS = [
  1, 2, 4, 3, 4, 3, 2, 4, 3, 1, 1, 1, 2, 3, 1, 3, 3, 3, 1, 1, 5, 3, 1, 1, 2, 3, 3, 3, 1, 2, 3, 5, 1,
  3, 4, 1, 3, 3, 1, 1, 1, 1, 5, 2, 2, 1, 1, 1, 2, 3, 5, 3, 1, 2, 5, 2, 1, 1, 3, 1, 5, 3, 1, 4, 3,
]

mkdirSync(TEMP_DIR, { recursive: true })

function compileTypeScript(sourcePath, outputPath) {
  const output = ts.transpileModule(readFileSync(sourcePath, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
  }).outputText
  writeFileSync(outputPath, output)
}

function stableSignature(question) {
  const stem = question.stem.trim().replace(/\s+/g, ' ')
  const answers = [...question.correctAnswers].sort().join(',')
  return JSON.stringify([stem, answers])
}

function buildLookup(questions, sourceFile) {
  const lookup = new Map()
  for (const question of questions) {
    if (question.domainNumber < 1 || question.domainNumber > 5) {
      throw new Error(`${sourceFile}: reparsed question still has invalid domain ${question.domainNumber}`)
    }
    lookup.set(question.hash, question.domainNumber)
    lookup.set(stableSignature(question), question.domainNumber)
  }
  return lookup
}

compileTypeScript(resolve('src/lib/domains.ts'), COMPILED_DOMAINS)
compileTypeScript(resolve('src/lib/question-parser.ts'), COMPILED_PARSER)

try {
  const [{ parseQuestions }, { canonicalizeDomain, getDomainLabel }] = await Promise.all([
    import(`${pathToFileURL(COMPILED_PARSER).href}?migration=${Date.now()}`),
    import(`${pathToFileURL(COMPILED_DOMAINS).href}?migration=${Date.now()}`),
  ])

  const classifiedSource = JSON.parse(readFileSync(CLASSIFIED_SOURCE_PATH, 'utf8'))
  if (classifiedSource.length !== SET_J_DOMAIN_NUMBERS.length) {
    throw new Error(`Expected ${SET_J_DOMAIN_NUMBERS.length} ${CLASSIFIED_SOURCE} questions, found ${classifiedSource.length}`)
  }
  const classifiedBySignature = new Map()
  for (const [index, question] of classifiedSource.entries()) {
    const domainNumber = SET_J_DOMAIN_NUMBERS[index]
    question.domain = getDomainLabel(AIF_CODE, domainNumber, 'en')
    question.domainNumber = domainNumber
    classifiedBySignature.set(stableSignature(question), domainNumber)
  }

  const currentQuestions = JSON.parse(readFileSync(QUESTIONS_FILE, 'utf8'))
  const originalQuestions = JSON.parse(
    execFileSync('git', ['show', 'HEAD:data/questions.json'], { encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 }),
  )
  const currentById = new Map(currentQuestions.map((question) => [question.id, question]))
  const originalIds = new Set(originalQuestions.map((question) => question.id))
  let restored = 0
  const questions = originalQuestions.flatMap((original) => {
    const current = currentById.get(original.id)
    if (current) return [current]
    if (original.sourceFile === CLASSIFIED_SOURCE) {
      restored++
      return [original]
    }
    return []
  })
  questions.push(...currentQuestions.filter((question) => !originalIds.has(question.id)))

  const reparsedBySource = new Map()
  function lookupFor(sourceFile, lang) {
    const cacheKey = `${sourceFile}\0${lang}`
    const cached = reparsedBySource.get(cacheKey)
    if (cached) return cached
    const sourcePath = resolve('data/raw-questions', sourceFile)
    const parsed = parseQuestions(readFileSync(sourcePath, 'utf8'), sourceFile, { examCode: AIF_CODE, lang })
    const lookup = buildLookup(parsed, sourceFile)
    reparsedBySource.set(cacheKey, lookup)
    return lookup
  }

  let changed = 0
  for (const question of questions) {
    if (question.examCode?.toUpperCase() !== AIF_CODE) continue

    let domainNumber = question.domainNumber
    if (domainNumber === 0 && REPARSE_SOURCES.has(question.sourceFile)) {
      const lookup = lookupFor(question.sourceFile, question.lang)
      domainNumber = lookup.get(question.hash) || lookup.get(stableSignature(question)) || 0
    } else if (domainNumber === 0 && question.sourceFile === CLASSIFIED_SOURCE) {
      domainNumber = classifiedBySignature.get(stableSignature(question)) || 0
    }

    const canonical = canonicalizeDomain(AIF_CODE, question.domain, domainNumber, question.lang)
    if (canonical.domainNumber === 0) {
      throw new Error(`Could not recover domain for ${question.id} (${question.sourceFile}): ${question.stem.slice(0, 80)}`)
    }
    if (canonical.domain !== question.domain || canonical.domainNumber !== question.domainNumber) changed++
    question.domain = canonical.domain
    question.domainNumber = canonical.domainNumber
  }

  writeFileSync(CLASSIFIED_SOURCE_PATH, `${JSON.stringify(classifiedSource, null, 2)}\n`)
  writeFileSync(QUESTIONS_FILE, `${JSON.stringify(questions, null, 2)}\n`)
  console.log(`✅ AIF-C01 domain migration complete: ${changed} normalized, ${restored} restored, ${questions.length} total`)
} finally {
  rmSync(COMPILED_PARSER, { force: true })
  rmSync(COMPILED_DOMAINS, { force: true })
}
