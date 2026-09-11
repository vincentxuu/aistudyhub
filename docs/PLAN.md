# AI Exam Prep — Product & Technical Plan

## Vision

**Learn AI by doing questions.** A global, English-first platform that turns all AI learning — certification exams and university courses — into interactive, test-driven practice. You don't just read — you prove you understand.

Site: **aiexamprep.cc** (TBD)

---

## Core Principle

> **Everything becomes questions.**
>
> Certification domains → question bank.
> University course lectures → question bank.
> RAG techniques, LLM training, agent design → question bank.
>
> One unified exam engine serves all content. Questions are tagged by source (cert / course / topic series), never mixed in the same exam session.

---

## Relationship with quidproquo.cc

quidproquo is **"read"**, aiexamprep is **"test"**. Two sites, one knowledge base.

### What quidproquo already has (no need to rebuild)

| Category | Articles | Content |
|----------|----------|---------|
| University courses | **229 篇** | CS229, CS224N, CS221, CS224W, CS336, CS224V, 6.S191, CMU 11-785, CMU 07-280, CS329Z, CS146S, CS124, CS230, CS50 AI |
| Certification prep | **24 篇** | AWS, Claude, NVIDIA, Microsoft, Google — prep guides + comparisons |
| RAG techniques | **53 篇** | Complete RAG compendium |
| LLM training from scratch | **24 篇** | Tokenization → pretraining → RLHF |
| Coding agent design | **78 篇** | Agent design patterns |
| AI conference papers | **45 篇** | Paper reading guides |
| Statistics | **45 篇** | Full university statistics curriculum |

**None of these have practice questions.** That's the gap.

### How the two sites connect

```
quidproquo article (read)          aiexamprep (test)
────────────────────               ─────────────────
CS229 Lecture 3 導讀   ──link──→   CS229 Lecture 3 Quiz (15 questions)
AIF-C01 備考指南       ──link──→   AIF-C01 Mock Exam (65 questions)
RAG 技法：HyDE        ──link──→   RAG Techniques Quiz: HyDE (10 questions)

aiexamprep results     ──link──→   quidproquo article for review
"You got Recall wrong" ──link──→   "Read CS229 Lecture 3 on quidproquo"
```

---

## Target Audience

- Engineers / PMs / data scientists preparing for AI certifications
- Students taking university AI/ML courses
- Self-learners who want active recall over passive reading
- Global English-speaking market
- Secondary: zh-TW (bilingual support later)

---

## Content Tracks

Questions are separate per track — never mixed in one exam. But concepts cross-reference across tracks.

### Track 1: Certification Exams
Industry certification mock exams. Questions are scenario-based, vendor-specific.

| Vendor | Certs |
|--------|-------|
| AWS | AIF-C01, AIP-C01 |
| Anthropic | Claude Associate, Developer, Architect (Foundations + Professional) |
| NVIDIA | NCA-GENL, NCP-GENL, NCA-GENM, NCP-AAI |
| Microsoft | AI-103, AB-100, AB-620, AI-500 |
| Google | PMLE |

Question style: "Which AWS service…", "A company needs to…"

### Track 2: University Courses
Lecture-by-lecture quizzes that mirror open courseware. Questions test conceptual understanding.

| Course | Institution | Lectures | quidproquo articles | Questions to generate |
|--------|-------------|----------|---------------------|----------------------|
| CS229 | Stanford | 22 | 22 | ~330 |
| CS224N | Stanford | 20 | 20 | ~300 |
| CS221 | Stanford | 21 | 21 | ~315 |
| CS224W | Stanford | 20 | 20 | ~300 |
| CS336 | Stanford | 18 | 18 | ~270 |
| CS224V | Stanford | 15 | 15 | ~225 |
| CS329Z | Stanford | 11 | 11 | ~165 |
| CS230 | Stanford | 8 | 8 | ~120 |
| CS124 | Stanford | 11 | 11 | ~165 |
| CS146S | Stanford | 11 | 11 | ~165 |
| CMU 11-785 | CMU | 29 | 29 | ~435 |
| CMU 07-280 | CMU | 29 | 29 | ~435 |
| 6.S191 | MIT | 13 | 13 | ~195 |
| CS50 AI | Harvard | 1 | 1 | ~15 |
| **Total** | | **229** | **229** | **~3,435** |

Question styles (different from cert):

| Style | Example |
|-------|---------|
| **Concept check** | "What happens when the learning rate is too large?" |
| **Compare & contrast** | "How does batch differ from stochastic gradient descent?" |
| **Apply to scenario** | "Training loss oscillates wildly. What should you adjust?" |
| **Formula understanding** | "In θ := θ - α∇J(θ), what does α control?" |
| **Common misconception** | "Which is FALSE about gradient descent convergence?" |
| **Bridge to practice** | "In PyTorch, which optimizer implements SGD with momentum?" |

### Track 3: Topic Series
Deep-dive series from quidproquo, turned into quizzes.

| Series | Articles | Questions to generate |
|--------|----------|----------------------|
| RAG techniques | 53 | ~530 |
| LLM training from scratch | 24 | ~240 |
| Coding agent design | 78 | ~780 |
| Statistics | 45 | ~450 |
| AI conference papers | 45 | ~450 |
| **Total** | **245** | **~2,450** |

### Total question capacity

| Source | Questions |
|--------|-----------|
| Cert exams (hand-written) | ~130 now, ~1,000+ target |
| University courses (AI-generated + reviewed) | ~3,435 |
| Topic series (AI-generated + reviewed) | ~2,450 |
| **Grand total** | **~7,000** |

---

## Question Generation Pipeline

The 229 course articles and 245 topic series articles are the **source material**. Questions are generated from them, not written from scratch.

### Pipeline

```
1. Source article (quidproquo Markdown)
   ↓
2. Extract key concepts, formulas, definitions, comparisons
   ↓
3. AI generates 10-15 candidate questions per article
   - 6 question styles (concept/compare/scenario/formula/misconception/practice)
   - Include hint, explanation, trap, key terms
   - Output as standard Markdown (Format D)
   ↓
4. Human review + edit
   - Fix inaccuracies
   - Adjust difficulty ratings
   - Remove low-quality questions
   - Tag concepts
   ↓
5. Import pipeline (same as cert questions)
   - Parse Markdown → standard JSON
   - Dedup against existing questions
   - Write to D1
```

### Generation prompt template (per article)

```
Given this study guide for [Course] [Topic]:
<article content>

Generate 15 multiple-choice questions that test understanding of the key concepts.

Requirements:
- Mix of 6 styles: concept check, compare/contrast, apply to scenario,
  formula understanding, common misconception, bridge to practice
- Each question has 4 options (A-D), one correct answer
- Include: hint (one sentence nudge), explanation (why correct),
  why others are wrong, common trap, difficulty (1-3)
- Questions should test UNDERSTANDING, not memorization
- Output in Markdown Format D
```

### Quality gates

- AI-generated questions are flagged `reviewed: false` until human review
- Unreviewed questions can be used in practice mode (with disclaimer)
- Only `reviewed: true` questions appear in exam mode
- Each question tracks: `generatedBy`, `reviewedBy`, `reviewedAt`

---

## Tech Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | **TanStack Start** (React) | Full-stack, type-safe, server functions |
| Router | **TanStack Router** | File-based, type-safe params |
| Deploy | **Cloudflare Pages** | Edge-first, existing account |
| Database | **Cloudflare D1** (SQLite) | Questions, user progress, scores |
| Auth | **Lucia** or Cloudflare Access | Simple user accounts |
| ORM | **Drizzle** | Lightweight, D1-native |
| Styling | **Tailwind CSS v4** | Rapid development |
| Content | **MDX** / Markdown | Guides, course notes |

---

## Data Model

### Question Schema

```typescript
interface Question {
  id: string                  // nanoid
  hash: string                // dedup key (normalized stem + correct answers)

  // Source classification
  track: 'certification' | 'course' | 'series'
  examCode: string | null     // "AIF-C01" (cert questions)
  courseCode: string | null    // "CS229" (course questions)
  seriesSlug: string | null   // "rag-techniques" (series questions)
  topicSlug: string | null    // "lecture-03" or "hyde"

  // Categorization
  domain: string              // Cert domain or course topic name
  domainNumber: number
  difficulty: 1 | 2 | 3
  type: 'single' | 'multi' | 'ordering' | 'matching'
  questionStyle: 'concept' | 'compare' | 'scenario' | 'formula' | 'misconception' | 'practice' | 'service-pick' | 'other'
  tags: string[]
  concepts: string[]          // ["precision-recall", "confusion-matrix"]

  // Content
  stem: string
  keyTerms: string[]
  options: { label: string; text: string }[]
  correctAnswers: string[]
  hint: string | null
  explanation: string | null
  whyOthersWrong: string | null
  trap: string | null
  mnemonic: string | null

  // Relations
  relatedQuestionIds: string[]
  sourceArticleUrl: string | null  // Link back to quidproquo article

  // Provenance
  sourceFile: string
  generatedBy: 'human' | 'ai'
  reviewed: boolean
  reviewedBy: string | null
  reviewedAt: string | null
  lang: 'en' | 'zh-TW'
}
```

### Concept Schema (cross-cutting)

```typescript
interface Concept {
  id: string                  // "precision-recall"
  name: string                // "Precision & Recall"
  category: string            // "ML Evaluation"
  summary: string
  certDomains: string[]       // Which cert domains test this
  courseTopics: string[]       // Which course topics cover this
  seriesTopics: string[]      // Which series topics cover this
  quidproquoUrl: string | null // Deep-dive article on quidproquo
}
```

### User Progress Schema

```typescript
interface UserAttempt {
  userId: string
  questionId: string
  selectedAnswers: string[]
  isCorrect: boolean
  timeSpentMs: number
  attemptedAt: string
}

interface ExamSession {
  id: string
  userId: string
  track: 'certification' | 'course' | 'series'
  trackCode: string           // "AIF-C01" or "CS229" or "rag-techniques"
  mode: 'exam' | 'practice' | 'review'
  totalQuestions: number
  correctCount: number
  score: number
  timeTakenMs: number
  completedAt: string
  domainBreakdown: {
    domain: string
    correct: number
    total: number
  }[]
}
```

---

## Import Pipeline

### Supported Input Formats

1. **Format A** — `### Q1（單選）` + `<details>` answer/explanation
2. **Format B-rich** — `## Question 1` + ⭐ difficulty + multi-layer `<details>` (hint/answer/explanation/trap/mnemonic)
3. **Format C** — `**1.**` + inline `**答案：X**` compact
4. **Format D** — AI-generated course/series questions (standardized output)

### Deduplication Strategy

| Layer | Method | Action |
|-------|--------|--------|
| **Exact dedup** | Normalize stem → SHA-256 hash | Merge metadata from richest source |
| **Semantic dedup** | Same correct answer + same domain + similar key terms | Mark as `relatedQuestionIds`, keep both |

---

## Page Structure

```
/                                        → Landing (3 tracks: Certs / Courses / Topics)

# Certification Track
/certifications                          → All certifications overview
/certifications/[code]                   → Single cert (intro + start)
/exam/[code]                             → Mock exam (timed, full simulation)
/exam/[code]/results/[sessionId]         → Results (score, domain radar chart)
/practice/[code]                         → Practice (pick domain, difficulty)

# Course Track
/courses                                 → All courses overview
/courses/[course-slug]                   → Course landing (syllabus, progress per lecture)
/courses/[course-slug]/[topic]           → Topic page (study notes summary)
/courses/[course-slug]/[topic]/quiz      → Topic quiz (10-20 questions)
/courses/[course-slug]/exam              → Course-wide mock exam (sample all topics)
/courses/[course-slug]/exam/results/[id] → Course exam results

# Topic Series Track
/series                                  → All topic series
/series/[series-slug]                    → Series landing (topics list, progress)
/series/[series-slug]/[topic]/quiz       → Topic quiz
/series/[series-slug]/exam               → Series-wide mock exam

# Cross-cutting
/concepts                                → Concept library (searchable)
/concepts/[concept-id]                   → Single concept + linked questions from all tracks

# User
/dashboard                               → Scores, weak areas, history
/dashboard/wrong-answers                 → Wrong answer notebook
/dashboard/learning-paths                → Active paths across all tracks

# Admin
/import                                  → Import question bank (Markdown upload)
/review                                  → Review AI-generated questions (approve/edit/reject)
```

---

## Exam Simulator UX

### Two Modes (shared across all tracks)

**Exam Mode** (simulates real test)
- Full question count, timed
- Cert: matches real exam (e.g. 65 questions / 90 min)
- Course: configurable (e.g. 30 questions / 45 min, sampled from all lectures)
- One question per page, nav sidebar with question numbers
- Flag for review
- No answers shown until submit all
- Results: score, pass/fail, domain/topic breakdown radar chart

**Practice Mode** (learning-focused)
- Pick topic(s) and/or difficulty
- Configurable question count (10 / 25 / all)
- Immediate answer + explanation after each question
- Show hint on demand
- Show trap warning after answering wrong
- Links back to quidproquo article for deep review

### UX Details
- Keyboard navigation (1-4 select, Enter next, ← → navigate)
- Progress bar at top
- Mobile-first responsive
- Dark / light theme
- Bookmark questions

---

## Concept Cross-Reference

Concepts are the glue. Same concept, different angles:

```
Concept: "Precision & Recall"
├── Cert:   AIF-C01 Q1 — "漏報代價高，優化哪個指標？" (service-pick style)
├── Course: CS229 L3 Q5 — "Recall 的公式是什麼？" (formula style)
├── Course: CS229 L3 Q8 — "高 recall 低 precision 意味著什麼？" (concept style)
├── Series: ML Eval Q2 — "何時該優化 F1 而非 Recall？" (compare style)
└── Read more: quidproquo.cc/posts/ai/cs229-lecture-03
```

User sees: "You understand the formula (CS229 ✓) but missed the applied scenario (AIF-C01 ✗) — the cert tests it differently."

---

## Phased Rollout

### Phase 1 — MVP (Week 1-2)
- [ ] TanStack Start + Cloudflare Pages scaffold
- [ ] D1 schema + Drizzle setup
- [ ] Markdown parser (4 formats)
- [ ] Dedup engine
- [ ] Import AIF-C01 questions (130 from 2 sets, human-written)
- [ ] Exam simulator UI (exam + practice mode)
- [ ] Results page with domain breakdown
- [ ] Deploy to Cloudflare Pages
- [ ] No auth — localStorage for progress

### Phase 2 — Question Generation Pipeline (Week 3-4)
- [ ] Build generation prompt templates (6 styles)
- [ ] Generate CS229 questions (22 lectures × 15 = ~330 questions)
- [ ] Admin review UI (approve/edit/reject)
- [ ] Course quiz pages
- [ ] Course-wide mock exam mode
- [ ] quidproquo ↔ aiexamprep cross-links

### Phase 3 — Scale Content (Week 5-6)
- [ ] Generate questions for remaining 13 courses (~3,100 questions)
- [ ] Generate questions for topic series (RAG, LLM training, etc.)
- [ ] More cert question banks (Claude, NVIDIA, Microsoft)
- [ ] Concept library with cross-references
- [ ] Prep guide pages (from quidproquo, English)

### Phase 4 — User System (Week 7-8)
- [ ] Auth (sign up / login)
- [ ] Progress in D1, cross-device sync
- [ ] Wrong answer notebook
- [ ] Learning paths across tracks
- [ ] Weak area analysis
- [ ] "You know this from CS229, now try the cert version"

### Phase 5 — Monetization (Week 9+)
- [ ] Free tier + paid full access
- [ ] Stripe integration
- [ ] Advanced analytics (performance trends, predicted cert score)
- [ ] Community features

---

## Competitive Edge

1. **Three tracks, one engine** — certs, courses, topic series — all test-driven
2. **7,000+ questions** from 229 course articles + 245 series articles + cert banks
3. **Concept cross-reference** — "you know the theory, now pass the cert"
4. **Backed by 500+ deep articles** on quidproquo.cc — read ↔ test loop
5. **AI-generated + human-reviewed** — scale content fast, maintain quality
6. **Rich metadata** — hints, traps, mnemonics, difficulty, question style
7. **Dedup across all sources** — no repeated questions
