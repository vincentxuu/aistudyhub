---
exam: NCP-GENL
lang: zh-TW
---

## Q1
Type: single
Difficulty: 1
Tags: transformer, attention-mechanism
Concepts: self-attention
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

與循環神經網路相比，Transformer 架構中自注意力機制的主要優勢是什麼？

A. 訓練時使用更少的 GPU 記憶體
B. 能夠平行處理序列中所有位置，在無需依序計算的情況下捕捉長距離依賴關係
C. 不需要進行分詞處理
D. 無論序列長度如何，推論時間都會更短

Answer: B

Hint: 想想 RNN 是逐一處理 token，而 Transformer 是同時處理整個序列。

Explanation: 自注意力同時計算所有位置之間的關係，實現平行處理並有效捕捉長距離依賴。RNN 必須依序處理，速度較慢且容易在長序列中出現梯度消失問題。

Why others wrong: Transformer 由於二次方注意力機制實際上使用更多記憶體；分詞仍然是必要的；標準注意力的推論時間會隨序列長度呈二次方增長。

Trap: 假設 Transformer 總是更快——它們用記憶體換取消除序列瓶頸，而注意力成本是 O(n²)。

Mnemonic: 自注意力 =「一次看到所有東西」 vs RNN =「一次只能看一步」

## Q2
Type: single
Difficulty: 2
Tags: prompting, chain-of-thought
Concepts: chain-of-thought-prompting
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

一位開發人員需要讓 LLM 精確解決多步驟算術問題。哪種提示技術最可能提升此類任務的表現？

A. 將溫度降低至 0
B. 思維鏈提示——要求模型逐步展示推理過程
C. 將最大 token 限制增加到 4096
D. 使用系統提示說「請保持精確」

Answer: B

Hint: 複雜推理透過將問題分解為中間步驟會得到顯著改善。

Explanation: 思維鏈（CoT）提示引導出中間推理步驟，顯著提升算術和邏輯推理任務的表現。研究顯示，要求模型「逐步思考」有助於將複雜問題分解，而非直接跳到最終答案。

Why others wrong: 低溫度只減少隨機性但不改善推理；增加 token 限制不會改變推理品質；「保持精確」這種模糊指示無法提供結構性引導。

Trap: 以為 temperature=0 能解決推理錯誤——它只讓輸出具確定性，不會讓答案更正確。

Mnemonic: CoT =「像數學老師要求的那樣：寫出計算過程」

## Q3
Type: single
Difficulty: 1
Tags: architecture, positional-encoding
Concepts: positional-encoding
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

為什麼 Transformer 模型需要位置編碼或位置嵌入？

A. 為了減少詞彙表大小
B. 因為自注意力機制本身對 token 順序沒有概念
C. 為了將輸入序列壓縮成較少的 token
D. 為了讓模型能生成更長的輸出

Answer: B

Hint: 不同於 RNN，Transformer 同時處理所有 token——那什麼告訴它們順序呢？

Explanation: 自注意力是排列不變的——無論 token 順序如何都會計算出相同的輸出。位置編碼注入序列位置資訊，使模型能區分「貓坐在墊子上」和「墊子坐在貓上」。

Why others wrong: 詞彙表大小由分詞器決定；位置編碼不壓縮輸入；輸出長度由生成參數控制，與位置編碼無關。

Trap: 混淆位置編碼和分詞——它們的用途完全不同。

Mnemonic: 位置編碼 = 序列中每個 token 的 GPS 座標

## Q4
Type: single
Difficulty: 2
Tags: prompting, few-shot
Concepts: few-shot-prompting
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

設計情感分類任務的少樣本提示時，選擇範例最重要的考量是什麼？

A. 盡可能使用大量範例填滿上下文視窗
B. 選擇多樣且具代表性的範例，涵蓋不同類別和邊界案例
C. 只包含模型先前失敗的範例
D. 使用不同領域的範例以改善泛化能力

Answer: B

Hint: 少樣本範例的品質和涵蓋範圍比數量更重要。

Explanation: 有效的少樣本提示需要多樣且具代表性的範例，展示預期的輸出格式並涵蓋各類別。選擇不當的範例可能偏頗模型或無法展示重要的區別。

Why others wrong: 填滿上下文會浪費 token 並可能混淆模型；只用失敗案例會造成偏差；跨領域範例可能誤導而非幫助泛化。

Trap: 認為範例越多結果越好——幾個精心挑選的範例往往優於大量平庸的範例。

Mnemonic: 少樣本 =「示範而非說教」——選擇能教導的範例

## Q5
Type: single
Difficulty: 3
Tags: architecture, kv-cache
Concepts: kv-cache
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

在自回歸生成過程中，一個 130 億參數的 LLM 具有 40 層、40 個注意力頭和 128 的頭維度，以 batch size 1、序列長度 2048 進行 token 生成。KV cache 在 FP16 下大約消耗多少 GPU 記憶體？

A. 約 400 MB
B. 約 1.6 GB
C. 約 6.4 GB
D. 約 12.8 GB

Answer: A

Hint: KV cache 大小 = 2 × 層數 × 頭數 × 頭維度 × 序列長度 × batch_size × 每元素位元組數。

Explanation: KV cache = 2（K 和 V）× 40 層 × 40 頭 × 128 維 × 2048 序列 × 1 batch × 2 位元組（FP16）= 約 838 MB。最接近的答案約 400 MB，如果模型使用分組查詢注意力（GQA）且 KV 頭數較少，這在現代 130 億參數模型中很常見。理解 KV cache 大小對部署規劃至關重要。

Why others wrong: 1.6 GB、6.4 GB 和 12.8 GB 對此序列長度的 130 億模型來說都高估了；這些數值對應更大的模型或更長的序列。

Trap: 忘記現代模型使用 GQA/MQA 來減少 KV 頭數，或混淆模型參數記憶體與 KV cache 記憶體。

Mnemonic: KV cache = 2 × 層數 × KV_頭數 × 維度 × 序列長度 × 位元組——生成過程中的「隱藏」記憶體成本

## Q6
Type: single
Difficulty: 2
Tags: architecture, rotary-embedding
Concepts: rope
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

旋轉位置嵌入（RoPE）相較於學習型絕對位置嵌入的主要優勢是什麼？

A. RoPE 消除了注意力遮罩的需求
B. RoPE 將相對位置資訊直接編碼進注意力計算中，實現更好的長度泛化
C. RoPE 將模型參數量減半
D. RoPE 允許模型完全跳過嵌入層

Answer: B

Hint: 想想當模型遇到超過訓練長度的序列時會發生什麼。

Explanation: RoPE 對查詢和鍵向量套用旋轉矩陣，透過旋轉向量之間的角度編碼相對位置。這種相對編碼方式比絕對嵌入更能泛化到訓練未見過的序列長度。

Why others wrong: 因果生成仍需要注意力遮罩；RoPE 增加少量參數但不會減半；token 表示仍需要嵌入層。

Trap: 假設 RoPE 能完美泛化到任何長度——它在超出訓練長度時仍會退化，只是比絕對嵌入更為漸進。

Mnemonic: RoPE =「旋轉以建立關係」——旋轉角度編碼相對距離

## Q7
Type: single
Difficulty: 1
Tags: prompting, zero-shot
Concepts: zero-shot-prompting
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

零樣本提示和少樣本提示有什麼區別？

A. 零樣本使用微調模型，少樣本使用預訓練模型
B. 零樣本在提示中不提供任務範例，僅依賴指令；少樣本則包含示範範例
C. 零樣本總是比少樣本更準確
D. 零樣本需要比少樣本更大的模型

Answer: B

Hint: 零/少樣本中的「樣本」是指提供的範例數量。

Explanation: 零樣本提示僅透過指令描述任務而不提供範例，依賴模型的預訓練知識。少樣本提示包含輸入-輸出示範對，透過模式匹配引導模型行為。

Why others wrong: 兩者都可使用同一模型；準確度取決於任務；模型大小與提示策略無關。

Trap: 認為零樣本一定較差——對於定義明確的任務，清晰的指令可能優於選擇不當的少樣本範例。

Mnemonic: 零樣本 =「只告訴我要做什麼」 vs 少樣本 =「示範給我看要做什麼」

## Q8
Type: single
Difficulty: 3
Tags: architecture, mixture-of-experts
Concepts: moe
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

在每層有 8 個專家和 top-2 路由策略的混合專家（MoE）Transformer 中，訓練時的主要挑戰是什麼？

A. 模型無法學會將 token 路由到不同專家
B. 負載不平衡——某些專家收到不成比例的 token，導致容量浪費和通訊瓶頸
C. MoE 模型總是比密集模型需要更多訓練資料
D. top-2 路由在所有情況下都會導致梯度爆炸

Answer: B

Hint: 如果路由器持續將大多數 token 傳送給同樣的 2 個專家會怎樣？

Explanation: 負載不平衡是 MoE 訓練的核心挑戰——如果沒有輔助負載平衡損失，路由器可能坍縮為將大多數 token 路由到少數「熱門」專家。這浪費了未充分使用的專家的容量，並在分散式訓練中造成通訊熱點。

Why others wrong: 路由器確實能學會區分；MoE 可以高效利用資料，因為每次只啟動一部分參數；梯度爆炸不是 top-k 路由固有的問題。

Trap: 認為更多專家就一定表現更好——如果沒有適當的負載平衡，增加專家反而可能降低品質。

Mnemonic: MoE 平衡 =「每個人都要有客人」——偏心的路由器浪費了餐廳的座位

## Q9
Type: single
Difficulty: 2
Tags: adaptation, model-selection
Concepts: model-adaptation-strategies
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

一家公司有一個通用的 700 億參數 LLM，需要讓它遵循客服應用的特定輸出格式。團隊的 GPU 資源有限。哪種調適策略最合適？

A. 從零開始在客服資料上預訓練新模型
B. 使用提示工程搭配結構化輸出指令和少樣本範例
C. 對所有 700 億參數進行微調
D. 先將模型蒸餾至 70 億參數

Answer: B

Hint: 考慮最簡單的方法來匹配限制條件——有限的 GPU 資源和僅需格式調整。

Explanation: 對於有限運算資源下的輸出格式需求，提示工程是最節省資源的方法。結構化指令和少樣本範例能有效引導一個有能力的 700 億模型的輸出格式，無需任何訓練。

Why others wrong: 從零預訓練成本極為高昂；700 億全量微調需要大量 GPU 叢集；蒸餾複雜且可能喪失能力，對格式問題而言太過了。

Trap: 在問題只是輸出格式時就急著微調——提示工程應始終作為格式和風格調整的首選嘗試。

Mnemonic: 調適階梯：提示 → PEFT → 全量微調 → 預訓練（只爬到需要的高度）

## Q10
Type: single
Difficulty: 2
Tags: architecture, tokenization
Concepts: bpe-tokenization
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

將預訓練 LLM 調適至具有顯著不同文字系統的新語言（如泰語或阿拉伯語）時，最可能降低效能的分詞挑戰是什麼？

A. 模型會拒絕生成新語言的文字
B. 現有的 BPE 詞彙表是在不同字元分佈上訓練的，導致新語言過度碎片化和更長的序列
C. BPE 分詞完全無法處理非拉丁文字
D. 位置嵌入會溢出

Answer: B

Hint: BPE 合併是從訓練資料學習的——當測試語言在訓練中代表性不足時會發生什麼？

Explanation: BPE 詞彙表反映訓練資料的字元和子詞分佈。對於代表性不足的語言，常見詞可能被拆分為許多單字元或位元組 token，大幅增加序列長度，降低有效上下文，並影響速度和品質。

Why others wrong: 模型不會拒絕，只是表現較差；BPE 透過位元組級別回退可以處理任何文字系統；位置嵌入不會溢出，但更長的序列可能超出上下文長度。

Trap: 假設「多語言」模型平等地處理所有語言——分詞器效率在不同語言間差異巨大。

Mnemonic: 訓練不足的分詞器 = 在新語言中「逐字母拼寫每個單詞」

## Q11
Type: single
Difficulty: 1
Tags: fine-tuning, data-preparation
Concepts: data-curation
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

為 LLM 準備微調資料集時，資料去重的主要目的是什麼？

A. 透過擴增來增加資料集大小
B. 防止模型記憶和過擬合重複範例，這可能導致重複性輸出
C. 將所有資料轉換為相同的檔案格式
D. 移除模型在預訓練期間已經見過的所有資料

Answer: B

Hint: 當模型在訓練過程中多次看到完全相同的範例時會發生什麼？

Explanation: 重複範例會使模型對重複內容賦予不成比例的權重，導致記憶化、過擬合和重複生成模式。去重確保每個訓練訊號都是唯一的，改善泛化能力。

Why others wrong: 去重減少而非增加資料集大小；格式轉換是前處理，不是去重；我們通常無法知道預訓練資料中有什麼。

Trap: 認為去重只意味著精確匹配——近似重複（改寫、範本）也可能導致類似問題。

Mnemonic: 去重 =「訓練中不要有迴音」——每個範例都應該教導新東西

## Q12
Type: single
Difficulty: 2
Tags: fine-tuning, lora
Concepts: lora
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

在 LoRA（低秩調適）中，為什麼低秩矩陣特別注入到注意力權重矩陣而非所有層？

A. 注意力權重是 Transformer 中唯一可訓練的參數
B. 注意力層最有效率地捕捉任務特定知識，針對它們提供最佳的效能-參數比
C. LoRA 在數學上不能應用於前饋層
D. 前饋層會透過反向傳播自動更新，不需要 LoRA

Answer: B

Hint: LoRA 技術上可以應用到任何地方——問題是在哪裡最有效。

Explanation: 雖然 LoRA 可以應用於任何線性層，但研究顯示注意力投影矩陣（Q、K、V、O）是最有效的目標，因為它們控制模型如何關注和轉換資訊。在此處應用 LoRA 能在新增參數和任務效能之間提供最佳的取捨。

Why others wrong: 所有 Transformer 權重都可以訓練；LoRA 在數學上對任何線性層都有效；前饋層不會在沒有明確 LoRA 或梯度流的情況下自動更新。

Trap: 假設 LoRA 必須應用到所有層——實際上，僅針對注意力層通常就能匹配甚至超過全層 LoRA 的效果，且參數更少。

Mnemonic: 注意力上的 LoRA =「調整聚光燈」——微調模型關注的方向會有超出比例的影響

## Q13
Type: single
Difficulty: 2
Tags: fine-tuning, rlhf
Concepts: rlhf
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

在 RLHF（基於人類回饋的強化學習）中，獎勵模型的角色是什麼？

A. 為基礎 LLM 生成訓練資料
B. 根據學習到的人類偏好對模型輸出評分，為 PPO 最佳化提供獎勵信號
C. 取代對人類標註的需求
D. 透過梯度下降直接修改 LLM 的權重

Answer: B

Hint: 獎勵模型位於人類偏好和強化學習訓練循環之間。

Explanation: 獎勵模型在人類比較資料（偏好回應 vs 拒絕回應）上訓練以預測人類偏好分數。在 PPO 訓練過程中，它評估 LLM 的輸出並提供純量獎勵信號，引導策略朝著生成更受偏好的回應方向發展。

Why others wrong: 獎勵模型評分輸出，不生成資料；它是在人類標註上訓練的，不是替代品；PPO 處理權重更新，不是獎勵模型。

Trap: 混淆獎勵模型和策略模型——獎勵模型只評分，策略模型才生成並被更新。

Mnemonic: 獎勵模型 =「從人類偏好學習的裁判」，PPO =「訓練選手的教練」

## Q14
Type: single
Difficulty: 1
Tags: fine-tuning, sft
Concepts: supervised-fine-tuning
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

訓練遵循指令的 LLM 時，監督式微調（SFT）資料的標準格式是什麼？

A. 沒有任何結構的原始文字文件
B. 指令-回應對（或指令-輸入-回應三元組），展示預期的行為
C. 帶答案的選擇題
D. 未標記的網路爬取資料

Answer: B

Hint: SFT 教導模型遵循指令——什麼格式展示了這一點？

Explanation: SFT 資料由（指令，回應）對或（指令，輸入，回應）三元組組成。每個範例向模型展示對給定指令的良好回應，透過監督學習教導指令遵循模式。

Why others wrong: 原始文字用於預訓練；選擇題格式用於評估，非微調；未標記資料用於無監督預訓練。

Trap: 使用評估格式資料（選擇題）來微調——這教會模型回答選擇題，而非遵循一般指令。

Mnemonic: SFT 資料 =「這是我想要的，這是完美答案」——透過範例學習

## Q15
Type: single
Difficulty: 3
Tags: fine-tuning, dpo
Concepts: dpo
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

直接偏好最佳化（DPO）與標準 RLHF 流程有何不同？

A. DPO 比 RLHF 需要更多的人類偏好資料
B. DPO 透過使用偏好對的閉式損失直接最佳化策略，消除了對單獨獎勵模型和 PPO 訓練循環的需求
C. DPO 只能用於小於 70 億參數的模型
D. DPO 產生與 RLHF 相同的結果但訓練時間更長

Answer: B

Hint: DPO 的關鍵創新是簡化 RLHF 流程——它去除了哪些步驟？

Explanation: DPO 將 RLHF 目標重新表述為偏好對（選擇 vs 拒絕回應）上的簡單分類式損失。這消除了訓練單獨獎勵模型和執行不穩定的 PPO 最佳化循環的需求，使偏好對齊顯著更簡單和穩定。

Why others wrong: DPO 使用相同的偏好資料格式；它適用於任何模型規模；結果可能與 RLHF 不同，且 DPO 通常更快。

Trap: 假設更簡單一定更差——DPO 通常匹配或超越 RLHF 品質，同時更容易調參。

Mnemonic: DPO =「直達」對齊路線——跳過獎勵模型中間商

## Q16
Type: single
Difficulty: 2
Tags: fine-tuning, nemo
Concepts: nemo-customization
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

使用 NVIDIA NeMo Framework 微調大型語言模型時，處理自訂資料集的建議方法是什麼？

A. 直接將原始文字檔案上傳到訓練腳本
B. 將資料轉換為具有結構化欄位的 JSONL 格式，驗證模式一致性，並使用 NeMo 的資料前處理管線
C. 將資料存儲在 SQL 資料庫中並在訓練期間查詢
D. 將所有資料嵌入模型的分詞器詞彙表中

Answer: B

Hint: NeMo 期望結構化、前處理過的資料——不是直接餵入原始檔案。

Explanation: NeMo Framework 期望微調資料為具有特定模式欄位的 JSONL 格式。前處理管線處理分詞、打包和高效資料載入。適當的格式化和驗證可以防止訓練期間的靜默資料品質問題。

Why others wrong: 原始文字缺少 NeMo 需要的結構；訓練期間的 SQL 查詢會造成 I/O 瓶頸；將資料嵌入分詞器詞彙表混淆了資料與詞彙表擴展。

Trap: 跳過資料驗證——格式錯誤的 JSONL 條目可能導致靜默失敗或訓練品質下降。

Mnemonic: NeMo 資料 =「結構化、已驗證、JSONL」——輸入乾淨，輸出才乾淨

## Q17
Type: single
Difficulty: 3
Tags: fine-tuning, catastrophic-forgetting
Concepts: catastrophic-forgetting
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

一個團隊在醫學問答資料上微調通用 LLM。微調後，模型在醫學問題上表現優異，但在之前能處理的基礎數學和常識任務上失敗了。哪種技術最能緩解這個問題？

A. 提高學習率以確保模型更快學習醫學領域
B. 在醫學微調資料集中混入一定比例的通用指令資料以保留廣泛能力
C. 僅在醫學資料上訓練更多輪次
D. 先移除基礎模型中的所有非醫學知識

Answer: B

Hint: 模型「忘記」了它的一般技能——如何在學習新技能的同時提醒它？

Explanation: 災難性遺忘發生在狹窄領域的微調覆蓋了模型的一般能力時。將通用資料與領域特定資料混合可以維持模型的廣泛知識，同時仍然學習新領域。這是生產環境微調的標準做法。

Why others wrong: 更高學習率加速遺忘；在狹窄資料上更多輪次會惡化遺忘；移除一般知識恰好是所需的反面。

Trap: 認為領域專業化需要排他性的領域資料——新知識和保留知識之間的平衡至關重要。

Mnemonic: 混合資料 =「學新技能的同時不忘本」

## Q18
Type: single
Difficulty: 2
Tags: fine-tuning, qlora
Concepts: qlora
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

QLoRA 在標準 LoRA 之上增加了什麼來減少記憶體需求？

A. 對所有計算使用 float64 精度
B. 將基礎模型權重量化為 4-bit NormalFloat，同時保持 LoRA 調適器權重為較高精度（BF16），並使用雙重量化和分頁最佳化器
C. 在微調前移除模型一半的層
D. 只訓練模型的第一層和最後一層

Answer: B

Hint: QLoRA 中的「Q」代表量化——什麼被量化了，什麼保持高精度？

Explanation: QLoRA 結合了凍結基礎權重的 4-bit NormalFloat 量化與 BF16 LoRA 調適器。雙重量化減少了量化常數的記憶體開銷，分頁最佳化器處理記憶體尖峰。這使得在單張 48GB GPU 上微調 650 億模型成為可能。

Why others wrong: Float64 會使記憶體增加四倍；移除層會破壞模型能力；只訓練邊界層會錯過最重要的注意力層。

Trap: 認為量化會損害品質——QLoRA 匹配全精度 LoRA 品質，因為梯度和調適器保持在 BF16。

Mnemonic: QLoRA =「凍結並壓縮基礎，以全精度訓練輕量調適器」

## Q19
Type: single
Difficulty: 1
Tags: data-preparation, tokenization
Concepts: tokenization-pipeline
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

在 LLM 微調的背景下，將特殊 token 如 <|im_start|> 和 <|im_end|> 加入訓練資料的目的是什麼？

A. 為了增加詞彙表大小以獲得更好的壓縮
B. 標記結構邊界（如對話中的輪次），使模型學會生成格式正確的輸出
C. 防止模型在推論期間生成這些 token
D. 為了安全目的加密訓練資料

Answer: B

Hint: 對話模型需要知道一條訊息在哪裡結束，另一條在哪裡開始。

Explanation: 特殊 token 在訓練資料中作為結構分隔符，標記系統提示、使用者訊息和助理回應之間的邊界。模型學會在適當位置生成這些 token，使得推論期間能進行適當的多輪對話格式化。

Why others wrong: 特殊 token 是為了結構而非壓縮；模型應該適當生成它們，而非避免；它們沒有加密目的。

Trap: 認為特殊 token 是可選的——沒有它們，模型無法區分角色或對話輪次。

Mnemonic: 特殊 token =「對話的標點符號」——告訴模型誰在說話和何時說話

## Q20
Type: single
Difficulty: 3
Tags: fine-tuning, data-quality
Concepts: data-contamination
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

微調過程中，團隊注意到模型在保留的評估集上達到 98% 準確率，但部署後表現不佳。最可能的原因是什麼？

A. 模型訓練不足，需要更多輪次
B. 資料污染——評估集洩漏到訓練資料中，可能透過完全重複或近似重複的改寫
C. GPU 在訓練期間太慢
D. 學習率太低

Answer: B

Hint: 可疑的高評估分數加上糟糕的實際表現是什麼問題的典型症狀？

Explanation: 當評估表現大幅超過實際表現時，資料污染是最可能的元兇。模型記憶了評估範例而非學習可泛化的模式。這可能透過完全重複、近似重複或在包含基準的資料源上訓練而發生。

Why others wrong: 訓練不足會顯示低評估分數；GPU 速度不影響模型品質；低學習率會顯示較低而非膨脹的評估分數。

Trap: 在未對照真實世界保留資料進行健全性檢查的情況下慶祝高基準分數——始終在真正未見過的資料上測試。

Mnemonic: 評估 98% + 生產環境差 =「學生事先看到了考試答案」

## Q21
Type: single
Difficulty: 1
Tags: distributed-training, data-parallelism
Concepts: data-parallelism
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

在資料平行中，訓練工作負載如何分散到多個 GPU 上？

A. 每個 GPU 在相同資料上訓練不同的模型
B. 模型被複製到每個 GPU 上，每個 GPU 處理不同的小批次資料，每步後同步梯度
C. 資料集存儲在一個 GPU 上並串流到其他 GPU
D. 每個 GPU 處理模型的不同層

Answer: B

Hint: 「資料」平行意味著分割資料——什麼在 GPU 之間保持不變？

Explanation: 資料平行將完整模型複製到每個 GPU 上。每個 GPU 在不同的資料分片上計算前向和反向傳播，然後梯度被同步（通常透過 all-reduce），使所有副本保持一致。這對能放入單個 GPU 的模型可以線性擴展吞吐量。

Why others wrong: 訓練不同模型是集成訓練；將資料存儲在一個 GPU 上會造成瓶頸；按層分割是模型/管線平行。

Trap: 混淆資料平行和模型平行——在資料平行中，每個 GPU 都有完整的模型。

Mnemonic: 資料平行 =「相同食譜，不同食材」——每個 GPU 用不同的資料批次烹飪相同的模型

## Q22
Type: single
Difficulty: 2
Tags: distributed-training, tensor-parallelism
Concepts: tensor-parallelism
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

張量平行和管線平行在訓練大型模型時的主要區別是什麼？

A. 張量平行在所有情況下都比管線平行慢
B. 張量平行將單個層的權重矩陣分割到各 GPU 上（層內），而管線平行將不同層分配到不同 GPU 上（層間）
C. 管線平行比張量平行需要更多的 GPU
D. 張量平行不需要任何 GPU 間通訊

Answer: B

Hint: 「張量」= 分割單一矩陣；「管線」= 分割層堆疊。

Explanation: 張量平行在一層內將權重矩陣分割到各 GPU，每次前向/反向傳播都需要高頻寬通訊（NVLink）。管線平行將連續的層分配到不同 GPU，僅在階段邊界需要通訊。它們通常組合使用：節點內用張量平行，節點間用管線平行。

Why others wrong: 速度取決於硬體拓撲；GPU 數量取決於模型大小而非平行類型；張量平行在每層內需要密集的 GPU 間通訊。

Trap: 在互連較慢的節點間使用張量平行——它需要 NVLink 級別的頻寬；管線平行更適合跨節點分割。

Mnemonic: 張量 =「切磚塊」（層內），管線 =「切牆壁」（層間）

## Q23
Type: single
Difficulty: 2
Tags: optimization, mixed-precision
Concepts: mixed-precision-training
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

在 FP16/BF16 混合精度訓練中，為什麼必須維護 FP32 的主副本權重？

A. FP32 權重只在推論時需要
B. 小的梯度更新在 FP16 中可能下溢，導致權重停滯不前；FP32 主權重能精確累積這些小更新，再轉換回 FP16
C. FP32 權重訓練比 FP16 權重更快
D. GPU 硬體無法以 FP16 執行計算

Answer: B

Hint: 想想在低精度下將一個很小的數（梯度）加到一個大得多的數（權重）時會發生什麼。

Explanation: 在 FP16 中，有限的尾數意味著小的梯度更新在加到較大的權重值時可能被四捨五入為零。維護 FP32 主權重允許精確累積小更新。FP16 副本用於快速前向/反向傳播，而 FP32 確保正確的最佳化。

Why others wrong: 主權重用於訓練，不只是推論；FP32 每次操作更慢；現代 GPU 有專用的 FP16/BF16 硬體（Tensor Cores）。

Trap: 認為 BF16 解決所有精度問題——BF16 有與 FP32 相同的指數範圍（減少溢出/下溢），但尾數精度仍然有限。

Mnemonic: FP32 主副本 =「會計師」——在 FP16 工人做重活時保持精確的帳目

## Q24
Type: single
Difficulty: 3
Tags: optimization, flash-attention
Concepts: flash-attention
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

FlashAttention 相比標準注意力主要透過什麼機制實現顯著加速？

A. 使用更簡單的近似標準注意力的公式
B. 透過分塊計算將資料保持在快速 GPU SRAM 中，最小化慢速 HBM 的讀寫，使其為 IO 感知型而非計算最佳化型
C. 將注意力頭數減半
D. 僅跳過填充 token 的注意力計算

Answer: B

Hint: 標準注意力的瓶頸不在計算——而在記憶體頻寬。

Explanation: FlashAttention 將注意力計算重構為能放入 GPU SRAM（片上記憶體）的分塊，避免在慢速 HBM（片外記憶體）中實體化完整的 N×N 注意力矩陣。這種 IO 感知方法將記憶體讀寫從 O(N²) 降至 O(N²/M)，其中 M 是 SRAM 大小，實現 2-4 倍加速且不犧牲精度。

Why others wrong: FlashAttention 計算精確的注意力，不是近似值；它不改變頭數；填充最佳化是另一個議題，與 IO 節省相比是次要的。

Trap: 認為 FlashAttention 用精度換速度——它產生與標準注意力數學上相同的結果。

Mnemonic: FlashAttention =「在快速快取中工作，而非慢速倉庫」——相同數學，更聰明的記憶體存取

## Q25
Type: single
Difficulty: 2
Tags: optimization, gradient-checkpointing
Concepts: gradient-checkpointing
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

梯度檢查點（激活重算）用什麼資源換取什麼好處？

A. 用磁碟空間換取更快的訓練
B. 用計算時間（在反向傳播時重新計算激活）換取減少的 GPU 記憶體使用量，不存儲所有中間激活
C. 用模型精度換取更小的模型大小
D. 用網路頻寬換取更少的 CPU 使用率

Answer: B

Hint: 在反向傳播期間，你需要前向傳播的激活——如果你沒有全部保存呢？

Explanation: 梯度檢查點透過在前向傳播時丟棄大部分中間激活，並在反向傳播時重新計算來節省記憶體。這通常增加約 33% 的計算開銷，但可以減少 60-80% 的激活記憶體，使得能在相同硬體上訓練更大的模型或批次。

Why others wrong: 它完全在 GPU 記憶體中操作，與磁碟無關；精度不受影響，因為重新計算的激活完全一致；它不涉及網路或 CPU 的取捨。

Trap: 認為重算開銷是不可接受的——約 33% 的計算成本通常非常值得，因為記憶體節省能使用更大的批次大小。

Mnemonic: 梯度檢查點 =「在章節摘要處做筆記，需要時再重讀」

## Q26
Type: single
Difficulty: 1
Tags: optimization, batch-size
Concepts: gradient-accumulation
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

當 GPU 記憶體不足以容納所需的批次大小時，什麼技術能在不增加記憶體使用的情況下模擬更大的有效批次大小？

A. 提高學習率
B. 梯度累積——執行多次前向-反向傳播並累加梯度，然後再更新權重
C. 減少模型的詞彙表大小
D. 使用 CPU 卸載最佳化器狀態

Answer: B

Hint: 你想要批次大小 64 但只能放入 8——如何獲得相同的梯度信號？

Explanation: 梯度累積依序執行多個微批次，累積梯度而不更新權重，然後執行一次最佳化器步驟。例如，8 個大小為 8 的微批次產生與一個大小為 64 的批次相同的梯度，僅使用單個微批次的記憶體。

Why others wrong: 學習率不改變有效批次大小；詞彙表大小影響嵌入記憶體，與批次大小無關；CPU 卸載有助於記憶體但是另一種技術。

Trap: 在改變有效批次大小時忘記調整學習率——線性縮放規則建議按比例調整學習率。

Mnemonic: 梯度累積 =「存錢再一次大額購買」

## Q27
Type: single
Difficulty: 3
Tags: optimization, deepspeed
Concepts: zero-optimizer
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

在 DeepSpeed ZeRO Stage 3 中，相比標準資料平行，什麼被分散到各 GPU 上？

A. 只有輸入資料被分散
B. 最佳化器狀態、梯度和模型參數全部分散到各 GPU 上，因此沒有單個 GPU 持有完整模型
C. 只有最佳化器狀態被分散
D. 訓練資料集在每個 epoch 被重新分配

Answer: B

Hint: ZeRO 階段漸進地分散更多——Stage 1 = 最佳化器，Stage 2 = + 梯度，Stage 3 = + 參數。

Explanation: ZeRO Stage 3 將所有三個記憶體消耗者分散到資料平行的 GPU 上：最佳化器狀態（Stage 1）、梯度（Stage 2）和模型參數（Stage 3）。每個 GPU 只存儲每項的 1/N，在需要計算時按需收集參數。這使得訓練遠超單 GPU 記憶體的模型成為可能。

Why others wrong: 標準資料平行已經分割資料；Stage 3 超越了僅分散最佳化器狀態（那是 Stage 1）；資料集重新分配與 ZeRO 無關。

Trap: 混淆 ZeRO 階段——Stage 1 只分散最佳化器狀態；你需要 Stage 3 才能獲得包括參數在內的完整記憶體減少。

Mnemonic: ZeRO 1-2-3 =「共享最佳化器、共享梯度、共享模型」——漸進式共享

## Q28
Type: single
Difficulty: 2
Tags: optimization, learning-rate
Concepts: learning-rate-scheduling
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

為什麼在 LLM 訓練開始時通常使用預熱階段？

A. 讓 GPU 達到最佳工作溫度
B. 從接近零開始逐漸增加學習率，防止在模型權重隨機初始化時出現大幅且不穩定的梯度更新
C. 將資料集預載入 GPU 記憶體
D. 在訓練開始前進行驗證

Answer: B

Hint: 在初始化時，梯度可能很大且嘈雜——小學習率能防止什麼？

Explanation: 在訓練早期，模型權重產生嘈雜、高變異的梯度。以大學習率開始可能導致發散或損失尖峰。預熱逐漸增加學習率，讓模型在施加全力更新前找到穩定的最佳化軌跡。

Why others wrong: GPU 溫度由硬體管理；資料載入與學習率排程無關；訓練前的驗證有用但與預熱無關。

Trap: 認為 LLM 訓練可以跳過預熱——跳過通常會導致訓練早期不穩定，特別是使用基於 Adam 的最佳化器時。

Mnemonic: 學習率預熱 =「衝刺前做伸展」——溫和開始，然後加速

## Q29
Type: single
Difficulty: 2
Tags: optimization, quantization
Concepts: post-training-quantization
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

對模型應用 GPTQ（訓練後量化）從 FP16 壓縮到 INT4 時的取捨是什麼？

A. 模型的詞彙表減少 75%
B. 模型大小減少約 4 倍，大多數任務的準確度損失最小，但某些細微推理和罕見知識回憶可能退化
C. 模型不能再被微調
D. 量化後推論速度總是會降低

Answer: B

Hint: 你用 4 位元而非 16 位元表示每個權重——獲得了什麼，可能失去什麼？

Explanation: GPTQ 使用小型校準資料集逐層校準量化，最小化重建誤差。4 倍的大小減少使得在消費級 GPU 上部署成為可能。大部分能力被保留，但需要微妙區分的任務（細微推理、罕見事實回憶）可能因數值精度降低而顯示退化。

Why others wrong: 詞彙表不變；量化模型可以用 QLoRA 進一步微調；由於記憶體頻寬需求降低，推論通常更快。

Trap: 假設 INT4 量化總是維持完整模型品質——在部署前對你的具體用例進行基準測試。

Mnemonic: GPTQ INT4 =「將照片壓縮為 JPEG」——更小的檔案，通常看起來不錯，有時會丟失細節

## Q30
Type: single
Difficulty: 3
Tags: optimization, nccl
Concepts: communication-backend
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

在多節點訓練設置中，每個節點有 8 個 GPU，團隊觀察到梯度同步佔步驟時間的 40%。哪種最佳化最能直接減少這種通訊開銷？

A. 將最佳化器從 AdamW 切換到 SGD
B. 使用梯度壓縮（如 PowerSGD）結合將通訊與反向傳播計算重疊
C. 增加模型大小以更好利用 GPU 計算
D. 減少訓練輪次數

Answer: B

Hint: 你需要減少梯度 all-reduce 所花的時間——同時攻擊資料量和時機。

Explanation: 梯度壓縮（PowerSGD、TopK）減少 all-reduce 期間傳輸的資料量。將通訊與計算重疊，在後面的層仍在計算時就開始前面層的梯度同步，隱藏了延遲。兩者結合可以將通訊開銷從 40% 降至 15% 以下。

Why others wrong: 最佳化器選擇不影響通訊量；更大的模型增加通訊；更少的輪次迴避問題但不解決問題。

Trap: 只處理一個維度——單獨的壓縮或重疊可能不夠；通常需要結合兩種技術才能顯著改善。

Mnemonic: 通訊最佳化 =「發送更少（壓縮）+ 在工作時發送（重疊）」——雙管齊下

## Q31
Type: single
Difficulty: 1
Tags: deployment, tensorrt-llm
Concepts: tensorrt-llm
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

NVIDIA TensorRT-LLM 在部署堆疊中的主要用途是什麼？

A. 在 NVIDIA GPU 上從零開始訓練 LLM
B. 最佳化和編譯 LLM 推論以在 NVIDIA GPU 上獲得最大吞吐量和最小延遲
C. 將 LLM 權重存儲在資料庫中
D. 提供與 LLM 互動的網頁介面

Answer: B

Hint: TensorRT 一直是關於推論最佳化的——LLM 變體增加了什麼？

Explanation: TensorRT-LLM 為 NVIDIA GPU 上的推論編譯和最佳化 LLM 架構。它應用核心融合、量化、KV cache 管理、連續批次處理和專為自回歸生成設計的張量平行，相比通用推論框架實現顯著加速。

Why others wrong: TensorRT-LLM 用於推論而非訓練；它是計算引擎，不是存儲；UI 由獨立的應用層處理。

Trap: 混淆 TensorRT-LLM 和訓練框架（NeMo）——它們服務於模型生命週期的不同端。

Mnemonic: TensorRT-LLM =「推論的 F1 賽車引擎」——讓已訓練的模型盡可能快速運行

## Q32
Type: single
Difficulty: 2
Tags: deployment, in-flight-batching
Concepts: in-flight-batching
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

連續批次處理（in-flight batching）相比靜態批次處理為 LLM 推論提供什麼優勢？

A. 降低模型精度以提高吞吐量
B. 允許新請求動態加入、已完成的請求動態離開批次，透過不等待最長序列完成來提高 GPU 利用率
C. 完全消除對 GPU 的需求
D. 以嚴格的先進先出順序處理請求，不進行任何批次處理

Answer: B

Hint: 在靜態批次處理中，所有請求必須在新請求開始前完成——什麼被浪費了？

Explanation: 靜態批次處理將所有序列填充到最長序列的長度並等待所有完成，在填充和已完成但仍在等待的請求上浪費 GPU 週期。連續批次處理在每次迭代時動態插入和移除請求，使 GPU 始終被真實計算充分利用。

Why others wrong: 精度不變；仍然需要 GPU；連續批次處理是一種批次處理形式，不是不批次處理。

Trap: 認為批次處理是全有或全無的——連續批次處理是更聰明的批次策略，不是移除批次處理。

Mnemonic: 連續批次處理 =「旋轉門」 vs 靜態批次處理 =「大家一起進出」

## Q33
Type: single
Difficulty: 2
Tags: deployment, triton
Concepts: triton-inference-server
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

在 NVIDIA Triton Inference Server 中，模型集成的目的是什麼？

A. 同時訓練多個模型
B. 將多個模型串連成管線（例如分詞器 → LLM → 後處理器），作為單一推論請求執行
C. 為每個請求隨機選擇多個模型之一
D. 將同一模型複製到各 GPU 上以實現冗餘

Answer: B

Hint: 某些推論工作流程需要多個處理步驟——Triton 如何處理？

Explanation: Triton 模型集成定義了作為統一管線執行的模型 DAG。典型的 LLM 部署串連前處理（分詞）、模型本身和後處理（解分詞、過濾）。Triton 管理步驟之間的資料流，減少了分別 API 呼叫的開銷。

Why others wrong: 集成用於推論管線，不是訓練；路由由不同的 Triton 功能處理；GPU 複製是模型實例，不是集成。

Trap: 混淆 Triton 集成和機器學習集成方法（隨機森林等）——Triton 集成是關於管線串連，不是組合預測。

Mnemonic: Triton 集成 =「裝配線」——每個站做一項工作，產品自動流過

## Q34
Type: single
Difficulty: 1
Tags: deployment, containerization
Concepts: deployment-containers
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

使用 NVIDIA GPU 最佳化容器（NGC 容器）部署 LLM 的主要好處是什麼？

A. 使模型更小
B. 提供預配置環境，包含最佳化的驅動程式、函式庫和框架，確保可重現性並減少部署摩擦
C. 消除推論期間對 GPU 的需求
D. 自動提高模型精度

Answer: B

Hint: 容器在機器學習部署中解決什麼問題？想想依賴關係、版本和相容性。

Explanation: NGC 容器將經過一起測試的 CUDA、cuDNN、TensorRT 和框架版本捆綁在一起，消除「在我的機器上能跑」的問題。它們確保推論環境精確匹配已驗證的配置，減少因驅動/函式庫不匹配造成的部署失敗。

Why others wrong: 容器不改變模型大小；仍然需要 GPU；精度取決於模型而非容器。

Trap: 使用通用 Docker 容器而非 NGC——缺少最佳化的 CUDA/cuDNN 版本可能降低 30-50% 的效能。

Mnemonic: NGC 容器 =「預組裝工具箱」——所有正確的工具，預先測試，隨時可用

## Q35
Type: single
Difficulty: 3
Tags: deployment, scaling
Concepts: autoscaling-inference
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

一個 LLM 推論服務在工作時間經歷流量尖峰（基線的 10 倍）。團隊需要在成本和延遲 SLA 之間取得平衡。哪種自動擴展策略最合適？

A. 全天候以峰值容量運行以保證低延遲
B. 基於歷史流量模式的預測性自動擴展結合突發性尖峰的反應性擴展，並從備用池中預熱 GPU 實例
C. 在非工作時間將實例縮減到零，按需冷啟動
D. 低流量時使用純 CPU 實例，峰值時使用 GPU 實例

Answer: B

Hint: 你需要處理可預測的模式和意外的尖峰——什麼能同時涵蓋兩者？

Explanation: 預測性自動擴展根據已知的流量模式（工作時間）預先配置 GPU 實例，而反應性擴展處理意外尖峰。預熱的備用實例（模型已載入記憶體但未提供服務）消除冷啟動延遲。這種組合在達到延遲 SLA 的同時最小化成本。

Why others wrong: 全天候峰值容量在離峰時浪費 90% 的資源；冷啟動 LLM 需要幾分鐘，違反 SLA；LLM 的 CPU 推論對生產延遲要求來說太慢。

Trap: 低估 LLM 冷啟動時間——將 700 億模型從磁碟載入 GPU 需要 2-5 分鐘，使純反應性擴展不足。

Mnemonic: 自動擴展 =「預測 + 反應 + 預熱」——對抗流量尖峰的三層防禦

## Q36
Type: single
Difficulty: 2
Tags: deployment, monitoring
Concepts: inference-monitoring
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

對於生產環境中的 LLM 推論服務，哪些指標最關鍵？

A. 只有 GPU 溫度和風扇轉速
B. 首 token 生成時間（TTFT）、每秒 token 數（TPS）、請求佇列深度、GPU 記憶體使用率和錯誤率
C. 只有每日 API 呼叫總數
D. 模型訓練損失和驗證精度

Answer: B

Hint: 想想使用者體驗到什麼（延遲）和基礎設施需要什麼（使用率、錯誤）。

Explanation: TTFT 衡量使用者感受到的首個回應 token 延遲。TPS 表示生成吞吐量。佇列深度揭示容量飽和程度。GPU 記憶體使用率預測 OOM 風險。錯誤率捕捉失敗。這些指標一起涵蓋使用者體驗、系統健康和容量規劃。

Why others wrong: 僅硬體指標錯過應用層問題；呼叫數缺少延遲/品質維度；訓練指標與推論監控無關。

Trap: 只監控吞吐量（TPS）而不監控延遲（TTFT）——高吞吐量配高延遲意味著許多使用者等待很長時間。

Mnemonic: LLM 監控 =「TTFT + TPS + 佇列 + 記憶體 + 錯誤」——五大生命指標

## Q37
Type: single
Difficulty: 2
Tags: deployment, model-serving
Concepts: speculative-decoding
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

推測解碼如何加速 LLM 推論？

A. 跳過某些 token 的注意力計算
B. 使用較小的草稿模型提出多個 token，然後用較大的目標模型平行驗證，接受正確的預測並拒絕錯誤的
C. 將模型的詞彙表減少到最常見的 token
D. 預先快取所有可能的回應

Answer: B

Hint: 自回歸生成的瓶頸是逐 token 的序列解碼——如何一次生成多個 token？

Explanation: 推測解碼使用快速的小模型「猜測」多個未來 token。大模型在一次前向傳播中驗證所有猜測（由於平行處理，成本與生成一個 token 相同）。被接受的 token 是免費的加速；被拒絕的 token 回退到標準生成。這可以實現 2-3 倍加速。

Why others wrong: 驗證時仍然完整計算注意力；詞彙表保持不變；對開放式生成不可能快取所有回應。

Trap: 認為草稿模型必須非常精確——即使 50-70% 的接受率也能提供顯著加速，因為驗證本質上是免費的。

Mnemonic: 推測解碼 =「提出並驗證」——實習生起草，專家批量審核

## Q38
Type: single
Difficulty: 3
Tags: deployment, multi-gpu
Concepts: deployment-parallelism
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

一個團隊需要在 FP16 下部署 700 億參數模型進行推論。每個 GPU 有 80GB 記憶體。至少需要多少 GPU，應使用哪種平行策略？

A. 1 個 GPU 配合模型壓縮
B. 2 個 GPU 搭配張量平行——模型需要約 140GB（700 億 × 2 位元組）加上 KV cache 開銷，超出單 GPU 容量
C. 8 個 GPU 搭配資料平行
D. 4 個 GPU 僅使用管線平行

Answer: B

Hint: 700 億參數 × 2 位元組/參數（FP16）= 140GB。需要多少個 80GB GPU？

Explanation: FP16 的 700 億模型僅權重就需要約 140GB，加上 KV cache 和運行時記憶體。兩個 80GB GPU（共 160GB）提供足夠的空間。張量平行是推論的首選，因為它將每層的計算分割到各 GPU，維持低延遲。管線平行會引入氣泡開銷。

Why others wrong: 1 個 GPU 無法容納 140GB；8 個 GPU 的資料平行在每個 GPU 上複製完整模型（仍需每個副本 2+ GPU）；僅管線平行對只有 2 個 GPU 來說增加不必要的延遲。

Trap: 忘記 KV cache 記憶體——權重本身需要 140GB，但生成需要額外的記憶體用於隨序列長度和批次大小增長的 KV cache。

Mnemonic: FP16 模型記憶體 = 參數 × 2 位元組，再加約 20% 的 KV cache 和開銷

## Q39
Type: single
Difficulty: 1
Tags: deployment, api-gateway
Concepts: rate-limiting
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

為什麼速率限制對生產環境的 LLM 推論 API 至關重要？

A. 透過減少請求數量來提高模型精度
B. 防止過多請求造成的資源耗盡，確保使用者之間的公平存取，並防禦阻斷服務攻擊
C. 減少模型的參數量
D. 在請求量增加時自動重新訓練模型

Answer: B

Hint: LLM 推論是昂貴的——當一個使用者發送數千個請求時會怎樣？

Explanation: LLM 推論每個請求消耗大量 GPU 資源。沒有速率限制，單個使用者或機器人可能壟斷資源，導致所有使用者的延遲尖峰或中斷。速率限制強制公平使用配額、保護基礎設施穩定性並減輕濫用。

Why others wrong: 速率限制不影響精度；它不改變模型；重新訓練與請求管理無關。

Trap: 設定過於保守的速率限制——過度嚴格的限制會挫敗合法使用者；在保護和可用性之間找到平衡。

Mnemonic: 速率限制 =「API 高速公路上的紅綠燈」——保持流量暢通，防止壅塞

## Q40
Type: single
Difficulty: 2
Tags: deployment, ab-testing
Concepts: model-versioning
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

在生產環境中推出新版本的微調 LLM 時，什麼部署策略能最小化對使用者的風險？

A. 立即為所有使用者替換為新模型
B. 金絲雀部署——將少量流量路由到新模型，監控關鍵指標（延遲、錯誤率、使用者滿意度），如果指標健康則逐漸增加流量
C. 僅在週末流量較低時部署新模型
D. 無限期同時運行兩個模型，永不停用舊版本

Answer: B

Hint: 如何在不影響所有使用者的情況下在生產環境測試新模型？

Explanation: 金絲雀部署最初僅將 1-5% 的流量路由到新模型，允許在有限影響範圍內進行真實世界驗證。如果指標（TTFT、錯誤率、安全違規、使用者評分）保持健康，流量逐漸增加。如果出現問題，流量立即回滾到已驗證的模型。

Why others wrong: 全量切換使所有使用者面臨風險；週末部署不減少每個請求的風險；無限期運行兩者浪費資源並增加運營複雜性。

Trap: 金絲雀期間只監控技術指標（延遲、錯誤）——還應監控回應品質、安全性和使用者滿意度信號。

Mnemonic: 金絲雀部署 =「煤礦中的金絲雀」——先派一小組前往，確保安全後再讓所有人跟進

## Q41
Type: single
Difficulty: 1
Tags: evaluation, benchmarking
Concepts: llm-benchmarks
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

使用標準化基準（如 MMLU、HumanEval、GSM8K）評估 LLM 的目的是什麼？

A. 在基準資料上訓練模型以獲得更好的分數
B. 提供可重現、可比較的特定能力測量（知識、程式設計、數學），跨不同模型和版本進行比較
C. 決定模型的最佳 GPU 需求
D. 取代任何任務特定評估的需求

Answer: B

Hint: 為什麼我們在教育中使用標準化考試？同樣的原則適用於 LLM 評估。

Explanation: 標準化基準使得不同架構、大小和訓練方法的模型能進行公平比較。MMLU 衡量廣泛知識，HumanEval 衡量程式設計能力，GSM8K 衡量數學推理。一致的評估方法使結果可重現且可比較。

Why others wrong: 在基準上訓練是資料污染；基準不決定硬體需求；它們補充但不取代任務特定評估。

Trap: 過度最佳化基準（「教導考試」）——高基準分數不保證在你的具體用例中有好的實際表現。

Mnemonic: 基準 =「模型的尺規」——相同的測量工具讓你公平比較

## Q42
Type: single
Difficulty: 2
Tags: evaluation, perplexity
Concepts: perplexity
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

一個語言模型在測試語料上達到困惑度 15，而另一個在同一語料上達到 45。這個比較告訴我們什麼？

A. 困惑度 45 的模型生成更多樣化的文字
B. 困惑度 15 的模型平均對測試語料賦予更高的機率，表示該資料上更好的語言建模能力
C. 困惑度 45 意味著模型精確度是 3 倍
D. 兩個模型表現相同，因為兩個困惑度都是有限的

Answer: B

Hint: 較低的困惑度意味著模型對資料「不那麼驚訝」——這意味著什麼？

Explanation: 困惑度衡量模型預測文字語料的好壞——它是平均負對數似然的指數。較低的困惑度意味著模型對實際的下一個 token 賦予更高的機率，表示對資料分佈更好的建模。然而，困惑度本身不衡量生成品質或任務表現。

Why others wrong: 多樣性不由困惑度衡量；較低的困惑度意味著更好，而非更高；兩者都是有限的不代表相等的表現。

Trap: 將困惑度作為唯一的品質指標——一個低困惑度的模型仍可能生成重複、不安全或無用的文字。

Mnemonic: 困惑度 =「困惑分數」——越低 = 越不困惑 = 更好的語言建模

## Q43
Type: single
Difficulty: 2
Tags: responsible-ai, bias
Concepts: bias-detection
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

評估過程中，團隊發現 LLM 在提示提到不同人口群體時生成明顯不同品質的回應。最適當的下一步是什麼？

A. 從訓練資料中移除所有人口統計相關內容
B. 跨多個人口維度進行系統性偏見審核，記錄發現，應用針對性的去偏見技術（如平衡的微調資料、輸出過濾），並重新評估
C. 忽略差異，因為模型在基準上表現良好
D. 在 API 文件中加入免責聲明並照常發布

Answer: B

Hint: 你已發現潛在偏見——負責任的工程回應是什麼？

Explanation: 系統性偏見審核量化跨人口的差距，識別根本原因（訓練資料不平衡、代表性缺口），並提供針對性干預。去偏見可能包括重新平衡訓練資料、應用以公平為重點的偏好學習，或添加輸出護欄。重新評估確認修復有效。

Why others wrong: 完全移除人口統計資訊會使模型預設為偏見假設；忽略偏見是不負責任的；免責聲明不能修復根本問題。

Trap: 認為去偏見是一次性修復——它需要隨著模型更新和在新環境中部署而持續監控。

Mnemonic: 發現偏見 → 審核 → 修復 → 驗證 → 監控——負責任 AI 循環

## Q44
Type: single
Difficulty: 1
Tags: responsible-ai, guardrails
Concepts: output-guardrails
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

在生產 LLM 系統中實施輸出護欄的目的是什麼？

A. 提高模型的生成速度
B. 過濾、修改或阻擋違反安全政策、包含有害內容或違反合規要求的模型輸出，在到達終端使用者之前
C. 壓縮模型的輸出以便存儲
D. 自動將輸出翻譯成多種語言

Answer: B

Hint: 模型可以生成任何東西——什麼位於模型和使用者之間以捕捉問題？

Explanation: 輸出護欄是生成後的安全層，在交付前檢查模型輸出是否違反政策（有害內容、PII 洩露、虛構的醫學/法律建議等）。它們可以阻擋、編輯或標記有問題的內容，即使模型本身已經過良好對齊，也提供縱深防禦層。

Why others wrong: 護欄增加延遲而非速度；它們不用於壓縮；翻譯是單獨的功能。

Trap: 僅依賴護欄而不改進模型——護欄是安全網，不是負責任訓練和對齊的替代品。

Mnemonic: 護欄 =「出版前的編輯審查」——捕捉作者（模型）遺漏的問題

## Q45
Type: single
Difficulty: 3
Tags: evaluation, human-evaluation
Concepts: human-eval-design
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

設計人類評估方案以比較兩個 LLM 輸出時，哪種方法產生最可靠的結果？

A. 由一位專家對每個輸出打 1-10 分
B. 使用多位獨立標註者進行盲評配對比較，使用明確的評分準則，測量標註者間一致性，並隨機化呈現順序
C. 讓 LLM 自己判斷哪個輸出更好
D. 將每個輸出的字數作為品質代理指標

Answer: B

Hint: 什麼讓科學實驗可靠？將同樣的原則應用到評估中。

Explanation: 嚴格的人類評估需要盲評（標註者不知道哪個模型產生哪個輸出）、多位標註者（減少個人偏見）、明確的準則（確保一致性）、標註者間一致性（衡量可靠性）和隨機順序（消除位置偏見）。這個方案產生統計有效的比較。

Why others wrong: 單一標註者的絕對分數不可靠且有偏見；LLM 作為裁判有自身偏見；字數不是品質指標。

Trap: 假設 LLM 作為裁判可以取代人類評估——LLM 裁判有系統性偏見（冗長偏好、位置偏見、自我偏好），需要仔細校準。

Mnemonic: 好的人類評估 =「盲評、多人、有準則、有共識、隨機化」

## Q46
Type: single
Difficulty: 2
Tags: responsible-ai, hallucination
Concepts: hallucination-mitigation
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

哪種技術組合對減少已部署 LLM 中的幻覺最有效？

A. 提高模型的溫度以生成更有創意的回應
B. 檢索增強生成（RAG）用於在來源文件中建立基礎，結合引用要求和對照檢索來源的輸出驗證
C. 訓練更多輪次讓模型記住更多事實
D. 從允許的輸入類型中移除所有事實性問題

Answer: B

Hint: 模型「編造東西」——如何將它錨定到已驗證的資訊上？

Explanation: RAG 在推論時為模型提供相關的事實性來源文件，將回應建立在真實資料上。要求引用迫使模型將聲明歸因到特定來源。輸出驗證將生成的陳述與檢索的段落交叉檢查，在到達使用者之前捕捉無根據的聲明。

Why others wrong: 更高的溫度增加隨機性和幻覺；更多訓練輪次有過擬合風險，不會改善事實性；限制輸入不能修復根本問題。

Trap: 認為 RAG 完全消除幻覺——模型仍可能誤解檢索的文件或生成不受支持的推斷。

Mnemonic: 反幻覺 =「建立基礎 + 引用 + 驗證」——錨定來源、展示工作、核實事實

## Q47
Type: single
Difficulty: 2
Tags: evaluation, red-teaming
Concepts: red-teaming
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

在生產部署前對 LLM 進行紅隊測試的主要目標是什麼？

A. 提高模型的基準分數
B. 透過模擬對抗性使用者行為，系統性地探測模型的失敗模式、安全漏洞和有害輸出
C. 測試模型在負載下的推論速度
D. 驗證模型的訓練資料是否有適當授權

Answer: B

Hint: 在安全領域，紅隊嘗試突破系統——LLM 的對應做法是什麼？

Explanation: 紅隊測試涉及對抗性測試，評估者故意嘗試透過創意提示策略（越獄、角色扮演、多輪操縱）引發有害、偏見或違反政策的輸出。發現結果指導安全緩解措施、護欄改進和對齊微調。

Why others wrong: 紅隊測試是關於安全而非基準；負載測試是分開的；資料授權是法律審查程序。

Trap: 只在上線前做一次紅隊測試——它應該是持續的過程，因為新的攻擊向量會不斷出現，模型也會更新。

Mnemonic: 紅隊測試 =「在真正攻擊者之前僱用駭客找漏洞」

## Q48
Type: single
Difficulty: 1
Tags: responsible-ai, pii
Concepts: pii-handling
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

當 LLM 系統處理可能包含個人可識別資訊（PII）的使用者輸入時，基本的隱私要求是什麼？

A. 以明文存儲所有 PII 以便除錯
B. 實施 PII 偵測和處理——最小化收集、應用匿名化/遮蔽、執行資料保留政策，並防止模型記憶或重複 PII
C. 將 PII 分享給第三方分析服務以獲得更好的洞察
D. 在所有日誌檔案中顯示 PII 以確保透明度

Answer: B

Hint: 隱私法規（GDPR、CCPA）設定了明確的要求——核心原則是什麼？

Explanation: 負責任的 AI 系統必須偵測輸入中的 PII、最小化收集量、在處理/記錄前匿名化或遮蔽、執行保留限制，並防止模型記憶個人資料。這保護使用者的隱私權並確保法規遵循（GDPR、CCPA、HIPAA 等）。

Why others wrong: 明文 PII 存儲違反隱私法規；未經同意與第三方分享是違法的；日誌中的 PII 是資料洩露風險。

Trap: 假設模型不會從提示中記憶 PII——LLM 可以記憶並逐字重現訓練資料，包括 PII，如果處理不當。

Mnemonic: PII 處理 =「偵測、最小化、遮蔽、保留、防止」——五大隱私支柱

## Q49
Type: single
Difficulty: 3
Tags: evaluation, model-comparison
Concepts: elo-rating
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

團隊使用 Chatbot Arena 風格的 Elo 評分來比較微調模型和基線。經過 500 次配對比較，模型 A 的 Elo 為 1150，模型 B 的 Elo 為 1050。正確的解讀是什麼？

A. 模型 A 在所有任務上精確地比模型 B 好 10%
B. 模型 A 被人類評判者更頻繁地偏好，100 分的差距大約意味著 64% 的勝率，但這不衡量特定能力維度
C. 模型 B 應該立即丟棄
D. 100 分的差異在統計上總是不顯著的

Answer: B

Hint: Elo 評分來自國際象棋——評分差距告訴你關於預期勝率的什麼？

Explanation: Elo 評分從配對比較中捕捉相對偏好強度。100 分的差距對應大約 64% 的預期勝率。然而，Elo 是一維的——整體偏好更高的模型在特定任務（程式設計、數學）上可能仍然輸。統計顯著性取決於比較次數和信賴區間。

Why others wrong: Elo 不能轉換為特定指標的百分比改善；兩個模型可能服務不同的用例；500 次比較配 100 分差距是否顯著取決於信賴區間。

Trap: 過度解讀 Elo 為綜合品質指標——它捕捉整體人類偏好，而非特定能力優勢。

Mnemonic: Elo =「人氣競賽分數」——告訴你誰更常贏，但不告訴你為什麼

## Q50
Type: single
Difficulty: 2
Tags: responsible-ai, compliance
Concepts: ai-governance
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

一家企業在歐盟部署 LLM 用於自動客戶通訊，必須遵守 AI 法案。最可能適用哪種分類，它要求什麼？

A. 最低風險——除基本透明度外無要求
B. 高風險——系統必須維護技術文件、實施風險管理、確保資料治理、啟用人類監督，並接受一致性評估
C. 不可接受風險——系統必須被完全禁止
D. 歐盟 AI 法案不適用於 LLM

Answer: B

Hint: 歐盟 AI 法案按風險等級分類 AI 系統——面向客戶的自動通訊系統屬於哪個類別？

Explanation: 對消費者做出決策的自動客戶通訊系統可能被歐盟 AI 法案歸類為高風險。這要求全面的文件記錄、風險管理系統、資料品質控制、人類監督機制、透明度義務，以及可能的第三方一致性評估。

Why others wrong: 最低風險僅適用於具有簡單透明度要求的聊天機器人；全面禁止適用於社會評分和即時生物特徵監控；AI 法案明確涵蓋通用 AI 模型。

Trap: 假設聊天機器人總是「最低風險」——分類取決於用途和潛在影響，而非技術類型。

Mnemonic: 歐盟 AI 法案高風險 =「文件記錄、風險管理、資料治理、人類監督、一致性評估」
