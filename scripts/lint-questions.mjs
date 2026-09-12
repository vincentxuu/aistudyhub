#!/usr/bin/env node
// Validate questions.json for language consistency.
// Each question's text fields must match its declared lang.
// zh-TW: text fields must contain CJK characters
// en: text fields must NOT contain CJK characters
// Short terms, AWS service names, and technical jargon are exempt.

import { readFileSync } from 'node:fs'

const ZH_RE = /[一-鿿]/
const VERB_RE =
  / (is|are|should|would|could|can|will|does|do|has|have|must|need|want|use|make|take|give|provide|ensure|require|allow|enable|prevent|create|build|deploy|configure|implement|select|choose) /i
const AIF_C01_DOMAINS = {
  en: {
    1: 'Fundamentals of AI and ML',
    2: 'Fundamentals of Generative AI',
    3: 'Applications of Foundation Models',
    4: 'Guidelines for Responsible AI',
    5: 'Security, Compliance, and Governance for AI Solutions',
  },
  'zh-TW': {
    1: 'AI 與 ML 基礎',
    2: '生成式 AI 基礎',
    3: '基礎模型的應用',
    4: '負責任 AI 指引',
    5: 'AI 解決方案的安全、合規與治理',
  },
}

function isExemptText(text) {
  if (!text) return true
  const t = text.trim()
  if (t.length <= 40) return true
  if (!VERB_RE.test(t)) return true
  return false
}

function checkField(q, fieldName, value, errors) {
  if (!value || isExemptText(value)) return

  if (q.lang === 'zh-TW' && !ZH_RE.test(value)) {
    errors.push({
      id: q.id,
      examCode: q.examCode,
      lang: q.lang,
      field: fieldName,
      issue: `zh-TW ${fieldName} has no Chinese`,
      sample: value.slice(0, 80),
    })
  }
  if (q.lang === 'en' && ZH_RE.test(value)) {
    errors.push({
      id: q.id,
      examCode: q.examCode,
      lang: q.lang,
      field: fieldName,
      issue: `en ${fieldName} has Chinese`,
      sample: value.slice(0, 80),
    })
  }
}

const questionFile = process.argv[2] || 'data/questions.json'
const questions = JSON.parse(readFileSync(questionFile, 'utf8'))
const errors = []
const domainErrors = []

for (const q of questions) {
  if (q.examCode?.toUpperCase() === 'AIF-C01') {
    const localizedDomains = AIF_C01_DOMAINS[q.lang]
    const expectedDomain = localizedDomains?.[q.domainNumber]
    if (!expectedDomain) {
      domainErrors.push({
        id: q.id,
        examCode: q.examCode,
        lang: q.lang,
        field: 'domain',
        issue: `AIF-C01 has invalid domainNumber ${q.domainNumber} / domain "${q.domain}"`,
        sample: q.domain,
      })
    } else if (q.domain !== expectedDomain) {
      domainErrors.push({
        id: q.id,
        examCode: q.examCode,
        lang: q.lang,
        field: 'domain',
        issue: `AIF-C01 domain label must be "${expectedDomain}" for ${q.lang} domain ${q.domainNumber}`,
        sample: q.domain,
      })
    }
  }

  checkField(q, 'stem', q.stem, errors)
  checkField(q, 'hint', q.hint, errors)
  checkField(q, 'explanation', q.explanation, errors)
  checkField(q, 'trap', q.trap, errors)
  checkField(q, 'mnemonic', q.mnemonic, errors)
  checkField(q, 'whyOthersWrong', q.whyOthersWrong, errors)

  for (const opt of q.options || []) {
    if (!isExemptText(opt.text)) {
      if (q.lang === 'zh-TW' && !ZH_RE.test(opt.text)) {
        errors.push({
          id: q.id,
          examCode: q.examCode,
          lang: q.lang,
          field: `option ${opt.label}`,
          issue: 'zh-TW option has no Chinese',
          sample: opt.text.slice(0, 60),
        })
      }
      if (q.lang === 'en' && ZH_RE.test(opt.text)) {
        errors.push({
          id: q.id,
          examCode: q.examCode,
          lang: q.lang,
          field: `option ${opt.label}`,
          issue: 'en option has Chinese',
          sample: opt.text.slice(0, 60),
        })
      }
    }
  }
}

const critical = errors.filter((e) => e.field === 'stem' || e.field.startsWith('option'))
const warnings = errors.filter((e) => e.field !== 'stem' && !e.field.startsWith('option'))

if (domainErrors.length > 0) {
  console.error(`❌ ${domainErrors.length} AIF-C01 domain ERRORS:`)
  for (const e of domainErrors.slice(0, 10)) {
    console.error(`  [${e.id}] ${e.issue}`)
  }
  if (domainErrors.length > 10) console.error(`  ... and ${domainErrors.length - 10} more`)
}

if (critical.length > 0 || warnings.length > 0 || domainErrors.length > 0) {
  const byField = {}
  for (const e of errors) {
    const key = `${e.examCode}/${e.lang}/${e.field.replace(/ [A-F]$/, '')}`
    byField[key] = (byField[key] || 0) + 1
  }

  if (warnings.length > 0) {
    console.warn(`⚠️  ${warnings.length} language warnings (metadata fields):`)
    for (const [key, count] of Object.entries(byField).sort((a, b) => b[1] - a[1])) {
      if (!/stem|option/.test(key)) console.warn(`  ${key}: ${count}`)
    }
  }

  if (critical.length > 0) {
    console.error(`\n❌ ${critical.length} language ERRORS (stem/options):`)
    for (const [key, count] of Object.entries(byField).sort((a, b) => b[1] - a[1])) {
      if (/stem|option/.test(key)) console.error(`  ${key}: ${count}`)
    }
    console.error()
    for (const e of critical.slice(0, 5)) {
      console.error(`  [${e.id}] ${e.field}: "${e.sample}"`)
    }
    if (critical.length > 5) console.error(`  ... and ${critical.length - 5} more`)
    process.exitCode = 1
  } else {
    console.log('✅ Questions pass language check (stem/options clean, metadata warnings above)')
  }

  if (domainErrors.length > 0) process.exitCode = 1
} else {
  console.log('✅ All questions pass language consistency check')
}
