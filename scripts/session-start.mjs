#!/usr/bin/env node
// pnpm session:start — print project status, then run verify.

import { existsSync, readFileSync } from 'node:fs'
import { execSync } from 'node:child_process'
import { resolve } from 'node:path'

const ROOT = resolve('.')

function printSection(title, body) {
  process.stdout.write(`\n=== ${title} ===\n`)
  process.stdout.write(`${body}\n`)
}

function runCommand(title, command) {
  try {
    const output = execSync(command, {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    }).trim()
    printSection(title, output || '(no output)')
    return true
  } catch (error) {
    const stdout = error.stdout?.toString().trim()
    const stderr = error.stderr?.toString().trim()
    const combined = [stdout, stderr].filter(Boolean).join('\n')
    printSection(title, combined || error.message)
    return false
  }
}

printSection('pwd', ROOT)

// Git status
try {
  execSync('git rev-parse --is-inside-work-tree', { cwd: ROOT, stdio: 'ignore' })
  runCommand('git log -1', 'git log -1 --oneline')
} catch {
  printSection('git', '(not a git repo)')
}

// Progress
const progressPath = resolve(ROOT, 'progress.txt')
if (existsSync(progressPath)) {
  const progress = readFileSync(progressPath, 'utf8').trim()
  printSection('progress.txt', progress || '(empty)')
} else {
  printSection('progress.txt', '(missing)')
}

// Run verify
console.log()
runCommand('verify', 'node scripts/verify.mjs')
