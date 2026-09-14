---
exam: AI-901
lang: zh-TW
---

## Q1
Type: single
Difficulty: 1
Tags: ai-concepts, workloads
Concepts: ai-workload-types
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

哪種 AI 工作負載最適合自動將客戶電子郵件分類為「帳務」、「支援」或「銷售」？

A. 電腦視覺
B. 文字分類
C. 語音辨識
D. 圖像生成

Answer: B

Hint: 想想哪種工作負載處理書面文字並指派標籤。

Explanation: 文字分類是一種自然語言處理工作負載，將預定義的類別指派給文字輸入。按主題分類電子郵件是經典的文字分類任務。

Why others wrong: 電腦視覺處理影像而非文字；語音辨識將語音轉換為文字；圖像生成創建視覺內容。

Trap: 混淆文字分類與文字擷取——分類指派類別，擷取提取特定資料點。

Mnemonic: 分類 = 類別指派，擷取 = 元素提取

## Q2
Type: single
Difficulty: 1
Tags: responsible-ai, fairness
Concepts: fairness-principle
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

一家公司發現其 AI 招聘工具推薦男性候選人的頻率高於同等資歷的女性候選人。這違反了哪項負責任 AI 原則？

A. 透明度
B. 公平性
C. 可靠性
D. 隱私

Answer: B

Hint: 想想哪個原則確保 AI 公平對待所有群體。

Explanation: 公平性要求 AI 系統公平對待所有人，不對任何人口群體產生偏見結果。招聘工具在相同資歷下偏好某一性別是公平性違規。

Why others wrong: 透明度是關於可解釋性；可靠性是關於一致的效能表現；隱私是關於資料保護。

Trap: 認為這是透明度問題因為偏見是「隱藏的」——透明度是關於解釋決策，公平性是關於公平的結果。

Mnemonic: 公平性 = 對所有群體公平，無偏見

## Q3
Type: single
Difficulty: 1
Tags: ai-concepts, generative-ai
Concepts: generative-ai-definition
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

生成式 AI 與傳統 AI 的區別是什麼？

A. 生成式 AI 總是比傳統 AI 更準確
B. 生成式 AI 創建新內容如文字、影像或程式碼，而不僅僅是分類或預測
C. 生成式 AI 不需要訓練資料
D. 生成式 AI 只能處理文字

Answer: B

Hint: 關注生成式 AI 產出什麼，而非傳統 AI 產出什麼。

Explanation: 生成式 AI 模型基於從訓練資料學到的模式創建新的、原創的內容——文字、影像、程式碼、音訊。傳統 AI 通常進行分類、預測或偵測模式，而不會生成新穎的輸出。

Why others wrong: 生成式 AI 不總是更準確；它需要大量訓練資料；它可以處理多種模態，不僅限於文字。

Trap: 假設生成式 AI 普遍更好——它擅長創建，但傳統 ML 在特定分類或迴歸任務上可能表現更好。

Mnemonic: 生成式 = 生成新東西；傳統 = 轉換現有資料

## Q4
Type: single
Difficulty: 1
Tags: responsible-ai, transparency
Concepts: transparency-principle
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

一位病人想了解為什麼 AI 系統將他們的醫學掃描標記為異常。哪項負責任 AI 原則支持這個請求？

A. 包容性
B. 問責性
C. 透明度
D. 可靠性

Answer: C

Hint: 想想哪個原則確保使用者能理解 AI 如何得出其結論。

Explanation: 透明度意味著 AI 系統應該是可理解的——使用者和利害關係人應該能夠理解系統如何運作以及為什麼做出特定決策。解釋醫療 AI 的推理過程支持透明度原則。

Why others wrong: 包容性是關於所有使用者的無障礙存取；問責性是關於誰負責；可靠性是關於一致、安全的運作。

Trap: 混淆透明度與問責性——透明度是關於理解決策是如何做出的；問責性是關於誰為此承擔責任。

Mnemonic: 透明度 = 看透 = 理解推理過程

## Q5
Type: single
Difficulty: 1
Tags: ai-concepts, machine-learning
Concepts: supervised-learning
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

一個模型使用的資料集中，每筆房屋資料都包含特徵（大小、位置、屋齡）和已知售價。這是哪種類型的機器學習？

A. 非監督式學習
B. 強化學習
C. 監督式學習
D. 遷移學習

Answer: C

Hint: 關鍵線索是訓練資料包含已知的正確答案（標籤）。

Explanation: 監督式學習使用標記的訓練資料——輸入特徵配對已知輸出（標籤）。使用房屋特徵和已知售價進行訓練是監督式迴歸任務。

Why others wrong: 非監督式學習沒有標籤；強化學習透過試驗和獎勵學習；遷移學習將預訓練模型應用於新任務。

Trap: 混淆監督式與非監督式，因為模型「自行學習」——區別在於訓練時是否提供標籤。

Mnemonic: 監督式 = 有標籤監督；非監督式 = 無標籤，自行探索

## Q6
Type: single
Difficulty: 2
Tags: ai-concepts, model-components
Concepts: model-training
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

在機器學習生命週期中，驗證資料集的用途是什麼？

A. 訓練模型的初始參數
B. 調整超參數並在訓練期間偵測過擬合
C. 提供模型效能的最終無偏評估
D. 透過資料增強生成新的訓練範例

Answer: B

Hint: 驗證集在訓練期間使用，但不直接用於學習權重。

Explanation: 驗證資料集用於在訓練過程中調整超參數和監控過擬合。它在不更新模型權重的情況下提供回饋，幫助防止模型記憶訓練資料。

Why others wrong: 訓練資料訓練參數；測試集提供最終評估；資料增強生成合成範例，是另一個獨立過程。

Trap: 混淆驗證集與測試集——驗證集在訓練期間用於指導決策；測試集僅在訓練完成後使用。

Mnemonic: 驗證 = 訓練中段的驗核；測試 = 最終的考試

## Q7
Type: single
Difficulty: 1
Tags: responsible-ai, accountability
Concepts: accountability-principle
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

一輛由 AI 控制的自動駕駛車輛造成交通事故。哪項負責任 AI 原則處理誰應該承擔責任的問題？

A. 公平性
B. 透明度
C. 問責性
D. 包容性

Answer: C

Hint: 想想當 AI 系統造成傷害時，誰應該承擔責任。

Explanation: 問責性意味著人們應該對 AI 系統負責。當 AI 系統造成傷害時，問責性確保有明確的責任歸屬——設計者、開發者和操作者必須為系統的行為負責。

Why others wrong: 公平性是關於公平對待；透明度是關於理解決策；包容性是關於無障礙存取。

Trap: 認為問責性只適用於 AI 本身——問責性永遠落在設計、部署和操作 AI 系統的人身上。

Mnemonic: 問責性 = 人要負責，不是機器

## Q8
Type: single
Difficulty: 2
Tags: ai-concepts, generative-ai
Concepts: foundation-models
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

在生成式 AI 的脈絡中，什麼是基礎模型？

A. 一個只能執行一個特定任務的模型
B. 一個在廣泛資料上預訓練的大型模型，可以適應多種下游任務
C. 一個不需要訓練資料的模型
D. 一個永遠是開源的模型

Answer: B

Hint: 想想「基礎」這個詞——所有其他事物都建立在上面的東西。

Explanation: 基礎模型是在龐大、多樣的資料集上預訓練的大規模模型。它們學習通用模式，可以針對許多特定的下游任務進行微調或調整，例如文字生成、摘要、翻譯和程式碼撰寫。

Why others wrong: 基礎模型是多用途的，非單一任務；它們需要大量訓練資料；它們可以是專有的或開源的。

Trap: 假設基礎模型可以直接用於任何任務——它們通常需要微調或提示工程才能用於特定用例。

Mnemonic: 基礎 = 支撐多棟建築（任務）的寬廣基底

## Q9
Type: single
Difficulty: 1
Tags: ai-concepts, workloads
Concepts: computer-vision
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

一家工廠使用攝影機在裝配線上自動偵測有缺陷的產品。這代表哪種 AI 工作負載？

A. 自然語言處理
B. 電腦視覺
C. 語音合成
D. 生成式 AI

Answer: B

Hint: 想想哪種工作負載處理來自攝影機的視覺資訊。

Explanation: 電腦視覺使 AI 系統能夠解讀和分析來自影像和視訊的視覺資訊。使用攝影機畫面偵測裝配線上的缺陷是經典的電腦視覺應用——特別是物件偵測或異常偵測。

Why others wrong: NLP 處理文字；語音合成創建音訊；生成式 AI 創建新內容。

Trap: 認為這是生成式 AI 因為系統「生成」了判斷——系統是在偵測和分類，而非生成新內容。

Mnemonic: 電腦視覺 = 會看的電腦

## Q10
Type: single
Difficulty: 2
Tags: ai-concepts, model-components
Concepts: model-parameters
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

模型參數和超參數的區別是什麼？

A. 參數在訓練前設定；超參數在訓練中學習
B. 參數在訓練中學習；超參數在訓練前設定以控制學習過程
C. 它們是同一回事
D. 參數控制學習率；超參數是模型權重

Answer: B

Hint: 「超」意味著在上面或超越——超參數從上層控制參數。

Explanation: 參數（如權重和偏差）是模型在訓練過程中學習的。超參數（如學習率、批次大小、層數）在訓練前設定，控制模型如何學習。它們不是從資料中學習的。

Why others wrong: A 的關係顛倒了；C 中它們本質上不同；D 交換了定義。

Trap: 混淆兩者因為兩者都影響模型行為——記住「超」意味著它們在上層控制參數學習過程。

Mnemonic: 參數 = 學習得到；超參數 = 人工設定的控制項

## Q11
Type: single
Difficulty: 1
Tags: responsible-ai, reliability
Concepts: reliability-safety
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

一家藥局的 AI 聊天機器人偶爾推薦危險的藥物交互作用。哪項負責任 AI 原則最直接受到威脅？

A. 公平性
B. 可靠性與安全性
C. 透明度
D. 包容性

Answer: B

Hint: 想想哪個原則確保 AI 一致運作且不造成傷害。

Explanation: 可靠性與安全性要求 AI 系統按預期運作且不造成傷害。藥局聊天機器人推薦危險的藥物交互作用是可靠性與安全性的失敗，因為它產生了有害、不一致的結果。

Why others wrong: 公平性是關於偏見；透明度是關於可解釋性；包容性是關於無障礙存取。

Trap: 認為這是透明度問題因為使用者「看不到」錯誤——核心問題是系統產生不安全的輸出，而非其可解釋性。

Mnemonic: 可靠性 = 可靠且安全，不造成傷害

## Q12
Type: single
Difficulty: 2
Tags: ai-concepts, generative-ai
Concepts: hallucination
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

一個生成式 AI 模型自信地提供了一篇不存在的研究論文引用。這種行為叫什麼？

A. 過擬合
B. 欠擬合
C. 幻覺
D. 資料洩漏

Answer: C

Hint: 想想 AI「看到」不真實的資訊是什麼意思。

Explanation: 幻覺發生在生成式 AI 模型產生看似合理但事實上不正確或捏造的資訊時。生成虛假引用是常見範例——模型構造出看似真實但沒有實際資料依據的內容。

Why others wrong: 過擬合是記住訓練資料；欠擬合是未能學到模式；資料洩漏是訓練資料污染測試資料。

Trap: 認為幻覺是罕見的邊界案例——它們是生成式 AI 的根本挑戰，需要接地和檢索增強等緩解策略。

Mnemonic: 幻覺 = AI 想像出不存在的東西

## Q13
Type: single
Difficulty: 1
Tags: ai-concepts, workloads
Concepts: nlp-workloads
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

一家公司想自動判斷客戶評論是正面、負面還是中性。他們應該使用哪種 NLP 技術？

A. 命名實體辨識
B. 情感分析
C. 機器翻譯
D. 文字摘要

Answer: B

Hint: 想想哪種技術衡量文字的情感基調。

Explanation: 情感分析判斷文字中表達的情感基調或態度。將評論分類為正面、負面或中性是情感分析的核心用例。

Why others wrong: 命名實體辨識識別人名、地名和組織名稱；機器翻譯在語言之間轉換；文字摘要濃縮長文本。

Trap: 混淆情感分析與文字分類——情感分析是專注於情感基調的特定文字分類類型。

Mnemonic: 情感 = 感受；情感分析 = 什麼感受？

## Q14
Type: single
Difficulty: 2
Tags: ai-concepts, model-components
Concepts: tokens
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

在大型語言模型的脈絡中，什麼是 token？

A. API 存取的身份驗證憑證
B. 模型作為個別單位處理的文字片段（單字、子詞或字元）
C. 模型的輸出預測
D. 訓練期間使用的 GPU 計算單位

Answer: B

Hint: 想想模型在處理文字之前如何分解文字。

Explanation: Token 是語言模型處理的基本單位。文字被分解成 token——可以是完整的單字、子詞或單一字元——然後輸入模型。模型隨後逐 token 處理並生成輸出。

Why others wrong: 身份驗證 token 無關；token 是輸入而非輸出；GPU 計算單位是硬體而非文字單位。

Trap: 假設一個 token 總是等於一個單字——在許多分詞器中，長或不常見的單字會被分割成多個子詞 token。

Mnemonic: Token = 文字被拆成的微小片段供模型處理

## Q15
Type: single
Difficulty: 1
Tags: ai-concepts, workloads
Concepts: speech-workloads
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

哪種 AI 工作負載將口語轉換為書面文字？

A. 文字轉語音
B. 語音辨識（語音轉文字）
C. 機器翻譯
D. 光學字元辨識

Answer: B

Hint: 想想方向：從語音音訊到書面文字。

Explanation: 語音辨識，也稱為語音轉文字，將口語轉換為書面文字。它支援語音助手、會議逐字稿和聽寫等應用。

Why others wrong: 文字轉語音是相反方向（文字到音訊）；機器翻譯在書面語言之間轉換；OCR 將影像中的印刷/手寫文字轉換為數位文字。

Trap: 混淆語音轉文字與文字轉語音——記住轉換方向。

Mnemonic: 語音辨識 = AI 的耳朵；文字轉語音 = AI 的聲音

## Q16
Type: single
Difficulty: 2
Tags: ai-concepts, generative-ai
Concepts: temperature
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

配置生成式 AI 模型時，temperature 參數控制什麼？

A. 回應生成的速度
B. 模型輸出的隨機性和創造性
C. 回應中的最大 token 數
D. 模型的訓練資料截止日期

Answer: B

Hint: 把 temperature 想成創造力旋鈕——低是保守的，高是有創意的。

Explanation: Temperature 控制模型 token 選擇的隨機性。低 temperature（如 0.1）使模型更具確定性和專注性，而高 temperature（如 0.9）增加隨機性和創造性。它不影響速度、長度或訓練資料。

Why others wrong: 速度取決於基礎設施；最大 token 是另一個參數；訓練資料截止日期是固定的且不可配置。

Trap: 在事實性任務中設定 temperature 過高——高 temperature 增加創造性但也增加幻覺風險。

Mnemonic: Temperature = 創造力溫度計：冷 = 精確，熱 = 有創意

## Q17
Type: single
Difficulty: 1
Tags: responsible-ai, privacy
Concepts: privacy-security
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

一個醫療 AI 系統在未加密的情況下儲存病患資料，並允許任何員工存取。這違反了哪項負責任 AI 原則？

A. 公平性
B. 包容性
C. 隱私與安全
D. 透明度

Answer: C

Hint: 想想哪個原則保護敏感的個人資訊。

Explanation: 隱私與安全要求 AI 系統保護個人資料並安全運作。在未加密的情況下儲存病患資料且不限制存取權限，違反了此原則的隱私（資料保護）和安全（存取控制）兩個面向。

Why others wrong: 公平性是關於公平對待；包容性是關於無障礙存取；透明度是關於可解釋性。

Trap: 認為安全與負責任 AI 分開——Microsoft 明確將隱私與安全合併為一項負責任 AI 原則。

Mnemonic: 隱私 = 個人資料受保護；安全 = 系統受保障

## Q18
Type: single
Difficulty: 2
Tags: ai-concepts, generative-ai
Concepts: prompt-engineering
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

什麼是提示工程？

A. 從頭訓練新 AI 模型的過程
B. 精心設計有效的輸入指令以引導生成式 AI 模型輸出的做法
C. 微調模型權重的技術
D. 將模型部署到生產環境的過程

Answer: B

Hint: 想想你如何與生成式 AI 溝通以獲得最佳結果。

Explanation: 提示工程是設計和改進給生成式 AI 模型的輸入文字（提示）以產生期望輸出的做法。它包括提供範例（少樣本）、指派角色（系統訊息）和清楚結構化指令等技術。

Why others wrong: 從頭訓練涉及資料和計算；微調用新資料調整模型權重；部署是關於基礎設施。

Trap: 認為提示工程會改變模型本身——它只改變輸入，不改變模型的權重或架構。

Mnemonic: 提示工程 = 給 AI 的精確指令

## Q19
Type: single
Difficulty: 1
Tags: ai-concepts, machine-learning
Concepts: regression-classification
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

預測明天確切的攝氏溫度是哪種機器學習任務的範例？

A. 分類
B. 分群
C. 迴歸
D. 異常偵測

Answer: C

Hint: 想想輸出是類別還是連續數字。

Explanation: 迴歸預測連續的數值。預測確切的溫度值是迴歸任務，因為輸出是連續尺度上的數字，而非離散類別。

Why others wrong: 分類預測類別；分群將相似項目分組；異常偵測識別離群值。

Trap: 混淆迴歸與分類——如果輸出是「熱、溫、冷」就是分類；如果是「23.5°C」就是迴歸。

Mnemonic: 迴歸 = 實數；分類 = 類別

## Q20
Type: single
Difficulty: 2
Tags: ai-concepts, generative-ai
Concepts: grounding
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

用自己的資料對生成式 AI 模型進行接地的主要目的是什麼？

A. 使模型執行更快
B. 減少模型的訓練時間
C. 透過提供特定於情境的資訊來改善回應的準確性和相關性
D. 降低 API 呼叫的成本

Answer: C

Hint: 想想提供額外脈絡如何幫助模型給出更準確的答案。

Explanation: 接地將生成式 AI 模型連接到特定的、最新的資料來源，使其回應基於事實、相關的資訊，而非僅依賴其訓練資料。這減少幻覺並改善特定領域問題的準確性。

Why others wrong: 接地不影響模型速度；不改變訓練時間（模型不會重新訓練）；由於額外的資料處理，可能實際上增加成本。

Trap: 混淆接地與微調——接地在推論時提供脈絡；微調在訓練期間修改模型的權重。

Mnemonic: 接地 = 用你的資料將 AI 錨定在現實中

## Q21
Type: single
Difficulty: 1
Tags: responsible-ai, inclusiveness
Concepts: inclusiveness-principle
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

一個 AI 驅動的網站無法與視障使用者使用的螢幕閱讀器配合使用。這忽略了哪項負責任 AI 原則？

A. 公平性
B. 包容性
C. 透明度
D. 可靠性

Answer: B

Hint: 想想哪個原則確保 AI 對不同能力的人都是無障礙的。

Explanation: 包容性意味著 AI 系統應該被設計來讓所有人參與和賦能，包括身心障礙者。不支援螢幕閱讀器排除了視障使用者，違反了包容性原則。

Why others wrong: 公平性是關於結果中的偏見；透明度是關於理解決策；可靠性是關於一致的運作。

Trap: 混淆包容性與公平性——公平性處理 AI 決策中的偏見；包容性處理無障礙存取和參與。

Mnemonic: 包容性 = 包含每個人，不遺漏任何人

## Q22
Type: single
Difficulty: 2
Tags: ai-concepts, model-components
Concepts: overfitting
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

一個模型在訓練資料上達到 99% 的準確率，但在新的、未見過的資料上只有 60% 的準確率。這個問題叫什麼？

A. 欠擬合
B. 過擬合
C. 資料增強
D. 特徵選擇

Answer: B

Hint: 模型在已見過的資料上表現極好，但在未見過的資料上表現不佳——它記住了而非學習了。

Explanation: 過擬合發生在模型過度學習訓練資料（包括其雜訊和離群值）而非從底層模式中泛化。訓練和測試準確率之間的巨大差距是過擬合的經典徵兆。

Why others wrong: 欠擬合在訓練和測試資料上都表現不佳；資料增強和特徵選擇是改善模型的技術，不是問題。

Trap: 認為高訓練準確率總是好的——如果測試準確率低得多，模型是在記憶而非學習。

Mnemonic: 過擬合 = 過度記憶，無法泛化

## Q23
Type: single
Difficulty: 1
Tags: ai-concepts, agentic-ai
Concepts: ai-agents
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

AI 代理與標準生成式 AI 聊天機器人的區別是什麼？

A. 代理只能回應文字輸入
B. 代理可以自主採取行動，例如呼叫 API、搜尋資料庫或執行任務
C. 代理不使用大型語言模型
D. 代理無法維護對話脈絡

Answer: B

Hint: 想想是什麼讓「代理」與「回應者」不同。

Explanation: AI 代理超越了簡單的問答，能自主規劃和執行多步驟任務。它們可以使用工具、呼叫 API、搜尋資料庫並採取行動來實現目標——不僅僅是生成文字回應。

Why others wrong: 代理處理多種輸入類型；它們通常使用 LLM 作為推理引擎；它們維護多步驟任務的脈絡。

Trap: 認為所有聊天機器人都是代理——聊天機器人只生成文字回應；代理規劃並執行行動。

Mnemonic: 代理 = 自主行動；聊天機器人 = 只是聊天

## Q24
Type: single
Difficulty: 2
Tags: ai-concepts, generative-ai
Concepts: rag
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

什麼是檢索增強生成（RAG）？

A. 使用多個 GPU 加速訓練模型的技術
B. 一種模式，從外部資料來源檢索相關資訊，並在生成式 AI 模型生成回應之前將其作為脈絡提供
C. 壓縮模型大小的方法
D. 生成訓練資料的技術

Answer: B

Hint: 分解名稱：檢索（取得資料）+ 增強（強化）+ 生成（創建回應）。

Explanation: RAG 結合資訊檢索與文字生成。當使用者提問時，系統首先從知識庫檢索相關文件，然後將這些文件作為脈絡提供給生成模型，模型產生接地的、準確的回應。

Why others wrong: 多 GPU 訓練是分散式訓練；模型壓縮是量化/蒸餾；生成訓練資料是資料增強。

Trap: 認為 RAG 修改了模型——它只在推論時提供額外脈絡，模型權重保持不變。

Mnemonic: RAG = 檢索、增強、生成——查找、加入、寫出答案

## Q25
Type: single
Difficulty: 1
Tags: ai-concepts, machine-learning
Concepts: unsupervised-learning
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

一家零售商想根據購買行為將客戶分成群組，但沒有預定義的類別。他們應該使用哪種類型的機器學習？

A. 監督式學習
B. 強化學習
C. 非監督式學習
D. 半監督式學習

Answer: C

Hint: 沒有預定義的標籤意味著沒有監督。

Explanation: 非監督式學習在沒有標記範例的情況下找到資料中的模式和結構。在沒有預定義類別的情況下根據行為將客戶分群是經典的非監督式學習任務——特別是分群。

Why others wrong: 監督式學習需要標籤；強化學習透過獎勵信號學習；半監督式使用混合的標記和未標記資料。

Trap: 混淆分群與分類——分群發現群組；分類將項目指派到預定義的類別。

Mnemonic: 非監督式 = 未標記的資料，自行發現結構

## Q26
Type: single
Difficulty: 2
Tags: ai-concepts, generative-ai
Concepts: fine-tuning
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

微調模型和使用提示工程有什麼區別？

A. 微調比提示工程更便宜、更快
B. 微調用額外的訓練資料修改模型的權重；提示工程只改變輸入文字
C. 提示工程永久改變模型；微調是暫時的
D. 它們在所有情況下都會產生相同的結果

Answer: B

Hint: 想想是模型本身改變了，還是只有你對它說的話改變了。

Explanation: 微調透過在額外的特定領域資料上訓練來更新模型的內部權重，永久改變其行為。提示工程精心設計輸入文字來引導輸出，而不修改模型。微調資源密集但能產生更專業化的結果。

Why others wrong: 微調更昂貴；提示工程不改變模型；結果取決於任務而不同。

Trap: 在提示工程就足夠的時候使用微調——總是先嘗試提示工程，因為它更快更便宜。

Mnemonic: 微調 = 修改模型；提示工程 = 修改輸入

## Q27
Type: single
Difficulty: 1
Tags: ai-concepts, workloads
Concepts: anomaly-detection
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

一家銀行使用 AI 標記偏離客戶正常消費模式的異常信用卡交易。這是哪種 AI 工作負載？

A. 分類
B. 迴歸
C. 異常偵測
D. 文字生成

Answer: C

Hint: 系統在尋找異常或不尋常的事物。

Explanation: 異常偵測識別顯著偏離預期模式的資料點。根據消費歷史標記異常的信用卡交易是詐欺防範中的經典異常偵測用例。

Why others wrong: 分類指派預定義的類別；迴歸預測數值；文字生成創建文字內容。

Trap: 認為這是二元分類（詐欺/非詐欺）——雖然可以這樣框架，但核心模式是偵測偏離正常行為的情況，這是異常偵測。

Mnemonic: 異常 = 不正常 = 偵測到不尋常的事物

## Q28
Type: single
Difficulty: 2
Tags: ai-concepts, model-components
Concepts: deployment-options
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

在為 AI 解決方案選擇大型語言模型與小型語言模型時，最重要的考量因素是什麼？

A. 較大的模型總是更好
B. 任務複雜度與成本和延遲的權衡——較大模型處理複雜推理，較小模型對專注任務更有效率
C. 小型模型無法理解自然語言
D. 只有大型模型支援微調

Answer: B

Hint: 想想能力與效率之間的權衡。

Explanation: 模型選擇需要將模型能力與任務需求匹配。大型模型擅長複雜推理和多步驟任務，但更昂貴且較慢。小型模型對分類、擷取或簡單問答等專注任務更具成本效益且快速。

Why others wrong: 較大不是普遍更好；小型模型在其範圍內理解語言良好；大型和小型模型都支援微調。

Trap: 預設使用最大的可用模型——對許多生產任務，較小、較便宜的模型表現同樣好甚至更好。

Mnemonic: 匹配模型與任務——大腦做大事，高效引擎做簡單事

## Q29
Type: single
Difficulty: 1
Tags: ai-concepts, workloads
Concepts: ocr
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

一家律師事務所需要將掃描的紙本合約轉換為可編輯的數位文字。他們應該使用哪種 AI 能力？

A. 情感分析
B. 語音辨識
C. 光學字元辨識（OCR）
D. 圖像生成

Answer: C

Hint: 想想哪種技術從影像或掃描文件中讀取文字。

Explanation: 光學字元辨識（OCR）從影像、掃描文件或照片中擷取文字。它將視覺形式的印刷或手寫文字轉換為可編輯和搜尋的機器可讀數位文字。

Why others wrong: 情感分析判斷情感基調；語音辨識轉換口語音訊；圖像生成創建影像。

Trap: 混淆 OCR 與語音辨識——OCR 從影像中讀取視覺文字；語音辨識將口語音訊轉換為文字。

Mnemonic: OCR = 光學 = 從影像中讀取文字的眼睛

## Q30
Type: single
Difficulty: 2
Tags: ai-concepts, generative-ai
Concepts: system-message
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

在生成式 AI 應用中，系統訊息的目的是什麼？

A. 驗證使用者身份
B. 在 AI 與使用者互動之前設定模型的行為、角色和約束
C. 儲存模型的訓練資料
D. 加密對話

Answer: B

Hint: 把系統訊息想成 AI 在整個對話中遵循的幕後指令。

Explanation: 系統訊息（或系統提示）定義模型的角色、語調、約束和行為準則。它在任何使用者互動之前設定脈絡——例如，指示模型「扮演有幫助的客服人員」或「只回答關於 Azure 的問題」。

Why others wrong: 身份驗證由外部處理；訓練資料內建於模型中；加密是基礎設施的問題。

Trap: 認為系統訊息對終端使用者可見——它通常是隱藏的，僅用於配置模型的行為。

Mnemonic: 系統訊息 = AI 演員的舞台指導

## Q31
Type: single
Difficulty: 1
Tags: ai-concepts, machine-learning
Concepts: reinforcement-learning
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

一個 AI 透過贏棋得到正分、輸棋得到負分來學習下棋。這是哪種類型的機器學習？

A. 監督式學習
B. 非監督式學習
C. 強化學習
D. 遷移學習

Answer: C

Hint: 透過獎勵和懲罰學習是這種方法的標誌。

Explanation: 強化學習透過獎勵系統訓練代理——代理在環境中採取行動，並根據結果獲得獎勵或懲罰。透過勝負回饋學習下棋是經典的強化學習場景。

Why others wrong: 監督式學習需要標記的資料對；非監督式學習在沒有回饋的情況下發現模式；遷移學習調整預訓練模型。

Trap: 混淆強化學習與監督式學習因為兩者都有「回饋」——在監督式學習中，正確答案直接提供；在強化學習中，只給出獎勵信號。

Mnemonic: 強化學習 = 獎勵和懲罰，像訓練寵物一樣

## Q32
Type: single
Difficulty: 3
Tags: ai-concepts, generative-ai
Concepts: top-p
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

一位開發者將生成式 AI 模型的 top_p 設定為 0.1。這有什麼效果？

A. 模型只考慮最可能的前 10% token，使輸出非常集中和確定性
B. 模型恰好生成 10 個 token
C. 模型使用 10% 的參數
D. 模型回應速度快 10%

Answer: A

Hint: Top_p（核採樣）控制模型從機率分佈的哪個部分取樣。

Explanation: Top_p（核採樣）將模型的 token 選擇限制在累積機率超過 p 的最小 token 集合。當 top_p=0.1 時，模型只考慮最可能的 token，產生非常集中和可預測的輸出。較高的 top_p 允許更多元、更有創意的回應。

Why others wrong: Top_p 不控制輸出長度；不影響參數數量；不改變速度。

Trap: 混淆 top_p 與 temperature——兩者都控制隨機性，但 temperature 縮放機率而 top_p 截斷機率分佈。

Mnemonic: Top_p = 考慮的可能 token 的頂部百分比

## Q33
Type: single
Difficulty: 1
Tags: ai-concepts, workloads
Concepts: image-generation
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

一個行銷團隊要求 AI 根據文字描述創建產品照片。這是哪種 AI 工作負載？

A. 電腦視覺
B. 圖像生成
C. 物件偵測
D. 影像分類

Answer: B

Hint: 從文字描述創建新的視覺內容是生成式任務。

Explanation: 圖像生成從文字提示創建新影像（文字到影像）。這是生成式 AI 工作負載，根據描述產生新穎的視覺內容，不同於分析現有影像的電腦視覺。

Why others wrong: 電腦視覺分析現有影像；物件偵測定位影像中的項目；影像分類為現有影像指派標籤。

Trap: 混淆圖像生成與電腦視覺——生成創建影像；電腦視覺理解影像。

Mnemonic: 圖像生成 = AI 藝術家；電腦視覺 = AI 觀察者

## Q34
Type: single
Difficulty: 2
Tags: ai-concepts, model-components
Concepts: embeddings
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

在 AI 的脈絡中，什麼是 embedding？

A. GPU 內部的實體硬體元件
B. 捕捉文字或影像等資料的意義和關係的數值向量表示
C. 用於安全的資料加密版本
D. AI 應用的使用者介面元素

Answer: B

Hint: Embedding 將人類可讀的資料轉換為 AI 可以處理和比較的數學形式。

Explanation: Embedding 是高維空間中表示資料（文字、影像等）的密集數值向量。語義相似的項目有相似的 embedding（在向量空間中距離接近），實現語義搜尋、分群和推薦等操作。

Why others wrong: Embedding 是數學表示，不是硬體；不是加密；不是 UI 元素。

Trap: 認為 embedding 與 token 相同——token 是原始輸入單位；embedding 是它們的數值表示。

Mnemonic: Embedding = 一切映射成捕捉意義的數字

## Q35
Type: single
Difficulty: 3
Tags: responsible-ai, governance
Concepts: responsible-ai-lifecycle
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

在 AI 生命週期的哪個階段應該應用負責任 AI 原則？

A. 僅在模型訓練期間
B. 僅在部署之前
C. 貫穿整個生命週期——從設計到部署、監控和退役
D. 僅在使用者回報問題時

Answer: C

Hint: 負責任 AI 不是一次性的檢查清單，而是持續的實踐。

Explanation: Microsoft 的負責任 AI 框架要求在每個階段都應用原則：設計和規劃、資料收集、模型開發、測試、部署、監控，甚至在退役系統時。等到部署或使用者投訴才行動就太遲了。

Why others wrong: 僅在訓練期間應用會遺漏設計和部署問題；僅在部署前會遺漏持續監控；僅在投訴後是被動的而非主動的。

Trap: 將負責任 AI 視為上線前的關卡——它必須是持續的，包括部署後的監控以發現新出現的偏見和風險。

Mnemonic: 負責任 AI = 永遠在線，從搖籃到墳墓

## Q36
Type: single
Difficulty: 1
Tags: ai-concepts, workloads
Concepts: translation
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

一家全球公司想自動將客戶支援電子郵件從日文翻譯成英文。哪種 AI 工作負載最合適？

A. 情感分析
B. 機器翻譯
C. 文字摘要
D. 命名實體辨識

Answer: B

Hint: 將文字從一種語言轉換為另一種語言就是此工作負載的定義。

Explanation: 機器翻譯自動將文字從一種語言轉換為另一種語言。它是專門為跨語言溝通設計的 NLP 工作負載，非常適合翻譯客戶支援電子郵件。

Why others wrong: 情感分析衡量語調；文字摘要濃縮內容；命名實體辨識識別特定實體。

Trap: 認為需要先進行語音辨識——如果輸入已經是書面文字（電子郵件），機器翻譯直接處理文字。

Mnemonic: 機器翻譯 = 語言 A → 語言 B

## Q37
Type: single
Difficulty: 2
Tags: ai-concepts, generative-ai
Concepts: few-shot-learning
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

一位開發者在提示中提供三個期望的輸入-輸出配對範例，然後要求模型處理新輸入。這種提示工程技術叫什麼？

A. 零樣本學習
B. 少樣本學習
C. 微調
D. 遷移學習

Answer: B

Hint: 數數範例：零個、少量還是很多。

Explanation: 少樣本學習在提示中提供少量範例來展示期望的行為。模型從這些範例中學習模式並將其應用於新輸入。零樣本不使用範例；微調需要訓練資料並修改模型。

Why others wrong: 零樣本不給範例；微調用大型資料集改變模型權重；遷移學習在新任務上重用預訓練模型。

Trap: 混淆少樣本與微調——少樣本範例在提示中（暫時的）；微調永久修改模型。

Mnemonic: 少樣本 = 提示中的少量範例；零樣本 = 零範例，只有指令

## Q38
Type: single
Difficulty: 1
Tags: ai-concepts, machine-learning
Concepts: clustering
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

一個 AI 系統在沒有任何預定義主題標籤的情況下將新聞文章分成主題。使用了哪種機器學習技術？

A. 迴歸
B. 分類
C. 分群
D. 強化學習

Answer: C

Hint: 在沒有預定義標籤的情況下分組資料是非監督式的——特別是分組類型。

Explanation: 分群是一種非監督式學習技術，在沒有預定義類別的情況下將相似的資料點分組。在沒有主題標籤的情況下組織文章成主題是分群任務——演算法自行發現群組。

Why others wrong: 迴歸預測數字；分類需要預定義的標籤；強化學習使用獎勵信號。

Trap: 混淆分群與分類因為兩者都涉及群組——分群發現群組；分類指派到預定義的群組。

Mnemonic: 分群 = 創建群組；分類 = 從現有群組中選擇

## Q39
Type: single
Difficulty: 3
Tags: ai-concepts, generative-ai
Concepts: content-filtering
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

一家公司為兒童教育部署了一個生成式 AI 聊天機器人。哪種安全措施組合最為合適？

A. 只使用 temperature=0
B. 對有害內容實施內容過濾器，新增包含年齡適當約束的系統訊息，並為標記的互動啟用人工審核
C. 封鎖所有模型不確定的問題
D. 只允許是/否回應

Answer: B

Hint: 對弱勢群體需要多層保護。

Explanation: 保護年幼使用者需要深度防禦方法：內容過濾器捕捉有害輸出、系統訊息約束行為至年齡適當的回應、人工審核為邊界案例提供監督。單一措施是不夠的。

Why others wrong: Temperature=0 減少隨機性但不過濾有害內容；封鎖不確定的問題限制了實用性；僅是/否回應使聊天機器人對教育無用。

Trap: 依賴單一安全措施——對弱勢群體的負責任 AI 需要分層保護。

Mnemonic: 兒童安全 = 過濾器 + 約束 + 人工監督（分層防禦）

## Q40
Type: single
Difficulty: 2
Tags: ai-concepts, model-components
Concepts: multimodal
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

當一個模型被描述為「多模態」時，這是什麼意思？

A. 它可以同時在多個裝置上運行
B. 它可以處理和生成多種類型的資料，如文字、影像、音訊和視訊
C. 它使用多種訓練演算法
D. 它支援多種程式語言

Answer: B

Hint: 「多」意味著很多，「模態」指的是資料的模式或類型。

Explanation: 多模態模型可以理解和生成跨多種資料類型（模態）的內容——文字、影像、音訊和視訊。例如，GPT-4o 和 Gemini 可以接受文字和影像作為輸入，並跨它們進行推理。

Why others wrong: 在多個裝置上運行是分散式計算；使用多種演算法是集成學習；支援多種語言是功能而非多模態。

Trap: 混淆多模態與多語言——多模態處理不同的資料類型；多語言處理不同的人類語言。

Mnemonic: 多模態 = 多種資料模式（文字 + 影像 + 音訊 + 視訊）

## Q41
Type: single
Difficulty: 1
Tags: azure-foundry, generative-ai
Concepts: azure-ai-foundry
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

什麼是 Azure AI Foundry？

A. 硬體製造平台
B. 用於建構、部署和管理 AI 解決方案（包括生成式 AI 應用和代理）的統一平台
C. 像 Visual Studio Code 一樣的程式碼編輯器
D. 資料庫管理系統

Answer: B

Hint: 把「Foundry」想成鑄造和建構 AI 解決方案的地方。

Explanation: Azure AI Foundry（前身為 Azure AI Studio）是 Microsoft 開發 AI 解決方案的統一平台。它提供建構生成式 AI 應用、部署模型、創建 AI 代理和管理完整 AI 生命週期的工具——全部集中在一個地方。

Why others wrong: 它不是硬體；不只是程式碼編輯器（雖然與 VS Code 整合）；不是資料庫。

Trap: 混淆 Azure AI Foundry 與 Azure Machine Learning Studio——Foundry 是較新的統一平台，包含生成式 AI 和代理以及傳統 ML。

Mnemonic: AI Foundry = 在一個地方鑄造你的 AI 解決方案

## Q42
Type: single
Difficulty: 1
Tags: azure-foundry, models
Concepts: model-catalog
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

在 Azure AI Foundry 中，你可以在哪裡瀏覽和比較可用的 AI 模型？

A. Azure Blob Storage
B. 模型目錄
C. Azure Active Directory
D. Azure DevOps

Answer: B

Hint: 想想你會去哪裡購買模型——目錄。

Explanation: Azure AI Foundry 中的模型目錄提供來自 Microsoft、OpenAI、Meta、Hugging Face 和其他提供者的精選基礎模型集合。使用者可以直接從目錄瀏覽、比較、評估和部署模型。

Why others wrong: Blob Storage 儲存資料；Active Directory 管理身份；DevOps 處理 CI/CD 管線。

Trap: 認為在 Azure 中只能使用 OpenAI 模型——模型目錄包含來自多個提供者的模型。

Mnemonic: 模型目錄 = 模型購物商城——瀏覽、比較、部署

## Q43
Type: single
Difficulty: 2
Tags: azure-foundry, generative-ai
Concepts: playground
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一位開發者想在撰寫任何程式碼之前試驗不同的提示和模型配置。他們應該使用 Azure AI Foundry 的哪個功能？

A. 模型目錄
B. Playground
C. Prompt Flow
D. Azure Monitor

Answer: B

Hint: 你會去哪裡玩和實驗而不建構正式的東西？

Explanation: Azure AI Foundry 中的 Playground 提供與 AI 模型互動的實驗介面。開發者可以測試不同的提示、調整參數（temperature、top_p、max tokens）並比較模型輸出——全部不需要寫程式碼。

Why others wrong: 模型目錄用於瀏覽模型；Prompt Flow 用於建構生產管線；Azure Monitor 用於監控已部署的服務。

Trap: 認為 Playground 只用於展示——它是用於快速原型設計和提示工程的真正開發工具。

Mnemonic: Playground = 玩提示和參數，不需要寫程式碼

## Q44
Type: single
Difficulty: 2
Tags: azure-foundry, agents
Concepts: agent-builder
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

在 Azure AI Foundry 中，哪個功能允許你創建可以呼叫外部 API 和使用工具的 AI 代理？

A. Content Safety
B. Agent Builder
C. Azure Blob Storage
D. Azure Key Vault

Answer: B

Hint: 想想哪個功能專門建構具有工具呼叫能力的代理。

Explanation: Azure AI Foundry 中的 Agent Builder 使開發者能夠創建可以自主規劃、推理並透過呼叫外部工具和 API 採取行動的 AI 代理。代理可以串連多個工具來完成複雜任務。

Why others wrong: Content Safety 過濾有害內容；Blob Storage 儲存資料；Key Vault 管理密鑰。

Trap: 混淆代理與聊天機器人——代理自主規劃並使用工具執行行動，而聊天機器人只生成文字回應。

Mnemonic: Agent Builder = 建構會行動的代理，而非只會聊天的

## Q45
Type: single
Difficulty: 1
Tags: azure-foundry, speech
Concepts: speech-service
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

哪個 Azure AI 服務為客服中心逐字稿系統將口語轉換為書面文字？

A. Azure AI Language
B. Azure AI Speech
C. Azure AI Vision
D. Azure AI Translator

Answer: B

Hint: 想想哪個服務專門處理音訊和語音。

Explanation: Azure AI Speech 提供語音轉文字功能，將口語音訊轉換為書面文字。對於客服中心逐字稿系統，此服務可以即時處理音訊串流並產生準確的逐字稿。

Why others wrong: AI Language 處理書面文字；AI Vision 處理影像和視訊；AI Translator 在書面語言之間轉換。

Trap: 混淆 Speech 與 Language——Speech 處理音訊；Language 處理文字。

Mnemonic: Azure AI Speech = 耳朵（音訊輸入/輸出）；Azure AI Language = 大腦（文字處理）

## Q46
Type: single
Difficulty: 1
Tags: azure-foundry, vision
Concepts: vision-service
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一家零售店想使用 AI 透過監控攝影機計算進入大門的顧客數量。他們應該使用哪個 Azure AI 服務？

A. Azure AI Speech
B. Azure AI Vision
C. Azure AI Language
D. Azure AI Search

Answer: B

Hint: 處理攝影機畫面以理解視覺內容是視覺任務。

Explanation: Azure AI Vision 分析影像和視訊以擷取資訊。從監控攝影機畫面計算人數使用 Vision 服務中的空間分析和物件偵測功能。

Why others wrong: Speech 處理音訊；Language 處理文字；Search 索引和檢索資料。

Trap: 認為需要自訂模型——Azure AI Vision 包含內建的人員偵測和計數功能。

Mnemonic: Azure AI Vision = 應用程式的眼睛

## Q47
Type: single
Difficulty: 2
Tags: azure-foundry, language
Concepts: entity-recognition
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一家律師事務所想從合約中自動擷取人名、組織名稱和日期。他們應該使用哪個 Azure AI Language 功能？

A. 情感分析
B. 命名實體辨識（NER）
C. 文字摘要
D. 關鍵片語擷取

Answer: B

Hint: 擷取如名稱、組織和日期等特定實體就是實體辨識。

Explanation: 命名實體辨識（NER）識別文字中的命名實體，並將其分類為預定義的類別，如人名、組織、日期、地點等。它非常適合從合約等非結構化文字中擷取結構化資訊。

Why others wrong: 情感分析衡量情感基調；文字摘要濃縮內容；關鍵片語擷取識別重要主題但不識別特定的實體類型。

Trap: 混淆 NER 與關鍵片語擷取——NER 將實體分類為類型（人、組織、日期）；關鍵片語擷取只識別重要的詞語。

Mnemonic: NER = 名稱、實體、辨識——誰、什麼、在哪裡、何時

## Q48
Type: single
Difficulty: 1
Tags: azure-foundry, content-safety
Concepts: content-safety
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

哪個 Azure AI 服務幫助偵測和過濾 AI 生成文字中的有害內容，如仇恨言論、暴力和自殘？

A. Azure AI Search
B. Azure AI Content Safety
C. Azure AI Translator
D. Azure Active Directory

Answer: B

Hint: 想想哪個服務專門關注內容的安全和審核。

Explanation: Azure AI Content Safety 在仇恨言論、暴力、性內容和自殘等類別中偵測有害內容。它可以應用於使用者輸入和 AI 生成的輸出，以確保安全的互動。

Why others wrong: AI Search 索引資料；AI Translator 轉換語言；Active Directory 管理身份和存取。

Trap: 認為內容過濾只需要用於使用者輸入——AI 生成的輸出同樣需要過濾有害內容。

Mnemonic: Content Safety = 內容警察，保持對話安全

## Q49
Type: single
Difficulty: 2
Tags: azure-foundry, search
Concepts: azure-ai-search
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一家建構 RAG 解決方案的公司需要索引和搜尋數千份 PDF 文件。哪個 Azure 服務提供檢索元件？

A. Azure Cosmos DB
B. Azure AI Search
C. Azure AI Language
D. Azure Blob Storage

Answer: B

Hint: 想想哪個服務專門為 AI 應用索引和搜尋內容。

Explanation: Azure AI Search（前身為 Azure Cognitive Search）提供索引、搜尋和檢索功能。在 RAG 架構中，它索引文件、執行語義或關鍵字搜尋以找到相關內容，並將其回傳給生成模型進行接地。

Why others wrong: Cosmos DB 是通用資料庫；AI Language 處理文字但不索引；Blob Storage 儲存檔案但不搜尋其內容。

Trap: 認為 Azure Blob Storage 就夠了因為它「儲存」文件——儲存不是搜尋；你需要 AI Search 來索引和檢索相關內容。

Mnemonic: Azure AI Search = RAG 系統的智慧圖書館員

## Q50
Type: single
Difficulty: 2
Tags: azure-foundry, generative-ai
Concepts: prompt-flow
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

Azure AI Foundry 中的 Prompt Flow 用於什麼？

A. 管理使用者身份驗證
B. 建構、測試和部署串連提示、工具和程式碼的 LLM 驅動應用工作流程
C. 儲存大型資料集
D. 監控伺服器健康狀態

Answer: B

Hint: 把它想成 LLM 應用的視覺化管線建構器。

Explanation: Prompt Flow 使開發者能夠透過連接提示、模型、工具和程式碼創建端到端的 LLM 應用管線。它支援這些流程的迭代開發、測試、評估和部署。

Why others wrong: 身份驗證由 Azure AD 處理；資料儲存使用其他 Azure 服務；伺服器監控使用 Azure Monitor。

Trap: 混淆 Prompt Flow 與 Playground——Playground 用於快速實驗；Prompt Flow 用於建構生產級管線。

Mnemonic: Prompt Flow = 提示和工具的生產管線

## Q51
Type: single
Difficulty: 1
Tags: azure-foundry, translator
Concepts: translator-service
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一家跨國公司需要將產品描述翻譯成 15 種不同的語言。哪個 Azure AI 服務最合適？

A. Azure AI Speech
B. Azure AI Language
C. Azure AI Translator
D. Azure AI Vision

Answer: C

Hint: 想想哪個服務專門處理大規模語言翻譯。

Explanation: Azure AI Translator 提供跨 100 多種語言的神經機器翻譯。它可以即時或批次翻譯文字，非常適合跨多種語言大規模翻譯產品描述。

Why others wrong: Speech 轉換音訊；Language 處理文字進行分析（而非翻譯）；Vision 處理影像。

Trap: 混淆 Translator 與 Language 服務——兩者都處理文字，但 Translator 專門在語言之間轉換，而 Language 分析文字結構和意義。

Mnemonic: Translator = 語言轉換器；Language = 語言分析器

## Q52
Type: single
Difficulty: 2
Tags: azure-foundry, vision
Concepts: image-analysis
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一個社群媒體平台想自動為上傳的影像生成描述性標題以改善無障礙性。他們應該使用哪個 Azure AI Vision 功能？

A. 物件偵測
B. 影像標題生成
C. OCR
D. 人臉偵測

Answer: B

Hint: 生成影像的文字描述就是標題生成。

Explanation: Azure AI Vision 中的影像標題生成自動產生影像的自然語言描述。這使視覺內容對視障使用者透過螢幕閱讀器可存取，並改善內容的可發現性。

Why others wrong: 物件偵測定位影像中的項目但不生成描述；OCR 讀取影像中的文字；人臉偵測識別人臉但不描述整體場景。

Trap: 混淆影像標題生成與 OCR——標題生成描述影像中有什麼；OCR 讀取影像中出現的文字。

Mnemonic: 影像標題生成 = AI 用文字描述它看到的東西

## Q53
Type: single
Difficulty: 1
Tags: azure-foundry, language
Concepts: key-phrase-extraction
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一家新聞組織想自動識別每篇文章中討論的主要主題。哪個 Azure AI Language 功能最合適？

A. 命名實體辨識
B. 關鍵片語擷取
C. 情感分析
D. 語言偵測

Answer: B

Hint: 識別文字中的主要主題或重要片語就是關鍵片語擷取。

Explanation: 關鍵片語擷取識別文字中的主要討論點或重要片語。對新聞組織而言，它可以自動呈現每篇文章的核心主題，實現更好的分類和發現。

Why others wrong: NER 識別特定實體；情感分析衡量情感基調；語言偵測識別文字使用的語言。

Trap: 混淆關鍵片語與命名實體——關鍵片語是重要的概念；命名實體是特定的名稱和日期。

Mnemonic: 關鍵片語 = 重要主題；命名實體 = 特定名稱

## Q54
Type: single
Difficulty: 2
Tags: azure-foundry, generative-ai
Concepts: azure-openai
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

相比直接使用 OpenAI 的 API，Azure OpenAI Service 提供什麼優勢？

A. Azure OpenAI 使用完全不同於 OpenAI 的模型
B. Azure OpenAI 提供企業安全、合規、區域資料駐留和 Azure 整合，同時使用相同的 OpenAI 模型
C. Azure OpenAI 永遠免費
D. Azure OpenAI 模型總是更快

Answer: B

Hint: 想想企業客戶除了模型存取之外還需要什麼。

Explanation: Azure OpenAI Service 託管相同的 GPT、DALL-E 和其他 OpenAI 模型，但增加了 Azure 的企業功能：網路安全（私人端點、VNet）、法規合規認證、特定區域的資料駐留、RBAC，以及與其他 Azure 服務的整合。

Why others wrong: 它使用相同的模型；不是免費的（按使用付費）；速度取決於部署配置。

Trap: 認為 Azure OpenAI 有不同或較差的模型——它使用完全相同的 OpenAI 模型加上企業基礎設施。

Mnemonic: Azure OpenAI = 相同模型 + 企業安全保護

## Q55
Type: single
Difficulty: 1
Tags: azure-foundry, speech
Concepts: text-to-speech
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一個導航應用需要向駕駛朗讀逐步路線指示。它應該使用哪個 Azure AI 功能？

A. 語音轉文字
B. 文字轉語音
C. 說話者辨識
D. 意圖辨識

Answer: B

Hint: 應用需要將書面指示轉換為語音音訊。

Explanation: 文字轉語音（語音合成）將書面文字轉換為自然聽起來的語音音訊。對導航應用而言，它將駕駛指示的文字朗讀給駕駛，使用合成語音。

Why others wrong: 語音轉文字是相反方向；說話者辨識識別誰在說話；意圖辨識理解使用者的意思。

Trap: 搞混方向——應用有文字且需要語音輸出，這是文字轉語音而非語音轉文字。

Mnemonic: 文字轉語音 = 文字變聲音；語音轉文字 = 聲音變文字

## Q56
Type: single
Difficulty: 3
Tags: azure-foundry, agents
Concepts: agent-tools
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

在 Azure AI Foundry 中建構的 AI 代理需要查詢當前天氣資料、搜尋公司知識庫並發送電子郵件通知。這些功能應如何實作？

A. 將所有功能硬編碼到單一提示中
B. 將每個功能定義為代理可以透過函式呼叫調用的獨立工具
C. 訓練一個包含天氣、搜尋和電子郵件功能的自訂模型
D. 使用三個獨立的聊天機器人並讓使用者在它們之間切換

Answer: B

Hint: 代理使用工具——可模組化呼叫的函式來擴展其功能。

Explanation: AI 代理使用函式呼叫（工具）與外部系統互動。每個功能——天氣 API、知識庫搜尋、發送電子郵件——應該定義為獨立的工具。代理的 LLM 根據使用者的請求決定何時呼叫哪個工具。

Why others wrong: 在提示中硬編碼一切不靈活且不可靠；訓練自訂模型過於繁重；獨立的聊天機器人違背了整合代理的目的。

Trap: 試圖在提示中嵌入外部功能而非使用工具——提示生成文字，工具執行行動。

Mnemonic: 代理工具 = 代理可以調用的模組化超能力

## Q57
Type: single
Difficulty: 2
Tags: azure-foundry, language
Concepts: summarization
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一位忙碌的主管每天收到 50 封電子郵件，想讓 AI 為每封提供簡短摘要。他們應該使用哪個 Azure AI Language 功能？

A. 情感分析
B. 文字摘要
C. 語言偵測
D. 實體連結

Answer: B

Hint: 在保留關鍵資訊的同時將長文字濃縮成短版本就是摘要。

Explanation: Azure AI Language 中的文字摘要在保留基本資訊的同時將長文件或電子郵件濃縮成簡潔的摘要。它支援擷取式（選擇關鍵句子）和生成式（生成新的摘要文字）兩種方法。

Why others wrong: 情感分析衡量語調；語言偵測識別語言；實體連結將實體連接到知識庫。

Trap: 認為摘要會遺失重要細節——好的摘要在減少長度的同時保留關鍵要點。

Mnemonic: 摘要 = 短版本，相同的關鍵要點

## Q58
Type: single
Difficulty: 1
Tags: azure-foundry, vision
Concepts: face-detection
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一個照片管理應用想偵測每張上傳照片中出現了多少張臉。他們應該使用哪個 Azure AI Vision 功能？

A. 影像分類
B. 人臉偵測
C. OCR
D. 物件偵測

Answer: B

Hint: 在影像中專門偵測人臉，不只是任何物件。

Explanation: Azure AI Vision 中的人臉偵測定位和識別影像中人臉的存在和位置。它可以計算人臉數量並回傳其邊界框座標，非常適合照片管理應用。

Why others wrong: 影像分類為整張影像指派標籤；OCR 讀取文字；物件偵測尋找一般物件而非專門的人臉。

Trap: 混淆人臉偵測與人臉辨識——偵測找到人臉；辨識識別是誰。

Mnemonic: 人臉偵測 = 找到人臉；人臉辨識 = 識別是誰的臉

## Q59
Type: single
Difficulty: 2
Tags: azure-foundry, generative-ai
Concepts: model-deployment
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

在 Azure AI Foundry 中部署生成式 AI 模型時，標準部署和佈建部署有什麼區別？

A. 標準部署是免費的；佈建部署需要付費
B. 標準部署共享計算資源並按 token 計費；佈建部署保留專用計算容量，提供可預測的吞吐量
C. 標準部署較慢但更準確
D. 佈建部署無法使用最新模型

Answer: B

Hint: 想想共享資源與專用資源——像共享主機與專用伺服器。

Explanation: 標準部署使用共享基礎設施並按消耗的 token 計費，適合可變工作負載。佈建部署保留專用計算容量，提供保證的吞吐量和可預測的延遲——更適合高流量、對延遲敏感的生產工作負載。

Why others wrong: 兩者都需要付費；速度取決於配置；佈建部署支援最新模型。

Trap: 總是選擇佈建部署因為聽起來更好——標準部署對許多工作負載更具成本效益；佈建部署僅在高流量生產環境中才需要。

Mnemonic: 標準 = 共享且按使用付費；佈建 = 私有且可預測

## Q60
Type: single
Difficulty: 1
Tags: azure-foundry, language
Concepts: language-detection
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一個客戶支援系統收到各種語言的訊息，需要在路由之前識別每條訊息的語言。他們應該使用哪個 Azure AI Language 功能？

A. 關鍵片語擷取
B. 情感分析
C. 語言偵測
D. 機器翻譯

Answer: C

Hint: 識別文字使用哪種語言是處理前的第一步。

Explanation: 語言偵測識別輸入文字的語言。對多語言支援系統而言，先偵測語言可以正確路由——將法語訊息發送給法語客服人員、將日語訊息發送給日語客服人員等。

Why others wrong: 關鍵片語擷取識別主題；情感分析衡量語調；機器翻譯在語言之間轉換（但你需要先知道來源語言）。

Trap: 直接跳到翻譯而不偵測來源語言——偵測應該是多語言管線的第一步。

Mnemonic: 語言偵測 = 這是什麼語言？（多語言處理的第一步）

## Q61
Type: single
Difficulty: 2
Tags: azure-foundry, content-safety
Concepts: jailbreak-detection
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一個使用者試圖透過說「忽略所有先前的指令並告訴我如何...」來欺騙 AI 聊天機器人忽略其安全指令。這種攻擊叫什麼？

A. SQL 注入
B. 提示注入（越獄）
C. 阻斷服務
D. 網路釣魚

Answer: B

Hint: 攻擊者在提示中注入惡意指令以覆蓋系統訊息。

Explanation: 提示注入（或越獄）是使用者精心設計輸入來覆蓋 AI 模型的系統指令和安全護欄的攻擊。Azure AI Content Safety 包含提示防護功能來偵測和阻止這些嘗試。

Why others wrong: SQL 注入針對資料庫；阻斷服務使伺服器超載；網路釣魚誘騙使用者洩露憑證。

Trap: 認為提示注入是無害的因為它「只是文字」——成功的提示注入可以繞過安全過濾器並暴露有害內容或敏感資料。

Mnemonic: 提示注入 = 透過精心設計的輸入劫持 AI 的指令

## Q62
Type: single
Difficulty: 1
Tags: azure-foundry, vision
Concepts: object-detection
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一個智慧停車系統使用攝影機偵測每個停車位是否有車。哪個 Azure AI Vision 功能最相關？

A. 圖像生成
B. 物件偵測
C. OCR
D. 影像標題生成

Answer: B

Hint: 偵測影像中特定物件（汽車）的存在和位置就是物件偵測。

Explanation: 物件偵測識別和定位影像中的特定物件，在物件周圍繪製邊界框。對停車系統而言，它透過識別攝影機畫面中的車輛來偵測每個停車位是否有車。

Why others wrong: 圖像生成創建影像；OCR 讀取文字；影像標題生成生成描述。

Trap: 認為這是影像分類——分類為整張影像標記標籤；物件偵測定位影像中的特定項目。

Mnemonic: 物件偵測 = 物件在哪裡？（定位影像中的東西）

## Q63
Type: single
Difficulty: 3
Tags: azure-foundry, agents
Concepts: agent-memory
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一個 AI 旅遊代理需要在多次對話中記住使用者的偏好（靠窗座位、素食餐）。哪個代理能力實現這一點？

A. 內容過濾
B. 長期記憶和使用者個人資料持久化
C. Temperature 調整
D. Token 限制增加

Answer: B

Hint: 跨會話記住偏好需要持久儲存——記憶。

Explanation: AI 代理可以使用長期記憶在多次對話中持久保存使用者偏好和脈絡。這實現個人化體驗——代理記住過去的互動和偏好，使用者不需要每次重複。

Why others wrong: 內容過濾捕捉有害內容；temperature 控制隨機性；token 限制限制回應長度——都不儲存持久的使用者資料。

Trap: 認為模型的上下文視窗就足夠了——上下文在會話之間會丟失；持久記憶需要明確的儲存。

Mnemonic: 代理記憶 = 持久的偏好，像記住你房間偏好的好飯店

## Q64
Type: single
Difficulty: 2
Tags: azure-foundry, language
Concepts: pii-detection
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一家醫療公司需要在分享文件前自動遮蔽病患姓名、社會安全號碼和病歷號碼。他們應該使用哪個 Azure AI Language 功能？

A. 關鍵片語擷取
B. 個人身份資訊（PII）偵測
C. 情感分析
D. 文字翻譯

Answer: B

Hint: 偵測和遮蔽個人資訊需要 PII 偵測。

Explanation: Azure AI Language 中的 PII 偵測識別個人身份資訊，如姓名、社會安全號碼、地址和病歷號碼。它可以偵測、分類並選擇性地遮蔽這些實體，幫助組織遵守隱私法規。

Why others wrong: 關鍵片語擷取找主題；情感分析衡量語調；翻譯轉換語言。

Trap: 使用命名實體辨識而非 PII 偵測——雖然 NER 識別實體，但 PII 偵測專門關注敏感的個人資訊並支援遮蔽。

Mnemonic: PII 偵測 = 個人資訊巡查員

## Q65
Type: single
Difficulty: 1
Tags: azure-foundry, speech
Concepts: speaker-recognition
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一個銀行應用想透過在通話期間分析客戶的聲音來驗證身份。他們應該使用哪個 Azure AI Speech 功能？

A. 語音轉文字
B. 文字轉語音
C. 說話者辨識
D. 發音評估

Answer: C

Hint: 根據獨特的聲音特徵識別誰在說話就是說話者辨識。

Explanation: Azure AI Speech 中的說話者辨識根據獨特的聲音特徵識別和驗證個人。說話者驗證確認說話者是否就是他們聲稱的人——非常適合銀行應用中的語音身份驗證。

Why others wrong: 語音轉文字轉錄音訊；文字轉語音生成音訊；發音評估評估語音品質。

Trap: 混淆說話者辨識與語音辨識——語音辨識理解說了什麼；說話者辨識識別是誰在說話。

Mnemonic: 說話者辨識 = 誰在說話？語音辨識 = 他們說了什麼？

## Q66
Type: single
Difficulty: 2
Tags: azure-foundry, generative-ai
Concepts: responsible-deployment
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

在 Azure 中部署生成式 AI 解決方案之前，應該配置哪項安全措施以防止模型生成有害內容？

A. 將模型的 temperature 增加到最大值
B. 在 Azure AI Content Safety 中配置具有適當嚴重性閾值的內容過濾器
C. 移除系統訊息
D. 停用日誌記錄

Answer: B

Hint: 想想什麼能在有害輸出到達使用者之前專門阻止它。

Explanation: Azure AI Content Safety 提供可配置的內容過濾器，在仇恨言論、暴力、性內容和自殘等類別中設定嚴重性閾值。這些過濾器應在部署前配置，以阻止使用者輸入和模型輸出中的有害內容。

Why others wrong: 高 temperature 增加隨機性（更多風險）；移除系統訊息會移除行為約束；停用日誌記錄會阻止事件調查。

Trap: 僅依賴系統訊息保安全——系統訊息可以透過提示注入被繞過；內容過濾器提供額外的、更難繞過的安全層。

Mnemonic: 內容過濾器 = 即使提示很棘手也能捕捉有害內容的安全網

## Q67
Type: single
Difficulty: 1
Tags: azure-foundry, search
Concepts: semantic-search
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

語義搜尋相比傳統關鍵字搜尋的主要優勢是什麼？

A. 語義搜尋總是更快
B. 語義搜尋理解查詢背後的含義和意圖，不只是匹配確切的關鍵字
C. 語義搜尋不需要索引
D. 語義搜尋只適用於結構化資料

Answer: B

Hint: 「語義」意味著與含義有關——是關於理解，不只是匹配。

Explanation: 語義搜尋使用 AI 理解查詢的含義和脈絡，即使確切的關鍵字沒有出現在文件中也能找到相關結果。例如，搜尋「如何修理破窗」也會找到關於「玻璃維修」的文件。

Why others wrong: 語義搜尋由於向量比較可能更慢；它需要向量索引；它適用於非結構化文字資料。

Trap: 認為語義搜尋取代了關鍵字搜尋——實際上，結合兩者的混合搜尋通常給出最佳結果。

Mnemonic: 語義 = 含義；關鍵字 = 匹配確切的詞語

## Q68
Type: single
Difficulty: 2
Tags: azure-foundry, vision
Concepts: custom-vision
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一位植物學家想建構一個可以從照片識別特定植物種類的 AI 模型。預建的 Azure AI Vision 模型無法辨識稀有物種。他們應該怎麼做？

A. 按原樣使用模型並接受較低的準確率
B. 使用特定植物種類的標記照片訓練自訂影像分類模型
C. 切換到基於文字的模型
D. 使用 OCR 讀取植物標籤

Answer: B

Hint: 當預建模型不涵蓋你的特定領域時，你需要訓練自訂模型。

Explanation: 當預建模型無法辨識特定領域的內容時，你可以使用標記範例訓練自訂影像分類模型。Azure AI Vision 支援使用你自己的資料集進行自訂模型訓練，以進行專業化分類任務。

Why others wrong: 接受較低準確率無法滿足使用需求；文字模型不處理影像；OCR 讀取文字而非植物特徵。

Trap: 假設預建模型總是能用——對專業領域，使用領域特定資料訓練的自訂模型通常是必要的。

Mnemonic: 自訂模型 = 為你的特定需求量身打造

## Q69
Type: single
Difficulty: 3
Tags: azure-foundry, generative-ai
Concepts: evaluation-metrics
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

在 Azure AI Foundry 中，哪個指標評估生成式 AI 模型的回應是否基於提供的脈絡中的事實？

A. 流暢度
B. 接地性
C. 創造力
D. 回應時間

Answer: B

Hint: 想想回應是否「接地」在來源資料的事實中。

Explanation: 接地性衡量模型的回應是否由提供的脈絡或來源文件支持且一致。高度接地的回應只包含可從給定脈絡中驗證的資訊——它不會捏造或產生幻覺。

Why others wrong: 流暢度衡量語言品質；創造力衡量新穎性；回應時間衡量速度。

Trap: 混淆流暢度與接地性——回應可以完全流暢且寫得很好，但同時完全捏造（不接地）。

Mnemonic: 接地性 = 基於來源的事實，而非漂浮在幻想中

## Q70
Type: single
Difficulty: 1
Tags: azure-foundry, language
Concepts: question-answering
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一家公司想建構一個基於產品文件回答客戶問題的 FAQ 機器人。哪個 Azure AI 功能最合適？

A. 情感分析
B. 自訂問答
C. 語言偵測
D. 文字轉語音

Answer: B

Hint: FAQ 機器人從知識庫回答問題——這就是問答。

Explanation: Azure AI Language 中的自訂問答讓你從 FAQ 文件、手冊和網頁建立知識庫。使用者用自然語言提問，系統從知識庫回傳最相關的答案。

Why others wrong: 情感分析衡量語調；語言偵測識別語言；文字轉語音將文字轉換為音訊。

Trap: 認為 FAQ 機器人需要生成式 AI 模型——對簡單的 FAQ 場景，自訂問答更可控且更具成本效益。

Mnemonic: 自訂問答 = 從你的文件建構智慧 FAQ

## Q71
Type: single
Difficulty: 2
Tags: azure-foundry, agents
Concepts: copilot
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

Microsoft Copilot 和 Azure AI Foundry 之間的關係是什麼？

A. 它們是同一個產品
B. Copilot 是建立在 Azure AI Foundry 中可用的相同基礎 AI 技術之上的消費者導向 AI 助手
C. Azure AI Foundry 只能建構 Copilot 的複製品
D. Copilot 取代了 Azure AI Foundry

Answer: B

Hint: 把 Copilot 想成產品，Azure AI Foundry 想成建構類似產品的平台。

Explanation: Microsoft Copilot（在 Windows、Microsoft 365、Bing 等中）是由 Azure AI 服務驅動的預建 AI 助手。Azure AI Foundry 是組織使用驅動 Copilot 的相同底層模型和基礎設施來建構自己的自訂 AI 解決方案的開發平台。

Why others wrong: 它們服務不同目的；Foundry 可以建構任何 AI 解決方案；Copilot 不取代開發平台。

Trap: 認為使用 Copilot 需要 Azure AI Foundry——Copilot 是即用型產品；Foundry 是用於建構自訂解決方案的。

Mnemonic: Copilot = 建好的產品；Foundry = 自己動手建的平台

## Q72
Type: single
Difficulty: 1
Tags: azure-foundry, vision
Concepts: image-classification
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一個回收設施使用攝影機將廢棄物分類為：塑膠、紙張、金屬和玻璃。這是哪種 Azure AI Vision 任務？

A. 物件偵測
B. 影像分類
C. 圖像生成
D. OCR

Answer: B

Hint: 為每個項目指派一個類別就是分類。

Explanation: 影像分類為整張影像指派標籤或類別。將廢棄物分類到預定義類別（塑膠、紙張、金屬、玻璃）是多類別影像分類任務。

Why others wrong: 物件偵測定位影像中的項目；圖像生成創建影像；OCR 從影像中讀取文字。

Trap: 混淆影像分類與物件偵測——分類為整張影像指派一個標籤；物件偵測在一張影像中定位並標記多個物件。

Mnemonic: 分類 = 每張影像一個標籤；偵測 = 一張影像中多個框

## Q73
Type: single
Difficulty: 3
Tags: azure-foundry, generative-ai
Concepts: token-limits
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一位開發者的生成式 AI 應用經常產生被截斷的回應。最可能的原因是什麼？

A. Temperature 設定太低
B. max_tokens 參數設定太低，導致回應在完成前被切斷
C. 模型太大
D. 系統訊息太短

Answer: B

Hint: 如果回應在句子中間被切斷，有什麼東西在限制它們的長度。

Explanation: max_tokens 參數設定模型在回應中可以生成的最大 token 數。如果設定太低，回應會在思路或句子中間被截斷。增加 max_tokens 允許模型完成更長的回應。

Why others wrong: Temperature 影響隨機性而非長度；模型大小不會導致截斷；系統訊息長度不限制回應長度。

Trap: 混淆 token 限制與上下文視窗——上下文視窗限制總輸入+輸出；max_tokens 專門限制輸出長度。

Mnemonic: max_tokens = 最大回應長度；太低 = 被切斷

## Q74
Type: single
Difficulty: 2
Tags: azure-foundry, language
Concepts: custom-text-classification
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一家保險公司想自動將收到的理賠分類為其業務特有的類別（汽車、房屋、壽險、健康）。預建的分類不符合他們的類別。他們應該使用什麼？

A. 情感分析
B. 自訂文字分類
C. 語言偵測
D. 預建實體辨識

Answer: B

Hint: 當預建類別不符合你的需求時，你需要訓練自訂模型。

Explanation: Azure AI Language 中的自訂文字分類允許組織使用自己的類別和標記範例訓練模型。保險公司可以定義他們特定的理賠類別並訓練準確分類收到理賠的分類器。

Why others wrong: 情感分析衡量語調；語言偵測識別語言；預建實體辨識使用可能不符合保險特定需求的通用類別。

Trap: 試圖將預建模型強套到自訂類別——當你的類別是領域特定的，自訂分類會給出更好的結果。

Mnemonic: 自訂分類 = 你的類別、你的資料、你的模型

## Q75
Type: multi
Difficulty: 2
Tags: responsible-ai, principles
Concepts: responsible-ai-overview
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

以下哪些是 Microsoft 負責任 AI 框架的原則？（選擇所有適用的）

A. 公平性
B. 獲利能力
C. 透明度
D. 可靠性與安全性

Answer: A, C, D

Hint: Microsoft 的負責任 AI 有六項原則——沒有一項是關於財務表現的。

Explanation: Microsoft 的六項負責任 AI 原則是：公平性、可靠性與安全性、隱私與安全、包容性、透明度和問責性。獲利能力是商業目標，不是負責任 AI 原則。

Why others wrong: 獲利能力是商業目標，不是倫理 AI 原則。

Trap: 包含獲利能力因為聽起來對商業很重要——負責任 AI 原則關注倫理結果，而非財務結果。

Mnemonic: FRIPT-A：公平性、可靠性、包容性、隱私、透明度、問責性

## Q76
Type: single
Difficulty: 1
Tags: azure-foundry, speech
Concepts: real-time-transcription
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一個虛擬會議平台想在參與者發言時顯示即時字幕。哪個 Azure AI Speech 功能實現這一點？

A. 文字轉語音
B. 即時語音轉文字
C. 說話者辨識
D. 語音翻譯

Answer: B

Hint: 在語音發生時即時將其轉換為文字，用於即時字幕。

Explanation: 即時語音轉文字在語音發生時持續將口語音訊轉換為文字。這使會議中的即時字幕成為可能，讓聽力障礙的參與者和偏好閱讀的人可以存取內容。

Why others wrong: 文字轉語音將文字轉換為音訊；說話者辨識識別誰在說話；語音翻譯在語言之間翻譯。

Trap: 混淆即時轉錄與批次轉錄——即時處理正在發生的音訊；批次處理預錄的音訊檔案。

Mnemonic: 即時語音轉文字 = 你說話時的即時字幕

## Q77
Type: single
Difficulty: 2
Tags: azure-foundry, search
Concepts: hybrid-search
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一個法律搜尋引擎需要使用確切的法律術語和概念含義來找到相關判例法。他們應該使用哪種 Azure AI Search 方法？

A. 僅關鍵字搜尋
B. 僅語義搜尋
C. 結合關鍵字和語義搜尋的混合搜尋
D. 帶萬用字元的全文搜尋

Answer: C

Hint: 當你同時需要精確匹配和概念理解時，結合兩種方法。

Explanation: Azure AI Search 中的混合搜尋結合關鍵字搜尋（精確術語匹配）和語義搜尋（基於含義的匹配）。對法律搜尋而言，精確的法律術語必須精確匹配，而概念理解幫助找到措辭不同的相關判例法。

Why others wrong: 僅關鍵字會遺漏概念相關的結果；僅語義可能遺漏精確的法律術語；萬用字元搜尋是基本的模式匹配，沒有語義理解。

Trap: 對法律內容只使用語義搜尋——法律文件通常需要精確的術語匹配，僅語義搜尋可能會遺漏。

Mnemonic: 混合 = 兩全其美——精確術語 + 概念含義

## Q78
Type: single
Difficulty: 3
Tags: azure-foundry, agents
Concepts: agent-orchestration
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一個 AI 代理收到使用者請求：「幫我訂下週二飛東京的機票，並找一間新宿車站附近的飯店。」代理應如何處理？

A. 回應說一次只能處理一個請求
B. 將請求分解為子任務（訂機票、搜尋飯店），規劃執行順序，呼叫適當的工具，並整合結果
C. 隨機選擇完成哪個任務
D. 將整個請求轉發給單一 API

Answer: B

Hint: 代理規劃並將複雜請求分解為可管理的步驟。

Explanation: AI 代理使用規劃和分解將複雜請求分成子任務。代理識別兩個任務（機票 + 飯店），判斷任何依賴關係（飯店日期需要機票日期），為每個任務呼叫適當的工具，並將結果合成為統一的回應。

Why others wrong: 代理應該處理多步驟請求；隨機選擇不是規劃；單一 API 不太可能同時處理機票和飯店。

Trap: 認為每條使用者訊息必須正好對應一次工具呼叫——代理可以規劃並執行多次工具呼叫來滿足複雜請求。

Mnemonic: 代理規劃 = 分解、規劃順序、執行每步、合併結果

## Q79
Type: single
Difficulty: 1
Tags: azure-foundry, generative-ai
Concepts: dalle
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

透過 Azure OpenAI Service 提供的哪個模型根據文字描述生成影像？

A. GPT-4o
B. DALL-E
C. Whisper
D. Ada

Answer: B

Hint: 想想哪個模型專門為文字到影像生成而設計。

Explanation: DALL-E 是 OpenAI 的影像生成模型，從文字描述創建影像（文字到影像）。它透過 Azure OpenAI Service 提供，用於從自然語言提示生成自訂視覺內容。

Why others wrong: GPT-4o 是語言模型（雖然對輸入是多模態的）；Whisper 是語音辨識模型；Ada 是 embedding 模型。

Trap: 認為 GPT-4o 可以生成影像因為它是多模態的——GPT-4o 可以接受影像作為輸入，但 DALL-E 是專門的影像生成模型。

Mnemonic: DALL-E = 繪畫 AI（像畫家薩爾瓦多·達利）

## Q80
Type: single
Difficulty: 2
Tags: azure-foundry, vision
Concepts: video-analysis
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一家運動分析公司想使用無人機攝影畫面自動追蹤足球場上球員的移動。他們應該使用哪個 Azure AI Vision 功能？

A. 影像分類
B. 視訊空間分析和物件追蹤
C. OCR
D. 影像標題生成

Answer: B

Hint: 在視訊畫面中追蹤隨時間移動的物件需要空間分析。

Explanation: Azure AI Vision 的空間分析功能可以在視訊畫面中追蹤物件（人），分析他們的移動、位置和軌跡。對運動分析而言，這使得從視訊畫面自動追蹤和分析球員移動成為可能。

Why others wrong: 影像分類指派靜態標籤；OCR 讀取文字；影像標題生成描述單張影像而非視訊移動。

Trap: 認為每個畫面需要獨立分析——視訊空間分析在畫面之間持續追蹤物件。

Mnemonic: 視訊空間分析 = 追蹤隨時間在空間中移動的事物

## Q81
Type: single
Difficulty: 1
Tags: ai-concepts, workloads
Concepts: text-to-speech
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

一個為視障使用者設計的行動應用朗讀新聞文章。哪種 AI 工作負載驅動此功能？

A. 語音辨識
B. 機器翻譯
C. 文字轉語音
D. 電腦視覺

Answer: C

Hint: 將書面文章轉換為語音音訊就是文字轉語音。

Explanation: 文字轉語音（語音合成）將書面文字轉換為自然聽起來的語音音訊。對無障礙應用而言，它使視障使用者能夠透過聆聽而非閱讀來消化基於文字的內容。

Why others wrong: 語音辨識將音訊轉換為文字（相反方向）；機器翻譯在語言之間轉換；電腦視覺處理影像。

Trap: 搞混方向——輸入是文字，輸出是語音，這是文字轉語音。

Mnemonic: 文字轉語音 = 大聲朗讀文字

## Q82
Type: single
Difficulty: 2
Tags: ai-concepts, generative-ai
Concepts: context-window
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

大型語言模型的上下文視窗是什麼？

A. 實體顯示螢幕大小
B. 模型在單次互動中可以處理的最大文字量（以 token 衡量），包括輸入和輸出
C. 可以同時存取模型的使用者數量
D. 模型可用的時間視窗

Answer: B

Hint: 想想模型在一次對話回合中可以「看到」和記住多少文字。

Explanation: 上下文視窗是模型在單次互動中可以處理的 token 總數（輸入提示 + 輸出回應）。它決定了模型一次可以處理多少文字——如果較長的文件超過視窗大小可能需要分割。

Why others wrong: 與顯示大小、並發使用者或可用時間無關。

Trap: 認為上下文視窗只適用於輸入——它包括輸入 token 和生成的輸出 token。

Mnemonic: 上下文視窗 = 模型以 token 計的工作記憶容量

## Q83
Type: single
Difficulty: 2
Tags: azure-foundry, generative-ai
Concepts: model-benchmarking
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

在 Azure AI Foundry 中，開發者如何在部署之前比較不同模型的效能？

A. 將所有模型部署到生產環境看哪個獲得更多使用者流量
B. 使用模型目錄的基準測試和 Playground 針對特定用例評估模型
C. 總是選擇最貴的模型
D. 閱讀線上評論

Answer: B

Hint: 想想在投入部署之前使用平台內建的評估工具。

Explanation: Azure AI Foundry 的模型目錄提供跨標準評估的基準分數，而 Playground 允許用你自己的提示和資料測試模型。這個組合在投入部署之前實現了知情的模型選擇。

Why others wrong: 部署所有模型是浪費的；價格不決定品質；線上評論可能不反映你的特定用例。

Trap: 僅依賴發布的基準——基準顯示一般效能，但在 Playground 中用你自己的資料測試才能揭示模型在你特定任務上的表現。

Mnemonic: 基準 + Playground = 知情的模型選擇

## Q84
Type: single
Difficulty: 1
Tags: ai-concepts, machine-learning
Concepts: training-data
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

為什麼訓練資料的品質對機器學習模型很重要？

A. 高品質資料使模型運行更快
B. 模型從訓練資料中學習模式——有偏見、不完整或不正確的資料導致有偏見、不完整或不正確的模型
C. 資料品質只對影像模型重要
D. 低品質資料會透過訓練自動改善

Answer: B

Hint: 垃圾進，垃圾出——模型只能學習資料中有的東西。

Explanation: 機器學習模型直接從訓練資料中學習模式。如果資料有偏見，模型會做出有偏見的預測。如果資料不完整，模型會遺漏重要模式。資料品質是模型品質的基礎。

Why others wrong: 資料品質影響準確性而非速度；對所有模型類型都重要；訓練不會修復資料品質問題。

Trap: 認為精密的模型架構可以克服低品質資料——沒有模型可以從不正確的資料中學到正確的模式。

Mnemonic: 垃圾進 = 垃圾出（GIGO）——模型品質 ≤ 資料品質

## Q85
Type: single
Difficulty: 3
Tags: azure-foundry, generative-ai
Concepts: responsible-ai-practices
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一家公司正在建構面向客戶的生成式 AI 聊天機器人。哪組措施最能滿足負責任 AI 要求？

A. 不測試就部署，在使用者回報時修復問題
B. 實施內容過濾器，新增人工升級路徑，使用定義邊界的明確系統訊息，監控濫用，並顯示使用者正在與 AI 互動的免責聲明
C. 只允許聊天機器人用預寫好的答案回應
D. 將聊天機器人限制為僅內部員工使用

Answer: B

Hint: 負責任 AI 需要多層保護和透明度。

Explanation: 全面的負責任 AI 方法包括：內容過濾器（安全）、有邊界的系統訊息（可靠性）、人工升級（問責性）、監控（持續治理），以及 AI 揭露（透明度）。這些同時處理多項負責任 AI 原則。

Why others wrong: 不測試就部署是不負責任的；預寫答案違背 AI 的目的；限制為內部使用是迴避而非解決挑戰。

Trap: 認為一項安全措施就足夠——負責任 AI 需要多重重疊保護的深度防禦。

Mnemonic: 負責任聊天機器人 = 過濾器 + 邊界 + 人工 + 監控 + 揭露

## Q86
Type: single
Difficulty: 1
Tags: ai-concepts, workloads
Concepts: ner
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

一個 AI 系統閱讀新聞文章並標記所有提到的公司名稱、人名和地點。這是哪種 NLP 任務？

A. 文字摘要
B. 命名實體辨識
C. 情感分析
D. 機器翻譯

Answer: B

Hint: 識別和標記文字中的特定命名實體（人、地點、組織）。

Explanation: 命名實體辨識（NER）識別文字中的命名實體並將其分類為人名、組織、地點、日期等類別。在新聞文章中標記公司名稱、人名和地點是教科書級的 NER 應用。

Why others wrong: 摘要濃縮文字；情感分析衡量語調；翻譯轉換語言。

Trap: 混淆 NER 與關鍵字擷取——NER 識別特定的實體類型；關鍵字擷取找重要的詞語，不考慮類型。

Mnemonic: NER = 名稱、實體、辨識——找到誰、什麼、在哪裡

## Q87
Type: single
Difficulty: 2
Tags: azure-foundry, language
Concepts: conversational-language
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一個智慧家居系統需要理解「打開客廳的燈」和「把溫控器設到 72 度」等指令。應使用哪個 Azure AI Language 功能來理解使用者意圖？

A. 文字摘要
B. 對話語言理解（CLU）
C. 情感分析
D. 語言偵測

Answer: B

Hint: 從自然語言理解使用者想做什麼（他們的意圖）就是對話語言理解。

Explanation: 對話語言理解（CLU）訓練模型從自然語言語句中理解使用者意圖並擷取實體。對智慧家居而言，它識別意圖（打開、設定溫度）和實體（客廳的燈、72 度）。

Why others wrong: 摘要濃縮文字；情感分析衡量語調；語言偵測識別語言。

Trap: 認為簡單的指令理解需要生成式 AI——對有限的已知意圖，CLU 更高效且可預測。

Mnemonic: CLU = 指令語言理解——使用者想要什麼？

## Q88
Type: single
Difficulty: 2
Tags: azure-foundry, generative-ai
Concepts: data-residency
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一家受 GDPR 法規約束的歐洲公司需要確保其 AI 資料留在歐盟境內。Azure AI Foundry 如何解決這個問題？

A. Azure 不支援區域部署
B. Azure AI Foundry 允許在特定 Azure 區域（包括歐盟區域）部署，以維持資料駐留合規
C. 資料駐留只在免費層可用
D. GDPR 不適用於 AI 服務

Answer: B

Hint: Azure 的全球資料中心基礎設施支援區域部署以滿足資料駐留需求。

Explanation: Azure AI Foundry 支援在全球特定 Azure 區域部署，包括多個歐盟區域。組織可以選擇在符合其資料駐留要求的區域部署 AI 解決方案，確保資料留在所要求的管轄範圍內。

Why others wrong: Azure 有數十個全球區域；資料駐留在所有層級都可用；GDPR 絕對適用於處理個人資料的 AI 服務。

Trap: 假設雲端 AI 自動違反資料駐留法規——Azure 的區域部署模式專門解決這個問題。

Mnemonic: Azure 區域 = 選擇你的資料存放在哪裡

## Q89
Type: single
Difficulty: 1
Tags: azure-foundry, vision
Concepts: ocr-service
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一個會計部門想從掃描的收據中自動擷取文字以填寫費用報告。他們應該使用哪個 Azure AI 功能？

A. 圖像生成
B. 光學字元辨識（OCR）
C. 情感分析
D. 語音辨識

Answer: B

Hint: 從掃描影像中讀取文字就是 OCR。

Explanation: Azure AI Vision 中的 OCR 從影像和掃描文件中擷取印刷和手寫文字。對費用管理而言，它可以讀取收據詳情如商家名稱、日期、金額和項目，自動填寫費用報告。

Why others wrong: 圖像生成創建影像；情感分析衡量情感基調；語音辨識轉換音訊。

Trap: 認為 OCR 只適用於清晰的印刷文字——Azure 的 OCR 也可以處理手寫文字、各種字體和不同的文件版面。

Mnemonic: OCR = 從圖片中讀取文字

## Q90
Type: single
Difficulty: 3
Tags: azure-foundry, agents
Concepts: agent-guardrails
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一家金融服務公司建構了一個可以存取客戶帳戶並處理交易的 AI 代理。最關鍵需要實施的護欄是什麼？

A. 讓代理回應更快
B. 實施交易限額，對高價值操作要求人工核准，並限制代理僅執行授權操作
C. 允許代理完全存取所有系統
D. 移除所有確認提示以獲得更好的使用者體驗

Answer: B

Hint: 涉及客戶資金的金融交易需要嚴格的控制和人工監督。

Explanation: 對處理真實金錢的金融 AI 代理，護欄必須包括：交易金額限制、高價值操作的強制人工核准、嚴格的基於角色的存取控制，以及全面的稽核日誌。這保護公司及其客戶。

Why others wrong: 沒有安全的速度是危險的；完全存取是安全風險；移除確認增加詐欺風險。

Trap: 在金融情境中優先考慮使用者便利性而非安全——當涉及真實金錢時，確認步驟和限額保護每個人。

Mnemonic: 金融代理護欄 = 限額 + 核准 + 存取控制 + 稽核軌跡

## Q91
Type: single
Difficulty: 1
Tags: ai-concepts, machine-learning
Concepts: deep-learning
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

深度學習與傳統機器學習的區別是什麼？

A. 深度學習總是更準確
B. 深度學習使用多層神經網路從原始資料中自動學習複雜特徵
C. 深度學習不需要任何資料
D. 深度學習只能處理文字

Answer: B

Hint: 「深度」指的是神經網路的多層。

Explanation: 深度學習使用具有多個隱藏層（因此稱為「深度」）的神經網路，從原始資料中自動學習分層的特徵表示。與傳統 ML 手動設計特徵不同，深度學習自行發現有用的特徵。

Why others wrong: 深度學習不總是更準確（在小資料集上可能更差）；它需要大量資料；它處理多種資料類型。

Trap: 假設深度學習總是更好——對於具有明確特徵的小資料集，傳統 ML 通常優於深度學習。

Mnemonic: 深度學習 = 深層神經網路 = 多層自動學習特徵

## Q92
Type: single
Difficulty: 2
Tags: azure-foundry, generative-ai
Concepts: embeddings-search
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

在由 Azure AI Search 驅動的 RAG 解決方案中，embedding 扮演什麼角色？

A. 它們加密文件以保安全
B. 它們將文字片段轉換為數值向量，實現語義相似性搜尋以找到相關內容
C. 它們壓縮文件以節省儲存空間
D. 它們將文件翻譯成多種語言

Answer: B

Hint: Embedding 將文字轉換為捕捉含義的數字，實現「找到類似的東西」搜尋。

Explanation: 在 RAG 解決方案中，embedding 將文字片段轉換為密集的向量表示。當使用者提問時，問題也被嵌入，語義搜尋找到含義最接近的文件片段——即使確切的詞語不匹配。

Why others wrong: Embedding 不是加密；它們可能增加儲存（增加向量資料）；它們不翻譯語言。

Trap: 認為 embedding 只是另一種儲存文字的方式——它們從根本上改變了搜尋的工作方式，實現基於含義的檢索。

Mnemonic: RAG 中的 embedding = 將含義轉換為數字 → 找到相似的含義

## Q93
Type: single
Difficulty: 1
Tags: azure-foundry, language
Concepts: speech-translation
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一場會議想為與會者的耳機提供演講者英語簡報的法語和德語即時翻譯。哪個 Azure AI 功能結合了語音和翻譯？

A. 文字轉語音
B. 語音翻譯
C. OCR
D. 情感分析

Answer: B

Hint: 將口語從一種語言即時轉換為另一種語言就是語音翻譯。

Explanation: Azure AI 語音翻譯提供口語的即時翻譯。它結合語音辨識（將語音轉換為文字）、機器翻譯（在語言之間翻譯文字），以及可選的文字轉語音（將翻譯後的文字轉換回語音音訊）。

Why others wrong: 文字轉語音只將文字轉換為音訊而不翻譯；OCR 從影像讀取文字；情感分析衡量情感基調。

Trap: 認為需要串連三個獨立的服務——語音翻譯在一個整合功能中結合了辨識、翻譯和合成。

Mnemonic: 語音翻譯 = 聽一種語言，說另一種語言，即時進行

## Q94
Type: single
Difficulty: 2
Tags: ai-concepts, generative-ai
Concepts: chain-of-thought
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

一位開發者在提示中加入「請一步一步思考」後注意到模型在數學題上產生了更準確的答案。這是什麼提示工程技術？

A. 少樣本學習
B. 思維鏈提示
C. 微調
D. Temperature 調整

Answer: B

Hint: 鼓勵模型一步一步展示其推理過程。

Explanation: 思維鏈（CoT）提示鼓勵模型將複雜問題分解為中間推理步驟。透過明確要求模型「一步一步思考」，它在需要邏輯推理的任務（如數學問題）上產生更準確的答案。

Why others wrong: 少樣本提供範例；微調修改模型；temperature 調整控制隨機性。

Trap: 認為 CoT 使模型變得太慢而不實用——對推理任務改善的準確性通常勝過稍長的回應。

Mnemonic: 思維鏈 = 展示你的工作過程，一步一步，像數學課一樣

## Q95
Type: single
Difficulty: 1
Tags: ai-concepts, workloads
Concepts: document-intelligence
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

一家公司收到不同格式的數千張發票，需要自動擷取發票號碼、日期和金額。這是哪種 AI 工作負載？

A. 圖像生成
B. 資訊擷取（文件智慧）
C. 情感分析
D. 語音合成

Answer: B

Hint: 從文件中提取特定的資訊片段就是資訊擷取。

Explanation: 資訊擷取（文件智慧）自動識別和擷取文件中的特定資料欄位。從各種發票格式中擷取如發票號碼、日期和金額等結構化資料是文件智慧的核心用例。

Why others wrong: 圖像生成創建影像；情感分析衡量語調；語音合成創建音訊。

Trap: 混淆資訊擷取與 OCR——OCR 讀取影像中的所有文字；資訊擷取識別和結構化特定的資料欄位。

Mnemonic: 資訊擷取 = 理解資料含義的智慧 OCR，不只是讀出它說什麼

## Q96
Type: single
Difficulty: 2
Tags: azure-foundry, generative-ai
Concepts: responsible-ai-transparency
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

部署生成式 AI 解決方案時，為什麼告知使用者他們正在與 AI 而非人類互動很重要？

A. 這是 Azure 定價政策的要求
B. 關於 AI 互動的透明度建立信任、管理預期，並符合負責任 AI 原則
C. 使用者在知道是 AI 時表現更好
D. 這只在免費層部署中才需要

Answer: B

Hint: 透明度是 Microsoft 六項負責任 AI 原則之一。

Explanation: 揭露使用者正在與 AI 互動是透明度原則的關鍵面向。它透過誠實來建立信任，幫助使用者校準他們的預期（AI 可能犯錯），並確保知情同意——使用者應該知道影響他們的決策何時涉及 AI。

Why others wrong: 這不是定價要求；使用者表現因人而異；適用於所有層級。

Trap: 認為揭露會嚇跑使用者——研究顯示清晰、誠實的 AI 揭露實際上比事後發現欺騙更能增加使用者信任。

Mnemonic: 透明度 = 告訴人們這是 AI——誠實建立信任

## Q97
Type: single
Difficulty: 2
Tags: azure-foundry, search
Concepts: vector-search
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

Azure AI Search 中的向量搜尋是什麼？

A. 使用精確關鍵字匹配搜尋文件
B. 使用資料的數值向量表示，基於含義找到語義相似內容的搜尋
C. 按檔案大小搜尋檔案
D. 使用正規表達式搜尋

Answer: B

Hint: 向量捕捉含義——向量搜尋找到含義相似的內容。

Explanation: 向量搜尋使用 embedding（數值向量表示）基於語義相似性而非精確的關鍵字匹配來找到內容。文件和查詢被轉換為向量，搜尋找到最近的向量——意味著語義上最相似的內容。

Why others wrong: 關鍵字匹配是傳統搜尋；檔案大小搜尋是元資料搜尋；正規表達式是模式匹配。

Trap: 認為向量搜尋取代關鍵字搜尋——實際上，結合兩者的混合方法通常提供最佳結果。

Mnemonic: 向量搜尋 = 使用數字的基於含義的匹配

## Q98
Type: single
Difficulty: 1
Tags: azure-foundry, language
Concepts: text-analytics
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一家連鎖餐廳想分析數千條線上評論以了解整體客戶滿意度。哪個 Azure AI Language 功能最合適？

A. 機器翻譯
B. 情感分析
C. OCR
D. 語音轉文字

Answer: B

Hint: 理解評論表達的是正面還是負面感受就是情感分析。

Explanation: Azure AI Language 中的情感分析評估文字並在文件和句子層級回傳情感分數（正面、負面、中性、混合）。分析客戶評論的滿意度是情感分析的核心用例。

Why others wrong: 翻譯轉換語言；OCR 從影像讀取文字；語音轉文字轉換音訊。

Trap: 期待情感分析告訴你客戶提到了哪些具體問題——要了解那些，結合關鍵片語擷取或意見挖掘。

Mnemonic: 情感分析 = 心情如何？開心、生氣還是無感？

## Q99
Type: single
Difficulty: 3
Tags: azure-foundry, agents
Concepts: multi-agent
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一個複雜的客戶服務系統使用一個 AI 代理處理帳務問題，另一個處理技術支援，還有一個監督代理將客戶路由到正確的專家。這種架構叫什麼？

A. 單體式 AI
B. 具有編排的多代理系統
C. 具有多個提示的單一代理
D. 沒有 AI 的微服務

Answer: B

Hint: 多個專業代理由一個編排代理協調。

Explanation: 多代理系統使用多個專業的 AI 代理，每個處理特定領域，由一個編排器代理協調。監督代理分析使用者的請求並將其路由到適當的專家代理——實現具有領域專長的複雜工作流程。

Why others wrong: 單體式 AI 使用單一模型處理所有事；這使用多個代理而非只是提示；這是專門的 AI 架構，不是通用微服務。

Trap: 認為一個強大的代理可以處理所有事——專業代理在其領域通常表現更好，編排實現無縫交接。

Mnemonic: 多代理 = 有經理協調的專家團隊

## Q100
Type: single
Difficulty: 1
Tags: ai-concepts, machine-learning
Concepts: neural-networks
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

機器學習中的神經網路受到哪個生物系統的啟發？

A. 消化系統
B. 人腦及其互相連接的神經元
C. 循環系統
D. 免疫系統

Answer: B

Hint: 「神經」一詞來自「神經元」——大腦中的神經細胞。

Explanation: 神經網路受人腦結構和功能的啟發。它們由組織在層中的互相連接節點（人工神經元）組成，透過加權連接處理資訊，模仿生物神經元傳遞信號的方式。

Why others wrong: 其他生物系統不涉及神經元或神經網路所模擬的資訊處理方式。

Trap: 認為神經網路的工作方式與大腦完全相同——它們受生物神經元的鬆散啟發，但實際運作方式非常不同。

Mnemonic: 神經網路 = 人工大腦——多層連接的神經元處理資訊

## Q101
Type: single
Difficulty: 2
Tags: azure-foundry, generative-ai
Concepts: model-versioning
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一家公司六個月前部署了一個 Azure OpenAI 模型，注意到效能發生了變化。最可能的解釋是什麼？

A. 硬體隨時間劣化
B. 模型版本被更新或棄用，部署可能已遷移到較新版本
C. 網路變慢了
D. 使用者改變了他們的行為

Answer: B

Hint: 雲端 AI 模型定期更新——你部署的模型可能已經改變。

Explanation: Azure OpenAI 定期發布新的模型版本並最終棄用舊版本。已部署的模型可能被自動遷移到較新版本，其行為可能不同。在生產環境中鎖定模型版本並在升級前測試很重要。

Why others wrong: 雲端硬體受到維護；網路速度無關；雖然使用者行為會變化，但模型版本變更是更可能的技術原因。

Trap: 假設已部署的模型永遠不會改變——雲端 AI 模型是會更新的活躍服務；總是為生產環境鎖定版本。

Mnemonic: 模型版本在雲端中會變——鎖定你的版本，升級前測試

## Q102
Type: single
Difficulty: 1
Tags: ai-concepts, workloads
Concepts: recommendation-systems
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

一個電商網站根據客戶的瀏覽歷史和過去購買推薦產品。這是哪種 AI 工作負載？

A. 異常偵測
B. 推薦系統
C. 語音辨識
D. 圖像生成

Answer: B

Hint: 根據使用者行為建議他們可能喜歡的項目就是推薦。

Explanation: 推薦系統分析使用者行為模式（瀏覽歷史、購買、評分）以建議相關項目。電商產品推薦是最常見的 AI 應用之一，由協同過濾和基於內容的演算法驅動。

Why others wrong: 異常偵測找不尋常的模式；語音辨識轉換音訊；圖像生成創建影像。

Trap: 認為推薦系統需要生成式 AI——傳統 ML 演算法如協同過濾對推薦通常更有效。

Mnemonic: 推薦 = 「你可能也喜歡...」基於你的行為

## Q103
Type: single
Difficulty: 2
Tags: azure-foundry, content-safety
Concepts: groundedness-detection
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

在 Azure AI Content Safety 中，接地性偵測評估什麼？

A. 模型的回應是否語法正確
B. 模型的回應是否由提供的來源文件在事實上支持
C. 使用者的問題是否使用正確的語言
D. 模型是否在正確的硬體上運行

Answer: B

Hint: 「接地」意味著基於現實——基於來源資料的事實。

Explanation: Azure AI Content Safety 中的接地性偵測評估生成式 AI 模型的回應是否由提供的脈絡或來源文件在事實上支持。它幫助偵測幻覺——聽起來合理但不受給定資訊支持的陳述。

Why others wrong: 語法檢查是獨立的；語言偵測識別語言；硬體是基礎設施。

Trap: 混淆接地性與一般事實準確性——接地性專門檢查提供的脈絡，而非一般世界知識。

Mnemonic: 接地性 = 這個答案是否基於來源文件？

## Q104
Type: single
Difficulty: 1
Tags: ai-concepts, generative-ai
Concepts: multimodal-input
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

一位使用者上傳了餐廳菜單的照片並詢問 AI 模型「有什麼素食選項？」模型分析影像並回覆了一個清單。這展示了什麼類型的 AI 能力？

A. 純文字處理
B. 多模態理解——同時處理影像和文字輸入
C. 語音辨識
D. 圖像生成

Answer: B

Hint: 模型正在處理兩種類型的輸入：影像和文字問題。

Explanation: 這展示了多模態 AI——模型接受影像輸入（菜單照片）和文字輸入（問題），同時處理它們，並生成相關的文字回應。這需要模型理解視覺內容並以自然語言回應。

Why others wrong: 不是純文字（有影像）；沒有音訊；不是生成影像。

Trap: 認為這需要獨立的 OCR 和語言模型——現代多模態模型可以在單一模型中原生處理影像和文字。

Mnemonic: 多模態 = 多種類型的輸入（影像 + 文字）一起理解

## Q105
Type: single
Difficulty: 2
Tags: azure-foundry, generative-ai
Concepts: rate-limiting
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一個已部署的 Azure OpenAI 模型在尖峰時段開始回傳「429 Too Many Requests」錯誤。發生了什麼以及應如何解決？

A. 模型壞了需要重新訓練
B. 部署已超過每分鐘 token 速率限制；增加配額或實施請求節流和排隊
C. API 金鑰已過期
D. 模型版本已棄用

Answer: B

Hint: HTTP 429 專門表示「太多請求」——速率限制問題。

Explanation: Azure OpenAI 在部署上強制實施速率限制（每分鐘 token 數、每分鐘請求數）。在尖峰使用時，超過這些限制會觸發 429 錯誤。解決方案包括請求配額增加、實施客戶端節流、使用指數退避的重試邏輯，或佈建專用容量。

Why others wrong: 模型沒壞；429 不是身份驗證錯誤；棄用會產生不同的錯誤。

Trap: 立即請求最大配額——先分析你的使用模式並實施客戶端最佳化如快取、批次處理和請求優先排序。

Mnemonic: 429 = 太多請求 = 達到速率限制 = 需要更多配額或更好的節流

## Q106
Type: single
Difficulty: 1
Tags: ai-concepts, workloads
Concepts: chatbot
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

一家公司在其網站上部署了一個對話式 AI 來全天候回答常見的客戶問題。這是什麼類型的 AI 應用？

A. 異常偵測系統
B. 聊天機器人
C. 電腦視覺系統
D. 推薦引擎

Answer: B

Hint: 透過文字與客戶互動回答問題的對話式 AI 就是聊天機器人。

Explanation: 聊天機器人是透過文字或語音與使用者互動的對話式 AI 應用，回答問題、提供資訊並引導使用者完成流程。客戶支援聊天機器人是最常見的 AI 部署之一。

Why others wrong: 異常偵測找不尋常的模式；電腦視覺處理影像；推薦引擎建議產品。

Trap: 認為所有聊天機器人都使用生成式 AI——許多客戶支援聊天機器人使用規則式或檢索式方法，對 FAQ 類型的問題更簡單但有效。

Mnemonic: 聊天機器人 = 與客戶聊天的 AI

## Q107
Type: single
Difficulty: 2
Tags: azure-foundry, speech
Concepts: custom-voice
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一個品牌希望其 AI 助手使用符合品牌識別的獨特自訂聲音說話。哪個 Azure AI Speech 功能支援這一點？

A. 語音轉文字
B. 自訂神經語音
C. 說話者辨識
D. 發音評估

Answer: B

Hint: 創建獨特的品牌合成語音就是自訂語音。

Explanation: Azure AI Speech 中的自訂神經語音允許組織創建獨特的品牌合成語音。透過提供語音錄音，服務訓練一個聽起來與品牌特色一致的自訂神經文字轉語音模型——非常適合虛擬助手、有聲書和品牌體驗。

Why others wrong: 語音轉文字將音訊轉換為文字；說話者辨識識別誰在說話；發音評估評估語音品質。

Trap: 認為自訂語音需要數千小時的錄音——現代自訂神經語音可以從相對較小的資料集產生高品質結果。

Mnemonic: 自訂神經語音 = 你品牌的獨特 AI 聲音

## Q108
Type: single
Difficulty: 3
Tags: ai-concepts, responsible-ai
Concepts: ai-regulations
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

為什麼 AI 從業者了解像歐盟 AI 法案這樣的 AI 法規很重要？

A. 法規只適用於歐盟公司
B. AI 法規按風險等級分類 AI 系統，並對透明度、安全和人工監督施加要求，影響 AI 解決方案的設計和部署方式
C. 法規禁止所有 AI 開發
D. 法規是自願性指引

Answer: B

Hint: 歐盟 AI 法案按風險分類 AI 並施加強制要求——這不是可選的。

Explanation: 歐盟 AI 法案建立了基於風險的 AI 法規框架：最小風險（大多數 AI）、有限風險（需要透明度）、高風險（嚴格要求）和不可接受風險（被禁止）。高風險 AI 必須滿足資料品質、透明度、人工監督和文件記錄的要求——直接影響系統設計。

Why others wrong: 歐盟 AI 法案影響任何服務歐盟使用者的公司；它不禁止 AI；它具有法律約束力，不是自願的。

Trap: 認為 AI 法規只影響法務團隊——開發者必須理解要求因為它們直接影響技術設計決策。

Mnemonic: 歐盟 AI 法案 = 風險等級 → 要求 → 設計影響

## Q109
Type: single
Difficulty: 1
Tags: azure-foundry, generative-ai
Concepts: whisper
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

透過 Azure OpenAI Service 提供的哪個模型可以將音訊錄音轉錄為文字？

A. GPT-4o
B. DALL-E
C. Whisper
D. Ada

Answer: C

Hint: 想想哪個模型專門為語音轉文字轉錄而設計。

Explanation: Whisper 是 OpenAI 的語音辨識模型，將音訊轉錄為文字。它支援多種語言並可以處理各種音訊條件。透過 Azure OpenAI Service 提供，非常適合會議轉錄、播客處理和語音輸入。

Why others wrong: GPT-4o 是語言模型；DALL-E 生成影像；Ada 是 embedding 模型。

Trap: 認為 GPT-4o 直接處理音訊轉錄——雖然 GPT-4o 在某些配置中可以接受音訊，但 Whisper 是專門的、最佳化的轉錄模型。

Mnemonic: Whisper = 對它低語，它寫下來（語音轉文字）

## Q110
Type: single
Difficulty: 2
Tags: azure-foundry, search
Concepts: indexer
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

在 Azure AI Search 中，索引器的角色是什麼？

A. 它生成對使用者查詢的回應
B. 它自動從支援的資料來源提取資料、處理資料並填充搜尋索引
C. 它管理使用者身份驗證
D. 它訓練機器學習模型

Answer: B

Hint: 索引器是將資料擷取和處理到搜尋索引中的管線。

Explanation: Azure AI Search 中的索引器自動化資料擷取管線。它們連接到資料來源（Blob Storage、SQL Database、Cosmos DB 等），擷取內容，可選地透過 AI 技能（OCR、實體擷取、embedding 生成）豐富內容，並填充搜尋索引。

Why others wrong: 回應生成是 AI 模型的工作；身份驗證由 Azure AD 處理；模型訓練在其他服務中進行。

Trap: 認為需要手動上傳文件到索引——索引器自動化整個資料擷取管線。

Mnemonic: 索引器 = 自動資料管線：來源 → 處理 → 索引

## Q111
Type: single
Difficulty: 1
Tags: ai-concepts, generative-ai
Concepts: natural-language-generation
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

一個行銷工具使用 AI 根據條列式特點撰寫產品描述。這是哪種 AI 能力？

A. 電腦視覺
B. 自然語言生成
C. 語音辨識
D. 異常偵測

Answer: B

Hint: 從結構化輸入創建類人文字就是自然語言生成。

Explanation: 自然語言生成（NLG）是從結構化資料或輸入產生連貫、類人文字的 AI 能力。將條列式特點轉換為流暢的產品描述是自然語言生成任務。

Why others wrong: 電腦視覺處理影像；語音辨識轉換音訊；異常偵測找不尋常的模式。

Trap: 混淆自然語言生成與自然語言理解——NLG 產生文字；NLU 理解文字。

Mnemonic: NLG = 自然語言生成 = AI 寫文字；NLU = AI 讀文字

## Q112
Type: single
Difficulty: 2
Tags: azure-foundry, generative-ai
Concepts: model-selection
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一家新創公司正在建構一個簡單的電子郵件自動回覆系統，需要在 GPT-4o 和較小模型之間選擇。電子郵件是簡短的標準回覆。哪個是更好的選擇？

A. 總是使用 GPT-4o 因為它最強大
B. 較小、較便宜的模型可能足以應付簡單的範本式電子郵件回覆——將 GPT-4o 保留給複雜推理任務
C. 兩者都不用——從頭建構自訂模型
D. 同時使用兩者

Answer: B

Hint: 將模型與任務複雜度匹配——不要用大砲打蚊子。

Explanation: 對簡單的範本式電子郵件回覆，較小的模型以較低的成本和更快的速度提供足夠的品質。GPT-4o 的進階推理能力對標準自動回覆是不必要的。新創公司應該為工作選擇合適大小的模型。

Why others wrong: 總是使用最大的模型浪費資源；從頭建構是不必要的；使用兩者增加複雜性而無收益。

Trap: 認為最強大的模型總是最佳選擇——對簡單任務，較小的模型通常能匹配品質同時更便宜更快。

Mnemonic: 正確的模型做正確的工作 = 具成本效益且快速

## Q113
Type: multi
Difficulty: 2
Tags: ai-concepts, workloads
Concepts: nlp-techniques
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

以下哪些是自然語言處理（NLP）技術？（選擇所有適用的）

A. 情感分析
B. 命名實體辨識
C. 影像分類
D. 關鍵片語擷取

Answer: A, B, D

Hint: NLP 處理文字和語言——哪些選項涉及文字處理？

Explanation: 情感分析（衡量情感基調）、命名實體辨識（識別人、地點、組織）和關鍵片語擷取（找到重要片語）都是處理文字的 NLP 技術。影像分類處理視覺資料而非語言。

Why others wrong: 影像分類是電腦視覺技術，不是 NLP。

Trap: 包含影像分類因為影像可以包含文字——即使影像包含文字，按類別分類影像是電腦視覺任務而非 NLP。

Mnemonic: NLP = 文字進，理解出；電腦視覺 = 影像進，理解出

## Q114
Type: single
Difficulty: 2
Tags: azure-foundry, generative-ai
Concepts: responsible-monitoring
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

部署生成式 AI 聊天機器人後，一家公司注意到模型的回應越來越偏離主題。他們應該怎麼做？

A. 忽略它因為模型在部署前已經測試過
B. 持續監控模型效能，分析有問題的互動，調整系統訊息，並根據需要更新內容過濾器
C. 從頭重新訓練整個模型
D. 永久關閉聊天機器人

Answer: B

Hint: 部署後監控是持續的責任，不是一次性的設定。

Explanation: 持續監控對已部署的 AI 系統至關重要。當問題出現時，團隊應分析日誌和有問題的互動，改進系統訊息以更好地約束行為，調整內容過濾器，並可能更新模型版本——持續改善的循環。

Why others wrong: 忽略問題違反負責任 AI；從頭重新訓練過於繁重；關閉是極端的，修復是可能的。

Trap: 認為部署前測試就足夠——AI 系統需要在生產環境中持續監控和調整。

Mnemonic: 部署 → 監控 → 分析 → 調整 → 重複（持續改善循環）

## Q115
Type: single
Difficulty: 1
Tags: ai-concepts, machine-learning
Concepts: test-data
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

在機器學習中，測試資料集的目的是什麼？

A. 訓練模型的初始參數
B. 對模型效能在完全未見過的資料上提供最終的無偏評估
C. 在訓練期間調整超參數
D. 生成新的訓練範例

Answer: B

Hint: 測試集是最終考試——模型在訓練或調整期間從未見過的資料。

Explanation: 測試資料集提供對訓練後模型效能的最終、無偏評估。它是模型在訓練或超參數調整期間從未見過的資料，給出模型在新的、真實世界資料上表現如何的現實估計。

Why others wrong: 訓練資料訓練參數；驗證集調整超參數；資料增強生成新範例。

Trap: 在訓練或超參數調整期間使用測試資料——這會污染評估並給出誤導性的樂觀結果。

Mnemonic: 測試集 = 有未見過題目的最終考試——必須完全獨立保存

## Q116
Type: single
Difficulty: 2
Tags: azure-foundry, language
Concepts: opinion-mining
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一家連鎖飯店想知道客戶對其服務的哪些具體面向（食物、房間、員工）感到正面或負面。哪個 Azure AI Language 功能超越了整體情感？

A. 語言偵測
B. 意見挖掘（面向式情感分析）
C. 文字摘要
D. 關鍵片語擷取

Answer: B

Hint: 理解關於特定面向的情感（不只是整體）就是面向式分析。

Explanation: Azure AI Language 中的意見挖掘執行面向式情感分析——它識別特定面向（食物、房間、員工）並判斷對每個面向表達的情感。這超越整體情感，揭示客戶喜歡或不喜歡具體元素的什麼。

Why others wrong: 語言偵測識別語言；文字摘要濃縮內容；關鍵片語擷取找主題但不找對它們的情感。

Trap: 只使用整體情感分析——知道評論是「負面的」不如知道客戶喜歡食物但討厭客房服務來得可行動。

Mnemonic: 意見挖掘 = 他們對每個具體事物怎麼看？

## Q117
Type: single
Difficulty: 3
Tags: azure-foundry, agents
Concepts: agent-evaluation
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

組織在將 AI 代理部署到生產環境之前應該如何評估其有效性？

A. 只檢查它是否生成語法正確的回應
B. 用多樣的場景測試，包括邊界案例、對抗性輸入、多步驟任務、工具呼叫準確性，並衡量成功率、延遲和使用者滿意度
C. 請一個人試用一次
D. 僅根據回應速度評估

Answer: B

Hint: 全面的評估涵蓋功能、安全、準確性和使用者體驗。

Explanation: AI 代理評估必須是多維度的：測試正常流程、邊界案例和對抗性輸入；驗證工具呼叫準確性和多步驟任務完成；衡量延遲和吞吐量；評估回應品質和接地性；並收集使用者回饋。單一維度是不夠的。

Why others wrong: 語法只是一個小面向；一次測試不具代表性；速度本身不確保品質。

Trap: 只測試「正常路徑」——代理必須用邊界案例、意外輸入和對抗性提示測試以確保穩健性。

Mnemonic: 代理評估 = 多樣場景 + 邊界案例 + 指標 + 使用者回饋

## Q118
Type: single
Difficulty: 1
Tags: azure-foundry, vision
Concepts: spatial-analysis
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一家商店想使用攝影機了解客流模式——哪些走道最多人去、客戶在哪裡停留最久。哪個 Azure AI Vision 功能提供這些洞察？

A. 影像分類
B. 空間分析
C. 圖像生成
D. OCR

Answer: B

Hint: 分析人們如何在實體空間中移動就是空間分析。

Explanation: Azure AI Vision 中的空間分析分析攝影機的視訊畫面以了解人們如何與實體空間互動。它可以追蹤客流模式、偵測停留區域、計算人數並監控社交距離——非常適合零售分析。

Why others wrong: 影像分類為影像指派標籤；圖像生成創建影像；OCR 讀取文字。

Trap: 認為每個攝影機畫面需要獨立分析——空間分析隨時間持續追蹤視訊畫面中的模式。

Mnemonic: 空間分析 = 透過視訊了解空間使用情況

## Q119
Type: single
Difficulty: 2
Tags: ai-concepts, generative-ai
Concepts: responsible-ai-testing
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

在 AI 安全的脈絡中，什麼是「紅隊測試」？

A. 網路應用的軟體測試框架
B. 故意嘗試讓 AI 系統產生有害、意外或違反政策的輸出，以在部署前識別漏洞
C. 只負責使用者介面設計的團隊
D. 使用紅綠指示器的部署策略

Answer: B

Hint: 像安全滲透測試一樣，但針對 AI 行為和安全。

Explanation: AI 紅隊測試涉及一組專家故意探測 AI 系統的弱點——嘗試引出有害內容、繞過安全過濾器、擷取敏感資訊或使系統出現意外行為。這種對抗性測試在系統到達真實使用者之前識別漏洞。

Why others wrong: 它是 AI 特有的測試，不是網路框架；它關於安全而非 UI 設計；它不是部署指示器系統。

Trap: 認為紅隊測試只在上線前做一次——有效的 AI 紅隊測試應該持續進行，因為新的攻擊向量會隨時間出現。

Mnemonic: 紅隊 = 在真實攻擊者之前找到 AI 弱點的友善攻擊者

## Q120
Type: single
Difficulty: 1
Tags: azure-foundry, generative-ai
Concepts: azure-openai-models
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

以下哪個是透過 Azure OpenAI Service 提供的用於文字生成和對話的大型語言模型？

A. ResNet
B. GPT-4o
C. YOLO
D. U-Net

Answer: B

Hint: 想想哪個模型以對話式 AI 和文字生成聞名。

Explanation: GPT-4o 是 OpenAI 的旗艦多模態大型語言模型，透過 Azure OpenAI Service 提供。它擅長文字生成、對話、推理和程式碼生成，也可以接受影像輸入。

Why others wrong: ResNet 是影像分類模型；YOLO 是物件偵測模型；U-Net 是影像分割模型。

Trap: 混淆電腦視覺模型與語言模型——ResNet、YOLO 和 U-Net 都是為影像處理設計的，不是文字。

Mnemonic: GPT = Generative Pre-trained Transformer = 文字生成冠軍

## Q121
Type: single
Difficulty: 2
Tags: ai-concepts, model-components
Concepts: bias-in-ai
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

即使開發者有良好的意圖，偏見如何進入 AI 系統？

A. 偏見只在開發者故意編程時才會出現
B. 偏見可以透過不具代表性的訓練資料、有偏見的歷史資料，或開發過程中的設計選擇和假設進入
C. 偏見在現代 AI 系統中是不可能的
D. 偏見只影響基於影像的 AI

Answer: B

Hint: 偏見可以隱藏在資料、過程或假設中——不需要壞意圖。

Explanation: AI 偏見通常透過以下方式進入：代表性不足某些群體的訓練資料、反映過去歧視的歷史資料、無意中使用受保護特徵代理的特徵選擇，或未跨群體衡量公平性的評估指標。

Why others wrong: 偏見通常是無意的；它存在於所有現代 AI 系統中；它影響所有類型的 AI，不僅限於基於影像的。

Trap: 認為偏見需要惡意意圖——大多數 AI 偏見是意外的，源於歷史資料模式和無意識的設計假設。

Mnemonic: 偏見透過資料、歷史和假設悄悄進入——即使有良好意圖

## Q122
Type: single
Difficulty: 2
Tags: azure-foundry, generative-ai
Concepts: few-shot-in-practice
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一位開發者想讓生成式 AI 模型將客戶回饋分類為特定類別。這些類別是其業務獨有的。在不微調的情況下最有效的方法是什麼？

A. 希望模型猜對類別
B. 在提示中使用少樣本學習提供每個類別的範例
C. 從頭建構自訂神經網路
D. 只使用模型的預建類別

Answer: B

Hint: 在提示中向模型展示每個類別的幾個範例就能教會它你的分類方案。

Explanation: 少樣本學習直接在提示中嵌入分類範例，無需任何訓練就能教會模型你的自訂類別。每個類別包含 2-3 個範例，展示輸入文字和預期的類別標籤，模型就會按此分類新的輸入。

Why others wrong: 隨機猜測不可靠；從頭建構過於繁重；預建類別可能不符合業務需求。

Trap: 立即跳到微調做自訂分類——少樣本提示更快、更便宜，對定義明確的類別通常就足夠了。

Mnemonic: 少樣本 = 展示幾個範例，模型學會模式

## Q123
Type: single
Difficulty: 1
Tags: azure-foundry, generative-ai
Concepts: playground-chat
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

在 Azure AI Foundry 的 Chat Playground 中，你可以配置哪三種訊息類型？

A. 標頭、正文和頁尾
B. 系統訊息、使用者訊息和助手訊息
C. 請求、回應和錯誤
D. 輸入、輸出和日誌

Answer: B

Hint: 想想對話中的三個角色：指令、人類和 AI。

Explanation: Chat Playground 使用三種訊息類型：系統訊息（設定 AI 的行為和約束）、使用者訊息（人類說的話）和助手訊息（AI 的回應）。系統訊息由開發者配置；使用者和助手訊息構成對話。

Why others wrong: 這些是對話角色，不是文件區段、HTTP 術語或資料流標籤。

Trap: 認為系統訊息對使用者可見——它是隱藏的配置，塑造 AI 的行為但不在對話中顯示。

Mnemonic: 系統 = 舞台導演；使用者 = 觀眾；助手 = 演員

## Q124
Type: single
Difficulty: 2
Tags: ai-concepts, machine-learning
Concepts: feature-engineering
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

在機器學習中什麼是特徵工程？

A. 為 AI 裝置建構實體硬體功能
B. 從原始資料中選擇、轉換和創建輸入變數以改善模型效能的過程
C. 為 AI 功能撰寫文件
D. 設計使用者介面功能

Answer: B

Hint: 特徵是模型學習的輸入變數——工程化它們意味著打造更好的輸入。

Explanation: 特徵工程將原始資料轉換為有資訊性的輸入變數（特徵），幫助模型學習更好的模式。範例包括將日期轉換為星期幾、組合欄位成比率，或對分類變數進行編碼——改善模型從資料中學習的能力。

Why others wrong: 它是關於資料轉換，不是硬體、文件或 UI 設計。

Trap: 認為深度學習消除了特徵工程的需要——雖然深度學習自動化了一些特徵學習，但深思熟慮的特徵工程仍然可以顯著改善結果。

Mnemonic: 特徵工程 = 打造更好的輸入讓模型學得更好

## Q125
Type: single
Difficulty: 1
Tags: azure-foundry, language
Concepts: entity-linking
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一個知識管理系統需要識別「微軟」、「MSFT」和「雷德蒙德的那家公司」都指同一個實體。哪個 Azure AI Language 功能做到這一點？

A. 情感分析
B. 實體連結
C. 語言偵測
D. 文字摘要

Answer: B

Hint: 將不同的提及連結到知識庫中的同一個實體就是實體連結。

Explanation: 實體連結識別文字中的實體並將它們連接到知識庫（如維基百科）中的對應條目。它解析出「微軟」、「MSFT」和「雷德蒙德的那家公司」都指同一個實體——微軟公司。

Why others wrong: 情感分析衡量語調；語言偵測識別語言；摘要濃縮文字。

Trap: 混淆實體連結與命名實體辨識——NER 識別實體及其類型；實體連結更進一步，消歧並連接到知識庫條目。

Mnemonic: 實體連結 = 不同名稱，同一實體——全部連接起來

## Q126
Type: single
Difficulty: 3
Tags: azure-foundry, generative-ai
Concepts: cost-optimization
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一家公司的 Azure OpenAI 成本快速增長。哪些策略可以在不犧牲品質的情況下幫助最佳化成本？

A. 簡單地停止使用 AI
B. 對簡單任務使用較小的模型、對重複查詢實施快取、最佳化提示長度、對非緊急請求使用批次處理，並監控 token 使用量
C. 將所有模型切換到免費層
D. 移除所有安全功能以減少處理

Answer: B

Hint: 成本最佳化是關於效率——用更少的資源做同樣的工作。

Explanation: 成本最佳化策略包括：模型大小匹配（簡單任務用較小模型）、快取頻繁的回應、保持提示簡潔（更短的提示 = 更少的輸入 token）、批次處理非緊急請求，以及監控使用量以識別浪費。這些在保持品質的同時降低成本。

Why others wrong: 停止 AI 會失去商業價值；沒有無限的免費層；移除安全功能是不負責任的，可能違反合規。

Trap: 透過降低品質或安全來削減成本——可持續的成本最佳化在不影響輸出品質或安全的情況下提高效率。

Mnemonic: 最佳化 AI 成本 = 正確模型 + 快取 + 簡潔提示 + 批次 + 監控

## Q127
Type: single
Difficulty: 1
Tags: ai-concepts, generative-ai
Concepts: large-language-model
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

「大型語言模型」（LLM）中的「大型」指的是什麼？

A. 伺服器的實體大小
B. 模型擁有的龐大參數（權重）數量，通常數十億
C. 輸出文字的大小
D. 它可以服務的使用者數量

Answer: B

Hint: 「大型」描述的是模型的規模——可學習參數的數量。

Explanation: 在 LLM 中，「大型」指的是模型在訓練過程中學習的巨大參數（權重）數量——通常是數十億或數兆。這些參數編碼了模型從訓練資料中學到的知識和模式，實現多功能的語言理解和生成。

Why others wrong: 它是關於模型參數，不是實體大小、輸出長度或使用者容量。

Trap: 認為「大型」意味著模型知道一切——大量的參數提供廣泛的能力但不保證每個主題的準確性。

Mnemonic: 大型 = 大量參數（數十億），不是實體大小

## Q128
Type: single
Difficulty: 2
Tags: azure-foundry, vision
Concepts: document-intelligence
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一家保險公司需要從各種版面的理賠表格中擷取特定欄位（保單號碼、理賠金額、事故日期）。哪個 Azure AI 服務是為此設計的？

A. 僅 Azure AI Vision OCR
B. Azure AI Document Intelligence
C. Azure AI Language
D. Azure AI Translator

Answer: B

Hint: 從各種文件版面中擷取結構化資料超越了基本 OCR。

Explanation: Azure AI Document Intelligence（前身為 Form Recognizer）專門設計用於從各種版面的文件中擷取結構化資料。它理解文件結構、識別鍵值對、表格和特定欄位——超越僅讀取文字的基本 OCR。

Why others wrong: 基本 OCR 讀取文字但不理解文件結構；Language 處理文字但不處理文件版面；Translator 轉換語言。

Trap: 認為基本 OCR 就足夠——OCR 讀取文字，但 Document Intelligence 理解文件結構以從各種版面中準確擷取特定欄位。

Mnemonic: Document Intelligence = 理解結構和欄位的智慧文件閱讀器

## Q129
Type: single
Difficulty: 1
Tags: ai-concepts, machine-learning
Concepts: label
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

在用於訓練垃圾郵件分類器的資料集中，什麼是「標籤」？

A. 電子郵件主旨行
B. 指派給每封電子郵件的分類：「垃圾郵件」或「非垃圾郵件」
C. 寄件人的電子郵件地址
D. 電子郵件正文

Answer: B

Hint: 標籤是告訴模型要預測什麼的已知正確答案。

Explanation: 在監督式學習中，標籤是模型學習預測的已知輸出或目標變數。對垃圾郵件分類器而言，標籤是指派給每封訓練電子郵件的「垃圾郵件」或「非垃圾郵件」分類。模型學習將電子郵件特徵映射到這些標籤。

Why others wrong: 主旨行、寄件人和正文是輸入特徵；標籤是模型預測的目標輸出。

Trap: 混淆特徵與標籤——特徵是模型用來做預測的輸入；標籤是它試圖學習的正確答案。

Mnemonic: 標籤 = 答案鑰匙；特徵 = 題目

## Q130
Type: single
Difficulty: 2
Tags: azure-foundry, generative-ai
Concepts: max-tokens
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一位開發者為生成式 AI 模型配置了 max_tokens=100。如果完整答案需要 200 個 token 會怎樣？

A. 模型自動擴展到 200 個 token
B. 回應在 100 個 token 處被截斷，在思路中間切斷答案
C. 模型拒絕回答
D. 模型將答案壓縮到 100 個 token 內

Answer: B

Hint: max_tokens 是硬限制——模型在達到此數字時停止生成。

Explanation: max_tokens 參數對輸出 token 數量設定硬限制。如果完整答案需要更多 token，回應會在限制處簡單被切斷，可能在句子或思路中間結束。模型不會摘要或壓縮——它只是停止。

Why others wrong: 模型不會覆蓋限制；它不會拒絕（它開始然後被切斷）；它不會壓縮。

Trap: 對複雜問題設定 max_tokens 太低——如果答案被截斷，增加限制以容納更長的回應。

Mnemonic: max_tokens = 硬停止——模型在此數字處停止寫作，即使在句子中間

## Q131
Type: single
Difficulty: 1
Tags: ai-concepts, generative-ai
Concepts: text-generation
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

以下哪個不是生成式 AI 的典型用例？

A. 撰寫行銷文案
B. 從自然語言描述生成程式碼
C. 測量房間溫度
D. 摘要長文件

Answer: C

Hint: 想想哪個任務涉及物理測量而非內容生成。

Explanation: 生成式 AI 創建新內容——文字、程式碼、摘要、影像。測量房間溫度是物理感測器任務，與內容生成無關。撰寫文案、生成程式碼和摘要文件都是生成式 AI 用例。

Why others wrong: 撰寫文案、生成程式碼和摘要文件都是已確立的生成式 AI 能力。

Trap: 認為 AI 可以做所有事——雖然 AI 很強大，但物理測量需要實際的感測器，不是語言模型。

Mnemonic: 生成式 AI = 創建內容；物理測量 = 需要感測器

## Q132
Type: single
Difficulty: 2
Tags: azure-foundry, agents
Concepts: function-calling
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

在 Azure OpenAI 中，什麼是函式呼叫？

A. 透過 AI 打電話
B. 一種機制，模型識別何時需要使用外部工具並輸出該工具的結構化參數，然後由應用程式執行
C. 呼叫 Azure 支援函式
D. 執行 Azure Functions 無伺服器程式碼

Answer: B

Hint: 模型本身不執行函式——它告訴你的應用程式要呼叫什麼函式以及用什麼參數。

Explanation: 函式呼叫允許模型辨識何時應該使用外部工具，並生成指定要呼叫哪個函式以及用什麼參數的結構化 JSON 輸出。應用程式碼然後執行實際的函式並將結果回傳給模型。

Why others wrong: 不是打電話；不是 Azure 支援；雖然 Azure Functions 可以是目標，但函式呼叫是更廣泛的模型能力。

Trap: 認為模型直接執行程式碼——模型只生成函式呼叫參數；你的應用程式碼處理實際執行。

Mnemonic: 函式呼叫 = 模型說「用這些參數呼叫這個函式」；應用程式執行它

## Q133
Type: multi
Difficulty: 2
Tags: ai-concepts, workloads
Concepts: cv-tasks
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

以下哪些是電腦視覺任務？（選擇所有適用的）

A. 物件偵測
B. 情感分析
C. 影像分類
D. 臉部辨識

Answer: A, C, D

Hint: 電腦視覺處理視覺資料——哪些選項涉及分析影像或視訊？

Explanation: 物件偵測（定位影像中的項目）、影像分類（為影像指派標籤）和臉部辨識（從影像中識別人）都是電腦視覺任務。情感分析處理文字而非影像。

Why others wrong: 情感分析是處理文字而非視覺資料的 NLP 任務。

Trap: 包含情感分析因為影像中的臉可以展示情緒——雖然臉部表情分析存在於電腦視覺中，但「情感分析」專指基於文字的情感基調偵測。

Mnemonic: 電腦視覺 = 處理影像的任務：偵測、分類、辨識

## Q134
Type: single
Difficulty: 2
Tags: azure-foundry, generative-ai
Concepts: api-integration
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一位開發者想將 Azure OpenAI 整合到他們的 Python 應用中。推薦的方法是什麼？

A. 手動複製貼上模型回應
B. 使用 Azure OpenAI Python SDK 或 REST API 以程式方式發送提示並接收回應
C. 截取 Playground 的螢幕截圖
D. 對每個請求使用 Azure Portal 的 UI

Answer: B

Hint: 程式化整合使用 SDK 或 API，不是手動過程。

Explanation: Azure OpenAI Python SDK（或 REST API）提供對已部署模型的程式化存取。開發者匯入程式庫，用端點和金鑰進行身份驗證，並發出 API 呼叫來發送提示和接收回應——實現與任何應用的整合。

Why others wrong: 手動方法無法擴展；螢幕截圖不是程式化的；Portal UI 用於管理，不是應用整合。

Trap: 在有 SDK 可用時直接使用 REST API——SDK 提供更乾淨、類型安全的介面，內建錯誤處理和重試邏輯。

Mnemonic: SDK/API = 你的應用與 Azure AI 之間的程式化橋樑

## Q135
Type: single
Difficulty: 1
Tags: ai-concepts, generative-ai
Concepts: ethical-ai-use
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

一個學生使用生成式 AI 撰寫整篇學期報告而不註明出處。這引發了哪個倫理問題？

A. 隱私侵犯
B. 學術不誠實和缺乏 AI 使用透明度
C. 資料安全漏洞
D. AI 的著作權侵犯

Answer: B

Hint: 使用 AI 產生你聲稱是自己作品的東西而不揭露，是透明度和誠信問題。

Explanation: 將 AI 生成的作品作為自己的提交而不註明出處是學術不誠實的一種形式。負責任 AI 的透明度原則意味著要對何時以及如何使用 AI 保持誠實。學術機構越來越要求揭露 AI 協助。

Why others wrong: 沒有洩露個人資料；沒有安全被破壞；主要問題是出處標注而非著作權。

Trap: 認為 AI 生成的內容總是可以使用——內容可能是可接受的，但將其作為自己的作品呈現而不揭露是倫理問題。

Mnemonic: AI 透明度 = 對 AI 參與保持誠實

## Q136
Type: single
Difficulty: 2
Tags: azure-foundry, generative-ai
Concepts: structured-output
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一位開發者需要生成式 AI 模型總是以特定的 JSON 格式回傳資料。他們應該使用什麼技術？

A. 希望模型猜對格式
B. 使用結構化輸出（JSON 模式或回應格式規範）約束模型的輸出為符合架構的有效 JSON
C. 用正規表達式解析非結構化文字
D. 使用獨立的格式化服務

Answer: B

Hint: 約束模型輸出有效 JSON 確保一致的、可解析的回應。

Explanation: Azure OpenAI 中的結構化輸出強制模型生成符合指定 JSON 架構的回應。這保證輸出是具有預期欄位和類型的有效 JSON——對可靠的應用整合至關重要。

Why others wrong: 希望不可靠；正規表達式解析脆弱；獨立服務增加不必要的複雜性。

Trap: 僅依賴提示指令獲取 JSON 輸出——即使有明確的指令，模型偶爾可能產生無效的 JSON；結構化輸出在模型層級強制格式。

Mnemonic: 結構化輸出 = 保證格式——不再有 JSON 解析頭痛

## Q137
Type: single
Difficulty: 1
Tags: ai-concepts, workloads
Concepts: predictive-analytics
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

一家零售商使用歷史銷售資料預測下個月的庫存需求。這是哪種 AI 能力？

A. 圖像生成
B. 預測分析
C. 語音合成
D. 內容審核

Answer: B

Hint: 使用歷史資料預測未來結果就是預測分析。

Explanation: 預測分析使用歷史資料和機器學習模型來預測未來事件或趨勢。根據過去的銷售模式預測庫存需求是核心的預測分析用例，幫助企業最佳化庫存水準。

Why others wrong: 圖像生成創建影像；語音合成產生音訊；內容審核過濾有害內容。

Trap: 混淆預測與處方——預測分析告訴你會發生什麼；處方分析告訴你該怎麼做。

Mnemonic: 預測分析 = 由歷史資料驅動的水晶球

## Q138
Type: multi
Difficulty: 3
Tags: azure-foundry, generative-ai
Concepts: rag-components
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

在 RAG 架構中通常一起使用哪些 Azure 服務？（選擇所有適用的）

A. Azure AI Search（用於檢索）
B. Azure OpenAI Service（用於生成）
C. Azure Blob Storage（用於文件儲存）
D. Azure DevOps（用於 CI/CD）

Answer: A, B, C

Hint: RAG 需要三樣東西：儲存文件、搜尋它們，並從中生成回應。

Explanation: 典型的 Azure RAG 架構使用：Azure Blob Storage 儲存來源文件、Azure AI Search 索引和檢索相關片段，以及 Azure OpenAI 生成接地於檢索內容的回應。Azure DevOps 處理部署但不是核心 RAG 元件。

Why others wrong: Azure DevOps 是用於部署解決方案的 CI/CD 工具，不是 RAG 資料管線的元件。

Trap: 包含每個觸及專案的 Azure 服務——RAG 專指檢索增強生成管線，不是整個部署基礎設施。

Mnemonic: Azure 上的 RAG = Blob Storage（儲存）+ AI Search（檢索）+ OpenAI（生成）

## Q139
Type: single
Difficulty: 1
Tags: azure-foundry, generative-ai
Concepts: api-key
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

開發者應該如何處理他們的 Azure OpenAI API 金鑰？

A. 在文件中公開分享以便於存取
B. 安全儲存（例如 Azure Key Vault 或環境變數），絕不提交到原始碼儲存庫
C. 直接硬編碼到應用的前端 JavaScript 中
D. 用電子郵件發送給所有團隊成員

Answer: B

Hint: API 金鑰是秘密——像密碼一樣對待它們。

Explanation: API 金鑰提供對 Azure AI 資源的存取，應被視為敏感憑證。將它們儲存在 Azure Key Vault、環境變數或安全配置中——絕不放在原始碼、公開儲存庫或客戶端程式碼中，以避免被暴露。

Why others wrong: 公開分享使未經授權的使用成為可能；硬編碼在前端會暴露給任何使用者；電子郵件是不安全且不受控的。

Trap: 「暫時」將 API 金鑰提交到 Git 儲存庫——即使短暫的暴露也可能被利用，因為機器人持續掃描公開儲存庫中洩露的憑證。

Mnemonic: API 金鑰 = 秘密——放進保險庫、不要分享、絕不提交

## Q140
Type: single
Difficulty: 2
Tags: ai-concepts, generative-ai
Concepts: ai-limitations
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

以下哪個陳述準確描述了生成式 AI 的當前限制？

A. 生成式 AI 沒有限制
B. 生成式 AI 可能產生自信但不正確的資訊、缺乏即時世界知識，並可能延續訓練資料中的偏見
C. 生成式 AI 只能產生文字
D. 生成式 AI 總是產生完美的結果

Answer: B

Hint: 了解 AI 限制對負責任的使用至關重要。

Explanation: 當前生成式 AI 的限制包括：幻覺（自信但錯誤的答案）、知識截止（除非接地否則沒有即時資訊）、偏見（反映訓練資料模式）、缺乏真正理解（模式匹配而非推理），以及不一致性（對類似提示給出不同答案）。

Why others wrong: 所有 AI 都有限制；生成式 AI 產生文字、影像、程式碼和音訊；完美是不可實現的。

Trap: 過度信任 AI 輸出——了解限制對負責任部署和適當的人工監督至關重要。

Mnemonic: AI 限制 = 幻覺 + 知識差距 + 偏見 + 不一致性

## Q141
Type: single
Difficulty: 2
Tags: azure-foundry, language
Concepts: custom-ner
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一家製藥公司需要在醫療記錄中識別藥物名稱和劑量，但預建的 NER 無法辨識他們的專有藥物名稱。他們應該使用什麼？

A. 情感分析
B. 自訂命名實體辨識
C. 語言偵測
D. 機器翻譯

Answer: B

Hint: 當預建的實體辨識不涵蓋你的領域特定實體時，訓練自訂模型。

Explanation: Azure AI Language 中的自訂 NER 允許組織訓練辨識領域特定實體的模型。製藥公司可以在訓練資料中標記他們藥物名稱和劑量的範例，自訂模型將學會從新文字中擷取這些實體。

Why others wrong: 情感分析衡量語調；語言偵測識別語言；翻譯轉換語言。

Trap: 對專業領域依賴預建 NER——醫療、法律和科學文字通常需要自訂實體模型來處理領域特定術語。

Mnemonic: 自訂 NER = 你的實體、你的訓練資料、你的專業化模型

## Q142
Type: single
Difficulty: 1
Tags: ai-concepts, machine-learning
Concepts: accuracy
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

一個模型在 100 張測試影像中正確分類了 95 張。這個指標叫什麼？

A. 精確度
B. 召回率
C. 準確率
D. F1 分數

Answer: C

Hint: 正確預測佔所有預測的百分比是最簡單的效能指標。

Explanation: 準確率是所有預測中正確預測的比例。在這個案例中，95/100 = 95% 準確率。雖然簡單直觀，但對不平衡資料集（某一類別佔主導）可能會產生誤導。

Why others wrong: 精確度衡量正面預測的正確性；召回率衡量正面偵測的完整性；F1 平衡精確度和召回率。

Trap: 將準確率作為唯一指標——對不平衡資料集（例如 99% 負面、1% 正面），預測「總是負面」的模型達到 99% 準確率但捕捉不到任何正面案例。

Mnemonic: 準確率 = 所有正確 / 所有總數——簡單但注意不平衡資料

## Q143
Type: single
Difficulty: 2
Tags: azure-foundry, generative-ai
Concepts: token-counting
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

使用 Azure OpenAI 時，為什麼理解 token 計數很重要？

A. Token 決定模型的顏色主題
B. 你根據 token 使用量（輸入和輸出 token）計費，且上下文視窗有 token 限制——理解 token 計數幫助控制成本和避免截斷
C. Token 只與圖像生成相關
D. Token 計數只在免費層才需要

Answer: B

Hint: Token = AI 使用的貨幣——它們影響你的帳單和模型的容量。

Explanation: Azure OpenAI 根據消耗的 token（輸入和輸出）計費。理解分詞幫助開發者：估計成本、最佳化提示長度、保持在上下文視窗限制內，以及防止回應截斷。大約 1 token ≈ 4 個英文字元或 ¾ 個英文單字。

Why others wrong: Token 不影響 UI；適用於所有模型類型；token 計數在所有定價層級都重要。

Trap: 忽略 token 使用直到帳單到來——主動管理 token 可以防止成本意外並確保提示在上下文視窗內。

Mnemonic: Token = 成本 + 容量——計算它們以控制帳單並保持在限制內

## Q144
Type: multi
Difficulty: 2
Tags: responsible-ai, principles
Concepts: responsible-ai-complete
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

以下哪些屬於 Microsoft 六項負責任 AI 原則？（選擇所有適用的）

A. 隱私與安全
B. 最大化收入
C. 問責性
D. 包容性

Answer: A, C, D

Hint: Microsoft 的負責任 AI 原則關注倫理結果——財務目標不在其中。

Explanation: Microsoft 的六項負責任 AI 原則是：公平性、可靠性與安全性、隱私與安全、包容性、透明度和問責性。這些原則指導 AI 系統的道德開發和部署。收入最大化是商業目標，不是負責任 AI 原則。

Why others wrong: 收入最大化是商業目標，不是道德 AI 原則。

Trap: 混淆商業目標與倫理原則——負責任 AI 是關於 AI 應如何行為，而非關於商業成果。

Mnemonic: FRIPT-A：公平性、可靠性、包容性、隱私、透明度、問責性

## Q145
Type: single
Difficulty: 3
Tags: azure-foundry, generative-ai
Concepts: responsible-ai-lifecycle
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一家公司部署了一個生成式 AI 客服代理。六個月後，他們發現代理提供的是過時的產品資訊。根本原因和解決方案是什麼？

A. 模型壞了必須更換
B. 代理的知識庫（接地資料）沒有更新新的產品資訊——定期刷新知識庫以保持回應的時效性
C. 生成式 AI 無法提供產品資訊
D. 模型需要更多訓練資料

Answer: B

Hint: 如果模型接地的資訊過時了，回應也會過時。

Explanation: 在基於 RAG 的系統中，模型的回應只與其知識庫一樣時效。如果產品資訊改變但知識庫沒有更新，代理會提供過時的資訊。定期的知識庫維護——刷新文件、更新 FAQ 和移除過時內容——至關重要。

Why others wrong: 模型本身沒壞；生成式 AI 擅長產品資訊；重新訓練處理模型行為而非知識時效性。

Trap: 在實際問題是過時的接地資料時責怪模型——總是先檢查和維護知識庫。

Mnemonic: 過時的答案 = 過時的知識庫——刷新資料，而非模型

## Q146
Type: single
Difficulty: 1
Tags: azure-foundry, generative-ai
Concepts: azure-openai-endpoint
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

開發者需要哪兩項資訊才能將應用連接到 Azure OpenAI 部署？

A. 使用者名稱和密碼
B. 端點 URL 和 API 金鑰（或 Azure AD token）
C. 模型名稱和版本號碼
D. 訂閱名稱和資源群組

Answer: B

Hint: 像任何 API 一樣，你需要知道請求發送到哪裡以及如何進行身份驗證。

Explanation: 要連接到 Azure OpenAI，開發者需要：(1) 端點 URL（API 請求發送到哪裡）和 (2) API 金鑰或 Azure AD token（用於身份驗證）。這些可以在 Azure Portal 的 Azure OpenAI 資源的「金鑰和端點」區段中找到。

Why others wrong: 使用者名稱/密碼不用於 API 存取；模型名稱在請求中指定而非用於連接；訂閱詳情用於資源管理而非 API 呼叫。

Trap: 混淆資源連接憑證與模型選擇——端點和金鑰將你連接到服務；模型/部署名稱在每次 API 呼叫中指定。

Mnemonic: 連接 = 端點（哪裡）+ 金鑰（誰）——然後在每次呼叫中指定模型

## Q147
Type: single
Difficulty: 2
Tags: ai-concepts, generative-ai
Concepts: ai-ethics-deepfake
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

AI 生成的逼真影片讓人看起來在說他們實際上從未說過的話叫什麼？

A. 擴增實境
B. 深偽
C. 資料增強
D. 遷移學習

Answer: B

Hint: 「深」來自深度學習 +「偽」因為內容是捏造的。

Explanation: 深偽是使用深度學習創建的合成媒體，逼真地改變或捏造人的影片、音訊或影像。它們可以讓人看起來在說或做他們從未做過的事，引發嚴重的錯誤資訊、詐欺和同意問題。

Why others wrong: 擴增實境在真實世界上疊加數位內容；資料增強創建合成訓練資料；遷移學習重用預訓練模型。

Trap: 認為深偽總是很明顯——現代深偽可以極其逼真，沒有專門工具很難偵測。

Mnemonic: 深偽 = 深度學習 + 虛假內容 = 逼真的捏造

## Q148
Type: single
Difficulty: 2
Tags: azure-foundry, generative-ai
Concepts: batch-processing
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

一家公司需要在一夜之間透過生成式 AI 模型處理 10,000 條客戶回饋訊息。哪種方法最具成本效益？

A. 同時發送所有 10,000 個請求
B. 使用 Azure OpenAI 的批次 API，以較低的成本非同步處理大量資料
C. 每次處理一條訊息，間隔 5 秒延遲
D. 手動將每條訊息複製到 Playground

Answer: B

Hint: 對大量、非緊急的處理，批次 API 提供成本節省。

Explanation: Azure OpenAI 的批次 API 設計用於高量、非同步處理。你提交一個請求檔案，它們以較低的優先級和降低的價格被處理——非常適合不需要即時回應的隔夜處理。

Why others wrong: 同時請求可能觸發速率限制；逐一處理加延遲是不必要的慢；手動處理無法擴展。

Trap: 對批次工作負載使用即時 API——你會支付更多並可能觸發速率限制；批次 API 專門為此用例設計。

Mnemonic: 批次 API = 批量處理享批量折扣——非常適合隔夜工作

## Q149
Type: single
Difficulty: 1
Tags: ai-concepts, generative-ai
Concepts: ai-vs-agi
Domain: Domain 1 — Identify AI Concepts and Capabilities
DomainNumber: 1

狹義 AI 和人工通用智慧（AGI）之間的區別是什麼？

A. 它們是同一回事
B. 狹義 AI 設計用於特定任務（如影像辨識或文字生成）；AGI 將能夠執行人類可以做的任何智力任務——AGI 目前尚不存在
C. AGI 比狹義 AI 慢
D. 狹義 AI 比 AGI 需要更多計算能力

Answer: B

Hint: 「狹義」意味著專注於特定任務；「通用」意味著能做所有事。

Explanation: 狹義 AI（也稱弱 AI）擅長它被設計的特定任務——下棋、辨識影像或生成文字。AGI（人工通用智慧）將能匹配人類在所有認知任務上的智力水準。所有當前的 AI 系統，包括 GPT-4 和其他 LLM，都是狹義 AI。

Why others wrong: 它們是根本不同的概念；速度和計算比較不是關鍵區別。

Trap: 認為當前 LLM 是 AGI 因為它們似乎「理解」——它們是高能力的狹義 AI，擅長語言任務但缺乏真正的通用智慧。

Mnemonic: 狹義 AI = 一招鮮（非常擅長）；AGI = 像人類一樣的全方位智慧（尚不存在）

## Q150
Type: single
Difficulty: 2
Tags: azure-foundry, generative-ai
Concepts: responsible-deployment-checklist
Domain: Domain 2 — Implement AI Solutions by Using Microsoft Foundry
DomainNumber: 2

在將生成式 AI 解決方案部署到生產環境之前，組織應該完成哪些檢查清單項目？

A. 只檢查模型是否能生成文字
B. 驗證內容過濾器已配置、系統訊息約束已設定、監控和日誌記錄已啟用、人工升級路徑存在、速率限制適當，以及負責任 AI 影響評估已記錄
C. 只驗證成本在預算內
D. 只用一個範例提示測試

Answer: B

Hint: 生產部署需要跨安全、效能和治理的全面準備。

Explanation: 生產就緒的生成式 AI 部署需要：安全的內容過濾器、約束行為的系統訊息、持續監督的監控、處理複雜問題的人工升級、資源管理的速率限制，以及問責性的記錄影響評估——全面的檢查清單。

Why others wrong: 僅文字生成是不夠的；成本只是一個因素；一次測試不能驗證生產就緒度。

Trap: 在基本測試後急於上線——生成式 AI 部署需要超越功能測試的全面安全、監控和治理準備。

Mnemonic: 生產檢查清單 = 過濾器 + 約束 + 監控 + 人工 + 限制 + 文件記錄
