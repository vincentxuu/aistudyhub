---
exam: AI-103
lang: zh-TW
---

## Q1
Type: single
Difficulty: 2
Tags: planning, infrastructure-design
Concepts: azure-infrastructure
Domain: Domain 1 — Plan and Manage an Azure AI Solution
DomainNumber: 1

你的公司需要部署一個處理敏感醫療資料的 AI 代理。該解決方案必須符合 HIPAA 合規要求，並防止資料經過公用網際網路傳輸。你應該優先採用哪種 Azure 基礎架構配置？

A. 使用公用端點部署模型並新增 IP 白名單
B. 在虛擬網路中為 Foundry 部署配置私人端點、使用受控識別進行驗證、並啟用診斷記錄至安全的 Log Analytics 工作區
C. 使用儲存在應用程式環境變數中的共用 API 金鑰
D. 將模型部署到另一個 Azure 訂閱以隔離

Answer: B

Hint: HIPAA 合規要求網路隔離與安全驗證兩者兼具——哪種組合能同時達成？

Explanation: 私人端點讓流量不經過公用網際網路，受控識別消除憑證洩露風險，診斷記錄則提供稽核軌跡——這些都是 HIPAA 的要求。AI-103 涵蓋了為 AI 應用程式設計 Azure 基礎架構及配置私人網路與受控識別的內容。

Why others wrong: IP 白名單仍使用公用端點；環境變數中的金鑰可能洩露；僅訂閱隔離無法防止公用網際網路傳輸。

Trap: 以為 IP 白名單就足以符合醫療合規——它限制了誰能連線，但流量仍經過公用網際網路。

Mnemonic: HIPAA AI = 私人端點 + 受控識別 + 稽核記錄

## Q2
Type: single
Difficulty: 1
Tags: planning, deployment-options
Concepts: deployment-types
Domain: Domain 1 — Plan and Manage an Azure AI Solution
DomainNumber: 1

在 Microsoft Foundry 中部署模型時，「標準」部署與「佈建輸送量」部署有什麼區別？

A. 標準部署速度更快
B. 標準部署使用按 token 計費的共用容量定價，而佈建輸送量部署保留專用運算容量，以獲得一致的延遲和有保障的輸送量
C. 佈建輸送量部署一定比較便宜
D. 沒有差別——它們是一樣的

Answer: B

Hint: 想想雲端運算中隨選和預留執行個體的差異。

Explanation: 標準部署與其他使用者共用容量並按 token 計費，適合工作負載變動大的情境。佈建輸送量則保留專用容量，確保高流量或對延遲敏感的應用程式獲得一致的效能。AI-103 涵蓋選擇適當部署選項的內容。

Why others wrong: 標準部署可能有不穩定的延遲；佈建輸送量成本較高但效能有保障；兩者有不同的定價和效能特性。

Trap: 為低流量的原型選擇佈建輸送量——預留容量的成本在輕量工作負載下是浪費的。

Mnemonic: 標準 = 按用量付費共用、佈建 = 預留專用容量

## Q3
Type: single
Difficulty: 3
Tags: planning, role-policies
Concepts: rbac-ai
Domain: Domain 1 — Plan and Manage an Azure AI Solution
DomainNumber: 1

你正在為一個 Foundry 專案配置角色型存取控制 (RBAC)。團隊包含需要實驗模型的資料科學家、建構代理應用程式的開發人員，以及監控正式環境的維運人員。哪種角色指派遵循最小權限原則？

A. 為了簡便，給所有人 Owner 角色
B. 將資料科學家指派為 Cognitive Services User 角色以進行模型實驗、將開發人員指派為 Cognitive Services Contributor 角色以進行部署、將維運人員指派為 Monitoring Reader 角色以進行觀測
C. 指派所有人 Contributor 角色並依賴信任
D. 使用單一共用服務帳號進行所有存取

Answer: B

Hint: 每個角色需要不同的權限——每個團隊所需的最低權限是什麼？

Explanation: 最小權限意味著每個角色只獲得所需的權限。資料科學家需要呼叫模型（User）、開發人員需要部署和配置（Contributor）、維運人員需要唯讀監控存取（Reader）。AI-103 涵蓋配置角色原則作為安全性的一部分。

Why others wrong: Owner 和 Contributor 角色賦予過多權限；共用帳號消除了問責性和稽核軌跡。

Trap: 因為「能用」就預設給所有人 Contributor——這違反最小權限原則並造成不必要的安全風險。

Mnemonic: 最小權限 = 每個角色的最低權限（User < Contributor < Owner）

## Q4
Type: single
Difficulty: 2
Tags: planning, drift-detection
Concepts: model-drift
Domain: Domain 1 — Plan and Manage an Azure AI Solution
DomainNumber: 1

在監控正式環境的 AI 解決方案時，「資料漂移」是什麼意思？

A. 模型的程式碼隨時間慢慢改變
B. 輸入資料的統計分布相較於模型訓練或校準時的資料產生變化，可能導致模型效能下降，因為模型的假設不再符合現實
C. 伺服器實體移動到不同的資料中心
D. 使用者轉向競爭對手的產品

Answer: B

Hint: 用夏季資料訓練的模型在冬季可能表現不佳——是什麼改變了？

Explanation: 資料漂移發生在正式環境資料在分布、詞彙或模式上偏離訓練資料時。這會導致無聲的效能下降。AI-103 涵蓋監控漂移作為管理 AI 解決方案的一部分。

Why others wrong: 程式碼不會自行改變；伺服器不會實體移動；使用者流失是商業指標，不是技術概念。

Trap: 假設部署的模型會永遠保持一致的效能——資料漂移是不可避免的，必須加以監控。

Mnemonic: 資料漂移 = 現實變了但模型沒變（訓練資料 ≠ 正式資料）

## Q5
Type: single
Difficulty: 2
Tags: planning, safety-evaluation
Concepts: safety-evaluation
Domain: Domain 1 — Plan and Manage an Azure AI Solution
DomainNumber: 1

在 Azure 的負責任 AI 架構中，「安全篩選器」和「安全評估」有什麼區別？

A. 它們是相同的東西，只是名稱不同
B. 安全篩選器是在推論時即時阻擋有害內容的防護機制，而安全評估是離線的系統性測試，在部署前或部署期間針對對抗性輸入和邊緣案例全面測試模型行為
C. 安全評估比篩選器更快
D. 安全篩選器僅適用於圖片

Answer: B

Hint: 一個在即時保護，另一個做系統性測試——各自在什麼時候運作？

Explanation: 安全篩選器在推論時運作，阻擋有害的輸入/輸出。安全評估是系統性的測試框架，用對抗性和邊緣案例輸入來探測模型行為。AI-103 將兩者視為不同的負責任 AI 機制——篩選器用於執行時保護，評估用於部署前驗證。

Why others wrong: 它們在不同時間服務不同目的；評估較慢（系統性測試）；篩選器適用於所有模態。

Trap: 只依賴安全篩選器而不做評估——篩選器捕捉已知模式，但評估能發現未知的漏洞。

Mnemonic: 篩選器 = 執行時盾牌、評估 = 部署前壓力測試

## Q6
Type: single
Difficulty: 2
Tags: planning, explanation-tooling
Concepts: explainability
Domain: Domain 1 — Plan and Manage an Azure AI Solution
DomainNumber: 1

AI-103 提到「解釋工具」作為負責任 AI 檢測的一部分。解釋工具提供什麼？

A. 解釋 Azure 定價的方式
B. 幫助開發人員和利害關係人理解 AI 模型為何產出特定輸出的工具——包括哪些輸入、特徵或檢索到的文件最大程度影響了決策
C. 程式碼文件產生器
D. 客服聊天機器人

Answer: B

Hint: 當利害關係人問「AI 為什麼這樣說？」——什麼工具能回答這個問題？

Explanation: 解釋工具為 AI 決策提供透明度：哪些輸入影響了輸出、哪些檢索到的文件最相關、以及模型遵循了什麼推理路徑。AI-103 將此與評估器和安全評估並列為負責任 AI 檢測工具。

Why others wrong: 定價解釋是帳務；程式碼文件是開發工具；聊天機器人是應用程式，不是解釋工具。

Trap: 假設 AI 輸出是不言自明的——複雜的決策需要明確的解釋工具來確保問責和信任。

Mnemonic: 解釋工具 = 回答「AI 為什麼做這個決定？」

## Q7
Type: single
Difficulty: 2
Tags: generative-ai, slm-deployment
Concepts: small-language-models
Domain: Domain 2 — Implement Generative AI and Agentic Solutions
DomainNumber: 2

在什麼情況下你會選擇小型語言模型 (SLM) 而非大型語言模型 (LLM) 進行正式部署？

A. 當你需要最好的推理能力時
B. 當任務明確且範圍狹窄——例如分類、實體擷取或意圖偵測——SLM 能以顯著更低的延遲、成本和運算需求提供足夠的品質
C. 當你想要最具創意的輸出時
D. 當你需要處理多種模態時

Answer: B

Hint: 不是每個任務都需要千億參數的模型——哪些任務小型模型就能勝任？

Explanation: SLM 在聚焦型任務上表現出色，能以 LLM 成本的一小部分達到匹配的品質和更低的延遲。AI-103 涵蓋根據任務需求在 LLM、SLM、程式碼模型和多模態模型之間做選擇。SLM 適合正式環境中高流量、範圍窄的任務。

Why others wrong: 複雜推理偏好 LLM；創意生成受益於較大的模型；多模態處理需要多模態模型。

Trap: 總是預設選擇最大的模型——SLM 在不需要完整 LLM 推理的任務上更具成本效益且更快。

Mnemonic: SLM = 聚焦任務、更低成本、更低延遲（為模型選擇合適的尺寸）

## Q8
Type: single
Difficulty: 2
Tags: generative-ai, foundry-connection
Concepts: foundry-project-config
Domain: Domain 2 — Implement Generative AI and Agentic Solutions
DomainNumber: 2

要將應用程式連接到 Microsoft Foundry 專案，你必須配置什麼？

A. 只有模型名稱
B. Foundry 專案的連線字串或端點 URL、驗證憑證（最好透過受控識別）、以及特定的部署名稱——使應用程式能將請求路由到正確的專案和模型部署
C. 只有 Azure 訂閱 ID
D. 只有資源群組名稱

Answer: B

Hint: 應用程式需要知道連線到哪裡、如何驗證、以及使用哪個部署。

Explanation: 將應用程式連接到 Foundry 需要三個要素：專案端點（哪裡）、驗證（如何）、以及部署名稱（哪個模型）。AI-103 明確涵蓋「配置應用程式以連接到 Foundry 專案」作為技能目標。

Why others wrong: 僅模型名稱不能指定端點；訂閱 ID 標識帳號而非專案；資源群組是組織性的，不是連線參數。

Trap: 將連線字串和 API 金鑰寫死——應使用受控識別和配置服務以確保安全且可維護的連線。

Mnemonic: Foundry 連線 = 端點 + 驗證 + 部署名稱

## Q9
Type: single
Difficulty: 3
Tags: generative-ai, agent-definition
Concepts: agent-roles-goals
Domain: Domain 2 — Implement Generative AI and Agentic Solutions
DomainNumber: 2

在 Azure Foundry 中定義代理時，代理定義應包含哪些要素以確保一致且可預測的行為？

A. 只有要使用的模型
B. 代理的角色描述、具體目標、行為約束、對話追蹤方式、可用工具結構描述、以及回應格式期望——為代理建立清晰的運作契約
C. 只有工具清單
D. 只有系統提示

Answer: B

Hint: 代理定義就像職務說明——需要角色、職責、界限和工具。

Explanation: 完整的代理定義涵蓋：角色（它是什麼）、目標（它要達成什麼）、約束（它不能做什麼）、對話追蹤（它如何維持上下文）、工具結構描述（它能使用什麼）、以及回應格式（它如何溝通）。AI-103 將這些都列為代理定義元件。

Why others wrong: 模型選擇是一個因素，不是完整定義；沒有上下文的工具缺乏目的；系統提示是定義的一部分但不是全部。

Trap: 只定義系統提示而未指定目標、約束和工具結構描述——沒有完整定義的代理會表現不一致。

Mnemonic: 代理定義 = 角色 + 目標 + 約束 + 追蹤 + 工具 + 格式

## Q10
Type: single
Difficulty: 2
Tags: generative-ai, knowledge-stores
Concepts: knowledge-integration
Domain: Domain 2 — Implement Generative AI and Agentic Solutions
DomainNumber: 2

代理的「知識庫」和「對話記憶」有什麼區別？

A. 它們是相同的東西
B. 知識庫包含持久的組織資訊（文件、FAQ、產品資料），代理透過搜尋來檢索；而對話記憶維護當前對話歷史和任務狀態，跨越一個工作階段中的多個回合
C. 知識庫比記憶快
D. 對話記憶儲存的資料比知識庫多

Answer: B

Hint: 一個是代理查閱的圖書館；另一個是代理對當前對話的短期記憶。

Explanation: 知識庫是外部的持久資料來源，代理查詢以獲取資訊。對話記憶是工作階段範圍的狀態追蹤，記錄已討論的內容。AI-103 涵蓋選擇適當的「記憶、工具和知識整合服務用於代理解決方案」。

Why others wrong: 它們服務於根本不同的目的；速度取決於實作；知識庫通常持有比工作階段記憶多得多的資料。

Trap: 嘗試將組織知識放入對話記憶（會溢出上下文限制）或將對話歷史當作知識庫（它是短暫的）。

Mnemonic: 知識庫 = 組織圖書館（持久），記憶 = 對話筆記本（工作階段）

## Q11
Type: single
Difficulty: 3
Tags: generative-ai, autonomous-workflows
Concepts: workflow-autonomy
Domain: Domain 2 — Implement Generative AI and Agentic Solutions
DomainNumber: 2

AI-103 區分「自主」和「半自主」代理工作流程。什麼情況下你應該使用半自主工作流程而非完全自主的？

A. 當你想要最快的執行速度時
B. 當工作流程涉及具有重大現實後果的動作——例如金融交易、客戶通訊或資料修改——在關鍵決策點加入人工審查可降低風險，同時仍自動化例行步驟
C. 當模型太慢時
D. 當你完全不信任 AI 時

Answer: B

Hint: 有些步驟可以安全地自動化；其他的需要人工檢查點——哪些是哪些？

Explanation: 半自主工作流程自動化例行步驟，同時在高影響決策點插入人工核准。這在效率和安全之間取得平衡。AI-103 涵蓋建構「具有防護措施和核准流程控制的自主或半自主工作流程」。

Why others wrong: 人工檢查點降低執行速度但提高安全性；半自主與模型速度無關；如果完全不信任 AI，就不會使用任何代理工作流程。

Trap: 讓一切都自主（風險太高）或一切都手動（失去意義）——半自主是高風險工作流程的平衡方式。

Mnemonic: 半自主 = 自動化安全的部分，人類核准有風險的部分

## Q12
Type: single
Difficulty: 2
Tags: generative-ai, model-orchestration
Concepts: multi-model-routing
Domain: Domain 2 — Implement Generative AI and Agentic Solutions
DomainNumber: 2

在單一 AI 應用程式中協調多個模型有什麼好處？

A. 使用更多模型一定會產出更好的結果
B. 不同的模型可以最佳地處理不同的子任務——將複雜推理路由給 LLM、將分類路由給 SLM、將圖像分析路由給多模態模型——在整個工作流程中最佳化成本、延遲和品質
C. 它讓應用程式更複雜，這會讓利害關係人印象深刻
D. 它消除了測試的需要

Answer: B

Hint: 專家團隊在需要不同專長的任務上勝過通才——同樣的原則適用於模型。

Explanation: 多模型協調將每個子任務路由到最適合的模型，最佳化每個步驟的成本-品質-延遲權衡。AI-103 涵蓋「協調多個模型、流程或混合 LLM 和規則引擎」作為最佳化技能。

Why others wrong: 更多模型在不必要時只增加複雜度；複雜度不是功能；多模型需要更多測試，而非更少。

Trap: 在每個步驟都使用最貴的 LLM，但其實 SLM 或規則引擎就足以處理較簡單的任務。

Mnemonic: 每個步驟選對模型 = 最佳化成本 + 品質 + 速度

## Q13
Type: single
Difficulty: 1
Tags: computer-vision, reference-media
Concepts: image-generation-reference
Domain: Domain 3 — Implement Computer Vision Solutions
DomainNumber: 3

在 Azure AI 中使用文字提示生成圖片時，什麼是「參考媒體」？

A. 圖片的引用清單
B. 與文字提示一起提供的現有圖片，用於引導生成——給模型所需風格、主題或構圖的視覺範例，以產出更精準的結果
C. 模型的訓練資料集
D. 加在生成圖片上的浮水印

Answer: B

Hint: 文字描述你想要什麼，但有時展示範例更有效。

Explanation: 參考媒體提供文字單獨無法完全傳達的視覺上下文——風格、色彩調性、構圖或主題相似度。AI-103 涵蓋實作「從文字提示和參考媒體」生成圖片的解決方案。

Why others wrong: 引用是文字的；訓練資料不會在推論時提供；浮水印是後處理，不是輸入。

Trap: 對複雜的視覺需求只依賴文字提示——參考媒體能大幅改善風格和構圖的生成精準度。

Mnemonic: 參考媒體 = 「讓它看起來像這個」 + 文字提示 = 「加上這些變化」

## Q14
Type: single
Difficulty: 2
Tags: computer-vision, video-editing
Concepts: video-editing-workflows
Domain: Domain 3 — Implement Computer Vision Solutions
DomainNumber: 3

AI-103 涵蓋實作編輯生成影片的工作流程。這些工作流程能執行什麼類型的編輯？

A. 只能剪切和修剪影片長度
B. 修改生成影片片段中的視覺內容——調整場景元素、替換物件、更改風格或精修動態——同時在幀與幀之間維持時間一致性
C. 只能添加字幕
D. 只能更改影片解析度

Answer: B

Hint: 像圖片修復但跨時間——編輯必須在幀之間保持一致。

Explanation: AI 影片編輯在維持時間一致性的同時修改生成影片中的內容——一個幀的變化必須平滑過渡到相鄰的幀。AI-103 涵蓋實作「編輯生成影片的工作流程」作為電腦視覺技能。

Why others wrong: 剪切/修剪是傳統編輯，不是 AI 編輯；字幕和解析度是後處理，不是內容修改。

Trap: 以為 AI 影片編輯就像逐幀套用圖片編輯——幀之間的時間一致性才是關鍵挑戰。

Mnemonic: AI 影片編輯 = 修改內容 + 維持時間一致性

## Q15
Type: single
Difficulty: 2
Tags: computer-vision, generation-controls
Concepts: generation-controls
Domain: Domain 3 — Implement Computer Vision Solutions
DomainNumber: 3

在 Azure AI 圖片和影片生成的情境中，什麼是「生成和編輯控制」？

A. GPU 上的硬體開關
B. 平台提供的參數，用於管控生成過程——包括安全篩選器、風格約束、解析度設定、長寬比、用於可重現性的種子值、以及內容政策執行
C. UI 中的鍵盤快捷鍵
D. 生成圖片的版本控制

Answer: B

Hint: 你需要控制 AI 生成什麼、如何生成、以及不允許生成什麼。

Explanation: 生成控制包括技術參數（解析度、長寬比、種子）、品質參數（風格、引導強度）和安全參數（內容篩選器、政策規則）。AI-103 涵蓋選擇和套用「平台提供的適當生成和編輯控制」。

Why others wrong: 它們是軟體參數，不是硬體；它們是 API/SDK 設定，不是 UI 快捷鍵；版本控制與生成控制是分開的。

Trap: 對所有使用案例都用預設控制——不同的應用需要不同的安全門檻、解析度和風格約束。

Mnemonic: 生成控制 = 技術（解析度、種子） + 品質（風格） + 安全（篩選器、政策）

## Q16
Type: single
Difficulty: 2
Tags: computer-vision, captions
Concepts: image-captioning
Domain: Domain 3 — Implement Computer Vision Solutions
DomainNumber: 3

AI-103 區分「簡潔」和「詳細」的圖片描述。各自適合在什麼情況下使用？

A. 總是使用詳細描述
B. 簡潔描述用於縮圖預覽、搜尋結果或快速辨識；詳細描述用於無障礙說明、內容審核或文件歸檔等需要完整視覺資訊的情境
C. 簡潔描述總是不夠好
D. 它們產出相同的內容

Answer: B

Hint: 縮圖只需要「高速公路上的紅色汽車」；無障礙描述需要更多細節。

Explanation: 簡潔描述提供快速摘要（適合搜尋、縮圖、快速辨識），而詳細描述則描述完整的視覺資訊（對無障礙、文件記錄、內容審核至關重要）。AI-103 涵蓋配置「單張或多張圖片的簡潔或詳細描述」。

Why others wrong: 當摘要就足夠時，詳細描述浪費資源；簡潔描述在許多使用案例中是適當的；它們產出不同層次的細節。

Trap: 到處使用詳細描述——它們消耗更多 token 並減慢批次處理，而簡潔描述就足夠了。

Mnemonic: 簡潔 = 快速一瞥、詳細 = 完整描述（依使用案例選擇）

## Q17
Type: single
Difficulty: 3
Tags: computer-vision, object-detection
Concepts: region-detection
Domain: Domain 3 — Implement Computer Vision Solutions
DomainNumber: 3

「辨識圖片中的物件、元件或區域」提供了基本圖片分類所沒有的什麼能力？

A. 它辨識圖片更快
B. 它提供空間定位——邊界框、分割遮罩或區域座標——告訴你不僅圖片中有什麼，而且每個物件、元件或區域在圖片中的確切位置
C. 它使用更少的運算能力
D. 它只適用於照片

Answer: B

Hint: 分類說「有一輛車」；偵測說「在座標 (100, 200) 到 (300, 400) 有一輛車」。

Explanation: 物件/區域偵測在分類之上增加空間資訊——產出定位物件在圖片中位置的邊界框或遮罩。這使空間推理、計數、關係分析和目標處理成為可能。AI-103 涵蓋實作物件、元件和區域辨識的解決方案。

Why others wrong: 偵測通常比分類需要更多運算；它不一定更快；它適用於任何圖片類型。

Trap: 當你需要空間資訊時使用分類——「有一個瑕疵」和「在位置 X,Y 有一個瑕疵」是非常不同的能力。

Mnemonic: 分類 = 有什麼、偵測 = 有什麼 + 確切在哪裡

## Q18
Type: single
Difficulty: 2
Tags: computer-vision, visual-policy
Concepts: visual-policy-rules
Domain: Domain 3 — Implement Computer Vision Solutions
DomainNumber: 3

AI-103 提到執行「視覺政策規則」，包括浮水印、品牌使用要求和禁止符號偵測。這些規則的目的是什麼？

A. 讓圖片看起來更專業
B. 確保 AI 生成和處理的視覺內容符合組織和法律要求——添加來源標記、保護商標、以及防止生成或散布包含禁止視覺元素的內容
C. 壓縮圖片
D. 將圖片轉換為灰階

Answer: B

Hint: 組織對可以創建和散布什麼視覺內容有規定——AI 如何執行？

Explanation: 視覺政策規則執行合規：浮水印表明 AI 生成的內容（來源），品牌規則防止商標濫用，禁止符號偵測阻擋包含被禁止視覺元素的內容。AI-103 將這些涵蓋為多模態內容的負責任 AI。

Why others wrong: 美觀不是目標；壓縮和色彩轉換是處理任務，不是政策執行。

Trap: 生成 AI 內容卻沒有浮水印或來源標記——越來越多法規要求揭露 AI 生成的視覺內容。

Mnemonic: 視覺政策 = 浮水印（來源） + 品牌保護 + 禁止內容阻擋

## Q19
Type: single
Difficulty: 2
Tags: text-analysis, domain-customization
Concepts: domain-extraction
Domain: Domain 4 — Implement Text Analysis Solutions
DomainNumber: 4

AI-103 提到為「領域任務如合規摘要和領域擷取」自訂語言模型輸出。領域自訂涉及什麼？

A. 購買新的網域名稱
B. 調整模型的擷取和摘要行為，以理解領域特定的術語、格式和需求——例如法律條款辨識、醫療代碼擷取或金融法規摘要
C. 每個領域使用不同的模型
D. 將內容翻譯成不同的語言

Answer: B

Hint: 通用摘要器會錯過領域特定的細微差別——合規摘要需要與新聞摘要不同的結構。

Explanation: 領域自訂透過提示工程、少量範例和領域特定結構描述來調整 AI 輸出以適應特定專業領域。合規摘要擷取的元素與新聞摘要不同。AI-103 將此列為領域自訂任務。

Why others wrong: 網域名稱是網址；一個模型可以為多個領域自訂；翻譯是另一種能力。

Trap: 對專業領域文件使用通用文字分析提示——遺漏專家所需的關鍵領域特定元素。

Mnemonic: 領域自訂 = 通用 AI + 產業專業知識 = 專業化輸出

## Q20
Type: single
Difficulty: 2
Tags: text-analysis, custom-speech
Concepts: custom-speech-models
Domain: Domain 4 — Implement Text Analysis Solutions
DomainNumber: 4

什麼情況下你會使用自訂語音模型而非預設的 Azure 語音轉文字服務？

A. 當你想要更快的轉錄速度
B. 當你的領域有專業詞彙、口音或聲學環境，導致預設模型表現不佳——例如醫學術語、工廠車間噪音或標準模型經常誤判的行業特定術語
C. 當你想要省錢
D. 當你需要轉錄英文

Answer: B

Hint: 預設語音模型是用通用語言訓練的——遇到像「食道胃十二指腸鏡檢查」這樣的專業術語會怎樣？

Explanation: 自訂語音模型用領域特定資料訓練，以處理會降低預設模型準確度的專業詞彙、口音和聲學環境。AI-103 涵蓋整合語音（包括自訂語音模型）作為代理模態。

Why others wrong: 自訂模型不一定更快；由於自訂訓練，它們成本更高；預設模型能良好處理標準英文。

Trap: 對專業領域使用預設模型並接受低品質的轉錄——自訂模型能顯著提升領域特定語音的準確度。

Mnemonic: 自訂語音 = 預設模型 + 你領域的詞彙、口音和噪音

## Q21
Type: single
Difficulty: 2
Tags: text-analysis, speech-translation
Concepts: speech-translation
Domain: Domain 4 — Implement Text Analysis Solutions
DomainNumber: 4

Azure AI 中的語音翻譯與文字翻譯有什麼不同？

A. 它們產出相同的結果
B. 語音翻譯是一個結合語音轉文字、翻譯和選擇性文字轉語音的管線——直接處理音訊輸入並處理口語特有的細微差別，如猶豫、更正和對話模式，這些在書面文字中不存在
C. 語音翻譯總是更準確
D. 文字翻譯支援更多語言

Answer: B

Hint: 口語有書面文字沒有的特徵（嗯、啊、自我更正）——翻譯如何處理它們？

Explanation: 語音翻譯是多步驟管線（語音轉文字 → 翻譯 → 選擇性文字轉語音），必須處理口語特徵。AI-103 涵蓋「使用語言模型和 Foundry 工具」翻譯語音作為語音解決方案的一部分。

Why others wrong: 它們有不同的輸入模態和挑戰；語音翻譯增加複雜度但不一定增加準確度；語言支援依服務而非模態而異。

Trap: 將語音翻譯簡單視為「轉錄然後翻譯」——處理口語語言的偽流暢（不流暢、修正）需要專門的處理。

Mnemonic: 語音翻譯 = 語音轉文字 + 翻譯 + 處理口語特徵 + 選擇性文字轉語音

## Q22
Type: single
Difficulty: 1
Tags: text-analysis, topic-extraction
Concepts: topic-extraction
Domain: Domain 4 — Implement Text Analysis Solutions
DomainNumber: 4

文字分析中主題擷取的目的是什麼？

A. 尋找文件的作者
B. 自動辨識文件或對話中討論的主要主題和主軸——實現內容分類、路由、趨勢分析和知識組織，無需手動標記
C. 計算段落數量
D. 檢查文法

Answer: B

Hint: 這份文件是關於什麼的？主題擷取自動回答這個問題。

Explanation: 主題擷取辨識文字中的主要主軸，實現自動化分類和路由。AI-103 涵蓋擷取「實體、主題、摘要和結構化 JSON 輸出」作為文字分析技能。主題幫助大規模地組織和路由內容。

Why others wrong: 作者是詮釋資料，不是內容分析；段落計數是結構性的；文法檢查是不同的能力。

Trap: 混淆主題擷取和關鍵詞組擷取——主題是更廣泛的主軸，而關鍵詞組是特定的重要術語。

Mnemonic: 主題擷取 = 這份文件是關於什麼的？（主軸和主題）

## Q23
Type: single
Difficulty: 3
Tags: text-analysis, entity-extraction-advanced
Concepts: structured-entity-extraction
Domain: Domain 4 — Implement Text Analysis Solutions
DomainNumber: 4

使用生成式提示從文字中擷取實體時，要求結構化 JSON 輸出相較於純文字實體清單有什麼優勢？

A. JSON 總是更小
B. JSON 輸出包含型別化欄位、巢狀關係和信心指標——使下游的程式化處理、資料庫插入和結構描述驗證成為可能，無需脆弱的文字解析
C. JSON 更容易閱讀
D. JSON 可以離線工作

Answer: B

Hint: 下游系統需要結構化資料——如何彌合自由文字擷取和資料庫插入之間的差距？

Explanation: 結構化 JSON 實體擷取產出型別化、經驗證的輸出，可直接供程式化使用。AI-103 明確涵蓋擷取「結構化 JSON 輸出」作為一種技術。這消除了解析自由文字擷取結果這個容易出錯的步驟。

Why others wrong: JSON 大小取決於內容；JSON 對人類來說比格式化文字更難閱讀；線上/離線與輸出格式無關。

Trap: 將實體擷取為逗號分隔文字然後用正規表示式解析——結構化 JSON 更可靠且能處理邊緣案例（實體名稱中的逗號）。

Mnemonic: 實體 → JSON = 型別化、巢狀、可解析（不需要正規表示式）

## Q24
Type: single
Difficulty: 2
Tags: information-extraction, audio-video-indexing
Concepts: multimodal-ingestion
Domain: Domain 5 — Implement Information Extraction Solutions
DomainNumber: 5

AI-103 涵蓋匯入和索引包括音訊和影片在內的內容。音訊內容如何在 AI Search 索引中變得可搜尋？

A. 音訊檔案作為二進位大型物件儲存，按檔名搜尋
B. 音訊經過語音轉文字轉錄為文字，然後轉錄稿被嵌入和索引——使口語內容的語意搜尋成為可能，並以時間戳將搜尋結果連結回音訊中的特定時刻
C. 音訊無法被索引
D. 音訊轉換為圖片以進行索引

Answer: B

Hint: 搜尋在文字和嵌入上運作——音訊必須先被轉換為可搜尋的形式。

Explanation: 音訊索引需要一個管線：轉錄（語音轉文字） → 文字處理 → 嵌入 → 索引。轉錄時的時間戳能將搜尋結果連結到特定的音訊時刻。AI-103 涵蓋匯入和索引「文件、圖片、音訊和影片」。

Why others wrong: 二進位大型物件搜尋僅限於詮釋資料；音訊透過轉錄是完全可索引的；圖片轉換無法擷取音訊內容。

Trap: 只索引音訊的詮釋資料（標題、時長）而不轉錄內容——口語文字才是最有價值的可搜尋內容。

Mnemonic: 音訊 → 轉錄 → 嵌入 → 索引 → 搜尋口語文字（附時間戳）

## Q25
Type: single
Difficulty: 2
Tags: information-extraction, custom-skills
Concepts: custom-vs-builtin-skills
Domain: Domain 5 — Implement Information Extraction Solutions
DomainNumber: 5

在 Azure AI Search 中，用於擴充的內建技能和自訂技能有什麼區別？

A. 內建技能總是更好
B. 內建技能是預先配置的 AI 能力（實體辨識、語言偵測、關鍵詞組擷取），可以直接使用；而自訂技能是使用者定義的擴充步驟，呼叫外部 API 或自訂程式碼進行領域特定處理
C. 自訂技能是免費的
D. 它們產出相同的結果

Answer: B

Hint: 內建涵蓋常見任務；自訂處理你領域特有的需求。

Explanation: 內建技能無需配置即可處理常見的 NLP 任務。自訂技能用領域特定的處理擴展管線——呼叫自訂模型、外部 API 或商業邏輯。AI-103 涵蓋「使用自訂或內建技能」實作擴充。

Why others wrong: 自訂技能在特定領域可能優於內建；自訂技能有開發和託管成本；它們服務不同的目的。

Trap: 為內建技能已經能處理好的任務建構自訂技能——先檢查內建能力，再建構自訂的。

Mnemonic: 內建 = 現成的 NLP、自訂 = 你的專業化處理

## Q26
Type: single
Difficulty: 3
Tags: information-extraction, layout-analysis
Concepts: layout-analysis
Domain: Domain 5 — Implement Information Extraction Solutions
DomainNumber: 5

在處理具有表格、標題和註腳的複雜多欄文件時，為什麼版面分析在 OCR 之外是不可或缺的？

A. 版面分析讓 OCR 更快
B. 版面分析理解文件的空間結構——區分欄位、表格、頁首、頁尾、標題和閱讀順序——防止 OCR 文字在欄位之間混亂或將表格儲存格與錯誤的標題關聯
C. 版面分析取代 OCR
D. 版面分析只適用於 PDF

Answer: B

Hint: OCR 按順序擷取文字——但如果文件有兩欄而 OCR 跨欄閱讀呢？

Explanation: 版面分析提供結構性的理解，保持閱讀順序、表格關係和章節層次。沒有它，多欄文件會產出混亂的文字，不同欄位的內容會被交錯排列。AI-103 涵蓋使用結合 OCR、版面分析和欄位擷取的管線來擷取資訊。

Why others wrong: 版面分析增加處理時間；它補充 OCR 而非取代它；它適用於圖片、掃描文件和 PDF。

Trap: 對複雜文件只跑 OCR 而不做版面分析——你得到所有文字但失去賦予其意義的結構。

Mnemonic: OCR = 文字說什麼、版面 = 文件如何結構化（閱讀順序 + 關係）

## Q27
Type: single
Difficulty: 2
Tags: information-extraction, content-understanding-analyzers
Concepts: content-understanding
Domain: Domain 5 — Implement Information Extraction Solutions
DomainNumber: 5

Content Understanding 分析器在生成「用於下游推理的結構化或 markdown 輸出」中扮演什麼角色？

A. 它們格式化文字以供列印
B. 它們透過專門的分析管線處理文件，將非結構化內容轉換為結構化格式（JSON 結構描述）或保留文件層次的 markdown 表示——使內容準備好供 LLM 使用和代理推理
C. 它們壓縮文件
D. 它們翻譯文件

Answer: B

Hint: LLM 在文件結構被保留時推理更好——如何將混亂的 PDF 轉換成 LLM 能推理的形式？

Explanation: Content Understanding 分析器將非結構化文件轉換為 LLM 友善的格式。結構化 JSON 實現程式化存取；markdown 保留層次供 LLM 推理。AI-103 涵蓋實作分析器以產出「用於下游推理的結構化或 markdown 輸出」。

Why others wrong: 列印是輸出格式化；壓縮減少大小；翻譯改變語言而非結構。

Trap: 將原始 OCR 文字餵給 LLM 而不帶結構——LLM 無法區分標題和正文，失去重要的文件上下文。

Mnemonic: Content Understanding = 原始文件 → 結構化/markdown → LLM 就緒

## Q28
Type: single
Difficulty: 2
Tags: planning, private-networking
Concepts: network-isolation
Domain: Domain 1 — Plan and Manage an Azure AI Solution
DomainNumber: 1

為 Azure AI 服務配置私人網路有什麼好處？

A. 它讓 AI 模型更準確
B. 它確保應用程式與 Azure AI 服務之間的流量留在 Microsoft 骨幹網路上，永遠不經過公用網際網路——減少網路型攻擊的暴露面並滿足資料駐留的合規要求
C. 它讓 API 呼叫更快
D. 它降低 API 呼叫的成本

Answer: B

Hint: 公用端點可從任何地方存取——對敏感資料來說這總是你想要的嗎？

Explanation: 私人網路（私人端點、VNet 整合）讓資料流量遠離公用網際網路，減少攻擊面並實現資料處理法規合規。AI-103 涵蓋配置「受控識別、私人網路、無金鑰憑證和角色原則」。

Why others wrong: 網路路徑不影響模型準確度；延遲取決於許多因素；私人端點可能成本更高而非更低。

Trap: 假設公用端點因為使用 HTTPS 就沒問題——加密保護傳輸中的資料但不防止網路層級的暴露。

Mnemonic: 私人網路 = AI 流量留在 Microsoft 私有骨幹上（永遠不經過公用網際網路）

## Q29
Type: single
Difficulty: 2
Tags: generative-ai, multimodal-deployment
Concepts: multimodal-models
Domain: Domain 2 — Implement Generative AI and Agentic Solutions
DomainNumber: 2

在 Foundry 中部署多模態模型時，相較於純文字 LLM 有哪些額外的考量？

A. 多模態模型更容易部署
B. 你必須考慮更大的輸入酬載（圖片/音訊與文字並行）、更高的運算需求、基於輸入模態的不同速率限制、以及涵蓋視覺和音訊模態的內容安全篩選器
C. 多模態模型使用更少的運算
D. 多模態模型不需要內容安全篩選器

Answer: B

Hint: 圖片和音訊比文字大得多——這如何影響部署規劃？

Explanation: 多模態模型處理更大、更多樣的輸入，需要更多運算、不同的速率限制（按圖片 vs 按 token）和多模態內容安全篩選。AI-103 涵蓋部署「LLM、小型模型、程式碼模型和多模態模型」。

Why others wrong: 多模態增加複雜度；圖片比文字需要更多運算；視覺內容需要自己的安全篩選器。

Trap: 對多模態部署使用純文字的速率限制和成本估算——圖片輸入消耗的資源遠多於文字。

Mnemonic: 多模態部署 = 更大輸入 + 更多運算 + 多模態安全篩選器

## Q30
Type: single
Difficulty: 3
Tags: generative-ai, model-parameters
Concepts: advanced-parameters
Domain: Domain 2 — Implement Generative AI and Agentic Solutions
DomainNumber: 2

除了 temperature 和 top_p 之外，在 Azure 中你還可以調整哪些模型參數來最佳化生成式 AI 輸出？

A. 只有 temperature 和 top_p
B. Max tokens（輸出長度限制）、frequency penalty（減少重複）、presence penalty（鼓勵主題多樣性）、stop sequences（定義何時停止生成）和 seed（實現可重現輸出）
C. 只有模型名稱
D. 只有回應語言

Answer: B

Hint: Temperature 控制隨機性，但還有很多其他調整鈕——長度、重複和可重現性呢？

Explanation: 超越 temperature/top_p 的模型參數提供精細控制：max_tokens 限制輸出長度、penalties 控制重複和多樣性、stop sequences 定義生成邊界、seed 實現可重現性。AI-103 涵蓋「調整模型參數」作為提示最佳化。

Why others wrong: 超越 temperature/top_p 還有許多參數；模型名稱是選擇而非調整；語言由提示控制而非參數。

Trap: 只調整 temperature 而忽略其他參數——單靠 frequency penalty 就能透過減少重複來大幅改善輸出品質。

Mnemonic: 模型調整鈕：Temperature + Top_p + Max tokens + Penalties + Stop sequences + Seed

## Q31
Type: single
Difficulty: 2
Tags: information-extraction, rag-ingestion-flow
Concepts: rag-ingestion
Domain: Domain 5 — Implement Information Extraction Solutions
DomainNumber: 5

什麼是 RAG 匯入流程，它通常包含哪些步驟？

A. 上傳文件的單一步驟
B. 多步驟管線：文件取得 → 格式轉換（必要時 OCR） → 文字分塊（切割為適當大小的片段） → 嵌入生成 → 向量索引儲存——將原始文件轉化為可搜尋、可檢索的知識
C. 訓練新模型的過程
D. 將文件發送給使用者的流程

Answer: B

Hint: 原始文件無法進行語意搜尋——什麼處理能將它們轉化為可搜尋的知識？

Explanation: RAG 匯入透過順序處理步驟將原始文件轉化為可搜尋的知識庫。每個步驟都很關鍵：不好的分塊會產出差的檢索，不好的嵌入會產出不相關的匹配。AI-103 涵蓋配置「RAG 匯入流程，包括文件和使用 OCR」。

Why others wrong: 匯入是多步驟的，不是單步驟；它建立可搜尋的索引，不是新模型；它是為 AI 檢索建立索引，不是使用者分發。

Trap: 將匯入當成只是「上傳和索引」而不考慮分塊策略——如何切割文件會大幅影響檢索品質。

Mnemonic: RAG 匯入 = 取得 → 轉換 → 分塊 → 嵌入 → 索引

## Q32
Type: single
Difficulty: 2
Tags: computer-vision, image-editing-workflows
Concepts: mask-based-editing
Domain: Domain 3 — Implement Computer Vision Solutions
DomainNumber: 3

在 AI 圖片編輯工作流程中，遮罩和提示之間的關係是什麼？

A. 遮罩和提示無關
B. 遮罩定義要修改圖片的哪個區域（空間選擇），而提示描述要在該區域生成什麼（內容指定）——兩者共同提供對圖片編輯的空間和語意控制
C. 遮罩完全取代提示
D. 提示完全取代遮罩

Answer: B

Hint: 一個說「在哪裡編輯」，另一個說「放什麼進去」。

Explanation: 遮罩和提示協同工作：遮罩在空間上選擇編輯區域，提示在語意上描述期望的內容。AI-103 涵蓋配置「圖片編輯工作流程，包括修復、基於遮罩的編輯和提示驅動的修改」。

Why others wrong: 它們協同工作而非獨立；兩者都需要精確的編輯——遮罩本身不指定內容，提示本身不指定位置。

Trap: 做目標編輯時只用提示不用遮罩——AI 不知道要修改圖片的哪個部分。

Mnemonic: 遮罩 = 在哪裡編輯、提示 = 在那裡生成什麼（空間 + 語意控制）

## Q33
Type: single
Difficulty: 1
Tags: planning, model-deployment-config
Concepts: deployment-configuration
Domain: Domain 1 — Plan and Manage an Azure AI Solution
DomainNumber: 1

在 Foundry 中配置模型部署時，應該指定哪些設定？

A. 只有模型名稱
B. 模型版本、部署名稱、運算等級、速率限制（每分鐘 token 數和每分鐘請求數）、內容篩選器和區域——確保部署符合你的效能、安全和合規要求
C. 只有區域
D. 只有內容篩選器設定

Answer: B

Hint: 部署有多個維度——效能、安全、成本和位置都需要配置。

Explanation: 模型部署配置涵蓋多個維度：使用哪個模型版本、如何識別它（部署名稱）、效能等級（運算等級、速率限制）、安全（內容篩選器）和位置（區域以符合資料駐留要求）。AI-103 涵蓋配置模型和代理部署。

Why others wrong: 僅模型名稱不能指定如何部署；區域只是眾多設定之一；內容篩選器很重要但不夠完整。

Trap: 所有項目都用預設設定，然後在正式環境中發現速率限制太低或內容篩選器太嚴格。

Mnemonic: 部署配置 = 模型 + 名稱 + 運算 + 速率限制 + 篩選器 + 區域

## Q34
Type: multi
Difficulty: 3
Tags: planning, responsible-ai-audit
Concepts: audit-trail
Domain: Domain 1 — Plan and Manage an Azure AI Solution
DomainNumber: 1

AI-103 將哪些元件列為負責任 AI 稽核的一部分？（選擇兩項）

A. 記錄 AI 互動完整執行路徑的追蹤日誌
B. 社群媒體監控
C. 追蹤哪個模型、來源和過程產出每個輸出的來源詮釋資料
D. 競爭對手分析報告

Answer: A, C

Hint: 稽核需要「發生了什麼」（追蹤）和「從哪裡來」（來源）兩者。

Explanation: AI-103 明確涵蓋兩種稽核機制：追蹤日誌（記錄執行路徑以供除錯和問責）和來源詮釋資料（追蹤輸出溯源以供來源驗證）。兩者共同提供完整的可稽核性。AI-103 在稽核下列出「追蹤日誌、來源詮釋資料和核准工作流程」。

Why others wrong: 社群媒體監控和競爭對手分析是商業功能，不是 AI 稽核元件。

Trap: 實作追蹤日誌而沒有來源——你可以看到發生了什麼，但無法驗證產出輸出的來源和模型。

Mnemonic: AI 稽核 = 追蹤（發生了什麼） + 來源（從哪裡來）

## Q35
Type: single
Difficulty: 2
Tags: generative-ai, safety-signals
Concepts: safety-observability
Domain: Domain 2 — Implement Generative AI and Agentic Solutions
DomainNumber: 2

AI-103 提到實作「安全訊號」作為可觀測性的一部分。在此情境中，安全訊號是什麼？

A. 實體警報系統
B. 即時指標和警示，偵測 AI 系統遇到或生成潛在有害內容、提示注入嘗試、政策違規或異常使用模式——使安全事件能快速回應
C. 主控台中的錯誤訊息
D. 單元測試結果

Answer: B

Hint: 安全篩選器阻擋有害內容——但你怎麼知道它們被觸發了，頻率多高？

Explanation: 安全訊號是內容安全的可觀測層：追蹤篩選器啟動次數、注入嘗試率、政策違規頻率和異常模式的指標。它們實現主動式安全管理。AI-103 涵蓋「安全訊號」與追蹤和 token 分析並列為可觀測性元件。

Why others wrong: 它們是軟體指標，不是實體警報；它們超越簡單的錯誤記錄；它們是執行時監控，不是測試結果。

Trap: 啟用安全篩選器但不監控安全訊號——你阻擋了有害內容但不了解威脅態勢或攻擊趨勢。

Mnemonic: 安全訊號 = 安全篩選器正在攔截什麼的即時指標

## Q36
Type: single
Difficulty: 2
Tags: text-analysis, compliance-summarization
Concepts: compliance-summarization
Domain: Domain 4 — Implement Text Analysis Solutions
DomainNumber: 4

合規摘要與一般文字摘要有什麼不同？

A. 合規摘要總是更短
B. 合規摘要必須保留特定的法規用語、辨識義務和截止日期、標記風險領域、並按照法規框架結構化輸出——因為遺漏關鍵條款可能有法律後果
C. 合規摘要不需要 AI
D. 它們完全相同

Answer: B

Hint: 在摘要中遺漏法規截止日期可能損失數百萬——你能接受近似嗎？

Explanation: 合規摘要要求精確：必須保留確切的法規用語、辨識所有義務、凸顯截止日期、標記風險領域。一般摘要最佳化可讀性；合規摘要最佳化完整性和準確性。AI-103 將此列為領域自訂任務。

Why others wrong: 由於需要的細節，合規摘要可能更長；AI 處理量和一致性；一般摘要不保留法規的具體內容。

Trap: 對合規文件使用一般摘要提示——遺漏單一義務或截止日期可能產生嚴重的法律和財務後果。

Mnemonic: 合規摘要 = 保留義務 + 截止日期 + 風險 + 精確用語（不能近似）

## Q37
Type: single
Difficulty: 1
Tags: information-extraction, video-indexing
Concepts: video-ingestion
Domain: Domain 5 — Implement Information Extraction Solutions
DomainNumber: 5

影片內容如何被匯入 Azure AI Search 索引？

A. 影片僅按標題儲存和搜尋
B. 影片經過多個擷取管線處理——音訊轉錄、視覺幀分析、影片幀中的文字擷取（OCR）和場景偵測——所有擷取的資訊都被索引並附上時間戳，以實現可搜尋、可檢索的存取
C. 影片無法被索引
D. 只索引第一幀

Answer: B

Hint: 影片包含音訊、視覺和文字資訊——全部都可以被擷取和索引。

Explanation: 影片匯入使用平行擷取管線：音訊（轉錄）、視覺（幀分析、場景偵測）和文字（幀內 OCR）。所有擷取的資料都帶時間戳索引。AI-103 涵蓋匯入和索引「文件、圖片、音訊和影片」。

Why others wrong: 僅按標題搜尋浪費了影片內豐富的內容；影片是完全可索引的；所有幀都有貢獻，不只第一幀。

Trap: 只索引影片的音軌——畫面中的文字、圖表和場景等視覺內容包含有價值的可搜尋資訊。

Mnemonic: 影片索引 = 音軌 + 視覺幀 + 畫面文字（全部附時間戳）

## Q38
Type: single
Difficulty: 2
Tags: planning, scaling
Concepts: scaling-strategies
Domain: Domain 1 — Plan and Manage an Azure AI Solution
DomainNumber: 1

管理 AI 模型工作負載的擴展時，應該考慮什麼？

A. 只有使用者數量
B. Token 輸送量限制、並行請求容量、突發處理、自動擴展原則、以及佈建輸送量（保障效能）和標準部署（彈性擴展但延遲不穩定）之間的權衡
C. 只有伺服器的 CPU
D. 只有資料庫大小

Answer: B

Hint: AI 工作負載的擴展與傳統 Web 應用程式不同——token 和並行比單純的 CPU 更重要。

Explanation: AI 工作負載擴展涉及特有的維度：token 輸送量（不僅是請求數）、並行限制、突發模式和部署類型的權衡。AI-103 涵蓋「管理配額、擴展、速率限制和模型與代理工作負載的成本足跡」。

Why others wrong: 使用者數量是一個輸入但無法反映每個請求的 token 消耗；CPU 是一個資源但 AI 有基於 token 的限制；資料庫與模型擴展是分開的。

Trap: 將傳統 Web 應用程式的擴展模式套用到 AI 工作負載——單一 AI 請求可能因提示長度和生成大小而消耗截然不同的資源。

Mnemonic: AI 擴展 = Token + 並行 + 突發 + 部署類型（不只是使用者數量）

## Q39
Type: single
Difficulty: 3
Tags: generative-ai, agent-error-analysis
Concepts: error-categorization
Domain: Domain 2 — Implement Generative AI and Agentic Solutions
DomainNumber: 2

在對已部署的代理進行錯誤分析時，你注意到它經常給出錯誤的產品定價答案。你應該如何分類和調查這個失敗？

A. 怪模型太小，換成更大的
B. 透過檢查追蹤來分類錯誤類型（檢索遺漏 vs 生成幻覺 vs 資料過時）——代理是否檢索到正確的定價文件？文件是否最新？模型是否從檢索到的上下文中正確擷取了價格？
C. 忽略它，因為它只佔總查詢的一小部分
D. 給代理增加更多工具

Answer: B

Hint: 錯誤的答案可能是因為檢索遺漏、資料過時或理解錯誤造成——每個原因需要不同的修復方式。

Explanation: 系統性錯誤分析檢查完整的執行追蹤以辨識根本原因。定價錯誤可能源自：檢索（找到錯誤的文件）、資料品質（價格過時）或生成（模型讀錯檢索到的價格）。每個原因需要不同的修復。AI-103 涵蓋評估代理行為和執行錯誤分析。

Why others wrong: 更大的模型不能修復檢索或資料問題；忽略錯誤讓它們累積；更多工具不能修復現有工具的故障。

Trap: 在診斷根本原因前就跳到解決方案（更大模型、更多工具）——修復方式完全取決於管線中哪裡出了錯。

Mnemonic: 錯誤分析流程：追蹤 → 分類 → 根本原因 → 針對性修復

## Q40
Type: single
Difficulty: 2
Tags: computer-vision, visual-grounding
Concepts: visual-evidence-qa
Domain: Domain 3 — Implement Computer Vision Solutions
DomainNumber: 3

AI-103 涵蓋實作「基於視覺證據的問答」。基於視覺證據的接地是什麼意思？

A. 根據假設回答問題
B. 模型的答案必須直接由圖片中視覺呈現的內容支持——如果被問「汽車是什麼顏色？」，答案必須來自觀察圖片中的汽車，而不是來自模型的訓練資料或假設
C. 在 Google 搜尋答案
D. 只使用文字上下文來回答

Answer: B

Hint: 「接地」意味著答案必須可追溯到圖片中的證據——不能捏造。

Explanation: 視覺接地確保答案基於可觀察的圖片內容，而非模型假設或訓練資料。這是視覺版的 RAG 接地——答案必須可歸因於來源證據。AI-103 涵蓋實作「基於視覺證據」的視覺問答。

Why others wrong: 假設是接地的反面；網路搜尋是外部的，不是視覺證據；純文字上下文忽略了圖片。

Trap: 接受模型的視覺問答答案而不檢查證據是否真的可見於圖片中——模型可能幻覺出視覺細節。

Mnemonic: 視覺接地 = 答案必須在圖片中可見（不是假設或幻覺）

## Q41
Type: single
Difficulty: 2
Tags: information-extraction, retrieval-pipeline-agents
Concepts: dynamic-retrieval
Domain: Domain 5 — Implement Information Extraction Solutions
DomainNumber: 5

AI-103 涵蓋將檢索管線「直接連接到工作流程和代理工具」。這與傳統 RAG（在生成前僅檢索一次）有什麼不同？

A. 沒有差別
B. 直接連接實現動態、多回合檢索——代理可以在單次互動中多次搜尋、根據中間結果精煉查詢、並結合多個檢索步驟的資訊來回答需要反覆研究的複雜問題
C. 直接連接更慢
D. 傳統 RAG 檢索更多文件

Answer: B

Hint: 研究者不會只做一次搜尋——他們搜尋、閱讀、精煉，然後再搜尋。

Explanation: 將檢索作為代理工具連接使反覆的、情境感知的檢索成為可能。代理決定何時搜尋、如何精煉查詢、以及何時有足夠的資訊。這對複雜、多面向的問題超越了單次查詢 RAG。AI-103 將此涵蓋為資訊擷取整合的一部分。

Why others wrong: 動態檢索與靜態 RAG 根本不同；每次檢索增加延遲但改善答案品質；品質取決於策略而非文件數量。

Trap: 對需要多次檢索步驟的問題實作單次查詢 RAG——代理得到一個部分答案而非反覆建構完整的答案。

Mnemonic: 代理 + 檢索工具 = 搜尋 → 分析 → 精煉 → 再搜尋（反覆研究）

## Q42
Type: single
Difficulty: 1
Tags: generative-ai, agent-conversation-tracking
Concepts: tracking-methods
Domain: Domain 2 — Implement Generative AI and Agentic Solutions
DomainNumber: 2

AI 代理的主要對話追蹤方式有哪些？

A. 只追蹤最後一則訊息
B. 完整對話歷史（所有訊息）、滑動視窗（最近 N 則訊息）、摘要歷史（壓縮先前的回合）和混合方式——各自在上下文完整性與 token 成本和上下文視窗限制之間做權衡
C. 只使用資料庫
D. 完全不追蹤對話

Answer: B

Hint: 上下文視窗有 token 限制——如何在這些限制內維持對話連貫性？

Explanation: 對話追蹤在上下文完整性和 token 效率之間取得平衡。完整歷史保留一切（昂貴但完整）、滑動視窗保留最近的回合（便宜但失去舊上下文）、摘要壓縮歷史（平衡）。AI-103 涵蓋定義「對話追蹤方式」作為代理設計的一部分。

Why others wrong: 單則訊息追蹤失去所有上下文；資料庫儲存但不決定追蹤策略；不追蹤意味著沒有多回合能力。

Trap: 使用完整對話歷史而不考慮上下文視窗限制——長對話會溢出上下文，導致失敗或截斷。

Mnemonic: 追蹤方式：完整（全部） → 視窗（最近 N） → 摘要（壓縮） → 混合（組合）

## Q43
Type: single
Difficulty: 2
Tags: planning, relevance-performance
Concepts: relevance-monitoring
Domain: Domain 1 — Plan and Manage an Azure AI Solution
DomainNumber: 1

AI-103 提到監控搜尋索引的「相關性效能」。這衡量的是什麼？

A. 搜尋回應的速度
B. 檢索到的文件與使用者實際資訊需求的匹配程度——透過精確率（回傳結果是否相關？）、召回率（是否找到所有相關文件？）和正規化折扣累計增益（最佳結果是否排在最前面？）等指標衡量
C. 索引中有多少文件
D. 索引多常更新

Answer: B

Hint: 回傳 100 份文件但沒有一份回答問題的搜尋，速度雖快但不相關。

Explanation: 相關性效能衡量搜尋品質：是否找到正確的文件（召回率）、是否排除不相關的文件（精確率）、最佳結果是否排在最前面（NDCG）。AI-103 涵蓋監控「搜尋索引健康狀態和相關性效能」。

Why others wrong: 速度是延遲，不是相關性；文件數量是索引大小；更新頻率是新鮮度，不是相關性。

Trap: 最佳化搜尋速度但忽略相關性——快速但回傳不相關結果的搜尋對 RAG 來說毫無用處。

Mnemonic: 相關性 = 正確文件 + 正確排名（精確率 + 召回率 + NDCG）

## Q44
Type: single
Difficulty: 3
Tags: generative-ai, hybrid-rules-engine
Concepts: rules-engine-integration
Domain: Domain 2 — Implement Generative AI and Agentic Solutions
DomainNumber: 2

在混合 LLM 和規則引擎架構中，哪些任務通常應該由規則引擎而非 LLM 處理？

A. 創意寫作
B. 確定性的商業邏輯——稅務計算、法規合規檢查、資格判定、價格查詢，以及任何正確答案明確且每次必須完全正確的操作
C. 對話回應
D. 情感分析

Answer: B

Hint: 如果答案必須百分之百正確且遵循已知規則，你應該讓 LLM 猜測還是使用保證正確的規則引擎？

Explanation: 規則引擎為定義明確的邏輯保證確定性、正確的輸出。LLM 是機率性的，可能產出錯誤的計算。AI-103 涵蓋協調「混合 LLM 和規則引擎」——讓各自發揮優勢。規則用於精確，LLM 用於彈性。

Why others wrong: 創意寫作需要 LLM 的彈性；對話回應受益於 LLM 的自然性；情感分析本質上是機率性的。

Trap: 使用 LLM 進行稅務計算或合規檢查——它有時會算錯，這對這些使用案例是不可接受的。

Mnemonic: 規則引擎 = 每次都必須正確、LLM = 理解和生成（各做最擅長的）

## Q45
Type: single
Difficulty: 2
Tags: information-extraction, enrichment-images
Concepts: image-enrichment
Domain: Domain 5 — Implement Information Extraction Solutions
DomainNumber: 5

AI-103 涵蓋「使用文字、圖片和版面技能」實作擴充。圖片擴充在 Azure AI Search 管線中如何運作？

A. 索引時跳過圖片
B. 圖片擴充在索引時套用電腦視覺技能——擷取文字（OCR）、辨識物件、生成描述和偵測視覺特徵——將這些擷取的資訊作為可搜尋的詮釋資料欄位加入索引
C. 圖片單獨儲存
D. 圖片擴充只適用於 JPEG 檔案

Answer: B

Hint: 文件中的圖片包含資訊——如何讓這些資訊可被搜尋？

Explanation: 圖片擴充在索引管線中使用視覺技能，從嵌入文件中的圖片擷取可搜尋的資訊。這使視覺內容可透過文字查詢被發現。AI-103 涵蓋使用「文字、圖片和版面」技能實作擴充。

Why others wrong: 跳過圖片浪費有價值的內容；圖片是被處理和索引的，不是分離的；擴充適用於多種圖片格式。

Trap: 索引文件時忽略其嵌入的圖片——圖表、圖表和照片包含有價值的資訊，擴充使其可搜尋。

Mnemonic: 文件中的圖片 → 視覺技能擷取資訊 → 索引中的可搜尋詮釋資料

## Q46
Type: single
Difficulty: 2
Tags: text-analysis, multimodal-audio
Concepts: audio-input-reasoning
Domain: Domain 4 — Implement Text Analysis Solutions
DomainNumber: 4

實作來自音訊輸入的多模態推理時，除了轉錄之外還應該考慮什麼能力？

A. 只有音量大小
B. 說話者辨識和分段（誰說了什麼）、從語調模式偵測情感和情緒、環境聲音分類、以及時序分析（停頓、語速）——所有這些都提供比轉錄文字更豐富的上下文
C. 只有音訊檔案格式
D. 只有錄音時長

Answer: B

Hint: 兩個人用不同語調說「沒問題」意味著非常不同的事——AI 如何捕捉這一點？

Explanation: 音訊多模態推理擷取超越文字的資訊：說話者辨識、情感語調、環境上下文和時序模式。這些副語言特徵為理解對話提供關鍵的上下文。AI-103 涵蓋啟用「來自音訊輸入的多模態推理」。

Why others wrong: 音量只是眾多音訊特徵之一；檔案格式是詮釋資料；時長是基本屬性，不是分析。

Trap: 將音訊處理簡化為僅轉錄——你失去了說話者身份、情感語調和環境上下文，這些對完整理解至關重要。

Mnemonic: 音訊推理 = 文字（轉錄） + 誰（說話者） + 怎樣（語調/情感） + 在哪（環境）

## Q47
Type: single
Difficulty: 1
Tags: information-extraction, clean-representations
Concepts: grounded-representations
Domain: Domain 5 — Implement Information Extraction Solutions
DomainNumber: 5

AI-103 提到產出「與代理和 RAG 搭配使用的乾淨、接地的表示」。在此情境中「乾淨」是什麼意思？

A. 移除所有格式
B. 從擷取的文字中移除雜訊、偽像和不相關內容（頁首、頁尾、頁碼、浮水印），同時保留有意義的結構和內容——產出準確反映文件資訊內容而不帶擷取偽像的表示
C. 讓文字更短
D. 翻譯成英文

Answer: B

Hint: 原始 OCR 輸出包含頁碼、頁首、頁尾、浮水印——LLM 需要這些嗎？

Explanation: 乾淨表示移除擷取雜訊（偽像、重複的頁首/頁尾、頁碼、浮水印），同時保留有意義的內容和結構。這透過防止檢索到非資訊性內容來改善 RAG 品質。AI-103 涵蓋使用 Content Understanding 產出乾淨表示。

Why others wrong: 移除所有格式會失去結構；縮短是摘要；翻譯改變語言而非乾淨度。

Trap: 將原始 OCR 輸出（帶頁碼、每頁的頁首、浮水印文字）餵入 RAG 系統——這些偽像會污染搜尋結果。

Mnemonic: 乾淨 = 保留有意義的內容、移除雜訊（沒有頁碼、沒有浮水印、沒有重複頁首）

## Q48
Type: single
Difficulty: 3
Tags: planning, agent-constraints
Concepts: behavioral-constraints
Domain: Domain 1 — Plan and Manage an Azure AI Solution
DomainNumber: 1

AI-103 提到用「約束」以及監督模式和工具存取控制來治理代理行為。哪些類型的約束可以套用到代理上？

A. 只有速率限制
B. 輸出格式約束（必須以特定結構回應）、主題邊界（必須在定義的範圍內）、動作限制（每回合最大工具呼叫次數）、時間邊界（最大回應時間）和安全約束（不得產出特定類別的內容）
C. 只有安全篩選器
D. 只有對話長度限制

Answer: B

Hint: 正式環境中的代理需要在它說什麼、做什麼和做多少上都有護欄。

Explanation: 代理約束定義跨多個維度的運作邊界：格式、範圍、動作、時間和安全。它們防止代理離題、執行過多工具呼叫或在單一請求上花費過長時間。AI-103 涵蓋用「監督模式、約束和工具存取控制」治理代理。

Why others wrong: 速率限制是約束的一種類型；安全篩選器是一種機制；對話長度是一個維度——約束是多維度的。

Trap: 只約束代理的安全而不約束其範圍或動作——一個安全但離題或每回合跑 50 次工具呼叫的代理仍然是有問題的。

Mnemonic: 代理約束 = 格式 + 範圍 + 動作 + 時間 + 安全（多維度護欄）

## Q49
Type: single
Difficulty: 2
Tags: generative-ai, approval-workflows
Concepts: approval-architecture
Domain: Domain 2 — Implement Generative AI and Agentic Solutions
DomainNumber: 2

為 AI 代理實作核准工作流程時，核准介面應該提供給人工審查者什麼？

A. 只有「是/否」按鈕
B. 建議的動作、代理提出此動作的推理、相關上下文和來源文件、動作的潛在影響、以及在執行前核准、拒絕或修改動作的能力
C. 只有最終結果
D. 只有代理的信心分數

Answer: B

Hint: 核准者需要足夠的上下文來做出知情的決策——不只是「核准這個」。

Explanation: 有效的核准工作流程提供完整的決策上下文：代理想做什麼、為什麼想做、什麼證據支持這個動作、核准後會發生什麼。審查者應該能夠核准、拒絕或修改。AI-103 涵蓋建構「具有防護措施和核准流程控制」的工作流程。

Why others wrong: 沒有上下文的是/否會導致橡皮圖章式核准；只顯示結果是事後的，不是事前核准；信心分數本身不能解釋動作。

Trap: 將核准實作為沒有展示推理的簡單是/否閘門——核准者會在不理解動作的情況下要麼全部通過要麼全部拒絕。

Mnemonic: 核准 = 動作 + 推理 + 證據 + 影響 + 修改選項

## Q50
Type: single
Difficulty: 2
Tags: information-extraction, ocr-rag-integration
Concepts: ocr-rag-pipeline
Domain: Domain 5 — Implement Information Extraction Solutions
DomainNumber: 5

配置包含 OCR 的 RAG 匯入流程時，處理掃描文件有哪些重要考量？

A. OCR 總是產出完美的文字
B. 你應該為多語言文件配置語言提示、處理不同的掃描品質（解析度、歪斜、雜訊）、實作基於信心度的篩選以標記低品質擷取供人工審查、以及根據文件量選擇單頁或批次處理
C. OCR 只適用於英文文件
D. 掃描文件不需要特殊處理

Answer: B

Hint: 一份沾了咖啡漬、微微歪斜的多語言掃描文件和乾淨的數位 PDF 非常不同。

Explanation: OCR 品質隨掃描品質、語言和文件複雜度而大幅變化。正式環境的 RAG 匯入必須透過語言配置、品質門檻、信心度篩選和適當的處理模式來處理這些差異。AI-103 涵蓋配置 RAG 匯入「包括文件和使用 OCR」。

Why others wrong: OCR 會出錯，特別是在品質差的掃描上；OCR 支援多種語言；掃描文件是 OCR 的主要使用案例，絕對需要特殊處理。

Trap: 假設 OCR 輸出總是正確的並索引所有內容而不做品質檢查——低信心度的擷取可能用垃圾文字污染索引。

Mnemonic: RAG 的 OCR = 語言提示 + 品質處理 + 信心度篩選 + 批次策略
