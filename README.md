<div align="center">

# AI Study Hub

**Learn AI by doing questions.**

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
![Status](https://img.shields.io/badge/status-early_preview-orange.svg)

[Quick start](#quick-start) · [Features](#features) · [Import questions](#import-questions) · [Tech stack](#tech-stack) · [Docs](#documentation)

[English](README.md) · [繁體中文](README.zh-TW.md)

</div>

AI Study Hub is an open-source, test-driven learning platform for AI certifications and university courses. Every concept becomes a question. Mock exams, practice drills, diagnostic tests, and a wrong-answer journal with reflection — all in one place.

> [!IMPORTANT]
> AI Study Hub is an early preview. The question bank currently covers AWS AIF-C01 (192 questions). More certifications and university course quizzes are on the roadmap.

## Features

| Feature | Description |
| --- | --- |
| **Mock Exam** | 65 questions, 90-minute timer, domain-weighted distribution matching the real AIF-C01 exam |
| **Practice Mode** | Filter by domain, difficulty, and question count. Immediate feedback with explanations |
| **Diagnostic Test** | 20-question assessment (4 per domain) to find your weak areas before deep study |
| **Wrong Answer Journal** | Auto-collects mistakes. Write "why did I pick wrong?" reflections. Practice wrong answers only |
| **Simulate Real Exam** | One-click preset that mirrors the actual exam's domain weights and time limit |
| **Question Import** | Markdown parser with auto-format detection and deduplication. Supports 6 input formats |
| **i18n** | Traditional Chinese (default) and English. All UI text through translation keys |
| **Dark / Light Theme** | Happy Hues Palette 2 color system. Toggle with one click |

## Quick start

Requirements: Node.js 22+, pnpm 10+.

```bash
git clone https://github.com/vincentxuu/aistudyhub.git
cd aistudyhub
pnpm install
pnpm dev
```

Open `http://localhost:3000` in your browser.

## Import questions

AI Study Hub auto-detects 6 Markdown/JSON formats and deduplicates across sources. You can generate questions with any AI (ChatGPT, Gemini, Claude) and import them.

```bash
# Import a single file
pnpm import questions data/raw-questions/my-questions.md --exam AIF-C01

# Import a directory
pnpm import questions data/raw-questions/ --exam AIF-C01

# Dry run (preview without writing)
pnpm import questions data/raw-questions/ --exam AIF-C01 --dry-run
```

See [docs/IMPORT-SPEC.md](docs/IMPORT-SPEC.md) for supported formats and the recommended prompt template for AI-generated questions.

### Current question bank

| Exam | Questions | Source |
| --- | --- | --- |
| AWS AIF-C01 | 192 (deduplicated from 257) | 4 Markdown files, 2 question sets |

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | [TanStack Start](https://tanstack.com/start) (React, SSR) |
| Router | [TanStack Router](https://tanstack.com/router) (file-based, type-safe) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com) pattern (CVA + Radix) |
| Icons | [@sketchyicons/react](https://github.com/sketchyicons/sketchyicons) (hand-drawn Lucide) |
| Linting | [Biome](https://biomejs.dev) + custom `lint:ui` anti-pattern check |
| Deploy target | [Cloudflare Pages](https://pages.cloudflare.com) |
| Color system | [Happy Hues Palette 2](https://www.happyhues.co/palettes/2) |

## Development

```bash
pnpm dev              # Start dev server
pnpm build            # Production build
pnpm verify           # Quality gate: biome + lint:ui + build (runs on pre-commit)
pnpm lint             # Biome lint check
pnpm lint:fix         # Biome auto-fix
pnpm lint:ui          # Custom UI anti-pattern check
pnpm format           # Biome format
pnpm session:start    # Print status + run verify
```

Pre-commit hook runs `pnpm verify` automatically — works with Claude Code, Codex, Cursor, and manual git.

## Project structure

```
src/
  components/
    ui/              # shadcn-style base components (Button, Card, Badge, Progress, ...)
    exam/            # Shared exam components (OptionCard, QuestionView, CircularTimer, QuestionGrid)
    icons/           # koboyo hand-drawn icons (React wrapper)
  i18n/              # Translation files (zh-TW, en)
  lib/               # Question parser, loader, dedup engine, utilities
  routes/            # TanStack Router pages
data/
  questions.json     # Imported question bank
  raw-questions/     # Source Markdown files
docs/                # PLAN.md, IMPORT-SPEC.md, USER-FLOWS.md, COLOR-SPEC.md
scripts/             # Import, lint, verify, session-start
```

## Documentation

| Document | Description |
| --- | --- |
| [PLAN.md](docs/PLAN.md) | Product and technical plan — 3 content tracks, phased rollout |
| [IMPORT-SPEC.md](docs/IMPORT-SPEC.md) | Question import specification — 6 formats, dedup strategy, AI prompt template |
| [USER-FLOWS.md](docs/USER-FLOWS.md) | User flows — content creator and learner journeys |
| [COLOR-SPEC.md](docs/COLOR-SPEC.md) | Color specification — Happy Hues Palette 2 mapping, usage rules |
| [CLAUDE.md](CLAUDE.md) | AI agent rules — component inventory, color rules, icon rules |

## Roadmap

- [ ] Deploy to Cloudflare Pages
- [ ] More certification question banks (Claude, NVIDIA, Microsoft, Google)
- [ ] University course quizzes (CS229, CS224N, 6.S191, etc.) — generated from [quidproquo.cc](https://quidproquo.cc) study guides
- [ ] Concept cross-reference (bridge certifications and courses)
- [ ] User accounts with D1 persistence
- [ ] Performance analytics and predicted exam scores

## Related

- [quidproquo.cc](https://quidproquo.cc) — The "read" side: 500+ deep articles on AI certifications, university courses, RAG techniques, and LLM training. AI Study Hub is the "test" side.

## License

[MIT](LICENSE)
