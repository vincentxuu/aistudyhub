---
exam: AIP-C01
lang: zh-TW
---

## Q1
Type: single
Difficulty: 1
Tags: foundation-model, bedrock, model-selection
Concepts: fm-selection
Domain: Domain 1 — Foundation Model Integration, Data Management, and Compliance
DomainNumber: 1

一家公司想使用 Amazon Bedrock 建立客服聊天機器人。該機器人需要處理英文的多輪對話並遵循詳細指令。開發人員應該採取哪種方法來選擇最適合的基礎模型？

A. 始終選擇最大的可用模型，因為較大的模型會產生更好的結果
B. 在 Amazon Bedrock playground 上使用具有代表性的提示詞評估多個基礎模型，比較回應品質、延遲和成本
C. 使用最便宜的可用模型以最大限度降低成本，不管品質如何
D. 改用 Amazon SageMaker 從頭建立自訂模型

Answer: B

Hint: 想想 Amazon Bedrock 如何讓你在做出承諾之前比較模型。

Explanation: Amazon Bedrock 提供 playground 來使用你自己的提示詞測試多個基礎模型。最佳做法是根據你的具體使用場景評估模型，在品質、延遲和成本之間取得平衡，而非預設選擇最大或最便宜的選項。

Why others wrong: 最大的不一定最好（可能更慢、更貴卻沒有品質提升）；最便宜的可能產生低品質回應；在有預訓練基礎模型可用時，從頭建立是不必要的。

Trap: 假設更大的模型普遍更好——實際上，較小的模型在特定任務上可以表現更佳，同時更快、更便宜。

Mnemonic: Playground = 投資前先測試

## Q2
Type: single
Difficulty: 2
Tags: rag, knowledge-base, embeddings
Concepts: rag-architecture
Domain: Domain 1 — Foundation Model Integration, Data Management, and Compliance
DomainNumber: 1

一位開發人員正在使用 Amazon Bedrock Knowledge Bases 建立 RAG 應用程式。公司的文件儲存在 Amazon S3 中，包含平均 200 頁的技術手冊。配置分塊策略時最重要的考量是什麼？

A. 使用最大的分塊大小，以在每次檢索中包含最多上下文
B. 選擇能在段落語義完整性與基礎模型上下文視窗限制之間取得平衡的分塊大小，並配置重疊區段以保留跨分塊邊界的上下文
C. 完全跳過分塊，將完整文件發送給模型
D. 使用每個分塊一個句子的最小分塊大小以獲得最大精確度

Answer: B

Hint: 考慮每個分塊中上下文過多和過少之間的權衡。

Explanation: 有效的分塊需要在語義完整性（大到足以捕捉含義）與基礎模型上下文視窗限制之間取得平衡。分塊之間的重疊確保跨分塊邊界的重要上下文不會在檢索過程中遺失。

Why others wrong: 最大的分塊可能超出上下文視窗並稀釋相關性；跳過分塊會發送過多不相關的上下文；單句分塊會失去理解所需的周圍上下文。

Trap: 認為更大的分塊總是更好——過大的分塊會降低檢索精確度，並可能超出模型限制。

Mnemonic: 分塊 = Goldilocks 區間 + 重疊保安全

## Q3
Type: single
Difficulty: 1
Tags: embeddings, vector-store
Concepts: vector-embeddings
Domain: Domain 1 — Foundation Model Integration, Data Management, and Compliance
DomainNumber: 1

在 RAG 管線中生成向量嵌入的主要目的是什麼？

A. 為了壓縮文件以降低 Amazon S3 的儲存成本
B. 將文字轉換為能捕捉語義含義的數值表示，實現基於相似度的檢索
C. 在將敏感資料儲存到知識庫之前加密
D. 將文件從一種語言翻譯成另一種語言

Answer: B

Hint: 想想電腦如何理解文字的「含義」以進行搜尋。

Explanation: 向量嵌入將文字轉換為高維數值向量，其中語義相似的內容具有相似的向量表示。這使得相似度搜尋成為可能——基於含義而非精確的關鍵字匹配來找到相關文件。

Why others wrong: 嵌入不是用於壓縮或加密的；雖然存在多語言模型，但 RAG 中嵌入的主要目的是語義相似度搜尋，而非翻譯。

Trap: 將嵌入與加密或壓縮混淆——它們是關於表示含義的，而非保護或縮小資料。

Mnemonic: 嵌入 = 用數字表達含義 → 相似的含義 = 相近的向量

## Q4
Type: single
Difficulty: 2
Tags: bedrock, data-management, compliance
Concepts: data-residency
Domain: Domain 1 — Foundation Model Integration, Data Management, and Compliance
DomainNumber: 1

一家歐洲金融服務公司需要使用 Amazon Bedrock，同時確保客戶資料留在歐盟境內以符合 GDPR。開發人員應該如何配置？

A. 對應用程式使用的所有 S3 儲存桶啟用伺服器端加密
B. 在歐盟 AWS 區域（如 eu-west-1）部署 Bedrock 應用程式，確保所有資料來源和向量儲存都在同一區域，並驗證 Bedrock API 呼叫是向區域端點發出的
C. 在公司資料中心和任何 AWS 區域之間使用 VPN 連線
D. 與每個基礎模型供應商簽署單獨的資料處理協議

Answer: B

Hint: GDPR 資料駐留要求主要透過將資料保留在特定地理區域內來解決。

Explanation: AWS Bedrock 在所選區域內處理資料。為了滿足 GDPR 資料駐留要求，你必須在歐盟區域部署，並確保所有相關資源（S3 儲存桶、向量儲存、端點）都位於同一區域，使客戶資料永遠不會離開歐盟。

Why others wrong: 加密保護資料但不限制其位置；VPN 保護傳輸但資料仍在目標區域處理；DPA 很重要但在技術上無法強制資料駐留。

Trap: 認為僅靠加密就能滿足 GDPR——GDPR 要求資料留在特定管轄區域內，這與區域選擇有關，而不僅僅是加密。

Mnemonic: GDPR = Geography Dictates Processing Region（地理決定處理區域）

## Q5
Type: single
Difficulty: 3
Tags: rag, hybrid-search, retrieval
Concepts: hybrid-retrieval
Domain: Domain 1 — Foundation Model Integration, Data Management, and Compliance
DomainNumber: 1

一位開發人員的 RAG 應用程式在使用者以產品 SKU 代碼（如「WX-4521-BLK」）查詢時檢索到不相關的段落，但對自然語言查詢運作良好。最佳的修復方法是什麼？

A. 將檢索的分塊數量從 5 增加到 50
B. 配置混合搜尋，結合語義向量搜尋和關鍵字搜尋，讓 SKU 代碼等精確匹配查詢使用關鍵字匹配，而自然語言查詢受益於語義搜尋
C. 將嵌入模型替換為更大的模型
D. 將 SKU 代碼添加到基礎模型的系統提示詞中

Answer: B

Hint: 語義搜尋擅長理解含義；關鍵字搜尋擅長精確匹配。如果兩者都用呢？

Explanation: SKU 代碼是精確標識符，語義搜尋可能無法良好處理，因為嵌入捕捉的是含義，而非精確的字串模式。混合搜尋結合基於向量的語義搜尋和基於關鍵字的（詞彙）搜尋，讓系統能有效處理自然語言和精確匹配查詢。

Why others wrong: 更多分塊會增加雜訊而不解決核心檢索問題；更大的嵌入模型無法修復精確匹配問題；將 SKU 放入系統提示詞無法擴展且不能解決檢索問題。

Trap: 假設語義搜尋能處理所有查詢類型——它在處理沒有語義含義的代碼、ID 和精確字串時會遇到困難。

Mnemonic: SKU = String，用 Keyword 搜尋；自然語言 = 用 Neural（語義）搜尋；兩者 = Hybrid

## Q6
Type: single
Difficulty: 2
Tags: bedrock, model-customization, fine-tuning
Concepts: fine-tuning-vs-rag
Domain: Domain 1 — Foundation Model Integration, Data Management, and Compliance
DomainNumber: 1

一位開發人員需要讓基礎模型持續使用公司特定的 JSON 輸出格式和領域特定術語。這些術語是穩定的且很少變動。哪種方法最適合？

A. 使用包含範例輸出的知識庫進行 RAG
B. 使用包含正確格式範例的精選資料集對基礎模型進行 fine-tuning，使用公司的術語
C. 在每個使用者提示詞中添加 JSON schema
D. 使用原生輸出 JSON 的較小模型

Answer: B

Hint: 當所需行為是一致且穩定的，將其嵌入模型權重比提示更可靠。

Explanation: 當你需要模型持續採用不經常變動的特定風格、格式或術語時，fine-tuning 是理想的選擇。它將行為嵌入模型權重，比重複的提示指令產生更可靠的輸出。

Why others wrong: RAG 用於動態知識檢索，而非格式化行為；在每個提示詞中添加 schema 很脆弱且浪費 token；較小的模型可能無法很好地處理領域複雜性。

Trap: 對所有事情都預設使用 RAG——RAG 擅長注入動態知識，而非教模型一致的格式化行為。

Mnemonic: 穩定行為 → Fine-tune；動態知識 → RAG

## Q7
Type: single
Difficulty: 1
Tags: bedrock, inference, api
Concepts: bedrock-api
Domain: Domain 1 — Foundation Model Integration, Data Management, and Compliance
DomainNumber: 1

開發人員應該使用哪個 Amazon Bedrock API 來呼叫基礎模型進行單次文字生成請求？

A. CreateModelCustomizationJob
B. InvokeModel
C. CreateKnowledgeBase
D. ListFoundationModels

Answer: B

Hint: 想想哪個動作名稱意味著「呼叫模型以獲得回應」。

Explanation: InvokeModel API 是向基礎模型發送提示詞並接收回應的主要端點。它根據模型支援文字和圖像輸入，並回傳模型生成的輸出。

Why others wrong: CreateModelCustomizationJob 啟動 fine-tuning 工作；CreateKnowledgeBase 建立 RAG 知識庫；ListFoundationModels 回傳可用模型但不會呼叫它們。

Trap: 將模型呼叫與模型管理 API 混淆——InvokeModel 用於獲取回應，其他的用於設定和配置。

Mnemonic: Invoke = 「呼叫行動」= 發送提示詞，獲得回應

## Q8
Type: single
Difficulty: 3
Tags: rag, metadata-filtering, retrieval
Concepts: metadata-filtering
Domain: Domain 1 — Foundation Model Integration, Data Management, and Compliance
DomainNumber: 1

一個多租戶 SaaS 應用程式為所有客戶使用共享的 Amazon Bedrock Knowledge Base。每個客戶應該只能查詢自己的文件。開發人員應該如何安全地實現這一點？

A. 為每個客戶建立獨立的知識庫
B. 在檢索查詢中應用 metadata 篩選器，使用在文件匯入時添加的客戶特定 metadata 標籤，確保每個查詢都包含匹配請求客戶租戶 ID 的篩選器
C. 為每個客戶使用不同的嵌入模型
D. 在 Amazon S3 中實作列級安全性

Answer: B

Hint: 想想如何在單一知識庫中分隔資料，而不需要複製基礎設施。

Explanation: Metadata 篩選允許你在匯入時用租戶特定的 metadata 標記文件，並在查詢時篩選檢索結果。這在共享知識庫中提供邏輯資料隔離，比為每個租戶建立獨立知識庫更具成本效益且更易管理。

Why others wrong: 為每個客戶建立獨立知識庫無法良好擴展且增加營運負擔；不同的嵌入模型增加複雜性但不解決隔離問題；S3 沒有列級安全性，檢索篩選必須在向量儲存層進行。

Trap: 過度工程化地為每個租戶建立獨立知識庫——metadata 篩選更有效率地實現相同的隔離。

Mnemonic: 多租戶 = Metadata 標籤 + 查詢時篩選 = 邏輯隔離

## Q9
Type: single
Difficulty: 2
Tags: prompt-engineering, few-shot
Concepts: prompt-engineering
Domain: Domain 1 — Foundation Model Integration, Data Management, and Compliance
DomainNumber: 1

一位開發人員希望基礎模型將客服工單分類到不同類別。模型偶爾會錯誤分類模糊的工單。哪種提示工程技術最可靠地提高分類準確度？

A. 增加 temperature 參數以生成更多樣化的輸出
B. 在提示詞中提供 few-shot 範例，展示正確分類的工單，包括邊界案例，以及清晰的輸出格式規範
C. 使用系統提示詞寫「請更準確」
D. 減少 max tokens 參數以強制更短的回應

Answer: B

Hint: 模型從範例中學習模式——向它們展示正確分類的樣子會有幫助。

Explanation: Few-shot 提示為模型提供正確分類輸入的具體範例，幫助它學習分類模式。包含邊界案例能處理模糊的場景，而指定輸出格式確保一致的結構化回應。

Why others wrong: 更高的 temperature 增加隨機性，使分類更不一致；像「更準確」這樣的模糊指令沒有幫助；減少 max tokens 可能截斷有效回應。

Trap: 試圖用 temperature 或模糊指令來提高準確度——結構化的範例對分類任務遠更有效。

Mnemonic: Few-shot = 展示，不只是告訴

## Q10
Type: single
Difficulty: 2
Tags: bedrock-agents, action-groups, lambda
Concepts: bedrock-agents
Domain: Domain 1 — Foundation Model Integration, Data Management, and Compliance
DomainNumber: 1

一位開發人員正在建立一個 Bedrock Agent，需要從內部 API 查詢訂單狀態並在資料庫中更新送貨地址。開發人員應該如何配置 agent 的功能？

A. 將所有 API 邏輯放入系統提示詞中，讓模型以文字形式生成 API 呼叫
B. 使用 OpenAPI schema 定義 action group，描述可用操作，由 AWS Lambda 函數支援以執行實際的 API 呼叫和資料庫更新
C. 在提示詞中給 agent 直接的資料庫憑證
D. 使用單一 Lambda 函數處理所有操作，不定義 action group

Answer: B

Hint: Bedrock Agent 使用 action group 來定義它們可以執行的動作，由 Lambda 處理執行。

Explanation: Bedrock Agent 使用由 OpenAPI schema 定義的 action group 來理解可用的操作。每個 action group 由 Lambda 函數支援，執行實際的業務邏輯。這種分離讓 agent 能推理應該採取哪個動作，而 Lambda 處理安全執行。

Why others wrong: 以文字生成 API 呼叫不可靠且不安全；在提示詞中暴露資料庫憑證是安全風險；沒有 action group 定義，agent 不知道有哪些工具可用或如何正確呼叫它們。

Trap: 跳過 action group 定義——沒有它們，agent 不知道有哪些工具可用或如何正確呼叫它們。

Mnemonic: Agent = 大腦（推理）+ Action Group（肌肉）+ Lambda（執行）

## Q11
Type: single
Difficulty: 3
Tags: rag, evaluation, retrieval-metrics
Concepts: rag-evaluation
Domain: Domain 1 — Foundation Model Integration, Data Management, and Compliance
DomainNumber: 1

一位開發人員注意到他們的 RAG 應用程式有時基於不相關的檢索上下文生成正確答案，而其他時候檢索到相關上下文卻生成不正確的答案。哪種評估方法最能診斷這些各自獨立的故障模式？

A. 只衡量最終答案的端對端準確度
B. 獨立評估檢索品質（上下文相關性、召回率）和生成品質（忠實度、答案正確性），使用獨立的指標，然後關聯故障以識別哪個元件需要改進
C. 增加檢索的分塊數量直到答案改善
D. 換一個不同的基礎模型

Answer: B

Hint: RAG 有兩個元件——檢索和生成——每個都可以獨立失敗。

Explanation: RAG 評估需要對檢索（我們找到相關上下文了嗎？）和生成（模型正確使用上下文了嗎？）使用獨立的指標。獨立衡量兩者可以揭示不佳的答案是源於糟糕的檢索、糟糕的生成還是兩者兼有——從而實現有針對性的修復。

Why others wrong: 端對端指標隱藏了哪個元件失敗；更多分塊可能增加雜訊；切換模型無法修復檢索問題。

Trap: 只衡量最終答案品質——這隱藏了是檢索還是生成步驟失敗，使有針對性的改進變得不可能。

Mnemonic: RAG = Retrieval + Generation；分別評估每個以找到薄弱環節

## Q12
Type: single
Difficulty: 1
Tags: bedrock, streaming, api
Concepts: streaming-response
Domain: Domain 1 — Foundation Model Integration, Data Management, and Compliance
DomainNumber: 1

一位開發人員想即時向使用者顯示基礎模型的回應，類似打字效果。他們應該使用哪個 Bedrock API？

A. 使用輪詢迴圈的 InvokeModel
B. InvokeModelWithResponseStream
C. BatchInvokeModel
D. GetModelInvocationLogging

Answer: B

Hint: API 名稱字面上描述了它的功能——以回應串流方式呼叫。

Explanation: InvokeModelWithResponseStream 以分塊串流的形式回傳模型的回應，允許應用程式在 token 生成時即時顯示給使用者。與等待整個回應完成相比，這創造了更具回應性的使用者體驗。

Why others wrong: InvokeModel 一次回傳完整回應；輪詢會增加不必要的延遲和複雜性；BatchInvokeModel 用於批次處理，不是即時處理；GetModelInvocationLogging 用於稽核日誌。

Trap: 使用 InvokeModel 並在前端模擬串流——這會增加延遲，因為在顯示任何內容之前必須完成完整回應。

Mnemonic: Stream = 邊生成邊顯示；InvokeModelWithResponseStream = 邊想邊打

## Q13
Type: single
Difficulty: 2
Tags: converse-api, multi-turn, tool-use
Concepts: converse-api
Domain: Domain 1 — Foundation Model Integration, Data Management, and Compliance
DomainNumber: 1

一位開發人員正在建立一個多輪對話應用程式，需要與 Bedrock 上不同的基礎模型協作，而不需要為每個模型重寫整合程式碼。他們應該使用哪個 API？

A. 使用模型特定請求格式的 InvokeModel
B. Converse API，它為不同基礎模型的多輪對話提供統一介面
C. 用於對話管理的 Amazon Lex
D. 在模型格式之間轉換的自訂抽象層

Answer: B

Hint: Amazon Bedrock 提供專門為模型無關對話設計的 API。

Explanation: Converse API 為 Bedrock 上的多輪對話提供一致的、模型無關的介面。它統一處理訊息格式化、對話歷史和工具使用，消除了編寫模型特定整合程式碼的需要。

Why others wrong: InvokeModel 需要模型特定的請求/回應格式；Amazon Lex 是建立聊天機器人的獨立服務，不是用於直接基礎模型互動；當 Converse API 已經提供此功能時，自訂抽象層是不必要的。

Trap: 當 Bedrock 已經提供 Converse API 時還建立自訂轉換層——這是典型的重新發明輪子。

Mnemonic: Converse = 一個 API、多個模型、一致的對話

## Q14
Type: single
Difficulty: 3
Tags: knowledge-base, opensearch, indexing
Concepts: vector-store-selection
Domain: Domain 1 — Foundation Model Integration, Data Management, and Compliance
DomainNumber: 1

一家公司的 RAG 應用程式需要儲存 5,000 萬個文件嵌入，具備亞秒級檢索延遲、支援 metadata 篩選，並處理頻繁的文件更新。哪種 Amazon Bedrock Knowledge Bases 的向量儲存配置最能滿足這些需求？

A. Amazon OpenSearch Serverless 搭配向量搜尋集合，使用 HNSW 索引演算法，並將 metadata 欄位對應到可篩選屬性
B. Amazon S3 搭配客戶端向量相似度計算
C. Amazon DynamoDB 搭配向量相似度的排序鍵
D. Amazon RDS PostgreSQL 搭配使用暴力搜尋的 pgvector

Answer: A

Hint: 在 5,000 萬個向量的規模下，你需要一個專門建構的向量搜尋引擎，具備高效的近似最近鄰演算法。

Explanation: OpenSearch Serverless 向量集合支援 HNSW（分層可導航小世界）索引，用於大規模高效的近似最近鄰搜尋。它原生處理 metadata 篩選，可擴展到數百萬向量並保持亞秒級延遲，且支援即時文件更新。

Why others wrong: S3 沒有向量搜尋功能；DynamoDB 原生不支援向量相似度；使用暴力搜尋的 pgvector 在 5,000 萬向量的規模下無法滿足延遲要求。

Trap: 假設任何資料庫都能處理大規模向量搜尋——在 5,000 萬向量的規模下，你需要像 HNSW 這樣的專業索引演算法，而非暴力線性掃描。

Mnemonic: 5,000 萬向量 + 快速 + 篩選 = OpenSearch Serverless + HNSW

## Q15
Type: single
Difficulty: 2
Tags: bedrock, model-access, provisioned-throughput
Concepts: provisioned-throughput
Domain: Domain 1 — Foundation Model Integration, Data Management, and Compliance
DomainNumber: 1

一個使用 Amazon Bedrock 的生產應用程式在尖峰時段遭遇限流，導致延遲增加和請求失敗。應用程式需要一致且可預測的效能。開發人員應該實作什麼？

A. 添加指數退避的重試邏輯，並期望流量減少
B. 為基礎模型購買 Provisioned Throughput，保證專用的模型單元數量，確保不受流量影響的一致效能
C. 切換到較小、較不熱門的模型
D. 將所有可能的回應快取到 DynamoDB 中以避免呼叫 Bedrock

Answer: B

Hint: 隨需使用有共享容量限制；有一種方法可以預留專用容量。

Explanation: Bedrock 中的 Provisioned Throughput 預留專用的模型處理容量（以模型單元衡量），保證一致的推論效能。這消除了在尖峰使用期間因共享隨需容量造成的限流，為生產工作負載提供可預測的延遲。

Why others wrong: 重試增加延遲且不保證吞吐量；切換模型可能降低品質；快取無法覆蓋開放式的生成性回應。

Trap: 對生產應用程式僅依賴重試邏輯——重試處理暫時性錯誤但不解決持續的容量問題。

Mnemonic: Provisioned = 預留座位；On-demand = 候補排隊

## Q16
Type: single
Difficulty: 1
Tags: guardrails, content-filtering
Concepts: bedrock-guardrails
Domain: Domain 1 — Foundation Model Integration, Data Management, and Compliance
DomainNumber: 1

Amazon Bedrock Guardrails 的主要目的是什麼？

A. 提高模型推論的速度
B. 實施安全防護措施，過濾有害內容、阻擋敏感資訊，並對基礎模型的輸入和輸出強制執行主題邊界
C. 降低 API 呼叫的成本
D. 根據使用者回饋自動 fine-tune 模型

Answer: B

Hint: 想想坐落在使用者和模型之間的安全控制。

Explanation: Bedrock Guardrails 作為應用於模型輸入和輸出的可配置安全篩選器。它們可以阻擋有害內容類別、遮蔽個人身份資訊（PII）、強制執行被拒絕的主題，以及應用文字篩選——為模型處理和生成的內容提供治理。

Why others wrong: Guardrails 添加少量處理開銷（不會加速推論）；它們是安全功能，不是成本最佳化工具；它們篩選內容，不重新訓練模型。

Trap: 認為 guardrails 可以取代負責任的提示工程——它們是額外的安全層，而非精心設計提示的替代品。

Mnemonic: Guardrails = AI 高速公路上的安全護欄

## Q17
Type: single
Difficulty: 2
Tags: lambda, bedrock, integration
Concepts: lambda-bedrock-integration
Domain: Domain 2 — Implementation and Integration
DomainNumber: 2

一位開發人員正在實作使用 AWS Lambda 呼叫 Amazon Bedrock 的無伺服器應用程式。Lambda 函數在呼叫大型語言模型時偶爾會逾時。最可能的原因和修復方法是什麼？

A. Lambda 函數的 IAM 角色沒有 Bedrock 權限
B. Lambda 函數的逾時設定對於模型推論時間來說太低了——增加逾時時間並考慮使用串流回應以在生成完成前開始處理輸出
C. Lambda 函數的記憶體太低
D. VPC 配置阻擋了 Bedrock 存取

Answer: B

Hint: 基礎模型可能需要幾秒鐘來生成回應，而 Lambda 有可配置的逾時。

Explanation: LLM 推論根據提示長度、模型大小和輸出長度可能需要 10-60 秒以上。Lambda 的預設逾時是 3 秒，這是不夠的。增加逾時（最多 15 分鐘）並使用串流回應允許在完整回應生成之前開始處理。

Why others wrong: 缺少 IAM 權限會導致存取被拒錯誤，而非逾時；記憶體影響計算能力但主要問題是逾時時長；VPC 問題導致連線錯誤，而非成功連線上的逾時。

Trap: 假設 Lambda 逾時總是由程式碼問題引起——對 LLM 而言，推論時間是瓶頸，而非程式碼執行。

Mnemonic: LLM = Long-running Language Model → Lambda 需要更長的逾時

## Q18
Type: single
Difficulty: 1
Tags: api-gateway, bedrock, architecture
Concepts: api-integration
Domain: Domain 2 — Implementation and Integration
DomainNumber: 2

一位開發人員想將他們的 Bedrock 驅動聊天機器人以 REST API 的形式暴露給行動應用程式。哪種 AWS 架構最適合？

A. 從行動應用程式直接使用嵌入的 AWS 憑證呼叫 Bedrock API
B. Amazon API Gateway 前置 AWS Lambda 函數來呼叫 Bedrock，使用 API 金鑰或 Cognito 認證為行動應用程式
C. 執行代理到 Bedrock 的 EC2 執行個體
D. 搭配直接 Bedrock 資料來源的 AWS AppSync

Answer: B

Hint: 永遠不要在客戶端應用程式中嵌入 AWS 憑證——使用無伺服器後端作為代理。

Explanation: API Gateway + Lambda 提供安全、可擴展的無伺服器架構。API Gateway 處理認證、速率限制和請求路由。Lambda 在伺服器端呼叫 Bedrock，確保 AWS 憑證安全。Cognito 或 API 金鑰認證行動客戶端。

Why others wrong: 在行動應用程式中嵌入憑證是嚴重的安全漏洞；EC2 代理增加不必要的基礎設施管理；AppSync 用於 GraphQL 且沒有原生的 Bedrock 資料來源。

Trap: 為了「簡單」而在行動應用程式中嵌入 AWS 憑證——這是一個嚴重的安全反模式，會暴露你的 AWS 帳號。

Mnemonic: 行動 → API Gateway → Lambda → Bedrock（憑證留在伺服器端）

## Q19
Type: single
Difficulty: 2
Tags: step-functions, orchestration, bedrock
Concepts: workflow-orchestration
Domain: Domain 2 — Implementation and Integration
DomainNumber: 2

一位開發人員需要建立多步驟文件處理管線：從 PDF 擷取文字、摘要、翻譯摘要，然後儲存結果。某些步驟可能失敗且需要重試。哪個 AWS 服務最適合編排此工作流程？

A. Amazon SQS 搭配每個步驟的個別 Lambda 消費者
B. AWS Step Functions 搭配 Bedrock 的最佳化整合，為每個狀態使用重試和錯誤處理配置
C. 一個依序呼叫所有步驟的單一 Lambda 函數
D. Amazon EventBridge 搭配排程規則

Answer: B

Hint: 這是一個需要錯誤處理的多步驟工作流程——有一個 AWS 服務專門為此設計。

Explanation: Step Functions 提供視覺化工作流程編排，具有內建的重試邏輯、錯誤處理和 Bedrock 最佳化整合。每個處理步驟成為工作流程中的一個狀態，具有可配置的重試和備用路徑。這比自訂編排程式碼更易維護和觀察。

Why others wrong: SQS 需要自訂編排邏輯來處理步驟順序；單一 Lambda 在長時間執行的鏈中有逾時風險且沒有每個步驟的內建重試；EventBridge 是事件驅動路由，而非順序工作流程編排。

Trap: 將所有步驟放在一個 Lambda 函數中——這創造了一個難以除錯、沒有每步驟重試且可能對長管線逾時的單體。

Mnemonic: 多步驟 + 重試 + 可見性 = Step Functions

## Q20
Type: single
Difficulty: 3
Tags: bedrock-agents, return-of-control, human-in-the-loop
Concepts: agent-return-of-control
Domain: Domain 2 — Implementation and Integration
DomainNumber: 2

一個 Bedrock Agent 設計用來處理退款請求。公司政策要求超過 500 美元的退款在 agent 執行前需要人類主管批准。開發人員應該如何實作這個需求？

A. 在系統提示詞中添加條件，告訴 agent 不要處理超過 500 美元的退款
B. 啟用 Return of Control（ROC）配置 action group，讓 agent 在偵測到高價值退款時將計劃的動作回傳給應用程式，允許應用程式在繼續執行前實施人類批准步驟
C. 使用另一個 Lambda 函數在 agent 處理後檢查退款金額
D. 設定最大 token 限制以防止 agent 生成退款動作

Answer: B

Hint: Bedrock Agent 支援一種機制，可以暫停並將控制權交回給呼叫的應用程式。

Explanation: Return of Control（ROC）允許 Bedrock Agent 暫停其執行並將計劃的動作回傳給呼叫的應用程式。應用程式隨後可以實施人類批准工作流程，一旦批准，就恢復 agent 的執行。這是人機協作場景的正確模式。

Why others wrong: 基於提示詞的限制不可靠且可以被繞過；執行後檢查意味著退款已經處理了；token 限制與動作執行控制無關。

Trap: 依賴提示指令來強制執行業務規則——提示詞是建議，不是安全控制。使用 Return of Control 來實現可強制執行的業務邏輯。

Mnemonic: ROC = Return Of Control = agent 暫停，人類決定，然後 agent 繼續

## Q21
Type: single
Difficulty: 2
Tags: langchain, bedrock, framework
Concepts: framework-integration
Domain: Domain 2 — Implementation and Integration
DomainNumber: 2

一位開發人員正在使用 LangChain 建立搭配 Amazon Bedrock 的對話式 RAG 應用程式。他們需要在多輪對話中維護對話歷史。哪種方法正確整合了對話記憶？

A. 將整個對話儲存在系統提示詞中，並在每次請求時重新發送
B. 使用 LangChain 的 ConversationBufferMemory 或 ConversationSummaryMemory 搭配 Bedrock LLM，它會自動管理對話歷史並將其注入提示詞
C. 將對話儲存在文字檔中，並在每次請求前讀取
D. 依賴基礎模型原生記住先前的對話輪次

Answer: B

Hint: LangChain 提供專門為管理對話上下文設計的記憶抽象。

Explanation: LangChain 的記憶模組（ConversationBufferMemory、ConversationSummaryMemory 等）處理對話歷史管理。它們在呼叫 Bedrock LLM 時自動將相關歷史注入提示詞，根據需要透過摘要或截斷來管理 token 限制。

Why others wrong: 手動管理系統提示詞不處理 token 限制或摘要；文字檔儲存需要自訂整合程式碼；基礎模型是無狀態的，不會跨 API 呼叫記憶。

Trap: 假設基礎模型會記住先前的對話——每次 API 呼叫都是無狀態的，所以對話歷史必須由應用程式明確管理。

Mnemonic: LLM = 無狀態語言模型 → 記憶必須是外部的

## Q22
Type: single
Difficulty: 2
Tags: sns, sqs, async-invocation
Concepts: async-processing
Domain: Domain 2 — Implementation and Integration
DomainNumber: 2

一位開發人員的 Bedrock 應用程式需要非同步處理大型文件，並在處理完成時通知使用者。每份文件的處理需要 3-5 分鐘。什麼架構最適合處理這個需求？

A. 使用等待處理完成的同步 API Gateway 端點
B. 透過 API Gateway 接受請求，將訊息放入 SQS 佇列，用 Lambda 函數處理並呼叫 Bedrock，並透過 SNS 或 WebSocket 發送完成通知
C. 使用 5 分鐘逾時的 API Gateway
D. 為每份文件啟動一個 EC2 執行個體進行平行處理

Answer: B

Hint: 長時間執行的任務應該非同步處理以避免阻塞客戶端。

Explanation: 此模式將請求接受與處理解耦。SQS 提供可靠的訊息佇列，Lambda 使用 Bedrock 非同步處理文件，SNS（或 WebSocket）在完成時通知使用者。這處理可變的處理時間而不阻塞客戶端。

Why others wrong: 3-5 分鐘等待的同步端點提供糟糕的使用者體驗且有逾時風險；API Gateway 最大逾時為 29 秒；每份文件一個 EC2 浪費且管理複雜。

Trap: 試圖讓同步端點適用於長時間執行的任務——API Gateway 有 29 秒逾時，所以你必須走非同步。

Mnemonic: 長任務 = 排隊（SQS）+ 處理（Lambda）+ 通知（SNS）

## Q23
Type: single
Difficulty: 3
Tags: bedrock-agents, chain-of-thought, orchestration
Concepts: agent-orchestration
Domain: Domain 2 — Implementation and Integration
DomainNumber: 2

一個具有多個 action group 的 Bedrock Agent 對某些查詢選擇了錯誤的 action group，導致不正確的工具呼叫。agent 的指令寫得很好。開發人員應該怎麼做來診斷和修復這個問題？

A. 移除所有 action group，只保留最常用的那個
B. 啟用 agent 的 trace 輸出以檢查思維鏈推理，檢查 action group 描述是否有歧義，在描述中添加更清晰的區分，並考慮在 agent 指令中添加 few-shot 範例
C. 增加 temperature 參數以獲得更多樣化的回應
D. 切換到不同的基礎模型

Answer: B

Hint: Bedrock Agent 透過 trace 暴露其推理過程——用它們來理解為什麼選擇了錯誤的工具。

Explanation: Agent trace 揭示逐步的推理過程，展示為什麼選擇了特定的 action group。通常，不正確的選擇源於模糊或重疊的 action group 描述。檢查 trace 可以識別混淆點，釐清描述並加入不同使用情境即可解決。

Why others wrong: 移除 action group 減少功能；更高的 temperature 增加工具選擇的隨機性；在不理解根本原因的情況下切換模型可能無法修復描述歧義。

Trap: 猜測問題而非檢查 trace——agent 的推理過程通過 trace API 是透明的，所以總是從那裡開始。

Mnemonic: 工具選錯？檢查 Trace → 修復描述 → 再次測試

## Q24
Type: single
Difficulty: 1
Tags: s3, data-source, knowledge-base
Concepts: data-source-configuration
Domain: Domain 2 — Implementation and Integration
DomainNumber: 2

哪些資料來源可以搭配 Amazon Bedrock Knowledge Bases 用於 RAG？（選擇最佳答案。）

A. 只有 Amazon S3
B. Amazon S3、Confluence、SharePoint、Salesforce 和網頁爬蟲，以及其他支援的連接器
C. 只有關聯式資料庫如 RDS 和 DynamoDB
D. 只有儲存在 Amazon Redshift 中的資料

Answer: B

Hint: Bedrock Knowledge Bases 支援多種資料來源類型，不僅僅是 S3。

Explanation: Amazon Bedrock Knowledge Bases 支援多個資料來源連接器，包括 S3（文件）、Confluence（Wiki）、SharePoint（企業文件）、Salesforce（CRM 資料）和網頁爬蟲。這使得 RAG 應用程式能從多元的企業來源存取知識。

Why others wrong: S3 有支援但不是唯一選項；關聯式資料庫和 Redshift 不是 Knowledge Bases 的主要文件來源（雖然資料可以匯出到 S3）。

Trap: 假設 Knowledge Bases 只能搭配 S3——雖然 S3 是最常見的來源，企業連接器將 RAG 延伸到許多資料儲存庫。

Mnemonic: Knowledge Bases = S3 + Confluence + SharePoint + Salesforce + 網頁爬蟲 + 更多

## Q25
Type: single
Difficulty: 2
Tags: dynamodb, session, conversation
Concepts: session-management
Domain: Domain 2 — Implementation and Integration
DomainNumber: 2

一位開發人員正在 Bedrock 上建立多使用者聊天機器人，每個使用者需要跨工作階段的持久對話歷史。哪種方法最適合擴展性地儲存對話歷史？

A. 將對話儲存在 Lambda 環境變數中
B. 使用 Amazon DynamoDB，以使用者 ID 作為分區鍵，工作階段/時間戳記作為排序鍵，將對話訊息儲存為項目，並設定 TTL 自動清理舊對話
C. 將所有對話儲存在 S3 上的單一 JSON 檔案中
D. 僅將對話保存在 Amazon ElastiCache 中

Answer: B

Hint: 你需要持久的、每個使用者的儲存，具有快速讀取和自動清理功能——想想無伺服器資料庫。

Explanation: DynamoDB 提供快速、可擴展的每使用者儲存，具有自然的鍵結構（使用者 ID 分區，時間戳記排序）。TTL 自動清除舊對話，防止儲存無限增長。這種模式廣泛用於無伺服器聊天應用程式。

Why others wrong: Lambda 環境變數大小有限且短暫；單一 S3 檔案造成瓶頸且不支援良好的並行存取；ElastiCache 是易揮發的記憶體，在驅逐或重啟時會遺失資料。

Trap: 使用像 ElastiCache 這樣的記憶體儲存作為主要儲存——它們在重啟時會遺失資料。將它們用作 DynamoDB 前面的快取，而非替代品。

Mnemonic: DynamoDB = 持久、動態、每使用者的對話儲存，搭配 TTL 清理

## Q26
Type: single
Difficulty: 3
Tags: bedrock, parallel-invocation, performance
Concepts: parallel-processing
Domain: Domain 2 — Implementation and Integration
DomainNumber: 2

一位開發人員需要使用 Bedrock 為 10,000 篇文章生成摘要。循序處理會花太長時間。最有效的架構是什麼？

A. 使用單一 Lambda 函數搭配 for 迴圈呼叫 InvokeModel 10,000 次
B. 使用 Step Functions Distributed Map 分散處理，每個分支呼叫一個 Lambda 函數來呼叫 Bedrock，並配置並行限制以避免限流同時最大化吞吐量
C. 使用單一 EC2 執行個體搭配多執行緒
D. 在單一 Bedrock API 呼叫中提交所有 10,000 篇文章

Answer: B

Hint: 高效處理 10,000 個項目需要受控的平行處理和並行管理。

Explanation: Step Functions Distributed Map 透過將工作項目分散到多個 Lambda 呼叫來實現大規模平行處理。並行限制防止 Bedrock 限流同時最大化吞吐量。這種方法是無伺服器的、可擴展的，並為每個項目提供內建的監控和錯誤處理。

Why others wrong: 循序 Lambda 處理太慢且有逾時風險；單一 EC2 執行個體無法匹配平行處理能力；Bedrock API 呼叫一次處理一個提示（批次 API 有限制）。

Trap: 在沒有並行控制的情況下平行化——無限制的並行 Bedrock 呼叫會觸發限流，導致失敗和重試，反而讓一切變慢。

Mnemonic: 10K 項目 = Distributed Map + 並行限制 = 受控的平行處理

## Q27
Type: single
Difficulty: 2
Tags: kms, encryption, bedrock
Concepts: encryption-at-rest
Domain: Domain 2 — Implementation and Integration
DomainNumber: 2

一位開發人員需要使用客戶管理的金鑰加密 Amazon Bedrock 中用於模型自訂的資料。他們應該使用哪個 AWS 服務？

A. AWS Secrets Manager
B. AWS Key Management Service（KMS）搭配客戶管理的金鑰（CMK），在 Bedrock 模型自訂工作設定中配置
C. AWS Certificate Manager
D. Amazon Macie

Answer: B

Hint: 客戶管理的加密金鑰透過一個與大多數 AWS 服務整合的特定 AWS 服務來管理。

Explanation: AWS KMS 客戶管理的金鑰（CMK）為 Bedrock 資源提供客戶控制的加密，包括模型自訂資料、知識庫和 agent 配置。你在建立 Bedrock 資源時指定 KMS 金鑰 ARN，以使用自己的金鑰加密靜態資料。

Why others wrong: Secrets Manager 儲存密鑰，不是靜態資料的加密金鑰；Certificate Manager 管理 SSL/TLS 憑證；Macie 用於敏感資料發現，而非加密。

Trap: 混淆 Secrets Manager（儲存 API 金鑰等密鑰）和 KMS（管理加密金鑰）——它們用途不同。

Mnemonic: KMS = Key Management Service = 你的加密金鑰，你的控制

## Q28
Type: single
Difficulty: 2
Tags: cloudwatch, logging, monitoring
Concepts: model-invocation-logging
Domain: Domain 2 — Implementation and Integration
DomainNumber: 2

一位開發人員需要記錄發送到 Amazon Bedrock 的所有提示詞和回應，用於稽核和除錯目的。他們應該如何配置？

A. 在每個呼叫 Bedrock 的 Lambda 函數中實作自訂日誌記錄
B. 在 Amazon Bedrock 設定中啟用 Model Invocation Logging，它會將輸入/輸出資料發送到 Amazon CloudWatch Logs，並可選擇發送到 S3 儲存桶
C. 使用 AWS CloudTrail，它會自動記錄所有 API 請求和回應內容
D. 設定一個攔截並記錄所有流量的代理層

Answer: B

Hint: Bedrock 有內建的模型輸入輸出記錄功能——不需要自訂程式碼。

Explanation: Model Invocation Logging 是 Bedrock 的原生功能，可以捕捉所有提示詞、模型回應和中繼資料。日誌可以發送到 CloudWatch Logs 進行即時分析或 S3 進行長期歸檔。CloudTrail 記錄 API 呼叫但不記錄請求/回應內容。

Why others wrong: 自訂記錄很脆弱且可能遺漏呼叫；CloudTrail 捕捉 API 中繼資料（誰呼叫了什麼）但不是提示/回應內容；代理層增加複雜性和延遲。

Trap: 假設 CloudTrail 捕捉提示內容——它只記錄 API 呼叫中繼資料（呼叫者、時間戳記、參數），而非實際的模型輸入和輸出。

Mnemonic: CloudTrail = 誰呼叫了什麼；Model Invocation Logging = 說了什麼

## Q29
Type: single
Difficulty: 1
Tags: iam, security, least-privilege
Concepts: iam-bedrock
Domain: Domain 3 — AI Safety, Security, and Governance
DomainNumber: 3

一位開發人員需要授予 Lambda 函數在 Bedrock 上呼叫特定基礎模型的權限。哪個 IAM 政策遵循最小權限原則？

A. 將 AdministratorAccess 受管政策附加到 Lambda 執行角色
B. 建立一個允許對特定模型 ARN（例如 arn:aws:bedrock:us-east-1::foundation-model/anthropic.claude-3-sonnet）進行 bedrock:InvokeModel 的政策
C. 對所有資源允許 bedrock:*
D. 使用 Lambda 函數的預設執行角色，不加任何 Bedrock 權限

Answer: B

Hint: 最小權限意味著只授予所需的特定資源所需的特定權限。

Explanation: 最小權限原則要求只授予所需的最低權限。指定對特定模型 ARN 的 bedrock:InvokeModel 確保 Lambda 函數只能呼叫該特定模型，而不能建立資源、存取其他模型或執行管理動作。

Why others wrong: AdministratorAccess 授予完整的 AWS 帳號存取權；bedrock:* 允許對所有模型進行所有 Bedrock 操作；沒有權限意味著函數根本無法呼叫 Bedrock。

Trap: 為了方便使用萬用字元權限（bedrock:*）——這違反了最小權限，給予了對模型管理、guardrails 和其他 Bedrock 功能的不必要存取權。

Mnemonic: 最小權限 = 特定動作 + 特定資源 ARN

## Q30
Type: single
Difficulty: 2
Tags: guardrails, pii, data-protection
Concepts: pii-redaction
Domain: Domain 3 — AI Safety, Security, and Governance
DomainNumber: 3

一個醫療保健應用程式使用 Bedrock，必須確保患者姓名、出生日期和病歷號碼永遠不會包含在模型回應中。開發人員應該如何實作？

A. 在系統提示詞中添加指令，告訴模型永遠不要輸出 PII
B. 在 Bedrock Guardrails 中配置敏感資訊篩選器，偵測並遮蔽模型輸入和輸出中的 PII 模式，包括姓名、日期和 ID 號碼
C. 使用自訂正規表達式篩選器後處理所有模型回應
D. 使用生成較不詳細回應的較小模型

Answer: B

Hint: Bedrock 透過 Guardrails 內建了 PII 偵測和遮蔽功能。

Explanation: Bedrock Guardrails 包含敏感資訊篩選器，可以偵測並自動遮蔽模型輸入和輸出中的各種 PII 類型（姓名、日期、ID 等）。這提供了一個可靠、可配置的安全層，而無需依賴基於提示的指令或自訂程式碼。

Why others wrong: 提示指令對安全關鍵的 PII 篩選不可靠；自訂正規表達式可能遺漏變體且需要持續維護；較小的模型仍然可以輸出 PII。

Trap: 信任提示指令來處理 PII——模型仍然可以包含 PII 儘管有指令，特別是在複雜場景中。Guardrails 提供強制執行，而非建議。

Mnemonic: PII 保護 = Guardrails（強制執行）> 提示詞（建議）

## Q31
Type: single
Difficulty: 3
Tags: prompt-injection, security, input-validation
Concepts: prompt-injection-defense
Domain: Domain 3 — AI Safety, Security, and Governance
DomainNumber: 3

一位開發人員的 Bedrock 應用程式接受使用者輸入並插入到提示模板中。安全審查發現使用者可能注入覆蓋系統提示詞的指令。哪種防禦組合最能緩解提示注入攻擊？

A. 僅限制輸入長度
B. 實施多層防禦：Bedrock Guardrails 篩選惡意模式、輸入驗證清理使用者輸入、在提示結構中明確區分系統指令和使用者輸入、以及輸出驗證偵測模型偏離預期行為的情況
C. 使用對提示注入免疫的不同基礎模型
D. 加密系統提示詞讓使用者看不到

Answer: B

Hint: 提示注入防禦需要多層——沒有單一技術足夠。

Explanation: 提示注入是一類使用者輸入操縱模型行為的攻擊。防禦需要深度：Guardrails 篩選已知攻擊模式、輸入驗證清理輸入、結構化提示模板區分可信和不可信內容、輸出驗證捕捉意外的模型行為。沒有單一層足夠。

Why others wrong: 長度限制單獨無法防止注入；沒有模型對所有提示注入免疫；隱藏系統提示詞無法防止注入，因為攻擊在使用者輸入中。

Trap: 相信任何單一防禦就足夠——提示注入需要縱深防禦，因為每一層單獨都可能被繞過。

Mnemonic: 提示注入防禦 = 像洋蔥一樣的分層（驗證輸入 + Guardrails + 分離 + 驗證輸出）

## Q32
Type: single
Difficulty: 2
Tags: vpc, privatelink, network-security
Concepts: vpc-endpoint
Domain: Domain 3 — AI Safety, Security, and Governance
DomainNumber: 3

一家公司的安全政策要求到 Amazon Bedrock 的所有流量必須留在 AWS 網路內，永遠不通過公共網際網路。開發人員應該如何配置網路存取？

A. 使用 NAT Gateway 透過 VPC 路由 Bedrock 流量
B. 為 Amazon Bedrock 建立 VPC Interface Endpoint（AWS PrivateLink），透過 AWS 私有網路路由 API 流量而不通過公共網際網路
C. 使用 AWS Direct Connect 建立到 Bedrock 的專用連線
D. 配置安全群組以阻擋公共網際網路存取

Answer: B

Hint: AWS PrivateLink 在 VPC 和 AWS 服務之間建立私有連線。

Explanation: 由 AWS PrivateLink 驅動的 VPC Interface Endpoint 在你的 VPC 和 Bedrock 之間建立私有連線。API 流量通過 AWS 內部網路流動，永遠不會觸及公共網際網路。這滿足了對 AWS 服務私有連線的安全要求。

Why others wrong: NAT Gateway 仍然通過網際網路路由；Direct Connect 用於本地到 AWS 的連線，而非 VPC 到服務；安全群組控制存取但不改變網路路徑。

Trap: 假設 NAT Gateway 提供私有連線——NAT Gateway 為私有子網路啟用網際網路存取，意味著流量仍然通過公共網際網路。

Mnemonic: PrivateLink = VPC 和 AWS 服務之間的私有路徑

## Q33
Type: single
Difficulty: 1
Tags: responsible-ai, bias, fairness
Concepts: responsible-ai
Domain: Domain 3 — AI Safety, Security, and Governance
DomainNumber: 3

一位開發人員正在使用基礎模型建立履歷篩選應用程式。這個使用案例的主要負責任 AI 顧慮是什麼？

A. 模型可能生成回應太慢
B. 模型可能延續或放大其訓練資料中存在的偏見，導致基於性別、種族或年齡等受保護特徵對候選人的不公平歧視
C. 模型可能每份履歷使用太多 token
D. 模型可能用錯誤的語言生成回應

Answer: B

Hint: 想想當 AI 做出影響人們機會的決定時的社會影響。

Explanation: 在歷史資料上訓練的基礎模型可能編碼該資料中存在的偏見。在履歷篩選中，這可能導致對某些人口群體的系統性歧視。這是一個需要仔細偏見測試、監控和人類監督的高風險應用。

Why others wrong: 速度和 token 使用是營運關注點，而非倫理問題；語言問題是本地化問題，而非負責任 AI 關注點。

Trap: 將 AI 偏見視為理論關注——在招聘中，有偏見的 AI 可以造成真實的傷害和法律責任。

Mnemonic: 歷史資料偏見 → AI 放大它們 → 現實世界的歧視

## Q34
Type: single
Difficulty: 2
Tags: cloudtrail, audit, compliance
Concepts: audit-logging
Domain: Domain 3 — AI Safety, Security, and Governance
DomainNumber: 3

一位稽核人員需要知道哪些 IAM 使用者和角色一直在呼叫 Amazon Bedrock 模型、他們何時呼叫，以及從哪些 IP 位址呼叫。哪個 AWS 服務提供這些資訊？

A. Amazon CloudWatch Metrics
B. AWS CloudTrail，它記錄所有 Bedrock API 呼叫，包含呼叫者身份、時間戳記、來源 IP 和請求參數等詳細資訊
C. Amazon Bedrock Model Invocation Logging
D. AWS Config

Answer: B

Hint: 有一個 AWS 服務專門設計用來稽核誰在何時何地對所有 AWS 服務做了什麼。

Explanation: AWS CloudTrail 提供對所有 AWS 服務（包括 Bedrock）的 API 呼叫完整稽核軌跡。每個日誌條目包含 IAM 身份、時間戳記、來源 IP 和請求詳細資訊。這是安全稽核和合規的主要服務。

Why others wrong: CloudWatch Metrics 顯示彙總的效能資料，而非個別 API 呼叫；Model Invocation Logging 捕捉提示/回應內容，而非呼叫者身份；AWS Config 追蹤資源配置變更，而非 API 呼叫。

Trap: 混淆 CloudTrail（誰呼叫了什麼）和 Model Invocation Logging（說了什麼）——稽核人員通常需要前者來進行身份和存取稽核。

Mnemonic: CloudTrail = 偵探軌跡 → 誰、何時、何處、什麼 API

## Q35
Type: single
Difficulty: 3
Tags: model-access, cross-account, organizations
Concepts: cross-account-access
Domain: Domain 3 — AI Safety, Security, and Governance
DomainNumber: 3

一家公司有獨立的 AWS 帳號用於開發、預備和生產環境。他們想確保只有生產帳號可以存取自訂 fine-tuned 模型，而開發和預備帳號只能使用基礎模型。這應該如何實作？

A. 在所有帳號中使用相同的 AWS 憑證
B. 在 AWS Organizations 中實作 Service Control Policies（SCP），在開發/預備帳號中限制 bedrock:InvokeModel 只能存取基礎模型 ARN，而只在生產帳號的 OU 中允許自訂模型存取
C. 手動監控 API 呼叫，如果非生產帳號使用自訂模型則撤銷存取
D. 將自訂模型儲存在只能從生產 VPC 存取的私有 S3 儲存桶中

Answer: B

Hint: AWS Organizations 提供集中化的治理政策，可以跨帳號限制服務和資源。

Explanation: AWS Organizations 中的 Service Control Policies（SCP）提供跨帳號的預防性護欄。透過在開發/預備 OU 中限制自訂模型 ARN，同時在生產 OU 中允許它們，你可以集中化地強制執行模型存取邊界。SCP 在 IAM 政策之前評估，使其成為有效的治理工具。

Why others wrong: 跨帳號共享憑證是安全反模式；手動監控是被動的，而非預防性的；自訂模型不儲存在 S3 中，它們由 Bedrock 管理。

Trap: 僅依賴 IAM 政策——IAM 政策可以被帳號管理員修改。SCP 提供帳號管理員無法覆蓋的組織層級控制。

Mnemonic: SCP = Super Control Policy = 組織層級的存取邊界

## Q36
Type: single
Difficulty: 2
Tags: guardrails, denied-topics, content-policy
Concepts: topic-filtering
Domain: Domain 3 — AI Safety, Security, and Governance
DomainNumber: 3

一個法律服務聊天機器人必須永遠不提供具體的法律建議，只提供一般法律資訊。開發人員應該如何使用 Bedrock Guardrails 配置這一點？

A. 在系統提示詞中添加「不要給法律建議」
B. 在 Bedrock Guardrails 中配置被拒絕的主題，使用描述具體法律建議模式的主題定義（例如「建議特定的法律行動」、「為特定案例解讀法律」），搭配觸發篩選器的範例短語
C. 限制模型的回應長度以防止詳細建議
D. 只使用未在法律資料上訓練的模型

Answer: B

Hint: Bedrock Guardrails 有一個專門用於阻止關於特定主題對話的功能。

Explanation: Guardrails 中的被拒絕主題讓你定義模型應該拒絕參與的主題類別。透過將「具體法律建議」定義為被拒絕主題並搭配代表性的範例短語，guardrail 主動阻止模型提供案例特定的法律建議，同時仍允許一般法律資訊。

Why others wrong: 系統提示指令無法可靠地強制執行；回應長度不決定內容是建議還是資訊；所有通用模型都有一些法律知識。

Trap: 對合規關鍵的限制依賴系統提示——Guardrails 提供可強制執行的主題阻擋，而提示詞是盡力而為。

Mnemonic: 被拒絕的主題 = 硬邊界；系統提示 = 軟建議

## Q37
Type: single
Difficulty: 1
Tags: data-privacy, model-training
Concepts: data-privacy
Domain: Domain 3 — AI Safety, Security, and Governance
DomainNumber: 3

客戶擔心他們發送到 Amazon Bedrock 的資料會被用來訓練基礎模型。AWS 在這方面的政策是什麼？

A. 所有客戶資料預設用於改進基礎模型
B. AWS 不會使用來自 Amazon Bedrock 的客戶輸入或輸出來訓練 AWS 或第三方模型；客戶資料保持私密且不會與模型供應商分享
C. 除非客戶選擇退出，否則資料會用於訓練
D. 只有匿名化的資料會用於訓練

Answer: B

Hint: AWS 對 Bedrock 的客戶資料隱私有明確的承諾。

Explanation: AWS 明確表示通過 Amazon Bedrock 處理的客戶資料不會用於訓練或改進基礎模型——無論是 AWS 自己的還是第三方的模型。客戶內容保持私密並在客戶的控制下，這是企業採用的關鍵差異化因素。

Why others wrong: AWS 不會預設或以其他方式使用 Bedrock 客戶資料進行訓練；不需要選擇退出，因為資料從未被使用；政策不是關於匿名化，而是完全不使用客戶資料進行訓練。

Trap: 將對消費者 AI 產品（可能使用資料進行訓練）的擔憂套用到 AWS 企業服務——AWS 有不同的、更強的資料隱私承諾。

Mnemonic: 你的資料，你的控制——Bedrock 永遠不使用客戶資料進行訓練

## Q38
Type: single
Difficulty: 2
Tags: security, secrets-manager, api-keys
Concepts: secrets-management
Domain: Domain 3 — AI Safety, Security, and Governance
DomainNumber: 3

一個 Bedrock Agent 的 action group 需要呼叫需要 API 金鑰的第三方 API。開發人員應該將這個 API 金鑰儲存在哪裡？

A. 硬編碼在 Lambda 函數程式碼中
B. 儲存在 AWS Secrets Manager 中，並在 Lambda 函數中於執行時檢索，Lambda 執行角色只有存取該特定密鑰的權限
C. 作為明文 Lambda 環境變數傳入
D. 儲存在 action group 的 OpenAPI schema 中

Answer: B

Hint: 敏感憑證永遠不應該硬編碼或以明文儲存——使用專用的密鑰管理服務。

Explanation: AWS Secrets Manager 提供加密的敏感憑證儲存，具有細粒度的 IAM 存取控制、自動輪換功能和稽核日誌。Lambda 函數在執行時檢索密鑰，執行角色限制只能存取所需的密鑰。

Why others wrong: 在程式碼中硬編碼密鑰會在版本控制中暴露它們；明文環境變數在 Lambda 主控台和日誌中可見；OpenAPI schema 定義 API 結構，而非憑證。

Trap: 使用 Lambda 環境變數來存放密鑰——雖然方便，但它們以明文儲存，對任何有 Lambda 主控台存取權的人可見。

Mnemonic: Secrets Manager = 憑證保險庫；環境變數 = 貼在螢幕上的便利貼

## Q39
Type: single
Difficulty: 1
Tags: cost-optimization, model-selection
Concepts: cost-management
Domain: Domain 4 — Operational Efficiency and Optimization
DomainNumber: 4

一位開發人員的 Bedrock 應用程式對所有請求使用大型、昂貴的基礎模型，包括簡單的問題如「你們的營業時間是什麼？」最有效的成本最佳化策略是什麼？

A. 降低所有回應的品質以節省 token
B. 實作智慧路由，將簡單查詢發送到較小、較便宜的模型，將複雜查詢發送到較大的模型，在重要的地方最佳化成本同時維持品質
C. 快取所有可能的回應並永遠不呼叫 Bedrock
D. 為所有回應設定非常低的 max_tokens 限制

Answer: B

Hint: 不是所有查詢都需要相同的模型——將模型能力匹配到查詢複雜度。

Explanation: 智慧模型路由分析傳入的查詢並將它們路由到適當大小的模型。簡單的事實性查詢可以由較便宜、較小的模型以相同品質處理，而複雜的推理任務受益於較大的模型。這可以為混合工作負載減少 50-80% 的成本。

Why others wrong: 降低品質一致地損害使用者體驗；快取無法處理所有可能的查詢；低 token 限制截斷合法回應。

Trap: 對所有事情都使用最強大的模型——就像用半掛卡車去買菜。將車輛匹配到旅程。

Mnemonic: 智慧路由 = 為正確的工作選擇正確的模型 = 省錢不降質

## Q40
Type: single
Difficulty: 2
Tags: caching, prompt-caching, latency
Concepts: prompt-caching
Domain: Domain 4 — Operational Efficiency and Optimization
DomainNumber: 4

一個 RAG 應用程式在每個查詢前都加上一個大型的靜態上下文文件（8,000 token）。這增加了成本和延遲。開發人員如何最佳化？

A. 移除上下文文件以降低成本
B. 使用 Amazon Bedrock prompt caching 來快取靜態上下文前綴，讓後續共享相同前綴的請求只處理新的、可變的部分——降低延遲和成本
C. 在發送前使用 zip 壓縮上下文文件
D. 將文件分割到多個較小的 API 呼叫中

Answer: B

Hint: 如果每次請求都發送相同的大型文字前綴，有一個功能可以避免每次都重新處理它。

Explanation: Bedrock prompt caching 儲存已處理的靜態提示前綴，使它們不需要為每個請求重新編碼。當相同的前綴被重複使用時，只有新的可變部分被處理，大幅降低延遲（避免重新編碼）和成本（快取的 token 更便宜）。

Why others wrong: 移除上下文違背了 RAG 的目的；模型不接受壓縮輸入；分割成多個呼叫增加複雜性且不節省總 token。

Trap: 沒有意識到重複發送相同的 8,000 token 前綴是浪費的——prompt caching 正是為這種場景而存在的。

Mnemonic: 每次都是相同前綴？快取它！付一次，重複使用多次。

## Q41
Type: single
Difficulty: 2
Tags: cloudwatch, metrics, monitoring
Concepts: operational-monitoring
Domain: Domain 4 — Operational Efficiency and Optimization
DomainNumber: 4

一個生產環境的 Bedrock 應用程式需要監控效能下降。對於生成式 AI 應用程式，追蹤哪些 CloudWatch 指標最重要？

A. 只追蹤 S3 儲存桶大小
B. 監控 InvocationLatency（回應時間）、InvocationCount（流量量）、ThrottledCount（容量問題），以及 InputTokenCount/OutputTokenCount（成本和使用模式）
C. 只追蹤 Lambda 執行時長
D. 監控基礎模型的 CPU 使用率

Answer: B

Hint: 追蹤反映使用者體驗（延遲）、容量（限流）和成本（token）的指標。

Explanation: 這些 Bedrock 特定的 CloudWatch 指標提供全面的營運概況：InvocationLatency 揭示效能下降、ThrottledCount 表示容量問題、InvocationCount 追蹤流量模式、token 計數實現成本監控和異常偵測。

Why others wrong: S3 儲存桶大小與模型效能無關；Lambda 時長不捕捉 Bedrock 特定指標；客戶無法看到基礎模型的 CPU——Bedrock 是受管服務。

Trap: 試圖監控基礎模型基礎設施指標——Bedrock 是完全受管的，所以聚焦在服務層級指標如延遲、吞吐量和 token 使用。

Mnemonic: 監控 LITT：Latency、Invocations、Throttles、Tokens

## Q42
Type: single
Difficulty: 3
Tags: cost-optimization, batch-inference
Concepts: batch-processing
Domain: Domain 4 — Operational Efficiency and Optimization
DomainNumber: 4

一家公司需要為目錄中的 100,000 個商品生成產品描述。這些描述不需要即時提供，可以在 24 小時內交付。最具成本效益的方法是什麼？

A. 在單一 Lambda 函數中使用緊密迴圈的 InvokeModel
B. 使用 Amazon Bedrock 批次推論，以比即時推論更低的折扣價格處理大量提示，並將結果交付到 S3 儲存桶
C. 在 SageMaker 上部署自管的 LLM 來完成這個一次性工作
D. 使用 InvokeModelWithResponseStream 進行更快的處理

Answer: B

Hint: 當你不需要即時回應時，有一種更便宜的方式來處理大量請求。

Explanation: Bedrock 批次推論專為大量、非時間敏感的工作負載設計。它以比隨需定價顯著折扣的價格非同步處理提示，將結果輸出到 S3。這對於可接受 24 小時周轉時間的目錄規模內容生成來說是理想的。

Why others wrong: 循序 Lambda 呼叫速度慢且使用昂貴的隨需定價；為一次性工作部署自管模型是過度工程化；串流不降低成本，它只是更快地交付個別回應。

Trap: 對批次工作負載使用即時推論——批次推論專為大量、延遲容忍的工作以較低成本存在。

Mnemonic: 不急？批次處理！相同結果，更低帳單。

## Q43
Type: single
Difficulty: 2
Tags: inference-parameters, temperature, top-p
Concepts: inference-parameters
Domain: Domain 4 — Operational Efficiency and Optimization
DomainNumber: 4

一位開發人員的應用程式使用 Bedrock 處理兩項任務：創意行銷文案生成和發票的結構化資料擷取。他們應該為每項任務使用什麼推論參數設定？

A. 兩項任務使用相同的預設參數
B. 對創意行銷文案使用較高的 temperature（0.7-1.0）和較高的 top-p 以鼓勵多樣化輸出，對資料擷取使用較低的 temperature（0.0-0.2）和較低的 top-p 以最大化確定性和準確度
C. 兩項任務都使用 temperature 0 以確保一致性
D. 兩項任務都使用最大 temperature 以獲得最有創意的回應

Answer: B

Hint: 創意任務受益於隨機性；擷取任務需要精確度。

Explanation: Temperature 和 top-p 控制輸出隨機性。像行銷文案這樣的創意任務受益於引入多樣性和原創性的較高值。資料擷取需要確定性、準確的輸出，所以較低的值減少幻覺並確保模型忠實地擷取結構化資訊。

Why others wrong: 對所有任務使用相同參數忽略了它們的不同需求；所有任務都用 temperature 0 會為創意寫作產生重複、乏味的文案；擷取的最大 temperature 引入錯誤和幻覺。

Trap: 對所有事情都設定 temperature 為 0——雖然這最大化了一致性，但對生成性任務產生無創意、重複的輸出。

Mnemonic: 創意 = 熱（高 temp）；擷取 = 冷（低 temp）

## Q44
Type: single
Difficulty: 3
Tags: latency-optimization, model-distillation
Concepts: model-distillation
Domain: Domain 4 — Operational Efficiency and Optimization
DomainNumber: 4

一位開發人員的 Bedrock 應用程式使用 Claude 3 Sonnet 滿足品質要求，但 p99 延遲為 8 秒，超過了 3 秒的 SLA。切換到較小的模型將品質降到可接受水準以下。開發人員應該考慮什麼最佳化方法？

A. 接受較高的延遲並重新協商 SLA
B. 使用 Amazon Bedrock model distillation 建立一個較小、較快的模型，從較大模型在你的特定使用場景的輸出中學習，在降低延遲的同時維持品質
C. 添加更多重試以降低平均延遲
D. 使用多個區域並路由到最快的那個

Answer: B

Hint: 有一種技術可以建立一個較小的模型，在你的特定任務上模仿較大模型的行為。

Explanation: Model distillation 使用較大的「教師」模型在你的特定使用場景上訓練較小的「學生」模型。學生模型學習教師的行為模式，以顯著降低的延遲和成本產生相似品質的輸出。Bedrock 支援自動化的 distillation 工作流程。

Why others wrong: 接受較高延遲不解決問題；更多重試增加平均延遲；多區域路由幫助可用性，但 p99 延遲是關於模型的生成時間，而非網路路由。

Trap: 認為唯一的選擇是「大而慢」或「小而差」——distillation 為你的特定使用場景建立一個小、快且好的模型。

Mnemonic: Distillation = 大模型教小模型你的特定技巧

## Q45
Type: single
Difficulty: 1
Tags: hallucination, evaluation, output-quality
Concepts: hallucination-detection
Domain: Domain 5 — Testing, Validation, and Troubleshooting
DomainNumber: 5

一位開發人員注意到他們的 Bedrock 驅動問答應用程式有時生成看似合理但在提供的上下文中不存在的事實不正確資訊。這個問題叫什麼，主要的緩解方法是什麼？

A. 模型漂移——定期重新訓練模型
B. 幻覺——透過對照檢索到的上下文驗證模型輸出並使用引用將答案追溯到來源文件來實施接地
C. 過擬合——使用更大的訓練資料集
D. 欠擬合——增加模型大小

Answer: B

Hint: 當模型「編造」資訊時，它正在生成沒有任何提供資料基礎的內容。

Explanation: 幻覺發生在基礎模型生成自信但捏造的資訊時。在 RAG 應用程式中，接地——驗證答案由檢索到的上下文支援並要求引用——是主要的緩解方法。這允許自動檢查和使用者驗證答案來源。

Why others wrong: 模型漂移是隨時間的逐漸退化；過擬合和欠擬合是訓練時的問題，而非生成時的問題。

Trap: 假設模型在「說謊」——幻覺是語言模型生成文字方式的機率性產物，而非故意的捏造。

Mnemonic: 幻覺 = AI「看到」資料中不存在的東西；接地 = 將答案錨定到真實來源

## Q46
Type: single
Difficulty: 2
Tags: testing, evaluation, model-evaluation
Concepts: model-evaluation
Domain: Domain 5 — Testing, Validation, and Troubleshooting
DomainNumber: 5

一位開發人員需要系統性地評估他們的 fine-tuned 模型是否比基礎模型在其特定任務上表現更好。哪種評估方法最嚴謹？

A. 請幾位同事試用兩個模型並分享他們的意見
B. 建立一個包含基準答案的基準資料集，使用自動化指標（準確度、F1、生成任務的 ROUGE/BLEU）和人工評估在相同資料集上評估兩個模型，並對結果進行統計顯著性測試
C. 比較模型的參數數量
D. 檢查哪個模型生成更長的回應

Answer: B

Hint: 嚴謹的評估需要一致的基準、量化指標和統計顯著性。

Explanation: 正確的評估使用包含已知正確答案的保留基準資料集，在兩個模型上應用一致的自動化指標，包含人工評估來捕捉自動化指標遺漏的方面（連貫性、實用性），並使用統計測試來確認差異不是由於隨機變異。

Why others wrong: 軼事回饋不是系統性或可重現的；參數數量不預測特定任務的效能；回應長度不是品質指標。

Trap: 依賴感覺而非資料——「這個模型感覺更好」不是證據。基於基準資料集和指標的系統性評估是必要的。

Mnemonic: 基準 + 指標 + 統計 = 基於證據的模型比較

## Q47
Type: single
Difficulty: 2
Tags: troubleshooting, context-window, truncation
Concepts: context-window-management
Domain: Domain 5 — Testing, Validation, and Troubleshooting
DomainNumber: 5

一個 RAG 應用程式的回應對於檢索許多上下文分塊的複雜查詢突然變得不準確。開發人員懷疑上下文超出了模型的上下文視窗。他們應該如何診斷和修復？

A. 切換到具有無限上下文視窗的模型
B. 監控輸入 token 數量與模型的上下文視窗限制對照，實作上下文摘要或重新排序以在視窗內優先處理最相關的分塊，並在每次呼叫前使用 token 計數以防止靜默截斷
C. 完全移除 RAG 元件
D. 將所有分塊大小減少到 50 token

Answer: B

Hint: 當太多上下文壓垮模型時，解決方案是對要包含的上下文進行選擇。

Explanation: 超出上下文視窗會導致靜默截斷或效能下降。監控 token 數量可以揭示問題。重新排序優先處理最相關的分塊，上下文摘要壓縮較不關鍵的資訊。呼叫前的 token 計數防止超出限制。

Why others wrong: 沒有模型有無限上下文；移除 RAG 移除了知識；極小的分塊失去語義連貫性。

Trap: 假設「更多上下文總是更好」——超出上下文視窗後，額外的上下文會被截斷，而在視窗內，太多雜訊可以降低模型效能（「中間迷失」問題）。

Mnemonic: 上下文視窗 = 有大小限制的行李箱 → 先裝最重要的物品

## Q48
Type: single
Difficulty: 3
Tags: troubleshooting, agent, debugging
Concepts: agent-debugging
Domain: Domain 5 — Testing, Validation, and Troubleshooting
DomainNumber: 5

一個 Bedrock Agent 間歇性地進入無限迴圈，反覆呼叫相同的 action group 而不進展。這個問題發生在某些類型的使用者查詢中。開發人員應該如何診斷和修復？

A. 增加 agent 的最大迭代次數並期望它最終打破迴圈
B. 分析 agent trace 日誌以識別迴圈模式，檢查 action group 的回應格式是否對 agent 不清楚，在 agent 指令中添加明確的停止條件，並配置最大迭代限制作為安全網
C. 刪除並重新建立 agent
D. 切換到不同的基礎模型

Answer: B

Hint: Agent 的推理過程通過 trace 是可見的——看看為什麼它一直選擇相同的動作。

Explanation: Agent 中的無限迴圈通常發生在 action group 的回應沒有清楚向 agent 發出完成信號，導致它重試。Trace 日誌揭示推理模式。修復需要釐清 action group 回應格式、在指令中添加明確的完成信號，以及設定最大迭代限制作為安全防護。

Why others wrong: 在不修復根本原因的情況下增加迭代次數浪費資源；在不理解問題的情況下刪除和重建會重現它；切換模型可能無法解決基本的 action group 回應清晰度問題。

Trap: 在不調查根本原因的情況下增加迭代限制——這只是讓無限迴圈在最終失敗之前運行更久。

Mnemonic: Agent 迴圈？Trace → 找到卡住的邏輯 → 修復退出條件 → 添加安全限制

## Q49
Type: single
Difficulty: 2
Tags: testing, regression, ci-cd
Concepts: regression-testing
Domain: Domain 5 — Testing, Validation, and Troubleshooting
DomainNumber: 5

一位開發人員更新了 Bedrock 應用程式中使用的提示模板。他們應該如何確保更改不會降低回應品質？

A. 手動測試幾個範例，如果看起來好就部署
B. 對包含代表性輸入和預期輸出的回歸測試套件執行更新的提示，將品質指標與基準進行比較，只有在指標達到或超過閾值時才部署
C. 部署到生產環境並監控使用者投訴
D. 對新提示執行拼寫檢查

Answer: B

Hint: 提示更改需要與程式碼更改相同的嚴謹度——對已知基準的自動化測試。

Explanation: 提示更改可能對輸出品質產生微妙、廣泛的影響。包含代表性範例和預期輸出的回歸測試套件在部署前捕捉退化。將自動化指標與基準進行比較確保更改在所有測試場景中維持或改進品質。

Why others wrong: 手動測試不夠全面；部署未測試的更改到生產環境有降低使用者體驗的風險；拼寫檢查不驗證回應品質。

Trap: 將提示視為「只是文字」不需要測試——提示更改是工程更改，可能像程式碼更改一樣嚴重地破壞你的應用程式。

Mnemonic: 提示就是程式碼——像程式碼一樣測試它們（回歸套件 + 指標 + 基準比較）

## Q50
Type: single
Difficulty: 3
Tags: troubleshooting, latency, performance
Concepts: latency-troubleshooting
Domain: Domain 5 — Testing, Validation, and Troubleshooting
DomainNumber: 5

一位開發人員的 RAG 應用程式對大多數查詢具有可接受的延遲，但有間歇性的峰值，回應時間從 2 秒跳到 15 秒。峰值與流量量無關。最可能的原因是什麼，應該如何排查？

A. 網際網路連線不穩定
B. 對每個管線元件（嵌入生成、向量搜尋、上下文組裝、模型呼叫）加入計時指標以隔離哪個步驟造成峰值，檢查 Lambda 函數的冷啟動、Bedrock 或向量儲存的限流，以及影響模型推論時間的可變上下文大小
C. 重啟應用程式伺服器
D. 升級到更貴的支援方案

Answer: B

Hint: RAG 管線中有多個元件，任何一個都可能是瓶頸——你需要每個元件的計時資料。

Explanation: RAG 應用程式中的間歇性延遲峰值可能來自任何管線元件。對每個步驟加入計時指標可以隔離罪魁禍首。常見原因包括 Lambda 冷啟動（閒置後的首次呼叫）、Bedrock 限流（容量限制）、向量儲存查詢峰值，以及影響模型推論時間的可變上下文大小。

Why others wrong: 網路不穩定會均勻影響所有請求；重啟不解決根本原因；支援方案不修復應用程式效能。

Trap: 假設延遲峰值只有單一原因——在多元件管線中，不同的峰值可能有不同的根本原因，所以全面的監測是必要的。

Mnemonic: 峰值追蹤 = 監測每個步驟 → 找到瓶頸 → 修復該元件
