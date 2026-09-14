---
exam: MLA-C02
lang: en
---

## Q1
Type: single
Difficulty: 1
Tags: data-ingestion, s3
Concepts: data-lake-architecture
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

A company wants to build a centralized data repository for its machine learning workloads. The data comes from multiple sources including relational databases, streaming services, and flat files. Which AWS service should serve as the primary storage layer?

A. Amazon RDS
B. Amazon S3
C. Amazon DynamoDB
D. Amazon EFS

Answer: B

Hint: Think about which service is designed for scalable, durable object storage that integrates with virtually all AWS ML services.

Explanation: Amazon S3 is the foundation of a data lake architecture on AWS. It provides virtually unlimited, durable, and cost-effective storage that integrates natively with SageMaker, Glue, Athena, and other ML/analytics services.

Why others wrong: RDS is for relational databases, not a data lake; DynamoDB is a NoSQL database for transactional workloads; EFS is a file system, not optimized for ML data lake patterns.

Trap: Choosing DynamoDB because it can handle multiple data formats — it's a database, not a data lake storage layer.

Mnemonic: S3 = Storage for ML's Starting point

## Q2
Type: single
Difficulty: 2
Tags: data-ingestion, kinesis
Concepts: streaming-data-pipeline
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

A real-time fraud detection model needs to process credit card transactions as they occur. The system must handle thousands of transactions per second and deliver data to a SageMaker endpoint for inference. Which architecture is most appropriate?

A. Amazon SQS queue polling by a Lambda function that calls the SageMaker endpoint
B. Amazon Kinesis Data Streams with a Lambda consumer that invokes the SageMaker endpoint
C. Amazon S3 event notifications triggering a Step Functions workflow
D. AWS Batch processing jobs running on a schedule

Answer: B

Hint: Real-time streaming with high throughput requires a purpose-built streaming service.

Explanation: Kinesis Data Streams is designed for real-time data ingestion at scale, supporting thousands of records per second. A Lambda consumer can process each batch of records and invoke the SageMaker endpoint for real-time inference, providing the low-latency pipeline needed for fraud detection.

Why others wrong: SQS can work but lacks ordering guarantees and native streaming semantics; S3 events are near-real-time, not truly real-time; Batch is for scheduled, non-real-time workloads.

Trap: Choosing SQS because it handles message queuing — SQS is pull-based and doesn't provide the streaming semantics needed for real-time ML inference.

Mnemonic: Kinesis = real-time King of streaming

## Q3
Type: single
Difficulty: 1
Tags: data-preparation, glue
Concepts: etl-pipeline
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

Which AWS service provides a serverless ETL capability to discover, catalog, and transform data for machine learning pipelines?

A. Amazon EMR
B. AWS Glue
C. AWS Data Pipeline
D. Amazon Redshift

Answer: B

Hint: Think about which service is serverless and includes both a data catalog and ETL engine.

Explanation: AWS Glue is a fully managed, serverless ETL service that includes crawlers for schema discovery, a centralized Data Catalog, and Spark-based transformation jobs — all without managing infrastructure.

Why others wrong: EMR requires cluster management; Data Pipeline is an older orchestration service; Redshift is a data warehouse, not an ETL tool.

Trap: Picking EMR because it also runs Spark — EMR requires infrastructure management while Glue is serverless.

Mnemonic: Glue = Glues your data together, serverlessly

## Q4
Type: single
Difficulty: 2
Tags: feature-engineering, sagemaker
Concepts: feature-store
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

A team needs to share engineered features across multiple ML models and ensure consistency between training and inference. Features must be available for both batch training and real-time prediction. Which approach best meets these requirements?

A. Store features in a shared S3 bucket and load them in each training job
B. Use Amazon SageMaker Feature Store with both online and offline stores
C. Create a common feature engineering Lambda function called by each model
D. Store features in Amazon ElastiCache for real-time access

Answer: B

Hint: Consider a purpose-built service that serves features consistently for both batch and real-time use cases.

Explanation: SageMaker Feature Store provides a centralized repository for ML features with an online store (low-latency lookups for inference) and an offline store (batch access for training). This ensures feature consistency across training and serving, eliminating training-serving skew.

Why others wrong: S3 alone lacks real-time serving capability; a Lambda function doesn't provide feature versioning or consistency guarantees; ElastiCache lacks the offline store for batch training.

Trap: Thinking S3 is sufficient — it works for batch but doesn't provide low-latency real-time feature serving.

Mnemonic: Feature Store = Online + Offline = consistent features everywhere

## Q5
Type: single
Difficulty: 1
Tags: data-labeling, ground-truth
Concepts: data-annotation
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

A company needs to label 100,000 images for an object detection model. They want to minimize cost while maintaining quality. Which AWS service should they use?

A. Amazon Rekognition Custom Labels
B. Amazon SageMaker Ground Truth
C. Amazon Mechanical Turk directly
D. Amazon Comprehend

Answer: B

Hint: Think about which service combines human labeling with automated labeling to reduce costs.

Explanation: SageMaker Ground Truth provides managed data labeling workflows that combine human annotators with active learning. As the automated model improves, it labels easier examples automatically, reducing the number of images requiring human review and lowering costs.

Why others wrong: Rekognition Custom Labels is for model training, not labeling; Mechanical Turk is a raw crowdsourcing platform without ML-assisted automation; Comprehend is for NLP, not image labeling.

Trap: Using Mechanical Turk directly — it works but lacks Ground Truth's automated labeling that reduces cost by up to 70%.

Mnemonic: Ground Truth = Ground-level labeling + Truth from automation

## Q6
Type: single
Difficulty: 2
Tags: data-quality, bias-detection
Concepts: data-bias
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

Before training a loan approval model, a data scientist wants to check whether the training dataset has representation bias across protected attributes such as gender and ethnicity. Which tool should they use?

A. Amazon SageMaker Debugger
B. Amazon SageMaker Clarify
C. Amazon SageMaker Model Monitor
D. AWS Glue DataBrew

Answer: B

Hint: Think about which tool specifically measures bias in both data and model predictions.

Explanation: SageMaker Clarify detects potential bias in training data using statistical metrics like Class Imbalance (CI) and Difference in Proportions of Labels (DPL). It can analyze pre-training data bias and post-training model bias, providing reports that help teams identify and mitigate fairness issues.

Why others wrong: Debugger monitors training jobs for issues like vanishing gradients; Model Monitor detects drift in deployed models; DataBrew is for data profiling and transformation, not bias detection.

Trap: Choosing Model Monitor — it detects drift in production, not bias in training data before deployment.

Mnemonic: Clarify = Clarifies if your data is fair

## Q7
Type: single
Difficulty: 3
Tags: data-transformation, spark
Concepts: distributed-processing
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

A data engineering team processes 50 TB of raw sensor data daily for a predictive maintenance ML pipeline. The transformation involves complex window functions, sessionization, and feature aggregation. The current Glue jobs are timing out. What should they do?

A. Increase the number of DPUs for the Glue job and enable auto-scaling
B. Switch to Amazon EMR with a tuned Spark cluster using spot instances for cost optimization
C. Break the data into smaller partitions and run multiple sequential Glue jobs
D. Move the processing to a single large EC2 instance with more memory

Answer: B

Hint: At this scale with complex transformations, you need fine-grained control over the Spark cluster configuration.

Explanation: For extremely large-scale, complex Spark workloads that exceed Glue's default capabilities, Amazon EMR provides fine-grained cluster tuning — custom Spark configurations, instance type selection, and spot instance integration. This allows optimization of shuffle partitions, memory allocation, and executor sizing for the specific workload.

Why others wrong: More DPUs may help but Glue's managed environment limits low-level tuning; sequential jobs add overhead and complexity; a single EC2 instance cannot parallelize 50 TB processing.

Trap: Simply adding more Glue DPUs — at extreme scale, you need the cluster-level tuning that EMR provides.

Mnemonic: EMR = Extreme scale, Maximum tuning, Real Spark control

## Q8
Type: single
Difficulty: 2
Tags: data-preparation, missing-values
Concepts: imputation-strategies
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

A dataset for a regression model has 15% missing values in a numerical feature that has a skewed distribution. Which imputation strategy is most appropriate?

A. Replace missing values with the mean of the feature
B. Replace missing values with the median of the feature
C. Drop all rows with missing values
D. Replace missing values with zero

Answer: B

Hint: Think about which measure of central tendency is robust to outliers and skew.

Explanation: The median is resistant to outliers and skewed distributions, making it a better imputation choice than the mean for skewed data. Using the mean would be pulled toward the tail of the distribution, potentially introducing bias.

Why others wrong: Mean imputation is biased by skew and outliers; dropping 15% of rows wastes significant data; zero imputation introduces artificial signal unrelated to the feature's distribution.

Trap: Using mean imputation by default — it works well for symmetric distributions but distorts skewed data.

Mnemonic: Skewed? Median! Symmetric? Mean!

## Q9
Type: single
Difficulty: 2
Tags: data-preparation, encoding
Concepts: categorical-encoding
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

A feature representing US states (50 categories) needs to be encoded for a gradient-boosted tree model. The feature has no ordinal relationship. Which encoding method is most appropriate?

A. Label encoding with arbitrary integer assignments
B. One-hot encoding
C. Target encoding with cross-validation to prevent leakage
D. Binary encoding

Answer: C

Hint: Consider the trade-off between dimensionality and information loss for tree-based models with high-cardinality features.

Explanation: Target encoding maps each category to the mean of the target variable for that category, keeping dimensionality low (1 column vs. 50). Using cross-validation prevents target leakage. Tree-based models like XGBoost handle target-encoded features well since they can split on the encoded value effectively.

Why others wrong: Label encoding implies ordinal relationships that don't exist; one-hot encoding creates 50 sparse columns which increases dimensionality unnecessarily for trees; binary encoding is better than one-hot but still creates multiple columns.

Trap: Defaulting to one-hot encoding — it works but creates unnecessary dimensionality for tree models with high-cardinality features.

Mnemonic: High cardinality + Trees = Target encoding with CV

## Q10
Type: single
Difficulty: 1
Tags: data-splitting, validation
Concepts: train-test-split
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

When splitting a time-series dataset for training and evaluation of a forecasting model, which approach prevents data leakage?

A. Random 80/20 train-test split
B. Stratified sampling based on the target variable
C. Chronological split where training data precedes test data in time
D. K-fold cross-validation with random shuffling

Answer: C

Hint: Future data should never appear in training when predicting the future.

Explanation: Time-series data must be split chronologically to prevent look-ahead bias. Training on future data that would not be available at prediction time creates data leakage, leading to overoptimistic evaluation metrics that don't reflect real-world performance.

Why others wrong: Random splits mix future and past data, causing leakage; stratified sampling doesn't respect temporal order; random k-fold shuffling also violates temporal ordering.

Trap: Using random splits out of habit — time-series requires chronological splitting, not random partitioning.

Mnemonic: Time-series = Time-ordered splits, never shuffle

## Q11
Type: single
Difficulty: 3
Tags: data-pipeline, orchestration
Concepts: pipeline-automation
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

An ML team needs to automate a data preparation pipeline that runs daily: crawl new data in S3, run quality checks, transform features, validate schema, and store results in the Feature Store. The pipeline must handle failures gracefully and support conditional branching. Which orchestration approach is best?

A. AWS Step Functions with Glue jobs and Lambda functions
B. Amazon MWAA (Managed Workflows for Apache Airflow)
C. SageMaker Pipelines with processing steps
D. EventBridge rules triggering individual Lambda functions

Answer: B

Hint: Think about which tool excels at complex DAG-based workflows with dependencies, retries, and conditional logic for data engineering tasks.

Explanation: MWAA provides Apache Airflow as a managed service, ideal for complex data engineering DAGs with conditional branching, retry logic, SLA monitoring, and integration with AWS services. It's the standard for orchestrating multi-step data pipelines with sophisticated dependency management.

Why others wrong: Step Functions works but DAG complexity is harder to express in ASL; SageMaker Pipelines is ML-training focused, not data engineering; EventBridge + Lambda lacks built-in DAG management and retry orchestration.

Trap: Choosing SageMaker Pipelines for everything — it's designed for ML workflows, while Airflow is better for data engineering orchestration.

Mnemonic: Airflow = Air traffic control for data pipelines

## Q12
Type: multi
Difficulty: 2
Tags: data-preparation, scaling
Concepts: feature-scaling
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

A data scientist is preparing features for a neural network model. Which TWO scaling techniques would be appropriate? (Select TWO.)

A. StandardScaler (z-score normalization)
B. No scaling — neural networks handle raw features automatically
C. MinMaxScaler (normalization to [0,1])
D. Rounding all values to the nearest integer

Answer: A, C

Hint: Neural networks converge faster when input features are on similar scales.

Explanation: StandardScaler transforms features to have zero mean and unit variance, while MinMaxScaler scales features to a fixed range. Both help neural networks converge faster by ensuring gradient updates are balanced across features, preventing features with larger magnitudes from dominating learning.

Why others wrong: Neural networks do not automatically handle raw features — unscaled inputs lead to slow or unstable convergence; rounding loses precision and doesn't normalize the scale.

Trap: Thinking neural networks don't need scaling — while they can technically learn with any scale, unscaled features cause poor convergence.

Mnemonic: Neural nets need Normalized inputs for Nice convergence

## Q13
Type: single
Difficulty: 2
Tags: data-preparation, text-processing
Concepts: text-vectorization
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

A team is building a text classification model using SageMaker's built-in algorithms. They need to convert raw text reviews into numerical features. Which SageMaker built-in algorithm should they use for text preprocessing?

A. BlazingText in Word2Vec mode
B. Object2Vec
C. SageMaker built-in TF-IDF transformer
D. Neural Topic Model

Answer: A

Hint: Think about which algorithm generates word embeddings that capture semantic meaning.

Explanation: BlazingText in Word2Vec mode generates dense word embeddings that capture semantic relationships between words. These embeddings can then be aggregated (averaged) to create document-level features for downstream classification. It's optimized for SageMaker and handles large vocabularies efficiently.

Why others wrong: Object2Vec embeds arbitrary pairs, not raw text; SageMaker doesn't have a built-in TF-IDF algorithm; Neural Topic Model discovers topics, not general-purpose text features.

Trap: Looking for a TF-IDF algorithm in SageMaker — it's not a built-in algorithm; use BlazingText for text vectorization instead.

Mnemonic: BlazingText = Blazing fast word embeddings in SageMaker

## Q14
Type: single
Difficulty: 1
Tags: data-formats, parquet
Concepts: columnar-storage
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

An ML team stores training data in CSV format on S3. Their SageMaker training jobs spend most of the time reading data rather than training. Which change would most improve data loading performance?

A. Compress the CSV files with gzip
B. Convert the data to Apache Parquet format
C. Move the data to Amazon EFS
D. Increase the instance size of the training job

Answer: B

Hint: Think about which file format allows reading only the columns needed and provides built-in compression.

Explanation: Parquet is a columnar storage format that enables efficient column pruning (reading only needed columns), provides built-in compression, and supports predicate pushdown. For ML workloads that typically read specific columns, Parquet dramatically reduces I/O compared to row-based CSV.

Why others wrong: Gzip compression helps but CSV still requires reading entire rows; EFS may introduce network latency; larger instances don't fix the I/O bottleneck.

Trap: Just compressing CSV — even compressed, CSV requires reading all columns in each row, while Parquet reads only what's needed.

Mnemonic: Parquet = Pick only the columns you need

## Q15
Type: single
Difficulty: 2
Tags: data-versioning, lineage
Concepts: data-lineage
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

A regulated financial institution requires full traceability from model predictions back to the exact training data and transformations used. Which combination provides this lineage?

A. S3 versioning + CloudTrail logs
B. SageMaker Experiments with SageMaker Lineage Tracking
C. AWS Config rules monitoring S3 changes
D. Manual documentation in a wiki

Answer: B

Hint: Think about which service automatically captures the relationships between data, code, parameters, and artifacts.

Explanation: SageMaker Experiments tracks trial components (datasets, algorithms, parameters, metrics) while Lineage Tracking automatically records relationships between artifacts, actions, and contexts. Together they provide an auditable graph from prediction back through model to training data.

Why others wrong: S3 versioning + CloudTrail shows file changes but not ML-specific lineage; Config monitors resource compliance, not ML workflows; manual documentation is error-prone and not auditable.

Trap: Relying on S3 versioning alone — it tracks file versions but not the ML-specific relationships between data, models, and predictions.

Mnemonic: Lineage = the family tree of your ML artifacts

## Q16
Type: single
Difficulty: 3
Tags: data-preparation, imbalanced
Concepts: class-imbalance
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

A fraud detection dataset has 0.1% positive cases (fraud) and 99.9% negative cases. A model trained on this data predicts all transactions as non-fraud and achieves 99.9% accuracy. Which combination of techniques would most improve fraud detection?

A. Oversample the minority class with SMOTE and use precision-recall AUC as the metric
B. Undersample the majority class randomly and use accuracy as the metric
C. Add more features and retrain with the same imbalanced distribution
D. Increase the model complexity by adding more layers

Answer: A

Hint: When the positive class is extremely rare, you need both a sampling strategy and an appropriate evaluation metric.

Explanation: SMOTE generates synthetic minority examples by interpolating between existing fraud cases, creating a more balanced training set. Precision-recall AUC (PR-AUC) is a better metric than accuracy for imbalanced datasets because it focuses on the model's ability to identify the rare positive class without being inflated by true negatives.

Why others wrong: Random undersampling discards valuable majority data; accuracy is misleading at 99.9% class imbalance; more features or complexity don't fix the fundamental class imbalance issue.

Trap: Celebrating 99.9% accuracy — a model that predicts everything as negative achieves this score, meaning it catches zero fraud.

Mnemonic: Imbalanced? SMOTE + PR-AUC, never accuracy

## Q17
Type: single
Difficulty: 2
Tags: data-preparation, pii
Concepts: data-anonymization
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

Before using customer data for ML training, a team must remove personally identifiable information (PII) while preserving the statistical properties of the dataset. Which approach is most appropriate?

A. Delete all columns that might contain PII
B. Use Amazon Macie to detect PII, then apply differential privacy techniques or tokenization
C. Encrypt the entire dataset with KMS
D. Store the data in a private S3 bucket with restricted access

Answer: B

Hint: You need to both find PII and transform it while keeping the data useful for ML.

Explanation: Macie automatically discovers and classifies PII in S3 data. After detection, applying differential privacy (adding calibrated noise) or tokenization (replacing PII with tokens) preserves statistical distributions for ML training while protecting individual privacy.

Why others wrong: Deleting columns loses valuable features; encryption protects at rest but doesn't anonymize for ML processing; access control protects storage but doesn't remove PII from the data itself.

Trap: Thinking encryption is anonymization — encrypted data must be decrypted for ML training, at which point PII is exposed.

Mnemonic: Macie finds it, differential privacy hides it

## Q18
Type: single
Difficulty: 1
Tags: data-ingestion, batch
Concepts: batch-processing
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

A retail company loads daily sales data from an on-premises database into S3 for ML training. The data transfer happens once per day during off-peak hours. Which AWS service should automate this recurring data movement?

A. AWS DataSync
B. AWS Transfer Family
C. AWS Database Migration Service (DMS)
D. Amazon Kinesis Data Firehose

Answer: C

Hint: Think about which service is purpose-built for ongoing database-to-AWS data replication.

Explanation: AWS DMS supports ongoing replication from on-premises databases to AWS targets including S3. It handles change data capture (CDC) for incremental loads, making it ideal for daily batch ingestion of database records into a data lake for ML training.

Why others wrong: DataSync is for file/storage migration, not database replication; Transfer Family is for SFTP/FTP file transfers; Kinesis Firehose is for streaming data, not scheduled database extraction.

Trap: Choosing DataSync — it moves files between storage systems but doesn't extract from relational databases.

Mnemonic: DMS = Database Migration Service, from DB to anywhere

## Q19
Type: single
Difficulty: 2
Tags: data-preparation, dimensionality
Concepts: dimensionality-reduction
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

A dataset has 500 numerical features, many of which are highly correlated. Training time is excessive and the model shows signs of overfitting. Which technique should be applied first?

A. Feature selection using L1 regularization (Lasso)
B. Principal Component Analysis (PCA) to reduce dimensions
C. Add polynomial features to capture interactions
D. Apply dropout regularization during training

Answer: B

Hint: When features are highly correlated, a technique that combines them into uncorrelated components reduces redundancy.

Explanation: PCA identifies principal components that capture maximum variance with minimum redundancy. Since many features are correlated, PCA effectively compresses them into fewer uncorrelated dimensions, reducing both training time and overfitting without requiring feature-by-feature selection.

Why others wrong: L1 regularization selects features but doesn't combine correlated ones; adding polynomial features increases dimensionality further; dropout is applied during training, not data preparation.

Trap: Adding more features with polynomial expansion — the problem is too many features, not too few interactions.

Mnemonic: Correlated features? PCA Compresses and Cleans

## Q20
Type: single
Difficulty: 3
Tags: data-preparation, rag, bedrock
Concepts: rag-data-preparation
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

A company is building a RAG-based application using Amazon Bedrock Knowledge Bases. Their internal documents include PDFs, Word files, and HTML pages totaling 10 GB. What is the correct data preparation workflow?

A. Convert all documents to plain text, concatenate into a single file, and upload to S3
B. Upload documents to S3, configure a Bedrock Knowledge Base with a chunking strategy, and let it handle parsing, chunking, and embedding automatically
C. Manually chunk documents into 512-token segments, generate embeddings using a local model, and upload vectors to OpenSearch
D. Store documents in DynamoDB and query them directly from the Bedrock agent

Answer: B

Hint: Bedrock Knowledge Bases handle the document processing pipeline end-to-end.

Explanation: Amazon Bedrock Knowledge Bases automatically parse multi-format documents, apply configurable chunking strategies (fixed-size, semantic, or hierarchical), generate embeddings using a chosen model, and store vectors in a managed vector store. This eliminates manual preprocessing.

Why others wrong: Concatenating into a single file loses document structure; manual chunking and embedding bypasses Bedrock's managed pipeline; DynamoDB is not a vector store and can't support semantic search.

Trap: Manually building the embedding pipeline — Bedrock Knowledge Bases automate parsing, chunking, embedding, and indexing.

Mnemonic: Bedrock KB = upload docs, it does the rest

## Q21
Type: single
Difficulty: 2
Tags: data-preparation, augmentation
Concepts: data-augmentation
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

A computer vision team has only 2,000 labeled medical images for a classification task. They need more training data but cannot obtain additional labeled samples due to privacy restrictions. Which approach should they take?

A. Use transfer learning from a pretrained model without any augmentation
B. Apply image augmentation techniques (rotation, flipping, cropping, color jittering) to increase the effective training set size
C. Generate synthetic medical images using a publicly available GAN model
D. Reduce the model size to match the small dataset

Answer: B

Hint: Augmentation creates valid variations of existing data without requiring new labeled samples.

Explanation: Image augmentation applies geometric and photometric transformations to existing images, creating valid variations that increase the effective dataset size. These transformations preserve the label (a rotated tumor is still a tumor) and improve model generalization by exposing it to more visual variations.

Why others wrong: Transfer learning helps but benefits further from augmentation; publicly available GANs may not produce medically accurate images; reducing model size doesn't address the data limitation.

Trap: Using public GANs for medical images — they may generate unrealistic artifacts that hurt model performance and raise compliance issues.

Mnemonic: Small data? Augment what you Already have

## Q22
Type: single
Difficulty: 2
Tags: data-preparation, embeddings, bedrock
Concepts: embedding-models
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

A team is preparing a vector database for semantic search. They need to generate embeddings for 1 million product descriptions. Which approach provides the best balance of quality and operational simplicity on AWS?

A. Deploy a Hugging Face embedding model on a SageMaker endpoint
B. Use Amazon Bedrock's Titan Embeddings model via the API
C. Use Word2Vec trained from scratch on the product corpus
D. Use TF-IDF vectors stored in Elasticsearch

Answer: B

Hint: Think about which option requires zero infrastructure management while providing high-quality embeddings.

Explanation: Amazon Bedrock's Titan Embeddings is a fully managed API that generates high-quality dense embeddings without deploying or managing any infrastructure. It handles scaling automatically and provides consistent, low-latency embeddings suitable for semantic search applications.

Why others wrong: SageMaker endpoint works but requires managing the deployment; Word2Vec from scratch needs significant training data and compute; TF-IDF produces sparse vectors that don't capture semantic meaning well.

Trap: Training Word2Vec from scratch — it requires a large corpus and produces lower-quality embeddings than pretrained transformer-based models.

Mnemonic: Bedrock Titan = Turnkey embeddings, zero ops

## Q23
Type: single
Difficulty: 1
Tags: data-formats, recordio
Concepts: sagemaker-data-formats
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

Which data format provides the fastest training performance for SageMaker's built-in algorithms when training on large datasets?

A. CSV
B. JSON
C. RecordIO-Protobuf
D. LibSVM

Answer: C

Hint: SageMaker built-in algorithms are optimized for a binary format that enables efficient streaming.

Explanation: RecordIO-Protobuf is a binary format optimized for SageMaker's built-in algorithms. It supports Pipe mode for streaming data directly from S3, reducing training startup time and memory usage compared to downloading entire CSV or JSON files.

Why others wrong: CSV requires parsing text to numbers; JSON adds overhead from key-value structure; LibSVM is supported but not as efficient as RecordIO-Protobuf.

Trap: Using CSV because it's familiar — for large-scale training, the binary RecordIO format significantly outperforms text-based formats.

Mnemonic: RecordIO + Pipe mode = Rapid training

## Q24
Type: single
Difficulty: 3
Tags: data-pipeline, drift
Concepts: data-drift-detection
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

After deploying a churn prediction model, the data team notices that the distribution of a key feature (average monthly spend) has shifted significantly from the training distribution. Which action should they take FIRST?

A. Immediately retrain the model on the latest data
B. Investigate the root cause of the distribution shift before deciding on corrective action
C. Remove the drifted feature and redeploy the model
D. Increase the model monitoring frequency

Answer: B

Hint: Understanding WHY the data changed is more important than reacting immediately.

Explanation: Distribution shifts can have multiple causes — seasonal changes, data pipeline bugs, business changes, or upstream system modifications. Investigating the root cause prevents incorrect responses: retraining on corrupted data or removing a feature that legitimately changed. Understanding the cause informs whether to retrain, fix the pipeline, or adjust the feature.

Why others wrong: Retraining immediately might train on corrupted data; removing the feature loses predictive power; increasing monitoring frequency detects but doesn't address the issue.

Trap: Immediately retraining — if the shift is caused by a pipeline bug, retraining incorporates the erroneous data.

Mnemonic: Drift detected? Diagnose first, then decide

## Q25
Type: single
Difficulty: 2
Tags: data-preparation, sampling
Concepts: stratified-sampling
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

A classification dataset has 5 classes with the following distribution: Class A (50%), Class B (25%), Class C (15%), Class D (7%), Class E (3%). When creating a validation set, which sampling strategy preserves the class distribution?

A. Random sampling
B. Stratified sampling
C. Systematic sampling at fixed intervals
D. Cluster sampling

Answer: B

Hint: Think about which method ensures each class is represented proportionally in the split.

Explanation: Stratified sampling ensures the validation set maintains the same class proportions as the original dataset. This is critical for multi-class problems where random sampling could under-represent minority classes (like Class E at 3%), leading to unreliable evaluation metrics.

Why others wrong: Random sampling may not preserve proportions, especially for small minority classes; systematic sampling doesn't consider class labels; cluster sampling selects groups, not proportional classes.

Trap: Assuming random sampling is always sufficient — with rare classes, random splits can miss them entirely in small validation sets.

Mnemonic: Stratified = Same proportions Spread to each split

## Q26
Type: single
Difficulty: 2
Tags: data-preparation, outliers
Concepts: outlier-handling
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

A sensor monitoring dataset contains occasional extreme readings caused by sensor malfunctions, not real events. These outliers are degrading model performance. Which approach handles this best while preserving legitimate extreme values?

A. Remove all data points beyond 2 standard deviations
B. Use domain knowledge to define valid sensor ranges and clip values outside those bounds
C. Apply log transformation to compress the entire range
D. Replace all outliers with the mean value

Answer: B

Hint: Domain expertise distinguishes between sensor errors and genuine extreme readings.

Explanation: Using domain-defined valid ranges (e.g., a temperature sensor can't read -500°C) precisely separates sensor malfunctions from legitimate extreme values. Clipping to physical bounds corrects erroneous readings while preserving real extreme events that may be important for the model.

Why others wrong: Statistical cutoffs (2σ) also remove legitimate extreme values; log transformation compresses all values, not just errors; mean replacement introduces artificial central tendency.

Trap: Using statistical thresholds blindly — they don't distinguish between real extreme values and sensor errors.

Mnemonic: Domain knowledge > statistical cutoffs for outlier handling

## Q27
Type: single
Difficulty: 1
Tags: data-preparation, wrangler
Concepts: data-wrangling
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

A data analyst with limited coding experience needs to explore, visualize, and transform tabular data for ML model training in SageMaker. Which tool provides a visual, low-code interface for this task?

A. SageMaker Studio Notebooks
B. SageMaker Data Wrangler
C. AWS Glue DataBrew
D. Amazon QuickSight

Answer: B

Hint: Think about which tool is integrated into SageMaker Studio and designed for ML data preparation.

Explanation: SageMaker Data Wrangler provides a visual interface within SageMaker Studio for importing, exploring, and transforming data without writing code. It offers 300+ built-in transformations and can export the workflow as a SageMaker Processing job or Pipeline step.

Why others wrong: Studio Notebooks require coding; Glue DataBrew is similar but not integrated with SageMaker's ML workflow; QuickSight is a BI dashboarding tool, not a data preparation tool.

Trap: Choosing Glue DataBrew — it's also visual and low-code, but Data Wrangler is tightly integrated with SageMaker for ML-specific workflows.

Mnemonic: Data Wrangler = Wrangle data Visually in SageMaker

## Q28
Type: single
Difficulty: 3
Tags: data-preparation, leakage
Concepts: data-leakage
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

A model predicting hospital readmission achieves 99% accuracy during development but performs at 60% accuracy in production. Investigation reveals that a feature "discharge_summary_sentiment" was computed using information that includes the readmission outcome. What type of problem is this?

A. Concept drift
B. Data leakage (target leakage)
C. Overfitting due to model complexity
D. Underfitting due to distribution mismatch

Answer: B

Hint: A feature derived from the target variable gives the model the answer during training.

Explanation: Target leakage occurs when a predictor feature contains information derived from or influenced by the target variable. The discharge summary sentiment likely reflects whether the patient was readmitted, making it a proxy for the label. This inflates training metrics but fails in production where the outcome is unknown.

Why others wrong: Concept drift is a temporal shift in the relationship between features and target; overfitting shows as poor generalization, not 99% dropping to 60%; underfitting would show poor performance during training too.

Trap: Attributing the performance drop to concept drift — the dramatic accuracy gap (99% → 60%) with a feature containing outcome information is classic target leakage.

Mnemonic: Feature knows the future? That's Leakage!

## Q29
Type: single
Difficulty: 2
Tags: data-preparation, feature-selection
Concepts: feature-importance
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

A model with 200 features is slow to train and shows signs of overfitting. Which approach efficiently identifies the most predictive features to keep?

A. Manually inspect each feature and remove those that seem irrelevant
B. Train a Random Forest model and rank features by importance scores, then select the top features
C. Apply PCA and use only the first two components
D. Remove features alphabetically until performance improves

Answer: B

Hint: Tree-based models naturally compute feature importance during training.

Explanation: Random Forest computes feature importance as the mean decrease in impurity (Gini importance) or permutation importance. Training a quick RF model and selecting the top-N features by importance provides a data-driven feature selection strategy that accounts for feature interactions.

Why others wrong: Manual inspection doesn't capture complex relationships; using only 2 PCA components likely loses too much information; alphabetical removal has no statistical basis.

Trap: Reducing to just 2 PCA components — extreme dimensionality reduction loses information; use feature importance to guide selective reduction.

Mnemonic: Random Forest = Rapid Feature ranking

## Q30
Type: single
Difficulty: 2
Tags: data-preparation, genai, prompt-dataset
Concepts: instruction-tuning-data
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

A team is preparing a dataset to fine-tune a foundation model on Amazon Bedrock for customer support. Which data format and preparation approach is correct?

A. Raw chat logs uploaded directly to S3 without any preprocessing
B. JSONL file with instruction-input-output pairs, cleaned of PII, with diverse examples covering edge cases
C. CSV file with two columns: question and answer
D. PDF documents of the customer support manual

Answer: B

Hint: Foundation model fine-tuning requires structured instruction-following examples in a specific format.

Explanation: Bedrock fine-tuning expects JSONL format with structured prompt-completion pairs. The data should be cleaned of PII, deduplicated, diverse in coverage, and include both common and edge cases. Quality of fine-tuning data directly impacts the model's performance on the target task.

Why others wrong: Raw logs contain noise, PII, and inconsistent formatting; CSV lacks the structured instruction format Bedrock expects; PDFs can't be directly used for fine-tuning.

Trap: Using raw chat logs — they contain noise, PII, and off-topic exchanges that degrade fine-tuning quality.

Mnemonic: Fine-tuning data = JSONL + clean + diverse + no PII

## Q31
Type: single
Difficulty: 1
Tags: data-storage, lake-formation
Concepts: data-governance
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

An organization needs to manage fine-grained access controls for their ML data lake, allowing different teams to access only specific tables and columns. Which AWS service provides this capability?

A. S3 bucket policies
B. AWS Lake Formation
C. IAM policies attached to each user
D. Amazon Macie

Answer: B

Hint: Think about which service provides column-level and row-level security for data lake tables.

Explanation: AWS Lake Formation provides centralized governance for data lakes, including fine-grained access control at the database, table, column, and row level. It integrates with the Glue Data Catalog and simplifies permission management across analytics and ML services.

Why others wrong: S3 bucket policies operate at the object level, not column level; IAM policies are too coarse for table/column access; Macie discovers sensitive data but doesn't enforce access controls.

Trap: Using S3 bucket policies — they control who accesses files, not who sees specific columns within those files.

Mnemonic: Lake Formation = Lake-level access control, Fine-grained

## Q32
Type: single
Difficulty: 2
Tags: data-preparation, normalization
Concepts: batch-normalization-data
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

A data scientist computes StandardScaler parameters (mean and standard deviation) on the entire dataset before splitting into train and test sets. Why is this problematic?

A. StandardScaler doesn't work with non-normal distributions
B. The test set statistics leak into the scaling parameters, causing overoptimistic evaluation
C. StandardScaler should only be applied to categorical features
D. Computing statistics on the full dataset is computationally expensive

Answer: B

Hint: Scaling parameters should only be computed from data the model is allowed to "see" during training.

Explanation: Computing mean and standard deviation on the full dataset includes test set information in the scaling transformation. This is a subtle form of data leakage — the model indirectly sees test data characteristics through the scaler's parameters, leading to overly optimistic evaluation metrics that don't reflect true generalization.

Why others wrong: StandardScaler works on any distribution; it applies to numerical features; computational cost is not the primary concern.

Trap: A common mistake even experienced practitioners make — always fit the scaler on training data only, then transform both train and test.

Mnemonic: Fit on train, Transform on both — never the reverse

## Q33
Type: single
Difficulty: 3
Tags: data-pipeline, feature-store, consistency
Concepts: training-serving-skew
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

A production ML system has different feature computation code in the training pipeline (PySpark in Glue) and the serving pipeline (Python in Lambda). After deployment, model accuracy is significantly lower than in offline evaluation. What is the most likely cause?

A. The model is overfitting to the training data
B. Training-serving skew caused by inconsistent feature computation logic
C. The Lambda function has insufficient memory
D. The Glue job is using outdated data

Answer: B

Hint: Different code computing the same features differently produces different inputs to the model.

Explanation: Training-serving skew occurs when features are computed differently in training vs. inference. Even subtle differences in rounding, null handling, or aggregation logic between PySpark and Python produce different feature values, causing the model to receive inputs that don't match what it was trained on.

Why others wrong: Overfitting shows as poor validation metrics, not a train-vs-production gap with different pipelines; Lambda memory issues cause timeouts, not accuracy drops; outdated data would affect both pipelines.

Trap: Blaming model quality when the real issue is feature computation inconsistency — always unify feature logic using Feature Store.

Mnemonic: Same features, same code, same results — break any link and accuracy breaks

## Q34
Type: single
Difficulty: 2
Tags: data-preparation, synthetic
Concepts: synthetic-data-generation
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

A healthcare startup needs training data for a disease prediction model but faces strict regulations preventing the use of real patient data for ML development. Which approach allows them to proceed?

A. Use de-identified public datasets from a different medical domain
B. Generate synthetic data that preserves statistical properties of the original dataset using differential privacy guarantees
C. Train the model on a completely random dataset
D. Use aggregate statistics without individual records

Answer: B

Hint: Synthetic data with privacy guarantees maintains utility while protecting patient privacy.

Explanation: Synthetic data generation with differential privacy creates realistic training data that preserves the statistical patterns and correlations of real patient data without exposing any individual's information. This satisfies regulatory requirements while providing useful training data.

Why others wrong: Public datasets from different domains may not match the target population; random data has no medical relevance; aggregate statistics can't train individual-level prediction models.

Trap: Using public medical datasets assuming they match your population — distribution differences between populations reduce model relevance.

Mnemonic: Synthetic + differential privacy = Safe data that works

## Q35
Type: single
Difficulty: 1
Tags: data-preparation, athena
Concepts: sql-data-exploration
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

A data scientist wants to quickly explore and profile data stored in S3 using SQL queries before deciding on feature engineering approaches. Which serverless service enables this without loading data into a database?

A. Amazon Athena
B. Amazon Redshift Serverless
C. Amazon RDS
D. Amazon Neptune

Answer: A

Hint: Think about which service queries data directly in S3 using standard SQL without any infrastructure.

Explanation: Amazon Athena is a serverless query service that runs SQL queries directly against data in S3. It requires no data loading or infrastructure management, making it ideal for ad-hoc exploration and profiling of ML datasets stored in the data lake.

Why others wrong: Redshift Serverless requires loading data into warehouse tables; RDS is a managed relational database; Neptune is a graph database.

Trap: Choosing Redshift because it's SQL — Athena queries S3 directly without loading, which is better for exploration.

Mnemonic: Athena = Ask S3 anything with SQL

## Q36
Type: single
Difficulty: 2
Tags: data-pipeline, genai, knowledge-base
Concepts: document-chunking
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

When configuring a Bedrock Knowledge Base for a RAG application, the retrieved chunks often lack sufficient context for accurate answers. The documents are long technical manuals with hierarchical section structure. Which chunking strategy should be used?

A. Fixed-size chunking with 200 tokens and no overlap
B. Hierarchical chunking that preserves parent-child section relationships with overlap
C. Sentence-level chunking
D. No chunking — index entire documents as single vectors

Answer: B

Hint: Technical manuals have natural section hierarchies that should be preserved in chunks.

Explanation: Hierarchical chunking preserves the document's section structure, maintaining parent-child relationships between headings and content. This provides richer context for retrieval — when a detailed paragraph is retrieved, its parent section heading and surrounding context are included, enabling more accurate answers.

Why others wrong: Fixed 200-token chunks without overlap break sections mid-sentence; sentence-level chunks are too small for technical content; whole-document indexing produces poor vector representations of specific topics.

Trap: Using small fixed-size chunks — they lose section context, forcing the LLM to answer without knowing which section the information belongs to.

Mnemonic: Hierarchical docs need Hierarchical chunks

## Q37
Type: single
Difficulty: 2
Tags: data-security, encryption
Concepts: data-encryption
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

An ML team needs to ensure that training data is encrypted both at rest in S3 and in transit to SageMaker training instances. Which configuration satisfies both requirements?

A. Enable S3 default encryption with SSE-S3 and use VPC endpoints for SageMaker
B. Enable S3 default encryption with SSE-KMS and enable inter-container traffic encryption in SageMaker training jobs
C. Use client-side encryption before uploading to S3 and disable VPC
D. Store data in an encrypted EBS volume attached to the training instance

Answer: B

Hint: You need encryption at rest (S3) and in transit (between S3 and SageMaker, and between training containers).

Explanation: SSE-KMS provides at-rest encryption with customer-managed keys for audit control. SageMaker's inter-container traffic encryption ensures data is encrypted in transit between distributed training instances. SageMaker also uses HTTPS for data transfer from S3, covering the full encryption requirement.

Why others wrong: SSE-S3 + VPC endpoint doesn't encrypt inter-container traffic; client-side encryption adds complexity and disabling VPC reduces security; EBS encryption doesn't cover S3 storage or transit.

Trap: Forgetting inter-container traffic — even if S3 is encrypted and HTTPS is used, data between distributed training containers needs explicit encryption.

Mnemonic: KMS at rest + inter-container in transit = fully encrypted ML

## Q38
Type: single
Difficulty: 3
Tags: data-preparation, feature-engineering, temporal
Concepts: temporal-features
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

A customer churn model uses behavioral features computed over different time windows (7-day, 30-day, 90-day). The team discovers that 90-day features have higher importance than 7-day features, but model latency requirements demand real-time inference. How should they architect the feature computation?

A. Compute all features in real-time at inference time using raw event data
B. Pre-compute long-window features (30-day, 90-day) in batch jobs and store in Feature Store's online store, compute 7-day features in real-time
C. Use only 7-day features to meet latency requirements, dropping 90-day features
D. Cache all feature combinations in DynamoDB for direct lookup

Answer: B

Hint: Long historical windows can't be computed in real-time efficiently, but they change slowly enough to pre-compute.

Explanation: A hybrid approach pre-computes slow-changing long-window features in batch (daily/hourly) and stores them in Feature Store's online store for low-latency lookup. Fast-changing short-window features are computed in real-time. This meets latency requirements while preserving the predictive power of 90-day features.

Why others wrong: Computing 90-day aggregates in real-time is too slow; dropping 90-day features loses the most important predictors; DynamoDB lookup works but doesn't address the computation architecture.

Trap: Dropping the most important features for latency — the hybrid approach keeps them while meeting real-time requirements.

Mnemonic: Slow features batch-computed, fast features real-time, Feature Store serves both

## Q39
Type: single
Difficulty: 1
Tags: data-formats, jsonl
Concepts: structured-data-formats
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

Which file format is required for fine-tuning foundation models on Amazon Bedrock?

A. CSV with header row
B. JSONL (JSON Lines) with prompt-completion pairs
C. Parquet with schema
D. XML with nested elements

Answer: B

Hint: Each training example is a self-contained JSON object on its own line.

Explanation: Amazon Bedrock requires JSONL format for fine-tuning, where each line is a valid JSON object containing the prompt and completion fields. JSONL allows efficient streaming of training examples and is the standard format for LLM fine-tuning across major platforms.

Why others wrong: CSV doesn't support the nested structure needed for prompts; Parquet is for tabular ML data; XML is overly verbose and not supported.

Trap: Using CSV because it's simpler — Bedrock specifically requires JSONL for fine-tuning data.

Mnemonic: Bedrock fine-tuning = JSONL, one example per line

## Q40
Type: single
Difficulty: 2
Tags: data-preparation, feature-engineering
Concepts: feature-crosses
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

A model predicting taxi trip duration uses pickup_location and time_of_day as separate features but isn't capturing that certain locations are congested only during rush hours. Which feature engineering technique would help?

A. Normalize both features independently
B. Create a feature cross combining pickup_location and time_of_day
C. Remove one of the two features to reduce correlation
D. Apply PCA to merge the two features

Answer: B

Hint: The relationship between location and congestion depends on the time of day — a feature interaction.

Explanation: A feature cross (interaction feature) combines pickup_location and time_of_day into a new feature that captures their joint effect. For example, "downtown_rush_hour" explicitly represents that downtown locations during 8-9 AM have different congestion patterns than downtown at 2 AM.

Why others wrong: Normalization doesn't create interactions; removing a feature loses information; PCA combines features linearly but doesn't capture specific location-time interactions.

Trap: Expecting the model to learn interactions implicitly — while deep models can, explicit feature crosses help all model types, especially linear and tree-based models.

Mnemonic: Feature cross = When the combination matters more than the parts

## Q41
Type: single
Difficulty: 2
Tags: data-pipeline, sagemaker-processing
Concepts: processing-jobs
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

A team needs to run a custom Python data preprocessing script on a large dataset before training. The script uses pandas and scikit-learn. They want a managed, scalable solution within SageMaker. Which approach should they use?

A. Run the script locally on their laptop and upload results to S3
B. Use a SageMaker Processing job with a scikit-learn container
C. Deploy the script as a SageMaker real-time endpoint
D. Run the script in a SageMaker notebook instance

Answer: B

Hint: Processing jobs provide managed compute for data preparation tasks with built-in container support.

Explanation: SageMaker Processing jobs run data preparation scripts on managed infrastructure with automatic scaling, built-in scikit-learn and Spark containers, and seamless S3 I/O. The job provisions compute, runs the script, saves outputs to S3, and terminates — no persistent infrastructure to manage.

Why others wrong: Local processing doesn't scale; endpoints are for inference, not batch processing; notebook instances are for development, not production data processing.

Trap: Running processing in a notebook — it works for prototyping but doesn't scale and ties up an expensive notebook instance.

Mnemonic: Processing job = Production-grade Preprocessing

## Q42
Type: single
Difficulty: 3
Tags: data-preparation, multimodal
Concepts: multimodal-data-prep
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

A team is building a multimodal product search system that uses both product images and text descriptions. They plan to use a Bedrock foundation model. How should they prepare the data for the multimodal embedding pipeline?

A. Encode images as base64 strings and concatenate with text descriptions in a single text field
B. Process images and text separately, generating embeddings from a multimodal model like Titan Multimodal Embeddings, and store combined vectors in a vector database
C. Convert images to text descriptions using OCR and use only text embeddings
D. Store images and text in separate databases with ID-based joins at query time

Answer: B

Hint: Multimodal models project different modalities into a shared embedding space.

Explanation: Titan Multimodal Embeddings generates vectors that map both images and text into a shared semantic space, enabling cross-modal search. The model processes each modality natively (pixel data for images, tokens for text) and produces comparable vectors stored in a single vector database for unified retrieval.

Why others wrong: Base64 encoding treats images as text, losing visual semantics; OCR misses visual features like color and style; separate databases with joins don't enable semantic cross-modal search.

Trap: Converting images to text with OCR — this captures text in images but loses visual characteristics like color, shape, and style that are essential for product search.

Mnemonic: Multimodal model = one shared space for images and text

## Q43
Type: single
Difficulty: 1
Tags: data-preparation, deduplication
Concepts: data-deduplication
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

A training dataset scraped from the web contains many near-duplicate records that could bias the model. Which technique identifies and removes near-duplicate text records?

A. Exact string matching and deletion
B. MinHash/LSH (Locality-Sensitive Hashing) for approximate deduplication
C. Sorting records alphabetically and removing adjacent duplicates
D. Randomly sampling 50% of the dataset

Answer: B

Hint: Near-duplicates aren't exact matches — you need approximate similarity detection.

Explanation: MinHash with Locality-Sensitive Hashing efficiently identifies near-duplicate text by computing approximate Jaccard similarity between documents. It scales to millions of documents and catches paraphrased or slightly modified duplicates that exact matching would miss.

Why others wrong: Exact matching misses near-duplicates with minor wording changes; alphabetical sorting doesn't group similar content; random sampling reduces data but doesn't target duplicates.

Trap: Using exact string matching — web-scraped data often contains paraphrased duplicates that differ in whitespace, punctuation, or minor wording.

Mnemonic: MinHash = Minimum effort, Maximum dedup detection

## Q44
Type: single
Difficulty: 2
Tags: data-preparation, target-encoding
Concepts: label-encoding-strategies
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

A regression model predicts house prices. One feature is "neighborhood" with 200 unique values. Using one-hot encoding creates sparse, high-dimensional data. Which alternative encoding preserves predictive signal while keeping dimensionality low?

A. Hash encoding to a fixed number of buckets
B. Target encoding using mean house price per neighborhood with regularization
C. Dropping the neighborhood feature entirely
D. Assigning sequential integers based on alphabetical order

Answer: B

Hint: The target variable itself can inform how categories are encoded for regression tasks.

Explanation: Target encoding replaces each neighborhood with the smoothed mean house price for that neighborhood. Regularization (blending with the global mean, especially for neighborhoods with few samples) prevents overfitting. This produces a single informative feature instead of 200 sparse columns.

Why others wrong: Hash encoding causes collisions that lose information; dropping the feature loses valuable location signal; alphabetical integers imply false ordinal relationships.

Trap: Not regularizing target encoding — without smoothing, rare neighborhoods overfit to their few observations.

Mnemonic: High cardinality + regression = Target encode with regularization

## Q45
Type: single
Difficulty: 2
Tags: data-pipeline, glue, catalog
Concepts: data-catalog
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

An ML team manages datasets across multiple S3 locations with different schemas. They need a centralized way to discover, search, and understand available datasets. Which AWS component provides this?

A. S3 Inventory reports
B. AWS Glue Data Catalog
C. Amazon CloudWatch Logs
D. AWS Systems Manager Parameter Store

Answer: B

Hint: Think about which component maintains metadata about datasets — schemas, partitions, and locations.

Explanation: The Glue Data Catalog is a centralized metadata repository that stores table definitions, schemas, partitions, and S3 locations. Crawlers automatically discover new data and update the catalog, making datasets searchable and queryable by ML teams across the organization.

Why others wrong: S3 Inventory lists objects but not schemas; CloudWatch logs runtime events; Parameter Store holds configuration, not dataset metadata.

Trap: Relying on S3 Inventory — it tells you what files exist but not what the data looks like (schema, types, partitions).

Mnemonic: Data Catalog = library catalog for your data lake

## Q46
Type: single
Difficulty: 3
Tags: data-preparation, class-weights
Concepts: cost-sensitive-learning
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

Instead of resampling an imbalanced dataset, a team wants to adjust the training process itself to handle class imbalance. Which SageMaker approach supports this without modifying the data?

A. Apply SMOTE before training and set equal class weights
B. Use the built-in XGBoost algorithm with the scale_pos_weight hyperparameter
C. Train multiple models on different random subsets and ensemble
D. Increase the number of training epochs

Answer: B

Hint: Some algorithms accept a parameter that weights the positive class differently during training.

Explanation: SageMaker's built-in XGBoost supports scale_pos_weight, which adjusts the gradient for positive examples. Setting it to the ratio of negative-to-positive examples makes the algorithm treat positive examples as more important, effectively handling imbalance without data modification.

Why others wrong: SMOTE modifies the data, not the training process; ensembling addresses variance but not systematic class imbalance; more epochs don't fix imbalanced loss gradients.

Trap: Combining SMOTE with scale_pos_weight — this double-compensates for imbalance and can degrade performance.

Mnemonic: scale_pos_weight = Scale up the importance of Positive examples

## Q47
Type: single
Difficulty: 2
Tags: data-pipeline, scheduling
Concepts: pipeline-scheduling
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

A data preparation pipeline must run daily to refresh training features. It consists of a Glue job, a SageMaker Processing job, and a Feature Store ingestion step. Which service provides the simplest scheduling and orchestration?

A. Amazon EventBridge Scheduler with Step Functions
B. Cron job on an EC2 instance
C. SageMaker Pipelines with a scheduled trigger
D. AWS Lambda with a CloudWatch Events rule calling each step sequentially

Answer: A

Hint: You need both scheduling (when to run) and orchestration (what steps to run in order).

Explanation: EventBridge Scheduler triggers Step Functions workflows on a cron schedule. Step Functions orchestrates the multi-step pipeline with built-in error handling, retries, and parallel execution support — combining scheduling and orchestration in a serverless, managed solution.

Why others wrong: EC2 cron jobs require instance management; SageMaker Pipelines is ML-focused and less flexible for Glue integration; Lambda-based sequential calling lacks proper error handling and orchestration.

Trap: Using SageMaker Pipelines for everything — it's optimized for ML workflows but less natural for mixed Glue + SageMaker pipelines.

Mnemonic: EventBridge schedules it, Step Functions runs it

## Q48
Type: single
Difficulty: 1
Tags: data-preparation, train-mode
Concepts: sagemaker-input-modes
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

A SageMaker training job on a 500 GB dataset takes 30 minutes to download data before training begins. Which input mode eliminates this download delay?

A. File mode with faster instance type
B. Pipe mode streaming data directly from S3
C. FastFile mode with prefetching
D. EFS mount mode

Answer: B

Hint: Instead of downloading first, stream the data as training progresses.

Explanation: Pipe mode streams data directly from S3 to the training algorithm, eliminating the upfront download. Training starts immediately as data is fed through a Unix pipe, and the instance doesn't need local storage for the full dataset — reducing both startup time and storage costs.

Why others wrong: File mode always downloads first regardless of instance type; FastFile improves File mode but still downloads; EFS adds network filesystem overhead.

Trap: Choosing FastFile thinking it eliminates download — it pre-fetches and caches but still downloads data to the instance.

Mnemonic: Pipe mode = data flows like water through a Pipe, no waiting

## Q49
Type: single
Difficulty: 2
Tags: data-preparation, text, tokenization
Concepts: tokenization-strategies
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

When fine-tuning a foundation model, a dataset's prompts consistently exceed the model's maximum token limit, causing truncation. Which data preparation approach best addresses this?

A. Increase the model's context window size
B. Summarize long prompts using a separate LLM before fine-tuning, preserving key information
C. Simply truncate from the end and accept information loss
D. Split each long prompt into multiple separate training examples without context

Answer: B

Hint: Preserve the essential information while fitting within the token limit.

Explanation: Using an LLM to intelligently summarize long prompts preserves the semantic content while fitting within token limits. This is superior to blind truncation which may cut critical information, and better than splitting which loses cross-segment context.

Why others wrong: You can't change a foundation model's context window; truncation loses potentially critical information at the end; splitting without context creates disconnected examples that confuse the model.

Trap: Simply truncating — if critical information is near the end of the prompt (like the actual question), truncation removes it entirely.

Mnemonic: Too long? Summarize smartly, don't truncate blindly

## Q50
Type: single
Difficulty: 3
Tags: data-pipeline, real-time, feature-computation
Concepts: streaming-features
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

A ride-sharing application needs to compute a "driver demand ratio" feature (requests / available drivers in a zone in the last 5 minutes) for a surge pricing model. The feature must be available for real-time inference. Which architecture computes this feature?

A. Batch job that queries the database every 5 minutes and writes to Feature Store
B. Kinesis Data Streams with a Kinesis Data Analytics (managed Flink) application computing sliding window aggregations, writing to Feature Store's online store
C. Lambda function triggered every 5 minutes that counts events in DynamoDB
D. CloudWatch metric aggregation with custom metrics

Answer: B

Hint: Sliding window aggregations over streaming data require a stream processing engine.

Explanation: Kinesis Data Analytics (Managed Apache Flink) provides real-time sliding window computations over streaming data. It continuously aggregates request and driver availability events over 5-minute windows, producing fresh demand ratios that are written to Feature Store's online store for real-time inference.

Why others wrong: Batch jobs have up to 5 minutes of staleness; Lambda every 5 minutes is point-in-time, not a true sliding window; CloudWatch metrics aren't designed for ML feature computation.

Trap: Using a batch job every 5 minutes — it gives point-in-time snapshots, not true sliding window aggregations, and has variable latency.

Mnemonic: Sliding windows = streaming engine (Flink), not batch polling

## Q51
Type: single
Difficulty: 2
Tags: data-preparation, data-quality
Concepts: data-validation
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

Before an automated retraining pipeline feeds new data to a model, the team wants to validate that the incoming data matches expected schema and statistical properties. Which approach provides automated data validation?

A. Manual review of data samples by a data engineer
B. AWS Glue Data Quality rules that validate schema, completeness, and statistical bounds
C. Running a training job and checking if it fails
D. Querying the data with Athena and manually inspecting results

Answer: B

Hint: Automated validation should check data BEFORE it reaches the training step.

Explanation: Glue Data Quality allows defining declarative rules for schema validation, column completeness, value ranges, and statistical properties. Rules run automatically as part of the data pipeline and can halt downstream processing when violations are detected, preventing bad data from reaching training.

Why others wrong: Manual review doesn't scale; letting training fail wastes compute and time; Athena queries require manual analysis.

Trap: Validating data by running training — by the time training fails, you've wasted compute and debugging time. Validate data before training.

Mnemonic: Validate early, fail fast — before training, not during

## Q52
Type: single
Difficulty: 1
Tags: data-preparation, sampling-bias
Concepts: selection-bias
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

A model trained to predict customer satisfaction uses survey responses as training data. However, only 10% of customers respond to surveys, and those who respond tend to have extreme opinions. What type of bias is present?

A. Label bias
B. Selection bias (non-response bias)
C. Measurement bias
D. Aggregation bias

Answer: B

Hint: The training data comes from a non-representative subset of the customer population.

Explanation: Selection bias occurs when the training data is not representative of the target population. Survey respondents with extreme opinions (very satisfied or very dissatisfied) are overrepresented, while the silent majority is missing, leading to a model that poorly predicts typical customer sentiment.

Why others wrong: Label bias means labels are systematically incorrect; measurement bias means the measurement tool is flawed; aggregation bias occurs when different groups are combined inappropriately.

Trap: Ignoring non-response bias because the survey data is "real" — real but non-representative data still produces biased models.

Mnemonic: Who answered? If not everyone equally, that's Selection bias

## Q53
Type: single
Difficulty: 2
Tags: data-preparation, genai, evaluation-dataset
Concepts: evaluation-data-prep
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

A team is preparing an evaluation dataset to measure the quality of a fine-tuned Bedrock model for legal document summarization. Which best practices should they follow?

A. Use the same data for fine-tuning and evaluation to ensure consistency
B. Create a held-out evaluation set with human-written reference summaries, diverse document types, and clear scoring rubrics
C. Evaluate using only automated metrics like BLEU without human judgment
D. Use a single long document as the evaluation benchmark

Answer: B

Hint: Evaluation data must be separate from training data and representative of real-world usage.

Explanation: A proper evaluation dataset is held out from fine-tuning, includes human-written reference summaries for comparison, covers diverse document types and lengths, and comes with clear scoring criteria. This enables both automated metrics and human evaluation to assess the model meaningfully.

Why others wrong: Using training data for evaluation causes data leakage; BLEU alone misses fluency, accuracy, and legal correctness; a single document doesn't test generalization.

Trap: Relying solely on BLEU score — it measures n-gram overlap but misses factual accuracy, legal correctness, and readability that matter for legal summaries.

Mnemonic: Evaluation = held-out + human references + diverse + clear rubrics

## Q54
Type: single
Difficulty: 3
Tags: data-pipeline, versioning
Concepts: dataset-versioning
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

A regulated ML team must reproduce any past model's results exactly, including the exact training data that was used. Their data changes daily. Which versioning strategy ensures full reproducibility?

A. Keep only the latest version of data in S3 with lifecycle rules deleting old versions
B. Use S3 versioning combined with SageMaker Experiments tracking the specific S3 version IDs used for each training run
C. Take weekly database snapshots and store in Glacier
D. Log the data counts and summary statistics for each training run

Answer: B

Hint: You need immutable data snapshots linked to each specific training run.

Explanation: S3 versioning preserves every version of every object. SageMaker Experiments records the exact S3 version IDs (or specific S3 URIs with version parameters) used in each training trial. Together, they enable exact reproduction of any historical training run with the precise data that was used.

Why others wrong: Deleting old versions prevents reproduction; weekly snapshots miss daily changes; summary statistics don't enable data-level reproduction.

Trap: Versioning data without linking versions to training runs — you need both the version and the record of which version was used where.

Mnemonic: Version the data + Link to the run = Perfect reproducibility

## Q55
Type: single
Difficulty: 2
Tags: data-preparation, geospatial
Concepts: geospatial-features
Domain: Domain 1 — Data Preparation for Machine Learning
DomainNumber: 1

A logistics optimization model needs location features derived from latitude/longitude coordinates. Raw coordinates are not useful features for tree-based models. Which transformation makes location data more useful?

A. Normalize latitude and longitude to [0,1] range
B. Use geohashing to convert coordinates into discrete spatial buckets and one-hot encode the buckets
C. Convert coordinates to string format
D. Drop location features as they add too much noise

Answer: B

Hint: Discretizing continuous coordinates into spatial regions creates meaningful categorical features.

Explanation: Geohashing maps latitude/longitude into hierarchical spatial cells (like "9q8yy"), grouping nearby locations together. Different precision levels create features at different spatial granularities. Tree-based models can then split on these discrete regions rather than trying to learn complex spatial boundaries from raw coordinates.

Why others wrong: Normalizing coordinates doesn't capture spatial proximity; string coordinates are not usable features; dropping location loses valuable spatial signal.

Trap: Using raw lat/lon in tree models — trees split on single thresholds, making it hard to learn complex spatial boundaries from two continuous coordinates.

Mnemonic: Geohash = Geography in a Hash, nearby places get similar codes

Now continuing with Domain 2 (Q56-Q106).

## Q56
Type: single
Difficulty: 1
Tags: model-development, algorithm-selection
Concepts: algorithm-selection
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A company needs to build a model that predicts customer churn (yes/no) based on 20 numerical and categorical features. They want fast training and interpretable results. Which SageMaker built-in algorithm is most appropriate?

A. DeepAR
B. XGBoost
C. Seq2Seq
D. Image Classification

Answer: B

Hint: Think about which algorithm excels at tabular classification with mixed feature types and provides feature importance.

Explanation: XGBoost is the go-to algorithm for tabular classification tasks. It handles mixed feature types (numerical and categorical), trains quickly, provides feature importance scores for interpretability, and consistently achieves strong performance on structured data classification problems.

Why others wrong: DeepAR is for time-series forecasting; Seq2Seq is for sequence translation; Image Classification is for computer vision.

Trap: Reaching for a neural network when the data is tabular — XGBoost is typically faster and more accurate on structured data.

Mnemonic: Tabular data? XGBoost eXcels

## Q57
Type: single
Difficulty: 2
Tags: model-development, hyperparameter-tuning
Concepts: hyperparameter-optimization
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A team is tuning a SageMaker XGBoost model with 8 hyperparameters. They have budget for 100 training jobs. Which tuning strategy explores the search space most efficiently?

A. Grid search over all parameter combinations
B. Bayesian optimization with SageMaker Automatic Model Tuning
C. Random search with uniform sampling
D. Manually adjusting one parameter at a time

Answer: B

Hint: Think about which strategy learns from previous trials to focus on promising regions.

Explanation: Bayesian optimization builds a probabilistic model of the objective function and uses it to select the most promising hyperparameter configurations to evaluate next. SageMaker Automatic Model Tuning implements this, typically finding better configurations in fewer trials than random or grid search.

Why others wrong: Grid search with 8 parameters is combinatorially explosive (far exceeds 100 jobs); random search doesn't learn from previous trials; manual tuning is slow and biased by human intuition.

Trap: Using grid search with many parameters — 8 parameters with just 3 values each requires 6,561 combinations, far exceeding the 100-job budget.

Mnemonic: Bayesian = uses Brain (past results) to pick next experiment

## Q58
Type: single
Difficulty: 2
Tags: model-development, training-instances
Concepts: instance-selection
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A deep learning model for natural language processing requires GPU acceleration during training. The training dataset fits in 16 GB of GPU memory. Which SageMaker instance type family is most cost-effective?

A. ml.m5 (general purpose CPU)
B. ml.p3 (NVIDIA V100 GPUs)
C. ml.g5 (NVIDIA A10G GPUs)
D. ml.p5 (NVIDIA H100 GPUs)

Answer: C

Hint: Consider which GPU instance provides sufficient compute at the lowest cost per GPU-hour for moderate workloads.

Explanation: The ml.g5 family with NVIDIA A10G GPUs provides excellent cost-performance for NLP training that fits in a single GPU. A10G GPUs have 24 GB memory (sufficient for 16 GB workloads), offer good throughput for transformer models, and cost significantly less per hour than P3 (V100) or P5 (H100) instances.

Why others wrong: M5 instances have no GPUs; P3 (V100) is more expensive and older; P5 (H100) is overkill for a workload that fits in 16 GB.

Trap: Choosing the most powerful GPU (P5/H100) — more powerful doesn't mean more cost-effective. Match the GPU to the workload.

Mnemonic: G5 = Good GPU, Great price for moderate training

## Q59
Type: single
Difficulty: 3
Tags: model-development, distributed-training
Concepts: data-parallelism
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A training job for a computer vision model on 1 TB of image data takes 24 hours on a single GPU instance. The team needs to reduce this to under 4 hours. Which SageMaker distributed training approach is appropriate?

A. Model parallelism across 8 instances
B. Data parallelism using SageMaker's distributed data parallel library across 8 GPU instances
C. Deploy 8 separate training jobs on different data splits and average the models
D. Use a larger single instance with more CPUs

Answer: B

Hint: When the model fits on a single GPU but the dataset is large, distributing data across GPUs accelerates training.

Explanation: Data parallelism replicates the model on each GPU and distributes the data across instances. SageMaker's distributed data parallel library optimizes gradient synchronization with AllReduce, achieving near-linear scaling. With 8 GPUs, the 24-hour job can complete in approximately 3 hours.

Why others wrong: Model parallelism splits the model, not the data — unnecessary when the model fits on one GPU; averaging separate models is not equivalent to distributed training; more CPUs don't help GPU-bound training.

Trap: Using model parallelism when the model fits on a single GPU — data parallelism is simpler and more efficient for this scenario.

Mnemonic: Model fits? Data parallel. Model too big? Model parallel.

## Q60
Type: single
Difficulty: 1
Tags: model-development, built-in
Concepts: sagemaker-algorithms
Domain: Domain 2 — ML Model Development
DomainNumber: 2

Which SageMaker built-in algorithm is specifically designed for time-series forecasting?

A. Random Cut Forest
B. DeepAR
C. Linear Learner
D. K-Nearest Neighbors

Answer: B

Hint: Think about which algorithm uses autoregressive recurrent networks for probabilistic forecasting.

Explanation: DeepAR is SageMaker's built-in algorithm for time-series forecasting. It uses autoregressive recurrent neural networks to produce probabilistic forecasts (point estimates plus confidence intervals) and can train on multiple related time series simultaneously.

Why others wrong: Random Cut Forest is for anomaly detection; Linear Learner is for classification/regression; KNN is for classification/regression based on neighbor similarity.

Trap: Using Random Cut Forest for forecasting — it detects anomalies in time-series but doesn't forecast future values.

Mnemonic: DeepAR = Deep AutoRegressive forecasting

## Q61
Type: single
Difficulty: 2
Tags: model-development, regularization
Concepts: overfitting-prevention
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A neural network model achieves 98% accuracy on training data but only 72% on validation data. Which combination of techniques should be applied to reduce this gap?

A. Increase the number of layers and neurons
B. Apply dropout, early stopping, and L2 regularization
C. Train for more epochs with a higher learning rate
D. Use a larger training dataset without any regularization

Answer: B

Hint: The large gap between training and validation accuracy indicates overfitting — you need to constrain the model.

Explanation: Dropout randomly disables neurons during training, forcing the network to learn redundant representations. Early stopping halts training when validation metrics plateau, preventing memorization. L2 regularization penalizes large weights, encouraging simpler models. Together, these techniques reduce overfitting from multiple angles.

Why others wrong: More layers increase model capacity and worsen overfitting; more epochs and higher learning rate intensify memorization; more data helps but not "without any regularization."

Trap: Adding model complexity to improve accuracy — the model is already too complex for the data (overfitting), not too simple.

Mnemonic: Train 98%, Val 72% = Overfitting. Drop, Stop, and Shrink weights.

## Q62
Type: single
Difficulty: 2
Tags: model-development, transfer-learning
Concepts: transfer-learning
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A team has only 500 labeled images for a product defect detection task. Training a model from scratch produces poor results. Which approach using SageMaker JumpStart would be most effective?

A. Train a simple logistic regression on pixel values
B. Fine-tune a pretrained image classification model from JumpStart on the 500 labeled images
C. Use unsupervised clustering on the images
D. Generate 10,000 synthetic images using random noise

Answer: B

Hint: Pretrained models already understand general image features — you only need to adapt them to your specific task.

Explanation: SageMaker JumpStart provides pretrained computer vision models (e.g., ResNet, EfficientNet) that learned general image features from millions of images. Fine-tuning these on 500 domain-specific images transfers this knowledge, requiring far fewer labeled examples than training from scratch.

Why others wrong: Logistic regression on pixels ignores spatial relationships; clustering doesn't use labels; random noise images have no relationship to real defects.

Trap: Training from scratch with only 500 images — deep models need thousands of examples from scratch, but fine-tuning pretrained models works well with hundreds.

Mnemonic: Few labels + JumpStart = Jump-start your training with transfer learning

## Q63
Type: single
Difficulty: 3
Tags: model-development, model-parallelism
Concepts: model-parallelism
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A team needs to train a 70-billion parameter LLM that cannot fit on a single GPU. SageMaker's model parallel library offers multiple sharding strategies. Which strategy partitions the model across GPUs most efficiently for LLM training?

A. Pipeline parallelism only, splitting the model into sequential stages
B. Tensor parallelism combined with pipeline parallelism (hybrid approach)
C. Data parallelism with gradient checkpointing
D. Train a smaller model that fits on one GPU

Answer: B

Hint: Large LLMs benefit from combining multiple parallelism strategies at different levels.

Explanation: Hybrid parallelism combines tensor parallelism (splitting individual layers' weight matrices across GPUs within a node for high-bandwidth communication) with pipeline parallelism (distributing layers across nodes). This minimizes communication overhead while handling models that exceed single-GPU memory, and is the standard approach for LLMs at 70B+ parameters.

Why others wrong: Pipeline parallelism alone has bubble overhead; data parallelism requires the full model to fit on each GPU; training a smaller model doesn't meet the requirement.

Trap: Using only data parallelism — it requires the full model on each GPU, which is impossible when the model exceeds GPU memory.

Mnemonic: 70B parameters = Tensor within node + Pipeline across nodes

## Q64
Type: single
Difficulty: 1
Tags: model-development, evaluation
Concepts: model-evaluation-metrics
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A binary classification model for cancer screening should minimize the chance of missing actual cancer cases. Which metric should be the primary optimization target?

A. Precision
B. Recall (sensitivity)
C. Accuracy
D. Specificity

Answer: B

Hint: Missing a cancer case (false negative) is more dangerous than a false alarm (false positive).

Explanation: Recall measures the proportion of actual positive cases correctly identified. For cancer screening, maximizing recall minimizes false negatives (missed cancer cases), which is critical because a missed diagnosis has far worse consequences than a false alarm that leads to additional testing.

Why others wrong: Precision minimizes false positives but may miss cases; accuracy is misleading with class imbalance; specificity focuses on correctly identifying negatives.

Trap: Optimizing accuracy when classes are imbalanced — a model predicting "no cancer" for everyone achieves high accuracy but zero recall.

Mnemonic: Recall = Remember all the real cases, don't miss any

## Q65
Type: single
Difficulty: 2
Tags: model-development, cross-validation
Concepts: cross-validation
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A team evaluates a model using a single train-test split and gets an F1 score of 0.85. They want a more reliable estimate. Which evaluation approach should they use?

A. Train on the full dataset and evaluate on the same data
B. K-fold cross-validation with k=5, reporting mean and standard deviation of F1
C. Increase the test set to 50% of the data
D. Run the same train-test split 5 times and average the results

Answer: B

Hint: Multiple different train-test splits provide a distribution of performance metrics.

Explanation: 5-fold cross-validation trains and evaluates the model 5 times, each time using a different 20% of data for testing. Reporting the mean and standard deviation of F1 shows both expected performance and its variability, providing a much more reliable estimate than any single split.

Why others wrong: Training and evaluating on the same data gives overly optimistic results; 50% test set wastes training data; repeating the same split produces the same result each time (no new information).

Trap: Running the same split multiple times — with a deterministic model, you get the exact same result every time. You need different splits.

Mnemonic: K-fold = K different views of your model's real performance

## Q66
Type: single
Difficulty: 2
Tags: model-development, sagemaker-experiments
Concepts: experiment-tracking
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A data scientist is testing multiple model architectures, hyperparameters, and feature sets. They need to compare experiments systematically and reproduce the best result. Which SageMaker feature supports this?

A. SageMaker Debugger
B. SageMaker Experiments
C. SageMaker Model Registry
D. SageMaker Autopilot

Answer: B

Hint: Think about which feature tracks and compares multiple trial runs across parameters and metrics.

Explanation: SageMaker Experiments organizes ML work into experiments, trials, and trial components. Each trial records hyperparameters, input data, metrics, and output artifacts, enabling systematic comparison and reproduction of any experimental run.

Why others wrong: Debugger monitors individual training jobs for issues; Model Registry manages model versions post-training; Autopilot automates the entire ML workflow but doesn't track manual experiments.

Trap: Confusing Experiments (tracking) with Autopilot (automation) — Experiments tracks your manual explorations, Autopilot does the exploration for you.

Mnemonic: Experiments = Experiment tracker, not experiment automator

## Q67
Type: single
Difficulty: 3
Tags: model-development, bedrock, fine-tuning
Concepts: fm-fine-tuning
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A company wants to fine-tune a Claude model on Amazon Bedrock to generate responses in their specific brand voice and domain terminology. They have 5,000 curated prompt-response pairs. Which approach should they take?

A. Fine-tune using continued pre-training on raw company documents
B. Use Bedrock's custom model training with the instruction-tuned fine-tuning approach on the curated JSONL dataset
C. Deploy an open-source model on SageMaker and fine-tune with LoRA
D. Add all company documents to a RAG knowledge base instead of fine-tuning

Answer: B

Hint: When you have curated prompt-response pairs and want to adjust model behavior, supervised fine-tuning is the right approach.

Explanation: Bedrock's supervised fine-tuning with instruction-tuned data (prompt-response pairs in JSONL) adapts the model's response style, tone, and domain knowledge. 5,000 high-quality examples is a strong dataset for teaching brand voice and terminology without losing the model's general capabilities.

Why others wrong: Continued pre-training requires massive unstructured data and adjusts knowledge, not style; SageMaker LoRA is viable but more operational overhead; RAG adds knowledge retrieval but doesn't change how the model writes.

Trap: Using RAG instead of fine-tuning — RAG provides facts, but fine-tuning changes the model's writing style and voice. For brand voice, you need fine-tuning.

Mnemonic: RAG = what the model knows, Fine-tuning = how the model talks

## Q68
Type: single
Difficulty: 2
Tags: model-development, autopilot
Concepts: automl
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A business analyst with no ML experience needs to build a predictive model from a CSV dataset. They need the best model selected automatically with explainability. Which SageMaker feature should they use?

A. SageMaker Studio Notebooks with manual coding
B. SageMaker Autopilot
C. SageMaker JumpStart
D. SageMaker Canvas

Answer: D

Hint: Think about which tool provides a completely no-code visual interface for building ML models.

Explanation: SageMaker Canvas provides a visual, no-code interface where business analysts can upload data, automatically build and compare models, and generate predictions — all without writing any code. It handles feature engineering, algorithm selection, and hyperparameter tuning automatically while providing explainability dashboards.

Why others wrong: Notebooks require coding; Autopilot requires API/CLI knowledge; JumpStart provides pretrained models but requires some ML knowledge.

Trap: Choosing Autopilot — it's also automated but requires programmatic interaction. Canvas is the true no-code experience for business users.

Mnemonic: Canvas = paint your ML model, no code needed

## Q69
Type: single
Difficulty: 2
Tags: model-development, loss-function
Concepts: loss-functions
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A regression model predicting delivery times needs to penalize underestimates (late deliveries) more heavily than overestimates (early deliveries). Which loss function should be used?

A. Mean Squared Error (MSE)
B. Mean Absolute Error (MAE)
C. Asymmetric quantile loss with a quantile > 0.5
D. Huber loss

Answer: C

Hint: You need a loss function that penalizes errors differently depending on their direction.

Explanation: Quantile loss with a quantile parameter above 0.5 (e.g., 0.8) penalizes underestimates more than overestimates. This produces predictions biased toward higher delivery times, reducing the frequency of late deliveries at the cost of some early predictions — matching the business requirement.

Why others wrong: MSE and MAE penalize overestimates and underestimates equally; Huber loss reduces outlier sensitivity but is still symmetric.

Trap: Using MSE because it's the default — symmetric losses treat late and early deliveries equally, which doesn't match business needs.

Mnemonic: Asymmetric cost? Asymmetric loss! Quantile > 0.5 = penalize under-prediction

## Q70
Type: single
Difficulty: 1
Tags: model-development, built-in, clustering
Concepts: unsupervised-learning
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A marketing team wants to segment customers into groups based on purchasing behavior without predefined labels. Which SageMaker built-in algorithm should they use?

A. XGBoost
B. K-Means
C. Linear Learner
D. Factorization Machines

Answer: B

Hint: Grouping data into clusters without labels is unsupervised learning.

Explanation: K-Means is SageMaker's built-in unsupervised clustering algorithm that groups similar data points together based on feature similarity. It automatically identifies natural customer segments without requiring predefined labels, making it ideal for customer segmentation.

Why others wrong: XGBoost requires labeled data; Linear Learner requires labels for classification/regression; Factorization Machines are for recommendation and classification with sparse data.

Trap: Using a supervised algorithm when you don't have labels — clustering is the right tool for discovering groups in unlabeled data.

Mnemonic: No labels? K-Means clusters for you

## Q71
Type: single
Difficulty: 2
Tags: model-development, warm-start
Concepts: warm-start-tuning
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A team has already run 50 hyperparameter tuning jobs for an XGBoost model. They now want to explore additional hyperparameter ranges. How can they build on previous results without starting over?

A. Manually copy the best configuration and start a new tuning job
B. Use warm start for hyperparameter tuning, referencing the previous tuning job as the parent
C. Train a single model with the best parameters from the previous run
D. Start a fresh tuning job with completely new ranges

Answer: B

Hint: Warm start transfers knowledge from previous tuning jobs to accelerate new exploration.

Explanation: SageMaker's warm start hyperparameter tuning uses results from parent tuning jobs to inform the Bayesian optimizer. It starts with knowledge of previously evaluated configurations, avoiding redundant exploration and converging to better configurations faster, even with modified parameter ranges.

Why others wrong: Manual copying doesn't leverage the Bayesian model; a single model misses potentially better configurations; starting fresh wastes the knowledge from 50 previous trials.

Trap: Starting from scratch each time — warm start preserves the optimizer's learned landscape, making subsequent rounds more efficient.

Mnemonic: Warm start = don't start cold, reuse what you already know

## Q72
Type: single
Difficulty: 3
Tags: model-development, gradient-accumulation
Concepts: memory-optimization
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A large-batch deep learning training job runs out of GPU memory. The team wants to simulate a larger batch size without increasing GPU memory usage. Which technique should they use?

A. Reduce model size by removing layers
B. Gradient accumulation to simulate larger batches over multiple forward-backward passes
C. Use CPU training instead of GPU
D. Reduce input resolution

Answer: B

Hint: Instead of processing a large batch at once, process smaller batches and accumulate their gradients.

Explanation: Gradient accumulation divides a large logical batch into smaller micro-batches. Each micro-batch performs a forward-backward pass and accumulates gradients without updating weights. After N micro-batches, gradients are averaged and weights updated, simulating the effect of a batch N times larger while using memory for only one micro-batch.

Why others wrong: Removing layers changes model architecture; CPU training is far slower; reducing resolution changes the input data.

Trap: Thinking you must reduce batch size — gradient accumulation gives you the benefit of large batches within the memory constraint of small batches.

Mnemonic: Accumulate gradients = big batch behavior, small batch memory

## Q73
Type: single
Difficulty: 2
Tags: model-development, ensemble
Concepts: model-ensembling
Domain: Domain 2 — ML Model Development
DomainNumber: 2

Three models for a classification task achieve individual accuracies of 82%, 84%, and 80%. The team wants to combine them for better performance. Which ensembling approach provides a simple, effective combination?

A. Use only the 84% accuracy model and discard the others
B. Weighted majority voting with weights proportional to individual model performance
C. Average the raw predictions without considering individual accuracy
D. Chain the models sequentially, feeding each model's output as input to the next

Answer: B

Hint: Give more influence to better-performing models when combining predictions.

Explanation: Weighted majority voting assigns higher weights to models with better individual performance. The 84% model gets the most influence, while the 80% model gets the least, producing ensemble predictions that leverage each model's strengths proportionally to their reliability.

Why others wrong: Discarding models wastes their complementary information; unweighted averaging treats a poor model equally with a good one; sequential chaining compounds errors rather than correcting them.

Trap: Equal-weight averaging — it doesn't account for quality differences between models. A bad model dilutes a good one.

Mnemonic: Better model? Bigger weight in the vote

## Q74
Type: single
Difficulty: 2
Tags: model-development, bedrock, agents
Concepts: bedrock-agents
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A team is building an AI agent on Amazon Bedrock that can look up order status, process returns, and recommend products. Which Bedrock feature enables the agent to take actions by calling external APIs?

A. Bedrock Knowledge Bases
B. Bedrock Agents with action groups
C. Bedrock Guardrails
D. Bedrock Model Evaluation

Answer: B

Hint: An agent needs the ability to decide which tool to use and execute API calls.

Explanation: Bedrock Agents use action groups to define the APIs and Lambda functions the agent can invoke. The agent autonomously decides which action to take based on the user's request, generates API parameters, calls the Lambda function, and returns the result — enabling multi-step task completion.

Why others wrong: Knowledge Bases provide RAG retrieval, not action execution; Guardrails filter content, not execute actions; Model Evaluation measures performance, not runtime behavior.

Trap: Confusing Knowledge Bases with Agents — Knowledge Bases retrieve information, Agents take actions. An agent can use a Knowledge Base as one of its tools.

Mnemonic: Agent = Acts on behalf of the user, Action groups = the tools it uses

## Q75
Type: single
Difficulty: 1
Tags: model-development, sagemaker-studio
Concepts: development-environment
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A data scientist needs an interactive development environment to prototype ML models, visualize data, and iterate quickly. Which SageMaker feature provides this?

A. SageMaker Training Jobs
B. SageMaker Studio Notebooks
C. SageMaker Batch Transform
D. SageMaker Processing Jobs

Answer: B

Hint: Jupyter notebooks are the standard interactive environment for ML prototyping.

Explanation: SageMaker Studio provides managed Jupyter notebooks with pre-installed ML frameworks, direct access to SageMaker features, and persistent storage. Data scientists can write code, visualize data, and experiment interactively before operationalizing their work as training jobs and pipelines.

Why others wrong: Training Jobs are for production training, not interactive development; Batch Transform is for batch inference; Processing Jobs run non-interactive scripts.

Trap: Jumping straight to Training Jobs — use notebooks for exploration and prototyping first, then move to Training Jobs for production.

Mnemonic: Studio = your ML Studio for prototyping

## Q76
Type: single
Difficulty: 3
Tags: model-development, learning-rate
Concepts: learning-rate-scheduling
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A deep learning model's training loss oscillates instead of converging. The team suspects the learning rate is too high for the later stages of training. Which technique addresses this while maintaining fast early convergence?

A. Use a constant low learning rate throughout training
B. Cosine annealing learning rate schedule that starts high and gradually decreases
C. Increase the learning rate when loss oscillates
D. Double the batch size when oscillation begins

Answer: B

Hint: Start fast for rapid initial progress, then slow down for fine convergence.

Explanation: Cosine annealing starts with a higher learning rate for fast initial convergence, then smoothly reduces it following a cosine curve. This allows large gradient steps early when the model is far from optimal, and smaller steps later for precise convergence — eliminating the oscillation caused by overshooting.

Why others wrong: A constant low rate converges slowly overall; increasing the learning rate worsens oscillation; doubling batch size reduces gradient noise but doesn't address the learning rate issue.

Trap: Using a constant learning rate — it's either too high (oscillation) or too low (slow convergence). Scheduling gives you both.

Mnemonic: Cosine annealing = Coast downhill smoothly, fast start → gentle landing

## Q77
Type: multi
Difficulty: 2
Tags: model-development, evaluation, regression
Concepts: regression-metrics
Domain: Domain 2 — ML Model Development
DomainNumber: 2

Which TWO metrics are most appropriate for evaluating a regression model predicting house prices? (Select TWO.)

A. F1 Score
B. Root Mean Squared Error (RMSE)
C. R-squared (coefficient of determination)
D. AUC-ROC

Answer: B, C

Hint: You need regression-specific metrics that measure prediction error magnitude and variance explained.

Explanation: RMSE measures the average magnitude of prediction errors in the same units as the target (dollars), making it interpretable. R-squared indicates the proportion of variance in house prices explained by the model (0 to 1 scale). Together, they provide complementary views of regression model quality.

Why others wrong: F1 Score is for classification (precision/recall balance); AUC-ROC is for binary classification ranking quality.

Trap: Using classification metrics for regression — F1 and AUC-ROC measure different things than RMSE and R².

Mnemonic: Regression = RMSE (how far off) + R² (how much explained)

## Q78
Type: single
Difficulty: 2
Tags: model-development, sagemaker-debugger
Concepts: training-debugging
Domain: Domain 2 — ML Model Development
DomainNumber: 2

During training, a deep learning model's gradients become extremely small, causing weights to stop updating. Which SageMaker Debugger rule would detect this issue?

A. LossNotDecreasing
B. VanishingGradient
C. Overfit
D. ClassImbalance

Answer: B

Hint: When gradients approach zero, a specific named rule detects this pathological condition.

Explanation: SageMaker Debugger's VanishingGradient rule monitors gradient magnitudes during training and fires an alert when they fall below a threshold. This enables early detection of vanishing gradients, which cause training to stall as weight updates become negligibly small.

Why others wrong: LossNotDecreasing detects plateaus but not the gradient cause; Overfit detects training-validation gaps; ClassImbalance checks data distribution, not training dynamics.

Trap: Using LossNotDecreasing — it tells you training stalled but not why. VanishingGradient identifies the root cause.

Mnemonic: Gradients Vanishing? VanishingGradient rule catches it

## Q79
Type: single
Difficulty: 2
Tags: model-development, bedrock, evaluation
Concepts: fm-evaluation
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A team needs to compare three foundation models on Amazon Bedrock for a summarization task. They have 200 human-annotated reference summaries. Which Bedrock feature enables systematic model comparison?

A. Bedrock Playground for manual testing
B. Bedrock Model Evaluation with automatic metrics and human evaluation workflows
C. Testing each model with a few prompts and subjective judgment
D. Bedrock Guardrails content filtering

Answer: B

Hint: Systematic comparison requires standardized evaluation across models using both automated metrics and human judgment.

Explanation: Bedrock Model Evaluation runs standardized evaluations across multiple models using both automatic metrics (ROUGE, BERTScore) and human evaluation workflows. With 200 reference summaries, it produces comparable scores for each model, enabling data-driven model selection.

Why others wrong: Playground is for ad-hoc testing, not systematic comparison; subjective judgment is biased and not reproducible; Guardrails filter content, not evaluate quality.

Trap: Manual playground testing with a few examples — it's biased by prompt selection and doesn't produce statistically meaningful comparisons.

Mnemonic: Model Evaluation = scientific model comparison, not vibes

## Q80
Type: single
Difficulty: 1
Tags: model-development, frameworks
Concepts: ml-frameworks
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A data scientist wants to use PyTorch to train a custom neural network on SageMaker. Which approach allows them to use their existing PyTorch training script?

A. Rewrite the code using SageMaker's built-in algorithms
B. Use the SageMaker PyTorch estimator with their training script
C. Install PyTorch manually on an EC2 instance
D. Convert the PyTorch model to TensorFlow first

Answer: B

Hint: SageMaker provides pre-built framework containers for popular ML libraries.

Explanation: The SageMaker PyTorch estimator provides a pre-built Docker container with PyTorch installed. Data scientists submit their existing training script with minimal modifications (adding argument parsing for hyperparameters and data paths), and SageMaker manages the infrastructure, training execution, and artifact storage.

Why others wrong: Rewriting to built-in algorithms is unnecessary; EC2 requires manual infrastructure management; converting frameworks is unnecessary and lossy.

Trap: Thinking you must use SageMaker's built-in algorithms — you can bring any PyTorch, TensorFlow, or custom framework code.

Mnemonic: BYOS = Bring Your Own Script to SageMaker

## Q81
Type: single
Difficulty: 3
Tags: model-development, mixed-precision
Concepts: mixed-precision-training
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A team wants to reduce training time for a large transformer model without changing the model architecture. Which technique uses lower numerical precision for most computations while maintaining model quality?

A. Quantization-aware training with INT8
B. Mixed precision training using FP16 for forward/backward passes with FP32 master weights
C. Converting all weights to FP8 permanently
D. Reducing the vocabulary size

Answer: B

Hint: Use faster, smaller numbers for computation while keeping a high-precision copy for accuracy.

Explanation: Mixed precision training performs forward and backward passes in FP16 (half precision), which is 2x faster on modern GPUs with tensor cores. FP32 master weights are maintained for gradient accumulation to prevent numerical underflow. Loss scaling prevents gradient underflow in FP16. This typically gives 1.5-3x speedup with negligible accuracy loss.

Why others wrong: INT8 quantization is for inference, not training; permanent FP8 conversion may degrade training quality; vocabulary reduction changes the model.

Trap: Converting everything to FP16 without master weights — FP16 accumulation can cause numerical issues. The key is FP16 compute + FP32 master weights.

Mnemonic: Mixed precision = FP16 speed + FP32 safety net

## Q82
Type: single
Difficulty: 2
Tags: model-development, bias, fairness
Concepts: model-fairness
Domain: Domain 2 — ML Model Development
DomainNumber: 2

After training a hiring recommendation model, the team discovers it predicts lower scores for applicants from certain demographic groups, even when qualifications are similar. Which SageMaker tool measures and reports this post-training bias?

A. SageMaker Data Wrangler
B. SageMaker Clarify post-training bias report
C. SageMaker Debugger
D. SageMaker Model Monitor

Answer: B

Hint: Measuring bias in model predictions (not just data) requires a post-training analysis tool.

Explanation: SageMaker Clarify generates post-training bias reports measuring metrics like Disparate Impact (DI), Conditional Demographic Disparity (CDD), and Treatment Equality across protected attributes. It compares model predictions across groups with similar qualifications, quantifying whether the model treats groups fairly.

Why others wrong: Data Wrangler prepares data; Debugger monitors training convergence; Model Monitor tracks production drift, not fairness metrics.

Trap: Using only pre-training bias detection — a balanced dataset can still produce a biased model if the algorithm amplifies subtle correlations.

Mnemonic: Clarify pre-training = data bias, Clarify post-training = model bias

## Q83
Type: single
Difficulty: 2
Tags: model-development, sagemaker-pipelines
Concepts: ml-pipeline
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A team wants to automate the entire ML workflow from data processing to model training, evaluation, and conditional registration. Which SageMaker feature provides this as a managed CI/CD pipeline for ML?

A. SageMaker Experiments
B. SageMaker Pipelines
C. AWS CodePipeline
D. AWS Step Functions

Answer: B

Hint: Think about which service is purpose-built for ML workflow orchestration within SageMaker.

Explanation: SageMaker Pipelines provides a purpose-built ML CI/CD pipeline with steps for processing, training, tuning, evaluation, and conditional model registration. It integrates natively with SageMaker features, tracks lineage, and supports conditional logic (e.g., only register models that meet accuracy thresholds).

Why others wrong: Experiments tracks individual trials, not automated pipelines; CodePipeline is for software CI/CD, not ML; Step Functions can orchestrate ML but lacks SageMaker-native integration.

Trap: Using AWS CodePipeline for ML — it works for software releases but doesn't understand ML-specific concepts like model evaluation and conditional registration.

Mnemonic: SageMaker Pipelines = CI/CD built for ML, not software

## Q84
Type: single
Difficulty: 3
Tags: model-development, rlhf
Concepts: reinforcement-learning-from-human-feedback
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A company fine-tuned a foundation model but finds it sometimes generates helpful but unsafe responses. They want to align the model to be both helpful and harmless. Which technique should they apply after supervised fine-tuning?

A. Continue supervised fine-tuning with more examples
B. Apply RLHF (Reinforcement Learning from Human Feedback) with a reward model trained on human preference data
C. Add output filtering as a post-processing step
D. Reduce the model's temperature parameter

Answer: B

Hint: Aligning a model's behavior to human values requires feedback-based optimization.

Explanation: RLHF trains a reward model from human comparisons of model outputs (which response is better/safer), then uses reinforcement learning (PPO) to optimize the language model against this reward signal. This fundamentally adjusts the model's generation policy to produce outputs that humans rate as both helpful and harmless.

Why others wrong: More SFT doesn't teach the model to distinguish helpful from harmful; output filtering is reactive, not preventive; lower temperature reduces diversity but doesn't change what the model considers good.

Trap: Relying on output filtering — it catches some harmful content but doesn't prevent the model from generating it in the first place.

Mnemonic: RLHF = Humans teach the model what "good" means

## Q85
Type: single
Difficulty: 2
Tags: model-development, feature-importance
Concepts: model-explainability
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A regulated financial institution needs to explain individual loan decisions to customers. Which explainability method provides per-prediction feature attributions?

A. Global feature importance from the model
B. SHAP (SHapley Additive exPlanations) values computed by SageMaker Clarify
C. Confusion matrix analysis
D. Learning curve plots

Answer: B

Hint: Individual predictions require local explanations, not just global feature rankings.

Explanation: SHAP values decompose each individual prediction into per-feature contributions, showing exactly how much each feature pushed the prediction toward approval or denial for that specific applicant. SageMaker Clarify computes SHAP values at scale for deployed models.

Why others wrong: Global importance shows overall feature ranking but not per-prediction breakdown; confusion matrix summarizes aggregate performance; learning curves show training progress.

Trap: Using global feature importance for individual explanations — "income is generally important" doesn't explain why THIS applicant was denied.

Mnemonic: SHAP = SHows how each feature shapes each prediction

## Q86
Type: single
Difficulty: 1
Tags: model-development, anomaly-detection
Concepts: anomaly-detection
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A manufacturing company wants to detect unusual patterns in sensor data that may indicate equipment failure. They have no labeled examples of failures. Which SageMaker built-in algorithm is designed for this?

A. XGBoost
B. Random Cut Forest
C. K-Means
D. Linear Learner

Answer: B

Hint: Detecting anomalies without labeled examples requires an unsupervised anomaly detection algorithm.

Explanation: Random Cut Forest (RCF) is SageMaker's built-in unsupervised anomaly detection algorithm. It assigns anomaly scores to data points based on how much they change the model's random cut forest structure — unusual points require fewer cuts to isolate and get higher scores.

Why others wrong: XGBoost requires labeled data; K-Means clusters data but doesn't score anomalies; Linear Learner is supervised.

Trap: Using K-Means and calling small clusters "anomalies" — K-Means doesn't provide anomaly scores and can group anomalies with normal data.

Mnemonic: Random Cut Forest = Random cuts to find the odd ones out

## Q87
Type: single
Difficulty: 2
Tags: model-development, nlp, comprehend
Concepts: nlp-services
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A team needs to extract named entities (people, organizations, dates) from customer support tickets. They want a solution that requires no ML expertise or model training. Which AWS service provides this out of the box?

A. Amazon Textract
B. Amazon Comprehend
C. Amazon Transcribe
D. SageMaker BlazingText

Answer: B

Hint: Think about which service provides pre-trained NLP capabilities including entity recognition.

Explanation: Amazon Comprehend is a fully managed NLP service that provides pre-trained models for named entity recognition, sentiment analysis, key phrase extraction, and language detection — all accessible via API with no ML expertise required.

Why others wrong: Textract extracts text from images/documents; Transcribe converts speech to text; BlazingText requires training your own model.

Trap: Using SageMaker to build a custom NER model when Comprehend already provides it — always check if a managed AI service exists before building custom.

Mnemonic: Comprehend = Comprehends text (entities, sentiment, key phrases)

## Q88
Type: single
Difficulty: 3
Tags: model-development, knowledge-distillation
Concepts: model-distillation
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A team has a large, accurate BERT model for text classification but needs a smaller model for edge deployment with strict latency requirements. Which technique creates a compact model that approximates the large model's behavior?

A. Prune random weights from the large model until it fits
B. Knowledge distillation where a smaller student model learns from the large teacher model's output distributions
C. Simply train a small model from scratch on the same data
D. Apply post-training quantization to INT4

Answer: B

Hint: A smaller model can learn more effectively from a larger model's "soft" outputs than from raw labels.

Explanation: Knowledge distillation trains a small "student" model to mimic the large "teacher" model's output probability distributions (soft labels), not just the hard labels. Soft labels contain richer information (inter-class similarities) than one-hot labels, enabling the student to achieve higher accuracy than training from scratch with the same architecture.

Why others wrong: Random pruning degrades performance unpredictably; training from scratch doesn't leverage the teacher's knowledge; INT4 quantization may cause unacceptable accuracy loss for text classification.

Trap: Training the small model from scratch — it uses the same data but misses the teacher's learned inter-class relationships encoded in soft probabilities.

Mnemonic: Distillation = distill the teacher's wisdom into a smaller student

## Q89
Type: single
Difficulty: 2
Tags: model-development, spot-instances
Concepts: cost-optimization-training
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A team wants to reduce SageMaker training costs by 60-90% for a job that takes 8 hours. They can tolerate occasional interruptions. Which feature enables this?

A. Reserved instances for SageMaker
B. SageMaker Managed Spot Training with checkpointing
C. Reduce the instance size to the smallest available
D. Run training only during off-peak hours

Answer: B

Hint: Spot instances are significantly cheaper but can be interrupted — checkpointing ensures no work is lost.

Explanation: SageMaker Managed Spot Training uses EC2 spot instances at up to 90% discount. Checkpointing saves training progress periodically to S3, so if a spot instance is interrupted, training resumes from the last checkpoint rather than restarting from scratch.

Why others wrong: SageMaker doesn't offer reserved instance pricing like EC2; smaller instances extend training time without proportional cost savings; off-peak pricing doesn't apply to SageMaker.

Trap: Using spot instances without checkpointing — an interruption after 7 hours of an 8-hour job means losing all progress and starting over.

Mnemonic: Spot + Checkpoint = Save money AND save progress

## Q90
Type: single
Difficulty: 2
Tags: model-development, genai, prompt-engineering
Concepts: prompt-engineering
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A foundation model on Bedrock is generating inconsistent JSON output for a data extraction task. Sometimes the output includes extra text or malformed JSON. Which prompt engineering technique most reliably ensures structured output?

A. Add "please output valid JSON" to the prompt
B. Provide few-shot examples of the exact JSON format expected, with clear delimiters and format instructions
C. Increase the model's temperature for more creative responses
D. Use a smaller model that generates less text

Answer: B

Hint: Showing the model exactly what you want with multiple examples is more effective than telling it.

Explanation: Few-shot prompting with concrete JSON examples demonstrates the exact output format expected. Clear delimiters (like "Output JSON only between ```json and ```") and multiple diverse examples condition the model to consistently produce the desired format, dramatically reducing malformed outputs.

Why others wrong: Vague instructions like "output valid JSON" are unreliable; higher temperature increases randomness and worsens consistency; smaller models may lack capability.

Trap: Relying on instructions alone — "output JSON" is ambiguous. Showing 3-4 examples of the exact format is far more reliable.

Mnemonic: Show, don't tell — examples beat instructions for format compliance

## Q91
Type: single
Difficulty: 1
Tags: model-development, model-registry
Concepts: model-versioning
Domain: Domain 2 — ML Model Development
DomainNumber: 2

After training multiple model versions, a team needs to manage model artifacts, track versions, and control which version is approved for production. Which SageMaker feature provides this?

A. SageMaker Experiments
B. SageMaker Model Registry
C. Amazon ECR
D. S3 versioning

Answer: B

Hint: Think about a centralized catalog for managing model versions with approval workflows.

Explanation: SageMaker Model Registry provides a centralized catalog for managing model versions with metadata, approval status (Pending/Approved/Rejected), and deployment tracking. It supports CI/CD integration, allowing automated promotion of approved models to production endpoints.

Why others wrong: Experiments tracks trials, not model versions; ECR stores container images; S3 versioning tracks files, not ML model metadata.

Trap: Using S3 versioning for model management — it stores model artifacts but lacks approval workflows, metadata, and deployment tracking.

Mnemonic: Model Registry = model version control with approval gates

## Q92
Type: single
Difficulty: 2
Tags: model-development, genai, guardrails
Concepts: content-filtering
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A customer-facing GenAI application on Bedrock must block toxic content, prevent personally identifiable information in responses, and reject off-topic prompts. Which Bedrock feature provides these safety controls?

A. Bedrock Agents
B. Bedrock Guardrails
C. Bedrock Knowledge Bases
D. Bedrock Custom Models

Answer: B

Hint: Think about which feature acts as a configurable safety layer around model interactions.

Explanation: Bedrock Guardrails provides configurable content filters for toxicity, PII detection and redaction, denied topic blocking, and word/phrase filters. Guardrails evaluate both user inputs and model outputs, applying policies consistently across all model interactions without modifying the model itself.

Why others wrong: Agents execute actions, not filter content; Knowledge Bases provide retrieval, not safety; Custom Models change the model, not the safety layer around it.

Trap: Building custom content filtering code — Guardrails provides a managed, configurable solution that's faster to implement and maintain.

Mnemonic: Guardrails = safety rails around your GenAI, like highway guardrails

## Q93
Type: single
Difficulty: 3
Tags: model-development, curriculum-learning
Concepts: training-strategies
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A team training a complex multi-class classification model notices that training converges slowly and the model struggles with difficult examples early on. Which training strategy gradually increases example difficulty?

A. Randomly shuffle the training data each epoch
B. Curriculum learning — present easy examples first, then progressively introduce harder ones
C. Train on only the hardest examples to focus learning
D. Duplicate difficult examples in the training set

Answer: B

Hint: Like human education, starting with basics before advanced topics helps the model learn more effectively.

Explanation: Curriculum learning orders training examples from easy to hard, allowing the model to learn basic patterns first before tackling challenging cases. This provides a more stable optimization landscape early in training, leading to faster convergence and often better final performance.

Why others wrong: Random shuffling doesn't leverage difficulty ordering; training only on hard examples overwhelms the model early; duplicating examples causes overfitting to specific cases.

Trap: Focusing exclusively on hard examples — the model needs to learn basic patterns first, just like students learn fundamentals before advanced topics.

Mnemonic: Curriculum = Easy first, Hard later, like school

## Q94
Type: single
Difficulty: 2
Tags: model-development, sagemaker-canvas
Concepts: no-code-ml
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A business analyst built a model in SageMaker Canvas and achieved acceptable accuracy. They now want to deploy it for real-time predictions accessible via API. Which option does Canvas provide?

A. Canvas models cannot be deployed — they must be rebuilt in SageMaker Studio
B. Canvas can deploy the model to a SageMaker real-time endpoint with one click
C. Canvas only supports batch predictions, not real-time
D. The model must be exported to a third-party platform for deployment

Answer: B

Hint: Canvas provides end-to-end ML capabilities including deployment.

Explanation: SageMaker Canvas allows one-click deployment of trained models to SageMaker real-time endpoints, making predictions available via API without requiring any coding. Business analysts can build, evaluate, and deploy models entirely within the Canvas visual interface.

Why others wrong: Canvas does support deployment; it supports both batch and real-time; no export to third-party platforms is needed.

Trap: Thinking Canvas is only for prototyping — it supports production deployment, enabling business users to go from data to deployed model without code.

Mnemonic: Canvas = Complete ML lifecycle, from data to deployment, no code

## Q95
Type: single
Difficulty: 2
Tags: model-development, llm, rag
Concepts: rag-architecture
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A company wants their Bedrock-powered chatbot to answer questions using internal company documentation that updates weekly. Should they fine-tune the model or use RAG?

A. Fine-tune the model weekly with the latest documentation
B. Use RAG with a Bedrock Knowledge Base connected to the documentation in S3
C. Provide all documentation in the system prompt
D. Train a custom model from scratch on company data

Answer: B

Hint: When knowledge changes frequently, the model's responses should reflect current information without retraining.

Explanation: RAG with Bedrock Knowledge Bases retrieves relevant documentation at query time, ensuring responses always reflect the latest content. The Knowledge Base automatically re-indexes when documents in S3 are updated, eliminating the need for model retraining. Fine-tuning is expensive, slow, and creates stale knowledge.

Why others wrong: Weekly fine-tuning is expensive and the model always lags behind; system prompt has a token limit and can't hold all documentation; training from scratch is unnecessary and expensive.

Trap: Fine-tuning for knowledge updates — fine-tuning changes HOW the model responds (style, format), RAG changes WHAT it knows (facts, data). For current information, use RAG.

Mnemonic: Knowledge changes? RAG. Style changes? Fine-tune.

## Q96
Type: single
Difficulty: 3
Tags: model-development, multi-task
Concepts: multi-task-learning
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A team has three related NLP tasks: sentiment classification, intent detection, and named entity recognition. They want a single model that handles all three tasks. Which approach should they use?

A. Train three separate models, one per task
B. Multi-task learning with a shared encoder and task-specific output heads
C. Train one model on sentiment, then fine-tune for intent, then for NER
D. Combine all labels into one classification task

Answer: B

Hint: Related tasks can share learned representations through a common backbone while having specialized outputs.

Explanation: Multi-task learning uses a shared transformer encoder that learns common language representations across all three tasks. Task-specific heads (classification layer for sentiment, sequence labeling for NER, etc.) produce task-appropriate outputs. Shared representations improve performance on each task through implicit data augmentation and regularization.

Why others wrong: Separate models miss shared knowledge; sequential fine-tuning causes catastrophic forgetting of earlier tasks; combining labels into one task loses task-specific structure.

Trap: Sequential fine-tuning (sentiment → intent → NER) — the model forgets earlier tasks as it learns new ones (catastrophic forgetting).

Mnemonic: Shared backbone + separate heads = one model, multiple talents

## Q97
Type: single
Difficulty: 2
Tags: model-development, agentic, tool-use
Concepts: agentic-ai
Domain: Domain 2 — ML Model Development
DomainNumber: 2

When designing a Bedrock Agent that handles customer requests requiring multiple steps (check inventory, calculate price, apply discount, confirm order), what determines the order of API calls?

A. The developer hardcodes the exact sequence of API calls
B. The foundation model's reasoning capability determines which actions to take and in what order based on the conversation
C. The actions are always executed in the order they appear in the action group definition
D. A separate rule engine orchestrates the sequence

Answer: B

Hint: Agentic AI means the model reasons about what actions to take.

Explanation: Bedrock Agents use the foundation model's reasoning to dynamically determine which action group APIs to call and in what sequence. The model analyzes the user's request, identifies required steps, executes them in a logical order, and handles intermediate results — all without hardcoded workflows.

Why others wrong: Hardcoded sequences don't adapt to varied requests; action group order is alphabetical by default, not execution order; no separate rule engine is needed.

Trap: Hardcoding action sequences — this works for simple flows but fails when customers have varied requests that require different action combinations.

Mnemonic: Agent = Autonomous reasoning about Actions, not scripted steps

## Q98
Type: single
Difficulty: 1
Tags: model-development, recommendation
Concepts: recommendation-systems
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A streaming service wants to recommend movies to users based on viewing history and user-item interactions. Which AWS service provides managed recommendation capabilities?

A. Amazon Rekognition
B. Amazon Personalize
C. Amazon Comprehend
D. SageMaker Factorization Machines

Answer: B

Hint: Think about which service is specifically designed for personalized recommendations.

Explanation: Amazon Personalize is a fully managed service that creates custom recommendation models using user interaction data. It handles feature engineering, model selection, training, and real-time recommendation serving — all without ML expertise. It supports use cases like "customers who watched X also watched Y."

Why others wrong: Rekognition is for image/video analysis; Comprehend is for NLP; Factorization Machines require building and managing the pipeline yourself.

Trap: Building a custom recommendation system with SageMaker when Amazon Personalize exists — always check managed services first.

Mnemonic: Personalize = Personalized recommendations, Personally managed by AWS

## Q99
Type: single
Difficulty: 2
Tags: model-development, genai, continued-pretraining
Concepts: continued-pretraining
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A company in the medical field wants to adapt a foundation model to understand specialized medical terminology and relationships not present in the model's general training data. They have 50 GB of medical textbooks and journals. Which approach is appropriate?

A. Supervised fine-tuning with prompt-response pairs
B. Continued pre-training on the medical corpus using Bedrock's custom model training
C. Add all medical texts to a RAG knowledge base
D. Create a medical terminology glossary in the system prompt

Answer: B

Hint: Teaching a model new domain knowledge requires exposure to large amounts of domain-specific text.

Explanation: Continued pre-training exposes the foundation model to domain-specific text in an unsupervised manner, updating its internal representations to understand medical terminology, relationships, and concepts. 50 GB of medical text is sufficient to significantly improve domain understanding, which can then be followed by supervised fine-tuning for specific tasks.

Why others wrong: SFT adjusts behavior, not domain knowledge; RAG retrieves facts but doesn't teach the model new concepts; system prompt has token limits and doesn't update the model.

Trap: Confusing fine-tuning with continued pre-training — fine-tuning teaches the model how to respond, continued pre-training teaches it new knowledge.

Mnemonic: New knowledge = continued pre-training. New behavior = fine-tuning.

## Q100
Type: single
Difficulty: 3
Tags: model-development, inference-optimization
Concepts: model-compilation
Domain: Domain 2 — ML Model Development
DomainNumber: 2

Before deploying a PyTorch model to a SageMaker endpoint, a team wants to optimize inference latency without changing the model architecture. Which SageMaker feature compiles the model for hardware-specific optimization?

A. SageMaker Debugger
B. SageMaker Neo compilation
C. SageMaker Clarify
D. SageMaker Model Monitor

Answer: B

Hint: Converting a model into an optimized format for specific hardware accelerates inference.

Explanation: SageMaker Neo compiles trained models into optimized machine code for specific target hardware (CPU, GPU, Inf2). The compilation applies hardware-specific optimizations like operator fusion, memory layout optimization, and kernel tuning, reducing inference latency by up to 2x without changing the model's behavior.

Why others wrong: Debugger monitors training; Clarify measures bias and explainability; Model Monitor tracks production performance.

Trap: Deploying an unoptimized model — Neo compilation is a simple step that can halve inference latency for free.

Mnemonic: Neo = New optimized execution for deployment

## Q101
Type: single
Difficulty: 2
Tags: model-development, genai, chain-of-thought
Concepts: reasoning-techniques
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A foundation model on Bedrock produces incorrect answers for multi-step reasoning tasks like math word problems. Which prompt engineering technique improves reasoning accuracy?

A. Reduce the prompt length to simplify the task
B. Add "Let's think step by step" to trigger chain-of-thought reasoning
C. Increase the model's max token output limit
D. Use a different model family

Answer: B

Hint: Encouraging the model to show its work improves accuracy on reasoning tasks.

Explanation: Chain-of-thought (CoT) prompting instructs the model to decompose complex problems into intermediate reasoning steps. By verbalizing its thought process, the model catches logical errors and maintains context across steps, significantly improving accuracy on math, logic, and multi-step reasoning tasks.

Why others wrong: Shorter prompts don't improve reasoning; more output tokens don't improve the reasoning process; different model families face the same challenge without CoT.

Trap: Increasing max tokens thinking the model needs more space — the issue is reasoning quality, not output length. CoT improves reasoning regardless of token limit.

Mnemonic: Chain-of-Thought = Chain of reasoning Steps, not a leap to the answer

## Q102
Type: single
Difficulty: 2
Tags: model-development, ab-testing
Concepts: model-comparison
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A team deployed a new model version and wants to compare it against the current production model using live traffic. Which SageMaker deployment feature enables this?

A. Blue-green deployment
B. SageMaker endpoint with production variants (A/B testing)
C. Shadow deployment
D. Canary deployment

Answer: B

Hint: You need two model versions serving live traffic simultaneously with configurable traffic splits.

Explanation: SageMaker endpoints support multiple production variants, each running a different model version with configurable traffic weights. This enables A/B testing by routing a percentage of live traffic to the new model while the rest goes to the current model, allowing statistical comparison of real-world performance.

Why others wrong: Blue-green switches all traffic at once, not a gradual comparison; shadow deployment duplicates traffic but doesn't serve responses from both; canary routes minimal traffic for safety, not balanced comparison.

Trap: Confusing A/B testing with canary deployment — canary checks for errors with minimal traffic, A/B testing compares performance with balanced traffic.

Mnemonic: Production variants = A gets some traffic, B gets the rest, compare results

## Q103
Type: single
Difficulty: 1
Tags: model-development, pretrained
Concepts: pretrained-models
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A team wants to quickly deploy a pretrained text summarization model without training anything. Which SageMaker feature provides one-click deployment of pretrained foundation models?

A. SageMaker Autopilot
B. SageMaker JumpStart
C. SageMaker Processing
D. SageMaker Ground Truth

Answer: B

Hint: Think about which feature provides a catalog of pretrained models ready for deployment.

Explanation: SageMaker JumpStart offers a curated catalog of pretrained foundation models and ML models that can be deployed to SageMaker endpoints with one click. It includes models for text, vision, and tabular tasks, along with fine-tuning notebooks for customization.

Why others wrong: Autopilot trains custom models from data; Processing runs data preparation scripts; Ground Truth labels data.

Trap: Training a model from scratch when JumpStart has a pretrained one ready — always check JumpStart before building from scratch.

Mnemonic: JumpStart = Jump past training, Start deploying immediately

## Q104
Type: single
Difficulty: 3
Tags: model-development, contrastive-learning
Concepts: representation-learning
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A team building a visual similarity search system needs to train an embedding model where similar products are close in embedding space and dissimilar products are far apart. Which training approach is most suitable?

A. Standard classification with softmax output
B. Contrastive learning with triplet loss (anchor-positive-negative pairs)
C. Autoencoder reconstruction loss
D. Mean squared error regression

Answer: B

Hint: Learning embeddings that reflect similarity requires a loss function that explicitly models relative distances.

Explanation: Contrastive learning with triplet loss optimizes embeddings so that an anchor is closer to a positive (similar product) than to a negative (dissimilar product) by a margin. This directly optimizes the embedding space for similarity search, producing embeddings where cosine similarity correlates with visual similarity.

Why others wrong: Classification learns decision boundaries, not embedding distances; autoencoder reconstruction doesn't optimize for similarity; MSE regression predicts values, not distances.

Trap: Using classification and taking the penultimate layer as embeddings — it works but isn't optimized for similarity search. Contrastive learning directly optimizes the metric space.

Mnemonic: Triplet loss = pull similar Together, push different apart

## Q105
Type: single
Difficulty: 2
Tags: model-development, inference, serverless
Concepts: serverless-inference
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A model receives sporadic traffic — sometimes 100 requests per hour, sometimes zero for hours. The team wants to minimize costs while maintaining reasonable response times. Which SageMaker inference option is best?

A. Real-time endpoint with auto-scaling
B. SageMaker Serverless Inference
C. Batch Transform
D. Asynchronous Inference

Answer: B

Hint: Sporadic traffic with idle periods means you're paying for unused infrastructure with always-on endpoints.

Explanation: SageMaker Serverless Inference automatically provisions compute when requests arrive and scales to zero when idle, eliminating costs during inactive periods. It handles variable traffic patterns efficiently, charging only for actual inference time rather than keeping an endpoint running.

Why others wrong: Real-time endpoints incur costs even when idle; Batch Transform is for bulk processing, not interactive requests; Async Inference is for long-running tasks, not standard requests.

Trap: Using a real-time endpoint with minimum instances — even with auto-scaling, you pay for at least one instance 24/7. Serverless scales to zero.

Mnemonic: Sporadic traffic? Serverless = pay only when serving

## Q106
Type: single
Difficulty: 2
Tags: model-development, genai, bedrock-playground
Concepts: model-testing
Domain: Domain 2 — ML Model Development
DomainNumber: 2

A team is evaluating different foundation models on Bedrock for a customer-facing chatbot. They want to test various prompts and compare response quality, latency, and cost across models before committing. Which Bedrock feature supports this iterative evaluation?

A. Bedrock Model Evaluation Jobs
B. Bedrock Playground (chat, text, image modes)
C. Bedrock Provisioned Throughput
D. Bedrock Custom Model Import

Answer: B

Hint: Interactive testing with different models and prompts before formal evaluation.

Explanation: Bedrock Playground provides an interactive interface to test prompts across different foundation models in real-time. Teams can compare response quality, adjust model parameters (temperature, top-p), and observe latency — all without writing code or deploying endpoints. It's the ideal tool for initial model exploration and prompt iteration.

Why others wrong: Model Evaluation Jobs are for systematic benchmarking with datasets, not interactive testing; Provisioned Throughput is for production capacity; Custom Model Import is for deploying custom models.

Trap: Jumping to formal Model Evaluation before exploring in Playground — start with interactive testing to narrow model candidates, then run formal evaluation.

Mnemonic: Playground = Play with models before you commit

Now continuing with Domain 3 (Q107-Q149).

## Q107
Type: single
Difficulty: 1
Tags: deployment, sagemaker-endpoint
Concepts: model-deployment
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

A team has a trained model artifact stored in S3 and needs to serve real-time predictions via an API. Which SageMaker feature creates a managed inference endpoint?

A. SageMaker Training Job
B. SageMaker Real-Time Inference Endpoint
C. SageMaker Processing Job
D. SageMaker Ground Truth

Answer: B

Hint: Think about which feature hosts a model and serves predictions via HTTPS.

Explanation: SageMaker Real-Time Inference Endpoints deploy a model behind a managed HTTPS endpoint. SageMaker handles the infrastructure, load balancing, and auto-scaling, while the endpoint accepts prediction requests and returns results with low latency.

Why others wrong: Training Jobs train models; Processing Jobs run data preparation; Ground Truth labels data.

Trap: Trying to serve predictions from a Training Job — training and serving are separate phases. Deploy the trained model to an endpoint for inference.

Mnemonic: Endpoint = the Exit point where predictions leave the model

## Q108
Type: single
Difficulty: 2
Tags: deployment, auto-scaling
Concepts: endpoint-scaling
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

A SageMaker endpoint handles variable traffic: 500 requests per second during business hours and 10 per second at night. Latency SLA is 200ms. Which auto-scaling configuration is most appropriate?

A. Fixed instance count based on peak traffic
B. Target-tracking scaling policy on the InvocationsPerInstance metric
C. Step scaling based on CPU utilization
D. Scheduled scaling with manual instance counts

Answer: B

Hint: Track the metric most directly related to inference workload per instance.

Explanation: Target-tracking on InvocationsPerInstance maintains a target number of invocations per instance, automatically adding instances when traffic increases and removing them when traffic decreases. This directly reflects the inference workload and keeps latency consistent as the endpoint scales.

Why others wrong: Fixed instances waste money during low traffic; CPU utilization doesn't directly reflect inference workload; scheduled scaling assumes predictable patterns and can't handle unexpected spikes.

Trap: Scaling on CPU utilization — ML inference may be GPU-bound, making CPU a poor scaling metric. InvocationsPerInstance directly measures workload.

Mnemonic: Target tracking on invocations = traffic-aware auto-scaling

## Q109
Type: single
Difficulty: 2
Tags: deployment, blue-green
Concepts: safe-deployment
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

A team needs to update a production model with zero downtime and the ability to instantly roll back if the new model underperforms. Which deployment strategy provides this?

A. In-place update of the existing endpoint
B. Blue-green deployment with SageMaker endpoint deployment guardrails
C. Delete the endpoint and create a new one
D. Deploy a new endpoint with a different name

Answer: B

Hint: Two environments (blue = current, green = new) allow instant switching between versions.

Explanation: SageMaker's blue-green deployment creates the new model variant alongside the existing one. Traffic is gradually shifted to the new variant with automatic rollback if CloudWatch alarms detect degradation. This provides zero-downtime updates with instant rollback capability.

Why others wrong: In-place updates cause downtime during model loading; deleting and recreating causes extended downtime; a different endpoint name requires client configuration changes.

Trap: In-place endpoint updates — they cause a brief period where the endpoint is unavailable while loading the new model. Blue-green avoids this entirely.

Mnemonic: Blue-green = two versions live, switch without downtime

## Q110
Type: single
Difficulty: 3
Tags: deployment, multi-model
Concepts: multi-model-endpoints
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

A SaaS company serves personalized models for 1,000 tenants. Each tenant has a small model (<100 MB). Deploying 1,000 separate endpoints is cost-prohibitive. Which SageMaker feature hosts all models on shared infrastructure?

A. Multi-variant endpoints
B. Multi-model endpoints (MME)
C. Serverless inference
D. Batch transform for each tenant

Answer: B

Hint: Multiple models sharing the same endpoint infrastructure, loaded on demand.

Explanation: SageMaker Multi-Model Endpoints host thousands of models on shared infrastructure. Models are loaded into memory on demand and cached. When a prediction request arrives for a specific tenant, the corresponding model is loaded (if not already cached) and serves the prediction, with least-recently-used eviction managing memory.

Why others wrong: Multi-variant is for A/B testing with a few variants, not thousands; serverless per model is still per-tenant; batch transform isn't real-time.

Trap: Confusing multi-variant (A/B testing 2-3 models) with multi-model (hosting 1,000+ models) — they serve different purposes.

Mnemonic: Multi-model = Many models, one endpoint, on-demand loading

## Q111
Type: single
Difficulty: 2
Tags: deployment, containerization
Concepts: custom-containers
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

A team needs to deploy a model that uses a custom inference library not available in SageMaker's pre-built containers. How should they proceed?

A. Install the library at runtime using pip in the inference script
B. Build a custom Docker container with the library, push to ECR, and use it for deployment
C. Only use SageMaker's pre-built containers — custom libraries aren't supported
D. Deploy the model on EC2 instead

Answer: B

Hint: SageMaker supports custom Docker containers for both training and inference.

Explanation: SageMaker allows custom Docker containers pushed to Amazon ECR. The container includes all required dependencies, the model serving logic, and any custom libraries. SageMaker launches this container on the inference endpoint, providing full flexibility while maintaining managed infrastructure benefits.

Why others wrong: Runtime pip installation is unreliable and adds startup latency; SageMaker fully supports custom containers; EC2 loses SageMaker's managed benefits.

Trap: Trying to pip install at runtime — it adds cold-start latency, may fail due to missing system libraries, and isn't reproducible. Bake dependencies into the container.

Mnemonic: Custom library? Custom container → ECR → SageMaker deploys it

## Q112
Type: single
Difficulty: 2
Tags: deployment, batch-transform
Concepts: batch-inference
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

A company needs to generate predictions for 10 million records stored in S3. The predictions are needed within 4 hours but don't require real-time response. Which SageMaker feature is most appropriate?

A. Real-time endpoint processing records one by one
B. SageMaker Batch Transform
C. SageMaker Async Inference
D. Lambda function calling a SageMaker endpoint in a loop

Answer: B

Hint: Bulk inference on stored data without a persistent endpoint.

Explanation: SageMaker Batch Transform provisions temporary infrastructure, processes the entire dataset from S3, writes predictions back to S3, and terminates. It automatically handles data splitting across instances, parallelization, and error recovery — ideal for large-scale one-time or periodic batch predictions.

Why others wrong: Real-time endpoints for 10M records is slow and expensive; Async Inference is for individual long-running requests; Lambda in a loop is fragile and expensive at scale.

Trap: Using a real-time endpoint for batch predictions — you pay for the endpoint continuously and must manage the orchestration of 10M individual calls.

Mnemonic: Batch Transform = Transform data in Batches, no persistent endpoint

## Q113
Type: single
Difficulty: 3
Tags: deployment, inference-pipeline
Concepts: inference-pipeline
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

An inference request requires three sequential steps: feature preprocessing (scikit-learn), prediction (XGBoost), and post-processing (custom Python). How should this multi-step inference be deployed on SageMaker?

A. Deploy three separate endpoints and chain them with Lambda
B. Use a SageMaker Inference Pipeline that chains multiple containers in sequence
C. Combine all logic into a single custom container
D. Run preprocessing in a Processing Job before calling the model endpoint

Answer: B

Hint: SageMaker supports chaining multiple containers in a single endpoint for multi-step inference.

Explanation: SageMaker Inference Pipelines chain up to 15 containers in sequence within a single endpoint. Each container performs one step (preprocessing, model inference, post-processing) and passes results to the next. This keeps the multi-step logic organized, independently updatable, and served from a single endpoint.

Why others wrong: Multiple endpoints add latency and operational complexity; a single container mixes concerns and makes updates harder; Processing Jobs add batch latency to real-time inference.

Trap: Combining everything in one container — it works but violates separation of concerns. If the preprocessor changes, you rebuild the entire container. Pipeline containers are independently updatable.

Mnemonic: Inference Pipeline = assembly line of containers, one endpoint

## Q114
Type: single
Difficulty: 2
Tags: deployment, edge
Concepts: edge-deployment
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

A manufacturing company needs to run ML inference on factory floor devices with no internet connectivity. The model must make predictions locally with sub-10ms latency. Which approach enables this?

A. Call a SageMaker endpoint over the internet
B. Compile the model with SageMaker Neo and deploy to edge devices using SageMaker Edge Manager
C. Run batch predictions nightly and cache results on the device
D. Deploy the model on a local server in the factory

Answer: B

Hint: Edge deployment requires compiling the model for the specific device hardware and managing it remotely.

Explanation: SageMaker Neo compiles the model for the target edge hardware (ARM, x86, GPU), and Edge Manager packages, deploys, monitors, and manages models on edge devices. Inference runs locally on the device without internet connectivity, meeting the sub-10ms latency requirement.

Why others wrong: Cloud endpoints require internet and add network latency; batch predictions don't support real-time factory operations; a local server works but lacks fleet management.

Trap: Deploying to a local server without Neo compilation — the model runs but isn't optimized for the device hardware, potentially missing the latency target.

Mnemonic: Neo compiles + Edge Manager deploys = ML at the Edge

## Q115
Type: single
Difficulty: 1
Tags: deployment, model-artifacts
Concepts: model-packaging
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

After training a model in SageMaker, where are the trained model artifacts stored?

A. In the SageMaker notebook's local storage
B. In an S3 bucket specified in the training job configuration
C. In Amazon DynamoDB
D. In the SageMaker Model Registry only

Answer: B

Hint: SageMaker persists all training outputs to durable object storage.

Explanation: SageMaker training jobs save model artifacts (model.tar.gz) to a specified S3 location upon completion. This S3 URI is used when creating a SageMaker model for deployment. The artifact contains the serialized model, any custom inference code, and configuration files.

Why others wrong: Notebook local storage is ephemeral; DynamoDB stores structured data, not model files; Model Registry references S3 artifacts but doesn't store them.

Trap: Assuming model artifacts are in the Model Registry — the registry stores metadata and the S3 URI, not the actual model file.

Mnemonic: Training output → S3, always. S3 URI → everywhere else.

## Q116
Type: single
Difficulty: 2
Tags: deployment, ci-cd
Concepts: mlops-pipeline
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

A team wants to automatically deploy a new model version to production whenever it's approved in the Model Registry. Which AWS service orchestrates this deployment automation?

A. SageMaker Experiments
B. AWS CodePipeline triggered by a Model Registry approval event via EventBridge
C. Manual deployment by an engineer
D. SageMaker Autopilot

Answer: B

Hint: Model approval events can trigger automated deployment pipelines.

Explanation: When a model is approved in the SageMaker Model Registry, an EventBridge event is emitted. This event triggers a CodePipeline that automates the deployment steps: creating the SageMaker model, updating the endpoint configuration, and performing blue-green deployment with canary analysis.

Why others wrong: Experiments tracks trials, not deployment; manual deployment doesn't automate; Autopilot trains models, not deploys them.

Trap: Manual deployment after approval — it works but introduces delays and human error. Event-driven automation ensures consistent, immediate deployment.

Mnemonic: Approved in Registry → EventBridge → CodePipeline → deployed to production

## Q117
Type: single
Difficulty: 3
Tags: deployment, shadow
Concepts: shadow-deployment
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

Before routing any live traffic to a new model version, a team wants to validate it against production traffic without affecting user experience. Which deployment strategy achieves this?

A. Canary deployment with 1% traffic
B. Shadow deployment that mirrors production traffic to the new model without returning its responses
C. A/B testing with 50/50 split
D. Deploy to a staging environment with synthetic data

Answer: B

Hint: You want to test the new model with real traffic patterns without any risk to production users.

Explanation: Shadow deployment mirrors all production traffic to the new model in parallel, but only returns responses from the current production model to users. The shadow model's predictions are logged for offline comparison, enabling validation against real-world traffic patterns without any risk to user experience.

Why others wrong: Canary deployment does serve the new model's responses to some users; A/B testing exposes half of users to the new model; staging with synthetic data doesn't reflect real traffic patterns.

Trap: Canary deployment for zero-risk validation — even 1% traffic serves real users the new model's responses. Shadow deployment has zero user impact.

Mnemonic: Shadow = model in the shadows, sees everything, serves nothing

## Q118
Type: single
Difficulty: 2
Tags: deployment, step-functions
Concepts: workflow-orchestration
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

An ML workflow requires: run data validation → if data is valid, trigger training → evaluate the model → if accuracy > 0.90, deploy; otherwise, send notification. Which service orchestrates this conditional, multi-step workflow?

A. SageMaker Pipelines
B. AWS Step Functions
C. Amazon EventBridge
D. AWS Lambda chaining

Answer: A

Hint: This is a classic ML workflow with training, evaluation, and conditional deployment — which SageMaker feature handles this natively?

Explanation: SageMaker Pipelines is purpose-built for ML workflows with native steps for processing, training, evaluation, and conditional logic. It supports ConditionStep to check metrics (accuracy > 0.90) and branch to deployment or notification, all with integrated lineage tracking and visualization.

Why others wrong: Step Functions works but lacks SageMaker-native integration; EventBridge triggers events but doesn't orchestrate multi-step flows; Lambda chaining is fragile without proper orchestration.

Trap: Using Step Functions for ML-specific workflows — while it works, SageMaker Pipelines provides tighter integration with training, evaluation, and model registration steps.

Mnemonic: SageMaker Pipelines = ML-native workflow, from data to deployment

## Q119
Type: single
Difficulty: 2
Tags: deployment, async
Concepts: async-inference
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

A model generates 30-second videos from text descriptions. The inference time is 3-5 minutes per request, far exceeding API gateway timeout limits. Which SageMaker inference option handles long-running predictions?

A. Real-time endpoint with extended timeout
B. SageMaker Asynchronous Inference
C. Lambda function with 15-minute timeout
D. Batch Transform

Answer: B

Hint: When inference takes minutes, the client can't wait — submit the request and poll for the result.

Explanation: SageMaker Async Inference accepts requests, queues them, and processes them asynchronously. Results are stored in S3, and clients are notified via SNS when processing completes. It supports inference times up to 60 minutes and can scale to zero when the queue is empty.

Why others wrong: Real-time endpoints timeout at 60 seconds by default; Lambda has a 15-minute timeout but isn't designed for ML inference; Batch Transform is for bulk processing, not individual interactive requests.

Trap: Using real-time inference for long-running tasks — API gateway timeouts and client connection limits make synchronous calls fail for multi-minute inference.

Mnemonic: Async = Ask now, Answer later, no timeout worries

## Q120
Type: single
Difficulty: 1
Tags: deployment, endpoint-config
Concepts: endpoint-configuration
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

When creating a SageMaker endpoint, what does the endpoint configuration specify?

A. The training hyperparameters used to create the model
B. The model to deploy, instance type, instance count, and variant weights
C. The S3 location of the training data
D. The IAM role for the training job

Answer: B

Hint: The endpoint configuration defines HOW the model is hosted — on what hardware and how many instances.

Explanation: The endpoint configuration specifies which SageMaker model(s) to deploy, the instance type and count for each variant, traffic distribution weights for A/B testing, and other serving parameters. It's the blueprint for how the endpoint is provisioned.

Why others wrong: Training hyperparameters are part of the training job; training data location is a training job input; IAM roles for training are separate from inference roles.

Trap: Confusing training configuration with endpoint configuration — they're separate. Training defines how to build the model; endpoint config defines how to serve it.

Mnemonic: Endpoint config = What model + What hardware + How many instances

## Q121
Type: single
Difficulty: 3
Tags: deployment, inference-accelerators
Concepts: hardware-optimization
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

A team deploys a large language model for inference and wants to maximize throughput while minimizing cost per token. Which AWS chip is purpose-built for high-throughput, cost-efficient ML inference?

A. NVIDIA A100 GPU
B. AWS Inferentia2 (Inf2 instances)
C. Intel Xeon CPU
D. AWS Graviton processor

Answer: B

Hint: AWS designed a custom chip specifically optimized for ML inference workloads.

Explanation: AWS Inferentia2 is a custom ML chip designed for high-throughput, low-cost inference. Inf2 instances deliver up to 4x higher throughput and up to 10x lower cost per inference compared to comparable GPU instances for supported models. The AWS Neuron SDK compiles models to run on Inferentia.

Why others wrong: A100 GPUs are powerful but more expensive per inference; Xeon CPUs are too slow for large models; Graviton is a general-purpose ARM processor, not ML-optimized.

Trap: Defaulting to NVIDIA GPUs for all inference — Inferentia2 is more cost-efficient for production inference workloads that have been compiled with Neuron.

Mnemonic: Inferentia = Inference-specific chip, INFerior cost

## Q122
Type: single
Difficulty: 2
Tags: deployment, model-compression
Concepts: model-optimization
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

Before deploying a model to a resource-constrained environment, a team needs to reduce model size by 4x while maintaining acceptable accuracy. Which technique achieves this?

A. Training a larger model to improve accuracy
B. Post-training quantization from FP32 to INT8
C. Adding more layers to the model
D. Increasing batch size during inference

Answer: B

Hint: Reducing numerical precision reduces model size proportionally.

Explanation: Post-training quantization converts FP32 weights (32 bits) to INT8 (8 bits), reducing model size by approximately 4x. For many models, the accuracy loss is minimal (typically <1%). SageMaker Neo can apply this quantization automatically during compilation.

Why others wrong: Larger models increase size; more layers increase size; batch size doesn't affect model size.

Trap: Fearing significant accuracy loss — modern quantization techniques preserve accuracy remarkably well for most model types.

Mnemonic: FP32 → INT8 = 4x smaller, nearly the same accuracy

## Q123
Type: single
Difficulty: 2
Tags: deployment, sagemaker-pipelines
Concepts: pipeline-steps
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

In a SageMaker Pipeline, a model should only be registered if the evaluation step shows RMSE < 5.0. Which pipeline component implements this conditional logic?

A. ProcessingStep
B. ConditionStep with a JsonGet condition
C. TrainingStep with a custom callback
D. LambdaStep with if/else logic

Answer: B

Hint: SageMaker Pipelines has a native step type for conditional branching based on metric values.

Explanation: ConditionStep evaluates conditions on pipeline parameters or step outputs (like evaluation metrics from a JsonGet expression). If RMSE < 5.0, the pipeline proceeds to the RegisterModel step; otherwise, it branches to a notification or retry step.

Why others wrong: ProcessingStep runs data processing, not conditions; TrainingStep trains models, not evaluates conditions; LambdaStep could implement logic but ConditionStep is the native, recommended approach.

Trap: Building conditional logic in a Lambda function — SageMaker Pipelines provides ConditionStep specifically for this purpose, with built-in visualization and tracking.

Mnemonic: ConditionStep = if-else in your ML pipeline

## Q124
Type: single
Difficulty: 3
Tags: deployment, model-serving, latency
Concepts: inference-latency-optimization
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

A deployed model's P99 latency exceeds the 100ms SLA. Analysis shows the bottleneck is model loading time when new instances are added during auto-scaling. Which approach reduces this cold-start latency?

A. Increase the maximum instance count
B. Configure a minimum instance count and enable model warming with SageMaker's pre-scaling
C. Reduce the model size
D. Switch to batch inference

Answer: B

Hint: Cold start occurs when new instances need to load the model — preventing this requires instances to be ready in advance.

Explanation: Setting a minimum instance count ensures instances are always warm with the model loaded. Combined with pre-scaling policies that add instances before traffic peaks (based on predicted patterns), this eliminates cold-start latency spikes. The model is pre-loaded on standby instances.

Why others wrong: More maximum instances don't help — the problem is startup time, not capacity; reducing model size helps but may not be enough; batch inference changes the use case entirely.

Trap: Relying only on auto-scaling to handle traffic spikes — scaling up triggers cold starts. Pre-provisioned minimum instances are always warm.

Mnemonic: Warm instances = no cold start, pre-scale before the spike

## Q125
Type: single
Difficulty: 2
Tags: deployment, data-capture
Concepts: inference-data-capture
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

A team needs to log all prediction requests and responses from a production endpoint for monitoring and compliance purposes. Which SageMaker feature enables this?

A. CloudWatch Logs
B. SageMaker Data Capture
C. AWS CloudTrail
D. S3 server access logging

Answer: B

Hint: Capturing inference data (inputs and outputs) requires a feature specifically designed for ML endpoints.

Explanation: SageMaker Data Capture records a configurable percentage of inference requests and responses to S3. This captured data can be used by Model Monitor for drift detection, by Clarify for ongoing bias monitoring, and by compliance teams for audit trails.

Why others wrong: CloudWatch Logs captures application logs, not structured inference data; CloudTrail records API calls, not prediction content; S3 logging tracks file access, not model inference.

Trap: Using CloudWatch for inference logging — it captures logs but not the structured input/output data needed for model monitoring and bias analysis.

Mnemonic: Data Capture = Capture what goes in and what comes out of your model

## Q126
Type: single
Difficulty: 2
Tags: deployment, genai, provisioned
Concepts: provisioned-throughput
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

A production GenAI application on Bedrock needs guaranteed low latency and consistent throughput during peak hours. The on-demand API sometimes throttles during traffic spikes. What should the team do?

A. Retry failed requests with exponential backoff
B. Purchase Provisioned Throughput for the Bedrock model
C. Deploy the model on SageMaker instead
D. Reduce prompt length to speed up responses

Answer: B

Hint: Reserved capacity guarantees consistent performance regardless of overall Bedrock platform load.

Explanation: Bedrock Provisioned Throughput reserves dedicated model processing capacity, guaranteeing consistent latency and throughput. Unlike on-demand mode (shared capacity), provisioned throughput is not affected by other customers' usage, eliminating throttling during peak hours.

Why others wrong: Retries add latency; SageMaker deployment adds operational overhead; shorter prompts reduce quality, not throttling.

Trap: Relying on retries for production SLA — retries handle transient failures but don't solve systematic throttling during peak load.

Mnemonic: Provisioned Throughput = your reserved lane on the Bedrock highway

## Q127
Type: single
Difficulty: 1
Tags: deployment, iam
Concepts: endpoint-security
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

Who can invoke a SageMaker real-time inference endpoint?

A. Anyone with the endpoint URL
B. Only IAM principals with the sagemaker:InvokeEndpoint permission
C. Only the user who created the endpoint
D. Only SageMaker Studio users

Answer: B

Hint: Like all AWS services, access is controlled by IAM policies.

Explanation: SageMaker endpoints require IAM authentication. Only IAM users, roles, or services with the sagemaker:InvokeEndpoint permission on the specific endpoint resource can call it. This is enforced through standard IAM policies and can be further restricted by resource-based conditions.

Why others wrong: The URL alone is insufficient without IAM credentials; the creator doesn't have special privileges beyond their IAM permissions; any IAM principal with the right permissions can invoke it, not just Studio users.

Trap: Exposing the endpoint URL publicly — unlike a public API, SageMaker endpoints always require IAM authentication. For public access, put API Gateway in front.

Mnemonic: No IAM permission = No prediction for you

## Q128
Type: single
Difficulty: 3
Tags: deployment, multi-container
Concepts: serial-inference
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

A fraud detection system needs to run two models in sequence: a feature extractor model and a classification model. The feature extractor's output is the classifier's input. Both models use different frameworks. How should this be deployed?

A. Two separate endpoints with application-level orchestration
B. SageMaker Serial Inference Pipeline with two containers
C. Merge both models into a single framework
D. Run the feature extractor as a Lambda function and the classifier on an endpoint

Answer: B

Hint: Sequential model execution with different frameworks maps to a pipeline of containers.

Explanation: SageMaker Serial Inference Pipeline chains containers sequentially within a single endpoint. The feature extractor container produces output that's automatically passed to the classification container. Each container can use a different framework (e.g., TensorFlow for feature extraction, XGBoost for classification), and the pipeline is managed as a single endpoint.

Why others wrong: Separate endpoints add network latency between calls; merging frameworks may not be feasible; Lambda adds cold-start latency and has runtime limitations.

Trap: Application-level orchestration of two endpoints — it adds network round-trip latency and operational complexity. The pipeline handles data passing automatically.

Mnemonic: Serial Pipeline = containers in series, one endpoint, zero network hops between steps

## Q129
Type: single
Difficulty: 2
Tags: deployment, vpc
Concepts: network-security
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

A company's security policy requires that SageMaker training jobs and endpoints operate within a private network with no public internet access. Which configuration achieves this?

A. Use the default SageMaker networking configuration
B. Deploy SageMaker resources in a VPC with private subnets and VPC endpoints for S3, SageMaker, and ECR
C. Use security groups to block inbound traffic
D. Enable server-side encryption on all S3 buckets

Answer: B

Hint: Keeping traffic private requires both VPC placement and private connectivity to AWS services.

Explanation: Running SageMaker in VPC mode places training and inference resources in private subnets. VPC endpoints for S3, SageMaker API, SageMaker Runtime, and ECR allow these resources to access AWS services without traversing the public internet. No NAT gateway or internet gateway is needed.

Why others wrong: Default networking uses public internet; security groups control traffic flow but don't prevent internet routing; encryption protects data content, not network path.

Trap: Putting SageMaker in a VPC without VPC endpoints — the resources lose access to S3 and other services, causing failures. Both VPC placement and VPC endpoints are required.

Mnemonic: VPC + VPC Endpoints = fully private ML, no public internet

## Q130
Type: single
Difficulty: 2
Tags: deployment, canary
Concepts: canary-deployment
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

A team wants to deploy a new model version but first route only 5% of traffic to it for 30 minutes to check for errors before full rollout. Which SageMaker deployment feature supports this?

A. Multi-model endpoint
B. Deployment guardrails with canary traffic shifting
C. Batch transform
D. Serverless inference

Answer: B

Hint: A small percentage of traffic tests the new version while most traffic stays on the proven version.

Explanation: SageMaker deployment guardrails support canary traffic shifting, where a small percentage (e.g., 5%) of traffic is routed to the new model for a specified baking period. CloudWatch alarms monitor error rates and latency, automatically rolling back if issues are detected, or shifting all traffic to the new version if the canary period passes successfully.

Why others wrong: Multi-model endpoints host different models for different tenants; batch transform isn't real-time; serverless inference doesn't control traffic splitting.

Trap: Confusing canary with A/B testing — canary is a safety mechanism (5% traffic, auto-rollback on errors), A/B is a comparison mechanism (balanced traffic, statistical analysis).

Mnemonic: Canary = the canary in the coal mine, small test to detect danger

## Q131
Type: single
Difficulty: 2
Tags: deployment, ecr
Concepts: container-management
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

A team builds a custom inference container for their model. Where should they store this container image for SageMaker deployment?

A. Docker Hub
B. Amazon Elastic Container Registry (ECR)
C. S3 as a tar.gz file
D. GitHub Container Registry

Answer: B

Hint: SageMaker requires container images from a registry it can authenticate against natively.

Explanation: Amazon ECR is the recommended container registry for SageMaker. It provides native IAM-based authentication, integrates seamlessly with SageMaker's deployment workflow, and ensures low-latency image pulls within the AWS network. SageMaker training and inference natively pull images from ECR.

Why others wrong: Docker Hub requires additional authentication configuration and has rate limits; S3 doesn't serve container images; GitHub Container Registry isn't natively integrated.

Trap: Using Docker Hub — it works but requires authentication setup, has pull rate limits, and adds latency from external network pulls.

Mnemonic: ECR = the garage where SageMaker parks its containers

## Q132
Type: multi
Difficulty: 2
Tags: deployment, monitoring, endpoint-metrics
Concepts: endpoint-monitoring
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

Which TWO CloudWatch metrics are most important for monitoring a SageMaker real-time endpoint's operational health? (Select TWO.)

A. ModelLatency
B. S3 bucket size
C. Invocation5XXErrors
D. Training job duration

Answer: A, C

Hint: You need metrics that show whether the endpoint is responding quickly and successfully.

Explanation: ModelLatency measures the time the model takes to process each request, directly reflecting user experience. Invocation5XXErrors counts server-side failures, indicating model or infrastructure problems. Together, they provide a comprehensive view of endpoint health — performance and reliability.

Why others wrong: S3 bucket size is a storage metric; training job duration is a training metric, not an inference metric.

Trap: Monitoring only latency without error rates — an endpoint can have great latency but be failing silently on a subset of requests.

Mnemonic: Healthy endpoint = fast (latency) + reliable (no 5XX errors)

## Q133
Type: single
Difficulty: 3
Tags: deployment, genai, agent-deployment
Concepts: agent-architecture
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

A Bedrock Agent needs to query a database, call an external pricing API, and compose an email response — each as a separate action. How should the deployment architecture be designed?

A. Create one large Lambda function that handles all three actions
B. Define three separate action groups, each with its own Lambda function handling one specific action
C. Hardcode the action sequence in the agent's instruction prompt
D. Deploy three separate Bedrock Agents, one per action

Answer: B

Hint: Separation of concerns — each action group handles one capability.

Explanation: Each action group encapsulates a single capability (database query, pricing API, email) with its own Lambda function, OpenAPI schema, and error handling. The Bedrock Agent's foundation model decides which action groups to invoke and in what order based on the user's request, maintaining clean separation of concerns.

Why others wrong: One Lambda for everything creates a monolithic, hard-to-maintain function; hardcoded sequences don't adapt; separate agents can't collaborate on a single conversation.

Trap: Monolithic Lambda — any change to one action requires redeploying all three, and error handling becomes complex.

Mnemonic: One action group = one capability = one Lambda, agent orchestrates them

## Q134
Type: single
Difficulty: 2
Tags: deployment, tagging
Concepts: cost-allocation
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

A company runs multiple ML projects, each with separate training jobs and endpoints. They need to track costs per project. Which approach enables this cost allocation?

A. Create separate AWS accounts for each project
B. Tag all SageMaker resources with project-specific cost allocation tags
C. Monitor CloudWatch billing metrics
D. Use SageMaker Studio domains per project

Answer: B

Hint: Tags enable grouping and filtering of costs across AWS services.

Explanation: AWS cost allocation tags allow organizations to categorize SageMaker resources (training jobs, endpoints, processing jobs) by project, team, or environment. Activated cost allocation tags appear in the Cost Explorer and billing reports, enabling precise cost tracking per project.

Why others wrong: Separate accounts add organizational overhead; CloudWatch billing is account-level, not project-level; Studio domains don't inherently separate costs.

Trap: Creating separate accounts for cost separation — it's the most extreme approach. Tags provide cost visibility without the overhead of multi-account management.

Mnemonic: Tag everything = Track everything, project by project

## Q135
Type: single
Difficulty: 2
Tags: deployment, rollback
Concepts: deployment-safety
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

After deploying a new model version, the team observes a 20% increase in prediction errors within the first 10 minutes. The previous model version was working correctly. What is the fastest way to recover?

A. Retrain the model and redeploy
B. Roll back the endpoint to the previous model version using the previous endpoint configuration
C. Debug the new model to find the issue
D. Take the endpoint offline and investigate

Answer: B

Hint: When you have a working previous version, switching back is the fastest recovery.

Explanation: SageMaker retains previous endpoint configurations. Rolling back to the previous version by updating the endpoint with the prior configuration restores service with the known-good model within minutes. Investigation and fixes can proceed without impacting users.

Why others wrong: Retraining takes hours; debugging takes time while errors continue; taking the endpoint offline denies all users service.

Trap: Trying to fix the problem before recovering service — roll back first to stop the bleeding, then investigate the root cause.

Mnemonic: Roll back first, Root-cause second — restore service immediately

## Q136
Type: single
Difficulty: 3
Tags: deployment, sagemaker-pipelines, parameterized
Concepts: pipeline-parameterization
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

A team wants the same SageMaker Pipeline to work for different datasets, model types, and instance sizes without modifying the pipeline code. Which feature enables this flexibility?

A. Create separate pipelines for each configuration
B. Use Pipeline Parameters that accept values at execution time
C. Hardcode all configurations in the pipeline definition
D. Use environment variables in the pipeline code

Answer: B

Hint: Parameters make a pipeline reusable by accepting different values for each run.

Explanation: SageMaker Pipeline Parameters define variables (data location, instance type, hyperparameters) that are set at execution time, not definition time. This allows one pipeline definition to handle multiple scenarios — different datasets, model configurations, or resource allocations — simply by passing different parameter values at execution.

Why others wrong: Separate pipelines duplicate code and logic; hardcoding requires code changes for each variation; environment variables aren't natively supported in pipeline definitions.

Trap: Creating multiple nearly identical pipelines — parameterization turns one pipeline into many configurations without duplication.

Mnemonic: Pipeline Parameters = one pipeline, many configurations

## Q137
Type: single
Difficulty: 2
Tags: deployment, monitoring, drift
Concepts: model-monitoring
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

How does SageMaker Model Monitor detect data drift in a deployed endpoint?

A. It retrains the model periodically and compares accuracy
B. It compares the statistical distribution of incoming inference data against a baseline computed from training data
C. It checks if the endpoint is returning errors
D. It monitors CPU utilization of the endpoint instances

Answer: B

Hint: Drift detection compares current data distributions to what the model was trained on.

Explanation: Model Monitor captures inference data and computes statistics (mean, median, distribution) that are compared against a baseline generated from training data. Violations — features outside expected ranges, distribution shifts, missing values — trigger CloudWatch alerts indicating potential drift.

Why others wrong: Retraining measures accuracy degradation but doesn't pinpoint data drift; error checking monitors infrastructure; CPU monitoring tracks compute, not data quality.

Trap: Checking errors instead of data distributions — a model can serve responses without errors while its predictions deteriorate due to data drift.

Mnemonic: Model Monitor = compares now vs. then, statistical watchdog

## Q138
Type: single
Difficulty: 2
Tags: deployment, sagemaker-projects
Concepts: mlops-templates
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

A team wants to quickly set up an end-to-end MLOps infrastructure including CI/CD, model training, and deployment pipelines following AWS best practices. Which SageMaker feature provides pre-built MLOps templates?

A. SageMaker Experiments
B. SageMaker Projects with MLOps templates
C. SageMaker Canvas
D. SageMaker Ground Truth

Answer: B

Hint: Think about which feature provides ready-made infrastructure templates for the full ML lifecycle.

Explanation: SageMaker Projects provide pre-built MLOps templates that create CodeCommit repositories, CodeBuild projects, CodePipeline pipelines, and SageMaker Pipelines — all wired together following AWS best practices. Templates cover common patterns like "build, train, deploy" and "model monitoring."

Why others wrong: Experiments tracks trials; Canvas is no-code ML; Ground Truth labels data.

Trap: Building MLOps infrastructure from scratch — SageMaker Projects provide tested templates that significantly reduce setup time.

Mnemonic: SageMaker Projects = MLOps in a box, just add your data and model

## Q139
Type: single
Difficulty: 1
Tags: deployment, inference-recommender
Concepts: instance-optimization
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

A team needs to choose the right instance type for deploying a model but doesn't know which will give the best latency-cost trade-off. Which SageMaker feature automatically benchmarks different instance types?

A. SageMaker Debugger
B. SageMaker Inference Recommender
C. SageMaker Automatic Model Tuning
D. SageMaker Autopilot

Answer: B

Hint: Think about which tool tests your model across multiple instance types to find the optimal deployment configuration.

Explanation: SageMaker Inference Recommender benchmarks your model across different instance types, measuring latency, throughput, and cost. It provides a ranked list of instance configurations that meet your performance requirements at the lowest cost.

Why others wrong: Debugger monitors training; Automatic Model Tuning optimizes hyperparameters; Autopilot automates model building.

Trap: Manually testing instance types one by one — Inference Recommender automates this benchmarking process.

Mnemonic: Inference Recommender = Recommends the best hardware for your model

## Q140
Type: single
Difficulty: 2
Tags: deployment, genai, streaming
Concepts: streaming-inference
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

A chatbot application using Bedrock needs to display the model's response word-by-word as it's generated, similar to ChatGPT's typing effect. Which API feature enables this?

A. Synchronous InvokeModel API
B. InvokeModelWithResponseStream API
C. Batch inference
D. Async InvokeModel

Answer: B

Hint: Streaming the response as it's generated requires a streaming API.

Explanation: Bedrock's InvokeModelWithResponseStream returns a stream of response chunks as the model generates them, enabling the frontend to display partial responses progressively. This improves perceived latency — users see the response building in real-time rather than waiting for the complete response.

Why others wrong: Synchronous InvokeModel waits for the full response; batch processes multiple prompts offline; async stores results for later retrieval.

Trap: Using synchronous invocation for a chatbot — users experience the full generation time as a blank wait. Streaming shows progress immediately.

Mnemonic: ResponseStream = words flow like a stream, one by one

## Q141
Type: single
Difficulty: 3
Tags: deployment, a-b-testing, statistical
Concepts: ab-test-analysis
Domain: Domain 3 — Deployment and Orchestration of ML Workflows
DomainNumber: 3

A team runs an A/B test between two model variants on a SageMaker endpoint. After 7 days, Variant A has a conversion rate of 4.2% (10,000 impressions) and Variant B has 4.5% (10,000 impressions). The product manager asks if Model B is definitively better. What should the data scientist recommend?

A. Model B is better because 4.5% > 4.2%, deploy it immediately
B. Run a statistical significance test (e.g., chi-squared or z-test for proportions) before concluding Model B is better
C. Run the test for exactly 30 more days regardless of results
D. Take the average of both models and deploy a blended version

Answer: B

Hint: A small difference in observed rates might be due to random chance, not a real model improvement.

Explanation: A 0.3 percentage point difference on 10,000 impressions may or may not be statistically significant. A hypothesis test calculates the probability that the observed difference occurred by chance. Without statistical significance (p < 0.05), the team cannot confidently attribute the difference to Model B being genuinely better.

Why others wrong: Raw percentage comparison ignores sampling variability; arbitrary 30-day extension wastes time if significance is already clear (or never achievable); blending models doesn't validate improvement.

Trap: Declaring a winner based on raw percentages — small differences can be noise. Always test for statistical significance before making deployment decisions.

Mnemonic: A/B result? Check the p-value Before declaring a winner

Now Domain 4 (Q142-Q187).

## Q142
Type: single
Difficulty: 1
Tags: monitoring, cloudwatch
Concepts: model-metrics
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

Which AWS service is the primary destination for SageMaker endpoint operational metrics like latency, error rates, and invocation counts?

A. Amazon S3
B. Amazon CloudWatch
C. AWS CloudTrail
D. Amazon Athena

Answer: B

Hint: Think about which service collects and visualizes operational metrics for AWS resources.

Explanation: CloudWatch automatically receives SageMaker endpoint metrics including ModelLatency, OverheadLatency, Invocations, InvocationErrors, and GPU/CPU utilization. Teams can create dashboards, set alarms, and trigger automated actions based on these metrics.

Why others wrong: S3 stores data, not metrics; CloudTrail logs API calls, not performance metrics; Athena queries data in S3.

Trap: Looking for metrics in S3 or CloudTrail — operational metrics automatically go to CloudWatch, while data capture (inference data) goes to S3.

Mnemonic: CloudWatch = Watch your model's vital signs

## Q143
Type: single
Difficulty: 2
Tags: monitoring, model-monitor
Concepts: data-quality-monitoring
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

A deployed model's accuracy has degraded over two months, but no code or model changes were made. What is the most likely cause?

A. The endpoint instances degraded
B. Data drift — the distribution of incoming data has shifted from the training data distribution
C. The S3 model artifact was corrupted
D. CloudWatch metrics are reporting incorrectly

Answer: B

Hint: When nothing changed in the model but performance degrades, the change must be in the data.

Explanation: Data drift occurs when the statistical properties of production data shift from the training data distribution over time. Customer behavior changes, market shifts, seasonal patterns, or upstream data schema changes can all cause the incoming data to look different from what the model was trained on, degrading prediction quality.

Why others wrong: Hardware doesn't degrade model accuracy; S3 provides durable storage; CloudWatch accurately reports metrics.

Trap: Blaming the model or infrastructure when performance slowly degrades — gradual degradation without code changes is almost always data drift.

Mnemonic: Nothing changed but accuracy dropped? Data Drift!

## Q144
Type: single
Difficulty: 2
Tags: monitoring, model-monitor, schedule
Concepts: monitoring-schedule
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

A team wants Model Monitor to check for data drift daily on their production endpoint. How do they configure this?

A. Manually run monitoring jobs each day
B. Create a Model Monitor monitoring schedule with a daily cron expression
C. Set up a Lambda function to check endpoint metrics
D. Use CloudWatch Events to trigger retraining

Answer: B

Hint: Model Monitor supports scheduled execution for continuous monitoring.

Explanation: SageMaker Model Monitor supports scheduled monitoring jobs defined with cron expressions. A daily schedule automatically compares captured inference data against the baseline, generates violation reports, and emits CloudWatch metrics/alarms when drift is detected.

Why others wrong: Manual execution doesn't scale; Lambda can check metrics but doesn't compute drift statistics; CloudWatch Events trigger actions but don't perform drift analysis.

Trap: Building a custom drift detection Lambda — Model Monitor provides this capability natively with built-in drift statistics and visualization.

Mnemonic: Schedule Monitor = automated daily drift checkup

## Q145
Type: single
Difficulty: 3
Tags: monitoring, retraining
Concepts: retraining-strategy
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

Model Monitor has detected significant data drift. The team needs to decide on a retraining strategy. Which approach is most appropriate?

A. Retrain the model on the original training data to restore original performance
B. Retrain on a combination of recent production data (labeled) and a sliding window of historical data, validated against a holdout set of recent data
C. Switch to a completely different algorithm
D. Adjust the model's threshold to compensate for drift

Answer: B

Hint: The new model needs to learn current data patterns while retaining generalizable knowledge.

Explanation: Retraining on recent data captures current patterns, while including historical data prevents overfitting to temporary trends. A sliding window balances freshness and stability. Validating against recent holdout data ensures the retrained model performs well on current distributions, not just historical ones.

Why others wrong: Original training data doesn't reflect current distributions; algorithm changes don't address the data shift; threshold adjustment is a band-aid, not a fix.

Trap: Retraining only on the original data — this reproduces the model that's already failing because the data has changed. Include recent data.

Mnemonic: Drift → Retrain with Fresh + Historical data, Validate on recent

## Q146
Type: single
Difficulty: 2
Tags: monitoring, bias-monitor
Concepts: continuous-bias-monitoring
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

A regulatory requirement mandates continuous monitoring of a lending model for fairness across protected groups. Which SageMaker capability addresses this?

A. SageMaker Debugger
B. SageMaker Clarify bias monitoring integrated with Model Monitor
C. CloudWatch custom metrics
D. AWS Config compliance rules

Answer: B

Hint: Fairness monitoring requires computing bias metrics on live predictions, not just training data.

Explanation: SageMaker Clarify integrates with Model Monitor to continuously compute bias metrics (Disparate Impact, Statistical Parity Difference) on captured production predictions. Scheduled monitoring jobs detect if bias metrics drift beyond configured thresholds, triggering alerts for investigation.

Why others wrong: Debugger monitors training convergence; CloudWatch doesn't compute bias metrics; Config checks resource compliance, not model fairness.

Trap: Checking bias only at training time — bias can emerge in production when data distributions shift or when the model encounters demographic groups underrepresented in training.

Mnemonic: Clarify in production = continuous fairness watchdog

## Q147
Type: single
Difficulty: 2
Tags: monitoring, explainability
Concepts: production-explainability
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

A customer complains that their insurance claim was denied by the ML model. The compliance team needs to understand why. Which approach provides a per-prediction explanation?

A. Show the customer the model's global feature importance
B. Use SageMaker Clarify to compute SHAP values for the specific prediction, showing which features contributed to the denial
C. Retrain the model and see if the prediction changes
D. Check if the model's overall accuracy is acceptable

Answer: B

Hint: An individual customer needs an individual explanation, not a global model summary.

Explanation: SageMaker Clarify computes SHAP values for individual predictions, decomposing the denial decision into per-feature contributions. For example, "claim amount contributed +0.3 toward denial, payment history contributed -0.1 toward approval." This provides the legally required individual explanation.

Why others wrong: Global importance doesn't explain individual decisions; retraining doesn't address the specific complaint; overall accuracy is irrelevant to one decision.

Trap: Providing global feature importance as an individual explanation — knowing that "income is generally important" doesn't explain why THIS specific claim was denied.

Mnemonic: Individual complaint = Individual SHAP explanation

## Q148
Type: single
Difficulty: 1
Tags: security, iam
Concepts: access-control
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

A company wants to ensure that only the ML team can create SageMaker training jobs, while the data engineering team can only create processing jobs. Which AWS service enforces these permissions?

A. Amazon GuardDuty
B. AWS Identity and Access Management (IAM)
C. AWS WAF
D. Amazon Inspector

Answer: B

Hint: Fine-grained access control for AWS actions uses the identity and access management service.

Explanation: IAM policies define which principals can perform which actions on which resources. The ML team's policy allows sagemaker:CreateTrainingJob, while the data team's policy allows sagemaker:CreateProcessingJob — each team can only perform their authorized actions.

Why others wrong: GuardDuty detects threats; WAF protects web applications; Inspector scans for vulnerabilities.

Trap: Using network-level controls instead of IAM — security groups control network traffic, but IAM controls who can perform SageMaker API actions.

Mnemonic: IAM = I Am allowed to do this (or not)

## Q149
Type: single
Difficulty: 2
Tags: security, encryption
Concepts: data-protection
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

A healthcare ML solution must encrypt all data at rest and in transit, with the ability to audit key usage. Which AWS service manages encryption keys with audit capability?

A. AWS Secrets Manager
B. AWS Key Management Service (KMS)
C. AWS Certificate Manager
D. Amazon Cognito

Answer: B

Hint: Managing encryption keys with audit trails requires a key management service.

Explanation: AWS KMS creates and manages encryption keys used by SageMaker, S3, and other services. KMS integrates with CloudTrail to log every key usage event, providing a complete audit trail of who encrypted/decrypted what data and when — meeting healthcare compliance requirements.

Why others wrong: Secrets Manager stores credentials, not encryption keys; Certificate Manager manages TLS certificates; Cognito manages user authentication.

Trap: Using Secrets Manager for encryption keys — it stores secrets like passwords and API keys, not the encryption keys used by SageMaker and S3.

Mnemonic: KMS = Key Management with full audit trail

## Q150
Type: single
Difficulty: 2
Tags: security, vpc-endpoints
Concepts: private-connectivity
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

A bank requires that all SageMaker API calls stay within the AWS network, never traversing the public internet. Which mechanism provides this private connectivity?

A. Use HTTPS for all API calls
B. Create VPC Interface Endpoints for the SageMaker API and Runtime
C. Use AWS Direct Connect from the bank's data center
D. Enable S3 Transfer Acceleration

Answer: B

Hint: VPC endpoints create private connections between your VPC and AWS services without using the internet.

Explanation: VPC Interface Endpoints for SageMaker API and SageMaker Runtime create private connections within the AWS network. All API calls (CreateTrainingJob, InvokeEndpoint, etc.) stay within the VPC and AWS backbone, never touching the public internet.

Why others wrong: HTTPS encrypts traffic but still routes through the internet; Direct Connect connects on-premises to AWS but doesn't address VPC-to-service routing; Transfer Acceleration speeds S3 uploads.

Trap: Thinking HTTPS is sufficient for "no internet" requirements — HTTPS encrypts data but the traffic still crosses the public internet. VPC endpoints keep traffic entirely within AWS.

Mnemonic: VPC Endpoint = private tunnel from your VPC to AWS services

## Q151
Type: single
Difficulty: 3
Tags: monitoring, model-quality
Concepts: model-quality-monitoring
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

A model's prediction accuracy cannot be checked immediately because ground truth labels arrive 30 days after predictions. How should the team monitor model quality in the interim?

A. Wait 30 days before any monitoring
B. Monitor data quality and feature drift as proxies for model quality, then validate with ground truth when labels arrive
C. Assume the model is performing correctly if no errors occur
D. Retrain the model every 30 days regardless of performance

Answer: B

Hint: When you can't directly measure model quality, monitor the inputs for changes that would affect quality.

Explanation: Data quality and feature drift monitoring serve as leading indicators of potential model degradation. When incoming data distributions shift, model quality likely degrades even before ground truth confirms it. Once labels arrive, Model Monitor's model quality monitoring computes actual accuracy metrics, validating or refuting the drift signals.

Why others wrong: 30-day delay is too long without any monitoring; no errors doesn't mean good predictions; blind retraining wastes resources if the model is still performing well.

Trap: Waiting for ground truth to start monitoring — by the time labels arrive, 30 days of degraded predictions may have passed. Use data drift as an early warning.

Mnemonic: No labels yet? Monitor the data instead — drift predicts degradation

## Q152
Type: single
Difficulty: 2
Tags: monitoring, alerts
Concepts: alerting-strategy
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

A team has set up Model Monitor but receives too many false alarms for minor data quality variations. How should they reduce alert noise while still catching real issues?

A. Disable Model Monitor entirely
B. Adjust the constraint thresholds in the monitoring baseline to allow acceptable variation, and set CloudWatch alarm evaluation periods to catch sustained violations
C. Only check monitoring reports manually once a week
D. Remove features with high variation from the model

Answer: B

Hint: Tune the sensitivity — allow minor fluctuations but alert on sustained or significant changes.

Explanation: Adjusting baseline constraints (e.g., allowing 5% deviation in feature means instead of 0%) reduces false positives from normal variation. Setting CloudWatch alarm evaluation periods (e.g., alarm only if violation persists for 3 consecutive checks) filters out transient blips. Together, these catch real drift while ignoring noise.

Why others wrong: Disabling monitoring loses all visibility; weekly manual checks miss time-sensitive issues; removing features loses predictive power.

Trap: Setting thresholds too tight — some natural variation is expected. Thresholds should reflect business-meaningful drift, not statistical noise.

Mnemonic: Tune thresholds like a thermostat — not too sensitive, not too loose

## Q153
Type: single
Difficulty: 1
Tags: security, cloudtrail
Concepts: audit-logging
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

An auditor needs a complete log of all SageMaker API calls — who created training jobs, who deployed models, when endpoints were deleted. Which AWS service provides this audit trail?

A. Amazon CloudWatch Logs
B. AWS CloudTrail
C. SageMaker Experiments
D. Amazon S3 access logs

Answer: B

Hint: API-level activity logging for audit and compliance.

Explanation: AWS CloudTrail records all AWS API calls, including SageMaker operations like CreateTrainingJob, CreateEndpoint, and DeleteEndpoint. Each log entry includes the caller identity, timestamp, source IP, request parameters, and response, providing a complete audit trail for compliance.

Why others wrong: CloudWatch Logs captures application-level logs; Experiments tracks ML trials, not API calls; S3 logs track S3 access, not SageMaker actions.

Trap: Using CloudWatch Logs for API auditing — CloudWatch captures what the application logs, while CloudTrail captures what API actions were performed.

Mnemonic: CloudTrail = Trail of every API call, who did what and when

## Q154
Type: single
Difficulty: 2
Tags: security, model-artifacts
Concepts: model-security
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

A competitor could reverse-engineer a company's ML model if they access the model artifacts. Which combination of controls protects model intellectual property?

A. Store the model artifact in a public S3 bucket with a long random name
B. Encrypt model artifacts with KMS, restrict S3 access with bucket policies and IAM, deploy in a VPC with no internet access
C. Only deploy the model, never save the artifacts
D. Use model obfuscation techniques

Answer: B

Hint: Defense in depth — encryption, access control, and network isolation together protect sensitive assets.

Explanation: KMS encryption prevents unauthorized reading of model artifacts even if storage is compromised. IAM and bucket policies ensure only authorized roles access the S3 location. VPC deployment without internet access prevents model exfiltration through network channels. This multi-layered approach provides robust protection.

Why others wrong: Security through obscurity (random names) is insufficient; SageMaker requires saved artifacts for deployment; model obfuscation isn't a standard AWS capability.

Trap: Relying on S3 bucket privacy alone — bucket policies can be misconfigured. Encryption provides a second layer that protects even if access control fails.

Mnemonic: Encrypt + Restrict + Isolate = triple protection for model IP

## Q155
Type: single
Difficulty: 2
Tags: monitoring, concept-drift
Concepts: concept-drift
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

A model predicting customer purchase intent was trained pre-pandemic. Post-pandemic, the relationship between online browsing time and purchase has fundamentally changed — longer browsing no longer correlates with higher purchase intent. What type of drift is this?

A. Data drift (covariate shift)
B. Concept drift
C. Label drift
D. Feature drift

Answer: B

Hint: The input data may look similar, but the relationship between inputs and outputs has changed.

Explanation: Concept drift occurs when the mapping between features and the target variable changes. The feature distributions (browsing time) may remain stable, but the relationship to purchase intent has fundamentally shifted. Data drift detectors won't catch this because the input data looks the same — only ground truth evaluation reveals concept drift.

Why others wrong: Data drift (covariate shift) means input distributions changed; label drift means label distribution changed; feature drift is a subset of data drift affecting individual features.

Trap: Expecting data drift monitoring to catch all problems — concept drift changes the underlying relationship without changing the data distribution, making it invisible to data drift monitors.

Mnemonic: Same data, different meaning = Concept drift (the concept changed)

## Q156
Type: single
Difficulty: 3
Tags: security, responsible-ai
Concepts: responsible-ai-governance
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

A company is establishing an AI governance framework. They need to document each model's purpose, limitations, intended use cases, and potential risks before deployment. Which artifact serves this purpose?

A. Model training logs
B. A model card documenting the model's capabilities, limitations, intended uses, and ethical considerations
C. The model's source code
D. CloudFormation deployment templates

Answer: B

Hint: A standardized document that communicates everything stakeholders need to know about a model.

Explanation: Model cards are structured documents that describe a model's purpose, training data, performance across different groups, limitations, intended uses, and ethical considerations. SageMaker supports model card creation and management, providing a standardized format for AI governance and transparency.

Why others wrong: Training logs show technical details but not governance information; source code shows implementation but not ethical considerations; CloudFormation templates define infrastructure, not model governance.

Trap: Thinking technical documentation is sufficient for governance — model cards specifically address responsible AI concerns that code and logs don't cover.

Mnemonic: Model Card = the model's ID card — who it is, what it can do, what it shouldn't do

## Q157
Type: single
Difficulty: 2
Tags: monitoring, feature-drift
Concepts: feature-attribution-drift
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

After deploying a model, SageMaker Clarify's feature attribution monitoring shows that the importance of the "location" feature has increased from 5% to 35% of total SHAP contribution. What does this indicate?

A. The model is working correctly
B. Feature attribution drift — the model's decision-making process has shifted, possibly due to data changes making the model rely heavily on location
C. The endpoint needs more instances
D. The model needs more features

Answer: B

Hint: A dramatic shift in feature importance without model changes suggests the data landscape has changed.

Explanation: Feature attribution drift indicates the model is making decisions differently than at baseline — relying on location for 35% of its predictions versus the expected 5%. This could indicate geographic data distribution shifts, or worse, the model developing proxy biases through the location feature. Investigation is needed.

Why others wrong: Such a dramatic shift isn't normal operation; instance count doesn't affect feature importance; adding features doesn't explain why existing feature importance shifted.

Trap: Ignoring feature attribution changes because accuracy seems acceptable — a model can maintain average accuracy while developing problematic reliance on sensitive features like location.

Mnemonic: Feature importance shifted? Ask WHY the model changed its mind

## Q158
Type: single
Difficulty: 1
Tags: security, s3
Concepts: data-access-control
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

What is the recommended default setting for S3 buckets containing ML training data?

A. Public access for easy sharing
B. Block all public access and use IAM policies for authorized access
C. Static website hosting enabled
D. Requester Pays enabled

Answer: B

Hint: ML training data should never be publicly accessible.

Explanation: S3 Block Public Access should be enabled on all buckets containing ML data. Access should be granted through IAM policies to specific roles (SageMaker training role, data science team role) using the principle of least privilege. This prevents accidental data exposure.

Why others wrong: Public access risks data breaches; static hosting is for websites; Requester Pays is a billing feature.

Trap: Making buckets public for convenience — even "non-sensitive" training data can reveal business logic, customer patterns, or enable model extraction attacks.

Mnemonic: ML data = always private, Block Public Access = always on

## Q159
Type: single
Difficulty: 2
Tags: monitoring, pipeline-monitoring
Concepts: ml-pipeline-monitoring
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

An automated retraining pipeline runs weekly but sometimes fails silently — the training job completes but the model quality is poor due to corrupt input data. How should the team prevent this?

A. Manually inspect model quality after each retraining
B. Add data validation steps before training and model evaluation steps after training, with automatic rollback if quality gates fail
C. Increase the training compute resources
D. Run the pipeline more frequently

Answer: B

Hint: Quality gates at multiple pipeline stages prevent bad data from producing bad models.

Explanation: Adding a data validation step (checking schema, distributions, completeness) before training catches corrupt data early. A model evaluation step after training verifies the retrained model meets quality thresholds. If either gate fails, the pipeline rolls back to the previous model version, preventing silent quality degradation.

Why others wrong: Manual inspection doesn't scale with weekly retraining; more compute doesn't fix data quality; more frequent runs amplify the problem.

Trap: Trusting that a successful training job means a good model — training can complete successfully on bad data, producing a bad model. Always validate inputs and outputs.

Mnemonic: Gate Before (data validation) + Gate After (model evaluation) = no bad models slip through

## Q160
Type: single
Difficulty: 3
Tags: security, model-attacks
Concepts: adversarial-robustness
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

A threat analysis reveals that adversaries might send specially crafted inputs to the ML model to cause misclassification. Which defense mechanism should be implemented?

A. Rate limiting on the API
B. Input validation with anomaly detection on incoming requests, adversarial training, and output confidence thresholds
C. Using a more complex model architecture
D. Encrypting the model artifacts

Answer: B

Hint: Defending against adversarial inputs requires detecting unusual inputs, hardening the model, and distrusting low-confidence predictions.

Explanation: Input validation with anomaly detection flags unusual request patterns. Adversarial training exposes the model to perturbation attacks during training, improving robustness. Confidence thresholds reject predictions where the model is uncertain (often indicating adversarial inputs). Together, these provide defense-in-depth against adversarial attacks.

Why others wrong: Rate limiting prevents DoS but not adversarial inputs; model complexity doesn't inherently resist adversarial attacks; encryption protects artifacts, not against adversarial inference.

Trap: Relying only on model complexity — even very large, complex models are vulnerable to adversarial examples. Defense requires input-level detection, model-level hardening, and output-level filtering.

Mnemonic: Adversarial defense = Detect suspicious inputs + Harden the model + Filter uncertain outputs

## Q161
Type: single
Difficulty: 2
Tags: monitoring, cost-monitoring
Concepts: cost-optimization
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

A SageMaker endpoint costs $5,000/month but serves fewer than 100 requests per day. How should the team optimize costs?

A. Increase the instance size for better utilization
B. Switch to SageMaker Serverless Inference or Async Inference, which scale to zero during idle periods
C. Deploy more endpoints to distribute the load
D. Move to a reserved instance plan

Answer: B

Hint: With 100 requests/day, the endpoint is idle 99%+ of the time — you're paying for unused capacity.

Explanation: At 100 requests/day (roughly 4 per hour), the endpoint is vastly over-provisioned. Serverless Inference charges only for actual inference time and scales to zero when idle, potentially reducing costs from $5,000/month to under $50. Async Inference is another option if requests can tolerate slight delays.

Why others wrong: Larger instances increase costs; more endpoints multiply costs; reserved instances save ~30% but don't address fundamental over-provisioning.

Trap: Getting a reserved instance discount — 30% off $5,000 is still $3,500/month. Serverless at 100 req/day could be $50/month.

Mnemonic: Low traffic? Scale to zero. Don't pay for an empty restaurant.

## Q162
Type: single
Difficulty: 2
Tags: monitoring, model-versioning
Concepts: model-lifecycle
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

A team has deployed version 5 of their model. Versions 1-3 are no longer used. What should they do with old model versions and their artifacts?

A. Delete all old versions immediately to save storage costs
B. Archive old versions to S3 Glacier for compliance, maintain metadata in Model Registry, and set lifecycle policies for automated archival
C. Keep all versions on the current storage tier indefinitely
D. Delete the model artifacts but keep the Model Registry entries

Answer: B

Hint: Old models may be needed for audit, compliance, or rollback — but don't need hot storage.

Explanation: Archiving to S3 Glacier preserves model artifacts for compliance and potential rollback at minimal cost (~$0.004/GB/month vs $0.023/GB for S3 Standard). Model Registry metadata provides a catalog of all versions with their metrics and lineage, enabling retrieval of any historical version when needed.

Why others wrong: Immediate deletion risks compliance violations and prevents rollback; indefinite hot storage wastes money; deleting artifacts without metadata makes versions unretrievable.

Trap: Keeping everything on S3 Standard "just in case" — old model artifacts can accumulate to hundreds of GB. Glacier provides the same durability at 85% lower cost.

Mnemonic: Archive old models to Glacier — cheap storage, same compliance

## Q163
Type: single
Difficulty: 2
Tags: security, guardrails
Concepts: genai-safety
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

A GenAI chatbot on Bedrock sometimes generates responses that include customer email addresses from its context window. How should this PII leakage be prevented?

A. Instruct the model in the system prompt to never reveal email addresses
B. Configure Bedrock Guardrails with PII detection and redaction filters on model outputs
C. Remove all email addresses from the training data
D. Reduce the model's temperature to 0

Answer: B

Hint: Systemic prevention requires an automated filter, not just instructions.

Explanation: Bedrock Guardrails with PII filters automatically detect and redact email addresses, phone numbers, and other PII patterns in model outputs before they reach the user. This provides a reliable, automated safeguard that doesn't depend on the model's compliance with instructions.

Why others wrong: System prompt instructions are unreliable — models don't always follow them perfectly; training data changes don't prevent PII from context; temperature doesn't affect PII leakage.

Trap: Relying on prompt instructions to prevent PII leakage — models can ignore or creatively circumvent instructions. Guardrails provide deterministic filtering.

Mnemonic: Instructions can be ignored, Guardrails can't be bypassed

## Q164
Type: single
Difficulty: 3
Tags: monitoring, performance-debugging
Concepts: inference-debugging
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

A SageMaker endpoint's P99 latency suddenly increased from 50ms to 500ms without any model changes. What is the systematic debugging approach?

A. Immediately scale up to more instances
B. Check CloudWatch metrics for ModelLatency vs OverheadLatency — if OverheadLatency spiked, it's infrastructure; if ModelLatency spiked, check for data size increases, GPU memory pressure, or garbage collection
C. Redeploy the model
D. Switch to a different model

Answer: B

Hint: Separate model processing time from infrastructure overhead to identify where the slowdown occurs.

Explanation: ModelLatency measures the model's processing time; OverheadLatency measures SageMaker's infrastructure overhead (request routing, container communication). If ModelLatency is stable but OverheadLatency increased, the issue is infrastructure (scaling events, networking). If ModelLatency increased, check for larger input payloads, memory pressure, or garbage collection pauses.

Why others wrong: Scaling up might help but doesn't diagnose the root cause; redeploying is premature; switching models doesn't address the actual issue.

Trap: Adding instances without diagnosis — if the root cause is oversized payloads or memory leaks, more instances won't help and may mask the real problem.

Mnemonic: ModelLatency + OverheadLatency = where's the bottleneck?

## Q165
Type: single
Difficulty: 1
Tags: security, roles
Concepts: execution-roles
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

What is the purpose of the SageMaker execution role?

A. It allows users to log into the AWS console
B. It grants SageMaker training jobs and endpoints permission to access AWS resources like S3, ECR, and CloudWatch
C. It encrypts model artifacts
D. It manages SageMaker billing

Answer: B

Hint: SageMaker services need permissions to interact with other AWS services on your behalf.

Explanation: The SageMaker execution role is an IAM role that SageMaker training jobs, processing jobs, and endpoints assume to access AWS resources. It typically includes permissions for S3 (read training data, write artifacts), ECR (pull container images), CloudWatch (publish metrics), and KMS (decrypt data).

Why others wrong: Console access uses user credentials, not execution roles; encryption uses KMS; billing is managed by the account.

Trap: Giving the execution role overly broad permissions (AdministratorAccess) — follow least privilege. Grant only the specific S3 paths, ECR repositories, and KMS keys the ML workload needs.

Mnemonic: Execution role = SageMaker's ID badge to access AWS resources

## Q166
Type: single
Difficulty: 2
Tags: monitoring, compliance
Concepts: ml-governance
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

A regulated industry requires the ability to reproduce any past prediction, including the exact model, data, and configuration used. Which combination of SageMaker features provides this reproducibility?

A. CloudWatch metrics and logs
B. SageMaker Experiments + Lineage Tracking + Model Registry + S3 versioning + Data Capture
C. SageMaker Autopilot
D. SageMaker Canvas

Answer: B

Hint: Full reproducibility requires tracking every component in the ML lifecycle.

Explanation: Experiments records training parameters and metrics. Lineage Tracking connects data, code, and model artifacts. Model Registry tracks model versions with approval status. S3 versioning preserves exact data versions. Data Capture records inference inputs/outputs. Together, they provide a complete chain from prediction back to the exact model, training data, and code used.

Why others wrong: CloudWatch provides operational metrics, not ML lifecycle tracking; Autopilot automates but doesn't track custom experiments; Canvas is a no-code tool.

Trap: Tracking only model versions without data versions — reproducibility requires both the exact model AND the exact data it was trained on.

Mnemonic: Reproduce anything = track everything (data + code + model + config + predictions)

## Q167
Type: single
Difficulty: 2
Tags: security, network-isolation
Concepts: training-security
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

A company wants to ensure that SageMaker training job containers cannot make outbound internet calls that could exfiltrate training data. Which setting provides this isolation?

A. Use security groups to block outbound traffic
B. Enable network isolation mode (enable_network_isolation=True) in the training job configuration
C. Use a NAT gateway without routes to the internet
D. Remove the execution role from the training job

Answer: B

Hint: SageMaker provides a built-in flag that completely isolates training containers from the network.

Explanation: Network isolation mode completely disconnects the training container from external networks. The container can only access data that was pre-loaded from S3 at job start and can only write results to S3 at job completion. No outbound calls, no downloads, no data exfiltration — the most secure training configuration.

Why others wrong: Security groups can be misconfigured; removing NAT routes affects all VPC resources; removing the execution role prevents the job from running.

Trap: Using security groups for isolation — they control which traffic is allowed, but misconfigurations can leave gaps. Network isolation mode is a binary on/off setting.

Mnemonic: Network isolation = container in a sealed box, nothing goes in or out during training

## Q168
Type: single
Difficulty: 3
Tags: monitoring, ab-testing-monitoring
Concepts: production-experiment-monitoring
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

A production A/B test between two model variants shows Variant B has 10% higher conversion but also 3x more 5XX errors. How should the team proceed?

A. Deploy Variant B immediately because it has higher conversion
B. Investigate the error pattern — if errors affect a specific customer segment, the higher conversion may be skewed; fix the errors before concluding
C. Keep running the test indefinitely until errors drop
D. Average the results of both variants

Answer: B

Hint: Errors can bias A/B test results by excluding certain requests from the conversion calculation.

Explanation: The 3x error increase means some predictions are failing, likely for specific input patterns. If these failed requests would have been non-conversions, the surviving successful predictions are biased toward converting users, inflating Variant B's conversion rate. The team must fix the errors and re-evaluate on a clean sample.

Why others wrong: Deploying with 3x errors degrades user experience for affected segments; indefinite testing doesn't fix the root cause; averaging doesn't address the error bias.

Trap: Celebrating the higher conversion without examining the errors — survivor bias can make a broken model look better than a working one.

Mnemonic: High conversion + High errors = suspicious. Fix errors first, then evaluate.

## Q169
Type: single
Difficulty: 2
Tags: security, secrets
Concepts: secret-management
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

A SageMaker training job needs to access a third-party API that requires an API key. Where should this credential be stored?

A. Hardcoded in the training script
B. In AWS Secrets Manager, retrieved at runtime by the training job
C. In an S3 file alongside the training data
D. In the SageMaker hyperparameter configuration

Answer: B

Hint: Secrets should be stored in a dedicated secrets management service, not in code or data.

Explanation: AWS Secrets Manager securely stores, rotates, and manages access to secrets like API keys. The training job's execution role is granted permission to retrieve the specific secret at runtime. This prevents exposure in code repositories, logs, or hyperparameter configurations.

Why others wrong: Hardcoding risks exposure in version control and logs; S3 files can be accidentally shared; hyperparameters appear in CloudWatch logs.

Trap: Passing the API key as a hyperparameter — hyperparameters are logged to CloudWatch and visible in the SageMaker console, exposing the secret.

Mnemonic: Secrets in Secrets Manager, never in code, data, or config

## Q170
Type: single
Difficulty: 2
Tags: monitoring, model-quality-metrics
Concepts: production-accuracy
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

A team has deployed a classification model and wants to continuously track its accuracy in production. Ground truth labels arrive via a separate pipeline. How does SageMaker Model Monitor compute production accuracy?

A. It automatically infers ground truth from subsequent user actions
B. The team ingests ground truth labels into the Model Monitor's ground truth path, which merges them with captured predictions to compute accuracy metrics
C. It uses the model's confidence scores as a proxy for accuracy
D. It compares predictions to a static test dataset

Answer: B

Hint: Model quality monitoring requires actual ground truth labels to compute accuracy.

Explanation: SageMaker Model Monitor's model quality monitoring merges captured predictions (from Data Capture) with ground truth labels uploaded to a specified S3 path. It then computes standard classification metrics (accuracy, precision, recall, F1) and compares them against a baseline, alerting if quality degrades.

Why others wrong: Model Monitor doesn't infer ground truth; confidence scores don't measure actual accuracy; static test data doesn't reflect production performance.

Trap: Using prediction confidence as a proxy for accuracy — a model can be confidently wrong. Actual ground truth is needed for real accuracy measurement.

Mnemonic: Model quality = predictions + ground truth → real accuracy metrics

## Q171
Type: single
Difficulty: 1
Tags: security, logging
Concepts: access-monitoring
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

A security team wants to be alerted whenever someone accesses the S3 bucket containing ML training data. Which combination of services provides this notification?

A. S3 server access logging + manual review
B. CloudTrail logging S3 data events + CloudWatch alarm on access events + SNS notification
C. S3 versioning
D. AWS Config

Answer: B

Hint: Event-driven alerting requires logging, monitoring, and notification in a chain.

Explanation: CloudTrail captures S3 data events (GetObject, PutObject) as log entries. A CloudWatch Events rule or metric filter detects specific access patterns. When triggered, an SNS topic sends notifications (email, SMS, Slack) to the security team — providing real-time awareness of data access.

Why others wrong: Server access logs require manual review with no alerting; versioning tracks changes, not access; Config monitors resource configuration, not data access.

Trap: Enabling only S3 access logging — the logs are written but nobody sees them unless they actively check. CloudTrail + CloudWatch provides automated alerting.

Mnemonic: CloudTrail logs it → CloudWatch watches it → SNS alerts you

## Q172
Type: single
Difficulty: 3
Tags: monitoring, genai-monitoring
Concepts: llm-monitoring
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

A GenAI application on Bedrock needs monitoring for hallucinations, toxicity, and response relevance in production. Standard Model Monitor drift detection isn't sufficient. What monitoring approach should be used?

A. Manual spot-checks by the content team
B. Implement an LLM-as-judge pipeline where a separate model evaluates each response for factuality, relevance, and safety, logging scores and alerting on degradation
C. Monitor only latency and error rates
D. Ask users to rate every response

Answer: B

Hint: Evaluating free-form text quality requires semantic evaluation, not just statistical comparison.

Explanation: An LLM-as-judge pipeline uses a foundation model to automatically evaluate each production response against criteria like factuality (does it match source data?), relevance (does it answer the question?), and safety (is it toxic?). Scores are logged, tracked over time, and alert when quality metrics degrade below thresholds.

Why others wrong: Manual spot-checks don't scale; latency/error monitoring misses content quality; mandatory user ratings create friction and have low response rates.

Trap: Applying traditional Model Monitor to GenAI — drift detection compares distributions of structured features, which doesn't capture text quality, hallucinations, or toxicity.

Mnemonic: GenAI needs a GenAI judge — use an LLM to evaluate the LLM

## Q173
Type: single
Difficulty: 2
Tags: security, data-protection
Concepts: training-data-protection
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

During a SageMaker training job, sensitive data is processed on the training instance. How is this data protected from other tenants?

A. SageMaker shares training instances between customers for efficiency
B. SageMaker training runs on dedicated instances — the instance, attached volumes, and network are isolated per customer, with volumes encrypted and wiped after use
C. Data is anonymized before being sent to the training instance
D. Multi-factor authentication is required for each training job

Answer: B

Hint: Each training job runs in its own isolated environment.

Explanation: SageMaker runs each training job on dedicated compute instances that are not shared with other customers. EBS volumes are encrypted and securely wiped after the job completes. Network isolation ensures no cross-tenant communication. This multi-layer isolation protects sensitive training data.

Why others wrong: SageMaker doesn't share training instances; data isn't automatically anonymized; MFA is for user authentication, not job-level security.

Trap: Worrying about multi-tenant data exposure — SageMaker provides strong isolation guarantees at the infrastructure level. Each job runs on dedicated, encrypted, wiped instances.

Mnemonic: Your training job = your own isolated, encrypted room — nobody else gets in

## Q174
Type: single
Difficulty: 2
Tags: monitoring, sla
Concepts: sla-monitoring
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

A model endpoint has an SLA of 99.9% availability and P99 latency < 200ms. Which CloudWatch configuration monitors compliance with both requirements?

A. Check endpoint status manually every hour
B. Create composite CloudWatch alarms: one tracking Invocation5XXErrors rate against 0.1% threshold, another tracking ModelLatency P99 against 200ms, combined into a composite alarm
C. Monitor only average latency
D. Check CloudTrail logs for endpoint availability

Answer: B

Hint: Two SLA dimensions (availability and latency) require two alarms, ideally combined into one composite signal.

Explanation: An alarm on Invocation5XXErrors tracks availability (>0.1% errors violates 99.9% SLA). An alarm on ModelLatency P99 statistic tracks latency compliance. A composite alarm combines both, firing when either SLA dimension is violated, providing a single signal for on-call teams to act on.

Why others wrong: Manual checks miss real-time violations; average latency hides P99 spikes; CloudTrail logs API calls, not inference performance.

Trap: Monitoring average latency instead of P99 — average can be 50ms while P99 is 500ms. SLAs typically specify percentile latency, not average.

Mnemonic: Two SLAs = two alarms = one composite signal

## Q175
Type: single
Difficulty: 1
Tags: security, least-privilege
Concepts: access-principles
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

What is the principle of least privilege in the context of ML workloads?

A. Give all data scientists administrator access for productivity
B. Grant each role only the minimum permissions needed to perform their specific tasks
C. Share a single IAM role across all team members
D. Allow all SageMaker actions and restrict at the network level

Answer: B

Hint: Only grant what's needed, nothing more.

Explanation: Least privilege means each IAM role, user, or service has only the permissions necessary for their function. A data scientist might have CreateTrainingJob and CreateEndpoint but not DeleteEndpoint. An inference endpoint role can read from specific S3 paths but not access other buckets.

Why others wrong: Admin access violates least privilege; shared roles prevent granular control; network-level controls don't replace IAM permissions.

Trap: Granting broad SageMaker:* permissions for convenience — this allows users to accidentally (or maliciously) delete endpoints, access other projects' data, or modify production models.

Mnemonic: Least privilege = minimum access for maximum security

## Q176
Type: single
Difficulty: 2
Tags: monitoring, automated-retraining
Concepts: retraining-automation
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

Model Monitor detects drift beyond configured thresholds. The team wants automatic retraining when this occurs. Which architecture automates this workflow?

A. Manually trigger retraining when alerts arrive
B. Model Monitor violation → CloudWatch Alarm → EventBridge Rule → trigger SageMaker Pipeline for retraining, evaluation, and conditional deployment
C. Retrain on a fixed weekly schedule regardless of drift
D. Lower the drift thresholds to prevent alarms

Answer: B

Hint: Event-driven retraining connects monitoring signals to automated ML pipelines.

Explanation: When Model Monitor detects a violation, it emits a CloudWatch metric. An alarm triggers an EventBridge rule that starts a SageMaker Pipeline. The pipeline retrains on recent data, evaluates the new model, and deploys only if quality gates pass — fully automated from detection to deployment.

Why others wrong: Manual triggers introduce delay; fixed schedules may retrain unnecessarily or too late; lowering thresholds suppresses real issues.

Trap: Retraining on a fixed schedule — it may retrain when unnecessary (wasting compute) or too late (after drift has already degraded service). Event-driven retraining responds exactly when needed.

Mnemonic: Drift detected → Pipeline triggered → Model updated, all automatic

## Q177
Type: single
Difficulty: 3
Tags: security, supply-chain
Concepts: ml-supply-chain
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

A team uses a pretrained model from Hugging Face Hub in their SageMaker pipeline. What security risk should they mitigate?

A. The model may use too much compute
B. The pretrained model could contain backdoor triggers or malicious code — scan and validate before deployment
C. Hugging Face models don't work on SageMaker
D. The model license may not allow commercial use

Answer: B

Hint: Third-party model artifacts are untrusted software that could be tampered with.

Explanation: Pretrained models from public hubs could contain adversarial backdoors (trojans that misclassify specific trigger patterns), malicious pickle/PyTorch code (arbitrary code execution during loading), or intentional biases. Teams should scan model files, test for backdoor triggers, validate provenance, and review model cards before deploying in production.

Why others wrong: Compute cost is manageable; SageMaker fully supports Hugging Face; licensing is important but not a security risk.

Trap: Blindly trusting popular public models — even widely-used models can be targeted for supply chain attacks. Scan, test, and validate before production use.

Mnemonic: Public model = untrusted artifact. Scan before you trust.

## Q178
Type: single
Difficulty: 2
Tags: monitoring, dashboards
Concepts: ml-observability
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

An ML platform team needs a unified dashboard showing model health across 20 deployed models. Which approach provides this centralized view?

A. Check each model's CloudWatch metrics individually
B. Create a CloudWatch dashboard aggregating key metrics (latency, errors, invocations, data drift violations) for all models with alarm status indicators
C. Use SageMaker Studio for all monitoring
D. Build a custom monitoring application from scratch

Answer: B

Hint: A single pane of glass for all models requires aggregating metrics into one dashboard.

Explanation: CloudWatch dashboards aggregate metrics from multiple SageMaker endpoints into a single view. Widgets can show latency trends, error rates, invocation volumes, and alarm status for all 20 models. Cross-model comparison enables the team to quickly identify which models need attention.

Why others wrong: Individual metric checking doesn't scale to 20 models; Studio doesn't provide cross-model dashboards; custom applications add unnecessary development effort.

Trap: Building a custom monitoring UI — CloudWatch dashboards provide rich visualization with widgets, alarms, and automatic refresh. Build custom only if CloudWatch is insufficient.

Mnemonic: One dashboard, 20 models, instant health check

## Q179
Type: single
Difficulty: 2
Tags: monitoring, genai, token-usage
Concepts: genai-cost-monitoring
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

A Bedrock-powered application's monthly costs tripled after launch. The team suspects some users are generating excessively long prompts or responses. How should they monitor and control costs?

A. Remove the application
B. Track per-user token consumption using CloudWatch metrics and Bedrock's token usage data, set per-user budgets, and implement prompt length limits
C. Switch to a cheaper model
D. Reduce the system prompt length

Answer: B

Hint: Cost control requires visibility (who's consuming) and limits (maximum consumption).

Explanation: Bedrock reports input/output token counts per invocation via CloudWatch. Tracking per-user consumption identifies heavy users. Implementing prompt length validation, maximum output token limits, and per-user daily/monthly budgets prevents runaway costs while maintaining service for reasonable usage.

Why others wrong: Removing the application is extreme; cheaper models may not meet quality needs; system prompt reduction has minimal cost impact compared to user-generated content.

Trap: Switching to a cheaper model without understanding usage patterns — a few heavy users may account for most costs. Address usage patterns first.

Mnemonic: Track tokens per user, Limit the extremes, Control the costs

## Q180
Type: single
Difficulty: 1
Tags: security, tagging
Concepts: resource-governance
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

A company policy requires that all ML resources be tagged with project, owner, and environment (dev/staging/prod). How can this policy be enforced?

A. Trust team members to tag resources correctly
B. Use AWS Service Control Policies (SCPs) or IAM condition keys that deny resource creation without required tags
C. Audit tags monthly and fix missing tags manually
D. Tag resources during cleanup

Answer: B

Hint: Automated policy enforcement prevents untagged resources from being created in the first place.

Explanation: SCPs and IAM policies with condition keys (aws:RequestTag and aws:TagKeys) deny API calls that don't include required tags. This prevents creation of any untagged SageMaker training job, endpoint, or processing job, enforcing compliance at creation time rather than after the fact.

Why others wrong: Trusting manual tagging fails at scale; monthly audits allow weeks of untagged resources; post-hoc tagging misses resources that were already deleted.

Trap: Auditing and fixing tags after creation — by then, untagged resources have already incurred costs that can't be attributed to a project. Enforce at creation.

Mnemonic: No tag? No creation. Policy enforcement at the gate.

## Q181
Type: single
Difficulty: 3
Tags: monitoring, canary-testing
Concepts: model-testing-production
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

After deploying a model, the team wants to continuously verify it produces expected outputs for known test cases. How should they implement this production smoke testing?

A. Run the test suite once after deployment and assume it continues working
B. Create a canary testing Lambda that periodically sends known inputs to the endpoint and validates outputs, alerting on unexpected results
C. Rely entirely on user complaints to detect issues
D. Monitor only CloudWatch error metrics

Answer: B

Hint: Periodic synthetic testing catches issues before real users do.

Explanation: A canary testing Lambda sends predefined test cases with known expected outputs to the production endpoint on a regular schedule (e.g., every 5 minutes). If the response doesn't match expectations (wrong prediction, malformed output, timeout), it triggers a CloudWatch alarm. This catches model corruption, container issues, or drift before users are impacted.

Why others wrong: One-time testing misses issues that develop over time; user complaints are delayed and incomplete; error metrics don't validate prediction correctness.

Trap: Relying only on error rate monitoring — a model can return 200 OK with completely wrong predictions. Canary tests validate prediction correctness.

Mnemonic: Canary test = synthetic health check, known inputs → expected outputs

## Q182
Type: single
Difficulty: 2
Tags: security, compliance
Concepts: regulatory-compliance
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

A company processing EU customer data for ML must comply with GDPR's "right to be forgotten." If a customer requests data deletion, what must the ML team do?

A. Delete only the raw data from S3
B. Delete the customer's data from training datasets, retrain any model that used that data, and ensure the customer's data is not embedded in model weights or cached features
C. Ignore the request because ML models don't store individual data
D. Delete the customer's account and nothing else

Answer: B

Hint: GDPR requires complete removal of personal data, including its influence on ML models.

Explanation: GDPR's right to erasure requires removing the individual's data from training datasets and any derived artifacts. If the model memorized patterns from that data, retraining may be necessary. Feature Store entries, cached features, and any data capture logs containing the individual's data must also be purged.

Why others wrong: Deleting raw data alone is insufficient if the model was trained on it; ML models can memorize individual data points; account deletion doesn't address data in ML artifacts.

Trap: Thinking that deleting source data is sufficient — the model may have memorized aspects of the individual's data during training, requiring retraining for full compliance.

Mnemonic: Right to be forgotten = forgotten from data AND from the model

## Q183
Type: single
Difficulty: 2
Tags: monitoring, infrastructure
Concepts: endpoint-health
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

A SageMaker endpoint's instances show 95% GPU memory utilization. The team is concerned about out-of-memory errors under load. What should they do?

A. Ignore it since the GPU is being efficiently used
B. Scale to instances with more GPU memory, or reduce batch size / model size, and set a CloudWatch alarm at 90% GPU memory to get early warning
C. Switch to CPU instances
D. Increase the number of instances at the same size

Answer: B

Hint: 95% utilization leaves no headroom for traffic spikes or larger inputs.

Explanation: Operating at 95% GPU memory is dangerously close to OOM errors. Under traffic spikes or with larger-than-average inputs, the endpoint will crash. Scaling to larger GPU instances (more VRAM), reducing model/batch size, or implementing dynamic batching with memory limits addresses the root cause. A CloudWatch alarm at 90% provides early warning.

Why others wrong: 95% GPU memory is not "efficient use" — it's a crash risk; CPU instances are too slow for GPU-optimized models; more instances of the same size don't add per-instance memory.

Trap: Thinking high GPU utilization is always good — for compute (SM occupancy), yes. For memory, 95% means you're one spike away from OOM.

Mnemonic: 95% GPU memory = 5% from disaster. Scale up or slim down.

## Q184
Type: single
Difficulty: 3
Tags: monitoring, multi-model-monitoring
Concepts: model-comparison-production
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

A company has deployed a challenger model alongside the champion model using A/B testing. After two weeks, the challenger shows 5% better precision but 3% worse recall. How should they decide which model to keep?

A. Keep the challenger because precision is higher
B. Evaluate the decision based on the business cost of false positives vs. false negatives — if false negatives are more costly, keep the champion (higher recall); if false positives are more costly, promote the challenger (higher precision)
C. Keep the champion because it was deployed first
D. Deploy both models and average their predictions

Answer: B

Hint: Precision-recall trade-offs must be evaluated against business impact, not just metric values.

Explanation: The right metric depends on business context. For cancer screening, false negatives (missed cancer) are catastrophic — keep the champion with higher recall. For spam filtering, false positives (blocking legitimate email) are worse — promote the challenger with higher precision. No universal "better" exists without business context.

Why others wrong: Neither metric is universally more important; tenure doesn't indicate quality; averaging predictions doesn't resolve the precision-recall trade-off.

Trap: Choosing based on a single metric without business context — a 5% precision improvement that causes 3% more missed critical cases could be disastrous in healthcare.

Mnemonic: Precision vs Recall? Ask: what's costlier — a false alarm or a missed case?

## Q185
Type: single
Difficulty: 2
Tags: security, genai, prompt-injection
Concepts: prompt-security
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

A customer-facing Bedrock chatbot is vulnerable to prompt injection attacks where users try to extract the system prompt or make the model ignore its instructions. Which defense strategy is most effective?

A. Make the system prompt very long so users can't read it all
B. Combine Bedrock Guardrails (input filtering), system prompt hardening, and output validation to provide defense-in-depth
C. Don't use a system prompt
D. Only allow one-word user inputs

Answer: B

Hint: No single defense stops all prompt injection — layered defenses provide the best protection.

Explanation: Guardrails filter known attack patterns in user input. System prompt hardening uses clear instructions about what the model should refuse. Output validation checks responses for leaked system prompt content or out-of-scope behavior. Together, these three layers catch attacks that any single defense might miss.

Why others wrong: Prompt length doesn't prevent injection; no system prompt removes behavioral guidance; restricting input length cripples functionality.

Trap: Relying solely on system prompt instructions like "never reveal your system prompt" — prompt injection techniques can creatively bypass such instructions. Guardrails provide a more reliable filter layer.

Mnemonic: Defense in depth = Input filter + Prompt hardening + Output validation

## Q186
Type: single
Difficulty: 2
Tags: monitoring, cost-optimization
Concepts: training-cost-optimization
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

A team runs 20 training experiments per week, each on ml.p3.2xlarge instances costing $3.06/hour. Most experiments run for 4 hours. How can they reduce training costs by approximately 70%?

A. Use smaller instance types
B. Use SageMaker Managed Spot Training for experiments, with checkpointing enabled
C. Run experiments only on weekends
D. Reduce the dataset size by 70%

Answer: B

Hint: Spot instances provide up to 90% discount for interruptible workloads.

Explanation: Spot instances can reduce costs by up to 70-90% for training jobs. For experimental workloads where occasional interruptions are acceptable, Managed Spot Training with checkpointing provides significant savings. At $3.06/hr × 4 hours × 20 experiments = $244.80/week, a 70% reduction saves approximately $170/week.

Why others wrong: Smaller instances may not have GPUs; weekend scheduling doesn't reduce per-hour costs; reducing data size compromises model quality.

Trap: Not using checkpointing with spot training — without checkpoints, a spot interruption wastes all progress. Always enable checkpointing for spot training.

Mnemonic: Experiments = interruptible = perfect for Spot instances

## Q187
Type: multi
Difficulty: 2
Tags: monitoring, responsible-ai
Concepts: responsible-ml-practices
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

Which TWO practices are essential for responsible AI deployment? (Select TWO.)

A. Maximize model accuracy above all other considerations
B. Continuously monitor for bias drift and fairness across protected groups
C. Provide transparent model documentation including limitations and intended use
D. Use the largest possible model for every task

Answer: B, C

Hint: Responsible AI balances performance with fairness, transparency, and accountability.

Explanation: Continuous bias monitoring ensures the model treats all groups fairly over time, catching emerging biases from data drift. Transparent documentation (model cards) communicates the model's capabilities, limitations, and appropriate use cases to stakeholders, enabling informed decision-making.

Why others wrong: Maximizing accuracy at all costs can amplify biases; the largest model isn't always the most responsible — it may have more memorization and bias issues.

Trap: Prioritizing accuracy over fairness — a highly accurate model that discriminates against protected groups is irresponsible and potentially illegal.

Mnemonic: Responsible AI = Fair (monitor bias) + Transparent (document everything)

Now the final section, Domain 4 continued plus remaining questions to reach 195 (Q188-Q195).

## Q188
Type: single
Difficulty: 3
Tags: monitoring, model-registry-governance
Concepts: model-approval-workflow
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

A company requires that no model reaches production without human review. How should the deployment pipeline enforce this?

A. Trust the automated pipeline to deploy good models
B. Use SageMaker Model Registry's approval workflow — models are registered with "PendingManualApproval" status, and only models explicitly approved by authorized reviewers can be deployed by the CI/CD pipeline
C. Send an email notification after deployment
D. Review production models quarterly

Answer: B

Hint: The Model Registry has a built-in approval status that gates deployment.

Explanation: Model Registry supports approval statuses: PendingManualApproval, Approved, Rejected. The CI/CD pipeline checks approval status before deployment — only Approved models proceed. This creates an enforceable human gate where authorized reviewers examine model metrics, bias reports, and test results before granting production access.

Why others wrong: Automated deployment without review bypasses the requirement; post-deployment notification is too late; quarterly reviews allow months of unreviewed models.

Trap: Making approval optional in the pipeline — if the pipeline can bypass approval, someone will eventually skip it. Make approval a hard gate.

Mnemonic: PendingApproval → Human reviews → Approved → Pipeline deploys. No shortcut.

## Q189
Type: single
Difficulty: 2
Tags: monitoring, genai, hallucination
Concepts: hallucination-detection
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

A RAG-based Bedrock application sometimes generates answers that contradict the retrieved source documents. How should the team detect and reduce these hallucinations?

A. Increase the number of retrieved documents
B. Implement a citation verification system that cross-checks generated claims against retrieved source passages, flagging unsupported assertions
C. Use a higher temperature for more creative responses
D. Remove the RAG component and let the model answer from its training data

Answer: B

Hint: Verify that generated claims actually appear in the source material.

Explanation: A citation verification system extracts factual claims from the model's response and checks each against the retrieved source documents. Claims not supported by any source are flagged as potential hallucinations. This can be automated using an LLM judge or NLI (natural language inference) model to compute entailment scores.

Why others wrong: More documents may increase contradictions; higher temperature increases randomness and hallucinations; removing RAG eliminates source-grounding entirely.

Trap: Assuming RAG prevents all hallucinations — RAG provides context but the model can still generate claims not supported by the retrieved documents. Verification is needed.

Mnemonic: Trust but verify — check generated claims against source documents

## Q190
Type: single
Difficulty: 2
Tags: security, model-registry-access
Concepts: model-governance
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

Different teams (data science, ML engineering, DevOps) need different access levels to the Model Registry. Data scientists should register models, ML engineers should approve them, and only DevOps should deploy. How is this enforced?

A. Share the same IAM role across all teams
B. Create team-specific IAM roles with granular permissions: data scientists get CreateModelPackage, ML engineers get UpdateModelPackageStatus, DevOps gets CreateEndpoint
C. Use different AWS accounts for each team
D. Enforce through verbal team agreements

Answer: B

Hint: Different roles with different permissions implement separation of duties.

Explanation: IAM policies enforce separation of duties at the API level. Data scientists can create and register model packages but not approve or deploy them. ML engineers can change approval status but not deploy. Only DevOps can create endpoints from approved models. This creates mandatory checkpoints.

Why others wrong: Shared roles bypass separation of duties; separate accounts add unnecessary overhead; verbal agreements aren't enforceable.

Trap: Giving all teams full Model Registry access for convenience — this defeats the purpose of approval workflows, since anyone could approve and deploy their own model.

Mnemonic: Separation of duties = Register → Approve → Deploy, different roles at each gate

## Q191
Type: single
Difficulty: 3
Tags: monitoring, champion-challenger
Concepts: model-lifecycle-management
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

A company's automated pipeline regularly retrains models. Sometimes a retrained model is slightly worse than the current production model due to temporary data anomalies. How should the pipeline prevent regressions?

A. Always deploy the latest retrained model
B. Compare the retrained model's metrics against the current champion model on a holdout set — deploy only if the challenger statistically significantly outperforms the champion
C. Deploy every model and let users decide which is better
D. Only retrain when explicitly requested by the team

Answer: B

Hint: The new model must prove it's better before it earns the production slot.

Explanation: A champion-challenger evaluation step compares the retrained model against the current production model on a recent holdout dataset. Statistical significance testing ensures the improvement isn't due to random variation. Only models that demonstrably outperform the champion are deployed, preventing regression from data anomalies or training randomness.

Why others wrong: Always deploying risks regression; user-based selection is slow and noisy; manual-only retraining loses the benefits of automation.

Trap: Deploying based on absolute metric thresholds (e.g., accuracy > 0.85) instead of relative comparison — a new model meeting the threshold might still be worse than the current production model.

Mnemonic: New model must Beat the champion to earn the crown

## Q192
Type: single
Difficulty: 2
Tags: security, data-residency
Concepts: data-sovereignty
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

A European company must ensure that ML training data and model artifacts never leave the EU. How should they configure their SageMaker environment?

A. Use any AWS region and enable encryption
B. Use AWS regions within the EU (e.g., eu-west-1, eu-central-1) and configure S3 bucket policies to deny cross-region replication
C. Use a VPN connection to AWS
D. Store data on-premises and use hybrid deployment

Answer: B

Hint: Data residency is controlled by the physical location of AWS resources.

Explanation: Deploying SageMaker resources and S3 buckets in EU regions ensures data physically resides within EU boundaries. S3 bucket policies with condition keys (aws:RequestedRegion) prevent cross-region copies. CloudTrail monitoring confirms no data leaves the specified regions.

Why others wrong: Encryption protects content but doesn't control location; VPN secures transit but doesn't determine where data is stored; on-premises deployment loses cloud ML benefits.

Trap: Assuming encryption satisfies data residency — encryption protects data from unauthorized access, but residency requires data to physically stay within specific geographic boundaries.

Mnemonic: Data residency = right region + no cross-region access

## Q193
Type: single
Difficulty: 2
Tags: monitoring, endpoint-health
Concepts: health-checks
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

A SageMaker endpoint occasionally returns stale predictions because one of its instances has a corrupted model artifact in memory. How can this be detected and remediated automatically?

A. Manually restart instances periodically
B. Configure health checks that send known test inputs and validate responses — unhealthy instances are automatically replaced by SageMaker's managed auto-scaling
C. Deploy only single-instance endpoints
D. Retrain the model more frequently

Answer: B

Hint: Health checks detect misbehaving instances, and auto-scaling replaces them.

Explanation: SageMaker's managed infrastructure includes health monitoring. Custom health checks (canary tests) that validate prediction correctness complement SageMaker's built-in infrastructure health checks. When combined with auto-scaling policies, unhealthy instances are detected and replaced with fresh instances that load a clean model artifact.

Why others wrong: Periodic restarts cause unnecessary downtime; single-instance endpoints have no failover; retraining doesn't fix corrupted in-memory artifacts.

Trap: Relying only on HTTP status codes for health — a corrupted model can return 200 OK with wrong predictions. Validate prediction correctness, not just response codes.

Mnemonic: Health check = test inputs + validate outputs, not just "is it alive?"

## Q194
Type: single
Difficulty: 3
Tags: security, ml-pipeline-security
Concepts: pipeline-security
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

An automated ML pipeline pulls training data from S3, trains a model, and deploys it to production. A security audit reveals that a compromised training data file could result in a backdoored model being automatically deployed. How should the pipeline be secured?

A. Disable the automated pipeline
B. Add integrity checks (data validation, hash verification), model quality gates, adversarial testing, and human approval before production deployment
C. Use stronger encryption for S3
D. Run the pipeline less frequently

Answer: B

Hint: Each stage of the pipeline should verify its inputs before proceeding.

Explanation: Data validation catches corrupted/tampered inputs. Hash verification confirms data integrity against known checksums. Model quality gates verify the trained model performs as expected. Adversarial testing checks for backdoor triggers. Human approval provides a final review before production deployment. This multi-stage security prevents a compromised file from becoming a deployed backdoor.

Why others wrong: Disabling automation loses MLOps benefits; encryption protects in transit but doesn't detect tampering; less frequent runs don't prevent the attack.

Trap: Trusting that encrypted data can't be tampered with — encryption prevents unauthorized reading, not authorized-but-malicious writes. Data integrity verification is separate from encryption.

Mnemonic: Secure pipeline = Validate inputs → Verify model → Test for backdoors → Human approves

## Q195
Type: single
Difficulty: 2
Tags: monitoring, model-deprecation
Concepts: model-retirement
Domain: Domain 4 — ML Solution Monitoring, Maintenance, and Security
DomainNumber: 4

A model is being replaced by a new version. The team needs to safely deprecate the old model without disrupting dependent applications. What is the recommended approach?

A. Delete the old endpoint immediately
B. Communicate deprecation timeline to consumers, gradually shift traffic to the new model using production variants, monitor for issues, and decommission the old model only after confirming stability
C. Keep both models running indefinitely
D. Force all consumers to switch simultaneously

Answer: B

Hint: Graceful deprecation requires communication, gradual transition, and validation.

Explanation: A phased deprecation starts with notifying downstream consumers of the timeline. Traffic is gradually shifted (90/10 → 50/50 → 10/90 → 0/100) using production variant weights, with monitoring at each stage. Only after the new model proves stable under full production load is the old model decommissioned.

Why others wrong: Immediate deletion breaks dependent applications; indefinite dual-running wastes resources; forced simultaneous switch risks widespread failure.

Trap: Deleting the old endpoint after the first day of successful new model deployment — hidden edge cases and seasonal patterns may only appear over weeks. Keep the old model available for quick rollback during the transition period.

Mnemonic: Deprecate gradually = announce → shift traffic → monitor → decommission
