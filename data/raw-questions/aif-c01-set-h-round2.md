# AWS AI Practitioner（AIF-C01）模擬考題 第二回 65 題

> 依據 exam guide **v1.1** 五章權重分配，與第一回完全不重複。
> 題型包含：單選、複選、排序、配對。複選、排序與配對題**全對才給分**。

---

## 第 1 章：AI 與 ML 基礎（20%）— 13 題

### Q1（單選）
一家電信公司想根據客戶的通話紀錄、帳單金額和客訴次數，將客戶自動分成不同群組以設計行銷方案。資料沒有預先標注類別。這屬於哪種學習方式？

- A. 監督式學習（Supervised Learning）
- B. 非監督式學習（Unsupervised Learning）
- C. 強化學習（Reinforcement Learning）
- D. 遷移學習（Transfer Learning）

<details><summary>答案</summary>

**B. 非監督式學習（Unsupervised Learning）**

沒有預先標注的類別、要從資料中自動發現群組 → 聚類（Clustering），屬於非監督式學習。

</details>

---

### Q2（單選）
一家製造廠的品檢 AI 系統將 5% 的良品誤判為不良品（假陽性），但幾乎不會將不良品放行（假陰性極低）。管理層認為假陽性造成的浪費太多。應該優化哪個指標？

- A. Recall
- B. Precision
- C. Accuracy
- D. 混淆矩陣中的 True Negative

<details><summary>答案</summary>

**B. Precision**

Precision 衡量「被預測為正的樣本中，有多少確實是正」。降低假陽性（減少良品被誤判）就是提高 Precision。第一回 Q1 考 Recall，這裡考反向情境。

</details>

---

### Q3（單選）
以下哪個場景最不適合使用 AI/ML？

- A. 從數百萬封 email 中自動偵測垃圾郵件
- B. 依據公司章程第 14 條第 3 款做出法律裁定，且裁定必須有完整法律推理紀錄
- C. 預測明天各地區的用電量
- D. 從醫學影像中輔助醫師篩檢異常

<details><summary>答案</summary>

**B. 依據公司章程第 14 條第 3 款做出法律裁定，且裁定必須有完整法律推理紀錄**

需要完整法律推理紀錄且依據特定條款裁定 → 高可解釋性 + 法律責任 + 不容許幻覺，AI 不適合作為決策者。其他選項是 AI 的典型適用場景。

</details>

---

### Q4（單選）
深度學習（Deep Learning）與傳統機器學習的主要差異是什麼？

- A. 深度學習不需要任何資料
- B. 深度學習使用多層神經網路自動學習特徵，傳統 ML 通常需要手動做特徵工程
- C. 傳統 ML 的效能一定比深度學習好
- D. 深度學習只能用於影像辨識

<details><summary>答案</summary>

**B. 深度學習使用多層神經網路自動學習特徵，傳統 ML 通常需要手動做特徵工程**

深度學習的核心優勢是自動特徵萃取，不需要人工設計特徵。但它需要更多資料和計算資源。

</details>

---

### Q5（配對題）
將以下 AWS AI 服務與其核心功能配對：

| 服務 | 選項 |
|------|------|
| 1. Amazon Polly | A. 從文字中萃取情緒、實體、主題 |
| 2. Amazon Comprehend | B. 將文字轉換成自然語音 |
| 3. Amazon Translate | C. 自動翻譯不同語言的文字 |
| 4. Amazon Rekognition | D. 影像和影片中的物件、人臉、文字偵測 |

<details><summary>答案</summary>

- 1-B：Polly = 文字轉語音（Text-to-Speech）
- 2-A：Comprehend = 自然語言理解（情緒分析、實體辨識等）
- 3-C：Translate = 機器翻譯
- 4-D：Rekognition = 電腦視覺（物件偵測、人臉辨識）

</details>

---

### Q6（單選）
一位資料科學家發現模型在訓練集上的 accuracy 只有 55%，在測試集上也是 55%。這最可能是什麼問題？

- A. 過擬合（Overfitting）
- B. 欠擬合（Underfitting）
- C. 資料洩漏（Data Leakage）
- D. 標籤不平衡（Label Imbalance）

<details><summary>答案</summary>

**B. 欠擬合（Underfitting）**

訓練集和測試集上都表現差 → 模型太簡單、無法捕捉資料的模式。過擬合是訓練集表現好但測試集差。

</details>

---

### Q7（單選）
一家銀行想要即時判斷每筆交易是否為詐欺，延遲必須低於 100 毫秒。這需要哪種推論型態？

- A. 批次推論（Batch Inference）
- B. 即時推論（Real-time Inference）
- C. 非同步推論（Asynchronous Inference）
- D. 離線推論（Offline Inference）

<details><summary>答案</summary>

**B. 即時推論（Real-time Inference）**

低延遲、逐筆即時判斷 → 需要即時推論端點。批次推論累積處理、非同步推論不保證延遲。

</details>

---

### Q8（單選）
Serverless 推論最適合以下哪種場景？（v1.1 考點）

- A. 每秒穩定處理 10,000 筆請求的生產環境
- B. 流量不可預測、有時數小時無請求的開發測試環境
- C. 需要自訂 GPU 配置的大型模型訓練
- D. 需要極低延遲（<10ms）的高頻交易系統

<details><summary>答案</summary>

**B. 流量不可預測、有時數小時無請求的開發測試環境**

Serverless 推論在沒有請求時不收費，適合間歇性流量。穩定高流量用專用端點更划算，大型訓練需要自訂資源配置。

</details>

---

### Q9（單選）
以下哪個最能說明 AI/ML pipeline 中「模型監控」階段的必要性？

- A. 部署後模型永遠不會退化
- B. 輸入資料的分佈可能隨時間改變（data drift），導致模型效能下降
- C. 監控只是為了記錄 API 呼叫次數
- D. 模型一旦部署就不需要再更新

<details><summary>答案</summary>

**B. 輸入資料的分佈可能隨時間改變（data drift），導致模型效能下降**

Data drift 和 concept drift 會讓模型效能隨時間退化，持續監控能及早發現問題並觸發再訓練。

</details>

---

### Q10（單選）
以下關於 Agentic AI 的描述，哪個最正確？（v1.1 新考點）

- A. 只是一個更大的語言模型
- B. 能自主規劃任務、使用工具、並根據環境回饋調整行動的 AI 系統
- C. 只能處理單一類型的任務
- D. 不需要基礎模型就能運作

<details><summary>答案</summary>

**B. 能自主規劃任務、使用工具、並根據環境回饋調整行動的 AI 系統**

Agentic AI 的核心特徵包括自主規劃、工具使用、記憶管理、工作流編排，超越單純的文字生成。這是 v1.1 目標 2.1.6 的基礎定義。

</details>

---

### Q11（單選）
一家公司每天收到 5,000 張手寫表單，需要自動辨識並擷取表單中的欄位值。以下哪個 AWS 服務最適合？

- A. Amazon Textract
- B. Amazon Translate
- C. Amazon Personalize
- D. Amazon Forecast

<details><summary>答案</summary>

**A. Amazon Textract**

Textract 專門從文件（包含手寫和印刷文字）中擷取文字、表格和表單欄位。Translate 做翻譯、Personalize 做推薦、Forecast 做時間序列預測。

</details>

---

### Q12（單選）
以下哪個選項最能描述「遷移學習（Transfer Learning）」的概念？

- A. 將模型從一個雲端供應商搬到另一個
- B. 利用在大型資料集上預訓練好的模型知識，套用到新的但相關的任務上
- C. 將多個模型的預測結果合併
- D. 同時訓練多個不同的模型

<details><summary>答案</summary>

**B. 利用在大型資料集上預訓練好的模型知識，套用到新的但相關的任務上**

遷移學習讓我們能用較少的資料和計算資源在新任務上獲得好效果，因為模型已經學到了通用知識。

</details>

---

### Q13（單選）
F1 Score 的計算基礎是什麼？

- A. Accuracy 和 AUC 的平均
- B. Precision 和 Recall 的調和平均
- C. True Positive 和 True Negative 的總和
- D. 訓練損失和驗證損失的差值

<details><summary>答案</summary>

**B. Precision 和 Recall 的調和平均**

F1 = 2 × (Precision × Recall) / (Precision + Recall)。適合在 Precision 和 Recall 都重要且需要平衡時使用。注意 v1.1 把指標從 AUC 換成了 Precision 和 Recall。

</details>

---

## 第 2 章：GenAI 基礎（24%）— 16 題

### Q14（單選）
一家公司正在評估兩個基礎模型。Model A 每百萬輸入 token 收費 $3，每百萬輸出 token 收費 $15。Model B 每百萬輸入 token 收費 $1，每百萬輸出 token 收費 $5。如果用例主要是生成長篇報告（輸出遠多於輸入），在成本方面應該選哪個？（v1.1 新考點）

- A. Model A，因為它的輸入價格較合理
- B. Model B，因為輸入和輸出的 token 價格都更低
- C. 無法判斷，因為兩者效能未知
- D. 選最貴的模型，品質一定最好

<details><summary>答案</summary>

**B. Model B，因為輸入和輸出的 token 價格都更低**

生成長篇報告 = 大量輸出 token。Model B 的輸出價格只有 Model A 的 1/3（$5 vs $15），成本差異顯著。題目問的是「成本方面」，不是效能。v1.1 目標 2.1.4 要求能分析 token 計價對成本的影響。

</details>

---

### Q15（單選）
在 context engineering 中，以下哪個做法最有效地優化模型的輸出品質？（v1.1 新考點）

- A. 把所有曾經的對話歷史都放進 prompt
- B. 依據任務需求，精選並結構化最相關的系統提示、使用者指令、檢索結果和對話歷史
- C. 完全不給任何上下文，讓模型自行推理
- D. 隨機選取過去的對話片段

<details><summary>答案</summary>

**B. 依據任務需求，精選並結構化最相關的系統提示、使用者指令、檢索結果和對話歷史**

Context engineering 的核心是「給對的上下文，不是給多的上下文」。盲目塞入所有歷史會增加成本和噪音。

</details>

---

### Q16（單選）
在多 agent 系統中，「記憶管理（Memory Management）」的主要挑戰是什麼？（v1.1 新考點）

- A. 硬碟空間不足
- B. 如何在多個 agent 和多輪互動之間有效地保留、共享和更新相關的上下文資訊
- C. 如何加密所有記憶
- D. 如何刪除所有先前的對話

<details><summary>答案</summary>

**B. 如何在多個 agent 和多輪互動之間有效地保留、共享和更新相關的上下文資訊**

多 agent 的記憶管理涉及短期記憶（當前對話）、長期記憶（跨 session）、以及 agent 間的知識共享。這是 v1.1 目標 2.1.6 的子主題。

</details>

---

### Q17（單選）
「Chunking」在 RAG 流程中的用途是什麼？

- A. 將大型模型分割成多個小模型
- B. 將長文件切分成較小的段落，以便進行 embedding 和檢索
- C. 將模型的參數分組訓練
- D. 將 API 請求分批發送

<details><summary>答案</summary>

**B. 將長文件切分成較小的段落，以便進行 embedding 和檢索**

Chunking 決定了文件如何被切分和索引。切得太大會降低檢索精確度，切得太小會失去上下文。

</details>

---

### Q18（單選）
以下哪個最能描述「多模態模型（Multimodal Model）」？

- A. 只能處理一種資料格式的模型
- B. 能同時理解和生成多種資料格式（文字、影像、音訊等）的模型
- C. 使用多個 GPU 訓練的模型
- D. 在多個雲端區域部署的模型

<details><summary>答案</summary>

**B. 能同時理解和生成多種資料格式（文字、影像、音訊等）的模型**

多模態模型如 GPT-4V、Claude 3 可以同時處理文字、影像等不同模態的資料。

</details>

---

### Q19（排序題）
將以下概念從底層到高層排列（由基礎到應用）：

1. Prompt Engineering
2. Token（分詞）
3. Transformer 架構
4. 基礎模型（Foundation Model）

<details><summary>答案</summary>

**正確排序：2 → 3 → 4 → 1**

- Token（最底層：文字的基本處理單位）
- Transformer（架構層：用 token 建立模型的核心架構）
- Foundation Model（模型層：用 Transformer 架構訓練出的大型預訓練模型）
- Prompt Engineering（應用層：如何有效地使用 FM）

</details>

---

### Q20（單選）
以下哪個 AWS 服務主要用於管理 AI agent 的基礎設施和生命週期？（v1.1 新考點）

- A. Amazon S3
- B. Bedrock AgentCore
- C. Amazon CloudWatch
- D. AWS Step Functions

<details><summary>答案</summary>

**B. Bedrock AgentCore**

Bedrock AgentCore 是 v1.1 新增的 in-scope 服務，提供 agent 的執行環境、身份驗證、政策管理和生命週期管理。

</details>

---

### Q21（單選）
一家新創公司資源有限，需要快速建立一個 AI 原型來展示給投資人。他們不想花時間在模型訓練或基礎設施管理上。以下哪種方式最合適？

- A. 用 SageMaker 從頭訓練自訂模型
- B. 自建 GPU 伺服器部署開源模型
- C. 用 Amazon Bedrock 直接呼叫現成的基礎模型
- D. 雇用 ML 團隊開發專屬模型

<details><summary>答案</summary>

**C. 用 Amazon Bedrock 直接呼叫現成的基礎模型**

Bedrock 是最快的路徑：不需訓練、不需管基礎設施、API 呼叫即可使用多家供應商的 FM。

</details>

---

### Q22（單選）
以下哪個關於 SageMaker JumpStart 的描述最正確？

- A. 只能用來訓練自訂模型
- B. 提供預訓練模型、範例 notebook 和解決方案，讓使用者快速開始 ML 專案
- C. 是一個純粹的資料儲存服務
- D. 只支援 AWS 自家的 Titan 模型

<details><summary>答案</summary>

**B. 提供預訓練模型、範例 notebook 和解決方案，讓使用者快速開始 ML 專案**

JumpStart 是 SageMaker 的模型市集和快速啟動平台，提供多種預訓練模型和端到端解決方案。

</details>

---

### Q23（單選）
以下關於向量（Vector）在 GenAI 中的角色，哪個描述最正確？

- A. 向量只用來儲存圖片
- B. 向量是 embedding 的輸出形式，語意相近的資料在向量空間中距離也相近，是語意搜尋和 RAG 的基礎
- C. 向量和 token 是同一件事
- D. 向量只能表示數字，不能表示文字

<details><summary>答案</summary>

**B. 向量是 embedding 的輸出形式，語意相近的資料在向量空間中距離也相近**

Embedding 模型將文字、影像等資料轉換為向量。向量之間的距離（如 cosine similarity）反映語意相似度，是 RAG 檢索的核心機制。

</details>

---

### Q24（單選）
一家公司想為其內部知識庫建立語意搜尋功能，讓員工能用自然語言提問。以下哪種技術組合最合適？

- A. 關鍵字搜尋 + 正規表達式
- B. Embedding 模型 + 向量資料庫 + LLM
- C. 資料庫全文索引 + SQL 查詢
- D. 模型微調 + 批次推論

<details><summary>答案</summary>

**B. Embedding 模型 + 向量資料庫 + LLM**

語意搜尋需要 embedding 做向量化、向量資料庫做語意比對、LLM 做自然語言回答。這就是 RAG 架構。

</details>

---

### Q25（單選）
以下哪個不是生成式 AI 的典型用例？

- A. 根據產品規格自動撰寫行銷文案
- B. 計算公司上季度的精確營收數字
- C. 根據使用者描述生成 UI 設計原型
- D. 自動將客服對話摘要成重點

<details><summary>答案</summary>

**B. 計算公司上季度的精確營收數字**

精確數字計算是傳統軟體（資料庫查詢、試算表）的工作，GenAI 在精確計算上不可靠且容易幻覺。其他選項（文案、設計、摘要）都是 GenAI 的強項。

</details>

---

### Q26（複選，選兩個）
以下哪兩項是選擇基礎模型時應考慮的因素？（v1.1 強調）

- A. 模型的推論延遲是否符合應用的回應時間需求
- B. 模型開發公司的股價表現
- C. 模型的輸入/輸出 token 長度限制是否足以處理目標任務
- D. 模型的 logo 設計是否美觀

<details><summary>答案</summary>

**A 和 C**

v1.1 明確列出模型選擇因素：成本、模態、延遲（A）、多語言、模型大小、複雜度、客製化、輸入輸出長度（C）。股價和 logo 設計不是技術選型因素。

</details>

---

### Q27（單選）
在 MCP 架構中，一個 AI agent 需要查詢公司的 CRM 資料庫。MCP 在這個流程中扮演什麼角色？（v1.1 新考點）

- A. 訓練模型理解 CRM 資料結構
- B. 提供標準化的介面讓 agent 能以一致的方式連接和查詢 CRM 系統
- C. 將 CRM 資料全部載入模型的 context window
- D. 取代 CRM 系統的功能

<details><summary>答案</summary>

**B. 提供標準化的介面讓 agent 能以一致的方式連接和查詢 CRM 系統**

MCP 是連接 AI 模型和外部系統的標準化協定。它不訓練模型（A）、不把所有資料塞進 context（C）、也不取代現有系統（D）。

</details>

---

### Q28（單選）
以下哪個關於 GenAI 的「不確定性（Non-determinism）」描述最正確？

- A. 只有設定 temperature > 0 時才會出現不確定性
- B. 即使相同的 prompt 和相同的設定，模型也可能產生不同的輸出
- C. 不確定性可以透過增加訓練資料完全消除
- D. 不確定性只發生在免費版模型

<details><summary>答案</summary>

**B. 即使相同的 prompt 和相同的設定，模型也可能產生不同的輸出**

LLM 的不確定性是固有特性，即使 temperature=0 也可能因浮點運算等因素產生微小差異。這是 GenAI 的已知限制之一。

</details>

---

### Q29（單選）
以下哪個場景最適合使用 Amazon Bedrock 而非 Amazon SageMaker AI？

- A. 需要從零開始訓練一個自訂的 CV 模型
- B. 需要完全控制訓練流程中的每一個超參數
- C. 需要快速用現成的 Claude 或 Titan 模型建立文字摘要功能
- D. 需要使用自家研發的模型架構

<details><summary>答案</summary>

**C. 需要快速用現成的 Claude 或 Titan 模型建立文字摘要功能**

Bedrock = 快速整合現有 FM、不需管模型。SageMaker = 完全控制、自訓模型。考試幾乎總是偏好 Bedrock，除非明確要求自訓。

</details>

---

## 第 3 章：基礎模型的應用（28%，最重）— 18 題

### Q30（單選）
一家公司的客服 AI 回覆不夠禮貌，經常使用過於直接的語氣。他們不想改變模型的知識，只想調整回覆風格。以下哪種方式最合適？

- A. 對模型做持續預訓練
- B. 使用 instruction tuning 微調回覆風格
- C. 更換為更大的模型
- D. 使用 RAG 檢索禮貌用語資料庫

<details><summary>答案</summary>

**B. 使用 instruction tuning 微調回覆風格**

Instruction tuning 改變模型的行為方式和回覆風格，不改變核心知識。持續預訓練改變領域知識、RAG 增加外部資訊、換大模型不針對性解決風格問題。

</details>

---

### Q31（單選）
一家公司想讓 AI 能根據最新的產品目錄回答客戶問題。目錄每天更新，包含上千個產品。以下哪種向量資料庫最適合搭配 Bedrock Knowledge Bases 使用？

- A. Amazon DynamoDB
- B. Amazon Aurora
- C. Amazon ElastiCache
- D. Amazon Redshift

<details><summary>答案</summary>

**B. Amazon Aurora**

Aurora 是 v1.1 新增的 in-scope 向量儲存服務，支援 pgvector 擴充，可搭配 Bedrock Knowledge Bases 使用。DynamoDB 和 ElastiCache 不是向量儲存，Redshift 不在考綱的向量儲存清單中。

</details>

---

### Q32（單選）
在 few-shot prompting 中，提供三個範例的目的是什麼？

- A. 永久修改模型的權重
- B. 在不修改模型權重的情況下，透過範例引導模型理解預期的輸出格式和行為
- C. 增加模型的訓練資料
- D. 降低 API 的呼叫費用

<details><summary>答案</summary>

**B. 在不修改模型權重的情況下，透過範例引導模型理解預期的輸出格式和行為**

Few-shot 屬於 in-context learning，用範例「教」模型預期行為，但完全不改變模型的權重或參數。

</details>

---

### Q33（單選）
以下哪個關於「prompt poisoning」的描述最正確？

- A. 使用過長的 prompt 導致 API 超時
- B. 攻擊者在訓練資料或外部資料來源中植入惡意內容，使模型在特定條件下產生有害輸出
- C. prompt 中的語法錯誤導致模型混淆
- D. 使用太多範例導致 token 超出限制

<details><summary>答案</summary>

**B. 攻擊者在訓練資料或外部資料來源中植入惡意內容，使模型在特定條件下產生有害輸出**

Prompt poisoning 是一種間接攻擊，透過汙染資料來源（如 RAG 檢索的文件）來操縱模型行為。

</details>

---

### Q34（單選）
一家公司想將大型 FM 的效能「蒸餾」到一個更小、更快的模型中，以部署在邊緣裝置上。這個過程需要什麼？（v1.1 考點）

- A. 用小模型的輸出來訓練大模型
- B. 用大模型（教師模型）的輸出做為訓練資料，訓練小模型（學生模型）
- C. 直接刪除大模型中一半的層
- D. 將大模型的權重複製到小模型

<details><summary>答案</summary>

**B. 用大模型（教師模型）的輸出做為訓練資料，訓練小模型（學生模型）**

模型蒸餾的核心：教師模型生成的 soft label（含機率分佈的輸出）比 hard label 更有資訊量，學生模型從中學到更豐富的知識表示。

</details>

---

### Q35（配對題）
將以下 FM 客製化方式與其最適合的場景配對：

| 方式 | 選項 |
|------|------|
| 1. In-context Learning | A. 讓模型深入理解生物醫學領域的專業用語 |
| 2. RAG | B. 低成本、不改變模型，只在 prompt 中附上幾個範例 |
| 3. Fine-tuning | C. 根據每日更新的內部文件回答問題，需引用來源 |
| 4. Continued Pre-training | D. 改變模型的回覆語氣和格式風格 |

<details><summary>答案</summary>

- 1-B：In-context Learning = 低成本、靠 prompt 範例引導
- 2-C：RAG = 即時檢索最新文件、可引用來源
- 3-D：Fine-tuning = 改變模型的行為風格
- 4-A：Continued Pre-training = 學習領域知識

</details>

---

### Q36（單選）
降低 temperature 到 0（或接近 0）最適合以下哪種用例？

- A. 寫小說，希望內容有創意和想像力
- B. 寫程式碼，希望輸出正確且一致
- C. 腦力激盪，希望產出多樣化的點子
- D. 寫詩，希望用詞獨特且不落俗套

<details><summary>答案</summary>

**B. 寫程式碼，希望輸出正確且一致**

低 temperature → 輸出更確定、更一致。需要正確性和可重現性的任務（程式碼、事實查詢、資料擷取）應使用低 temperature。創意類任務用較高 temperature。

</details>

---

### Q37（單選）
在 Bedrock Model Evaluation 中，使用 LLM-as-a-judge 的優勢是什麼？

- A. 完全取代人類評估的必要性
- B. 能自動化評估大量輸出，且可以評估語氣、相關性等主觀指標
- C. 比 BLEU 和 ROUGE 更便宜
- D. 不需要任何設定就能使用

<details><summary>答案</summary>

**B. 能自動化評估大量輸出，且可以評估語氣、相關性等主觀指標**

LLM-as-a-judge 用另一個 LLM 來評估輸出品質，可以評估傳統指標（BLEU、ROUGE）無法衡量的主觀維度，但不能完全取代人類評估。

</details>

---

### Q38（單選）
一家公司建立了一個 RAG 系統，但發現模型有時會引用不相關的文件片段來回答問題。以下哪個最可能是原因？

- A. 模型太大
- B. 文件的 chunking 策略不當，導致檢索到的片段與問題不相關
- C. temperature 設定太低
- D. 使用了太多 few-shot 範例

<details><summary>答案</summary>

**B. 文件的 chunking 策略不當，導致檢索到的片段與問題不相關**

RAG 品質很大程度取決於 chunking 策略。切得太大可能包含不相關資訊，切得太小可能失去上下文。檢索品質問題通常源自 embedding、chunking 或檢索策略。

</details>

---

### Q39（單選）
使用 prompt 模板（Prompt Template）的主要好處是什麼？

- A. 自動提高模型的準確率
- B. 確保不同使用者和應用場景中 prompt 格式的一致性，便於維護和版本管理
- C. 減少 API 呼叫費用
- D. 讓模型能處理更多 token

<details><summary>答案</summary>

**B. 確保不同使用者和應用場景中 prompt 格式的一致性，便於維護和版本管理**

Prompt 模板標準化 prompt 結構，減少人為差異，方便團隊協作和版本控管。搭配 Bedrock Prompt Management 更能追蹤變更歷史。

</details>

---

### Q40（單選）
以下哪個是評估 RAG 系統中「檢索品質」的正確方法？

- A. 只看最終回覆的流暢度
- B. 評估檢索到的文件與問題的相關性（Context Relevance），以及回覆是否有被檢索到的內容支撐（Faithfulness）
- C. 只計算回覆的字數
- D. 只看模型的 perplexity

<details><summary>答案</summary>

**B. 評估檢索到的文件與問題的相關性（Context Relevance），以及回覆是否有被檢索到的內容支撐（Faithfulness）**

RAG 評估需要分開看：檢索品質（取到對的文件嗎？）和生成品質（回覆有忠實於檢索到的內容嗎？）。

</details>

---

### Q41（單選）
以下關於 AI agent 在商業應用中的描述，哪個最正確？

- A. AI agent 只能做簡單的問答
- B. AI agent 能自主完成多步驟的商業流程，如：查詢庫存 → 計算報價 → 生成合約草稿 → 發送通知
- C. AI agent 不需要存取任何外部系統
- D. AI agent 必須由人類手動控制每一個步驟

<details><summary>答案</summary>

**B. AI agent 能自主完成多步驟的商業流程**

AI agent 的商業價值在於自主串接多步驟的工作流程，透過工具使用和決策規劃完成複雜任務。

</details>

---

### Q42（單選）
一家公司發現使用者經常嘗試用 jailbreaking 手法讓客服 AI 繞過安全限制。以下哪個是最有效的防禦措施？

- A. 增加模型的 temperature
- B. 結合 Bedrock Guardrails（輸入過濾）+ 輸出驗證 + 系統 prompt 防護，多層防禦
- C. 只使用更小的模型
- D. 完全關閉 AI 客服功能

<details><summary>答案</summary>

**B. 結合 Bedrock Guardrails + 輸出驗證 + 系統 prompt 防護，多層防禦**

安全防禦需要多層方法：輸入過濾（Guardrails 攔截惡意輸入）+ 系統 prompt 設定明確邊界 + 輸出驗證（檢查回覆是否超出範圍）。

</details>

---

### Q43（單選）
以下哪種情境最適合使用 Prompt Caching？（v1.1 考點）

- A. 每次 prompt 都完全不同的即興對話
- B. 大量請求共用相同的長篇系統提示（system prompt），只有使用者輸入不同
- C. 每次請求都使用不同的基礎模型
- D. 不使用系統提示的簡單問答

<details><summary>答案</summary>

**B. 大量請求共用相同的長篇系統提示，只有使用者輸入不同**

Prompt caching 快取重複的 prompt 前綴（如系統提示）。當大量請求共用相同的長前綴時，效益最大。

</details>

---

### Q44（單選）
以下哪個指標最適合評估 AI 客服系統的「使用者滿意度」？（v1.1 新考點）

- A. BLEU Score
- B. 每次互動後的使用者評分（如 1–5 星）和 NPS（Net Promoter Score）
- C. 模型的 perplexity
- D. F1 Score

<details><summary>答案</summary>

**B. 每次互動後的使用者評分和 NPS**

v1.1 目標 3.4.5 的業務對齊指標中，使用者滿意度是關鍵指標，通常透過直接的使用者回饋來衡量。BLEU、perplexity、F1 都是技術指標。

</details>

---

### Q45（單選）
以下哪個描述最能區分 RAG 和 Fine-tuning？

- A. RAG 修改模型權重，Fine-tuning 不修改
- B. RAG 在推論時動態檢索外部知識，Fine-tuning 在訓練時將知識嵌入模型權重
- C. Fine-tuning 比 RAG 便宜
- D. RAG 只能處理文字，Fine-tuning 能處理所有模態

<details><summary>答案</summary>

**B. RAG 在推論時動態檢索外部知識，Fine-tuning 在訓練時將知識嵌入模型權重**

核心區別：RAG 是推論時間的知識增強（不改模型），Fine-tuning 是訓練時間的知識/行為修改（改模型權重）。

</details>

---

### Q46（單選）
一家公司的 AI 系統需要評估一個 agent workflow 的端到端效能。以下哪種評估方式最合適？（v1.1 考點）

- A. 只看最終回覆的 BLEU 分數
- B. 評估整個工作流程的任務完成率、每個步驟的正確性、以及端到端延遲
- C. 只看模型的 training loss
- D. 只測試第一個 agent 的效能

<details><summary>答案</summary>

**B. 評估整個工作流程的任務完成率、每個步驟的正確性、以及端到端延遲**

v1.1 強調評估「用 FM 建的應用（RAG、agent、workflow）」，需要端到端評估整個系統，不只看個別元件。

</details>

---

### Q47（單選）
一家公司的 AI 翻譯系統需要評估翻譯品質。以下哪個指標最適合？

- A. ROUGE
- B. BLEU
- C. F1 Score
- D. AUC

<details><summary>答案</summary>

**B. BLEU**

BLEU（Bilingual Evaluation Understudy）專門設計來評估機器翻譯品質，比較候選翻譯與參考翻譯的 n-gram 重疊。ROUGE 偏向摘要評估。

</details>

---

## 第 4 章：負責任 AI（14%）— 9 題

### Q48（單選）
一家醫療 AI 公司發現其診斷模型在特定年齡層的準確率明顯偏低。以下哪種方法最適合用來量化這個問題？

- A. 只看整體 accuracy
- B. 按年齡層做子群分析（Subgroup Analysis），比較各群體的效能指標
- C. 增加整體訓練資料量
- D. 使用更大的模型

<details><summary>答案</summary>

**B. 按年齡層做子群分析，比較各群體的效能指標**

子群分析能揭露整體指標掩蓋的群體差異。只看整體 accuracy 會漏掉特定群體的效能問題。

</details>

---

### Q49（單選）
以下哪個是 AI 系統中「真實性（Veracity/Truthfulness）」原則的具體體現？

- A. 模型能產出流暢的文字
- B. 確保模型的輸出有事實依據，減少幻覺和誤導性資訊
- C. 模型能處理大量並發請求
- D. 模型的回應時間低於 100 毫秒

<details><summary>答案</summary>

**B. 確保模型的輸出有事實依據，減少幻覺和誤導性資訊**

真實性要求 AI 輸出的內容要有根據、不虛構。實踐方式包括 RAG grounding、輸出驗證、信心分數等。

</details>

---

### Q50（單選）
一家公司在部署 AI 系統前，發現模型在男性和女性求職者上的推薦率有顯著差異。用 SageMaker Clarify 分析後確認存在偏誤。以下哪個是最適當的下一步？

- A. 忽略偏誤直接部署，因為模型的整體 accuracy 很高
- B. 調查偏誤來源（訓練資料、特徵選擇、標注品質），修正後重新訓練和評估
- C. 只在女性使用者面前關閉 AI 功能
- D. 手動調整每個預測結果

<details><summary>答案</summary>

**B. 調查偏誤來源，修正後重新訓練和評估**

發現偏誤後，應從根源修正：檢查訓練資料是否有不均衡或歷史偏見、特徵是否包含代理變數（proxy variable）、標注品質是否一致。

</details>

---

### Q51（單選）
以下哪個關於 AI 系統的「穩健性（Robustness）」描述最正確？

- A. 穩健性只跟模型大小有關
- B. 穩健的 AI 系統能在輸入有噪音、對抗性攻擊或分佈偏移時仍維持合理效能
- C. 穩健性和安全性是完全相同的概念
- D. 只有在測試環境中才需要考慮穩健性

<details><summary>答案</summary>

**B. 穩健的 AI 系統能在輸入有噪音、對抗性攻擊或分佈偏移時仍維持合理效能**

穩健性指系統面對異常、干擾或攻擊時的韌性。與安全性相關但不完全相同——穩健性關注效能維持，安全性關注避免有害行為。

</details>

---

### Q52（單選）
以下哪個是生成式 AI 可能帶來的法律風險？

- A. 模型訓練時間太長
- B. 模型可能生成侵犯智慧財產權的內容，或產出有偏見的內容導致歧視訴訟
- C. 模型的 API 延遲太高
- D. 模型佔用的儲存空間太大

<details><summary>答案</summary>

**B. 模型可能生成侵犯智慧財產權的內容，或產出有偏見的內容導致歧視訴訟**

考綱列出的 GenAI 法律風險包括：IP 侵權、偏誤輸出、信任流失、幻覺。訓練時間、延遲、儲存是技術問題，不是法律風險。

</details>

---

### Q53（單選）
以下哪個 AWS 功能用來過濾生成式 AI 輸出中的有害內容（仇恨言論、暴力、不當言論等）？

- A. Amazon Macie
- B. Bedrock Guardrails
- C. AWS WAF
- D. Amazon Inspector

<details><summary>答案</summary>

**B. Bedrock Guardrails**

Guardrails 可以設定內容過濾規則，偵測和攔截有害內容（仇恨、暴力、性、不當言論等）。Macie 偵測敏感資料、WAF 是 Web 應用防火牆、Inspector 做安全漏洞掃描。

</details>

---

### Q54（單選）
一家公司在選擇 AI 模型時，需要考慮環境永續性。以下哪個做法最符合這個原則？

- A. 總是選最大的模型，因為效能最好
- B. 在效能滿足需求的前提下，選擇較小、更有效率的模型以減少能源消耗
- C. 環境因素不應影響模型選擇
- D. 只使用本地部署的 GPU

<details><summary>答案</summary>

**B. 在效能滿足需求的前提下，選擇較小、更有效率的模型以減少能源消耗**

考綱提到「模型選擇的環境與永續考量」。在效能足夠的情況下選擇較小模型，能減少計算資源消耗和碳足跡。

</details>

---

### Q55（單選）
Bedrock Model Evaluations 在負責任 AI 中的角色是什麼？

- A. 自動修復模型的所有偏誤
- B. 提供標準化的方式來評估模型在公平性、毒性、準確性等維度上的表現
- C. 取代所有人類評估
- D. 只用來比較模型的推論速度

<details><summary>答案</summary>

**B. 提供標準化的方式來評估模型在公平性、毒性、準確性等維度上的表現**

Bedrock Model Evaluations 讓使用者能系統化地評估模型在多個負責任 AI 維度上的表現，但不能自動修復偏誤，也不能完全取代人類評估。

</details>

---

### Q56（單選）
以下關於「包容性（Inclusivity）」在 AI 系統中的應用，哪個描述最正確？

- A. 確保 AI 系統只服務主要使用者群體
- B. 設計 AI 系統時考慮不同能力、語言、文化背景的使用者需求
- C. 包容性和可用性無關
- D. 包容性只需在部署後再考慮

<details><summary>答案</summary>

**B. 設計 AI 系統時考慮不同能力、語言、文化背景的使用者需求**

包容性要求在設計階段就考慮多元使用者：身體能力差異（無障礙設計）、語言多樣性、文化敏感度等。

</details>

---

## 第 5 章：安全、合規與治理（14%）— 9 題

### Q57（單選）
以下哪種加密方式保護的是「資料在傳輸過程中」的安全？

- A. 靜態加密（Encryption at Rest）
- B. 傳輸加密（Encryption in Transit）
- C. 應用層加密（Application-level Encryption）
- D. 欄位層加密（Field-level Encryption）

<details><summary>答案</summary>

**B. 傳輸加密（Encryption in Transit）**

傳輸加密（如 TLS/SSL）保護資料在網路傳輸過程中不被攔截。靜態加密保護儲存的資料。考綱要求理解兩者的差異。

</details>

---

### Q58（單選）
一家公司需要確保其 AI 系統中的模型輸出不包含任何客戶的個人識別資訊（PII）。以下哪種做法最適合？（v1.1 強調）

- A. 只靠模型的訓練來避免洩漏 PII
- B. 使用 Bedrock Guardrails 設定 PII 過濾，並在輸出層做資料外洩防護
- C. 不讓任何人使用 AI 系統
- D. 只使用最小的模型

<details><summary>答案</summary>

**B. 使用 Bedrock Guardrails 設定 PII 過濾，並在輸出層做資料外洩防護**

v1.1 強調「資料外洩防護」和「輸出過濾與驗證」。Guardrails 可以自動偵測和遮蔽 PII（如姓名、身分證號、信用卡號等）。

</details>

---

### Q59（單選）
AWS Config 在 AI 解決方案的治理中扮演什麼角色？

- A. 訓練 ML 模型
- B. 持續監控和記錄 AWS 資源的配置變更，確保符合合規要求
- C. 生成 AI 內容
- D. 管理模型的版本

<details><summary>答案</summary>

**B. 持續監控和記錄 AWS 資源的配置變更，確保符合合規要求**

AWS Config 記錄資源配置的歷史變更，可以設定規則自動檢查是否符合組織的合規政策。

</details>

---

### Q60（單選）
「Data Lineage（資料血緣）」在 AI 治理中的重要性是什麼？

- A. 加速模型訓練
- B. 追蹤資料從來源到最終使用的完整路徑，確保可稽核性和透明度
- C. 壓縮資料以節省儲存空間
- D. 自動修復資料中的錯誤

<details><summary>答案</summary>

**B. 追蹤資料從來源到最終使用的完整路徑，確保可稽核性和透明度**

Data lineage 記錄資料的來源、轉換、使用歷史，是 AI 治理和合規的基礎。當模型出問題時，可以追溯到資料源頭。

</details>

---

### Q61（單選）
以下哪個是 RAG grounding 在幻覺偵測中的作用？（v1.1 新考點）

- A. 讓模型跑得更快
- B. 將模型的回覆錨定在檢索到的真實資料上，降低虛構內容的風險
- C. 增加模型的參數數量
- D. 自動翻譯模型的輸出

<details><summary>答案</summary>

**B. 將模型的回覆錨定在檢索到的真實資料上，降低虛構內容的風險**

RAG grounding 是 v1.1 目標 5.1.5 的核心概念：透過檢索到的事實資料來「接地」模型的輸出，減少幻覺。

</details>

---

### Q62（單選）
一家金融機構需要記錄所有 AI 系統互動的完整稽核軌跡，以符合法規要求。以下哪個組合最適合？（v1.1 強調）

- A. Amazon S3 + Amazon Athena
- B. AWS CloudTrail（API 操作紀錄）+ Amazon CloudWatch Logs（應用日誌）+ Bedrock 的使用紀錄
- C. Amazon DynamoDB + Amazon SNS
- D. AWS Lambda + Amazon SQS

<details><summary>答案</summary>

**B. CloudTrail + CloudWatch Logs + Bedrock 使用紀錄**

v1.1 強調「AI 互動的稽核軌跡與日誌」。CloudTrail 記錄 API 層操作、CloudWatch Logs 記錄應用層日誌、Bedrock 提供模型呼叫的使用紀錄，三者組合提供完整的稽核軌跡。

</details>

---

### Q63（單選）
以下哪個 AWS 服務可以用來掃描 AI 應用程式中的安全漏洞？

- A. Amazon Polly
- B. Amazon Inspector
- C. Amazon Lex
- D. Amazon Personalize

<details><summary>答案</summary>

**B. Amazon Inspector**

Inspector 自動掃描 AWS 資源（EC2、Lambda、容器等）的安全漏洞和不符規範的配置。

</details>

---

### Q64（單選）
AWS Trusted Advisor 在 AI 解決方案中能提供什麼協助？

- A. 訓練 ML 模型
- B. 提供成本優化、安全、效能、容錯和服務限制等方面的最佳實踐建議
- C. 生成 AI 內容
- D. 管理 IAM 使用者

<details><summary>答案</summary>

**B. 提供成本優化、安全、效能、容錯和服務限制等方面的最佳實踐建議**

Trusted Advisor 自動檢查帳戶配置，提供五大類建議（成本、安全、效能、容錯、配額），幫助優化 AI 工作負載的部署。

</details>

---

### Q65（複選，選三個）
以下哪三項是 v1.1 考綱中關於安全與隱私考量的重點領域？

- A. 輸出過濾與驗證
- B. 模型的 logo 設計
- C. Prompt injection 防護
- D. AI 互動的稽核軌跡與日誌
- E. 模型的行銷策略

<details><summary>答案</summary>

**A、C、D**

v1.1 目標 5 的安全與隱私考量包括：應用安全、威脅偵測、漏洞管理、prompt injection（C）、傳輸與靜態加密、資料外洩防護、輸出過濾與驗證（A）、AI 互動的稽核軌跡與日誌（D）、毒性內容。Logo 設計和行銷策略不是安全考量。

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

### 第二回 v1.1 新考點覆蓋

- ✅ Token 計價與成本分析（Q14）
- ✅ Context Engineering 實務（Q15）
- ✅ 多 Agent 記憶管理（Q16）
- ✅ MCP 實際應用場景（Q27）
- ✅ Bedrock AgentCore（Q20）
- ✅ Serverless 推論（Q8）
- ✅ Agentic AI 定義（Q10）
- ✅ 模型蒸餾實務（Q34）
- ✅ Prompt Caching 適用場景（Q43）
- ✅ 業務對齊指標 — 使用者滿意度（Q44）
- ✅ Agent workflow 評估（Q46）
- ✅ 幻覺偵測 — RAG Grounding（Q61）
- ✅ 資料外洩防護（Q58）
- ✅ AI 稽核軌跡（Q62）
- ✅ 傳統 ML vs FM（Q3, Q6 from 第一回延伸）

### 題型分佈

| 題型 | 題數 |
|------|------|
| 單選 | 59 |
| 複選 | 3 |
| 排序 | 1 |
| 配對 | 2 |
