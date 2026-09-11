# AWS Certified AI Practitioner (AIF-C01) v1.1 模擬考題 65 題

根據 [quidproquo.cc 的 AIF-C01 備考指南](https://quidproquo.cc/posts/ai/2026-08-18-aws-aif-c01-prep-guide/) 與官方 exam guide v1.1 整理。

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

題目依權重分配，並特別涵蓋 v1.1 新增重點（agentic AI、MCP、context engineering、token 計價、幻覺偵測、Bedrock AgentCore、Kiro、Strands Agents、prompt caching、模型蒸餾等）。

建議計時 90 分鐘作答一次，再對答案複習。

---

## Domain 1: Fundamentals of AI and ML（約 13 題，20%）

**1.** 下列何者最能描述 AI、ML、深度學習與 agentic AI 的差異？  
A. AI 包含 ML，ML 包含深度學習，agentic AI 是能自主規劃與使用工具的系統  
B. 深度學習一定是 agentic AI  
C. ML 與 agentic AI 完全相同  
D. AI 只指生成式模型  

**答案：A**  
解析：官方定義強調層級關係與 agentic AI 的自主性與工具使用。

**2.** 在假陰性代價遠高於假陽性的場景（如疾病篩檢），應優先優化哪個指標？  
A. Accuracy  
B. Precision  
C. Recall  
D. F1-score  

**答案：C**  
解析：v1.1 強調 precision 與 recall；高假陰性成本 → 高 recall。

**3.** 公司要將語音轉文字並分析情感，應優先考慮哪些 AWS 託管服務？  
A. Amazon Transcribe + Amazon Comprehend  
B. Amazon Polly + Amazon Lex  
C. Amazon Translate + Amazon Rekognition  
D. Amazon SageMaker AI 自行訓練  

**答案：A**

**4.** 批次推論與即時推論的主要差異是什麼？  
A. 批次適合大量非即時處理，即時適合低延遲需求  
B. 批次一定用 GPU，即時用 CPU  
C. 兩者成本相同  
D. 即時只能用 serverless  

**答案：A**

**5.** 傳統 ML 與基礎模型（FM）的取捨，主要考慮哪些因素？  
A. 法規要求、可解釋性、營運限制  
B. 只看模型大小  
C. 只看訓練時間  
D. 只看準確率  

**答案：A**（v1.1 新增 1.2.6）

**6.** 下列何者屬於非監督式學習常見應用？  
A. 分類已知標籤資料  
B. 聚類未標籤客戶行為  
C. 強化學習遊戲策略  
D. 監督式回歸預測  

**答案：B**

**7.** Amazon Lex 主要解決什麼問題？  
A. 語音轉文字  
B. 對話式介面與聊天機器人  
C. 影像辨識  
D. 文字翻譯  

**答案：B**

**8.** ML pipeline 中「特徵工程」對應的典型 AWS 服務是？  
A. Amazon SageMaker Data Wrangler / Feature Store  
B. Amazon Bedrock  
C. Amazon Q  
D. Amazon Polly  

**答案：A**

**9.** 文字摘要模型品質評估常用哪個指標？  
A. ROUGE  
B. Accuracy  
C. RMSE  
D. AUC  

**答案：A**

**10.** serverless 推論的主要優勢是？  
A. 無需管理基礎設施、按使用計費  
B. 永遠最低延遲  
C. 必須自管模型  
D. 只支援批次  

**答案：A**

**11.** 過擬合（overfitting）的典型特徵是？  
A. 訓練集表現好、測試集表現差  
B. 訓練與測試都差  
C. 只在深度學習發生  
D. 永遠無法避免  

**答案：A**

**12.** Amazon Polly 的主要功能是？  
A. 文字轉語音  
B. 語音轉文字  
C. 自然語言理解  
D. 影像生成  

**答案：A**

**13.** 商業指標中「每使用者成本」最常用來評估什麼？  
A. AI 解決方案的 ROI 與營運成本  
B. 模型準確率  
C. 訓練時間  
D. 資料量  

**答案：A**

---

## Domain 2: Fundamentals of GenAI（約 16 題，24%）

**14.** Token 計價模型如何影響成本與效能？  
A. 輸入/輸出 token 數量直接決定費用，較長 context 增加成本與延遲  
B. Token 數量不影響費用  
C. 只看模型大小  
D. 固定月費  

**答案：A**（v1.1 新增 2.1.4）

**15.** Context engineering 在 FM 應用中的角色是？  
A. 優化輸入 context（包含 prompt、RAG 結果、歷史）以提升輸出品質與控制成本  
B. 只負責模型訓練  
C. 只負責部署  
D. 與 prompt 無關  

**答案：A**（v1.1 新增 2.1.5）

**16.** Agentic AI 的核心特徵包含哪些？（複選）  
A. 多 agent 系統模式  
B. 使用 MCP 連接外部系統  
C. 記憶管理與工具使用  
D. 只能單一模型回答  

**答案：A, B, C**（v1.1 新增 2.1.6）

**17.** MCP 在 agentic AI 中的主要角色是？  
A. 標準化 agent 與外部工具/系統的連接協定  
B. 模型訓練框架  
C. 向量資料庫  
D. 計價模型  

**答案：A**

**18.** 生成式 AI 常見限制包含哪些？  
A. 幻覺、可解釋性不足、不確定性  
B. 永遠 100% 準確  
C. 無成本  
D. 無延遲  

**答案：A**

**19.** Embedding 的主要用途是？  
A. 將文字轉換為語意向量，便於相似度搜尋  
B. 直接生成圖片  
C. 模型微調  
D. 加密資料  

**答案：A**

**20.** 選擇 FM 時應考慮哪些因素？  
A. 成本、延遲、模型複雜度、模態  
B. 只看模型名稱  
C. 只看訓練資料量  
D. 只看開源與否  

**答案：A**

**21.** Amazon Bedrock 的主要優勢是？  
A. 快速整合多種 FM，無需自行管理基礎設施  
B. 必須自己訓練所有模型  
C. 只支援單一模型  
D. 無安全功能  

**答案：A**

**22.** Strands Agents 與 Bedrock AgentCore 主要用於？  
A. 建置與管理 agentic AI 系統  
B. 純影像生成  
C. 傳統監督式學習  
D. 資料倉儲  

**答案：A**

**23.** Kiro 在 AWS GenAI 服務中的定位接近？  
A. 協助開發者建置 AI 應用的工具  
B. 純向量資料庫  
C. 傳統 ML 訓練平台  
D. 語音服務  

**答案：A**

**24.** Transformer 架構的核心機制是？  
A. Self-attention  
B. 僅卷積  
C. 僅 RNN  
D. 僅規則系統  

**答案：A**

**25.** Chunking 在 RAG 或長文件處理中的作用是？  
A. 將文件切成適合 embedding 與檢索的片段  
B. 直接訓練模型  
C. 加密  
D. 計價  

**答案：A**

**26.** 擴散模型主要用於？  
A. 生成圖像等內容  
B. 分類表格資料  
C. 時間序列預測  
D. 推薦系統  

**答案：A**

**27.** FM 生命週期的正確順序大致為？  
A. 資料選擇 → 模型選擇 → 預訓練 → 微調 → 評估 → 部署 → 回饋  
B. 部署 → 訓練 → 資料收集  
C. 只微調即可  
D. 無固定順序  

**答案：A**

**28.** 多模態模型的優勢是？  
A. 能處理文字、影像等多種輸入  
B. 只能處理文字  
C. 只能處理影像  
D. 成本永遠最低  

**答案：A**

**29.** Amazon SageMaker JumpStart 的主要用途是？  
A. 快速啟動預訓練模型與解決方案  
B. 純計價工具  
C. 網路安全  
D. 資料遷移  

**答案：A**

---

## Domain 3: Applications of Foundation Models（約 18 題，28%）

**30.** 四種主要 FM 客製化方式依成本大致排序（由低到高）為？  
A. In-context learning / RAG < Fine-tuning < Continued pre-training / Pre-training  
B. Pre-training 最低成本  
C. Fine-tuning 永遠最便宜  
D. 全部成本相同  

**答案：A**

**31.** 何時優先選擇 RAG 而非 fine-tuning？  
A. 需要最新企業知識、資料經常更新、成本敏感  
B. 需要徹底改變模型行為且資料極多  
C. 法規要求完全可解釋且無外部知識  
D. 永遠 fine-tuning 更好  

**答案：A**

**32.** Bedrock Knowledge Bases 主要解決什麼？  
A. 簡化 RAG 建置（資料來源 → 向量化 → 檢索）  
B. 模型訓練  
C. 純計價  
D. 語音合成  

**答案：A**

**33.** 向量儲存常用 AWS 服務包含？  
A. Amazon OpenSearch Service、Aurora、Neptune、RDS for PostgreSQL  
B. 只有 S3  
C. 只有 EC2  
D. 只有 Lambda  

**答案：A**

**34.** Prompt caching 的主要好處是？  
A. 降低重複 prompt 的成本與延遲  
B. 增加幻覺  
C. 強制微調  
D. 無作用  

**答案：A**

**35.** Temperature 參數調高會導致？  
A. 輸出更隨機、更多樣  
B. 輸出更確定、更保守  
C. 模型停止生成  
D. 成本降低  

**答案：A**

**36.** Chain-of-thought prompting 的作用是？  
A. 引導模型逐步推理，提升複雜任務表現  
B. 減少 token  
C. 強制零樣本  
D. 加密 prompt  

**答案：A**

**37.** Zero-shot、few-shot 的差異是？  
A. Zero-shot 無範例，few-shot 提供少量範例  
B. 完全相同  
C. Few-shot 無範例  
D. 只適用影像  

**答案：A**

**38.** Bedrock Prompt Management 主要用於？  
A. Prompt 版本管理與控制  
B. 模型訓練  
C. 資料加密  
D. 網路設定  

**答案：A**（v1.1 新增 3.2.5）

**39.** 模型蒸餾（model distillation）的目的是？  
A. 用大模型教小模型，降低推論成本同時保留能力  
B. 增加模型大小  
C. 只用於 RAG  
D. 純資料清洗  

**答案：A**

**40.** RLHF 的全名與用途是？  
A. Reinforcement Learning from Human Feedback，用人類偏好微調模型  
B. 純監督式學習  
C. 無監督聚類  
D. 資料增強  

**答案：A**

**41.** 評估 FM 應用（含 RAG、agent）常用方法包含？  
A. Human-in-the-loop、benchmark、Bedrock Model Evaluation、LLM-as-a-judge、ROUGE/BLEU/BERTScore  
B. 只看 accuracy  
C. 只看訓練損失  
D. 無評估需要  

**答案：A**

**42.** 業務對齊指標包含哪些？  
A. 任務完成率、使用者滿意度、每次互動成本  
B. 只看模型參數量  
C. 只看訓練時間  
D. 只看 GPU 使用率  

**答案：A**（v1.1 新增 3.4.5）

**43.** Prompt 風險包含？  
A. 曝露、poisoning、hijacking、jailbreaking  
B. 只有成本  
C. 只有延遲  
D. 無風險  

**答案：A**

**44.** AI agent 在商業應用中的典型角色是？  
A. 自主完成多步驟任務、呼叫工具、與外部系統互動  
B. 只生成單句回答  
C. 只做分類  
D. 只做影像辨識  

**答案：A**

**45.** 選擇 FM 時「輸入輸出長度」影響什麼？  
A. Context window 限制與 token 成本  
B. 無關  
C. 只影響訓練  
D. 只影響安全  

**答案：A**

**46.** Instruction tuning 屬於哪類客製化？  
A. Fine-tuning 的一種，讓模型更好遵循指令  
B. 純 RAG  
C. 純 in-context  
D. 預訓練  

**答案：A**

**47.** 何時可能選擇 continued pre-training？  
A. 需要領域知識大幅注入且有大量領域資料  
B. 只需最新事實且成本敏感  
C. 只需簡單範例  
D. 永遠不需要  

**答案：A**

---

## Domain 4: Guidelines for Responsible AI（約 9 題，14%）

**48.** 偏誤偵測最常使用的 AWS 工具是？  
A. Amazon SageMaker Clarify  
B. Amazon Polly  
C. Amazon Transcribe  
D. Amazon S3  

**答案：A**

**49.** 有害內容過濾最常使用的服務是？  
A. Amazon Bedrock Guardrails  
B. Amazon EC2  
C. Amazon RDS  
D. Amazon CloudWatch  

**答案：A**

**50.** Fairness、Transparency、Explainability、Safety 四原則中，強調「決策可被理解」的是？  
A. Explainability / Transparency  
B. 只有 Safety  
C. 只有 Fairness  
D. 無此原則  

**答案：A**

**51.** 過擬合與欠擬合的差異是？  
A. 過擬合：訓練好、泛化差；欠擬合：訓練與泛化都差  
B. 完全相同  
C. 欠擬合永遠更好  
D. 只發生在 GenAI  

**答案：A**

**52.** 負責任 AI 的面向包含？  
A. 偏誤、公平性、包容性、穩健性、安全、真實性  
B. 只看成本  
C. 只看速度  
D. 只看模型大小  

**答案：A**

**53.** SageMaker Model Cards 主要用於？  
A. 記錄模型資訊以提升透明與可解釋性  
B. 純訓練  
C. 純推論  
D. 網路設定  

**答案：A**

**54.** 以人為本設計的重點包含？  
A. 使用者回饋機制、AI 決策透明度  
B. 完全自動化無人類介入  
C. 隱藏所有決策過程  
D. 只優化速度  

**答案：A**

**55.** GenAI 的法律風險包含？  
A. IP 侵權、偏誤輸出、信任流失、幻覺  
B. 無法律風險  
C. 只有成本風險  
D. 只有延遲風險  

**答案：A**

**56.** 模型選擇的環境與永續考量指的是？  
A. 考慮能源消耗與碳足跡  
B. 只考慮準確率  
C. 只考慮延遲  
D. 無關  

**答案：A**

---

## Domain 5: Security, Compliance, and Governance for AI Solutions（約 9 題，14%）

**57.** 幻覺偵測與 grounding 的方法包含？  
A. RAG grounding、輸出驗證、信心分數  
B. 只增加 temperature  
C. 只減少 token  
D. 無方法  

**答案：A**（v1.1 新增 5.1.5）

**58.** Prompt injection 屬於哪類安全威脅？  
A. 應用安全 / AI 特定威脅  
B. 純網路 DDoS  
C. 純硬體故障  
D. 無關安全  

**答案：A**

**59.** Bedrock Guardrails 可對哪些模型呼叫？  
A. 任何模型端點（不限 Bedrock 模型）  
B. 只有 Claude  
C. 只有 Titan  
D. 只有開源模型  

**答案：A**

**60.** Generative AI Security Scoping Matrix 是？  
A. AWS 提出的 GenAI 安全範圍框架  
B. 純計價工具  
C. 向量資料庫  
D. 訓練框架  

**答案：A**

**61.** 資料血緣（data lineage）與 Model Cards 的用途是？  
A. 追蹤資料來源與模型資訊以支援治理  
B. 純加速推論  
C. 純降低成本  
D. 無關  

**答案：A**

**62.** AI 互動的稽核軌跡與日誌常用哪些服務？  
A. AWS CloudTrail、CloudWatch  
B. 只有 S3  
C. 只有 EC2  
D. 只有 Polly  

**答案：A**

**63.** 傳輸與靜態加密的責任共擔模型中，客戶主要負責？  
A. 正確設定加密與金鑰管理  
B. 硬體實體安全  
C. 資料中心電力  
D. 網路骨幹  

**答案：A**

**64.** Bedrock AgentCore Identity 與 Policy 主要用於？  
A. 管理 agent 的身份與存取控制  
B. 純模型訓練  
C. 純向量搜尋  
D. 純計價  

**答案：A**

**65.** 輸出過濾與驗證、毒性內容偵測常用工具是？  
A. Bedrock Guardrails  
B. Amazon Translate  
C. Amazon Polly  
D. Amazon Lex alone  

**答案：A**

---

## 使用建議

- 依文章建議優先複習 Domain 2 + 3（合計 52%）。
- 錯題請對照官方 exam guide 與文章提到的考生心得（情境判斷 > 死背定義）。
- 多練習「商業情境 → 選服務/技術」與「成本/限制取捨」題型。
- 真實考試有 ordering 與 matching，本模擬以單選/複選為主，可自行延伸練習排序（如 FM 生命週期、客製化成本順序）。

祝順利通過！
