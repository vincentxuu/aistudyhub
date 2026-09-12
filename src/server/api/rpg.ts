import { createServerFn } from '@tanstack/react-start'
import type { RpgQuestion } from '../../lib/rpg/engine.ts'

export const fetchRpgQuestions = createServerFn({ method: 'GET' })
  .validator((input: { lang: 'zh-TW' | 'en' }) => {
    if (input.lang !== 'zh-TW' && input.lang !== 'en') throw new Error('Unsupported RPG language')
    return input
  })
  .handler(async ({ data }) => {
    const { default: curated } = await import('../../../data/rpg/questions.json')
    const questions = (curated as RpgQuestion[]).filter((question) => question.lang === data.lang)
    return { ok: true as const, questions }
  })
