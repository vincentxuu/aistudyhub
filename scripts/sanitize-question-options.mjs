#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const writeChanges = process.argv.includes('--write')
const questionFile = resolve('data/questions.json')
const questions = JSON.parse(readFileSync(questionFile, 'utf8'))

let affectedQuestions = 0
let removedOptions = 0
let cleanedTexts = 0
let correctedAnswers = 0

for (const question of questions) {
  const seenLabels = new Set()
  const duplicateLabels = new Set()
  const sanitizedOptions = []
  let changed = false

  for (const option of question.options || []) {
    if (seenLabels.has(option.label)) {
      if (!question.correctAnswers.includes(option.label)) {
        throw new Error(`${question.id}: refusing to remove conflicting duplicate option ${option.label}`)
      }
      duplicateLabels.add(option.label)
      removedOptions++
      changed = true
      continue
    }

    seenLabels.add(option.label)
    const text = option.text
      .replace(/^\s*\*\*/, '')
      .replace(/\*\*\s*$/, '')
      .trim()
    if (text !== option.text) {
      cleanedTexts++
      changed = true
    }
    sanitizedOptions.push({ ...option, text })
  }

  if (changed) {
    affectedQuestions++
    question.options = sanitizedOptions
  }

  if (question.type === 'single' && question.correctAnswers.length > 1 && duplicateLabels.size === 1) {
    question.correctAnswers = [...duplicateLabels]
    correctedAnswers++
  }

  const labels = new Set(question.options.map((option) => option.label))
  for (const answer of question.correctAnswers) {
    if (!labels.has(answer)) {
      throw new Error(`${question.id}: correct answer ${answer} has no matching option after sanitization`)
    }
  }
}

if (writeChanges) {
  writeFileSync(questionFile, `${JSON.stringify(questions, null, 2)}\n`)
}

console.log(
  `${writeChanges ? '✅ Sanitized' : 'ℹ️ Would sanitize'} ${affectedQuestions} questions: ` +
    `${removedOptions} duplicate options removed, ${cleanedTexts} option texts cleaned, ` +
    `${correctedAnswers} answer keys corrected`,
)

if (!writeChanges && affectedQuestions > 0) process.exitCode = 1
