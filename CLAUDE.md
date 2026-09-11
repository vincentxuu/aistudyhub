# aiexamprep — CLAUDE.md

## UI Component Rules (MANDATORY)

### Use installed components — never hand-craft UI primitives

The following Radix UI packages are installed. **Always** use them or the shadcn wrappers in `src/components/ui/`:

| Need | Use | NOT |
|------|-----|-----|
| Button | `src/components/ui/button.tsx` | `<button className="...">` with inline styles |
| Card | `src/components/ui/card.tsx` | `<div className="rounded-xl border ...">` |
| Badge | `src/components/ui/badge.tsx` | `<span className="rounded-full px-2 ...">` |
| Progress bar | `src/components/ui/progress.tsx` | `<div className="h-1 bg-...">` |
| Radio selection | `@radix-ui/react-radio-group` or `src/components/ui/radio-group.tsx` | `<button>` with circle icon |
| Checkbox | `@radix-ui/react-checkbox` or `src/components/ui/checkbox.tsx` | `<button>` with square icon |
| Modal/Dialog | `@radix-ui/react-dialog` | Fixed overlay `<div>` |
| Select | `@radix-ui/react-select` | `<select>` or custom dropdown |

If a component doesn't exist in `src/components/ui/`, **create it** as a proper shadcn-style wrapper with CVA variants before using it in a route. Do NOT inline the styling.

### Shared exam components

Reusable exam UI lives in `src/components/exam/`:

| Component | Purpose |
|-----------|---------|
| `OptionCard` | Single answer option (A/B/C/D) with states: default/hover/selected/correct/wrong |
| `QuestionView` | Question stem + options list — shared by exam and practice |
| `CircularTimer` | SVG ring countdown timer |
| `QuestionGrid` | Numbered circle grid for question navigation |

**Exam and practice routes must compose from these** — never duplicate option/question rendering.

### Color Rules

**Design system**: Happy Hues Palette 2 (https://www.happyhues.co/palettes/2). All colors defined as CSS variables in `src/styles.css`.

| Rule | ✅ Correct | ❌ Forbidden |
|------|-----------|-------------|
| Reference colors | `var(--sea-ink)`, `var(--lagoon)` | `#00214d`, `#00ebc7`, any hex literal |
| Transparent variants | Define in `styles.css` as a variable | `color-mix()` in JSX/TSX |
| Gradients | None. Use solid colors. | `linear-gradient(...)` |
| Button primary | `bg-[var(--lagoon)] text-[var(--palm)]` | `bg-green-500 text-white` |

**Zero tolerance**: no `color-mix()`, no hex literals, no `rgba()` in any `.tsx` file. If you need a new color variant, add it to `styles.css` as a CSS variable.

### Global CSS Rules

- **`styles.css` only defines CSS variables, keyframes, and minimal resets.** No element-level selectors like `a { color: ... }` or `h1 { ... }` that would conflict with Tailwind classes. All styling goes through Tailwind utilities in components.
- **Never set `color` on `a` tags globally** — it will cascade into `<Button asChild><Link>` and override the button's text color. Links inherit color; use Tailwind classes for specific link styling.
- **No `!important`** — if you need it, the cascade is wrong. Fix the source, don't force it.

### Icons

Use `@sketchyicons/react` (hand-drawn Lucide variant). NOT `lucide-react`.

```tsx
import { Clock, Flag } from '@sketchyicons/react'
```

### i18n

ALL user-facing text must use `t()` from `useI18n()`. No hardcoded Chinese or English strings in JSX.

## Tech Stack

- **TanStack Start** (React, SSR)
- **TanStack Router** (file-based routing)
- **Tailwind CSS v4** (utility classes only, no custom CSS classes)
- **shadcn/ui pattern** (CVA + Radix + Tailwind, components in `src/components/ui/`)
- **@sketchyicons/react** (icons)
- **Cloudflare Pages** (deploy target)

## Key Directories

```
src/
  components/ui/       # shadcn-style base components (Button, Card, Badge, etc.)
  components/exam/     # Shared exam components (OptionCard, QuestionView, etc.)
  components/icons/    # koboyo hand-drawn icons (React wrapper)
  i18n/                # Translation files (zh-TW default, en)
  lib/                 # question-parser, questions loader, utils
  routes/              # TanStack Router pages
data/
  questions.json       # Imported question bank (192 AIF-C01)
  raw-questions/       # Source markdown files
docs/                  # PLAN.md, IMPORT-SPEC.md, USER-FLOWS.md
```

## Dev Commands

```bash
pnpm dev              # Start dev server
pnpm build            # Production build
pnpm verify           # THE quality gate: biome + lint:ui + build (must pass before commit)
pnpm lint             # Biome lint check
pnpm lint:fix         # Biome auto-fix
pnpm lint:ui          # Custom UI anti-pattern check (color-mix, hex, gradient, lucide)
pnpm format           # Biome format
pnpm session:start    # Print status + run verify (run at session start)
```

## Commit Convention

- Pre-commit hook runs `pnpm verify` — red means fix, don't skip with --no-verify
- This applies to ALL tools: Claude Code, Codex, Cursor, manual git
- The hook uses `simple-git-hooks`, configured in package.json
