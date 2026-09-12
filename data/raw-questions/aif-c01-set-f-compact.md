# AWS Certified AI Practitioner (AIF-C01) v1.1 模擬考題 65 題（第 2 組）

根據 [quidproquo.cc 的 AIF-C01 備考指南](https://quidproquo.cc/posts/ai/2026-08-18-aws-aif-c01-prep-guide/) 與官方 exam guide v1.1 整理。  
本組題目與第 1 組完全不重複，同樣依 Domain 權重分配，並加強 v1.1 新增考點。

**考試規格**
- 65 題（約 50 題計分）
- 90 分鐘
- 及格 700
- 題型：單選、複選、排序、配對

**Domain 權重**
| Domain | 比重 |
|--------|------|
| 1. Fundamentals of AI and ML | 20% |
| 2. Fundamentals of GenAI | 24% |
| 3. Applications of Foundation Models | 28% |
| 4. Guidelines for Responsible AI | 14% |
| 5. Security, Compliance, and Governance for AI Solutions | 14% |

建議計時 90 分鐘作答一次，再對答案複習。

---

## Domain 1: Fundamentals of AI and ML（約 13 題，20%）

**1.** 下列何者最能區分「監督式學習」與「非監督式學習」？  
A. 監督式學習使用有標籤資料，非監督式學習使用無標籤資料  
B. 監督式學習只能做分類，非監督式只能做回歸  
C. 兩者完全相同  
D. 非監督式學習一定需要 GPU  

**答案：A**

**2.** 公司需要即時偵測信用卡詐欺，最適合的推論類型是？  
A. 即時（real-time）推論  
B. 批次（batch）推論  
C. 非同步推論  
D. 離線訓練  

**答案：A**

**3.** Amazon Comprehend 主要功能是什麼？  
A. 自然語言處理（情感分析、實體辨識、關鍵詞抽取）  
B. 語音合成  
C. 影像分類  
D. 對話機器人  

**答案：A**

**4.** 當模型在訓練資料表現良好，但在新資料表現很差時，這種現象稱為？  
A. 過擬合（overfitting）  
B. 欠擬合（underfitting）  
C. 偏差過高  
D. 方差過低  

**答案：A**

**5.** 下列哪項最能說明「agentic AI」與一般 LLM 的差異？  
A. Agentic AI 能自主規劃、使用工具並完成多步驟任務  
B. Agentic AI 只能回答單句問題  
C. Agentic AI 不需要 prompt  
D. Agentic AI 無法連接外部系統  

**答案：A**

**6.** 在醫療診斷場景中，若「漏診」（假陰性）的代價遠高於「誤診」（假陽性），應優先優化哪個指標？  
A. Recall  
B. Precision  
C. Accuracy  
D. Specificity  

**答案：A**

**7.** Amazon Transcribe 的主要用途是？  
A. 語音轉文字  
B. 文字轉語音  
C. 文字翻譯  
D. 影像辨識  

**答案：A**

**8.** 下列何者屬於「結構化資料」？  
A. 表格形式的客戶交易紀錄  
B. 自由文字客服對話  
C. 未標記的產品圖片  
D. 語音錄音檔  

**答案：A**

**9.** MLOps 的核心目標是什麼？  
A. 讓模型開發、部署、監控與迭代更可靠且可重複  
B. 只負責訓練模型  
C. 只負責資料收集  
D. 完全自動化無需人類介入  

**答案：A**

**10.** 當業務需要「可解釋性高」且「法規要求清楚說明決策原因」時，較可能選擇？  
A. 傳統 ML 模型  
B. 大型基礎模型  
C. 純 RAG 系統  
D. 擴散模型  

**答案：A**（v1.1 新增 1.2.6）

**11.** Amazon SageMaker AI 在 ML lifecycle 中最常扮演的角色是？  
A. 端到端模型建置、訓練、部署與監控平台  
B. 純聊天介面  
C. 純語音服務  
D. 純向量資料庫  

**答案：A**

**12.** F1-score 的計算基礎是？  
A. Precision 與 Recall 的調和平均  
B. 只看 Accuracy  
C. 只看 ROC 曲線下面積  
D. 只看訓練損失  

**答案：A**

**13.** 下列何者最適合用「推薦系統」解決？  
A. 根據用戶過去行為推薦商品或內容  
B. 語音轉文字  
C. 影像生成  
D. 文件翻譯  

**答案：A**

---

## Domain 2: Fundamentals of GenAI（約 16 題，24%）

**14.** 為什麼「context window」大小會影響成本？  
A. 較大的 context window 會消耗更多 token，直接提高費用與延遲  
B. Context window 與成本無關  
C. 較大 window 永遠降低成本  
D. 只影響模型準確率  

**答案：A**（v1.1 新增 2.1.4）

**15.** Context engineering 與傳統 prompt engineering 的主要差異是？  
A. Context engineering 更全面管理 prompt、RAG 結果、歷史對話與系統指令，以優化品質與成本  
B. 兩者完全相同  
C. Context engineering 只處理模型訓練  
D. Context engineering 不考慮成本  

**答案：A**（v1.1 新增 2.1.5）

**16.** 多 agent 系統最常見的溝通模式包含哪些？（複選）  
A. 階層式（hierarchical）  
B. 對等式（peer-to-peer）  
C. 協調者（orchestrator）模式  
D. 只能單向溝通  

**答案：A, B, C**

**17.** MCP（Model Context Protocol）的主要價值是？  
A. 讓 agent 能以標準化方式連接外部工具與系統  
B. 取代所有向量資料庫  
C. 只用於模型微調  
D. 降低模型參數數量  

**答案：A**（v1.1 新增 2.1.6）

**18.** 生成式 AI 產生「看起來合理但事實錯誤」的內容，這種現象稱為？  
A. 幻覺（hallucination）  
B. 過擬合  
C. 欠擬合  
D. 偏差  

**答案：A**

**19.** Embedding 向量最常用來做什麼？  
A. 計算語意相似度，支援檢索與聚類  
B. 直接生成長篇文章  
C. 加密敏感資料  
D. 調整 temperature  

**答案：A**

**20.** 選擇基礎模型時，若業務極度在意「延遲」與「成本」，應優先考慮？  
A. 較小且高效的模型，並搭配 prompt caching 或 RAG  
B. 最大的模型  
C. 必須自行預訓練  
D. 忽略延遲  

**答案：A**

**21.** Amazon Bedrock 與自行在 SageMaker 訓練模型的主要差異是？  
A. Bedrock 提供託管 FM，快速整合且無需管理基礎設施  
B. Bedrock 只能訓練自己的模型  
C. SageMaker 無法部署模型  
D. 兩者完全相同  

**答案：A**

**22.** Strands Agents 主要幫助開發者做什麼？  
A. 建置與編排多 agent 工作流  
B. 純影像生成  
C. 傳統監督式分類  
D. 資料倉儲查詢  

**答案：A**

**23.** Kiro 在 AWS 生態系中較接近哪類工具？  
A. 協助開發者快速建置 AI 應用的開發工具  
B. 純安全掃描工具  
C. 純計價儀表板  
D. 純語音服務  

**答案：A**

**24.** Transformer 架構中「self-attention」的核心作用是？  
A. 讓模型能同時關注輸入序列中不同位置的關係  
B. 只做卷積運算  
C. 只做遞迴運算  
D. 只做規則比對  

**答案：A**

**25.** 在 RAG 流程中，chunking 的目的是？  
A. 將長文件切成適合 embedding 與檢索的適當大小片段  
B. 直接微調模型  
C. 加密文件  
D. 計算 token 費用  

**答案：A**

**26.** 擴散模型（diffusion model）最常應用於？  
A. 圖像生成  
B. 表格資料分類  
C. 時間序列預測  
D. 語音轉文字  

**答案：A**

**27.** FM 生命週期中「評估」階段之後通常是？  
A. 部署與回饋收集  
B. 資料收集  
C. 模型選擇  
D. 預訓練  

**答案：A**

**28.** 多模態模型的優勢是？  
A. 能同時處理文字、圖像、語音等多種輸入形式  
B. 只能處理單一模態  
C. 永遠成本最低  
D. 不需要 token  

**答案：A**

**29.** Amazon SageMaker JumpStart 最主要的價值是？  
A. 提供預訓練模型與解決方案模板，快速開始實驗  
B. 純網路安全工具  
C. 純資料遷移服務  
D. 純計價工具  

**答案：A**

---

## Domain 3: Applications of Foundation Models（約 18 題，28%）

**30.** 在成本敏感且需要最新企業知識的場景，最優先考慮的客製化方式是？  
A. RAG 或 in-context learning  
B. 從頭預訓練  
C. 大規模 fine-tuning  
D. 模型蒸餾後再預訓練  

**答案：A**

**31.** 下列哪種情況較適合使用 fine-tuning？  
A. 需要模型學習特定領域風格或行為，且有足夠高品質標註資料  
B. 只需要查詢最新文件  
C. 完全沒有任何領域資料  
D. 只關心成本最低  

**答案：A**

**32.** Bedrock Knowledge Bases 的主要功能是？  
A. 自動化 RAG 流程（資料擷取、向量化、檢索）  
B. 模型訓練平台  
C. 純語音合成  
D. 網路防火牆  

**答案：A**

**33.** 下列哪些服務可用作向量儲存？（複選）  
A. Amazon OpenSearch Service  
B. Amazon Aurora  
C. Amazon Neptune  
D. Amazon RDS for PostgreSQL  

**答案：A, B, C, D**

**34.** Prompt caching 最直接的效益是？  
A. 降低重複出現的 prompt 部分的 token 成本與延遲  
B. 增加幻覺機率  
C. 強制模型微調  
D. 完全消除所有成本  

**答案：A**

**35.** 將 temperature 調低會產生什麼效果？  
A. 輸出更確定、更保守、更少隨機性  
B. 輸出更隨機、更多樣  
C. 模型停止生成  
D. 成本大幅上升  

**答案：A**

**36.** Chain-of-thought（CoT）prompting 的主要好處是？  
A. 引導模型逐步推理，提升複雜邏輯任務的正確率  
B. 減少所有 token 使用  
C. 完全消除幻覺  
D. 只適用於圖像生成  

**答案：A**

**37.** Few-shot prompting 與 zero-shot 的差異是？  
A. Few-shot 提供少量範例，zero-shot 不提供範例  
B. 兩者完全相同  
C. Zero-shot 提供大量範例  
D. Few-shot 只能用於圖像  

**答案：A**

**38.** Bedrock Prompt Management 最主要的用途是？  
A. 對 prompt 進行版本控制與管理  
B. 模型訓練  
C. 資料加密  
D. 網路設定  

**答案：A**（v1.1 新增 3.2.5）

**39.** 模型蒸餾（distillation）的核心目的是？  
A. 用較大教師模型教導較小學生模型，以降低推論成本並保留能力  
B. 增加模型參數量  
C. 只用於 RAG  
D. 純資料清洗技術  

**答案：A**

**40.** RLHF 的全名是？  
A. Reinforcement Learning from Human Feedback  
B. Random Learning from Human Feedback  
C. Recursive Learning from Human Feedback  
D. Robust Learning from Human Feedback  

**答案：A**

**41.** 評估 RAG 系統品質時，常用的指標/方法包含？（複選）  
A. ROUGE / BLEU / BERTScore  
B. LLM-as-a-judge  
C. Human-in-the-loop  
D. 只看訓練損失  

**答案：A, B, C**

**42.** 業務對齊指標（business-aligned metrics）包含哪些？  
A. 任務完成率、使用者滿意度、每次互動成本  
B. 只看模型參數量  
C. 只看 GPU 使用率  
D. 只看訓練時間  

**答案：A**（v1.1 新增 3.4.5）

**43.** Prompt hijacking 與 jailbreaking 屬於哪類風險？  
A. Prompt 安全風險  
B. 純成本風險  
C. 純延遲風險  
D. 無風險  

**答案：A**

**44.** AI agent 與一般 chatbot 最大的差異是？  
A. Agent 能自主規劃多步驟任務並呼叫外部工具  
B. Agent 只能回答單句問題  
C. Agent 無法連接外部系統  
D. Agent 不需要記憶  

**答案：A**

**45.** 選擇基礎模型時，「輸入/輸出最大長度」主要影響什麼？  
A. Context window 限制與 token 成本  
B. 完全無關  
C. 只影響訓練速度  
D. 只影響安全性  

**答案：A**

**46.** Instruction tuning 屬於哪一種客製化方式？  
A. Fine-tuning 的一種，專門提升模型遵循指令的能力  
B. 純 RAG  
C. 純 in-context learning  
D. 從頭預訓練  

**答案：A**

**47.** 當企業有大量領域特定資料，且希望模型深度理解該領域時，可能考慮？  
A. Continued pre-training 或 domain adaptation  
B. 只使用 zero-shot  
C. 完全不客製化  
D. 只調整 temperature  

**答案：A**

---

## Domain 4: Guidelines for Responsible AI（約 9 題，14%）

**48.** 偏誤（bias）偵測最常使用的 AWS 工具是？  
A. Amazon SageMaker Clarify  
B. Amazon Polly  
C. Amazon Transcribe  
D. Amazon S3  

**答案：A**

**49.** 要過濾有害或敏感內容，最常用的服務是？  
A. Amazon Bedrock Guardrails  
B. Amazon EC2  
C. Amazon RDS  
D. Amazon CloudWatch  

**答案：A**

**50.** 強調「模型決策過程可被人類理解」的原則是？  
A. Explainability / Transparency  
B. 只有 Fairness  
C. 只有 Safety  
D. 無此原則  

**答案：A**

**51.** 欠擬合（underfitting）的典型特徵是？  
A. 模型在訓練資料與測試資料都表現不佳  
B. 訓練資料表現好、測試資料表現差  
C. 只發生在深度學習  
D. 永遠比過擬合好  

**答案：A**

**52.** 負責任 AI 的主要面向包含？（複選）  
A. 公平性（Fairness）  
B. 透明度（Transparency）  
C. 安全性（Safety）  
D. 真實性（Truthfulness）  

**答案：A, B, C, D**

**53.** SageMaker Model Cards 的主要用途是？  
A. 記錄模型資訊、用途、限制與評估結果，提升透明度  
B. 純模型訓練  
C. 純推論加速  
D. 網路設定  

**答案：A**

**54.** 「以人為本」設計強調的重點是？  
A. 提供使用者回饋機制與 AI 決策透明度  
B. 完全自動化、無需人類介入  
C. 隱藏所有決策過程  
D. 只優化速度  

**答案：A**

**55.** 生成式 AI 常見的法律與信任風險包含？  
A. 智慧財產權侵權、偏誤輸出、幻覺導致信任流失  
B. 無任何法律風險  
C. 只有成本風險  
D. 只有延遲風險  

**答案：A**

**56.** 選擇模型時考慮「永續性」是指？  
A. 評估能源消耗與環境影響  
B. 只看準確率  
C. 只看延遲  
D. 完全無關  

**答案：A**

---

## Domain 5: Security, Compliance, and Governance for AI Solutions（約 9 題，14%）

**57.** 幻覺偵測與 grounding 的常見方法包含？（複選）  
A. RAG grounding  
B. 輸出驗證  
C. 信心分數（confidence score）  
D. 只提高 temperature  

**答案：A, B, C**（v1.1 新增 5.1.5）

**58.** Prompt injection 攻擊的本質是？  
A. 透過精心設計的輸入操控模型行為或繞過安全限制  
B. 純網路 DDoS 攻擊  
C. 硬體故障  
D. 無關安全  

**答案：A**

**59.** Bedrock Guardrails 可以套用在哪些模型？  
A. 任何模型端點（不限於 Bedrock 模型）  
B. 只有 Claude  
C. 只有 Titan  
D. 只有開源模型  

**答案：A**

**60.** Generative AI Security Scoping Matrix 是什麼？  
A. AWS 提出的生成式 AI 安全範圍與責任框架  
B. 純計價工具  
C. 向量資料庫  
D. 訓練框架  

**答案：A**

**61.** 資料血緣（data lineage）與 Model Cards 共同支持的目標是？  
A. 治理、可追溯性與合規  
B. 純加速推論  
C. 純降低成本  
D. 無關  

**答案：A**

**62.** 記錄 AI 互動與 API 呼叫的稽核軌跡，常用哪些服務？  
A. AWS CloudTrail 與 Amazon CloudWatch  
B. 只有 Amazon S3  
C. 只有 Amazon EC2  
D. 只有 Amazon Polly  

**答案：A**

**63.** 在 AWS 責任共擔模型中，客戶對於加密的主要責任是？  
A. 正確設定傳輸中與靜態加密，以及金鑰管理  
B. 負責資料中心實體安全  
C. 負責網路骨幹維護  
D. 負責硬體製造  

**答案：A**

**64.** Bedrock AgentCore 的 Identity 與 Policy 功能主要用於？  
A. 管理 agent 的身份驗證與存取控制政策  
B. 純模型訓練  
C. 純向量搜尋  
D. 純計價  

**答案：A**

**65.** 輸出過濾、毒性內容偵測與內容審核最常用的工具是？  
A. Amazon Bedrock Guardrails  
B. Amazon Translate  
C. Amazon Polly  
D. Amazon Lex alone  

**答案：A**

---

## 使用建議

- 第 1 組與第 2 組可交替練習，避免記憶題目本身。
- 優先複習 Domain 2 + 3（合計 52%）。
- 錯題時多問自己「為什麼其他選項不對」，而不是只記正確答案。
- 真實考試有 ordering 與 matching，可自行練習「FM 生命週期順序」與「客製化成本排序」等題型。

祝順利通過考試！
