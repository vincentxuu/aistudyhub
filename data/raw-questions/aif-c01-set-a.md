# AWS AI Practitioner（AIF-C01）模擬考題 65 題

> 依據 exam guide **v1.1** 五章權重分配，含 v1.1 新增考點（MCP、agentic AI、context engineering、token 計價、幻覺偵測等）。
> 題型包含：單選、複選、排序、配對。複選與配對題**全對才給分**。

---

## 第 1 章：AI 與 ML 基礎（20%）— 13 題

### Q1（單選）
一家保險公司正在建立一個詐欺偵測系統。漏報詐欺案件（假陰性）的代價遠高於誤報（假陽性）。該公司應該優化哪個模型指標？

- A. Accuracy
- B. Precision
- C. Recall
- D. F1 Score

<details><summary>答案</summary>

**C. Recall**

Recall 衡量的是「實際為正的樣本中，有多少被正確預測為正」。當假陰性代價遠高於假陽性時（漏報比誤報更嚴重），應優化 Recall。

</details>

---

### Q2（單選）
以下哪一項最適合用 AI 解決？

- A. 公司法規規定所有決策必須由人類做出並提供完整決策理由
- B. 每天處理上萬封客戶郵件並自動分類到正確部門
- C. 一次性將 50 筆客戶資料從 Excel 搬到新系統
- D. 制定公司的年度預算策略

<details><summary>答案</summary>

**B. 每天處理上萬封客戶郵件並自動分類到正確部門**

AI 適合大規模、重複性、模式化的任務。A 有法規限制、C 是一次性少量任務、D 需要人類策略判斷。

</details>

---

### Q3（單選）
一間零售商想根據歷史銷售資料預測下季各門市的庫存需求。這屬於哪種 AI/ML 問題？

- A. 分類（Classification）
- B. 迴歸（Regression）
- C. 聚類（Clustering）
- D. 生成式 AI（Generative AI）

<details><summary>答案</summary>

**B. 迴歸（Regression）**

預測連續數值（庫存量）屬於迴歸問題。分類是預測離散類別，聚類是無監督分組，生成式 AI 是產出新內容。

</details>

---

### Q4（單選）
一家醫療機構需要從醫療影像中辨識腫瘤。該任務最適合使用哪個 AI 子領域？

- A. 自然語言處理（NLP）
- B. 電腦視覺（Computer Vision）
- C. 強化學習（Reinforcement Learning）
- D. 知識圖譜（Knowledge Graph）

<details><summary>答案</summary>

**B. 電腦視覺（Computer Vision）**

醫療影像辨識屬於 CV 領域。NLP 處理文字、強化學習適合序列決策、知識圖譜是結構化知識表示。

</details>

---

### Q5（單選）
哪個 AWS 服務最適合用來將客服通話錄音轉成文字？

- A. Amazon Polly
- B. Amazon Comprehend
- C. Amazon Transcribe
- D. Amazon Translate

<details><summary>答案</summary>

**C. Amazon Transcribe**

Transcribe 做語音轉文字（Speech-to-Text）。Polly 是文字轉語音、Comprehend 做自然語言理解、Translate 做翻譯。

</details>

---

### Q6（單選）
一家金融機構需要建立一個貸款審核模型，法規要求必須能完整解釋每一筆拒貸的原因。以下哪個方案最合適？

- A. 使用基礎模型（Foundation Model），因為效能最好
- B. 使用傳統 ML 模型（如決策樹），因為可解釋性高
- C. 使用生成式 AI 搭配 RAG，因為能引用資料來源
- D. 使用深度學習神經網路，因為準確率最高

<details><summary>答案</summary>

**B. 使用傳統 ML 模型（如決策樹），因為可解釋性高**

當法規要求完整解釋決策邏輯時，傳統 ML（決策樹、邏輯迴歸）的可解釋性遠優於黑箱模型。這是 v1.1 新增目標 1.2.6 的考點：什麼時候該用傳統 ML 而非 FM。

</details>

---

### Q7（單選）
以下哪個選項正確描述了「推論（Inference）」與「訓練（Training）」的差異？

- A. 訓練是用新資料更新模型權重；推論是用訓練好的模型對新資料做預測
- B. 推論需要的計算資源通常遠大於訓練
- C. 訓練只需要 CPU；推論需要 GPU
- D. 推論和訓練使用相同的資料集

<details><summary>答案</summary>

**A. 訓練是用新資料更新模型權重；推論是用訓練好的模型對新資料做預測**

訓練是學習過程，推論是應用過程。通常訓練比推論需要更多計算資源，且兩者使用不同資料。

</details>

---

### Q8（單選）
一個文字摘要模型需要評估生成摘要的品質。以下哪個指標最適合？

- A. AUC
- B. ROUGE
- C. Precision
- D. Accuracy

<details><summary>答案</summary>

**B. ROUGE**

ROUGE（Recall-Oriented Understudy for Gisting Evaluation）專門用來評估自動摘要品質，比較生成摘要與參考摘要的重疊程度。

</details>

---

### Q9（單選）
一家公司想要建立 AI 聊天機器人來回答客戶常見問題。哪個 AWS 服務最適合做為核心？

- A. Amazon Lex
- B. Amazon Polly
- C. Amazon Comprehend
- D. Amazon Rekognition

<details><summary>答案</summary>

**A. Amazon Lex**

Lex 是 AWS 的對話式 AI 服務，用於建立聊天機器人和語音助理。Polly 是語音合成、Comprehend 是文字分析、Rekognition 是影像辨識。

</details>

---

### Q10（單選）
以下哪個選項最能說明 AI/ML pipeline 中「資料準備」階段的重要性？

- A. 高品質資料可以減少訓練所需的 GPU 數量
- B. 資料品質直接影響模型效能，垃圾進垃圾出（Garbage In, Garbage Out）
- C. 資料準備只需要做一次，之後可以重複使用
- D. 所有資料都必須是結構化的才能用於 ML

<details><summary>答案</summary>

**B. 資料品質直接影響模型效能，垃圾進垃圾出（Garbage In, Garbage Out）**

資料品質是模型效能的基礎。A 不完全正確、C 忽略了資料會過時需要更新、D 非結構化資料（文字、影像）也可用於 ML。

</details>

---

### Q11（單選）
以下哪個是「批次推論（Batch Inference）」最適合的場景？

- A. 線上客服聊天機器人即時回覆客戶
- B. 每晚處理當天所有信用卡交易的詐欺偵測
- C. 自動駕駛車輛的即時物件偵測
- D. 語音助理的即時語音辨識

<details><summary>答案</summary>

**B. 每晚處理當天所有信用卡交易的詐欺偵測**

批次推論適合對延遲不敏感、可以累積一批資料再一次處理的場景。即時回覆、自動駕駛、語音辨識都需要即時推論。

</details>

---

### Q12（單選）
MLOps 的主要目的是什麼？

- A. 取代資料科學家的工作
- B. 將 ML 模型的開發、部署與維運標準化和自動化
- C. 讓所有模型都使用相同的演算法
- D. 確保模型只在雲端運行

<details><summary>答案</summary>

**B. 將 ML 模型的開發、部署與維運標準化和自動化**

MLOps 結合 ML 與 DevOps 的實踐，目標是標準化模型生命週期管理，包括版本控制、CI/CD、監控與再訓練。

</details>

---

### Q13（單選）
一家公司想評估其 AI 專案的投資報酬。以下哪個是商業指標而非模型指標？

- A. F1 Score
- B. 每位使用者的服務成本（Cost per User）
- C. Precision
- D. Recall

<details><summary>答案</summary>

**B. 每位使用者的服務成本（Cost per User）**

F1、Precision、Recall 都是模型效能指標。每位使用者成本、開發成本、ROI 是商業指標。考試會區分這兩類。

</details>

---

## 第 2 章：GenAI 基礎（24%）— 16 題

### Q14（單選）
在基礎模型（Foundation Model）的上下文中，「token」最正確的描述是？

- A. 用來驗證 API 呼叫的安全金鑰
- B. 模型處理文字的最小單位，可以是一個字、一個子詞或一個字元
- C. 模型訓練過程中的一個 epoch
- D. 向量資料庫中的一筆記錄

<details><summary>答案</summary>

**B. 模型處理文字的最小單位，可以是一個字、一個子詞或一個字元**

Token 是 LLM 處理輸入和輸出的基本單位，tokenizer 將文字切分成 token 序列。

</details>

---

### Q15（單選）
一家公司使用 Amazon Bedrock 呼叫基礎模型。他們發現每月 API 費用過高。以下哪項措施最能有效降低成本？（v1.1 新考點）

- A. 增加 temperature 參數
- B. 壓縮 prompt 長度、減少不必要的上下文 token
- C. 每次請求都使用最大輸出長度
- D. 改用更大的模型以提高準確率

<details><summary>答案</summary>

**B. 壓縮 prompt 長度、減少不必要的上下文 token**

Token 計價模型下，輸入和輸出的 token 數直接影響費用。壓縮 prompt、移除冗餘資訊是降成本的直接方法。這是 v1.1 目標 2.1.4 的考點。

</details>

---

### Q16（單選）
「Context Engineering」在基礎模型應用中的角色是什麼？（v1.1 新考點）

- A. 設計模型的神經網路架構
- B. 系統性地組織和管理提供給模型的所有上下文資訊，以優化輸出品質
- C. 對模型進行全量微調
- D. 設定模型的超參數

<details><summary>答案</summary>

**B. 系統性地組織和管理提供給模型的所有上下文資訊，以優化輸出品質**

Context Engineering 是 v1.1 新增考點（目標 2.1.5），指的是對模型輸入的系統提示、使用者指令、檢索到的資料、對話歷史等所有上下文進行結構化管理。

</details>

---

### Q17（單選）
在 MCP（Model Context Protocol）的架構中，MCP 主要解決什麼問題？（v1.1 新考點）

- A. 加速模型訓練過程
- B. 提供標準化的方式讓 AI 模型連接和互動外部系統與工具
- C. 壓縮模型的參數數量
- D. 管理模型的版本控制

<details><summary>答案</summary>

**B. 提供標準化的方式讓 AI 模型連接和互動外部系統與工具**

MCP 是 v1.1 目標 2.1.6 的考點，是連接 AI 模型與外部資料來源、工具的標準化協定。

</details>

---

### Q18（單選）
以下哪個最能描述「embedding」的概念？

- A. 將文字轉換成語音的技術
- B. 將資料（文字、影像等）轉換成高維度向量的數值表示
- C. 將大型模型壓縮成小型模型的技術
- D. 將多個模型合併成一個模型的方法

<details><summary>答案</summary>

**B. 將資料（文字、影像等）轉換成高維度向量的數值表示**

Embedding 將離散資料映射到連續向量空間，語意相近的資料在向量空間中距離也相近。是 RAG、語意搜尋等應用的基礎。

</details>

---

### Q19（單選）
關於生成式 AI 的幻覺（Hallucination），以下哪個描述最正確？

- A. 幻覺只發生在使用不良 prompt 的時候
- B. 模型產出看似合理但實際上不正確或虛構的內容
- C. 幻覺可以透過增加模型大小完全消除
- D. 幻覺只出現在文字生成，不會出現在影像生成

<details><summary>答案</summary>

**B. 模型產出看似合理但實際上不正確或虛構的內容**

幻覺是 LLM 的固有限制，無法完全消除，任何 prompt 都可能觸發，且文字和影像生成都會發生。

</details>

---

### Q20（單選）
選擇基礎模型時，以下哪些因素最不相關？

- A. 模型的延遲與推論速度
- B. 模型開發團隊的辦公室地點
- C. 模型支援的語言與模態
- D. 模型的成本與定價結構

<details><summary>答案</summary>

**B. 模型開發團隊的辦公室地點**

模型選擇的關鍵因素包括：成本、延遲、模態支援、多語言能力、模型大小、複雜度、客製化選項。開發團隊地點不是技術選型因素。

</details>

---

### Q21（單選）
以下哪個 AWS 服務是專門用來快速整合和部署基礎模型的？

- A. Amazon EC2
- B. Amazon Bedrock
- C. Amazon RDS
- D. Amazon S3

<details><summary>答案</summary>

**B. Amazon Bedrock**

Bedrock 是 AWS 的全託管基礎模型服務，提供多家供應商的 FM，無需管理基礎設施就能快速整合。

</details>

---

### Q22（單選）
以下哪個是多 agent 系統中常見的溝通模式？（v1.1 新考點）

- A. 每個 agent 獨立運行，完全不溝通
- B. 一個 orchestrator agent 協調多個 specialist agent 分工合作
- C. 所有 agent 必須使用相同的基礎模型
- D. Agent 之間只能透過人類中介溝通

<details><summary>答案</summary>

**B. 一個 orchestrator agent 協調多個 specialist agent 分工合作**

多 agent 模式中，常見的有 orchestrator 模式（一個主 agent 協調分派）、chain 模式（依序傳遞）、parallel 模式（並行處理）等。這是 v1.1 目標 2.1.6 的考點。

</details>

---

### Q23（單選）
Transformer 架構的核心機制是什麼？

- A. 卷積運算（Convolution）
- B. 自注意力機制（Self-Attention）
- C. 遞迴神經網路（RNN）
- D. 馬可夫鏈（Markov Chain）

<details><summary>答案</summary>

**B. 自注意力機制（Self-Attention）**

Transformer 的核心是 Self-Attention 機制，能讓模型在處理序列中的每個位置時，同時關注序列中所有其他位置的資訊。

</details>

---

### Q24（單選）
以下哪個是「擴散模型（Diffusion Model）」的典型用途？

- A. 文字分類
- B. 語音辨識
- C. 從文字描述生成影像
- D. 結構化資料的異常偵測

<details><summary>答案</summary>

**C. 從文字描述生成影像**

擴散模型（如 Stable Diffusion）是目前主流的影像生成技術，透過逐步去噪過程從隨機噪音生成影像。

</details>

---

### Q25（單選）
一家企業想讓員工使用 AI 編寫程式碼、生成文件。他們不想自行管理模型或基礎設施。以下哪個 AWS 服務最適合？

- A. Amazon SageMaker AI
- B. Amazon Q
- C. Amazon EC2 + 自架 LLM
- D. AWS Lambda

<details><summary>答案</summary>

**B. Amazon Q**

Amazon Q 是 AWS 的企業級 AI 助理，可以直接用來做程式碼生成、文件撰寫等，完全託管、不需管理模型。SageMaker 偏向需要自訓模型的場景。

</details>

---

### Q26（單選）
以下關於基礎模型生命週期的排序，哪個最正確？

- A. 部署 → 訓練 → 評估 → 資料選擇
- B. 資料選擇 → 模型選擇 → 預訓練 → 微調 → 評估 → 部署 → 回饋
- C. 模型選擇 → 部署 → 訓練 → 評估
- D. 評估 → 訓練 → 部署 → 微調

<details><summary>答案</summary>

**B. 資料選擇 → 模型選擇 → 預訓練 → 微調 → 評估 → 部署 → 回饋**

FM 生命週期依序為：資料選擇、模型選擇、預訓練、微調、評估、部署、回饋循環。

</details>

---

### Q27（單選）
以下哪個 AWS 服務是專為建立 AI agent 而設計的？（v1.1 新考點）

- A. Amazon S3
- B. Strands Agents
- C. Amazon DynamoDB
- D. AWS CloudFormation

<details><summary>答案</summary>

**B. Strands Agents**

Strands Agents 是 v1.1 新加入 in-scope 的服務，專門用於建立和管理 AI agent。

</details>

---

### Q28（單選）
Kiro 在 AWS AI 服務生態系中的角色是什麼？（v1.1 新考點）

- A. 向量資料庫服務
- B. AI 驅動的開發工具，協助建立 AI 應用
- C. 資料湖管理工具
- D. 網路安全監控服務

<details><summary>答案</summary>

**B. AI 驅動的開發工具，協助建立 AI 應用**

Kiro 是 v1.1 新增的 in-scope 服務，是 AWS 的 AI 開發工具，定位在 AI/ML pipeline 中協助開發者建立應用。

</details>

---

### Q29（複選，選兩個）
以下哪兩項是生成式 AI 的已知限制？

- A. 可能產出幻覺（虛假但聽起來合理的內容）
- B. 無法處理任何非英文的語言
- C. 模型的可解釋性有限，難以追蹤為何產出特定答案
- D. 只能處理文字，不能處理影像或語音

<details><summary>答案</summary>

**A 和 C**

幻覺和可解釋性低是 GenAI 的核心限制。現代 LLM 支援多語言（B 錯），且多模態模型可處理文字、影像、語音等（D 錯）。

</details>

---

## 第 3 章：基礎模型的應用（28%，最重）— 18 題

### Q30（單選）
一家法律事務所想讓 AI 根據最新法規回答客戶問題。法規資料每週更新，且必須引用來源。以下哪種方式最合適？

- A. 對基礎模型做完整預訓練
- B. 使用 RAG（Retrieval-Augmented Generation）搭配 Bedrock Knowledge Bases
- C. 使用 fine-tuning 把所有法規訓練進模型
- D. 使用 in-context learning 在每次 prompt 中附上所有法規

<details><summary>答案</summary>

**B. 使用 RAG 搭配 Bedrock Knowledge Bases**

資料頻繁更新且需要引用來源 → RAG 最合適。預訓練成本太高且不即時、fine-tuning 無法處理頻繁更新、in-context learning 有 token 長度限制。

</details>

---

### Q31（排序題）
將以下四種基礎模型客製化方式，依成本從低到高排列：

1. 持續預訓練（Continued Pre-training）
2. In-context Learning（如 few-shot prompting）
3. RAG（Retrieval-Augmented Generation）
4. 微調（Fine-tuning）

<details><summary>答案</summary>

**正確排序：2 → 3 → 4 → 1**

- In-context Learning（最低：只需改 prompt，不改模型）
- RAG（中低：需要向量資料庫和檢索管線）
- Fine-tuning（中高：需要訓練資料和計算資源）
- Continued Pre-training（最高：需要大量資料和大量計算資源）

</details>

---

### Q32（單選）
一家電商公司想讓 AI 客服能回答關於訂單狀態的即時問題。AI 需要存取訂單資料庫。以下哪種方式最合適？

- A. 對 LLM 做 fine-tuning，把所有訂單資料訓練進模型
- B. 使用 AI agent 搭配工具呼叫（tool use），讓 agent 查詢訂單 API
- C. 用 in-context learning 把訂單資料庫的內容全部放進 prompt
- D. 對模型做持續預訓練

<details><summary>答案</summary>

**B. 使用 AI agent 搭配工具呼叫，讓 agent 查詢訂單 API**

即時訂單資料不斷變化，不可能訓練進模型。Agent 可以透過 tool use 動態查詢外部系統，是處理即時資料互動的正確方式。

</details>

---

### Q33（單選）
在使用基礎模型時，調高 temperature 參數會有什麼效果？

- A. 增加輸出的確定性和一致性
- B. 增加輸出的隨機性和創意性
- C. 加快推論速度
- D. 減少 token 消耗

<details><summary>答案</summary>

**B. 增加輸出的隨機性和創意性**

Temperature 越高，模型生成越隨機多元；越低則越確定、可預測。Temperature 不影響速度或 token 數量。

</details>

---

### Q34（單選）
以下哪個 AWS 服務可以作為 RAG 的向量儲存？

- A. Amazon DynamoDB
- B. Amazon OpenSearch Service
- C. Amazon Redshift
- D. Amazon ElastiCache

<details><summary>答案</summary>

**B. Amazon OpenSearch Service**

官方考綱列出的向量儲存服務包括：OpenSearch Service、Aurora、Neptune、RDS for PostgreSQL。DynamoDB、Redshift、ElastiCache 不在向量儲存清單中。

</details>

---

### Q35（單選）
以下哪個是「prompt injection」的正確描述？

- A. 在 prompt 中加入範例以提升輸出品質
- B. 惡意使用者在輸入中嵌入指令，試圖讓模型忽略原始指示或洩漏系統 prompt
- C. 使用 chain-of-thought 引導模型逐步推理
- D. 在 prompt 中加入溫度設定來控制輸出

<details><summary>答案</summary>

**B. 惡意使用者在輸入中嵌入指令，試圖讓模型忽略原始指示或洩漏系統 prompt**

Prompt injection 是一種安全攻擊，攻擊者透過精心設計的輸入覆蓋或繞過模型的原始指令。

</details>

---

### Q36（單選）
Bedrock Prompt Management 的主要用途是什麼？（v1.1 新考點）

- A. 自動生成最佳 prompt
- B. 對 prompt 做版本管理，追蹤修改歷史
- C. 翻譯 prompt 到不同語言
- D. 加密 prompt 以防止洩漏

<details><summary>答案</summary>

**B. 對 prompt 做版本管理，追蹤修改歷史**

Bedrock Prompt Management 是 v1.1 新增目標 3.2.5 的考點，用來管理 prompt 的版本、變更紀錄和 A/B 測試。

</details>

---

### Q37（單選）
哪種 prompt 技巧最適合用來引導模型解決複雜的數學推理問題？

- A. Zero-shot prompting
- B. Chain-of-thought prompting
- C. Single-shot prompting
- D. 模板式 prompting

<details><summary>答案</summary>

**B. Chain-of-thought prompting**

Chain-of-thought 引導模型展示中間推理步驟，對複雜推理和數學問題特別有效。Zero-shot 不提供範例，效果較差。

</details>

---

### Q38（配對題）
將以下評估指標與其衡量對象配對：

| 指標 | 選項 |
|------|------|
| 1. ROUGE | A. 翻譯品質 |
| 2. BLEU | B. 語意相似度 |
| 3. BERTScore | C. 摘要品質 |
| 4. LLM-as-a-judge | D. 以另一個 LLM 來評估輸出品質 |

<details><summary>答案</summary>

- 1-C：ROUGE 衡量摘要品質
- 2-A：BLEU 衡量翻譯品質
- 3-B：BERTScore 用 BERT embedding 衡量語意相似度
- 4-D：LLM-as-a-judge 用 LLM 來評估另一個 LLM 的輸出品質

</details>

---

### Q39（單選）
一家公司想建立一個內部知識問答系統。他們有大量的內部文件，但不想微調模型。該公司應該使用哪種方法？

- A. 持續預訓練
- B. RAG
- C. RLHF
- D. 模型蒸餾

<details><summary>答案</summary>

**B. RAG**

RAG 讓模型在不修改權重的情況下存取外部知識。不想微調 + 有大量文件 = RAG 是最佳選擇。

</details>

---

### Q40（單選）
關於 Bedrock Guardrails 的 ApplyGuardrail API，以下哪個描述是正確的？

- A. 只能用於 Amazon Bedrock 上的模型
- B. 可以對任何模型端點呼叫，不限於 Bedrock 模型
- C. 只能過濾輸入，不能過濾輸出
- D. 只支援英文內容

<details><summary>答案</summary>

**B. 可以對任何模型端點呼叫，不限於 Bedrock 模型**

ApplyGuardrail API 可以對任何模型端點使用，不限於 Bedrock 自家的模型。這是多數教材漏講的考點。

</details>

---

### Q41（單選）
一家公司想讓基礎模型更了解醫療領域的專業用語，但不想改變模型的通用能力。以下哪種方法最適合？

- A. 用醫療文獻做持續預訓練（Continued Pre-training）以學習領域知識
- B. 用醫療 Q&A 做指令微調（Instruction Tuning）
- C. 用 RAG 檢索醫療文件
- D. 用 Zero-shot prompting

<details><summary>答案</summary>

**A. 用醫療文獻做持續預訓練以學習領域知識**

持續預訓練（Domain Adaptation）讓模型學習特定領域的詞彙和知識，適合讓模型「懂」領域用語。Instruction Tuning 改變模型的行為方式而非知識、RAG 是即時檢索、Zero-shot 無法增加領域知識。

</details>

---

### Q42（單選）
什麼是 RLHF（Reinforcement Learning from Human Feedback）？

- A. 讓模型自動從網路搜尋結果學習
- B. 用人類的偏好回饋來訓練獎勵模型，再用獎勵模型引導 LLM 的行為
- C. 用人類標注的分類標籤訓練分類模型
- D. 讓多個模型互相評分以提升效能

<details><summary>答案</summary>

**B. 用人類的偏好回饋來訓練獎勵模型，再用獎勵模型引導 LLM 的行為**

RLHF 是讓 LLM 更好地對齊人類偏好的訓練方法，核心是人類回饋 → 獎勵模型 → 強化學習。

</details>

---

### Q43（單選）
Prompt caching 在基礎模型應用中的主要好處是什麼？（v1.1 考點）

- A. 提升模型的準確率
- B. 減少重複計算相同 prompt 前綴的成本和延遲
- C. 自動修正 prompt 中的語法錯誤
- D. 加密儲存的 prompt 以防止洩漏

<details><summary>答案</summary>

**B. 減少重複計算相同 prompt 前綴的成本和延遲**

Prompt caching 讓系統快取常用的 prompt 前綴，避免每次都重新計算，降低延遲和成本。

</details>

---

### Q44（單選）
一家公司的 AI 應用需要評估業務對齊指標。以下哪個屬於業務對齊指標？（v1.1 新考點）

- A. BLEU 分數
- B. 任務完成率（Task Completion Rate）
- C. Perplexity
- D. F1 Score

<details><summary>答案</summary>

**B. 任務完成率（Task Completion Rate）**

v1.1 新增目標 3.4.5 的業務對齊指標包括：任務完成率、使用者滿意度、每次互動成本。BLEU、Perplexity、F1 都是模型/技術指標。

</details>

---

### Q45（單選）
以下哪個選項最能描述 Human-in-the-loop 在 FM 評估中的角色？

- A. 讓人類完全取代自動化評估
- B. 結合人類判斷與自動化指標，特別在自動指標無法捕捉的品質維度上補充評估
- C. 只在模型部署前使用一次
- D. 用來加速模型的訓練過程

<details><summary>答案</summary>

**B. 結合人類判斷與自動化指標，特別在自動指標無法捕捉的品質維度上補充評估**

Human-in-the-loop 不是取代自動化，而是補充在語氣、有害性、創意性等自動指標難以衡量的面向。且應持續進行，不只一次。

</details>

---

### Q46（單選）
以下情境中，哪一個最適合使用 Amazon SageMaker AI 而非 Amazon Bedrock？

- A. 快速用現有的基礎模型建立客服聊天機器人
- B. 用企業自有的標注資料從頭訓練一個自訂的 ML 模型
- C. 使用 Claude 或 Titan 模型做文字摘要
- D. 用 Bedrock Knowledge Bases 建立 RAG 應用

<details><summary>答案</summary>

**B. 用企業自有的標注資料從頭訓練一個自訂的 ML 模型**

考試偏好 Bedrock（快速整合、不需自己管模型），除非題目明確要求自訓模型，才選 SageMaker。SageMaker 適合需要完全控制訓練流程的場景。

</details>

---

### Q47（單選）
什麼是「模型蒸餾（Model Distillation）」？

- A. 將多個小模型合併成一個大模型
- B. 用大型教師模型的輸出來訓練一個更小、更快的學生模型
- C. 刪除模型中不常用的參數
- D. 將模型的權重轉換為低精度格式

<details><summary>答案</summary>

**B. 用大型教師模型的輸出來訓練一個更小、更快的學生模型**

模型蒸餾是 v1.1 考點，目的是在保持效能的同時減小模型體積和推論成本。C 是剪枝（pruning），D 是量化（quantization）。

</details>

---

## 第 4 章：負責任 AI（14%）— 9 題

### Q48（單選）
一家公司發現其 AI 招募系統對特定性別的候選人評分偏低。以下哪個 AWS 服務最適合用來偵測和量化這種偏誤？

- A. Amazon Bedrock Guardrails
- B. SageMaker Clarify
- C. AWS CloudTrail
- D. Amazon Inspector

<details><summary>答案</summary>

**B. SageMaker Clarify**

偏誤偵測問題的答案幾乎總是 SageMaker Clarify。Guardrails 用於過濾有害內容，CloudTrail 記錄 API 操作，Inspector 做安全漏洞掃描。

</details>

---

### Q49（單選）
以下哪個場景最需要考慮 AI 的「公平性（Fairness）」原則？

- A. AI 客服回覆速度太慢
- B. AI 貸款審核系統對不同種族群體的核貸率有顯著差異
- C. AI 翻譯系統偶爾翻錯技術名詞
- D. AI 生成的圖片解析度不夠高

<details><summary>答案</summary>

**B. AI 貸款審核系統對不同種族群體的核貸率有顯著差異**

公平性指 AI 系統不應對受保護群體產生歧視性結果。核貸率差異直接涉及公平性。其他選項涉及效能或品質，不是公平性。

</details>

---

### Q50（單選）
一家公司部署了一個 GenAI 客服系統。他們擔心模型可能產出不當或有害的內容。以下哪個 AWS 功能最適合做為第一道防線？

- A. Amazon Macie
- B. Bedrock Guardrails
- C. AWS WAF
- D. Amazon GuardDuty

<details><summary>答案</summary>

**B. Bedrock Guardrails**

有害內容過濾幾乎總是 Bedrock Guardrails。Macie 偵測敏感資料、WAF 是 Web 防火牆、GuardDuty 偵測安全威脅。

</details>

---

### Q51（單選）
以下哪個選項正確描述了「過擬合（Overfitting）」？

- A. 模型在訓練資料和測試資料上都表現不佳
- B. 模型在訓練資料上表現很好，但在新資料上表現差
- C. 模型完全無法學習任何模式
- D. 模型需要太多計算資源

<details><summary>答案</summary>

**B. 模型在訓練資料上表現很好，但在新資料上表現差**

過擬合 = 模型「記住」了訓練資料的特定細節（包含噪音），失去泛化能力。A 描述的是欠擬合。

</details>

---

### Q52（單選）
AWS SageMaker Model Cards 的主要用途是什麼？

- A. 加速模型訓練
- B. 提供模型的文件化記錄，包括用途、限制、效能指標和倫理考量
- C. 自動修復模型的偏誤
- D. 壓縮模型大小

<details><summary>答案</summary>

**B. 提供模型的文件化記錄，包括用途、限制、效能指標和倫理考量**

Model Cards 是透明度和可解釋性的工具，記錄模型的完整背景資訊，讓利害關係人了解模型的能力和限制。

</details>

---

### Q53（單選）
以下哪個是「以人為本設計（Human-centered Design）」在 AI 系統中的具體實踐？（v1.1 強調）

- A. 盡量減少使用者的操作步驟
- B. 提供使用者回饋機制，讓使用者能報告 AI 決策的問題，並確保 AI 決策過程透明
- C. 讓 AI 完全取代人類決策
- D. 只讓技術人員能存取 AI 系統

<details><summary>答案</summary>

**B. 提供使用者回饋機制，讓使用者能報告 AI 決策的問題，並確保 AI 決策過程透明**

以人為本設計強調使用者回饋機制和 AI 決策透明度，確保人類能理解、質疑和修正 AI 的決定。

</details>

---

### Q54（單選）
可解釋性（Explainability）和效能之間通常存在什麼關係？

- A. 可解釋性越高，模型效能通常也越高
- B. 可解釋性和效能之間通常存在取捨（trade-off）——更複雜的模型效能更好但更難解釋
- C. 兩者完全無關
- D. 所有高效能模型都具有高可解釋性

<details><summary>答案</summary>

**B. 可解釋性和效能之間通常存在取捨**

簡單模型（如線性迴歸、決策樹）容易解釋但效能有限；複雜模型（如深度學習）效能更好但難以解釋。

</details>

---

### Q55（配對題）
將以下負責任 AI 原則與其對應的場景配對：

| 原則 | 選項 |
|------|------|
| 1. Fairness | A. 使用者能理解 AI 為什麼做出某個決定 |
| 2. Transparency | B. AI 系統不會因惡意輸入而做出危險行為 |
| 3. Explainability | C. AI 系統對不同群體的結果沒有歧視性差異 |
| 4. Safety | D. 使用者知道自己正在與 AI 互動，而非人類 |

<details><summary>答案</summary>

- 1-C：Fairness = 不同群體的結果無歧視
- 2-D：Transparency = 使用者知道在跟 AI 互動
- 3-A：Explainability = 能理解 AI 的決策原因
- 4-B：Safety = 系統不會因惡意行為產出危險結果

</details>

---

### Q56（單選）
以下哪個方法最適合偵測訓練資料中的標注品質問題？

- A. 增加模型層數
- B. 人工稽核和子群分析
- C. 提高 learning rate
- D. 使用更大的資料集

<details><summary>答案</summary>

**B. 人工稽核和子群分析**

偵測標注品質問題需要人工審查標注的一致性，並對不同子群進行分析以找出偏差。技術層面的調整無法解決資料品質問題。

</details>

---

## 第 5 章：安全、合規與治理（14%）— 9 題

### Q57（單選）
在 AWS 的 Shared Responsibility Model 中，以下哪項是客戶的責任？

- A. 維護 AWS 資料中心的實體安全
- B. 管理 IAM 使用者的存取權限和加密金鑰
- C. 修補 Amazon Bedrock 底層基礎設施的漏洞
- D. 維護 AWS 全球網路骨幹的可用性

<details><summary>答案</summary>

**B. 管理 IAM 使用者的存取權限和加密金鑰**

在共擔責任模型中，AWS 負責「雲的安全」（基礎設施），客戶負責「雲中的安全」（存取控制、資料加密、應用安全）。

</details>

---

### Q58（單選）
幻覺偵測與 grounding 的主要目的是什麼？（v1.1 新考點）

- A. 加速模型的推論速度
- B. 確保模型的輸出有事實依據，降低虛假資訊的風險
- C. 減少模型的參數數量
- D. 壓縮模型的儲存空間

<details><summary>答案</summary>

**B. 確保模型的輸出有事實依據，降低虛假資訊的風險**

v1.1 新增目標 5.1.5，幻覺偵測與 grounding 包括 RAG grounding（用檢索到的資料佐證輸出）、輸出驗證、信心分數等機制。

</details>

---

### Q59（單選）
以下哪個 AWS 服務最適合用來偵測 S3 中存放的訓練資料是否包含個人識別資訊（PII）？

- A. Amazon GuardDuty
- B. Amazon Macie
- C. AWS Shield
- D. Amazon Inspector

<details><summary>答案</summary>

**B. Amazon Macie**

Macie 使用 ML 自動發現、分類和保護存放在 S3 中的敏感資料（包括 PII）。GuardDuty 偵測安全威脅、Shield 防 DDoS、Inspector 做漏洞掃描。

</details>

---

### Q60（單選）
一家公司要確保其 AI 系統的 API 呼叫都有完整的稽核軌跡。以下哪個 AWS 服務最適合？

- A. Amazon S3
- B. AWS CloudTrail
- C. Amazon SQS
- D. AWS Lambda

<details><summary>答案</summary>

**B. AWS CloudTrail**

CloudTrail 記錄 AWS 帳戶中的所有 API 呼叫和操作，提供完整的稽核軌跡。

</details>

---

### Q61（單選）
AWS PrivateLink 在 AI 解決方案中的主要用途是什麼？

- A. 加速模型訓練
- B. 讓 AI 服務的流量走私有網路，不經過公共網際網路
- C. 自動備份模型權重
- D. 壓縮 API 請求的大小

<details><summary>答案</summary>

**B. 讓 AI 服務的流量走私有網路，不經過公共網際網路**

PrivateLink 提供 VPC 和 AWS 服務之間的私有連接，確保資料傳輸不經過公共網路。

</details>

---

### Q62（單選）
Generative AI Security Scoping Matrix 的用途是什麼？（v1.1 考點）

- A. 計算 AI 模型的訓練成本
- B. 提供框架來評估和分類生成式 AI 應用的安全風險等級
- C. 自動修復 AI 系統的安全漏洞
- D. 管理 AI 模型的版本

<details><summary>答案</summary>

**B. 提供框架來評估和分類生成式 AI 應用的安全風險等級**

Generative AI Security Scoping Matrix 是 AWS 自己的安全框架，官方在 v1.1 點名進考綱，用於評估不同 GenAI 使用案例的安全需求和風險等級。

</details>

---

### Q63（單選）
Bedrock AgentCore 在安全層面提供了什麼功能？（v1.1 新考點）

- A. 僅提供模型訓練的計算資源
- B. 提供 AI agent 的身份驗證（Identity）與存取政策（Policy）管理
- C. 提供資料備份服務
- D. 提供模型壓縮功能

<details><summary>答案</summary>

**B. 提供 AI agent 的身份驗證（Identity）與存取政策（Policy）管理**

Bedrock AgentCore 是 v1.1 新增的 in-scope 服務，其中 AgentCore Identity 和 Policy 提供 agent 的安全管控。

</details>

---

### Q64（複選，選兩個）
以下哪兩項是防範 prompt injection 攻擊的有效措施？

- A. 使用 Bedrock Guardrails 設定輸入過濾規則
- B. 增加模型的 temperature 參數
- C. 實施輸出驗證，檢查模型回覆是否符合預期格式和內容範圍
- D. 使用更大的模型

<details><summary>答案</summary>

**A 和 C**

防範 prompt injection 需要多層防禦：輸入過濾（Guardrails）和輸出驗證。增加 temperature 或模型大小不能防範安全攻擊。

</details>

---

### Q65（單選）
以下哪個 AWS 服務可以用來確保 AI 解決方案符合特定產業法規（如 HIPAA、GDPR）的合規要求？

- A. Amazon Bedrock
- B. AWS Artifact
- C. Amazon SageMaker
- D. Amazon Lex

<details><summary>答案</summary>

**B. AWS Artifact**

AWS Artifact 提供 AWS 安全和合規報告以及特定法規的合規文件。它是取得 AWS 合規報告和協議（如 BAA for HIPAA）的入口。

</details>

---

## 考題分佈統計

| 章節 | 權重 | 題數 | 實際佔比 |
|------|------|------|----------|
| 第 1 章：AI 與 ML 基礎 | 20% | 13 | 20.0% |
| 第 2 章：GenAI 基礎 | 24% | 16 | 24.6% |
| 第 3 章：基礎模型的應用 | 28% | 18 | 27.7% |
| 第 4 章：負責任 AI | 14% | 9 | 13.8% |
| 第 5 章：安全、合規與治理 | 14% | 9 | 13.8% |
| **合計** | **100%** | **65** | **100%** |

### v1.1 新考點覆蓋

- ✅ Token 計價（Q15）
- ✅ Context Engineering（Q16）
- ✅ MCP（Q17）
- ✅ 多 Agent 系統（Q22）
- ✅ Bedrock Prompt Management（Q36）
- ✅ 業務對齊指標（Q44）
- ✅ 幻覺偵測與 Grounding（Q58）
- ✅ Bedrock AgentCore（Q63）
- ✅ Kiro（Q28）
- ✅ Strands Agents（Q27）
- ✅ 模型蒸餾（Q47）
- ✅ 傳統 ML vs FM 選擇（Q6）
- ✅ Prompt Caching（Q43）
- ✅ Generative AI Security Scoping Matrix（Q62）

### 題型分佈

| 題型 | 題數 |
|------|------|
| 單選 | 59 |
| 複選 | 2 |
| 排序 | 1 |
| 配對 | 3 |
