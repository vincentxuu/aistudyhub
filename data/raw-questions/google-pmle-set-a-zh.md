---
exam: PMLE
lang: zh-TW
---

## Q1
Type: single
Difficulty: 1
Tags: low-code, automl, vertex-ai
Concepts: automl-training
Domain: Domain 1 — Architecting Low-Code AI Solutions
DomainNumber: 1

一家零售公司想建立影像分類模型來分類產品照片，但 ML 專業知識有限。哪個 Google Cloud 服務能讓他們以最少的程式碼訓練自訂模型？

A. Vertex AI AutoML
B. BigQuery ML
C. Cloud Functions
D. 搭配 TensorFlow 的 Compute Engine

Answer: A

Hint: 想想哪個服務是為不具備深度 ML 專業知識的使用者設計的，讓他們能訓練自訂模型。

Explanation: Vertex AI AutoML 讓使用者能以最少的 ML 專業知識和程式碼訓練高品質的自訂模型。它會根據提供的標記資料集自動處理架構搜尋、超參數調整和訓練。

Why others wrong: BigQuery ML 用於表格資料的 SQL 查詢，不支援影像分類；Cloud Functions 是無伺服器運算服務，不是 ML 訓練工具；搭配 TensorFlow 的 Compute Engine 需要大量 ML 專業知識。

Trap: 混淆 BigQuery ML（表格/SQL 為主）與 AutoML（支援影像、文字、表格、影片）。

Mnemonic: AutoML = 非專家的自動化 ML，支援影像/文字/表格/影片

## Q2
Type: single
Difficulty: 1
Tags: low-code, bigquery-ml, tabular
Concepts: bqml-model-types
Domain: Domain 1 — Architecting Low-Code AI Solutions
DomainNumber: 1

一位資料分析師想用已儲存在 BigQuery 中的資料來預測客戶流失。他擅長 SQL 但不會 Python。哪種方式最合適？

A. 將資料匯出為 CSV 並使用 Vertex AI AutoML
B. 使用 BigQuery ML 以 SQL 訓練分類模型
C. 在 Vertex AI Workbench 上設定 Jupyter notebook
D. 使用 Dataflow 建立自訂管線

Answer: B

Hint: 想想哪個工具能讓 SQL 使用者不離開 BigQuery 就建立 ML 模型。

Explanation: BigQuery ML 允許使用者直接在 BigQuery 中使用標準 SQL 查詢來建立、訓練和部署 ML 模型。對於精通 SQL 且資料已在 BigQuery 中的分析師，這是建立流失預測模型最低阻力的路徑。

Why others wrong: 匯出到 AutoML 增加不必要的複雜性；Jupyter notebook 需要 Python 知識；Dataflow 用於資料處理，不是模型訓練。

Trap: 假設所有 ML 都需要 Python — BigQuery ML 讓 SQL 使用者也能進行 ML。

Mnemonic: 資料在 BigQuery + SQL 技能 = BigQuery ML

## Q3
Type: single
Difficulty: 2
Tags: low-code, document-ai, api
Concepts: pre-trained-apis
Domain: Domain 1 — Architecting Low-Code AI Solutions
DomainNumber: 1

一家醫療公司需要從掃描的醫療表單中擷取病患姓名、日期和診斷代碼。他們需要高準確度且符合 HIPAA 規範。哪個 Google Cloud 解決方案最合適？

A. 通用 OCR 的 Vision AI
B. 搭配自訂處理器的 Document AI
C. 用於實體擷取的 Natural Language API
D. Vertex AI AutoML Text

Answer: B

Hint: 想想哪個服務是專門為從文件中擷取結構化資料而設計的。

Explanation: Document AI 提供專門為從文件中擷取結構化資料而設計的預訓練和自訂處理器。它在單一管線中處理 OCR、版面理解和實體擷取，並支援符合合規功能的醫療專用處理器。

Why others wrong: 通用 OCR 只擷取文字但不擷取結構化欄位；Natural Language API 處理純文字，不是掃描文件；AutoML Text 需要手動標記且不處理文件版面。

Trap: 使用通用 OCR 然後另外做 NLP 步驟 — Document AI 將兩者結合在單一專用管線中。

Mnemonic: 有結構的文件 → Document AI；純文字 → NL API

## Q4
Type: single
Difficulty: 2
Tags: low-code, model-garden, foundation-models
Concepts: model-selection
Domain: Domain 1 — Architecting Low-Code AI Solutions
DomainNumber: 1

你的團隊需要內部文件的文字摘要功能。你想最小化微調工作量，使用 Google 管理的模型。你應該先看哪裡？

A. TensorFlow Hub
B. Vertex AI Model Garden
C. Hugging Face 網站
D. Cloud Storage 公開資料集

Answer: B

Hint: 想想 Google Cloud 中探索和部署基礎模型的中央位置。

Explanation: Vertex AI Model Garden 是 Google Cloud 的精選基礎模型、開源模型和任務專用模型目錄。它提供一鍵部署、微調和 API 存取 Gemini、PaLM 和合作夥伴模型等功能，非常適合在不從頭建構的情況下快速部署摘要功能。

Why others wrong: TensorFlow Hub 有預訓練模型但不是受管理的基礎模型；Hugging Face 是外部平台，需要自行管理基礎設施；Cloud Storage 有資料集，不是模型。

Trap: 在 Model Garden 提供與 Google Cloud 整合的受管理部署時，還去外部模型中心找。

Mnemonic: Model Garden = Google 的一站式模型商店（探索、部署、微調）

## Q5
Type: single
Difficulty: 1
Tags: low-code, vertex-ai-agent-builder, rag
Concepts: agent-builder
Domain: Domain 1 — Architecting Low-Code AI Solutions
DomainNumber: 1

一家公司想建立客服聊天機器人，根據產品文件回答問題。他們希望盡量少寫自訂程式碼。應該使用哪個 Google Cloud 服務？

A. Dialogflow CX
B. Vertex AI Agent Builder
C. 搭配自訂 LLM 包裝的 Cloud Run
D. Vertex AI Workbench

Answer: B

Hint: 想想哪個服務提供有根據的、基於 RAG 的對話式 AI，且低程式碼設定。

Explanation: Vertex AI Agent Builder（前身為 Vertex AI Search and Conversation）讓團隊能建立可使用企業資料來源回答問題的有根據 AI 代理。它提供內建的 RAG 功能、資料連接器和低程式碼介面。

Why others wrong: Dialogflow CX 是基於意圖的機器人，需要手動設計流程；Cloud Run 需要自訂開發；Workbench 用於 notebook 開發。

Trap: 為知識基礎的聊天機器人選擇 Dialogflow CX — Agent Builder 是專為基於 RAG 的問答而設計的。

Mnemonic: Agent Builder = 從你的資料建立有根據的 AI 代理，低程式碼

## Q6
Type: single
Difficulty: 2
Tags: low-code, gemini-api, prompt-engineering
Concepts: gemini-multimodal
Domain: Domain 1 — Architecting Low-Code AI Solutions
DomainNumber: 1

你需要在單一請求中同時分析影像和文字，從附有檢查員備註的照片中分類產品缺陷。你應該使用哪個 API 功能？

A. Vision AI 物件偵測接 Natural Language API
B. Gemini API 的多模態輸入
C. 搭配自訂處理器的 Document AI
D. 搭配文字中繼資料的 AutoML Vision

Answer: B

Hint: 想想哪個模型能在單一呼叫中同時處理影像和文字。

Explanation: Gemini 是原生多模態模型，能在單一請求中處理文字、影像、音訊和影片。對於需要同時理解視覺和文字輸入的任務，Gemini 的多模態功能提供最直接的解決方案。

Why others wrong: 串接 Vision AI + NL API 更複雜且失去跨模態上下文；Document AI 用於文件擷取，不是缺陷分類；AutoML Vision 無法原生整合文字中繼資料。

Trap: 在單一多模態呼叫就能處理時建立兩步驟管線 — Gemini 消除了串接個別 API 的需要。

Mnemonic: 單一請求中多種模態 → Gemini 多模態

## Q7
Type: single
Difficulty: 1
Tags: data-processing, feature-store, vertex-ai
Concepts: feature-store
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

使用 Vertex AI Feature Store 而非在模型服務時即時計算特徵的主要好處是什麼？

A. 減少模型訓練時間
B. 確保訓練和服務之間特徵值一致，減少訓練-服務偏差
C. 自動選擇最佳特徵
D. 消除特徵工程的需要

Answer: B

Hint: 想想訓練特徵和服務特徵以不同方式計算時會出現的常見問題。

Explanation: Vertex AI Feature Store 提供集中式儲存庫來儲存、分享和服務 ML 特徵。其主要好處是確保訓練時使用的相同特徵值和轉換在服務時也可用，消除訓練-服務偏差 — 這是生產 ML 錯誤的主要來源。

Why others wrong: Feature Store 不會直接減少訓練時間；它儲存特徵，不選擇特徵；特徵工程仍然需要用來建立特徵。

Trap: 以為 Feature Store 取代了特徵工程 — 它儲存和服務特徵，但你仍需要建立它們。

Mnemonic: Feature Store = 特徵的唯一真實來源，訓練 = 服務

## Q8
Type: single
Difficulty: 2
Tags: data-processing, dataflow, apache-beam
Concepts: batch-streaming-processing
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

你有一個處理 CSV 檔案資料的原型 ML 模型。在生產中，你需要使用相同的處理邏輯同時處理歷史批次資料和來自 Pub/Sub 的即時串流資料。應該使用哪個服務？

A. 搭配分開的批次和串流 DAG 的 Cloud Composer
B. 搭配 Apache Beam 統一管線的 Dataflow
C. 搭配 Apache Spark 的 Dataproc
D. 由 Pub/Sub 觸發的 Cloud Functions

Answer: B

Hint: 想想哪個框架讓你寫一個管線就能同時處理批次和串流。

Explanation: Apache Beam 的統一程式設計模型在 Dataflow 上執行，讓你寫一個管線就能處理批次和串流資料。無論資料來源如何，相同的轉換邏輯都適用，確保一致性並減少程式碼重複。

Why others wrong: 分開的 DAG 會重複邏輯；Spark 需要管理叢集且有不同的串流模型；Cloud Functions 處理個別事件，不是管線處理。

Trap: 為批次和串流分別建立管線 — Dataflow 上的 Apache Beam 用一個程式碼庫統一兩者。

Mnemonic: Beam = 批次 + 串流在一個管線中

## Q9
Type: single
Difficulty: 2
Tags: scaling, distributed-training, vertex-ai
Concepts: distributed-training
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

你的原型模型在單一 GPU 上訓練需要 8 小時。生產需要每天在 10 倍資料上重新訓練。在 Google Cloud 上擴展訓練最有效的方式是什麼？

A. 使用更大的單一 GPU（A100 取代 T4）
B. 使用 Vertex AI Training 的多工作節點分散式訓練
C. 將資料集分成 10 份並訓練 10 個獨立模型
D. 使用隨機抽樣減少資料集

Answer: B

Hint: 想想如何跨多台機器平行化訓練以處理更大的資料集。

Explanation: Vertex AI Training 支援使用資料平行等策略跨多個工作節點和 GPU 進行分散式訓練。這在維持單一模型的同時擴展訓練以處理更大的資料集，Vertex AI 負責管理叢集編排和資源配置。

Why others wrong: 更大的單一 GPU 有其限制，不會隨資料大小線性擴展；訓練獨立模型會造成不一致；抽樣會失去有價值的資料。

Trap: 試圖用單一更大的機器解決規模問題 — 分散式訓練是生產規模資料的標準方法。

Mnemonic: 10 倍資料 → 分散到各工作節點，而非 10 個獨立模型

## Q10
Type: single
Difficulty: 3
Tags: scaling, hyperparameter-tuning, vertex-ai
Concepts: hyperparameter-optimization
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

你正在將原型 XGBoost 模型擴展到生產環境。你需要有效率地調整 max_depth、learning_rate 和 n_estimators 同時最小化運算成本。哪個 Vertex AI 功能和搜尋演算法組合最合適？

A. Vertex AI 超參數調整搭配網格搜尋
B. Vertex AI 超參數調整搭配貝葉斯最佳化和提前停止
C. 手動調整搭配 Vertex AI Experiments 追蹤
D. AutoML Tables 自動找到最佳模型

Answer: B

Hint: 想想哪種搜尋策略能從先前的嘗試中學習，專注於超參數空間中有希望的區域。

Explanation: Vertex AI 超參數調整搭配貝葉斯最佳化透過建立目標函數的機率模型來智慧地探索搜尋空間，所需嘗試次數比網格搜尋少。結合提前停止（提前終止不看好的嘗試），這在找到好的超參數配置的同時最小化運算成本。

Why others wrong: 網格搜尋窮舉評估所有組合，三個參數時很昂貴；手動調整很慢且無法擴展；AutoML Tables 會完全取代你的模型選擇而非調整它。

Trap: 為了效率選擇網格搜尋 — 它以指數方式評估每個組合。貝葉斯最佳化更聰明且更便宜。

Mnemonic: 貝葉斯 = 大腦（從過去嘗試中學習），網格 = 蠻力（試遍一切）

## Q11
Type: single
Difficulty: 2
Tags: scaling, custom-training, containers
Concepts: custom-training-jobs
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

你的資料科學團隊在本地開發了 PyTorch 模型。他們想在 Vertex AI 上使用特定的程式庫相依性執行訓練。推薦的方式是什麼？

A. 用 TensorFlow 重寫模型以使用預建容器
B. 將程式碼打包到自訂 Docker 容器並提交 Vertex AI 自訂訓練任務
C. 將 notebook 上傳到 Vertex AI Workbench 手動執行
D. 使用 Cloud Build 編譯模型

Answer: B

Hint: 想想如何將你確切的本地環境帶到雲端訓練。

Explanation: Vertex AI 自訂訓練任務接受自訂 Docker 容器，讓團隊帶入任何框架、程式庫或相依性。你將 PyTorch 訓練程式碼和需求打包到容器中，推送到 Artifact Registry，然後提交為 Vertex AI 的自訂訓練任務。

Why others wrong: 在自訂容器支援 PyTorch 時用 TensorFlow 重寫是浪費；手動執行 notebook 無法擴展；Cloud Build 用於 CI/CD，不是模型訓練。

Trap: 以為在 Google Cloud 上必須使用 TensorFlow — Vertex AI 透過自訂容器支援任何框架。

Mnemonic: 自訂容器 = 將你自己的框架帶到 Vertex AI

## Q12
Type: single
Difficulty: 2
Tags: scaling, data-versioning, experiments
Concepts: experiment-tracking
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

在原型階段，你的團隊用不同的資料集、特徵和超參數執行了數十個實驗。現在要轉到生產環境，你需要確保可重現性。哪個 Vertex AI 功能提供實驗血統追蹤？

A. Vertex AI Pipelines
B. 搭配 ML Metadata 的 Vertex AI Experiments
C. Cloud Logging
D. Vertex AI Model Registry

Answer: B

Hint: 想想哪個服務追蹤跨實驗的輸入、參數、指標和產出物的完整血統。

Explanation: Vertex AI Experiments 與 ML Metadata 整合，自動追蹤每次實驗執行的資料集、參數、指標和產出物。這建立了完整的血統圖，確保任何實驗都能精確重現，這對從原型到生產至關重要。

Why others wrong: Pipelines 編排工作流程但不固有追蹤實驗比較；Cloud Logging 擷取日誌，不是 ML 中繼資料；Model Registry 儲存已訓練的模型，不是實驗血統。

Trap: 依賴 notebook 或試算表做實驗追蹤 — Vertex AI Experiments 提供結構化、可查詢的中繼資料。

Mnemonic: Experiments + ML Metadata = 從資料到模型的完整血統

## Q13
Type: single
Difficulty: 1
Tags: model-development, tensorflow, keras
Concepts: model-architecture
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

建立文字分類模型時，哪種層類型最適合在輸入模型前將文字轉換為密集向量表示？

A. Dense 層
B. Embedding 層
C. 卷積層
D. Dropout 層

Answer: B

Hint: 想想如何將離散的字詞索引轉換為連續的向量空間。

Explanation: Embedding 層將離散的 token（字詞索引）映射為密集的低維向量，捕捉語義關係。這是大多數 NLP 模型的基本第一步，將稀疏的 one-hot 表示轉換為可學習的密集表示。

Why others wrong: Dense 層對連續輸入進行線性轉換；卷積層擷取局部模式但需要數值輸入；Dropout 是正則化技術，不是表示層。

Trap: 直接在 one-hot 編碼的字詞上使用 Dense 層 — 這在計算上很昂貴且無法學習語義關係。

Mnemonic: Embedding = 字詞 → 向量（稀疏 → 密集）

## Q14
Type: single
Difficulty: 2
Tags: model-development, regularization, overfitting
Concepts: regularization-techniques
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

你的深度學習模型達到 98% 訓練準確率但只有 72% 驗證準確率。哪種技術組合最可能解決這個問題？

A. 增加模型複雜度並訓練更多 epoch
B. 添加 Dropout 層、應用 L2 正則化，並使用資料增強
C. 降低學習率並增加批次大小
D. 從 Adam 切換到 SGD 最佳化器

Answer: B

Hint: 訓練和驗證準確率之間的大差距表示一種特定類型的問題。

Explanation: 訓練和驗證準確率之間 26 個百分點的差距是過擬合的明確信號 — 模型記憶了訓練資料但無法泛化。Dropout 在訓練時隨機停用神經元，L2 正則化懲罰過大的權重，資料增強增加有效訓練集的多樣性 — 都是減少過擬合的標準方法。

Why others wrong: 增加複雜度會加劇過擬合；降低學習率解決的是收斂問題，不是泛化；最佳化器選擇相對於過擬合問題是次要的。

Trap: 以為高訓練準確率代表模型很好 — 驗證差距才是真正的信號。

Mnemonic: 過擬合 = 記憶。治療：Drop(out) + 正則化 + 增強

## Q15
Type: single
Difficulty: 2
Tags: model-development, transfer-learning, fine-tuning
Concepts: transfer-learning
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

你只有 500 張標記影像用於專業醫學影像任務。從頭訓練模型效果很差。最有效的方式是什麼？

A. 收集更多資料直到至少有 10,000 張影像
B. 使用預訓練模型的遷移學習，並在你的 500 張影像上微調
C. 對影像使用非監督式叢集
D. 積極應用資料增強並從頭訓練

Answer: B

Hint: 想想利用從數百萬張影像中學到的知識來幫助小資料集。

Explanation: 遷移學習取用在大型資料集（如 ImageNet）上預訓練的模型，該模型已學會一般視覺特徵（邊緣、紋理、形狀），然後在你的特定小型資料集上微調。這是有限標記資料在電腦視覺中的標準方法，通常大幅優於從頭訓練。

Why others wrong: 等待更多資料會延遲專案；叢集是非監督式的，無法分類；僅靠增強可能無法彌補只有 500 張影像的不足。

Trap: 以為你需要數千張影像才能訓練任何模型 — 遷移學習讓小型資料集變得可行。

Mnemonic: 小資料 → 站在預訓練巨人的肩膀上

## Q16
Type: single
Difficulty: 3
Tags: model-development, loss-functions, imbalanced-data
Concepts: class-imbalance
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

你正在建立詐欺偵測模型，其中只有 0.1% 的交易是詐欺。你的模型達到 99.9% 準確率但沒有捕捉到任何詐欺案件。最有效的解決方式是什麼？

A. 增加訓練 epoch 數
B. 使用 focal loss 或類別權重，結合 SMOTE 過取樣，並使用 precision-recall AUC 取代準確率來評估
C. 增加更多層到模型
D. 使用更大的批次大小

Answer: B

Hint: 想想為什麼當一個類別極為罕見時準確率會具有誤導性。

Explanation: 當 99.9% 是負類別時，對所有交易預測「非詐欺」的模型就能得到 99.9% 準確率。Focal loss 降低簡單負樣本的權重，專注於困難樣本；類別權重更重地懲罰少數類別的錯誤分類；SMOTE 建立合成少數類別樣本；PR-AUC 直接衡量正類別的效能，不像準確率。

Why others wrong: 更多 epoch 無法修復學會多數類別捷徑的模型；更多層增加容量但不解決不平衡；更大批次大小不解決根本的類別分布問題。

Trap: 在不平衡資料集上相信準確率 — 99.9% 準確率可能意味著模型對詐欺一無所知。

Mnemonic: 不平衡 → 重新加權、重新平衡、重新衡量（不是準確率）

## Q17
Type: single
Difficulty: 2
Tags: model-development, generative-ai, fine-tuning
Concepts: llm-fine-tuning
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

你想調整 Gemini 模型以遵循你公司在生成客戶電子郵件時的特定語氣和格式準則。在 Vertex AI 中最合適的微調方式是什麼？

A. 從頭完整重新訓練模型
B. 使用範例輸入-輸出配對進行監督式微調
C. 僅使用人類回饋強化學習
D. 不做任何微調的提示工程

Answer: B

Hint: 想想使用範例教模型你特定風格的最實用方式。

Explanation: 在 Vertex AI 上的監督式微調讓你提供展示所需語氣和格式的輸入-輸出範例配對。模型學會模仿這些範例，同時保留其一般語言能力。這是帶有特定風格需求的領域適應的標準方法。

Why others wrong: 完整重新訓練對基礎模型不切實際；RLHF 需要獎勵模型且更複雜；提示工程可能無法在所有輸出中一致地強制特定格式。

Trap: 對所有事情都預設使用提示工程 — 微調比單靠提示提供更可靠、一致的風格遵循。

Mnemonic: 想要一致的風格？用範例微調，而非僅靠提示

## Q18
Type: single
Difficulty: 3
Tags: model-development, evaluation, generative-ai
Concepts: llm-evaluation
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

你需要評估生成式 AI 模型的回應是否與來源文件的事實一致。在 Vertex AI 中最合適的評估方式是什麼？

A. 與參考輸出的 BLEU 分數比較
B. Vertex AI Gen AI Evaluation 的紮實度指標
C. 僅人工評估
D. 測試集的困惑度測量

Answer: B

Hint: 想想哪個指標專門衡量生成內容是否有來源文件支持。

Explanation: Vertex AI Gen AI Evaluation 提供專為評估 LLM 輸出而建的指標，包括紮實度（聲明是否有所提供來源支持）、連貫性、流暢度和安全性。紮實度指標使用 LLM 評判方法對照來源文件驗證每個聲明。

Why others wrong: BLEU 衡量表面文字重疊，不是事實一致性；人工評估無法擴展；困惑度衡量預測信心，不是事實準確性。

Trap: 用 BLEU 或 ROUGE 來衡量紮實度 — 這些衡量字詞重疊，而非事實是否確實有來源支持。

Mnemonic: 紮實度 = 事實是否紮根於來源？（不僅是流暢）

## Q19
Type: single
Difficulty: 2
Tags: model-development, feature-engineering, tabular
Concepts: feature-crosses
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

你正在建立預測計程車行程時間的模型。你有上車緯度、上車經度、一天中的時段和星期幾。你懷疑某些地點只在尖峰時段才會塞車。你應該如何捕捉這種互動？

A. 獨立正規化所有特徵
B. 在位置分桶和時間特徵之間建立特徵交叉
C. 移除時間特徵，因為它們是多餘的
D. 對緯度和經度使用 one-hot 編碼

Answer: B

Hint: 想想如何捕捉位置的效果取決於一天中的時段。

Explanation: 特徵交叉將兩個或多個特徵組合成單一複合特徵，捕捉模型可能無法從個別特徵中學到的互動。將分桶的位置與一天中的時段交叉建立如「downtown_at_8am」的特徵，直接代表特定位置的尖峰時段壅塞。

Why others wrong: 獨立正規化無法捕捉互動；移除時間特徵失去關鍵資訊；對連續座標做 one-hot 編碼會產生太多稀疏特徵。

Trap: 假設模型會自動學習特徵互動 — 明確的交叉使模式更容易學習，尤其是線性模型。

Mnemonic: 特徵交叉 = 「這個且那個」（位置 × 時間 = 鬧區的尖峰時段）

## Q20
Type: single
Difficulty: 1
Tags: model-development, model-selection, comparison
Concepts: model-type-selection
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

對於有 50 個結構化特徵和 100,000 筆資料的表格迴歸問題，哪種模型類型通常提供最佳的開箱即用效能？

A. 深度神經網路
B. 梯度提升樹（XGBoost/LightGBM）
C. 線性迴歸
D. k-最近鄰

Answer: B

Hint: 想想哪個模型家族在表格資料競賽中持續獲勝。

Explanation: 梯度提升樹集成（XGBoost、LightGBM）在結構化/表格資料上持續優於其他方法。它們處理混合特徵類型、捕捉非線性關係、對離群值穩健，且需要最少的前處理 — 使它們成為表格 ML 的預設選擇。

Why others wrong: 深度神經網路在非結構化資料上表現出色，但在沒有廣泛調整的情況下很少在表格資料上勝過 GBT；線性迴歸無法捕捉非線性模式；k-NN 擴展性不好且在 50 個特徵時受維度詛咒影響。

Trap: 假設深度學習總是最好的 — 對於表格資料，梯度提升樹仍然是經過驗證的冠軍。

Mnemonic: 表格資料 → 樹模型；非結構化資料 → 深度學習

## Q21
Type: single
Difficulty: 2
Tags: mlops, vertex-ai-pipelines, kubeflow
Concepts: pipeline-orchestration
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

你需要自動化一個包含資料驗證、前處理、訓練、評估和條件式模型部署的訓練管線。哪個 Google Cloud 服務是為此設計的？

A. Cloud Composer (Airflow)
B. 搭配 Kubeflow Pipelines SDK 的 Vertex AI Pipelines
C. 搭配 Cloud Functions 的 Cloud Scheduler
D. Cloud Build

Answer: B

Hint: 想想哪個服務是專為 ML 管線編排而建，並原生整合 Vertex AI。

Explanation: Vertex AI Pipelines 使用 Kubeflow Pipelines SDK 或 TFX 提供受管理的 ML 管線編排。它原生整合 Vertex AI 服務（訓練、評估、模型註冊表、端點）並支援條件邏輯、快取和產出物追蹤 — 專為 ML 工作流程而建。

Why others wrong: Cloud Composer 是通用編排器，未針對 ML 最佳化；Cloud Scheduler + Functions 對複雜 ML 工作流程太原始；Cloud Build 用於 CI/CD，不是 ML 管線。

Trap: 使用 Cloud Composer 做 ML 管線 — 雖然可以，但 Vertex AI Pipelines 提供原生 ML 整合和產出物血統追蹤。

Mnemonic: ML 管線 → Vertex AI Pipelines；通用 DAG → Cloud Composer

## Q22
Type: single
Difficulty: 2
Tags: mlops, cicd, continuous-training
Concepts: ml-cicd
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

你的 ML 團隊想為模型實施 CI/CD。當每週有新訓練資料到達時，管線應自動重新訓練、評估，且只在新模型優於當前生產版本時才部署。哪個元件處理條件式部署決策？

A. Cloud Build 觸發器
B. 比較評估指標與當前模型基準的管線步驟
C. Cloud Scheduler
D. Vertex AI Model Registry 自動部署

Answer: B

Hint: 想想在評估和部署之間需要什麼來防止退步。

Explanation: ML 管線中的條件式評估步驟比較新訓練模型的指標（準確率、F1、AUC）與當前生產模型的基準。只有當新模型達到或超過閾值時，管線才會繼續部署。這防止了生產中的模型退步。

Why others wrong: Cloud Build 觸發器啟動管線但不評估模型；Cloud Scheduler 按時間觸發，不是效能；Model Registry 儲存模型但不自動比較效能。

Trap: 自動部署每個重新訓練的模型 — 沒有比較門檻，退步的模型可能取代更好的。

Mnemonic: 訓練 → 評估 → 比較 → 部署（僅在更好時）

## Q23
Type: single
Difficulty: 3
Tags: mlops, data-validation, tfdv
Concepts: data-drift-detection
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

你的生產模型效能在三個月內退化，儘管沒有程式碼更改。你懷疑輸入資料分布已經改變。你應該使用哪個工具和指標組合來偵測並量化這種漂移？

A. 搭配自訂 CPU 指標的 Cloud Monitoring
B. TensorFlow Data Validation (TFDV) 使用 Jensen-Shannon 散度比較服務資料統計與訓練資料基準
C. 搜尋錯誤模式的 Cloud Logging
D. 重新執行訓練的 Vertex AI Experiments

Answer: B

Hint: 想想比較訓練時和服務時資料分布的統計工具。

Explanation: TFDV 為資料集生成描述性統計，並可比較兩個資料集以偵測分布變化。Jensen-Shannon 散度量化服務資料分布與訓練資料基準的差異程度。這有助於識別特徵漂移、概念漂移和資料品質問題，這些會隨時間退化模型效能。

Why others wrong: CPU 指標不反映資料分布變化；日誌顯示錯誤，不是統計漂移；不了解漂移就重新訓練不會修復根本原因。

Trap: 效能下降時立即重新訓練 — 先診斷是資料漂移、概念漂移還是資料品質問題。

Mnemonic: 效能下降 + 無程式碼更改 = 資料漂移。用 TFDV 統計衡量。

## Q24
Type: single
Difficulty: 2
Tags: mlops, artifact-registry, containers
Concepts: model-packaging
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

你的團隊使用多個 ML 框架（TensorFlow、PyTorch、XGBoost）。你需要一致的方式來打包和版本控制訓練容器和服務映像。應該使用哪個 Google Cloud 服務？

A. 用於模型產出物的 Cloud Storage
B. 用於容器映像和版本控制的 Artifact Registry
C. Container Registry（已棄用）
D. GitHub Container Registry

Answer: B

Hint: 想想 Google Cloud 推薦用於儲存和管理 Docker 映像的服務。

Explanation: Artifact Registry 是 Google Cloud 的通用套件管理器，用於容器映像、語言套件和作業系統套件。它提供版本控制、弱點掃描和基於 IAM 的存取控制。對於 ML 工作流程，它儲存訓練容器和服務映像，具有完整版本歷史和與 Vertex AI 的整合。

Why others wrong: Cloud Storage 儲存檔案但不管理容器映像；Container Registry 已棄用，改用 Artifact Registry；GitHub Container Registry 是外部的，缺少 Google Cloud IAM 整合。

Trap: 仍在使用已棄用的 Container Registry — Artifact Registry 是具有更多功能的替代品。

Mnemonic: Artifact Registry = Google Cloud 的容器映像之家（取代 gcr.io）

## Q25
Type: single
Difficulty: 2
Tags: mlops, model-registry, versioning
Concepts: model-versioning
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

你在六個月內部署了多個版本的詐欺偵測模型。監管稽核要求你展示特定日期哪個模型版本在服務以及其訓練血統。哪個 Vertex AI 功能提供這個？

A. Cloud Audit Logs
B. 搭配版本歷史和 ML Metadata 的 Vertex AI Model Registry
C. BigQuery 稽核表
D. Cloud Asset Inventory

Answer: B

Hint: 想想已訓練模型、其版本和相關中繼資料在哪裡集中追蹤。

Explanation: Vertex AI Model Registry 儲存所有模型版本，包含時間戳記、描述和透過 ML Metadata 連結到訓練管線的連結。這提供完整的稽核軌跡，顯示哪個版本何時部署、用什麼資料和參數產生它、以及它的評估指標 — 對監管合規至關重要。

Why others wrong: Cloud Audit Logs 追蹤 API 呼叫，不是模型血統；BigQuery 稽核表不儲存模型中繼資料；Cloud Asset Inventory 追蹤雲端資源，不是 ML 產出物。

Trap: 依賴 Cloud Audit Logs 做模型治理 — 它們顯示誰部署了，而非模型是用什麼訓練的。

Mnemonic: Model Registry = 模型護照（版本、生日、訓練父母、部署歷史）

## Q26
Type: single
Difficulty: 3
Tags: mlops, pipeline-caching, optimization
Concepts: pipeline-efficiency
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

你的每週重新訓練管線需要 6 小時，但通常只有最近一週的資料有變化。大部分時間花在資料前處理上。如何在 Vertex AI Pipelines 中最佳化管線執行時間？

A. 在更快的機器類型上執行管線
B. 啟用元件快取，使輸入未變更的管線步驟重用先前的輸出
C. 完全跳過資料前處理
D. 將訓練資料集縮減為僅最新一週

Answer: B

Hint: 想想在輸入未變更時避免冗餘計算。

Explanation: Vertex AI Pipelines 支援元件級別的快取。當管線步驟的輸入（資料、程式碼、參數）自上次執行以來未變更時，會重用快取的輸出而不重新執行該步驟。對於歷史資料前處理未變更的每週管線，這可以跳過數小時的冗餘計算。

Why others wrong: 更快的機器有幫助但不消除冗餘工作；跳過前處理會破壞管線；僅訓練最近資料會失去歷史模式。

Trap: 用更多運算資源來解決問題，而不是避免不必要的計算 — 快取比擴展更聰明。

Mnemonic: 相同輸入 → 相同輸出 → 跳過步驟（快取它！）

## Q27
Type: single
Difficulty: 1
Tags: mlops, continuous-monitoring, alerts
Concepts: model-monitoring-basics
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

在將模型部署到生產後，你應該先設定哪種類型的監控？

A. 只監控基礎設施（CPU、記憶體、磁碟）
B. 監控預測延遲、錯誤率、特徵漂移和預測分布漂移
C. 只監控訓練管線
D. 如果模型通過離線評估就不需要監控

Answer: B

Hint: 想想除了基礎設施問題外，部署的模型還可能出什麼問題。

Explanation: 生產 ML 監控必須涵蓋多個層次：操作指標（延遲、錯誤、吞吐量）、資料品質（特徵從訓練分布漂移）和模型行為（預測分布變化）。這些能捕捉到僅靠基礎設施監控會遺漏的問題，例如因資料模式變化導致的漸進式模型退化。

Why others wrong: 僅基礎設施監控會遺漏資料和模型漂移；訓練管線監控不涵蓋服務；離線評估不保證生產效能。

Trap: 以為通過離線評估代表模型永遠是好的 — 生產資料會演化，模型會退化。

Mnemonic: 監控全堆疊：基礎設施 + 資料 + 模型預測

## Q28
Type: single
Difficulty: 1
Tags: deployment, endpoint, vertex-ai
Concepts: model-serving
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

你已訓練好模型，想在 Google Cloud 上透過 REST API 提供即時預測。最簡單的方式是什麼？

A. 在 Cloud Run 上部署 Flask 應用程式
B. 將模型部署到 Vertex AI Endpoint
C. 設定搭配 TF Serving 的 GKE 叢集
D. 使用 Cloud Functions 並將模型載入記憶體

Answer: B

Hint: 想想處理擴展、版本控制和 ML 模型服務的受管理服務。

Explanation: Vertex AI Endpoints 提供全受管理的模型服務，具有自動擴展、流量分割、模型版本控制和內建監控。部署到端點只需最少配置 — 將模型上傳到註冊表並建立端點 — 使其成為最簡單的生產服務路徑。

Why others wrong: Cloud Run 上的 Flask 需要建立自訂服務容器；GKE 搭配 TF Serving 需要叢集管理；Cloud Functions 有冷啟動延遲和記憶體限制。

Trap: 在 Vertex AI Endpoints 自動處理時建立自訂服務基礎設施。

Mnemonic: Vertex AI Endpoint = 受管理的模型 API（上傳 → 部署 → 服務）

## Q29
Type: single
Difficulty: 2
Tags: deployment, traffic-splitting, canary
Concepts: canary-deployment
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

你想將新模型版本部署到生產但需要最小化風險。你計劃將 10% 的流量路由到新版本，同時監控是否有退步，然後再完全上線。這種部署策略叫什麼，以及如何在 Vertex AI 上實施？

A. 使用兩個分開端點的藍綠部署
B. 使用 Vertex AI Endpoint 流量分割的金絲雀部署
C. 使用 Vertex AI 批次預測的影子部署
D. 使用 GKE 的滾動部署

Answer: B

Hint: 想想在監控的同時逐步增加新版本的流量。

Explanation: 金絲雀部署將少量生產流量路由到新模型版本，同時大部分繼續流向現有版本。Vertex AI Endpoints 原生支援流量分割 — 你將兩個模型版本部署到同一端點並配置流量百分比，然後隨著信心增加逐步轉移流量。

Why others wrong: 藍綠使用兩個完整環境，不是漸進式流量轉移；影子部署發送流量到兩者但只回傳舊版本的回應；GKE 上的滾動部署需要容器管理。

Trap: 混淆金絲雀和藍綠 — 金絲雀漸進式轉移流量；藍綠一次切換所有流量。

Mnemonic: 金絲雀 = 小鳥先飛（10% → 50% → 100%）

## Q30
Type: single
Difficulty: 2
Tags: deployment, batch-prediction, vertex-ai
Concepts: batch-vs-online
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

你需要為行銷活動在夜間為 1,000 萬筆客戶記錄生成預測。不需要低延遲。哪種服務方式最具成本效益？

A. 部署自動擴展的 Vertex AI Endpoint 並依序發送所有請求
B. 使用 Vertex AI 批次預測在單一任務中處理所有記錄
C. 使用 Cloud Functions 一次處理一筆記錄
D. 部署在持續運行的 GKE 叢集上

Answer: B

Hint: 想想哪種服務模式專為大量、非即時預測工作負載最佳化。

Explanation: Vertex AI 批次預測專為延遲不重要的大量預測任務設計。它啟動資源、平行處理所有記錄、將結果寫入 Cloud Storage 或 BigQuery，然後關閉 — 只為使用的運算時間付費。這比為批次工作負載維護即時端點便宜得多。

Why others wrong: 即時端點在請求之間的閒置時間浪費資源；Cloud Functions 對數百萬次呼叫有每次調用的開銷和冷啟動；持續的 GKE 叢集即使閒置也會產生費用。

Trap: 使用即時端點做批次工作負載 — 它比專為批次預測設計的服務更貴更慢。

Mnemonic: 數百萬預測 + 不趕時間 = 批次預測（啟動、處理、關閉）

## Q31
Type: single
Difficulty: 3
Tags: deployment, model-optimization, latency
Concepts: model-compression
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

你部署的模型符合準確率要求但預測延遲太高（200ms），SLA 要求 50ms。模型是深度神經網路。你應該考慮哪些最佳化技術？

A. 增加端點後面的複本數量
B. 應用量化（FP16/INT8）、蒸餾到較小模型，並使用 GPU 加速服務
C. 切換到更簡單的模型架構如邏輯迴歸
D. 增加推論時的批次大小

Answer: B

Hint: 想想讓模型本身執行更快的技術，而不僅是擴展。

Explanation: 量化降低模型精度（FP32 → FP16/INT8）以更快計算且準確率損失最小。知識蒸餾訓練較小的「學生」模型來模仿較大的「老師」模型。GPU 服務加速矩陣運算。結合這些可以將延遲從 200ms 降低到 50ms 以下，同時保持大部分準確率。

Why others wrong: 更多複本改善吞吐量，不是單一請求延遲；邏輯迴歸可能犧牲太多準確率；更大批次大小增加每個請求的延遲。

Trap: 水平擴展來修復延遲 — 更多複本處理更多請求但不會讓任何單一預測更快。

Mnemonic: 延遲 = 模型速度。量化（更輕）+ 蒸餾（更小）+ GPU（更快）

## Q32
Type: single
Difficulty: 2
Tags: deployment, edge, tensorflow-lite
Concepts: edge-deployment
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

一家製造公司需要在間歇性網路連線的工廠地板攝影機上執行缺陷偵測模型。哪種部署方式最合適？

A. 將所有影像發送到雲端的 Vertex AI Endpoint
B. 使用 TensorFlow Lite 或 Vertex AI Edge 將最佳化模型部署到邊緣裝置
C. 儲存影像並在恢復連線時批次處理
D. 設定本地 GPU 伺服器執行完整模型

Answer: B

Hint: 想想在不依賴網路連線的情況下直接在裝置上執行 ML 推論。

Explanation: 使用 TensorFlow Lite 或 Vertex AI Edge 的邊緣部署直接在邊緣裝置（攝影機、IoT 閘道器）上執行最佳化模型。模型被量化和編譯為邊緣硬體，實現無雲端連線的即時推論 — 對網路不可靠的工廠環境至關重要。

Why others wrong: 雲端端點需要穩定的連線；批次處理延遲偵測；完整 GPU 伺服器昂貴且可能不適合工廠限制。

Trap: 假設所有 ML 推論都必須透過雲端 — 邊緣部署提供離線能力和更低延遲。

Mnemonic: 沒有網路？沒問題 → 邊緣部署

## Q33
Type: single
Difficulty: 1
Tags: monitoring, prediction-drift, vertex-ai
Concepts: model-monitoring
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

部署情感分析模型後，你注意到與訓練資料分布相比，平均預測分數在三週內持續下降。這種現象叫什麼？

A. 資料洩漏
B. 預測漂移
C. 欠擬合
D. 模型修剪

Answer: B

Hint: 想想模型輸出的分布隨時間變化意味著什麼。

Explanation: 預測漂移是指模型預測的分布隨時間與基準（訓練或驗證資料）相比發生偏移。這可能表示輸入資料分布已變化（資料漂移）或特徵與目標之間的關係已變化（概念漂移），需要調查和可能的重新訓練。

Why others wrong: 資料洩漏是測試資料洩漏到訓練中；欠擬合是模型太簡單；模型修剪是最佳化技術，不是監控指標。

Trap: 忽略漸進式偏移 — 預測漂移通常很慢，只有在適當的監控基準下才能偵測到。

Mnemonic: 預測漂移 = 模型的輸出分布正在偏離基準

## Q34
Type: single
Difficulty: 2
Tags: monitoring, skew-detection, serving
Concepts: training-serving-skew
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

你的模型在評估時表現很好但在生產中表現差。調查發現訓練時某特徵使用 30 天滾動平均值，但服務管線計算同一特徵時使用 7 天滾動平均值。這個問題叫什麼？

A. 概念漂移
B. 訓練-服務偏差
C. 標籤洩漏
D. 特徵重要性偏移

Answer: B

Hint: 想想當訓練和服務以不同方式計算特徵時會發生什麼。

Explanation: 訓練-服務偏差發生在訓練和服務之間特徵計算方式不一致時。這裡不同的滾動平均視窗意味著模型在服務時收到的特徵值與訓練時不同，導致效能退化。這是最常見的生產 ML 錯誤之一。

Why others wrong: 概念漂移是現實世界的關係變化；標籤洩漏是訓練時使用未來資訊；特徵重要性偏移是關於哪些特徵重要，不是它們如何計算。

Trap: 歸咎於模型，而真正的問題在特徵管線 — 總是先檢查特徵一致性。

Mnemonic: 訓練 ≠ 服務計算 = 偏差（沉默的 ML 殺手）

## Q35
Type: single
Difficulty: 2
Tags: responsible-ai, fairness, bias
Concepts: fairness-evaluation
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

你正在部署貸款核准模型，需要確保它不會基於種族或性別等受保護屬性進行歧視。在 Google Cloud 上最合適的方式是什麼？

A. 從訓練資料中移除所有受保護屬性
B. 使用 Vertex AI Model Evaluation 搭配跨受保護群組的公平性指標（人口統計平等、均等機會），並應用偏見緩解技術
C. 確保整體準確率在 95% 以上
D. 只使用樹模型因為它們本質上公平

Answer: B

Hint: 想想為什麼移除受保護屬性不夠，以及什麼指標真正衡量公平性。

Explanation: 僅移除受保護屬性不能防止歧視，因為代理特徵（郵遞區號、教育程度）可以編碼相同的資訊。公平性需要使用人口統計平等（跨群組的相等正率）和均等機會（相等的真陽性率和假陽性率）等指標進行明確衡量，然後進行針對性的緩解技術。

Why others wrong: 移除屬性不會移除代理相關性；高整體準確率可能掩蓋群組層面的差異；沒有模型類型本質上公平。

Trap: 以為公平性 = 移除受保護屬性。代理變數攜帶相同資訊。你必須衡量和緩解。

Mnemonic: 公平 ≠ 盲目。衡量跨群組的差異，然後緩解。

## Q36
Type: single
Difficulty: 2
Tags: responsible-ai, explainability, vertex-ai
Concepts: model-explainability
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

醫療機構要求對模型的每個預測做出解釋。他們需要知道哪些特徵對特定病患的風險評分貢獻最大。哪個 Vertex AI 功能提供這個？

A. Vertex AI Model Evaluation 彙總指標
B. 搭配特徵歸因的 Vertex AI Explainable AI
C. 搭配預測詳情的 Cloud Logging
D. BigQuery ML EXPLAIN 語句

Answer: B

Hint: 想想哪個工具提供每個預測的特徵重要性，而不僅是模型層面的指標。

Explanation: Vertex AI Explainable AI 為個別預測提供特徵歸因，顯示哪些特徵對每個特定預測貢獻最大以及貢獻多少。它支援 SHAP 和 Integrated Gradients 等方法，為每位病患的風險評分提供解釋 — 對醫療和其他受監管領域至關重要。

Why others wrong: 模型評估指標是彙總的，不是每個預測的；Cloud Logging 顯示預測了什麼，不是為什麼；BigQuery ML EXPLAIN 只在 BigQuery 內有效。

Trap: 混淆全域特徵重要性與局部（每個預測）解釋 — 醫療需要解釋每個個別決定。

Mnemonic: Explainable AI = 「為什麼是這個預測？」（每個實例的特徵歸因）

## Q37
Type: single
Difficulty: 1
Tags: responsible-ai, safety, content-filtering
Concepts: content-safety
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

你的生成式 AI 應用程式必須防止模型產生有害、有毒或不適當的內容。哪個 Google Cloud 功能提供內建的內容安全過濾？

A. Cloud Armor WAF 規則
B. Vertex AI 安全過濾器和負責任 AI 設定
C. Cloud DLP API
D. Identity-Aware Proxy

Answer: B

Hint: 想想哪個服務提供 AI 專用的內容安全，而非網路或資料安全。

Explanation: Vertex AI 提供內建安全過濾器，可以阻擋或標記跨類別的生成內容，包括仇恨言論、騷擾、性暗示內容和危險內容。這些過濾器可配置可調整的閾值，專為生成式 AI 輸出設計。

Why others wrong: Cloud Armor 防護網路攻擊，不是內容；Cloud DLP 偵測敏感資料如 PII，不是有害內容；Identity-Aware Proxy 控制存取，不是內容。

Trap: 混淆網路安全（Cloud Armor）或資料外洩防護（DLP）與 AI 內容安全 — 不同的威脅模型。

Mnemonic: 網路威脅 → Cloud Armor；AI 內容威脅 → Vertex AI 安全過濾器

## Q38
Type: single
Difficulty: 2
Tags: data-processing, data-labeling, vertex-ai
Concepts: data-labeling
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

你需要為新的分類任務標記 50,000 張影像。預算有限，你需要一致的標記品質。Google Cloud 上哪種方式提供具有品質控制的受管理資料標記？

A. 搭配人工標記者和品質評分的 Vertex AI Data Labeling Service
B. 請你的工程團隊手動標記影像
C. 使用 Cloud Vision API 自動標記一切
D. 透過公開網站眾包標記

Answer: A

Hint: 想想哪個服務提供具有內建品質保證的受管理人工標記。

Explanation: Vertex AI Data Labeling Service 提供人工標記者的存取，具有內建品質控制，包括共識評分（每個項目多個標記者）、專家審核者和可配置的標記說明。這確保了大規模一致、高品質的標記，同時透過受管理服務管理成本。

Why others wrong: 工程團隊時間昂貴且標記不是他們的專長；Vision API 提供通用標記，不是你的自訂類別；公開眾包缺乏品質控制。

Trap: 對所有事情使用自動標記 — 預訓練 API 提供通用類別，不是你的領域專用標記。

Mnemonic: 大規模品質標記 = 受管理標記服務（人工 + 品質評分）

## Q39
Type: single
Difficulty: 3
Tags: model-development, rag, grounding
Concepts: rag-architecture
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

你正在建立法律文件問答的 RAG 系統。使用者回報答案有時包含來自不相關文件的資訊。哪種檢索管線改進最能直接解決這個問題？

A. 將檢索區塊數從 5 增加到 20
B. 在初始檢索後實施交叉編碼器重新排序器以更準確地評分相關性，並添加相關性閾值來過濾低分區塊
C. 從語義搜尋切換到關鍵字搜尋
D. 將區塊大小從 512 增加到 4096 token

Answer: B

Hint: 想想在初始檢索後添加第二個更精確的過濾步驟。

Explanation: 帶有交叉編碼器重新排序器的兩階段檢索管線顯著提高精確度。初始雙編碼器檢索快速但近似；交叉編碼器透過同時關注查詢和文件來更準確地評分查詢-文件配對。添加相關性閾值過濾低於信心分數的區塊，防止不相關的上下文到達 LLM。

Why others wrong: 檢索更多區塊可能包含更多不相關的；關鍵字搜尋遺漏語義匹配；更大的區塊可能在每個區塊中包含更多離題內容。

Trap: 添加更多檢索文件以「增加覆蓋」— 這通常透過用噪音稀釋相關上下文來降低答案品質。

Mnemonic: 兩階段檢索：快速召回（雙編碼器）→ 精確重新排序（交叉編碼器）→ 閾值過濾

## Q40
Type: single
Difficulty: 2
Tags: mlops, vertex-ai-pipelines, components
Concepts: pipeline-components
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

在 Vertex AI Pipeline 中，你想在不同專案的多個管線中重用資料前處理步驟。打包這個步驟的最佳方式是什麼？

A. 將前處理程式碼複製到每個管線中
B. 建立可重用的 Kubeflow Pipeline 元件，具有定義的輸入、輸出和容器映像
C. 寫一個 Cloud Function 並從每個管線呼叫
D. 將前處理程式碼存在共享 notebook 中

Answer: B

Hint: 想想 ML 管線框架中的標準可重用單元。

Explanation: Kubeflow Pipeline 元件是獨立的可重用單元，具有定義的輸入/輸出介面和容器化執行。建立一次前處理元件就能在多個管線中匯入使用，確保一致性並減少重複。

Why others wrong: 複製程式碼造成維護負擔和不一致；Cloud Functions 未與管線編排原生整合；共享 notebook 不是可執行的管線步驟。

Trap: 將管線當作腳本而非可組合元件 — 可重用元件是可維護 ML 基礎設施的基礎。

Mnemonic: Pipeline 元件 = 樂高積木（定義的介面，跨建構重用）

## Q41
Type: single
Difficulty: 2
Tags: data-processing, bigquery, preprocessing
Concepts: data-preprocessing-at-scale
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

你的原型在單一機器上處理 10GB 資料集。在生產中資料集是 10TB。前處理涉及 SQL 式轉換（join、彙總、視窗函數）。在此規模下應該使用哪個 Google Cloud 服務做前處理？

A. 搭配 pandas 的 Vertex AI Workbench
B. BigQuery 做 PB 等級的 SQL 轉換
C. Cloud Functions 逐檔處理
D. 搭配更多 RAM 的 Compute Engine

Answer: B

Hint: 想想哪個服務能在無需管理基礎設施的情況下處理 TB 等級的 SQL 轉換。

Explanation: BigQuery 是 Google Cloud 的無伺服器資料倉儲，可在無需基礎設施管理的情況下處理 PB 等級的 SQL 轉換。對於涉及 join、彙總和視窗函數的前處理，BigQuery 提供從原型 SQL 到生產規模的最快、最具成本效益的路徑。

Why others wrong: 單一機器上的 pandas 無法處理 10TB；Cloud Functions 不是為大規模資料轉換設計的；單一機器增加更多 RAM 不能解決擴展性問題。

Trap: 試圖透過增加 RAM 來擴展 pandas — BigQuery 正是為這種使用案例設計的。

Mnemonic: TB 以上規模的 SQL 轉換 → BigQuery（無伺服器，不需管理叢集）

## Q42
Type: single
Difficulty: 3
Tags: model-development, prompt-engineering, chain-of-thought
Concepts: advanced-prompting
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

你正在使用 Gemini 分析財務報告並回答複雜的多步驟推理問題。模型有時會產生不正確的中間計算。哪種提示技術最可能提高準確率？

A. 使用更短、更簡潔的提示
B. 使用思維鏈提示搭配明確的逐步推理和自我驗證指令
C. 將溫度參數增加到 1.0
D. 減少最大輸出 token

Answer: B

Hint: 想想如何讓模型展示其工作過程並檢查答案。

Explanation: 思維鏈（CoT）提示指示模型將複雜推理分解為明確的中間步驟，使每個步驟都可驗證。添加自我驗證（「驗證你的計算」）進一步減少錯誤。這項技術已被證明能顯著提高多步驟推理任務的準確率。

Why others wrong: 更短的提示移除有用的上下文；高溫度增加隨機性，降低事實任務的準確率；減少輸出 token 可能截斷推理鏈。

Trap: 假設更多運算（溫度、token）能改善推理 — 結構化提示才是改善多步驟準確率的方法。

Mnemonic: 複雜推理 → 思維鏈（展示你的工作，檢查你的工作）

## Q43
Type: single
Difficulty: 1
Tags: deployment, vpc, security
Concepts: private-endpoints
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

你組織的安全政策要求模型預測永遠不經過公共網路。你應該如何在 Vertex AI 上部署模型？

A. 部署到搭配 API 金鑰驗證的公開 Vertex AI Endpoint
B. 使用 VPC 對等連接部署到你 VPC 中的 Vertex AI Private Endpoint
C. 在 Cloud Armor 後面的 Cloud Run 上部署
D. 使用 VPN 存取公開端點

Answer: B

Hint: 想想將所有流量保持在 Google 的私有網路中，永不觸及網際網路。

Explanation: Vertex AI Private Endpoints 使用 Private Service Connect 或 VPC 對等連接在你的 VPC 網路中部署模型。你的應用程式和模型之間的所有流量都在 Google 的私有網路中，永不經過公共網路 — 符合嚴格的安全要求。

Why others wrong: 搭配 API 金鑰的公開端點流量仍經過網際網路；Cloud Armor 搭配 Cloud Run 增加保護但流量仍從網際網路進入；VPN 增加加密但比原生私有端點更複雜。

Trap: 以為 API 金鑰驗證 = 私有。金鑰做驗證，但流量仍經過公共網路。

Mnemonic: Private Endpoint = 模型留在你的 VPC 牆內

## Q44
Type: single
Difficulty: 2
Tags: monitoring, vertex-ai, alerting
Concepts: model-monitoring-setup
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

你想在生產模型的輸入特徵與訓練分布顯著偏離時設定自動警報。你應該配置哪個 Vertex AI 功能？

A. Cloud Monitoring 自訂指標
B. 搭配特徵漂移偵測和電子郵件/PagerDuty 警報的 Vertex AI Model Monitoring
C. 基於 Cloud Logging 日誌的警報
D. BigQuery 排程查詢比較分布

Answer: B

Hint: 想想原生 Vertex AI 功能，持續監控服務輸入與訓練基準。

Explanation: Vertex AI Model Monitoring 持續比較傳入預測請求的特徵與訓練資料基準。當漂移超過可配置閾值時，它透過電子郵件、PagerDuty 或 Pub/Sub 觸發警報。它開箱即用支援特徵漂移和預測漂移偵測。

Why others wrong: 自訂 Cloud Monitoring 指標需要手動設置；基於日誌的警報捕捉錯誤，不是統計漂移；BigQuery 查詢需要手動排程和比較邏輯。

Trap: 在 Vertex AI Model Monitoring 原生提供時建立自訂漂移偵測。

Mnemonic: Vertex AI Model Monitoring = 自動漂移偵測 + 警報（設定閾值，收到通知）

## Q45
Type: multi
Difficulty: 3
Tags: mlops, testing, ml-testing
Concepts: ml-testing-pyramid
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

以下哪些是 ML 測試策略中推薦的測試類型？（選擇三項）

A. 檢查模式、分布和缺失值的資料驗證測試
B. 驗證指標在保留集上達到最低閾值的模型效能測試
C. 驗證生產預測端點處理預期負載的基礎設施測試
D. 驗證模型在所有邊緣案例上達到 100% 準確率的測試

Answer: A, B, C

Hint: 想想測試資料品質、模型品質和服務基礎設施 — 但要有實際的期望。

Explanation: 全面的 ML 測試策略包括資料驗證（確保輸入資料符合模式和分布期望）、模型效能測試（驗證準確率/F1/AUC 在保留資料上達到最低閾值），以及基礎設施測試（對預測端點進行延遲和吞吐量的負載測試）。這些涵蓋三個關鍵層次：資料、模型和服務。

Why others wrong: 沒有模型能在所有邊緣案例上達到 100% 準確率 — 這是會阻擋每次部署的不切實際期望。

Trap: 將絕對完美設為測試標準 — ML 模型是機率性的。測試應驗證最低可接受的閾值，而非完美。

Mnemonic: ML 測試金字塔：資料（基礎）→ 模型（中間）→ 服務（頂端）

## Q46
Type: single
Difficulty: 2
Tags: model-development, gemini, context-window
Concepts: context-window-management
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

你正在建立使用 Gemini 分析長文件（200 頁以上）的應用程式。完整文件超過模型的上下文視窗。最有效的方式是什麼？

A. 截斷文件以適應上下文視窗
B. 使用分區策略搭配 map-reduce 摘要或檢索增強生成
C. 將文件分成兩半並獨立處理每一半
D. 增加溫度以處理更多 token

Answer: B

Hint: 想想處理超過模型容量文件的系統化方法。

Explanation: 對於超過上下文視窗的文件，map-reduce 方法獨立處理區塊（map 階段）然後合併結果（reduce 階段）。或者，RAG 索引文件並只檢索與每個查詢相關的部分。兩種方法都能系統化地處理長文件而不丟失關鍵資訊。

Why others wrong: 截斷會丟失潛在重要的內容；分成兩半可能在分割處斷開上下文；溫度控制隨機性，不是上下文容量。

Trap: 簡單截斷長文件 — 這會丟棄可能包含答案的內容。結構化方法保留資訊。

Mnemonic: 一口吃不下 → 分區 + 合併（map-reduce）或分區 + 檢索（RAG）

## Q47
Type: single
Difficulty: 1
Tags: low-code, vision-ai, api
Concepts: pre-trained-vision
Domain: Domain 1 — Architecting Low-Code AI Solutions
DomainNumber: 1

你需要偵測和標記影像中的物件而不訓練自訂模型。哪個 Google Cloud API 提供預訓練的物件偵測？

A. Cloud Natural Language API
B. 搭配物件定位的 Cloud Vision API
C. Cloud Speech-to-Text API
D. Cloud Translation API

Answer: B

Hint: 想想哪個預訓練 API 是為視覺內容分析設計的。

Explanation: Cloud Vision API 提供各種影像分析任務的預訓練模型，包括物件定位（偵測和標記帶有邊界框的物件）、標籤偵測、文字偵測（OCR）、臉部偵測等 — 全都不需要自訂模型訓練。

Why others wrong: Natural Language API 處理文字，不是影像；Speech-to-Text 處理音訊；Translation 在語言之間轉換。

Trap: 混淆標籤偵測（整圖分類）和物件定位（偵測 + 用邊界框定位物件）。

Mnemonic: 看影像中的物件 → Vision API 物件定位（預訓練，不需訓練）

## Q48
Type: single
Difficulty: 3
Tags: mlops, ab-testing, deployment
Concepts: online-experimentation
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

你想在生產中比較兩個模型版本，以確定哪個在真實商業指標（轉換率）上表現更好。你需要統計顯著的結果。最嚴謹的方式是什麼？

A. 部署兩個模型並比較離線評估指標
B. 使用 Vertex AI Endpoint 流量分割設定 A/B 測試，隨機使用者分配和商業指標的統計顯著性測試
C. 在相同測試集上執行兩個模型並比較
D. 部署新模型並比較本週與上週的指標

Answer: B

Hint: 想想以受控實驗衡量真實世界影響的黃金標準。

Explanation: 隨機流量分割的 A/B 測試是比較模型在商業指標上的黃金標準。Vertex AI Endpoint 流量分割隨機將使用者分配到模型版本，控制時間和使用者層面的混淆因子。統計顯著性測試（卡方、t 檢定）確保觀察到的差異不是偶然造成的。

Why others wrong: 離線指標不衡量商業影響；測試集比較是離線評估；比較不同週引入時間混淆因子（季節性、促銷等）。

Trap: 比較連續時段 — 商業指標會因與模型無關的原因波動。A/B 測試控制了這一點。

Mnemonic: 商業影響 → A/B 測試（相同使用者、相同時間、不同模型、衡量差異）

## Q49
Type: single
Difficulty: 2
Tags: responsible-ai, privacy, differential-privacy
Concepts: privacy-preserving-ml
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

你的模型是用敏感客戶資料訓練的。你需要確保個人客戶記錄無法從已訓練的模型中擷取或推斷。哪種技術專門解決這個問題？

A. 靜態加密模型檔案
B. 使用差分隱私訓練，提供針對個人資料擷取的數學保證
C. 使用 IAM 限制 API 存取
D. 模型訓練後刪除訓練資料

Answer: B

Hint: 想想哪種技術提供數學保證，確保模型不會記住個別訓練範例。

Explanation: 差分隱私在訓練期間添加校準噪音，確保任何個別記錄在訓練資料中的存在或缺失對模型輸出的影響有限。這提供了針對成員推論和資料擷取攻擊的數學保證（epsilon 界限）— 在模型層面保護個人隱私。

Why others wrong: 加密保護儲存的檔案，不是模型記憶；IAM 控制存取，不是模型學到了什麼；刪除訓練資料不能阻止模型已經記住它。

Trap: 以為訓練後刪除資料就能確保隱私 — 模型可能在訓練期間已經記住了個別記錄。

Mnemonic: 差分隱私 = 模型無法「記住」任何單一個人的資料（數學保證）

## Q50
Type: single
Difficulty: 3
Tags: scaling, tpu, distributed-training
Concepts: tpu-training
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

你正在訓練需要大量運算資源的大型語言模型。你的團隊在 Google Cloud 上決定使用 GPU 還是 TPU 叢集。哪種情境最明確地有利於 TPU？

A. 使用 PyTorch 和自訂 CUDA 核心的小型模型訓練
B. 使用 TensorFlow 或 JAX 的大規模 transformer 模型訓練，其中矩陣乘法吞吐量是瓶頸
C. 有低延遲需求的推論服務
D. 訓練使用許多在 XLA 中不可用的自訂操作的模型

Answer: B

Hint: 想想 TPU 在架構上針對什麼最佳化以及哪些框架原生支援它們。

Explanation: TPU 被設計為矩陣乘法加速器，使其對注意力和前饋層以矩陣乘法為主的 transformer 架構非常高效。TensorFlow 和 JAX 透過 XLA 編譯原生支援 TPU。對於大規模 transformer 訓練，TPU pod 可以提供比同等 GPU 叢集更好的吞吐量/成本比。

Why others wrong: 自訂 CUDA 核心是 GPU 專用的，不能在 TPU 上執行；推論延遲更多取決於模型最佳化而非硬體選擇；不在 XLA 中的自訂操作在 TPU 上會失敗。

Trap: 因為更熟悉而預設使用 GPU — 對於搭配 TF/JAX 的大型 transformer 訓練，TPU 提供顯著的成本和效能優勢。

Mnemonic: TPU = Transformer Processing Unit（矩陣乘法機器，TF/JAX 原生，大規模訓練）
