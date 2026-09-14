---
exam: NCP-GENL
lang: zh-TW
---

## Q1
Type: single
Difficulty: 1
Tags: architecture, grouped-query-attention
Concepts: gqa
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

分組查詢注意力（GQA）相比標準多頭注意力（MHA）的主要優勢是什麼？

A. 增加注意力頭的數量以提高精度
B. 透過讓多個查詢頭共享鍵值頭來減少 KV cache 記憶體，在 MHA 品質和多查詢注意力效率之間取得平衡
C. 消除對位置編碼的需求
D. 將上下文視窗長度加倍

Answer: B

Hint: GQA 位於 MHA（每個頭有自己的 KV）和 MQA（所有頭共享一個 KV）之間。

Explanation: GQA 將多個查詢頭分組共享一組鍵值頭，減少推論時的 KV cache 記憶體使用量，同時保留 MHA 的大部分品質。它在 Llama 2 70B 等模型中被引入，以平衡推論效率和模型品質。

Why others wrong: GQA 不增加頭數——它減少 KV 頭數；位置編碼是正交的；上下文視窗由位置編碼方法決定，與注意力分組無關。

Trap: 混淆 GQA 和 MQA——MQA 對所有查詢使用單一 KV 頭（更激進），而 GQA 使用分組（更平衡）。

Mnemonic: GQA =「KV 頭的團購折扣」——在查詢朋友間共享鍵

## Q2
Type: single
Difficulty: 2
Tags: architecture, multi-query-attention
Concepts: mqa
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

一個團隊正在部署延遲敏感的聊天機器人，需要在自回歸生成期間最小化記憶體使用。哪種注意力變體在減少 KV cache 記憶體方面最為激進？

A. 多頭注意力（MHA）
B. 分組查詢注意力（GQA）4 組
C. 多查詢注意力（MQA）
D. 滑動視窗注意力

Answer: C

Hint: 想想哪個變體使用最少的鍵值頭。

Explanation: MQA 使用單一鍵值頭供所有查詢頭共享，提供最激進的 KV cache 減少。這使其成為記憶體受限推論的理想選擇，儘管可能犧牲一些相比 MHA 或 GQA 的品質。

Why others wrong: MHA 有最大的 KV cache（每頭一個）；GQA 是折中方案；滑動視窗注意力限制上下文範圍但不減少 KV 頭的數量。

Trap: 假設滑動視窗注意力最大程度減少 KV cache——它限制注意力範圍但在視窗內仍使用每頭的 KV 對。

Mnemonic: MQA =「最小查詢注意力」開銷——一個 KV 統治所有

## Q3
Type: single
Difficulty: 2
Tags: architecture, alibi
Concepts: alibi-positional-encoding
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

ALiBi（帶線性偏置的注意力）如何與學習型位置嵌入不同地處理位置資訊？

A. ALiBi 根據 token 之間的距離對注意力分數添加固定的線性懲罰，不需要任何學習的位置參數
B. ALiBi 在預訓練期間學習位置嵌入並在推論期間凍結
C. ALiBi 使用與原始 Transformer 相同的正弦函數
D. ALiBi 需要在第一個注意力塊之前有一個獨立的位置嵌入層

Answer: A

Hint: 名稱中的「線性偏置」是關鍵——它按距離對注意力施加偏置。

Explanation: ALiBi 直接修改注意力分數，減去一個與查詢和鍵位置之間距離成正比的頭特定線性懲罰。它不需要學習的位置參數，且比學習型嵌入更能泛化到較長的序列。

Why others wrong: ALiBi 對位置是無參數的；它與正弦波不同，因為它應用於注意力 logits 而非嵌入；它不使用獨立的嵌入層。

Trap: 認為 ALiBi 只是另一種嵌入——它直接修改注意力分數，而非輸入表示。

Mnemonic: ALiBi = 注意力對距離施加線性偏置懲罰——遠處的 token 被懲罰

## Q4
Type: single
Difficulty: 3
Tags: architecture, rope-scaling
Concepts: rope-extrapolation
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

一位工程師需要將使用 RoPE 在 4K 上下文訓練的模型擴展到推論時處理 16K token，而無需重新訓練。哪種技術最合適？

A. 直接增加配置中的 max_position_embeddings 參數
B. 應用 NTK 感知插值來縮放 RoPE 頻率基數
C. 從 RoPE 切換到學習型位置嵌入
D. 將注意力頭數加倍

Answer: B

Hint: RoPE 頻率縮放允許在無需完全重新訓練的情況下擴展上下文。

Explanation: NTK 感知插值透過縮放基礎頻率來調整旋轉位置編碼頻率以處理更長的序列。與會降低品質的單純線性插值不同，NTK 感知縮放保留了相對位置編碼的特性，允許 4 倍或更多的上下文擴展且只需最少的微調。

Why others wrong: 僅更改配置參數不會調整學習到的旋轉基數；切換位置方法需要重新訓練；注意力頭數與上下文長度無關。

Trap: 以為只要設定更長的 max_position 就行——模型需要頻率調整才能泛化到未見過的位置。

Mnemonic: NTK 縮放 =「拉伸尺規」——相同刻度，更寬間距

## Q5
Type: single
Difficulty: 1
Tags: architecture, decoder-only
Concepts: causal-attention
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

為什麼像 GPT 這樣的純解碼器語言模型使用因果（遮罩）自注意力而非雙向注意力？

A. 為了減少一半的計算成本
B. 防止模型在自回歸生成期間「看到」未來的 token，維持從左到右的生成特性
C. 使模型能夠同時處理圖像和文字
D. 因為雙向注意力需要更多 GPU 記憶體

Answer: B

Hint: 自回歸意味著預測下一個 token——如果模型能看到答案會怎樣？

Explanation: 因果遮罩確保每個 token 只能關注自身和之前的 token，這對自回歸生成至關重要，因為未來的 token 尚未生成。沒有這個遮罩，模型在訓練時會透過查看答案來「作弊」。

Why others wrong: 因果注意力不會顯著減少計算（矩陣乘法大小相同）；多模態能力與此無關；記憶體使用量相似。

Trap: 認為因果遮罩只是效率技巧——它是有效自回歸訓練的基本要求。

Mnemonic: 因果遮罩 =「不要劇透」——不能偷看未來的 token

## Q6
Type: single
Difficulty: 2
Tags: architecture, embedding-dimension
Concepts: model-scaling
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

將 Transformer 模型從 70 億參數擴展到 700 億參數時，哪個架構變化對參數增加貢獻最大？

A. 將詞彙表大小從 32K 增加到 128K token
B. 增加隱藏維度和層數
C. 添加更多位置編碼維度
D. 從 float32 切換到 float16 權重

Answer: B

Hint: 參數量主要由權重矩陣決定，其大小取決於隱藏維度。

Explanation: Transformer 的絕大多數參數存在於前饋和注意力投影矩陣中，它們隨隱藏維度的平方和層數線性增長。從 70 億到 700 億通常涉及將隱藏維度大約加倍和增加層數，這導致約 10 倍的參數增加。

Why others wrong: 詞彙表嵌入只佔一小部分；位置編碼增加最少的參數；資料類型影響記憶體而非參數數量。

Trap: 高估詞彙表的貢獻——即使在 128K 詞彙下，嵌入矩陣相對於堆疊的 Transformer 層也很小。

Mnemonic: 參數存在於 層數 × 隱藏維度² 中——擴展這些來增大模型

## Q7
Type: single
Difficulty: 3
Tags: architecture, flash-decoding
Concepts: flash-decoding
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

在長序列的自回歸解碼過程中，單一查詢需要關注數千個快取的鍵值對。Flash Decoding 如何改進標準 FlashAttention 來處理這個場景？

A. 透過修剪不重要的 token 來減少 KV 對數量
B. 透過將 KV 分割成由獨立線程塊處理的區塊，沿鍵值序列維度平行化注意力計算，然後歸約部分結果
C. 使用近似注意力跳過遠距 token
D. 在計算注意力前使用量化壓縮 KV cache

Answer: B

Hint: 標準 FlashAttention 在批次和頭上平行化——Flash Decoding 在序列維度上增加了平行性。

Explanation: Flash Decoding 將 KV cache 分割成區塊，在沿序列維度的 GPU 線程塊之間平行計算部分注意力結果，然後執行歸約。這在解碼階段最大化 GPU 利用率，因為此時每個頭的批次大小僅為 1，解決了標準解碼的低平行度問題。

Why others wrong: 它不修剪 token；這是精確注意力，非近似值；KV 壓縮是另一種技術（如 KV cache 量化）。

Trap: 混淆 Flash Decoding 和 FlashAttention——FlashAttention 最佳化預填充階段；Flash Decoding 最佳化每 token 的解碼階段。

Mnemonic: Flash Decoding =「在生成過程中平行化長 KV 查找」

## Q8
Type: single
Difficulty: 2
Tags: prompting, tree-of-thought
Concepts: tree-of-thought
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

思維樹（ToT）提示和思維鏈（CoT）提示有何不同？

A. ToT 使用更短的提示以節省 token
B. ToT 平行探索多條推理路徑，並使用評估/回溯來選擇最佳路徑；而 CoT 沿著單一線性鏈推進
C. ToT 只能用於編碼器-解碼器模型
D. ToT 需要微調，而 CoT 可以零樣本使用

Answer: B

Hint: 想想「樹」vs「鏈」——分支 vs 線性。

Explanation: 思維樹擴展了 CoT，在每一步生成多個推理分支，評估它們，並可能從死路回溯。這種結構化探索對需要搜尋的問題特別有效，如謎題和規劃任務，因為第一條推理路徑並不總是最優的。

Why others wrong: ToT 由於分支實際上使用更多 token；它適用於純解碼器模型；兩者都可以在不微調的情況下應用。

Trap: 將帶自我一致性的 CoT（多次採樣）與 ToT 混淆——ToT 在每步有故意的分支和評估，而非僅採樣多條完整的鏈。

Mnemonic: CoT = 森林中的一條路徑；ToT = 探索多條小徑，從死路回溯

## Q9
Type: single
Difficulty: 1
Tags: prompting, system-prompt
Concepts: system-prompt-design
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

在基於對話的 LLM 部署中，系統提示的主要目的是什麼？

A. 壓縮模型權重以加快推論
B. 在使用者互動開始前建立模型的角色、行為約束和輸出格式
C. 在新資料上微調模型
D. 增加模型的上下文視窗

Answer: B

Hint: 系統提示在任何使用者訊息之前設定「交戰規則」。

Explanation: 系統提示定義模型的行為、角色、安全準則和輸出格式。它們在使用者訊息之前被處理，並在整個對話中持續存在，作為塑造所有後續回應的持久指令。

Why others wrong: 系統提示不影響模型權重或壓縮；它們不是微調；上下文視窗是架構特性。

Trap: 認為系統提示和微調相同——它們在推論時引導行為而不改變模型權重。

Mnemonic: 系統提示 =「給 AI 演員的舞台指導」——在表演開始前設定場景

## Q10
Type: single
Difficulty: 3
Tags: architecture, sparse-attention
Concepts: sparse-attention-patterns
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

一個研究團隊想高效處理 128K token 的文件。他們正在考慮不同的注意力模式。哪種方法正確描述了帶全域 token 的滑動視窗注意力？

A. 每個 token 關注所有其他 token，但精度較低
B. 每個 token 關注固定大小的本地鄰居視窗，而指定的全域 token（如 [CLS] 或每第 n 個 token）關注並被所有位置關注
C. 每層隨機選擇 token 進行注意力計算
D. 只有前 1024 和後 1024 個 token 接受注意力

Answer: B

Hint: 「滑動視窗 + 全域」結合了本地連接性和策略性的全範圍注意力。

Explanation: 滑動視窗注意力限制每個 token 的注意力到本地鄰域（如 4096 個 token），將複雜度從 O(n²) 降低到 O(n×w)。全域 token 打破了這種本地性，關注所有位置，允許資訊跨越整個序列流動。這種模式用於 Longformer 和 BigBird 等模型。

Why others wrong: 低精度注意力是另一種最佳化；隨機注意力（如 BigBird 中的）是一個組成部分，不是完整模式；截斷到首/尾 token 完全丟失中間內容。

Trap: 認為僅滑動視窗就足夠——沒有全域 token，資訊無法在文件的遠距部分之間流動。

Mnemonic: 滑動視窗 =「本地八卦」+ 全域 token =「城鎮公告員」，向所有人廣播

## Q11
Type: single
Difficulty: 2
Tags: prompting, retrieval-augmented
Concepts: rag-prompting
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

構建 RAG 提示時，開發者注意到模型有時忽略檢索的上下文，而從其參數化知識回答。最有效的緩解措施是什麼？

A. 移除所有檢索上下文，完全依賴模型的訓練資料
B. 添加明確的指令如「僅根據提供的上下文回答。如果上下文不包含答案，請說『我不知道』」
C. 將模型溫度提高到 1.5
D. 使用參數化知識較少的較小模型

Answer: B

Hint: 模型需要明確的接地指令來優先考慮上下文而非記憶。

Explanation: 提示中的明確接地指令告訴模型優先考慮檢索上下文而非參數化知識，並在上下文不足時承認。這減少了來自參數化記憶的幻覺，提高了對提供文件的忠實度。

Why others wrong: 移除上下文違背了 RAG 的目的；高溫度增加隨機性和幻覺；較小的模型如果沒有適當提示可能仍然忽略上下文。

Trap: 認為 RAG 自動使模型忠實於上下文——沒有明確指令，模型會預設混合上下文和參數化知識。

Mnemonic: RAG 接地 =「看教材，不要憑記憶」的指令

## Q12
Type: multi
Difficulty: 3
Tags: architecture, attention-optimization
Concepts: attention-variants
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

以下哪兩個關於 FlashAttention 與標準注意力的描述是正確的？（選擇兩個）

A. 它將理論計算複雜度從 O(n²) 降低到 O(n log n)
B. 它透過使用分塊和重算避免在 GPU HBM 中實體化完整的 n×n 注意力矩陣
C. 它產生與標準注意力數學上完全相同的結果
D. 它需要標準 NVIDIA GPU 中不可用的專用硬體

Answer: B, C

Hint: FlashAttention 是 IO 感知的最佳化，不是近似值。

Explanation: FlashAttention 使用分塊在快速 SRAM 中逐塊計算注意力，避免在較慢的 HBM 中存儲完整的注意力矩陣。關鍵的是，它產生與標準注意力數值上完全相同的結果——它是記憶體 IO 最佳化，而非近似值。它在標準 NVIDIA GPU（A100、H100 等）上運行。

Why others wrong: FlashAttention 不改變計算複雜度（仍然是 O(n²) FLOPS）；它在標準 NVIDIA GPU 上運行。

Trap: 因為它避免實體化完整矩陣就假設 FlashAttention 是近似的——它使用仔細的分塊和重算來保持精確。

Mnemonic: FlashAttention =「相同數學，更聰明的記憶體」——精確結果，更少的 HBM 流量

## Q13
Type: single
Difficulty: 2
Tags: prompting, structured-output
Concepts: structured-generation
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

一個 API 服務需要 LLM 每次都返回有效的 JSON。哪種方法對有效 JSON 輸出提供最強的保證？

A. 在提示中添加「請返回有效的 JSON」
B. 使用約束解碼（語法引導生成），在每一步將 token 詞彙限制為只有能產生有效 JSON 的 token
C. 將溫度設為 0
D. 用 JSON 修復函式庫後處理輸出

Answer: B

Hint: 哪種方法從一開始就防止無效 token 被生成？

Explanation: 約束解碼（也稱為語法引導生成或結構化輸出）修改採樣步驟，只允許符合指定語法（如 JSON schema）的 token。這從構造上保證 100% 有效的輸出，不像基於提示的方法依賴模型的順從性。

Why others wrong: 提示指令不保證合規性；temperature=0 是確定性的但仍可能產生無效 JSON；後處理是後備方案，不是保證。

Trap: 在生產環境中依賴提示來獲得結構化輸出——即使最好的提示偶爾也會產生格式錯誤的輸出。

Mnemonic: 約束解碼 =「高速公路上的護欄」——不能離開有效 JSON 的車道

## Q14
Type: single
Difficulty: 1
Tags: architecture, layer-normalization
Concepts: pre-norm-vs-post-norm
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

大多數現代 LLM（如 LLaMA 和 GPT）使用 Pre-LayerNorm 而非原始 Transformer 的 Post-LayerNorm。主要好處是什麼？

A. 減少參數數量
B. 提供更穩定的訓練梯度，使訓練更容易，無需仔細的學習率預熱
C. 在推論時產生更高品質的輸出
D. 使模型能處理更長的序列

Answer: B

Hint: 正規化的位置影響訓練期間的梯度流。

Explanation: Pre-LayerNorm 在注意力和前饋子層之前應用正規化，這透過殘差連接建立更直接的梯度路徑。這穩定了訓練，特別是對於非常深的模型，並減少了 Post-LayerNorm 需要的仔細學習率預熱排程。

Why others wrong: 參數數量相同；輸出品質取決於訓練而非正規化位置；序列長度是正交的。

Trap: 認為 Pre-Norm 在推論時嚴格更好——好處主要在訓練穩定性上。

Mnemonic: Pre-Norm =「先正規化，再變換」——更平滑的梯度流過

## Q15
Type: single
Difficulty: 3
Tags: architecture, speculative-sampling
Concepts: speculative-decoding-math
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

在推測解碼中，草稿模型生成 K 個候選 token，然後由目標模型在單次前向傳播中驗證。如果草稿模型每個 token 的接受率為 p，每次驗證步驟的預期接受 token 數是多少？

A. K × p
B. p / (1 - p)，上限為 K
C. (1 - p^(K+1)) / (1 - p) 減去校正項
D. 如果 p > 0.5 則為 K，否則為 0

Answer: A

Hint: 每個草稿 token 以機率 p 獨立被接受。

Explanation: 有 K 個草稿 token 和每個 token 獨立的接受機率 p，預期接受的 token 數遵循類似幾何分佈。在簡化情況下，E[接受數] ≈ K×p。實際公式考慮了序列拒絕（一旦一個 token 被拒絕，後續 token 被丟棄），但 K×p 是實務中使用的標準一階近似。

Why others wrong: p/(1-p) 是無上限幾何分佈的預期運行長度；選項 C 過度複雜化；如果 p>0.5 則為 K 是閾值規則，不是期望值。

Trap: 忘記 token i 被拒絕會導致所有 token i+1..K 被丟棄——實際上 token 不是獨立接受的，但 K×p 是標準近似。

Mnemonic: 推測接受 ≈「草稿數量 × 命中率」

## Q16
Type: single
Difficulty: 2
Tags: prompting, self-consistency
Concepts: self-consistency-decoding
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

自我一致性作為推理任務解碼策略的核心概念是什麼？

A. 模型透過問自己後續問題來驗證自己的輸出
B. 使用 temperature > 0 採樣多條推理路徑，並透過多數投票選擇最頻繁的最終答案
C. 模型將其答案與檢索資料庫進行比較
D. 輸出被約束為與訓練資料分佈一致

Answer: B

Hint: 「自我一致性」採樣多元路徑並進行多數投票。

Explanation: 自我一致性透過以 temperature > 0 採樣生成多條思維鏈推理路徑，然後選擇在所有路徑中出現最頻繁的最終答案。這利用了正確推理傾向於透過不同路徑收斂到相同答案的直覺，而錯誤則更隨機。

Why others wrong: 它不涉及自我提問；不使用檢索資料庫；它是採樣策略而非訓練約束。

Trap: 將自我一致性和波束搜尋混淆——波束搜尋找到最可能的序列，而自我一致性採樣多元路徑並對答案投票。

Mnemonic: 自我一致性 =「問全班同學並選最多人贊同的答案」

## Q17
Type: single
Difficulty: 2
Tags: architecture, kv-cache-quantization
Concepts: kv-cache-compression
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

為了在長序列推論期間減少 KV cache 記憶體，團隊考慮量化快取的鍵和值張量。主要的取捨是什麼？

A. 量化的 KV cache 讀取更慢，因為需要反量化
B. 模型產生確定性輸出而非隨機輸出
C. 低精度（如 FP8 或 INT8）帶來的記憶體節省，代價是在需要精確注意力模式的任務上可能有輕微的品質退化
D. 上下文視窗長度自動翻倍

Answer: C

Hint: 較低精度 = 更少記憶體，但注意力分數可能不那麼精確。

Explanation: KV cache 量化減少了每個 token 的記憶體佔用（例如從 FP16 到 FP8 或 INT4），使得能處理更長的序列或更大的批次大小。取捨是量化的注意力計算可能引入小的數值誤差，可能影響依賴精確注意力模式的任務，但在實務中影響通常很小。

Why others wrong: 反量化開銷相比記憶體節省可以忽略不計；量化不改變隨機性；上下文視窗是模型特性，不由快取精度決定。

Trap: 假設 KV cache 量化總是損害品質——實際上，FP8 KV cache 通常對品質的影響可以忽略。

Mnemonic: KV 量化 =「壓縮記憶體書架」——放入更多 token，注意力稍微模糊

## Q18
Type: single
Difficulty: 1
Tags: architecture, tokenizer-types
Concepts: bpe-vs-sentencepiece
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

字節對編碼（BPE）和字元級分詞器在 LLM 中的主要區別是什麼？

A. BPE 只能處理英文文字
B. BPE 透過迭代合併頻繁的字元對來創建子詞 token，建立平衡 token 數量和覆蓋率的可變長度詞彙表
C. 字元級分詞器總是產生更短的序列
D. BPE 需要為每種語言建立單獨的分詞器

Answer: B

Hint: BPE 透過合併最常見的對來自底向上建立子詞。

Explanation: BPE 從單個字元開始，迭代合併最頻繁的相鄰對來創建子詞 token。這產生了一個緊湊的詞彙表，透過子詞分解處理罕見詞，同時將常見詞作為單一 token 保留，不像字元級分詞器將每個字元單獨處理。

Why others wrong: BPE 與語言無關；字元級產生更長的序列（每個字元一個 token）；BPE 跨語言使用共享詞彙表。

Trap: 認為 BPE 是詞級的——它是子詞級的，拆分罕見詞同時保留常見詞完整。

Mnemonic: BPE =「最佳配對浮現」——合併最受歡迎的字元搭檔

## Q19
Type: single
Difficulty: 3
Tags: architecture, mixture-of-experts-routing
Concepts: moe-load-balancing
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

在混合專家（MoE）Transformer 中，路由器有時將大部分 token 發送給少數熱門專家，而其他專家未被充分使用。標準的解決方案是什麼？

A. 移除未充分使用的專家，只保留熱門專家
B. 添加輔助負載平衡損失，懲罰 token 在專家間的不均勻分佈
C. 增加專家數量直到所有專家平均使用
D. 使用隨機路由而非學習路由

Answer: B

Hint: 負載平衡損失是訓練期間添加的正則化項。

Explanation: 輔助負載平衡損失在 token 跨專家分佈傾斜時懲罰路由器。這通常被表述為路由到每個專家的 token 比例和每個專家的平均路由機率的點積，鼓勵均勻使用並防止專家坍縮。

Why others wrong: 移除專家浪費了容量；增加更多專家不能修復路由不平衡；隨機路由消除了專業化的好處。

Trap: 認為負載平衡只對計算有影響——坍縮的專家（收到很少 token）也會降低模型品質，因為其參數訓練不足。

Mnemonic: 負載平衡損失 =「路由器的公平稅」——分散工作否則付出代價

## Q20
Type: single
Difficulty: 2
Tags: prompting, constitutional-ai
Concepts: constitutional-prompting
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

在憲法 AI 提示中，「批評和修訂」步驟的角色是什麼？

A. 外部分類器在生成後過濾有害輸出
B. 提示模型根據一組原則批評自己的初始回應，然後修訂以更好地符合這些原則
C. 人類審核者手動編輯每個回應
D. 模型在批評回饋上重新訓練

Answer: B

Hint: 憲法 AI 讓模型成為自己的審核者——批評，然後修訂。

Explanation: 憲法 AI 使用兩步自我改進過程：模型首先生成回應，然後被提示根據一組憲法原則（如有用性、無害性）批評它，最後修訂回應以解決批評。這可以在推論時（提示）和 RLAIF 訓練期間應用。

Why others wrong: 是自我批評，不是外部分類器；每個回應中沒有人在迴圈裡；提示版本不涉及重新訓練。

Trap: 將憲法 AI 提示和 RLHF 混淆——憲法 AI 可以純粹在推論時透過提示工作，無需改變模型權重。

Mnemonic: 憲法 AI =「模型是自己的裁判」——生成、批評、修訂

## Q21
Type: single
Difficulty: 1
Tags: data-preparation, deduplication
Concepts: training-data-dedup
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

為什麼在微調 LLM 之前對訓練資料去重很重要？

A. 減少檔案大小以節省存儲成本
B. 重複資料會導致模型記憶和過擬合重複範例，降低泛化能力並可能因逐字記憶造成隱私風險
C. 去重總是能將訓練速度提高 10 倍
D. GPU 硬體要求去重以避免記憶體錯誤

Answer: B

Hint: 訓練中的重複資料導致記憶化——這有後果。

Explanation: 重複的訓練範例導致模型不成比例地記憶這些範例，導致過擬合和泛化能力下降。此外，重複的個人或敏感資料增加了模型在推論期間逐字重現該資料的風險，造成隱私隱憂。

Why others wrong: 存儲節省是附帶好處，不是主要原因；速度提升因情況而異；硬體不要求去重。

Trap: 認為去重只對大規模預訓練有影響——對微調資料集同樣重要，因為小資料集中的幾個重複就可能占主導地位。

Mnemonic: 去重 =「不讓模型產生最愛的記憶」

## Q22
Type: single
Difficulty: 2
Tags: fine-tuning, instruction-tuning
Concepts: instruction-following
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

指令調優和在任務特定資料上的標準監督式微調（SFT）的主要區別是什麼？

A. 指令調優使用強化學習，而 SFT 使用梯度下降
B. 指令調優在跨多任務的多樣（指令，回應）對上訓練以發展通用的指令遵循能力，而任務特定 SFT 在單一任務格式上訓練
C. SFT 比指令調優需要更多資料
D. 指令調優只能在大於 700 億參數的模型上進行

Answer: B

Hint: 指令調優是關於廣度（多任務），任務 SFT 是關於深度（單一任務）。

Explanation: 指令調優將模型暴露於格式化為自然語言指令的多種任務，發展遵循指令的通用能力。任務特定 SFT 專注於最佳化單一任務格式的表現。FLAN-T5 和 InstructGPT 等模型展示了指令調優如何實現對新任務的零樣本泛化。

Why others wrong: 兩者都使用梯度下降；資料需求取決於任務；指令調優在任何模型規模都有效。

Trap: 認為指令調優和 RLHF 相同——指令調優是在指令-回應對上的監督學習，而 RLHF 使用獎勵模型。

Mnemonic: 指令調優 =「學會遵循任何食譜」；任務 SFT =「精通一道菜」

## Q23
Type: single
Difficulty: 2
Tags: fine-tuning, peft-comparison
Concepts: parameter-efficient-methods
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

一家公司想在單張 A100 80GB GPU 上微調 700 億參數模型。哪種方法能實現這一點？

A. 全量微調加梯度累積
B. QLoRA——將基礎模型量化到 4-bit 並以 FP16/BF16 訓練低秩調適器
C. 模型在 FP32 下的標準 LoRA
D. 模型在 FP16 下的提示調優

Answer: B

Hint: FP16 下的 700 億模型僅權重就需要約 140GB——你需要量化才能放入 80GB。

Explanation: QLoRA 結合了基礎模型的 4-bit 量化（NF4 資料類型）和以更高精度訓練的 LoRA 調適器。4-bit 模型佔約 35GB，在 80GB GPU 上留有空間給最佳化器狀態和激活。FP32 下的標準 LoRA 僅權重就需要 280GB，全量微調更大。

Why others wrong: 700 億的全量微調需要數百 GB；FP32 的標準 LoRA 僅權重需要 280GB；FP16 的提示調優仍需要 140GB 放模型。

Trap: 假設 LoRA 本身就足夠——LoRA 減少可訓練參數但完整模型仍需放入記憶體。QLoRA 透過量化解決這個問題。

Mnemonic: QLoRA =「量化以適配，LoRA 以調適」——合二為一

## Q24
Type: single
Difficulty: 3
Tags: fine-tuning, orpo
Concepts: orpo-alignment
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

ORPO（勝率偏好最佳化）與 DPO 在偏好對齊方面有何不同？

A. ORPO 需要單獨的獎勵模型而 DPO 不需要
B. ORPO 透過在 SFT 損失中添加基於勝率的懲罰，將監督式微調和偏好對齊結合到單一訓練階段，消除了對單獨對齊步驟的需求
C. ORPO 只能用於編碼器-解碼器模型
D. ORPO 比 DPO 需要更多的偏好資料

Answer: B

Hint: ORPO 合併了 SFT 和對齊——DPO 是 SFT 之後的單獨步驟。

Explanation: ORPO 修改標準交叉熵 SFT 損失，加入勝率懲罰，抑制生成被拒絕的回應。這意味著你可以在單次訓練中同時實現指令遵循和偏好對齊，而非 DPO 的兩階段方法（先 SFT，再 DPO）。

Why others wrong: ORPO 和 DPO 都不使用獨立的獎勵模型（那是 RLHF）；ORPO 適用於純解碼器模型；ORPO 和 DPO 使用類似的偏好資料。

Trap: 假設所有對齊方法都需要獨立的獎勵模型——DPO 和 ORPO 都跳過獎勵模型，但 ORPO 還跳過了單獨的 SFT 階段。

Mnemonic: ORPO =「一輪偏好最佳化」——SFT + 對齊一次完成

## Q25
Type: single
Difficulty: 1
Tags: data-preparation, data-quality
Concepts: data-filtering
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

為企業客服聊天機器人準備微調資料集時，哪項資料品質檢查最不重要？

A. 從客戶訊息中移除個人可識別資訊（PII）
B. 確保指令和回應事實上一致
C. 不計品質地最大化訓練範例總數
D. 過濾回應中的有毒或不適當語言

Answer: C

Hint: 品質勝過數量——少量乾淨的資料集通常優於大量嘈雜的資料集。

Explanation: 研究一致顯示微調資料品質比數量重要得多。幾千個高品質範例通常優於數萬個嘈雜的範例。PII 移除、事實一致性和毒性過濾對企業部署都至關重要，而僅僅最大化數量可能引入噪音和有害模式。

Why others wrong: PII 移除對隱私合規至關重要；事實一致性防止幻覺；毒性過濾防止有害輸出。

Trap: 從預訓練的「更多資料總是更好」假設不適用於微調——策展比數量更重要。

Mnemonic: 微調資料 =「主廚品嘗菜單」而非「吃到飽自助餐」

## Q26
Type: single
Difficulty: 2
Tags: fine-tuning, adapter-merging
Concepts: lora-merging
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

訓練 LoRA 調適器後，團隊想部署時不要有單獨調適器權重的運行時開銷。什麼技術能實現這一點？

A. 將調適器權重剪枝為零
B. 將 LoRA 調適器矩陣（A 和 B）合併回基礎模型權重：W_new = W_base + α × B × A
C. 將 LoRA 調適器轉換為提示前綴
D. 將調適器蒸餾到更小的模型

Answer: B

Hint: LoRA 的低秩矩陣可以直接相乘並加到基礎權重上。

Explanation: LoRA 調適器由兩個低秩矩陣（A 和 B）組成，產生差值：ΔW = B × A。訓練後，這個差值可以按 α 縮放並直接加到原始權重矩陣上，產生一個沒有運行時調適器開銷的單一合併模型。

Why others wrong: 剪枝為零完全移除了調適；提示前綴是不同的 PEFT 方法；蒸餾需要單獨的訓練過程。

Trap: 認為合併模型是近似的——合併產生與單獨調適器方法數學上完全相同的輸出。

Mnemonic: LoRA 合併 =「將調味料烤進麵團」——相同味道，不需要額外的調味架

## Q27
Type: single
Difficulty: 3
Tags: fine-tuning, data-contamination
Concepts: benchmark-contamination
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

工程師發現微調資料集中意外包含了 MMLU 基準的範例。主要風險是什麼？

A. 模型將拒絕回答 MMLU 風格的問題
B. MMLU 評估分數會被人為抬高，對模型實際推理能力給出誤導性的衡量
C. 模型只能回答選擇題
D. 訓練會因資料格式衝突而失敗

Answer: B

Hint: 如果模型在訓練期間見過測試題，測試分數就沒有意義。

Explanation: 基準污染（在測試資料上訓練）意味著模型記憶了答案而非發展真正的理解。MMLU 分數作為效能指標變得不可靠，可能導致對實際無法泛化到新問題的模型過度自信地部署。

Why others wrong: 模型不會拒絕問題；它不會被限制在選擇題；訓練會正常進行但產生誤導性結果。

Trap: 認為污染只在模型記住確切答案時才重要——即使部分重疊也會偏頗評估並誇大能力。

Mnemonic: 基準污染 =「偷看答案卷」——你通過了考試但沒有學到東西

## Q28
Type: multi
Difficulty: 2
Tags: fine-tuning, dpo-mechanics
Concepts: dpo-training
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

以下哪兩個關於直接偏好最佳化（DPO）的陳述是正確的？（選擇兩個）

A. DPO 需要在策略最佳化之前訓練一個單獨的獎勵模型
B. DPO 使用配對偏好資料（選擇 vs 拒絕回應）直接最佳化策略模型
C. DPO 使用參考模型（SFT 檢查點）作為透過 KL 散度項的隱式獎勵
D. DPO 在訓練期間進行線上採樣，每步生成新回應

Answer: B, C

Hint: DPO 的核心洞見是重新參數化獎勵以消除獎勵模型。

Explanation: DPO 的數學洞見是，KL 約束獎勵最大化下的最優策略可以表示為策略本身相對於參考模型的函數，從而消除對顯式獎勵模型的需求。它直接在靜態偏好對（選擇/拒絕）上訓練，使用 SFT 模型作為損失函數中的參考。

Why others wrong: DPO 明確避免訓練獎勵模型（那是 RLHF）；DPO 使用離線/靜態偏好資料，而非線上採樣。

Trap: 將 DPO 和 RLHF 混淆——DPO 專門設計來跳過 RLHF 需要的獎勵模型步驟。

Mnemonic: DPO =「直接」意味著沒有中間人獎勵模型——直接比較選擇 vs 拒絕

## Q29
Type: single
Difficulty: 2
Tags: data-preparation, synthetic-data
Concepts: synthetic-data-generation
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

團隊需要為專業醫學領域微調模型但真實資料有限。他們計劃使用更大的模型生成合成訓練資料。最關鍵需要緩解的風險是什麼？

A. 合成資料太大無法放入記憶體
B. 合成資料可能放大教師模型的偏見和幻覺，創建錯誤變為「真實依據」的回饋循環
C. 合成資料總是產生比真實資料更差的模型
D. 結果模型將與教師模型大小相同

Answer: B

Hint: 從有缺陷的老師學習的學生會繼承並放大缺陷。

Explanation: LLM 生成的合成資料可能包含來自教師模型的事實錯誤、幻覺和偏見。當用作訓練資料時，這些錯誤在學生模型中被強化，可能使它們更難被發現，因為它們以高信心出現。在醫學領域，這尤其危險。

Why others wrong: 資料大小可透過串流管理；合成資料在策展和驗證後可以有效；模型大小與訓練資料來源無關。

Trap: 假設更大的教師模型產生完美的合成資料——即使最好的模型也會產生幻覺，而這些幻覺在學生的訓練中變成了「事實」。

Mnemonic: 合成資料風險 =「影印的影印」——每一代都降低品質

## Q30
Type: single
Difficulty: 1
Tags: fine-tuning, learning-rate-schedule
Concepts: warmup-cosine-decay
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

為什麼在 LLM 微調開始時通常使用學習率預熱？

A. 逐漸增加模型的詞彙表大小
B. 讓最佳化器的動量估計穩定後再進行大的梯度步驟，防止早期訓練不穩定
C. 在前幾步節省 GPU 記憶體
D. 在訓練開始前評估模型

Answer: B

Hint: Adam 最佳化器的移動平均值初始化為零——它們需要時間才能變得可靠。

Explanation: 在訓練開始時，Adam 的一階和二階動量估計初始化為零且不可靠，這可能導致過大的參數更新。預熱逐漸增加學習率，讓這些估計有時間穩定。這防止了可能破壞微調的災難性參數變化，在調適預訓練模型時尤其重要。

Why others wrong: 詞彙表在微調期間不改變；預熱不影響記憶體；評估與預熱分開。

Trap: 認為微調可以跳過預熱——它比預訓練更重要，因為預訓練的權重可能被大的初始更新破壞。

Mnemonic: 預熱 =「運動前做伸展」——在全速前準備好最佳化器

## Q31
Type: single
Difficulty: 2
Tags: data-preparation, tokenizer-training
Concepts: tokenizer-vocabulary
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

團隊正在為日語客服應用微調一個主要在英文文字上訓練的模型。他們注意到日文文字的分詞效果很差。最佳方法是什麼？

A. 用純日語分詞器替換並從零開始重新訓練
B. 用額外的日語 token 擴展現有分詞器詞彙表，並在微調前在日語資料上進行持續預訓練
C. 在訓練前將所有日語文字轉換為羅馬字（拉丁字元）
D. 對所有文字使用字元級分詞

Answer: B

Hint: 你可以擴展分詞器的詞彙表而不需要從零開始。

Explanation: 用領域特定的 token 擴展分詞器詞彙表並進行持續預訓練，讓模型能高效表示日語文字，同時保留現有知識。這比從零重新訓練實際得多，且避免了轉寫或字元級分詞的品質損失。

Why others wrong: 替換分詞器需要從零重新訓練所有嵌入；羅馬字失去語義細微差別；字元級分詞建立非常長的序列。

Trap: 認為分詞器詞彙表是永遠固定的——帶持續預訓練的詞彙表擴展是成熟的技術（用於 LLaMA 的非英語語言調適）。

Mnemonic: 分詞器擴展 =「在字典中加入新詞」——不要重寫整本書

## Q32
Type: single
Difficulty: 3
Tags: fine-tuning, catastrophic-forgetting-mitigation
Concepts: replay-regularization
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

一個為法律文件分析微調的模型失去了一般對話能力。哪種技術組合最能緩解災難性遺忘同時維持任務表現？

A. 在法律資料上訓練更多輪次
B. 在微調資料集中混入少量通用領域資料，並使用比預訓練更低的學習率
C. 增加模型大小
D. 移除所有正則化讓模型完全適應

Answer: B

Hint: 遺忘的解藥是提醒——在混合中保留一些通用資料。

Explanation: 資料重放（混入通用領域範例）維持模型的廣泛能力，同時學習新任務。較低的學習率防止覆寫預訓練知識的激進權重更新。這種組合在實現強任務表現的同時保留一般能力，是生產微調的標準方法。

Why others wrong: 任務資料上的更多輪次惡化遺忘；模型大小不能修復學習動態；移除正則化加速遺忘。

Trap: 認為可以僅用任務資料微調而保留一般能力——沒有重放資料，模型不可避免地專業化並遺忘。

Mnemonic: 災難性遺忘的解藥 =「學新科目 + 複習舊筆記」配「溫和的步調」

## Q33
Type: single
Difficulty: 2
Tags: fine-tuning, multi-task
Concepts: multi-task-fine-tuning
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

同時在多個任務上微調單一模型時，資料集混合的主要挑戰是什麼？

A. 每個任務需要不同的模型架構
B. 訓練資料較多的任務主導梯度更新，導致模型在較小資料集的任務上表現不佳，除非資料比例被仔細平衡
C. 多任務訓練總是降低單任務表現
D. 分詞器必須為每個任務重新訓練

Answer: B

Hint: 不平衡的資料比例導致不平衡的學習——某些任務得到「更多注意力」。

Explanation: 當資料集大小差異顯著時，較大的資料集貢獻更多梯度更新，使模型偏向這些任務。溫度採樣（上採樣小資料集、下採樣大資料集）等技術有助於跨任務平衡學習。沒有這個，小但重要的任務可能表現不佳。

Why others wrong: 所有任務共享相同架構；多任務可以透過遷移實際改善；分詞器是共享的。

Trap: 假設平等混合是最優的——最佳比例通常會相對於自然頻率過度採樣較小的資料集。

Mnemonic: 多任務混合 =「類別平衡」——給少數群體額外的代表

## Q34
Type: single
Difficulty: 1
Tags: data-preparation, annotation-quality
Concepts: inter-annotator-agreement
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

在建立用於對齊微調的偏好資料時，為什麼讓多位標註者標記每個範例很重要？

A. 增加範例總數
B. 衡量標註者間一致性，這表示標記的可靠性——低一致性表示範例模糊或指南不清
C. 確保資料集夠大用於訓練
D. 因為單一標註者無法理解提示

Answer: B

Hint: 標註者間的一致性衡量資料品質，而非僅數量。

Explanation: 標註者間一致性（以 Cohen's kappa 等指標衡量）表示標註者應用標記標準的一致性。低一致性揭示模糊的指南、主觀偏好或不清楚的範例，這些可能在訓練中注入噪音。過濾或重新標記低一致性範例可提高資料集品質。

Why others wrong: 多位標註者不增加範例數量；資料集大小與此無關；個別標註者是有能力的。

Trap: 不檢查一致性就使用多數投票——如果標註者持續不同意，多數標籤可能沒有意義。

Mnemonic: 標註者間一致性 =「如果裁判們意見不一致，評分規則有問題」

## Q35
Type: multi
Difficulty: 3
Tags: fine-tuning, lora-hyperparameters
Concepts: lora-rank-alpha
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

以下哪兩個關於 LoRA 超參數的陳述是正確的？（選擇兩個）

A. 秩 r 決定低秩矩陣的維度，較高的 r 允許更具表達力的調適，代價是更多可訓練參數
B. 縮放因子 alpha 應始終等於秩 r 以獲得最佳效能
C. LoRA 調適器通常應用於注意力投影矩陣（Q、K、V、O），但可以應用於任何線性層
D. 將秩 r 增加到 64 以上總是能改善效能，無論任務如何

Answer: A, C

Hint: 秩控制容量；alpha 控制調適的學習率。

Explanation: 秩 r 設定 A 和 B 矩陣的瓶頸維度，控制調適的表達力（較高 r = 更多參數 = 更多容量）。LoRA 最常應用於注意力投影但可以針對任何線性層，包括前饋層。Alpha 是控制調適幅度的縮放因子（有效縮放 = alpha/r），最佳值因任務而異。

Why others wrong: Alpha 不需要等於 r——常見做法是 alpha = 2×r 或不同值；較高秩有遞減回報，可能過擬合。

Trap: 「以防萬一」就設很高的 r——高秩可能在小資料集上過擬合，且抵消了 LoRA 的參數效率優勢。

Mnemonic: r =「多少新知識」（容量）；alpha =「多強烈地應用」（幅度）

## Q36
Type: single
Difficulty: 2
Tags: data-preparation, prompt-template
Concepts: chat-template-format
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

微調對話模型時，為什麼在微調和推論期間使用完全相同的對話範本（特殊 token、角色標記）至關重要？

A. 分詞器在不同範本下會崩潰
B. 模型學會將特定 token 模式與輪次邊界和角色行為關聯——不匹配的範本導致模型無法識別何時停止生成或採用哪個角色
C. 不同範本產生不同的模型架構
D. 對話範本只影響日誌記錄，不影響模型行為

Answer: B

Hint: 像 <|im_start|> 和 <|im_end|> 這樣的特殊 token 是模型學會遵循的信號。

Explanation: 對話模型依賴特定的 token 模式來識別說話者輪次、知道何時停止生成、區分系統指令和使用者訊息。如果推論範本與訓練不同（例如不同的角色標記或缺少停止 token），模型不會識別輪次邊界，導致角色混亂、無限生成或忽視系統提示。

Why others wrong: 分詞器處理任何範本；架構不變；範本從根本上影響生成行為。

Trap: 假設範本只是格式化——它們是模型已被訓練回應的控制信號。

Mnemonic: 對話範本 =「舞台提示」——錯誤的提示讓演員錯過台詞

## Q37
Type: single
Difficulty: 3
Tags: fine-tuning, reward-hacking
Concepts: reward-model-overoptimization
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

在 RLHF 訓練過程中，模型的獎勵分數持續增加，但人類評估者評價輸出品質在下降。這種現象叫什麼，如何解決？

A. 模式坍縮——透過提高學習率解決
B. 獎勵駭入（過度最佳化）——策略利用了獎勵模型中與實際品質不相關的模式；透過對參考模型的 KL 散度懲罰和獎勵模型集成來解決
C. 梯度爆炸——透過梯度裁剪解決
D. 過擬合——透過添加更多訓練資料解決

Answer: B

Hint: 獎勵模型是不完美的代理——過度最佳化它會發現其盲點。

Explanation: 獎勵駭入發生在策略學會生成在獎勵模型上得分很高但實際上不滿足人類偏好的輸出時。獎勵模型是不完美的代理，過度最佳化會利用其弱點。KL 散度懲罰約束策略保持接近 SFT 參考，防止極端利用。

Why others wrong: 這不是模式坍縮（那是統一輸出）；不是梯度爆炸（數值問題）；更多 RLHF 訓練資料不能修復代理問題。

Trap: 將獎勵分數作為真實依據——它們是可以被策略「博弈」的學習近似值。

Mnemonic: 獎勵駭入 =「應付考試」——高分不意味著真正學到東西；KL 懲罰 =「不要偏離太遠」

## Q38
Type: single
Difficulty: 1
Tags: data-preparation, data-formatting
Concepts: instruction-response-pairs
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

用於指令遵循的監督式微調（SFT）範例的標準格式是什麼？

A. 單一長段落文字
B. 由指令（輸入提示）和期望回應（輸出）組成的結構化對，可選包含系統訊息
C. 有四個選項的選擇題
D. 僅包含模型信心分數的 JSON 物件

Answer: B

Hint: SFT 教導模型為特定輸入產生特定輸出。

Explanation: SFT 範例由指令-回應對組成，指令定義模型應做什麼，回應是目標輸出。許多格式包含行為上下文的系統訊息。這種配對結構直接教導模型期望行為的輸入-輸出對應。

Why others wrong: 非結構化文字用於預訓練；選擇題是特定任務格式；信心分數是輸出而非訓練資料。

Trap: 認為 SFT 資料需要像預訓練資料一樣大——幾千個高品質指令-回應對就能顯著改變模型行為。

Mnemonic: SFT 資料 =「展示並告知」——展示指令，告知正確回應

## Q39
Type: single
Difficulty: 2
Tags: fine-tuning, continual-pretraining
Concepts: domain-adaptation
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

一個組織想將通用 LLM 調適到金融領域。他們有 50GB 的金融報告和文件。推薦的訓練管線是什麼？

A. 跳過預訓練直接在金融問答對上微調
B. 先在金融語料上進行持續預訓練（領域調適），然後在金融任務上進行指令調優，最後可選進行對齊
C. 僅在金融資料上從零預訓練新模型
D. 僅使用 RAG 而不做任何模型調適

Answer: B

Hint: 領域知識 → 任務技能 → 對齊：三階段管線。

Explanation: 持續預訓練透過金融語料的下一個 token 預測，讓模型接觸領域特定的語言、術語和知識。接著的指令調優教導模型將這些知識應用到特定任務。這個管線在添加深度領域專業知識的同時保留一般能力，是既定的最佳實踐。

Why others wrong: 跳過領域預訓練使模型缺乏金融術語理解；從零訓練浪費了一般知識；僅 RAG 可能無法處理領域特定推理。

Trap: 直接跳到指令調優——模型需要先「閱讀教材」（持續預訓練）再「做練習」（指令調優）。

Mnemonic: 領域調適管線 =「閱讀教材 → 做練習 → 取得回饋」

## Q40
Type: single
Difficulty: 3
Tags: fine-tuning, nemo-customization
Concepts: nemo-framework-finetuning
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

在 NVIDIA NeMo Framework 中，使用 NeMo 內建的 PEFT 支援相較於用通用函式庫手動實現 LoRA 的優勢是什麼？

A. NeMo 的 LoRA 使用不同的數學公式
B. NeMo 將 PEFT 與其分散式訓練基礎設施（Megatron 平行）整合，實現跨多 GPU 高效的 LoRA 微調，支持張量和管線平行
C. NeMo 的 LoRA 只能在 NVIDIA H100 GPU 上運行
D. NeMo 自動選擇最佳秩而無需使用者輸入

Answer: B

Hint: NeMo 的價值在於與其分散式訓練堆疊的整合，不是不同的數學。

Explanation: NeMo Framework 將 PEFT 方法與 Megatron-LM 的分散式訓練基礎設施整合，允許 LoRA 調適器使用張量平行和管線平行在多 GPU 和多節點設置上高效訓練。通用函式庫如 Hugging Face PEFT 通常需要額外工程才能與大規模模型平行工作。

Why others wrong: LoRA 數學是相同的；NeMo 在 A100 和其他 GPU 上也工作；秩選擇仍是超參數。

Trap: 認為 NeMo 只用於全量預訓練——其 PEFT 整合使大規模微調變得實際可行，無需編寫自訂的分散式訓練程式碼。

Mnemonic: NeMo PEFT =「知道如何使用你所有 GPU 的 LoRA」——開箱即用的分散式微調

## Q41
Type: single
Difficulty: 1
Tags: optimization, pipeline-parallelism
Concepts: pipeline-parallelism
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

在訓練大型語言模型的語境中，什麼是管線平行？

A. 同時運行多個獨立的訓練任務
B. 將模型的層分割到多個 GPU 上，每個 GPU 處理前向和反向傳播的不同階段
C. 在單個 GPU 上依序處理多個資料批次
D. 使用多個 CPU 在 GPU 訓練時預處理資料

Answer: B

Hint: 「管線」= 不同階段在不同設備上，如裝配線。

Explanation: 管線平行將連續的 Transformer 層組分配到不同的 GPU。每個 GPU 處理其指定的層（階段）並將激活傳遞到下一階段。微批次使多個批次能同時流過管線，減少閒置時間（管線氣泡）。

Why others wrong: 獨立任務是尷尬平行，不是管線；單 GPU 上的依序批次是梯度累積；CPU 預處理是資料管線最佳化。

Trap: 混淆管線平行和資料平行——管線垂直分割模型（按層），資料平行複製整個模型。

Mnemonic: 管線平行 =「裝配線」——每個 GPU 建構一部分，向下傳遞

## Q42
Type: single
Difficulty: 2
Tags: optimization, deepspeed-zero
Concepts: zero-stages
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

團隊在 8 個 GPU 上訓練 130 億模型。使用 DeepSpeed ZeRO Stage 2，什麼被分散到各 GPU 上？

A. 只有最佳化器狀態
B. 最佳化器狀態和梯度，但模型參數仍在每個 GPU 上複製
C. 最佳化器狀態、梯度和模型參數
D. 只有訓練資料

Answer: B

Hint: ZeRO 階段漸進地分散更多狀態：Stage 1=最佳化器，Stage 2=+梯度，Stage 3=+參數。

Explanation: ZeRO Stage 2 將最佳化器狀態和梯度分散到資料平行的 GPU 上，同時保持模型參數複製。這相比標準資料平行顯著減少每 GPU 的記憶體，同時避免 Stage 3 也分散參數所帶來的通訊開銷。Stage 2 通常是記憶體節省和通訊效率的最佳平衡。

Why others wrong: Stage 1 只分散最佳化器狀態；Stage 3 分散包括參數在內的一切；訓練資料分配是標準資料平行。

Trap: 為了最大節省直接跳到 ZeRO Stage 3——Stage 3 有更高的通訊開銷，可能減慢訓練。Stage 2 通常是實用的甜蜜點。

Mnemonic: ZeRO 階段 =「1-2-3 剝洋蔥」——Stage 1：最佳化器，Stage 2：+梯度，Stage 3：+參數

## Q43
Type: single
Difficulty: 3
Tags: optimization, fsdp
Concepts: fsdp-vs-deepspeed
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

PyTorch FSDP（完全分片資料平行）與 DeepSpeed ZeRO Stage 3 有什麼關係？

A. 它們是完全不同的方法，沒有概念重疊
B. FSDP 實現了與 ZeRO Stage 3 相同的核心概念——跨 GPU 分片參數、梯度和最佳化器狀態——但原生整合在 PyTorch 中
C. FSDP 總是比 DeepSpeed ZeRO Stage 3 快
D. FSDP 只適用於 100 億參數以下的模型

Answer: B

Hint: FSDP 是 PyTorch 對 DeepSpeed ZeRO Stage 3 的原生回應。

Explanation: FSDP 和 DeepSpeed ZeRO Stage 3 都在資料平行工作者之間完全分片模型參數、梯度和最佳化器狀態。FSDP 的優勢是原生 PyTorch 整合（無需外部函式庫），而 DeepSpeed 提供額外功能如 ZeRO-Infinity（卸載到 NVMe）。核心記憶體節省機制在概念上相同。

Why others wrong: 它們實現相同的核心概念；效能取決於實現細節和硬體；FSDP 適用於任何大小的模型。

Trap: 認為在 PyTorch 中需要 DeepSpeed 才能做分片訓練——FSDP 自 PyTorch 1.12 起原生提供此功能。

Mnemonic: FSDP =「PyTorch 的原生 ZeRO-3」——相同概念，內建在框架中

## Q44
Type: single
Difficulty: 2
Tags: optimization, gptq
Concepts: post-training-quantization
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

GPTQ 與簡單的最近值取整（RTN）量化在 LLM 上有什麼區別？

A. GPTQ 只在 NVIDIA GPU 上工作而 RTN 在任何硬體上工作
B. GPTQ 使用二階資訊（近似 Hessian）逐層最小化量化誤差，透過調整剩餘權重來補償每個權重的量化誤差
C. GPTQ 需要存取原始訓練資料
D. RTN 總是產生比 GPTQ 更好的品質

Answer: B

Hint: GPTQ 是「更聰明的取整」——它考慮取整一個權重如何影響輸出。

Explanation: GPTQ（基於最優腦量化框架）使用近似二階（Hessian）資訊一次量化一欄權重，調整後續權重以補償每次量化引入的誤差。這在低位元寬度（3-4 bit）下比單純的 RTN 產生顯著更好的品質。

Why others wrong: 兩者都在各種硬體上工作；GPTQ 需要小型校準集而非完整訓練資料；RTN 在低位元寬度下通常較差。

Trap: 認為所有量化方法等價——在 4-bit 下，GPTQ 可以維持接近 FP16 的品質，而 RTN 可能明顯退化。

Mnemonic: GPTQ =「帶誤差校正的智慧取整」——取整一個權重時調整鄰居

## Q45
Type: single
Difficulty: 2
Tags: optimization, awq
Concepts: activation-aware-quantization
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

AWQ（激活感知權重量化）如何決定哪些權重重要到需要以更高精度保留？

A. 隨機選擇權重並以全精度保留 10%
B. 透過觀察校準資料中哪些通道有大的激活幅度來識別顯著的權重通道，然後在量化前縮放這些通道以保護它們
C. 保持第一層和最後一層為全精度，量化其他所有層
D. 直接使用權重幅度——較大的權重被保留

Answer: B

Hint: 「激活感知」意味著它看的是流過權重的東西，而非權重本身。

Explanation: AWQ 的核心洞見是一小部分（約 1%）的權重通道因為處理大激活而格外重要。AWQ 不是保持這些權重為更高精度（混合精度），而是在統一量化前對顯著通道應用每通道縮放，使重要權重對量化誤差更具韌性。

Why others wrong: 選擇不是隨機的；首/末層保留是不同策略；權重幅度本身是重要性的不良指標——激活幅度才是重要的。

Trap: 混淆 AWQ 和混合精度量化——AWQ 使用縮放技巧在保持統一位元寬度的同時實現類似保護，這對硬體更友好。

Mnemonic: AWQ =「保護繁忙的高速公路」——承載大量流量（大激活）的通道得到特殊對待

## Q46
Type: single
Difficulty: 3
Tags: optimization, smoothquant
Concepts: activation-smoothing
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

SmoothQuant 解決了量化 Transformer 模型的一個根本挑戰。這個挑戰是什麼，SmoothQuant 如何解決？

A. 權重分佈太寬——SmoothQuant 裁剪極端權重值
B. 某些通道中的激活離群值使激活量化困難——SmoothQuant 透過應用每通道平滑因子將量化難度從激活轉移到權重
C. 注意力機制無法被量化——SmoothQuant 用量化友好的替代方案取代注意力
D. 梯度計算與量化權重不相容——SmoothQuant 使用直通估計器

Answer: B

Hint: 問題在激活而非權重——某些通道有極端的離群值。

Explanation: Transformer 激活通常在特定通道有集中的極端離群值，使 INT8 激活量化失去精度。SmoothQuant 引入數學等價的轉換：將激活通道除以平滑因子，並將對應的權重通道乘以相同因子。這將難度從激活「遷移」到權重，而權重更容易量化。

Why others wrong: 權重分佈相對良好；注意力可以被量化；這是關於推論量化，不是訓練梯度。

Trap: 不做平滑就應用激活量化——離群通道導致巨大量化誤差，降低輸出品質。

Mnemonic: SmoothQuant =「把顛簸的路（激活）的坑轉移到車上（權重）」

## Q47
Type: single
Difficulty: 1
Tags: optimization, fp8-training
Concepts: fp8-precision
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

在 NVIDIA Hopper（H100）GPU 上，FP8（8 位元浮點）訓練相比 BF16 訓練提供什麼優勢？

A. 提供更高的數值精度
B. 透過自動縮放將矩陣乘法的計算吞吐量大約提高一倍，同時維持相當的訓練品質
C. 減少所需的訓練輪次
D. 只能用於推論，不能用於訓練

Answer: B

Hint: H100 Tensor Cores 有專用的 FP8 硬體，吞吐量是 BF16 的兩倍。

Explanation: H100 的 Tensor Cores 支持接近 BF16 兩倍吞吐量的 FP8 操作（約 2000 TFLOPS FP8 vs 1000 TFLOPS BF16）。Transformer Engine 自動管理動態縮放以維持訓練穩定性，使 FP8 訓練對大多數 LLM 工作負載在最小品質損失下變得實用。

Why others wrong: FP8 精度更低（設計如此）；輪次數取決於收斂而非精度；FP8 在 H100 上用於訓練和推論。

Trap: 假設 FP8 總是降低品質——使用適當的動態縮放（Transformer Engine），FP8 訓練品質通常與 BF16 相當。

Mnemonic: H100 上的 FP8 =「一半的位元，兩倍的速度」——Transformer Engine 保持品質完好

## Q48
Type: single
Difficulty: 2
Tags: optimization, gradient-accumulation
Concepts: effective-batch-size
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

一位研究者有 4 個 GPU，每個 GPU 批次大小為 8，使用 4 步梯度累積。有效批次大小是多少？

A. 8
B. 32
C. 128
D. 512

Answer: C

Hint: 有效批次 = GPU 數 × 每 GPU 批次 × 累積步數。

Explanation: 有效批次大小計算為：GPU 數（4）× 每 GPU 批次大小（8）× 梯度累積步數（4）= 128。所有 GPU 上所有微批次的梯度在一次最佳化器步驟前被累積，使模型每次權重更新看到 128 個範例。

Why others wrong: 8 忽略了平行和累積；32 忽略了累積；512 計算錯誤。

Trap: 忘記包含梯度累積步數——它們像更多 GPU 一樣乘以有效批次大小。

Mnemonic: 有效批次 = GPU × 本地批次 × 累積 =「每次權重更新的總樣本數」

## Q49
Type: single
Difficulty: 3
Tags: optimization, communication-overlap
Concepts: computation-communication-overlap
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

在使用資料平行的分散式訓練中，將梯度通訊與反向計算重疊如何改善吞吐量？

A. 減少 GPU 之間通訊的總資料量
B. 在反向傳播仍在計算後面層的梯度時，開始前面層梯度的 all-reduce 通訊，將通訊延遲隱藏在計算之後
C. 完全消除梯度同步的需求
D. 使用 CPU 記憶體緩衝梯度，釋放 GPU 記憶體

Answer: B

Hint: 反向傳播逐層計算梯度——前面的層先完成。

Explanation: 在反向傳播期間，梯度從最後一層到第一層計算。一旦一層的梯度計算完成，其 all-reduce 通訊就可以在背景開始，而反向傳播繼續計算前面層的梯度。這重疊了通訊和計算，減少了有效的同步開銷。

Why others wrong: 通訊的資料量相同；梯度仍必須同步；這是 GPU 端的最佳化，而非 CPU 卸載。

Trap: 認為 all-reduce 必須等到整個反向傳播完成——逐層重疊是 PyTorch DDP 等框架中的標準最佳化。

Mnemonic: 梯度重疊 =「寫下一封信的同時寄出上一封」——不要等到所有事都做完

## Q50
Type: single
Difficulty: 2
Tags: optimization, continuous-batching
Concepts: in-flight-batching
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

連續（in-flight）批次處理如何比靜態批次處理改善 LLM 推論的 GPU 利用率？

A. 嚴格按順序逐一處理所有請求
B. 允許新請求填充已完成請求釋放的位置，無需等待整個批次完成，防止較短回應被較長回應阻塞
C. 增加所有請求的最大序列長度
D. 透過跨請求共享權重來減小模型大小

Answer: B

Hint: 靜態批次處理 =「所有人等最慢的人」；連續 =「做完就離開」。

Explanation: 在靜態批次處理中，批次只有在最長生成完成時才結束，使 GPU 因較短回應而閒置。連續批次處理在回應完成時動態將新請求插入釋放的位置，維持高 GPU 利用率。這在可變長度工作負載上可以提高 2-4 倍吞吐量。

Why others wrong: 逐一處理與批次處理相反；序列長度是每請求的；模型權重在批次推論中始終共享。

Trap: 認為靜態批次處理就足夠——對於可變長度輸出（聊天中非常常見），靜態批次處理在填充上浪費 50%+ 的 GPU 週期。

Mnemonic: 連續批次處理 =「旋轉門」——人們獨立進出，無需等待

## Q51
Type: multi
Difficulty: 3
Tags: optimization, tensor-parallelism-details
Concepts: column-row-parallel
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

在 Megatron-LM 針對 Transformer 前饋網路的張量平行中，以下哪兩個是正確的？（選擇兩個）

A. 第一個線性層按列分割，第二個線性層按行分割
B. 第一個線性層之後需要 all-reduce 通訊
C. GeLU 激活在每個 GPU 的分區上獨立應用，不需要通訊
D. 兩個線性層在相同維度上分割

Answer: A, C

Hint: 列平行接行平行允許 GeLU 在本地計算。

Explanation: Megatron-LM 將第一個前饋線性層按列分割（每個 GPU 獲得輸出特徵的子集），第二個按行分割（每個 GPU 獲得輸入特徵的子集）。這種巧妙的分割意味著 GeLU 可以在每個 GPU 的輸出上本地應用而無需通訊。All-reduce 僅在第二個線性層（行平行）之後需要，而非第一個之後。

Why others wrong: All-reduce 在第二層之後，不是第一層；兩層在不同維度上分割（列然後行）。

Trap: 認為每個分割操作都需要通訊——Megatron 的列-然後-行模式最小化了 all-reduce 呼叫。

Mnemonic: Megatron FFN =「列-GeLU-行-allreduce」——GeLU 存在於無通訊的區域中

## Q52
Type: single
Difficulty: 2
Tags: optimization, memory-estimation
Concepts: training-memory-budget
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

使用 Adam 最佳化器（FP32 最佳化器狀態）以 BF16 訓練 70 億參數模型，僅模型狀態（參數 + 梯度 + 最佳化器）大約需要多少 GPU 記憶體？

A. 約 14 GB
B. 約 28 GB
C. 約 56 GB
D. 約 112 GB

Answer: D

Hint: 計算位元組：參數（2B）+ 梯度（2B）+ Adam 狀態（4B×2 用於 m 和 v + 4B 主權重）= 每參數 16 位元組。

Explanation: 每個參數：BF16 參數（2 位元組）+ BF16 梯度（2 位元組）+ FP32 主權重（4 位元組）+ FP32 一階動量（4 位元組）+ FP32 二階動量（4 位元組）= 16 位元組。70 億參數：70 億 × 16 位元組 = 112 GB。這不包括激活，它們根據批次大小和序列長度額外增加。

Why others wrong: 14GB 只涵蓋 BF16 參數；28GB 涵蓋參數+梯度；56GB 忘記了最佳化器中的主權重。

Trap: 只計算模型參數大小（2 位元組 × 70 億 = 14GB）——最佳化器狀態主導訓練記憶體，而非模型權重。

Mnemonic: 使用 Adam 的訓練記憶體 ≈ 參數位元組的 16 倍——最佳化器狀態是記憶體大戶

## Q53
Type: single
Difficulty: 1
Tags: optimization, mixed-precision-inference
Concepts: weight-only-quantization
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

什麼是僅權重量化，為什麼它對 LLM 推論有效？

A. 它同時將權重和激活量化到 INT4
B. 它只將模型權重量化到低精度（INT4/INT8），同時保持激活為 FP16，減少記憶體頻寬瓶頸，因為 LLM 推論通常受記憶體限制
C. 它完全移除 50% 的權重
D. 它將所有計算轉換為整數運算

Answer: B

Hint: LLM 推論受記憶體頻寬限制——減少權重大小直接提高吞吐量。

Explanation: LLM 推論（特別是自回歸解碼）受記憶體頻寬而非計算的瓶頸。僅權重量化減少每次 token 生成從記憶體讀取的資料量，同時保持激活計算為更高精度以確保品質。權重在矩陣乘法期間動態反量化。

Why others wrong: 同時量化激活是另一種技術；權重剪枝不同於量化；計算使用混合精度而非純整數。

Trap: 認為量化只是為了節省存儲——對 LLM 推論而言，主要好處是減少記憶體頻寬消耗，直接提高吞吐量。

Mnemonic: 僅權重量化 =「書架上更小的書，閱讀品質不變」——記憶體頻寬是瓶頸

## Q54
Type: single
Difficulty: 3
Tags: optimization, pipeline-bubble
Concepts: interleaved-pipeline
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

什麼導致管線平行中的「管線氣泡」，交錯排程（虛擬管線階段）如何減少它們？

A. 氣泡由網路延遲引起——交錯排程使用更快的互連
B. 氣泡是管線預熱和冷卻期間的 GPU 閒置時間——交錯排程將多個非連續階段塊分配給每個 GPU，透過增加微批次相對於階段的比例來減少預熱/冷卻比例
C. 氣泡是記憶體洩漏——交錯排程使用垃圾收集
D. 氣泡由同步權重更新引起——交錯排程使用非同步 SGD

Answer: B

Hint: 在管線中，GPU 在等待管線填滿（預熱）和排空（冷卻）時是閒置的。

Explanation: 有 P 個管線階段和 M 個微批次，氣泡比例約為 (P-1)/M。交錯排程為每個 GPU 分配 V 個虛擬階段（非連續層塊），建立 V×P 個虛擬階段。這允許更多微批次同時流過管線，將氣泡比例降低到 (P-1)/(M×V)，代價是更多通訊。

Why others wrong: 氣泡是排程問題，不是網路延遲；它們不是記憶體洩漏；權重更新策略是分開的。

Trap: 假設更多管線階段總是有幫助——更多階段增加氣泡開銷；需要交錯來補償。

Mnemonic: 管線氣泡 =「裝配線預熱時間」；交錯 =「將每個工人的工作分成更小的部分，使生產線更快填滿」

## Q55
Type: single
Difficulty: 2
Tags: optimization, vllm-paged-attention
Concepts: paged-attention
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

vLLM 的 PagedAttention 解決了 LLM 服務中的什麼問題？

A. 加速注意力計算本身
B. 透過以非連續區塊（頁面）管理快取來消除 KV cache 記憶體碎片化，類似於作業系統虛擬記憶體，實現接近零浪費和跨請求的動態記憶體共享
C. 減少注意力頭數
D. 壓縮模型權重以節省記憶體

Answer: B

Hint: 想想「KV cache 的虛擬記憶體」——頁面而非連續配置。

Explanation: 傳統 KV cache 管理為每個請求的最大序列長度預先配置連續記憶體，平均浪費約 60-80% 的快取記憶體。PagedAttention 以固定大小的區塊存儲 KV cache，可以非連續、按需配置並跨請求共享（例如共同前綴）。這大幅提高記憶體效率和吞吐量。

Why others wrong: PagedAttention 管理記憶體，不是注意力速度；它不減少頭數；它關於 KV cache 而非權重壓縮。

Trap: 認為連續 KV cache 配置是高效的——大多數請求不會使用其完整配置長度，浪費了預先配置的記憶體。

Mnemonic: PagedAttention =「KV cache 的作業系統虛擬記憶體」——按需配置頁面，而非一大塊

## Q56
Type: multi
Difficulty: 2
Tags: optimization, quantization-comparison
Concepts: ptq-vs-qat
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

以下哪兩個陳述正確區分了訓練後量化（PTQ）和量化感知訓練（QAT）？（選擇兩個）

A. PTQ 在訓練完成後使用小型校準資料集應用，不需要重新訓練
B. QAT 在訓練期間使用假量化節點模擬量化，允許模型學會補償量化誤差
C. PTQ 總是產生比 QAT 更好的品質
D. QAT 不需要存取任何訓練資料

Answer: A, B

Hint: PTQ = 事後校準；QAT = 在迴圈中帶量化訓練。

Explanation: PTQ 使用校準資料確定縮放因子來量化預訓練模型，不需要梯度計算。QAT 在前向傳播中插入假量化操作，允許梯度透過直通估計器流過，使模型調整權重以適應量化。QAT 通常在低位元寬度下產生更好的品質但需要訓練資源。

Why others wrong: QAT 在非常低的位元寬度下通常產生比 PTQ 更好的品質；QAT 需要微調過程的訓練資料。

Trap: 當 PTQ 就足夠時預設使用 QAT——在 8-bit 下，PTQ 品質通常很優秀，QAT 的訓練成本不划算。

Mnemonic: PTQ =「縫完再量剪」；QAT =「帶著捲尺縫」

## Q57
Type: single
Difficulty: 3
Tags: optimization, sequence-parallelism
Concepts: sequence-parallel-attention
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

序列平行如何在 Megatron-LM 中補充張量平行以減少激活記憶體？

A. 它將詞彙表分割到各 GPU 上
B. 它為在張量平行中被複製的操作（如 LayerNorm 和 dropout）沿序列維度分割，減少這些層的每 GPU 激活記憶體
C. 它在不同 GPU 上運行不同序列
D. 它消除了 all-reduce 操作的需求

Answer: B

Hint: 在張量平行中，某些操作（LayerNorm）仍然被複製——序列平行解決了這個問題。

Explanation: 在張量平行中，LayerNorm 和 dropout 等操作在所有 GPU 上被複製，因為它們不參與張量平行分割。序列平行將這些操作沿序列維度分散到各 GPU，將 all-reduce 轉換為 reduce-scatter 和 all-gather 操作。這將這些層的每 GPU 激活記憶體減少了與張量平行度相等的倍數。

Why others wrong: 詞彙表平行是另一種技術；運行不同序列是資料平行；all-reduce 被 reduce-scatter/all-gather 取代，而非消除。

Trap: 認為張量平行單獨處理了所有激活記憶體——沒有序列平行的話，複製的層（LayerNorm、dropout）在每個 GPU 上仍然消耗完整的激活記憶體。

Mnemonic: 序列平行 =「共享 LayerNorm 工作」——張量平行在複製操作上的補充

## Q58
Type: single
Difficulty: 1
Tags: optimization, model-sharding
Concepts: model-parallelism-types
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

當模型太大無法放入單個 GPU 時，哪種平行類型最合適？

A. 資料平行——在每個 GPU 上複製模型
B. 模型平行（張量或管線）——將模型分割到多個 GPU 上
C. 梯度累積——依序處理較小的批次
D. 混合精度——降低權重的數值精度

Answer: B

Hint: 如果模型放不進一個 GPU，你必須把它分割到多個 GPU。

Explanation: 當模型超過單個 GPU 的記憶體時，必須將模型分割到各 GPU。張量平行將單個層分割到各 GPU，而管線平行將不同層分配到不同 GPU。兩者都能訓練和推論超過單 GPU 記憶體容量的模型。

Why others wrong: 資料平行複製完整模型，所以如果放不下就沒有幫助；梯度累積不減少峰值記憶體；混合精度有幫助但可能對非常大的模型不夠。

Trap: 認為帶梯度檢查點的資料平行總是能讓模型適配——對非常大的模型，模型平行是必要的。

Mnemonic: 模型對一個 GPU 太大 =「分割模型，而非分割資料」

## Q59
Type: single
Difficulty: 2
Tags: optimization, activation-checkpointing
Concepts: gradient-checkpointing-tradeoff
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

激活檢查點（梯度檢查點）在訓練期間節省記憶體。取捨是什麼？

A. 透過近似梯度降低模型品質
B. 透過在前向傳播時丟棄中間激活並在反向傳播時重新計算來節省記憶體，增加約 33% 的計算時間
C. 需要兩倍的 GPU
D. 只能用於小於 10 億參數的模型

Answer: B

Hint: 記憶體節省來自重新計算——你用計算換記憶體。

Explanation: 激活檢查點不存儲所有用於反向傳播的中間激活，而是只保存選定的檢查點，在反向傳播時重新計算其餘部分。這可以將激活記憶體從 O(n) 降低到 O(√n) 層，代價是需要對檢查點段進行一次額外的前向傳播，增加約 33% 的訓練時間開銷。

Why others wrong: 梯度是精確的，不是近似的；不需要額外 GPU；它適用於任何模型規模。

Trap: 認為激活檢查點改變了梯度——它產生數學上完全相同的梯度，只是計算效率較低。

Mnemonic: 激活檢查點 =「擦掉筆記然後在考試時重新推導」——相同答案，更多工作

## Q60
Type: single
Difficulty: 2
Tags: deployment, tensorrt-llm-optimization
Concepts: tensorrt-engine
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

TensorRT-LLM 在將模型轉換為推論時應用的主要最佳化是什麼？

A. 用更少的參數重新訓練模型
B. 應用核心融合、量化、KV cache 最佳化，並生成針對目標硬體最佳化的 GPU 特定核心
C. 將模型轉換為在 CPU 上運行
D. 用更簡單的架構替換 Transformer 層

Answer: B

Hint: TensorRT-LLM 是一個為特定 GPU 硬體最佳化模型的編譯器。

Explanation: TensorRT-LLM 透過將多個操作融合為單一 GPU 核心（減少記憶體傳輸）、應用量化、實現高效 KV cache 管理，以及為目標 GPU 架構生成硬體特定程式碼（如 H100 特定 Tensor Core 核心）來將模型編譯為最佳化的推論引擎。這些最佳化結合可以提供相比原生 PyTorch 推論 2-5 倍的加速。

Why others wrong: 它不重新訓練或減少參數；它以 GPU 為中心，不是 CPU；架構被保留，只是最佳化。

Trap: 認為在生產環境中直接跑 PyTorch 推論就行——像 TensorRT-LLM 這樣的專用推論引擎透過硬體特定最佳化提供巨大加速。

Mnemonic: TensorRT-LLM =「為你的特定 GPU 編譯和最佳化」——融合、量化、專業化

## Q61
Type: single
Difficulty: 2
Tags: deployment, triton-ensemble
Concepts: triton-model-pipeline
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

在 NVIDIA Triton Inference Server 中，模型集成是什麼？

A. 運行相同模型的多個副本以進行負載平衡
B. 一個有向無環圖（DAG），將多個模型串連在一起，一個模型的輸出餵入下一個，實現多步驟推論管線而無需客戶端編排
C. 對多個模型的預測進行平均的技術
D. 在伺服器上同時訓練多個模型

Answer: B

Hint: Triton 中的集成意味著「模型管線」，而非「模型平均」。

Explanation: Triton 的集成功能允許定義模型 DAG，中間結果在模型之間自動在伺服器端流動。例如：分詞器 → LLM → 後處理器可以是一個集成。這避免了每步客戶端和伺服器之間的往返，減少延遲並簡化客戶端程式碼。

Why others wrong: 負載平衡的多個副本是 Triton 的模型實例功能；預測平均是集成的不同含義；Triton 用於推論而非訓練。

Trap: 將 Triton 集成和 ML 集成方法（隨機森林、boosting）混淆——Triton 集成是推論管線，不是模型平均。

Mnemonic: Triton 集成 =「推論裝配線」——在伺服器端串連模型，無需客戶端往返

## Q62
Type: single
Difficulty: 1
Tags: deployment, model-versioning
Concepts: model-lifecycle
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

為什麼模型版本管理在生產 LLM 部署中很重要？

A. 隨時間增加模型的上下文視窗
B. 如果新部署導致品質退化，能夠回滾到先前版本，並支持版本間的 A/B 測試
C. 透過只保留最新版本來降低存儲成本
D. 自動重新訓練模型

Answer: B

Hint: 生產系統需要能夠回退——版本管理實現安全回滾。

Explanation: 模型版本管理追蹤生產中的不同模型迭代，能在新版本降低品質時快速回滾，支持用真實流量比較版本的 A/B 測試，並維護審計追蹤。沒有版本管理，恢復有問題的部署需要手動找到並重新部署先前的模型。

Why others wrong: 上下文視窗是架構性的，不是版本管理的關注點；版本管理保留多個版本，不只是最新的；重新訓練是單獨的過程。

Trap: 在沒有版本管理的情況下部署新模型——如果出問題，你需要重建或找到舊模型。

Mnemonic: 模型版本管理 =「電子遊戲中的存檔點」——隨時能回到過去

## Q63
Type: single
Difficulty: 3
Tags: deployment, speculative-decoding-deployment
Concepts: draft-model-selection
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

在生產中使用 TensorRT-LLM 部署推測解碼時，選擇草稿模型的關鍵考量是什麼？

A. 草稿模型應該與目標模型大小相同
B. 草稿模型必須與目標模型共享相同的詞彙表，並有高接受率同時顯著更快——通常小 10-20 倍，在接受率和草稿速度之間取捨
C. 草稿模型可以使用任何詞彙表，因為輸出會被目標重新生成
D. 草稿模型應該在與目標不同的資料集上微調

Answer: B

Hint: 草稿模型提出，目標模型處置——它們必須說同一種「語言」。

Explanation: 草稿和目標模型必須共享相同的分詞器/詞彙表，因為目標模型使用自己的機率分佈驗證草稿 token。草稿模型應足夠小，使生成 K 個 token 比目標生成 1 個 token 更快，同時維持足夠高的接受率使推測有價值。

Why others wrong: 相同大小的草稿違背了目的；不同詞彙表使驗證不可能；資料集對齊有助於接受率。

Trap: 選擇盡可能最小的草稿模型——太小意味著低接受率，可能使推測解碼比標準自回歸更慢。

Mnemonic: 草稿模型選擇 =「思路相似的快速寫手」——速度 + 一致性

## Q64
Type: single
Difficulty: 2
Tags: deployment, load-balancing
Concepts: llm-load-balancing
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

對於具有不同請求長度的 LLM 服務系統，為什麼簡單的輪詢負載平衡不是最優的？

A. 它將太多請求發送到單個 GPU
B. 它不考慮不同請求的計算成本差異巨大——2000 token 的生成比 50 token 的要長得多，導致 GPU 利用率不均
C. 輪詢只適用於 HTTP，不適用於 gRPC
D. 它需要更多網路頻寬

Answer: B

Hint: LLM 請求不平等——長回應會壟斷 GPU。

Explanation: 與傳統網路服務不同，LLM 請求的計算成本根據輸入和輸出長度差異巨大。輪詢可能將多個長生成請求發送到一個 GPU，而其他 GPU 因短請求而閒置。負載感知平衡（基於當前佇列深度、待處理 token 或 GPU 利用率）更均勻地分配工作。

Why others wrong: 輪詢按數量均勻分配，不是按成本；它適用於任何協議；頻寬不是問題。

Trap: 將標準網路伺服器負載平衡應用於 LLM 服務——請求成本的高度變異需要更智慧的路由。

Mnemonic: LLM 負載平衡 =「不要把所有推滿貨物的客戶都給同一個收銀員」——按工作負載平衡，而非只按人數

## Q65
Type: single
Difficulty: 1
Tags: deployment, latency-metrics
Concepts: ttft-tpot
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

TTFT 和 TPOT 在 LLM 推論效能中衡量什麼？

A. TTFT 衡量總訓練時間；TPOT 衡量每任務最佳化的參數
B. TTFT（首 Token 生成時間）衡量第一個輸出 token 生成前的延遲；TPOT（每輸出 Token 時間）衡量連續輸出 token 之間的平均時間
C. 兩者都衡量不同階段的 GPU 記憶體使用量
D. TTFT 衡量分詞器速度；TPOT 衡量後處理時間

Answer: B

Hint: TTFT =「多久我才能看到東西」；TPOT =「串流有多快」。

Explanation: TTFT 捕捉使用者體驗的初始延遲（包括提示處理/預填充），這對互動式應用至關重要。TPOT 衡量生成期間的串流速度，影響完整回應的交付速度。兩者結合比簡單的吞吐量指標更好地表徵使用者的延遲體驗。

Why others wrong: 兩者都與訓練無關；它們衡量延遲而非記憶體；它們關於模型推論，而非分詞器或後處理。

Trap: 只衡量吞吐量（token/秒）——一個高吞吐量的系統如果 TTFT 很高，使用者體驗仍然可能很差。

Mnemonic: TTFT =「看到第一個字的時間」；TPOT =「打字游標的速度」

## Q66
Type: single
Difficulty: 2
Tags: deployment, nim-microservice
Concepts: nvidia-nim
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

什麼是 NVIDIA NIM，它如何簡化 LLM 部署？

A. 用於從零建構模型的訓練框架
B. 預建構、最佳化的推論微服務容器，將模型與 TensorRT-LLM、Triton 和 OpenAI 相容 API 打包在一起，一個 docker 命令即可部署
C. 僅限雲端、無法本地部署的服務
D. 用於準備訓練資料的資料集管理工具

Answer: B

Hint: NIM =「NVIDIA 推論微服務」——在一個容器中提供服務模型所需的一切。

Explanation: NVIDIA NIM 將最佳化模型與完整推論堆疊（TensorRT-LLM 引擎、Triton 服務、API 端點）打包到單一容器映像中。使用者可以用 `docker run` 部署生產就緒的推論，獲得最佳化效能而無需手動配置 TensorRT 編譯、Triton 設置或 API 實現。

Why others wrong: NIM 用於推論而非訓練；它可以本地或任何雲端部署；它用於模型服務而非資料管理。

Trap: 認為需要手動配置 TensorRT-LLM + Triton + API 伺服器——NIM 將所有這些捆綁到一個即用型容器中。

Mnemonic: NIM =「盒裝模型」——docker run 就開始服務

## Q67
Type: multi
Difficulty: 3
Tags: deployment, serving-optimization
Concepts: prefill-decode-separation
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

將預填充（提示處理）和解碼（token 生成）分離到不同 GPU 池提供哪兩個好處？（選擇兩個）

A. 允許使用針對每個階段最佳化的不同 GPU 類型——計算密集型 GPU 用於預填充，記憶體頻寬最佳化的 GPU 用於解碼
B. 確保所有請求具有相同的延遲
C. 防止長預填充操作阻塞進行中請求的解碼操作，減少 TPOT 抖動
D. 完全消除對 KV cache 的需求

Answer: A, C

Hint: 預填充是計算密集型的；解碼是記憶體頻寬密集型的——它們有不同的硬體偏好。

Explanation: 預填充（處理完整提示）是計算密集型的（平行矩陣操作），而解碼（每次生成一個 token）是記憶體頻寬密集型的。分離它們允許硬體專業化，並防止大預填充請求阻塞另一個請求的解碼階段，這會導致可見的生成卡頓。

Why others wrong: 延遲仍因請求大小而異；KV cache 仍然需要——它從預填充 GPU 傳輸到解碼 GPU。

Trap: 在相同 GPU 上運行預填充和解碼更簡單但會導致「解碼停頓」——當大預填充請求到來時解聚能解決這個問題，代價是架構複雜性。

Mnemonic: 預填充-解碼分離 =「廚房（預填充）和出餐口（解碼）分開」——烹飪不會減慢上菜速度

## Q68
Type: single
Difficulty: 2
Tags: deployment, health-monitoring
Concepts: inference-monitoring
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

對於生產 LLM 服務系統，偵測 KV cache 壓力最關鍵的監控指標是什麼？

A. CPU 使用率百分比
B. KV cache 使用率百分比——當接近 100% 時，新請求必須排隊或被拒絕，現有請求可能被搶占
C. 網路封包丟失率
D. 磁碟 I/O 吞吐量

Answer: B

Hint: KV cache =「工作記憶」——當它滿了，就不能開始新對話。

Explanation: KV cache 存儲所有活躍請求的注意力狀態。當使用率接近 100% 時，伺服器無法接受新請求（排隊增加 TTFT）且可能需要搶占（交換出）活躍請求的快取以服務新請求。監控 KV cache 使用率能在使用者體驗降低前主動擴展。

Why others wrong: CPU 使用率很少是 GPU 推論的瓶頸；網路和磁碟指標對 LLM 服務來說是次要的。

Trap: 只監控 GPU 計算使用率——GPU 可以計算閒置但記憶體已滿，因 KV cache 耗盡而拒絕新請求。

Mnemonic: KV cache 壓力 =「餐廳客滿」——監控座位使用率，而非只是廚房活動

## Q69
Type: single
Difficulty: 1
Tags: deployment, api-rate-limiting
Concepts: rate-limiting
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

為什麼基於 token 的速率限制（每分鐘 token 數）比基於請求的速率限制更適合 LLM API？

A. Token 限制更容易實現
B. 不同請求根據輸入/輸出 token 數量消耗差異巨大的計算量——10 token 的請求和 10,000 token 的請求成本非常不同，儘管都是「一個請求」
C. Token 限制能防止所有形式的濫用
D. 現代 API 閘道器不支持請求限制

Answer: B

Hint: 「一個請求」在成本上可以差異 1000 倍——請求計數無法捕捉這一點。

Explanation: LLM 推論成本隨 token 數量而非請求數量增長。生成 4000 token 的請求大約比生成 40 token 的成本高 100 倍。基於 token 的速率限制透過考慮實際計算消耗來確保公平的資源分配，防止少數大請求壟斷容量。

Why others wrong: Token 限制需要追蹤 token，更複雜；沒有速率限制能防止所有濫用；現代閘道器支持兩種方式。

Trap: 從傳統 API 使用每分鐘請求數限制——一個使用者可能發送幾個非常大的請求，消耗比數百個小請求更多的資源。

Mnemonic: Token 速率限制 =「按重量收費，而非按包裹收費」——重的包裹運送成本更高

## Q70
Type: single
Difficulty: 3
Tags: deployment, canary-deployment
Concepts: progressive-rollout
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

團隊正在部署新微調的 LLM 以取代目前的生產模型。他們實施金絲雀部署，將 5% 的流量發送到新模型。哪些指標應該觸發自動回滾？

A. 只有延遲增加——品質指標需要人工審查
B. 以下任何一項的顯著退化：TTFT/TPOT 延遲百分位、輸出品質分數（如果有自動評估的話）、錯誤率，或安全分類器觸發率與基線模型相比
C. 與舊模型相比輸出分佈的任何變化
D. 只有新模型崩潰時——品質差異是預期的

Answer: B

Hint: 金絲雀回滾應涵蓋延遲、品質、錯誤和安全性——任何一項退化都是警訊。

Explanation: 全面的金絲雀部署監控多種信號類型：延遲（TTFT、TPOT p50/p99）、錯誤率（超時、OOM、格式錯誤的輸出）、品質指標（如果有 LLM 裁判等自動評估的話）和安全性（毒性分類器觸發、拒絕率）。任何類別相對基線的顯著退化都應觸發自動回滾以防止使用者影響。

Why others wrong: 僅延遲錯過品質和安全退化；新模型預期會有一些輸出變化；等待崩潰錯過了微妙的品質下降。

Trap: 只監控基礎設施指標（延遲、錯誤）——一個模型可以快速無錯地服務但產生更差品質的輸出。

Mnemonic: 金絲雀指標 =「速度 + 品質 + 安全 + 錯誤」——四項都必須是綠色才能繼續

## Q71
Type: single
Difficulty: 2
Tags: deployment, gpu-utilization
Concepts: mig-partitioning
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

NVIDIA Multi-Instance GPU（MIG）允許將 H100 分割為隔離的 GPU 實例。MIG 何時對 LLM 推論最有益？

A. 服務需要所有 GPU 資源的單一模型時
B. 同時服務多個小模型或不同模型版本時，每個需要保證的資源和硬體隔離
C. 訓練需要所有 GPU 記憶體的模型時
D. 運行使用完整 GPU 的批次處理任務時

Answer: B

Hint: MIG =「一個物理 GPU 上的多個虛擬 GPU」——當你需要隔離時很有用。

Explanation: MIG 將單個 GPU 分割為最多 7 個隔離實例，每個具有專用的計算、記憶體和記憶體頻寬。這非常適合在一個 H100 上服務多個較小模型（70 億、130 億）或不同版本，提供硬體級隔離而無 GPU 時間共享的開銷。每個實例作為獨立 GPU 運行。

Why others wrong: 單一大模型受益於完整 GPU；訓練通常需要所有資源；批次處理同樣受益於完整 GPU 存取。

Trap: 對單一 700 億模型使用 MIG——這會減少可用資源。MIG 用於多路復用較小工作負載。

Mnemonic: MIG =「GPU 公寓大樓」——將一個 GPU 分成不同租戶的隔離單元

## Q72
Type: single
Difficulty: 2
Tags: deployment, streaming-inference
Concepts: server-sent-events
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

為什麼串流（逐 token）輸出交付對生產 LLM API 很重要？

A. 減少生成所需的總計算量
B. 透過立即顯示部分結果顯著改善感知延遲——使用者在 TTFT 後看到第一個 token，而非等待整個回應完成
C. 提高模型精度
D. 減少伺服器的記憶體使用

Answer: B

Hint: 使用者偏好看到部分進度，而非盯著空白螢幕。

Explanation: 串流透過 Server-Sent Events（SSE）或 WebSocket 在生成時交付 token。使用者在 TTFT 後看到第一個字（通常不到 1 秒），而非等待整個回應（長輸出可能需要 10+ 秒）。儘管總生成時間相同，這大幅改善感知響應性。

Why others wrong: 總計算量相同；模型精度不變；伺服器記憶體使用相同或稍有不同。

Trap: 認為串流只是 UX 偏好——對長回應，非串流使應用感覺像壞掉了，10+ 秒的空白等待。

Mnemonic: 串流 =「看著頁面列印」 vs 非串流 =「等待傳真到達」

## Q73
Type: single
Difficulty: 3
Tags: deployment, kv-cache-management
Concepts: prefix-caching
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

前綴快取（也稱為提示快取）如何改善 LLM 服務系統的吞吐量？

A. 快取重複提示的最終輸出
B. 重用跨多個請求為共享提示前綴計算的 KV cache，避免對常見系統提示、少樣本範例或 RAG 上下文的冗餘預填充計算
C. 將模型權重存儲在 CPU 快取中以便更快存取
D. 透過快取常用層來減小模型大小

Answer: B

Hint: 許多請求共享相同的系統提示——為什麼每次都要計算其 KV cache？

Explanation: 在生產中，許多請求共享相同的提示前綴（系統提示、少樣本範例、RAG 前言）。前綴快取對這些共享前綴的 KV cache 只計算一次並跨請求重用，跳過共享部分的預填充計算。這可以將具有長共享前綴的請求的 TTFT 減少 50-80%。

Why others wrong: 輸出快取是分開的（且違背了 LLM 的目的）；這是關於 GPU 記憶體而非 CPU 快取；模型權重不涉及。

Trap: 認為前綴快取只對完全相同的請求有幫助——即使部分共享前綴也受益，且該技術對使用者透明。

Mnemonic: 前綴快取 =「共享教材」——多個學生從一本書閱讀，而非每人各買一本

## Q74
Type: single
Difficulty: 1
Tags: deployment, graceful-shutdown
Concepts: zero-downtime-deployment
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

更新 LLM 推論服務時，為什麼在關閉舊實例前排空現有請求很重要？

A. 節省計算成本
B. 避免突然終止進行中的生成，這會向使用者返回不完整的回應並浪費已投入的計算
C. 為新實例釋放 GPU 記憶體
D. 因為 GPU 在處理時無法停止

Answer: B

Hint: 截斷一個生成到一半的回應既浪費又令使用者沮喪。

Explanation: LLM 回應可能需要數秒到數分鐘來生成。突然終止推論伺服器會終止所有進行中的生成，返回不完整或錯誤的回應。優雅關閉停止接受新請求同時允許現有生成完成，確保所有使用者在實例下線前收到完整回應。

Why others wrong: 與使用者影響相比，成本節省很小；記憶體在排空後才會釋放；GPU 可以隨時被（強制）停止。

Trap: 使用無狀態網路服務的滾動部署策略——LLM 推論是有狀態的（持續生成），需要感知生成的排空。

Mnemonic: 優雅關閉 =「讓所有人吃完再關餐廳」

## Q75
Type: single
Difficulty: 2
Tags: deployment, cost-optimization
Concepts: batch-vs-realtime
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

一個組織每天透過 LLM 處理 100,000 封客戶電子郵件進行分類。結果需要在 4 小時內完成，不需要即時。什麼部署策略最能降低成本？

A. 全天候運行的持久即時 API 伺服器
B. 批次處理搭配自動擴展 GPU 實例，啟動、處理所有郵件後終止——避免在離峰時段為閒置的 GPU 時間付費
C. 在 CPU 伺服器上逐一處理郵件
D. 使用最昂貴的 GPU 以獲得最快處理速度

Answer: B

Hint: 如果不需要即時結果，就不要為即時基礎設施付費。

Explanation: 使用臨時計算實例（如 spot/可搶占 GPU）的批次處理比維護持續運行的推論伺服器便宜得多。有 4 小時的窗口，系統可以排隊所有郵件，啟動大批次大小的 GPU 實例以獲得最大吞吐量，完成後終止。這避免了持久伺服器 20+ 小時閒置時間的費用。

Why others wrong: 全天候伺服器在閒置時間上浪費金錢；CPU 處理 10 萬封郵件太慢；昂貴 GPU 對延遲不敏感的工作負載可能不划算。

Trap: 對批次工作負載預設使用即時服務——許多生產 LLM 用例（分類、擷取、摘要）不需要亞秒延遲。

Mnemonic: 批次處理 =「夜班工人」——在便宜的時候做工作，而非即時

## Q76
Type: multi
Difficulty: 3
Tags: deployment, multi-model-serving
Concepts: model-routing
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

在生產 LLM 系統中，智慧模型路由常用哪兩種策略？（選擇兩個）

A. 不論複雜度將所有請求路由到最大的可用模型
B. 使用輕量分類器評估請求複雜度，將簡單查詢路由到較小、較快的模型，複雜的路由到較大的模型
C. 基於估計的輸入/輸出 token 數量路由——將短請求發送到批次最佳化的實例，長請求發送到串流最佳化的實例
D. 為每個請求隨機選擇模型

Answer: B, C

Hint: 智慧路由將請求特性與正確的模型/基礎設施匹配。

Explanation: 基於複雜度的路由使用分類器（或啟發式）將簡單任務（分類、擷取）發送到高效的較小模型（如 70 億），將複雜推理路由到較大模型（如 700 億+），最佳化成本-品質的取捨。基於長度的路由透過將請求特性與針對不同工作負載特性最佳化的實例配置匹配來最佳化基礎設施使用。

Why others wrong: 總是使用最大模型在簡單任務上浪費資源；隨機路由忽略最佳化機會。

Trap: 認為一個模型能高效服務所有需求——生產系統越來越多使用模型路由來平衡成本、延遲和品質。

Mnemonic: 模型路由 =「急診室分診」——評估嚴重程度並發送到正確的專家

## Q77
Type: single
Difficulty: 2
Tags: deployment, observability
Concepts: llm-tracing
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

在除錯基於 RAG 的 LLM 應用中的品質問題時，哪種可觀測性方法提供最有用的診斷資訊？

A. 只監控最終回應延遲
B. 分散式追蹤，捕捉管線的每個步驟——嵌入查詢、檢索結果、重排序分數、提示組裝和 LLM 生成——在每個階段記錄輸入/輸出
C. 只檢查 HTTP 回應碼是否為 200
D. 監控 GPU 溫度

Answer: B

Hint: RAG 管線有多個階段——你需要對每個階段的可見性來找到薄弱環節。

Explanation: RAG 品質問題可能源自管線的任何階段：不良嵌入、不相關的檢索、不好的重排序、次優的提示構建或儘管有好上下文仍產生幻覺的 LLM。帶有每階段記錄的分散式追蹤讓你精確定位管線在哪裡出了問題——文件被檢索但沒被使用？還是被使用但答案仍然錯誤？

Why others wrong: 端到端延遲不表示品質；HTTP 200 只表示請求成功；GPU 溫度是基礎設施而非應用可觀測性。

Trap: 將 RAG 視為黑盒——沒有階段級可觀測性，你無法區分檢索失敗和生成失敗。

Mnemonic: RAG 追蹤 =「每道門上的安全攝影機」——看到流程在哪裡出了問題

## Q78
Type: single
Difficulty: 1
Tags: deployment, model-format
Concepts: model-serialization
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

GGUF 格式在 LLM 部署中常用於什麼？

A. 在多 GPU 上訓練大型模型
B. 用於量化模型存儲和 CPU/GPU 推論的單一檔案格式，在 llama.cpp 生態系統中流行，用於高效的本地部署
C. 存儲訓練資料集
D. 在程式碼中定義模型架構

Answer: B

Hint: GGUF = 一個包含載入和運行量化模型所需一切的檔案。

Explanation: GGUF（GPT-Generated Unified Format）是一種二進位格式，在單一檔案中存儲模型權重、架構中繼資料和分詞器資訊。它支持各種量化等級（Q4、Q5、Q8），是基於 llama.cpp 推論的標準格式，無需完整訓練框架即可實現高效的 CPU 和 GPU 推論。

Why others wrong: GGUF 用於推論而非分散式訓練；它存儲模型權重而非資料集；架構嵌入在檔案中繼資料中，不是另外定義的。

Trap: 認為 GGUF 只用於 CPU 推論——它透過 llama.cpp 的 CUDA 後端也支持 GPU 推論。

Mnemonic: GGUF =「行李箱中的模型」——一個可攜帶的檔案，任何地方都能推論

## Q79
Type: single
Difficulty: 3
Tags: deployment, context-window-management
Concepts: sliding-window-serving
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

在生產聊天應用中，對話可能超過模型的上下文視窗。處理此問題最穩健的方法是什麼？

A. 在不通知使用者的情況下靜默截斷最早的訊息
B. 使用滑動視窗結合摘要——保留最近訊息的原文同時摘要較早的上下文，並在上下文被壓縮時通知使用者
C. 拒絕超過上下文視窗的請求
D. 對話太長時自動重置

Answer: B

Hint: 完全丟失舊上下文和保留一切都不是理想的——結合保留和壓縮。

Explanation: 帶摘要的滑動視窗保留最近上下文的原文（對連貫性重要）同時將較早訊息壓縮為摘要（以較低 token 成本保留關鍵資訊）。這在不硬性截斷的情況下維持對話連貫性。關於上下文管理的透明度有助於使用者理解潛在的資訊丟失。

Why others wrong: 靜默截斷在使用者不知道的情況下丟失資訊；拒絕破壞使用者體驗；重置丟失所有上下文。

Trap: 從開頭靜默截斷——使用者可能引用已被靜默丟棄的較早對話部分，造成令人困惑的「失憶」。

Mnemonic: 上下文管理 =「前情提要摘要 + 完整當前集」——電視劇重播方式

## Q80
Type: single
Difficulty: 1
Tags: evaluation, automated-metrics
Concepts: rouge-bleu
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

使用 BLEU 和 ROUGE 分數評估 LLM 輸出的根本限制是什麼？

A. 計算成本太高
B. 它們衡量與參考文字的表面詞語重疊，無法捕捉語義等價——用不同詞語但相同意義的改寫得分很低
C. 只能用於分類任務
D. 需要 GPU 加速

Answer: B

Hint: 兩個句子可以用完全不同的詞說同樣的事。

Explanation: BLEU（n-gram 重疊精確率）和 ROUGE（n-gram 重疊召回率）在詞語/n-gram 級別比較生成文字和參考文字。它們懲罰有效的改寫並獎勵詞級複製，使它們成為開放式生成的不良指標，因為存在許多正確的表述。這就是為什麼 LLM 裁判和人類評估更受青睞的原因。

Why others wrong: 兩個指標計算成本都很低；它們適用於任何文字生成任務；它們在 CPU 上運行，不需要特殊硬體。

Trap: 在 LLM 開發中最佳化 BLEU/ROUGE——高分不一定表示高品質，低分也不一定表示低品質。

Mnemonic: BLEU/ROUGE =「拼寫檢查器，不是意義檢查器」——計算匹配的詞，錯過匹配的想法

## Q81
Type: single
Difficulty: 2
Tags: evaluation, llm-judge
Concepts: llm-as-judge
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

使用 LLM 作為裁判評估另一個 LLM 的輸出時，應該明確測試和緩解哪種偏見？

A. 裁判 LLM 從不同意被評估模型
B. 位置偏見——裁判傾向於偏好配對比較中先（或後）呈現的回應，無論品質如何
C. 裁判總是給出完美分數
D. 裁判只評估英文文字

Answer: B

Hint: 交換回應 A 和 B 的順序——裁判的偏好會改變嗎？

Explanation: LLM 裁判表現出系統性位置偏見，通常偏好配對比較中先呈現的回應。緩解措施包括以兩種順序呈現每一對並檢查一致性、跨順序平均分數，或使用帶評分準則的單一回應評估代替配對比較。

Why others wrong: 裁判不會絕對地同意或不同意；它們產生可變分數；多語言支持取決於裁判模型。

Trap: 在不測試偏見的情況下信任 LLM 裁判結果——即使 GPT-4 這樣強大的模型在配對評估中也表現出位置偏見。

Mnemonic: LLM 裁判偏見 =「總是選菜單上的第一道開胃菜」——透過交換位置來測試

## Q82
Type: single
Difficulty: 2
Tags: evaluation, mt-bench
Concepts: multi-turn-evaluation
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

MT-Bench 與 MMLU 等單輪基準在評估 LLM 方面有什麼區別？

A. MT-Bench 測試事實知識而 MMLU 測試推理
B. MT-Bench 評估多輪對話品質，包括指令遵循、跨輪次連貫性和基於先前上下文構建的能力，這是單輪基準無法評估的
C. MT-Bench 使用選擇題格式而 MMLU 使用開放式
D. MT-Bench 只用於程式設計模型

Answer: B

Hint: 「MT」代表「多輪」——它測試對話而非單次回答。

Explanation: MT-Bench 呈現 8 個類別的 80 個多輪問題，其中第二輪基於第一輪構建（例如在事實性回答後要求「現在把它改寫成詩」）。這測試了單輪基準錯過的能力：跨輪次維持上下文、遵循細化指令和一致性。它使用 GPT-4 作為裁判，以 1-10 分評分。

Why others wrong: 兩者測試不同方面；MMLU 是選擇題而 MT-Bench 是開放式（與選項 C 相反）；MT-Bench 涵蓋寫作、推理、數學、程式設計等。

Trap: 假設高 MMLU 分數意味著好的對話能力——MMLU 測試靜態知識；MT-Bench 測試動態互動品質。

Mnemonic: MT-Bench =「測試對話，而非僅第一個答案」

## Q83
Type: single
Difficulty: 1
Tags: responsible-ai, content-filtering
Concepts: safety-classifiers
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

在生產 LLM 部署中，安全分類器應該放在推論管線的哪裡？

A. 只在輸入提示上
B. 在輸入提示（偵測有害請求）和輸出（捕捉有害生成）上，在 LLM 周圍建立安全三明治
C. 只在輸出上
D. 如果模型經過指令調優則不需要安全分類器

Answer: B

Hint: 威脅可以來自使用者輸入和模型輸出——兩側都要防護。

Explanation: 輸入分類器在提示到達模型前偵測提示注入、越獄嘗試和有害請求。輸出分類器捕捉模型儘管經過安全訓練仍然生成的有害內容——沒有模型是完全安全的。這種雙層方法（常稱為護欄）提供對抗對抗性使用者和模型失敗的縱深防禦。

Why others wrong: 僅輸入錯過有害生成；僅輸出在越獄請求上浪費計算；指令調優減少但不消除有害輸出。

Trap: 僅依賴 RLHF/安全訓練——即使對齊過的模型在邊界案例中也可能被操縱或產生有害內容。

Mnemonic: 安全三明治 =「門口檢查身份證（輸入）加離開時檢查包包（輸出）」

## Q84
Type: single
Difficulty: 3
Tags: responsible-ai, differential-privacy
Concepts: dp-fine-tuning
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

差分隱私（DP）如何應用於 LLM 微調，其主要取捨是什麼？

A. DP 加密訓練資料使模型無法讀取
B. DP-SGD 在訓練期間向梯度添加校準噪音，提供個別訓練範例無法從模型中擷取的數學保證，代價是與隱私預算（epsilon）成正比的模型品質下降
C. DP 防止所有形式的提示注入
D. DP 使模型更小以保護資料

Answer: B

Hint: DP 向梯度添加噪音——更多噪音 = 更多隱私但模型更不精確。

Explanation: 差分隱私隨機梯度下降（DP-SGD）裁剪每範例梯度並在最佳化器步驟前添加高斯噪音。隱私預算（epsilon, ε）控制噪音規模：較小的 ε 提供更強的隱私保證但降低模型品質。這在對敏感資料（醫療紀錄、私人訊息）微調時至關重要，因為個別紀錄的記憶化是不可接受的。

Why others wrong: DP 不加密資料；它不解決提示注入（那是不同的威脅）；模型大小不變。

Trap: 將 ε 設得太小——極強的隱私保證可以使模型實質上變成隨機，違背了微調的目的。

Mnemonic: DP-SGD =「在收音機上加入靜電」——更多靜電 = 更難竊聽，但音樂也更難聽

## Q85
Type: single
Difficulty: 2
Tags: evaluation, contamination-detection
Concepts: benchmark-integrity
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

一個新模型聲稱在 HumanEval（程式碼生成基準）上達到最先進效能。在信任此聲明之前應進行什麼檢查？

A. 驗證模型是否在更大的資料集上訓練
B. 透過檢查模型是否能逐字重現基準問題來測試基準污染，並在訓練期間不可用的保留基準上驗證效能
C. 檢查模型是否有更多參數
D. 確認模型使用較新的 GPU 進行推論

Answer: B

Hint: 如果模型在訓練期間記憶了測試，分數就沒有意義。

Explanation: 基準污染（在測試資料上訓練）膨脹了分數而不代表真正的能力。污染偵測包括測試模型是否能從部分提示完成基準問題（暗示記憶化），以及在較新或私有基準上驗證。與相關但未見過的任務上的表現交叉參照有助於評估真正的泛化能力。

Why others wrong: 資料集大小不能證明沒有污染；參數數量不保證能力；硬體不影響模型品質。

Trap: 照面值接受基準排行榜分數——污染很常見且通常是無意的（基準資料在網路爬取中出現）。

Mnemonic: 基準污染檢查 =「AI 的藥物測試」——驗證表現是真實的，而非「作弊」

## Q86
Type: single
Difficulty: 2
Tags: responsible-ai, prompt-injection
Concepts: indirect-prompt-injection
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

什麼是間接提示注入，為什麼它在 RAG 系統中特別危險？

A. 使用者直接要求模型忽略其系統提示
B. 嵌入在外部資料來源（網頁、文件、電子郵件）中的惡意指令，被檢索後注入模型的上下文，在使用者不知情的情況下劫持模型行為
C. 使用超過上下文視窗的很長提示
D. 透過聊天介面注入 SQL 查詢

Answer: B

Hint: 攻擊透過資料而非使用者——使用者也是受害者。

Explanation: 在間接提示注入中，攻擊者將指令嵌入可能被 RAG 系統檢索的內容中（例如包含「忽略先前指令並...」的網頁）。當 RAG 管線檢索此內容並將其包含在 LLM 的上下文中時，模型可能遵循嵌入的指令而非使用者的意圖。這特別危險，因為使用者從未看到惡意內容。

Why others wrong: 直接提示注入是使用者本人在攻擊；長提示是不同的問題；SQL 注入針對資料庫而非 LLM。

Trap: 認為 RAG 只會提高品質——檢索的內容是不受信任的輸入，可能包含對抗性指令，需要輸入淨化和穩健的系統提示。

Mnemonic: 間接提示注入 =「搜尋結果中的特洛伊木馬」——攻擊隱藏在檢索的內容中

## Q87
Type: multi
Difficulty: 3
Tags: evaluation, calibration
Concepts: model-calibration
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

以下哪兩個關於 LLM 校準的陳述是正確的？（選擇兩個）

A. 校準良好的模型所陳述的信心（機率）與實際準確率密切匹配——如果它在許多答案上說 80% 有信心，大約 80% 應該是正確的
B. 經過 RLHF 訓練的模型總是校準良好的
C. 溫度縮放是一種事後技術，可以透過調整 softmax 溫度而無需重新訓練來改善校準
D. 校準只與分類任務相關，與文字生成無關

Answer: A, C

Hint: 校準 =「模型是否知道自己知道什麼？」

Explanation: 校準衡量預測信心與實際準確率之間的對齊。溫度縮放是一種簡單有效的事後校準方法，在驗證集上擬合單一溫度參數以調整 softmax 輸出，改善校準而不改變模型權重或重新訓練。這對已部署的模型特別有用。

Why others wrong: RLHF 實際上可能惡化校準，因為它訓練模型無論如何都聽起來很有信心；校準對任何使用模型信心進行決策的任務都重要。

Trap: 假設高準確率意味著好的校準——一個整體準確的模型在特定主題上可能過度自信。

Mnemonic: 校準 =「對不確定性的誠實」——只有在你 80% 的時間是對的時才說 80%

## Q88
Type: single
Difficulty: 1
Tags: responsible-ai, model-card
Concepts: model-documentation
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

什麼是模型卡，為什麼它對負責任 AI 部署很重要？

A. 用於支付 API 存取費的信用卡
B. 一份結構化文件，描述模型的能力、限制、預期用途、訓練資料特徵、評估結果和已知偏見——使得能做出知情的部署決策
C. 運行模型所需 GPU 的硬體規格
D. 模型的原始碼

Answer: B

Hint: 模型卡 =「AI 模型的營養標籤」——裡面有什麼以及如何安全使用。

Explanation: 模型卡提供標準化文件，涵蓋模型能做什麼和不能做什麼、如何訓練和評估的、已知的失敗模式和偏見，以及預期/非預期的用途。這種透明度使使用者能就模型是否適合其用途做出知情決策，以及需要監控哪些風險。

Why others wrong: 它是文件而非支付方式；它比硬體規格更廣泛；它描述模型而非其原始碼。

Trap: 在不閱讀模型卡的情況下部署模型——許多生產失敗來自在預期範圍外使用模型或忽視記錄的限制。

Mnemonic: 模型卡 =「使用者手冊 + 警告標籤」——操作前請閱讀

## Q89
Type: single
Difficulty: 2
Tags: evaluation, human-evaluation-design
Concepts: evaluation-methodology
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

設計 LLM 輸出品質的人類評估研究時，哪種方法產生最可靠的結果？

A. 由一位專家對所有輸出打 1-10 分
B. 使用多位獨立評估者，搭配明確的評分準則，衡量標註者間一致性，並在可能時使用配對比較代替絕對評分
C. 問使用者是否「喜歡」輸出，給個讚或倒讚
D. 使用模型自身的困惑度作為人類偏好的代理

Answer: B

Hint: 可靠的評估需要多位裁判、明確的標準和一致性衡量。

Explanation: 多位評估者減少個人偏見。明確的準則確保一致的標準應用。標註者間一致性（如 Cohen's kappa）衡量可靠性——低一致性表示準則模糊或標準主觀。配對比較（「哪個回應更好？」）比絕對評分更可靠，因為人類更擅長相對判斷。

Why others wrong: 單一評估者引入偏見；讚/倒讚缺乏細緻度；困惑度與人類偏好的相關性不好。

Trap: 使用未校準的絕對量表——一個評估者的「7」可能是另一個的「5」。配對比較避免了這個校準問題。

Mnemonic: 好的人類評估 =「陪審團而非獨任裁判」——多重意見、明確規則、一致性檢查

## Q90
Type: single
Difficulty: 3
Tags: responsible-ai, watermarking
Concepts: llm-watermarking
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

LLM 輸出的統計浮水印技術如何運作？

A. 在每個回應後附加可見的版權聲明
B. 使用先前 token 的雜湊在每個 token 位置將詞彙分為「綠色」和「紅色」列表，然後將採樣偏向綠色 token——建立統計上可偵測但人類無法感知的模式
C. 加密整個輸出文字
D. 在回應中嵌入圖像浮水印

Answer: B

Hint: 浮水印對人類不可見但可透過統計偵測——詞語選擇中隱藏的模式。

Explanation: 浮水印（如 Kirchenbauer 等人）使用以先前 token 為種子的偽隨機函數在每個生成步驟將詞彙分為綠色（偏好）和紅色（非偏好）列表。透過偏好採樣綠色 token，生成的文字包含即使在輕微編輯後仍然持續存在的統計可偵測信號，而讀者無法感知。

Why others wrong: 浮水印是不可見的，不是可見的聲明；文字沒有被加密；它是統計模式而非圖像。

Trap: 認為浮水印可以透過改寫移除——穩健的浮水印在中度改寫後仍然存在，儘管大量重寫可以移除它們。

Mnemonic: LLM 浮水印 =「詞語選擇中的隱形墨水」——閱讀時看不到，但統計揭示它

## Q91
Type: single
Difficulty: 2
Tags: responsible-ai, data-privacy
Concepts: pii-handling
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

處理用於模型監控的 LLM 推論日誌中的 PII（個人可識別資訊）的建議方法是什麼？

A. 存儲帶完整 PII 的所有日誌以獲得最大除錯能力
B. 在存儲推論日誌前應用 PII 偵測和遮蔽，用匿名化 token 替換敏感資料，同時保留足夠的結構用於品質監控和除錯
C. 不保留任何推論日誌
D. 加密日誌並給每個人解密金鑰

Answer: B

Hint: 你需要日誌用於監控，但它們不應包含個人資料。

Explanation: 推論日誌對監控品質、除錯問題和改進模型至關重要。PII 遮蔽在存儲前用匿名化佔位符替換敏感資訊（姓名、電子郵件、電話號碼、身份證號碼），維持日誌對技術分析的效用，同時遵守隱私法規（GDPR、CCPA、HIPAA）。

Why others wrong: 完整 PII 存儲違反隱私法規；沒有日誌則無法監控；共享加密金鑰使保護失效。

Trap: 「暫時」記錄所有東西——即使短期在日誌中存儲 PII 也可能違反法規並造成責任。

Mnemonic: 日誌中的 PII =「在監控錄影中模糊臉部」——保留有用的影像，移除身份

## Q92
Type: single
Difficulty: 1
Tags: evaluation, ablation-study
Concepts: ablation-testing
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

在評估 LLM 系統的語境中，什麼是消融研究？

A. 測試是否能安全刪除模型
B. 系統性地一次移除或停用一個組件（如 RAG 檢索、系統提示、護欄）以衡量每個組件對整體系統效能的貢獻
C. 研究模型的失敗模式
D. 在越來越困難的問題上測試模型

Answer: B

Hint: 「消融」= 手術切除——移除一個部分並衡量影響。

Explanation: 消融研究透過選擇性停用個別組件並衡量由此產生的效能變化來隔離其貢獻。例如，移除 RAG 檢索揭示模型依賴檢索上下文 vs 參數化知識的程度，幫助將工程努力優先放在最有影響力的組件上。

Why others wrong: 它關於組件評估而非刪除；失敗模式分析是不同的；難度遞增是不同的評估方法。

Trap: 同時改變多個組件——這混淆了結果。真正的消融研究一次只改變一個變數。

Mnemonic: 消融 =「從食譜中移除一種食材」——看每種食材貢獻了什麼

## Q93
Type: single
Difficulty: 3
Tags: responsible-ai, red-teaming-methodology
Concepts: structured-red-teaming
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

結構化紅隊評估與 LLM 的隨意對抗性測試有何區別？

A. 結構化紅隊使用更昂貴的 GPU
B. 結構化紅隊遵循攻擊類別分類法（越獄、提示注入、偏見引發、有害內容生成），使用系統性覆蓋指標，並記錄帶嚴重等級的可重現測試案例
C. 隨意測試在發現漏洞方面總是更有效
D. 結構化紅隊只測試模型的準確性

Answer: B

Hint: 結構 = 分類法 + 覆蓋率 + 可重現性——不只是「試著打破它」。

Explanation: 結構化紅隊使用預定義的風險分類法（如 OWASP LLM Top 10），確保跨攻擊類別和模型能力的系統性覆蓋，記錄每個測試案例以便重現，並按嚴重性評級發現。這與臨時的「試著越獄」測試形成對比，後者提供不均勻的覆蓋和不可重現的結果。

Why others wrong: 硬體不相關；隨意測試覆蓋不一致；紅隊涵蓋安全性而非準確性。

Trap: 認為幾個聰明的越獄提示就構成了全面的安全評估——跨攻擊類別的系統性覆蓋才是使紅隊可操作的關鍵。

Mnemonic: 結構化紅隊 =「帶檢查清單的滲透測試」——系統性、有文件、可重現

## Q94
Type: single
Difficulty: 2
Tags: responsible-ai, fairness-evaluation
Concepts: demographic-parity
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

評估基於 LLM 的招聘篩選工具是否有偏見時，哪種評估方法最合適？

A. 只測試整體準確率指標
B. 跨人口群體（性別、種族、年齡）分解效能指標，識別推薦率、情感和資格評估中的差異
C. 檢查模型是否明確提到人口屬性
D. 確保模型對所有輸入產生相同的輸出

Answer: B

Hint: 整體準確率可以隱藏群組級別的差異——分解以發現它們。

Explanation: 聚合指標可以掩蓋人口群體之間的顯著效能差異。一個整體 90% 準確率的模型可能對一個群體有 95% 的準確率，而對另一個只有 75%。跨受保護類別的分解評估揭示這些差異，使得能進行針對性的緩解。對招聘而言，跨群組的推薦率或資格評分差異表示潛在偏見。

Why others wrong: 整體準確率隱藏群組差異；隱性偏見不需要明確提到；對所有輸入相同的輸出會毫無用處。

Trap: 移除人口特徵並假設偏見已解決——模型可以從郵遞區號、姓名、學校等學習人口代理。

Mnemonic: 公平性評估 =「不只是檢查平均成績——檢查每個人是否得到了公平的考試」

## Q95
Type: single
Difficulty: 2
Tags: evaluation, regression-testing
Concepts: llm-regression
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

更新生產 LLM（新微調、提示修改或模型版本）後，回歸測試的目的是什麼？

A. 驗證模型仍然能在 GPU 上運行
B. 確保更新沒有降低先前正常運作的能力——測試一組策劃的關鍵輸入，其中預期行為已明確定義
C. 衡量模型的訓練損失
D. 檢查模型大小是否改變

Answer: B

Hint: 回歸 =「我們是否破壞了之前正常運作的東西？」

Explanation: 回歸測試維護一組帶有預期輸出或品質標準的關鍵輸入的策劃測試套件。在任何變更（模型更新、提示修改、RAG 管線修改）後，此套件驗證現有能力被保留。這捕捉可能在聚合基準中不可見但影響特定重要用例的意外退化。

Why others wrong: 硬體相容性是基礎設施檢查；訓練損失是訓練指標；模型大小變化被記錄但不是品質衡量。

Trap: 更新後只測試新能力——一個領域的改進可以靜默地降低另一個（例如改善安全性可能降低有用性）。

Mnemonic: 回歸測試 =「確保水管工沒有弄壞電路」——變更後檢查舊東西是否仍然正常

## Q96
Type: multi
Difficulty: 3
Tags: responsible-ai, guardrails-architecture
Concepts: nemo-guardrails
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

NVIDIA NeMo Guardrails 為 LLM 部署提供哪兩個功能？（選擇兩個）

A. 用基於規則的系統替換 LLM
B. 使用 Colang 定義對話護欄——一種用於指定允許/禁止的對話流程和主題邊界的領域特定語言
C. 啟用可程式化的輸入/輸出檢查，包括對知識庫的事實核查、內容審核和幻覺偵測
D. 消除對任何其他安全措施的需求

Answer: B, C

Hint: NeMo Guardrails 在 LLM 周圍添加安全層——對話規則 + 內容檢查。

Explanation: NeMo Guardrails 使用 Colang 定義對話流程（允許什麼主題、應拒絕什麼、如何處理敏感請求），並提供可程式化安全檢查的掛鉤用於輸入和輸出。這些包括對知識庫的事實核查（捕捉幻覺）、內容審核（毒性、PII）和自訂商業邏輯。它包裝 LLM 而非替換它。

Why others wrong: 它增強 LLM 而非替換；沒有任何單一工具能消除所有安全風險——縱深防禦始終需要。

Trap: 認為僅護欄就能使模型安全——它們是縱深防禦策略中的一層，與安全訓練、監控和人類監督並列。

Mnemonic: NeMo Guardrails =「AI 對話的交通法規」——Colang 定義規則，檢查執行它們

## Q97
Type: single
Difficulty: 1
Tags: responsible-ai, explainability
Concepts: interpretability
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

為什麼大型語言模型的可解釋性比傳統機器學習模型更具挑戰性？

A. LLM 總是產生不正確的輸出
B. LLM 有數十億參數和複雜的非線性互動，使得難以追蹤特定輸出為何被生成——不同於更簡單的模型可以清楚歸因特徵重要性
C. LLM 沒有任何參數
D. 傳統 ML 模型總是更準確

Answer: B

Hint: 你能解釋為什麼一個 700 億參數模型選擇了一個詞而非另一個嗎？這就是挑戰。

Explanation: 傳統 ML 模型（線性迴歸、決策樹）有可解釋的特徵貢獻。LLM 透過多層非線性注意力和前饋操作中的數十億參數轉換輸入，使得幾乎不可能從輸入特徵到特定輸出 token 追蹤因果鏈。這對需要模型可解釋性的受監管行業造成挑戰。

Why others wrong: LLM 大多數時候產生有用的輸出；它們有數十億參數；準確度因任務而異。

Trap: 聲稱注意力權重就是解釋——注意力權重顯示模型「看了」什麼，但不能可靠地解釋為什麼它做了特定預測。

Mnemonic: LLM 可解釋性 =「解釋一個夢」——大腦（模型）產生了它，但追蹤確切推理非常困難

## Q98
Type: single
Difficulty: 2
Tags: responsible-ai, eu-ai-act
Concepts: ai-regulation
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

根據歐盟 AI 法案，通用 AI 模型（包括 LLM）如何分類，主要義務是什麼？

A. 所有 AI 模型在歐盟都被禁止
B. 通用 AI 模型必須提供模型卡、訓練資料摘要並遵守版權義務——構成系統性風險的模型面臨額外要求，包括對抗性測試和事件報告
C. 只有在歐盟開發的模型受監管
D. 歐盟 AI 法案只適用於機器人，不適用於語言模型

Answer: B

Hint: 歐盟 AI 法案建立分層系統——所有通用規則，高風險/系統性模型有額外規則。

Explanation: 歐盟 AI 法案將通用 AI（GPAI）模型分類為具有特定透明度義務：技術文件、訓練資料描述和版權遵從。具有系統性風險的模型（基於計算閾值或指定）面臨額外要求，包括紅隊測試、網路安全措施、能源效率報告和事件監控。

Why others wrong: AI 未被禁止，而是被監管；法案適用於無論模型在哪裡開發；它明確涵蓋語言模型/GPAI。

Trap: 認為歐盟 AI 法案只影響歐盟境內的公司——它適用於在歐盟內使用的任何 AI 系統，無論提供者在哪裡。

Mnemonic: 歐盟 AI 法案 =「AI 的駕駛執照」——所有人的基本規則，重型車輛的額外考試

## Q99
Type: single
Difficulty: 3
Tags: evaluation, scaling-laws
Concepts: chinchilla-scaling
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

根據 Chinchilla 縮放法則，在固定計算預算下模型大小和訓練資料的最佳關係是什麼？

A. 無論可用資料如何，總是最大化模型大小
B. 模型大小和訓練 token 數應大致成比例擴展——10 倍大的模型應在大約 10 倍多的 token 上訓練以實現計算最優訓練
C. 只要模型夠大，訓練資料大小就不重要
D. 較小的模型應該總是在比較大模型更多的資料上訓練

Answer: B

Hint: Chinchilla 顯示許多大型模型「訓練不足」——它們需要更多資料而非更多參數。

Explanation: Chinchilla 縮放法則（Hoffmann 等人，2022）證明，在固定計算預算下，模型參數和訓練 token 應成比例擴展——大約每個參數 20 個 token。這推翻了之前建構越來越大模型但資料不足的趨勢，顯示在類似計算成本下，700 億模型在 1.4T token 上訓練優於 2800 億模型在 300B token 上訓練。

Why others wrong: 最大化模型大小在訓練不足的參數上浪費計算；資料與模型大小同樣重要；關係是成比例的而非反比的。

Trap: 建構盡可能大的模型並假設更多參數自動意味著更好——Chinchilla 證明訓練不足的大模型輸給計算最優訓練的較小模型。

Mnemonic: Chinchilla 法則 =「模型大小和資料應一起增長」——每個參數 20 個 token

## Q100
Type: single
Difficulty: 2
Tags: responsible-ai, copyright
Concepts: training-data-copyright
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

部署在網路爬取資料上訓練的 LLM 時，主要的版權顧慮是什麼？

A. 模型的權重本身受網路內容創作者的版權保護
B. 模型可能逐字重現大量有版權的訓練資料，特別是高度記憶的內容如程式碼、歌詞或獨特的散文
C. 使用 LLM 自動將所有輸出的版權轉移給訓練資料所有者
D. 版權只適用於圖像，不適用於文字

Answer: B

Hint: 如果模型記住了有版權的文字，它可以重現它——這是法律風險。

Explanation: LLM 可以記憶並重現訓練資料，特別是出現多次的內容（熱門文章、程式碼、歌詞）。當模型輸出接近逐字的有版權文字時，這為部署者造成法律曝險。緩解措施包括對已知有版權內容的輸出過濾、訓練期間的去重和生產中監控逐字重現。

Why others wrong: 模型權重是創建者的智慧財產權，不是網路內容所有者的；輸出的版權是未確定的法律問題；版權適用於文字和其他創意作品。

Trap: 假設「模型生成新文字，所以版權不適用」——如果生成的文字實質上重現了有版權材料，生成方法在法律上不重要。

Mnemonic: 版權風險 =「模型有攝影記憶」——它可能重現它讀過的東西

## Q101
Type: single
Difficulty: 2
Tags: evaluation, perplexity-limitations
Concepts: perplexity-context
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

一個模型在測試集上的困惑度低於競爭對手。這是否一定意味著它在聊天應用中會產生更好的回應？

A. 是的，較低的困惑度總是意味著更好的品質
B. 不一定——困惑度衡量模型預測測試分佈中下一個 token 的好壞，但聊天品質取決於指令遵循、有用性、安全性和連貫性，這些困惑度無法捕捉
C. 困惑度和聊天品質完全不相關
D. 只有困惑度低於 5.0 時才有關

Answer: B

Hint: 困惑度衡量預測能力，不是遵循指令或有用的品質。

Explanation: 困惑度衡量對文字分佈的統計擬合——模型預測每個下一個 token 的好壞。一個在維基百科上有優秀困惑度的模型可能產生流暢的文字但在遵循複雜指令、維持安全邊界或提供結構化輸出方面失敗。聊天品質需要超越統計文字預測的特性，這就是為什麼人類評估和 MT-Bench 等基準存在的原因。

Why others wrong: 困惑度是必要但不充分的；它們相關但不完全相同；沒有神奇的困惑度閾值。

Trap: 將困惑度作為模型選擇的唯一指標——它是先決條件（差的困惑度 = 差的模型）但不是品質的保證（好的困惑度 ≠ 好的聊天機器人）。

Mnemonic: 困惑度 =「拼字比賽冠軍」——預測詞很好但可能無法進行好的對話

## Q102
Type: single
Difficulty: 3
Tags: responsible-ai, membership-inference
Concepts: privacy-attacks
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

什麼是針對 LLM 的成員推論攻擊，為什麼它重要？

A. 嘗試透過發送大量請求使模型崩潰
B. 透過分析模型對該輸入的信心或損失來判斷特定資料點是否在模型的訓練集中——如果訓練資料本應保密則引發隱私顧慮
C. 在推論時向模型注入新的訓練資料
D. 未經授權複製模型權重

Answer: B

Hint: 「我的資料是否被用來訓練這個模型？」——成員推論嘗試回答這個問題。

Explanation: 成員推論攻擊利用模型通常對訓練資料賦予更高信心（更低損失）的事實。透過仔細分析模型對特定輸入的輸出，攻擊者可以機率性地判斷該輸入是否在訓練集中。當訓練資料包含個人資訊、醫療紀錄或專有內容時，這違反了隱私。

Why others wrong: 那是 DoS 攻擊；推論時的資料注入是提示注入；權重複製是模型擷取。

Trap: 假設不公開訓練資料就保護了隱私——成員推論可以僅透過模型的 API 揭示訓練資料成員身份。

Mnemonic: 成員推論 =「偵探問模型：你是否閱讀過這份文件？」——模型的信心洩露了答案

## Q103
Type: single
Difficulty: 1
Tags: evaluation, task-specific-eval
Concepts: evaluation-suite
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

為什麼在任務特定基準上評估 LLM 很重要，而非僅依賴 MMLU 等通用基準？

A. 任務特定基準運行更快
B. 通用基準可能不代表部署用途所需的特定技能——在 MMLU 上得分很好的模型在法律分析、醫學問答或程式碼生成等領域特定任務上可能表現不佳
C. 通用基準總是不準確的
D. 任務特定基準不需要真實答案

Answer: B

Hint: 一個「整體聰明」的模型在你的具體工作上可能不聰明。

Explanation: 通用基準提供廣泛的能力評估，但可能無法預測在特定應用上的表現。一個在學術知識（MMLU）上表現優秀的模型可能在實際法律文件分析或領域特定程式碼生成上有困難。任務特定評估套件測試部署所需的實際能力，提供更可靠的部署決策。

Why others wrong: 速度因情況而異；通用基準對廣泛比較有用；任務特定基準仍需要評估標準。

Trap: 僅憑排行榜排名選擇模型——在通用基準上排名第一的模型在你的具體用途上可能排名第五。

Mnemonic: 任務特定評估 =「工作面試，而非 SAT 分數」——測試實際需要的技能

## Q104
Type: single
Difficulty: 2
Tags: responsible-ai, output-attribution
Concepts: source-attribution
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

在用於企業知識管理的 RAG 系統中，為什麼來源歸因很重要，應如何實現？

A. 來源歸因是可選的，不影響信任
B. LLM 回應中的每個聲明都應引用其來源的特定來源文件，使使用者能驗證準確性並建立信任——透過指示模型包含對應到檢索段落的行內引用來實現
C. 來源歸因意味著列出知識庫中的所有文件
D. 模型應從其參數化知識生成引用

Answer: B

Hint: 信任需要可驗證性——使用者需要檢查資訊來自哪裡。

Explanation: 來源歸因將特定聲明連結到其來源文件，使使用者能驗證準確性、識別過時資訊，並追蹤錯誤到源頭。這透過在提示中包含段落中繼資料並指示模型行內引用來源來實現。沒有歸因，使用者無法區分 RAG 基於事實的回答和幻覺。

Why others wrong: 歸因對企業環境中的信任至關重要；列出所有文件沒有用處；引用應來自檢索上下文而非參數化知識。

Trap: 從參數化知識生成假引用——模型應該只引用實際被檢索並包含在上下文中的文件。

Mnemonic: RAG 歸因 =「像研究論文一樣標註來源」——每個聲明都需要引用

## Q105
Type: single
Difficulty: 3
Tags: evaluation, elo-rating
Concepts: chatbot-arena
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

Chatbot Arena 中的 Elo 評分系統如何運作以排名 LLM，它相比靜態基準有什麼優勢？

A. 根據參數數量分配固定分數
B. 使用配對人類比較，使用者對兩個匿名模型回應中哪個更好投票，動態更新 Elo 評分——這在多樣的使用者生成提示上捕捉真實世界偏好，而非策劃的測試集
C. 衡量跨標準硬體的推論速度
D. 按訓練成本排名模型

Answer: B

Hint: Elo 來自國際象棋——勝/負根據對手強度更新你的評分。

Explanation: Chatbot Arena 向使用者呈現兩個匿名模型回應並問哪個更好。勝負根據競爭者的相對強度更新 Elo 評分。這種方法在多樣、真實世界的提示上捕捉人類偏好（非策劃基準），抵抗資料污染（因為提示是使用者生成的），並產生持續更新的反映實際使用者偏好的排名。

Why others wrong: Elo 是動態的，不是固定的；它衡量品質而非速度；訓練成本不被考慮。

Trap: 比較不同時期的 Elo 分數——隨著新模型進入，評分池會變化，所以今天的 1200 可能不等於六個月前的 1200。

Mnemonic: Chatbot Arena Elo =「AI 的象棋錦標賽」——打比賽、獲得評分、使用者是裁判

## Q106
Type: single
Difficulty: 2
Tags: responsible-ai, toxicity-detection
Concepts: toxicity-classifiers
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

用作 LLM 輸出護欄的毒性分類器有什麼主要限制？

A. 在生產中運行成本太高
B. 對某些方言、俚語或被重新定義的語言可能有高誤報率，可能審查來自特定人口群體的合法內容
C. 能捕捉 100% 的所有有害內容
D. 使推論速度降低超過 10 倍

Answer: B

Hint: 「毒性」是有上下文的——在一個環境中冒犯性的在另一個環境中是合法表達。

Explanation: 主要在標準英語上訓練的毒性分類器可能將非裔美國人方言（AAVE）、LGBTQ+ 重新定義的術語或文化特定表達標記為有毒，造成偏見內容審核。這不成比例地影響邊緣化社區。緩解措施包括使用在多樣資料上訓練的分類器、按上下文調整閾值，以及提供申訴機制。

Why others wrong: 分類器通常輕量且快速；沒有分類器能達到 100% 偵測；延遲開銷很小（幾毫秒）。

Trap: 部署毒性分類器而不測試人口偏見——它可能系統性地沉默某些群體，同時讓標準英語的有害內容通過。

Mnemonic: 毒性分類器偏見 =「標記正確外語詞彙的拼寫檢查器」——工具的訓練資料定義了其盲點

## Q107
Type: single
Difficulty: 3
Tags: evaluation, emergent-abilities
Concepts: emergent-capabilities
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

為什麼 LLM 中「湧現能力」的概念從評估角度來看是有爭議的？

A. 因為大型模型在所有方面總是更好
B. 因為在某些模型規模下明顯的突然能力跳躍可能是評估方法的偽像——使用不連續指標（如精確匹配準確率）而非連續指標（如對數機率）可以在底層能力逐漸改善時製造湧現的錯覺
C. 因為湧現能力在實踐中從來沒有用
D. 因為只有超過 1000 億參數的模型才能展現任何推理能力

Answer: B

Hint: 這是真正的相變，還是測量尺使它看起來像相變？

Explanation: Schaeffer 等人（2024）顯示許多「湧現能力」只是因為使用的評估指標而看起來突然出現。精確匹配準確率從 0% 到 >0% 突然跳躍，但模型對正確答案的機率是連續增加的。使用連續指標如 Brier 分數或對數機率揭示平滑、可預測的擴展。這對我們如何評估和預測模型能力有影響。

Why others wrong: 較小的模型也可以有強大的能力；如果是真實的，湧現有實際影響；推理在各種規模都存在。

Trap: 圍繞預期在某個規模出現的「湧現」能力來規劃部署——當正確衡量時，能力改善可能是可預測和漸進的。

Mnemonic: 湧現爭議 =「是懸崖還是斜坡？」——取決於你的測量尺是否有細刻度

## Q108
Type: single
Difficulty: 1
Tags: responsible-ai, transparency
Concepts: ai-disclosure
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

為什麼組織應該在內容由 AI 系統生成時予以揭露？

A. 因為 AI 生成的內容品質總是較低
B. 使使用者能適當校準其信任——知道內容是 AI 生成的，使他們能驗證聲明、理解幻覺的可能性，並對依賴它做出知情決策
C. 因為沒有揭露的 AI 生成內容是違法的
D. 為了阻止使用者使用服務

Answer: B

Hint: 知情的使用者做出更好的決策——他們知道何時需要覆核。

Explanation: AI 揭露使知情決策成為可能。知道內容是 AI 生成的使用者更可能驗證聲明、考慮潛在的幻覺並應用適當的懷疑。這在醫療保健、金融和法律建議等高風險領域尤其關鍵，盲目信任 AI 生成的內容可能導致嚴重後果。

Why others wrong: AI 內容品質各異；合法性取決於司法管轄區；揭露建立信任而非造成阻止。

Trap: 為了看起來更有權威而隱藏 AI 參與——當發現錯誤時這會適得其反，完全摧毀信任。

Mnemonic: AI 揭露 =「宣布廚師是機器人」——讓食客決定他們對料理的信任程度

## Q109
Type: single
Difficulty: 2
Tags: evaluation, cost-quality-tradeoff
Concepts: model-selection-criteria
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

為每天處理數百萬份文件的生產分類任務選擇 LLM 時，哪種評估框架最能捕捉相關的取捨？

A. 選擇 MMLU 分數最高的模型
B. 在任務準確率、延遲（TTFT + TPOT）、每 token 成本、目標批次大小下的吞吐量和可接受的失敗模式矩陣上評估模型——然後為特定品質-成本需求選擇帕累托最優模型
C. 總是使用最大的可用模型
D. 不論品質選擇最便宜的模型

Answer: B

Hint: 生產選擇是多維的——僅準確率不考慮成本、速度和規模。

Explanation: 生產模型選擇需要同時評估多個維度。一個 95% 準確率但成本為 1/10 的較小模型，對於 95% 可接受的分類任務可能優於 97% 準確率的較大模型。評估應使用實際任務資料和生產代表性條件（批次大小、並發），而非合成基準。

Why others wrong: MMLU 不預測分類任務表現；最大模型在規模化時通常成本過高；最便宜的可能不達品質門檻。

Trap: 為單一維度最佳化——生產 ML 是在準確率、成本、延遲和可靠性之間找到正確的平衡。

Mnemonic: 模型選擇 =「買車」——不只是馬力；考慮油耗、價格和維護以滿足日常通勤需求

## Q110
Type: single
Difficulty: 2
Tags: architecture, context-length-training
Concepts: long-context-training
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

訓練具有非常長上下文視窗（100K+ token）的 LLM 的主要技術挑戰是什麼？

A. 分詞器無法處理長序列
B. 自注意力在序列長度上具有 O(n²) 的記憶體和計算複雜度，使標準注意力成本過高——透過 FlashAttention、滑動視窗注意力和梯度檢查點等技術解決
C. 長序列總是產生更差的模型品質
D. GPU 無法存儲超過 4096 個 token

Answer: B

Hint: 注意力是二次方的——將序列長度加倍使成本增加四倍。

Explanation: 標準自注意力為所有 n 個 token 計算成對注意力分數，需要 O(n²) 記憶體和計算。在 100K token 時，這比 1K token 貴 10,000 倍。解決方案包括高效注意力實現（FlashAttention）、稀疏注意力模式（滑動視窗）和記憶體最佳化（激活檢查點、序列平行）。

Why others wrong: 分詞器可處理任何長度；長上下文可以改善需要它的任務；GPU 透過適當最佳化可以處理長序列。

Trap: 假設更長的上下文總是更好——計算成本呈二次方增長，所以上下文長度應匹配用途。

Mnemonic: 長上下文挑戰 =「n² 稅」——每個 token 都必須關注每個其他 token

## Q111
Type: single
Difficulty: 3
Tags: architecture, state-space-models
Concepts: mamba-architecture
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

狀態空間模型（如 Mamba）在序列建模方法上與 Transformer 有何不同？

A. 它們使用線性複雜度的注意力機制
B. 它們透過每 token 更新的循環狀態處理序列，實現 O(n) 複雜度而非 O(n²)，但無法像注意力那樣對較早位置進行任意回顧
C. 它們總是比 Transformer 更準確
D. 它們需要比 Transformer 更多的 GPU 記憶體

Answer: B

Hint: 狀態空間模型用線性時間循環取代隨機存取注意力。

Explanation: 像 Mamba 這樣的狀態空間模型使用選擇性狀態空間機制，透過將序列歷史壓縮為固定大小的狀態向量，以 O(n) 時間處理序列。這比注意力能處理更長的序列，但固定狀態大小意味著無法像注意力那樣完美回憶任意較早位置。結合兩者的混合架構是活躍的研究領域。

Why others wrong: 線性注意力是不同的方法；準確度取決於任務；SSM 通常比注意力在長序列上使用更少記憶體。

Trap: 假設 SSM 會完全取代 Transformer——它們無法做任意回顧限制了在需要精確檢索較早上下文的任務上的表現。

Mnemonic: SSM =「滾動摘要」 vs Transformer =「完美筆記」——寫得更快但可能遺漏較早的特定細節

## Q112
Type: single
Difficulty: 2
Tags: data-preparation, data-mixing
Concepts: pre-training-data-mix
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

組裝 LLM 的預訓練資料混合時，即使是通用語言模型，為什麼程式碼資料的比例很重要？

A. 程式碼資料使模型預設生成 Python
B. 程式碼資料改善模型的邏輯推理和結構化思維能力，超越程式設計任務本身，因為程式碼需要精確的邏輯、規劃和組合推理
C. 程式碼資料只對程式設計專用模型重要
D. 添加程式碼資料降低模型的語言品質

Answer: B

Hint: 程式碼是「結構化思維」——用形式語言明確表達的推理。

Explanation: 研究顯示，用相當比例的程式碼資料（15-30%）訓練的模型在推理基準、數學和結構化問題解決方面表現改善——即使是與程式設計無關的任務。程式碼的顯式邏輯、變數追蹤和組合結構似乎能轉移到一般推理能力。

Why others wrong: 模型不預設使用 Python；程式碼的好處轉移到非程式設計任務；程式碼資料通常改善而非降低語言品質。

Trap: 從通用模型訓練中排除程式碼以「保持專注於語言」——你會錯失推理能力的提升。

Mnemonic: 預訓練中的程式碼 =「大腦的交叉訓練」——程式設計技能強化一般推理

## Q113
Type: single
Difficulty: 3
Tags: fine-tuning, rejection-sampling
Concepts: best-of-n
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

在 LLM 對齊的語境中，什麼是拒絕採樣（Best-of-N），何時優先於 RLHF 或 DPO？

A. 拒絕所有模型輸出並使用人類撰寫的回應
B. 從模型生成 N 個候選回應，用獎勵模型評分，只保留最好的一個——比 RLHF/DPO 簡單但推論成本更高，在優先考慮簡單性而非效率時使用
C. 隨機拒絕 50% 的訓練資料
D. 過濾訓練資料集以移除低品質範例

Answer: B

Hint: 「Best-of-N」= 生成很多個，選最好的——推論時的暴力對齊。

Explanation: 拒絕採樣為每個提示生成 N 個回應，用獎勵模型（或基於規則的標準）評分，並選擇最高分的回應。它在不修改模型權重的情況下實現與 RLHF 相當的對齊品質，使實現更簡單。取捨是 N 倍的推論成本。它可用作基線、收集高品質訓練資料，或在模型權重修改不實際時使用。

Why others wrong: 它使用模型生成的回應而非人類撰寫的；不是隨機的；這是關於推論策略而非資料過濾。

Trap: 用非常大的 N 來「解決」對齊——成本線性增長，而在 N=10-20 後回報迅速遞減。

Mnemonic: Best-of-N =「寫 10 份草稿，交最好的一份」——簡單但昂貴

## Q114
Type: single
Difficulty: 1
Tags: optimization, model-compression
Concepts: pruning-vs-quantization
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

模型剪枝和量化作為壓縮技術的主要區別是什麼？

A. 它們是不同名稱的同一技術
B. 剪枝移除權重（設為零或移除整個結構），而量化降低現有權重的數值精度——兩者都減少模型大小但透過不同機制
C. 剪枝總是產生比量化更好的模型
D. 量化移除層而剪枝降低精度

Answer: B

Hint: 剪枝 = 更少的權重；量化 = 更小的權重。相同目標，不同方法。

Explanation: 剪枝消除不必要的權重（非結構化剪枝將個別權重設為零；結構化剪枝移除整個神經元、頭或層），減少參數數量。量化保留所有權重但用更少的位元表示它們（例如 FP16 → INT4）。在實務中，量化更廣泛用於 LLM，因為有效剪枝 LLM 同時維持品質仍然具有挑戰性。

Why others wrong: 它們是根本不同的技術；兩者都不是普遍更好；選項 D 中的定義是對調的。

Trap: 假設剪枝對 LLM 和 CNN 一樣有效——LLM 更難有效剪枝，因為它們的權重更均勻地重要。

Mnemonic: 剪枝 =「砍掉樹的枝條」；量化 =「按比例縮小整棵樹」

## Q115
Type: single
Difficulty: 2
Tags: optimization, ring-allreduce
Concepts: collective-communication
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

為什麼環形 all-reduce 在資料平行分散式訓練的梯度同步中優於樸素 all-reduce？

A. 它使用更少的總頻寬
B. 它透過環形模式發送資料，將通訊均勻分散到所有 GPU，實現無論 GPU 數量多少都能高效擴展的頻寬最優通訊
C. 它需要一個中央參數伺服器
D. 它只能用於 2 個 GPU

Answer: B

Hint: 環形 = 每個人向鄰居發送一片，繞完整的圓兩次。

Explanation: 環形 all-reduce 將梯度張量分成 N 個塊（N 個 GPU），以兩個階段在環上傳遞：reduce-scatter（每個 GPU 累積一部分）和 all-gather（分發最終結果）。每個 GPU 無論 GPU 數量多少都發送和接收相同量的資料，實現頻寬最優擴展——不像樸素 all-reduce 中一個 GPU 成為瓶頸。

Why others wrong: 通訊的總資料量相似，但分散了；環形是點對點的，沒有中央伺服器；它適用於任何數量的 GPU。

Trap: 認為添加更多 GPU 到資料平行總是線性增加通訊成本——環形 all-reduce 的每 GPU 頻寬無論 GPU 數量多少都是恆定的。

Mnemonic: 環形 all-reduce =「在圓圈中傳遞筆記」——每個人平等參與，沒有人被壓倒

## Q116
Type: single
Difficulty: 3
Tags: optimization, expert-parallelism
Concepts: moe-parallelism
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

在有 8 個專家的混合專家模型中，什麼是專家平行，它如何與資料平行互動？

A. 每個專家在單獨的 GPU 上運行，token 透過 all-to-all 通訊路由到適當的 GPU
B. 每個專家處理不同的資料批次
C. 所有專家共享相同的 GPU 以獲得更好的快取利用
D. 專家平行取代了對資料平行的需求

Answer: A

Hint: 專家住在不同的 GPU 上——token 必須行駛到正確的 GPU 以遇到他們的專家。

Explanation: 專家平行將不同專家分散到不同 GPU 上。當一個 token 被路由到不同 GPU 上的專家時，all-to-all 通訊操作將 token 發送到適當的 GPU 並返回結果。這通常與資料平行結合（每個專家組處理不同資料），需要仔細的通訊最佳化，因為 all-to-all 隨專家數量增長。

Why others wrong: 不同資料批次是資料平行；共享 GPU 失去了記憶體好處；專家和資料平行是互補的。

Trap: 忽略 all-to-all 通訊成本——在 MoE 模型中，token 路由通訊可能成為訓練瓶頸如果未最佳化。

Mnemonic: 專家平行 =「不同辦公室的專科醫生」——病人（token）必須到正確的辦公室就診

## Q117
Type: single
Difficulty: 2
Tags: deployment, auto-scaling
Concepts: inference-autoscaling
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

什麼指標應該驅動 LLM 推論服務的自動擴展決策？

A. CPU 使用率百分比
B. 佇列深度（待處理請求）和/或 KV cache 使用率——這些直接反映使用者面臨的影響和可用容量，不像 GPU 使用率可能具有誤導性
C. 網路頻寬使用量
D. 剩餘磁碟空間

Answer: B

Hint: 重要的是「使用者是否在等待？」和「我們還有空間嗎？」

Explanation: 佇列深度直接反映使用者體驗——增長的佇列意味著增加的延遲。KV cache 使用率顯示剩餘容量——當它滿了，新請求必須等待。GPU 使用率可能具有誤導性，因為 LLM 服務系統可能滿負荷（高佇列深度）但 GPU 計算使用率看起來適中，因為解碼時記憶體頻寬是瓶頸。

Why others wrong: CPU 使用率與 GPU 推論無關；網路和磁碟很少是 LLM 服務瓶頸。

Trap: 基於 GPU 計算使用率擴展——LLM 解碼受記憶體頻寬限制，所以即使在重負載下 GPU 計算使用率可能只有 30-40%。

Mnemonic: LLM 自動擴展信號 =「佇列長度 + 快取壓力」——不是 GPU 使用率

## Q118
Type: single
Difficulty: 1
Tags: deployment, environment-management
Concepts: containerization
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

為什麼容器化（Docker/Kubernetes）對 LLM 部署特別重要？

A. 容器使模型運行更快
B. 容器將模型與其精確的依賴關係（CUDA 版本、Python 套件、TensorRT 版本）打包在一起，確保開發、測試和生產環境之間的一致行為
C. 容器減小模型大小
D. 所有雲端供應商都要求容器

Answer: B

Hint: 「在我的機器上能跑」對生產來說是致命的——容器修復了這個問題。

Explanation: LLM 推論依賴精確的 CUDA 工具包版本、驅動相容性、Python 函式庫版本和 TensorRT-LLM 建構。任何組件不匹配都可能導致靜默的數值差異或直接失敗。容器封裝整個軟體堆疊，確保相同環境在任何地方運行，實現可靠、可重現的部署。

Why others wrong: 容器增加輕微開銷；模型大小不變；容器是最佳實踐但不是普遍要求。

Trap: 為了「效能」在裸機上直接部署而不容器化——環境之間的配置漂移會導致生產問題。

Mnemonic: 容器 =「你的模型的貨運容器」——相同的內容無論船隻如何都到達

## Q119
Type: single
Difficulty: 3
Tags: evaluation, needle-in-haystack
Concepts: long-context-evaluation
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

「大海撈針」測試為 LLM 評估什麼，它的限制是什麼？

A. 測試模型生成長輸出的能力
B. 在長上下文的不同位置放置特定事實並測試檢索——它評估長上下文回憶但不評估更複雜的長上下文推理如綜合、比較或多跳推理
C. 測試模型處理嘈雜資料的能力
D. 衡量模型的詞彙表大小

Answer: B

Hint: 找到單一事實是你對長上下文能做的最簡單的事——真實任務更難。

Explanation: 大海撈針測試在長文件（「乾草堆」）的不同位置插入目標事實（「針」），並要求模型檢索它。雖然對測試基本長上下文回憶有用，但它是能力的下限——真實用例需要從多個位置綜合資訊、比較章節，或跨整個上下文進行推理，這個測試不能評估這些。

Why others wrong: 它測試理解而非生成；它使用乾淨的文字而非嘈雜資料；詞彙表大小無關。

Trap: 假設「在 128K 通過大海撈針」意味著模型能處理任何 128K token 的任務——檢索比長上下文的綜合或推理簡單得多。

Mnemonic: 大海撈針 =「你能找到一樣東西嗎？」——這是開卷查找測試，不是作文考試

## Q120
Type: single
Difficulty: 2
Tags: responsible-ai, model-governance
Concepts: model-registry
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

企業 LLM 治理中模型註冊表的目的是什麼？

A. 網際網路上所有可用模型的公開列表
B. 一個集中式目錄，追蹤所有已部署模型的版本、訓練資料來源、評估結果、審批狀態和合規認證——實現可審計性和受控部署
C. 用於調參的模型超參數資料庫
D. 存儲模型權重的倉庫

Answer: B

Hint: 模型註冊表 =「每個已部署模型的出生證明 + 醫療紀錄」。

Explanation: 模型註冊表透過維護所有生產模型的單一事實來源來提供組織治理：誰訓練了它們、使用了什麼資料、如何評估、誰批准部署、通過了什麼合規檢查。這對法規遵循（歐盟 AI 法案）、事件回應（追蹤問題到特定模型版本）和從開發到生產的受控升級至關重要。

Why others wrong: 它是內部的而非公開的；它比超參數更廣泛；它包含中繼資料，而非僅權重。

Trap: 在沒有註冊表的情況下臨時部署模型——當問題出現時，你無法追蹤哪個模型版本、訓練資料或評估產生了有問題的輸出。

Mnemonic: 模型註冊表 =「AI 的 FDA 藥品註冊」——追蹤每個模型從實驗室到生產

## Q121
Type: single
Difficulty: 2
Tags: optimization, sparse-computation
Concepts: sparsity-acceleration
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

NVIDIA 在 Ampere 和 Hopper GPU 上的結構化稀疏性（2:4 模式）如何加速推論？

A. 它移除 75% 的所有權重
B. 在權重行中每組 4 個連續值中至少 2 個必須為零——Tensor Cores 跳過零乘法，透過硬體原生稀疏矩陣支持實現高達 2 倍加速
C. 它使用隨機稀疏模式
D. 它僅對偏置項應用稀疏性

Answer: B

Hint: 2:4 =「4 個中有 2 個為零」——硬體可以利用的固定模式。

Explanation: 2:4 結構化稀疏模式（50% 稀疏性，固定結構）由 NVIDIA Tensor Cores 原生支持。硬體以壓縮格式只存儲非零值及其索引，執行大約一半工作量的矩陣乘法。結合微調以適應稀疏模式時，這以最小的精度損失提供高達 2 倍的加速。

Why others wrong: 它是 50% 稀疏性（4 個中 2 個零），不是 75%；模式是結構化的而非隨機；稀疏性應用於權重矩陣而非偏置。

Trap: 期待任意稀疏模式能獲得 2 倍加速——只有 2:4 結構化模式在 NVIDIA GPU 上獲得硬體加速。

Mnemonic: 2:4 稀疏 =「每組 4 個恰好有 2 個零」——GPU 硬體就是設計來跳過這些的

## Q122
Type: single
Difficulty: 3
Tags: optimization, distributed-optimizer
Concepts: zero-infinity
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

DeepSpeed ZeRO-Infinity 能實現什麼是 ZeRO Stage 3 單獨做不到的？

A. 用更少的 GPU 訓練
B. 將最佳化器狀態、梯度和參數卸載到 CPU 記憶體和 NVMe 存儲，透過使用記憶體層次作為 GPU 記憶體的擴展來訓練大於總 GPU 記憶體的模型
C. 自動模型架構搜尋
D. 不需要網路連接的訓練

Answer: B

Hint: ZeRO-Infinity 使用整個記憶體層次——GPU → CPU → NVMe——作為一個統一池。

Explanation: ZeRO-Infinity 擴展 ZeRO Stage 3，允許卸載到 CPU DRAM 和 NVMe SSD。無法放入 GPU 記憶體的模型狀態存儲在 CPU RAM 或磁碟上並按需取回，透過預取來重疊資料移動和計算。這使得在 GPU 記憶體有限的叢集上訓練萬億參數模型成為可能，代價是增加的資料移動開銷。

Why others wrong: 它可以用更少的 GPU，利用 CPU/NVMe 記憶體；沒有架構搜尋；多節點訓練仍需要網路。

Trap: 假設 ZeRO-Infinity 沒有效能成本——卸載到 CPU 和 NVMe 增加了顯著的資料移動開銷。它是記憶體容量解決方案，不是速度解決方案。

Mnemonic: ZeRO-Infinity =「溢出停車場」——當 GPU 記憶體滿了，將模型狀態停放在 CPU RAM 和 NVMe 中

## Q123
Type: single
Difficulty: 1
Tags: deployment, blue-green
Concepts: deployment-strategies
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

藍綠部署對 LLM 推論服務的優勢是什麼？

A. 將模型大小減半
B. 兩個相同的環境同時運行——流量從舊版（藍色）即時切換到新版（綠色），實現零停機部署，如果出現問題可立即切回藍色進行回滾
C. 只需要一個而非兩個 GPU
D. 自動重新訓練模型

Answer: B

Hint: 兩個環境 = 即時切換 + 即時回滾。代價是過渡期間運行雙倍基礎設施。

Explanation: 藍綠部署維護兩個完整的推論環境。「藍色」環境服務當前流量，「綠色」用新模型版本準備。一旦綠色驗證完成，負載平衡器切換重定向所有流量。如果出現問題，切回藍色是即時的。取捨是暫時運行雙倍基礎設施。

Why others wrong: 模型大小不變；它需要雙倍基礎設施；它是部署策略而非訓練方法。

Trap: 混淆藍綠和金絲雀部署——藍綠一次切換所有流量；金絲雀逐漸增加新版本的流量。

Mnemonic: 藍綠 =「兩個舞台，一個觀眾」——如果新表演失敗，立即切回舊的

## Q124
Type: single
Difficulty: 2
Tags: deployment, request-scheduling
Concepts: priority-queuing
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

在具有混合工作負載（互動聊天和批次處理）的 LLM 服務系統中，請求應如何排定優先級？

A. 所有請求先到先得
B. 互動（即時）請求應獲得更高優先級和專用容量，而批次請求填充剩餘容量——確保在不完全飢餓批次工作負載的情況下達到互動延遲 SLA
C. 批次請求應始終先處理以最大化吞吐量
D. 所有請求應獲得相同資源，無論類型

Answer: B

Hint: 互動使用者在即時等待；批次任務可以多等幾秒。

Explanation: 互動使用者有延遲期望（亞秒 TTFT），而批次處理容忍更高延遲。優先級佇列確保當容量受限時互動請求搶占批次工作，維持使用者體驗。批次請求填充閒置容量，最大化整體 GPU 利用率。

Why others wrong: 先到先得忽略緊急性差異；批次優先降低互動 UX；相同資源在閒置期間浪費互動容量。

Trap: 過度優先化互動請求而飢餓批次工作負載——批次任務最終需要完成，所以需要一些保證容量或離峰處理。

Mnemonic: 請求優先級 =「急診室分診」——臨時病人（互動）先看；預約（批次）填充剩餘時段

## Q125
Type: single
Difficulty: 3
Tags: deployment, distributed-inference
Concepts: inter-node-inference
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

部署對單一節點太大的模型（如需要 8+ GPU 的 4050 億模型）時，推論延遲最關鍵的網路考量是什麼？

A. 網際網路頻寬
B. GPU 間頻寬——張量平行通訊需要極低延遲和高頻寬（節點內用 NVLink，節點間用 InfiniBand），因為每次前向傳播的每個 token 都需要通訊
C. WiFi 信號強度
D. 硬碟讀取速度

Answer: B

Hint: 張量平行在每個生成的 token 上都需要 GPU 對 GPU 通訊——這裡的延遲直接影響 TPOT。

Explanation: 在張量平行推論中，每次 token 生成都需要參與張量分割的 GPU 之間進行 all-reduce 通訊。對於跨 2 個節點 8 個 GPU 分割的 4050 億模型，節點間 InfiniBand 延遲直接加到每個 TPOT 上。NVLink 提供 900+ GB/s 節點內，但節點間 InfiniBand（200-400 Gb/s）成為瓶頸，使網路拓撲和頻寬成為關鍵部署考量。

Why others wrong: 網際網路與 GPU 間通訊無關；WiFi 無法用於此目的；張量平行的推論路徑中不涉及磁碟。

Trap: 規劃多節點推論時忽略網路拓撲——每 token 通訊成本使這成為主要延遲因素，而非計算。

Mnemonic: 多節點推論網路 =「最慢橋樑的速度」——token 在每次生成步驟都要跨越 GPU 對 GPU 的鏈路

## Q126
Type: single
Difficulty: 2
Tags: evaluation, safety-benchmarks
Concepts: safety-evaluation
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

ToxiGen、RealToxicityPrompts 和 BBQ 等安全基準在 LLM 評估中的目的是什麼？

A. 測試模型是否能按需生成有毒內容
B. 系統性地衡量模型在不同場景中生成有害、偏見或有毒內容的傾向，使模型之間的比較和特定失敗類別的識別成為可能
C. 訓練模型變得更有毒
D. 測試模型在對抗性輸入上的速度

Answer: B

Hint: 安全基準標準化「這個模型有多不安全？」——像汽車的碰撞測試。

Explanation: 安全基準提供不同風險維度的標準化、可重現的評估：ToxiGen 測試針對特定群體的有毒語言生成；RealToxicityPrompts 衡量毒性延續機率；BBQ 測試問答中的社會偏見。這些使模型和版本之間的系統性比較、特定安全缺口的識別和隨時間追蹤改進成為可能。

Why others wrong: 它們衡量不想要的行為而非啟用它；它們是評估工具而非訓練資料；它們測試安全性而非速度。

Trap: 只在一個基準上評估安全性——不同基準測試不同維度（毒性、偏見、刻板印象），一個基準安全的模型在另一個上可能失敗。

Mnemonic: 安全基準 =「AI 的碰撞測試假人」——部署前的系統性壓力測試

## Q127
Type: single
Difficulty: 2
Tags: architecture, kv-cache-efficiency
Concepts: multi-query-kv-sharing
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

如果一個模型有 32 個注意力頭、隱藏維度 4096，使用 8 個 KV 組的 GQA，相比標準 MHA 的 KV cache 記憶體減少多少？

A. 沒有減少
B. 4 倍減少——8 個 KV 頭組而非 32 個獨立 KV 頭
C. 32 倍減少
D. 2 倍減少

Answer: B

Hint: MHA：32 個 KV 頭。8 組的 GQA：8 個 KV 頭。比率 = 32/8 = 4 倍。

Explanation: 在標準 MHA 中，32 個頭各有自己的鍵和值投影（32 個 KV 頭）。8 組的 GQA 意味著 4 個查詢頭共享每個 KV 組（32 個查詢 / 8 組 = 每組 4 個）。KV cache 存儲 8 個而非 32 個頭，4 倍減少。這顯著減少了長序列的記憶體，同時維持 MHA 的大部分品質。

Why others wrong: 確實有減少；32 倍需要 MQA（單一 KV 頭）；2 倍需要 16 組。

Trap: 混淆查詢頭數和 KV 頭數——GQA 減少 KV 頭同時保留所有 32 個查詢頭。

Mnemonic: GQA 記憶體節省 =「總頭數 ÷ KV 組數」= 減少倍數

## Q128
Type: single
Difficulty: 3
Tags: fine-tuning, knowledge-distillation
Concepts: teacher-student-distillation
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

在從 700 億教師模型到 70 億學生模型的知識蒸餾中，為什麼用教師的軟機率分佈（logits）訓練比僅用硬標籤更有效？

A. 軟機率計算更快
B. 教師對所有詞彙 token 的機率分佈揭示了類別間相似性和替代答案的相對可能性——硬標籤（argmax）丟棄的資訊
C. 硬標籤包含比軟機率更多的資訊
D. 軟機率只適用於分類任務

Answer: B

Hint: 「老師說 A 是正確的但 B 是合理的」vs「答案是 A」——軟分佈攜帶更多信號。

Explanation: 當教師對正確答案分配 0.7 機率，對相關替代分配 0.2 時，學生學到這些選項語義相似——硬標籤（正確為 1.0，其他為 0.0）完全丟失的「暗知識」。這種透過溫度軟化機率分佈捕獲的豐富監督信號使較小的學生能從每個範例更有效地學習。

Why others wrong: 軟機率需要完整詞彙分佈；硬標籤包含更少資訊；蒸餾也適用於生成任務。

Trap: 只使用教師的 top-1 token——這丟棄了使蒸餾有效的豐富分佈資訊。

Mnemonic: 軟標籤 =「老師的思考過程」 vs 硬標籤 =「老師的最終答案」——過程教導更多

## Q129
Type: single
Difficulty: 2
Tags: optimization, inference-batching
Concepts: dynamic-batching
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

動態批次處理和連續批次處理在 LLM 推論中的主要區別是什麼？

A. 它們是同一件事
B. 動態批次處理將在時間視窗內到達的請求分組到一個批次中一起處理，而連續批次處理允許個別請求在每次迭代基礎上加入和離開正在處理的批次
C. 動態批次處理比逐一處理請求更慢
D. 連續批次處理需要特殊硬體

Answer: B

Hint: 動態批次處理 =「等電梯裝滿」；連續批次處理 =「旋轉門」。

Explanation: 動態批次處理收集請求直到超時或批次大小限制，然後一起處理——所有請求必須等待批次中最慢的。連續（in-flight）批次處理更精細：當個別請求完成 token 生成時，它們的位置立即被等待的請求填充，最大化 GPU 利用率而不強迫短回應等待長回應。

Why others wrong: 它們是不同策略；批次處理改善吞吐量；連續批次處理在標準 GPU 上運行。

Trap: 認為動態批次處理「就夠了」——對可變長度的 LLM 輸出，連續批次處理提供顯著更好的吞吐量和延遲。

Mnemonic: 動態批次處理 =「巴士時刻表」（等發車）；連續批次處理 =「計程車站」（下一個人搭下一個可用的）

## Q130
Type: single
Difficulty: 1
Tags: responsible-ai, bias-types
Concepts: representation-bias
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

LLM 訓練資料中的代表性偏見是什麼？

A. 在程式碼資料集中只使用一種程式設計語言
B. 當某些人口群體、語言、文化或觀點在訓練資料中代表性不足時，導致模型對這些群體表現更差或做出刻板假設
C. 模型以二進位而非十進位表示數字
D. 模型使用太多參數

Answer: B

Hint: 如果訓練資料主要包含一種觀點，模型將預設使用那個觀點。

Explanation: 主要在英語網路資料上訓練的 LLM 學會反映該資料中過度代表的人口統計、觀點和文化規範。這導致對代表性不足的語言、文化和人口的表現更差，並可能延續刻板印象。緩解措施包括多樣化訓練資料、跨人口群體評估，以及為服務不足的群體微調。

Why others wrong: 程式設計語言多樣性是不同的關注點；數值表示無關；參數數量不是偏見。

Trap: 假設在「網際網路」上訓練的模型具有平衡的代表性——網路資料嚴重過度代表英語、西方觀點和某些人口。

Mnemonic: 代表性偏見 =「模型為訓練資料中最響亮的聲音說話」——安靜的群體被忽視或被刻板化

## Q131
Type: single
Difficulty: 2
Tags: architecture, context-window-evolution
Concepts: context-scaling
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

哪種技術允許透過分塊處理長文件並維護較早塊的壓縮表示來擴展模型的有效上下文視窗？

A. 簡單地將所有塊連接成一個提示
B. 循環記憶方法，將較早的塊壓縮成固定大小的記憶 token，預先附加到後續塊中，讓模型「記住」而不存儲整個文件的完整 KV cache
C. 截斷文件以適配上下文視窗
D. 使用具有更長上下文視窗的較小模型

Answer: B

Hint: 壓縮舊上下文為記憶 token → 用這些記憶處理新上下文 → 重複。

Explanation: MemoryTransformer、Memorizing Transformers 和 Landmark Attention 等方法將較早的段落壓縮為緊湊的記憶表示（記憶 token 或壓縮的 KV 狀態），向前傳遞。這以有損壓縮遠處資訊為代價提供有效無限的上下文長度，而非擴展原始上下文視窗的無損但昂貴的方法。

Why others wrong: 連接在超出上下文視窗後不起作用；截斷丟失資訊；較小的模型可能缺乏能力。

Trap: 假設所有上下文擴展方法是等價的——RAG 檢索特定段落，而循環記憶維護整個先前上下文的連續壓縮表示。

Mnemonic: 循環記憶 =「帶筆記本讀長書」——每章做摘要，向前傳遞筆記

## Q132
Type: single
Difficulty: 3
Tags: fine-tuning, simpo
Concepts: reference-free-alignment
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

SimPO 如何簡化 DPO 訓練管線？

A. 它使用帶有額外超參數的更複雜損失函數
B. 它透過使用回應的平均對數機率作為隱式獎勵來消除對參考模型的需求，減少記憶體使用並簡化實現
C. 它需要先訓練一個單獨的獎勵模型
D. 它只適用於 10 億參數以下的模型

Answer: B

Hint: SimPO =「簡單偏好最佳化」——比 DPO 更簡單，因為移除了參考模型。

Explanation: SimPO 用長度正規化的平均對數機率作為隱式獎勵信號，取代了 DPO 的參考模型比較。這消除了在訓練期間載入和前向傳播參考模型的需求，大約將記憶體需求減半並簡化程式碼。它在許多基準上實現與 DPO 相當或更好的結果，儘管進行了簡化。

Why others wrong: SimPO 更簡單而非更複雜；它完全避免獎勵模型；它適用於任何模型規模。

Trap: 認為移除參考模型一定會損害品質——SimPO 的隱式獎勵公式通常比 DPO 的參考依賴公式更穩定。

Mnemonic: SimPO =「沒有包袱的 DPO」——丟掉參考模型，用對數機率作為獎勵

## Q133
Type: single
Difficulty: 2
Tags: optimization, kernel-fusion
Concepts: fused-operations
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

為什麼核心融合能改善 LLM 推論效能？

A. 它將多個模型層合併為一個
B. 它將多個連續 GPU 操作（如矩陣乘法 + 偏置 + 激活）合併到單一核心啟動中，減少 GPU 記憶體讀寫和核心啟動開銷
C. 它使用多個 GPU 運行一個核心
D. 它將模型和分詞器融合在一起

Answer: B

Hint: 每個獨立核心 = 一次到 GPU 記憶體的往返。融合 = 一次行程中計算所有東西。

Explanation: 沒有融合時，每個操作（矩陣乘法、偏置加法、GeLU）分別從 GPU 全域記憶體讀寫，造成記憶體頻寬瓶頸。融合核心在單次通過 GPU SRAM 中執行所有操作，大幅減少記憶體傳輸。對於記憶體頻寬是瓶頸的 LLM 推論，這可以在融合操作上提供 2-3 倍加速。

Why others wrong: 它融合操作而非層；它是單 GPU 最佳化；分詞器融合是不同的概念。

Trap: 認為核心融合只對訓練重要——它對推論甚至更有影響，因為記憶體頻寬瓶頸更嚴重。

Mnemonic: 核心融合 =「一趟做完所有跑腿，而非每次跑腿之間開車回家」

## Q134
Type: single
Difficulty: 1
Tags: deployment, model-warmup
Concepts: inference-warmup
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

為什麼 LLM 推論伺服器通常在服務生產流量前需要預熱期？

A. GPU 硬體需要時間達到工作溫度
B. 前幾個推論請求觸發 CUDA 核心的 JIT 編譯、惰性記憶體配置和快取填充——使它們比穩態請求顯著更慢
C. 模型需要在最新資料上重新訓練
D. 伺服器需要從網際網路下載模型

Answer: B

Hint: 第一批請求付出「冷啟動」代價——CUDA 編譯、記憶體配置、快取未命中。

Explanation: 首次使用時，CUDA 核心可能需要 JIT 編譯，GPU 記憶體是惰性配置的，各種快取（TensorRT 引擎快取、CUDA 上下文）是冷的。這些一次性成本使初始請求慢得多。預熱在路由生產流量前發送合成請求，確保所有編譯和配置完成且快取已暖。

Why others wrong: GPU 熱穩定在幾秒內；模型權重在預熱前已載入；模型已在磁碟/記憶體中。

Trap: 跳過預熱然後疑惑為什麼前幾個使用者看到高延遲——總是在發送真實流量前預熱推論伺服器。

Mnemonic: 推論預熱 =「讓車引擎暖機」——冷啟動對每個人都不好

## Q135
Type: single
Difficulty: 3
Tags: deployment, disaggregated-serving
Concepts: disaggregated-architecture
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

在 LLM 推論架構的語境中，什麼是解聚服務？

A. 每個 Transformer 層在單獨的伺服器上運行
B. 將模型權重、KV cache 和計算的存儲與服務分離為可獨立擴展的組件——例如，多個計算實例存取的共享 KV cache 儲存，或分開的預填充和解碼池
C. 每個服務組件使用不同的程式設計語言
D. 在沒有任何快取的情況下運行模型

Answer: B

Hint: 解聚 = 將單體拆分為可獨立擴展的部分。

Explanation: 解聚服務將傳統推論中緊密耦合的組件（模型權重、KV cache、計算）分離為獨立服務。這使得創新成為可能，如：共享 KV cache 池（跨實例的前綴快取）、分開的預填充/解碼 GPU 池（針對不同計算特性最佳化），以及每個組件的獨立擴展。這是由生產擴展挑戰驅動的新興架構模式。

Why others wrong: 每層一個伺服器是極端的管線平行而非解聚；語言選擇無關；快取是必要的而非被移除。

Trap: 假設單體服務總是更簡單更好——在規模化時，單體架構的不靈活性浪費資源並限制最佳化。

Mnemonic: 解聚服務 =「推論的微服務」——拆分單體，獨立擴展每部分

## Q136
Type: single
Difficulty: 2
Tags: evaluation, contamination-types
Concepts: data-leakage
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

LLM 基準評估中直接污染和間接污染的區別是什麼？

A. 直接污染是故意的；間接是偶然的
B. 直接污染發生在基準範例逐字出現在訓練資料中，而間接污染發生在訓練資料包含與基準問題密切相關的內容（如討論基準問題的部落格、分析它們的文章），提供不公平優勢而無逐字重疊
C. 間接污染不影響分數
D. 直接污染只發生在程式設計基準

Answer: B

Hint: 逐字 = 直接；改寫或討論 = 間接——兩者都不公平地膨脹分數。

Explanation: 直接污染是基準資料逐字出現在訓練爬取中。間接污染更微妙——討論 MMLU 問題的部落格文章、HumanEval 問題的 StackOverflow 答案，或基準數學問題的教科書解答。兩者都在不代表真正能力的情況下膨脹評估分數，但間接污染更難偵測和過濾。

Why others wrong: 兩者都可以是偶然的（基準資料出現在網路爬取中）；間接污染確實影響分數；所有基準類型都容易受影響。

Trap: 只檢查精確匹配污染——透過基準的討論和分析造成的間接污染普遍且同樣有問題。

Mnemonic: 直接污染 =「抄考試」；間接污染 =「閱讀答案討論論壇」

## Q137
Type: single
Difficulty: 3
Tags: responsible-ai, machine-unlearning
Concepts: model-unlearning
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

在 LLM 的語境中什麼是機器遺忘，為什麼它具有挑戰性？

A. 完全刪除模型並重新開始
B. 在不完全重新訓練的情況下選擇性地從已訓練模型中移除特定訓練資料的影響——具有挑戰性因為個別資料點的影響分散在數十億參數中，且存在複雜互動
C. 遺忘指模型隨時間自然忘記資訊
D. 教導模型忘記除一種以外的所有語言

Answer: B

Hint: 使用者要求從模型中移除其資料——如何在不重新訓練的情況下遵從？

Explanation: 機器遺忘旨在移除特定訓練範例的影響（例如為 GDPR 被遺忘權合規），而不需要昂貴的完全重新訓練。這具有挑戰性因為每個訓練範例透過複雜的梯度互動影響數十億參數，使得精確移除困難。當前方法包括影響函數近似、對目標資料的梯度上升和微調以「遺忘」——都不完美。

Why others wrong: 完全重新訓練不是「遺忘」；靜態模型不會自然遺忘；目標是選擇性移除而非語言縮減。

Trap: 假設可以簡單微調模型來遺忘——即使在「遺忘」後，原始資訊仍可能透過仔細提示被提取。

Mnemonic: 機器遺忘 =「從烤好的蛋糕中精確移除一種食材」——所有食材都混在一起了

## Q138
Type: single
Difficulty: 2
Tags: optimization, inference-engine-comparison
Concepts: serving-frameworks
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

在 vLLM、TensorRT-LLM 和 SGLang 之間選擇 LLM 推論時，主要的取捨是什麼？

A. 它們都提供相同的效能
B. vLLM 提供易用性和廣泛模型支持搭配 PagedAttention；TensorRT-LLM 透過編譯提供最大硬體最佳化但需要更多設置；SGLang 擅長結構化生成和複雜服務模式搭配 RadixAttention
C. TensorRT-LLM 在每個用途上總是最快的
D. vLLM 只支持 NVIDIA GPU 而 TensorRT-LLM 支持所有硬體

Answer: B

Hint: 每個框架都有一個「超能力」——根據你的優先級選擇。

Explanation: vLLM 擅長易於部署、廣泛模型支持和 PagedAttention 的記憶體效率。TensorRT-LLM 透過 GPU 特定核心編譯提供最大效能但需要編譯步驟且模型支持較窄。SGLang 針對帶 RadixAttention 高效前綴快取的複雜服務模式最佳化，擅長約束/結構化生成工作負載。

Why others wrong: 效能特性不同；TensorRT-LLM 在吞吐量上領先但不總是在靈活性上；vLLM 也支持 AMD ROCm 而 TensorRT-LLM 是 NVIDIA 專用。

Trap: 假設基準最快的就是最佳選擇——生產需求包括易用性、模型支持和特定功能需求。

Mnemonic: vLLM =「簡單 + 靈活」；TensorRT =「最大速度」；SGLang =「結構化 + 複雜模式」

## Q139
Type: single
Difficulty: 1
Tags: deployment, model-compression-deployment
Concepts: deployment-size
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

團隊需要在單個 80GB 記憶體的 GPU 上部署 700 億參數模型。FP16 下的模型需要約 140GB。最實際的解決方案是什麼？

A. 購買 140GB 記憶體的 GPU
B. 將模型量化到 4-bit（INT4/NF4），將記憶體減少到大約 35GB 加上開銷，舒適地放入 80GB GPU
C. 使用純 CPU 推論
D. 從零訓練一個較小的模型

Answer: B

Hint: 700 億 × 4 位元 = 約 35GB。700 億 × 16 位元 = 約 140GB。量化使其適配。

Explanation: 4-bit 量化將每個參數從 16 位元減少到 4 位元，將權重記憶體削減 4 倍（140GB → 約 35GB）。加上 KV cache 和運行時開銷的額外記憶體，模型放入 80GB GPU。現代量化方法（GPTQ、AWQ）在 4-bit 下對大多數任務維持品質令人驚訝地好。

Why others wrong: 更大的 GPU 昂貴且可能不存在；CPU 推論對生產來說太慢；從零訓練失去了 700 億模型的能力。

Trap: 認為 4-bit 量化總是毀壞品質——對大多數生產任務，4-bit 700 億模型優於未量化的 70 億模型。

Mnemonic: 4-bit 量化 =「模型權重的 zip 檔案」——4 倍更小，內容大致相同

## Q140
Type: single
Difficulty: 2
Tags: evaluation, domain-benchmarks
Concepts: vertical-evaluation
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

即使有通用基準存在，為什麼領域特定基準（醫學的 MedQA、金融的 FinBench、法律的 LegalBench）很重要？

A. 領域基準更容易通過
B. 通用基準測試廣泛知識，但領域基準評估受監管行業真實世界部署所需的專業推理、術語理解、合規意識和專業級準確度
C. 領域基準總是比通用基準更大
D. 通用基準已經充分涵蓋所有領域

Answer: B

Hint: 醫生不根據 SAT 分數僱人——他們需要醫學執照考試成績。

Explanation: 在醫療保健、金融或法律環境中部署 LLM 需要領域特定推理、術語、法規和邊界案例的專業級能力，這是通用基準無法測試的。MedQA 測試臨床推理，FinBench 評估財務分析，LegalBench 評估法律推理——都捕捉通用基準遺漏的領域特定失敗模式。

Why others wrong: 領域基準不一定更容易；大小不一；通用基準從定義上無法深度涵蓋每個領域。

Trap: 僅基於 MMLU 分數為醫療應用選擇模型——MMLU 的醫學部分只是一小部分，無法測試臨床推理深度。

Mnemonic: 領域基準 =「執業資格考試」——一般智力不足以從事專業實踐

## Q141
Type: single
Difficulty: 3
Tags: optimization, attention-sink
Concepts: attention-patterns
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

LLM 中觀察到的「注意力匯聚」現象是什麼，它與高效推論有何關聯？

A. 注意力分數在某個位置後對所有 token 降為零
B. LLM 一致性地將不成比例的高注意力分配給前幾個 token，而不論其語義相關性——這意味著在任何 KV cache 最佳化方案（如滑動視窗）中必須保留這些 token 以維持模型品質
C. 模型的準確性隨序列變長而下降
D. 注意力計算降低了 CPU 使用率

Answer: B

Hint: 第一個 token 得到的注意力遠超它「應得」的——而移除它會破壞一切。

Explanation: StreamingLLM 研究表明 LLM 發展出「注意力匯聚」——通常第一個 token 無論內容如何都收到不成比例的注意力分數。這些 token 作為 softmax 正規化的數學錨點。當實現滑動視窗推論（用於無限長度串流）時，保留這些初始「匯聚」token 和最近的視窗維持模型品質，而移除它們導致災難性退化。

Why others wrong: 注意力不會歸零；長序列的品質退化是不同的問題；這是關於 GPU 注意力計算而非 CPU。

Trap: 實現刪除前幾個 token 的天真滑動視窗——這觸發注意力分數重新分配，大幅降低輸出品質。

Mnemonic: 注意力匯聚 =「錨定 token」——第一個 token 像錨定船一樣維繫注意力分佈

## Q142
Type: single
Difficulty: 2
Tags: fine-tuning, data-augmentation
Concepts: fine-tuning-data-augmentation
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

為只有 100 個標記範例的任務微調 LLM 時，哪種資料擴增技術最可能改善結果？

A. 將 100 個範例複製多次
B. 使用更強的 LLM 以不同方式改寫現有範例同時保留標籤，建立多樣的訓練變體
C. 在文字中添加隨機噪音
D. 將所有範例翻譯成另一種語言

Answer: B

Hint: 更強的模型可以為你稀疏的訓練資料建立多樣的變體。

Explanation: 基於 LLM 的擴增生成語義等價但語言多樣的現有範例變體。更強的模型可以改寫問題、變化詞彙、改變句子結構，並添加上下文同時保持標籤完整性。這將有效訓練集擴展到 100 個範例之外，改善微調模型對輸入變化的韌性。

Why others wrong: 複製造成記憶化而無多樣性；隨機噪音破壞意義；翻譯改變目標語言/領域。

Trap: 過度擴增到合成範例占主導——維持原始和擴增資料的健康比例。

Mnemonic: LLM 擴增 =「請同義詞典重寫你的作業」——相同含義，不同詞語

## Q143
Type: single
Difficulty: 3
Tags: optimization, speculative-decoding-variants
Concepts: medusa-heads
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

Medusa 與傳統推測解碼在加速 LLM 推論方面有何不同？

A. Medusa 使用更大的草稿模型以獲得更高品質
B. Medusa 在目標模型本身上添加輕量預測頭，從當前隱藏狀態同時預測多個未來 token，消除了對單獨草稿模型的需求
C. Medusa 只適用於編碼器-解碼器模型
D. Medusa 降低模型品質以提高速度

Answer: B

Hint: Medusa 在同一模型上長出額外的「頭」——不需要單獨的草稿模型。

Explanation: Medusa 在目標模型的最後隱藏層上添加小型 MLP 頭，每個頭預測不同未來位置的 token（頭 1 預測 t+1，頭 2 預測 t+2 等）。這些頭在保持基礎模型凍結的情況下訓練。推論期間，Medusa 從這些頭提出多個候選，由基礎模型以樹形注意力模式驗證。這在不需要單獨草稿模型的情況下實現 2-3 倍加速。

Why others wrong: Medusa 使用更小的頭而非更大的模型；它適用於純解碼器模型；品質透過驗證得到保留。

Trap: 認為所有推測解碼都需要兩個模型——Medusa 的自推測方法部署和管理更簡單。

Mnemonic: Medusa =「一個模型有多個預測頭」——像神話中一個身體上多頭的生物

## Q144
Type: single
Difficulty: 2
Tags: deployment, safety-monitoring
Concepts: production-safety
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

將 LLM 部署到生產後，應實施什麼持續安全監控？

A. 安全評估只在部署前需要
B. 持續監控安全分類器觸發率、使用者回饋/報告、輸出毒性分數，以及定期紅隊評估——因為模型行為可能隨變化的使用者模式漂移，對抗性攻擊也隨時間演化
C. 每月檢查模型權重是否損壞
D. 每季運行原始安全基準

Answer: B

Hint: 安全不是「測試一次就永遠完成」的特性——威脅景觀在演化。

Explanation: 部署後安全監控追蹤：安全分類器觸發（趨勢上升可能表示新的攻擊模式）、使用者報告（有害輸出的真實世界回饋）、毒性分數分佈（偵測漂移），以及定期重新評估（新的越獄技術定期出現）。新的對抗性提示持續被開發，使用者群體也會變化——使靜態的部署前評估不足。

Why others wrong: 安全需要持續監控；權重損壞檢查是基礎設施而非安全；季度基準錯過演化的威脅。

Trap: 假設安全的部署前評估意味著模型保持安全——新的越獄技術和對抗性提示每週都被發現。

Mnemonic: 安全監控 =「安全攝影機，而非只有門鎖」——持續警惕而非一次性檢查

## Q145
Type: single
Difficulty: 1
Tags: responsible-ai, hallucination-types
Concepts: hallucination-taxonomy
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

LLM 輸出中固有幻覺和外在幻覺的區別是什麼？

A. 固有幻覺總是比外在幻覺更嚴重
B. 固有幻覺與來源/提示中的資訊矛盾（不忠於任何東西），而外在幻覺添加了無法從來源驗證的資訊（既未被輸入確認也未被否認）
C. 固有幻覺只發生在小模型中
D. 外在幻覺總是有益的

Answer: B

Hint: 固有 = 與來源矛盾；外在 = 在來源之外發明。

Explanation: 固有幻覺直接與輸入矛盾（例如說文件陳述 X 而實際陳述相反），這始終是錯誤。外在幻覺引入來源中不存在的資訊——這可能是正確的（來自模型的訓練知識）或捏造的。這個區別對忠於檢索上下文至關重要的 RAG 系統很重要。

Why others wrong: 固有幻覺始終是錯誤的但外在幻覺可能是正確的；模型大小不決定幻覺類型；外在幻覺如果是捏造的可能有害。

Trap: 將所有幻覺視為同等有害——固有幻覺（與來源矛盾）更危險因為它是可驗證的錯誤，而外在幻覺實際上可能是正確的。

Mnemonic: 固有 =「說書上寫了它沒寫的東西」；外在 =「編造書中沒有的額外事實」
