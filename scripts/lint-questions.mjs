#!/usr/bin/env node
// Validate questions.json for language consistency.
// Each question's text fields must match its declared lang.
// zh-TW: text fields must contain CJK characters
// en: text fields must NOT contain CJK characters
// Short terms, AWS service names, and technical jargon are exempt.

import { readFileSync } from 'node:fs'

const ZH_RE = /[一-鿿]/
const VERB_RE = / (is|are|should|would|could|can|will|does|do|has|have|must|need|want|use|make|take|give|provide|ensure|require|allow|enable|prevent|create|build|deploy|configure|implement|select|choose) /i

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
      id: q.id, examCode: q.examCode, lang: q.lang,
      field: fieldName,
      issue: `zh-TW ${fieldName} has no Chinese`,
      sample: value.slice(0, 80),
    })
  }
  if (q.lang === 'en' && ZH_RE.test(value)) {
    errors.push({
      id: q.id, examCode: q.examCode, lang: q.lang,
      field: fieldName,
      issue: `en ${fieldName} has Chinese`,
      sample: value.slice(0, 80),
    })
  }
}

const questions = JSON.parse(readFileSync('data/questions.json', 'utf8'))
const errors = []

for (const q of questions) {
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
          id: q.id, examCode: q.examCode, lang: q.lang,
          field: `option ${opt.label}`,
          issue: 'zh-TW option has no Chinese',
          sample: opt.text.slice(0, 60),
        })
      }
      if (q.lang === 'en' && ZH_RE.test(opt.text)) {
        errors.push({
          id: q.id, examCode: q.examCode, lang: q.lang,
          field: `option ${opt.label}`,
          issue: 'en option has Chinese',
          sample: opt.text.slice(0, 60),
        })
      }
    }
  }
}

const critical = errors.filter(e => e.field === 'stem' || e.field.startsWith('option'))
const warnings = errors.filter(e => e.field !== 'stem' && !e.field.startsWith('option'))

if (critical.length > 0 || warnings.length > 0) {
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
    process.exit(1)
  } else {
    console.log('✅ Questions pass language check (stem/options clean, metadata warnings above)')
  }
} else {
  console.log('✅ All questions pass language consistency check')
}
