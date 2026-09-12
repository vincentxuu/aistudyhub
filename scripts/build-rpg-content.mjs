#!/usr/bin/env node
import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'

const read = (path) => JSON.parse(readFileSync(path, 'utf8'))
const bank = read('data/questions.json')
const rpgLedger = read('data/rpg/reviews.json')
const families = read('data/rpg/families.json')
const sources = read('data/rpg/sources.json')
const usedIds = new Set()
const usedFamilies = new Set()
const questions = families.flatMap((family) => {
  assert(!usedFamilies.has(family.familyId), `Duplicate family: ${family.familyId}`)
  usedFamilies.add(family.familyId)
  assert(family.conceptId, `Missing concept: ${family.familyId}`)
  const contentVersion = createHash('sha256').update(['zh-TW', 'en'].map(lang => {
    const q = bank.find(item => item.id === family.questionIds[lang]);
    assert(q, `Missing language sibling: ${family.familyId}`);
    return q.hash;
  }).join(':')).digest('hex').slice(0, 16)
  return ['zh-TW', 'en'].map((lang) => {
    const id = family.questionIds[lang]
    assert(id && !usedIds.has(id), `Missing or duplicate question: ${id}`)
    usedIds.add(id)
    const question = bank.find((item) => item.id === id)
    assert(question, `Question not found: ${id}`)
    assert.equal(question.lang, lang)
    assert.equal(question.examCode, 'AIF-C01')
    assert.equal(question.domainNumber, family.domainNumber)
    const rpgReview = rpgLedger.records.find((item) => item.id === id)
    const review = rpgReview
    assert(review, `Missing audit: ${id}`)
    assert.equal(review.questionHash, question.hash, `Stale audit: ${id}`)
    assert.equal(review.status, 'verified', `Unverified: ${id}`)
    assert(review.reviewer?.trim() && !Number.isNaN(Date.parse(review.reviewedAt)))
    for (const check of ['stem', 'answer', 'explanation', 'distractors', 'examScope']) {
      assert.equal(review.checks[check], true, `Missing ${check} audit: ${id}`)
    }
    assert(review.referenceUrls.length > 0)
    for (const url of review.referenceUrls) {
      assert(url.startsWith('https://'))
    }
    const references = review.referenceUrls.map((url) => {
      const source = sources.find((entry) => entry.url === url)
      assert(source?.status === 200, `Missing successful source retrieval: ${url}`)
      return { title: source.title, url }
    })
    return { ...question, reviewed: true, references, familyId: family.familyId, conceptId: family.conceptId, contentVersion }
  })
})
const output = `${JSON.stringify(questions, null, 2)}\n`
if (process.argv.includes('--check')) {
  assert.equal(readFileSync('data/rpg/questions.json', 'utf8'), output, 'RPG content is stale: run node scripts/build-rpg-content.mjs')
} else {
  writeFileSync('data/rpg/questions.json', output)
}
console.log(`RPG content: ${families.length} bilingual families, ${questions.length} question records; all review hashes match.`)
