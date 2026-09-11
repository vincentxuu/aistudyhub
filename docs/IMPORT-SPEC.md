# Question Import Specification

## Design Principle

> **Any AI, any person, any format → one pipeline → deduplicated, standardized questions in DB.**

The import pipeline is format-tolerant by design. It detects the input format automatically and normalizes everything to the same internal schema. You should be able to:

1. Ask ChatGPT to generate 20 questions, paste into a `.md` file, import
2. Ask Gemini to generate 30 questions in a different style, import
3. Hand-write questions in the simplest format possible, import
4. Copy-paste from an existing exam prep PDF, import

Dedup ensures nothing gets duplicated, no matter how many sources you throw at it.

---

## Supported Formats

### Format A — Details Block
Used by: hand-written AIF-C01 Set A

```markdown
### Q1（單選）
一家保險公司正在建立一個詐欺偵測系統...

- A. Accuracy
- B. Precision
- C. Recall
- D. F1 Score

<details><summary>答案</summary>

**C. Recall**

解析文字...

</details>
```

Detection: `### Q` + `<details>` with answer inside.

### Format B — Rich Learning Version
Used by: hand-written AIF-C01 Set B (full version)

```markdown
## Question 1

> **⭐⭐⭐ 困難** · 🎯 **Classification metrics / Recall**

**Domain**
Domain 1 — Fundamentals of AI and ML

**🔑 題幹關鍵字**
`False Negative、Recall、Sensitivity`

一家醫院建立 ML 模型...

A. Accuracy
B. Precision
C. Recall
D. Specificity

<details><summary>💡 Hint</summary>
先想：哪個指標最在意「真正的陽性有多少被抓到」？
</details>

<details><summary>✅ 答案</summary>
**C**
</details>

<details><summary>📘 詳解</summary>
Recall = TP / (TP + FN)...
**其他選項為什麼不對：** ...
</details>

> ⚠️ **常見陷阱**
> ...

<details><summary>🧠 記憶口訣</summary>
**FN 很重要 → Recall**
</details>
```

Detection: `## Question` + `⭐` difficulty + multiple `<details>` blocks.

### Format C — Compact Inline
Used by: AIF-C01 Set B (compact version)

```markdown
**1.** 下列何者最能描述 AI、ML、深度學習與 agentic AI 的差異？
A. AI 包含 ML，ML 包含深度學習...
B. 深度學習一定是 agentic AI
C. ML 與 agentic AI 完全相同
D. AI 只指生成式模型

**答案：A**
解析：官方定義強調層級關係...
```

Detection: `**N.**` numbered + `**答案：X**` inline.

### Format D — Simple Universal (RECOMMENDED for AI-generated)
The easiest format to tell any AI to output. Minimal markup, maximum parsability.

```markdown
---
exam: AIF-C01          # or course: CS229, series: rag-techniques
domain: Domain 1       # or topic: Lecture 3 — Linear Regression
lang: en               # or zh-TW
---

## Q1
Type: single
Difficulty: 2
Tags: precision, recall, classification-metrics
Concepts: precision-recall

A hospital builds an ML model to identify patients with serious diseases. The cost of missing a truly sick patient (false negative) is far higher than a false alarm. Which metric should the team prioritize?

A. Accuracy
B. Precision
C. Recall
D. Specificity

Answer: C

Hint: Which metric cares most about "how many actual positives were caught"?

Explanation: Recall = TP / (TP + FN). When false negatives are costly, maximize Recall.

Why others wrong: Accuracy misleads with imbalanced classes; Precision focuses on predicted positives; Specificity focuses on true negatives.

Trap: Seeing a medical scenario and jumping to Accuracy — but the question specifically emphasizes false negatives.

Mnemonic: FN is expensive → Recall
```

Detection: YAML frontmatter with `exam:` / `course:` / `series:` + `## Q` + `Answer:` line.

**This is the format we recommend when prompting any AI to generate questions.**

### Format E — Numbered Simple (common ChatGPT/Gemini output)
What most AIs produce without specific format instructions.

```markdown
1. What happens when the learning rate is too large in gradient descent?

A) The model converges faster
B) The loss oscillates or diverges
C) The model underfits
D) No effect on training

Answer: B

Explanation: A learning rate that is too large causes the optimization to overshoot...
```

Detection: `N.` or `N)` numbered + `Answer:` line, no frontmatter.

### Format F — JSON Array
For programmatic imports or structured exports.

```json
[
  {
    "stem": "What happens when the learning rate is too large?",
    "type": "single",
    "options": [
      { "label": "A", "text": "The model converges faster" },
      { "label": "B", "text": "The loss oscillates or diverges" },
      { "label": "C", "text": "The model underfits" },
      { "label": "D", "text": "No effect on training" }
    ],
    "correctAnswers": ["B"],
    "explanation": "A learning rate that is too large...",
    "difficulty": 2,
    "tags": ["gradient-descent", "learning-rate"]
  }
]
```

Detection: file extension `.json` + array of objects with `stem` field.

---

## Format Detection Logic

```typescript
function detectFormat(content: string, filename: string): Format {
  if (filename.endsWith('.json')) return 'F'
  if (content.match(/^---\n(exam|course|series):/m)) return 'D'
  if (content.match(/^## Question \d/m) && content.includes('⭐')) return 'B'
  if (content.match(/^### Q\d/m) && content.includes('<details>')) return 'A'
  if (content.match(/^\*\*\d+\.\*\*/m) && content.match(/\*\*答案：/m)) return 'C'
  if (content.match(/^\d+[\.\)]\s/m) && content.match(/^Answer:/m)) return 'E'
  throw new Error('Unrecognized format')
}
```

---

## Import CLI

```bash
# Import a single file
pnpm import questions path/to/questions.md

# Import with explicit metadata (overrides file frontmatter)
pnpm import questions path/to/questions.md --exam AIF-C01 --lang en

# Import a directory (all .md and .json files)
pnpm import questions path/to/question-dir/

# Dry run — show what would be imported, dedup results, no DB write
pnpm import questions path/to/questions.md --dry-run

# Import with source tag
pnpm import questions path/to/questions.md --generated-by ai --source "chatgpt-2026-09"
```

### Import output

```
Parsing: aif-c01-set-a.md (Format A detected)
  Found: 65 questions
  Exact duplicates: 0 new, 0 merged
  Semantic similar: 3 marked as related
  Imported: 65 questions

Parsing: cs229-lecture-03-quiz.md (Format D detected)
  Found: 15 questions
  Exact duplicates: 2 (merged metadata from richer source)
  Semantic similar: 1 marked as related
  Imported: 13 new questions

Summary:
  Total parsed: 80
  New: 78
  Merged: 2
  Skipped: 0
```

---

## Deduplication Details

### Step 1: Normalize

```typescript
function normalize(text: string): string {
  return text
    .replace(/[⭐🎯🔑⚠️💡✅📘🧠]/g, '')  // strip emoji
    .replace(/[　-〿＀-￯]/g, '') // strip CJK punctuation
    .replace(/[，。、；：？！""''（）【】]/g, '') // strip Chinese punctuation
    .replace(/\s+/g, ' ')                    // collapse whitespace
    .toLowerCase()
    .trim()
}
```

### Step 2: Hash

```typescript
function questionHash(stem: string, correctAnswers: string[]): string {
  const normalized = normalize(stem) + '|' + correctAnswers.sort().join(',')
  return sha256(normalized)
}
```

### Step 3: Match

- **Same hash** → exact duplicate → merge metadata (keep richest hint/trap/mnemonic/explanation)
- **Same concept tags + same correct answer + Levenshtein similarity > 0.7** → semantic related → keep both, link as `relatedQuestionIds`

### Merge priority (when exact duplicate found)

Fields are filled from the richest source. Priority:
1. Format B (full learning version) — has everything
2. Format D (recommended AI output) — structured metadata
3. Format A (details block) — has explanation
4. Format C / E (compact) — minimal metadata

---

## Prompting Guide for AI Question Generation

### For ChatGPT / Gemini / Claude / any LLM

Use this prompt template. Paste the source article content where indicated.

````
You are generating practice questions for an AI learning platform.

Source material:
```
[PASTE ARTICLE CONTENT HERE]
```

Course: [CS229 / CS224N / etc.]
Topic: [Lecture 3 — Linear Regression / etc.]
Language: en

Generate 15 multiple-choice questions in this exact format:

---
course: CS229
topic: Lecture 3 — Linear Regression
lang: en
---

## Q1
Type: single
Difficulty: [1/2/3]
Tags: [comma-separated]
Concepts: [comma-separated concept slugs]

[Question stem]

A. [option]
B. [option]
C. [option]
D. [option]

Answer: [letter]

Hint: [one sentence nudge, not the answer]

Explanation: [why the correct answer is correct]

Why others wrong: [brief for each wrong option]

Trap: [common mistake students make on this question]

Mnemonic: [optional memory aid]

---

Requirements:
- Mix these 6 styles roughly evenly:
  1. Concept check — "What is X?" / "What does X do?"
  2. Compare & contrast — "How does X differ from Y?"
  3. Apply to scenario — "Given situation Z, what should you do?"
  4. Formula understanding — "In equation X, what does Y represent?"
  5. Common misconception — "Which is FALSE about X?"
  6. Bridge to practice — "In [framework], how do you implement X?"
- Only test knowledge from the source material provided
- Wrong options should be plausible, not obviously wrong
- Difficulty 1 = basic recall, 2 = understanding, 3 = application/analysis
- Each question must be self-contained (no "as mentioned above")
````

### Tips for different AIs

| AI | Notes |
|----|-------|
| ChatGPT | Follows format well. May add extra commentary — tell it "output ONLY the questions, no preamble" |
| Gemini | Good at generating scenario questions. Sometimes omits the `---` separators — fixable by parser |
| Claude | Strong explanations and trap identification. Follows format precisely |
| Local LLMs | May need simpler format (Format E). Import pipeline handles it |

---

## Admin Review UI (Phase 2)

```
/review                    → Queue of unreviewed questions
/review/[questionId]       → Single question review:
                             - See question + all metadata
                             - See source article (link to quidproquo)
                             - Edit any field inline
                             - Actions: Approve / Edit & Approve / Reject
                             - Bulk approve (for batches that look good)
```

Review fields:
- `reviewed: true/false`
- `reviewedBy: string` (reviewer name)
- `reviewedAt: string` (ISO timestamp)
- `reviewNotes: string` (optional, why rejected or what was changed)
