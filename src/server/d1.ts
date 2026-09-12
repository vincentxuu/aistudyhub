import '@tanstack/react-start/server-only'

interface CloudflareEnv {
  DB: D1Database
}

export async function getDB(): Promise<D1Database | null> {
  try {
    const mod = await import('cloudflare:workers')
    const env = (mod as unknown as { env: CloudflareEnv }).env
    return env?.DB ?? null
  } catch {
    return null
  }
}
