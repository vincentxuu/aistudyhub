---
exam: MLA-C02
lang: zh-TW
---

## Q1
Type: single
Difficulty: 1
Tags: data-ingestion, s3
Concepts: data-lake-architecture
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

一家公司想為其機器學習工作負載建立一個集中式資料儲存庫。資料來源包括關聯式資料庫、串流服務和純文字檔案。哪個 AWS 服務應作為主要儲存層？

A. Amazon RDS
B. Amazon S3
C. Amazon DynamoDB
D. Amazon EFS

Answer: B

Hint: 想想哪個服務專為可擴展、持久的物件儲存而設計，並能與幾乎所有 AWS ML 服務整合。

Explanation: Amazon S3 是 AWS 上資料湖架構的基礎。它提供幾乎無限、持久且經濟實惠的儲存空間，原生整合 SageMaker、Glue、Athena 及其他 ML/分析服務。

Why others wrong: RDS 是用於關聯式資料庫，不是資料湖；DynamoDB 是用於交易工作負載的 NoSQL 資料庫；EFS 是檔案系統，未針對 ML 資料湖模式最佳化。

Trap: 因為 DynamoDB 可處理多種資料格式而選擇它——它是資料庫，不是資料湖儲存層。

Mnemonic: S3 = ML 儲存的起點

## Q2
Type: single
Difficulty: 2
Tags: data-ingestion, kinesis
Concepts: streaming-data-pipeline
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

一個即時詐欺偵測模型需要在信用卡交易發生時即時處理。系統必須每秒處理數千筆交易，並將資料傳送到 SageMaker 端點進行推論。哪種架構最合適？

A. Amazon SQS 佇列由 Lambda 函數輪詢，再呼叫 SageMaker 端點
B. Amazon Kinesis Data Streams 搭配 Lambda 消費者呼叫 SageMaker 端點
C. Amazon S3 事件通知觸發 Step Functions 工作流程
D. AWS Batch 排程處理任務

Answer: B

Hint: 高吞吐量的即時串流需要專門的串流服務。

Explanation: Kinesis Data Streams 專為大規模即時資料擷取而設計，支援每秒數千筆記錄。Lambda 消費者可處理每批記錄並呼叫 SageMaker 端點進行即時推論，提供詐欺偵測所需的低延遲管線。

Why others wrong: SQS 可行但缺乏排序保證和原生串流語義；S3 事件是接近即時，非真正即時；Batch 用於排程的非即時工作負載。

Trap: 因為 SQS 處理訊息佇列就選擇它——SQS 是拉取式的，無法提供即時 ML 推論所需的串流語義。

Mnemonic: Kinesis = 即時串流之王

## Q3
Type: single
Difficulty: 1
Tags: data-preparation, glue
Concepts: etl-pipeline
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

哪個 AWS 服務提供無伺服器 ETL 功能，用於發現、編目和轉換機器學習管線的資料？

A. Amazon EMR
B. AWS Glue
C. AWS Data Pipeline
D. Amazon Redshift

Answer: B

Hint: 想想哪個服務是無伺服器的，且同時包含資料目錄和 ETL 引擎。

Explanation: AWS Glue 是完全託管的無伺服器 ETL 服務，包含用於綱要發現的爬蟲程式、集中式資料目錄，以及基於 Spark 的轉換任務——全部不需管理基礎設施。

Why others wrong: EMR 需要叢集管理；Data Pipeline 是較舊的編排服務；Redshift 是資料倉儲，不是 ETL 工具。

Trap: 因為 EMR 也能執行 Spark 而選擇它——EMR 需要基礎設施管理，而 Glue 是無伺服器的。

Mnemonic: Glue = 無伺服器地把資料黏合在一起

## Q4
Type: single
Difficulty: 2
Tags: feature-engineering, sagemaker
Concepts: feature-store
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

團隊需要在多個 ML 模型之間共享工程化特徵，並確保訓練和推論之間的一致性。特徵必須同時支援批次訓練和即時預測。哪種方法最能滿足這些需求？

A. 將特徵儲存在共享的 S3 儲存桶中，並在每個訓練任務中載入
B. 使用 Amazon SageMaker Feature Store，同時設定線上和離線儲存
C. 建立一個通用的特徵工程 Lambda 函數，由每個模型呼叫
D. 將特徵儲存在 Amazon ElastiCache 中以供即時存取

Answer: B

Hint: 考慮一個專門的服務，能為批次和即時使用情境一致地提供特徵。

Explanation: SageMaker Feature Store 提供集中式 ML 特徵儲存庫，包含線上儲存（低延遲查找用於推論）和離線儲存（批次存取用於訓練）。這確保了訓練和服務之間的特徵一致性，消除訓練-服務偏差。

Why others wrong: 單獨的 S3 缺乏即時服務能力；Lambda 函數不提供特徵版本控制或一致性保證；ElastiCache 缺乏用於批次訓練的離線儲存。

Trap: 認為 S3 就夠了——它適用於批次處理，但不提供低延遲的即時特徵服務。

Mnemonic: Feature Store = 線上 + 離線 = 處處一致的特徵

## Q5
Type: single
Difficulty: 1
Tags: data-labeling, ground-truth
Concepts: data-annotation
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

一家公司需要為物件偵測模型標記 100,000 張影像。他們希望在維持品質的同時降低成本。應該使用哪個 AWS 服務？

A. Amazon Rekognition Custom Labels
B. Amazon SageMaker Ground Truth
C. 直接使用 Amazon Mechanical Turk
D. Amazon Comprehend

Answer: B

Hint: 想想哪個服務結合了人工標記和自動標記來降低成本。

Explanation: SageMaker Ground Truth 提供託管式資料標記工作流程，結合人工標記者和主動學習。隨著自動化模型的改善，它會自動標記較簡單的範例，減少需要人工審查的影像數量並降低成本。

Why others wrong: Rekognition Custom Labels 用於模型訓練，不是標記；Mechanical Turk 是原始的群眾外包平台，沒有 ML 輔助自動化；Comprehend 用於 NLP，不是影像標記。

Trap: 直接使用 Mechanical Turk——它可行但缺乏 Ground Truth 的自動標記功能，該功能可降低高達 70% 的成本。

Mnemonic: Ground Truth = 基層標記 + 自動化的真實性

## Q6
Type: single
Difficulty: 2
Tags: data-quality, bias-detection
Concepts: data-bias
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

在訓練貸款核准模型之前，資料科學家想檢查訓練資料集在性別和種族等受保護屬性方面是否存在代表性偏差。應該使用哪個工具？

A. Amazon SageMaker Debugger
B. Amazon SageMaker Clarify
C. Amazon SageMaker Model Monitor
D. AWS Glue DataBrew

Answer: B

Hint: 想想哪個工具專門衡量資料和模型預測中的偏差。

Explanation: SageMaker Clarify 使用統計指標（如類別不平衡 CI 和標籤比例差異 DPL）來偵測訓練資料中的潛在偏差。它可以分析訓練前的資料偏差和訓練後的模型偏差，提供報告幫助團隊識別和緩解公平性問題。

Why others wrong: Debugger 監控訓練任務中的梯度消失等問題；Model Monitor 偵測已部署模型的漂移；DataBrew 用於資料剖析和轉換，不是偏差偵測。

Trap: 選擇 Model Monitor——它偵測生產環境中的漂移，而不是部署前訓練資料中的偏差。

Mnemonic: Clarify = 釐清你的資料是否公平

## Q7
Type: single
Difficulty: 3
Tags: data-transformation, spark
Concepts: distributed-processing
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

資料工程團隊每天處理 50 TB 的原始感測器資料用於預測性維護 ML 管線。轉換涉及複雜的視窗函數、會話化和特徵聚合。目前的 Glue 任務逾時了。他們應該怎麼做？

A. 增加 Glue 任務的 DPU 數量並啟用自動擴展
B. 切換到 Amazon EMR，使用調校過的 Spark 叢集並搭配 Spot 實例以最佳化成本
C. 將資料分成較小的分區並執行多個循序 Glue 任務
D. 將處理移至具有更多記憶體的單一大型 EC2 實例

Answer: B

Hint: 在這種規模下進行複雜轉換，你需要對 Spark 叢集配置有細粒度的控制。

Explanation: 對於超越 Glue 預設能力的超大規模、複雜 Spark 工作負載，Amazon EMR 提供細粒度的叢集調校——自訂 Spark 配置、實例類型選擇和 Spot 實例整合。這允許針對特定工作負載最佳化 shuffle 分區、記憶體分配和執行器大小。

Why others wrong: 更多 DPU 可能有幫助，但 Glue 的託管環境限制了底層調校；循序任務增加了額外開銷和複雜性；單一 EC2 實例無法平行處理 50 TB。

Trap: 只是增加更多 Glue DPU——在極端規模下，你需要 EMR 提供的叢集級調校。

Mnemonic: EMR = 極端規模、最大調校、真正的 Spark 控制

## Q8
Type: single
Difficulty: 2
Tags: data-preparation, missing-values
Concepts: imputation-strategies
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

迴歸模型的資料集中，某個數值特徵有 15% 的遺失值，且該特徵呈偏態分布。哪種填補策略最合適？

A. 用特徵的平均值替換遺失值
B. 用特徵的中位數替換遺失值
C. 刪除所有有遺失值的列
D. 用零替換遺失值

Answer: B

Hint: 想想哪個集中趨勢指標對離群值和偏態具有穩健性。

Explanation: 中位數對離群值和偏態分布具有抵抗力，使其成為偏態資料比平均值更好的填補選擇。使用平均值會被分布的尾部拉偏，可能引入偏差。

Why others wrong: 平均值填補會受偏態和離群值影響；刪除 15% 的列浪費了大量資料；零填補引入了與特徵分布無關的人工訊號。

Trap: 預設使用平均值填補——它適用於對稱分布，但會扭曲偏態資料。

Mnemonic: 偏態？用中位數！對稱？用平均值！

## Q9
Type: single
Difficulty: 2
Tags: data-preparation, encoding
Concepts: categorical-encoding
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

一個代表美國各州的特徵（50 個類別）需要為梯度提升樹模型編碼。該特徵沒有序數關係。哪種編碼方法最合適？

A. 使用任意整數指派的標籤編碼
B. 獨熱編碼
C. 使用交叉驗證的目標編碼以防止洩漏
D. 二進位編碼

Answer: C

Hint: 考慮高基數特徵在樹模型中維度與資訊損失之間的權衡。

Explanation: 目標編碼將每個類別映射到該類別的目標變數平均值，保持低維度（1 欄 vs. 50 欄）。使用交叉驗證可防止目標洩漏。像 XGBoost 這樣的樹模型能有效處理目標編碼特徵，因為它們可以有效地在編碼值上進行分割。

Why others wrong: 標籤編碼暗示了不存在的序數關係；獨熱編碼產生 50 個稀疏欄位，對樹模型來說不必要地增加了維度；二進位編碼比獨熱好，但仍然產生多個欄位。

Trap: 預設使用獨熱編碼——它可行但對高基數特徵的樹模型產生了不必要的維度。

Mnemonic: 高基數 + 樹模型 = 使用交叉驗證的目標編碼

## Q10
Type: single
Difficulty: 1
Tags: data-splitting, validation
Concepts: train-test-split
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

在分割時間序列資料集用於訓練和評估預測模型時，哪種方法可以防止資料洩漏？

A. 隨機 80/20 訓練-測試分割
B. 基於目標變數的分層抽樣
C. 時間順序分割，訓練資料在時間上先於測試資料
D. 隨機洗牌的 K 折交叉驗證

Answer: C

Hint: 預測未來時，未來的資料永遠不應出現在訓練中。

Explanation: 時間序列資料必須按時間順序分割以防止前瞻偏差。在預測時不可用的未來資料上訓練會造成資料洩漏，導致過於樂觀的評估指標，無法反映真實世界的表現。

Why others wrong: 隨機分割混合了未來和過去的資料，造成洩漏；分層抽樣不尊重時間順序；隨機 K 折洗牌也違反了時間順序。

Trap: 出於習慣使用隨機分割——時間序列需要時間順序分割，不是隨機分區。

Mnemonic: 時間序列 = 時間順序分割，絕不洗牌

## Q11
Type: single
Difficulty: 3
Tags: data-pipeline, orchestration
Concepts: pipeline-automation
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

ML 團隊需要自動化每日執行的資料準備管線：爬取 S3 中的新資料、執行品質檢查、轉換特徵、驗證綱要，並將結果儲存到 Feature Store。管線必須妥善處理失敗並支援條件分支。哪種編排方法最好？

A. AWS Step Functions 搭配 Glue 任務和 Lambda 函數
B. Amazon MWAA（Apache Airflow 的託管工作流程）
C. SageMaker Pipelines 搭配處理步驟
D. EventBridge 規則觸發個別 Lambda 函數

Answer: B

Hint: 想想哪個工具最擅長具有依賴關係、重試和條件邏輯的複雜 DAG 式資料工程工作流程。

Explanation: MWAA 提供 Apache Airflow 作為託管服務，適合具有條件分支、重試邏輯、SLA 監控和 AWS 服務整合的複雜資料工程 DAG。它是編排具有精密依賴管理的多步驟資料管線的標準。

Why others wrong: Step Functions 可行但在 ASL 中表達 DAG 複雜性較困難；SageMaker Pipelines 專注於 ML 訓練，不是資料工程；EventBridge + Lambda 缺乏內建的 DAG 管理和重試編排。

Trap: 對所有東西都使用 SageMaker Pipelines——它是為 ML 工作流程設計的，而 Airflow 更適合資料工程編排。

Mnemonic: Airflow = 資料管線的航空管制

## Q12
Type: multi
Difficulty: 2
Tags: data-preparation, scaling
Concepts: feature-scaling
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

資料科學家正在為神經網路模型準備特徵。以下哪兩種縮放技術是合適的？（選擇兩個。）

A. StandardScaler（z 分數標準化）
B. 不縮放——神經網路會自動處理原始特徵
C. MinMaxScaler（歸一化到 [0,1]）
D. 將所有值四捨五入到最近的整數

Answer: A, C

Hint: 當輸入特徵在相似的尺度上時，神經網路收斂更快。

Explanation: StandardScaler 將特徵轉換為零均值和單位方差，而 MinMaxScaler 將特徵縮放到固定範圍。兩者都通過確保梯度更新在各特徵間保持平衡來幫助神經網路更快收斂，防止較大量級的特徵主導學習。

Why others wrong: 神經網路不會自動處理原始特徵——未縮放的輸入導致緩慢或不穩定的收斂；四捨五入損失精度且不歸一化尺度。

Trap: 認為神經網路不需要縮放——雖然技術上可以在任何尺度上學習，但未縮放的特徵會導致收斂不佳。

Mnemonic: 神經網路需要標準化輸入才能好好收斂

## Q13
Type: single
Difficulty: 2
Tags: data-preparation, text-processing
Concepts: text-vectorization
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

團隊正在使用 SageMaker 的內建演算法建立文字分類模型。他們需要將原始文字評論轉換為數值特徵。應該使用哪個 SageMaker 內建演算法進行文字預處理？

A. BlazingText 的 Word2Vec 模式
B. Object2Vec
C. SageMaker 內建 TF-IDF 轉換器
D. Neural Topic Model

Answer: A

Hint: 想想哪個演算法能生成捕捉語義意義的詞嵌入。

Explanation: BlazingText 的 Word2Vec 模式生成密集詞嵌入，捕捉詞彙之間的語義關係。這些嵌入可以聚合（平均）以建立文件級特徵用於下游分類。它針對 SageMaker 最佳化，能高效處理大型詞彙表。

Why others wrong: Object2Vec 嵌入任意配對，不是原始文字；SageMaker 沒有內建的 TF-IDF 演算法；Neural Topic Model 發現主題，不是通用文字特徵。

Trap: 在 SageMaker 中尋找 TF-IDF 演算法——它不是內建演算法；改用 BlazingText 進行文字向量化。

Mnemonic: BlazingText = SageMaker 中極速的詞嵌入

## Q14
Type: single
Difficulty: 1
Tags: data-formats, parquet
Concepts: columnar-storage
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

ML 團隊在 S3 上以 CSV 格式儲存訓練資料。他們的 SageMaker 訓練任務大部分時間都花在讀取資料而不是訓練上。哪個改變最能提升資料載入效能？

A. 使用 gzip 壓縮 CSV 檔案
B. 將資料轉換為 Apache Parquet 格式
C. 將資料移至 Amazon EFS
D. 增加訓練任務的實例大小

Answer: B

Hint: 想想哪種檔案格式允許只讀取需要的欄位並提供內建壓縮。

Explanation: Parquet 是列式儲存格式，能進行高效的欄位裁剪（只讀取需要的欄位）、提供內建壓縮，並支援謂詞下推。對於通常讀取特定欄位的 ML 工作負載，Parquet 相比行式 CSV 大幅減少 I/O。

Why others wrong: gzip 壓縮有幫助但 CSV 仍需讀取整行；EFS 可能引入網路延遲；較大的實例無法修復 I/O 瓶頸。

Trap: 只是壓縮 CSV——即使壓縮了，CSV 仍需讀取每行中的所有欄位，而 Parquet 只讀取需要的。

Mnemonic: Parquet = 只挑選你需要的欄位

## Q15
Type: single
Difficulty: 2
Tags: data-versioning, lineage
Concepts: data-lineage
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

一家受監管的金融機構需要從模型預測完整追溯到使用的確切訓練資料和轉換。哪個組合提供這種譜系？

A. S3 版本控制 + CloudTrail 日誌
B. SageMaker Experiments 搭配 SageMaker Lineage Tracking
C. AWS Config 規則監控 S3 變更
D. 在 Wiki 中手動記錄文件

Answer: B

Hint: 想想哪個服務能自動捕捉資料、程式碼、參數和產出物之間的關係。

Explanation: SageMaker Experiments 追蹤試驗組件（資料集、演算法、參數、指標），而 Lineage Tracking 自動記錄產出物、動作和上下文之間的關係。兩者結合提供從預測回溯到訓練資料的可稽核圖譜。

Why others wrong: S3 版本控制 + CloudTrail 顯示檔案變更但不是 ML 特定的譜系；Config 監控資源合規性，不是 ML 工作流程；手動文件容易出錯且不可稽核。

Trap: 只依賴 S3 版本控制——它追蹤檔案版本但不追蹤資料、模型和預測之間的 ML 特定關係。

Mnemonic: Lineage = ML 產出物的家族譜

## Q16
Type: single
Difficulty: 3
Tags: data-preparation, imbalanced
Concepts: class-imbalance
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

詐欺偵測資料集有 0.1% 的正例（詐欺）和 99.9% 的負例。在此資料上訓練的模型將所有交易預測為非詐欺，並達到 99.9% 的準確率。哪種技術組合最能改善詐欺偵測？

A. 使用 SMOTE 過度採樣少數類別，並使用精確率-召回率 AUC 作為指標
B. 隨機欠採樣多數類別，並使用準確率作為指標
C. 增加更多特徵並使用相同的不平衡分布重新訓練
D. 通過增加更多層來增加模型複雜度

Answer: A

Hint: 當正例極為罕見時，你需要同時使用採樣策略和適當的評估指標。

Explanation: SMOTE 通過在現有詐欺案例之間進行插值來生成合成少數範例，建立更平衡的訓練集。精確率-召回率 AUC (PR-AUC) 對不平衡資料集來說比準確率更好，因為它專注於模型識別罕見正例的能力，不會被真陰性膨脹。

Why others wrong: 隨機欠採樣丟棄了寶貴的多數類別資料；在 99.9% 類別不平衡下準確率具有誤導性；更多特徵或複雜度無法修復根本的類別不平衡問題。

Trap: 為 99.9% 的準確率而歡慶——一個將所有東西預測為負例的模型就能達到這個分數，意味著它捕捉到零詐欺。

Mnemonic: 不平衡？SMOTE + PR-AUC，絕不用準確率

## Q17
Type: single
Difficulty: 2
Tags: data-preparation, pii
Concepts: data-anonymization
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

在將客戶資料用於 ML 訓練之前，團隊必須移除個人可識別資訊 (PII)，同時保留資料集的統計特性。哪種方法最合適？

A. 刪除所有可能包含 PII 的欄位
B. 使用 Amazon Macie 偵測 PII，然後套用差分隱私技術或代碼化
C. 使用 KMS 加密整個資料集
D. 將資料儲存在具有限制存取的私有 S3 儲存桶中

Answer: B

Hint: 你需要同時找到 PII 並轉換它，同時保持資料對 ML 的可用性。

Explanation: Macie 自動發現和分類 S3 資料中的 PII。偵測後，套用差分隱私（添加校準的雜訊）或代碼化（用代碼替換 PII）可保留 ML 訓練的統計分布，同時保護個人隱私。

Why others wrong: 刪除欄位會損失寶貴的特徵；加密保護靜態資料但不匿名化用於 ML 處理；存取控制保護儲存但不從資料本身移除 PII。

Trap: 認為加密就是匿名化——加密的資料必須解密才能用於 ML 訓練，此時 PII 就暴露了。

Mnemonic: Macie 找到它，差分隱私隱藏它

## Q18
Type: single
Difficulty: 1
Tags: data-ingestion, batch
Concepts: batch-processing
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

零售公司每天在離峰時段從本地資料庫載入每日銷售資料到 S3 用於 ML 訓練。哪個 AWS 服務應自動化這個週期性的資料搬移？

A. AWS DataSync
B. AWS Transfer Family
C. AWS Database Migration Service (DMS)
D. Amazon Kinesis Data Firehose

Answer: C

Hint: 想想哪個服務專為持續的資料庫到 AWS 資料複寫而建。

Explanation: AWS DMS 支援從本地資料庫到包括 S3 在內的 AWS 目標的持續複寫。它處理異動資料擷取 (CDC) 用於增量載入，使其適合每日批次擷取資料庫記錄到 ML 訓練的資料湖。

Why others wrong: DataSync 用於檔案/儲存遷移，不是資料庫複寫；Transfer Family 用於 SFTP/FTP 檔案傳輸；Kinesis Firehose 用於串流資料，不是排程資料庫擷取。

Trap: 選擇 DataSync——它在儲存系統之間搬移檔案但不從關聯式資料庫擷取。

Mnemonic: DMS = 資料庫遷移服務，從 DB 到任何地方

## Q19
Type: single
Difficulty: 2
Tags: data-preparation, dimensionality
Concepts: dimensionality-reduction
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

資料集有 500 個數值特徵，其中許多高度相關。訓練時間過長且模型出現過擬合跡象。應該先套用哪種技術？

A. 使用 L1 正規化（Lasso）進行特徵選擇
B. 主成分分析（PCA）降維
C. 增加多項式特徵以捕捉交互作用
D. 在訓練期間套用 dropout 正規化

Answer: B

Hint: 當特徵高度相關時，將它們組合成不相關成分的技術可以減少冗餘。

Explanation: PCA 識別捕捉最大方差且具有最小冗餘的主成分。由於許多特徵是相關的，PCA 有效地將它們壓縮成更少的不相關維度，在不需要逐特徵選擇的情況下減少訓練時間和過擬合。

Why others wrong: L1 正規化選擇特徵但不組合相關的特徵；增加多項式特徵進一步增加維度；dropout 在訓練期間套用，不是資料準備。

Trap: 用多項式展開增加更多特徵——問題是特徵太多，不是交互作用太少。

Mnemonic: 相關特徵？PCA 壓縮和清理

## Q20
Type: single
Difficulty: 3
Tags: data-preparation, rag, bedrock
Concepts: rag-data-preparation
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

一家公司正在使用 Amazon Bedrock Knowledge Bases 建立基於 RAG 的應用程式。他們的內部文件包括 PDF、Word 檔案和 HTML 頁面，共計 10 GB。正確的資料準備工作流程是什麼？

A. 將所有文件轉換為純文字，串連成單一檔案，然後上傳到 S3
B. 將文件上傳到 S3，配置 Bedrock Knowledge Base 的分塊策略，讓它自動處理解析、分塊和嵌入
C. 手動將文件分成 512 token 的段落，使用本地模型生成嵌入，然後將向量上傳到 OpenSearch
D. 將文件儲存在 DynamoDB 中，直接從 Bedrock agent 查詢

Answer: B

Hint: Bedrock Knowledge Bases 端到端處理文件處理管線。

Explanation: Amazon Bedrock Knowledge Bases 自動解析多格式文件，套用可配置的分塊策略（固定大小、語義或層次），使用選定的模型生成嵌入，並將向量儲存在託管的向量儲存中。這消除了手動預處理。

Why others wrong: 串連成單一檔案會損失文件結構；手動分塊和嵌入繞過了 Bedrock 的託管管線；DynamoDB 不是向量儲存，無法支援語義搜尋。

Trap: 手動建立嵌入管線——Bedrock Knowledge Bases 自動化了解析、分塊、嵌入和索引。

Mnemonic: Bedrock KB = 上傳文件，其餘它搞定

## Q21
Type: single
Difficulty: 2
Tags: data-preparation, augmentation
Concepts: data-augmentation
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

電腦視覺團隊只有 2,000 張標記的醫學影像用於分類任務。由於隱私限制，他們無法取得額外的標記樣本。應該採取哪種方法？

A. 使用預訓練模型的遷移學習，不做任何增強
B. 套用影像增強技術（旋轉、翻轉、裁剪、色彩抖動）以增加有效訓練集大小
C. 使用公開可用的 GAN 模型生成合成醫學影像
D. 縮小模型大小以匹配小資料集

Answer: B

Hint: 增強可從現有資料建立有效的變體，不需要新的標記樣本。

Explanation: 影像增強對現有影像套用幾何和光度轉換，建立有效的變體以增加有效資料集大小。這些轉換保留了標籤（旋轉的腫瘤仍然是腫瘤），並通過讓模型接觸更多視覺變化來改善泛化能力。

Why others wrong: 遷移學習有幫助但結合增強效果更好；公開 GAN 可能不會產生醫學上準確的影像；縮小模型大小無法解決資料限制。

Trap: 為醫學影像使用公開 GAN——它們可能生成不真實的偽影，損害模型效能並引起合規問題。

Mnemonic: 資料少？增強你已經有的

## Q22
Type: single
Difficulty: 2
Tags: data-preparation, embeddings, bedrock
Concepts: embedding-models
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

團隊正在為語義搜尋準備向量資料庫。他們需要為 100 萬個產品描述生成嵌入。在 AWS 上，哪種方法提供品質和操作簡單性的最佳平衡？

A. 在 SageMaker 端點上部署 Hugging Face 嵌入模型
B. 透過 API 使用 Amazon Bedrock 的 Titan Embeddings 模型
C. 在產品語料庫上從零開始訓練 Word2Vec
D. 使用儲存在 Elasticsearch 中的 TF-IDF 向量

Answer: B

Hint: 想想哪個選項不需要基礎設施管理就能提供高品質嵌入。

Explanation: Amazon Bedrock 的 Titan Embeddings 是完全託管的 API，無需部署或管理任何基礎設施就能生成高品質的密集嵌入。它自動處理擴展並提供一致、低延遲的嵌入，適合語義搜尋應用。

Why others wrong: SageMaker 端點可行但需要管理部署；從零開始訓練 Word2Vec 需要大量訓練資料和運算；TF-IDF 產生稀疏向量，無法很好地捕捉語義意義。

Trap: 從零開始訓練 Word2Vec——它需要大型語料庫且產生比預訓練 transformer 模型更低品質的嵌入。

Mnemonic: Bedrock Titan = 交鑰匙嵌入，零營運

## Q23
Type: single
Difficulty: 1
Tags: data-formats, recordio
Concepts: sagemaker-data-formats
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

在大型資料集上訓練 SageMaker 的內建演算法時，哪種資料格式提供最快的訓練效能？

A. CSV
B. JSON
C. RecordIO-Protobuf
D. LibSVM

Answer: C

Hint: SageMaker 的內建演算法針對一種能實現高效串流的二進位格式進行了最佳化。

Explanation: RecordIO-Protobuf 是針對 SageMaker 內建演算法最佳化的二進位格式。它支援 Pipe 模式直接從 S3 串流資料，相比下載完整的 CSV 或 JSON 檔案，減少了訓練啟動時間和記憶體使用。

Why others wrong: CSV 需要將文字解析為數字；JSON 因鍵值結構增加額外開銷；LibSVM 有支援但不如 RecordIO-Protobuf 高效。

Trap: 因為熟悉就用 CSV——對於大規模訓練，二進位 RecordIO 格式顯著優於文字格式。

Mnemonic: RecordIO + Pipe 模式 = 極速訓練

## Q24
Type: single
Difficulty: 3
Tags: data-pipeline, drift
Concepts: data-drift-detection
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

部署客戶流失預測模型後，資料團隊發現一個關鍵特徵（平均月消費）的分布已從訓練分布顯著偏移。他們應該首先採取什麼行動？

A. 立即用最新資料重新訓練模型
B. 在決定矯正行動之前，先調查分布偏移的根本原因
C. 移除漂移的特徵並重新部署模型
D. 增加模型監控頻率

Answer: B

Hint: 了解資料為什麼改變比立即反應更重要。

Explanation: 分布偏移可能有多種原因——季節性變化、資料管線錯誤、業務變更或上游系統修改。調查根本原因可防止不正確的回應：在損壞的資料上重新訓練或移除合理改變的特徵。了解原因可以指導是否應該重新訓練、修復管線或調整特徵。

Why others wrong: 立即重新訓練可能在損壞的資料上訓練；移除特徵損失預測能力；增加監控頻率能偵測但不解決問題。

Trap: 立即重新訓練——如果偏移是由管線錯誤造成的，重新訓練會納入錯誤的資料。

Mnemonic: 偵測到漂移？先診斷，再決定

## Q25
Type: single
Difficulty: 2
Tags: data-preparation, sampling
Concepts: stratified-sampling
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

分類資料集有 5 個類別，分布如下：A 類（50%）、B 類（25%）、C 類（15%）、D 類（7%）、E 類（3%）。建立驗證集時，哪種抽樣策略能保留類別分布？

A. 隨機抽樣
B. 分層抽樣
C. 固定間隔的系統抽樣
D. 叢集抽樣

Answer: B

Hint: 想想哪種方法能確保每個類別在分割中按比例代表。

Explanation: 分層抽樣確保驗證集維持與原始資料集相同的類別比例。對於少數類別（如 3% 的 E 類）可能被代表不足的多類別問題，這特別重要，否則會導致不可靠的評估指標。

Why others wrong: 隨機抽樣可能不保留比例，尤其對小的少數類別；系統抽樣不考慮類別標籤；叢集抽樣選擇群組，不是按比例的類別。

Trap: 假設隨機抽樣永遠足夠——對罕見類別，隨機分割可能在小型驗證集中完全遺漏它們。

Mnemonic: 分層 = 將相同比例分散到每個分割

## Q26
Type: single
Difficulty: 2
Tags: data-preparation, outliers
Concepts: outlier-handling
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

感測器監控資料集包含偶發的極端讀數，由感測器故障而非真實事件引起。這些離群值正在降低模型效能。在保留合法極端值的同時，哪種方法最能處理這個問題？

A. 移除所有超過 2 個標準差的資料點
B. 使用領域知識定義有效的感測器範圍，並裁剪超出範圍的值
C. 套用對數轉換壓縮整個範圍
D. 用平均值替換所有離群值

Answer: B

Hint: 領域專業知識能區分感測器錯誤和真正的極端讀數。

Explanation: 使用領域定義的有效範圍（例如，溫度感測器不可能讀到 -500°C）精確分離感測器故障和合法的極端值。裁剪到物理範圍可修正錯誤讀數，同時保留可能對模型重要的真實極端事件。

Why others wrong: 統計截斷（2σ）也會移除合法的極端值；對數轉換壓縮所有值，不只是錯誤；平均值替換引入人工集中趨勢。

Trap: 盲目使用統計閾值——它們無法區分真實極端值和感測器錯誤。

Mnemonic: 領域知識 > 統計截斷用於離群值處理

## Q27
Type: single
Difficulty: 1
Tags: data-preparation, wrangler
Concepts: data-wrangling
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

一位編碼經驗有限的資料分析師需要在 SageMaker 中探索、視覺化和轉換表格資料以用於 ML 模型訓練。哪個工具提供視覺化、低程式碼的介面來完成這項任務？

A. SageMaker Studio Notebooks
B. SageMaker Data Wrangler
C. AWS Glue DataBrew
D. Amazon QuickSight

Answer: B

Hint: 想想哪個工具整合在 SageMaker Studio 中，專為 ML 資料準備而設計。

Explanation: SageMaker Data Wrangler 在 SageMaker Studio 中提供視覺化介面，用於匯入、探索和轉換資料，無需撰寫程式碼。它提供 300 多個內建轉換，並可將工作流程匯出為 SageMaker Processing 任務或 Pipeline 步驟。

Why others wrong: Studio Notebooks 需要編碼；Glue DataBrew 類似但未與 SageMaker 的 ML 工作流程整合；QuickSight 是 BI 儀表板工具，不是資料準備工具。

Trap: 選擇 Glue DataBrew——它也是視覺化和低程式碼的，但 Data Wrangler 與 SageMaker 的 ML 特定工作流程緊密整合。

Mnemonic: Data Wrangler = 在 SageMaker 中視覺化地整理資料

## Q28
Type: single
Difficulty: 3
Tags: data-preparation, leakage
Concepts: data-leakage
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

一個預測醫院再入院的模型在開發期間達到 99% 準確率，但在生產環境中表現只有 60%。調查發現，特徵「discharge_summary_sentiment」是使用包含再入院結果的資訊計算的。這是什麼類型的問題？

A. 概念漂移
B. 資料洩漏（目標洩漏）
C. 模型複雜度造成的過擬合
D. 分布不匹配造成的欠擬合

Answer: B

Hint: 從目標變數衍生的特徵在訓練期間給了模型答案。

Explanation: 目標洩漏發生在預測特徵包含從目標變數衍生或受其影響的資訊時。出院摘要情緒可能反映了患者是否再次入院，使其成為標籤的代理。這在訓練指標中膨脹結果，但在結果未知的生產環境中失敗。

Why others wrong: 概念漂移是特徵和目標之間關係的時間偏移；過擬合表現為泛化不佳，而非 99% 降到 60%；欠擬合在訓練期間也會表現不佳。

Trap: 將效能下降歸因於概念漂移——戲劇性的準確率差距（99% → 60%）加上包含結果資訊的特徵是典型的目標洩漏。

Mnemonic: 特徵知道未來？那就是洩漏！

## Q29
Type: single
Difficulty: 2
Tags: data-preparation, feature-selection
Concepts: feature-importance
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

有 200 個特徵的模型訓練緩慢且出現過擬合跡象。哪種方法能有效識別最具預測力的特徵？

A. 手動檢查每個特徵並移除看似不相關的
B. 訓練隨機森林模型並按重要性分數排名特徵，然後選擇最重要的
C. 套用 PCA 並只使用前兩個成分
D. 按字母順序移除特徵直到效能改善

Answer: B

Hint: 樹模型在訓練過程中自然計算特徵重要性。

Explanation: 隨機森林計算特徵重要性，如平均不純度減少（基尼重要性）或排列重要性。訓練一個快速的 RF 模型並按重要性選擇前 N 個特徵，提供了一種考慮特徵交互作用的資料驅動特徵選擇策略。

Why others wrong: 手動檢查無法捕捉複雜關係；只使用 2 個 PCA 成分可能損失太多資訊；按字母排序移除沒有統計依據。

Trap: 降到只有 2 個 PCA 成分——極端降維損失資訊；使用特徵重要性來指導選擇性減少。

Mnemonic: 隨機森林 = 快速特徵排名

## Q30
Type: single
Difficulty: 2
Tags: data-preparation, genai, prompt-dataset
Concepts: instruction-tuning-data
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

團隊正在準備資料集以在 Amazon Bedrock 上微調用於客服的基礎模型。哪種資料格式和準備方法是正確的？

A. 原始聊天記錄直接上傳到 S3，不做任何預處理
B. JSONL 檔案包含指令-輸入-輸出配對，清除 PII，包含涵蓋邊界案例的多樣範例
C. CSV 檔案包含兩欄：問題和答案
D. 客服手冊的 PDF 文件

Answer: B

Hint: 基礎模型微調需要特定格式的結構化指令遵循範例。

Explanation: Bedrock 微調期望 JSONL 格式，包含結構化的提示-完成配對。資料應清除 PII、去重、覆蓋多樣化，並包含常見和邊界案例。微調資料的品質直接影響模型在目標任務上的表現。

Why others wrong: 原始記錄包含雜訊、PII 和不一致的格式；CSV 缺乏 Bedrock 期望的結構化指令格式；PDF 無法直接用於微調。

Trap: 使用原始聊天記錄——它們包含雜訊、PII 和離題對話，會降低微調品質。

Mnemonic: 微調資料 = JSONL + 清潔 + 多樣 + 無 PII

## Q31
Type: single
Difficulty: 1
Tags: data-storage, lake-formation
Concepts: data-governance
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

組織需要管理其 ML 資料湖的細粒度存取控制，允許不同團隊只存取特定的表和欄位。哪個 AWS 服務提供此功能？

A. S3 儲存桶政策
B. AWS Lake Formation
C. 附加到每個使用者的 IAM 政策
D. Amazon Macie

Answer: B

Hint: 想想哪個服務為資料湖表提供欄級和列級安全性。

Explanation: AWS Lake Formation 為資料湖提供集中式治理，包括資料庫、表、欄和列級的細粒度存取控制。它與 Glue 資料目錄整合，簡化了跨分析和 ML 服務的權限管理。

Why others wrong: S3 儲存桶政策在物件級運作，不是欄級；IAM 政策對表/欄存取來說過於粗略；Macie 發現敏感資料但不強制存取控制。

Trap: 使用 S3 儲存桶政策——它們控制誰存取檔案，不是誰查看那些檔案中的特定欄位。

Mnemonic: Lake Formation = 湖級存取控制，細粒度

## Q32
Type: single
Difficulty: 2
Tags: data-preparation, normalization
Concepts: batch-normalization-data
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

資料科學家在分割訓練和測試集之前，在整個資料集上計算 StandardScaler 參數（平均值和標準差）。為什麼這有問題？

A. StandardScaler 不適用於非常態分布
B. 測試集的統計資訊洩漏到了縮放參數中，導致過於樂觀的評估
C. StandardScaler 應只套用於類別特徵
D. 在整個資料集上計算統計資訊的運算成本很高

Answer: B

Hint: 縮放參數應只從模型在訓練期間「允許看到」的資料計算。

Explanation: 在整個資料集上計算平均值和標準差會將測試集資訊包含在縮放轉換中。這是一種微妙的資料洩漏——模型通過縮放器的參數間接看到測試資料特徵，導致過於樂觀的評估指標，無法反映真正的泛化能力。

Why others wrong: StandardScaler 適用於任何分布；它套用於數值特徵；運算成本不是主要關注。

Trap: 即使是經驗豐富的從業者也會犯的常見錯誤——永遠只在訓練資料上擬合縮放器，然後轉換訓練和測試資料。

Mnemonic: 在訓練上擬合，在兩者上轉換——絕不反過來

## Q33
Type: single
Difficulty: 3
Tags: data-pipeline, feature-store, consistency
Concepts: training-serving-skew
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

生產 ML 系統在訓練管線（Glue 中的 PySpark）和服務管線（Lambda 中的 Python）中有不同的特徵計算程式碼。部署後，模型準確率明顯低於離線評估。最可能的原因是什麼？

A. 模型對訓練資料過擬合
B. 不一致的特徵計算邏輯造成的訓練-服務偏差
C. Lambda 函數記憶體不足
D. Glue 任務使用了過時的資料

Answer: B

Hint: 不同程式碼計算相同特徵會以不同方式產生不同的輸入。

Explanation: 訓練-服務偏差發生在特徵在訓練和推論中以不同方式計算時。即使是 PySpark 和 Python 之間在四捨五入、空值處理或聚合邏輯上的細微差異，也會產生不同的特徵值，導致模型接收到與訓練時不匹配的輸入。

Why others wrong: 過擬合表現為糟糕的驗證指標，而不是使用不同管線時的訓練-生產差距；Lambda 記憶體問題會導致逾時，不是準確率下降；過時資料會影響兩個管線。

Trap: 責怪模型品質，而真正的問題是特徵計算不一致——永遠使用 Feature Store 統一特徵邏輯。

Mnemonic: 相同特徵、相同程式碼、相同結果——打破任何環節準確率就崩潰

## Q34
Type: single
Difficulty: 2
Tags: data-preparation, synthetic
Concepts: synthetic-data-generation
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

一家醫療新創公司需要疾病預測模型的訓練資料，但面臨嚴格的法規，禁止使用真實患者資料進行 ML 開發。哪種方法允許他們繼續？

A. 使用來自不同醫療領域的去識別化公開資料集
B. 使用差分隱私保證生成保留原始資料集統計特性的合成資料
C. 在完全隨機的資料集上訓練模型
D. 使用不含個體記錄的聚合統計

Answer: B

Hint: 具有隱私保證的合成資料在保護患者隱私的同時維持效用。

Explanation: 使用差分隱私的合成資料生成，建立保留真實患者資料統計模式和相關性的逼真訓練資料，同時不暴露任何個人的資訊。這在提供有用訓練資料的同時滿足法規要求。

Why others wrong: 不同領域的公開資料集可能不匹配目標人群；隨機資料沒有醫學相關性；聚合統計無法訓練個體級預測模型。

Trap: 假設公開醫學資料集匹配你的人群——人群之間的分布差異會降低模型相關性。

Mnemonic: 合成 + 差分隱私 = 安全且有用的資料

## Q35
Type: single
Difficulty: 1
Tags: data-preparation, athena
Concepts: sql-data-exploration
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

資料科學家想在決定特徵工程方法之前，使用 SQL 查詢快速探索和剖析儲存在 S3 中的資料。哪個無伺服器服務能在不將資料載入資料庫的情況下實現這一點？

A. Amazon Athena
B. Amazon Redshift Serverless
C. Amazon RDS
D. Amazon Neptune

Answer: A

Hint: 想想哪個服務使用標準 SQL 直接查詢 S3 中的資料，不需要任何基礎設施。

Explanation: Amazon Athena 是無伺服器查詢服務，直接對 S3 中的資料執行 SQL 查詢。不需要資料載入或基礎設施管理，非常適合對儲存在資料湖中的 ML 資料集進行臨時探索和剖析。

Why others wrong: Redshift Serverless 需要將資料載入倉儲表；RDS 是託管的關聯式資料庫；Neptune 是圖形資料庫。

Trap: 因為 Redshift 是 SQL 就選它——Athena 直接查詢 S3 不需要載入，更適合探索。

Mnemonic: Athena = 用 SQL 問 S3 任何問題

## Q36
Type: single
Difficulty: 2
Tags: data-pipeline, genai, knowledge-base
Concepts: document-chunking
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

配置 Bedrock Knowledge Base 用於 RAG 應用時，檢索的段落經常缺乏足夠的上下文來提供準確答案。文件是具有層次結構的長篇技術手冊。應使用哪種分塊策略？

A. 200 token 的固定大小分塊，無重疊
B. 保留父子章節關係的層次分塊，具有重疊
C. 句子級分塊
D. 不分塊——將整個文件索引為單一向量

Answer: B

Hint: 技術手冊具有自然的章節層次，應在分塊中保留。

Explanation: 層次分塊保留文件的章節結構，維持標題和內容之間的父子關係。這為檢索提供更豐富的上下文——當檢索到詳細段落時，其父章節標題和周圍上下文也會包含在內，使回答更準確。

Why others wrong: 無重疊的 200 token 固定分塊會在句中截斷章節；句子級分塊對技術內容來說太小；整個文件索引會對特定主題產生差勁的向量表示。

Trap: 使用小的固定大小分塊——它們損失章節上下文，迫使 LLM 在不知道資訊屬於哪個章節的情況下回答。

Mnemonic: 層次文件需要層次分塊

## Q37
Type: single
Difficulty: 2
Tags: data-security, encryption
Concepts: data-encryption
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

ML 團隊需要確保訓練資料在 S3 中靜態加密且在傳輸到 SageMaker 訓練實例時也加密。哪個配置滿足這兩個需求？

A. 啟用 S3 預設加密（SSE-S3）並使用 SageMaker 的 VPC 端點
B. 啟用 S3 預設加密（SSE-KMS）並在 SageMaker 訓練任務中啟用容器間流量加密
C. 上傳到 S3 前使用用戶端加密並停用 VPC
D. 將資料儲存在附加到訓練實例的加密 EBS 磁碟區上

Answer: B

Hint: 你需要靜態加密（S3）和傳輸中加密（S3 和 SageMaker 之間，以及訓練容器之間）。

Explanation: SSE-KMS 提供使用客戶管理金鑰的靜態加密以供稽核控制。SageMaker 的容器間流量加密確保分散式訓練實例之間的資料在傳輸中加密。SageMaker 也使用 HTTPS 從 S3 傳輸資料，涵蓋完整的加密需求。

Why others wrong: SSE-S3 + VPC 端點不加密容器間流量；用戶端加密增加複雜性且停用 VPC 降低安全性；EBS 加密不涵蓋 S3 儲存或傳輸。

Trap: 忘了容器間流量——即使 S3 加密且使用 HTTPS，分散式訓練容器之間的資料需要明確加密。

Mnemonic: KMS 靜態 + 容器間傳輸 = 完全加密的 ML

## Q38
Type: single
Difficulty: 3
Tags: data-preparation, feature-engineering, temporal
Concepts: temporal-features
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

客戶流失模型使用在不同時間視窗（7 天、30 天、90 天）計算的行為特徵。團隊發現 90 天特徵比 7 天特徵有更高的重要性，但模型延遲要求需要即時推論。他們應該如何架構特徵計算？

A. 在推論時使用原始事件資料即時計算所有特徵
B. 批次預計算長視窗特徵（30 天、90 天）並儲存在 Feature Store 的線上儲存中，即時計算 7 天特徵
C. 只使用 7 天特徵以滿足延遲要求，捨棄 90 天特徵
D. 將所有特徵組合快取在 DynamoDB 中進行直接查找

Answer: B

Hint: 長歷史視窗無法即時高效計算，但它們變化足夠慢以進行預計算。

Explanation: 混合方法在批次中預計算慢變化的長視窗特徵（每日/每小時）並儲存在 Feature Store 的線上儲存中以供低延遲查找。快變化的短視窗特徵即時計算。這在保留 90 天特徵預測能力的同時滿足延遲要求。

Why others wrong: 即時計算 90 天聚合太慢；捨棄 90 天特徵損失最重要的預測因子；DynamoDB 查找可行但未解決計算架構問題。

Trap: 為了延遲而捨棄最重要的特徵——混合方法在滿足即時要求的同時保留它們。

Mnemonic: 慢特徵批次計算，快特徵即時計算，Feature Store 同時服務兩者

## Q39
Type: single
Difficulty: 1
Tags: data-formats, jsonl
Concepts: structured-data-formats
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

在 Amazon Bedrock 上微調基礎模型需要哪種檔案格式？

A. 帶標題行的 CSV
B. 帶有提示-完成配對的 JSONL（JSON Lines）
C. 帶綱要的 Parquet
D. 帶巢狀元素的 XML

Answer: B

Hint: 每個訓練範例是獨立一行的有效 JSON 物件。

Explanation: Amazon Bedrock 微調需要 JSONL 格式，每行是包含提示和完成欄位的有效 JSON 物件。JSONL 允許高效串流訓練範例，是跨主要平台 LLM 微調的標準格式。

Why others wrong: CSV 不支援提示所需的巢狀結構；Parquet 用於表格 ML 資料；XML 過於冗長且不受支援。

Trap: 因為 CSV 較簡單就用它——Bedrock 微調資料特別要求 JSONL。

Mnemonic: Bedrock 微調 = JSONL，每行一個範例

## Q40
Type: single
Difficulty: 2
Tags: data-preparation, feature-engineering
Concepts: feature-crosses
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

預測計程車行程時間的模型使用 pickup_location 和 time_of_day 作為獨立特徵，但未能捕捉到某些地點只在尖峰時段擁堵。哪種特徵工程技術有助於解決？

A. 獨立正規化兩個特徵
B. 建立結合 pickup_location 和 time_of_day 的特徵交叉
C. 移除兩個特徵之一以減少相關性
D. 套用 PCA 合併兩個特徵

Answer: B

Hint: 地點和擁堵之間的關係取決於一天中的時間——這是特徵交互作用。

Explanation: 特徵交叉（交互特徵）將 pickup_location 和 time_of_day 組合成一個新特徵，捕捉它們的聯合效應。例如，「downtown_rush_hour」明確表示市中心地點在早上 8-9 點有不同的擁堵模式，而非凌晨 2 點。

Why others wrong: 正規化不建立交互；移除特徵損失資訊；PCA 線性組合特徵但不捕捉特定的地點-時間交互。

Trap: 期望模型隱式學習交互——雖然深度模型可以，但明確的特徵交叉幫助所有模型類型，尤其是線性和樹模型。

Mnemonic: 特徵交叉 = 當組合比部分更重要時

## Q41
Type: single
Difficulty: 2
Tags: data-pipeline, sagemaker-processing
Concepts: processing-jobs
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

團隊需要在訓練前對大型資料集執行自訂 Python 資料預處理腳本。該腳本使用 pandas 和 scikit-learn。他們想要一個在 SageMaker 內的託管、可擴展的解決方案。應使用哪種方法？

A. 在筆電上本地執行腳本，然後將結果上傳到 S3
B. 使用搭配 scikit-learn 容器的 SageMaker Processing 任務
C. 將腳本部署為 SageMaker 即時端點
D. 在 SageMaker notebook 實例中執行腳本

Answer: B

Hint: Processing 任務為資料準備任務提供託管運算，並內建容器支援。

Explanation: SageMaker Processing 任務在具有自動擴展的託管基礎設施上執行資料準備腳本，內建 scikit-learn 和 Spark 容器，以及無縫的 S3 I/O。任務佈建運算、執行腳本、將輸出儲存到 S3 並終止——無需管理持久基礎設施。

Why others wrong: 本地處理無法擴展；端點用於推論，不是批次處理；notebook 實例用於開發，不是生產資料處理。

Trap: 在 notebook 中執行處理——它適合原型開發但無法擴展且佔用昂貴的 notebook 實例。

Mnemonic: Processing 任務 = 生產級預處理

## Q42
Type: single
Difficulty: 3
Tags: data-preparation, multimodal
Concepts: multimodal-data-prep
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

團隊正在建立使用產品影像和文字描述的多模態產品搜尋系統。他們計劃使用 Bedrock 基礎模型。應如何準備多模態嵌入管線的資料？

A. 將影像編碼為 base64 字串，並與文字描述串連在單一文字欄位中
B. 分別處理影像和文字，使用像 Titan Multimodal Embeddings 這樣的多模態模型生成嵌入，並將組合向量儲存在向量資料庫中
C. 使用 OCR 將影像轉換為文字描述，只使用文字嵌入
D. 將影像和文字分別儲存在不同資料庫中，查詢時用 ID 連結

Answer: B

Hint: 多模態模型將不同模態投射到共享的嵌入空間。

Explanation: Titan Multimodal Embeddings 生成將影像和文字映射到共享語義空間的向量，實現跨模態搜尋。模型原生處理每種模態（影像的像素資料、文字的 token）並產生可比較的向量，儲存在單一向量資料庫中以供統一檢索。

Why others wrong: base64 編碼將影像當作文字處理，損失視覺語義；OCR 遺漏顏色和風格等視覺特徵；使用連結的分離資料庫無法實現語義跨模態搜尋。

Trap: 用 OCR 將影像轉換為文字——這捕捉了影像中的文字但損失了顏色、形狀和風格等對產品搜尋至關重要的視覺特徵。

Mnemonic: 多模態模型 = 影像和文字共享一個空間

## Q43
Type: single
Difficulty: 1
Tags: data-preparation, deduplication
Concepts: data-deduplication
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

從網路爬取的訓練資料集包含許多近似重複記錄，可能使模型產生偏差。哪種技術能識別和移除近似重複的文字記錄？

A. 精確字串比對和刪除
B. MinHash/LSH（局部敏感雜湊）用於近似去重
C. 按字母排序記錄並移除相鄰的重複
D. 隨機抽樣 50% 的資料集

Answer: B

Hint: 近似重複不是精確匹配——你需要近似相似性偵測。

Explanation: MinHash 搭配局部敏感雜湊能高效識別近似重複文字，計算文件之間的近似 Jaccard 相似度。它可擴展到數百萬文件，並能捕捉精確比對會遺漏的改寫或略微修改的重複。

Why others wrong: 精確比對遺漏措辭有細微變化的近似重複；按字母排序不會將相似內容分組；隨機抽樣減少資料但不針對重複。

Trap: 使用精確字串比對——網路爬取的資料經常包含在空格、標點或細微措辭上不同的改寫重複。

Mnemonic: MinHash = 最小努力，最大去重偵測

## Q44
Type: single
Difficulty: 2
Tags: data-preparation, target-encoding
Concepts: label-encoding-strategies
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

迴歸模型預測房價。其中一個特徵是「neighborhood」，有 200 個唯一值。使用獨熱編碼建立稀疏、高維資料。哪種替代編碼在保持維度低的同時保留預測訊號？

A. 雜湊編碼到固定數量的桶
B. 使用每個社區平均房價的目標編碼，加上正規化
C. 完全捨棄社區特徵
D. 基於字母順序指派連續整數

Answer: B

Hint: 目標變數本身可以為迴歸任務提供類別編碼的資訊。

Explanation: 目標編碼用每個社區的平滑平均房價替換該社區。正規化（與全局平均混合，特別是對樣本少的社區）防止過擬合。這產生單一的資訊性特徵，而不是 200 個稀疏欄位。

Why others wrong: 雜湊編碼會因碰撞損失資訊；捨棄特徵損失寶貴的地段訊號；字母順序整數暗示虛假的序數關係。

Trap: 不正規化目標編碼——沒有平滑處理，罕見社區會過擬合到它們的少數觀測值。

Mnemonic: 高基數 + 迴歸 = 帶正規化的目標編碼

## Q45
Type: single
Difficulty: 2
Tags: data-pipeline, glue, catalog
Concepts: data-catalog
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

ML 團隊管理分布在多個 S3 位置、具有不同綱要的資料集。他們需要一種集中方式來發現、搜尋和了解可用的資料集。哪個 AWS 元件提供此功能？

A. S3 Inventory 報告
B. AWS Glue Data Catalog
C. Amazon CloudWatch Logs
D. AWS Systems Manager Parameter Store

Answer: B

Hint: 想想哪個元件維護資料集的中繼資料——綱要、分區和位置。

Explanation: Glue 資料目錄是集中式中繼資料儲存庫，儲存表定義、綱要、分區和 S3 位置。爬蟲程式自動發現新資料並更新目錄，使資料集可被組織中的 ML 團隊搜尋和查詢。

Why others wrong: S3 Inventory 列出物件但不列出綱要；CloudWatch 記錄執行時事件；Parameter Store 保存配置，不是資料集中繼資料。

Trap: 依賴 S3 Inventory——它告訴你有什麼檔案，但不告訴資料長什麼樣子（綱要、類型、分區）。

Mnemonic: 資料目錄 = 資料湖的圖書館目錄

## Q46
Type: single
Difficulty: 3
Tags: data-preparation, class-weights
Concepts: cost-sensitive-learning
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

團隊想調整訓練過程本身來處理類別不平衡，而不是重新採樣不平衡的資料集。哪種 SageMaker 方法支援在不修改資料的情況下做到這點？

A. 在訓練前套用 SMOTE 並設定相等的類別權重
B. 使用內建 XGBoost 演算法搭配 scale_pos_weight 超參數
C. 在不同的隨機子集上訓練多個模型並集成
D. 增加訓練 epoch 數量

Answer: B

Hint: 某些演算法接受一個參數，在訓練期間對正例類別給予不同的權重。

Explanation: SageMaker 的內建 XGBoost 支援 scale_pos_weight，它調整正例的梯度。將其設為負例對正例的比率，使演算法將正例視為更重要，有效處理不平衡而不修改資料。

Why others wrong: SMOTE 修改資料，不是訓練過程；集成解決方差但不解決系統性的類別不平衡；更多 epoch 不修復不平衡的損失梯度。

Trap: 將 SMOTE 和 scale_pos_weight 結合使用——這會雙重補償不平衡，可能降低效能。

Mnemonic: scale_pos_weight = 放大正例的重要性

## Q47
Type: single
Difficulty: 2
Tags: data-pipeline, scheduling
Concepts: pipeline-scheduling
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

資料準備管線必須每日執行以刷新訓練特徵。它包含一個 Glue 任務、一個 SageMaker Processing 任務和一個 Feature Store 攝取步驟。哪個服務提供最簡單的排程和編排？

A. Amazon EventBridge Scheduler 搭配 Step Functions
B. EC2 實例上的 Cron 任務
C. SageMaker Pipelines 搭配排程觸發器
D. AWS Lambda 搭配 CloudWatch Events 規則循序呼叫每個步驟

Answer: A

Hint: 你需要同時具備排程（何時執行）和編排（依序執行什麼步驟）。

Explanation: EventBridge Scheduler 按 cron 排程觸發 Step Functions 工作流程。Step Functions 編排多步驟管線，具有內建的錯誤處理、重試和平行執行支援——在無伺服器託管方案中結合排程和編排。

Why others wrong: EC2 cron 任務需要實例管理；SageMaker Pipelines 專注於 ML 且對 Glue 整合較不靈活；Lambda 循序呼叫缺乏適當的錯誤處理和編排。

Trap: 對所有東西使用 SageMaker Pipelines——它針對 ML 工作流程最佳化，但對混合的 Glue + SageMaker 管線較不自然。

Mnemonic: EventBridge 排程它，Step Functions 執行它

## Q48
Type: single
Difficulty: 1
Tags: data-preparation, train-mode
Concepts: sagemaker-input-modes
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

SageMaker 訓練任務在 500 GB 資料集上需要 30 分鐘下載資料才能開始訓練。哪種輸入模式可以消除這個下載延遲？

A. 使用更快實例類型的 File 模式
B. 直接從 S3 串流資料的 Pipe 模式
C. 帶預取的 FastFile 模式
D. EFS 掛載模式

Answer: B

Hint: 不是先下載，而是隨著訓練進行串流資料。

Explanation: Pipe 模式直接從 S3 向訓練演算法串流資料，消除了前置下載。訓練立即開始，資料通過 Unix 管道饋送，且實例不需要完整資料集的本地儲存——減少了啟動時間和儲存成本。

Why others wrong: File 模式不論實例類型都會先下載；FastFile 改善 File 模式但仍然下載；EFS 增加了網路檔案系統的額外開銷。

Trap: 以為 FastFile 消除了下載——它預取和快取但仍然下載資料到實例。

Mnemonic: Pipe 模式 = 資料像水流過管道，無需等待

## Q49
Type: single
Difficulty: 2
Tags: data-preparation, text, tokenization
Concepts: tokenization-strategies
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

微調基礎模型時，資料集的提示持續超過模型的最大 token 限制，導致截斷。哪種資料準備方法最能解決這個問題？

A. 增加模型的上下文視窗大小
B. 在微調前使用另一個 LLM 摘要長提示，保留關鍵資訊
C. 直接從末尾截斷並接受資訊損失
D. 將每個長提示分割成多個獨立的訓練範例，不帶上下文

Answer: B

Hint: 在符合 token 限制的同時保留必要資訊。

Explanation: 使用 LLM 智慧摘要長提示可在符合 token 限制的同時保留語義內容。這優於可能截斷關鍵資訊的盲目截斷，也比損失跨段落上下文的分割更好。

Why others wrong: 你無法改變基礎模型的上下文視窗；截斷可能損失末尾的關鍵資訊；不帶上下文的分割建立了令模型困惑的斷開範例。

Trap: 直接截斷——如果關鍵資訊在提示末尾（如實際問題），截斷會完全移除它。

Mnemonic: 太長？智慧摘要，不要盲目截斷

## Q50
Type: single
Difficulty: 3
Tags: data-pipeline, real-time, feature-computation
Concepts: streaming-features
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

共乘應用程式需要計算「司機需求比」特徵（過去 5 分鐘內某區域的請求/可用司機數量）用於動態定價模型。該特徵必須可供即時推論使用。哪種架構計算此特徵？

A. 每 5 分鐘查詢資料庫的批次任務，寫入 Feature Store
B. Kinesis Data Streams 搭配 Kinesis Data Analytics（託管 Flink）應用程式計算滑動視窗聚合，寫入 Feature Store 的線上儲存
C. 每 5 分鐘觸發的 Lambda 函數，計算 DynamoDB 中的事件
D. CloudWatch 指標聚合搭配自訂指標

Answer: B

Hint: 對串流資料的滑動視窗聚合需要串流處理引擎。

Explanation: Kinesis Data Analytics（託管 Apache Flink）提供對串流資料的即時滑動視窗計算。它持續聚合 5 分鐘視窗內的請求和司機可用性事件，產生寫入 Feature Store 線上儲存的新鮮需求比率，用於即時推論。

Why others wrong: 批次任務有高達 5 分鐘的延遲；每 5 分鐘的 Lambda 是時間點的，不是真正的滑動視窗；CloudWatch 指標不是為 ML 特徵計算設計的。

Trap: 每 5 分鐘使用批次任務——它給出時間點快照，不是真正的滑動視窗聚合，且有可變延遲。

Mnemonic: 滑動視窗 = 串流引擎（Flink），不是批次輪詢

## Q51
Type: single
Difficulty: 2
Tags: data-preparation, data-quality
Concepts: data-validation
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

在自動重新訓練管線將新資料餵給模型之前，團隊想驗證傳入資料是否符合預期的綱要和統計特性。哪種方法提供自動化的資料驗證？

A. 資料工程師手動審查資料樣本
B. AWS Glue Data Quality 規則，驗證綱要、完整性和統計範圍
C. 執行訓練任務看看是否失敗
D. 用 Athena 查詢資料並手動檢查結果

Answer: B

Hint: 自動化驗證應在資料到達訓練步驟之前檢查它。

Explanation: Glue Data Quality 允許定義聲明式規則用於綱要驗證、欄位完整性、值範圍和統計特性。規則作為資料管線的一部分自動執行，當偵測到違規時可停止下游處理，防止壞資料進入訓練。

Why others wrong: 手動審查無法擴展；讓訓練失敗浪費運算和時間；Athena 查詢需要手動分析。

Trap: 通過執行訓練來驗證資料——等到訓練失敗時，你已經浪費了運算和除錯時間。在訓練前驗證資料。

Mnemonic: 提早驗證，快速失敗——在訓練前，不是訓練中

## Q52
Type: single
Difficulty: 1
Tags: data-preparation, sampling-bias
Concepts: selection-bias
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

一個訓練預測客戶滿意度的模型使用問卷回應作為訓練資料。然而，只有 10% 的客戶回覆問卷，且回覆的人傾向於有極端意見。存在什麼類型的偏差？

A. 標籤偏差
B. 選擇偏差（無回應偏差）
C. 測量偏差
D. 聚合偏差

Answer: B

Hint: 訓練資料來自目標人群的非代表性子集。

Explanation: 當訓練資料不代表目標人群時，就會發生選擇偏差。具有極端意見（非常滿意或非常不滿意）的問卷回覆者被過度代表，而沉默的大多數缺失，導致模型無法準確預測典型客戶情緒。

Why others wrong: 標籤偏差意味著標籤系統性地不正確；測量偏差意味著測量工具有缺陷；聚合偏差發生在不同群組被不恰當地組合時。

Trap: 因為問卷資料是「真實」的就忽略無回應偏差——真實但非代表性的資料仍然產生有偏差的模型。

Mnemonic: 誰回答了？如果不是每個人都平等地回答，那就是選擇偏差

## Q53
Type: single
Difficulty: 2
Tags: data-preparation, genai, evaluation-dataset
Concepts: evaluation-data-prep
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

團隊正在準備評估資料集以衡量在 Bedrock 上微調的法律文件摘要模型的品質。他們應該遵循哪些最佳實踐？

A. 使用相同的資料進行微調和評估以確保一致性
B. 建立保留的評估集，包含人工撰寫的參考摘要、多樣的文件類型和明確的評分標準
C. 只使用 BLEU 等自動指標評估，不做人工判斷
D. 使用單一長文件作為評估基準

Answer: B

Hint: 評估資料必須與訓練資料分離，並代表真實世界的使用情境。

Explanation: 適當的評估資料集從微調中保留，包含用於比較的人工撰寫參考摘要，涵蓋多樣的文件類型和長度，並配有明確的評分標準。這使自動指標和人工評估都能有意義地評估模型。

Why others wrong: 使用訓練資料評估會造成資料洩漏；單獨的 BLEU 遺漏流暢性、準確性和法律正確性；單一文件無法測試泛化能力。

Trap: 只依賴 BLEU 分數——它衡量 n-gram 重疊但遺漏事實準確性、法律正確性和可讀性，這些對法律摘要很重要。

Mnemonic: 評估 = 保留 + 人工參考 + 多樣 + 明確標準

## Q54
Type: single
Difficulty: 3
Tags: data-pipeline, versioning
Concepts: dataset-versioning
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

受監管的 ML 團隊必須精確重現任何過去模型的結果，包括使用的確切訓練資料。他們的資料每天變更。哪種版本控制策略確保完全可重現性？

A. 只在 S3 中保留最新版本的資料，並用生命週期規則刪除舊版本
B. 使用 S3 版本控制，結合 SageMaker Experiments 追蹤每次訓練執行使用的特定 S3 版本 ID
C. 每週進行資料庫快照並儲存在 Glacier 中
D. 記錄每次訓練執行的資料計數和摘要統計

Answer: B

Hint: 你需要與每次特定訓練執行連結的不可變資料快照。

Explanation: S3 版本控制保留每個物件的每個版本。SageMaker Experiments 記錄每次訓練試驗中使用的確切 S3 版本 ID（或帶版本參數的特定 S3 URI）。兩者結合，可以使用精確使用的資料精確重現任何歷史訓練執行。

Why others wrong: 刪除舊版本阻止了重現；每週快照遺漏了每日變更；摘要統計無法實現資料級重現。

Trap: 版本控制資料但不將版本連結到訓練執行——你需要版本和使用哪個版本的記錄。

Mnemonic: 資料版本控制 + 連結到執行 = 完美可重現性

## Q55
Type: single
Difficulty: 2
Tags: data-preparation, geospatial
Concepts: geospatial-features
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

物流最佳化模型需要從經緯度座標衍生的位置特徵。原始座標對樹模型不是有用的特徵。哪種轉換使位置資料更有用？

A. 將經度和緯度正規化到 [0,1] 範圍
B. 使用 geohashing 將座標轉換為離散空間桶並獨熱編碼這些桶
C. 將座標轉換為字串格式
D. 捨棄位置特徵，因為它們增加太多雜訊

Answer: B

Hint: 將連續座標離散化為空間區域可建立有意義的類別特徵。

Explanation: Geohashing 將經緯度映射到層次空間單元（如「9q8yy」），將附近位置分組在一起。不同的精度等級在不同的空間粒度建立特徵。樹模型可以在這些離散區域上分割，而不是嘗試從原始座標學習複雜的空間邊界。

Why others wrong: 正規化座標不捕捉空間鄰近性；字串座標不是可用的特徵；捨棄位置損失寶貴的空間訊號。

Trap: 在樹模型中使用原始經緯度——樹在單一閾值上分割，使其難以從兩個連續座標學習複雜的空間邊界。

Mnemonic: Geohash = 地理位置的雜湊，附近地方得到相似的編碼

## Q56
Type: single
Difficulty: 1
Tags: model-development, algorithm-selection
Concepts: algorithm-selection
Domain: Domain 2 — ML Model Development
DomainNumber: 2

公司需要建立一個模型，根據 20 個數值和類別特徵預測客戶流失（是/否）。他們想要快速訓練和可解釋的結果。哪個 SageMaker 內建演算法最合適？

A. DeepAR
B. XGBoost
C. Seq2Seq
D. Image Classification

Answer: B

Hint: 想想哪個演算法擅長具有混合特徵類型的表格分類，並提供特徵重要性。

Explanation: XGBoost 是表格分類任務的首選演算法。它處理混合特徵類型（數值和類別），訓練快速，提供特徵重要性分數以供解釋，並在結構化資料分類問題上持續達到強大的效能。

Why others wrong: DeepAR 用於時間序列預測；Seq2Seq 用於序列翻譯；Image Classification 用於電腦視覺。

Trap: 資料是表格時就用神經網路——XGBoost 在結構化資料上通常更快且更準確。

Mnemonic: 表格資料？XGBoost 卓越

## Q57
Type: single
Difficulty: 2
Tags: model-development, hyperparameter-tuning
Concepts: hyperparameter-optimization
Domain: Domain 2 — ML Model Development
DomainNumber: 2

團隊正在調校具有 8 個超參數的 SageMaker XGBoost 模型。他們有 100 個訓練任務的預算。哪種調校策略最高效地探索搜尋空間？

A. 對所有參數組合進行網格搜尋
B. 使用 SageMaker Automatic Model Tuning 的貝氏最佳化
C. 均勻抽樣的隨機搜尋
D. 手動逐個調整參數

Answer: B

Hint: 想想哪種策略從之前的試驗中學習，專注於有希望的區域。

Explanation: 貝氏最佳化建立目標函數的機率模型，並用它選擇最有希望的超參數配置進行下一次評估。SageMaker Automatic Model Tuning 實現了這一點，通常比隨機或網格搜尋在更少的試驗中找到更好的配置。

Why others wrong: 8 個參數的網格搜尋是組合爆炸的（遠超 100 個任務）；隨機搜尋不從之前的試驗中學習；手動調校緩慢且受人類直覺偏差影響。

Trap: 使用多參數的網格搜尋——8 個參數每個只取 3 個值就需要 6,561 個組合，遠超 100 個任務的預算。

Mnemonic: 貝氏 = 用大腦（過去的結果）選擇下一個實驗

## Q58
Type: single
Difficulty: 2
Tags: model-development, training-instances
Concepts: instance-selection
Domain: Domain 2 — ML Model Development
DomainNumber: 2

自然語言處理的深度學習模型在訓練期間需要 GPU 加速。訓練資料集可放入 16 GB 的 GPU 記憶體。哪個 SageMaker 實例類型系列最具成本效益？

A. ml.m5（通用 CPU）
B. ml.p3（NVIDIA V100 GPU）
C. ml.g5（NVIDIA A10G GPU）
D. ml.p5（NVIDIA H100 GPU）

Answer: C

Hint: 考慮哪個 GPU 實例為中等工作負載提供足夠的運算能力和最低的每 GPU 小時成本。

Explanation: 搭配 NVIDIA A10G GPU 的 ml.g5 系列為適合單一 GPU 的 NLP 訓練提供優異的性價比。A10G GPU 有 24 GB 記憶體（足夠 16 GB 工作負載），對 transformer 模型提供良好的吞吐量，且每小時成本顯著低於 P3（V100）或 P5（H100）實例。

Why others wrong: M5 實例沒有 GPU；P3（V100）更貴且較舊；P5（H100）對能放入 16 GB 的工作負載來說殺雞用牛刀。

Trap: 選擇最強大的 GPU（P5/H100）——更強大不代表更具成本效益。將 GPU 匹配到工作負載。

Mnemonic: G5 = 好 GPU，中等訓練的好價格

## Q59
Type: single
Difficulty: 3
Tags: model-development, distributed-training
Concepts: data-parallelism
Domain: Domain 2 — ML Model Development
DomainNumber: 2

1 TB 影像資料的電腦視覺模型訓練任務在單一 GPU 實例上需要 24 小時。團隊需要將其縮短到 4 小時以內。哪種 SageMaker 分散式訓練方法是合適的？

A. 跨 8 個實例的模型平行化
B. 使用 SageMaker 分散式資料平行庫跨 8 個 GPU 實例的資料平行化
C. 部署 8 個分別在不同資料分割上的訓練任務並平均模型
D. 使用更多 CPU 的更大單一實例

Answer: B

Hint: 當模型能放在單一 GPU 但資料集很大時，跨 GPU 分配資料可加速訓練。

Explanation: 資料平行化在每個 GPU 上複製模型，並在實例間分配資料。SageMaker 的分散式資料平行庫使用 AllReduce 最佳化梯度同步，達到接近線性的擴展。使用 8 個 GPU，24 小時的任務可在大約 3 小時內完成。

Why others wrong: 模型平行化分割模型而非資料——當模型能放在一個 GPU 上時不必要；平均分離的模型不等同於分散式訓練；更多 CPU 對 GPU 限制的訓練沒有幫助。

Trap: 當模型能放在單一 GPU 上時使用模型平行化——資料平行化對這種場景更簡單且更高效。

Mnemonic: 模型放得下？資料平行。模型太大？模型平行。

## Q60
Type: single
Difficulty: 1
Tags: model-development, built-in
Concepts: sagemaker-algorithms
Domain: Domain 2 — ML Model Development
DomainNumber: 2

哪個 SageMaker 內建演算法專為時間序列預測設計？

A. Random Cut Forest
B. DeepAR
C. Linear Learner
D. K-Nearest Neighbors

Answer: B

Hint: 想想哪個演算法使用自迴歸遞迴網路進行機率預測。

Explanation: DeepAR 是 SageMaker 用於時間序列預測的內建演算法。它使用自迴歸遞迴神經網路產生機率預測（點估計加信賴區間），並可以同時在多個相關時間序列上訓練。

Why others wrong: Random Cut Forest 用於異常偵測；Linear Learner 用於分類/迴歸；KNN 用於基於鄰居相似性的分類/迴歸。

Trap: 使用 Random Cut Forest 進行預測——它偵測時間序列中的異常但不預測未來的值。

Mnemonic: DeepAR = 深度自迴歸預測

## Q61
Type: single
Difficulty: 2
Tags: model-development, regularization
Concepts: overfitting-prevention
Domain: Domain 2 — ML Model Development
DomainNumber: 2

神經網路模型在訓練資料上達到 98% 準確率，但在驗證資料上只有 72%。應套用哪些技術組合來減少這個差距？

A. 增加層數和神經元數
B. 套用 dropout、早停和 L2 正規化
C. 以更高的學習率訓練更多 epoch
D. 不做任何正規化，使用更大的訓練資料集

Answer: B

Hint: 訓練和驗證準確率之間的大差距表示過擬合——你需要約束模型。

Explanation: Dropout 在訓練期間隨機停用神經元，迫使網路學習冗餘表示。早停在驗證指標趨於穩定時停止訓練，防止記憶。L2 正規化懲罰大權重，鼓勵更簡單的模型。這些技術從多個角度減少過擬合。

Why others wrong: 更多層增加模型容量，惡化過擬合；更多 epoch 和更高學習率加劇記憶；更多資料有幫助但不「不做任何正規化」。

Trap: 增加模型複雜度以提升準確率——模型對資料來說已經太複雜（過擬合），而非太簡單。

Mnemonic: 訓練 98%，驗證 72% = 過擬合。Dropout、停止、縮小權重。

## Q62
Type: single
Difficulty: 2
Tags: model-development, transfer-learning
Concepts: transfer-learning
Domain: Domain 2 — ML Model Development
DomainNumber: 2

團隊只有 500 張標記影像用於產品缺陷偵測任務。從零開始訓練模型產生不佳結果。使用 SageMaker JumpStart 的哪種方法最有效？

A. 在像素值上訓練簡單的邏輯迴歸
B. 從 JumpStart 微調預訓練影像分類模型，使用 500 張標記影像
C. 對影像使用非監督式聚類
D. 使用隨機雜訊生成 10,000 張合成影像

Answer: B

Hint: 預訓練模型已經理解一般影像特徵——你只需要將它們調整到特定任務。

Explanation: SageMaker JumpStart 提供預訓練電腦視覺模型（如 ResNet、EfficientNet），它們從數百萬張影像中學習了一般影像特徵。在 500 張領域特定影像上微調這些模型可轉移這些知識，比從零開始訓練需要少得多的標記範例。

Why others wrong: 在像素上做邏輯迴歸忽略空間關係；聚類不使用標籤；隨機雜訊影像與真實缺陷沒有關係。

Trap: 只有 500 張影像就從零開始訓練——深度模型從零開始需要數千個範例，但微調預訓練模型只需數百個就能良好運作。

Mnemonic: 少標籤 + JumpStart = 用遷移學習跳躍啟動你的訓練

## Q63
Type: single
Difficulty: 3
Tags: model-development, model-parallelism
Concepts: model-parallelism
Domain: Domain 2 — ML Model Development
DomainNumber: 2

團隊需要訓練一個 700 億參數的 LLM，無法放在單一 GPU 上。SageMaker 的模型平行庫提供多種分片策略。哪種策略最高效地將模型分區到多個 GPU 上進行 LLM 訓練？

A. 只使用管線平行化，將模型分成循序階段
B. 張量平行化結合管線平行化（混合方法）
C. 資料平行化搭配梯度檢查點
D. 訓練一個能放在一個 GPU 上的較小模型

Answer: B

Hint: 大型 LLM 受益於在不同層級結合多種平行化策略。

Explanation: 混合平行化結合張量平行化（在節點內跨 GPU 分割個別層的權重矩陣，利用高頻寬通訊）和管線平行化（跨節點分配層）。這最小化通訊開銷，同時處理超過單一 GPU 記憶體的模型，是 700 億以上參數 LLM 的標準方法。

Why others wrong: 只用管線平行化有氣泡開銷；資料平行化需要完整模型放在每個 GPU 上；訓練較小模型不符合需求。

Trap: 只使用資料平行化——它需要完整模型在每個 GPU 上，當模型超過 GPU 記憶體時不可能。

Mnemonic: 700 億參數 = 節點內張量 + 跨節點管線

## Q64
Type: single
Difficulty: 1
Tags: model-development, evaluation
Concepts: model-evaluation-metrics
Domain: Domain 2 — ML Model Development
DomainNumber: 2

癌症篩檢的二元分類模型應最小化遺漏實際癌症病例的機會。哪個指標應作為主要最佳化目標？

A. 精確率
B. 召回率（敏感度）
C. 準確率
D. 特異度

Answer: B

Hint: 遺漏癌症病例（假陰性）比誤報（假陽性）更危險。

Explanation: 召回率衡量實際正例被正確識別的比例。對於癌症篩檢，最大化召回率可最小化假陰性（遺漏的癌症病例），這很關鍵，因為漏診的後果遠比導致額外檢查的誤報嚴重。

Why others wrong: 精確率最小化假陽性但可能遺漏病例；類別不平衡時準確率具有誤導性；特異度專注於正確識別陰性。

Trap: 類別不平衡時最佳化準確率——將所有人預測為「無癌症」的模型達到高準確率但零召回率。

Mnemonic: 召回率 = 記住所有真實病例，不要遺漏任何一個

## Q65
Type: single
Difficulty: 2
Tags: model-development, cross-validation
Concepts: cross-validation
Domain: Domain 2 — ML Model Development
DomainNumber: 2

團隊使用單一訓練-測試分割評估模型，得到 F1 分數 0.85。他們想要更可靠的估計。應使用哪種評估方法？

A. 在完整資料集上訓練並在相同資料上評估
B. K=5 的 K 折交叉驗證，報告 F1 的平均值和標準差
C. 將測試集增加到資料的 50%
D. 使用相同的訓練-測試分割執行 5 次並平均結果

Answer: B

Hint: 多個不同的訓練-測試分割提供效能指標的分布。

Explanation: 5 折交叉驗證訓練和評估模型 5 次，每次使用不同的 20% 資料進行測試。報告 F1 的平均值和標準差既顯示預期效能又顯示其變異性，比任何單一分割提供更可靠的估計。

Why others wrong: 在相同資料上訓練和評估給出過於樂觀的結果；50% 測試集浪費訓練資料；重複相同分割每次產生相同結果（無新資訊）。

Trap: 多次執行相同分割——對確定性模型，每次得到完全相同的結果。你需要不同的分割。

Mnemonic: K 折 = 從 K 個不同角度看你模型的真實效能

## Q66
Type: single
Difficulty: 2
Tags: model-development, sagemaker-experiments
Concepts: experiment-tracking
Domain: Domain 2 — ML Model Development
DomainNumber: 2

資料科學家正在測試多種模型架構、超參數和特徵集。他們需要系統地比較實驗並重現最佳結果。哪個 SageMaker 功能支援此需求？

A. SageMaker Debugger
B. SageMaker Experiments
C. SageMaker Model Registry
D. SageMaker Autopilot

Answer: B

Hint: 想想哪個功能能追蹤和比較多次試驗的參數和指標。

Explanation: SageMaker Experiments 將 ML 工作組織成實驗、試驗和試驗組件。每次試驗記錄超參數、輸入資料、指標和輸出產出物，實現任何實驗執行的系統比較和重現。

Why others wrong: Debugger 監控個別訓練任務的問題；Model Registry 管理訓練後的模型版本；Autopilot 自動化整個 ML 工作流程但不追蹤手動實驗。

Trap: 混淆 Experiments（追蹤）和 Autopilot（自動化）——Experiments 追蹤你的手動探索，Autopilot 替你做探索。

Mnemonic: Experiments = 實驗追蹤器，不是實驗自動化器

## Q67
Type: single
Difficulty: 3
Tags: model-development, bedrock, fine-tuning
Concepts: fm-fine-tuning
Domain: Domain 2 — ML Model Development
DomainNumber: 2

公司想在 Amazon Bedrock 上微調 Claude 模型，以其特定品牌語氣和領域術語生成回應。他們有 5,000 個精心策劃的提示-回應配對。應採取哪種方法？

A. 使用原始公司文件進行持續預訓練的微調
B. 使用 Bedrock 的自訂模型訓練，採用指令調校微調方法處理精心策劃的 JSONL 資料集
C. 在 SageMaker 上部署開源模型，使用 LoRA 微調
D. 將所有公司文件加入 RAG 知識庫而非微調

Answer: B

Hint: 當你有精心策劃的提示-回應配對並想調整模型行為時，監督式微調是正確的方法。

Explanation: Bedrock 的監督式微調使用指令調校資料（JSONL 格式的提示-回應配對）調整模型的回應風格、語氣和領域知識。5,000 個高品質範例是教導品牌語氣和術語的強大資料集，同時不會損失模型的一般能力。

Why others wrong: 持續預訓練需要大量非結構化資料且調整知識而非風格；SageMaker LoRA 可行但操作負擔更重；RAG 增加知識檢索但不改變模型的寫作方式。

Trap: 用 RAG 代替微調——RAG 提供事實，但微調改變模型的寫作風格和語氣。對於品牌語氣，你需要微調。

Mnemonic: RAG = 模型知道什麼，微調 = 模型怎麼說

## Q68
Type: single
Difficulty: 2
Tags: model-development, autopilot
Concepts: automl
Domain: Domain 2 — ML Model Development
DomainNumber: 2

沒有 ML 經驗的業務分析師需要從 CSV 資料集建立預測模型。他們需要自動選擇最佳模型並提供可解釋性。應使用哪個 SageMaker 功能？

A. SageMaker Studio Notebooks 搭配手動編碼
B. SageMaker Autopilot
C. SageMaker JumpStart
D. SageMaker Canvas

Answer: D

Hint: 想想哪個工具提供完全無程式碼的視覺介面來建立 ML 模型。

Explanation: SageMaker Canvas 提供視覺化、無程式碼介面，業務分析師可上傳資料、自動建立和比較模型、生成預測——全部不需寫任何程式碼。它自動處理特徵工程、演算法選擇和超參數調校，同時提供可解釋性儀表板。

Why others wrong: Notebooks 需要編碼；Autopilot 需要 API/CLI 知識；JumpStart 提供預訓練模型但需要一些 ML 知識。

Trap: 選擇 Autopilot——它也是自動化的但需要程式化互動。Canvas 才是給業務使用者的真正無程式碼體驗。

Mnemonic: Canvas = 畫出你的 ML 模型，不需要程式碼

## Q69
Type: single
Difficulty: 2
Tags: model-development, loss-function
Concepts: loss-functions
Domain: Domain 2 — ML Model Development
DomainNumber: 2

迴歸模型預測交貨時間，需要對低估（延遲交貨）施加比高估（提早交貨）更重的懲罰。應使用哪個損失函數？

A. 均方誤差 (MSE)
B. 平均絕對誤差 (MAE)
C. 分位數大於 0.5 的非對稱分位損失
D. Huber 損失

Answer: C

Hint: 你需要一個根據誤差方向不同給予不同懲罰的損失函數。

Explanation: 分位數參數大於 0.5（例如 0.8）的分位損失對低估的懲罰大於高估。這產生偏向較高交貨時間的預測，減少延遲交貨的頻率，代價是一些提早的預測——符合業務需求。

Why others wrong: MSE 和 MAE 對高估和低估的懲罰相等；Huber 損失降低離群值敏感度但仍然是對稱的。

Trap: 使用 MSE 因為它是預設的——對稱損失對延遲和提早交貨一視同仁，不符合業務需求。

Mnemonic: 非對稱成本？非對稱損失！分位數 > 0.5 = 懲罰低估

## Q70
Type: single
Difficulty: 1
Tags: model-development, built-in, clustering
Concepts: unsupervised-learning
Domain: Domain 2 — ML Model Development
DomainNumber: 2

行銷團隊想根據購買行為將客戶分群，但沒有預定義的標籤。應使用哪個 SageMaker 內建演算法？

A. XGBoost
B. K-Means
C. Linear Learner
D. Factorization Machines

Answer: B

Hint: 在沒有標籤的情況下將資料分群是非監督式學習。

Explanation: K-Means 是 SageMaker 的內建非監督式聚類演算法，根據特徵相似性將相似的資料點分組在一起。它自動識別自然的客戶群組，不需要預定義的標籤，非常適合客戶分群。

Why others wrong: XGBoost 需要標記資料；Linear Learner 需要分類/迴歸的標籤；Factorization Machines 用於推薦和稀疏資料的分類。

Trap: 在沒有標籤時使用監督式演算法——聚類是發現未標記資料中群組的正確工具。

Mnemonic: 沒有標籤？K-Means 幫你聚類

## Q71
Type: single
Difficulty: 2
Tags: model-development, warm-start
Concepts: warm-start-tuning
Domain: Domain 2 — ML Model Development
DomainNumber: 2

團隊已執行 50 個 XGBoost 模型的超參數調校任務。現在想探索額外的超參數範圍。如何在不從頭開始的情況下利用之前的結果？

A. 手動複製最佳配置並開始新的調校任務
B. 使用熱啟動進行超參數調校，引用之前的調校任務作為父級
C. 用之前執行中的最佳參數訓練單一模型
D. 用全新的範圍開始新的調校任務

Answer: B

Hint: 熱啟動將之前調校任務的知識轉移過來以加速新的探索。

Explanation: SageMaker 的熱啟動超參數調校使用父級調校任務的結果來指導貝氏最佳化器。它從已評估配置的知識開始，避免冗餘探索，即使修改了參數範圍也能更快收斂到更好的配置。

Why others wrong: 手動複製不利用貝氏模型；單一模型可能錯過潛在更好的配置；從零開始浪費了 50 次先前試驗的知識。

Trap: 每次都從零開始——熱啟動保留了最佳化器學到的搜尋空間景觀，使後續輪次更高效。

Mnemonic: 熱啟動 = 不要冷啟動，重用你已知的

## Q72
Type: single
Difficulty: 3
Tags: model-development, gradient-accumulation
Concepts: memory-optimization
Domain: Domain 2 — ML Model Development
DomainNumber: 2

大批次深度學習訓練任務耗盡了 GPU 記憶體。團隊想在不增加 GPU 記憶體使用的情況下模擬更大的批次大小。應使用哪種技術？

A. 通過移除層來減小模型大小
B. 梯度累積，在多次前向-反向傳播中模擬更大批次
C. 使用 CPU 訓練代替 GPU
D. 降低輸入解析度

Answer: B

Hint: 不是一次處理大批次，而是處理較小的批次並累積它們的梯度。

Explanation: 梯度累積將大的邏輯批次分成較小的微批次。每個微批次執行前向-反向傳播並累積梯度而不更新權重。經過 N 個微批次後，梯度被平均並更新權重，模擬比實際使用記憶體大 N 倍的批次效果。

Why others wrong: 移除層改變了模型架構；CPU 訓練慢得多；降低解析度改變了輸入資料。

Trap: 認為必須減小批次大小——梯度累積讓你在小批次的記憶體限制內獲得大批次的好處。

Mnemonic: 累積梯度 = 大批次行為，小批次記憶體

## Q73
Type: single
Difficulty: 2
Tags: model-development, ensemble
Concepts: model-ensembling
Domain: Domain 2 — ML Model Development
DomainNumber: 2

三個分類任務的模型各自達到 82%、84% 和 80% 的準確率。團隊想結合它們以獲得更好的效能。哪種集成方法提供簡單有效的組合？

A. 只使用 84% 準確率的模型，捨棄其他
B. 加權多數投票，權重與個別模型效能成正比
C. 在不考慮個別準確率的情況下平均原始預測
D. 將模型串聯連接，將每個模型的輸出作為下一個的輸入

Answer: B

Hint: 在組合預測時，給效能較好的模型更多影響力。

Explanation: 加權多數投票根據個別效能為更好的模型指派更高權重。84% 的模型獲得最多影響力，80% 的模型最少，產生利用每個模型強項的集成預測。

Why others wrong: 捨棄模型浪費了它們的互補資訊；未加權平均讓差模型和好模型享有同等地位；串聯連接會複合錯誤而非修正。

Trap: 等權重平均——它不考慮模型之間的品質差異。差的模型會稀釋好的。

Mnemonic: 更好的模型？在投票中有更大的權重

## Q74
Type: single
Difficulty: 2
Tags: model-development, bedrock, agents
Concepts: bedrock-agents
Domain: Domain 2 — ML Model Development
DomainNumber: 2

團隊正在 Amazon Bedrock 上建立一個 AI agent，能查詢訂單狀態、處理退貨和推薦產品。哪個 Bedrock 功能讓 agent 能通過呼叫外部 API 採取行動？

A. Bedrock Knowledge Bases
B. Bedrock Agents 搭配 action groups
C. Bedrock Guardrails
D. Bedrock Model Evaluation

Answer: B

Hint: agent 需要決定使用哪個工具並執行 API 呼叫的能力。

Explanation: Bedrock Agents 使用 action groups 定義 agent 可以呼叫的 API 和 Lambda 函數。agent 根據使用者的請求自主決定採取哪個行動、生成 API 參數、呼叫 Lambda 函數並返回結果——實現多步驟任務完成。

Why others wrong: Knowledge Bases 提供 RAG 檢索，不是動作執行；Guardrails 過濾內容，不執行動作；Model Evaluation 衡量效能，不是執行時行為。

Trap: 混淆 Knowledge Bases 和 Agents——Knowledge Bases 檢索資訊，Agents 採取行動。agent 可以使用 Knowledge Base 作為其工具之一。

Mnemonic: Agent = 代表使用者行動，Action groups = 它使用的工具

## Q75
Type: single
Difficulty: 1
Tags: model-development, sagemaker-studio
Concepts: development-environment
Domain: Domain 2 — ML Model Development
DomainNumber: 2

資料科學家需要一個互動式開發環境來原型化 ML 模型、視覺化資料並快速迭代。哪個 SageMaker 功能提供此功能？

A. SageMaker Training Jobs
B. SageMaker Studio Notebooks
C. SageMaker Batch Transform
D. SageMaker Processing Jobs

Answer: B

Hint: Jupyter notebooks 是 ML 原型開發的標準互動式環境。

Explanation: SageMaker Studio 提供託管的 Jupyter notebooks，預裝 ML 框架，直接存取 SageMaker 功能和持久儲存。資料科學家可以撰寫程式碼、視覺化資料、互動式實驗，然後再將工作正式化為訓練任務和管線。

Why others wrong: Training Jobs 用於生產訓練，不是互動式開發；Batch Transform 用於批次推論；Processing Jobs 執行非互動式腳本。

Trap: 直接跳到 Training Jobs——先用 notebooks 探索和原型開發，再移到 Training Jobs 用於生產。

Mnemonic: Studio = 你的 ML 原型工作室

## Q76
Type: single
Difficulty: 3
Tags: model-development, learning-rate
Concepts: learning-rate-scheduling
Domain: Domain 2 — ML Model Development
DomainNumber: 2

深度學習模型的訓練損失振盪而非收斂。團隊懷疑學習率在訓練後期太高。哪種技術在維持快速初期收斂的同時解決此問題？

A. 整個訓練使用固定的低學習率
B. 餘弦退火學習率排程，從高開始逐漸降低
C. 當損失振盪時增加學習率
D. 當振盪開始時加倍批次大小

Answer: B

Hint: 開始快以獲得快速初始進展，然後放慢以精確收斂。

Explanation: 餘弦退火從較高的學習率開始以獲得快速初始收斂，然後沿餘弦曲線平滑降低。這允許在模型遠離最優時進行大梯度步長，在後期進行較小步長以精確收斂——消除了超調引起的振盪。

Why others wrong: 固定低學習率整體收斂慢；增加學習率惡化振盪；加倍批次大小減少梯度雜訊但不解決學習率問題。

Trap: 使用固定學習率——它要麼太高（振盪）要麼太低（收斂慢）。排程兩者兼顧。

Mnemonic: 餘弦退火 = 平滑滑下坡，快速開始 → 溫柔著陸

## Q77
Type: multi
Difficulty: 2
Tags: model-development, evaluation, regression
Concepts: regression-metrics
Domain: Domain 2 — ML Model Development
DomainNumber: 2

以下哪兩個指標最適合評估預測房價的迴歸模型？（選擇兩個。）

A. F1 分數
B. 均方根誤差 (RMSE)
C. R 平方（決定係數）
D. AUC-ROC

Answer: B, C

Hint: 你需要衡量預測誤差大小和解釋方差的迴歸特定指標。

Explanation: RMSE 以與目標相同的單位（美元）衡量預測誤差的平均幅度，使其具有可解釋性。R 平方表示模型解釋房價方差的比例（0 到 1 的尺度）。兩者結合提供迴歸模型品質的互補視角。

Why others wrong: F1 分數用於分類（精確率/召回率平衡）；AUC-ROC 用於二元分類排名品質。

Trap: 對迴歸使用分類指標——F1 和 AUC-ROC 衡量的東西與 RMSE 和 R² 不同。

Mnemonic: 迴歸 = RMSE（偏離多少）+ R²（解釋多少）

## Q78
Type: single
Difficulty: 2
Tags: model-development, sagemaker-debugger
Concepts: training-debugging
Domain: Domain 2 — ML Model Development
DomainNumber: 2

訓練期間，深度學習模型的梯度變得極小，導致權重停止更新。哪個 SageMaker Debugger 規則會偵測到這個問題？

A. LossNotDecreasing
B. VanishingGradient
C. Overfit
D. ClassImbalance

Answer: B

Hint: 當梯度趨近零時，有一個特定命名的規則偵測這種病態狀況。

Explanation: SageMaker Debugger 的 VanishingGradient 規則在訓練期間監控梯度幅度，當它們低於閾值時觸發警報。這使得能早期偵測梯度消失，梯度消失會導致訓練停滯，因為權重更新變得微不足道。

Why others wrong: LossNotDecreasing 偵測平台期但不偵測梯度原因；Overfit 偵測訓練-驗證差距；ClassImbalance 檢查資料分布，不是訓練動態。

Trap: 使用 LossNotDecreasing——它告訴你訓練停滯了但不告訴你為什麼。VanishingGradient 識別根本原因。

Mnemonic: 梯度消失？VanishingGradient 規則抓到它

## Q79
Type: single
Difficulty: 2
Tags: model-development, bedrock, evaluation
Concepts: fm-evaluation
Domain: Domain 2 — ML Model Development
DomainNumber: 2

團隊需要比較 Amazon Bedrock 上三個基礎模型用於摘要任務的效果。他們有 200 個人工標註的參考摘要。哪個 Bedrock 功能能進行系統化的模型比較？

A. Bedrock Playground 手動測試
B. Bedrock Model Evaluation 搭配自動指標和人工評估工作流程
C. 用幾個提示測試每個模型並主觀判斷
D. Bedrock Guardrails 內容過濾

Answer: B

Hint: 系統化比較需要使用自動指標和人工判斷跨模型的標準化評估。

Explanation: Bedrock Model Evaluation 使用自動指標（ROUGE、BERTScore）和人工評估工作流程跨多個模型執行標準化評估。有了 200 個參考摘要，它為每個模型產生可比較的分數，實現資料驅動的模型選擇。

Why others wrong: Playground 用於臨時測試，不是系統比較；主觀判斷有偏見且不可重現；Guardrails 過濾內容，不評估品質。

Trap: 用幾個範例手動在 Playground 測試——它受提示選擇偏差影響，不產生統計上有意義的比較。

Mnemonic: Model Evaluation = 科學的模型比較，不是憑感覺

## Q80
Type: single
Difficulty: 1
Tags: model-development, frameworks
Concepts: ml-frameworks
Domain: Domain 2 — ML Model Development
DomainNumber: 2

資料科學家想在 SageMaker 上使用 PyTorch 訓練自訂神經網路。哪種方法允許他們使用現有的 PyTorch 訓練腳本？

A. 使用 SageMaker 的內建演算法重寫程式碼
B. 使用 SageMaker PyTorch estimator 搭配他們的訓練腳本
C. 在 EC2 實例上手動安裝 PyTorch
D. 先將 PyTorch 模型轉換為 TensorFlow

Answer: B

Hint: SageMaker 為流行的 ML 函式庫提供預建框架容器。

Explanation: SageMaker PyTorch estimator 提供預建的 Docker 容器，已安裝 PyTorch。資料科學家只需對現有訓練腳本做最小修改（添加超參數和資料路徑的引數解析），SageMaker 就管理基礎設施、訓練執行和產出物儲存。

Why others wrong: 重寫為內建演算法是不必要的；EC2 需要手動基礎設施管理；轉換框架不必要且有損。

Trap: 認為必須使用 SageMaker 的內建演算法——你可以帶入任何 PyTorch、TensorFlow 或自訂框架程式碼。

Mnemonic: BYOS = 帶你自己的腳本到 SageMaker

## Q81
Type: single
Difficulty: 3
Tags: model-development, mixed-precision
Concepts: mixed-precision-training
Domain: Domain 2 — ML Model Development
DomainNumber: 2

團隊想在不改變模型架構的情況下減少大型 transformer 模型的訓練時間。哪種技術使用較低的數值精度進行大多數運算，同時維持模型品質？

A. 使用 INT8 的量化感知訓練
B. 混合精度訓練，前向/反向傳播使用 FP16，主權重使用 FP32
C. 永久將所有權重轉換為 FP8
D. 縮小詞彙表大小

Answer: B

Hint: 使用更快、更小的數字進行計算，同時保留高精度副本以確保準確性。

Explanation: 混合精度訓練以 FP16（半精度）執行前向和反向傳播，在具有 tensor core 的現代 GPU 上速度快 2 倍。FP32 主權重用於梯度累積以防止數值下溢。損失縮放防止 FP16 中的梯度下溢。這通常帶來 1.5-3 倍的加速且精度損失可忽略。

Why others wrong: INT8 量化用於推論，不是訓練；永久 FP8 轉換可能降低訓練品質；詞彙縮減改變了模型。

Trap: 不使用主權重就把所有東西轉為 FP16——FP16 累積可能導致數值問題。關鍵是 FP16 計算 + FP32 主權重。

Mnemonic: 混合精度 = FP16 速度 + FP32 安全網

## Q82
Type: single
Difficulty: 2
Tags: model-development, bias, fairness
Concepts: model-fairness
Domain: Domain 2 — ML Model Development
DomainNumber: 2

訓練招聘推薦模型後，團隊發現即使資格相似，某些人口群體的申請者預測分數也較低。哪個 SageMaker 工具衡量並報告這種訓練後偏差？

A. SageMaker Data Wrangler
B. SageMaker Clarify 訓練後偏差報告
C. SageMaker Debugger
D. SageMaker Model Monitor

Answer: B

Hint: 衡量模型預測中的偏差（不僅是資料）需要訓練後分析工具。

Explanation: SageMaker Clarify 生成訓練後偏差報告，衡量不同保護屬性的差異影響 (DI)、條件人口差異 (CDD) 和處理平等性等指標。它比較具有相似資格的不同群組的模型預測，量化模型是否公平對待各群組。

Why others wrong: Data Wrangler 準備資料；Debugger 監控訓練收斂；Model Monitor 追蹤生產漂移，不是公平性指標。

Trap: 只使用訓練前偏差偵測——平衡的資料集仍然可以產生有偏差的模型，如果演算法放大了細微的相關性。

Mnemonic: Clarify 訓練前 = 資料偏差，Clarify 訓練後 = 模型偏差

## Q83
Type: single
Difficulty: 2
Tags: model-development, sagemaker-pipelines
Concepts: ml-pipeline
Domain: Domain 2 — ML Model Development
DomainNumber: 2

團隊想自動化從資料處理到模型訓練、評估和條件註冊的整個 ML 工作流程。哪個 SageMaker 功能提供託管的 ML CI/CD 管線？

A. SageMaker Experiments
B. SageMaker Pipelines
C. AWS CodePipeline
D. AWS Step Functions

Answer: B

Hint: 想想哪個服務專為 SageMaker 內的 ML 工作流程編排而建。

Explanation: SageMaker Pipelines 提供專門的 ML CI/CD 管線，包含處理、訓練、調校、評估和條件模型註冊的步驟。它原生整合 SageMaker 功能，追蹤譜系，並支援條件邏輯（例如，只註冊達到準確率閾值的模型）。

Why others wrong: Experiments 追蹤個別試驗，不是自動化管線；CodePipeline 用於軟體 CI/CD，不是 ML；Step Functions 可以編排 ML 但缺乏 SageMaker 原生整合。

Trap: 使用 AWS CodePipeline 做 ML——它適用於軟體發布但不理解模型評估和條件註冊等 ML 特定概念。

Mnemonic: SageMaker Pipelines = 為 ML 而非軟體建立的 CI/CD

## Q84
Type: single
Difficulty: 3
Tags: model-development, rlhf
Concepts: reinforcement-learning-from-human-feedback
Domain: Domain 2 — ML Model Development
DomainNumber: 2

公司微調了基礎模型，但發現它有時生成有用但不安全的回應。他們想讓模型同時具有幫助性和無害性。在監督式微調之後應套用哪種技術？

A. 用更多範例繼續監督式微調
B. 套用 RLHF（人類回饋強化學習），使用在人類偏好資料上訓練的獎勵模型
C. 添加輸出過濾作為後處理步驟
D. 降低模型的 temperature 參數

Answer: B

Hint: 將模型行為對齊到人類價值觀需要基於回饋的最佳化。

Explanation: RLHF 從人類對模型輸出的比較（哪個回應更好/更安全）訓練獎勵模型，然後使用強化學習（PPO）針對這個獎勵信號最佳化語言模型。這從根本上調整模型的生成策略，產生人類評為既有幫助又無害的輸出。

Why others wrong: 更多 SFT 不教模型區分有幫助和有害；輸出過濾是被動的，不是預防性的；降低 temperature 減少多樣性但不改變模型認為什麼是好的。

Trap: 依賴輸出過濾——它捕捉一些有害內容但不阻止模型生成它。

Mnemonic: RLHF = 人類教模型什麼是「好」

## Q85
Type: single
Difficulty: 2
Tags: model-development, feature-importance
Concepts: model-explainability
Domain: Domain 2 — ML Model Development
DomainNumber: 2

受監管的金融機構需要向客戶解釋個別貸款決策。哪種可解釋性方法提供每次預測的特徵歸因？

A. 來自模型的全局特徵重要性
B. SageMaker Clarify 計算的 SHAP 值
C. 混淆矩陣分析
D. 學習曲線圖

Answer: B

Hint: 個別預測需要局部解釋，不只是全局特徵排名。

Explanation: SHAP 值將每個個別預測分解為每個特徵的貢獻，精確顯示每個特徵如何將特定申請者的預測推向核准或拒絕。SageMaker Clarify 為已部署的模型大規模計算 SHAP 值。

Why others wrong: 全局重要性顯示整體特徵排名但不顯示每次預測的分解；混淆矩陣總結聚合效能；學習曲線顯示訓練進度。

Trap: 使用全局特徵重要性做個別解釋——「收入通常很重要」不能解釋為什麼這個申請者被拒絕。

Mnemonic: SHAP = 顯示每個特徵如何塑造每個預測

## Q86
Type: single
Difficulty: 1
Tags: model-development, anomaly-detection
Concepts: anomaly-detection
Domain: Domain 2 — ML Model Development
DomainNumber: 2

製造公司想偵測感測器資料中可能表示設備故障的異常模式。他們沒有故障的標記範例。哪個 SageMaker 內建演算法為此而設計？

A. XGBoost
B. Random Cut Forest
C. K-Means
D. Linear Learner

Answer: B

Hint: 在沒有標記範例的情況下偵測異常需要非監督式異常偵測演算法。

Explanation: Random Cut Forest (RCF) 是 SageMaker 的內建非監督式異常偵測演算法。它根據資料點對隨機切割森林結構的影響程度指派異常分數——不尋常的點需要較少的切割來隔離，獲得較高的分數。

Why others wrong: XGBoost 需要標記資料；K-Means 聚類資料但不給異常評分；Linear Learner 是監督式的。

Trap: 使用 K-Means 並將小叢集稱為「異常」——K-Means 不提供異常分數，且可能將異常與正常資料分在一組。

Mnemonic: Random Cut Forest = 隨機切割找出奇怪的

## Q87
Type: single
Difficulty: 2
Tags: model-development, nlp, comprehend
Concepts: nlp-services
Domain: Domain 2 — ML Model Development
DomainNumber: 2

團隊需要從客服工單中擷取命名實體（人物、組織、日期）。他們想要不需要 ML 專業知識或模型訓練的現成解決方案。哪個 AWS 服務提供此功能？

A. Amazon Textract
B. Amazon Comprehend
C. Amazon Transcribe
D. SageMaker BlazingText

Answer: B

Hint: 想想哪個服務提供預訓練的 NLP 能力，包括實體識別。

Explanation: Amazon Comprehend 是完全託管的 NLP 服務，提供用於命名實體識別、情感分析、關鍵詞擷取和語言偵測的預訓練模型——全部可透過 API 存取，不需要 ML 專業知識。

Why others wrong: Textract 從影像/文件擷取文字；Transcribe 將語音轉為文字；BlazingText 需要訓練你自己的模型。

Trap: 使用 SageMaker 建立自訂 NER 模型，而 Comprehend 已經提供了——在自建之前總是先檢查是否有託管 AI 服務存在。

Mnemonic: Comprehend = 理解文字（實體、情感、關鍵詞）

## Q88
Type: single
Difficulty: 3
Tags: model-development, knowledge-distillation
Concepts: model-distillation
Domain: Domain 2 — ML Model Development
DomainNumber: 2

團隊有一個用於文字分類的大型、準確的 BERT 模型，但需要一個更小的模型用於有嚴格延遲要求的邊緣部署。哪種技術建立一個近似大型模型行為的緊湊模型？

A. 從大型模型中隨機修剪權重直到它符合
B. 知識蒸餾，較小的學生模型從大型教師模型的輸出分布學習
C. 直接在相同資料上從零開始訓練小模型
D. 套用後訓練量化到 INT4

Answer: B

Hint: 小模型可以從大模型的「軟」輸出中比從原始標籤學習得更有效。

Explanation: 知識蒸餾訓練一個小的「學生」模型來模仿大型「教師」模型的輸出機率分布（軟標籤），而非僅僅硬標籤。軟標籤包含更豐富的資訊（類間相似性），使學生在相同架構下能達到比從零訓練更高的準確率。

Why others wrong: 隨機修剪不可預測地降低效能；從零訓練不利用教師的知識；INT4 量化可能對文字分類造成不可接受的準確率損失。

Trap: 從零訓練小模型——它使用相同的資料但錯過了教師在軟機率中編碼的學到的類間關係。

Mnemonic: 蒸餾 = 將教師的智慧蒸餾到更小的學生

## Q89
Type: single
Difficulty: 2
Tags: model-development, spot-instances
Concepts: cost-optimization-training
Domain: Domain 2 — ML Model Development
DomainNumber: 2

團隊想為一個需要 8 小時的訓練任務減少 60-90% 的 SageMaker 訓練成本。他們可以容忍偶爾的中斷。哪個功能能實現這一點？

A. SageMaker 的預留實例
B. SageMaker 託管 Spot 訓練搭配檢查點
C. 將實例大小縮到最小可用
D. 只在離峰時段執行訓練

Answer: B

Hint: Spot 實例便宜很多但可能被中斷——檢查點確保不會損失工作。

Explanation: SageMaker 託管 Spot 訓練使用高達 90% 折扣的 EC2 spot 實例。檢查點定期將訓練進度儲存到 S3，因此如果 spot 實例被中斷，訓練從最後一個檢查點恢復而非從頭開始。

Why others wrong: SageMaker 不提供像 EC2 那樣的預留實例定價；較小的實例延長訓練時間但不帶來成比例的成本節省；離峰定價不適用於 SageMaker。

Trap: 使用 spot 實例但不用檢查點——8 小時任務執行 7 小時後的中斷意味著損失所有進度並從頭開始。

Mnemonic: Spot + 檢查點 = 省錢又保存進度

## Q90
Type: single
Difficulty: 2
Tags: model-development, genai, prompt-engineering
Concepts: prompt-engineering
Domain: Domain 2 — ML Model Development
DomainNumber: 2

Bedrock 上的基礎模型為資料擷取任務生成不一致的 JSON 輸出。有時輸出包含額外文字或格式錯誤的 JSON。哪種提示工程技術最能可靠地確保結構化輸出？

A. 在提示中加上「請輸出有效的 JSON」
B. 提供幾個預期 JSON 格式的少量示例，搭配清晰的分隔符和格式指令
C. 增加模型的 temperature 以獲得更有創意的回應
D. 使用生成較少文字的較小模型

Answer: B

Hint: 用多個範例向模型展示你想要什麼，比告訴它更有效。

Explanation: 少量示例提示搭配具體的 JSON 範例展示了預期的確切輸出格式。清晰的分隔符（如「只在 ```json 和 ``` 之間輸出 JSON」）和多個多樣的範例調節模型一致地產生所需格式，大幅減少格式錯誤的輸出。

Why others wrong: 像「輸出有效 JSON」這樣模糊的指令不可靠；更高的 temperature 增加隨機性，惡化一致性；較小的模型可能缺乏能力。

Trap: 只依賴指令——「輸出 JSON」是模糊的。展示 3-4 個確切格式的範例遠比指令更可靠。

Mnemonic: 展示，不要只是告訴——範例比指令更能確保格式合規

## Q91
Type: single
Difficulty: 1
Tags: model-development, model-registry
Concepts: model-versioning
Domain: Domain 2 — ML Model Development
DomainNumber: 2

訓練多個模型版本後，團隊需要管理模型產出物、追蹤版本，並控制哪個版本被核准用於生產。哪個 SageMaker 功能提供此功能？

A. SageMaker Experiments
B. SageMaker Model Registry
C. Amazon ECR
D. S3 版本控制

Answer: B

Hint: 想想一個集中的目錄，用於管理具有核准工作流程的模型版本。

Explanation: SageMaker Model Registry 提供集中式目錄，用於管理具有中繼資料、核准狀態（待審/核准/拒絕）和部署追蹤的模型版本。它支援 CI/CD 整合，允許自動將核准的模型推進到生產端點。

Why others wrong: Experiments 追蹤試驗，不是模型版本；ECR 儲存容器映像；S3 版本控制追蹤檔案，不是 ML 模型中繼資料。

Trap: 使用 S3 版本控制做模型管理——它儲存模型產出物但缺乏核准工作流程、中繼資料和部署追蹤。

Mnemonic: Model Registry = 帶核准閘門的模型版本控制

## Q92
Type: single
Difficulty: 2
Tags: model-development, genai, guardrails
Concepts: content-filtering
Domain: Domain 2 — ML Model Development
DomainNumber: 2

Bedrock 上面向客戶的 GenAI 應用程式必須阻擋有毒內容、防止回應中出現個人可識別資訊，並拒絕離題的提示。哪個 Bedrock 功能提供這些安全控制？

A. Bedrock Agents
B. Bedrock Guardrails
C. Bedrock Knowledge Bases
D. Bedrock Custom Models

Answer: B

Hint: 想想哪個功能作為模型互動周圍的可配置安全層。

Explanation: Bedrock Guardrails 提供可配置的內容過濾器，用於毒性偵測、PII 偵測和遮蔽、拒絕話題阻擋，以及詞彙/短語過濾器。Guardrails 評估使用者輸入和模型輸出，在所有模型互動中一致地套用政策，無需修改模型本身。

Why others wrong: Agents 執行動作，不過濾內容；Knowledge Bases 提供檢索，不是安全性；Custom Models 改變模型，不是圍繞它的安全層。

Trap: 建立自訂內容過濾程式碼——Guardrails 提供託管、可配置的解決方案，實作和維護更快。

Mnemonic: Guardrails = GenAI 周圍的安全護欄，就像公路護欄

## Q93
Type: single
Difficulty: 3
Tags: model-development, curriculum-learning
Concepts: training-strategies
Domain: Domain 2 — ML Model Development
DomainNumber: 2

訓練複雜多類別分類模型的團隊注意到訓練收斂慢，且模型在早期就難以處理困難範例。哪種訓練策略逐步增加範例難度？

A. 每個 epoch 隨機洗牌訓練資料
B. 課程學習——先呈現簡單範例，然後逐步引入更難的
C. 只在最難的範例上訓練以集中學習
D. 在訓練集中複製困難的範例

Answer: B

Hint: 就像人類教育，在進階主題之前先學基礎，能幫助模型更有效地學習。

Explanation: 課程學習將訓練範例從簡單到困難排序，允許模型先學習基本模式再處理挑戰性案例。這在訓練早期提供更穩定的最佳化景觀，導致更快的收斂和通常更好的最終效能。

Why others wrong: 隨機洗牌不利用難度排序；只在困難範例上訓練會在早期壓垮模型；複製範例會對特定案例過擬合。

Trap: 專門集中在困難範例——模型需要先學習基本模式，就像學生在進階主題前先學基礎。

Mnemonic: 課程 = 先簡單後困難，就像上學

## Q94
Type: single
Difficulty: 2
Tags: model-development, sagemaker-canvas
Concepts: no-code-ml
Domain: Domain 2 — ML Model Development
DomainNumber: 2

業務分析師在 SageMaker Canvas 中建立了一個模型並達到了可接受的準確率。現在想將它部署為可透過 API 存取的即時預測。Canvas 提供哪個選項？

A. Canvas 模型無法部署——必須在 SageMaker Studio 中重建
B. Canvas 可以一鍵將模型部署到 SageMaker 即時端點
C. Canvas 只支援批次預測，不支援即時
D. 模型必須匯出到第三方平台進行部署

Answer: B

Hint: Canvas 提供端到端 ML 能力，包括部署。

Explanation: SageMaker Canvas 允許一鍵將訓練好的模型部署到 SageMaker 即時端點，使預測可透過 API 使用，無需任何編碼。業務分析師可以在 Canvas 視覺介面中完全建立、評估和部署模型。

Why others wrong: Canvas 確實支援部署；它支援批次和即時；不需要匯出到第三方平台。

Trap: 認為 Canvas 只用於原型——它支援生產部署，讓業務使用者能從資料到部署模型全程無程式碼。

Mnemonic: Canvas = 完整 ML 生命週期，從資料到部署，無程式碼

## Q95
Type: single
Difficulty: 2
Tags: model-development, llm, rag
Concepts: rag-architecture
Domain: Domain 2 — ML Model Development
DomainNumber: 2

公司希望 Bedrock 驅動的聊天機器人使用每週更新的內部公司文件回答問題。應該微調模型還是使用 RAG？

A. 每週用最新文件微調模型
B. 使用 RAG 搭配連接到 S3 中文件的 Bedrock Knowledge Base
C. 在系統提示中提供所有文件
D. 從零開始在公司資料上訓練自訂模型

Answer: B

Hint: 當知識經常變化時，模型的回應應反映當前資訊而不需要重新訓練。

Explanation: 搭配 Bedrock Knowledge Bases 的 RAG 在查詢時檢索相關文件，確保回應始終反映最新內容。Knowledge Base 在 S3 中的文件更新時自動重新索引，消除模型重新訓練的需求。微調昂貴、緩慢，且會產生過時的知識。

Why others wrong: 每週微調昂貴且模型始終落後；系統提示有 token 限制，無法包含所有文件；從零訓練不必要且昂貴。

Trap: 用微調做知識更新——微調改變模型如何回應（風格、格式），RAG 改變它知道什麼（事實、資料）。對於最新資訊，使用 RAG。

Mnemonic: 知識改變？RAG。風格改變？微調。

## Q96
Type: single
Difficulty: 3
Tags: model-development, multi-task
Concepts: multi-task-learning
Domain: Domain 2 — ML Model Development
DomainNumber: 2

團隊有三個相關的 NLP 任務：情感分類、意圖偵測和命名實體識別。他們想要一個處理所有三個任務的單一模型。應使用哪種方法？

A. 訓練三個獨立模型，每個任務一個
B. 多任務學習，使用共享編碼器和任務特定的輸出頭
C. 在情感上訓練一個模型，然後為意圖微調，再為 NER 微調
D. 將所有標籤合併為一個分類任務

Answer: B

Hint: 相關任務可以通過共同的骨幹網路共享學到的表示，同時有專門的輸出。

Explanation: 多任務學習使用共享的 transformer 編碼器學習所有三個任務的通用語言表示。任務特定的頭（情感的分類層、NER 的序列標註等）產生適合任務的輸出。共享表示通過隱式資料增強和正規化改善每個任務的效能。

Why others wrong: 獨立模型錯過共享知識；循序微調導致前面任務的災難性遺忘；將標籤合併為一個任務損失任務特定的結構。

Trap: 循序微調（情感 → 意圖 → NER）——模型在學習新任務時會遺忘較早的任務（災難性遺忘）。

Mnemonic: 共享骨幹 + 分離的頭 = 一個模型，多種才能

## Q97
Type: single
Difficulty: 2
Tags: model-development, agentic, tool-use
Concepts: agentic-ai
Domain: Domain 2 — ML Model Development
DomainNumber: 2

設計一個處理需要多個步驟的客戶請求（檢查庫存、計算價格、套用折扣、確認訂單）的 Bedrock Agent 時，什麼決定 API 呼叫的順序？

A. 開發者硬編碼 API 呼叫的確切順序
B. 基礎模型的推理能力根據對話決定採取哪些行動以及按什麼順序
C. 動作總是按照它們在 action group 定義中出現的順序執行
D. 一個獨立的規則引擎編排順序

Answer: B

Hint: Agentic AI 意味著模型推理該採取什麼行動。

Explanation: Bedrock Agents 使用基礎模型的推理能力動態決定呼叫哪些 action group API 以及按什麼順序。模型分析使用者的請求，識別所需步驟，按邏輯順序執行，並處理中間結果——全部不需要硬編碼的工作流程。

Why others wrong: 硬編碼順序無法適應各種請求；action group 順序預設是字母順序，不是執行順序；不需要獨立的規則引擎。

Trap: 硬編碼動作順序——這對簡單流程有效但當客戶有需要不同動作組合的各種請求時就失敗了。

Mnemonic: Agent = 關於動作的自主推理，不是腳本化步驟

## Q98
Type: single
Difficulty: 1
Tags: model-development, recommendation
Concepts: recommendation-systems
Domain: Domain 2 — ML Model Development
DomainNumber: 2

串流服務想根據觀看歷史和使用者-項目互動向使用者推薦電影。哪個 AWS 服務提供託管的推薦能力？

A. Amazon Rekognition
B. Amazon Personalize
C. Amazon Comprehend
D. SageMaker Factorization Machines

Answer: B

Hint: 想想哪個服務專為個人化推薦而設計。

Explanation: Amazon Personalize 是完全託管的服務，使用使用者互動資料建立自訂推薦模型。它處理特徵工程、模型選擇、訓練和即時推薦服務——全部不需要 ML 專業知識。它支援「看了 X 的客戶也看了 Y」等使用案例。

Why others wrong: Rekognition 用於影像/影片分析；Comprehend 用於 NLP；Factorization Machines 需要自己建立和管理管線。

Trap: 在 Amazon Personalize 存在時使用 SageMaker 建立自訂推薦系統——總是先檢查託管服務。

Mnemonic: Personalize = 個人化推薦，由 AWS 個人託管

## Q99
Type: single
Difficulty: 2
Tags: model-development, genai, continued-pretraining
Concepts: continued-pretraining
Domain: Domain 2 — ML Model Development
DomainNumber: 2

醫療領域的公司想調整基礎模型以理解模型一般訓練資料中不存在的專業醫學術語和關係。他們有 50 GB 的醫學教科書和期刊。哪種方法是合適的？

A. 用提示-回應配對進行監督式微調
B. 使用 Bedrock 的自訂模型訓練在醫學語料庫上進行持續預訓練
C. 將所有醫學文本加入 RAG 知識庫
D. 在系統提示中建立醫學術語詞彙表

Answer: B

Hint: 教模型新的領域知識需要接觸大量領域特定的文本。

Explanation: 持續預訓練以非監督方式讓基礎模型接觸領域特定文本，更新其內部表示以理解醫學術語、關係和概念。50 GB 的醫學文本足以顯著改善領域理解，之後可以接著對特定任務進行監督式微調。

Why others wrong: SFT 調整行為，不是領域知識；RAG 檢索事實但不教模型新概念；系統提示有 token 限制且不更新模型。

Trap: 混淆微調和持續預訓練——微調教模型如何回應，持續預訓練教它新知識。

Mnemonic: 新知識 = 持續預訓練。新行為 = 微調。

## Q100
Type: single
Difficulty: 3
Tags: model-development, inference-optimization
Concepts: model-compilation
Domain: Domain 2 — ML Model Development
DomainNumber: 2

在將 PyTorch 模型部署到 SageMaker 端點之前，團隊想在不改變模型架構的情況下最佳化推論延遲。哪個 SageMaker 功能為特定硬體最佳化編譯模型？

A. SageMaker Debugger
B. SageMaker Neo 編譯
C. SageMaker Clarify
D. SageMaker Model Monitor

Answer: B

Hint: 將模型轉換為針對特定硬體最佳化的格式可加速推論。

Explanation: SageMaker Neo 將訓練好的模型編譯為針對特定目標硬體（CPU、GPU、Inf2）最佳化的機器碼。編譯套用硬體特定的最佳化如運算子融合、記憶體佈局最佳化和核心調校，在不改變模型行為的情況下將推論延遲降低高達 2 倍。

Why others wrong: Debugger 監控訓練；Clarify 衡量偏差和可解釋性；Model Monitor 追蹤生產效能。

Trap: 部署未最佳化的模型——Neo 編譯是一個簡單的步驟，可以免費將推論延遲減半。

Mnemonic: Neo = 部署的新最佳化執行

## Q101
Type: single
Difficulty: 2
Tags: model-development, genai, chain-of-thought
Concepts: reasoning-techniques
Domain: Domain 2 — ML Model Development
DomainNumber: 2

Bedrock 上的基礎模型在多步推理任務（如數學應用題）上產生不正確的答案。哪種提示工程技術能改善推理準確性？

A. 減少提示長度以簡化任務
B. 添加「讓我們一步一步思考」以觸發思維鏈推理
C. 增加模型的最大 token 輸出限制
D. 使用不同的模型系列

Answer: B

Hint: 鼓勵模型展示其工作過程可改善推理任務的準確性。

Explanation: 思維鏈 (CoT) 提示指導模型將複雜問題分解為中間推理步驟。通過口述其思考過程，模型能捕捉邏輯錯誤並在各步驟之間保持上下文，顯著改善數學、邏輯和多步推理任務的準確性。

Why others wrong: 較短的提示不改善推理；更多輸出 token 不改善推理過程；不同的模型系列在沒有 CoT 的情況下面臨同樣的挑戰。

Trap: 增加最大 token 以為模型需要更多空間——問題是推理品質，不是輸出長度。CoT 改善推理，與 token 限制無關。

Mnemonic: 思維鏈 = 推理步驟的鏈條，不是直接跳到答案

## Q102
Type: single
Difficulty: 2
Tags: model-development, ab-testing
Concepts: model-comparison
Domain: Domain 2 — ML Model Development
DomainNumber: 2

團隊部署了新的模型版本，想使用即時流量與當前生產模型進行比較。哪個 SageMaker 部署功能能實現這一點？

A. 藍綠部署
B. 搭配 production variants 的 SageMaker 端點（A/B 測試）
C. 影子部署
D. 金絲雀部署

Answer: B

Hint: 你需要兩個模型版本同時服務即時流量，並可配置流量分割。

Explanation: SageMaker 端點支援多個 production variants，每個執行不同的模型版本，具有可配置的流量權重。這通過將一定比例的即時流量路由到新模型，其餘流向當前模型來實現 A/B 測試，允許統計比較真實世界的效能。

Why others wrong: 藍綠部署一次切換所有流量，不是漸進比較；影子部署複製流量但不從兩者提供回應；金絲雀路由最小流量用於安全檢查，不是平衡比較。

Trap: 混淆 A/B 測試和金絲雀部署——金絲雀用最小流量檢查錯誤，A/B 測試用平衡流量比較效能。

Mnemonic: Production variants = A 獲得一些流量，B 獲得其餘，比較結果

## Q103
Type: single
Difficulty: 1
Tags: model-development, pretrained
Concepts: pretrained-models
Domain: Domain 2 — ML Model Development
DomainNumber: 2

團隊想快速部署預訓練的文字摘要模型而不需訓練任何東西。哪個 SageMaker 功能提供預訓練基礎模型的一鍵部署？

A. SageMaker Autopilot
B. SageMaker JumpStart
C. SageMaker Processing
D. SageMaker Ground Truth

Answer: B

Hint: 想想哪個功能提供準備就緒可部署的預訓練模型目錄。

Explanation: SageMaker JumpStart 提供精心策劃的預訓練基礎模型和 ML 模型目錄，可一鍵部署到 SageMaker 端點。它包含文字、視覺和表格任務的模型，以及用於自訂的微調 notebook。

Why others wrong: Autopilot 從資料訓練自訂模型；Processing 執行資料準備腳本；Ground Truth 標記資料。

Trap: 在 JumpStart 已有預訓練模型時從零開始訓練——在自建之前總是先檢查 JumpStart。

Mnemonic: JumpStart = 跳過訓練，立即開始部署

## Q104
Type: single
Difficulty: 3
Tags: model-development, contrastive-learning
Concepts: representation-learning
Domain: Domain 2 — ML Model Development
DomainNumber: 2

建立視覺相似性搜尋系統的團隊需要訓練一個嵌入模型，使相似產品在嵌入空間中距離近，不相似產品距離遠。哪種訓練方法最合適？

A. 使用 softmax 輸出的標準分類
B. 使用三元組損失的對比學習（錨點-正例-負例配對）
C. 自動編碼器重建損失
D. 均方誤差迴歸

Answer: B

Hint: 學習反映相似性的嵌入需要一個明確建模相對距離的損失函數。

Explanation: 使用三元組損失的對比學習最佳化嵌入，使錨點比負例（不相似產品）更接近正例（相似產品），並有一定的邊距。這直接最佳化嵌入空間用於相似性搜尋，產生餘弦相似度與視覺相似性相關的嵌入。

Why others wrong: 分類學習決策邊界，不是嵌入距離；自動編碼器重建不針對相似性最佳化；MSE 迴歸預測值，不是距離。

Trap: 使用分類並取倒數第二層作為嵌入——它可行但未針對相似性搜尋最佳化。對比學習直接最佳化度量空間。

Mnemonic: 三元組損失 = 拉近相似的，推開不同的

## Q105
Type: single
Difficulty: 2
Tags: model-development, inference, serverless
Concepts: serverless-inference
Domain: Domain 2 — ML Model Development
DomainNumber: 2

模型接收零星的流量——有時每小時 100 個請求，有時幾個小時為零。團隊想在維持合理回應時間的同時最小化成本。哪個 SageMaker 推論選項最好？

A. 搭配自動擴展的即時端點
B. SageMaker 無伺服器推論
C. Batch Transform
D. 非同步推論

Answer: B

Hint: 零星流量加上閒置期間意味著你在為始終開啟的端點支付未使用基礎設施的費用。

Explanation: SageMaker 無伺服器推論在請求到達時自動佈建運算，閒置時縮放至零，消除非活動期間的成本。它高效處理可變流量模式，只對實際推論時間收費，而非保持端點持續運行。

Why others wrong: 即時端點即使閒置也產生成本；Batch Transform 用於大量處理，不是互動式請求；非同步推論用於長時間運行的任務，不是標準請求。

Trap: 使用最小實例數的即時端點——即使有自動擴展，你也要 24/7 支付至少一個實例。無伺服器可以縮放至零。

Mnemonic: 零星流量？無伺服器 = 只在服務時付費

## Q106
Type: single
Difficulty: 2
Tags: model-development, genai, bedrock-playground
Concepts: model-testing
Domain: Domain 2 — ML Model Development
DomainNumber: 2

團隊正在評估 Bedrock 上不同基礎模型用於面向客戶的聊天機器人。他們想在決定之前測試各種提示並比較回應品質、延遲和成本。哪個 Bedrock 功能支援這種迭代評估？

A. Bedrock Model Evaluation Jobs
B. Bedrock Playground（聊天、文字、影像模式）
C. Bedrock Provisioned Throughput
D. Bedrock Custom Model Import

Answer: B

Hint: 在正式評估之前與不同模型和提示進行互動測試。

Explanation: Bedrock Playground 提供互動式介面，可即時跨不同基礎模型測試提示。團隊可以比較回應品質、調整模型參數（temperature、top-p），並觀察延遲——全部不需要寫程式碼或部署端點。它是初始模型探索和提示迭代的理想工具。

Why others wrong: Model Evaluation Jobs 用於系統化基準測試，不是互動測試；Provisioned Throughput 用於生產容量；Custom Model Import 用於部署自訂模型。

Trap: 在 Playground 探索之前就跳到正式 Model Evaluation——先用互動測試縮小模型候選範圍，再執行正式評估。

Mnemonic: Playground = 在決定前先玩玩模型

## Q107
Type: single
Difficulty: 1
Tags: deployment, sagemaker-endpoint
Concepts: model-deployment
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

團隊有一個儲存在 S3 的訓練好的模型產出物，需要透過 API 提供即時預測。哪個 SageMaker 功能建立託管推論端點？

A. SageMaker Training Job
B. SageMaker Real-Time Inference Endpoint
C. SageMaker Processing Job
D. SageMaker Ground Truth

Answer: B

Hint: 想想哪個功能託管模型並透過 HTTPS 提供預測。

Explanation: SageMaker 即時推論端點在託管的 HTTPS 端點後面部署模型。SageMaker 處理基礎設施、負載平衡和自動擴展，端點接受預測請求並以低延遲返回結果。

Why others wrong: Training Jobs 訓練模型；Processing Jobs 執行資料準備；Ground Truth 標記資料。

Trap: 嘗試從 Training Job 提供預測——訓練和服務是分開的階段。將訓練好的模型部署到端點進行推論。

Mnemonic: Endpoint = 預測離開模型的出口點

## Q108
Type: single
Difficulty: 2
Tags: deployment, auto-scaling
Concepts: endpoint-scaling
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

SageMaker 端點處理可變流量：營業時間每秒 500 個請求，夜間每秒 10 個。延遲 SLA 為 200ms。哪種自動擴展配置最合適？

A. 基於尖峰流量的固定實例數
B. 基於 InvocationsPerInstance 指標的目標追蹤擴展策略
C. 基於 CPU 使用率的步進擴展
D. 使用手動實例計數的排程擴展

Answer: B

Hint: 追蹤與每個實例推論工作負載最直接相關的指標。

Explanation: 對 InvocationsPerInstance 進行目標追蹤會維持每個實例的目標呼叫數量，在流量增加時自動增加實例，減少時移除。這直接反映推論工作負載，並在端點擴展時保持延遲一致。

Why others wrong: 固定實例在低流量時浪費金錢；CPU 使用率不直接反映推論工作負載；排程擴展假設可預測的模式，無法處理意外尖峰。

Trap: 基於 CPU 使用率擴展——ML 推論可能是 GPU 限制的，使 CPU 成為差的擴展指標。InvocationsPerInstance 直接衡量工作負載。

Mnemonic: 對呼叫數的目標追蹤 = 感知流量的自動擴展

## Q109
Type: single
Difficulty: 2
Tags: deployment, blue-green
Concepts: safe-deployment
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

團隊需要在零停機時間的情況下更新生產模型，並且如果新模型表現不佳能立即回滾。哪種部署策略提供此功能？

A. 現有端點的原地更新
B. 搭配 SageMaker 端點部署護欄的藍綠部署
C. 刪除端點並建立新的
D. 以不同名稱部署新端點

Answer: B

Hint: 兩個環境（藍 = 當前，綠 = 新）允許在版本之間即時切換。

Explanation: SageMaker 的藍綠部署在現有模型旁邊建立新的模型變體。流量逐步轉移到新變體，如果 CloudWatch 警報偵測到劣化則自動回滾。這提供零停機時間的更新和即時回滾能力。

Why others wrong: 原地更新在模型載入期間造成停機；刪除和重建造成長時間停機；不同端點名稱需要客戶端配置變更。

Trap: 原地端點更新——它們在載入新模型時會有一段端點不可用的時間。藍綠完全避免這一點。

Mnemonic: 藍綠 = 兩個版本同時存在，無停機切換

## Q110
Type: single
Difficulty: 3
Tags: deployment, multi-model
Concepts: multi-model-endpoints
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

SaaS 公司為 1,000 個租戶提供個人化模型。每個租戶有一個小模型（<100 MB）。部署 1,000 個獨立端點在成本上不可行。哪個 SageMaker 功能在共享基礎設施上託管所有模型？

A. Multi-variant 端點
B. Multi-model 端點 (MME)
C. 無伺服器推論
D. 每個租戶的 Batch Transform

Answer: B

Hint: 多個模型共享相同的端點基礎設施，按需載入。

Explanation: SageMaker Multi-Model 端點在共享基礎設施上託管數千個模型。模型按需載入記憶體並快取。當特定租戶的預測請求到達時，對應的模型被載入（如果尚未快取）並提供預測，使用最近最少使用策略管理記憶體。

Why others wrong: Multi-variant 用於幾個變體的 A/B 測試，不是數千個；每個模型的無伺服器推論仍然是每個租戶的；Batch Transform 不是即時的。

Trap: 混淆 multi-variant（2-3 個模型的 A/B 測試）和 multi-model（託管 1,000+ 個模型）——它們服務不同目的。

Mnemonic: Multi-model = 多模型，一個端點，按需載入

## Q111
Type: single
Difficulty: 2
Tags: deployment, containerization
Concepts: custom-containers
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

團隊需要部署一個使用 SageMaker 預建容器中不可用的自訂推論函式庫的模型。應該如何進行？

A. 在推論腳本中使用 pip 在執行時安裝函式庫
B. 建立包含函式庫的自訂 Docker 容器，推送到 ECR，用於部署
C. 只能使用 SageMaker 的預建容器——不支援自訂函式庫
D. 在 EC2 上部署模型

Answer: B

Hint: SageMaker 支援用於訓練和推論的自訂 Docker 容器。

Explanation: SageMaker 允許推送到 Amazon ECR 的自訂 Docker 容器。容器包含所有必要的依賴、模型服務邏輯和任何自訂函式庫。SageMaker 在推論端點上啟動此容器，在維持託管基礎設施優勢的同時提供完全的靈活性。

Why others wrong: 執行時 pip 安裝不可靠且增加啟動延遲；SageMaker 完全支援自訂容器；EC2 損失 SageMaker 的託管優勢。

Trap: 嘗試在執行時 pip install——它增加冷啟動延遲，可能因缺少系統函式庫而失敗，且不可重現。將依賴烘焙到容器中。

Mnemonic: 自訂函式庫？自訂容器 → ECR → SageMaker 部署它

## Q112
Type: single
Difficulty: 2
Tags: deployment, batch-transform
Concepts: batch-inference
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

公司需要對儲存在 S3 的 1,000 萬筆記錄生成預測。預測需要在 4 小時內完成但不需要即時回應。哪個 SageMaker 功能最合適？

A. 即時端點逐筆處理記錄
B. SageMaker Batch Transform
C. SageMaker 非同步推論
D. Lambda 函數在迴圈中呼叫 SageMaker 端點

Answer: B

Hint: 對儲存資料的批量推論，不需要持久端點。

Explanation: SageMaker Batch Transform 佈建臨時基礎設施，處理來自 S3 的整個資料集，將預測寫回 S3，然後終止。它自動處理跨實例的資料分割、平行化和錯誤恢復——非常適合大規模的一次性或定期批次預測。

Why others wrong: 即時端點處理 1,000 萬筆記錄既慢又貴；非同步推論用於個別長時間運行的請求；Lambda 迴圈在規模上脆弱且昂貴。

Trap: 使用即時端點做批次預測——你持續支付端點費用且必須管理 1,000 萬個別呼叫的編排。

Mnemonic: Batch Transform = 批量轉換資料，無持久端點

## Q113
Type: single
Difficulty: 3
Tags: deployment, inference-pipeline
Concepts: inference-pipeline
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

推論請求需要三個循序步驟：特徵預處理（scikit-learn）、預測（XGBoost）和後處理（自訂 Python）。這種多步驟推論應如何在 SageMaker 上部署？

A. 部署三個獨立端點並用 Lambda 串連
B. 使用 SageMaker Inference Pipeline 循序串連多個容器
C. 將所有邏輯合併到單一自訂容器
D. 在呼叫模型端點前在 Processing Job 中執行預處理

Answer: B

Hint: SageMaker 支援在單一端點中串連多個容器用於多步驟推論。

Explanation: SageMaker Inference Pipelines 在單一端點內循序串連最多 15 個容器。每個容器執行一個步驟（預處理、模型推論、後處理）並將結果傳遞給下一個。這保持多步驟邏輯有組織、可獨立更新，並從單一端點提供服務。

Why others wrong: 多個端點增加延遲和操作複雜性；單一容器混合關注點使更新更難；Processing Jobs 對即時推論增加批次延遲。

Trap: 將所有東西合併到一個容器——它可行但違反關注點分離。如果預處理器改變，你必須重建整個容器。Pipeline 容器可獨立更新。

Mnemonic: Inference Pipeline = 容器的組裝線，一個端點

## Q114
Type: single
Difficulty: 2
Tags: deployment, edge
Concepts: edge-deployment
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

製造公司需要在沒有網路連線的工廠現場設備上執行 ML 推論。模型必須在本地以低於 10ms 的延遲進行預測。哪種方法能實現這一點？

A. 通過網際網路呼叫 SageMaker 端點
B. 用 SageMaker Neo 編譯模型並使用 SageMaker Edge Manager 部署到邊緣設備
C. 每晚執行批次預測並在設備上快取結果
D. 在工廠的本地伺服器上部署模型

Answer: B

Hint: 邊緣部署需要為特定設備硬體編譯模型並遠端管理它。

Explanation: SageMaker Neo 為目標邊緣硬體（ARM、x86、GPU）編譯模型，Edge Manager 封裝、部署、監控和管理邊緣設備上的模型。推論在設備上本地運行，不需要網路連線，滿足低於 10ms 的延遲要求。

Why others wrong: 雲端端點需要網路且增加網路延遲；批次預測不支援即時工廠操作；本地伺服器可行但缺乏車隊管理。

Trap: 沒有 Neo 編譯就部署到本地伺服器——模型可以運行但未針對設備硬體最佳化，可能無法達到延遲目標。

Mnemonic: Neo 編譯 + Edge Manager 部署 = 邊緣 ML

## Q115
Type: single
Difficulty: 1
Tags: deployment, model-artifacts
Concepts: model-packaging
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

在 SageMaker 中訓練模型後，訓練好的模型產出物儲存在哪裡？

A. SageMaker notebook 的本地儲存中
B. 在訓練任務配置中指定的 S3 儲存桶中
C. 在 Amazon DynamoDB 中
D. 僅在 SageMaker Model Registry 中

Answer: B

Hint: SageMaker 將所有訓練輸出持久化到持久的物件儲存。

Explanation: SageMaker 訓練任務在完成時將模型產出物（model.tar.gz）儲存到指定的 S3 位置。這個 S3 URI 在建立用於部署的 SageMaker 模型時使用。產出物包含序列化的模型、任何自訂推論程式碼和配置檔案。

Why others wrong: Notebook 本地儲存是暫時的；DynamoDB 儲存結構化資料，不是模型檔案；Model Registry 引用 S3 產出物但不儲存它們。

Trap: 假設模型產出物在 Model Registry 中——Registry 儲存中繼資料和 S3 URI，不是實際的模型檔案。

Mnemonic: 訓練輸出 → S3，永遠。S3 URI → 其他所有地方。

## Q116
Type: single
Difficulty: 2
Tags: deployment, ci-cd
Concepts: mlops-pipeline
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

團隊想在模型在 Model Registry 中被核准時自動部署新版本到生產。哪個 AWS 服務編排這種部署自動化？

A. SageMaker Experiments
B. AWS CodePipeline 由 EventBridge 的 Model Registry 核准事件觸發
C. 工程師手動部署
D. SageMaker Autopilot

Answer: B

Hint: 模型核准事件可以觸發自動化部署管線。

Explanation: 當模型在 SageMaker Model Registry 中被核准時，會發出 EventBridge 事件。這個事件觸發 CodePipeline，自動化部署步驟：建立 SageMaker 模型、更新端點配置，以及執行帶金絲雀分析的藍綠部署。

Why others wrong: Experiments 追蹤試驗，不是部署；手動部署不自動化；Autopilot 訓練模型，不部署。

Trap: 核准後手動部署——它可行但引入延遲和人為錯誤。事件驅動自動化確保一致、即時的部署。

Mnemonic: Registry 核准 → EventBridge → CodePipeline → 部署到生產

## Q117
Type: single
Difficulty: 3
Tags: deployment, shadow
Concepts: shadow-deployment
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

在將任何即時流量路由到新模型版本之前，團隊想在不影響使用者體驗的情況下用生產流量驗證它。哪種部署策略實現此目標？

A. 1% 流量的金絲雀部署
B. 影子部署，鏡像生產流量到新模型但不返回其回應
C. 50/50 分割的 A/B 測試
D. 部署到具有合成資料的暫存環境

Answer: B

Hint: 你想用真實流量模式測試新模型，但對生產使用者完全沒有風險。

Explanation: 影子部署平行鏡像所有生產流量到新模型，但只將當前生產模型的回應返回給使用者。影子模型的預測被記錄用於離線比較，能在對使用者體驗完全沒有風險的情況下根據真實世界流量模式進行驗證。

Why others wrong: 金絲雀部署確實向某些使用者提供新模型的回應；A/B 測試讓一半使用者暴露於新模型；合成資料的暫存不反映真實流量模式。

Trap: 用金絲雀部署做零風險驗證——即使 1% 的流量也向真實使用者提供新模型的回應。影子部署對使用者零影響。

Mnemonic: 影子 = 模型在暗處，看到一切，不服務任何東西

## Q118
Type: single
Difficulty: 2
Tags: deployment, step-functions
Concepts: workflow-orchestration
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

ML 工作流程需要：執行資料驗證 → 如果資料有效，觸發訓練 → 評估模型 → 如果準確率 > 0.90，部署；否則發送通知。哪個服務編排這種條件式、多步驟工作流程？

A. SageMaker Pipelines
B. AWS Step Functions
C. Amazon EventBridge
D. AWS Lambda 串連

Answer: A

Hint: 這是經典的 ML 工作流程，包含訓練、評估和條件部署——哪個 SageMaker 功能原生處理此需求？

Explanation: SageMaker Pipelines 專為 ML 工作流程而建，具有處理、訓練、評估和條件邏輯的原生步驟。它支援 ConditionStep 來檢查指標（準確率 > 0.90）並分支到部署或通知，全部搭配整合的譜系追蹤和視覺化。

Why others wrong: Step Functions 可行但缺乏 SageMaker 原生整合；EventBridge 觸發事件但不編排多步驟流程；Lambda 串連沒有適當編排很脆弱。

Trap: 對 ML 特定工作流程使用 Step Functions——雖然可行，但 SageMaker Pipelines 提供與訓練、評估和模型註冊步驟更緊密的整合。

Mnemonic: SageMaker Pipelines = ML 原生工作流程，從資料到部署

## Q119
Type: single
Difficulty: 2
Tags: deployment, async
Concepts: async-inference
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

模型從文字描述生成 30 秒影片。每個請求的推論時間為 3-5 分鐘，遠超 API gateway 的逾時限制。哪個 SageMaker 推論選項處理長時間運行的預測？

A. 延長逾時的即時端點
B. SageMaker 非同步推論
C. 15 分鐘逾時的 Lambda 函數
D. Batch Transform

Answer: B

Hint: 當推論需要幾分鐘時，客戶端不能等待——提交請求並輪詢結果。

Explanation: SageMaker 非同步推論接受請求、排入佇列並非同步處理。結果儲存在 S3 中，處理完成時通過 SNS 通知客戶端。它支援長達 60 分鐘的推論時間，佇列為空時可縮放至零。

Why others wrong: 即時端點預設逾時 60 秒；Lambda 有 15 分鐘逾時但不是為 ML 推論設計的；Batch Transform 用於大量處理，不是個別互動式請求。

Trap: 使用即時推論做長時間運行的任務——API gateway 逾時和客戶端連線限制使同步呼叫對多分鐘推論失敗。

Mnemonic: 非同步 = 現在問，稍後答，不用擔心逾時

## Q120
Type: single
Difficulty: 1
Tags: deployment, endpoint-config
Concepts: endpoint-configuration
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

建立 SageMaker 端點時，端點配置指定什麼？

A. 建立模型時使用的訓練超參數
B. 要部署的模型、實例類型、實例數量和變體權重
C. 訓練資料的 S3 位置
D. 訓練任務的 IAM 角色

Answer: B

Hint: 端點配置定義模型如何被託管——在什麼硬體上和多少實例。

Explanation: 端點配置指定要部署哪個 SageMaker 模型、每個變體的實例類型和數量、A/B 測試的流量分配權重，以及其他服務參數。它是端點如何佈建的藍圖。

Why others wrong: 訓練超參數是訓練任務的一部分；訓練資料位置是訓練任務的輸入；訓練的 IAM 角色與推論角色是分開的。

Trap: 混淆訓練配置和端點配置——它們是分開的。訓練定義如何建立模型；端點配置定義如何服務它。

Mnemonic: 端點配置 = 什麼模型 + 什麼硬體 + 多少實例

## Q121
Type: single
Difficulty: 3
Tags: deployment, inference-accelerators
Concepts: hardware-optimization
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

團隊部署大型語言模型進行推論，想在最小化每個 token 成本的同時最大化吞吐量。哪種 AWS 晶片專為高吞吐量、高性價比的 ML 推論而建？

A. NVIDIA A100 GPU
B. AWS Inferentia2（Inf2 實例）
C. Intel Xeon CPU
D. AWS Graviton 處理器

Answer: B

Hint: AWS 設計了專門針對 ML 推論工作負載最佳化的自訂晶片。

Explanation: AWS Inferentia2 是為高吞吐量、低成本推論設計的自訂 ML 晶片。對於支援的模型，Inf2 實例提供高達 4 倍的吞吐量和高達 10 倍的較低每次推論成本。AWS Neuron SDK 編譯模型以在 Inferentia 上運行。

Why others wrong: A100 GPU 強大但每次推論更貴；Xeon CPU 對大型模型太慢；Graviton 是通用 ARM 處理器，不是 ML 最佳化的。

Trap: 所有推論都預設用 NVIDIA GPU——Inferentia2 對已用 Neuron 編譯的生產推論工作負載更具成本效益。

Mnemonic: Inferentia = 推論專用晶片，更低成本

## Q122
Type: single
Difficulty: 2
Tags: deployment, model-compression
Concepts: model-optimization
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

在將模型部署到資源受限環境之前，團隊需要在維持可接受準確率的同時將模型大小減少 4 倍。哪種技術能實現這一點？

A. 訓練更大的模型以提升準確率
B. 後訓練量化從 FP32 到 INT8
C. 為模型增加更多層
D. 在推論期間增加批次大小

Answer: B

Hint: 降低數值精度可按比例減少模型大小。

Explanation: 後訓練量化將 FP32 權重（32 位元）轉換為 INT8（8 位元），將模型大小減少約 4 倍。對於許多模型，準確率損失很小（通常 <1%）。SageMaker Neo 可以在編譯期間自動套用此量化。

Why others wrong: 更大的模型增加大小；更多層增加大小；批次大小不影響模型大小。

Trap: 擔心顯著的準確率損失——現代量化技術對大多數模型類型都能出色地保留準確率。

Mnemonic: FP32 → INT8 = 4 倍更小，幾乎相同的準確率

## Q123
Type: single
Difficulty: 2
Tags: deployment, sagemaker-pipelines
Concepts: pipeline-steps
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

在 SageMaker Pipeline 中，只有當評估步驟顯示 RMSE < 5.0 時才應註冊模型。哪個管線組件實現這種條件邏輯？

A. ProcessingStep
B. 搭配 JsonGet 條件的 ConditionStep
C. 帶自訂回調的 TrainingStep
D. 帶 if/else 邏輯的 LambdaStep

Answer: B

Hint: SageMaker Pipelines 有一種原生步驟類型，用於基於指標值的條件分支。

Explanation: ConditionStep 評估管線參數或步驟輸出上的條件（如來自 JsonGet 表達式的評估指標）。如果 RMSE < 5.0，管線繼續到 RegisterModel 步驟；否則分支到通知或重試步驟。

Why others wrong: ProcessingStep 執行資料處理，不是條件；TrainingStep 訓練模型，不評估條件；LambdaStep 可以實現邏輯但 ConditionStep 是原生的推薦方法。

Trap: 在 Lambda 函數中建立條件邏輯——SageMaker Pipelines 特別為此目的提供 ConditionStep，搭配內建的視覺化和追蹤。

Mnemonic: ConditionStep = ML 管線中的 if-else

## Q124
Type: single
Difficulty: 3
Tags: deployment, model-serving, latency
Concepts: inference-latency-optimization
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

已部署模型的 P99 延遲超過 100ms SLA。分析顯示瓶頸是自動擴展期間新增實例時的模型載入時間。哪種方法減少這種冷啟動延遲？

A. 增加最大實例數
B. 配置最小實例數並使用 SageMaker 的預擴展啟用模型預熱
C. 減少模型大小
D. 切換到批次推論

Answer: B

Hint: 冷啟動發生在新實例需要載入模型時——防止這需要實例提前準備好。

Explanation: 設定最小實例數確保實例始終預熱，模型已載入。結合在流量尖峰前增加實例的預擴展策略（基於預測模式），這消除了冷啟動延遲尖峰。模型預先載入在備用實例上。

Why others wrong: 更多最大實例沒有幫助——問題是啟動時間，不是容量；減少模型大小有幫助但可能不夠；批次推論完全改變了使用案例。

Trap: 只依賴自動擴展處理流量尖峰——擴展觸發冷啟動。預佈建的最小實例始終是預熱的。

Mnemonic: 預熱的實例 = 無冷啟動，在尖峰前預擴展

## Q125
Type: single
Difficulty: 2
Tags: deployment, data-capture
Concepts: inference-data-capture
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

團隊需要記錄生產端點的所有預測請求和回應，用於監控和合規目的。哪個 SageMaker 功能能實現這一點？

A. CloudWatch Logs
B. SageMaker Data Capture
C. AWS CloudTrail
D. S3 伺服器存取日誌

Answer: B

Hint: 捕捉推論資料（輸入和輸出）需要專為 ML 端點設計的功能。

Explanation: SageMaker Data Capture 將可配置比例的推論請求和回應記錄到 S3。這些捕捉的資料可被 Model Monitor 用於漂移偵測、Clarify 用於持續偏差監控，以及合規團隊用於稽核追蹤。

Why others wrong: CloudWatch Logs 捕捉應用程式日誌，不是結構化推論資料；CloudTrail 記錄 API 呼叫，不是預測內容；S3 日誌追蹤檔案存取，不是模型推論。

Trap: 使用 CloudWatch 做推論記錄——它捕捉日誌但不捕捉模型監控和偏差分析所需的結構化輸入/輸出資料。

Mnemonic: Data Capture = 捕捉模型的進出

## Q126
Type: single
Difficulty: 2
Tags: deployment, genai, provisioned
Concepts: provisioned-throughput
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

Bedrock 上的生產 GenAI 應用程式在尖峰時段需要保證低延遲和一致的吞吐量。隨選 API 有時在流量尖峰時被限流。團隊應該怎麼做？

A. 用指數退避重試失敗的請求
B. 為 Bedrock 模型購買 Provisioned Throughput
C. 改為在 SageMaker 上部署模型
D. 減少提示長度以加速回應

Answer: B

Hint: 預留容量保證一致的效能，不受整體 Bedrock 平台負載影響。

Explanation: Bedrock Provisioned Throughput 預留專用的模型處理容量，保證一致的延遲和吞吐量。不同於隨選模式（共享容量），provisioned throughput 不受其他客戶使用量影響，消除尖峰時段的限流。

Why others wrong: 重試增加延遲；SageMaker 部署增加操作負擔；較短的提示降低品質，不是限流。

Trap: 依賴重試應對生產 SLA——重試處理暫時性失敗但不解決尖峰負載時的系統性限流。

Mnemonic: Provisioned Throughput = Bedrock 高速公路上你的預留車道

## Q127
Type: single
Difficulty: 1
Tags: deployment, iam
Concepts: endpoint-security
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

誰可以呼叫 SageMaker 即時推論端點？

A. 任何有端點 URL 的人
B. 只有具有 sagemaker:InvokeEndpoint 權限的 IAM 主體
C. 只有建立端點的使用者
D. 只有 SageMaker Studio 使用者

Answer: B

Hint: 像所有 AWS 服務一樣，存取由 IAM 政策控制。

Explanation: SageMaker 端點需要 IAM 驗證。只有具有特定端點資源的 sagemaker:InvokeEndpoint 權限的 IAM 使用者、角色或服務可以呼叫它。這通過標準 IAM 政策強制執行，並可通過資源型條件進一步限制。

Why others wrong: 沒有 IAM 憑證，URL 本身不夠；建立者除了其 IAM 權限外沒有特殊權限；任何具有正確權限的 IAM 主體都可以呼叫，不只是 Studio 使用者。

Trap: 公開端點 URL——不像公共 API，SageMaker 端點始終需要 IAM 驗證。如需公開存取，在前面放 API Gateway。

Mnemonic: 沒有 IAM 權限 = 沒有預測給你

## Q128
Type: single
Difficulty: 3
Tags: deployment, multi-container
Concepts: serial-inference
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

詐欺偵測系統需要循序執行兩個模型：特徵擷取模型和分類模型。特徵擷取器的輸出是分類器的輸入。兩個模型使用不同的框架。應如何部署？

A. 兩個獨立端點搭配應用程式級編排
B. SageMaker Serial Inference Pipeline 搭配兩個容器
C. 將兩個模型合併為單一框架
D. 將特徵擷取器作為 Lambda 函數運行，分類器在端點上

Answer: B

Hint: 使用不同框架的循序模型執行映射到容器管線。

Explanation: SageMaker Serial Inference Pipeline 在單一端點內循序串連容器。特徵擷取容器產生的輸出自動傳遞給分類容器。每個容器可使用不同框架（如 TensorFlow 做特徵擷取、XGBoost 做分類），管線作為單一端點管理。

Why others wrong: 獨立端點在呼叫之間增加網路延遲；合併框架可能不可行；Lambda 增加冷啟動延遲且有執行時限制。

Trap: 兩個端點的應用程式級編排——它增加了網路往返延遲和操作複雜性。管線自動處理資料傳遞。

Mnemonic: Serial Pipeline = 串聯的容器，一個端點，步驟間零網路跳轉

## Q129
Type: single
Difficulty: 2
Tags: deployment, vpc
Concepts: network-security
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

公司的安全政策要求 SageMaker 訓練任務和端點在沒有公開網際網路存取的私有網路內運作。哪種配置實現此目標？

A. 使用預設的 SageMaker 網路配置
B. 在 VPC 中部署 SageMaker 資源，使用私有子網和 S3、SageMaker、ECR 的 VPC 端點
C. 使用安全群組阻擋入站流量
D. 在所有 S3 儲存桶上啟用伺服器端加密

Answer: B

Hint: 保持流量私密需要 VPC 放置和到 AWS 服務的私有連線。

Explanation: 在 VPC 模式下執行 SageMaker 將訓練和推論資源放在私有子網中。S3、SageMaker API、SageMaker Runtime 和 ECR 的 VPC 端點允許這些資源存取 AWS 服務而不需穿越公開網際網路。不需要 NAT 閘道或網際網路閘道。

Why others wrong: 預設網路使用公開網際網路；安全群組控制流量但不阻止網際網路路由；加密保護資料內容，不是網路路徑。

Trap: 將 SageMaker 放在 VPC 中但沒有 VPC 端點——資源失去對 S3 和其他服務的存取，導致失敗。VPC 放置和 VPC 端點都是必要的。

Mnemonic: VPC + VPC 端點 = 完全私有的 ML，無公開網際網路

## Q130
Type: single
Difficulty: 2
Tags: deployment, canary
Concepts: canary-deployment
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

團隊想部署新模型版本，但先只路由 5% 流量到它 30 分鐘以檢查錯誤，然後再全面推出。哪個 SageMaker 部署功能支援此需求？

A. Multi-model 端點
B. 搭配金絲雀流量切換的部署護欄
C. Batch Transform
D. 無伺服器推論

Answer: B

Hint: 小比例的流量測試新版本，而大部分流量留在已驗證的版本上。

Explanation: SageMaker 部署護欄支援金絲雀流量切換，其中小比例（如 5%）的流量路由到新模型一段指定的烘焙期。CloudWatch 警報監控錯誤率和延遲，如果偵測到問題自動回滾，或者如果金絲雀期間順利通過則將所有流量切換到新版本。

Why others wrong: Multi-model 端點為不同租戶託管不同模型；Batch Transform 不是即時的；無伺服器推論不控制流量分割。

Trap: 混淆金絲雀和 A/B 測試——金絲雀是安全機制（5% 流量，錯誤時自動回滾），A/B 是比較機制（平衡流量，統計分析）。

Mnemonic: 金絲雀 = 煤礦中的金絲雀，小測試偵測危險

## Q131
Type: single
Difficulty: 2
Tags: deployment, ecr
Concepts: container-management
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

團隊為模型建立了自訂推論容器。應將此容器映像儲存在哪裡以用於 SageMaker 部署？

A. Docker Hub
B. Amazon Elastic Container Registry (ECR)
C. S3 作為 tar.gz 檔案
D. GitHub Container Registry

Answer: B

Hint: SageMaker 需要來自它可以原生驗證的登錄檔的容器映像。

Explanation: Amazon ECR 是 SageMaker 推薦的容器登錄檔。它提供原生的 IAM 驗證、與 SageMaker 部署工作流程的無縫整合，並確保在 AWS 網路內低延遲的映像拉取。SageMaker 訓練和推論原生從 ECR 拉取映像。

Why others wrong: Docker Hub 需要額外的驗證配置且有速率限制；S3 不提供容器映像服務；GitHub Container Registry 未原生整合。

Trap: 使用 Docker Hub——它可行但需要驗證設定、有拉取速率限制，且從外部網路拉取增加延遲。

Mnemonic: ECR = SageMaker 停放容器的車庫

## Q132
Type: multi
Difficulty: 2
Tags: deployment, monitoring, endpoint-metrics
Concepts: endpoint-monitoring
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

以下哪兩個 CloudWatch 指標對監控 SageMaker 即時端點的營運健康最重要？（選擇兩個。）

A. ModelLatency
B. S3 儲存桶大小
C. Invocation5XXErrors
D. 訓練任務持續時間

Answer: A, C

Hint: 你需要顯示端點是否快速且成功回應的指標。

Explanation: ModelLatency 衡量模型處理每個請求的時間，直接反映使用者體驗。Invocation5XXErrors 計算伺服器端故障，表示模型或基礎設施問題。兩者結合提供端點健康的全面視角——效能和可靠性。

Why others wrong: S3 儲存桶大小是儲存指標；訓練任務持續時間是訓練指標，不是推論指標。

Trap: 只監控延遲而不監控錯誤率——端點可能有很好的延遲但在部分請求上靜默失敗。

Mnemonic: 健康端點 = 快速（延遲）+ 可靠（無 5XX 錯誤）

## Q133
Type: single
Difficulty: 3
Tags: deployment, genai, agent-deployment
Concepts: agent-architecture
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

Bedrock Agent 需要查詢資料庫、呼叫外部定價 API 和撰寫電子郵件回應——每個作為獨立動作。部署架構應如何設計？

A. 建立一個處理所有三個動作的大型 Lambda 函數
B. 定義三個獨立的 action groups，每個有自己的 Lambda 函數處理一個特定動作
C. 在 agent 的指令提示中硬編碼動作順序
D. 部署三個獨立的 Bedrock Agents，每個動作一個

Answer: B

Hint: 關注點分離——每個 action group 處理一個能力。

Explanation: 每個 action group 封裝單一能力（資料庫查詢、定價 API、電子郵件），具有自己的 Lambda 函數、OpenAPI schema 和錯誤處理。Bedrock Agent 的基礎模型根據使用者請求決定呼叫哪些 action groups 及其順序，維持清晰的關注點分離。

Why others wrong: 一個 Lambda 處理所有東西建立了單體式、難維護的函數；硬編碼順序不適應變化；獨立 agent 無法在單一對話中協作。

Trap: 單體式 Lambda——任何一個動作的變更需要重新部署所有三個，錯誤處理變得複雜。

Mnemonic: 一個 action group = 一個能力 = 一個 Lambda，agent 編排它們

## Q134
Type: single
Difficulty: 2
Tags: deployment, tagging
Concepts: cost-allocation
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

公司執行多個 ML 專案，每個有獨立的訓練任務和端點。他們需要按專案追蹤成本。哪種方法能實現此成本分配？

A. 為每個專案建立獨立的 AWS 帳戶
B. 為所有 SageMaker 資源標記專案特定的成本分配標籤
C. 監控 CloudWatch 帳單指標
D. 每個專案使用 SageMaker Studio 網域

Answer: B

Hint: 標籤能跨 AWS 服務分組和過濾成本。

Explanation: AWS 成本分配標籤允許組織按專案、團隊或環境分類 SageMaker 資源（訓練任務、端點、處理任務）。啟用的成本分配標籤出現在 Cost Explorer 和帳單報告中，實現按專案精確追蹤成本。

Why others wrong: 獨立帳戶增加組織開銷；CloudWatch 帳單是帳戶級的，不是專案級的；Studio 網域不固有地分離成本。

Trap: 為成本分離建立獨立帳戶——這是最極端的方法。標籤提供成本可見性而無需多帳戶管理的開銷。

Mnemonic: 標記所有東西 = 追蹤所有東西，逐專案

## Q135
Type: single
Difficulty: 2
Tags: deployment, rollback
Concepts: deployment-safety
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

部署新模型版本後，團隊在最初 10 分鐘內觀察到預測錯誤增加 20%。之前的模型版本運作正常。最快的恢復方式是什麼？

A. 重新訓練模型並重新部署
B. 使用之前的端點配置將端點回滾到之前的模型版本
C. 除錯新模型找到問題
D. 將端點離線並調查

Answer: B

Hint: 當你有一個正常運作的之前版本時，切換回去是最快的恢復。

Explanation: SageMaker 保留之前的端點配置。通過用先前的配置更新端點來回滾到之前的版本，在幾分鐘內用已知良好的模型恢復服務。調查和修復可以在不影響使用者的情況下進行。

Why others wrong: 重新訓練需要數小時；除錯需要時間而錯誤繼續；將端點離線拒絕所有使用者服務。

Trap: 在恢復服務前嘗試修復問題——先回滾止血，然後再調查根本原因。

Mnemonic: 先回滾，再找原因——立即恢復服務

## Q136
Type: single
Difficulty: 3
Tags: deployment, sagemaker-pipelines, parameterized
Concepts: pipeline-parameterization
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

團隊想讓同一個 SageMaker Pipeline 在不修改管線程式碼的情況下適用於不同的資料集、模型類型和實例大小。哪個功能能實現這種靈活性？

A. 為每種配置建立獨立管線
B. 使用在執行時接受值的 Pipeline Parameters
C. 在管線定義中硬編碼所有配置
D. 在管線程式碼中使用環境變數

Answer: B

Hint: 參數通過在每次執行時接受不同值使管線可重用。

Explanation: SageMaker Pipeline Parameters 定義在執行時（而非定義時）設定的變數（資料位置、實例類型、超參數）。這允許一個管線定義處理多種場景——不同的資料集、模型配置或資源分配——只需在執行時傳遞不同的參數值。

Why others wrong: 獨立管線複製程式碼和邏輯；硬編碼需要每次變化都修改程式碼；環境變數在管線定義中未原生支援。

Trap: 建立多個幾乎相同的管線——參數化將一個管線變成多個配置而不需複製。

Mnemonic: Pipeline Parameters = 一個管線，多種配置

## Q137
Type: single
Difficulty: 2
Tags: deployment, monitoring, drift
Concepts: model-monitoring
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

SageMaker Model Monitor 如何偵測已部署端點中的資料漂移？

A. 定期重新訓練模型並比較準確率
B. 將傳入推論資料的統計分布與從訓練資料計算的基線進行比較
C. 檢查端點是否返回錯誤
D. 監控端點實例的 CPU 使用率

Answer: B

Hint: 漂移偵測將當前資料分布與模型訓練時的分布進行比較。

Explanation: Model Monitor 捕捉推論資料並計算統計（平均值、中位數、分布），與從訓練資料生成的基線進行比較。違規——特徵超出預期範圍、分布偏移、遺失值——觸發 CloudWatch 警報表示潛在漂移。

Why others wrong: 重新訓練衡量準確率劣化但不指出資料漂移；錯誤檢查監控基礎設施；CPU 監控追蹤運算，不是資料品質。

Trap: 檢查錯誤而非資料分布——模型可以在沒有錯誤的情況下提供回應，但其預測因資料漂移而劣化。

Mnemonic: Model Monitor = 比較現在和過去，統計看門狗

## Q138
Type: single
Difficulty: 2
Tags: deployment, sagemaker-projects
Concepts: mlops-templates
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

團隊想快速設定端到端 MLOps 基礎設施，包括 CI/CD、模型訓練和部署管線，遵循 AWS 最佳實踐。哪個 SageMaker 功能提供預建的 MLOps 範本？

A. SageMaker Experiments
B. SageMaker Projects 搭配 MLOps 範本
C. SageMaker Canvas
D. SageMaker Ground Truth

Answer: B

Hint: 想想哪個功能為完整 ML 生命週期提供現成的基礎設施範本。

Explanation: SageMaker Projects 提供預建的 MLOps 範本，建立 CodeCommit 儲存庫、CodeBuild 專案、CodePipeline 管線和 SageMaker Pipelines——全部按照 AWS 最佳實踐連接在一起。範本涵蓋「建立、訓練、部署」和「模型監控」等常見模式。

Why others wrong: Experiments 追蹤試驗；Canvas 是無程式碼 ML；Ground Truth 標記資料。

Trap: 從零建立 MLOps 基礎設施——SageMaker Projects 提供經測試的範本，顯著減少設定時間。

Mnemonic: SageMaker Projects = 盒裝 MLOps，只需添加你的資料和模型

## Q139
Type: single
Difficulty: 1
Tags: deployment, inference-recommender
Concepts: instance-optimization
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

團隊需要為部署模型選擇正確的實例類型，但不知道哪個能提供最佳的延遲-成本權衡。哪個 SageMaker 功能自動對不同實例類型進行基準測試？

A. SageMaker Debugger
B. SageMaker Inference Recommender
C. SageMaker Automatic Model Tuning
D. SageMaker Autopilot

Answer: B

Hint: 想想哪個工具跨多種實例類型測試你的模型以找到最佳部署配置。

Explanation: SageMaker Inference Recommender 對你的模型跨不同實例類型進行基準測試，衡量延遲、吞吐量和成本。它提供滿足效能要求的最低成本實例配置的排名清單。

Why others wrong: Debugger 監控訓練；Automatic Model Tuning 最佳化超參數；Autopilot 自動化模型建立。

Trap: 手動逐個測試實例類型——Inference Recommender 自動化這個基準測試過程。

Mnemonic: Inference Recommender = 推薦模型的最佳硬體

## Q140
Type: single
Difficulty: 2
Tags: deployment, genai, streaming
Concepts: streaming-inference
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

使用 Bedrock 的聊天機器人應用程式需要在模型生成回應時逐詞顯示，類似 ChatGPT 的打字效果。哪個 API 功能能實現這一點？

A. 同步 InvokeModel API
B. InvokeModelWithResponseStream API
C. 批次推論
D. 非同步 InvokeModel

Answer: B

Hint: 在生成時串流回應需要串流 API。

Explanation: Bedrock 的 InvokeModelWithResponseStream 在模型生成時返回回應片段的串流，使前端能逐步顯示部分回應。這改善了感知延遲——使用者看到回應即時建構而非等待完整回應。

Why others wrong: 同步 InvokeModel 等待完整回應；批次離線處理多個提示；非同步儲存結果供稍後檢索。

Trap: 對聊天機器人使用同步呼叫——使用者經歷完整生成時間作為空白等待。串流立即顯示進度。

Mnemonic: ResponseStream = 文字像溪流一樣流出，逐字

## Q141
Type: single
Difficulty: 3
Tags: deployment, a-b-testing, statistical
Concepts: ab-test-analysis
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

團隊在 SageMaker 端點上的兩個模型變體之間執行 A/B 測試。7 天後，變體 A 的轉換率為 4.2%（10,000 次曝光），變體 B 為 4.5%（10,000 次曝光）。產品經理問模型 B 是否明確更好。資料科學家應該推薦什麼？

A. 模型 B 更好因為 4.5% > 4.2%，立即部署
B. 在結論模型 B 更好之前，執行統計顯著性測試（例如比例的 chi-squared 或 z 檢定）
C. 無論結果如何，再執行恰好 30 天的測試
D. 取兩個模型的平均值並部署混合版本

Answer: B

Hint: 觀察到的比率中的小差異可能是由於隨機機會，而非真正的模型改善。

Explanation: 在 10,000 次曝光上的 0.3 個百分點差異可能具有也可能不具有統計顯著性。假設檢定計算觀察到的差異由機會產生的機率。如果沒有統計顯著性（p < 0.05），團隊無法自信地將差異歸因於模型 B 真正更好。

Why others wrong: 原始百分比比較忽略抽樣變異性；任意延長 30 天如果顯著性已明確（或永遠不可達）會浪費時間；混合模型不驗證改善。

Trap: 基於原始百分比宣佈贏家——小差異可能是雜訊。在做部署決策前總是測試統計顯著性。

Mnemonic: A/B 結果？在宣佈贏家前檢查 p 值

## Q142
Type: single
Difficulty: 1
Tags: monitoring, cloudwatch
Concepts: model-metrics
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

哪個 AWS 服務是 SageMaker 端點營運指標（如延遲、錯誤率和呼叫次數）的主要目的地？

A. Amazon S3
B. Amazon CloudWatch
C. AWS CloudTrail
D. Amazon Athena

Answer: B

Hint: 想想哪個服務收集和視覺化 AWS 資源的營運指標。

Explanation: CloudWatch 自動接收 SageMaker 端點指標，包括 ModelLatency、OverheadLatency、Invocations、InvocationErrors 和 GPU/CPU 使用率。團隊可以建立儀表板、設定警報，並根據這些指標觸發自動化動作。

Why others wrong: S3 儲存資料，不是指標；CloudTrail 記錄 API 呼叫，不是效能指標；Athena 查詢 S3 中的資料。

Trap: 在 S3 或 CloudTrail 中尋找指標——營運指標自動進入 CloudWatch，而資料捕捉（推論資料）進入 S3。

Mnemonic: CloudWatch = 看守你模型的生命徵象

## Q143
Type: single
Difficulty: 2
Tags: monitoring, model-monitor
Concepts: data-quality-monitoring
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

已部署模型的準確率在兩個月內劣化，但沒有進行任何程式碼或模型變更。最可能的原因是什麼？

A. 端點實例劣化了
B. 資料漂移——傳入資料的分布已從訓練資料分布偏移
C. S3 模型產出物損壞
D. CloudWatch 指標報告不正確

Answer: B

Hint: 當模型沒有變化但效能劣化時，變化一定在資料中。

Explanation: 資料漂移發生在生產資料的統計特性隨時間從訓練資料分布偏移時。客戶行為變化、市場變動、季節性模式或上游資料綱要變更都可能導致傳入資料與模型訓練時的不同，降低預測品質。

Why others wrong: 硬體不會降低模型準確率；S3 提供持久儲存；CloudWatch 準確報告指標。

Trap: 當效能緩慢劣化時責怪模型或基礎設施——沒有程式碼變更的逐漸劣化幾乎總是資料漂移。

Mnemonic: 什麼都沒變但準確率下降了？資料漂移！

## Q144
Type: single
Difficulty: 2
Tags: monitoring, model-monitor, schedule
Concepts: monitoring-schedule
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

團隊想讓 Model Monitor 每天檢查生產端點的資料漂移。如何配置？

A. 每天手動執行監控任務
B. 建立帶每日 cron 表達式的 Model Monitor 監控排程
C. 設定 Lambda 函數檢查端點指標
D. 使用 CloudWatch Events 觸發重新訓練

Answer: B

Hint: Model Monitor 支援排程執行以進行持續監控。

Explanation: SageMaker Model Monitor 支援用 cron 表達式定義的排程監控任務。每日排程自動將捕捉的推論資料與基線比較，生成違規報告，並在偵測到漂移時發出 CloudWatch 指標/警報。

Why others wrong: 手動執行無法擴展；Lambda 可以檢查指標但不計算漂移統計；CloudWatch Events 觸發動作但不執行漂移分析。

Trap: 建立自訂漂移偵測 Lambda——Model Monitor 原生提供此功能，搭配內建的漂移統計和視覺化。

Mnemonic: 排程 Monitor = 自動化的每日漂移體檢

## Q145
Type: single
Difficulty: 3
Tags: monitoring, retraining
Concepts: retraining-strategy
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

Model Monitor 偵測到顯著的資料漂移。團隊需要決定重新訓練策略。哪種方法最合適？

A. 在原始訓練資料上重新訓練模型以恢復原始效能
B. 在最近生產資料（已標記）和滑動視窗的歷史資料組合上重新訓練，用最近資料的保留集驗證
C. 切換到完全不同的演算法
D. 調整模型的閾值以補償漂移

Answer: B

Hint: 新模型需要學習當前資料模式，同時保留可泛化的知識。

Explanation: 在最近資料上重新訓練捕捉當前模式，而包含歷史資料防止對暫時趨勢過擬合。滑動視窗平衡新鮮度和穩定性。用最近保留資料驗證確保重新訓練的模型在當前分布上表現良好，而非僅在歷史資料上。

Why others wrong: 原始訓練資料不反映當前分布；演算法變更不解決資料偏移；閾值調整是治標不治本。

Trap: 只在原始資料上重新訓練——這重現了已經失敗的模型，因為資料已經改變。包含最近資料。

Mnemonic: 漂移 → 用新鮮 + 歷史資料重新訓練，用最近資料驗證

## Q146
Type: single
Difficulty: 2
Tags: monitoring, bias-monitor
Concepts: continuous-bias-monitoring
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

法規要求對貸款模型在受保護群組間持續監控公平性。哪個 SageMaker 能力解決此需求？

A. SageMaker Debugger
B. SageMaker Clarify 偏差監控整合 Model Monitor
C. CloudWatch 自訂指標
D. AWS Config 合規規則

Answer: B

Hint: 公平性監控需要在即時預測上計算偏差指標，不只是訓練資料。

Explanation: SageMaker Clarify 與 Model Monitor 整合，持續計算捕捉的生產預測上的偏差指標（差異影響、統計平等差異）。排程監控任務偵測偏差指標是否超出配置的閾值，觸發調查警報。

Why others wrong: Debugger 監控訓練收斂；CloudWatch 不計算偏差指標；Config 檢查資源合規性，不是模型公平性。

Trap: 只在訓練時檢查偏差——偏差可能在資料分布偏移或模型遇到訓練中代表不足的人口群組時在生產中出現。

Mnemonic: 生產中的 Clarify = 持續的公平性看門狗

## Q147
Type: single
Difficulty: 2
Tags: monitoring, explainability
Concepts: production-explainability
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

客戶抱怨其保險理賠被 ML 模型拒絕。合規團隊需要了解原因。哪種方法提供每次預測的解釋？

A. 向客戶展示模型的全局特徵重要性
B. 使用 SageMaker Clarify 計算特定預測的 SHAP 值，顯示哪些特徵導致了拒絕
C. 重新訓練模型看看預測是否改變
D. 檢查模型的整體準確率是否可接受

Answer: B

Hint: 個別客戶需要個別解釋，不是全局模型摘要。

Explanation: SageMaker Clarify 為個別預測計算 SHAP 值，將拒絕決策分解為每個特徵的貢獻。例如，「理賠金額對拒絕貢獻 +0.3，付款歷史對核准貢獻 -0.1。」這提供法律要求的個別解釋。

Why others wrong: 全局重要性不解釋個別決策；重新訓練不解決特定投訴；整體準確率與個別決策無關。

Trap: 提供全局特徵重要性作為個別解釋——知道「收入通常很重要」不能解釋為什麼這個特定理賠被拒絕。

Mnemonic: 個別投訴 = 個別 SHAP 解釋

## Q148
Type: single
Difficulty: 1
Tags: security, iam
Concepts: access-control
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

公司想確保只有 ML 團隊可以建立 SageMaker 訓練任務，而資料工程團隊只能建立處理任務。哪個 AWS 服務強制執行這些權限？

A. Amazon GuardDuty
B. AWS Identity and Access Management (IAM)
C. AWS WAF
D. Amazon Inspector

Answer: B

Hint: 對 AWS 動作的細粒度存取控制使用身分和存取管理服務。

Explanation: IAM 政策定義哪些主體可以對哪些資源執行哪些動作。ML 團隊的政策允許 sagemaker:CreateTrainingJob，而資料團隊的政策允許 sagemaker:CreateProcessingJob——每個團隊只能執行其授權的動作。

Why others wrong: GuardDuty 偵測威脅；WAF 保護 Web 應用程式；Inspector 掃描漏洞。

Trap: 使用網路級控制代替 IAM——安全群組控制網路流量，但 IAM 控制誰可以執行 SageMaker API 動作。

Mnemonic: IAM = 我被允許做這件事（或不）

## Q149
Type: single
Difficulty: 2
Tags: security, encryption
Concepts: data-protection
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

醫療 ML 解決方案必須加密所有靜態和傳輸中的資料，並能稽核金鑰使用情況。哪個 AWS 服務管理具有稽核能力的加密金鑰？

A. AWS Secrets Manager
B. AWS Key Management Service (KMS)
C. AWS Certificate Manager
D. Amazon Cognito

Answer: B

Hint: 管理具有稽核追蹤的加密金鑰需要金鑰管理服務。

Explanation: AWS KMS 建立和管理 SageMaker、S3 和其他服務使用的加密金鑰。KMS 與 CloudTrail 整合，記錄每次金鑰使用事件，提供完整的稽核追蹤——誰加密/解密了什麼資料以及何時——滿足醫療合規要求。

Why others wrong: Secrets Manager 儲存憑證，不是加密金鑰；Certificate Manager 管理 TLS 憑證；Cognito 管理使用者驗證。

Trap: 使用 Secrets Manager 做加密金鑰——它儲存密碼和 API 金鑰等秘密，不是 SageMaker 和 S3 使用的加密金鑰。

Mnemonic: KMS = 帶完整稽核追蹤的金鑰管理

## Q150
Type: single
Difficulty: 2
Tags: security, vpc-endpoints
Concepts: private-connectivity
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

銀行要求所有 SageMaker API 呼叫留在 AWS 網路內，永遠不穿越公開網際網路。哪種機制提供這種私有連線？

A. 所有 API 呼叫使用 HTTPS
B. 為 SageMaker API 和 Runtime 建立 VPC Interface Endpoints
C. 使用 AWS Direct Connect 從銀行的資料中心
D. 啟用 S3 Transfer Acceleration

Answer: B

Hint: VPC 端點建立你的 VPC 和 AWS 服務之間的私有連線，不使用網際網路。

Explanation: SageMaker API 和 SageMaker Runtime 的 VPC Interface Endpoints 在 AWS 網路內建立私有連線。所有 API 呼叫（CreateTrainingJob、InvokeEndpoint 等）留在 VPC 和 AWS 骨幹網路內，永遠不觸及公開網際網路。

Why others wrong: HTTPS 加密流量但仍通過網際網路路由；Direct Connect 連接本地到 AWS 但不解決 VPC 到服務的路由；Transfer Acceleration 加速 S3 上傳。

Trap: 認為 HTTPS 足以滿足「無網際網路」要求——HTTPS 加密資料但流量仍穿越公開網際網路。VPC 端點保持流量完全在 AWS 內。

Mnemonic: VPC Endpoint = 從你的 VPC 到 AWS 服務的私有隧道

## Q151
Type: single
Difficulty: 3
Tags: monitoring, model-quality
Concepts: model-quality-monitoring
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

模型的預測準確率無法立即檢查，因為真實標籤在預測後 30 天才到達。團隊在此期間應如何監控模型品質？

A. 在任何監控前等待 30 天
B. 監控資料品質和特徵漂移作為模型品質的代理，然後在標籤到達時用真實標籤驗證
C. 如果沒有發生錯誤就假設模型表現正確
D. 不論效能如何，每 30 天重新訓練模型

Answer: B

Hint: 當你無法直接衡量模型品質時，監控輸入的變化，這些變化會影響品質。

Explanation: 資料品質和特徵漂移監控作為潛在模型劣化的領先指標。當傳入資料分布偏移時，模型品質可能在真實標籤確認之前就已劣化。一旦標籤到達，Model Monitor 的模型品質監控計算實際準確率指標，驗證或反駁漂移訊號。

Why others wrong: 30 天延遲在沒有任何監控的情況下太長；沒有錯誤不代表好的預測；盲目重新訓練在模型仍表現良好時浪費資源。

Trap: 等到真實標籤才開始監控——等到標籤到達時，30 天的劣化預測可能已經過去。使用資料漂移作為早期警告。

Mnemonic: 還沒有標籤？改為監控資料——漂移預測劣化

## Q152
Type: single
Difficulty: 2
Tags: monitoring, alerts
Concepts: alerting-strategy
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

團隊設定了 Model Monitor 但收到太多對輕微資料品質變化的誤報。如何在仍捕捉真正問題的同時減少警報雜訊？

A. 完全停用 Model Monitor
B. 調整監控基線中的約束閾值以允許可接受的變化，並設定 CloudWatch 警報評估期以捕捉持續違規
C. 每週只手動檢查監控報告一次
D. 從模型中移除高變異的特徵

Answer: B

Hint: 調整敏感度——允許輕微波動但對持續或顯著變化發出警報。

Explanation: 調整基線約束（例如允許特徵平均值 5% 的偏差而非 0%）減少正常變化的誤報。設定 CloudWatch 警報評估期（例如只在連續 3 次檢查都違規時才警報）過濾掉暫時性波動。兩者結合捕捉真正的漂移而忽略雜訊。

Why others wrong: 停用監控損失所有可見性；每週手動檢查遺漏時間敏感的問題；移除特徵損失預測能力。

Trap: 設定閾值太緊——某些自然變化是預期的。閾值應反映業務有意義的漂移，而非統計雜訊。

Mnemonic: 調校閾值就像溫控器——不要太敏感，也不要太鬆

## Q153
Type: single
Difficulty: 1
Tags: security, cloudtrail
Concepts: audit-logging
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

稽核人員需要所有 SageMaker API 呼叫的完整日誌——誰建立了訓練任務、誰部署了模型、何時刪除了端點。哪個 AWS 服務提供此稽核追蹤？

A. Amazon CloudWatch Logs
B. AWS CloudTrail
C. SageMaker Experiments
D. Amazon S3 存取日誌

Answer: B

Hint: API 級活動記錄用於稽核和合規。

Explanation: AWS CloudTrail 記錄所有 AWS API 呼叫，包括 SageMaker 操作如 CreateTrainingJob、CreateEndpoint 和 DeleteEndpoint。每個日誌條目包含呼叫者身分、時間戳、來源 IP、請求參數和回應，為合規提供完整的稽核追蹤。

Why others wrong: CloudWatch Logs 捕捉應用程式級日誌；Experiments 追蹤 ML 試驗，不是 API 呼叫；S3 日誌追蹤 S3 存取，不是 SageMaker 動作。

Trap: 使用 CloudWatch Logs 做 API 稽核——CloudWatch 捕捉應用程式記錄的內容，而 CloudTrail 捕捉執行了什麼 API 動作。

Mnemonic: CloudTrail = 每個 API 呼叫的足跡，誰做了什麼以及何時

## Q154
Type: single
Difficulty: 2
Tags: security, model-artifacts
Concepts: model-security
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

競爭對手如果存取模型產出物就可能逆向工程公司的 ML 模型。哪些控制組合保護模型智慧財產？

A. 將模型產出物儲存在具有長隨機名稱的公開 S3 儲存桶中
B. 用 KMS 加密模型產出物，用儲存桶政策和 IAM 限制 S3 存取，在無網際網路存取的 VPC 中部署
C. 只部署模型，永不儲存產出物
D. 使用模型混淆技術

Answer: B

Hint: 縱深防禦——加密、存取控制和網路隔離一起保護敏感資產。

Explanation: KMS 加密防止即使儲存被入侵也無法未授權讀取模型產出物。IAM 和儲存桶政策確保只有授權角色存取 S3 位置。無網際網路存取的 VPC 部署防止通過網路管道洩漏模型。這種多層方法提供穩健的保護。

Why others wrong: 通過隱晦性的安全（隨機名稱）不足夠；SageMaker 需要儲存的產出物進行部署；模型混淆不是標準 AWS 能力。

Trap: 只依賴 S3 儲存桶隱私——儲存桶政策可能被錯誤配置。加密提供第二層，即使存取控制失敗也能保護。

Mnemonic: 加密 + 限制 + 隔離 = 模型 IP 的三重保護

## Q155
Type: single
Difficulty: 2
Tags: monitoring, concept-drift
Concepts: concept-drift
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

預測客戶購買意圖的模型是在疫情前訓練的。疫情後，線上瀏覽時間和購買之間的關係已根本改變——更長的瀏覽不再與更高的購買意圖相關。這是什麼類型的漂移？

A. 資料漂移（共變量偏移）
B. 概念漂移
C. 標籤漂移
D. 特徵漂移

Answer: B

Hint: 輸入資料可能看起來相似，但輸入和輸出之間的關係已改變。

Explanation: 概念漂移發生在特徵和目標變數之間的映射改變時。特徵分布（瀏覽時間）可能保持穩定，但與購買意圖的關係已根本偏移。資料漂移偵測器不會捕捉到這一點，因為輸入資料看起來相同——只有真實標籤評估才能揭示概念漂移。

Why others wrong: 資料漂移（共變量偏移）意味著輸入分布改變；標籤漂移意味著標籤分布改變；特徵漂移是影響個別特徵的資料漂移子集。

Trap: 期望資料漂移監控捕捉所有問題——概念漂移在不改變資料分布的情況下改變底層關係，使其對資料漂移監控不可見。

Mnemonic: 相同資料，不同意義 = 概念漂移（概念改變了）

## Q156
Type: single
Difficulty: 3
Tags: security, responsible-ai
Concepts: responsible-ai-governance
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

公司正在建立 AI 治理框架。他們需要在部署前記錄每個模型的目的、限制、預期使用案例和潛在風險。哪種產出物服務此目的？

A. 模型訓練日誌
B. 記錄模型能力、限制、預期用途和倫理考量的模型卡
C. 模型的原始碼
D. CloudFormation 部署範本

Answer: B

Hint: 一個標準化文件，傳達利益相關者需要了解的關於模型的一切。

Explanation: 模型卡是結構化文件，描述模型的目的、訓練資料、跨不同群組的效能、限制、預期用途和倫理考量。SageMaker 支援模型卡的建立和管理，為 AI 治理和透明度提供標準化格式。

Why others wrong: 訓練日誌顯示技術細節但不包含治理資訊；原始碼顯示實作但不包含倫理考量；CloudFormation 範本定義基礎設施，不是模型治理。

Trap: 認為技術文件足以進行治理——模型卡專門解決程式碼和日誌不涵蓋的負責任 AI 議題。

Mnemonic: 模型卡 = 模型的身分證——它是誰、能做什麼、不該做什麼

## Q157
Type: single
Difficulty: 2
Tags: monitoring, feature-drift
Concepts: feature-attribution-drift
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

部署模型後，SageMaker Clarify 的特徵歸因監控顯示「location」特徵的重要性從 SHAP 貢獻的 5% 增加到 35%。這表示什麼？

A. 模型運作正常
B. 特徵歸因漂移——模型的決策過程已偏移，可能由於資料變化使模型嚴重依賴位置
C. 端點需要更多實例
D. 模型需要更多特徵

Answer: B

Hint: 沒有模型變更的情況下特徵重要性的劇烈偏移表明資料景觀已改變。

Explanation: 特徵歸因漂移表示模型做決策的方式與基線不同——在 35% 的預測中依賴位置，而預期是 5%。這可能表示地理資料分布偏移，或更糟的是，模型通過位置特徵發展出代理偏差。需要調查。

Why others wrong: 如此劇烈的偏移不是正常運作；實例數不影響特徵重要性；增加特徵不解釋為什麼現有特徵重要性偏移。

Trap: 因為準確率看起來可接受就忽略特徵歸因變化——模型可以在平均準確率保持的同時對敏感特徵（如位置）發展出有問題的依賴。

Mnemonic: 特徵重要性偏移了？問為什麼模型改變了主意

## Q158
Type: single
Difficulty: 1
Tags: security, s3
Concepts: data-access-control
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

包含 ML 訓練資料的 S3 儲存桶的建議預設設定是什麼？

A. 公開存取以方便共享
B. 阻擋所有公開存取，使用 IAM 政策進行授權存取
C. 啟用靜態網站託管
D. 啟用 Requester Pays

Answer: B

Hint: ML 訓練資料永遠不應公開存取。

Explanation: S3 Block Public Access 應在所有包含 ML 資料的儲存桶上啟用。存取應通過 IAM 政策授予特定角色（SageMaker 訓練角色、資料科學團隊角色），使用最小權限原則。這防止意外的資料暴露。

Why others wrong: 公開存取有資料外洩風險；靜態託管用於網站；Requester Pays 是計費功能。

Trap: 為方便而使儲存桶公開——即使「非敏感」訓練資料也可能揭示業務邏輯、客戶模式，或啟用模型擷取攻擊。

Mnemonic: ML 資料 = 始終私有，Block Public Access = 始終開啟

## Q159
Type: single
Difficulty: 2
Tags: monitoring, pipeline-monitoring
Concepts: ml-pipeline-monitoring
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

自動化重新訓練管線每週執行，但有時靜默失敗——訓練任務完成但由於輸入資料損壞導致模型品質不佳。團隊應如何防止這種情況？

A. 每次重新訓練後手動檢查模型品質
B. 在訓練前添加資料驗證步驟，訓練後添加模型評估步驟，品質門檻失敗時自動回滾
C. 增加訓練運算資源
D. 更頻繁地執行管線

Answer: B

Hint: 多個管線階段的品質閘門防止壞資料產生壞模型。

Explanation: 在訓練前添加資料驗證步驟（檢查綱要、分布、完整性）能早期捕捉損壞的資料。訓練後的模型評估步驟驗證重新訓練的模型達到品質閾值。如果任一閘門失敗，管線回滾到之前的模型版本，防止靜默的品質劣化。

Why others wrong: 手動檢查無法跟上每週重新訓練的頻率；更多運算不修復資料品質；更頻繁的執行放大問題。

Trap: 信任成功的訓練任務代表好模型——訓練可以在壞資料上成功完成，產生壞模型。總是驗證輸入和輸出。

Mnemonic: 之前的閘門（資料驗證）+ 之後的閘門（模型評估）= 壞模型無法溜過

## Q160
Type: single
Difficulty: 3
Tags: security, model-attacks
Concepts: adversarial-robustness
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

威脅分析顯示對手可能發送特製輸入到 ML 模型以導致誤分類。應實施哪種防禦機制？

A. API 速率限制
B. 對傳入請求進行輸入驗證搭配異常偵測、對抗訓練和輸出信心閾值
C. 使用更複雜的模型架構
D. 加密模型產出物

Answer: B

Hint: 對抗性輸入的防禦需要偵測異常輸入、強化模型和不信任低信心預測。

Explanation: 輸入驗證搭配異常偵測標記異常的請求模式。對抗訓練在訓練期間讓模型接觸擾動攻擊，提升穩健性。信心閾值拒絕模型不確定的預測（通常表示對抗性輸入）。三者結合提供對抗對抗攻擊的縱深防禦。

Why others wrong: 速率限制防止 DoS 但不防對抗性輸入；模型複雜度本身不能抵抗對抗攻擊；加密保護產出物，不對抗對抗性推論。

Trap: 只依賴模型複雜度——即使非常大、複雜的模型也容易受對抗樣本影響。防禦需要輸入級偵測、模型級強化和輸出級過濾。

Mnemonic: 對抗防禦 = 偵測可疑輸入 + 強化模型 + 過濾不確定輸出

## Q161
Type: single
Difficulty: 2
Tags: monitoring, cost-monitoring
Concepts: cost-optimization
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

SageMaker 端點每月花費 $5,000 但每天只服務不到 100 個請求。團隊應如何最佳化成本？

A. 增加實例大小以獲得更好的使用率
B. 切換到 SageMaker 無伺服器推論或非同步推論，它們在閒置期間縮放至零
C. 部署更多端點以分散負載
D. 轉為預留實例方案

Answer: B

Hint: 每天 100 個請求意味著端點 99%+ 的時間是閒置的——你在為未使用的容量付費。

Explanation: 每天 100 個請求（大約每小時 4 個），端點被嚴重過度佈建。無伺服器推論只對實際推論時間收費並在閒置時縮放至零，可能將成本從每月 $5,000 降到不到 $50。非同步推論是另一個選項，如果請求可以容忍輕微延遲。

Why others wrong: 更大的實例增加成本；更多端點增倍成本；預留實例節省約 30% 但不解決根本的過度佈建。

Trap: 獲得預留實例折扣——$5,000 的 30% 折扣仍然是每月 $3,500。無伺服器在每天 100 個請求時可能只需每月 $50。

Mnemonic: 低流量？縮放至零。不要為空餐廳付費。

## Q162
Type: single
Difficulty: 2
Tags: monitoring, model-versioning
Concepts: model-lifecycle
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

團隊已部署模型的第 5 版。版本 1-3 不再使用。他們應如何處理舊模型版本及其產出物？

A. 立即刪除所有舊版本以節省儲存成本
B. 將舊版本歸檔到 S3 Glacier 以符合合規要求，在 Model Registry 中維護中繼資料，並設定自動歸檔的生命週期政策
C. 無限期保留所有版本在當前儲存層
D. 刪除模型產出物但保留 Model Registry 條目

Answer: B

Hint: 舊模型可能在稽核、合規或回滾時需要——但不需要熱儲存。

Explanation: 歸檔到 S3 Glacier 以最小成本保留模型產出物用於合規和潛在回滾（約 $0.004/GB/月 vs S3 Standard 的 $0.023/GB）。Model Registry 中繼資料提供所有版本的目錄及其指標和譜系，需要時可檢索任何歷史版本。

Why others wrong: 立即刪除有合規違規風險且阻止回滾；無限期熱儲存浪費金錢；刪除產出物但不刪除中繼資料使版本無法檢索。

Trap: 「以防萬一」將所有東西保留在 S3 Standard——舊模型產出物可能累積到數百 GB。Glacier 以低 85% 的成本提供相同的持久性。

Mnemonic: 將舊模型歸檔到 Glacier——便宜的儲存，相同的合規

## Q163
Type: single
Difficulty: 2
Tags: security, guardrails
Concepts: genai-safety
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

Bedrock 上的 GenAI 聊天機器人有時會在其上下文視窗的回應中生成包含客戶電子郵件地址的內容。應如何防止這種 PII 洩漏？

A. 在系統提示中指示模型永遠不要透露電子郵件地址
B. 配置帶 PII 偵測和遮蔽過濾器的 Bedrock Guardrails 用於模型輸出
C. 從訓練資料中移除所有電子郵件地址
D. 將模型的 temperature 降為 0

Answer: B

Hint: 系統性預防需要自動化過濾器，不只是指示。

Explanation: 帶 PII 過濾器的 Bedrock Guardrails 在模型輸出到達使用者之前自動偵測和遮蔽電子郵件地址、電話號碼和其他 PII 模式。這提供可靠的自動化保障，不依賴模型是否遵守指示。

Why others wrong: 系統提示指示不可靠——模型不總是完美遵守；訓練資料變更不防止上下文中的 PII；temperature 不影響 PII 洩漏。

Trap: 依賴提示指示防止 PII 洩漏——模型可以忽略或創造性地繞過指示。Guardrails 提供確定性過濾。

Mnemonic: 指示可以被忽略，Guardrails 無法被繞過

## Q164
Type: single
Difficulty: 3
Tags: monitoring, performance-debugging
Concepts: inference-debugging
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

SageMaker 端點的 P99 延遲突然從 50ms 增加到 500ms，沒有任何模型變更。系統化的除錯方法是什麼？

A. 立即擴展到更多實例
B. 檢查 CloudWatch 指標中的 ModelLatency vs OverheadLatency——如果 OverheadLatency 飆升，是基礎設施問題；如果 ModelLatency 飆升，檢查資料大小增加、GPU 記憶體壓力或垃圾回收
C. 重新部署模型
D. 切換到不同模型

Answer: B

Hint: 分離模型處理時間和基礎設施開銷以識別減速發生在哪裡。

Explanation: ModelLatency 衡量模型的處理時間；OverheadLatency 衡量 SageMaker 的基礎設施開銷（請求路由、容器通訊）。如果 ModelLatency 穩定但 OverheadLatency 增加，問題在基礎設施（擴展事件、網路）。如果 ModelLatency 增加，檢查更大的輸入負載、記憶體壓力或垃圾回收暫停。

Why others wrong: 擴展可能有幫助但不診斷根本原因；重新部署為時過早；切換模型不解決實際問題。

Trap: 不做診斷就增加實例——如果根本原因是過大的負載或記憶體洩漏，更多實例不會有幫助且可能掩蓋真正的問題。

Mnemonic: ModelLatency + OverheadLatency = 瓶頸在哪裡？

## Q165
Type: single
Difficulty: 1
Tags: security, roles
Concepts: execution-roles
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

SageMaker 執行角色的目的是什麼？

A. 允許使用者登入 AWS 控制台
B. 授予 SageMaker 訓練任務和端點存取 S3、ECR 和 CloudWatch 等 AWS 資源的權限
C. 加密模型產出物
D. 管理 SageMaker 帳單

Answer: B

Hint: SageMaker 服務需要代表你與其他 AWS 服務互動的權限。

Explanation: SageMaker 執行角色是 SageMaker 訓練任務、處理任務和端點扮演以存取 AWS 資源的 IAM 角色。它通常包含 S3（讀取訓練資料、寫入產出物）、ECR（拉取容器映像）、CloudWatch（發布指標）和 KMS（解密資料）的權限。

Why others wrong: 控制台存取使用使用者憑證，不是執行角色；加密使用 KMS；帳單由帳戶管理。

Trap: 給執行角色過於廣泛的權限（AdministratorAccess）——遵循最小權限。只授予 ML 工作負載需要的特定 S3 路徑、ECR 儲存庫和 KMS 金鑰。

Mnemonic: 執行角色 = SageMaker 存取 AWS 資源的識別證

## Q166
Type: single
Difficulty: 2
Tags: monitoring, compliance
Concepts: ml-governance
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

受監管行業要求能重現任何過去的預測，包括使用的確切模型、資料和配置。哪個 SageMaker 功能組合提供此可重現性？

A. CloudWatch 指標和日誌
B. SageMaker Experiments + Lineage Tracking + Model Registry + S3 版本控制 + Data Capture
C. SageMaker Autopilot
D. SageMaker Canvas

Answer: B

Hint: 完全可重現性需要追蹤 ML 生命週期中的每個組件。

Explanation: Experiments 記錄訓練參數和指標。Lineage Tracking 連接資料、程式碼和模型產出物。Model Registry 追蹤帶核准狀態的模型版本。S3 版本控制保留確切的資料版本。Data Capture 記錄推論輸入/輸出。它們結合提供從預測回溯到使用的確切模型、訓練資料和程式碼的完整鏈條。

Why others wrong: CloudWatch 提供營運指標，不是 ML 生命週期追蹤；Autopilot 自動化但不追蹤自訂實驗；Canvas 是無程式碼工具。

Trap: 只追蹤模型版本而不追蹤資料版本——可重現性需要確切的模型和它訓練所用的確切資料。

Mnemonic: 重現任何東西 = 追蹤一切（資料 + 程式碼 + 模型 + 配置 + 預測）

## Q167
Type: single
Difficulty: 2
Tags: security, network-isolation
Concepts: training-security
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

公司想確保 SageMaker 訓練任務容器無法進行可能洩漏訓練資料的出站網際網路呼叫。哪個設定提供此隔離？

A. 使用安全群組阻擋出站流量
B. 在訓練任務配置中啟用網路隔離模式（enable_network_isolation=True）
C. 使用沒有網際網路路由的 NAT 閘道
D. 從訓練任務中移除執行角色

Answer: B

Hint: SageMaker 提供一個內建標記，完全將訓練容器與網路隔離。

Explanation: 網路隔離模式完全斷開訓練容器與外部網路的連線。容器只能存取任務開始時從 S3 預載入的資料，且只能在任務完成時將結果寫入 S3。沒有出站呼叫、沒有下載、沒有資料洩漏——最安全的訓練配置。

Why others wrong: 安全群組可能被錯誤配置；移除 NAT 路由影響所有 VPC 資源；移除執行角色阻止任務運行。

Trap: 使用安全群組做隔離——它們控制允許哪些流量，但錯誤配置可能留下缺口。網路隔離模式是二元的開/關設定。

Mnemonic: 網路隔離 = 容器在密封盒中，訓練期間什麼都進不出

## Q168
Type: single
Difficulty: 3
Tags: monitoring, ab-testing-monitoring
Concepts: production-experiment-monitoring
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

兩個模型變體之間的生產 A/B 測試顯示變體 B 有 10% 更高的轉換但也有 3 倍更多的 5XX 錯誤。團隊應如何進行？

A. 立即部署變體 B 因為它有更高的轉換
B. 調查錯誤模式——如果錯誤影響特定客戶群，更高的轉換可能是偏差的；在結論前修復錯誤
C. 無限期繼續測試直到錯誤下降
D. 平均兩個變體的結果

Answer: B

Hint: 錯誤可以通過將某些請求從轉換計算中排除來偏差 A/B 測試結果。

Explanation: 3 倍的錯誤增加意味著一些預測失敗了，可能是對特定輸入模式。如果這些失敗的請求本來會是非轉換的，存活的成功預測偏向轉換使用者，膨脹了變體 B 的轉換率。團隊必須修復錯誤並在乾淨樣本上重新評估。

Why others wrong: 帶 3 倍錯誤部署會降低受影響群體的使用者體驗；無限期測試不修復根本原因；平均不解決錯誤偏差。

Trap: 慶祝更高的轉換而不檢查錯誤——倖存者偏差可以讓損壞的模型看起來比正常的更好。

Mnemonic: 高轉換 + 高錯誤 = 可疑。先修復錯誤，再評估。

## Q169
Type: single
Difficulty: 2
Tags: security, secrets
Concepts: secret-management
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

SageMaker 訓練任務需要存取需要 API 金鑰的第三方 API。此憑證應儲存在哪裡？

A. 硬編碼在訓練腳本中
B. 在 AWS Secrets Manager 中，由訓練任務在執行時檢索
C. 在 S3 檔案中與訓練資料一起
D. 在 SageMaker 超參數配置中

Answer: B

Hint: 秘密應儲存在專門的秘密管理服務中，不是在程式碼或資料中。

Explanation: AWS Secrets Manager 安全儲存、輪替和管理像 API 金鑰這樣的秘密的存取。訓練任務的執行角色被授權在執行時檢索特定秘密。這防止在程式碼儲存庫、日誌或超參數配置中暴露。

Why others wrong: 硬編碼有在版本控制和日誌中暴露的風險；S3 檔案可能被意外共享；超參數出現在 CloudWatch 日誌中。

Trap: 將 API 金鑰作為超參數傳遞——超參數被記錄到 CloudWatch 且在 SageMaker 控制台中可見，暴露了秘密。

Mnemonic: 秘密在 Secrets Manager，永遠不在程式碼、資料或配置中

## Q170
Type: single
Difficulty: 2
Tags: monitoring, model-quality-metrics
Concepts: production-accuracy
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

團隊部署了分類模型，想在生產中持續追蹤其準確率。真實標籤通過另一個管線到達。SageMaker Model Monitor 如何計算生產準確率？

A. 它從後續使用者行為自動推斷真實標籤
B. 團隊將真實標籤攝入 Model Monitor 的真實標籤路徑，與捕捉的預測合併以計算準確率指標
C. 它使用模型的信心分數作為準確率的代理
D. 它將預測與靜態測試資料集比較

Answer: B

Hint: 模型品質監控需要實際真實標籤來計算準確率。

Explanation: SageMaker Model Monitor 的模型品質監控將捕捉的預測（來自 Data Capture）與上傳到指定 S3 路徑的真實標籤合併。然後計算標準分類指標（準確率、精確率、召回率、F1）並與基線比較，在品質劣化時發出警報。

Why others wrong: Model Monitor 不推斷真實標籤；信心分數不衡量實際準確率；靜態測試資料不反映生產效能。

Trap: 使用預測信心作為準確率的代理——模型可以自信地犯錯。需要實際真實標籤來進行真正的準確率衡量。

Mnemonic: 模型品質 = 預測 + 真實標籤 → 真實準確率指標

## Q171
Type: single
Difficulty: 1
Tags: security, logging
Concepts: access-monitoring
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

安全團隊想在有人存取包含 ML 訓練資料的 S3 儲存桶時收到警報。哪個服務組合提供此通知？

A. S3 伺服器存取日誌 + 手動審查
B. CloudTrail 記錄 S3 資料事件 + CloudWatch 警報對存取事件 + SNS 通知
C. S3 版本控制
D. AWS Config

Answer: B

Hint: 事件驅動的警報需要記錄、監控和通知的鏈條。

Explanation: CloudTrail 捕捉 S3 資料事件（GetObject、PutObject）作為日誌條目。CloudWatch Events 規則或指標過濾器偵測特定存取模式。觸發時，SNS 主題發送通知（電子郵件、簡訊、Slack）給安全團隊——提供資料存取的即時感知。

Why others wrong: 伺服器存取日誌需要手動審查且無警報；版本控制追蹤變更，不是存取；Config 監控資源配置，不是資料存取。

Trap: 只啟用 S3 存取日誌——日誌被寫入但沒人看到它們，除非主動檢查。CloudTrail + CloudWatch 提供自動化警報。

Mnemonic: CloudTrail 記錄它 → CloudWatch 監看它 → SNS 警報你

## Q172
Type: single
Difficulty: 3
Tags: monitoring, genai-monitoring
Concepts: llm-monitoring
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

Bedrock 上的 GenAI 應用程式需要在生產中監控幻覺、毒性和回應相關性。標準 Model Monitor 漂移偵測不足夠。應使用什麼監控方法？

A. 內容團隊手動抽查
B. 實作 LLM-as-judge 管線，由另一個模型評估每個回應的事實性、相關性和安全性，記錄分數並在劣化時警報
C. 只監控延遲和錯誤率
D. 要求使用者對每個回應評分

Answer: B

Hint: 評估自由格式文字品質需要語義評估，不只是統計比較。

Explanation: LLM-as-judge 管線使用基礎模型自動根據事實性（是否匹配來源資料？）、相關性（是否回答了問題？）和安全性（是否有毒？）等標準評估每個生產回應。分數被記錄、隨時間追蹤，並在品質指標降到閾值以下時發出警報。

Why others wrong: 手動抽查無法擴展；延遲/錯誤監控遺漏內容品質；強制使用者評分造成摩擦且回應率低。

Trap: 對 GenAI 套用傳統 Model Monitor——漂移偵測比較結構化特徵的分布，無法捕捉文字品質、幻覺或毒性。

Mnemonic: GenAI 需要 GenAI 法官——用 LLM 評估 LLM

## Q173
Type: single
Difficulty: 2
Tags: security, data-protection
Concepts: training-data-protection
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

SageMaker 訓練任務期間，敏感資料在訓練實例上被處理。這些資料如何被保護不被其他租戶存取？

A. SageMaker 在客戶之間共享訓練實例以提高效率
B. SageMaker 訓練在專用實例上運行——實例、附加磁碟區和網路按客戶隔離，磁碟區加密且使用後清除
C. 資料在發送到訓練實例前被匿名化
D. 每個訓練任務需要多重驗證

Answer: B

Hint: 每個訓練任務在自己的隔離環境中運行。

Explanation: SageMaker 在不與其他客戶共享的專用運算實例上運行每個訓練任務。EBS 磁碟區加密且在任務完成後安全清除。網路隔離確保無跨租戶通訊。這種多層隔離保護敏感訓練資料。

Why others wrong: SageMaker 不共享訓練實例；資料不會自動匿名化；MFA 用於使用者驗證，不是任務級安全。

Trap: 擔心多租戶資料暴露——SageMaker 在基礎設施級提供強隔離保證。每個任務在專用、加密、清除的實例上運行。

Mnemonic: 你的訓練任務 = 你自己的隔離加密房間——沒有其他人進得來

## Q174
Type: single
Difficulty: 2
Tags: monitoring, sla
Concepts: sla-monitoring
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

模型端點的 SLA 為 99.9% 可用性和 P99 延遲 < 200ms。哪個 CloudWatch 配置監控兩個要求的合規性？

A. 每小時手動檢查端點狀態
B. 建立組合 CloudWatch 警報：一個追蹤 Invocation5XXErrors 率對 0.1% 閾值，另一個追蹤 ModelLatency P99 對 200ms，組合成組合警報
C. 只監控平均延遲
D. 檢查 CloudTrail 日誌了解端點可用性

Answer: B

Hint: 兩個 SLA 維度（可用性和延遲）需要兩個警報，理想情況下組合成一個信號。

Explanation: Invocation5XXErrors 上的警報追蹤可用性（>0.1% 錯誤違反 99.9% SLA）。ModelLatency P99 統計上的警報追蹤延遲合規性。組合警報將兩者結合，在任一 SLA 維度被違反時觸發，為值班團隊提供單一信號以採取行動。

Why others wrong: 手動檢查遺漏即時違規；平均延遲隱藏 P99 尖峰；CloudTrail 記錄 API 呼叫，不是推論效能。

Trap: 監控平均延遲而非 P99——平均可能是 50ms 而 P99 是 500ms。SLA 通常指定百分位延遲，不是平均。

Mnemonic: 兩個 SLA = 兩個警報 = 一個組合信號

## Q175
Type: single
Difficulty: 1
Tags: security, least-privilege
Concepts: access-principles
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

在 ML 工作負載的上下文中，最小權限原則是什麼？

A. 給所有資料科學家管理員存取以提高生產力
B. 只授予每個角色執行其特定任務所需的最小權限
C. 在所有團隊成員之間共享單一 IAM 角色
D. 允許所有 SageMaker 動作並在網路級限制

Answer: B

Hint: 只授予需要的，不多。

Explanation: 最小權限意味著每個 IAM 角色、使用者或服務只有其功能所需的權限。資料科學家可能有 CreateTrainingJob 和 CreateEndpoint 但沒有 DeleteEndpoint。推論端點角色可以從特定 S3 路徑讀取但不能存取其他儲存桶。

Why others wrong: 管理員存取違反最小權限；共享角色阻止細粒度控制；網路級控制不取代 IAM 權限。

Trap: 為方便授予廣泛的 SageMaker:* 權限——這允許使用者意外地（或惡意地）刪除端點、存取其他專案的資料或修改生產模型。

Mnemonic: 最小權限 = 最小存取以獲得最大安全

## Q176
Type: single
Difficulty: 2
Tags: monitoring, automated-retraining
Concepts: retraining-automation
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

Model Monitor 偵測到超出配置閾值的漂移。團隊想在此情況發生時自動重新訓練。哪種架構自動化此工作流程？

A. 警報到達時手動觸發重新訓練
B. Model Monitor 違規 → CloudWatch 警報 → EventBridge 規則 → 觸發 SageMaker Pipeline 進行重新訓練、評估和條件部署
C. 不論漂移如何，按固定每週排程重新訓練
D. 降低漂移閾值以防止警報

Answer: B

Hint: 事件驅動的重新訓練將監控信號連接到自動化 ML 管線。

Explanation: 當 Model Monitor 偵測到違規時，它發出 CloudWatch 指標。警報觸發 EventBridge 規則啟動 SageMaker Pipeline。管線在最近資料上重新訓練，評估新模型，只在品質閘門通過時才部署——從偵測到部署完全自動化。

Why others wrong: 手動觸發引入延遲；固定排程可能在不必要時重新訓練或太晚；降低閾值壓制真正的問題。

Trap: 按固定排程重新訓練——它可能在不必要時重新訓練（浪費運算）或太晚（漂移已經劣化服務後）。事件驅動重新訓練在需要時精確回應。

Mnemonic: 偵測到漂移 → 觸發管線 → 更新模型，全部自動化

## Q177
Type: single
Difficulty: 3
Tags: security, supply-chain
Concepts: ml-supply-chain
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

團隊在 SageMaker 管線中使用來自 Hugging Face Hub 的預訓練模型。他們應該緩解什麼安全風險？

A. 模型可能使用太多運算
B. 預訓練模型可能包含後門觸發器或惡意程式碼——在部署前掃描和驗證
C. Hugging Face 模型不能在 SageMaker 上運行
D. 模型授權可能不允許商業使用

Answer: B

Hint: 第三方模型產出物是不受信任的軟體，可能被竄改。

Explanation: 來自公開 Hub 的預訓練模型可能包含對抗後門（在特定觸發模式下誤分類的木馬）、惡意的 pickle/PyTorch 程式碼（載入時的任意程式碼執行）或蓄意的偏差。團隊應在部署到生產前掃描模型檔案、測試後門觸發器、驗證來源並審查模型卡。

Why others wrong: 運算成本是可管理的；SageMaker 完全支援 Hugging Face；授權很重要但不是安全風險。

Trap: 盲目信任流行的公開模型——即使廣泛使用的模型也可能成為供應鏈攻擊的目標。生產使用前掃描、測試和驗證。

Mnemonic: 公開模型 = 不受信任的產出物。信任前先掃描。

## Q178
Type: single
Difficulty: 2
Tags: monitoring, dashboards
Concepts: ml-observability
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

ML 平台團隊需要一個統一的儀表板，顯示 20 個已部署模型的健康狀況。哪種方法提供這種集中視圖？

A. 個別檢查每個模型的 CloudWatch 指標
B. 建立 CloudWatch 儀表板，聚合所有模型的關鍵指標（延遲、錯誤、呼叫、資料漂移違規）搭配警報狀態指示器
C. 使用 SageMaker Studio 做所有監控
D. 從零建立自訂監控應用程式

Answer: B

Hint: 所有模型的單一視圖需要將指標聚合到一個儀表板。

Explanation: CloudWatch 儀表板將多個 SageMaker 端點的指標聚合到單一視圖。小工具可以顯示所有 20 個模型的延遲趨勢、錯誤率、呼叫量和警報狀態。跨模型比較使團隊能快速識別哪些模型需要關注。

Why others wrong: 個別指標檢查無法擴展到 20 個模型；Studio 不提供跨模型儀表板；自訂應用程式增加不必要的開發工作。

Trap: 建立自訂監控 UI——CloudWatch 儀表板提供豐富的視覺化，搭配小工具、警報和自動刷新。只在 CloudWatch 不夠時才自建。

Mnemonic: 一個儀表板，20 個模型，即時健康檢查

## Q179
Type: single
Difficulty: 2
Tags: monitoring, genai, token-usage
Concepts: genai-cost-monitoring
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

Bedrock 驅動的應用程式在上線後每月成本增加了三倍。團隊懷疑某些使用者生成了過長的提示或回應。如何監控和控制成本？

A. 移除應用程式
B. 使用 CloudWatch 指標和 Bedrock 的 token 使用資料追蹤每個使用者的 token 消耗，設定每使用者預算，並實施提示長度限制
C. 切換到更便宜的模型
D. 減少系統提示長度

Answer: B

Hint: 成本控制需要可見性（誰在消耗）和限制（最大消耗）。

Explanation: Bedrock 通過 CloudWatch 報告每次呼叫的輸入/輸出 token 計數。追蹤每使用者消耗可識別重度使用者。實施提示長度驗證、最大輸出 token 限制和每使用者每日/月預算可防止成本失控，同時維持合理使用的服務。

Why others wrong: 移除應用程式太極端；更便宜的模型可能不滿足品質需求；系統提示縮減與使用者生成內容相比對成本影響極小。

Trap: 在不了解使用模式的情況下切換到更便宜的模型——少數重度使用者可能佔大部分成本。先解決使用模式。

Mnemonic: 追蹤每使用者 token，限制極端，控制成本

## Q180
Type: single
Difficulty: 1
Tags: security, tagging
Concepts: resource-governance
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

公司政策要求所有 ML 資源都必須標記專案、擁有者和環境（dev/staging/prod）。如何強制執行此政策？

A. 信任團隊成員正確標記資源
B. 使用 AWS Service Control Policies (SCP) 或 IAM 條件鍵拒絕沒有必要標籤的資源建立
C. 每月稽核標籤並手動修復缺失的
D. 在清理時標記資源

Answer: B

Hint: 自動化政策強制執行在一開始就防止未標記資源的建立。

Explanation: SCP 和帶條件鍵（aws:RequestTag 和 aws:TagKeys）的 IAM 政策拒絕不包含必要標籤的 API 呼叫。這在建立時就防止任何未標記的 SageMaker 訓練任務、端點或處理任務的建立，在建立時強制合規而非事後。

Why others wrong: 信任手動標記在規模上會失敗；每月稽核允許數週的未標記資源；事後標記遺漏了已刪除的資源。

Trap: 建立後才稽核和修復標籤——到那時，未標記的資源已經產生了無法歸屬到專案的成本。在建立時強制執行。

Mnemonic: 沒有標籤？不能建立。在閘門處強制執行政策。

## Q181
Type: single
Difficulty: 3
Tags: monitoring, canary-testing
Concepts: model-testing-production
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

部署模型後，團隊想持續驗證它對已知測試案例產生預期的輸出。如何實施這種生產冒煙測試？

A. 部署後執行一次測試套件，然後假設它繼續正常運作
B. 建立金絲雀測試 Lambda，定期發送已知輸入到端點並驗證輸出，在意外結果時警報
C. 完全依賴使用者投訴來偵測問題
D. 只監控 CloudWatch 錯誤指標

Answer: B

Hint: 定期合成測試在真實使用者之前捕捉問題。

Explanation: 金絲雀測試 Lambda 按固定排程（例如每 5 分鐘）發送預定義的測試案例（包含已知預期輸出）到生產端點。如果回應不匹配預期（錯誤預測、格式錯誤的輸出、逾時），它觸發 CloudWatch 警報。這在使用者受影響之前捕捉模型損壞、容器問題或漂移。

Why others wrong: 一次性測試遺漏隨時間發展的問題；使用者投訴是延遲且不完整的；錯誤指標不驗證預測正確性。

Trap: 只依賴錯誤率監控——模型可以返回 200 OK 但帶有完全錯誤的預測。金絲雀測試驗證預測正確性。

Mnemonic: 金絲雀測試 = 合成健康檢查，已知輸入 → 預期輸出

## Q182
Type: single
Difficulty: 2
Tags: security, compliance
Concepts: regulatory-compliance
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

處理歐盟客戶資料進行 ML 的公司必須遵守 GDPR 的「被遺忘權」。如果客戶要求刪除資料，ML 團隊必須做什麼？

A. 只從 S3 刪除原始資料
B. 從訓練資料集中刪除客戶資料，重新訓練任何使用該資料的模型，並確保客戶資料未嵌入模型權重或快取特徵中
C. 忽略請求因為 ML 模型不儲存個人資料
D. 刪除客戶帳戶而不做其他事

Answer: B

Hint: GDPR 要求完全移除個人資料，包括其對 ML 模型的影響。

Explanation: GDPR 的被遺忘權要求從訓練資料集和任何衍生產出物中移除個人的資料。如果模型記憶了該資料的模式，可能需要重新訓練。Feature Store 條目、快取特徵和包含個人資料的任何資料捕捉日誌也必須清除。

Why others wrong: 只刪除原始資料不足夠，如果模型是在其上訓練的；ML 模型可以記憶個人資料點；帳戶刪除不解決 ML 產出物中的資料。

Trap: 認為刪除來源資料就足夠——模型在訓練期間可能已記憶個人資料的某些方面，需要重新訓練才能完全合規。

Mnemonic: 被遺忘權 = 從資料和模型中都被遺忘

## Q183
Type: single
Difficulty: 2
Tags: monitoring, infrastructure
Concepts: endpoint-health
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

SageMaker 端點的實例顯示 95% GPU 記憶體使用率。團隊擔心負載下的記憶體不足錯誤。應該怎麼做？

A. 忽略它因為 GPU 被高效使用
B. 擴展到具有更多 GPU 記憶體的實例，或減小批次大小/模型大小，並在 90% GPU 記憶體時設定 CloudWatch 警報以獲得早期警告
C. 切換到 CPU 實例
D. 增加相同大小的實例數量

Answer: B

Hint: 95% 使用率在流量尖峰或較大輸入時沒有餘裕。

Explanation: 在 95% GPU 記憶體下運作危險地接近 OOM 錯誤。在流量尖峰或大於平均的輸入下，端點會崩潰。擴展到更大的 GPU 實例（更多 VRAM）、減少模型/批次大小，或實施帶記憶體限制的動態批次可解決根本原因。90% 的 CloudWatch 警報提供早期警告。

Why others wrong: 95% GPU 記憶體不是「高效使用」——而是崩潰風險；CPU 實例對 GPU 最佳化模型太慢；更多相同大小的實例不增加每實例記憶體。

Trap: 認為高 GPU 使用率總是好的——對運算（SM 佔用率），是的。對記憶體，95% 意味著離災難只差 5%。

Mnemonic: 95% GPU 記憶體 = 距離災難 5%。擴展或瘦身。

## Q184
Type: single
Difficulty: 3
Tags: monitoring, multi-model-monitoring
Concepts: model-comparison-production
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

公司使用 A/B 測試部署了挑戰者模型和冠軍模型。兩週後，挑戰者顯示精確率高 5% 但召回率低 3%。他們應該如何決定保留哪個模型？

A. 保留挑戰者因為精確率更高
B. 根據假陽性 vs 假陰性的業務成本進行評估——如果假陰性成本更高，保留冠軍（更高召回率）；如果假陽性成本更高，推進挑戰者（更高精確率）
C. 保留冠軍因為它先部署
D. 部署兩個模型並平均它們的預測

Answer: B

Hint: 精確率-召回率權衡必須根據業務影響評估，而非僅僅指標值。

Explanation: 正確的指標取決於業務上下文。對於癌症篩檢，假陰性（遺漏癌症）是災難性的——保留召回率更高的冠軍。對於垃圾郵件過濾，假陽性（阻擋合法郵件）更糟——推進精確率更高的挑戰者。沒有業務上下文就沒有普遍的「更好」。

Why others wrong: 兩個指標都不是普遍更重要的；任期不表示品質；平均預測不解決精確率-召回率權衡。

Trap: 基於單一指標選擇而不考慮業務上下文——5% 的精確率提升如果導致 3% 更多遺漏的關鍵案例，在醫療中可能是災難性的。

Mnemonic: 精確率 vs 召回率？問：什麼更昂貴——誤報還是遺漏案例？

## Q185
Type: single
Difficulty: 2
Tags: security, genai, prompt-injection
Concepts: prompt-security
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

面向客戶的 Bedrock 聊天機器人容易受到提示注入攻擊，使用者嘗試擷取系統提示或讓模型忽略其指示。哪種防禦策略最有效？

A. 讓系統提示非常長，這樣使用者不能全部讀完
B. 結合 Bedrock Guardrails（輸入過濾）、系統提示強化和輸出驗證以提供縱深防禦
C. 不使用系統提示
D. 只允許一個詞的使用者輸入

Answer: B

Hint: 沒有單一防禦能阻止所有提示注入——分層防禦提供最佳保護。

Explanation: Guardrails 過濾使用者輸入中的已知攻擊模式。系統提示強化使用清晰的指示說明模型應拒絕什麼。輸出驗證檢查回應是否有洩漏的系統提示內容或超出範圍的行為。三層結合捕捉任何單一防禦可能遺漏的攻擊。

Why others wrong: 提示長度不防止注入；沒有系統提示移除行為引導；限制輸入長度損害功能。

Trap: 只依賴像「永遠不要透露你的系統提示」這樣的系統提示指示——提示注入技術可以創造性地繞過這類指示。Guardrails 提供更可靠的過濾層。

Mnemonic: 縱深防禦 = 輸入過濾 + 提示強化 + 輸出驗證

## Q186
Type: single
Difficulty: 2
Tags: monitoring, cost-optimization
Concepts: training-cost-optimization
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

團隊每週執行 20 個訓練實驗，每個在 ml.p3.2xlarge 實例上，每小時花費 $3.06。大多數實驗運行 4 小時。如何將訓練成本減少約 70%？

A. 使用較小的實例類型
B. 對實驗使用 SageMaker 託管 Spot 訓練，啟用檢查點
C. 只在週末執行實驗
D. 將資料集大小減少 70%

Answer: B

Hint: Spot 實例為可中斷工作負載提供高達 90% 的折扣。

Explanation: Spot 實例可為訓練任務減少高達 70-90% 的成本。對於偶爾中斷可接受的實驗工作負載，搭配檢查點的託管 Spot 訓練提供顯著節省。以每小時 $3.06 × 4 小時 × 20 個實驗 = 每週 $244.80 計算，70% 的減少節省約每週 $170。

Why others wrong: 較小的實例可能沒有 GPU；週末排程不減少每小時成本；減少資料大小損害模型品質。

Trap: 使用 spot 訓練時不用檢查點——沒有檢查點，spot 中斷會浪費所有進度。spot 訓練總是啟用檢查點。

Mnemonic: 實驗 = 可中斷 = 完美適合 Spot 實例

## Q187
Type: multi
Difficulty: 2
Tags: monitoring, responsible-ai
Concepts: responsible-ml-practices
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

以下哪兩個做法對負責任 AI 部署是必要的？（選擇兩個。）

A. 將模型準確率最大化置於所有其他考量之上
B. 持續監控受保護群組間的偏差漂移和公平性
C. 提供包含限制和預期用途的透明模型文件
D. 對每個任務使用最大可能的模型

Answer: B, C

Hint: 負責任 AI 平衡效能與公平性、透明度和問責性。

Explanation: 持續偏差監控確保模型隨時間對所有群組公平對待，捕捉從資料漂移中出現的偏差。透明文件（模型卡）向利益相關者傳達模型的能力、限制和適當使用案例，使其能做出知情決策。

Why others wrong: 不惜一切代價最大化準確率可能放大偏差；最大的模型不總是最負責任的——它可能有更多記憶和偏差問題。

Trap: 將準確率置於公平性之上——對受保護群組有歧視的高準確率模型是不負責任的，且可能違法。

Mnemonic: 負責任 AI = 公平（監控偏差）+ 透明（記錄一切）

## Q188
Type: single
Difficulty: 3
Tags: monitoring, model-registry-governance
Concepts: model-approval-workflow
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

公司要求沒有模型在未經人工審查的情況下到達生產。部署管線應如何強制執行此要求？

A. 信任自動化管線部署好的模型
B. 使用 SageMaker Model Registry 的核准工作流程——模型以「PendingManualApproval」狀態註冊，只有被授權審查者明確核准的模型才能被 CI/CD 管線部署
C. 部署後發送電子郵件通知
D. 每季審查生產模型

Answer: B

Hint: Model Registry 有內建的核准狀態，作為部署的閘門。

Explanation: Model Registry 支援核准狀態：PendingManualApproval、Approved、Rejected。CI/CD 管線在部署前檢查核准狀態——只有 Approved 的模型才能繼續。這建立了一個可強制執行的人工閘門，授權審查者在授予生產存取前檢查模型指標、偏差報告和測試結果。

Why others wrong: 未經審查的自動化部署繞過了要求；部署後通知太晚；每季審查允許數月未審查的模型。

Trap: 讓管線中的核准變成可選——如果管線可以繞過核准，總有人會最終跳過它。讓核准成為硬閘門。

Mnemonic: PendingApproval → 人工審查 → Approved → 管線部署。沒有捷徑。

## Q189
Type: single
Difficulty: 2
Tags: monitoring, genai, hallucination
Concepts: hallucination-detection
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

基於 RAG 的 Bedrock 應用程式有時生成與檢索的來源文件矛盾的答案。團隊應如何偵測和減少這些幻覺？

A. 增加檢索文件的數量
B. 實施引用驗證系統，將生成的聲明與檢索的來源段落交叉檢查，標記不支援的斷言
C. 使用更高的 temperature 以獲得更有創意的回應
D. 移除 RAG 組件，讓模型從其訓練資料回答

Answer: B

Hint: 驗證生成的聲明確實出現在來源材料中。

Explanation: 引用驗證系統從模型回應中擷取事實聲明，並檢查每個聲明是否對應檢索的來源文件。任何不被來源支援的聲明被標記為潛在幻覺。這可以使用 LLM 法官或 NLI（自然語言推論）模型計算蘊含分數來自動化。

Why others wrong: 更多文件可能增加矛盾；更高的 temperature 增加隨機性和幻覺；移除 RAG 完全消除了來源基礎。

Trap: 假設 RAG 防止所有幻覺——RAG 提供上下文但模型仍然可以生成不被檢索文件支援的聲明。需要驗證。

Mnemonic: 信任但驗證——將生成的聲明與來源文件核對

## Q190
Type: single
Difficulty: 2
Tags: security, model-registry-access
Concepts: model-governance
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

不同團隊（資料科學、ML 工程、DevOps）需要不同的 Model Registry 存取級別。資料科學家應註冊模型，ML 工程師應核准，只有 DevOps 應部署。如何強制執行？

A. 所有團隊共享相同的 IAM 角色
B. 建立具有細粒度權限的團隊特定 IAM 角色：資料科學家獲得 CreateModelPackage，ML 工程師獲得 UpdateModelPackageStatus，DevOps 獲得 CreateEndpoint
C. 每個團隊使用不同的 AWS 帳戶
D. 通過口頭團隊協議強制執行

Answer: B

Hint: 不同角色搭配不同權限實現職責分離。

Explanation: IAM 政策在 API 級強制執行職責分離。資料科學家可以建立和註冊模型套件但不能核准或部署。ML 工程師可以改變核准狀態但不能部署。只有 DevOps 可以從核准的模型建立端點。這建立強制性檢查點。

Why others wrong: 共享角色繞過職責分離；獨立帳戶增加不必要的開銷；口頭協議不可強制執行。

Trap: 為方便給所有團隊完整 Model Registry 存取——這違背了核准工作流程的目的，因為任何人都可以核准和部署自己的模型。

Mnemonic: 職責分離 = 註冊 → 核准 → 部署，每個閘門不同角色

## Q191
Type: single
Difficulty: 3
Tags: monitoring, champion-challenger
Concepts: model-lifecycle-management
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

公司的自動化管線定期重新訓練模型。有時由於暫時性資料異常，重新訓練的模型比當前生產模型略差。管線應如何防止退化？

A. 始終部署最新重新訓練的模型
B. 在保留集上比較重新訓練模型的指標與當前冠軍模型——只在挑戰者統計顯著地優於冠軍時才部署
C. 部署每個模型讓使用者決定哪個更好
D. 只在團隊明確要求時才重新訓練

Answer: B

Hint: 新模型必須證明它更好才能贏得生產位置。

Explanation: 冠軍-挑戰者評估步驟在最近的保留資料集上比較重新訓練的模型與當前生產模型。統計顯著性測試確保改善不是由於隨機變異。只有明顯優於冠軍的模型才會被部署，防止資料異常或訓練隨機性造成的退化。

Why others wrong: 總是部署有退化風險；基於使用者的選擇慢且雜訊多；僅手動重新訓練損失自動化的好處。

Trap: 基於絕對指標閾值（例如準確率 > 0.85）而非相對比較進行部署——達到閾值的新模型可能仍然比當前生產模型差。

Mnemonic: 新模型必須打敗冠軍才能贏得王冠

## Q192
Type: single
Difficulty: 2
Tags: security, data-residency
Concepts: data-sovereignty
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

歐洲公司必須確保 ML 訓練資料和模型產出物永遠不離開歐盟。應如何配置 SageMaker 環境？

A. 使用任何 AWS 區域並啟用加密
B. 使用歐盟內的 AWS 區域（例如 eu-west-1、eu-central-1），並配置 S3 儲存桶政策拒絕跨區域複寫
C. 使用 VPN 連接到 AWS
D. 在本地儲存資料並使用混合部署

Answer: B

Hint: 資料駐留由 AWS 資源的實體位置控制。

Explanation: 在歐盟區域部署 SageMaker 資源和 S3 儲存桶確保資料實體駐留在歐盟邊界內。帶條件鍵（aws:RequestedRegion）的 S3 儲存桶政策防止跨區域複製。CloudTrail 監控確認沒有資料離開指定區域。

Why others wrong: 加密保護內容但不控制位置；VPN 保護傳輸但不決定資料儲存在哪裡；本地部署損失雲端 ML 優勢。

Trap: 假設加密滿足資料駐留要求——加密保護資料免受未授權存取，但駐留要求資料實體留在特定地理邊界內。

Mnemonic: 資料駐留 = 正確的區域 + 無跨區域存取

## Q193
Type: single
Difficulty: 2
Tags: monitoring, endpoint-health
Concepts: health-checks
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

SageMaker 端點偶爾返回過時預測，因為其中一個實例的記憶體中有損壞的模型產出物。如何自動偵測和修復？

A. 定期手動重啟實例
B. 配置健康檢查，發送已知測試輸入並驗證回應——不健康的實例由 SageMaker 的託管自動擴展自動替換
C. 只部署單實例端點
D. 更頻繁地重新訓練模型

Answer: B

Hint: 健康檢查偵測行為異常的實例，自動擴展替換它們。

Explanation: SageMaker 的託管基礎設施包含健康監控。驗證預測正確性的自訂健康檢查（金絲雀測試）補充了 SageMaker 的內建基礎設施健康檢查。搭配自動擴展政策，不健康的實例被偵測並用載入乾淨模型產出物的新實例替換。

Why others wrong: 定期重啟造成不必要的停機；單實例端點沒有容錯；重新訓練不修復記憶體中損壞的產出物。

Trap: 只依賴 HTTP 狀態碼做健康檢查——損壞的模型可以返回 200 OK 但帶有錯誤的預測。驗證預測正確性，而非只是「它還活著嗎？」

Mnemonic: 健康檢查 = 測試輸入 + 驗證輸出，不只是「它還活著嗎？」

## Q194
Type: single
Difficulty: 3
Tags: security, ml-pipeline-security
Concepts: pipeline-security
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

自動化 ML 管線從 S3 拉取訓練資料、訓練模型並部署到生產。安全稽核顯示，被入侵的訓練資料檔案可能導致帶後門的模型被自動部署。管線應如何保護？

A. 停用自動化管線
B. 添加完整性檢查（資料驗證、雜湊驗證）、模型品質閘門、對抗測試和人工核准後才進行生產部署
C. 對 S3 使用更強的加密
D. 更少頻繁地運行管線

Answer: B

Hint: 管線的每個階段應在繼續之前驗證其輸入。

Explanation: 資料驗證捕捉損壞/竄改的輸入。雜湊驗證確認資料完整性與已知校驗和。模型品質閘門驗證訓練好的模型表現如預期。對抗測試檢查後門觸發器。人工核准在生產部署前提供最終審查。這種多階段安全防止被入侵的檔案變成已部署的後門。

Why others wrong: 停用自動化損失 MLOps 好處；加密保護傳輸中但不偵測竄改；更少頻繁運行不防止攻擊。

Trap: 信任加密資料不能被竄改——加密防止未授權讀取，不是授權但惡意的寫入。資料完整性驗證與加密是分開的。

Mnemonic: 安全管線 = 驗證輸入 → 驗證模型 → 測試後門 → 人工核准

## Q195
Type: single
Difficulty: 2
Tags: monitoring, model-deprecation
Concepts: model-retirement
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

模型正在被新版本替換。團隊需要在不中斷依賴應用程式的情況下安全地棄用舊模型。推薦的方法是什麼？

A. 立即刪除舊端點
B. 向消費者傳達棄用時間表，使用 production variants 逐步將流量轉移到新模型，監控問題，只在確認穩定性後才停用舊模型
C. 無限期保持兩個模型運行
D. 強制所有消費者同時切換

Answer: B

Hint: 優雅棄用需要溝通、漸進過渡和驗證。

Explanation: 分階段棄用從通知下游消費者時間表開始。流量使用 production variant 權重逐步轉移（90/10 → 50/50 → 10/90 → 0/100），在每個階段進行監控。只有在新模型在完整生產負載下證明穩定後，舊模型才被停用。

Why others wrong: 立即刪除中斷依賴應用程式；無限期雙重運行浪費資源；強制同時切換有廣泛故障風險。

Trap: 新模型成功部署第一天後就刪除舊端點——隱藏的邊界案例和季節性模式可能只在數週後才出現。在過渡期間保持舊模型可用以便快速回滾。

Mnemonic: 漸進棄用 = 宣布 → 轉移流量 → 監控 → 停用
