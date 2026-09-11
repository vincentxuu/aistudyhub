#!/usr/bin/env node
// pnpm verify — the single canonical quality gate.
// Runs every fast, offline, deterministic check. If green, safe to commit.
// Used by: pre-commit hook, any CI.

import { exec } from 'node:child_process'
import { resolve } from 'node:path'
import { promisify } from 'node:util'

const ROOT = resolve('.')
const execAsync = promisify(exec)

const steps = [
  { name: 'biome check', command: 'npx @biomejs/biome check src/' },
  { name: 'lint:ui', command: 'bash scripts/lint-ui.sh' },
  { name: 'build', command: 'npx vite build' },
]

const results = []

for (const step of steps) {
  try {
    await execAsync(step.command, {
      cwd: ROOT,
      encoding: 'utf8',
      maxBuffer: 64 * 1024 * 1024,
    })
    results.push({ name: step.name, ok: true })
  } catch (error) {
    const out = [error.stdout, error.stderr]
      .map((s) => s?.toString().trim())
      .filter(Boolean)
      .join('\n')
    results.push({ name: step.name, ok: false, detail: out || error.message })
  }
}

console.log('\n=== verify ===')
let allOk = true
for (const r of results) {
  const icon = r.ok ? '✅' : '❌'
  console.log(`${icon} ${r.name}`)
  if (!r.ok) {
    allOk = false
    if (r.detail) {
      const lines = r.detail.split('\n').slice(0, 15)
      for (const line of lines) {
        console.log(`   ${line}`)
      }
      if (r.detail.split('\n').length > 15) {
        console.log('   ... (truncated)')
      }
    }
  }
}
console.log()

if (!allOk) {
  console.log('❌ verify failed — fix the issues above before committing.')
  process.exit(1)
} else {
  console.log('✅ All checks passed.')
}
