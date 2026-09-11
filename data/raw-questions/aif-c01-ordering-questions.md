---
exam: AIF-C01
domain: Domain 3 — Applications of Foundation Models
lang: zh-TW
---

## Q1
Type: ordering
Difficulty: 2
Tags: FM-customization, cost, pre-training, fine-tuning, ICL, RAG
Concepts: fm-customization-cost

請將以下四種基礎模型客製化方式，按「成本從低到高」排列：

A. RAG（檢索增強生成）
B. In-context Learning（少量範例學習）
C. Fine-tuning（微調）
D. Pre-training（預訓練）

Answer: B, A, C, D

Hint: 想想哪種方式完全不需要訓練任何參數。

Explanation: ICL 只需在 prompt 中加入範例，零訓練成本最低。RAG 需要建立向量資料庫但不訓練模型。Fine-tuning 需要標註資料和 GPU 訓練。Pre-training 從零開始訓練整個模型，成本最高。

Why others wrong: 常見錯誤是把 RAG 排在 ICL 前面，但 RAG 需要建立和維護知識庫（向量資料庫、Embedding 模型），而 ICL 只需要改 prompt。

Trap: 容易把 RAG 想成「免費」因為不訓練模型，但忽略了資料擷取管線、向量資料庫、Embedding 計算的持續成本。

Mnemonic: 成本排序口訣：「ICL 寫 prompt → RAG 查資料 → FT 練模型 → PT 造模型」

---

## Q2
Type: ordering
Difficulty: 2
Tags: FM-customization, complexity, implementation
Concepts: fm-customization-complexity

請將以下四種基礎模型客製化方式，按「實作複雜度從低到高」排列：

A. In-context Learning
B. RAG
C. Fine-tuning
D. Pre-training

Answer: A, B, C, D

Hint: 哪個只需要改 prompt，不需要任何額外基礎設施？

Explanation: ICL 只需修改 prompt，最簡單。RAG 需要文件處理管線、向量資料庫和檢索邏輯。Fine-tuning 需要準備訓練資料、設定訓練環境、調整超參數。Pre-training 需要大規模資料集、分散式訓練叢集、數月時間。

Why others wrong: Fine-tuning 在 Bedrock 上看似簡單（UI 點幾下），但準備高品質標註資料才是真正的複雜度所在。

Trap: Bedrock 的 UI 讓 Fine-tuning「看起來」很簡單，但實際的資料準備、格式轉換、驗證、超參數調整才是工程重點。

Mnemonic: 複雜度口訣：「改 prompt → 接資料 → 練參數 → 造模型」

---

## Q3
Type: ordering
Difficulty: 3
Tags: FM-customization, training-data, data-requirements
Concepts: fm-customization-data

請將以下四種客製化方式，按「所需訓練資料量從少到多」排列：

A. In-context Learning
B. RAG
C. Fine-tuning
D. Pre-training

Answer: A, B, C, D

Hint: ICL 需要幾筆範例？RAG 需要什麼？Fine-tuning 需要多少標註資料？

Explanation: ICL 只需 prompt 中的數筆範例（通常 3-10 筆）。RAG 需要知識庫文件（可以是非結構化的）。Fine-tuning 需要數百到數千筆高品質標註資料。Pre-training 需要數十億 token 的大規模語料庫。

Why others wrong: RAG 的資料不需要「標註」，只需要有價值的文件；而 Fine-tuning 需要精心標註的輸入-輸出對。

Trap: 混淆 RAG 的「知識庫文件數量」和 Fine-tuning 的「標註訓練資料」——前者可以很多但不需人工標註，後者每筆都要標。

Mnemonic: 資料量口訣：「幾筆範例 → 文件庫 → 標註集 → 語料庫」

---

## Q4
Type: single
Difficulty: 2
Tags: FM-customization, scenario, RAG
Concepts: fm-customization-selection

一家法律事務所希望 AI 助理能回答關於最新法規修正案的問題。法規每季更新一次，事務所不想重新訓練模型。最適合的客製化方式是？

A. Pre-training
B. Fine-tuning
C. In-context Learning
D. RAG

Answer: D

Hint: 關鍵詞是「最新」和「不想重新訓練」。

Explanation: RAG 讓模型在推論時檢索最新文件，不需重新訓練。法規每季更新，用 RAG 只需更新知識庫即可。

Why others wrong: Pre-training 和 Fine-tuning 都需要重新訓練，不符合「不想重新訓練」的需求。ICL 無法處理大量法規文件，prompt 長度有限。

Trap: 看到「法律專業領域」就想選 Fine-tuning，但題目強調的是「最新」和「不重新訓練」——這才是選擇 RAG 的關鍵。

Mnemonic: 「最新資料 + 不重訓 = RAG」

---

## Q5
Type: single
Difficulty: 3
Tags: FM-customization, scenario, fine-tuning
Concepts: fm-customization-selection

一家醫療公司有 5,000 筆標註好的放射科報告（X 光影像描述 → 診斷建議），希望模型能產出符合該院格式和用語的報告。最適合的方式是？

A. In-context Learning
B. RAG
C. Fine-tuning
D. Pre-training

Answer: C

Hint: 注意兩個條件：有標註資料、要改變模型的輸出風格。

Explanation: Fine-tuning 適合有足夠標註資料且需要改變模型行為/風格的場景。5,000 筆標註報告足以微調，目標是讓模型「學會」特定的報告格式和醫學用語。

Why others wrong: ICL 用幾筆範例無法讓模型完全掌握專業格式。RAG 適合查資料但不會改變模型的寫作風格。Pre-training 大材小用且缺乏足夠資料。

Trap: 看到「醫療」就想選 RAG（查知識庫），但題目要的是「改變輸出格式和用語」，這是行為改變，不是知識檢索。

Mnemonic: 「有標註 + 改風格 = Fine-tuning」

---

## Q6
Type: ordering
Difficulty: 2
Tags: FM-customization, latency, inference
Concepts: fm-customization-latency

請將以下四種客製化方式，按「推論延遲從低到高」排列：

A. Fine-tuned 模型
B. In-context Learning（長 prompt）
C. Pre-trained 模型（原始）
D. RAG（含檢索步驟）

Answer: C, A, B, D

Hint: 哪個在推論時需要額外的檢索步驟？哪個因為 prompt 變長而增加延遲？

Explanation: 原始 Pre-trained 模型推論最快（無額外處理）。Fine-tuned 模型推論速度相同（權重已內化）。ICL 因為 prompt 加入範例而增加 context 長度，略慢。RAG 需要先檢索文件再生成，額外一步最慢。

Why others wrong: 常見錯誤是認為 Fine-tuned 比原始模型慢——其實微調後的推論速度不變，只是權重不同。

Trap: Fine-tuning 的「訓練」很慢，但「推論」跟原始模型一樣快，不要混淆訓練時間和推論延遲。

Mnemonic: 延遲口訣：「原始最快 → 微調不變 → ICL 加長 → RAG 多一步」

---

## Q7
Type: single
Difficulty: 2
Tags: FM-customization, comparison, RAG-vs-fine-tuning
Concepts: rag-vs-fine-tuning

以下哪個敘述最正確地區分了 RAG 和 Fine-tuning 的適用場景？

A. RAG 適合需要最新外部知識的場景，Fine-tuning 適合需要改變模型行為或風格的場景
B. RAG 比 Fine-tuning 的準確率一定更高
C. Fine-tuning 不需要任何訓練資料
D. RAG 和 Fine-tuning 完全互斥，不能同時使用

Answer: A

Hint: 思考：RAG 解決的是「知識」問題，Fine-tuning 解決的是「行為」問題。

Explanation: RAG 透過檢索外部知識讓模型回答最新問題（知識面）。Fine-tuning 透過額外訓練改變模型的輸出風格和行為（行為面）。兩者可以組合使用。

Why others wrong: B 不一定，取決於場景和資料品質。C 錯誤，Fine-tuning 需要標註資料。D 錯誤，RAG + Fine-tuning 可以同時使用（先微調再加 RAG）。

Trap: 選 D 的考生忽略了「RAG + Fine-tuning」的組合模式——先用 Fine-tuning 改善模型的基礎能力，再用 RAG 補充最新知識。

Mnemonic: 「RAG 補知識，FT 改行為，可以一起用」

---

## Q8
Type: ordering
Difficulty: 2
Tags: FM-customization, time-to-production, deployment-speed
Concepts: fm-customization-speed

請將以下四種客製化方式，按「從開始到上線的時間從短到長」排列：

A. In-context Learning
B. RAG
C. Fine-tuning
D. Pre-training

Answer: A, B, C, D

Hint: 哪個改完 prompt 就能立刻上線？

Explanation: ICL 只需修改 prompt，分鐘級上線。RAG 需要建立知識庫和檢索管線，通常數天到數週。Fine-tuning 需要準備資料、訓練、評估，通常數週。Pre-training 需要數月的資料準備和訓練。

Why others wrong: RAG 看似簡單但「建好的知識庫」包含文件處理、chunking、embedding、向量儲存、檢索邏輯——每一步都需要工程時間。

Trap: 用 Bedrock Knowledge Base 確實能加速 RAG 建置，但仍需要文件準備和測試，不是「即時」的。

Mnemonic: 上線速度口訣：「改 prompt 分鐘級 → RAG 天級 → FT 週級 → PT 月級」

---

## Q9
Type: single
Difficulty: 3
Tags: FM-customization, scenario, matching
Concepts: fm-customization-selection

一家電商公司有以下三個 AI 需求。請選出最佳的客製化方式配對：
(1) 客服機器人需要回答最新的退貨政策
(2) 產品描述生成需要符合品牌語調
(3) 商品分類只需要基本的分類能力

A. (1) RAG, (2) Fine-tuning, (3) ICL
B. (1) Fine-tuning, (2) RAG, (3) Pre-training
C. (1) ICL, (2) ICL, (3) ICL
D. (1) RAG, (2) Pre-training, (3) Fine-tuning

Answer: A

Hint: 分別判斷每個需求是「知識問題」「行為問題」還是「簡單任務」。

Explanation: (1) 退貨政策會更新 → RAG 查最新資料。(2) 品牌語調是輸出風格 → Fine-tuning 改變行為。(3) 基本分類不需要特化 → ICL 加幾個範例就夠。

Why others wrong: B 把知識問題和行為問題反了。C 全用 ICL 忽略了不同需求的本質差異。D 大材小用，Pre-training 和 Fine-tuning 用在不需要的地方。

Trap: 看到「客服」就想選 Fine-tuning，但關鍵是「最新政策」——這是知識更新問題，不是行為改變問題。

Mnemonic: 「更新知識 → RAG，改風格 → FT，簡單任務 → ICL」

---

## Q10
Type: ordering
Difficulty: 3
Tags: FM-customization, model-ownership, control
Concepts: fm-customization-ownership

請將以下四種客製化方式，按「對模型的控制權與所有權從低到高」排列：

A. In-context Learning
B. RAG
C. Fine-tuning
D. Pre-training

Answer: A, B, C, D

Hint: 用 ICL 時你「擁有」模型嗎？用 Pre-training 呢？

Explanation: ICL 完全依賴供應商的模型，你只控制 prompt。RAG 你擁有知識庫但模型仍是供應商的。Fine-tuning 你擁有調整後的權重副本。Pre-training 你完全擁有模型。

Why others wrong: ICL 和 RAG 都不改變模型本身，差別在於 RAG 至少擁有自己的知識資產。Fine-tuning 的權重副本通常有供應商的使用限制。

Trap: Fine-tuning 在 Bedrock 上產生的模型，你擁有權重但仍然只能在 AWS 上使用——「擁有」和「可攜帶」是不同概念。

Mnemonic: 控制權口訣：「改 prompt 零所有 → 擁知識庫 → 擁權重 → 擁全模型」
