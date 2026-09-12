#!/usr/bin/env node

import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import ts from 'typescript'

const sourceFile = resolve('src/lib/question-parser.ts')
const domainsSourceFile = resolve('src/lib/domains.ts')
const tempDir = resolve('.wrangler/tmp/domain-parser-test')
const compiledFile = resolve(tempDir, 'question-parser.mjs')
const compiledDomainsFile = resolve(tempDir, 'domains.js')
const validLintFile = resolve(tempDir, 'valid-questions.json')
const invalidLintFile = resolve(tempDir, 'invalid-questions.json')

mkdirSync(tempDir, { recursive: true })
const compiled = ts.transpileModule(readFileSync(sourceFile, 'utf8'), {
  compilerOptions: {
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ES2022,
  },
}).outputText
writeFileSync(compiledFile, compiled)
writeFileSync(
  compiledDomainsFile,
  ts.transpileModule(readFileSync(domainsSourceFile, 'utf8'), {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2022,
    },
  }).outputText,
)

try {
  const { parseQuestions } = await import(`${compiledFile}?test=${Date.now()}`)

  function assertCleanOptions(questions, sourceFile) {
    for (const question of questions) {
      const labels = question.options.map((option) => option.label)
      assert.equal(new Set(labels).size, labels.length, `${sourceFile} must not contain duplicate option labels`)
      assert.ok(
        question.options.every((option) => !/^\s*\*\*|\*\*\s*$/.test(option.text)),
        `${sourceFile} must strip Markdown markers from option text`,
      )
    }
  }

  const richMarkdown = `# Domain 1 — Fundamentals of AI and ML

## Question 1

> **⭐** · 🎯 **Regression**

某公司需要預測連續數值，應使用哪一種方法？

A. Regression
B. Classification
C. Clustering
D. Reinforcement learning

<details><summary>✅ 答案</summary>
**A**
</details>
`
  const [richQuestion] = parseQuestions(richMarkdown, 'single-hash-domain.md', {
    examCode: 'AIF-C01',
    lang: 'zh-TW',
  })
  assert.equal(richQuestion.domainNumber, 1)
  assert.equal(richQuestion.domain, 'AI 與 ML 基礎')
  assertCleanOptions([richQuestion], 'single-hash-domain.md')

  for (const answer of ['A and C', 'A、C', 'A & C']) {
    const multiMarkdown = `# Domain 1 — Fundamentals of AI and ML

### Q1（複選）
Which two metrics are classification metrics?

- A. Precision
- B. RMSE
- C. Recall
- D. MAE

<details><summary>答案</summary>
**${answer}**
</details>
`
    const [multiQuestion] = parseQuestions(multiMarkdown, 'multi-answer.md', {
      examCode: 'AIF-C01',
      lang: 'en',
    })
    assert.deepEqual(multiQuestion.correctAnswers, ['A', 'C'])
  }

  const formatAFile = 'aif-c01-set-a.md'
  const formatAQuestions = parseQuestions(readFileSync(resolve('data/raw-questions', formatAFile), 'utf8'), formatAFile, {
    examCode: 'AIF-C01',
    lang: 'zh-TW',
  })
  assert.ok(formatAQuestions.length > 0)
  assertCleanOptions(formatAQuestions, formatAFile)
  const vectorStoreQuestion = formatAQuestions.find((question) =>
    question.stem.includes('哪個 AWS 服務可以作為 RAG 的向量儲存'),
  )
  assert.deepEqual(vectorStoreQuestion?.correctAnswers, ['B'])

  for (const rawFile of ['aif-c01-set-g-scenario.md', 'aif-c01-set-i-learning.md']) {
    const parsed = parseQuestions(readFileSync(resolve('data/raw-questions', rawFile), 'utf8'), rawFile, {
      examCode: 'AIF-C01',
      lang: 'zh-TW',
    })
    assert.equal(parsed.length, 65, `${rawFile} should contain 65 parsed questions`)
    assert.ok(parsed.every((question) => question.domainNumber >= 1 && question.domainNumber <= 5))
    assertCleanOptions(parsed, rawFile)
  }

  const classifiedJsonFile = 'aif-c01-set-j-gemini.json'
  const classifiedJson = parseQuestions(
    readFileSync(resolve('data/raw-questions', classifiedJsonFile), 'utf8'),
    classifiedJsonFile,
    { examCode: 'AIF-C01', lang: 'en' },
  )
  assert.equal(classifiedJson.length, 65)
  assert.ok(classifiedJson.every((question) => question.domainNumber >= 1 && question.domainNumber <= 5))

  const plainText = `Domain 2: Fundamentals of Generative AI
Q1. Which model type generates new content?
A) Generative model
B) Regression model
C) Clustering model
D) Forecasting model
解答：A
解析：A generative model produces new content.
`
  const [plainQuestion] = parseQuestions(plainText, 'plain.txt', {
    examCode: 'AIF-C01',
    lang: 'en',
  })
  assert.equal(plainQuestion.domainNumber, 2)
  assert.equal(plainQuestion.domain, 'Fundamentals of Generative AI')

  const jsonAlias = JSON.stringify([
    {
      stem: 'Which control best protects an AI workload?',
      options: ['Encryption', 'Larger context', 'Higher temperature', 'More tokens'],
      correctAnswers: ['A'],
      domain: 'Security, Compliance and Governance',
    },
  ])
  const [aliasQuestion] = parseQuestions(jsonAlias, 'alias.json', {
    examCode: 'AIF-C01',
    lang: 'en',
  })
  assert.equal(aliasQuestion.domainNumber, 5)
  assert.equal(aliasQuestion.domain, 'Security, Compliance, and Governance for AI Solutions')

  const missingDomain = JSON.stringify([
    {
      stem: 'Which AWS service provides foundation models?',
      options: ['Amazon Bedrock', 'AWS Glue'],
      correctAnswers: ['A'],
    },
  ])
  assert.throws(
    () => parseQuestions(missingDomain, 'missing-domain.json', { examCode: 'AIF-C01', lang: 'en' }),
    /missing a recognized domain/,
  )

  const formatDMissingDomain = `---
exam: AIF-C01
lang: en
---

## Q1
Type: single
Difficulty: 1

Which AWS service provides foundation models?

A. Amazon Bedrock
B. AWS Glue

Answer: A
`
  assert.throws(() => parseQuestions(formatDMissingDomain, 'missing-domain.md'), /missing a recognized domain/)

  const [otherExamQuestion] = parseQuestions(missingDomain, 'other-exam.json', {
    examCode: 'OTHER-01',
    lang: 'en',
  })
  assert.equal(otherExamQuestion.domainNumber, 0)
  assert.equal(otherExamQuestion.domain, 'Unknown')

  const otherExamKnownDomain = JSON.stringify([
    {
      stem: 'Which concept belongs to this custom exam domain?',
      options: ['One', 'Two'],
      correctAnswers: ['A'],
      domain: 'Custom Domain',
      domainNumber: 3,
    },
  ])
  const [customDomainQuestion] = parseQuestions(otherExamKnownDomain, 'custom-domain.json', {
    examCode: 'OTHER-01',
    lang: 'en',
  })
  assert.equal(customDomainQuestion.domainNumber, 3)
  assert.equal(customDomainQuestion.domain, 'Custom Domain')

  const lintQuestion = {
    stem: 'Short fixture question?',
    options: [],
  }
  writeFileSync(
    validLintFile,
    JSON.stringify([
      {
        ...lintQuestion,
        id: 'valid-aif',
        examCode: 'AIF-C01',
        lang: 'zh-TW',
        domain: 'AI 與 ML 基礎',
        domainNumber: 1,
      },
      {
        ...lintQuestion,
        id: 'other-exam',
        examCode: 'OTHER-01',
        lang: 'en',
        domain: 'Unknown',
        domainNumber: 0,
      },
    ]),
  )
  const validLint = spawnSync(process.execPath, ['scripts/lint-questions.mjs', validLintFile], { encoding: 'utf8' })
  assert.equal(validLint.status, 0, validLint.stderr)

  writeFileSync(
    invalidLintFile,
    JSON.stringify([
      {
        ...lintQuestion,
        id: 'unknown-aif',
        examCode: 'AIF-C01',
        lang: 'en',
        domain: 'Unknown',
        domainNumber: 0,
        options: [
          { label: 'A', text: 'First option' },
          { label: 'A', text: 'Duplicate option**' },
        ],
        correctAnswers: ['B'],
      },
      {
        ...lintQuestion,
        id: 'wrong-locale-label',
        examCode: 'AIF-C01',
        lang: 'zh-TW',
        domain: 'Fundamentals of AI and ML',
        domainNumber: 1,
      },
    ]),
  )
  const invalidLint = spawnSync(process.execPath, ['scripts/lint-questions.mjs', invalidLintFile], {
    encoding: 'utf8',
  })
  assert.equal(invalidLint.status, 1)
  assert.match(invalidLint.stderr, /2 AIF-C01 domain ERRORS/)
  assert.match(invalidLint.stderr, /3 option structure ERRORS/)

  console.log('✅ AIF-C01 domain parser regression checks passed')
} finally {
  rmSync(compiledFile, { force: true })
  rmSync(compiledDomainsFile, { force: true })
  rmSync(validLintFile, { force: true })
  rmSync(invalidLintFile, { force: true })
}
