# D1 Anonymous Session Persistence — Specification

Status: **Design only** — not yet implemented.

## Overview

Replace localStorage-only persistence with a layered system:

1. **localStorage** — instant read/write, offline fallback, per-browser
2. **Cloudflare D1** — server-side SQLite, persisted across sessions, same-device continuity via cookie
3. **GitHub OAuth** (future) — cross-device sync when user opts in

Users never need to create an account. An anonymous session is auto-created on first visit and tied to the browser via an HttpOnly cookie. GitHub login is optional and additive.

---

## D1 Schema

### `sessions`

```sql
CREATE TABLE sessions (
  id TEXT PRIMARY KEY,                -- nanoid(16)
  created_at TEXT NOT NULL,           -- ISO 8601
  last_active_at TEXT NOT NULL,
  user_agent TEXT,
  github_user_id TEXT,                -- null until OAuth linked
  github_username TEXT
);

CREATE INDEX idx_sessions_github ON sessions(github_user_id)
  WHERE github_user_id IS NOT NULL;
```

### `exam_results`

```sql
CREATE TABLE exam_results (
  id TEXT PRIMARY KEY,                -- nanoid(10), same as client sessionId
  session_id TEXT NOT NULL REFERENCES sessions(id),
  exam_code TEXT NOT NULL,
  score REAL NOT NULL,                -- percentage 0-100
  total_questions INTEGER NOT NULL,
  correct_count INTEGER NOT NULL,
  time_taken_ms INTEGER NOT NULL,
  domain_breakdown TEXT NOT NULL,     -- JSON: [{domain, correct, total}]
  completed_at TEXT NOT NULL
);

CREATE INDEX idx_results_session ON exam_results(session_id, completed_at);
```

### `wrong_answers`

```sql
CREATE TABLE wrong_answers (
  id TEXT PRIMARY KEY,                -- nanoid(12)
  session_id TEXT NOT NULL REFERENCES sessions(id),
  question_id TEXT NOT NULL,
  exam_code TEXT NOT NULL,
  selected_answers TEXT NOT NULL,     -- JSON array: ["A","C"]
  correct_answers TEXT NOT NULL,      -- JSON array: ["B"]
  reflection TEXT,                    -- user's "why did I pick wrong?" text
  attempted_at TEXT NOT NULL,
  reviewed_at TEXT,
  UNIQUE(session_id, question_id)
);

CREATE INDEX idx_wrong_session ON wrong_answers(session_id, exam_code);
```

### `question_stats`

```sql
CREATE TABLE question_stats (
  session_id TEXT NOT NULL REFERENCES sessions(id),
  question_id TEXT NOT NULL,
  attempts INTEGER DEFAULT 0,
  correct_count INTEGER DEFAULT 0,
  last_attempted_at TEXT,
  total_time_ms INTEGER DEFAULT 0,
  PRIMARY KEY (session_id, question_id)
);
```

### `domain_mastery`

```sql
CREATE TABLE domain_mastery (
  session_id TEXT NOT NULL REFERENCES sessions(id),
  exam_code TEXT NOT NULL,
  domain TEXT NOT NULL,
  total_attempted INTEGER DEFAULT 0,
  correct_count INTEGER DEFAULT 0,
  last_practiced_at TEXT,
  PRIMARY KEY (session_id, exam_code, domain)
);
```

---

## API Routes

TanStack Start server functions (not REST routes — they compile to server-side RPC).

| Endpoint | Method | Auth | Description |
|----------|--------|------|-------------|
| `/api/session` | POST | none | Create anonymous session, set `sid` HttpOnly cookie |
| `/api/session` | GET | cookie | Return current session metadata |
| `/api/session/sync` | POST | cookie | Bulk upsert: client sends localStorage data, D1 merges |
| `/api/results` | GET | cookie | List exam results for this session |
| `/api/results` | POST | cookie | Save one exam result |
| `/api/wrong-answers` | GET | cookie | List wrong answers, optional `?exam_code=` filter |
| `/api/wrong-answers` | POST | cookie | Save/upsert wrong answer (by session_id + question_id) |
| `/api/wrong-answers/:id/reflection` | PUT | cookie | Update reflection text only |
| `/api/stats` | GET | cookie | Get question_stats + domain_mastery aggregates |
| `/api/session/link` | POST | cookie + OAuth | Link anonymous session to GitHub user |
| `/api/session/merge` | POST | cookie + OAuth | Merge another anonymous session's data into this one |

### Cookie Details

```
Name:     sid
Value:    nanoid(16)
HttpOnly: true
Secure:   true
SameSite: Lax
Path:     /
MaxAge:   31536000 (1 year)
```

---

## Session Flow

### First Visit

```
Browser                              Worker + D1
  │                                      │
  ├─ GET /  ──────────────────────────► │
  │  (no `sid` cookie)                   │
  │                                      ├─ Generate session_id = nanoid(16)
  │                                      ├─ INSERT INTO sessions
  │  ◄──────────────── Set-Cookie: sid ──┤
  │                                      │
  ├─ Answer questions ──────────────────►│
  │  (client writes localStorage)        │
  │                                      │
  ├─ POST /api/session/sync ────────────►│
  │  { results: [...], wrongAnswers: [...] }
  │                                      ├─ Bulk UPSERT into D1
  │  ◄──────────── { synced: true } ─────┤
```

### Returning Visit (same browser)

```
Browser                              Worker + D1
  │                                      │
  ├─ GET /  (cookie: sid=abc123) ───────►│
  │                                      ├─ SELECT * FROM sessions WHERE id='abc123'
  │                                      ├─ UPDATE last_active_at
  │  ◄──────────── session data ─────────┤
  │                                      │
  ├─ Compare D1 timestamps vs localStorage
  │  → D1 is newer? Overwrite localStorage
  │  → localStorage is newer? POST /api/session/sync
```

### GitHub Login (optional, future)

```
Browser                              Worker              GitHub
  │                                      │                   │
  ├─ Click "Sign in with GitHub" ───────►│                   │
  │                                      ├─ Redirect ────────►
  │  ◄───────── github.com/authorize ────┤                   │
  │  (user approves)                     │                   │
  │  ◄──────────────── callback?code=xxx │                   │
  ├─ GET /api/auth/callback?code=xxx ───►│                   │
  │                                      ├─ POST /oauth/token ►
  │                                      │  ◄── access_token ─┤
  │                                      ├─ GET /user ────────►
  │                                      │  ◄── {id, login} ──┤
  │                                      │                   │
  │                                      ├─ UPDATE sessions SET github_user_id, github_username
  │                                      │
  │                                      ├─ Check: does this GitHub user have another session?
  │                                      │  → Yes: POST /api/session/merge (newer wins per record)
  │                                      │  → No: done
  │  ◄──────────── { linked: true } ─────┤
```

---

## Sync Strategy

### Write Path

Every time the client writes to localStorage (exam result, wrong answer, reflection), it also fires a non-blocking `POST` to the corresponding API. If the API call fails (offline, timeout), the data stays in localStorage and syncs on next page load.

```typescript
// Wrapper for all persistence writes
async function persist(key: string, data: unknown) {
  // 1. Always write localStorage (instant, works offline)
  localStorage.setItem(key, JSON.stringify(data))

  // 2. Best-effort sync to D1 (non-blocking)
  try {
    await fetch('/api/session/sync', {
      method: 'POST',
      body: JSON.stringify({ [key]: data }),
    })
  } catch {
    // Queue for retry on next page load
    const queue = JSON.parse(localStorage.getItem('_syncQueue') || '[]')
    queue.push({ key, data, timestamp: Date.now() })
    localStorage.setItem('_syncQueue', JSON.stringify(queue))
  }
}
```

### Read Path

```typescript
async function loadData(key: string) {
  const local = localStorage.getItem(key)
  try {
    const remote = await fetch(`/api/${key}`)
    const d1Data = await remote.json()
    // Compare timestamps, newer wins
    return pickNewer(local, d1Data)
  } catch {
    return local // Offline fallback
  }
}
```

### Conflict Resolution

- **Exam results**: append-only, no conflicts (each has unique id)
- **Wrong answers**: UNIQUE(session_id, question_id) — newer `attempted_at` wins
- **Reflections**: last-write-wins by timestamp
- **Question stats**: server-side accumulates (attempts += delta, not absolute set)
- **Domain mastery**: recomputed from question_stats, not stored independently in sync

---

## Cloudflare D1 Setup Steps

### 1. Create database

```bash
wrangler d1 create aistudyhub-db
```

Note the database ID from the output.

### 2. Add binding to `wrangler.jsonc`

```jsonc
{
  "name": "aistudyhub",
  "compatibility_date": "2026-09-01",
  "main": "./dist/server/server.js",
  "assets": {
    "directory": "./dist/client"
  },
  "d1_databases": [
    {
      "binding": "DB",
      "database_name": "aistudyhub-db",
      "database_id": "<from step 1>"
    }
  ]
}
```

### 3. Create migration

```bash
mkdir -p migrations
```

Write `migrations/0001_init.sql` with all CREATE TABLE statements above.

### 4. Apply migration

```bash
# Local dev
wrangler d1 execute aistudyhub-db --local --file=migrations/0001_init.sql

# Production
wrangler d1 execute aistudyhub-db --file=migrations/0001_init.sql
```

### 5. Access D1 in server functions

TanStack Start server functions can access Cloudflare bindings via the request context:

```typescript
import { createServerFn } from '@tanstack/react-start'

const getResults = createServerFn('GET', async (_, ctx) => {
  const env = ctx.env as { DB: D1Database }
  const sessionId = getSessionFromCookie(ctx.request)
  const results = await env.DB.prepare(
    'SELECT * FROM exam_results WHERE session_id = ? ORDER BY completed_at DESC'
  ).bind(sessionId).all()
  return results
})
```

---

## GitHub OAuth Setup (future)

### 1. Register OAuth App

Go to https://github.com/settings/developers → "New OAuth App":
- Application name: `AI Study Hub`
- Homepage URL: `https://aistudyhub.vincent-xu-work.workers.dev`
- Authorization callback URL: `https://aistudyhub.vincent-xu-work.workers.dev/api/auth/callback`

Save the `client_id` and `client_secret`.

### 2. Add secrets to Wrangler

```bash
wrangler secret put GITHUB_CLIENT_ID
wrangler secret put GITHUB_CLIENT_SECRET
```

### 3. OAuth Flow Implementation

```
GET  /api/auth/login    → redirect to GitHub authorize URL
GET  /api/auth/callback → exchange code for token, get user, link session
POST /api/auth/logout   → clear github_user_id from session (keep data)
```

### 4. UI

Add a "Sign in with GitHub" button in the header (only if not linked). Show GitHub avatar when linked. Signing in is optional — all features work without it.

---

## Migration from localStorage

### Phase 1: localStorage only (current)

All reads/writes go to `localStorage`. No server calls.

### Phase 2: D1 + localStorage dual-write

1. On page load, check for `sid` cookie
2. If no cookie → create anonymous session (server call)
3. If cookie exists → fetch D1 data, compare with localStorage
4. All writes → localStorage first (instant), then non-blocking POST to D1
5. Sync queue for offline/failed writes
6. `src/lib/questions.ts` functions (saveResult, saveWrongAnswer, etc.) gain an optional async D1 sync call

### Phase 3: D1 primary, localStorage cache

1. Reads check D1 first, fall back to localStorage
2. localStorage becomes a performance cache, not source of truth
3. Offline mode still works via localStorage

### Graceful degradation

If D1 is unavailable (binding not configured, API error), the app works exactly as it does today — localStorage only. No user-visible error.

```typescript
function isD1Available(): boolean {
  return typeof globalThis.__env?.DB !== 'undefined'
}
```

---

## Estimated Implementation Effort

| Component | Effort | Dependencies |
|-----------|--------|-------------|
| D1 schema + migration | 1 hour | wrangler CLI |
| Session creation + cookie | 2 hours | wrangler.jsonc binding |
| API routes (server functions) | 4 hours | TanStack Start server fns + D1 |
| Sync logic (dual-write wrapper) | 3 hours | Existing localStorage fns |
| Sync queue + retry | 2 hours | None |
| GitHub OAuth flow | 4 hours | GitHub OAuth App registration |
| Session merge logic | 2 hours | OAuth flow |
| UI (login button, sync indicator) | 2 hours | shadcn components |
| **Total** | **~20 hours** | |

Recommended order: schema → session cookie → API routes → dual-write → sync queue → OAuth (optional last step).

---

## Files to Create/Modify

| File | Action |
|------|--------|
| `migrations/0001_init.sql` | Create — all CREATE TABLE statements |
| `wrangler.jsonc` | Modify — add d1_databases binding |
| `src/lib/persistence.ts` | Create — dual-write wrapper, sync queue |
| `src/server/session.ts` | Create — session creation, cookie handling |
| `src/server/api/*.ts` | Create — server functions for each API route |
| `src/lib/questions.ts` | Modify — wrap localStorage calls with persist() |
| `src/components/SyncIndicator.tsx` | Create — small UI showing sync status |
| `src/components/Header.tsx` | Modify — add GitHub login button (optional) |
