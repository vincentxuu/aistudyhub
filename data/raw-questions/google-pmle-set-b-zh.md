---
exam: PMLE
lang: zh-TW
---

## Q1
Type: single
Difficulty: 1
Tags: low-code, natural-language-queries, bigquery
Concepts: nl-to-sql
Domain: Domain 1 — Architecting Low-Code AI Solutions
DomainNumber: 1

一家零售公司希望不具備 SQL 專業知識的商業分析師能用自然語言查詢他們的 BigQuery 資料倉儲。他們應該使用哪個 Google Cloud 功能？

A. BigQuery ML CREATE MODEL
B. BigQuery 中的 Gemini 自然語言查詢
C. Vertex AI 自訂訓練搭配 text-to-SQL 模型
D. 由聊天機器人觸發的 Cloud Functions

Answer: B

Hint: 想想 BigQuery 內建的功能，讓非技術使用者能用英文提問。

Explanation: BigQuery 中的 Gemini 讓使用者可以撰寫自然語言查詢，自動轉譯為 SQL。這是非常適合不需手動撰寫 SQL 就能獲得資料洞察的分析師的低程式碼方式。

Why others wrong: BigQuery ML 建立 ML 模型，不是自然語言查詢；自訂訓練對此來說太費力；Cloud Functions 需要寫程式。

Trap: 混淆 BigQuery ML（模型訓練）和 BigQuery 中的 Gemini（自然語言介面）。

Mnemonic: BigQuery 中的 Gemini = 「用中文問，拿到 SQL 結果」

## Q2
Type: single
Difficulty: 2
Tags: low-code, automl-tables, time-series
Concepts: automl-forecasting
Domain: Domain 1 — Architecting Low-Code AI Solutions
DomainNumber: 1

一家物流公司有 3 年的每日出貨量資料，需要預測未來 90 天的需求。他們希望所需的 ML 專業知識最少。最合適的方式是什麼？

A. 在 Vertex AI 上使用 TensorFlow 訓練自訂 LSTM 模型
B. 在 Vertex AI 上使用 AutoML Forecasting 搭配時間序列資料集
C. 使用 BigQuery ML 搭配 ARIMA_PLUS 模型類型
D. 從 Model Garden 部署預訓練基礎模型

Answer: B

Hint: 需求是最少 ML 專業知識加上時間序列預測 — 哪個 AutoML 功能處理這個？

Explanation: Vertex AI 上的 AutoML Forecasting 專為以最少 ML 專業知識進行時間序列預測而建。它自動處理特徵工程、模型選擇和時間資料的超參數調整。雖然 BQML ARIMA_PLUS 也可以，但 AutoML Forecasting 提供更引導式、低程式碼的體驗和更豐富的時間特徵處理。

Why others wrong: 自訂 LSTM 需要深度 ML 專業知識；BQML ARIMA_PLUS 需要 SQL 知識和手動配置；基礎模型不是為結構化時間序列預測設計的。

Trap: 選擇 BQML ARIMA_PLUS — 它可行但比 AutoML Forecasting 需要更多 SQL 和 ML 知識。

Mnemonic: 時間序列 + 低程式碼 = AutoML Forecasting

## Q3
Type: single
Difficulty: 2
Tags: low-code, gemini, function-calling
Concepts: function-calling
Domain: Domain 1 — Architecting Low-Code AI Solutions
DomainNumber: 1

一家電商公司希望他們的 Gemini 驅動聊天機器人在客戶詢問產品供貨時能即時檢查庫存水平。他們應該實作哪個 Gemini 功能？

A. 搭配 Google Search 的紮實化
B. 搭配庫存 API 工具宣告的函數呼叫
C. 搭配庫存資料的上下文快取
D. 列出所有庫存數量的系統指令

Answer: B

Hint: 聊天機器人需要即時呼叫外部系統 — Gemini 的哪個功能支援這個？

Explanation: 函數呼叫允許 Gemini 根據工具宣告生成對外部 API 的結構化呼叫。當使用者詢問庫存時，Gemini 識別意圖並生成對庫存 API 的適當函數呼叫，回傳即時資料。

Why others wrong: Google Search 紮實化檢索網路資訊，不是內部庫存；上下文快取儲存很快過時的靜態資料；系統指令有 token 限制且無法持有動態庫存。

Trap: 以為紮實化可以存取內部資料庫 — 它只能搭配 Google Search 或 Vertex AI Search 資料儲存庫。

Mnemonic: 即時外部資料 = 函數呼叫；靜態知識 = 紮實化

## Q4
Type: single
Difficulty: 1
Tags: low-code, document-ai, classification
Concepts: document-classification
Domain: Domain 1 — Architecting Low-Code AI Solutions
DomainNumber: 1

一家律師事務所每天收到數千份法律文件，需要自動分類為合約、法院文件、信函等類別。哪個 Google Cloud 服務需要最少的自訂開發？

A. Vertex AI AutoML Text Classification
B. 搭配自訂分類器的 Document AI
C. Cloud Natural Language API
D. 搭配少量範例的 Gemini 提示

Answer: B

Hint: 哪個服務是專門為文件處理工作流程設計的？

Explanation: Document AI 提供針對大規模文件處理最佳化的預建和自訂文件分類器。它在單一管線中處理 OCR、版面分析和分類，對以文件為中心的工作流程需要最少開發。

Why others wrong: AutoML Text 可行但不原生處理文件版面/OCR；Cloud NL API 分類一般文字類別，不是文件類型；Gemini 提示適用於小規模但缺乏文件處理管線。

Trap: 在 Document AI 提供更整合的文件工作流程解決方案時使用 AutoML Text Classification。

Mnemonic: 文件（PDF、掃描）= Document AI；純文字 = NL API 或 AutoML Text

## Q5
Type: single
Difficulty: 3
Tags: low-code, automl, model-evaluation
Concepts: automl-evaluation-metrics
Domain: Domain 1 — Architecting Low-Code AI Solutions
DomainNumber: 1

訓練 AutoML 影像分類模型偵測製造缺陷後，你注意到模型有 98% 準確率但「缺陷」類別只有 40% 召回率。你應該先做什麼？

A. 提高分類閾值以捕捉更多缺陷品
B. 降低分類閾值以提高缺陷類別的召回率
C. 增加更多非缺陷影像以平衡資料集
D. 切換到自訂 TensorFlow 模型以獲得更好控制

Answer: B

Hint: 召回率衡量找到多少實際正樣本 — 降低閾值時召回率會怎樣？

Explanation: 高準確率但少數類別召回率低時，模型在預測「缺陷」方面太保守。降低分類閾值意味著模型會將更多品項分類為缺陷，以犧牲一些精確度來提高召回率。這是在考慮資料增強或模型變更之前正確的第一步。

Why others wrong: 提高閾值會進一步降低召回率；增加非缺陷影像會加劇類別不平衡；在調整閾值前就切換到自訂訓練太倉促。

Trap: 混淆精確度和召回率 — 提高閾值改善精確度但降低召回率。

Mnemonic: 低召回率 → 降低閾值以「捕捉更多」；低精確度 → 提高閾值以「更挑剔」

## Q6
Type: single
Difficulty: 2
Tags: low-code, vertex-ai-search, enterprise
Concepts: vertex-ai-search
Domain: Domain 1 — Architecting Low-Code AI Solutions
DomainNumber: 1

一家醫療公司想在儲存於 Cloud Storage 的內部醫學研究論文上建立搜尋應用程式。應用程式應理解語義意義，不只是關鍵字匹配。應該使用哪個服務？

A. 搭配自訂模式的 Cloud Search
B. 搭配非結構化資料儲存庫的 Vertex AI Search
C. 部署在 GKE 上的 Elasticsearch
D. BigQuery 全文搜尋函數

Answer: B

Hint: 哪個 Google Cloud 服務提供對非結構化文件的受管理語義搜尋？

Explanation: Vertex AI Search（Vertex AI Agent Builder 的一部分）提供能理解查詢背後意義的受管理語義搜尋，不只是關鍵字。它可以從 Cloud Storage 攝取非結構化文件，自動生成嵌入向量，並支援內建排序的進階檢索。

Why others wrong: Cloud Search 用於 Google Workspace 內容；自行管理的 Elasticsearch 需要大量維運開銷；BigQuery 全文搜尋是基於關鍵字的，不是語義的。

Trap: 為語義搜尋選擇 Elasticsearch — 雖然可以透過外掛實現，但 Vertex AI Search 原生提供此功能作為受管理服務。

Mnemonic: 文件上的語義搜尋 = Vertex AI Search；結構化資料上的關鍵字搜尋 = BigQuery

## Q7
Type: single
Difficulty: 3
Tags: low-code, model-garden, adapter-tuning
Concepts: adapter-tuning
Domain: Domain 1 — Architecting Low-Code AI Solutions
DomainNumber: 1

你的團隊想從 Model Garden 自訂 Gemini 模型以用於領域專用摘要任務。他們有 500 個高品質的輸入-輸出配對。訓練成本和基礎設施管理應該最小化。最合適的調整方式是什麼？

A. 搭配 Vertex AI 自訂訓練的完整微調
B. 透過 Vertex AI 主控台的監督式微調（適配器調整）
C. 蒸餾到較小的模型
D. 人類回饋強化學習（RLHF）

Answer: B

Hint: 500 個範例很適合適配器調整 — 哪種方法是受管理的且低基礎設施？

Explanation: 透過 Vertex AI 主控台的監督式微調使用適配器調整，是一種受管理的低程式碼方法，在數百個範例下效果很好。它在基礎模型上添加小型適配器層而不修改所有權重，保持低成本同時達到領域專用改善。

Why others wrong: 完整微調需要自訂訓練基礎設施和更多資料；蒸餾需要獨立的較小模型架構；RLHF 需要獎勵模型且比需要的更複雜。

Trap: 在適配器調整以遠少於成本和複雜度達到類似結果時選擇完整微調。

Mnemonic: 500 個範例 + 低工作量 = 適配器調整；50K+ 範例 + 完全控制 = 完整微調

## Q8
Type: single
Difficulty: 1
Tags: low-code, speech-to-text, api
Concepts: speech-api
Domain: Domain 1 — Architecting Low-Code AI Solutions
DomainNumber: 1

一家客服中心想即時轉錄客戶通話以為主管生成即時字幕。應該使用哪個 Google Cloud 服務？

A. Vertex AI 自訂語音模型
B. 搭配串流辨識的 Cloud Speech-to-Text API
C. Gemini 音訊輸入
D. Media Translation API

Answer: B

Hint: 低延遲的即時轉錄需要串流 API — 哪個服務提供這個？

Explanation: 搭配串流辨識的 Cloud Speech-to-Text API 專為即時音訊轉錄設計。它在小段音訊到達時處理，提供適合即時字幕情境的低延遲結果。

Why others wrong: 自訂語音模型對標準轉錄來說太過度；Gemini 音訊輸入延遲較高且未針對持續串流最佳化；Media Translation API 用於跨語言翻譯語音，不是同語言轉錄。

Trap: 為音訊處理選擇 Gemini — 雖然它能處理音訊，但未針對即時串流轉錄最佳化。

Mnemonic: 即時串流音訊 → Speech-to-Text 串流；批次音訊分析 → Gemini

## Q9
Type: single
Difficulty: 2
Tags: low-code, translation, adaptive
Concepts: adaptive-translation
Domain: Domain 1 — Architecting Low-Code AI Solutions
DomainNumber: 1

一家全球 SaaS 公司需要將產品 UI 字串翻譯成 40 種語言。他們有產品專用術語的現有詞彙表，希望翻譯能一致使用他們偏好的術語。應該利用哪個 Translation API 功能？

A. 搭配自訂模型的 AutoML Translation
B. 搭配詞彙表資源的 Translation API
C. Gemini 搭配翻譯提示和術語說明
D. Translation API 基本版

Answer: B

Hint: 需求是一致的術語 — 哪個功能強制使用特定的術語翻譯？

Explanation: Translation API 支援詞彙表資源，強制對定義的術語使用特定翻譯。處理文字時，API 先檢查詞彙表並對匹配的術語使用指定翻譯，確保跨所有語言的一致產品術語。

Why others wrong: AutoML Translation 訓練自訂模型（對術語一致性來說太重量級）；Gemini 提示無法在大規模下保證術語一致性；基本版不支援詞彙表。

Trap: 在詞彙表資源以少得多的工作量達到相同術語一致性時訓練 AutoML Translation 模型。

Mnemonic: 一致的術語 = 詞彙表；自訂風格/語氣 = AutoML 或微調

## Q10
Type: single
Difficulty: 2
Tags: low-code, bigquery-ml, anomaly-detection
Concepts: bqml-anomaly
Domain: Domain 1 — Architecting Low-Code AI Solutions
DomainNumber: 1

一家金融科技公司在 BigQuery 中有交易資料，希望精通 SQL 的分析師直接在 BigQuery 中建立詐欺偵測模型。資料是未標記的。最合適的 BigQuery ML 方式是什麼？

A. CREATE MODEL 搭配 model_type='LOGISTIC_REG'
B. CREATE MODEL 搭配 model_type='KMEANS' 做叢集
C. CREATE MODEL 搭配 model_type='AUTOENCODER' 做異常偵測
D. CREATE MODEL 搭配 model_type='RANDOM_FOREST_CLASSIFIER'

Answer: C

Hint: 未標記資料 + 詐欺偵測 = 異常偵測，不是分類。

Explanation: 對於未標記的交易資料，監督式分類器（邏輯迴歸、隨機森林）無法訓練。BigQuery ML 的 AUTOENCODER 模型學習正常交易模式並標記異常 — 與學習到的模式顯著偏離的交易 — 非常適合非監督式詐欺偵測。

Why others wrong: 邏輯迴歸和隨機森林需要標記資料（詐欺/非詐欺）；K-means 叢集將類似交易分組但不特別識別異常或分配異常分數。

Trap: 選擇 K-means — 雖然是非監督式的，但它將資料分成群組而不特別為個別交易的異常程度評分。

Mnemonic: 未標記 + 偵測異常 = AUTOENCODER；未標記 + 分組相似 = KMEANS；已標記 = 分類器

## Q11
Type: single
Difficulty: 3
Tags: low-code, vertex-ai-agent-builder, grounding
Concepts: grounding-configuration
Domain: Domain 1 — Architecting Low-Code AI Solutions
DomainNumber: 1

你正在使用 Vertex AI Agent Builder 建立客服代理。代理必須使用你公司的產品文件（儲存在 Cloud Storage）和你網站的即時定價資訊來回答問題。你應該如何配置紮實化？

A. 使用 Google Search 紮實化處理文件和定價
B. 建立包含文件和定價頁面的單一 Vertex AI Search 資料儲存庫
C. 建立分開的資料儲存庫 — 一個用於文件（Cloud Storage），一個用於網站定價（網站爬取）— 並配置代理使用兩者
D. 將所有文件和定價嵌入系統指令中

Answer: C

Hint: 不同的資料來源（靜態文件 vs 動態網站）需要不同的攝取方法。

Explanation: Vertex AI Agent Builder 每個代理支援多個資料儲存庫。靜態產品文件應從 Cloud Storage 攝取，而動態定價頁面應使用網站爬取以保持新鮮度。將它們分開允許獨立的更新排程和每個來源類型的檢索調整。

Why others wrong: Google Search 紮實化無法存取私有文件；單一資料儲存庫無法有效率地處理有不同更新需求的 Cloud Storage 檔案和網站爬取；系統指令有 token 限制且無法持有大量文件。

Trap: 將所有東西放在一個資料儲存庫中 — 這阻止了對不同內容類型的獨立檢索和更新調整。

Mnemonic: 不同來源 = 不同資料儲存庫；同一代理可以查詢多個儲存庫

## Q12
Type: single
Difficulty: 2
Tags: low-code, automl, tabular-workflow
Concepts: automl-tabular-workflow
Domain: Domain 1 — Architecting Low-Code AI Solutions
DomainNumber: 1

你的團隊訓練了用於客戶流失預測的 AutoML 表格模型。模型表現很好，但利害關係人想了解哪些特徵最影響預測。你應該使用哪個 AutoML 功能？

A. 匯出模型並手動執行 SHAP 分析
B. 查看 AutoML 模型評估中提供的特徵重要性
C. 用更簡單的線性模型重新訓練以獲得可解釋性
D. 搭配自訂解釋規格使用 Vertex AI Explainability

Answer: B

Hint: AutoML 提供內建的特徵重要性 — 不需額外設定。

Explanation: AutoML 表格模型自動計算並在 Vertex AI 主控台的模型評估結果中顯示全域特徵重要性。這顯示哪些特徵對模型預測影響最大，不需任何額外配置或程式碼。

Why others wrong: 匯出並手動執行 SHAP 是不必要的額外工作；切換到線性模型犧牲準確率；自訂解釋規格用於自訂訓練模型，不是 AutoML。

Trap: 在 AutoML 模型內建特徵重要性已提供時過度工程可解釋性。

Mnemonic: AutoML = 內建特徵重要性；自訂模型 = 配置 Vertex Explainability

## Q13
Type: single
Difficulty: 1
Tags: scaling, notebook, managed
Concepts: managed-notebooks
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

一位資料科學家想用 GPU 在不同 ML 框架（TensorFlow、PyTorch、JAX）上實驗，不需管理基礎設施。哪個 Google Cloud 服務提供最佳開發體驗？

A. 搭配 Deep Learning VM 的 Compute Engine
B. Vertex AI Workbench 受管理 notebook
C. Google Colab Enterprise
D. 搭配 GPU 支援的 Cloud Shell

Answer: C

Hint: 哪個服務提供與 Vertex AI 整合的全受管理 notebook 環境並支援多種框架？

Explanation: Google Colab Enterprise 提供與 Google Cloud 整合的全受管理 notebook 環境，支援多種 ML 框架並可存取 GPU/TPU。它不需任何基礎設施管理，同時提供企業安全和分享功能。

Why others wrong: Compute Engine VM 需要手動設定和維護；Vertex AI Workbench 受管理 notebook 正被 Colab Enterprise 取代；Cloud Shell 不支援 GPU。

Trap: 選擇 Vertex AI Workbench — 雖然可行，但 Colab Enterprise 現在是 Google Cloud 推薦的受管理 notebook 體驗。

Mnemonic: 實驗 + 零維運 = Colab Enterprise；生產 notebook = Vertex AI Workbench

## Q14
Type: single
Difficulty: 2
Tags: scaling, experiment-comparison, vertex-ai
Concepts: experiment-comparison
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

你在 Vertex AI 上執行多個實驗，比較不同的模型架構和超參數。你需要跨執行比較指標、視覺化學習曲線並與團隊分享結果。應該使用哪個 Vertex AI 功能？

A. Vertex AI TensorBoard
B. Vertex AI Model Registry
C. 搭配執行比較的 Vertex AI Experiments
D. Cloud Monitoring 自訂儀表板

Answer: C

Hint: 哪個功能專為比較多次訓練執行和它們的指標設計？

Explanation: Vertex AI Experiments 提供專為實驗追蹤和執行比較建立的功能。你可以為每次執行記錄指標、參數和產出物，然後用內建視覺化並排比較。它與 Vertex AI SDK 整合以自動記錄。

Why others wrong: TensorBoard 視覺化個別訓練執行但缺乏內建的跨實驗比較；Model Registry 儲存已訓練模型，不是實驗追蹤；Cloud Monitoring 用於操作指標，不是 ML 實驗。

Trap: 使用 TensorBoard 做跨實驗比較 — 它很適合執行內視覺化但 Experiments 提供更好的跨執行比較。

Mnemonic: 比較實驗 = Vertex AI Experiments；視覺化訓練曲線 = TensorBoard；儲存模型 = Model Registry

## Q15
Type: single
Difficulty: 2
Tags: scaling, data-versioning, vertex-ai
Concepts: managed-datasets
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

你的 ML 團隊需要確保訓練執行的可重現性。他們想追蹤每個模型使用了哪個版本的訓練資料。在 Google Cloud 上應該如何管理資料集版本控制？

A. 使用 Cloud Storage 物件版本控制並在實驗中繼資料中記錄 bucket 路徑
B. 為每個資料版本建立新的 Vertex AI Managed Datasets
C. 對表格資料使用 BigQuery 快照並引用快照時間戳
D. 在試算表中儲存資料校驗和

Answer: A

Hint: 版本控制檔案並將它們連結到訓練執行的最簡單方式是什麼？

Explanation: Cloud Storage 物件版本控制維護所有版本的訓練資料檔案。透過在 Vertex AI 實驗中繼資料中記錄確切的 Cloud Storage URI（包含世代編號），你在每次訓練執行和其確切資料版本之間建立可追蹤的連結。

Why others wrong: 為每個版本建立新的 Managed Datasets 太重量級且不自動追蹤血統；BigQuery 快照只適用於 BigQuery 中的表格資料；試算表容易出錯且未與 ML 工作流程整合。

Trap: 用新的 Managed Datasets 過度工程資料版本控制，而 Cloud Storage 版本控制 + 實驗中繼資料提供足夠的追蹤性。

Mnemonic: 資料檔案 → GCS 版本控制 + 實驗中繼資料；BQ 表格 → BQ 快照

## Q16
Type: single
Difficulty: 3
Tags: scaling, feature-engineering, vertex-ai
Concepts: feature-transformation-engine
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

你需要在訓練和服務期間應用相同的特徵轉換以避免訓練-服務偏差。轉換包括正規化、分桶和嵌入查找。哪種方式確保一致性？

A. 在 Python 中實作轉換並作為預處理容器與模型一起部署
B. 使用 Vertex AI Feature Store 做線上服務和 BigQuery 做訓練
C. 使用 TensorFlow Transform (TFT) 建立與模型綁定的轉換圖
D. 在訓練腳本和服務應用程式中手動應用轉換

Answer: C

Hint: 哪個工具建立可在訓練和服務中使用的可序列化轉換圖？

Explanation: TensorFlow Transform (TFT) 分析完整訓練資料集以計算轉換參數（如正規化的最小/最大值）並生成應用這些確切轉換的 TensorFlow 圖。這個圖可以與模型的 SavedModel 綁定，確保訓練和服務中有相同的轉換。

Why others wrong: 預處理容器可能與訓練轉換不一致；Feature Store 處理特徵儲存但不處理轉換邏輯；手動應用容易出錯且是訓練-服務偏差的主要來源。

Trap: 以為 Feature Store 解決訓練-服務偏差 — 它儲存特徵但不保證相同的轉換管線。

Mnemonic: 到處相同的轉換 = 與模型綁定的 TFT 圖；特徵查找 = Feature Store

## Q17
Type: single
Difficulty: 2
Tags: scaling, gpu-selection, vertex-ai
Concepts: accelerator-selection
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

你正在 Vertex AI 上將原型 NLP 模型擴展到生產訓練。模型有 70 億參數且需要 40GB GPU 記憶體。你應該選擇哪個加速器？

A. NVIDIA T4 (16GB)
B. NVIDIA A100 (40GB)
C. NVIDIA L4 (24GB)
D. Cloud TPU v4

Answer: B

Hint: 將 GPU 記憶體與模型需求匹配 — 哪個加速器有剛好足夠的記憶體？

Explanation: NVIDIA A100 搭配 40GB HBM2e 記憶體匹配模型的記憶體需求。它還提供針對大模型訓練最佳化的高頻寬和運算吞吐量。T4 和 L4 沒有足夠的記憶體，而 TPU v4 雖然可行，但 A100 對於單 GPU 配適更直接。

Why others wrong: T4 (16GB) 和 L4 (24GB) 記憶體不足；TPU v4 可行但需要程式碼適配 TPU 程式設計模型，更適合更大的工作負載。

Trap: 因為 L4 較新就選擇它 — 它的記憶體比 A100 少，且更多是為推論而非訓練設計。

Mnemonic: 訓練大模型 = A100 (40/80GB)；推論高效 = L4/T4；超大規模 = TPU

## Q18
Type: single
Difficulty: 1
Tags: scaling, containerization, vertex-ai
Concepts: custom-container-training
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

一位資料科學家有一個在本地可運行的 PyTorch 訓練腳本，需要在 Vertex AI 上搭配 GPU 支援執行。擴展到雲端訓練的最短路徑是什麼？

A. 重寫腳本以使用 TensorFlow 確保 Vertex AI 相容
B. 使用 Vertex AI 預建 PyTorch 容器並提交訓練腳本
C. 在搭配 GPU 的 Compute Engine VM 上部署腳本
D. 將模型轉換為 ONNX 格式並使用 AutoML

Answer: B

Hint: Vertex AI 為主要框架提供預建容器 — 不需建立容器。

Explanation: Vertex AI 提供已配置 GPU 驅動程式的 PyTorch（及 TensorFlow、JAX 等）預建 Docker 容器。你只需指向你的訓練腳本並提交自訂訓練任務 — 不需 Docker 知識或 VM 管理。

Why others wrong: Vertex AI 原生支援 PyTorch 時不需重寫為 TensorFlow；Compute Engine 需要手動設定 GPU 驅動程式和任務管理；ONNX 轉換和 AutoML 與自訂訓練無關。

Trap: 以為你需要為 PyTorch 建立自訂 Docker 容器 — Vertex AI 的預建容器處理了這個。

Mnemonic: 本地腳本 → Vertex AI 預建容器 = 雲端訓練的最快路徑

## Q19
Type: single
Difficulty: 3
Tags: scaling, hyperparameter-tuning, bayesian
Concepts: vizier-optimization
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

你正在調整模型的超參數，每次訓練執行需要 8 小時且花費 200 美元。你有 20 次嘗試的預算。哪個 Vertex AI Vizier 最佳化策略能在此預算內最大化找到好超參數的機會？

A. 跨所有超參數組合的網格搜尋
B. 均勻取樣的隨機搜尋
C. 啟用提前停止的貝葉斯最佳化
D. 基於直覺的手動調整

Answer: C

Hint: 昂貴的嘗試和有限的預算，哪種策略能從先前的嘗試中學習並提前停止不好的執行？

Explanation: 貝葉斯最佳化使用機率模型根據先前嘗試結果預測哪些超參數組合最有希望。結合提前停止，它能快速終止表現不佳的嘗試，為更有希望的配置節省預算。在只有 20 次嘗試時，這比隨機或網格搜尋有效率得多。

Why others wrong: 網格搜尋是組合爆炸式的，在不好的區域浪費預算；隨機搜尋不從先前嘗試中學習；手動調整不能擴展且遺漏複雜互動。

Trap: 預設使用隨機搜尋 — 雖然比網格好，但它浪費嘗試在貝葉斯最佳化會避開的無希望區域。

Mnemonic: 昂貴 + 少量嘗試 = 貝葉斯 + 提前停止；便宜 + 大量嘗試 = 隨機就行

## Q20
Type: single
Difficulty: 2
Tags: scaling, model-evaluation, gen-ai
Concepts: gen-ai-evaluation
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

你需要評估微調 Gemini 模型生成摘要的品質。摘要必須與來源文件事實一致。哪種評估方式提供最可靠的評估？

A. 與參考摘要的 ROUGE 分數比較
B. 搭配多個參考翻譯的 BLEU 分數
C. Vertex AI Gen AI Evaluation 搭配紮實度的逐點指標
D. 僅人工評估

Answer: C

Hint: 與來源文件的事實一致性是關於紮實度 — 哪個工具自動衡量這個？

Explanation: Vertex AI Gen AI Evaluation 提供生成式 AI 的專用指標，包括紮實度（與來源的事實一致性）、流暢度、連貫性和安全性。逐點評估針對來源對每個回應個別評分，專門設計用於偵測幻覺。

Why others wrong: ROUGE 衡量文字重疊，不是事實準確性；BLEU 用於翻譯品質；人工評估無法擴展且應補充自動化指標。

Trap: 用 ROUGE 評估事實一致性 — 高 ROUGE 不保證事實準確性，低 ROUGE 不意味著摘要是錯的。

Mnemonic: 事實準確性 = 紮實度指標；文字重疊 = ROUGE/BLEU；安全性 = 安全指標

## Q21
Type: single
Difficulty: 2
Tags: scaling, ml-metadata, lineage
Concepts: ml-metadata-lineage
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

你的組織為合規要求 ML 模型稽核軌跡。你需要追蹤哪個資料集版本、訓練程式碼和超參數產生了每個部署的模型。哪個 Vertex AI 功能提供這種血統追蹤？

A. Vertex AI Model Registry 版本備註
B. 搭配產出物和執行血統的 Vertex AI ML Metadata
C. Vertex AI API 呼叫的 Cloud Audit Logs
D. BigQuery 稽核資料集

Answer: B

Hint: 哪個 Vertex AI 功能追蹤完整的血統圖：資料 → 程式碼 → 模型 → 部署？

Explanation: Vertex AI ML Metadata 自動追蹤產出物（資料集、模型）、執行（訓練任務、管線步驟）及其關係。它建立可查詢的血統圖，精確顯示每個模型是如何產生的，從輸入資料到每個轉換步驟。

Why others wrong: Model Registry 儲存模型版本但不儲存完整訓練血統；Cloud Audit Logs 追蹤 API 呼叫但不追蹤 ML 專用產出物關係；BigQuery 稽核資料集用於 BQ 操作。

Trap: 以為 Model Registry 版本備註足以用於合規 — 它們是手動的且不捕捉完整的產出物血統圖。

Mnemonic: 完整 ML 血統 = ML Metadata；模型版本 = Model Registry；API 呼叫日誌 = Audit Logs

## Q22
Type: single
Difficulty: 3
Tags: scaling, mixed-precision, training
Concepts: mixed-precision-training
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

你正在 Vertex AI 上用 A100 GPU 訓練大型 transformer 模型但 GPU 記憶體不足。你想在維持模型品質的同時減少記憶體使用。你應該先嘗試哪種技術？

A. 縮減模型的隱藏層維度
B. 啟用混合精度訓練（FP16/BF16 搭配 FP32 主權重）
C. 使用批次大小為 1 的梯度累積
D. 切換到 CPU 訓練

Answer: B

Hint: 哪種技術將啟動值和梯度的記憶體減半且對品質影響最小？

Explanation: 混合精度訓練將啟動值和梯度儲存在 FP16/BF16（FP32 記憶體的一半）同時維持 FP32 主權重以確保數值穩定性。在搭配 Tensor Core 的 A100 GPU 上，這也能加速訓練 2-3 倍。這是記憶體減少的最低風險第一步。

Why others wrong: 縮減隱藏維度改變模型架構且可能損害品質；批次大小 1 的梯度累積非常慢；CPU 訓練對大型 transformer 不切實際。

Trap: 在嘗試混合精度前就跳到梯度累積 — 混合精度更簡單、保留批次大小，且通常還能提升速度。

Mnemonic: 記憶體緊張 → 先混合精度 → 再梯度累積 → 最後模型平行

## Q23
Type: multi
Difficulty: 3
Tags: scaling, distributed-training, strategies
Concepts: parallelism-strategies
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

你需要訓練無法放入單一 GPU 記憶體的 700 億參數模型。你應該結合哪兩種平行化策略？（選擇兩項）

A. 僅資料平行 — 在每個 GPU 上複製完整模型
B. 張量平行 — 將個別層分割到多個 GPU
C. 管線平行 — 將連續層分割到多個 GPU
D. 縮減模型大小直到能放入一個 GPU

Answer: B, C

Hint: 當模型無法放入一個 GPU 時，你需要模型平行 — 哪兩種策略分割模型本身？

Explanation: 對於超過單 GPU 記憶體的模型，張量平行將個別層計算分割到多個 GPU（例如分割注意力頭），而管線平行將連續層分布到多個 GPU。結合它們（加上資料平行時通常稱為 3D 平行）能在 GPU 叢集上訓練非常大的模型。

Why others wrong: 僅資料平行需要完整模型能放入每個 GPU；縮減模型大小改變架構且可能降低品質。

Trap: 以為僅資料平行能訓練大於 GPU 記憶體的模型 — 它複製整個模型，所以每個 GPU 必須持有完整模型。

Mnemonic: 模型太大放不進 1 個 GPU → 張量（分割層）+ 管線（分割階段）；模型放得下 → 資料平行

## Q24
Type: single
Difficulty: 1
Tags: model-development, loss-function, regression
Concepts: loss-function-selection
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

你正在建立預測房價的迴歸模型。資料集包含幾個極端離群價格。哪個損失函數對這些離群值最穩健？

A. 均方誤差（MSE）
B. 平均絕對誤差（MAE）
C. Huber 損失
D. 交叉熵損失

Answer: C

Hint: 哪個損失函數結合了 MSE（平滑梯度）和 MAE（離群值穩健性）的優點？

Explanation: Huber 損失對小誤差表現像 MSE（提供平滑梯度以更快收斂），對大誤差表現像 MAE（對離群值穩健）。這使它非常適合有離群值的迴歸任務，因為它不會讓極端值主導梯度。

Why others wrong: MSE 平方誤差，使其對離群值高度敏感；MAE 穩健但在零處有非平滑梯度；交叉熵用於分類，不是迴歸。

Trap: 為離群值穩健性選擇 MAE — 雖然 MAE 確實比 MSE 更穩健，但 Huber 損失提供更好的收斂特性。

Mnemonic: 迴歸中的離群值 → Huber = 兩者的最佳結合（MSE 平滑性 + MAE 穩健性）

## Q25
Type: single
Difficulty: 2
Tags: model-development, embeddings, similarity
Concepts: embedding-similarity
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

你正在建立產品推薦系統，將使用者查詢與產品描述匹配。你需要將查詢和描述都轉換為向量以進行相似性搜尋。哪個 Google Cloud 服務提供為此使用案例最佳化的文字嵌入？

A. Cloud Natural Language API 實體擷取
B. Vertex AI Text Embeddings API 搭配 task_type RETRIEVAL_DOCUMENT 和 RETRIEVAL_QUERY
C. BigQuery ML 中的 TF-IDF 向量化
D. 在你的產品目錄上訓練的 Word2Vec

Answer: B

Hint: 哪個嵌入服務區分查詢和文件嵌入以用於檢索？

Explanation: Vertex AI Text Embeddings API 提供最先進的嵌入，具有任務專用最佳化。將 task_type 設為 RETRIEVAL_QUERY 用於使用者查詢和 RETRIEVAL_DOCUMENT 用於產品描述，產生針對非對稱語義檢索最佳化的嵌入，其中查詢和文件具有不同特性。

Why others wrong: NL API 擷取實體但不產生用於相似性的密集嵌入；TF-IDF 是稀疏的且遺漏語義意義；Word2Vec 已過時且不捕捉上下文語義。

Trap: 對查詢和文件使用相同的 task_type — 非對稱檢索需要對查詢和文件使用不同的嵌入策略。

Mnemonic: 查詢 ↔ 文件匹配 = RETRIEVAL_QUERY + RETRIEVAL_DOCUMENT；同類型比較 = SEMANTIC_SIMILARITY

## Q26
Type: single
Difficulty: 2
Tags: model-development, attention, transformer
Concepts: attention-mechanisms
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

你正在設計自訂 transformer 模型，需要減少自注意力的二次方記憶體成本以處理長文件（100K+ token）。你應該實作哪種注意力變體？

A. 更多頭的多頭注意力
B. 搭配分塊計算的 Flash Attention
C. 編碼器和解碼器之間的交叉注意力
D. 減少參數的單頭注意力

Answer: B

Hint: 哪種注意力實作透過硬體感知計算減少記憶體使用？

Explanation: Flash Attention 使用分塊計算和核心融合來計算精確注意力，而不在 GPU 記憶體中具體化完整的 N×N 注意力矩陣。這將記憶體從 O(N²) 降低到 O(N)，同時維持與標準注意力的數學等價性，使處理更長序列成為可能。

Why others wrong: 更多注意力頭增加計算，不減少記憶體；交叉注意力用於編碼器-解碼器架構，不是記憶體減少；單頭注意力略微減少參數但不解決二次方記憶體擴展。

Trap: 以為 Flash Attention 是近似 — 它計算精確注意力但使用硬體感知分塊以避免具體化完整注意力矩陣。

Mnemonic: 長序列 + 記憶體限制 = Flash Attention（精確但 O(N) 記憶體）

## Q27
Type: single
Difficulty: 1
Tags: model-development, activation-functions, neural-networks
Concepts: activation-selection
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

你正在建立有 10 個互斥類別的多類別分類任務的神經網路。你應該在輸出層使用哪個啟動函數？

A. Sigmoid
B. Softmax
C. ReLU
D. Tanh

Answer: B

Hint: 互斥類別意味著機率必須加總為 1 — 哪個函數確保這個？

Explanation: Softmax 將輸出正規化為機率分布，所有值加總為 1，非常適合互斥的多類別分類。每個輸出代表屬於該類別的機率。

Why others wrong: Sigmoid 輸出獨立機率（用於多標籤，不是多類別）；ReLU 用於隱藏層，不是分類輸出；Tanh 輸出範圍 [-1,1]，不是機率。

Trap: 對多類別使用 sigmoid — sigmoid 將每個類別獨立處理（多標籤），而 softmax 強制互斥。

Mnemonic: 互斥 = softmax（加總為 1）；獨立標籤 = sigmoid（每個 0-1）

## Q28
Type: single
Difficulty: 3
Tags: model-development, knowledge-distillation, compression
Concepts: knowledge-distillation
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

你有一個用於客戶意圖分類的高效能 Gemini Pro 模型，但推論成本對你的量太高。你想建立一個更小、更便宜的模型但保持大部分品質。最有效的方式是什麼？

A. 修剪 Gemini Pro 模型的權重
B. 使用軟標籤將 Gemini Pro 的知識蒸餾到較小模型
C. 將 Gemini Pro 量化為 INT8
D. 直接使用 Gemini Flash 不做任何訓練

Answer: B

Hint: 哪種技術透過訓練較小模型學習大模型的輸出機率來轉移知識？

Explanation: 知識蒸餾訓練較小的「學生」模型模仿較大「老師」模型的軟機率輸出，而非僅硬標籤。軟標籤攜帶硬標籤遺漏的類別間關係資訊，使學生能以老師品質的一小部分成本達到接近的表現。

Why others wrong: 你無法修剪 Gemini Pro 的權重（它是受管理的 API 模型）；量化降低精度但不根本上縮小 API 模型的大小；Gemini Flash 可能可行但未在你特定任務的知識上訓練。

Trap: 選擇 Gemini Flash — 雖然更便宜，但它未從 Gemini Pro 的任務專用效能中學習。蒸餾轉移了那份特定知識。

Mnemonic: 大模型太貴 → 蒸餾到小模型；同模型太慢 → 量化/修剪

## Q29
Type: single
Difficulty: 2
Tags: model-development, data-augmentation, images
Concepts: image-augmentation
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

你正在訓練影像分類模型但每個類別只有 500 張標記影像。模型在 10 個 epoch 後過擬合。哪種技術最可能改善泛化？

A. 增加模型的層數以獲得更多容量
B. 應用資料增強（隨機裁剪、翻轉、旋轉、色彩抖動）
C. 移除 Dropout 層以保留資訊
D. 以更低的學習率訓練更多 epoch

Answer: B

Hint: 有限資料下過擬合 — 哪種技術有效增加訓練資料多樣性？

Explanation: 資料增強透過幾何和光度轉換建立現有訓練影像的合成變體。這有效增加資料集多樣性而不需新的標記資料，透過在訓練期間讓模型接觸更多視覺變化來減少過擬合。

Why others wrong: 增加容量在有限資料下加劇過擬合；移除 Dropout 移除正則化；訓練更久放大過擬合。

Trap: 增加更多模型容量以「學得更好」— 有限資料下，更多容量 = 更多過擬合。

Mnemonic: 有限資料 + 過擬合 → 增強（更多多樣性）+ 正則化（更少容量）

## Q30
Type: single
Difficulty: 2
Tags: model-development, contrastive-learning, representations
Concepts: contrastive-learning
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

你正在為時裝零售商建立視覺相似性搜尋系統。你需要嵌入向量使外觀相似的品項靠近，不同的品項遠離。哪種訓練目標最合適？

A. 交叉熵分類損失
B. 對比損失（例如 triplet loss 或 InfoNCE）
C. 均方誤差迴歸
D. 生成對抗損失

Answer: B

Hint: 哪種損失函數明確最佳化使相似品項在嵌入空間中靠近、不同品項遠離？

Explanation: 對比學習目標如 triplet loss 直接最佳化嵌入空間幾何：拉近錨點-正樣本配對並推遠錨點-負樣本配對。這產生視覺相似性直接對應到嵌入空間距離的嵌入，非常適合相似性搜尋。

Why others wrong: 交叉熵分類到固定類別但不最佳化嵌入距離；MSE 用於迴歸；GAN 損失用於生成，不是表示學習。

Trap: 使用分類損失做相似性 — 它產生有區別性的特徵但不保證嵌入空間中有意義的距離關係。

Mnemonic: 相似性搜尋 = 對比損失（最佳化距離）；類別預測 = 分類損失

## Q31
Type: single
Difficulty: 3
Tags: model-development, curriculum-learning, training-strategy
Concepts: curriculum-learning
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

你正在訓練難以收斂的複雜多任務模型。模型需要先學會基本文字理解再處理複雜推理任務。你應該使用哪種訓練策略？

A. 以相等損失權重同時訓練所有任務
B. 使用課程學習 — 從較簡單的任務開始並逐步引入較難的
C. 只訓練最難的任務以迫使模型學習一切
D. 每個 epoch 隨機打亂任務難度

Answer: B

Hint: 就像人類教育一樣，某些模型在概念按難度順序引入時學得更好。

Explanation: 課程學習以有意義的順序呈現訓練資料，從簡單到複雜。對於多任務學習，從基礎任務（文字理解）開始，再引入複雜任務（推理），幫助模型建立強大的表示基礎，改善收斂和最終效能。

Why others wrong: 相等權重同時訓練可能造成任務干擾和收斂緩慢；只訓練困難任務遺漏基礎學習；隨機打亂阻止課程效益。

Trap: 假設所有任務應平等加權 — 某些任務受益於以特定順序學習。

Mnemonic: 課程 = 「學校順序」— 先簡單後困難；模型逐步建立理解

## Q32
Type: multi
Difficulty: 2
Tags: model-development, generative-ai, safety
Concepts: output-safety
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

你正在為兒童教育平台部署 Gemini 應用程式。你應該實施哪兩項安全措施？（選擇兩項）

A. 將安全過濾器配置為最嚴格等級以阻擋有害內容類別
B. 停用所有安全過濾器以避免誤報
C. 在顯示給使用者前添加帶有獨立內容分類器的輸出驗證
D. 允許所有內容並依賴家長監控

Answer: A, C

Hint: 深度防禦 — 對兒童平台使用多層內容安全。

Explanation: 對於兒童平台，你應該將 Gemini 的內建安全過濾器配置在最嚴格的閾值，且添加次要內容分類器作為深度防禦。內建過濾器捕捉大部分有害內容，而次要分類器捕捉邊緣案例和領域專用的不適當內容。

Why others wrong: 在兒童平台上停用安全過濾器是不負責任的；僅依賴家長監控對教育平台不足。

Trap: 僅依賴一層安全 — 沒有單一過濾器能捕捉一切，所以深度防禦對高風險受眾至關重要。

Mnemonic: 兒童平台 = 最大安全過濾器 + 次要分類器（深度防禦）

## Q33
Type: single
Difficulty: 2
Tags: model-development, quantization-aware, training
Concepts: quantization-aware-training
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

你需要在記憶體有限的行動裝置上部署 TensorFlow 模型。訓練後量化（INT8）使準確率降低了 5%。你如何減少這個準確率損失？

A. 應用量化感知訓練（QAT）然後量化為 INT8
B. 使用 FP16 量化取代 INT8
C. 增加模型大小以彌補量化誤差
D. 部署 FP32 模型並接受較慢的推論

Answer: A

Hint: 哪種技術在訓練期間模擬量化效果，使模型學會對降低精度保持穩健？

Explanation: 量化感知訓練在訓練期間插入假量化節點，讓模型學習對量化效果穩健的權重。這通常恢復訓練後量化損失的大部分準確率，以 INT8 推論達到接近 FP32 的準確率。

Why others wrong: FP16 使用比 INT8 更多記憶體且可能仍損失一些準確率；增加模型大小違背量化的目的；保持 FP32 不解決記憶體限制。

Trap: 以為訓練後量化是唯一選項 — QAT 幾乎總是產生更好的 INT8 模型。

Mnemonic: 訓練後量化損害準確率 → 訓練期間 QAT → 模型學會處理 INT8

## Q34
Type: single
Difficulty: 3
Tags: model-development, rl, reward-model
Concepts: reward-modeling
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

你正在用 RLHF 為客服應用程式微調 LLM。你的獎勵模型始終對冗長回應給予高分，而不管準確性。你應該怎麼做？

A. 增加強化學習訓練迭代
B. 在獎勵函數中添加長度懲罰，並收集更多專注於簡潔性的偏好資料
C. 切換為僅監督式微調
D. 增加生成時的溫度

Answer: B

Hint: 獎勵模型學到了一個捷徑（冗長 = 品質）— 你如何糾正這個偏差？

Explanation: 獎勵模型學到了回應長度和品質之間的虛假相關。添加明確的長度懲罰防止模型透過冗長來博取獎勵。收集額外的偏好資料，其中簡潔準確的回應排名高於冗長的回應，重新訓練獎勵模型以重視準確性而非長度。

Why others wrong: 更多 RL 迭代放大冗長偏差；切換到 SFT 失去對齊的好處；增加溫度添加隨機性但不修復獎勵模型的偏差。

Trap: 以為更多 RLHF 訓練能修復它 — 用有偏差的獎勵模型做更多訓練會讓偏差更嚴重（獎勵黑客）。

Mnemonic: 獎勵模型偏差 → 修復獎勵（添加懲罰 + 更好的資料），不要用壞的獎勵訓練更多

## Q35
Type: single
Difficulty: 1
Tags: model-development, validation, stratified
Concepts: stratified-split
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

你有一個二元分類任務的資料集，95% 負樣本和 5% 正樣本。你應該如何將此資料分割為訓練和驗證集？

A. 隨機分割 80/20
B. 分層分割以在兩個集中維持 95/5 比例
C. 將所有正樣本放入訓練，負樣本放入驗證
D. 分割前先過取樣正樣本

Answer: B

Hint: 類別分布必須在訓練和驗證中保持 — 哪種分割方法確保這個？

Explanation: 分層分割確保訓練和驗證集都維持相同的類別分布（95% 負、5% 正）。這防止驗證集偶然有太少或太多正樣本，對少數類別給出可靠的效能估計。

Why others wrong: 隨機分割可能將太少正樣本放入驗證（或訓練），給出不可靠的指標；隔離類別違背驗證的目的；分割前過取樣將資訊從訓練洩漏到驗證。

Trap: 分割前過取樣 — 合成正樣本可能出現在訓練和驗證中，造成資料洩漏和過度樂觀的指標。

Mnemonic: 不平衡資料 → 先分層分割，然後只在訓練中過取樣（永遠不要在分割前）

## Q36
Type: single
Difficulty: 2
Tags: mlops, pipeline-triggers, continuous-training
Concepts: pipeline-triggers
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

你想讓 ML 管線在偵測到資料漂移時自動重新訓練模型。哪種 Google Cloud 服務組合能實現這個？

A. Cloud Scheduler 按固定排程觸發 Vertex AI Pipelines
B. Vertex AI Model Monitoring 偵測漂移 → Cloud Functions 觸發 Vertex AI Pipelines
C. 搭配手動發布的 Pub/Sub 主題 → Cloud Run 重新訓練任務
D. BigQuery 排程查詢檢查新資料

Answer: B

Hint: 哪種設定提供自動漂移偵測和管線觸發而無需手動介入？

Explanation: Vertex AI Model Monitoring 持續分析傳入預測請求的分布變化。當漂移超過配置的閾值時，它可以發布到 Pub/Sub 或觸發 Cloud Functions，進而啟動 Vertex AI Pipeline 進行重新訓練。這建立了由實際資料變化驅動的封閉迴路持續訓練系統。

Why others wrong: Cloud Scheduler 不管漂移與否都按排程重新訓練；手動 Pub/Sub 發布不是自動的；BigQuery 排程查詢檢查資料到達，不是分布漂移。

Trap: 使用基於時間的重新訓練取代基於漂移的 — 基於時間可能在不必要時重新訓練或在排程間漏掉關鍵漂移。

Mnemonic: 基於漂移的重新訓練 = Model Monitoring → 觸發 → Pipeline；基於時間 = Cloud Scheduler（浪費）

## Q37
Type: single
Difficulty: 2
Tags: mlops, feature-store, online-serving
Concepts: feature-store-online
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

你的詐欺偵測模型在線上預測時需要即時特徵，如「過去 5 分鐘的交易數量」。歷史訓練使用從 BigQuery 批次計算的特徵。你應該如何在生產中服務這些特徵？

A. 每次預測請求時即時查詢 BigQuery
B. 使用搭配線上服務和串流特徵攝取的 Vertex AI Feature Store
C. 在 Memorystore 中快取特徵並每小時更新
D. 將所有特徵計算嵌入模型的預處理層

Answer: B

Hint: 即時特徵需要低延遲服務和串流更新 — 哪個服務同時提供兩者？

Explanation: 搭配線上服務的 Vertex AI Feature Store 提供毫秒級延遲的特徵查找以用於即時預測。串流攝取在新事件到達時更新特徵（例如每筆新交易更新 5 分鐘計數），確保模型始終使用最新的特徵值。

Why others wrong: BigQuery 即時查詢對詐欺偵測延遲太高；每小時 Memorystore 更新會遺漏快速詐欺模式；在模型預處理中嵌入計算無法存取跨實體特徵如「此卡的所有交易」。

Trap: 為即時特徵查詢 BigQuery — BigQuery 針對分析查詢最佳化，不是毫秒級延遲的點查找。

Mnemonic: 即時特徵服務 = Feature Store 線上；批次特徵計算 = BigQuery/Dataflow

## Q38
Type: single
Difficulty: 3
Tags: mlops, pipeline-testing, unit-test
Concepts: pipeline-testing
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

你正在為包含資料驗證、特徵工程、訓練和評估元件的 Vertex AI Pipeline 撰寫單元測試。哪種測試策略在合理的測試執行時間內提供最大信心？

A. 用生產資料端對端測試整個管線
B. 用模擬輸入對每個元件做單元測試，然後用小型合成資料集做整合測試
C. 只測試訓練元件因為它最複雜
D. 每次執行後手動檢查管線輸出

Answer: B

Hint: 哪種策略在測試所有元件的徹底性和不需完整生產執行的速度之間取得平衡？

Explanation: 用模擬輸入對每個管線元件做單元測試能快速驗證個別邏輯。然後用小型合成資料集做整合測試驗證元件能正確協同工作。這種兩層方法同時捕捉元件級和整合問題，而不需完整生產執行的成本和時間。

Why others wrong: 生產資料端對端測試很慢、昂貴且難以偵錯失敗；只測試訓練會遺漏資料驗證和特徵工程的錯誤；手動檢查不能擴展且會遺漏回歸。

Trap: 只做端對端測試 — 當它們失敗時，很難識別哪個元件造成失敗。

Mnemonic: ML 測試金字塔：單元測試（快、多）→ 整合測試（中等）→ 端對端（慢、少）

## Q39
Type: single
Difficulty: 1
Tags: mlops, model-registry, lifecycle
Concepts: model-lifecycle
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

你的團隊每週訓練多個模型版本。你需要追蹤哪些版本在暫存、生產和退役。哪個 Vertex AI 功能管理模型版本生命週期？

A. Vertex AI Experiments
B. 搭配版本別名的 Vertex AI Model Registry
C. 以每個版本資料夾結構的 Cloud Storage
D. 手動追蹤試算表

Answer: B

Hint: 哪個功能提供內建版本管理搭配生命週期階段標籤？

Explanation: Vertex AI Model Registry 儲存模型產出物搭配版本控制，並支援別名（例如「production」、「staging」、「champion」、「challenger」）來追蹤生命週期狀態。它與部署端點和管線自動化整合以實現無縫版本升級。

Why others wrong: Experiments 追蹤訓練執行，不是已部署模型生命週期；Cloud Storage 缺乏內建版本控制語義；試算表容易出錯且未與部署整合。

Trap: 混淆 Experiments（訓練階段追蹤）和 Model Registry（部署生命週期追蹤）。

Mnemonic: 訓練追蹤 = Experiments；模型生命週期 = Model Registry；部署 = Endpoints

## Q40
Type: single
Difficulty: 2
Tags: mlops, data-validation, tfdv
Concepts: data-validation-pipeline
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

你想在傳入訓練資料進入訓練管線前自動偵測異常（意外的空值、超出範圍的值、新的分類值）。你應該整合哪個工具？

A. BigQuery 資料品質規則
B. 搭配從基準資料生成模式的 TensorFlow Data Validation (TFDV)
C. 資料載入程式碼中的 Python assert 語句
D. Cloud Data Loss Prevention (DLP) API

Answer: B

Hint: 哪個工具從基準生成資料模式並自動驗證新資料？

Explanation: TFDV 從基準資料集生成模式，捕捉預期資料分布、範圍和類別。當新資料到達時，TFDV 根據此模式驗證並標記異常：意外的空值率、超出範圍的值、新類別和分布漂移。它原生整合 TFX 和 Vertex AI Pipelines。

Why others wrong: BigQuery 規則需要手動定義且不理解 ML 資料分布；assert 語句不從資料模式中學習；DLP 用於敏感資料偵測（PII、信用卡），不是 ML 資料品質。

Trap: 使用 DLP 做資料品質 — DLP 找到敏感資料，不是資料分布異常。

Mnemonic: ML 資料品質 = TFDV（從資料中學習模式）；敏感資料 = DLP；商業規則 = BigQuery

## Q41
Type: single
Difficulty: 3
Tags: mlops, canary-analysis, automated
Concepts: automated-canary-analysis
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

你正在部署新模型版本，想在完全上線前使用真實流量自動評估它與當前生產模型的比較。評估應考慮延遲、錯誤率和自訂商業指標。你應該如何實施？

A. 部署兩個版本並手動比較儀表板
B. 使用 Vertex AI Endpoints 流量分割搭配 Cloud Monitoring 指標和 Cloud Function 根據閾值自動升級或回滾
C. 做一個月的 A/B 測試再決定
D. 將新版本部署到獨立端點並發送重複流量

Answer: B

Hint: 哪種方式自動化金絲雀評估和升級/回滾決策？

Explanation: Vertex AI Endpoints 支援流量分割以將一定百分比的流量路由到新版本。Cloud Monitoring 收集兩個版本的延遲、錯誤率和自訂指標。Cloud Function 根據預定義閾值評估這些指標並自動升級新版本（增加流量）或回滾（將所有流量路由到舊版本）。

Why others wrong: 手動儀表板比較不自動化決策；一個月對金絲雀分析太長；重複流量浪費資源且不在真實服務條件下測試。

Trap: 金絲雀分析執行太久 — 重點是快速自動化評估，不是長期實驗。

Mnemonic: 自動化金絲雀 = 流量分割 + 指標比較 + 自動升級/回滾

## Q42
Type: single
Difficulty: 2
Tags: mlops, secrets-management, training
Concepts: secrets-in-pipelines
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

你的 Vertex AI Pipeline 需要存取外部資料庫以拉取訓練資料。資料庫憑證不能硬編碼或儲存在管線程式碼中。你應該如何安全地提供憑證？

A. 將憑證作為管線參數傳遞
B. 使用 Secret Manager 並授予管線服務帳號存取密鑰的權限
C. 將憑證儲存在 Cloud Storage 配置檔中
D. 在容器映像中設定憑證為環境變數

Answer: B

Hint: 哪個 Google Cloud 服務專為管理具有存取控制的密鑰而建？

Explanation: Secret Manager 提供加密、版本化的密鑰儲存搭配細粒度 IAM 存取控制。管線的服務帳號可以被授予存取特定密鑰的權限，在執行時取得。沒有憑證儲存在程式碼、配置檔或容器映像中。

Why others wrong: 管線參數會被記錄且在 UI 中可見；Cloud Storage 配置檔缺少加密和稽核軌跡；映像中的環境變數被嵌入且對任何有映像存取權的人可見。

Trap: 將憑證作為管線參數傳遞 — 它們出現在管線執行中繼資料和日誌中。

Mnemonic: 密鑰 = Secret Manager（加密、稽核、存取控制）；永遠不放在程式碼/配置/參數中

## Q43
Type: single
Difficulty: 2
Tags: mlops, pipeline-scheduling, vertex-ai
Concepts: pipeline-scheduling
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

你需要每週日凌晨 2 點使用最新使用者互動資料重新訓練推薦模型。在 Google Cloud 上最可維護的方式是什麼？

A. Compute Engine VM 上的 cron 任務呼叫 Vertex AI API
B. 搭配 cron 表達式的 Vertex AI Pipeline Schedules
C. Cloud Scheduler 觸發 Cloud Function 啟動管線
D. 開發人員每週日手動觸發管線

Answer: B

Hint: Vertex AI 有內建管線排程 — 哪個選項需要最少的額外基礎設施？

Explanation: Vertex AI Pipeline Schedules 讓你直接在 Vertex AI 主控台或 SDK 中使用 cron 表達式配置定期管線執行。不需額外基礎設施（VM、Cloud Functions），使其成為最可維護的選項。

Why others wrong: Compute Engine VM 需要維護和監控；Cloud Scheduler + Cloud Function 可行但增加不必要的元件；手動觸發不能擴展且容易出錯。

Trap: 在 Vertex AI 有內建排程時建立 Cloud Scheduler → Cloud Function → Pipeline 鏈。

Mnemonic: Vertex AI Pipeline 排程 = 內建 cron；除非需要複雜觸發邏輯否則不要添加 Cloud Scheduler

## Q44
Type: single
Difficulty: 3
Tags: mlops, genai-ops, prompt-versioning
Concepts: prompt-management
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

你的團隊維護 50 多個用於各種 Gemini 驅動功能的提示。提示需要版本控制、A/B 測試和回滾功能。在 Google Cloud 上你應該如何管理提示生命週期？

A. 將提示儲存在 Cloud Storage 搭配物件版本控制
B. 使用搭配提示版本和評估的 Vertex AI Prompt Management
C. 將提示保存在 Git 儲存庫中並透過 CI/CD 部署
D. 在應用程式碼中硬編碼提示

Answer: B

Hint: 哪個 Vertex AI 功能專為提示版本控制、評估和管理而建？

Explanation: Vertex AI Prompt Management 提供結構化的提示版本控制、比較、對測試資料集的評估和部署管理。它支援提示版本之間的 A/B 測試和回滾，將提示視為一級 ML 產出物而非程式碼字串。

Why others wrong: Cloud Storage 版本控制缺少評估和 A/B 測試功能；Git + CI/CD 適用於版本控制但缺少內建提示評估；硬編碼提示在大規模下無法管理。

Trap: 將提示視為 Git 中的程式碼 — 雖然版本控制很重要，但提示需要 Git 本身無法提供的評估和 A/B 測試基礎設施。

Mnemonic: 提示生命週期 = Vertex AI Prompt Management；程式碼生命週期 = Git + CI/CD

## Q45
Type: single
Difficulty: 2
Tags: mlops, artifact-lineage, containers
Concepts: container-image-management
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

你的 ML 管線建立用於訓練和服務的自訂 Docker 容器。你需要搭配弱點掃描和映像簽名來管理這些容器。應該使用哪個 Google Cloud 服務？

A. Docker Hub
B. 搭配容器分析和 Binary Authorization 的 Artifact Registry
C. 用於儲存 Docker tar 檔的 Cloud Storage
D. Compute Engine 容器註冊表

Answer: B

Hint: 哪個 Google Cloud 原生服務提供搭配安全功能的容器管理？

Explanation: Artifact Registry 是 Google Cloud 的受管理容器註冊表，支援弱點掃描（Container Analysis）、映像簽名和 Binary Authorization 以用於部署安全。它與 Vertex AI 自訂訓練和預測整合以實現無縫 ML 容器工作流程。

Why others wrong: Docker Hub 是外部的且缺少 Google Cloud 安全整合；Cloud Storage 可以儲存壓縮檔但沒有容器管理功能；沒有「Compute Engine 容器註冊表」。

Trap: 使用 Docker Hub 做 ML 容器 — 它缺少與 Google Cloud 安全工具的弱點掃描整合。

Mnemonic: ML 容器 = Artifact Registry（掃描 + 簽名 + 部署）；Python 套件也 = Artifact Registry

## Q46
Type: multi
Difficulty: 3
Tags: mlops, pipeline-optimization, caching
Concepts: pipeline-caching-strategy
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

你的 Vertex AI Pipeline 每天執行需要 6 小時。資料前處理步驟（2 小時）經常在沒有新資料到達時處理相同的資料。哪兩種技術能減少管線執行時間？（選擇兩項）

A. 啟用管線步驟快取以跳過輸入未變更的步驟
B. 即使沒有新資料到達也執行整個管線
C. 使用 Dataflow 做前處理步驟以平行化計算
D. 完全移除前處理步驟

Answer: A, C

Hint: 哪兩種方式從不同角度解決問題 — 避免不必要的工作和加速必要的工作？

Explanation: 管線步驟快取在輸入未變更時跳過步驟（當資料相同時避免 2 小時前處理）。Dataflow 在確實需要執行時平行化前處理計算，可能將 2 小時縮減到幾分鐘。結合兩者能最小化不必要的執行和需要時的執行時間。

Why others wrong: 資料未變更時執行完整管線浪費 2 小時以上；完全移除前處理會破壞管線的資料品質保證。

Trap: 只使用快取 — 當資料未變更時有幫助，但新資料到達時你仍想透過 Dataflow 快速前處理。

Mnemonic: 跳過不必要的工作 = 快取；加速必要的工作 = 平行化（Dataflow）

## Q47
Type: single
Difficulty: 1
Tags: deployment, serving-pattern, online-batch
Concepts: serving-patterns
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

行銷團隊需要在夜間對整個客戶資料庫（1,000 萬筆記錄）進行評分以選擇明天電子郵件活動的目標。最合適的服務模式是什麼？

A. 搭配永遠在線端點的線上預測
B. 搭配 Vertex AI 批次任務的批次預測
C. 搭配 Pub/Sub 的即時串流
D. 搭配 TensorFlow Lite 的裝置端預測

Answer: B

Hint: 隔夜對數百萬筆記錄評分是經典的批次工作負載 — 哪種服務模式適合？

Explanation: 批次預測非同步處理大型資料集，為任務啟動資源並在完成時關閉。對於結果不需即時的數百萬筆記錄評分來說非常經濟實惠，因為不需為閒置端點時間付費。

Why others wrong: 線上端點為永遠在線的資源收費且無法有效處理 1,000 萬筆記錄；串流用於持續即時處理；裝置端不適用於伺服器端批次評分。

Trap: 使用線上端點做批次評分 — 你會為閒置端點時間和每筆記錄的 API 呼叫開銷付費。

Mnemonic: 立即評分，一次一筆 = 線上；稍後評分很多 = 批次；持續評分 = 串流

## Q48
Type: single
Difficulty: 2
Tags: deployment, multi-model, endpoint
Concepts: multi-model-serving
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

你有三個模型（情感、意圖、實體擷取）在處理客戶訊息時總是一起呼叫。每個模型都很小，不需要自己的 GPU。你應該如何經濟實惠地部署它們？

A. 將每個模型部署在獨立的 Vertex AI 端點
B. 將三個模型打包在單一自訂容器中並部署到一個端點
C. 使用 Cloud Functions 呼叫每個模型的獨立端點
D. 部署在三個獨立的 Compute Engine VM 上

Answer: B

Hint: 當模型總是一起呼叫且很小時，最節省資源的部署是什麼？

Explanation: 將三個模型打包在單一端點上的單一自訂容器中消除了三個獨立端點的開銷（3 倍最小資源、3 倍網路呼叫）。由於模型很小且總是一起使用，單一容器可以用單一 API 呼叫服務所有三個，減少成本和延遲。

Why others wrong: 獨立端點三倍最小運算成本；Cloud Functions 增加三次連續呼叫的延遲；Compute Engine VM 需要手動管理。

Trap: 為了「模組化」而分別部署每個模型 — 當模型總是共同調用時，共置節省成本並減少延遲。

Mnemonic: 總是在一起 + 小模型 = 一個容器；獨立 + 大模型 = 分開端點

## Q49
Type: single
Difficulty: 3
Tags: deployment, gpu-sharing, cost-optimization
Concepts: gpu-sharing-deployment
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

你在 Vertex AI 上部署了 20 個小型 ML 模型，每個使用不到 2GB GPU 記憶體。目前每個模型有自己的 GPU，導致成本高昂。你如何降低 GPU 成本？

A. 將所有模型切換為僅 CPU 服務
B. 使用搭配 NVIDIA MPS 的 Vertex AI 多模型端點共享 GPU
C. 將所有 20 個模型合併為單一模型
D. 手動排程模型以透過時間切片共享 GPU

Answer: B

Hint: 多個小模型可以共享單一 GPU — 哪個 Vertex AI 功能支援這個？

Explanation: Vertex AI 支援使用 NVIDIA Multi-Process Service (MPS) 將多個模型部署到相同端點和 GPU。每個模型獲得隔離的 GPU 記憶體和運算，同時共享物理 GPU。當個別模型 GPU 使用率不足時，這可以降低 10-20 倍 GPU 成本。

Why others wrong: 切換到 CPU 可能顯著增加某些模型的延遲；將 20 個模型合併為一個在架構上不切實際；手動時間切片很脆弱且在轉換期間浪費 GPU。

Trap: 切換到 CPU 以節省成本 — GPU 共享保留了 GPU 推論的延遲優勢同時分攤成本。

Mnemonic: 小模型 + 昂貴 GPU = 共享 GPU（MPS）；大模型 = 專用 GPU

## Q50
Type: single
Difficulty: 2
Tags: deployment, autoscaling, vertex-ai
Concepts: endpoint-autoscaling
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

你的預測端點在營業時間收到 100 QPS 但夜間幾乎降到零。你想在尖峰時段維持低延遲的同時最小化成本。你應該如何配置端點？

A. 設定固定數量的複本以應付尖峰負載
B. 配置自動擴展搭配最小複本 = 1 和目標 CPU 使用率
C. 使用可擴展到零的無伺服器端點
D. 部署在搶佔式 VM 上以節省成本

Answer: C

Hint: 夜間幾乎零流量 — 哪個選項避免為閒置資源付費？

Explanation: Vertex AI 無伺服器端點（搭配可擴展到零的私有端點）根據流量自動擴展，包括在沒有流量時擴展到零。這消除了非營業時段的成本，同時在尖峰時段自動擴展，為高度變動的工作負載提供最佳成本最佳化。

Why others wrong: 固定複本在低流量時段浪費錢；自動擴展搭配最小=1 夜間仍為一個複本付費；搶佔式 VM 可能被中斷且不解決擴展問題。

Trap: 「以防萬一」設定最小複本為 1 — 如果流量降到零，即使一個複本也是浪費。

Mnemonic: 流量降到零 = 擴展到零（無伺服器）；總是有些流量 = 自動擴展搭配最小=1

## Q51
Type: single
Difficulty: 2
Tags: deployment, model-optimization, tensorrt
Concepts: tensorrt-optimization
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

你需要將模型的推論延遲從 200ms 降到 50ms 以下以用於即時詐欺偵測。模型在 NVIDIA GPU 上運行。哪種最佳化最可能達到這個加速？

A. 增加 GPU 複本數量
B. 用 TensorRT 最佳化模型以進行 GPU 專用圖形最佳化
C. 切換到有更多 CUDA 核心的更大 GPU
D. 增加批次大小以更好地利用 GPU

Answer: B

Hint: 哪個工具執行 GPU 專用最佳化如層融合和精度校準？

Explanation: TensorRT 透過層融合、核心自動調整、精度校準（FP16/INT8）和記憶體最佳化來最佳化 NVIDIA GPU 上的神經網路推論。這些最佳化可以在不改變模型架構的情況下降低延遲 2-10 倍，是從 200ms 到 50ms 最有效的路徑。

Why others wrong: 更多複本增加吞吐量，不減少單一請求延遲；更大 GPU 有幫助但不能提供 TensorRT 的 4 倍加速；增加批次大小增加個別請求的延遲。

Trap: 增加複本以降低延遲 — 更多複本處理更多並發請求但每個請求仍需 200ms。

Mnemonic: 延遲降低 = 最佳化模型（TensorRT）；吞吐量增加 = 增加複本

## Q52
Type: single
Difficulty: 3
Tags: deployment, blue-green, rollback
Concepts: blue-green-deployment
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

你正在部署改變輸出格式的關鍵模型更新。此更新與現有客戶端應用程式不向後相容。你應該如何部署以允許在問題出現時立即回滾？

A. 就地更新現有端點
B. 藍綠部署搭配新端點、DNS 切換，且保持舊端點暖機
C. 漸進式流量轉移的金絲雀部署
D. 部署並立即刪除舊版本

Answer: B

Hint: 不向後相容的變更需要即時切換和回滾 — 哪種模式提供這個？

Explanation: 藍綠部署在現有端點（藍）旁建立全新端點（綠）。驗證綠端點後，DNS 或負載均衡器配置立即切換所有流量。如果出現問題，切回藍色提供立即回滾。舊端點在過渡期間保持暖機。

Why others wrong: 就地更新沒有回滾路徑；金絲雀部署同時向客戶端發送混合輸出格式（破壞不向後相容的變更）；刪除舊版本消除回滾能力。

Trap: 對不向後相容的變更使用金絲雀部署 — 客戶端會同時收到兩種不同格式的回應。

Mnemonic: 破壞性變更 = 藍綠（一次全部切換）；相容變更 = 金絲雀（漸進）；藍綠保持舊版本暖機以備回滾

## Q53
Type: single
Difficulty: 2
Tags: deployment, serving-container, custom-prediction
Concepts: custom-prediction-routine
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

你的模型需要在核心推論呼叫周圍進行複雜的前處理（特徵查找、文字正規化、嵌入）和後處理（閾值邏輯、回應格式化）。你應該如何在 Vertex AI 上實施？

A. 在客戶端應用程式中處理所有前/後處理
B. 使用搭配前/後處理方法的 Vertex AI 自訂預測常式（CPR）
C. 部署三個獨立端點：前處理、模型、後處理
D. 將前/後處理添加到模型的 TensorFlow SavedModel 簽名中

Answer: B

Hint: 哪個 Vertex AI 功能讓你在模型的 predict 方法周圍添加自訂程式碼？

Explanation: 自訂預測常式（CPR）讓你定義包裝模型 predict 呼叫的自訂 preprocess() 和 postprocess() 方法。所有邏輯在同一端點上的單一容器中運行，最小化延遲並保持前處理/後處理邏輯與模型共置。

Why others wrong: 客戶端處理增加客戶端複雜度並造成一致性問題；三個端點增加延遲和維運開銷；修改 SavedModel 簽名有限制且不支援任意 Python 邏輯。

Trap: 將處理分散到多個端點 — 這增加網路延遲並建立更多故障點。

Mnemonic: 預測周圍的自訂邏輯 = CPR（一個端點，三個步驟）；標準模型 = 預設預測

## Q54
Type: single
Difficulty: 1
Tags: deployment, endpoint-logging, prediction
Concepts: prediction-logging
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

你需要記錄 Vertex AI 端點的所有預測請求和回應以用於除錯和合規。你應該啟用哪個功能？

A. Cloud Audit Logs
B. Vertex AI 端點請求-回應記錄到 BigQuery
C. Cloud Trace 做延遲分析
D. 服務容器中的自訂應用程式層記錄

Answer: B

Hint: 哪個 Vertex AI 功能自動將預測輸入和輸出記錄到可查詢的資料儲存？

Explanation: Vertex AI 端點支援請求-回應記錄，自動捕捉預測輸入和輸出並儲存在 BigQuery 中。這提供可查詢的結構化日誌，用於除錯、合規稽核和下游分析如監控資料漂移。

Why others wrong: Cloud Audit Logs 捕捉 API 呼叫但不捕捉預測載荷；Cloud Trace 衡量延遲，不是請求內容；自訂記錄需要程式碼更改且不自動整合 BigQuery。

Trap: 以為 Cloud Audit Logs 捕捉預測內容 — 它們只記錄預測 API 呼叫被發出，不是發送/回傳了什麼。

Mnemonic: 預測內容記錄 = BigQuery 表格；API 呼叫稽核 = Cloud Audit Logs；延遲 = Cloud Trace

## Q55
Type: single
Difficulty: 1
Tags: monitoring, concept-drift, detection
Concepts: concept-drift
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

部署貸款違約預測模型後，其準確率在 6 個月內逐漸下降，即使輸入特徵分布沒有變化。最可能發生的是哪種類型的漂移？

A. 資料漂移 — 輸入分布已偏移
B. 概念漂移 — 輸入和結果之間的關係已改變
C. 預測漂移 — 模型輸出已改變
D. 訓練-服務偏差 — 前處理不同

Answer: B

Hint: 當輸入看起來一樣但預測變差時，特徵和目標之間的真實世界關係已改變。

Explanation: 概念漂移發生在輸入特徵和目標變數之間的底層關係改變時。在貸款方面，經濟條件、法規或借款人行為的變化可以改變什麼使貸款可能違約，即使特徵分布看起來穩定。

Why others wrong: 資料漂移會顯示輸入分布變化；預測漂移是症狀，不是根本原因；訓練-服務偏差會造成立即錯誤，不是漸進退化。

Trap: 混淆概念漂移和資料漂移 — 資料漂移改變輸入；概念漂移改變輸入對結果的意義。

Mnemonic: 相同輸入，不同結果 = 概念漂移；不同輸入 = 資料漂移

## Q56
Type: single
Difficulty: 2
Tags: monitoring, feature-attribution, debugging
Concepts: feature-attribution-monitoring
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

你的模型整體準確率穩定，但你注意到某些客戶群正在得到更差的預測。哪個 Vertex AI 監控功能幫助識別哪些特徵驅動特定群組的退化？

A. 整體預測漂移監控
B. 搭配切片分析的特徵歸因漂移監控
C. 每個端點的延遲監控
D. 訓練資料統計比較

Answer: B

Hint: 哪種監控方式顯示個別特徵對特定資料切片的預測影響如何隨時間變化？

Explanation: 特徵歸因漂移監控追蹤每個特徵隨時間對預測的貢獻變化。結合切片分析（按客戶群細分），它揭示哪些特徵對特定群組的重要性發生了偏移，精確定位群組專用退化的根本原因。

Why others wrong: 整體預測漂移遺漏群組層面的問題；延遲監控衡量速度，不是準確率；訓練資料統計顯示歷史分布但不顯示特徵重要性在生產中如何改變。

Trap: 只監控整體指標 — 群組層面的退化可以隱藏在穩定的彙總指標後面（辛普森悖論）。

Mnemonic: 整體OK但群組不好 = 切片監控；特徵歸因 = 為什麼預測改變了

## Q57
Type: single
Difficulty: 2
Tags: monitoring, alerting, slo
Concepts: ml-slo-alerting
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

你需要為 ML 模型端點設定警報。哪組指標應該觸發模型健康（不僅是基礎設施健康）的警報？

A. CPU 使用率、記憶體使用率、磁碟 I/O
B. 預測延遲 P99、錯誤率、預測漂移分數、特徵偏差分數
C. 網路頻寬、連線數
D. 容器重啟次數、Pod 狀態

Answer: B

Hint: 模型健康指標反映預測品質和行為，不只是基礎設施狀態。

Explanation: ML 專用 SLO 應監控預測延遲（使用者體驗）、錯誤率（可靠性）、預測漂移（輸出分布變化）和特徵偏差（訓練-服務不一致）。這些指標偵測基礎設施指標會遺漏的模型層面問題，如模型靜默回傳退化的預測。

Why others wrong: CPU/記憶體/磁碟/網路指標是基礎設施關注，不反映模型品質；容器重啟表示基礎設施問題，不是模型健康。

Trap: 只監控基礎設施 — 模型可以在 CPU 和記憶體看起來完全健康的同時產生垃圾預測。

Mnemonic: 基礎設施健康 = CPU/記憶體/磁碟；模型健康 = 延遲 + 錯誤 + 漂移 + 偏差

## Q58
Type: single
Difficulty: 3
Tags: monitoring, ground-truth, delayed-labels
Concepts: delayed-ground-truth
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

你的流失預測模型預測客戶是否會在未來 30 天內流失。真實值（他們是否確實流失）要到預測後 30 天才可用。在此延遲期間你應該如何監控模型效能？

A. 在監控任何指標前等待 30 天
B. 使用代理指標（減少的應用程式使用、客服工單頻率）作為早期指標，並在 30 天滯後時計算實際準確率
C. 假設如果沒有收到投訴模型就是正確的
D. 只監控預測分布而不評估準確率

Answer: B

Hint: 當真實值延遲時，什麼可以在實際結果已知前作為早期警告信號？

Explanation: 與流失相關的代理指標（使用量下降、客服聯繫增加）提供模型效能的早期信號。同時，使用實際流失資料的 30 天滯後準確率計算以滾動方式驗證模型預測。這種雙層方法同時提供早期警告和最終真實值驗證。

Why others wrong: 等待 30 天意味著問題一個月都不被偵測到；沒有投訴不代表預測正確；只監控預測分布完全遺漏準確率。

Trap: 因為真實值延遲就不監控任何東西 — 代理指標和滯後評估一起提供有用的信號。

Mnemonic: 延遲標籤 → 代理指標做早期警告 + 滯後準確率做真實值

## Q59
Type: single
Difficulty: 2
Tags: responsible-ai, model-cards, documentation
Concepts: model-cards
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

你的組織要求每個部署的 ML 模型都有文件記錄，涵蓋預期用途、限制、公平性評估結果和跨人口群組的效能指標。你應該建立什麼產出物？

A. 模型儲存庫中的 README 檔案
B. 遵循 Google 的 Model Card 框架的模型卡
C. 給利害關係人的模型詳情電子郵件
D. 帶有訓練日誌的 Confluence 頁面

Answer: B

Hint: 哪種標準化文件格式專門為向利害關係人傳達 ML 模型詳情設計？

Explanation: 模型卡是用於記錄 ML 模型的標準化框架（由 Google 首創）。它們包含預期用途、限制、倫理考量、跨人口群組的效能、訓練資料詳情和評估結果。它們作為模型治理和利害關係人溝通的單一真實來源。

Why others wrong: README 檔案缺乏 ML 專用關注的結構；電子郵件是短暫的且非標準化的；Confluence 頁面未針對 ML 文件標準化。

Trap: 以為任何文件格式就足夠 — 模型卡提供確保涵蓋所有關鍵 ML 治理面向的結構化框架。

Mnemonic: 模型卡 = 「ML 模型的營養標籤」— 標準化、全面、面向利害關係人

## Q60
Type: single
Difficulty: 3
Tags: responsible-ai, differential-privacy, training
Concepts: differential-privacy-training
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

你在敏感醫療資料上訓練模型，需要確保個別病患記錄無法從模型中擷取。隱私預算（epsilon）設為 1.0。更低的 epsilon 值代表什麼？

A. 較少隱私保護但更好的模型效用
B. 更強的隱私保護但可能降低模型效用
C. 更快的訓練速度
D. 需要更多訓練資料

Answer: B

Hint: 在差分隱私中，epsilon 是隱私預算 — 越低意味著隱私越緊。

Explanation: 差分隱私中的 Epsilon (ε) 控制隱私-效用的權衡。更低的 epsilon 意味著在訓練期間添加更多噪音到梯度，使擷取個別記錄更困難但可能降低模型準確率。Epsilon 1.0 提供強隱私；接近 0 的值以效用為代價提供更強的保證。

Why others wrong: 更低 epsilon 提供更多隱私，不是更少；epsilon 不直接影響訓練速度；資料需求取決於模型複雜度，不是 epsilon。

Trap: 以為更高 epsilon = 更多隱私 — 正好相反。更高 epsilon = 更少噪音 = 更少隱私。

Mnemonic: Epsilon = 隱私「花費」— 更低 epsilon = 花更少隱私 = 更強保護（但模型更嘈雜）

## Q61
Type: single
Difficulty: 2
Tags: responsible-ai, counterfactual-fairness, bias
Concepts: counterfactual-fairness
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

你的招聘模型可能對某些人口群組有偏見。你想測試改變候選人的人口屬性（同時保持所有其他屬性不變）是否會改變模型的預測。這是哪種公平性分析技術？

A. 差異影響分析
B. 反事實公平性測試
C. 跨群組的校準分析
D. 均等機會分析

Answer: B

Hint: 改變一個屬性同時保持其他不變 = 「如果這個人在不同群組會怎樣？」

Explanation: 反事實公平性測試改變受保護屬性（如性別、種族）同時保持所有其他特徵不變，然後檢查模型的預測是否改變。如果改變了，模型的決定取決於受保護屬性，表示潛在的不公平。

Why others wrong: 差異影響看跨群組的結果率，不是個別反事實；校準檢查每個群組的預測機率是否匹配實際率；均等機會檢查跨群組的真陽性率。

Trap: 混淆差異影響（群組層面統計比較）和反事實公平性（個別層面「如果」分析）。

Mnemonic: 反事實 = 「如果這個人在不同群組會怎樣？」— 改變一件事，檢查預測

## Q62
Type: single
Difficulty: 1
Tags: responsible-ai, vertex-ai, explainability-methods
Concepts: integrated-gradients
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

你想解釋為什麼你的影像分類模型將特定影像分類為「缺陷」。你需要像素級歸因顯示影像哪些部分影響了預測。你應該使用哪個 Vertex AI Explainability 方法？

A. 用於表格資料的 Sampled Shapley
B. 用於影像歸因的 Integrated Gradients
C. 用於區域級歸因的 XRAI（eXplanation with Ranked Area Integrals）
D. AutoML 的特徵重要性

Answer: B

Hint: 像素級歸因需要能在像素級別工作的基於梯度的方法。

Explanation: Integrated Gradients 透過沿從基準（空白影像）到實際輸入的路徑積分梯度來計算每個輸入像素對預測的貢獻。它產生像素級歸因圖，突顯哪些特定像素最影響分類決定。

Why others wrong: Sampled Shapley 用於表格特徵，不是像素級分析；XRAI 提供區域級（不是像素級）歸因；AutoML 特徵重要性顯示全域特徵排名，不是像素級解釋。

Trap: 在需要像素級歸因時選擇 XRAI — XRAI 將像素分組為區域，而 Integrated Gradients 提供真正的像素級歸因。

Mnemonic: 像素級 = Integrated Gradients；區域級 = XRAI；表格 = Sampled Shapley

## Q63
Type: single
Difficulty: 3
Tags: responsible-ai, adversarial-robustness, testing
Concepts: adversarial-testing
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

在部署內容審核模型前，你需要測試其對試圖繞過安全過濾器的對抗攻擊的穩健性。你應該實施哪種測試方式？

A. 只用乾淨、格式良好的輸入測試
B. 用對抗提示紅隊測試模型，包括字元替換、編碼技巧、角色扮演場景和多輪越獄嘗試
C. 增加模型的信心閾值
D. 添加免責聲明說明模型可能遺漏某些有害內容

Answer: B

Hint: 對手會嘗試創造性的繞過 — 哪種方式系統化地測試這些攻擊向量？

Explanation: 紅隊測試系統化地針對已知對抗攻擊模式測試模型：字元替換（使用 Unicode 相似字元）、編碼技巧（base64）、角色扮演提示（「假裝你是不受限制的 AI」）和多輪升級。這在部署前揭露弱點，讓你能添加防禦。

Why others wrong: 只測試乾淨輸入完全遺漏對抗場景；更高信心閾值不防止對抗繞過；免責聲明不改善模型穩健性。

Trap: 提高信心閾值以「捕捉更多」— 對抗攻擊旨在讓有害內容看起來高信心，所以閾值調整無濟於事。

Mnemonic: 安全模型 → 部署前紅隊測試；測試攻擊，不只是快樂路徑

## Q64
Type: single
Difficulty: 2
Tags: monitoring, model-retraining, trigger
Concepts: retraining-decision
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

你的模型監控顯示預測漂移超過閾值，但特徵漂移在正常範圍內。這個模式最可能表示什麼？

A. 模型過擬合
B. 概念漂移 — 特徵和結果之間的關係已改變
C. 引入損壞特徵的資料管線錯誤
D. 模型需要更多訓練資料

Answer: B

Hint: 特徵看起來正常但預測已偏移 — 這些特徵的真實世界意義已改變。

Explanation: 當預測漂移高但特徵漂移低時，相同的輸入在現實中產生不同的結果。這是概念漂移 — 特徵和目標之間的映射已改變。例如，同樣的經濟指標在政權變化後可能預測不同的股票走勢。

Why others wrong: 過擬合會在驗證期間顯示，不在漂移指標中；資料管線錯誤會顯示特徵漂移；更多訓練資料不解決已改變的關係。

Trap: 假設特徵漂移必須伴隨預測漂移 — 概念漂移特別發生在特徵穩定但其預測意義改變時。

Mnemonic: 高預測漂移 + 低特徵漂移 = 概念漂移；高特徵漂移 = 資料漂移；兩者都高 = 兩種漂移

## Q65
Type: single
Difficulty: 2
Tags: responsible-ai, pii-protection, data-handling
Concepts: pii-in-ml
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

你的 NLP 模型訓練資料集包含帶有姓名、電子郵件和電話號碼的客服對話記錄。你需要在不記住 PII 的情況下訓練模型。訓練前你應該應用什麼方式？

A. 正常訓練模型並在服務時從輸出中過濾 PII
B. 使用 Cloud DLP 在訓練前去識別訓練資料中的 PII，並在訓練期間應用差分隱私
C. 手動審查所有對話記錄以移除 PII
D. 使用更小的模型因為它記不住那麼多

Answer: B

Hint: PII 保護需要訓練前（從資料中移除 PII）和訓練期間（防止記憶）的措施。

Explanation: Cloud DLP 自動識別和移除訓練資料中的 PII（姓名、電子郵件、電話號碼）。訓練期間的差分隱私添加噪音以防止模型記住任何剩餘的敏感模式。這種深度防禦方法在大規模下提供穩健的 PII 保護。

Why others wrong: 僅在服務時過濾 PII 意味著模型已經記住了（可透過對抗提示擷取）；手動審查不能擴展；模型大小不能防止記憶（即使小模型也能記憶）。

Trap: 只在服務時過濾 PII — 模型仍包含對抗攻擊可以擷取的記憶化 PII。

Mnemonic: PII 保護 = 訓練前 DLP（移除）+ 訓練期間差分隱私（防止記憶）

## Q66
Type: single
Difficulty: 3
Tags: monitoring, ab-testing, statistical-significance
Concepts: experiment-analysis
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

你正在執行 A/B 測試比較新推薦模型和生產模型。3 天後，新模型顯示點擊率提高 2%，但 p 值是 0.15。你應該怎麼做？

A. 部署新模型因為它顯示改善
B. 繼續測試直到 p 值降到 0.05 以下或樣本量達到預先計算的最小值
C. 停止測試並保留舊模型因為 p > 0.05
D. 將顯著性閾值降低到 0.15

Answer: B

Hint: 統計顯著性需要充足的樣本量 — 當結果不確定時你應該怎麼做？

Explanation: p 值 0.15 意味著結果在傳統 0.05 水準下不具統計顯著性 — 你無法確信排除改善是由於隨機機會。你應該繼續測試直到達到預先計算的所需效果大小和顯著性水準的最小樣本量。

Why others wrong: 在非顯著結果上部署冒假陽性風險；提前停止可能遺漏潛在真實的改善；降低閾值以適應資料是 p-hacking。

Trap: 在結果看起來有希望時提前停止測試 — 這由於多重測試（偷看問題）而膨脹假陽性率。

Mnemonic: p > 0.05 = 繼續測試（如果樣本量未達到）；p < 0.05 + 充足樣本 = 得出結論；永遠不要改變閾值以適應資料

## Q67
Type: single
Difficulty: 2
Tags: scaling, data-labeling, active-learning
Concepts: active-learning
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

你有 100 萬張未標記影像和只標記 10,000 張的預算。你希望標記的集合最大化模型效能。你應該使用哪種資料選擇策略？

A. 隨機抽樣 10,000 張影像
B. 使用主動學習選擇最有資訊量的影像進行標記
C. 按時間順序標記前 10,000 張影像
D. 將影像叢集化並每個叢集標記一張

Answer: B

Hint: 哪種策略迭代選擇最能改善模型的範例？

Explanation: 主動學習使用當前模型識別它最不確定的範例，然後優先將這些範例送去標記。這些高不確定性的範例對改善模型的決策邊界最有資訊量，使每個標記的範例比隨機選擇更有價值。

Why others wrong: 隨機抽樣不優先考慮有資訊量的範例；按時間順序選擇引入時間偏差；每叢集一個提供廣度但不深入困難案例。

Trap: 以為隨機抽樣就足夠 — 主動學習可以用少 3-10 倍的標記範例達到相同效能。

Mnemonic: 有限標記預算 → 主動學習（標記最讓模型困惑的）

## Q68
Type: single
Difficulty: 1
Tags: model-development, cross-validation, evaluation
Concepts: cross-validation-strategy
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

你有 2,000 個樣本用於訓練分類模型，想要可靠的效能估計。資料沒有時間或群組相依性。你應該使用哪種評估策略？

A. 保留 20% 做測試
B. k=5 的分層 k 折交叉驗證
C. 留一法交叉驗證
D. 在所有資料上訓練並報告訓練準確率

Answer: B

Hint: 資料有限時，哪種策略最大化訓練資料使用和評估可靠性？

Explanation: 分層 k 折交叉驗證在 4/5 資料上訓練並在 1/5 上評估，輪流所有折。分層確保每折維持類別分布。這比單一保留分割給出更可靠的效能估計，同時將所有資料用於訓練和評估。

Why others wrong: 單次 80/20 分割對哪些資料在哪個集中很敏感；留一法對 2,000 個樣本計算量太大；訓練準確率不估計泛化能力。

Trap: 小資料使用簡單訓練/測試分割 — 單次分割可能不具代表性，給出誤導性效能估計。

Mnemonic: 小資料 = k 折（使用所有資料）；大資料 = 單次保留就行；不平衡類別永遠分層

## Q69
Type: single
Difficulty: 3
Tags: model-development, multi-task-learning, shared-layers
Concepts: multi-task-architecture
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

你正在建立同時預測客戶流失機率和預期終身價值的模型。這些任務共享一些底層模式（客戶參與）但有不同的輸出格式。哪種架構最合適？

A. 兩個完全獨立的模型
B. 搭配任務專用頭的共享底層多任務模型
C. 帶有一個同時預測兩個值的單一輸出的模型
D. 先預測流失，然後用預測作為另一個 LTV 模型的輸入

Answer: B

Hint: 有共享模式但不同輸出的相關任務 — 哪種架構共享學習同時保持分開的輸出？

Explanation: 共享底層多任務模型使用共同的較低層學習共享表示（客戶參與模式）和每個輸出類型的任務專用上層（頭）。這透過共享學習改善兩個任務，同時尊重它們不同的輸出格式（流失的機率、LTV 的連續值）。

Why others wrong: 獨立模型錯失共享學習機會；單一輸出無法在不同範圍內同時產生機率和連續值；連續預測引入錯誤傳播且不支援共享學習。

Trap: 為相關任務建立獨立模型 — 搭配共享表示的多任務學習通常優於兩個個別模型。

Mnemonic: 相關任務，不同輸出 = 共享底層 + 分開的頭；不相關任務 = 分開模型

## Q70
Type: single
Difficulty: 2
Tags: mlops, vertex-ai-pipelines, conditional
Concepts: conditional-pipeline
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

你的 ML 管線應該只在新模型的驗證準確率超過當前部署模型至少 2% 時才自動部署。否則應跳過部署。你應該如何實施這個邏輯？

A. 在評估後添加手動核准步驟
B. 在 Vertex AI Pipelines 中使用條件元件比較指標並控制部署步驟
C. 總是部署並在效能下降時回滾
D. 設定 Cloud Monitoring 警報觸發部署

Answer: B

Hint: 哪個管線功能允許基於指標比較的分支邏輯？

Explanation: Vertex AI Pipelines 支援條件元件（使用 dsl.Condition 或 kfp.dsl.If）在執行時評估條件。你可以比較新模型的驗證準確率與部署模型的準確率，只在達到改善閾值時才有條件地執行部署步驟。

Why others wrong: 手動核准減慢管線；總是部署冒著服務更差模型的風險；Cloud Monitoring 警報在管線外操作且無法控制管線步驟。

Trap: 總是部署並依賴回滾 — 這在回滾發生前讓使用者暴露在可能更差的模型下。

Mnemonic: 條件部署 = 管線門（部署前比較指標）；永遠不要「部署並祈禱」

## Q71
Type: single
Difficulty: 1
Tags: deployment, model-format, serving
Concepts: model-format-selection
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

你訓練了 PyTorch 模型，需要在 Vertex AI 上部署做線上預測。你應該匯出什麼模型格式？

A. TensorFlow SavedModel 格式
B. PyTorch TorchScript（腳本化或追蹤）或搭配自訂服務容器的模型檔案
C. 用於 Vertex AI AutoML 的 ONNX 格式
D. Pickle 檔案 (.pkl)

Answer: B

Hint: Vertex AI 原生支援 PyTorch — 哪種格式保留 PyTorch 模型邏輯以用於服務？

Explanation: Vertex AI 透過 TorchScript（序列化格式）或搭配自訂服務容器來支援 PyTorch 模型。TorchScript 在部署就緒的格式中捕捉模型架構和權重，而自訂容器給予服務邏輯的完全控制。

Why others wrong: Vertex AI 支援 PyTorch 時不需轉換為 TensorFlow SavedModel；ONNX 不用於 AutoML；pickle 檔案不適合生產且有安全風險。

Trap: 以為需要將 PyTorch 轉換為 TensorFlow 才能用 Vertex AI — Vertex AI 透過預建服務容器原生支援 PyTorch。

Mnemonic: PyTorch 部署 = TorchScript 或自訂容器；TensorFlow 部署 = SavedModel；兩者在 Vertex AI 上原生運作

## Q72
Type: single
Difficulty: 2
Tags: monitoring, model-performance, segmented
Concepts: segmented-monitoring
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

你的整體模型準確率是 92%，但利害關係人報告特定產品類別的效能很差。你應該如何調查？

A. 用更多資料重新訓練模型
B. 設定分段監控追蹤每個產品類別的準確率並識別表現不佳的群組
C. 增加模型的複雜度
D. 立即 A/B 測試新模型

Answer: B

Hint: 第一步是診斷，不是行動 — 哪種方式精確識別哪裡效能差？

Explanation: 分段監控按有意義的維度（產品類別）分解整體指標。這揭示哪些群組表現不佳（例如電子產品準確率可能是 98% 但服飾是 60%），並指導有針對性的改善而非可能不修復特定問題的廣泛重新訓練。

Why others wrong: 不診斷就重新訓練可能不修復群組專用問題；更多複雜度不針對特定群組；不了解根本原因就 A/B 測試太倉促。

Trap: 不先了解哪些群組失敗和原因就跳到重新訓練。

Mnemonic: 整體OK但有投訴 = 分段指標；先診斷再修復

## Q73
Type: single
Difficulty: 2
Tags: scaling, experiment-reproducibility, seed
Concepts: reproducible-training
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

你的團隊無法在 Vertex AI 上的不同執行之間重現訓練結果。相同程式碼、相同資料，但不同的最終指標。最可能造成不可重現性的因素是什麼？

A. 不同的 Vertex AI 區域
B. 非確定性操作（隨機初始化、資料打亂）沒有固定隨機種子
C. 使用不同的 Python 版本
D. 網路延遲變化

Answer: B

Hint: 什麼造成相同程式碼和資料的訓練執行之間的隨機變化？

Explanation: 隨機數生成器控制權重初始化、資料打亂順序、Dropout 遮罩和資料增強。沒有固定種子時，每次執行使用不同的隨機值，產生不同的訓練軌跡和最終指標。為所有隨機數生成器（Python random、NumPy、框架專用）設定種子是主要修復方法。

Why others wrong: 不同區域不影響訓練邏輯；Python 版本差異會造成錯誤，不是指標變化；網路延遲不影響模型訓練計算。

Trap: 只固定一個隨機種子 — 你必須為所有隨機性來源（Python、NumPy、TensorFlow/PyTorch、CUDA）固定種子才能完全重現。

Mnemonic: 每次執行不同結果 = 修復所有隨機種子（Python + NumPy + 框架 + CUDA）

## Q74
Type: single
Difficulty: 3
Tags: model-development, gradient-accumulation, memory
Concepts: gradient-accumulation
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

你需要以有效批次大小 256 訓練，但 GPU 記憶體只能放批次大小 32。你不想添加更多 GPU。哪種技術在單一 GPU 上達到與批次大小 256 相同的訓練動態？

A. 使用混合精度訓練以雙倍批次大小
B. 使用 8 個微批次（每個 32）的梯度累積
C. 使用梯度檢查點以減少記憶體
D. 縮減模型大小直到批次大小 256 能放下

Answer: B

Hint: 哪種技術透過在多次前向-反向傳遞中累積梯度然後再更新來模擬大批次？

Explanation: 梯度累積用批次大小 32 執行 8 次前向-反向傳遞，在不更新權重的情況下累積梯度。在 8 個微批次（8 × 32 = 256）後，它使用累積的梯度執行一次權重更新。這產生數學上與批次大小 256 相同的訓練動態，代價是迭代慢 8 倍。

Why others wrong: 混合精度大約減少 ~2 倍記憶體（能放 64，不是 256）；梯度檢查點減少啟動值記憶體但不減少權重/最佳化器記憶體；縮減模型大小改變架構。

Trap: 以為混合精度單獨解決問題 — 它大約將批次大小容量翻倍（到 ~64），不夠到 256。

Mnemonic: 有效批次大小 = 微批次 × 累積步數；32 × 8 = 256 有效

## Q75
Type: single
Difficulty: 2
Tags: mlops, feature-store, batch-serving
Concepts: feature-store-batch
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

你需要為每晚執行的批次預測任務計算特徵。特徵需要彙總 BigQuery（交易歷史）和 Cloud Storage（使用者行為日誌）的資料。你應該如何設計特徵管線？

A. 在每次批次預測任務期間內聯計算特徵
B. 使用搭配批次攝取管線的 Vertex AI Feature Store，從兩個來源預計算並儲存特徵
C. 在 Cloud Memorystore 中快取特徵
D. 將所有資料匯出為 CSV 並在 pandas 中計算特徵

Answer: B

Hint: 將特徵計算與預測分開，預計算並儲存能重用和確保一致性 — 哪個服務管理這個？

Explanation: 搭配批次攝取的 Vertex AI Feature Store 從多個來源（BigQuery + Cloud Storage）預計算特徵並儲存在受管理的特徵儲存庫中。批次預測任務然後可以快速查找預計算的特徵。這將特徵計算與預測分開，使特徵能跨模型重用並確保一致性。

Why others wrong: 內聯特徵計算很慢且每次任務重複；Cloud Memorystore 用於線上服務，不是批次；CSV/pandas 不能擴展到批次工作負載且破壞特徵治理。

Trap: 在每次批次任務期間內聯計算特徵 — 這浪費運算在重複計算上且跨模型有不一致的風險。

Mnemonic: 批次特徵 = Feature Store 批次攝取（預計算、儲存、重用）；線上特徵 = Feature Store 線上服務

## Q76
Type: single
Difficulty: 1
Tags: deployment, vpc-peering, network
Concepts: private-prediction
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

你的組織要求預測流量永遠不經過公共網路。所有通訊必須留在 Google Cloud 的私有網路中。你應該使用哪種部署配置？

A. 搭配 IP 白名單的公開端點
B. 搭配 VPC 對等連接的 Vertex AI 私有端點
C. 公開端點前面的 Cloud Armor
D. 搭配 API 金鑰驗證的端點

Answer: B

Hint: 哪種 Vertex AI 端點類型讓流量完全在 Google Cloud 的私有網路中？

Explanation: Vertex AI 私有端點使用 VPC 對等連接，讓預測流量完全在 Google Cloud 的私有網路中路由。沒有流量觸及公共網路，符合受監管行業的嚴格網路隔離要求。

Why others wrong: IP 白名單仍讓流量經過公共網路；Cloud Armor 保護公開端點但流量仍經過網際網路；API 金鑰做驗證但不改變網路路徑。

Trap: 以為 IP 白名單 = 私有 — 它限制誰可以連接但流量仍經過公共網路。

Mnemonic: 僅私有網路 = VPC 對等連接私有端點；網際網路 + 存取控制 = 公開端點 + 白名單

## Q77
Type: single
Difficulty: 2
Tags: responsible-ai, watermarking, genai
Concepts: ai-content-watermarking
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

你的組織使用 Gemini 生成行銷內容。監管機構要求 AI 生成的內容可識別。你應該實施什麼技術？

A. 在所有內容上添加可見免責聲明「由 AI 生成」
B. 使用 SynthID 數位浮水印在生成內容中嵌入不可察覺的標記
C. 維護所有生成內容的資料庫以用於手動檢查
D. 將 AI 生成的內容限制為僅內部使用

Answer: B

Hint: 哪個 Google 技術在 AI 生成的內容中嵌入不可見但可偵測的標記？

Explanation: SynthID 是 Google DeepMind 的數位浮水印技術，在 AI 生成的內容（文字、影像、音訊、影片）中嵌入不可察覺的標記。這些標記對人類不可見但可以程式化偵測，能在不影響品質或可用性的情況下識別 AI 生成的內容。

Why others wrong: 可見免責聲明可以被移除；維護資料庫不能擴展且只對你生成的內容有效；限制為內部使用不解決監管要求。

Trap: 僅依賴可見免責聲明 — 內容分享時可以被去除，而 SynthID 浮水印是持久且不可移除的。

Mnemonic: AI 內容識別 = SynthID（不可見、持久的浮水印）；可見免責聲明 = 可移除、不足

## Q78
Type: single
Difficulty: 3
Tags: scaling, data-poisoning, defense
Concepts: data-poisoning-defense
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

你正在使用從使用者提交收集的資料訓練模型。你懷疑某些提交可能是對抗性的資料投毒嘗試。你應該實施哪種防禦策略？

A. 移除所有使用者提交的資料並只使用精選資料集
B. 應用穩健的資料清理：離群值偵測、多個標註者的標籤驗證、以及影響函數分析以識別可疑訓練範例
C. 增加模型大小以更穩健地對抗噪音
D. 訓練更少 epoch 以限制記憶

Answer: B

Hint: 哪種方式系統化地識別和移除惡意訓練範例？

Explanation: 針對資料投毒的多層防禦包括：離群值偵測找統計異常、多個獨立標註者的標籤驗證捕捉標記錯誤的範例、以及影響函數分析識別哪些訓練範例不成比例地影響模型預測。結合這些技術能識別和移除可能被投毒的資料。

Why others wrong: 移除所有使用者資料消除有價值的訓練信號；更大模型實際上更容易記住投毒資料；更少 epoch 減少整體學習，不僅是對投毒範例的記憶。

Trap: 以為更大模型更穩健 — 它們有更多容量記住投毒範例，使它們更脆弱。

Mnemonic: 資料投毒防禦 = 離群值偵測 + 多標註者驗證 + 影響分析（偵測、驗證、分析）

## Q79
Type: single
Difficulty: 2
Tags: model-development, ensemble, methods
Concepts: ensemble-selection
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

你有三個用於分類任務的模型：神經網路、梯度提升樹和邏輯迴歸。每個模型有不同的優勢。你應該如何結合它們以獲得最佳效能？

A. 只使用神經網路因為它最複雜
B. 堆疊 — 在所有三個模型的輸出上訓練元學習器
C. 硬投票 — 讓每個模型投票並使用多數預測
D. 使用個別準確率最高的模型

Answer: B

Hint: 哪種集成方法學習結合多樣模型輸出的最佳方式？

Explanation: 堆疊訓練元學習器（例如邏輯迴歸），以三個模型的預測作為輸入特徵並學習最佳組合權重。它優於簡單投票因為它學會在哪些情況下更信任哪個模型，利用不同模型架構的多樣性。

Why others wrong: 只使用最佳個別模型丟棄有用的多樣性；硬投票平等對待所有模型即使一個在某些區域更好；按最高準確率選擇忽略互補優勢。

Trap: 預設選擇單一最佳模型 — 搭配堆疊的多樣集成模型幾乎總是優於最佳個別模型。

Mnemonic: 多樣模型 + 學習組合 = 堆疊（最佳）；等權組合 = 投票（更簡單但較弱）

## Q80
Type: single
Difficulty: 2
Tags: mlops, model-versioning, ab-test
Concepts: champion-challenger
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

你想用真實流量安全地測試新模型與生產模型。10% 的使用者應該看到新模型的預測。你應該如何在 Vertex AI 上配置？

A. 將兩個模型部署到獨立端點並在應用程式層路由流量
B. 將兩個模型版本部署到同一端點搭配 90/10 流量分割
C. 部署新模型並切換 100% 流量，然後監控
D. 離線執行兩個模型並比較輸出

Answer: B

Hint: 哪個 Vertex AI 功能允許在單一端點上的模型版本之間分割即時流量？

Explanation: Vertex AI Endpoints 支援在多個部署的模型版本之間分割流量。將 90% 設給冠軍和 10% 設給挑戰者在同一端點上，你用真實流量測試新模型而不需應用程式層更改。監控兩個版本的指標能做資料驅動的升級決策。

Why others wrong: 獨立端點需要應用程式層路由邏輯；立即切換 100% 冒著退化風險；離線比較不測試真實服務條件。

Trap: 部署到獨立端點 — 這需要應用程式更改且不提供無縫流量管理。

Mnemonic: 冠軍-挑戰者測試 = 同一端點，流量分割；挑戰者獲勝時升級

## Q81
Type: single
Difficulty: 3
Tags: deployment, model-mesh, scalability
Concepts: multi-endpoint-strategy
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

你管理 200 個服務不同產品推薦類別的 ML 模型。流量模式差異很大 — 有些模型每天收到數百萬請求而有些只收到數百個。你應該如何架構服務基礎設施？

A. 將所有 200 個模型部署在單一大 VM 上
B. 將每個模型部署在自己的專用端點搭配自動擴展
C. 按流量模式分組模型：高流量模型用專用端點，低流量模型用共享多模型端點
D. 將所有模型部署在單一 Vertex AI 端點上

Answer: C

Hint: 不同的流量模式需要不同的擴展策略 — 哪種架構將資源匹配到使用量？

Explanation: 按流量模式分組模型最佳化資源利用率。高流量模型獲得專用端點搭配獨立自動擴展以處理其負載。低流量模型共享搭配 GPU 共享的多模型端點，避免 200 個近乎閒置的專用端點的浪費。這平衡了效能和成本。

Why others wrong: 單一 VM 是單點故障且無法擴展；200 個專用端點為低流量模型浪費資源；單一端點無法有效處理 200 個流量模式差異很大的模型。

Trap: 為了「隔離」將每個模型部署在自己的端點 — 這為低流量模型浪費資源（付費購買大部分閒置的 GPU/CPU）。

Mnemonic: 高流量 = 專用端點；低流量 = 共享端點；將資源匹配到使用模式

## Q82
Type: single
Difficulty: 2
Tags: monitoring, latency, optimization
Concepts: inference-latency-debugging
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

你的模型 P99 推論延遲在過去一週從 50ms 增加到 500ms，但模型準確率沒有變化。你應該先調查什麼？

A. 用更新的資料重新訓練模型
B. 檢查輸入資料大小分布 — 增加的輸入大小（更長的文字、更高解析度的影像）可能造成更長的推論時間
C. 用更簡單的架構取代模型
D. 增加模型複本數量

Answer: B

Hint: 延遲增加但準確率不變表示輸入端的變化，不是模型端的問題。

Explanation: 準確率穩定下 10 倍延遲增加表示模型本身沒有改變 — 是輸入改變了。常見原因包括輸入文字長度增加、更高解析度影像或請求中更大的批次大小。檢查輸入資料分布能揭示服務工作負載是否改變。

Why others wrong: 重新訓練不修復延遲問題；不診斷就取代模型太倉促；更多複本增加並發但不修復每個請求的延遲。

Trap: 增加複本以修復延遲 — 複本處理更多並發請求但每個請求仍需 500ms。

Mnemonic: 延遲上升 + 準確率穩定 = 輸入改變了；延遲上升 + 準確率下降 = 模型退化了；先診斷再修復

## Q83
Type: multi
Difficulty: 3
Tags: responsible-ai, model-governance, lifecycle
Concepts: ml-governance-framework
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

你的組織正在為監管合規實施 ML 治理。哪兩種實踐是 ML 治理框架的必要組成部分？（選擇兩項）

A. 為每個部署模型記錄預期用途、限制和公平性評估的模型卡
B. 只使用開源模型以避免廠商鎖定
C. 搭配高風險模型人工監督的自動模型核准工作流程
D. 部署所有模型而不審查以維持開發速度

Answer: A, C

Hint: ML 治理需要文件記錄（透明度）和流程控制（問責）。

Explanation: 模型卡提供關於模型能力、限制和公平性考量的透明度。搭配人工監督的自動核准工作流程確保高風險模型在部署前經過適當審查，在治理和開發速度之間取得平衡。結合兩者建立可問責、可稽核的 ML 系統。

Why others wrong: 開源 vs 專有是技術選擇，不是治理要求；不審查就部署是治理的反面。

Trap: 以為治理代表減慢一切 — 搭配基於風險人工監督的自動工作流程為低風險模型維持速度同時確保高風險模型的審查。

Mnemonic: ML 治理 = 透明度（模型卡）+ 問責（核准工作流程）+ 監督（高風險人工審查）

## Q84
Type: single
Difficulty: 2
Tags: model-development, learning-rate, scheduler
Concepts: learning-rate-scheduling
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

你正在微調預訓練模型，注意到訓練期間損失劇烈振盪。你應該應用哪種學習率策略？

A. 增加學習率以更快收斂
B. 使用暖身排程後接餘弦衰減
C. 全程保持恆定高學習率
D. 將批次大小翻倍

Answer: B

Hint: 振盪損失 = 學習率太高 — 哪種排程從低開始並逐漸變化？

Explanation: 暖身排程從非常低的學習率開始並逐漸增加，讓模型在全速訓練前穩定。餘弦衰減然後平滑降低學習率，防止訓練後期的振盪。這個組合是微調預訓練模型的標準做法。

Why others wrong: 更高學習率加劇振盪；恆定高學習率造成振盪；批次大小翻倍是不同的最佳化軸。

Trap: 損失振盪時增加學習率 — 振盪通常意味著學習率已經太高。

Mnemonic: 損失振盪 = LR 太高 → 暖身 + 餘弦衰減；損失停滯 = LR 太低 → 增加或添加暖身

## Q85
Type: single
Difficulty: 3
Tags: model-development, positional-encoding, context
Concepts: position-encoding-types
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

你正在建立需要處理比訓練時更長的輸入序列（外推到更長上下文）的自訂 transformer 模型。哪種位置編碼方法提供最佳的長度泛化？

A. 絕對正弦位置編碼
B. 學習的絕對位置嵌入
C. 旋轉位置嵌入（RoPE）
D. 不使用位置編碼

Answer: C

Hint: 哪種編碼方法表示相對位置且能外推到超過訓練長度？

Explanation: 旋轉位置嵌入（RoPE）透過旋轉查詢和鍵向量來編碼位置，自然地表示 token 之間的相對位置。這種相對方法比訓練期間見過的序列更好地泛化，因為旋轉機制在任何位置都有效。絕對編碼（正弦或學習的）在未見過的位置會崩潰。

Why others wrong: 絕對正弦編碼在超過訓練長度的位置失敗；學習的嵌入在未見過的位置沒有值；不使用編碼失去所有位置資訊。

Trap: 因為「它是數學的」而選擇正弦編碼 — 正弦編碼是絕對位置，不能泛化到更長序列。

Mnemonic: 長度泛化 = RoPE（相對、旋轉）；固定長度 = 絕對編碼就行

## Q86
Type: single
Difficulty: 1
Tags: mlops, environment, reproducibility
Concepts: environment-management
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

你的訓練管線因為程式庫版本差異，不同團隊成員執行時產生不同結果。你應該如何標準化執行環境？

A. 在 README 中記錄所需版本
B. 使用 Docker 容器搭配在 requirements 檔中固定的相依版本
C. 要求所有團隊成員使用相同型號的筆電
D. 在 Google Colab 中執行所有訓練

Answer: B

Hint: 哪種方式鎖定包含作業系統、Python 和程式庫版本的整個執行環境？

Explanation: Docker 容器封裝完整的執行環境：作業系統、Python 版本、程式庫和配置。搭配固定的相依性（requirements.txt 中的精確版本號），每次執行使用相同的軟體，不管是誰在哪台機器上執行。這是可重現 ML 管線的基礎。

Why others wrong: README 文件依賴人類正確遵循指示；相同型號筆電不控制軟體版本；Colab 環境隨 Google 更新而改變。

Trap: 在 requirements 中使用「latest」版本 — 這造成確切的可重現性問題。永遠固定精確版本。

Mnemonic: 可重現環境 = Docker + 固定版本；「在我的機器上可以」= 你需要 Docker

## Q87
Type: single
Difficulty: 2
Tags: deployment, streaming-prediction, dataflow
Concepts: streaming-inference
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

你需要即時評分來自數千台裝置的 IoT 感測器讀數。每個讀數在預測前需要從查找表進行特徵豐富。哪種架構最小化端對端延遲？

A. 每分鐘批次收集讀數並發送到 Vertex AI 批次預測任務
B. 使用 Dataflow 串流管線：從 Pub/Sub 攝取 → 豐富特徵 → 呼叫 Vertex AI 線上端點 → 將結果寫入 BigQuery
C. 將讀數儲存在 BigQuery 中每小時執行預測
D. 在每個 IoT 裝置上本地處理

Answer: B

Hint: 即時 IoT 處理 = 串流管線 — 哪個 Google Cloud 服務提供這個？

Explanation: Dataflow 串流管線即時從 Pub/Sub 攝取讀數、用特徵查找（從 Bigtable 或 Memorystore）豐富它們、呼叫 Vertex AI 端點做預測、並寫入結果供下游消費。這為串流 IoT 資料提供低延遲的端對端處理。

Why others wrong: 批次收集增加最多 1 分鐘的延遲；每小時 BigQuery 處理延遲太多；IoT 裝置通常缺乏模型推論的運算能力。

Trap: 對即時 IoT 使用批次處理 — 即使 1 分鐘的批次對時間敏感的 IoT 應用程式也可能太慢。

Mnemonic: 串流 IoT = Pub/Sub → Dataflow → Vertex AI 端點 → 結果儲存

## Q88
Type: single
Difficulty: 3
Tags: model-development, mixture-of-experts, architecture
Concepts: moe-architecture
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

你正在設計需要以高品質處理多樣輸入類型（技術文件、休閒聊天、程式碼）但推論運算預算有限的模型架構。哪種架構提供最佳的品質/FLOP 比？

A. 每個輸入所有參數都啟動的單一密集 transformer
B. 將每個輸入路由到相關專家子網路的混合專家（MoE）模型
C. 搭配更多訓練資料的較小密集模型
D. 搭配路由器的多個專門模型

Answer: B

Hint: 哪種架構每個輸入只啟動一部分參數同時維持總模型容量？

Explanation: MoE 模型使用門控網路將每個輸入路由到一小部分專門的專家子網路。這提供非常大模型的容量（總參數）但推論成本僅為小得多的模型（每個輸入只有啟動參數）。不同的專家自然地為不同輸入類型專門化。

Why others wrong: 密集 transformer 為每個輸入啟動所有參數，浪費運算在不相關的容量上；較小密集模型整體容量較少；多個獨立模型需要外部管理路由基礎設施。

Trap: 混淆 MoE 的總參數數量和其推論成本 — 一個 1000 億參數的 MoE 每個輸入可能只啟動 100 億。

Mnemonic: 多樣輸入 + 運算預算 = MoE（路由到專家，只啟動需要的）

## Q89
Type: single
Difficulty: 2
Tags: mlops, cost-management, vertex-ai
Concepts: training-cost-optimization
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

你在 Vertex AI 上的每週模型重新訓練任務使用隨選 NVIDIA A100 GPU 每次花費 5,000 美元。任務可以容忍中斷並從檢查點重新啟動。你如何降低約 60-70% 的訓練成本？

A. 切換到較小的 GPU 類型
B. 使用搭配搶佔式 VM 和基於檢查點恢復的 Vertex AI 訓練
C. 將訓練資料集大小減少 70%
D. 更少訓練頻率（每月取代每週）

Answer: B

Hint: 哪種 VM 定價選項為可中斷工作負載提供 60-70% 折扣？

Explanation: Google Cloud 上的搶佔式 VM 比隨選定價便宜 60-91%。由於訓練任務可以容忍中斷並從檢查點恢復，使用搶佔式 VM 搭配定期檢查點以相當小的成本提供相同的訓練結果。Vertex AI 自訂訓練支援搶佔式 VM 配置。

Why others wrong: 較小 GPU 可能增加訓練時間，抵消節省；減少資料大小損害模型品質；每月訓練意味著模型幾週都是過時的。

Trap: 因為中斷風險而避免搶佔式 VM — 搭配基於檢查點恢復，中斷只造成輕微延遲，不是資料損失。

Mnemonic: 容錯訓練 + 檢查點 = 搶佔式 VM（60-70% 節省）；時間關鍵 = 隨選

## Q90
Type: single
Difficulty: 1
Tags: deployment, health-check, endpoint
Concepts: endpoint-health
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

你的 Vertex AI 端點在高流量期間間歇性回傳 HTTP 503 錯誤。最可能的原因是什麼？

A. 模型檔案損壞
B. 所有複本都在滿載且新請求被拒絕 — 自動擴展需要調整
C. 模型的預測邏輯有錯誤
D. 端點的 IAM 權限配置錯誤

Answer: B

Hint: HTTP 503 = Service Unavailable — 這對服務端點意味著什麼？

Explanation: 高流量期間的 HTTP 503 表示所有服務複本都在滿載且無法接受額外請求。這通常意味著自動擴展沒有為流量高峰提供足夠的複本，或自動擴展配置不夠積極（最小複本太低、擴展太慢）。

Why others wrong: 損壞的模型會持續失敗，不是間歇性；預測錯誤會回傳 500 錯誤，不是 503；IAM 問題會回傳 403 Forbidden。

Trap: 混淆 503（容量）和 500（伺服器錯誤）— 503 特別表示服務暫時超載，不是壞掉。

Mnemonic: 503 = 超載（擴展上去）；500 = 壞掉（修復程式碼）；403 = 禁止（修復 IAM）；404 = 找不到

## Q91
Type: single
Difficulty: 3
Tags: model-development, catastrophic-forgetting, continual
Concepts: catastrophic-forgetting
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

你在領域專用資料上微調了預訓練模型。模型現在在領域任務上表現很好但在之前能處理的一般任務上顯著退化。這是什麼現象以及你應該如何解決？

A. 欠擬合 — 增加學習率以更好學習
B. 災難性遺忘 — 使用彈性權重鞏固（EWC）或在微調資料集中混入一般資料
C. 過擬合 — 添加更多 Dropout
D. 梯度消失 — 使用殘差連接

Answer: B

Hint: 當模型在學習新東西後忘記之前知道的 — 這叫什麼？

Explanation: 災難性遺忘發生在微調覆寫了預訓練模型對一般任務的知識時。彈性權重鞏固（EWC）懲罰對之前任務重要的權重的更改，保留一般知識同時學習新任務。或者，在微調中混入小比例的一般領域資料能維持兩個領域的效能。

Why others wrong: 不是欠擬合（模型在新領域表現很好）；Dropout 解決過擬合，不是遺忘；梯度消失造成訓練失敗，不是選擇性遺忘。

Trap: 增加學習率以「同時學習兩者」— 這實際上加劇災難性遺忘，對預訓練權重做更大更改。

Mnemonic: 微調 → 忘了舊的 = 災難性遺忘；修復 = EWC（保護重要權重）或混入舊資料

## Q92
Type: single
Difficulty: 2
Tags: mlops, data-pipeline, quality
Concepts: data-quality-monitoring
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

你的 ML 管線從外部 API 攝取資料，該 API 偶爾在不通知的情況下更改回應模式（新欄位、重新命名欄位、更改類型）。你應該如何保護管線？

A. 寬容地解析 API 回應並忽略模式更改
B. 使用契約（例如 Pydantic model 或 protobuf）實施模式驗證層，在意外更改時快速失敗
C. 每週檢查 API 文件更新
D. 記錄所有 API 回應以供後續分析

Answer: B

Hint: 哪種方式在資料損壞管線前立即偵測模式更改？

Explanation: 模式驗證層（使用 Pydantic、protobuf 或類似工具）將預期的 API 回應結構定義為契約。當 API 更改其模式時，驗證立即失敗並提供明確的錯誤訊息，防止損壞的資料進入管線。這是「快速失敗」的方式，在攝取時而非訓練時捕捉問題。

Why others wrong: 寬容解析靜默引入資料品質問題；手動文件檢查不可靠；不做驗證的記錄不能防止損壞。

Trap: 對 API 解析「靈活」— 這讓模式更改靜默損壞你的訓練資料，在幾週後造成神祕的模型退化。

Mnemonic: 外部資料 = 進入時驗證（快速失敗）；內部資料 = 信任但監控（定期驗證）

## Q93
Type: single
Difficulty: 2
Tags: deployment, grpc-rest, serving-protocol
Concepts: serving-protocol-selection
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

你的模型服務端點需要同時處理來自行動應用程式的低延遲單一預測和來自內部服務的高吞吐量批次預測。哪種服務配置為兩種使用案例最小化延遲？

A. 全部使用 REST API
B. 內部批次服務使用 gRPC（更低開銷、串流支援），行動應用程式使用 REST（更廣泛相容性）
C. 兩者都使用 WebSocket 連接
D. GraphQL API 做靈活查詢

Answer: B

Hint: 不同客戶端有不同的協定需求 — 哪種組合對兩者都最佳化？

Explanation: gRPC 提供更低的開銷、多工和串流支援，非常適合內部批次服務的高吞吐量需求。REST 被行動框架普遍支援並為單一預測請求提供簡單性。Vertex AI 端點同時支援兩種協定。

Why others wrong: 全部使用 REST 為高吞吐量批次呼叫增加不必要的開銷；WebSockets 用於長期連接，不是請求-回應模式；GraphQL 增加複雜性而沒有服務專用好處。

Trap: 因為更簡單就全部使用 REST — gRPC 的二進位協定和串流可以將批次預測延遲降低 50% 以上。

Mnemonic: 內部高吞吐量 = gRPC（二進位、快速）；外部行動/網頁 = REST（通用）；兩者在同一端點

## Q94
Type: single
Difficulty: 3
Tags: model-development, tokenizer-training, custom
Concepts: custom-tokenizer
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

你正在為專業醫學領域適配 LLM。模型的預設 tokenizer 將醫學術語如「electroencephalography」分割成很多子詞，減少有效上下文視窗。你應該怎麼做？

A. 增加模型的最大上下文長度
B. 用領域專用 token 擴展 tokenizer 詞彙表並重新訓練新 token 的嵌入層
C. 在訓練資料中用縮寫取代所有醫學術語
D. 使用字元級 tokenization 以獲得更好覆蓋

Answer: B

Hint: 當 tokenizer 無法有效處理領域詞彙時，哪個元件需要更新？

Explanation: 用頻繁的領域專用術語（完整醫學術語）擴展 tokenizer 詞彙表減少了代表專業文字所需的 token 數，有效增加可用上下文。然後重新訓練嵌入層以學習新 token 的表示，同時保持現有 token 嵌入凍結。

Why others wrong: 增加上下文長度不修復低效的 tokenization；縮寫失去資訊且需要前處理；字元級 tokenization 大幅增加所有文字的序列長度。

Trap: 只增加上下文長度以放入更多 token — 這不修復根本原因（低效 tokenization 在每個醫學術語上浪費 token）。

Mnemonic: 領域文字 = 每個術語很多子詞 → 添加領域 token 到詞彙表 + 重新訓練嵌入

## Q95
Type: single
Difficulty: 1
Tags: monitoring, data-pipeline, freshness
Concepts: data-freshness-monitoring
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

你的模型依賴每日更新的資料管線中的特徵。某天早上管線靜默失敗，模型開始基於過時（3 天前）的資料服務預測。你應該如何防止這個？

A. 不管資料新鮮度每天重新訓練模型
B. 監控特徵新鮮度（自上次更新以來的時間）並在特徵超過過時閾值時警報
C. 為了冗餘將管線排程為每天三次
D. 快取最近的特徵並無限期服務

Answer: B

Hint: 哪種監控方式在過時資料影響預測前偵測到？

Explanation: 特徵新鮮度監控追蹤每個特徵最後一次更新的時間，並在過時超過配置的閾值（例如每日特徵 >24 小時）時警報。這在過時資料退化預測前捕捉到靜默管線失敗，能快速補救。

Why others wrong: 如果資料本身過時，每日重新訓練無濟於事；如果底層資料來源有問題，更頻繁執行管線仍產生過時資料；無限期快取正是造成過時資料問題的反模式。

Trap: 不監控就更頻繁執行管線 — 如果資料來源當掉，更頻繁執行管線仍產生過時資料。

Mnemonic: 特徵新鮮度監控 = 「資料真的是新鮮的嗎？」警報；管線排程 = 「管線有執行嗎？」（不同問題）

## Q96
Type: single
Difficulty: 2
Tags: scaling, labeling, vertex-ai
Concepts: vertex-ai-labeling
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

你需要為自訂分類模型標記 50,000 張影像。你有領域專家但想確保標記品質並追蹤標註者間一致性。你應該使用哪個服務？

A. 請領域專家在共享試算表中標記影像
B. 使用搭配每張影像多個標註者和一致性指標的 Vertex AI Data Labeling Service
C. 使用 Gemini 提示自動標記所有影像
D. 為了一致性僱用單一標註者

Answer: B

Hint: 哪個受管理服務提供搭配內建品質指標的多標註者標記？

Explanation: Vertex AI Data Labeling Service 提供搭配多個標註者每個任務、自動標註者間一致性計算和品質指標的受管理標記工作流程。它支援自訂標記說明、專家池和基於共識的標記解決。

Why others wrong: 試算表不能擴展且缺少一致性指標；用 Gemini 自動標記可能引入系統性偏差；單一標註者造成瓶頸且沒有品質交叉檢查。

Trap: 為了「一致性」依賴單一標記者 — 單一標註者一致性實際上是系統性偏差的來源。多個標註者搭配一致性指標產生更高品質的標記。

Mnemonic: 品質標記 = 多個標註者 + 一致性指標；快速標記 = 自動標記（然後驗證樣本）

## Q97
Type: single
Difficulty: 2
Tags: mlops, ab-testing, implementation
Concepts: online-ab-testing
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

你想衡量新推薦模型與生產模型相比的商業影響。使用者必須有一致的體驗（測試期間總是看到同一個模型）。你應該如何實施這個 A/B 測試？

A. 將每個請求隨機分配到一個模型版本
B. 使用使用者 ID 的一致性雜湊分配使用者到處理群組，確保每個使用者總是看到同一個模型
C. 每小時在模型之間交替
D. 只向內部使用者展示新模型

Answer: B

Hint: A/B 測試中一致的使用者體驗需要黏性分配 — 哪種方法達到這個？

Explanation: 使用者 ID 的一致性雜湊確定性地將每個使用者分配到處理群組。這確保同一使用者在整個實驗中總是看到同一個模型版本，防止混合體驗的污染並能準確衡量使用者級別的指標比較。

Why others wrong: 每請求隨機分配給使用者不一致的體驗（在模型之間切換）；每小時交替引入一天中時段的混淆因子；僅內部測試不代表真實使用者行為。

Trap: 每請求隨機分配 — 如果使用者在連續訪問中看到不同模型，你無法衡量使用者級別的影響。

Mnemonic: A/B 測試 = 黏性使用者分配（使用者 ID 的一致性雜湊）；每請求隨機 = 不一致體驗

## Q98
Type: single
Difficulty: 3
Tags: model-development, speculative-decoding, inference
Concepts: speculative-decoding
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

你想加速大型語言模型的自迴歸推論而不降低輸出品質。模型一次生成一個 token，造成延遲瓶頸。哪種技術能在維持相同輸出的同時加速生成？

A. 增加束搜尋寬度以獲得更多平行候選
B. 使用推測解碼 — 小型草稿模型提出多個 token，大模型平行驗證
C. 減少模型的詞彙表大小
D. 以隨機順序而非從左到右生成 token

Answer: B

Hint: 哪種技術使用快速草稿模型「推測」前方，然後用完整模型批次驗證？

Explanation: 推測解碼使用小型、快速的草稿模型預先生成多個候選 token。大型目標模型然後在單次前向傳遞中驗證所有候選（批次驗證），接受正確 token 並拒絕不正確的。這產生與標準自迴歸解碼相同的輸出但有 2-3 倍加速，透過將連續驗證轉為平行。

Why others wrong: 更寬的束搜尋不加速每個 token 的生成；減少詞彙表改變模型；隨機順序生成破壞自迴歸依賴。

Trap: 以為推測解碼改變輸出 — 驗證步驟確保輸出與大模型單獨生成的完全相同。

Mnemonic: 推測解碼 = 「快速草稿 + 大驗證」— 小模型預先猜測，大模型批次檢查

## Q99
Type: single
Difficulty: 2
Tags: deployment, model-warm-up, latency
Concepts: model-warmup
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

部署新模型版本後，前幾個預測請求的延遲比後續請求高 10 倍。造成這個的原因是什麼以及你應該如何修復？

A. 模型檔案需要重新下載 — 使用更快的儲存後端
B. 模型載入和 JIT 編譯造成的冷啟動延遲 — 配置搭配代表性請求的模型暖機
C. 網路壅塞 — 增加頻寬
D. 模型太大 — 壓縮它

Answer: B

Hint: 第一批請求慢、後續快 = 模型準備好接收生產流量前需要什麼？

Explanation: 冷啟動發生在模型首次載入時：權重載入記憶體、計算圖被編譯、以及任何延遲初始化發生。配置模型暖機在啟動時發送代表性預測請求，確保模型在接收真實流量前完全初始化。

Why others wrong: 模型檔案在部署時已經下載；網路壅塞會影響所有請求；模型壓縮不解決冷啟動。

Trap: 因為「只發生一次」而忽略冷啟動 — 在自動擴展情境中，每個新複本都有冷啟動，可能影響很多使用者。

Mnemonic: 第一個請求慢 = 冷啟動 → 模型暖機請求修復它；在自動擴展中影響每個新複本

## Q100
Type: single
Difficulty: 2
Tags: responsible-ai, bias-mitigation, preprocessing
Concepts: bias-mitigation-strategies
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

你的分類模型對少數人口群組顯示顯著較低的準確率。調查後你發現訓練資料中少數群組的範例少 10 倍。哪種方式最直接解決這個資料不平衡？

A. 從模型輸入中移除人口特徵
B. 過取樣少數群組和/或使用類別權重以確保訓練期間的平等代表性
C. 為少數群組降低分類閾值
D. 報告偏見並停止使用模型

Answer: B

Hint: 當訓練資料低代表某群組時，模型對該群組學習不足 — 哪種修復直接解決資料不平衡？

Explanation: 過取樣少數群組增加他們在訓練批次中的代表性，確保模型看到足夠範例來學習這些群組的模式。類別權重透過增加少數群組錯誤的損失懲罰達到類似效果。兩種技術都直接解決根本原因：來自低代表群組的學習信號不足。

Why others wrong: 移除人口特徵不修復學習不平衡（模型仍看到較少的少數範例）；閾值調整治療症狀不治原因；模型使用問題可修復時停止使用太極端。

Trap: 移除人口特徵以「移除偏見」— 模型仍能從相關特徵（代理歧視）學到偏見模式。直接解決資料不平衡。

Mnemonic: 資料不平衡 → 過取樣/重新加權（修復訓練）；閾值偏見 → 調整閾值（修復部署）；兩者都有 → 同時解決資料和部署

## Q101
Type: single
Difficulty: 3
Tags: scaling, transfer-learning, domain-adaptation
Concepts: domain-adaptation
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

你有一個在自然照片上表現很好但在衛星影像上表現差的預訓練影像分類模型。你只有 200 張標記的衛星影像。哪種遷移學習策略最大化在衛星影像上的效能？

A. 在 200 張衛星影像上從頭訓練新模型
B. 凍結所有預訓練層並只訓練新的分類頭
C. 凍結早期層（邊緣/紋理偵測器），微調後期層（高層特徵），並訓練新的分類頭
D. 以高學習率微調所有層

Answer: C

Hint: 早期 CNN 層學習通用特徵（邊緣、紋理）而後期層學習領域專用特徵 — 哪些層需要適配？

Explanation: CNN 的早期層學習跨領域通用的特徵（邊緣、紋理、形狀），能很好地遷移。後期層學習需要適配的領域專用特徵（物件、組成）。只有 200 個範例時，凍結早期層防止在低層特徵上過擬合，同時微調後期層讓模型適配衛星影像特性。

Why others wrong: 在 200 張影像上從頭訓練會嚴重過擬合；凍結所有層限制了適配；以高 LR 微調所有層會覆寫有用的預訓練特徵。

Trap: 凍結所有預訓練層 — 這提供一些遷移但不讓模型的理解適配衛星影像的不同視覺特性。

Mnemonic: 少量資料的遷移學習：凍結早期（通用）→ 微調後期（領域專用）→ 訓練頭（任務專用）

## Q102
Type: single
Difficulty: 2
Tags: model-development, beam-search, decoding
Concepts: decoding-strategies
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

你正在為需要事實準確性和確定性輸出的法律文件生成任務部署 LLM。哪種解碼策略最合適？

A. 搭配 k=50 的 top-k 取樣以獲得創意輸出
B. 溫度取樣搭配 T=1.0
C. 貪婪解碼或搭配低溫度的束搜尋以獲得確定性、高品質輸出
D. 搭配 p=0.9 的 nucleus 取樣（top-p）

Answer: C

Hint: 事實準確性和確定性需要最小化隨機性 — 哪種解碼策略做到這個？

Explanation: 貪婪解碼總是選擇最可能的 token，產生確定性輸出。束搜尋探索多條路徑並選擇最高機率序列。兩者都最小化隨機性，這對事實準確性和可重現性比創意更重要的法律文件至關重要。

Why others wrong: Top-k 和 nucleus 取樣引入隨機性；temperature=1.0 維持完整分布隨機性；所有取樣策略犧牲確定性換取多樣性。

Trap: 對事實任務使用溫度取樣 — 任何 > 0 的溫度引入隨機性，可能每次產生不同（可能錯誤）的輸出。

Mnemonic: 事實/法律 → 貪婪/束搜尋（確定性）；創意 → 取樣（溫度/top-k/top-p）

## Q103
Type: single
Difficulty: 1
Tags: mlops, version-control, notebooks
Concepts: notebook-versioning
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

你的資料科學團隊在 Jupyter notebook 中開發模型。他們在版本控制方面有困難，因為 notebook 檔案包含輸出格（影像、表格、大量資料）造成混亂的差異比較。你應該如何管理 notebook 版本控制？

A. 每次提交前手動清除所有輸出
B. 使用預提交 hook（例如 nbstripout）在提交前自動清除輸出，只將程式碼和 markdown 格保留在版本控制中
C. 將 notebook 存在 Google Drive 而非 Git
D. 將所有 notebook 轉換為 Python 腳本

Answer: B

Hint: 哪種方式自動化清理而不依賴人類記住？

Explanation: nbstripout 作為預提交 hook 在 notebook 進入版本控制前自動移除輸出、執行計數和中繼資料。這產生只顯示程式碼更改的乾淨差異，而開發者在本地工作副本中保留輸出用於本地開發。

Why others wrong: 手動清除容易出錯（人會忘記）；Google Drive 沒有差異/合併能力；轉換為腳本失去 notebook 的敘事/視覺化優勢。

Trap: 手動清除輸出 — 有人不可避免地會忘記，提交一個 50MB 帶有嵌入影像的 notebook。

Mnemonic: Git 中的 Notebook = nbstripout hook（自動清理）；輸出留在本地，只有程式碼進入 Git

## Q104
Type: single
Difficulty: 3
Tags: deployment, serving-optimization, batching
Concepts: dynamic-batching
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

你的模型服務端點收到許多小的個別預測請求。GPU 使用率只有 10% 因為每個請求不能充分利用 GPU 的平行處理能力。你如何在不增加延遲的情況下提高 GPU 使用率？

A. 切換到 CPU 服務因為 GPU 使用率不足
B. 啟用動態批次 — 伺服器收集多個傳入請求並作為一個批次處理，只添加最小延遲
C. 增加模型大小以使用更多 GPU
D. 減少 GPU 複本數量

Answer: B

Hint: GPU 擅長平行計算 — 哪種服務功能將個別請求分組以平行處理？

Explanation: 動態批次在短時間視窗（通常 5-50ms）內收集個別預測請求並將它們分組為一個批次以 GPU 處理。這透過平行處理多個請求大幅提高 GPU 使用率，每個請求只經歷小的批次延遲。Triton Inference Server 和 TensorFlow Serving 都支援此功能。

Why others wrong: 切換到 CPU 失去 GPU 的平行處理優勢；增加模型大小不改善現有容量的使用率；更少複本不改善每個請求的 GPU 使用。

Trap: 因為 GPU 被「浪費」而切換到 CPU — 修復方式是正確使用 GPU（批次），不是降級硬體。

Mnemonic: 低 GPU 使用率 + 許多小請求 = 動態批次；收集 → 批次 → 平行處理

## Q105
Type: single
Difficulty: 2
Tags: model-development, label-smoothing, regularization
Concepts: label-smoothing
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

你的分類模型在微調後達到 99% 訓練準確率但只有 85% 驗證準確率。你想要一種防止模型對預測過度自信的正則化技術。哪種技術專門解決過度自信？

A. 模型權重的 L2 正則化
B. 標籤平滑 — 將硬 one-hot 目標替換為軟目標（例如正確類別 0.9，其他分布 0.1）
C. 在最佳驗證 epoch 提前停止
D. 降低學習率

Answer: B

Hint: 過度自信意味著模型輸出的機率太接近 0 或 1 — 哪種技術軟化目標？

Explanation: 標籤平滑將硬目標（0 和 1）替換為軟目標（例如 0.9 和 0.033）。這防止模型將 logit 推到極端值以匹配硬目標，產生更好校準的機率並作為減少過擬合的正則化器。

Why others wrong: L2 正則化約束權重但不直接解決輸出信心；提前停止一般幫助過擬合但不修復校準；更低學習率減慢訓練但不正則化。

Trap: 選擇 L2 正則化 — 它減少權重幅度但不專門解決過度自信的預測。標籤平滑直接針對信心校準問題。

Mnemonic: 模型太自信（對一切 99% 確定）→ 標籤平滑（軟化目標防止極端輸出）

## Q106
Type: single
Difficulty: 2
Tags: monitoring, model-staleness, retraining
Concepts: model-age-monitoring
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

你的組織有 50 個部署模型，每個在不同時間訓練。有些模型超過一年沒有重新訓練。你應該如何追蹤和優先排序哪些模型需要重新訓練？

A. 不管效能如何每月重新訓練所有模型
B. 追蹤模型年齡、效能漂移指標和每個模型的商業影響 — 優先重新訓練有顯著漂移的高影響模型
C. 只在使用者投訴預測時重新訓練
D. 用基礎模型 API 呼叫取代所有模型

Answer: B

Hint: 哪種方式結合監控信號做資料驅動的重新訓練決策？

Explanation: 追蹤模型年齡（自上次訓練以來的時間）、效能漂移（預測品質退化）和商業影響（營收或使用者影響）建立了優先的重新訓練佇列。有顯著漂移的高影響模型先重新訓練，而穩定的低影響模型可以等待 — 有效分配有限的 ML 工程資源。

Why others wrong: 每月重新訓練在穩定模型上浪費資源；等投訴是被動的且遺漏漸進退化；用 API 呼叫取代一切不總是可行或經濟實惠。

Trap: 按固定排程重新訓練所有模型 — 有些模型穩定多年而有些每週漂移。資料驅動的優先排序更有效。

Mnemonic: 重新訓練優先順序 = 漂移 × 影響 × 年齡；先修復高漂移高影響的

## Q107
Type: single
Difficulty: 3
Tags: model-development, kv-cache, optimization
Concepts: kv-cache-optimization
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

你的 LLM 服務端點在處理多個並發長上下文請求時耗盡 GPU 記憶體。每個請求分配的 KV cache 隨序列長度線性增長。哪種技術在維持輸出品質的同時減少 KV cache 記憶體？

A. 減少模型的注意力頭數
B. 使用分組查詢注意力（GQA）在多個查詢頭之間共享 KV 頭，減少 KV cache 大小
C. 完全停用 KV cache
D. 將所有請求限制在 512 token

Answer: B

Hint: 哪種注意力變體減少儲存在 cache 中的唯一 KV 對數量？

Explanation: 分組查詢注意力（GQA）在多個查詢頭之間共享鍵值頭，按分組因子減少 KV cache 大小，同時維持多頭注意力的大部分品質。例如，32 個查詢頭共享 8 個 KV 頭將 KV cache 減少 4 倍，使更多並發長上下文請求成為可能。

Why others wrong: 減少注意力頭改變模型架構；停用 KV cache 迫使在每步重新計算所有先前 token（極慢）；限制到 512 token 阻止長上下文使用。

Trap: 停用 KV cache 以節省記憶體 — 這使推論以二次方變慢，因為每個 token 必須重新計算對所有先前 token 的注意力。

Mnemonic: KV cache 太大 → GQA（共享 KV 頭，保持品質）；MHA → GQA → MQA = 更多共享 = 更少 cache

## Q108
Type: single
Difficulty: 2
Tags: mlops, cicd, model-testing
Concepts: ml-cicd-pipeline
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

你正在為 ML 模型建立 CI/CD 管線。在模型能部署到生產前，哪些測試應自動執行？

A. 只有預測函數的單元測試
B. 單元測試（預測函數）、整合測試（資料管線 + 模型）、模型品質測試（保留集上準確率 > 閾值），以及公平性測試（跨人口群組的效能）
C. 只有測試集上的模型準確率
D. 資料科學團隊的手動測試

Answer: B

Hint: ML CI/CD 應該測試程式碼正確性、整合、模型品質和公平性 — 哪個選項涵蓋所有層次？

Explanation: 全面的 ML CI/CD 管線包括：驗證預測函數邏輯的單元測試、確保資料管線和模型能協同工作的整合測試、確保準確率達到保留資料閾值的模型品質門檻、以及驗證跨群組公平效能的公平性測試。所有這些都必須在生產部署前通過。

Why others wrong: 只測試預測函數遺漏資料管線和模型品質問題；只測試準確率遺漏公平性和整合問題；手動測試不能擴展且不是自動化的。

Trap: 只測試準確率 — 模型可以整體準確但對特定使用者群組表現極差（公平性問題）。

Mnemonic: ML CI/CD 測試 = 單元 + 整合 + 品質 + 公平性（四個都必須通過）

## Q109
Type: single
Difficulty: 1
Tags: deployment, endpoint-pricing, cost
Concepts: endpoint-cost-model
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

你的團隊在 Vertex AI 上部署了 5 個模型，每個在自己的端點上搭配最小 1 個複本。每月流量只有 100 個預測。主要成本關注是什麼？

A. 預測 API 呼叫費用
B. 閒置運算成本 — 5 個端點搭配最小複本不管流量都 24/7 運行
C. 模型儲存成本
D. 網路出口費用

Answer: B

Hint: 每月只有 100 個預測，什麼花費最多：預測還是永遠在線的基礎設施？

Explanation: Vertex AI 端點對運行複本的運算時間（vCPU、GPU、記憶體）收費，不只是對預測。5 個端點各維持至少 1 個複本 24/7 運行，你為 5 台永遠在線的伺服器付費，但每天只處理約 3 個預測。閒置運算成本遠超實際預測成本。

Why others wrong: 每月 100 次 API 呼叫花費幾分錢；模型儲存對大多數模型來說很少；小預測回應的網路出口可忽略。

Trap: 不考慮閒置端點成本 — 許多團隊部署多個低流量端點而不意識到每個都 24/7 以最低配置運行。

Mnemonic: 低流量 + 多端點 = 閒置成本問題；合併端點或使用無伺服器（擴展到零）

## Q110
Type: single
Difficulty: 3
Tags: responsible-ai, federated-learning, privacy
Concepts: federated-learning
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

多家醫院想合作訓練疾病預測模型，但由於隱私法規，病患資料不能離開各醫院。哪種 ML 方式能實現這種合作？

A. 每家醫院獨立訓練自己的模型
B. 聯邦學習 — 透過交換模型更新（梯度）而非原始資料來訓練共享模型
C. 匿名化所有資料並上傳到中央雲端伺服器
D. 使用從每家醫院記錄生成的合成資料

Answer: B

Hint: 哪種方式在原始資料不離開來源的情況下訓練共享模型？

Explanation: 聯邦學習透過讓每家醫院在其本地資料上訓練並只分享模型更新（梯度彙總）來訓練全域模型。中央伺服器彙總這些更新以改善共享模型，然後將改善的模型分發回各醫院。原始病患資料永遠不離開醫院，滿足隱私法規。

Why others wrong: 獨立模型錯失跨醫院模式的好處；匿名化可以被逆轉（重新識別攻擊）；合成資料可能不捕捉真實病患資料的完整複雜性。

Trap: 以為匿名化對醫療資料就夠了 — 研究顯示匿名化的健康記錄通常可以透過準識別符重新識別。

Mnemonic: 資料不能離開 → 聯邦學習（分享梯度，不是資料）；資料可以旅行 → 集中訓練更簡單

## Q111
Type: single
Difficulty: 2
Tags: scaling, bigquery-ml, vertex-ai-integration
Concepts: bqml-vertex-integration
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

你使用 BigQuery ML（CREATE MODEL）訓練了分類模型，想部署它做低延遲的線上預測。推薦的方式是什麼？

A. 每次線上請求呼叫 BigQuery ML.PREDICT
B. 將 BigQuery ML 模型匯出到 Vertex AI Model Registry 並部署到 Vertex AI 端點
C. 用 TensorFlow 重新實作模型
D. 使用 Cloud Functions 為每次預測查詢 BigQuery

Answer: B

Hint: BigQuery 為批次分析設計，不是低延遲服務 — 哪條路徑將模型移到服務最佳化的平台？

Explanation: BigQuery ML 模型可以匯出到 Vertex AI Model Registry，然後允許部署到針對低延遲線上預測最佳化的 Vertex AI 端點。這保留在 BigQuery 中訓練的模型，同時透過為即時請求設計的基礎設施服務。

Why others wrong: BigQuery ML.PREDICT 有不適合線上服務的查詢啟動延遲；用 TensorFlow 重新實作是不必要的工作；Cloud Functions 呼叫 BigQuery 仍有 BigQuery 的查詢延遲。

Trap: 使用 ML.PREDICT 做線上服務 — 每次「預測」實際上是帶有啟動開銷的 BigQuery 查詢，增加數秒延遲。

Mnemonic: BigQuery ML = 訓練；Vertex AI 端點 = 服務；匯出橋接兩者

## Q112
Type: single
Difficulty: 2
Tags: mlops, pipeline-parallelism, vertex-ai
Concepts: pipeline-parallel-steps
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

你的 Vertex AI Pipeline 有三個獨立的特徵工程步驟（文字特徵、數值特徵、影像特徵）目前依序執行，總共需要 3 小時。每步約 1 小時。你應該如何最佳化管線執行時間？

A. 在更大的機器上執行管線
B. 使用管線 SDK 的平行構造配置三個特徵工程步驟平行執行
C. 將所有特徵工程合併為單一步驟
D. 快取結果並跳過特徵工程

Answer: B

Hint: 沒有相依性的獨立步驟可以同時執行 — 哪個管線功能支援這個？

Explanation: Kubeflow Pipelines SDK 允許宣告沒有相互依賴的步驟，使它們平行執行。移除三個獨立特徵工程步驟之間的人為循序依賴，它們在各別工作節點上同時執行，將總時間從 3 小時縮減到約 1 小時。

Why others wrong: 更大機器不平行化分開的管線步驟；合併為一步可能失去模組性且不平行化；快取只在輸入未變更時有幫助。

Trap: 預設依序執行獨立步驟 — 管線 SDK 只在相依圖允許時平行執行步驟。確保不建立不必要的相依性。

Mnemonic: 獨立步驟 = 平行執行（移除假相依性）；相依步驟 = 必須循序

## Q113
Type: single
Difficulty: 1
Tags: deployment, model-update, zero-downtime
Concepts: rolling-update
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

你需要更新模型到新版本而沒有任何停機時間。使用者在轉換期間不應經歷錯誤或延遲高峰。哪種部署策略達到這個？

A. 刪除舊模型並部署新的
B. 滾動更新 — 在舊版本旁部署新版本，新複本上線時逐步轉移流量
C. 停止端點、交換模型、重啟
D. 將新模型部署在完全不同的端點

Answer: B

Hint: 哪種策略在轉換到新版本的同時保持持續服務預測？

Explanation: 滾動更新逐步部署新模型複本同時保持舊複本運行。流量在新複本通過健康檢查後轉移，確保整個更新過程中持續服務。如果新複本未通過健康檢查，上線停止且流量留在舊版本。

Why others wrong: 刪除舊模型造成停機；停止端點造成停機；不同端點需要應用程式更改。

Trap: 部署到新端點以避免風險 — 雖然安全，但它需要應用程式層路由更改且不提供無縫轉換。

Mnemonic: 零停機模型更新 = 滾動更新（新的啟動時舊的繼續服務）

## Q114
Type: single
Difficulty: 3
Tags: responsible-ai, ai-regulations, compliance
Concepts: eu-ai-act
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

你的組織在歐盟部署信用評分的 AI 系統。根據歐盟 AI 法案，信用評分被分類為「高風險」。你必須遵守哪些要求？

A. 沒有特定要求 — 只有社會評分被監管
B. 風險評估、人類監督、對受影響個人的透明度、技術文件，以及持續監控搭配合規評估
C. 只在信用決定上添加「AI 生成」標籤
D. 只通知歐盟 AI 辦公室關於該系統

Answer: B

Hint: 歐盟 AI 法案下的高風險 AI 系統有全面要求 — 哪個答案涵蓋所有？

Explanation: 歐盟 AI 法案要求高風險 AI 系統（包括信用評分）實施：風險管理系統、資料治理、技術文件、對使用者和受影響個人的透明度、人類監督能力、準確性/穩健性/網路安全標準、品質管理、記錄，以及部署前的合規評估。

Why others wrong: 信用評分明確被監管為高風險；僅標記不足；僅通知不滿足全面要求。

Trap: 以為高風險要求只是透明度 — 它們橫跨從開發到部署和監控的整個 AI 生命週期。

Mnemonic: 歐盟 AI 法案高風險 = 文件 + 透明度 + 人類監督 + 監控 + 合規評估（完整生命週期）

## Q115
Type: single
Difficulty: 2
Tags: model-development, few-shot, prompting
Concepts: few-shot-prompting
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

你需要使用 Gemini 將客戶回饋分類為 5 個類別。你每個類別有 10 個標記範例。你沒有時間或預算做微調。哪種方式給出最佳分類準確率？

A. 僅帶類別描述的零樣本提示
B. 少樣本提示搭配每個類別 2-3 個代表性範例在提示中，加上清楚的類別定義
C. 將所有 50 個範例作為上下文發送並要求模型記住模式
D. 不做提示工程就使用 Gemini API

Answer: B

Hint: 有限標記範例且不微調時，哪種提示策略最好地利用它們？

Explanation: 少樣本提示為模型提供展示預期輸入-輸出映射的代表性範例。每個類別包含 2-3 個多樣範例（提示中共 10-15 個）加上清楚的類別定義，給模型足夠的模式資訊來準確分類。這是在太少範例（零樣本模糊性）和太多（上下文視窗浪費和潛在混淆）之間的最佳平衡點。

Why others wrong: 零樣本沒有範例時錯誤率更高；所有 50 個範例可能超過有用的上下文長度並包含冗餘資訊；不做提示工程完全依賴模型的訓練資料。

Trap: 將所有 50 個範例放入提示 — 更多範例不總是意味著更好。精心選擇的多樣範例優於傾倒所有東西到上下文中。

Mnemonic: 少樣本最佳點 = 每個類別 2-3 個多樣範例 + 清楚定義；太多範例 = 邊際效應遞減 + 上下文浪費
