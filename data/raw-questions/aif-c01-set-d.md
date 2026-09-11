# AWS Certified AI Practitioner (AIF-C01) 模擬考題 第一套（65 題完整版）

本模擬考題完全符合 **AWS Certified AI Practitioner (AIF-C01)** 官方考試大綱（v1.1）之領域權重比例，包含 65 題獨家原創單選題、正確答案與詳細解析。

---

## 領域分配說明 (Domain Distribution)

| 領域 (Domain) | 官方權重 (Weight) | 題數 (Questions) | 題號範圍 (Question Range) |
| :--- | :--- | :--- | :--- |
| **Domain 1: Fundamentals of AI and ML** | 20% | 13 題 | Q01 - Q13 |
| **Domain 2: Fundamentals of Generative AI** | 24% | 16 題 | Q14 - Q29 |
| **Domain 3: Applications of Foundation Models** | 28% | 18 題 | Q30 - Q47 |
| **Domain 4: Guidelines for Responsible AI** | 14% | 9 題 | Q48 - Q56 |
| **Domain 5: Security, Compliance, and Governance for AI Solutions** | 14% | 9 題 | Q57 - Q65 |
| **總計 (Total)** | **100%** | **65 題** | **Q01 - Q65** |

---

## Domain 1: Fundamentals of AI and ML (13 題)

### Q01
某物流企業希望建立一個模型，根據歷史訂單的包裹重量、寄送距離與氣候狀況，預估包裹的實際抵達時間（以小時為單位的連續數值）。下列哪一種機器學習範式與任務最適合處理此需求？
- A. 非監督式學習中的降維（Dimensionality Reduction）
- B. 監督式學習中的迴歸（Regression）
- C. 監督式學習中的多元分類（Multiclass Classification）
- D. 強化學習（Reinforcement Learning）

**正確答案**：B  
**詳細解析**：
預測連續型數值（如時間、金額、溫度、重量）屬於**監督式學習（Supervised Learning）**中的**迴歸（Regression）**任務。分類用於預測離散標籤；非監督式學習用於處理未標註資料；強化學習則透過獎懲機制學習策略。

---

### Q02
某資料科學團隊訓練了一個深度神經網路進行影像分類。模型在訓練資料集上取得了 99.5% 的極高準確率，但是在獨立的測試資料集上準確率僅有 61.2%。下列何者是造成此現象的最主要原因，以及最適當的處置策略？
- A. 發生欠擬合（Underfitting）；應增加模型層數或移除正規化機制
- B. 發生過擬合（Overfitting）；應使用正規化（如 Dropout、L2）或進行資料增強（Data Augmentation）
- C. 發生梯度消失（Vanishing Gradient）；應降低學習率（Learning Rate）
- D. 發生概念漂移（Concept Drift）；應重新隨機初始化所有權重

**正確答案**：B  
**詳細解析**：
當模型在訓練集表現優異，但在未見過的測試集表現極差時，為典型的**過擬合（Overfitting / 高變異性 High Variance）**。解決過擬合的方法包含：增加數據量/數據增強、使用正規化（L1/L2、Dropout）、降低模型複雜度或使用早停法（Early Stopping）。

---

### Q03
一家醫療科技公司開發了一個用於診斷罕見疾病的模型。資料集中正樣本（患病）僅占 0.08%。若模型將所有樣本皆預測為「未患病」，準確率（Accuracy）仍可高達 99.92%，但完全無法達到醫療診斷目的。為了確保模型能「盡可能抓出所有真正的患者」，團隊應優先監控下列哪一項評估指標？
- A. 精準率（Precision）
- B. 召回率（Recall）
- C. 均方根誤差（RMSE）
- D. 決定係數（$R^2$ Score）

**正確答案**：B  
**詳細解析**：
**召回率（Recall）** 衡量「所有真實為正例的樣本中，有多少被成功預測為正例」。在漏報代價極高的情境（如罕見疾病診斷、信用卡欺詐偵測），應優先提高 Recall 以減少 False Negative（偽陰性）。

---

### Q04
在特徵工程（Feature Engineering）中，若資料集包含一個名為「顧客居住縣市」的無序類別特徵（如：台北、台中、高雄），最適合將其轉換為機器學習演算法可運算之數值矩陣的方法為何？
- A. 標籤編碼（Label Encoding）
- B. 獨熱編碼（One-Hot Encoding）
- C. 最小-最大正規化（Min-Max Scaling）
- D. Z 軸標準化（Z-Score Normalization）

**正確答案**：B  
**詳細解析**：
**獨熱編碼（One-Hot Encoding）** 將無序類別特徵轉換為獨立的二進位欄位（0 或 1），避免演算法誤將數值大小視為類別間的順序或權重（例如 2 > 1，即台中 > 台北）。標籤編碼（Label Encoding）僅適用於有大小順序的類別（如低、中、高）。

---

### Q05
資料科學家在訓練深度學習模型時，發現損失值（Loss）在更新過程中突然變成 `NaN`。檢查後發現是因為反向傳播時累積的梯度過大，導致權重更新幅度超出數值表達範圍。下列哪一種技術能直接防止此「梯度爆炸（Exploding Gradient）」問題？
- A. 梯度裁剪（Gradient Clipping）
- B. L1 正規化（L1 Regularization）
- C. 增加 Batch Size
- D. 移除所有啟用函數（Activation Functions）

**正確答案**：A  
**詳細解析**：
**梯度裁剪（Gradient Clipping）** 在梯度更新前設定閾值上限，當梯度超過該值時強制將其縮放至安全範圍內，能有效防止梯度爆炸導致的數值溢位（`NaN`）。

---

### Q06
在探索性資料分析（EDA）階段，為了識別多個連續型變數之間是否存在高度多重共線性（Multicollinearity），以便剔除重複資訊，團隊最常繪製下列哪一種視覺化圖表？
- A. 混淆矩陣（Confusion Matrix）
- B. 相關係數熱圖（Correlation Heatmap）
- C. 盒鬚圖（Box Plot）
- D. ROC 曲線（ROC Curve）

**正確答案**：B  
**詳細解析**：
**相關係數熱圖（Correlation Heatmap）** 呈現變數兩兩之間的 Pearson 或 Spearman 相關係數（介於 -1 到 +1），能快速視覺化變數間的線性相關程度，協助團隊剔除多重共線性的特徵。

---

### Q07
Amazon SageMaker 提供多種託管內建演算法。若某電商企業希望對數百萬筆無標籤的用戶點擊流日誌進行分析，自動找出離群的異常點或潛在攻擊流量，應優先選用下列哪一個 SageMaker 內建演算法？
- A. XGBoost
- B. Random Cut Forest (RCF)
- C. Linear Learner
- D. K-Nearest Neighbors (KNN) 分類器

**正確答案**：B  
**詳細解析**：
**Random Cut Forest (RCF)** 是 SageMaker 專門用於非監督式「異常偵測（Anomaly Detection）」的內建演算法，能精確找出高維度動態數據中的離群值（Outliers）。

---

### Q08
關於傳統機器學習（Traditional ML）與深度學習（Deep Learning）的比較，下列敘述何者最為正確？
- A. 傳統機器學習高度依賴領域專家的手動特徵工程，而深度學習能透過多層神經網路自動提取特徵
- B. 深度學習模型在小資料集（Small Datasets）上的效能永遠優於傳統機器學習
- C. 深度學習模型具有極高的可解釋性，適合需要公開邏輯的金融稽核
- D. 傳統機器學習模型完全無法處理結構化表格資料（Tabular Data）

**正確答案**：A  
**詳細解析**：
深度學習的核心優勢在於能從原始非結構化資料（如影像、語音、文本）中自動學習層次化特徵；而傳統機器學習（如隨機森林、XGBoost）高度依賴手動特徵工程，但在結構化表格資料與小樣本量下通常表現極佳且運算成本較低。

---

### Q09
Amazon SageMaker 超參數優化（HPO）能在指定範圍內自動搜尋最佳超參數。相較於隨機搜尋（Random Search）與網格搜尋（Grid Search），SageMaker HPO 預設採用何種更高效的搜尋演算法來選擇下一組評估組合？
- A. 遺傳演算法（Genetic Algorithm）
- B. 貝氏優化（Bayesian Optimization）
- C. 網格格點法（Grid Lattice Method）
- D. 模擬退火法（Simulated Annealing）

**正確答案**：B  
**詳細解析**：
SageMaker 機器學習自動超參數優化（HPO）預設使用**貝氏優化（Bayesian Optimization）**。它建立高斯過程概率模型，根據過往評估結果來預測最有可能取得改善的超參數組合，大幅減少訓練次數與算力成本。

---

### Q10
在計算二元分類模型的評估矩陣時，若 True Positive (TP) = 80，False Positive (FP) = 20，False Negative (FN) = 10，True Negative (TN) = 890。請計算該模型的精準率（Precision）為何？
- A. 80.0%
- B. 88.9%
- C. 89.0%
- D. 90.0%

**正確答案**：A  
**詳細解析**：
精準率（Precision）公式為：
$$\text{Precision} = \frac{TP}{TP + FP} = \frac{80}{80 + 20} = \frac{80}{100} = 0.80 = 80\%$$

---

### Q11
Amazon SageMaker 的哪一個功能模組能夠協助資料科學團隊集中儲存、管理、註冊與共享跨機器學習專案的特徵（Features），並確保線上即時推論與離線批次訓練使用完全一致的特徵值？
- A. SageMaker Data Wrangler
- B. SageMaker Feature Store
- C. SageMaker Model Registry
- D. SageMaker Pipelines

**正確答案**：B  
**詳細解析**：
**Amazon SageMaker Feature Store** 是一個託管的特徵儲存庫，解決了機器學習專案中特徵重複開發與「訓練/推論特徵不一致（Training-Serving Skew）」的核心痛點。

---

### Q12
在訓練機器學習模型時，若模型呈現「高偏差（High Bias）」現象，這通常代表模型的擬合狀態為何？團隊應採取何種改進策略？
- A. 過擬合（Overfitting）；應增加正規化強度或減少特徵數量
- B. 欠擬合（Underfitting）；應增加模型複雜度、降低正規化或引入更多有效特徵
- C. 數據偏移（Data Drift）；應重新進行數據標註
- D. 梯度爆炸（Exploding Gradient）；應調低學習率

**正確答案**：B  
**詳細解析**：
高偏差（High Bias）意味著模型假設過於簡單，無法捕捉數據中的真實規律，即**欠擬合（Underfitting）**。改進策略包含：選擇更複雜的模型、添加特徵欄位或降低正規化懲罰係數。

---

### Q13
在卷積神經網路（CNN）架構中，池化層（Pooling Layer，如 Max Pooling）的主要作用不包含下列哪一項？
- A. 降低特徵圖（Feature Map）的空間維度，減少計算量與記憶體消耗
- B. 提供平移不變性（Translation Invariance）
- C. 透過引入非線性啟用函數（如 Softmax）來計算最終類別機率
- D. 控制模型複雜度，協助減緩過擬合

**正確答案**：C  
**詳細解析**：
池化層主要用於下採樣（Down-sampling），降維並保留主要特徵，同時提供一定的平移不變性。計算最終類別機率通常是全連接層（Fully Connected Layer）與 Softmax 啟用函數的職責，而非池化層。

---

## Domain 2: Fundamentals of Generative AI (16 題)

### Q14
關於 Transformer 架構中的「自注意力機制（Self-Attention Mechanism）」，下列敘述何者最精確地描述了其運作過程與優勢？
- A. 它依序（Sequentially）處理文本，因此運算速度較傳統 RNN 慢，但記憶力更長
- B. 它透過計算 Query (Q)、Key (K) 與 Value (V) 矩陣的點積，允許模型並行（Parallel）計算序列中任意兩個 Token 之間的關聯度
- C. 它僅能處理固定長度的單字，無法進行長文本生成
- D. 它主要依賴卷積核（Convolutional Kernel）來提取影像空間特徵

**正確答案**：B  
**詳細解析**：
自注意力機制（Self-Attention）透過 $Q, K, V$ 矩陣計算全域關注度分數（Attention Scores），打破了 RNN 必須逐字順序處理的限制，大幅提升了並行運算效能並能有效捕捉長距離依賴（Long-range Dependencies）。

---

### Q15
在大語言模型（LLM）的解碼（Decoding）過程與超參數調整中，若開發者將 Top-P（Nucleus Sampling）設定為 0.85，其代表的意義為何？
- A. 模型僅會從機率最高的前 85% 個 Token 中隨機選擇下一個詞
- B. 模型會將累積機率（Cumulative Probability）達到 85% 的最小 Token 集合選出，並僅從該集合中進行採樣
- C. 模型的 Temperature（溫度）會自動被設定為 0.85
- D. 模型每次生成回應有 85% 的機率選擇最高機率的字，15% 選擇隨機字

**正確答案**：B  
**詳細解析**：
**Top-P（核採樣 Nucleus Sampling）** 動態選取候選 Token，將所有 Token 按機率降序排列後，累加機率直到達到閾值 $P$（如 0.85），僅從這個動態集合中採樣。這比固定數量的 Top-K 更靈活。

---

### Q16
某生成式 AI 應用在呼叫 LLM API 時，將 Temperature（溫度）設定為 0.0。這會對模型的輸出行為造成什麼影響？
- A. 輸出隨機性與創造力達到最大化，每次生成的內容均不相同
- B. 模型輸出變得完全確定（Deterministic），等同於貪婪搜尋（Greedy Search），每次選擇機率最高的 Token
- C. 模型會產生嚴重的幻覺（Hallucination）
- D. 模型回應的 Token 數量會自動減少 50%

**正確答案**：B  
**詳細解析**：
當 Temperature = 0 時，採樣的機率分佈會變成極端的「尖峰」，模型每次都會精確選擇機率最高的下一個 Token，輸出變得完全**確定（Deterministic）**，效能等同於 Greedy Search。

---

### Q17
在提示詞工程（Prompt Engineering）中，如果開發者在 Prompt 中提供了一個多步驟邏輯推演的範例（例如：「問題：... 思考步驟：1... 2... 答案：...」），以引導 LLM 在回答新問題時也進行一步步推理。這種技巧稱為：
- A. 零樣本提示（Zero-Shot Prompting）
- B. 少樣本思維鏈提示（Few-Shot Chain-of-Thought Prompting）
- C. 負向提示（Negative Prompting）
- D. 上下文切塊（Context Chunking）

**正確答案**：B  
**詳細解析**：
提供範例屬於 **Few-Shot**；要求並展示一步步推演邏輯屬於 **Chain-of-Thought (CoT)**。結合兩者即為**少樣本思維鏈提示（Few-Shot CoT）**。

---

### Q18
在大語言模型的實際應用中，當傳入的 Context 非常長時，模型往往容易精確記住文本開頭與結尾的資訊，卻忽略位於文本中間段落的關鍵細節。這種現象在學術界與實務上被稱為什麼？
- A. 災難性遺忘（Catastrophic Forgetting）
- B. 中間迷失現象（Lost in the Middle）
- C. 模式崩塌（Mode Collapse）
- D. 梯度消失（Vanishing Gradient）

**正確答案**：B  
**詳細解析**：
**Lost in the Middle（中間迷失）** 是長上下文 LLM 的常見缺陷，LLM 對於放在 Prompt 頂部（Primacy）與尾部（Recency）的資訊檢索能力最強，而中間段落的資訊被提取的成功率會顯著下降。

---

### Q19
在微調（Fine-Tuning）大型語言模型時，採用 LoRA（Low-Rank Adaptation）技術進行微調的主要機制與優勢為何？
- A. 凍結（Freeze）原始模型的所有預訓練權重，僅在注意力層旁插入可訓練的低秩分解矩陣，大幅減少可訓練參數量
- B. 刪除模型中的所有前饋神經網路層，僅保留自注意力層
- C. 將模型的 16-bit 浮點數權重直接剪枝（Prune）掉 90%
- D. 將文字輸入壓縮為語音訊號以節省運算空間

**正確答案**：A  
**詳細解析**：
**LoRA（低秩適應）** 是一種高效參數微調（PEFT）技術。它保持原始模型權重不變（凍結），僅透過外掛的小型低秩矩陣（$A \times B$）進行梯度更新，可將可訓練參數減少 99% 以上，極大降低顯存需求與成本。

---

### Q20
關於大型語言模型（LLM）的預訓練（Pre-Training）與對齊（Alignment，如 RLHF / DPO），下列敘述何者最為正確？
- A. 預訓練使用高品質的人工標註數據；對齊使用未經處理的網頁爬蟲數據
- B. 預訓練使模型學會語意理解與文字續寫能力；對齊使模型行為符合人類的安全性、真實性與指令遵循偏好
- C. DPO（Direct Preference Optimization）比 RLHF 需要額外訓練一個獨立的獎勵模型（Reward Model）
- D. 微調（Fine-Tuning）可以完全取代預訓練，從零建構基礎模型

**正確答案**：B  
**詳細解析**：
預訓練（Pre-training）是在無標註巨量文本上訓練自迴歸模型；而對齊（Alignment）階段（如 RLHF、DPO）則是為了消除模型的有害言論、提升指令遵循能力（Instruction Following），使其輸出安全且符合人類偏好。

---

### Q21
多模態基礎模型（Multimodal Foundation Models，如 OpenAI CLIP 或 Amazon Titan Multimodal Embeddings）之所以能夠同時處理並比對影像與文字，其底層核心機制為何？
- A. 將影像強制轉換為 ASCII 文字後再傳入文字模型
- B. 將影像與文字透過各自的編碼器映射至同一個「共享的多模態嵌入空間（Shared Embedding Space）」以計算相似度
- C. 先使用 OCR 提取所有文字，再丟棄影像數據
- D. 分別訓練兩個完全獨立的模型，並在輸出端進行字串拼接

**正確答案**：B  
**詳細解析**：
多模態模型的關鍵在於**共享嵌入空間（Shared Embedding Space）**。透過對比學習（Contrastive Learning），模型學會將圖像與相對應的文字描述在高維向量空間中拉近距離，實現跨模態檢索與理解。

---

### Q22
在使用生成式 AI 模型生成圖像（如 Stable Diffusion）的過程中，廣泛採用的「擴散模型（Diffusion Models）」其核心反向生成過程（Reverse Process）為何？
- A. 從一張空白圖片開始，使用畫筆演算法逐像素繪製
- B. 從純高斯雜訊（Gaussian Noise）開始，經由神經網路逐步預測並去除雜訊（Denoising），最終還原出清晰圖像
- C. 將多張歷史圖片切碎後重新拼貼
- D. 利用 GAN 的生成器與判別器進行即時博弈

**正確答案**：B  
**詳細解析**：
擴散模型包含前向過程（向圖像逐步添加高斯雜訊）與**反向過程（Reverse Process）**。在生成圖像時，模型從純高斯雜訊出發，根據提示詞引導，經由神經網路一步步預測並剔除雜訊（Denoising）以還原圖像。

---

### Q23
在大語言模型（LLM）呼叫外部 API 時，模型返回了格式錯誤的 JSON（如缺少引號或鍵名不符）。下列何者是解決此「語法結構不穩定」問題的最有效技術手段？
- A. 提高 Temperature 超參數至 1.0
- B. 使用 Structured Outputs / JSON Mode 或 Grammars（語法限制採樣）強制限制解碼過程
- C. 在 Prompt 中重複貼上 10 次格式範例
- D. 將輸入文字改為全大寫

**正確答案**：B  
**詳細解析**：
**Structured Outputs / JSON Mode / Grammars** 在 LLM 生成 Token 的採樣階段進行遮罩（Masking），強制模型只能選取符合指定 JSON Schema 或語法規則的 Token，保證輸出的結構合法性。

---

### Q24
在評估生成式 AI 的文本摘要（Summarization）品質時，ROUGE-L 指標主要是透過計算模型生成摘要與參考標準摘要之間的什麼來進行打分？
- A. 精準率（Precision）的調和平均數
- B. 最長公共子序列（Longest Common Subsequence, LCS）的重疊程度
- C. 向量空間中的歐幾里得距離
- D. 困惑度（Perplexity）

**正確答案**：B  
**詳細解析**：
**ROUGE-L** 中的 "L" 代表 **Longest Common Subsequence（最長公共子序列）**。它評估模型生成的文本與參考文本之間最長保持順序的共同單字序列，能反映句子結構的相似度。

---

### Q25
在使用 Amazon Bedrock 呼叫 Foundation Model 時，關於按 Token 計費模式（On-Demand Pricing）的算式與原則，下列敘述何者最為精確？
- A. 僅針對輸入（Input）Tokens 計費，輸出（Output）Tokens 完全免費
- B. 輸入與輸出 Tokens 計價相同，且僅按字數計算
- C. 分別依據輸入 Tokens 與輸出 Tokens 的數量計費，且通常輸出 Tokens 的單價高於輸入 Tokens
- D. 按 API 呼叫次數固定收費，與 Token 數量無關

**正確答案**：C  
**詳細解析**：
AWS Bedrock 按需（On-Demand）計費方式為：分別計算輸入 Prompt 的 Token 數與模型生成的 Output Token 數。因為生成每一個 Output Token 都需要解碼器進行自迴歸運算，資源消耗更大，因此**輸出 Token 的單價通常顯著高於輸入 Token**。

---

### Q26
在上下文工程與 RAG 系統中，為了防止長文件超過 LLM 的 Context Window 限制，並保持切塊（Chunk）之間的語意連貫性，最常用的文本切分策略為何？
- A. 隨機按字數硬性截斷（Fixed-length Hard Cut）
- B. 滑動窗口切塊與重疊（Sliding Window Chunking with Overlap）
- C. 將整本 PDF 壓縮為 ZIP 後傳入
- D. 僅提取文件的第一頁與最後一頁

**正確答案**：B  
**詳細解析**：
**滑動窗口切塊與重疊（Chunking with Overlap）**（例如：每塊 500 Tokens，區塊間重疊 50 Tokens）能確保切分點邊界處的句子或上下文資訊不會被切斷，避免關鍵資訊在檢索時遺失。

---

### Q27
在評估 Foundation Model 的綜合能力時，MMLU（Massive Multitask Language Understanding）基準測試（Benchmark）主要用於衡量模型的何種能力？
- A. 生成高解析度圖像的色彩飽和度
- B. 跨多學科（人文、社科、STEM、商業等）的綜合知識理解與多選題推理能力
- C. 撰寫 Python 程式碼的語法正確性（HumanEval）
- D. 防禦 Prompt Injection 攻擊的安全防護力

**正確答案**：B  
**詳細解析**：
**MMLU** 涵蓋了從初等數學、歷史、法律到專業醫學等 57 個學科領域的多選題，用於評估模型的通用知識與推理能力。

---

### Q28
在 Prompt 設計中，開發者加入了一段指令：「請將顧客反饋轉換為 JSON 格式。注意：嚴禁包含任何個人可識別資訊（PII），且不得輸出 JSON 以外的任何解釋文字。」這段指令中的「嚴禁包含...不得輸出...」屬於 Prompt 設計中的哪種技巧？
- A. 零樣本提示（Zero-Shot）
- B. 負向限制與邊界條件設定（Negative Constraints / Boundary Setting）
- C. 思維鏈提示（Chain-of-Thought）
- D. 角色扮演（Role-Playing）

**正確答案**：B  
**詳細解析**：
**負向限制（Negative Constraints）** 明確告誡模型「不能做什麼」或「排除哪些內容」，能有效控制模型輸出邊界，減少無效贅述或敏感資訊洩露。

---

### Q29
某 AI 系統在回答特定領域問題時，生成了語氣極其肯定但與事實完全相反的答案。調查後發現是因為 Prompt 中包含了誘導性的錯誤假設（例如：「為什麼太陽是繞著地球轉的？請解釋原因」）。這種現象稱為：
- A. 提示詞偏誤與誘導（Prompt Bias / Priming Effect）
- B. 模式崩塌（Mode Collapse）
- C. 越獄攻擊（Jailbreaking）
- D. 數據漂移（Data Drift）

**正確答案**：A  
**詳細解析**：
**Prompt Priming / Bias（提示詞引導偏誤）** 是指模型容易受到 Prompt 中隱含的偏見、立場或錯誤前提所引導，進而生成順應該錯誤前提的回應。

---

## Domain 3: Applications of Foundation Models (18 題)

### Q30
某企業希望建置內部知識庫問答系統（RAG），將數千份 PDF 政策文件提供給員工查詢。下列何者是 Amazon Bedrock Knowledge Bases 內部整合 RAG 工作流的標準順序？
- A. 模型生成 -> 向量化 -> 文件載入 -> 存入向量資料庫 -> 檢索
- B. 文件載入 -> 文字切塊 (Chunking) -> 向量化 (Embeddings) -> 存入向量資料庫 -> 語意檢索並增強 Prompt -> 模型生成回應
- C. 文字切塊 -> 模型生成 -> 向量化 -> 文件載入
- D. 直接將所有 PDF 文字貼入 Prompt -> 呼叫 API

**正確答案**：B  
**詳細解析**：
託管 RAG（如 Bedrock Knowledge Bases）的標準工作流為：
1. **數據準備**：載入文件 $\rightarrow$ 切塊（Chunking） $\rightarrow$ 透過 Embedding 模型向量化 $\rightarrow$ 寫入向量資料庫（如 OpenSearch Serverless）。
2. **檢索與生成**：用戶提問 $\rightarrow$ 向量檢索相近 Chunk $\rightarrow$ 組合 Prompt $\rightarrow$ LLM 生成精準回答。

---

### Q31
某團隊使用 Amazon Bedrock Knowledge Bases 構建 RAG 系統，遇到專有名詞（如特定的零件 SKU 編號：`XJ-900-AB`）檢索不精準的問題。為了同時兼具「語意理解」與「精確關鍵字比對」，團隊應在 Knowledge Bases 中開啟哪項檢索功能？
- A. 向量搜尋（Vector Search Only）
- B. 混合檢索（Hybrid Search）
- C. 隨機搜尋（Random Search）
- D. 完全比對搜尋（Exact Match Only）

**正確答案**：B  
**詳細解析**：
**混合檢索（Hybrid Search）** 結合了**語意檢索（Vector Search，理解上下文）** 與 **詞法/關鍵字檢索（Lexical/BM25 Search，精確比對專有名詞、SKU）**，能顯著改善單一向量檢索在精確代碼上的短板。

---

### Q32
某公司部署了 LLM 客服應用，使用者反映模型偶爾會生成與輸入檢索文本無關的虛構事實（幻覺）。為了在不變更模型的前提下，即時監控並自動阻斷這類「無事實依據」的輸出，應配置 Amazon Bedrock 的哪項功能？
- A. Bedrock Provisioned Throughput
- B. Bedrock Guardrails 的 Contextual Grounding Check（上下文事實依據檢查）
- C. Bedrock Model Evaluation
- D. AWS CloudTrail Logs

**正確答案**：B  
**詳細解析**：
**Amazon Bedrock Guardrails** 提供 **Contextual Grounding Check（上下文事實依據檢查）**，專為 RAG 架構設計。它會即時評估模型輸出相對於檢索來源的「依據度（Grounding Score）」與「相關性（Relevance Score）」，若低於設定門檻則自動攔截該幻覺回應。

---

### Q33
企業欲建立一個 AI 業務助理，需要自動執行「1. 查詢 ERP 庫存 $\rightarrow$ 2. 計算折扣 $\rightarrow$ 3. 呼叫 SES 發送 Email」的三步驟自動化工作流。在 Amazon Bedrock 中，最適合用來編排並自動化執行此類多步驟任務的功能為何？
- A. Amazon Bedrock Knowledge Bases
- B. Amazon Bedrock Agents
- C. Amazon SageMaker Data Wrangler
- D. Amazon Bedrock Guardrails

**正確答案**：B  
**詳細解析**：
**Amazon Bedrock Agents** 能夠理解用戶意圖，將複雜任務分解為多個步驟，動態調用 AWS Lambda 函數或 API 介面執行動作（Action Groups），並自動結合知識庫進行推理與回應。

---

### Q34
在 Generative AI 架構與 Agent 開發中，開放標準協議 **Model Context Protocol (MCP)** 的主要創立宗旨與核心價值是什麼？
- A. 替代 HTTP 協議以加密圖像傳輸
- B. 提供統一且標準化的開放介面，讓 AI 模型與 Agent 能無縫、安全地連接各式資料源（Data Sources）與工具（Tools）
- C. 自動將所有 LLM 模型壓縮為 4-bit 量化版本
- D. 專門用於計算 AWS 帳單費用的協議

**正確答案**：B  
**詳細解析**：
**Model Context Protocol (MCP)** 是一個開放標準，解決了傳統 AI 應用中每個模型/Agent 都需要為不同資料庫或 API 寫死（Hardcode）自訂連接器的問題，實現了工具與數據源的通用 plug-and-play 連接。

---

### Q35
某大型企業希望將 Amazon Bedrock 的 LLM 整合至其核心交易系統中，要求回應延遲必須極度穩定且具備高可用性保障，即使在 AWS 高峰流量期間也不得因配額限制而被拒絕服務。該公司應選擇何種 Bedrock 部署與消費模式？
- A. 按需模式（On-Demand）
- B. 預置吞吞量（Provisioned Throughput）
- C. 批次推論模式（Batch Inference）
- D. 搶佔式實體模式（Spot Instances）

**正確答案**：B  
**詳細解析**：
**預置吞吐量（Provisioned Throughput）** 允許企業為特定模型預留專屬的模型單元（Model Units），保證足夠的算力與穩定的低延遲 SLA，不會受公共按需池的流量波動影響。

---

### Q36
一家物流企業希望利用生成式 AI 自動處理客戶的理賠申請。由於涉及金額發放，系統設計要求：當 AI Agent 判定理賠金額超過 $500 美元時，系統必須暫停自動化流程，並通知人工主管審核後方可撥款。這屬於下列哪種 AI 架構模式？
- A. 全自動自治代理（Fully Autonomous Agent）
- B. 人機協同（Human-in-the-Loop, HITL）
- C. 檢索增強生成（RAG）
- D. 邊緣計算推論（Edge Inference）

**正確答案**：B  
**詳細解析**：
**人機協同（Human-in-the-Loop, HITL）** 模式在關鍵或高風險決策點引入人工審核與確認機制，既發揮了 AI 的自動化效率，又保留了人類的最終控制權與責任把關。

---

### Q37
在使用 LLM-as-a-Judge（以強大 LLM 作為裁判）評估另一個目標 LLM 生成回應的品質時，裁判模型往往會表現出「位置偏誤（Position Bias）」，即傾向於給第一個出現的選項打較高分。為了減輕這種偏誤，評估架構應採用何種設計？
- A. 限制裁判模型只能輸出 0 分或 100 分
- B. 對調候選回應的對比顯示順序（A/B 與 B/A），進行雙向評分並取平均值
- C. 將 Temperature 設定為 2.0
- D. 永遠只提供一個候選回應

**正確答案**：B  
**詳細解析**：
**位置偏誤（Position Bias）** 是 LLM 作為裁判時的常見偏差。最佳實踐是**交換候選回應的順序（Swap Order）**多次評估並採計綜合分數，以抵消模型對特定位置的偏好。

---

### Q38
Amazon SageMaker JumpStart 為企業開發者提供了什麼主要價值與功能？
- A. 自動將所有 Python 程式碼轉換為 C++ 以提升速度
- B. 提供包含預訓練開源模型與專有基礎模型的 ML Hub，支援一鍵部署、評估與微調
- C. 自動幫企業撰寫專利申請書
- D. 替代 AWS IAM 進行用戶權限管理

**正確答案**：B  
**詳細解析**：
**SageMaker JumpStart** 是一個機器學習 Hub，提供了數百種預訓練模型（如 Llama、Falcon、Stable Diffusion 等）、內建演算法與端到端解決方案範本，開發者只需點擊幾下即可完成部署、微調與評估。

---

### Q39
在 Amazon Bedrock 中，若企業使用專屬的領域數據對基礎模型進行微調（Fine-Tuning），微調後產生的專屬模型權重儲存在何處？其安全性如何保障？
- A. 儲存在公共 Bedrock 模型庫中供所有 AWS 客戶共享
- B. 儲存在客戶專屬且隔離的 AWS 帳戶環境中，絕不會合併至公共基礎模型，亦不會用於訓練第三方模型
- C. 儲存在託管的 S3 公開 Bucket 中
- D. 微調結束後權重會被自動刪除，僅保留日誌

**正確答案**：B  
**詳細解析**：
AWS 承諾，在 Bedrock 中進行微調產生的自訂模型權重完全歸客戶所有，**安全隔離在客戶的 VPC/帳戶環境中**，AWS 絕不會使用客戶的數據或微調模型來訓練公共基礎模型。

---

### Q40
某公司欲將舊有的關鍵字搜尋引擎升級為支援「語意搜尋（Semantic Search）」的現代化架構。在將文字傳入向量資料庫之前，必須使用哪一種 Bedrock 模型來生成高維度向量？
- A. 大語言模型（LLM，如 Anthropic Claude）
- B. 文字嵌入模型（Text Embedding Model，如 Amazon Titan Text Embeddings）
- C. 圖像生成模型（Image Generation Model，如 Stable Diffusion）
- D. 語音轉文字模型（Speech-to-Text Model，如 Amazon Transcribe）

**正確答案**：B  
**詳細解析**：
**文字嵌入模型（Text Embedding Model）** 將任意長度的文本段落轉換為固定維度的浮點數向量（Vector Embeddings），精確捕捉文字背後的語意概念，這是語意搜尋與 RAG 的基礎。

---

### Q41
在對 LLM 進行「Context Engineering（上下文工程）」時，開發者將系統指令（System Instruction）、歷史對話（Chat History）、檢索文檔（RAG Chunks）與動態工具定義（Tools Schema）進行結構化組合。這樣做的主要目的是什麼？
- A. 增加 API 的 Token 消費以提升點擊率
- B. 提供最優化的輸入上下文結構，最大化 LLM 推理精準度並精確控制模型行為與輸出格式
- C. 自動微調底層模型的權重
- D. 繞過安全護欄（Guardrails）的審查

**正確答案**：B  
**詳細解析**：
**Context Engineering** 關注於如何高效率、結構化地設計與動態組裝輸入給 LLM 的上下文（Context），以引導模型做出精確、符合預期且不產生幻覺的回應。

---

### Q42
多 Agent 架構（Multi-Agent Architecture）相較於單一大型 Agent（Single Agent），在處理複雜企業工作流時的主要優勢是什麼？
- A. 能夠將複雜問題解構為專業化分工的子任務（例如專職檢索、專職審查、專職寫作），提升系統的可靠性與模組化維護性
- B. 消耗的 Token 數量永遠低於單一 Agent
- C. 不需要任何 LLM 支援即可自動運行
- D. 能夠完全消除 API 網路延遲

**正確答案**：A  
**詳細解析**：
**多 Agent 架構** 採用分工合作原則，讓每個 Agent 專注於單一領域（如專門寫 SQL、專門檢查合規性），能有效降低單一 Agent 在長流程中迷失或邏輯混亂的風險。

---

### Q43
某公司欲將掃描版 PDF 格式的歷史病歷轉換為 RAG 系統可讀取的文字數據。在將這些文件傳送給 Embedding 模型之前，必須先經過哪種技術處理？
- A. 語音合成（TTS）
- B. 光學字元辨識（OCR，如 Amazon Textract）
- C. 機器翻譯（Machine Translation）
- D. 數據去標識化（Anonymization）

**正確答案**：B  
**詳細解析**：
掃描版 PDF 實質上是圖像，Embedding 模型無法直接處理圖像中的文字。必須先使用 **OCR（光學字元辨識）** 技術（如 **Amazon Textract**）將圖像中的文字與結構提取為純文字格式。

---

### Q44
在評估生成式 AI 模型於機器翻譯（Machine Translation）任務中的表現時，BLEU（Bilingual Evaluation Understudy）指標主要測量的是什麼？
- A. 模型的推論速度與吞吐量
- B. 生成譯文與參考標準譯文（Human Reference）之間的 n-gram 精準率（Precision）與短句懲罰
- C. 模型消耗的記憶體大小
- D. 譯文的情感傾向（Sentiment Analysis）

**正確答案**：B  
**詳細解析**：
**BLEU** 是機器翻譯的經典評估指標，主要通過計算模型生成譯文與標準人工譯文之間 $n$-gram 的重疊精準率，並加入過短譯文懲罰（Brevity Penalty）。

---

### Q45
某企業開發者希望在 Amazon Bedrock 中自動評估多個基礎模型在「文本摘要」任務上的表現，並比較自動化指標（如 ROUGE、Toxicity）。他應該使用 Bedrock 的哪項託管功能？
- A. Bedrock Model Evaluation
- B. Bedrock Guardrails
- C. SageMaker Pipelines
- D. AWS Cost Explorer

**正確答案**：A  
**詳細解析**：
**Amazon Bedrock Model Evaluation** 提供託管的模型評估服務，支援使用內建或自訂數據集，透過自動化指標或引入人工評估員來比較不同模型的效能、精準度與安全性。

---

### Q46
關於 Prompt Engineering 中的「Context Stuffing（上下文填塞）」現象，其帶來的負面影響不包含下列何者？
- A. 顯著增加 API 呼叫的成本與回應延遲
- B. 可能引發「Lost in the Middle」現象，導致關鍵資訊被模型忽略
- C. 會強制提升模型微調時的權重精度
- D. 可能超過模型的 Context Window 上限而導致請求被拒絕

**正確答案**：C  
**詳細解析**：
Context Stuffing 指盲目地將大量未經篩選的文本全部塞入 Prompt 中。這會導致成本上升、延遲增加、超出 Context 限制以及資訊迷失，但**不會**影響模型微調時的權重精度。

---

### Q47
在 Amazon Bedrock 中，若業務團隊需要對基礎模型進行短期的高併發測試，但不想支付昂貴的 Provisioned Throughput 長期合約，且對回應延遲要求較為彈性，應選擇哪種收費與部署選項？
- A. 按需模式（On-Demand）
- B. 預置吞吐量 1 年期合約
- C. 預置吞吐量 3 年期合約
- D. 購買 SageMaker 儲備執行個體（Reserved Instances）

**正確答案**：A  
**詳細解析**：
**按需模式（On-Demand）** 按實際處理的 Token 數量付費，無須預付費用或簽署長期合約，非常適合開發測試、原型設計或流量不固定且具備彈性的情境。

---

## Domain 4: Guidelines for Responsible AI (9 題)

### Q48
某銀行開發了一個基於機器學習的自動貸款審核系統。在營運稽核時發現，在申請人財務狀況完全相同的情況下，系統給予男性申請人的核貸率顯著高於女性申請人。這違反了負責任 AI（Responsible AI）中的哪一項核心原則？
- A. 透明度（Transparency）
- B. 公平性與偏見緩解（Fairness and Bias Mitigation）
- C. 穩健性（Robustness）
- D. 永續性（Sustainability）

**正確答案**：B  
**詳細解析**：
**公平性（Fairness）** 原則要求 AI 系統對不同人口統計群體（如性別、種族、年齡）應給予無偏見的公正對待，避免產生歧視性結果。

---

### Q49
在高度監管的行業（如金融貸款與醫療診斷）中，負責任 AI 要求的「可解釋性（Explainability）」主要宗旨為何？
- A. 確保模型的程式碼完全開源
- B. 能夠向利益相關者與監管機構解釋模型為何做出特定決策，以及各項輸入特徵對最終預測結果的影響程度
- C. 確保 AI 模型生成的文字完全沒有語法錯誤
- D. 證明 AI 模型永遠不會犯錯

**正確答案**：B  
**詳細解析**：
**可解釋性（Explainability）** 旨在打破黑盒子模型，透過技術手段（如 SHAP、LIME 值）說明特定決策背後的原因與特徵貢獻度，確保決策過程可被審查與理解。

---

### Q50
為了評估生成式 AI 應用在面對惡意攻擊者時的安全性與邊界防禦能力，企業聘請資安團隊扮演對手，模擬各種極端攻擊手段（如 Prompt Injection、Jailbreaking），以尋找系統漏洞。這種安全測試方法稱為：
- A. 單元測試（Unit Testing）
- B. 紅隊演練（Red Teaming）
- C. A/B 測試（A/B Testing）
- D. 迴歸測試（Regression Testing）

**正確答案**：B  
**詳細解析**：
**紅隊演練（Red Teaming）** 是評估 LLM 安全性的標準做法。透過模擬真實攻擊者的對抗性輸入（Adversarial Testing），找出模型可能輸出有害內容或洩漏隱私的破綻。

---

### Q51
在 Responsible AI 框架中，問責制（Accountability）明確規定了當 AI 系統發生嚴重決策錯誤或造成法律損害時，最終的法律與倫理責任由誰承擔？
- A. AI 模型本身（例如 LLM 演算法）
- B. 開發、部署與營運該 AI 系統的企業與團隊
- C. 提供基礎算力的雲端服務廠商（如 AWS）
- D. 數據集中被採樣的匿名用戶

**正確答案**：B  
**詳細解析**：
AI 系統是工具，不具備法律主體資格。**問責制（Accountability）** 規定最終責任永遠由開發、部署與運營該 AI 產品的企業與個人承擔。

---

### Q52
某醫療生成式 AI 助理在提供臨床建議時，會在介面上清楚列出該建議所參考的具體醫學指南文檔與頁碼，以便醫師進行核對。這主要體現了責任 AI 原則中的哪兩項要素？
- A. 速度與低成本
- B. 透明度（Transparency）與可追溯性（Traceability）
- C. 模式崩塌與高維度
- D. 無限制性與隱密性

**正確答案**：B  
**詳細解析**：
標註資訊來源與參考出處（Citations），體現了系統的**透明度（Transparency）** 與 **可追溯性（Traceability）**，能大幅提升用戶對 AI 回應的信任度與可審查性。

---

### Q53
在 Responsible AI 的「包容性（Inclusivity）」原則引導下，產品團隊在開發面向全球用戶的 AI 語音助理時，應優先考量下列何者？
- A. 僅支援標準美式英語以降低開發成本
- B. 支援多元方言、口音、語音速率，並確保身心障礙者輔助工具（如螢幕閱讀器）的無障礙相容性
- C. 將所有語音採樣壓縮為 8-bit 品質
- D. 僅允許付費用戶使用語音功能

**正確答案**：B  
**詳細解析**：
**包容性（Inclusivity）** 要求 AI 產品設計應考量不同背景、能力、語言與身心狀況的廣大用戶群體（無障礙設計 Accessibility），確保人人皆能平等享有 AI 技術帶來的便利。

---

### Q54
關於生成式 AI 中的「智慧財產權（Intellectual Property, IP）」與合規風險，下列何者是企業使用 Foundation Model 時最常面臨的法律隱憂？
- A. 模型運算消耗過多電力
- B. 模型的預訓練資料庫中可能未經授權包含了受版權保護的作品，導致生成輸出面臨侵權訴訟風險
- C. 模型的推論速度太快
- D. 模型無法在本地離線運行

**正確答案**：B  
**詳細解析**：
生成式 AI 模型的 IP 風險主要源於**預訓練數據的版權爭議**（例如數據集包含未授權版權圖片或文字），企業在使用生成的內容時，可能面臨第三方版權侵權訴訟（Copyright Infringement）的風險。

---

### Q55
在訓練數據收集階段，若數據集中嚴重缺乏特定少數族群的樣本，這最有可能導致模型產生何種問題？
- A. 數據漂移（Data Drift）
- B. 代表性偏差（Representational Bias），導致模型對少數族群的預測準確率顯著偏低
- C. 梯度爆炸（Exploding Gradient）
- D. 記憶體溢位（Out of Memory）

**正確答案**：B  
**詳細解析**：
當訓練數據未能真實反映現實世界的人口統計分佈時，會產生**代表性偏差（Representational Bias）**，導致模型在次要群體（Underrepresented Groups）上的效能顯著差於主要群體。

---

### Q56
Amazon SageMaker Clarify 服務在責任 AI 實踐中，主要提供哪兩項關鍵功能？
- A. 自動發放 AWS 優惠券與費用控管
- B. 數據與模型的偏差檢測（Bias Detection）以及模型決策的可解釋性分析（Explainability，計算 SHAP 值）
- C. 自動將文字翻譯為 100 種語言
- D. 提供免費的 GPU 算力支援

**正確答案**：B  
**詳細解析**：
**Amazon SageMaker Clarify** 是 AWS 用於 Responsible AI 的核心工具，協助開發團隊在數據準備、模型訓練及生產監控階段，檢測潛在的**偏見（Bias）**並生成基於 SHAP 值的**可解釋性報告**。

---

## Domain 5: Security, Compliance, and Governance for AI Solutions (9 題)

### Q57
某金融機構要求所有傳送至 Amazon Bedrock API 的數據，其傳輸路徑（Data in Transit）必須嚴格限制在 AWS 私有網路骨幹中，絕對不允許暴露於公共網際網路。應架構下列哪種 AWS 網路服務來滿足此合規要求？
- A. AWS Internet Gateway
- B. AWS PrivateLink (VPC Endpoints)
- C. Amazon CloudFront
- D. AWS Route 53

**正確答案**：B  
**詳細解析**：
透過建立 **AWS PrivateLink (VPC Endpoints)**，客戶 VPC 內的應用程式可以直接透過私有 IP 存取 Amazon Bedrock，所有數據流量均在 AWS 內部網路骨幹中傳輸，繞過公共網際網路。

---

### Q58
根據「AWS 責任共擔模型（AWS Shared Responsibility Model）」，當企業使用 Amazon Bedrock 構建生成式 AI 應用時，下列哪一項安全責任屬於 **AWS 的責任**？
- A. 管理輸入給 AI 的 Prompt 與數據安全分類
- B. 設定 IAM 角色與存取控制政策
- C. 維護運行 Bedrock 服務底層的實體伺服器、算力硬體（GPU/Neuron）與基礎設施安全
- D. 配置 Bedrock Guardrails 的封鎖主題

**正確答案**：C  
**詳細解析**：
在責任共擔模型中，**AWS 負責雲端「本體」的安全（Security OF the Cloud）**，包含實體機房、伺服器硬體、網路設施；而**客戶負責雲端「內部」的安全（Security IN the Cloud）**，包含數據加密、IAM 權限、Prompt 與應用邏輯。

---

### Q59
一家受高度監管的企業需要審核過去三個月內所有人員呼叫 Amazon Bedrock API 的詳細紀錄（包含呼叫者 IAM 身份、時間戳記、API 名稱與來源 IP），以符合合規稽核。應檢查哪一個 AWS 服務的日誌？
- A. AWS CloudTrail
- B. Amazon QuickSight
- C. AWS Trusted Advisor
- D. AWS Cost Anomaly Detection

**正確答案**：A  
**詳細解析**：
**AWS CloudTrail** 自動記錄 AWS 帳戶內的所有 API 活動與管理操作，是合規審計、安全監控與疑難排解的核心服務。

---

### Q60
若要嚴格限制某個開發團隊的 IAM 角色僅能存取 Amazon Bedrock 中的 Anthropic Claude 模型，而無法存取其他模型，應如何在 IAM Policy 中進行精確的權限控制？
- A. 在 IAM Policy 的 `Resource` 區段指定特定的 Bedrock Model ARN（例如 `arn:aws:bedrock:*:*:foundation-model/anthropic.claude*`）
- B. 關閉開發團隊的 AWS 主控台登入權限
- C. 使用 Amazon Macie 封鎖團隊
- D. 將 Bedrock API Key 印在紙上發放

**正確答案**：A  
**詳細解析**：
AWS IAM 支援**最小權限原則（Least Privilege）**。透過在 IAM Policy 的 `Resource` 欄位中填入特定的 **Foundation Model ARN**，可以精確限定該角色僅能呼叫特定的模型。

---

### Q61
某公司將敏感的客戶醫療數據存放在 Amazon S3 中，準備用於 Bedrock Knowledge Bases 的向量檢索。為了保護「靜態數據（Data at Rest）」安全，且要求金鑰必須能定期自動輪換並由客戶完全控制金鑰存取政策，應採用何種加密機制？
- A. 不進行加密
- B. 使用 AWS Key Management Service (AWS KMS) 客戶託管金鑰（Customer Managed Keys, CMK）進行伺服器端加密
- C. 將 S3 Bucket 權限設為 Public Read
- D. 使用 HTTP 明文傳輸

**正確答案**：B  
**詳細解析**：
保護靜態數據的最佳實踐是使用 **AWS KMS 客戶託管金鑰（CMK）**。客戶可以自主管理金鑰策略、設定自動輪換，並隨時撤銷存取權限。

---

### Q62
一家醫療跨國企業欲使用 AWS 處理患者臨床數據，合規團隊需要下載 AWS 官方提供的第三方獨立審計合規報告（如 GDPR、SOC 2、HIPAA 合規認證文件）。應從哪一個 AWS 主控台門戶取得這些官方報告？
- A. AWS Artifact
- B. AWS Marketplace
- C. AWS Health Dashboard
- D. Amazon CloudWatch

**正確答案**：A  
**詳細解析**：
**AWS Artifact** 是 AWS 提供官方合規性報告（Compliance Reports，如 SOC、PCI-DSS、ISO 認證）與合規協議（Agreements，如 BAA）的中央入口網站。

---

### Q63
Amazon Macie 服務在企業 AI 資料治理（Data Governance）與安全防禦中，主要發揮什麼關鍵功能？
- A. 自動優化 LLM 的 Prompt
- B. 利用機器學習與模式比對，自動掃描並識別 Amazon S3 中的個人可識別資訊（PII）、財務數據與敏感資料
- C. 提高 SageMaker 訓練速度
- D. 提供免費的 DNS 解析

**正確答案**：B  
**詳細解析**：
**Amazon Macie** 是一項數據安全與隱私服務，利用機器學習自動發現、分類與保護存放在 S3 中的敏感數據（如信用卡號、身分證字號），防止敏感資產未受保護地進入 AI 訓練集或 RAG 向量庫。

---

### Q64
在機器學習與 AI 模型監控中，什麼是「概念漂移（Concept Drift）」？
- A. 生產環境中的輸入特徵分佈（$P(X)$）改變，但特徵與目標變數的映射關係不變
- B. 輸入特徵（$X$）與目標變數（$Y$）之間的統計映射關係（$P(Y|X)$）隨時間發生改變，導致模型預測能力衰退
- C. 伺服器硬體 GPU 溫度過高
- D. 模型輸出的 JSON 格式缺失括號

**正確答案**：B  
**詳細解析**：
- **概念漂移（Concept Drift）**：$P(Y|X)$ 改變。即輸入與輸出的映射關係改變（例如：同樣坪數的房屋，因通膨導致價格預測模型不再準確）。
- **數據漂移（Data Drift）**：$P(X)$ 改變。即輸入數據的分佈發生改變，但對應關係未必改變。

---

### Q65
某維運團隊為了控制 Amazon Bedrock API 的月度消費支出，設定了當 API 消費達到 $5,000 美元時自動發送 Email 告警，並觸發 Lambda 函數暫時停用 API Key。這屬於 AI 治理與營運中的哪一個維度？
- A. 網路邊界安全（Network Perimeter Security）
- B. 財務治理與成本管理（FinOps / Cost Governance）
- C. 模型可解釋性（Model Explainability）
- D. 數據標註（Data Labeling）

**正確答案**：B  
**詳細解析**：
**FinOps（財務營運/成本治理）** 是雲端 AI 治理的核心柱石之一。透過設定預算上限（Budgets）、成本告警（Cost Alerts）與自動化斷路器，能防止因程式陷入無窮迴圈或遭未授權濫用而產生巨額帳單。