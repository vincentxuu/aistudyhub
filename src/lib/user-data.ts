import type { ExamResult, WrongAnswer } from './questions.ts'

export interface UserData {
  version: 1
  exportedAt: string
  locale: string
  theme: string
  examResults: ExamResult[]
  wrongAnswers: WrongAnswer[]
}

export function collectUserData(): UserData {
  let examResults: ExamResult[] = []
  let wrongAnswers: WrongAnswer[] = []
  let locale = 'zh-TW'
  let theme = 'light'

  try {
    examResults = JSON.parse(localStorage.getItem('exam-results') || '[]')
  } catch {
    /* empty */
  }
  try {
    wrongAnswers = JSON.parse(localStorage.getItem('wrong-answers') || '[]')
  } catch {
    /* empty */
  }
  try {
    locale = localStorage.getItem('locale') || 'zh-TW'
  } catch {
    /* empty */
  }
  try {
    theme = localStorage.getItem('theme') || 'light'
  } catch {
    /* empty */
  }

  return {
    version: 1,
    exportedAt: new Date().toISOString(),
    locale,
    theme,
    examResults,
    wrongAnswers,
  }
}

export function exportUserData(): string {
  return JSON.stringify(collectUserData(), null, 2)
}

export function importUserData(json: string): { imported: number; conflicts: number } {
  const data = JSON.parse(json) as UserData
  if (data.version !== 1) throw new Error('Unsupported version')

  let imported = 0
  let conflicts = 0

  // Merge exam results (by id, keep newer)
  try {
    const existing: ExamResult[] = JSON.parse(localStorage.getItem('exam-results') || '[]')
    const existingIds = new Set(existing.map((r) => r.id))
    for (const r of data.examResults) {
      if (existingIds.has(r.id)) {
        conflicts++
      } else {
        existing.push(r)
        imported++
      }
    }
    localStorage.setItem('exam-results', JSON.stringify(existing))
  } catch {
    /* empty */
  }

  // Merge wrong answers (by questionId, keep existing reflection)
  try {
    const existing: WrongAnswer[] = JSON.parse(localStorage.getItem('wrong-answers') || '[]')
    const existingIds = new Set(existing.map((w) => w.questionId))
    for (const w of data.wrongAnswers) {
      if (existingIds.has(w.questionId)) {
        conflicts++
      } else {
        existing.push(w)
        imported++
      }
    }
    localStorage.setItem('wrong-answers', JSON.stringify(existing))
  } catch {
    /* empty */
  }

  return { imported, conflicts }
}

export function downloadUserData(): void {
  const json = exportUserData()
  const blob = new Blob([json], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const date = new Date().toISOString().slice(0, 10)
  const a = document.createElement('a')
  a.href = url
  a.download = `aistudyhub-data-${date}.json`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export function clearAllUserData(): void {
  try {
    localStorage.removeItem('exam-results')
    localStorage.removeItem('wrong-answers')
  } catch {
    /* empty */
  }
}

export function getUserStats(): { examCount: number; wrongCount: number; bestScore: number | null } {
  let examCount = 0
  let wrongCount = 0
  let bestScore: number | null = null

  try {
    const results: ExamResult[] = JSON.parse(localStorage.getItem('exam-results') || '[]')
    examCount = results.length
    if (results.length > 0) {
      bestScore = Math.max(...results.map((r) => r.score))
    }
  } catch {
    /* empty */
  }

  try {
    const wrong: WrongAnswer[] = JSON.parse(localStorage.getItem('wrong-answers') || '[]')
    wrongCount = wrong.length
  } catch {
    /* empty */
  }

  return { examCount, wrongCount, bestScore }
}
