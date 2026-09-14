---
exam: NCA-GENL
lang: zh-TW
---

## Q1
Type: single
Difficulty: 1
Tags: transformer, architecture
Concepts: transformer-architecture
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

Transformer 模型在處理序列時，其核心機制是什麼？

A. 逐一處理 token 的遞迴連接
B. 自注意力機制，讓每個 token 能同時關注序列中的每一個其他 token
C. 對詞嵌入套用卷積濾波器
D. 基於 token 頻率的決策樹集成

Answer: B

Hint: Transformer 用一種可以平行處理所有位置的機制取代了遞迴。

Explanation: 自注意力計算序列中所有 token 對之間的加權關係，使 Transformer 能在不受 RNN 順序瓶頸的情況下捕捉長距離依賴。這種平行處理正是 Transformer 在語言任務上高效且有效的原因。

Why others wrong: 遞迴連接是 RNN 而非 Transformer；卷積濾波器屬於 CNN；決策樹是完全不同的模型家族。

Trap: 將 Transformer 與 RNN 混淆——Transformer 明確地以注意力取代了遞迴。

Mnemonic: Transformer = "Attention Is All You Need"——自注意力取代遞迴

## Q2
Type: single
Difficulty: 2
Tags: transformer, attention
Concepts: multi-head-attention
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

在 Transformer 模型中，多頭注意力的目的是什麼？

A. 減少模型的參數量
B. 讓模型能平行關注不同的表示子空間，同時捕捉不同類型的關係（例如語法和語意）
C. 按順序處理輸入 token 以提高準確度
D. 取代位置編碼的需求

Answer: B

Hint: 一個注意力頭捕捉一種關係——如果你同時需要好幾種呢？

Explanation: 多頭注意力平行執行多組注意力運算，每組將 query、key、value 投影到不同的子空間。不同的頭可以學習不同的關係模式——一個可能捕捉語法結構，另一個捕捉語意相似度。輸出經過串接後再做線性投影。

Why others wrong: 多頭注意力增加了參數（更多頭 = 更多投影）；它是平行處理，不是順序處理；仍然需要位置編碼。

Trap: 以為更多頭一定代表更好的效能——存在收益遞減點，且注意力頭可能變得冗餘。

Mnemonic: 多頭 = 對同一序列的多重視角，再合併

## Q3
Type: single
Difficulty: 2
Tags: transformer, positional-encoding
Concepts: positional-encoding
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

為什麼 Transformer 模型需要位置編碼？

A. 為了縮減詞彙量
B. 因為自注意力將輸入視為無序集合——位置編碼注入 token 位置資訊，讓模型知道句中詞語的順序
C. 為了加密輸入以保障安全
D. 為了正規化輸入值

Answer: B

Hint: 自注意力計算成對關係，但天生不知道哪個 token 排在前面。

Explanation: 自注意力具有排列不變性——無論 token 順序如何，產生的輸出相同。位置編碼（正弦或可學習）將位置資訊加到 token 嵌入中，讓模型能區分「狗咬人」和「人咬狗」。

Why others wrong: 詞彙量由分詞器決定；編碼是提供順序資訊，不是加密；正規化由層正規化處理。

Trap: 假設自注意力天生理解順序——沒有位置編碼，"the cat sat on the mat" 和 "mat the on sat cat the" 看起來完全一樣。

Mnemonic: 注意力一次看到所有東西但沒有順序感——位置編碼加上「在哪裡」

## Q4
Type: single
Difficulty: 1
Tags: nvidia-tools, nemo
Concepts: nvidia-nemo
Domain: Domain 2 — Software Development
DomainNumber: 2

NVIDIA NeMo 主要用於什麼？

A. 電子遊戲渲染
B. 一個用於建構、客製化和部署生成式 AI 模型的框架——包含 LLM、語音和多模態模型——在 NVIDIA 硬體上運行
C. 管理 Kubernetes 叢集
D. 設計印刷電路板

Answer: B

Hint: NeMo 是 NVIDIA 的旗艦生成式 AI 框架——它幫助你對模型做什麼？

Explanation: NVIDIA NeMo 是端對端的生成式 AI 框架，支援 LLM、語音模型和多模態模型的訓練、客製化（微調、RLHF）和部署。它專為 NVIDIA GPU 設計，包含 NeMo Customizer、Guardrails 和 Curator 等元件。

Why others wrong: 遊戲使用獨立的 NVIDIA SDK；Kubernetes 管理是獨立的工具；PCB 設計完全無關。

Trap: 以為 NeMo 只用於訓練——它涵蓋從資料策展到部署的完整生命週期。

Mnemonic: NeMo = NVIDIA 的端對端模型營運框架

## Q5
Type: single
Difficulty: 2
Tags: nvidia-tools, tensorrt-llm
Concepts: tensorrt-llm
Domain: Domain 2 — Software Development
DomainNumber: 2

TensorRT-LLM 在 NVIDIA AI 技術棧中扮演什麼角色？

A. 從零開始訓練 LLM
B. 透過核函數融合、量化和即時批次處理等技術來最佳化 LLM 推理，大幅降低延遲並提高 NVIDIA GPU 上的吞吐量
C. 將模型轉換為在 CPU 上運行
D. 生成訓練資料

Answer: B

Hint: TensorRT 一直以來都是做推理最佳化——LLM 版本是專為語言模型特化的。

Explanation: TensorRT-LLM 是 NVIDIA 用於在 GPU 上最佳化 LLM 推理的函式庫。它應用 GPU 特有的最佳化技術，如核函數融合、INT8/FP8 量化、KV cache 最佳化和即時批次處理，以在維持模型品質的同時最大化推理速度和吞吐量。

Why others wrong: TensorRT-LLM 用於推理最佳化而非訓練；它針對 NVIDIA GPU 而非 CPU；它最佳化服務而非產生資料。

Trap: 混淆訓練最佳化與推理最佳化——TensorRT-LLM 僅在推理階段作用於已訓練好的模型。

Mnemonic: TensorRT-LLM = 在 NVIDIA GPU 上加速 LLM 推理

## Q6
Type: single
Difficulty: 2
Tags: nvidia-tools, triton
Concepts: triton-inference-server
Domain: Domain 2 — Software Development
DomainNumber: 2

NVIDIA Triton Inference Server 的主要角色是什麼？

A. 用於儲存模型權重的資料庫
B. 一個模型服務平台，可託管多個模型（含 LLM）、處理並行請求、支援動態批次處理，並提供標準化 API 以跨不同框架進行推理
C. 用於標註訓練資料的工具
D. GPU 溫度的監控儀表板

Answer: B

Hint: Triton 是 AI 推理的「Web 伺服器」——它接收請求並路由到模型。

Explanation: Triton Inference Server 是 NVIDIA 的生產級模型服務平台。它支援多種框架（TensorRT、PyTorch、TensorFlow、ONNX），以動態批次處理來處理並行請求，並提供 HTTP/gRPC API。它是部署在 TensorRT-LLM 最佳化模型前方的服務層。

Why others wrong: 模型儲存與服務是分開的；資料標註是不同的工作流程；GPU 監控由 DCGM/nvidia-smi 處理。

Trap: 混淆 TensorRT-LLM（最佳化函式庫）與 Triton（服務平台）——TensorRT-LLM 最佳化模型，Triton 則負責服務。

Mnemonic: Triton = 服務 AI 模型給應用程式的服務生（多框架、多模型）

## Q7
Type: single
Difficulty: 1
Tags: nvidia-tools, nim
Concepts: nvidia-nim
Domain: Domain 2 — Software Development
DomainNumber: 2

什麼是 NVIDIA NIM 微服務？

A. 社群媒體管理工具
B. 預先封裝、已最佳化的 AI 推理容器，提供業界標準 API 來部署基礎模型，只需最少設定——將模型最佳化和服務的複雜度抽象化
C. 程式碼編輯器外掛
D. 硬體基準測試工具

Answer: B

Hint: NIM 讓部署 AI 模型就像拉一個 Docker 容器並呼叫 API 一樣簡單。

Explanation: NVIDIA NIM（NVIDIA Inference Microservices）將最佳化後的模型封裝成帶有標準 API（OpenAI 相容）的容器。開發者無需手動設定 TensorRT-LLM、Triton 或其他基礎設施即可部署頂尖模型——NIM 在內部處理整個最佳化堆疊。

Why others wrong: NIM 用於 AI 部署，不是社群媒體；它是基礎設施，不是 IDE 工具；它服務模型，不是測試硬體。

Trap: 以為 NIM 和 Triton 是同一個東西——NIM 內部使用 Triton，但提供更高層次、可直接用於應用的抽象。

Mnemonic: NIM = 「NVIDIA 讓推理變簡單」——容器進，API 出

## Q8
Type: single
Difficulty: 3
Tags: nvidia-tools, nemo-guardrails
Concepts: nemo-guardrails
Domain: Domain 5 — Trustworthy AI
DomainNumber: 5

NVIDIA NeMo Guardrails 與簡單的基於提示詞的內容過濾有何不同？

A. 沒有不同——兩者是相同的方法
B. NeMo Guardrails 提供一個可程式化的框架，使用 Colang（一種領域特定語言）來定義對話流程、輸入/輸出護欄和檢索護欄——提供結構化、可稽核的安全控制，超越臨時性的提示詞指令
C. NeMo Guardrails 只適用於 NVIDIA 模型
D. NeMo Guardrails 完全取代了 LLM

Answer: B

Hint: 基於提示詞的過濾很脆弱——NeMo Guardrails 提供結構化、可程式化的替代方案。

Explanation: NeMo Guardrails 使用 Colang 定義明確的對話規則（輸入護欄、輸出護欄、對話流程），這些規則以程式化方式強制執行，而非依賴 LLM 可能忽略的提示詞指令。這提供了更可靠、可稽核的安全控制。

Why others wrong: Guardrails 增加了超越提示詞過濾的結構化執行；它可與任何 LLM 搭配使用，不僅限於 NVIDIA 的模型；它包裝 LLM，不是取代它。

Trap: 假設在系統提示詞中「告訴 LLM 不要做 X」就足夠了——LLM 可能被越獄繞過提示詞指令，但程式化護欄更難繞過。

Mnemonic: 提示詞過濾 = 對 LLM 的建議，NeMo Guardrails = 圍繞 LLM 的強制規則

## Q9
Type: single
Difficulty: 2
Tags: fine-tuning, lora
Concepts: lora
Domain: Domain 3 — Experimentation
DomainNumber: 3

在 LLM 微調的脈絡中，什麼是 LoRA（低秩適配）？

A. 一種在新資料上重新訓練所有模型參數的技術
B. 一種參數高效微調方法，凍結原始模型權重，並在旁邊訓練小型低秩分解矩陣，大幅減少可訓練參數量，同時達到接近全量微調的品質
C. 一種資料增強技術
D. 一種壓縮磁碟上模型檔案的方法

Answer: B

Hint: 不是更新數十億個參數，LoRA 在凍結的原始權重旁邊加入少量可訓練參數。

Explanation: LoRA 凍結預訓練權重，並在每一層注入可訓練的低秩矩陣（A 和 B）。對於權重矩陣 W，它不是直接更新 W，而是學習 ΔW = A×B，其中 A 和 B 的秩遠低於 W。這通常可將可訓練參數減少 10-100 倍，同時維持大部分微調品質。

Why others wrong: 全參數重新訓練是標準微調，不是 LoRA；資料增強是增加訓練資料；LoRA 關乎訓練效率，不是檔案壓縮。

Trap: 以為 LoRA 修改原始權重——它加入的是獨立的小矩陣，在推理時才合併。

Mnemonic: LoRA = 凍結在原始旁邊的低秩適配器（訓練量小，品質保持）

## Q10
Type: single
Difficulty: 3
Tags: fine-tuning, qlora
Concepts: qlora
Domain: Domain 3 — Experimentation
DomainNumber: 3

QLoRA 如何改進標準 LoRA？

A. 使用更多訓練資料
B. 將凍結的基礎模型量化到 4 位元精度，同時保持 LoRA 適配器權重在更高精度，使得在消費級 GPU 上微調超大型模型成為可能，且品質損失極小
C. 訓練更多參數
D. 不再需要 GPU

Answer: B

Hint: Q + LoRA——Q 代表量化。量化基礎模型能達到什麼效果？

Explanation: QLoRA 將凍結基礎模型的 4 位元 NormalFloat 量化與 BFloat16 的標準 LoRA 適配器結合。相較於 LoRA（基礎模型保持 16 位元），記憶體需求降低約 4 倍，使得在單張 48GB GPU 上微調 65B+ 的模型成為可能，同時透過雙重量化和分頁最佳化器維持品質。

Why others wrong: 資料量沒有改變；QLoRA 因量化開銷實際訓練的參數更少；它仍需要 GPU 進行高效訓練。

Trap: 假設量化一定會降低品質——QLoRA 的 NormalFloat4 格式和雙重量化最小化了品質損失。

Mnemonic: QLoRA = 量化基礎（4 位元）+ LoRA 適配器（16 位元）= 小 GPU 跑大模型

## Q11
Type: single
Difficulty: 2
Tags: fine-tuning, peft
Concepts: peft-methods
Domain: Domain 3 — Experimentation
DomainNumber: 3

以下哪項不是參數高效微調（PEFT）方法？

A. LoRA（低秩適配）
B. Prefix tuning（前綴調整）
C. 全量微調所有模型權重
D. Prompt tuning（學習軟提示詞）

Answer: C

Hint: PEFT 意味著只訓練一小部分參數——哪個選項訓練了全部參數？

Explanation: 全量微調更新所有模型參數，這與參數高效的定義相反。PEFT 方法（LoRA、prefix tuning、prompt tuning、adapters）凍結大部分參數，只訓練一小組，從而降低運算、記憶體和儲存成本。

Why others wrong: LoRA 訓練低秩矩陣（約 0.1% 的參數）；prefix tuning 學習前綴 token；prompt tuning 學習連續提示詞嵌入——全部都是 PEFT。

Trap: 以為「微調」總是意味著全參數更新——PEFT 方法也是微調，只是更高效。

Mnemonic: PEFT = 凍結大部分，訓練少量（LoRA、prefix、prompt、adapters）

## Q12
Type: single
Difficulty: 2
Tags: quantization, inference
Concepts: model-quantization
Domain: Domain 2 — Software Development
DomainNumber: 2

將 LLM 從 FP16 量化到 INT8 的主要好處是什麼？

A. 提高模型在所有任務上的準確度
B. 將模型的記憶體佔用降低約一半，並能加快推理速度，只有小且通常可接受的輸出品質損失
C. 將模型參數量翻倍
D. 不再需要 GPU

Answer: B

Hint: 將精度從 16 位元減到 8 位元，每個參數的記憶體就減半。

Explanation: 量化降低模型權重的數值精度——FP16 每個值使用 16 位元，INT8 使用 8 位元。這使記憶體需求減半，讓更大的模型能在可用硬體上運行，且因為低精度運算在現代 GPU 上更快，通常也能提高吞吐量。對於校準良好的量化，品質損失通常很小。

Why others wrong: 量化通常對準確度有微小的負面影響；參數數量不變（只有精度變化）；量化後的模型在 GPU 上仍然運行最好。

Trap: 混淆參數數量與精度——量化改變的是每個參數的儲存方式，不是有多少個參數。

Mnemonic: 量化 = 相同參數，每個參數更少位元 = 更小 + 更快

## Q13
Type: single
Difficulty: 3
Tags: quantization, techniques
Concepts: quantization-methods
Domain: Domain 2 — Software Development
DomainNumber: 2

訓練後量化（PTQ）和量化感知訓練（QAT）有什麼區別？

A. 它們產生相同的結果
B. PTQ 在訓練完成後量化模型（更快，無需重新訓練），而 QAT 在訓練過程中模擬量化效果，使模型學會適應較低精度（品質更好，但需要重新訓練）
C. PTQ 只適用於 INT8，QAT 只適用於 INT4
D. QAT 總是比 PTQ 更快

Answer: B

Hint: 一個是事後套用量化；另一個是在訓練本身中就融入量化意識。

Explanation: PTQ 應用於已完成的模型——快速但可能降低品質，尤其在非常低精度（INT4）時。QAT 在訓練過程中加入假量化節點，讓模型調整權重以抵抗精度損失。QAT 通常產生更好的品質，但需要存取訓練資料和運算資源。

Why others wrong: 它們產生不同的品質結果；兩者都可以針對各種精度；QAT 需要重新訓練，整體速度更慢。

Trap: 總是選 PTQ 因為比較快——對於激進量化（INT4），QAT 往往能更好地保持品質。

Mnemonic: PTQ = 快速簡單（事後），QAT = 慢但穩健（為量化而訓練）

## Q14
Type: single
Difficulty: 1
Tags: tokenization, basics
Concepts: tokenization
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

在 LLM 的脈絡中，什麼是分詞（tokenization）？

A. 一種安全驗證流程
B. 將文字拆分成更小單元（token）供模型處理的過程——這些單元可以是詞、子詞或字元，取決於分詞器
C. 將文字轉換成圖片
D. 加密使用者資料

Answer: B

Hint: LLM 不處理原始文字——它們需要先將文字拆成可處理的單元。

Explanation: 分詞將原始文字轉換為 token 序列（模型詞彙表的單元）。現代 LLM 通常使用子詞分詞（BPE、SentencePiece），能將任何文字表示為已知子詞單元的序列，在詞彙量大小和覆蓋率之間取得平衡。

Why others wrong: 驗證 token 是不同的概念；分詞產生數字 ID 而非圖片；這是處理，不是加密。

Trap: 假設 token 總是完整的單詞——現代分詞器會把罕見詞拆分成子詞片段。

Mnemonic: 分詞 = 文字 → 模型可以消化的片段

## Q15
Type: single
Difficulty: 2
Tags: tokenization, bpe
Concepts: byte-pair-encoding
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

Byte Pair Encoding（BPE）分詞是如何運作的？

A. 將每個詞拆分成單獨的字元
B. 從單獨字元開始，反覆合併最頻繁的相鄰對來建構子詞詞彙——常見詞保持完整，罕見詞則被拆分成已知的子詞片段
C. 使用固定的英文單詞字典
D. 隨機將 token 分配給文字

Answer: B

Hint: BPE 是一種由下而上的演算法——從小的（字元）開始，往上合併（頻繁的對）。

Explanation: BPE 從字元開始，反覆合併最頻繁的對成為新 token，直到達到所需的詞彙量。這創建了一個詞彙表，其中常見詞和子詞是單一 token，而罕見詞由多個子詞 token 組成——確保任何文字都能被表示。

Why others wrong: 純字元分詞會產生非常長的序列；固定字典無法處理新詞；BPE 是確定性的，不是隨機的。

Trap: 以為 BPE 無法處理沒見過的詞——它總是可以回退到字元層級的分詞。

Mnemonic: BPE = 由下而上的成對合併，直到詞彙量足夠

## Q16
Type: single
Difficulty: 2
Tags: inference, kv-cache
Concepts: kv-cache
Domain: Domain 2 — Software Development
DomainNumber: 2

LLM 推理中的 KV cache 是什麼，為什麼重要？

A. 用於儲存模型檔案的通用磁碟快取
B. 一種記憶體結構，在自迴歸生成過程中儲存先前 token 的 key 和 value 張量，這樣就不需要為每個新 token 重新計算——以記憶體換取速度
C. 用於儲存使用者查詢的快取
D. 模型權重的備份

Answer: B

Hint: 在生成過程中，模型每次產生一個 token。沒有快取的話，每一步都要重新計算所有先前 token 的注意力。

Explanation: 在自迴歸生成中，每個新 token 都要對所有先前 token 做注意力運算。KV cache 儲存先前 token 的 key-value 對，避免冗餘計算。沒有它，生成第 N 個 token 需要 O(N²) 的計算量；有了它，每一步只需對新 token 與快取的 KV 對做注意力運算。

Why others wrong: 它不是磁碟快取；它儲存中間的注意力計算結果，不是查詢；它與模型權重分開。

Trap: 以為 KV cache 是免費的——它消耗大量 GPU 記憶體，且隨序列長度線性增長，常常成為長序列的記憶體瓶頸。

Mnemonic: KV cache = 記住過去的注意力計算，這樣就不用重做

## Q17
Type: single
Difficulty: 3
Tags: inference, continuous-batching
Concepts: continuous-batching
Domain: Domain 2 — Software Development
DomainNumber: 2

LLM 服務中的連續批次處理（也稱為即時批次處理）是什麼？

A. 依序逐一處理所有請求
B. 一種排程技術，當先前的請求完成時，新請求可以加入正在運行的批次，而非等待靜態批次中所有請求完成後才開始新的——顯著提高 GPU 利用率和吞吐量
C. 將單一請求分散到多個 GPU
D. 在模型訓練期間批次處理訓練資料

Answer: B

Hint: 在靜態批次處理中，一個短回應要等待一個長回應完成。連續批次處理消除了這種浪費。

Explanation: 靜態批次處理將請求分組一起處理，但所有請求必須完成後才能開始新的——短回應要等待長回應。連續批次處理在先前請求完成時，將新請求插入可用的空位，保持 GPU 持續被利用。這是 TensorRT-LLM 和 Triton 中的關鍵最佳化。

Why others wrong: 逐一處理浪費 GPU 平行能力；模型平行處理是不同的概念；這是關於推理批次處理，不是訓練。

Trap: 假設靜態批次處理就夠好了——對於長度不定的 LLM 輸出，連續批次處理可以將吞吐量提高 2-3 倍。

Mnemonic: 靜態批次 = 所有人等最慢的；連續批次 = 有人下車就有新人上車

## Q18
Type: single
Difficulty: 2
Tags: evaluation, bleu
Concepts: bleu-score
Domain: Domain 3 — Experimentation
DomainNumber: 3

在評估文字生成時，BLEU 分數衡量什麼？

A. 生成文字的情感基調
B. 生成文字與參考翻譯之間的 n-gram（詞序列）重疊度——最初是為機器翻譯評估而設計
C. 文字的閱讀水準
D. 模型的推理速度

Answer: B

Hint: BLEU = Bilingual Evaluation Understudy——它是為翻譯而設，比較生成文字與參考文字。

Explanation: BLEU 計算生成文字與一個或多個參考翻譯之間的 n-gram 匹配精確率。更高的 BLEU 表示生成文字中有更多 n-gram 也出現在參考中。它包含簡短懲罰以懲罰過短的輸出。雖然被廣泛使用，但對開放式生成有已知的限制。

Why others wrong: BLEU 衡量詞彙重疊，不是情感；可讀性是另外的指標；速度與文字品質無關。

Trap: 將 BLEU 視為最終的品質指標——它只衡量表面層次的 n-gram 重疊，不是語意品質或流暢度。

Mnemonic: BLEU = 輸出和參考之間有多少詞序列匹配

## Q19
Type: single
Difficulty: 2
Tags: evaluation, rouge
Concepts: rouge-score
Domain: Domain 3 — Experimentation
DomainNumber: 3

ROUGE 在評估生成文字時與 BLEU 有何不同？

A. 它們是相同的指標
B. BLEU 衡量精確率（生成的 n-gram 中有多少出現在參考中），而 ROUGE 衡量召回率（參考的 n-gram 中有多少出現在生成文字中）——ROUGE 更適合用於摘要評估
C. ROUGE 只適用於詩歌
D. BLEU 比 ROUGE 更新

Answer: B

Hint: 精確率問「我的輸出正確嗎？」召回率問「我涵蓋了所有重要內容嗎？」

Explanation: BLEU 著重精確率（輸出中有多少匹配參考），而 ROUGE 著重召回率（參考中有多少被輸出涵蓋）。對於摘要而言，召回率很關鍵——你想知道摘要是否捕捉了來源的重要內容，因此 ROUGE 更合適。

Why others wrong: 它們衡量不同面向（精確率 vs. 召回率）；ROUGE 適用於任何文字；BLEU 實際上比 ROUGE 更早推出。

Trap: 用 BLEU 來評估摘要——一個簡短但精確的摘要在 BLEU 上得分可能很高，但如果遺漏了關鍵內容，ROUGE 得分就會很差。

Mnemonic: BLEU = 精確率（輸出品質），ROUGE = 召回率（涵蓋品質）

## Q20
Type: single
Difficulty: 2
Tags: evaluation, perplexity
Concepts: perplexity
Domain: Domain 3 — Experimentation
DomainNumber: 3

困惑度（perplexity）為語言模型衡量什麼？

A. 模型架構的物理複雜度
B. 模型預測序列中下一個 token 的能力——更低的困惑度表示模型對實際的下一個 token 賦予更高的機率，代表更好的語言建模
C. 模型的參數數量
D. 訓練資料的多樣性

Answer: B

Hint: 困惑度是指數化的平均負對數似然——非正式地說，就是模型對測試資料有多「驚訝」。

Explanation: 困惑度量化語言模型預測測試集的能力。困惑度為 10 表示模型的不確定性就好像它在每個 token 上從 10 個選項中均勻選擇。更低的困惑度 = 更好的預測 = 更好的語言模型。它是 LLM 的標準內在評估指標。

Why others wrong: 它衡量預測品質，不是架構複雜度；它與參數數量無關；它評估模型，不是資料。

Trap: 假設低困惑度保證高品質生成——困惑度衡量預測能力，不是下游任務表現。

Mnemonic: 困惑度 = 模型有多驚訝（越低 = 越不驚訝 = 越好）

## Q21
Type: single
Difficulty: 1
Tags: llm, decoder-only
Concepts: decoder-architecture
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

大多數現代大型語言模型（如 GPT、LLaMA 和 Gemma）使用哪種 Transformer 架構變體？

A. 僅編碼器（像 BERT）
B. 僅解碼器，使用因果（遮罩）自注意力逐 token 自迴歸生成文字
C. 編碼器-解碼器（像 T5）
D. 以上皆非——它們不使用 Transformer

Answer: B

Hint: GPT 代表「Generative Pre-trained Transformer」——「Generative」部分需要自迴歸解碼。

Explanation: 僅解碼器 Transformer 使用因果自注意力（每個 token 只能關注前面的 token），並以自迴歸方式生成文字。這種架構主導現代 LLM，因為它天然支援開放式文字生成。僅編碼器（BERT）用於理解任務；編碼器-解碼器（T5）結合兩者。

Why others wrong: BERT 式僅編碼器用於分類/擷取；編碼器-解碼器用於翻譯/摘要；所有現代 LLM 都使用 Transformer。

Trap: 以為所有 Transformer 變體可以互換——架構選擇從根本上決定模型能做什麼任務。

Mnemonic: 生成 = 僅解碼器，理解 = 僅編碼器，兩者兼顧 = 編碼器-解碼器

## Q22
Type: single
Difficulty: 2
Tags: llm, attention-masking
Concepts: causal-attention
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

在僅解碼器 Transformer 中，什麼是因果（遮罩）自注意力？

A. 只關注第一個 token 的注意力
B. 對自注意力的修改，讓每個 token 只能關注同一位置或更早位置的 token——防止模型在生成時「看到未來」
C. 隨機遮罩 token 用於正則化的注意力
D. 只應用於最後一個 token 的注意力

Answer: B

Hint: 在生成過程中，一個 token 不應該使用尚未生成的 token 的資訊。

Explanation: 因果注意力應用三角形遮罩，使位置 i 只能關注位置 ≤ i。這確保了自迴歸的一致性——每個 token 的表示只依賴前面的上下文，與模型在推理時逐 token 生成文字的方式一致。

Why others wrong: 它關注所有前面的 token，不僅僅是第一個；它是確定性的遮罩，不是隨機的 dropout；它關注所有先前位置，不僅僅是最後一個。

Trap: 混淆因果遮罩與 dropout 遮罩——因果遮罩是結構性的（總是相同的模式），不是正則化。

Mnemonic: 因果 = 只能回頭看，不能看前方（像從左到右閱讀）

## Q23
Type: single
Difficulty: 2
Tags: nvidia-tools, nemo-customizer
Concepts: nemo-customizer
Domain: Domain 3 — Experimentation
DomainNumber: 3

NVIDIA NeMo Customizer 在 NeMo 框架中扮演什麼角色？

A. 用於自訂 NVIDIA GPU 驅動程式設定的工具
B. 一項服務，透過 API 管理，使用 LoRA、P-tuning 和完整監督式微調等技術來微調和客製化基礎模型
C. UI 主題自訂工具
D. 硬體組態精靈

Answer: B

Hint: NeMo 語境中的「Customizer」是指為你的特定使用場景客製化模型的行為。

Explanation: NeMo Customizer 提供用於微調基礎模型的託管服務。它支援多種微調方法（LoRA、P-tuning、完整 SFT），並處理基礎設施的複雜度，讓使用者透過 API 呼叫即可客製化模型，無需直接管理 GPU 叢集。

Why others wrong: GPU 驅動程式另外設定；NeMo Customizer 是關於模型客製化，不是 UI；它是軟體服務，不是硬體組態。

Trap: 以為你需要自己管理訓練基礎設施——NeMo Customizer 將叢集管理抽象化了。

Mnemonic: NeMo Customizer = 透過 API 微調模型（LoRA、P-tuning、SFT）

## Q24
Type: single
Difficulty: 2
Tags: nvidia-tools, nemo-evaluator
Concepts: nemo-evaluator
Domain: Domain 3 — Experimentation
DomainNumber: 3

NVIDIA NeMo Evaluator 幫助你做什麼？

A. 評估 GPU 效能基準
B. 系統性地評估 LLM 輸出的品質，涵蓋準確度、安全性、連貫性和任務特定指標——提供結構化的評估管線來比較模型或組態
C. 評估員工績效
D. 評估網路頻寬

Answer: B

Hint: 用 NeMo Customizer 客製化模型之後，你怎麼知道它是否真的有改善？

Explanation: NeMo Evaluator 為 LLM 提供標準化的評估管線，從多個維度衡量品質。它能系統性地比較基礎模型 vs. 微調模型、不同組態或競爭模型，使用可重現的評估工作流程和基準測試。

Why others wrong: GPU 基準測試使用不同的工具；員工評估是人資範疇；網路評估是基礎設施。

Trap: 靠手動閱讀幾個輸出來評估模型——NeMo Evaluator 提供系統性、可重現的評估。

Mnemonic: NeMo Evaluator = 自動化的多維度模型品質評估

## Q25
Type: single
Difficulty: 1
Tags: prompt-engineering, chain-of-thought
Concepts: chain-of-thought
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

什麼是思維鏈（Chain-of-Thought, CoT）提示詞技術？

A. 將多個 LLM 串聯在一起
B. 一種提示詞技術，鼓勵模型在給出最終答案前展示其逐步推理過程，提高複雜推理任務的表現
C. 一種串接 API 呼叫的技術
D. 一種在序列資料上訓練模型的方法

Answer: B

Hint: 「讓我們一步一步想」——這個簡單的添加可以大幅改善推理能力。

Explanation: 思維鏈提示詞要求模型闡述中間推理步驟，而非直接跳到答案。這改善了算術、邏輯和多步驟推理任務的表現，因為模型可以分解複雜問題並捕捉自身推理中的錯誤。

Why others wrong: 它是單一模型的提示詞技術，不是多模型串聯；它是關於提示詞設計，不是 API 架構；它是推理技術，不是訓練方法。

Trap: 對簡單的事實問題使用 CoT——它對推理任務有幫助，但對簡單查詢會增加不必要的冗長。

Mnemonic: CoT = LLM 的「展示你的計算過程」——逐步推理 = 更好的答案

## Q26
Type: single
Difficulty: 2
Tags: prompt-engineering, system-prompt
Concepts: system-prompts
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

在 LLM API 呼叫中，系統提示詞的目的是什麼？

A. 驗證 API 請求
B. 為整個對話設定模型的行為、個性和限制——在任何使用者互動之前定義上下文和規則
C. 指定要使用的 GPU
D. 設定網路逾時

Answer: B

Hint: 系統提示詞就像在演員上台前給他們角色描述。

Explanation: 系統提示詞為對話建立模型的角色、語調、能力和限制。它們在使用者訊息之前被處理，並影響所有後續回應。精心設計的系統提示詞對於建構一致、可控的 LLM 應用至關重要。

Why others wrong: 驗證使用 API 金鑰；系統提示詞是內容層級，不是基礎設施層級；網路設定與提示詞組態分開。

Trap: 將系統提示詞視為絕對約束——它們引導行為，但有決心的使用者有時可以繞過它們，這就是為什麼還需要護欄。

Mnemonic: 系統提示詞 = 模型在這次對話中的使用說明書

## Q27
Type: single
Difficulty: 3
Tags: inference, speculative-decoding
Concepts: speculative-decoding
Domain: Domain 2 — Software Development
DomainNumber: 2

什麼是推測性解碼，它如何加速 LLM 推理？

A. 從多個模型生成文字然後選最好的
B. 一種技術，其中較小、較快的草稿模型生成候選 token，然後較大的目標模型平行驗證——如果草稿 token 與目標模型本會生成的一致，它們就被接受而無需完整計算，在維持目標模型品質的同時加速推理
C. 預測哪些使用者接下來會發送請求
D. 跳過 token 以加快生成文字

Answer: B

Hint: 驗證比生成便宜——用快速模型猜測，然後用大模型便宜地驗證。

Explanation: 推測性解碼利用生成（慢、順序）與驗證（快、可平行化）之間的不對稱性。草稿模型提出多個 token，目標模型在一次前向傳播中驗證它們全部。被接受的 token 是免費的加速；被拒絕的 token 則回退到正常生成。品質與僅使用目標模型完全相同。

Why others wrong: 它使用兩個模型但它們是合作的，不是競爭的；它不預測使用者；它不跳過內容。

Trap: 以為推測性解碼會降低品質——從設計上，它產生與目標模型完全相同的輸出分布。

Mnemonic: 推測性解碼 = 快模型猜，大模型查（品質有保證）

## Q28
Type: single
Difficulty: 2
Tags: fine-tuning, data-preparation
Concepts: fine-tuning-data
Domain: Domain 3 — Experimentation
DomainNumber: 3

準備 LLM 監督式微調的資料時，通常需要什麼格式？

A. 原始的非結構化文字檔案
B. 結構化的指令-回應配對（或對話輪次），每個範例展示所需的輸入和模型應該學習產生的預期輸出
C. SQL 資料庫表格
D. 圖文配對

Answer: B

Hint: 微調教模型為特定輸入產生特定輸出——資料必須示範這一點。

Explanation: 監督式微調（SFT）需要輸入和期望輸出的配對。對於指令微調，這些是指令-回應配對；對於聊天模型，是多輪對話。每個範例教導模型預期的行為模式。資料品質直接決定微調品質。

Why others wrong: 原始文字用於預訓練，不是微調；SQL 用於資料庫；圖文配對用於多模態模型。

Trap: 使用低品質或不一致的訓練配對——「垃圾進，垃圾出」在微調中特別適用。

Mnemonic: SFT 資料 = 向模型展示你想要的精確結果（指令 → 回應）

## Q29
Type: single
Difficulty: 2
Tags: evaluation, mmlu
Concepts: llm-benchmarks
Domain: Domain 3 — Experimentation
DomainNumber: 3

MMLU（Massive Multitask Language Understanding）基準測試評估什麼？

A. 模型生成創意故事的能力
B. 模型在 57 個學科（從 STEM 到人文）上的知識和推理能力，測試模型是否具備廣泛的事實理解
C. 模型的推理速度
D. 模型遵循指令的能力

Answer: B

Hint: MMLU 測試模型是否「知道」許多學術領域的東西——就像一場綜合考試。

Explanation: MMLU 包含跨越 57 個學科（數學、歷史、醫學、法律等）、不同難度的選擇題。它衡量模型的知識廣度和推理能力，使其成為比較模型能力時最被廣泛引用的 LLM 基準測試之一。

Why others wrong: MMLU 測試事實知識，不是創意寫作；它衡量知識，不是速度；指令遵循由其他基準測試（IFEval、MT-Bench）評估。

Trap: 將 MMLU 視為唯一重要的基準——它衡量知識廣度，但不衡量生成品質、安全性或指令遵循。

Mnemonic: MMLU = LLM 的 57 科考試——你會數學又會歷史又會醫學嗎？

## Q30
Type: single
Difficulty: 1
Tags: nvidia-tools, rapids
Concepts: nvidia-rapids
Domain: Domain 2 — Software Development
DomainNumber: 2

什麼是 NVIDIA RAPIDS？

A. 圖形渲染引擎
B. 一套 GPU 加速的資料科學函式庫，提供類似 pandas 和 scikit-learn 的 API，但在 GPU 上執行，大幅加速資料處理和機器學習
C. 網路協定
D. 專案管理工具

Answer: B

Hint: RAPIDS 讓你現有的 pandas/sklearn 程式碼在 GPU 上運行——相同的 API，快得多。

Explanation: RAPIDS 包含 cuDF（GPU DataFrame，類似 pandas）、cuML（GPU ML，類似 scikit-learn）、cuGraph（GPU 圖分析）等。資料科學家可以使用熟悉的 Python API，同時從 GPU 加速獲得 10-100 倍的加速，這對大規模資料前處理和特徵工程特別有價值。

Why others wrong: 渲染由其他 NVIDIA SDK 處理；RAPIDS 是計算函式庫，不是網路協定；它用於資料處理，不是專案管理。

Trap: 以為 RAPIDS 需要學習新的 API——它刻意模擬 pandas 和 scikit-learn 的介面。

Mnemonic: RAPIDS = pandas + sklearn 的 GPU 強化版

## Q31
Type: single
Difficulty: 2
Tags: llm, context-window
Concepts: context-window
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

LLM 的「上下文視窗」是什麼，為什麼重要？

A. 模型在螢幕上運行的實體視窗
B. 模型在單次輸入-輸出互動中可處理的最大 token 數——它限制模型在生成回應時能考慮多少文字，影響輸入長度和生成能力
C. API 速率限制的時間視窗
D. 模型訓練資料的日期範圍

Answer: B

Hint: 上下文視窗決定模型一次能「看到」多少文字——你的輸入和它的輸出都必須放得進去。

Explanation: 上下文視窗（例如 4K、32K、128K、1M token）設定輸入和輸出合計的最大長度。更長的上下文允許處理更大的文件、維持更長的對話、包含更多 RAG 檢索的內容，但也增加記憶體使用和計算成本。

Why others wrong: 它是 token 限制，不是顯示視窗；速率限制是分開的；知識截止日期是關於訓練資料，不是上下文大小。

Trap: 混淆上下文視窗與知識截止日期——上下文視窗限制模型在這次請求中看到什麼，知識截止日期限制它在訓練時學到什麼。

Mnemonic: 上下文視窗 = 模型現在工作記憶中能容納多少文字

## Q32
Type: single
Difficulty: 3
Tags: inference, model-parallelism
Concepts: tensor-parallelism
Domain: Domain 2 — Software Development
DomainNumber: 2

當部署一個無法放入單張 GPU 的超大型 LLM 時，什麼是張量平行處理？

A. 在多張 GPU 上運行相同的模型副本以確保冗餘
B. 將個別權重矩陣分散到多張 GPU 上，讓每張 GPU 計算每一層的一部分，需要高頻寬的 GPU 間通訊（如 NVLink），因為 GPU 在每一層都必須交換部分結果
C. 同時在多個資料集上訓練模型
D. 壓縮模型使其放入一張 GPU

Answer: B

Hint: 如果一個矩陣對一張 GPU 來說太大，就分散到多張 GPU——但它們需要不斷地互相通訊。

Explanation: 張量平行處理在一層內將權重矩陣分散到各 GPU 上。對於矩陣乘法 Y = XW，不同的 GPU 持有 W 的不同列並計算部分結果，然後通過 all-reduce 合併。這需要非常快的 GPU 間通訊（建議用 NVLink），因為部分結果的交換在每一層都會發生。

Why others wrong: 冗餘是資料平行處理/複製；這是分割模型本身；多資料集訓練是不同的概念；它是壓縮的替代方案。

Trap: 混淆張量平行處理與管線平行處理——張量在層內分割（需要快速通訊），管線在層間分割（對延遲更寬容）。

Mnemonic: 張量平行 = 跨 GPU 分割矩陣（需要快速連結）

## Q33
Type: single
Difficulty: 2
Tags: rag, reranking
Concepts: reranking
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

在 RAG 管線中，重排序器（reranker）的用途是什麼？

A. 重新排序訓練資料
B. 使用更精密的交叉編碼器模型重新評分檢索到的文件，改善排序品質——初始檢索快速但近似，而重排序器慢但精確
C. 按查詢頻率排列使用者
D. 按字母順序排列最終輸出

Answer: B

Hint: 初始檢索撒下大網；重排序器從網中挑出最好的。

Explanation: 基於嵌入的檢索（雙編碼器）快速但不精確。重排序器（交叉編碼器）將每個檢索到的文件與查詢配對，產生更準確的相關性分數。這種兩階段方法（快速檢索 → 精確重排序）兼顧速度與品質。NVIDIA NeMo Retriever 包含重排序功能。

Why others wrong: 重排序在推理時對檢索到的文件進行；它按查詢相關性評分文件，不是使用者頻率；它按相關性排序，不是按字母。

Trap: 跳過重排序器因為「嵌入檢索就夠好了」——重排序通常顯著提升回答品質，尤其當頂部檢索到的文件相似度分數接近時。

Mnemonic: 檢索多（快速、粗略）→ 重排少（慢速、精確）→ 送最好的給 LLM

## Q34
Type: single
Difficulty: 2
Tags: nvidia-tools, nemo-curator
Concepts: nemo-curator
Domain: Domain 3 — Experimentation
DomainNumber: 3

NVIDIA NeMo Curator 用於什麼？

A. 管理博物館館藏
B. 為 LLM 準備和策展大規模訓練資料集——包含去重、品質過濾、語言偵測和內容分類，以確保高品質的訓練資料
C. 策展播放清單
D. 管理 GPU 庫存

Answer: B

Hint: 「Curator」意為選擇和組織的人——在 NeMo 中，它策展訓練資料。

Explanation: NeMo Curator 提供 GPU 加速的工具來處理大規模文字資料集：精確和模糊去重、品質評分、語言識別、PII 偵測和領域分類。高品質訓練資料是高品質模型的基礎，使資料策展成為關鍵步驟。

Why others wrong: 它策展資料，不是博物館或音樂內容；它是資料處理的軟體工具，不是硬體管理。

Trap: 低估資料策展的重要性——「資料品質 > 模型架構」是被廣泛接受的原則。

Mnemonic: NeMo Curator = 以 GPU 速度清理、去重和過濾訓練資料

## Q35
Type: single
Difficulty: 1
Tags: llm, pre-training
Concepts: pre-training
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

LLM 的預訓練階段是什麼？

A. 模型部署到生產環境的階段
B. 初始訓練階段，模型透過在大量文字語料上預測下一個 token 來學習通用語言理解，在任何任務特定微調之前進行
C. 品質保證測試階段
D. 模型硬體組態設定的階段

Answer: B

Hint: 預訓練在微調之前——模型在這個基礎階段學到什麼？

Explanation: 預訓練讓模型接觸數十億 token 的文字，透過下一個 token 預測來學習通用語言模式、世界知識和推理能力。這創建了一個基礎模型，然後可以針對特定任務進行微調。預訓練極其耗費計算資源——通常需要數千張 GPU 運行數週。

Why others wrong: 部署在訓練之後；品質保證是分開的；硬體設置在訓練之前但不屬於訓練。

Trap: 以為預訓練本身就產生可用的模型——預訓練模型需要對齊（指令微調、RLHF）才能好好遵循指令。

Mnemonic: 預訓練 = 在大量資料上學語言 → 微調 = 學習特定任務

## Q36
Type: single
Difficulty: 2
Tags: fine-tuning, instruction-tuning
Concepts: instruction-tuning
Domain: Domain 3 — Experimentation
DomainNumber: 3

什麼是指令微調，它與預訓練有何不同？

A. 它們是相同的流程
B. 指令微調在指令-回應配對上微調預訓練模型，教它遵循人類指令——預訓練學習通用語言模式，而指令微調教模型成為有用的助手
C. 指令微調比預訓練使用更多資料
D. 指令微調移除模型的語言知識

Answer: B

Hint: 預訓練模型能預測下一個詞但無法遵循指令——指令微調橋接了這個差距。

Explanation: 預訓練的 LLM 擅長文字補全但不擅長遵循指令。指令微調在各種指令-回應範例上微調它們（例如「摘要這篇文章：[文章]」→ [摘要]），教模型理解和執行跨多種任務類型的使用者請求。

Why others wrong: 它們是連續的階段；指令微調使用遠更少的資料（數千到數百萬個範例 vs. 數十億 token）；它增加能力，不是移除知識。

Trap: 以為預訓練模型就可以直接使用——沒有指令微調，它只會補全文字而非遵循指令。

Mnemonic: 預訓練 = 懂語言，指令微調 = 懂得如何幫忙

## Q37
Type: single
Difficulty: 2
Tags: trustworthy-ai, hallucination
Concepts: hallucination-types
Domain: Domain 5 — Trustworthy AI
DomainNumber: 5

LLM 幻覺的兩種主要類型是什麼？

A. 視覺和聽覺幻覺
B. 內在幻覺（與提供的來源資料矛盾）和外在幻覺（生成看似合理但無法從來源驗證的主張——可能正確也可能不正確）
C. 硬體和軟體幻覺
D. 訓練和推理幻覺

Answer: B

Hint: 一種類型與提供的資訊矛盾；另一種添加了來源中找不到的資訊。

Explanation: 內在幻覺直接與來源資訊矛盾（明顯錯誤）。外在幻覺引入不在來源中的主張——這些更難察覺，因為它們可能實際上是正確的，但缺乏根據。RAG 和引用機制有助於偵測和減少這兩種類型。

Why others wrong: LLM 幻覺是文字生成問題，不是感官問題；是內容問題，不是基礎設施問題；兩者都發生在推理期間。

Trap: 只尋找明顯錯誤的陳述——碰巧正確的外在幻覺仍然有問題，因為模型是在沒有證據的情況下生成的。

Mnemonic: 內在 = 與來源矛盾（明確錯誤），外在 = 不在來源中（可能錯誤）

## Q38
Type: single
Difficulty: 3
Tags: nvidia-tools, nim-selection
Concepts: nim-model-selection
Domain: Domain 2 — Software Development
DomainNumber: 2

選擇 NVIDIA NIM 微服務進行部署時，哪些因素決定合適的模型層級？

A. 僅看模型的參數量
B. 任務複雜度、延遲需求、吞吐量需求和成本限制的組合——較小的模型（如 8B）為較簡單的任務提供較低的延遲和成本，而較大的模型（如 70B+）為複雜推理提供更好的品質，但需要更多 GPU 資源
C. 使用的 NVIDIA GPU 的顏色
D. 模型的發布日期

Answer: B

Hint: 將模型大小與任務需求匹配是關鍵的生產架構決策——不是每個任務都需要最大的模型。

Explanation: NIM 提供各種大小的模型。選擇合適的層級需要平衡品質需求（複雜任務需要更大模型）、延遲 SLA（較小模型回應更快）、吞吐量需求（較小模型能處理更多並行請求）和成本（GPU 資源隨模型大小增長）。許多應用使用路由策略，為不同任務選用不同層級。

Why others wrong: 參數量是一個因素但不是唯一的；GPU 顏色無關；更新不一定對每個使用場景都更好。

Trap: 總是部署最大的可用模型——這在簡單任務上浪費資源，且可能無法滿足延遲要求。

Mnemonic: 模型選對大小：任務複雜度 × 延遲 × 吞吐量 × 成本

## Q39
Type: single
Difficulty: 1
Tags: llm, embedding-models
Concepts: embedding-vs-generative
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

嵌入模型和生成式 LLM 有什麼區別？

A. 它們是同一個東西
B. 嵌入模型將文字轉換為固定大小的數值向量以用於相似度搜尋和分類，而生成式 LLM 逐 token 產生新文字——它們用途不同，常在 RAG 中一起使用
C. 嵌入模型總是更大
D. 生成式 LLM 不能處理文字輸入

Answer: B

Hint: 一個產生向量（用於搜尋/比較），另一個產生文字（用於回答/創作）。

Explanation: 嵌入模型（如 BGE、E5、NVIDIA NV-Embed）將文字映射為稠密向量用於檢索和分類。生成式 LLM（如 LLaMA、Mixtral）產生文字回應。在 RAG 中，嵌入模型檢索相關文件，生成式 LLM 使用它們來回答問題——兩者互補。

Why others wrong: 它們的架構和用途根本不同；嵌入模型通常小得多；生成式 LLM 絕對能處理文字輸入。

Trap: 嘗試用生成式 LLM 做高效的相似度搜尋——嵌入模型是專門為此設計的，效率高得多。

Mnemonic: 嵌入 = 文字 → 向量（用於搜尋），生成 = 文字 → 文字（用於回答）

## Q40
Type: single
Difficulty: 2
Tags: trustworthy-ai, red-teaming
Concepts: ai-red-teaming
Domain: Domain 5 — Trustworthy AI
DomainNumber: 5

什麼是 AI 紅隊測試？

A. 一個將 AI 硬體漆成紅色的團隊
B. 對 AI 系統進行對抗性測試的做法，故意嘗試讓系統產生有害、有偏見或不正確的輸出——在部署前識別漏洞以便進行緩解
C. 為 AI 產品撰寫行銷文案的團隊
D. 只測試正常路徑的品質保證團隊

Answer: B

Hint: 紅隊來自軍事演習——「紅隊」扮演對手以尋找弱點。

Explanation: AI 紅隊測試涉及對抗性測試，測試者故意嘗試引出有害輸出、繞過安全控制、揭露偏見或發現失敗模式。這種主動方法在真實使用者遇到問題前識別漏洞，為護欄設計和安全改進提供資訊。

Why others wrong: 這是安全/安保實踐，不是物理性的；這是對抗性測試，不是行銷；它專注於邊界案例和失敗模式，不是正常路徑。

Trap: 以為標準 QA 測試就足夠——紅隊測試專門針對邊界案例、對抗性輸入和創意性誤用，這些是一般測試會遺漏的。

Mnemonic: 紅隊 = 像攻擊者一樣思考 → 發現弱點 → 部署前修復

## Q41
Type: single
Difficulty: 2
Tags: nvidia-tools, ai-enterprise
Concepts: nvidia-ai-enterprise
Domain: Domain 2 — Software Development
DomainNumber: 2

什麼是 NVIDIA AI Enterprise？

A. 一款電子遊戲
B. 一個全面的軟體平台，將 NVIDIA 的 AI 框架、工具和運行時（NeMo、Triton、TensorRT-LLM、NIM、RAPIDS）與企業級支援、安全和認證打包在一起，用於生產部署
C. 像 AWS 一樣的雲端運算服務
D. AI 模型市場

Answer: B

Hint: AI Enterprise 將 NVIDIA 所有的 AI 軟體與企業生產所需的支援和認證打包在一起。

Explanation: NVIDIA AI Enterprise 提供經策展、支援和認證的 NVIDIA AI 軟體堆疊。它包含從資料處理（RAPIDS）到模型客製化（NeMo）到推理（TensorRT-LLM、Triton、NIM）的一切，附帶企業 SLA、安全修補和生產環境所需的長期支援。

Why others wrong: 它是軟體平台，不是遊戲；它在各種雲端和本地運行，本身不是雲端；它包含工具和運行時，不僅是模型目錄。

Trap: 以為個別的開源 NVIDIA 工具等同於 AI Enterprise——企業版增加了支援、安全和經認證的組態。

Mnemonic: AI Enterprise = NVIDIA 完整 AI 堆疊，為生產打包並附帶企業支援

## Q42
Type: single
Difficulty: 3
Tags: fine-tuning, rlhf-dpo
Concepts: dpo
Domain: Domain 3 — Experimentation
DomainNumber: 3

Direct Preference Optimization（DPO）在對齊 LLM 方面與 RLHF 有何不同？

A. DPO 產生的結果比 RLHF 差
B. DPO 不需要單獨的獎勵模型，直接使用偏好配對最佳化語言模型，與 RLHF 的多階段流程（獎勵建模然後強化學習）相比，對齊更簡單也更穩定
C. DPO 需要比 RLHF 更多的計算資源
D. DPO 不使用任何人類回饋

Answer: B

Hint: RLHF 有兩個階段（訓練獎勵模型，然後 RL）。DPO 將其壓縮為一個階段。

Explanation: RLHF 需要在人類偏好上訓練獎勵模型，然後使用 RL（通常是 PPO）對該獎勵模型最佳化 LLM——這是一個複雜且不穩定的流程。DPO 將其重新表述為直接對偏好配對（選擇 vs. 拒絕的回應）的單一監督學習目標，大幅簡化管線。

Why others wrong: DPO 通常更容易產生可比的結果；它通常需要更少的計算資源；它仍然使用人類偏好資料，只是方式不同。

Trap: 以為 DPO 和 RLHF 是完全不同的方法——它們最佳化相同的目標，只是使用不同的演算法。

Mnemonic: RLHF = 偏好 → 獎勵模型 → RL；DPO = 偏好 → 直接最佳化（跳過中間人）

## Q43
Type: single
Difficulty: 2
Tags: inference, model-formats
Concepts: model-formats
Domain: Domain 2 — Software Development
DomainNumber: 2

GGUF 格式通常用於什麼？

A. 儲存訓練資料集
B. 用於儲存量化 LLM 權重的檔案格式，專為高效本地推理設計——通常與 llama.cpp 和其他本地推理框架一起使用，在消費級硬體上運行 LLM
C. 儲存組態檔
D. 打包 Docker 容器

Answer: B

Hint: GGUF 是你下載模型用 llama.cpp 在本地運行時會遇到的格式。

Explanation: GGUF（GPT-Generated Unified Format）以各種量化等級（Q4_0、Q5_K_M、Q8_0 等）儲存模型權重，為 CPU 和消費級 GPU 推理最佳化。它是 llama.cpp 生態系的標準格式，使筆記型電腦和工作站上的本地 LLM 推理成為可能。

Why others wrong: 訓練資料使用不同格式；GGUF 儲存模型權重，不是組態；Docker 使用自己的格式。

Trap: 以為 GGUF 只用於低品質推理——較高的量化等級（Q8、FP16）維持接近原始的品質。

Mnemonic: GGUF = 本地運行 LLM 的格式（llama.cpp 生態系）

## Q44
Type: single
Difficulty: 2
Tags: rag, embedding-search
Concepts: approximate-nearest-neighbor
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

為什麼向量資料庫使用近似最近鄰（ANN）搜尋而非精確最近鄰搜尋？

A. ANN 產生更準確的結果
B. 精確最近鄰搜尋對於高維度的大型資料集在計算上不可行——ANN 演算法（如 HNSW 和 IVF）以微小的準確度損失換取大幅加速的搜尋速度，實現實用的即時檢索
C. ANN 使用更少的儲存空間
D. 精確搜尋在數學上不可能

Answer: B

Hint: 對百萬向量資料庫中的每個查詢檢查每個向量太慢了——ANN 更快速地找到「夠好」的結果。

Explanation: 精確最近鄰搜尋每次查詢的複雜度為 O(n×d)（n 個向量，d 個維度），對數百萬向量不切實際。ANN 演算法（HNSW、IVF-PQ、ScaNN）使用索引結構縮小搜尋空間，在典型工作負載上以 >95% 的召回率實現亞毫秒級查詢。

Why others wrong: 精確搜尋定義上更準確；ANN 可能需要額外儲存用於索引結構；精確搜尋是可能的，只是不切實際地慢。

Trap: 堅持要精確搜尋以獲得完美準確度——ANN 的 1-5% 召回率損失相比 100-1000 倍的加速通常可以忽略不計。

Mnemonic: ANN = 近似但快速（99% 一樣好，100 倍更快）

## Q45
Type: single
Difficulty: 1
Tags: llm, model-sizes
Concepts: model-scaling
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

當一個 LLM 被描述為「7B」或「70B」時，這個數字指的是什麼？

A. 訓練資料集的大小（以位元組計）
B. 模型中可訓練參數（權重）的數量——7B 表示約 70 億個參數，決定了模型的容量、記憶體需求，且通常與能力相關
C. 使用的訓練範例數量
D. 上下文視窗大小（以 token 計）

Answer: B

Hint: B 代表「billion」——數十億的什麼？

Explanation: 這個數字指模型的參數量。更多參數通常意味著更大的學習和表示知識的能力，但也需要更多記憶體和計算資源來推理。一個 7B 模型在 FP16 下僅權重就需要約 14GB 的 GPU 記憶體，而 70B 模型需要約 140GB。

Why others wrong: 訓練資料大小是另外的指標；訓練範例的計算方式不同；上下文視窗以 token 衡量，是獨立的規格。

Trap: 假設越大越好——較小的模型（7B、8B）在適當微調後，在特定任務上可以匹配或超越較大模型。

Mnemonic: 7B = 70 億參數 → 約 14GB GPU 記憶體（FP16）→ 越大 = 能力越強但越貴

## Q46
Type: single
Difficulty: 3
Tags: nvidia-tools, nemo-retriever
Concepts: nemo-retriever
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

NVIDIA NeMo Retriever 為建構 RAG 系統提供哪些功能？

A. 只提供向量資料庫
B. 端對端的檢索管線，包含用於編碼的嵌入模型、用於改善結果品質的重排序模型，以及與向量資料庫的整合——全部為 NVIDIA GPU 最佳化，並以 NIM 微服務形式輕鬆部署
C. 只生成文字回應
D. 只處理文件分塊

Answer: B

Hint: NeMo Retriever 涵蓋 RAG 中「R」的完整部分——嵌入、索引、檢索和重排序。

Explanation: NeMo Retriever 提供 GPU 加速的嵌入模型（NV-Embed）、重排序模型（NV-RerankQA）和與向量資料庫的整合模式。這些元件以 NIM 微服務形式提供，使部署生產品質的 RAG 應用檢索管線變得簡單。

Why others wrong: 它提供模型和管線元件，不僅是資料庫；它處理檢索，不是生成；它涵蓋嵌入、檢索和重排序，不僅是分塊。

Trap: 從頭建構 RAG 檢索，而 NeMo Retriever 提供了最佳化的預建元件。

Mnemonic: NeMo Retriever = 嵌入 + 索引 + 檢索 + 重排序（完整檢索堆疊）

## Q47
Type: single
Difficulty: 2
Tags: trustworthy-ai, governance
Concepts: ai-governance
Domain: Domain 5 — Trustworthy AI
DomainNumber: 5

在企業環境中，AI 治理涵蓋什麼？

A. 僅限技術性的模型效能監控
B. 確保 AI 系統負責任地開發和部署的政策、流程和組織結構——包含風險評估、法規合規、問責框架、模型文件和稽核軌跡
C. 僅限法律合規
D. 僅限資料隱私

Answer: B

Hint: 治理比任何單一維度都更廣泛——它是負責任 AI 的組織框架。

Explanation: AI 治理跨越技術、法律、倫理和組織維度。包含風險評估框架、法規合規（GDPR、EU AI Act）、模型卡和文件、偏見稽核流程、問責結構和事件回應程序。良好的治理使可信 AI 變得系統化，而非臨時性的。

Why others wrong: 治理不僅限於監控、法律或隱私——它涵蓋所有這些以及更多。

Trap: 將治理僅視為合規勾選項——有效的治理是持續的組織實踐，不是一次性的活動。

Mnemonic: AI 治理 = 政策 + 流程 + 人員 + 問責（組織性的，不僅是技術性的）

## Q48
Type: single
Difficulty: 2
Tags: fine-tuning, data-quality
Concepts: fine-tuning-data-quality
Domain: Domain 3 — Experimentation
DomainNumber: 3

為什麼資料品質比資料數量對 LLM 微調更重要？

A. 因為微調本來就比預訓練使用更少的資料
B. 因為 LLM 對微調資料中的模式非常敏感——一組小量高品質、多樣、正確標註的範例比大量嘈雜、不一致或低品質的範例教出更好的行為，後者可能降低模型效能
C. 因為 GPU 只能處理小型資料集
D. 因為大型資料集總是導致過擬合

Answer: B

Hint: 你寧願從 100 個優秀的範例學習，還是 10,000 個平庸的？

Explanation: LLM 非常有效地從微調資料中學習行為模式。低品質範例會教壞習慣——不一致的格式、錯誤的答案或矛盾的行為。研究一致顯示，1,000 個高品質範例通常優於 100,000 個嘈雜的範例。NeMo Curator 有助於確保資料品質。

Why others wrong: 資料量小不是品質重要的原因；GPU 記憶體限制的是批次，不是資料集；過擬合是關於資料-模型匹配，不是原始資料集大小。

Trap: 「多收集資料就好」——對微調而言，策展現有資料通常比收集更多資料更有效果。

Mnemonic: 微調：品質 × 多樣性 > 數量（1K 優秀 > 100K 平庸）

## Q49
Type: multi
Difficulty: 3
Tags: nvidia-tools, stack-overview
Concepts: nvidia-ai-stack
Domain: Domain 2 — Software Development
DomainNumber: 2

以下哪三個元件構成部署 LLM 的核心 NVIDIA AI 推理堆疊？（選三個）

A. TensorRT-LLM（模型最佳化）
B. Microsoft Excel
C. Triton Inference Server（模型服務）
D. NIM 微服務（可直接用於應用的容器）

Answer: A, C, D

Hint: 想想三個層次：最佳化模型、服務模型、打包模型以便輕鬆部署。

Explanation: NVIDIA 推理堆疊分三層元件：TensorRT-LLM 為 GPU 推理最佳化模型（核函數融合、量化），Triton Inference Server 處理請求管理和模型服務，NIM 將所有東西打包成可直接用於應用的容器並提供標準 API。它們一起提供端對端的推理部署。

Why others wrong: Excel 是試算表應用程式，在 AI 推理中沒有角色。

Trap: 以為你需要明確使用所有三個——NIM 在內部抽象化 TensorRT-LLM 和 Triton，所以應用開發者可以只使用 NIM。

Mnemonic: NVIDIA 推理堆疊：TensorRT-LLM（最佳化）→ Triton（服務）→ NIM（部署）

## Q50
Type: single
Difficulty: 2
Tags: evaluation, human-evaluation
Concepts: human-vs-auto-eval
Domain: Domain 3 — Experimentation
DomainNumber: 3

何時應該使用人類評估而非自動指標（BLEU、ROUGE、困惑度）來評估 LLM 輸出？

A. 永遠不需要——自動指標總是足夠的
B. 當評估自動指標無法可靠捕捉的主觀品質時，如有用性、自然度、安全性和使用者滿意度——人類評估對於評估輸出是否真正滿足使用者需求至關重要
C. 只用於商業產品
D. 只在自動指標給出滿分時

Answer: B

Hint: 一個數字能告訴你一個回應是否真的有幫助嗎？有些品質需要人類判斷。

Explanation: 自動指標衡量表面屬性（n-gram 重疊、困惑度），但遺漏了對使用者最重要的品質——回應是否真的有幫助？自然嗎？安全嗎？語調恰當嗎？人類評估捕捉這些主觀但關鍵的維度，這就是為什麼它仍然是 LLM 品質評估的黃金標準。

Why others wrong: 自動指標有已知的盲點；人類評估對所有應用都有益；無論自動分數如何都需要。

Trap: 過度依賴自動指標因為更便宜——高 BLEU 分數不代表輸出對人類讀者真的有用。

Mnemonic: 自動指標 = 文字裡有什麼，人類評估 = 文字是否真的好
