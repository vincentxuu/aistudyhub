import '@tanstack/react-start/server-only'
import { getCookie, setCookie } from '@tanstack/react-start/server'
import { nanoid } from 'nanoid'
import { getDB } from './d1.ts'

const SESSION_COOKIE = 'sid'
const ONE_YEAR = 365 * 24 * 60 * 60

export function getSessionId(): string | undefined {
  return getCookie(SESSION_COOKIE)
}

export function setSessionCookie(id: string): void {
  setCookie(SESSION_COOKIE, id, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: ONE_YEAR,
  })
}

export async function ensureSession(userAgent?: string): Promise<string | null> {
  const existing = getSessionId()
  if (existing) {
    const db = await getDB()
    if (db) {
      await db
        .prepare('UPDATE sessions SET last_active_at = ? WHERE id = ?')
        .bind(new Date().toISOString(), existing)
        .run()
    }
    return existing
  }

  const db = await getDB()
  if (!db) return null

  const id = nanoid(16)
  const now = new Date().toISOString()
  await db
    .prepare('INSERT INTO sessions (id, created_at, last_active_at, user_agent) VALUES (?, ?, ?, ?)')
    .bind(id, now, now, userAgent ?? null)
    .run()

  setSessionCookie(id)
  return id
}

export async function getSessionData(sessionId: string) {
  const db = await getDB()
  if (!db) return null

  const result = await db.prepare('SELECT * FROM sessions WHERE id = ?').bind(sessionId).first()

  return result
}
