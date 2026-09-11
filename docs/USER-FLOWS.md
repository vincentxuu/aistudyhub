# User Flows

## 兩種角色

| 角色 | 做什麼 |
|------|--------|
| **Content Creator（你）** | 產題、匯入、審核、管理題庫 |
| **Learner（使用者）** | 選課/選證照 → 做題 → 看結果 → 複習弱項 |

---

## Flow 1: Content Creator — 題庫建立

### 1a. 手寫題目匯入（已有，AIF-C01）

```
你寫好 Markdown 題目
    ↓
放進 data/raw-questions/xxx.md
    ↓
pnpm import questions data/raw-questions/xxx.md --dry-run
    ↓ 看去重結果，確認沒問題
pnpm import questions data/raw-questions/xxx.md
    ↓
題目進 DB，reviewed: true（手寫 = 已審核）
    ↓
上線，使用者可以做題
```

### 1b. AI 產題匯入

```
你挑一篇 quidproquo 文章（例如 CS229 Lecture 3）
    ↓
把文章內容 + prompt template（見 IMPORT-SPEC.md）貼給任何 AI
    ↓ ChatGPT / Gemini / Claude / 任何 LLM
AI 產出 15 題 Markdown
    ↓
你存成 .md 檔，放進 data/raw-questions/
    ↓
pnpm import questions data/raw-questions/cs229-l03.md --generated-by ai
    ↓ 自動去重、格式偵測
題目進 DB，reviewed: false（AI 產 = 待審核）
    ↓
你到 /review 頁面逐題審核（approve / edit / reject）
    ↓
approved 的題目上線，使用者可以做題
```

### 1c. 批量產題

```
你寫一個腳本，讀 quidproquo 的 229 篇課程文章
    ↓ 每篇呼叫 Claude API 產 15 題
產出 229 個 .md 檔
    ↓
pnpm import questions data/raw-questions/courses/ --generated-by ai
    ↓ 一次匯入整個目錄，自動去重
3,435 題進 DB（reviewed: false）
    ↓
分批審核（可先審 CS229，其他之後再說）
    ↓
Practice mode 可先用未審核題（加 disclaimer）
Exam mode 只用已審核題
```

---

## Flow 2: Learner — 證照備考

```
使用者進站
    ↓
選「Certifications」
    ↓
看到所有證照（AWS AIF-C01, Claude Associate, ...）
    ↓
點進 AIF-C01
    ↓ 看到：簡介、Domain 權重、開始按鈕
    ↓
┌─────────────────────────────────────┐
│  選模式                              │
│                                      │
│  🎯 Mock Exam（65題 / 90分鐘）       │
│     → 模擬真實考試，交卷才看答案      │
│                                      │
│  📝 Practice（選 Domain / 題數）      │
│     → 每題做完馬上看答案解析          │
│                                      │
│  📖 Review Wrong Answers             │
│     → 只刷之前做錯的題               │
└─────────────────────────────────────┘
```

### Mock Exam 流程

```
開始 → 計時 90 分鐘
    ↓
一題一頁，選答案，可標記待檢查
    ↓ 65 題做完（或時間到）
交卷
    ↓
Results 頁面：
├── 總分：72% (PASS ≥ 70%)
├── 雷達圖：5 個 Domain 正確率
│   ├── D1 Fundamentals: 85% ✓
│   ├── D2 GenAI: 75% ✓
│   ├── D3 Applications: 60% ← 弱項
│   ├── D4 Responsible AI: 78% ✓
│   └── D5 Security: 67% ← 弱項
├── 每題：你的答案 vs 正確答案 + 解析
└── CTA: 「Practice D3 and D5」→ 直接跳到弱項練習
```

### Practice 流程

```
選 Domain 3 + 難度 ⭐⭐⭐
    ↓
出 10 題
    ↓
每題做完馬上顯示：
├── ✅ 正確 → 簡短解析
└── ❌ 錯誤 → 完整解析 + 陷阱提醒 + 記憶口訣
    │         + 「Read more on quidproquo」連結
    ↓
10 題做完 → 小結：7/10
    ↓
錯的 3 題自動加入錯題本
```

---

## Flow 3: Learner — 大學課程學習

```
使用者進站
    ↓
選「Courses」
    ↓
看到所有課程（CS229, CS224N, 6.S191, ...）
    ↓
點進 CS229 — Machine Learning
    ↓
看到 Syllabus：22 講，每講的進度（✓ 已完成 / ○ 未開始）
    ↓
點進 Lecture 3 — Linear Regression
    ↓
┌─────────────────────────────────────┐
│  Lecture 3: Linear Regression        │
│                                      │
│  📖 Key Concepts (one-page summary)  │
│     → 公式、直覺、重點整理            │
│     → 「Full study guide on          │
│        quidproquo」連結              │
│                                      │
│  📝 Quiz (15 questions)              │
│     → 做題驗證你是否真的懂了          │
│                                      │
│  🎬 Original lecture → Stanford link  │
└─────────────────────────────────────┘
```

### Lecture Quiz 流程

```
開始 Quiz（Practice mode，不計時）
    ↓
15 題，每題做完馬上看答案
    ↓
第 5 題 — 公式理解題，答錯了
├── 解析：「α 是 learning rate，控制步長」
├── 陷阱：「別跟 regularization 的 λ 搞混」
├── 連結：「Read the full explanation on quidproquo」
└── Concept: 「Learning Rate」
    └── 「This concept is also tested in AIF-C01 Domain 1」
    ↓
15 題做完 → Lecture 3 標記完成 ✓
    ↓
回到 Syllabus → Lecture 4 解鎖
```

### Course-wide Exam

```
CS229 全部 22 講都做完 Quiz 了
    ↓
解鎖 Course Exam（從所有講義抽 30 題，45 分鐘）
    ↓
交卷 → Results：
├── 總分：83%
├── 各 Lecture 正確率
├── 弱項：Lecture 8 (SVM) 只有 40%
├── Concept 分析：
│   ├── 「Gradient Descent」→ ✅ 你都對了
│   └── 「Kernel Methods」→ ❌ 建議複習
│       └── 「This is also tested in NVIDIA NCA-GENL」
└── CTA:「Review Lecture 8」→ 回去重做
```

---

## Flow 4: Learner — 概念串聯

```
使用者在 AIF-C01 Mock Exam 做錯了 Recall 那題
    ↓
看解析，發現 Concept:「Precision & Recall」
    ↓
點進 Concept 頁面
    ↓
┌─────────────────────────────────────┐
│  Concept: Precision & Recall         │
│                                      │
│  📖 One-paragraph explanation        │
│                                      │
│  Tested in:                          │
│  ├── AIF-C01 Domain 1 (你答錯了 ❌)  │
│  ├── NVIDIA NCA-GENL (還沒練)        │
│  └── CS229 Lecture 3 (你答對了 ✅)    │
│                                      │
│  Related questions:                  │
│  ├── AIF-C01 Q1: 情境題（你錯的那題）│
│  ├── CS229 L3 Q5: 公式題（你對的）   │
│  └── CS229 L3 Q8: 比較題（你對的）   │
│                                      │
│  Insight:                            │
│  「你理解公式但不會應用到情境。      │
│    再練 AIF-C01 的 Domain 1。」      │
│                                      │
│  Deep dive: quidproquo.cc/...        │
└─────────────────────────────────────┘
```

---

## Flow 5: Learner — Dashboard

```
/dashboard
    ↓
┌─────────────────────────────────────┐
│  My Progress                         │
│                                      │
│  📊 Certifications                   │
│  ├── AIF-C01: 3 mock exams taken     │
│  │   Best: 78% | Avg: 72%           │
│  │   Weak: D3 Applications (60%)     │
│  └── Claude Associate: not started   │
│                                      │
│  📚 Courses                          │
│  ├── CS229: 14/22 lectures ████░░    │
│  │   Course exam: not taken          │
│  └── CS224N: 3/20 lectures █░░░░     │
│                                      │
│  📕 Wrong Answers: 23 questions      │
│  └── 「Practice wrong answers」      │
│                                      │
│  💡 Concepts to review: 5            │
│  └── Kernel Methods, Attention...    │
│                                      │
│  🔥 Study streak: 7 days             │
└─────────────────────────────────────┘
```
