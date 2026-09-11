<div align="center">

# AI Study Hub

**用考試驗證學習。**

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
![Status](https://img.shields.io/badge/status-early_preview-orange.svg)

[快速開始](#快速開始) · [功能](#功能) · [匯入題目](#匯入題目) · [技術棧](#技術棧) · [文件](#文件)

[English](README.md) · [繁體中文](README.zh-TW.md)

</div>

AI Study Hub 是一個開源的考試驅動學習平台，涵蓋 AI 證照考試和大學課程。每個概念都變成題目。模擬考、練習模式、診斷測驗、錯題本——全部在同一個地方。

> [!IMPORTANT]
> AI Study Hub 目前是早期預覽版。題庫目前涵蓋 AWS AIF-C01（192 題）。更多證照和大學課程 quiz 在 roadmap 中。

## 功能

| 功能 | 說明 |
| --- | --- |
| **模擬考試** | 65 題、90 分鐘計時、依照真實 AIF-C01 考試的 Domain 權重比例出題 |
| **練習模式** | 依 Domain、難度、題數篩選。每題做完即時顯示答案和解析 |
| **診斷測驗** | 20 題快速評估（每個 Domain 4 題），找出你的弱項再針對性補強 |
| **錯題本** | 自動收集錯題。寫下「我為什麼選錯了？」的反思。只練錯題模式 |
| **模擬真實考試** | 一鍵按照真實考試的 Domain 比例和時間限制出題 |
| **題目匯入** | Markdown 解析器，自動偵測格式 + 去重。支援 6 種輸入格式 |
| **雙語介面** | 繁體中文（預設）和英文。所有 UI 文字透過翻譯 key |
| **深色 / 淺色主題** | Happy Hues Palette 2 配色系統。一鍵切換 |

## 快速開始

需求：Node.js 22+、pnpm 10+。

```bash
git clone https://github.com/vincentxuu/aistudyhub.git
cd aistudyhub
pnpm install
pnpm dev
```

在瀏覽器打開 `http://localhost:3000`。

## 匯入題目

AI Study Hub 自動偵測 6 種 Markdown/JSON 格式，並跨來源去重。你可以用任何 AI（ChatGPT、Gemini、Claude）產題後匯入。

```bash
# 匯入單一檔案
pnpm import questions data/raw-questions/my-questions.md --exam AIF-C01

# 匯入整個目錄
pnpm import questions data/raw-questions/ --exam AIF-C01

# 預覽模式（不寫入）
pnpm import questions data/raw-questions/ --exam AIF-C01 --dry-run
```

詳見 [docs/IMPORT-SPEC.md](docs/IMPORT-SPEC.md)，包含支援的格式和 AI 產題的 prompt 範本。

### 目前的題庫

| 考試 | 題數 | 來源 |
| --- | --- | --- |
| AWS AIF-C01 | 192（從 257 題去重） | 4 個 Markdown 檔案、2 套題目 |

## 技術棧

| 層 | 選擇 |
| --- | --- |
| 框架 | [TanStack Start](https://tanstack.com/start)（React, SSR） |
| 路由 | [TanStack Router](https://tanstack.com/router)（檔案式、型別安全） |
| 樣式 | [Tailwind CSS v4](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com) 模式（CVA + Radix） |
| 圖標 | [@sketchyicons/react](https://github.com/sketchyicons/sketchyicons)（手繪風 Lucide） |
| Linting | [Biome](https://biomejs.dev) + 自定義 `lint:ui` 反模式檢查 |
| 部署目標 | [Cloudflare Pages](https://pages.cloudflare.com) |
| 配色系統 | [Happy Hues Palette 2](https://www.happyhues.co/palettes/2) |

## 開發

```bash
pnpm dev              # 啟動開發伺服器
pnpm build            # 正式環境建置
pnpm verify           # 品質門：biome + lint:ui + build（pre-commit 自動執行）
pnpm lint             # Biome lint 檢查
pnpm lint:fix         # Biome 自動修正
pnpm lint:ui          # 自定義 UI 反模式檢查
pnpm format           # Biome 格式化
pnpm session:start    # 印出狀態 + 執行 verify
```

Pre-commit hook 自動執行 `pnpm verify`——不管用 Claude Code、Codex、Cursor 還是手動 git 都會跑。

## 專案結構

```
src/
  components/
    ui/              # shadcn 風格基礎元件（Button、Card、Badge、Progress 等）
    exam/            # 共用考試元件（OptionCard、QuestionView、CircularTimer、QuestionGrid）
    icons/           # koboyo 手繪圖標（React 封裝）
  i18n/              # 翻譯檔（zh-TW、en）
  lib/               # 題目解析器、載入器、去重引擎、工具
  routes/            # TanStack Router 頁面
data/
  questions.json     # 匯入後的題庫
  raw-questions/     # 來源 Markdown 檔案
docs/                # PLAN.md、IMPORT-SPEC.md、USER-FLOWS.md、COLOR-SPEC.md
scripts/             # 匯入、lint、verify、session-start
```

## 文件

| 文件 | 說明 |
| --- | --- |
| [PLAN.md](docs/PLAN.md) | 產品與技術規劃——3 條內容 track、分階段上線 |
| [IMPORT-SPEC.md](docs/IMPORT-SPEC.md) | 題目匯入規格——6 種格式、去重策略、AI prompt 範本 |
| [USER-FLOWS.md](docs/USER-FLOWS.md) | 使用者流程——出題者和學習者的旅程 |
| [COLOR-SPEC.md](docs/COLOR-SPEC.md) | 配色規格——Happy Hues Palette 2 對照、使用規則 |
| [CLAUDE.md](CLAUDE.md) | AI agent 規則——元件清單、配色規則、圖標規則 |

## Roadmap

- [ ] 部署到 Cloudflare Pages
- [ ] 更多證照題庫（Claude、NVIDIA、Microsoft、Google）
- [ ] 大學課程 quiz（CS229、CS224N、6.S191 等）——從 [quidproquo.cc](https://quidproquo.cc) 的導讀文章產題
- [ ] 概念交叉引用（串聯證照和課程）
- [ ] 使用者帳號 + D1 持久化
- [ ] 成績分析和預測考試分數

## 相關專案

- [quidproquo.cc](https://quidproquo.cc) — 「讀」的那一面：500+ 篇 AI 證照、大學課程、RAG 技法、LLM 訓練的深度文章。AI Study Hub 是「考」的那一面。

## 授權

[MIT](LICENSE)
