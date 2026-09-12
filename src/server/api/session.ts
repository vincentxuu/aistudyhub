import { createServerFn } from '@tanstack/react-start'
import { getRequestHeader } from '@tanstack/react-start/server'
import { ensureSession, getSessionData, getSessionId } from '../session.ts'

export const createSession = createServerFn({ method: 'POST' }).handler(async () => {
  const userAgent = getRequestHeader('user-agent')
  const sessionId = await ensureSession(userAgent)
  if (!sessionId) return { ok: false as const, reason: 'D1 unavailable' }
  return { ok: true as const, sessionId }
})

export const getSession = createServerFn({ method: 'GET' }).handler(async () => {
  const sessionId = getSessionId()
  if (!sessionId) return { ok: false as const, reason: 'no session' }
  const data = await getSessionData(sessionId)
  if (!data) return { ok: false as const, reason: 'session not found' }
  return { ok: true as const, session: data }
})
