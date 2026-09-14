---
exam: PMLE
lang: en
---

## Q1
Type: single
Difficulty: 1
Tags: low-code, natural-language-queries, bigquery
Concepts: nl-to-sql
Domain: Domain 1 — Architecting Low-Code AI Solutions
DomainNumber: 1

A retail company wants business analysts without SQL expertise to query their BigQuery data warehouse using natural language. Which Google Cloud feature should they use?

A. BigQuery ML CREATE MODEL
B. Gemini in BigQuery with natural language queries
C. Vertex AI custom training with a text-to-SQL model
D. Cloud Functions triggered by a chatbot

Answer: B

Hint: Think about built-in BigQuery features that let non-technical users ask questions in plain English.

Explanation: Gemini in BigQuery allows users to write natural language queries that are automatically translated to SQL. This is a low-code approach ideal for analysts who need data insights without writing SQL manually.

Why others wrong: BigQuery ML creates ML models, not natural language querying; custom training is high-effort overkill; Cloud Functions require coding.

Trap: Confusing BigQuery ML (model training) with Gemini in BigQuery (natural language interface).

Mnemonic: Gemini in BQ = "Ask in English, get SQL results"

## Q2
Type: single
Difficulty: 2
Tags: low-code, automl-tables, time-series
Concepts: automl-forecasting
Domain: Domain 1 — Architecting Low-Code AI Solutions
DomainNumber: 1

A logistics company has 3 years of daily shipment volume data and needs to forecast demand for the next 90 days. They want minimal ML expertise required. Which approach is most appropriate?

A. Train a custom LSTM model on Vertex AI using TensorFlow
B. Use AutoML Forecasting on Vertex AI with the time series dataset
C. Use BigQuery ML with ARIMA_PLUS model type
D. Deploy a pre-trained foundation model from Model Garden

Answer: B

Hint: The requirement is minimal ML expertise plus time-series forecasting — which AutoML capability handles this?

Explanation: AutoML Forecasting on Vertex AI is purpose-built for time-series prediction with minimal ML expertise. It automatically handles feature engineering, model selection, and hyperparameter tuning for temporal data. While BQML ARIMA_PLUS also works, AutoML Forecasting provides a more guided, low-code experience with richer temporal feature handling.

Why others wrong: Custom LSTM requires deep ML expertise; BQML ARIMA_PLUS requires SQL knowledge and manual configuration; foundation models are not designed for structured time-series forecasting.

Trap: Choosing BQML ARIMA_PLUS — it works but requires more SQL and ML knowledge than AutoML Forecasting.

Mnemonic: Time series + low-code = AutoML Forecasting

## Q3
Type: single
Difficulty: 2
Tags: low-code, gemini, function-calling
Concepts: function-calling
Domain: Domain 1 — Architecting Low-Code AI Solutions
DomainNumber: 1

An e-commerce company wants their Gemini-powered chatbot to check real-time inventory levels when customers ask about product availability. Which Gemini capability should they implement?

A. Grounding with Google Search
B. Function calling with an inventory API tool declaration
C. Context caching with inventory data
D. System instructions listing all inventory counts

Answer: B

Hint: The chatbot needs to call an external system in real-time — which Gemini feature enables this?

Explanation: Function calling allows Gemini to generate structured calls to external APIs based on tool declarations. When a user asks about inventory, Gemini recognizes the intent and generates the appropriate function call to the inventory API, returning real-time data.

Why others wrong: Google Search grounding retrieves web info, not internal inventory; context caching stores static data that quickly becomes stale; system instructions have token limits and can't hold dynamic inventory.

Trap: Thinking grounding can access internal databases — it only works with Google Search or Vertex AI Search data stores.

Mnemonic: Real-time external data = function calling; static knowledge = grounding

## Q4
Type: single
Difficulty: 1
Tags: low-code, document-ai, classification
Concepts: document-classification
Domain: Domain 1 — Architecting Low-Code AI Solutions
DomainNumber: 1

A law firm receives thousands of legal documents daily and needs to automatically classify them into categories (contracts, court filings, correspondence). Which Google Cloud service requires the least custom development?

A. Vertex AI AutoML Text Classification
B. Document AI with a custom classifier
C. Cloud Natural Language API
D. A Gemini prompt with few-shot examples

Answer: B

Hint: Which service is specifically designed for document processing workflows?

Explanation: Document AI provides pre-built and custom document classifiers optimized for document processing at scale. It handles OCR, layout analysis, and classification in a single pipeline, requiring minimal development for document-centric workflows.

Why others wrong: AutoML Text works but doesn't handle document layout/OCR natively; Cloud NL API classifies general text categories, not document types; Gemini prompting works for small scale but lacks the document processing pipeline.

Trap: Using AutoML Text Classification when Document AI provides a more integrated solution for document workflows.

Mnemonic: Documents (PDFs, scans) = Document AI; plain text = NL API or AutoML Text

## Q5
Type: single
Difficulty: 3
Tags: low-code, automl, model-evaluation
Concepts: automl-evaluation-metrics
Domain: Domain 1 — Architecting Low-Code AI Solutions
DomainNumber: 1

After training an AutoML image classification model to detect manufacturing defects, you notice the model has 98% accuracy but only 40% recall on the "defective" class. What should you do first?

A. Increase the classification threshold to capture more defective items
B. Decrease the classification threshold to increase recall on the defective class
C. Add more training images of non-defective items to balance the dataset
D. Switch to a custom TensorFlow model for better control

Answer: B

Hint: Recall measures how many actual positives are found — what happens to recall when you lower the threshold?

Explanation: With high accuracy but low recall on the minority class, the model is being too conservative in predicting "defective." Lowering the classification threshold means the model will classify more items as defective, increasing recall at the cost of some precision. This is the correct first step before considering data augmentation or model changes.

Why others wrong: Increasing the threshold would decrease recall further; adding non-defective images worsens the class imbalance; switching to custom training is premature before adjusting the threshold.

Trap: Confusing precision and recall — increasing the threshold improves precision but decreases recall.

Mnemonic: Low recall → lower threshold to "catch more"; Low precision → raise threshold to "be more selective"

## Q6
Type: single
Difficulty: 2
Tags: low-code, vertex-ai-search, enterprise
Concepts: vertex-ai-search
Domain: Domain 1 — Architecting Low-Code AI Solutions
DomainNumber: 1

A healthcare company wants to build a search application over their internal medical research papers stored in Cloud Storage. The application should understand semantic meaning, not just keyword matches. Which service should they use?

A. Cloud Search with a custom schema
B. Vertex AI Search with an unstructured data store
C. Elasticsearch deployed on GKE
D. BigQuery full-text search functions

Answer: B

Hint: Which Google Cloud service provides managed semantic search over unstructured documents?

Explanation: Vertex AI Search (part of Vertex AI Agent Builder) provides managed semantic search that understands the meaning behind queries, not just keywords. It can ingest unstructured documents from Cloud Storage, automatically generates embeddings, and supports advanced retrieval with built-in ranking.

Why others wrong: Cloud Search is for Google Workspace content; self-managed Elasticsearch requires significant ops overhead; BigQuery full-text search is keyword-based, not semantic.

Trap: Choosing Elasticsearch for semantic search — while possible with plugins, Vertex AI Search provides this natively as a managed service.

Mnemonic: Semantic search over docs = Vertex AI Search; keyword search over structured data = BigQuery

## Q7
Type: single
Difficulty: 3
Tags: low-code, model-garden, adapter-tuning
Concepts: adapter-tuning
Domain: Domain 1 — Architecting Low-Code AI Solutions
DomainNumber: 1

Your team wants to customize a Gemini model from Model Garden for a domain-specific summarization task. They have 500 high-quality input-output pairs. Training cost and infrastructure management should be minimal. Which tuning approach is most appropriate?

A. Full fine-tuning with Vertex AI custom training
B. Supervised fine-tuning (adapter tuning) through the Vertex AI console
C. Distillation to a smaller model
D. Reinforcement learning from human feedback (RLHF)

Answer: B

Hint: 500 examples is a good size for adapter tuning — which method is managed and low-infrastructure?

Explanation: Supervised fine-tuning via adapter tuning in the Vertex AI console is a managed, low-code approach that works well with hundreds of examples. It adds small adapter layers to the base model without modifying all weights, keeping costs low while achieving domain-specific improvements.

Why others wrong: Full fine-tuning requires custom training infrastructure and more data; distillation requires a separate smaller model architecture; RLHF requires a reward model and is more complex than needed.

Trap: Choosing full fine-tuning when adapter tuning achieves similar results with far less cost and complexity for this data size.

Mnemonic: 500 examples + low effort = adapter tuning; 50K+ examples + full control = full fine-tuning

## Q8
Type: single
Difficulty: 1
Tags: low-code, speech-to-text, api
Concepts: speech-api
Domain: Domain 1 — Architecting Low-Code AI Solutions
DomainNumber: 1

A call center wants to transcribe customer calls in real-time to generate live captions for supervisors. Which Google Cloud service should they use?

A. Vertex AI custom speech model
B. Cloud Speech-to-Text API with streaming recognition
C. Gemini with audio input
D. Media Translation API

Answer: B

Hint: Real-time transcription with low latency requires a streaming API — which service provides this?

Explanation: Cloud Speech-to-Text API with streaming recognition is designed specifically for real-time audio transcription. It processes audio in small chunks as it arrives, providing low-latency results ideal for live captioning scenarios.

Why others wrong: Custom speech model is overkill for standard transcription; Gemini audio input has higher latency and isn't optimized for continuous streaming; Media Translation API is for translating speech across languages, not same-language transcription.

Trap: Choosing Gemini for audio processing — while it can handle audio, it's not optimized for real-time streaming transcription.

Mnemonic: Real-time streaming audio → Speech-to-Text streaming; batch audio analysis → Gemini

## Q9
Type: single
Difficulty: 2
Tags: low-code, translation, adaptive
Concepts: adaptive-translation
Domain: Domain 1 — Architecting Low-Code AI Solutions
DomainNumber: 1

A global SaaS company needs to translate their product UI strings into 40 languages. They have an existing glossary of product-specific terms and want translations to use their preferred terminology consistently. Which Translation API feature should they leverage?

A. AutoML Translation with a custom model
B. Translation API with a glossary resource
C. Gemini with translation prompts and terminology instructions
D. Translation API Basic edition

Answer: B

Hint: The requirement is consistent terminology — which feature enforces specific term translations?

Explanation: The Translation API supports glossary resources that force specific translations for defined terms. When processing text, the API checks the glossary first and uses the specified translation for matched terms, ensuring consistent product terminology across all languages.

Why others wrong: AutoML Translation trains custom models (heavyweight for terminology consistency); Gemini prompting can't guarantee terminology consistency at scale; Basic edition doesn't support glossaries.

Trap: Training an AutoML Translation model when a glossary resource achieves the same terminology consistency with far less effort.

Mnemonic: Consistent terms = Glossary; Custom style/tone = AutoML or fine-tuning

## Q10
Type: single
Difficulty: 2
Tags: low-code, bigquery-ml, anomaly-detection
Concepts: bqml-anomaly
Domain: Domain 1 — Architecting Low-Code AI Solutions
DomainNumber: 1

A fintech company has transaction data in BigQuery and wants their SQL-proficient analysts to build fraud detection models directly in BigQuery. The data is unlabeled. Which BigQuery ML approach is most appropriate?

A. CREATE MODEL with model_type='LOGISTIC_REG'
B. CREATE MODEL with model_type='KMEANS' for clustering
C. CREATE MODEL with model_type='AUTOENCODER' for anomaly detection
D. CREATE MODEL with model_type='RANDOM_FOREST_CLASSIFIER'

Answer: C

Hint: Unlabeled data + fraud detection = anomaly detection, not classification.

Explanation: With unlabeled transaction data, supervised classifiers (logistic regression, random forest) cannot be trained. BigQuery ML's AUTOENCODER model learns normal transaction patterns and flags anomalies — transactions that deviate significantly from learned patterns — making it ideal for unsupervised fraud detection.

Why others wrong: Logistic regression and random forest require labeled data (fraud/not fraud); K-means clustering groups similar transactions but doesn't specifically identify anomalies or assign anomaly scores.

Trap: Choosing K-means — while unsupervised, it groups data into clusters but doesn't specifically score individual transactions for anomalousness.

Mnemonic: Unlabeled + detect outliers = AUTOENCODER; Unlabeled + group similar = KMEANS; Labeled = classifiers

## Q11
Type: single
Difficulty: 3
Tags: low-code, vertex-ai-agent-builder, grounding
Concepts: grounding-configuration
Domain: Domain 1 — Architecting Low-Code AI Solutions
DomainNumber: 1

You are building a customer support agent using Vertex AI Agent Builder. The agent must answer questions using both your company's product documentation (stored in Cloud Storage) AND current pricing information from your website. How should you configure grounding?

A. Use Google Search grounding for both documentation and pricing
B. Create a single Vertex AI Search data store containing both documentation and pricing pages
C. Create separate data stores — one for documentation (Cloud Storage) and one for website pricing (website crawl) — and configure the agent to use both
D. Embed all documentation and pricing into the system instruction

Answer: C

Hint: Different data sources (static docs vs. live website) require different ingestion methods.

Explanation: Vertex AI Agent Builder supports multiple data stores per agent. Static product documentation should be ingested from Cloud Storage, while dynamic pricing pages should use website crawling for freshness. Separating them allows independent refresh schedules and retrieval tuning per source type.

Why others wrong: Google Search grounding can't access private documentation; a single data store can't efficiently handle both Cloud Storage files and website crawling with different refresh needs; system instructions have token limits and can't hold large documentation.

Trap: Putting everything in one data store — this prevents independent tuning of retrieval and refresh for different content types.

Mnemonic: Different sources = different data stores; same agent can query multiple stores

## Q12
Type: single
Difficulty: 2
Tags: low-code, automl, tabular-workflow
Concepts: automl-tabular-workflow
Domain: Domain 1 — Architecting Low-Code AI Solutions
DomainNumber: 1

Your team trained an AutoML tabular model for customer churn prediction. The model performs well, but stakeholders want to understand which features most influence predictions. Which AutoML capability should you use?

A. Export the model and run SHAP analysis manually
B. View the feature importance provided in the AutoML model evaluation
C. Retrain with a simpler linear model for interpretability
D. Use Vertex AI Explainability with a custom explanation specification

Answer: B

Hint: AutoML provides built-in feature importance — no extra setup needed.

Explanation: AutoML tabular models automatically compute and display global feature importance as part of the model evaluation results in the Vertex AI console. This shows which features had the most impact on model predictions without any additional configuration or code.

Why others wrong: Exporting and running SHAP manually is unnecessary extra work; switching to a linear model sacrifices accuracy; custom explanation specs are for custom-trained models, not AutoML.

Trap: Over-engineering explainability for AutoML models when built-in feature importance is already provided.

Mnemonic: AutoML = built-in feature importance; Custom models = configure Vertex Explainability

## Q13
Type: single
Difficulty: 1
Tags: scaling, notebook, managed
Concepts: managed-notebooks
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

A data scientist wants to experiment with different ML frameworks (TensorFlow, PyTorch, JAX) using GPUs, without managing infrastructure. Which Google Cloud service provides the best developer experience?

A. Compute Engine with Deep Learning VM
B. Vertex AI Workbench managed notebooks
C. Google Colab Enterprise
D. Cloud Shell with GPU support

Answer: C

Hint: Which service provides a fully managed notebook experience integrated with Vertex AI and supports multiple frameworks?

Explanation: Google Colab Enterprise provides a fully managed notebook environment integrated with Google Cloud, supporting multiple ML frameworks with GPU/TPU access. It requires zero infrastructure management while providing enterprise security and sharing features.

Why others wrong: Compute Engine VMs require manual setup and maintenance; Vertex AI Workbench managed notebooks are being superseded by Colab Enterprise; Cloud Shell doesn't support GPUs.

Trap: Choosing Vertex AI Workbench — while it works, Colab Enterprise is now the recommended managed notebook experience for Google Cloud.

Mnemonic: Experiment + zero ops = Colab Enterprise; Production notebook = Vertex AI Workbench

## Q14
Type: single
Difficulty: 2
Tags: scaling, experiment-comparison, vertex-ai
Concepts: experiment-comparison
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

You are running multiple experiments comparing different model architectures and hyperparameters on Vertex AI. You need to compare metrics across runs, visualize learning curves, and share results with your team. Which Vertex AI feature should you use?

A. Vertex AI TensorBoard
B. Vertex AI Model Registry
C. Vertex AI Experiments with runs comparison
D. Cloud Monitoring custom dashboards

Answer: C

Hint: Which feature is specifically designed for comparing multiple training runs and their metrics?

Explanation: Vertex AI Experiments provides purpose-built experiment tracking with run comparison. You can log metrics, parameters, and artifacts for each run, then compare them side-by-side with built-in visualization. It integrates with the Vertex AI SDK for automatic logging.

Why others wrong: TensorBoard visualizes individual training runs but lacks built-in cross-experiment comparison; Model Registry stores trained models, not experiment tracking; Cloud Monitoring is for operational metrics, not ML experiments.

Trap: Using TensorBoard for cross-experiment comparison — it's great for within-run visualization but Experiments provides better cross-run comparison.

Mnemonic: Compare experiments = Vertex AI Experiments; Visualize training curves = TensorBoard; Store models = Model Registry

## Q15
Type: single
Difficulty: 2
Tags: scaling, data-versioning, vertex-ai
Concepts: managed-datasets
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

Your ML team needs to ensure reproducibility of training runs. They want to track which version of the training data was used for each model. How should they manage dataset versioning on Google Cloud?

A. Use Cloud Storage object versioning and record bucket paths in experiment metadata
B. Create new Vertex AI Managed Datasets for each data version
C. Use BigQuery snapshots for tabular data and reference snapshot timestamps
D. Store data checksums in a spreadsheet

Answer: A

Hint: What's the simplest way to version files and link them to training runs?

Explanation: Cloud Storage object versioning maintains all versions of training data files. By recording the exact Cloud Storage URI (including generation number) in Vertex AI experiment metadata, you create a traceable link between each training run and its exact data version.

Why others wrong: Creating new Managed Datasets for each version is heavyweight and doesn't track lineage automatically; BigQuery snapshots only work for tabular data in BigQuery; spreadsheets are error-prone and not integrated with ML workflows.

Trap: Over-engineering data versioning with new Managed Datasets when Cloud Storage versioning + experiment metadata provides sufficient traceability.

Mnemonic: Data files → GCS versioning + experiment metadata; BQ tables → BQ snapshots

## Q16
Type: single
Difficulty: 3
Tags: scaling, feature-engineering, vertex-ai
Concepts: feature-transformation-engine
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

You need to apply the same feature transformations during both training and serving to avoid training-serving skew. The transformations include normalization, bucketization, and embedding lookups. Which approach ensures consistency?

A. Implement transformations in Python and deploy as a pre-processing container alongside the model
B. Use Vertex AI Feature Store for online serving and BigQuery for training
C. Use TensorFlow Transform (TFT) to create a transform graph that is bundled with the model
D. Apply transformations manually in both the training script and the serving application

Answer: C

Hint: Which tool creates a serializable transformation graph that can be used in both training and serving?

Explanation: TensorFlow Transform (TFT) analyzes the full training dataset to compute transformation parameters (like min/max for normalization) and generates a TensorFlow graph that applies those exact transformations. This graph can be bundled with the model's SavedModel, ensuring identical transformations in training and serving.

Why others wrong: Pre-processing containers can diverge from training transformations; Feature Store handles feature storage but not transformation logic; manual application is error-prone and a primary source of training-serving skew.

Trap: Thinking Feature Store solves training-serving skew — it stores features but doesn't guarantee the same transformation pipeline.

Mnemonic: Same transforms everywhere = TFT graph bundled with model; Feature lookup = Feature Store

## Q17
Type: single
Difficulty: 2
Tags: scaling, gpu-selection, vertex-ai
Concepts: accelerator-selection
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

You are scaling a prototype NLP model to production training on Vertex AI. The model has 7 billion parameters and requires 40GB of GPU memory. Which accelerator should you select?

A. NVIDIA T4 (16GB)
B. NVIDIA A100 (40GB)
C. NVIDIA L4 (24GB)
D. Cloud TPU v4

Answer: B

Hint: Match GPU memory to model requirements — which accelerator has exactly enough memory?

Explanation: The NVIDIA A100 with 40GB HBM2e memory matches the model's memory requirement. It also provides high bandwidth and compute throughput optimized for large model training. The T4 and L4 don't have enough memory, and while TPU v4 works, A100 is more straightforward for a single-GPU fit.

Why others wrong: T4 (16GB) and L4 (24GB) have insufficient memory; TPU v4 works but requires code adaptation to the TPU programming model and is better suited for even larger workloads.

Trap: Choosing L4 because it's newer — it has less memory than A100 and is designed more for inference than training.

Mnemonic: Training large models = A100 (40/80GB); Inference cost-efficient = L4/T4; Massive scale = TPU

## Q18
Type: single
Difficulty: 1
Tags: scaling, containerization, vertex-ai
Concepts: custom-container-training
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

A data scientist has a PyTorch training script that works locally and needs to run it on Vertex AI with GPU support. What is the minimal path to scale this to cloud training?

A. Rewrite the script to use TensorFlow for Vertex AI compatibility
B. Use a Vertex AI pre-built PyTorch container and submit the training script
C. Deploy the script on a Compute Engine VM with GPUs
D. Convert the model to ONNX format and use AutoML

Answer: B

Hint: Vertex AI provides pre-built containers for major frameworks — no container building needed.

Explanation: Vertex AI offers pre-built Docker containers for PyTorch (and TensorFlow, JAX, etc.) with GPU drivers already configured. You simply point to your training script and submit a custom training job — no Docker knowledge or VM management required.

Why others wrong: Rewriting to TensorFlow is unnecessary — Vertex AI supports PyTorch natively; Compute Engine requires manual GPU driver setup and job management; ONNX conversion and AutoML are unrelated to custom training.

Trap: Thinking you need to build a custom Docker container for PyTorch — Vertex AI's pre-built containers handle this.

Mnemonic: Local script → Vertex AI pre-built container = fastest path to cloud training

## Q19
Type: single
Difficulty: 3
Tags: scaling, hyperparameter-tuning, bayesian
Concepts: vizier-optimization
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

You are tuning hyperparameters for a model where each training run takes 8 hours and costs $200. You have a budget for 20 trials. Which Vertex AI Vizier optimization strategy maximizes the chance of finding good hyperparameters within this budget?

A. Grid search across all hyperparameter combinations
B. Random search with uniform sampling
C. Bayesian optimization with early stopping enabled
D. Manual tuning based on intuition

Answer: C

Hint: With expensive trials and limited budget, which strategy learns from previous trials and stops bad runs early?

Explanation: Bayesian optimization uses a probabilistic model to predict which hyperparameter combinations are most promising based on previous trial results. Combined with early stopping, it terminates underperforming trials quickly, saving budget for more promising configurations. This is far more efficient than random or grid search with only 20 trials.

Why others wrong: Grid search is combinatorially explosive and wastes budget on poor regions; random search doesn't learn from previous trials; manual tuning doesn't scale and misses complex interactions.

Trap: Defaulting to random search — while better than grid, it wastes trials on unpromising regions that Bayesian optimization would avoid.

Mnemonic: Expensive + few trials = Bayesian + early stopping; Cheap + many trials = random works fine

## Q20
Type: single
Difficulty: 2
Tags: scaling, model-evaluation, gen-ai
Concepts: gen-ai-evaluation
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

You need to evaluate the quality of summaries generated by a fine-tuned Gemini model. The summaries must be factually consistent with the source documents. Which evaluation approach provides the most reliable assessment?

A. ROUGE score comparison against reference summaries
B. BLEU score with multiple reference translations
C. Vertex AI Gen AI Evaluation with a pointwise metric for groundedness
D. Human evaluation only

Answer: C

Hint: Factual consistency with source documents is about groundedness — which tool measures this automatically?

Explanation: Vertex AI Gen AI Evaluation provides specialized metrics for generative AI, including groundedness (factual consistency with source), fluency, coherence, and safety. Pointwise evaluation scores each response individually against the source, specifically designed for detecting hallucinations.

Why others wrong: ROUGE measures text overlap, not factual accuracy; BLEU is for translation quality; human evaluation alone doesn't scale and should complement automated metrics.

Trap: Using ROUGE to assess factual consistency — high ROUGE doesn't guarantee factual accuracy, and low ROUGE doesn't mean the summary is wrong.

Mnemonic: Factual accuracy = groundedness metric; Text overlap = ROUGE/BLEU; Safety = safety metric

## Q21
Type: single
Difficulty: 2
Tags: scaling, ml-metadata, lineage
Concepts: ml-metadata-lineage
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

Your organization requires ML model audit trails for compliance. You need to trace which dataset version, training code, and hyperparameters produced each deployed model. Which Vertex AI feature provides this lineage tracking?

A. Vertex AI Model Registry version notes
B. Vertex AI ML Metadata with artifact and execution lineage
C. Cloud Audit Logs for Vertex AI API calls
D. BigQuery audit datasets

Answer: B

Hint: Which Vertex AI feature tracks the full lineage graph: data → code → model → deployment?

Explanation: Vertex AI ML Metadata automatically tracks artifacts (datasets, models), executions (training jobs, pipeline steps), and their relationships. It creates a queryable lineage graph showing exactly how each model was produced, from input data through every transformation step.

Why others wrong: Model Registry stores model versions but not full training lineage; Cloud Audit Logs track API calls but not ML-specific artifact relationships; BigQuery audit datasets are for BQ operations.

Trap: Thinking Model Registry version notes are sufficient for compliance — they're manual and don't capture the full artifact lineage graph.

Mnemonic: Full ML lineage = ML Metadata; Model versions = Model Registry; API call log = Audit Logs

## Q22
Type: single
Difficulty: 3
Tags: scaling, mixed-precision, training
Concepts: mixed-precision-training
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

You are training a large transformer model on Vertex AI with A100 GPUs but running out of GPU memory. You want to reduce memory usage while maintaining model quality. Which technique should you try first?

A. Reduce the model's hidden dimension size
B. Enable mixed-precision training (FP16/BF16 with FP32 master weights)
C. Use gradient accumulation with a batch size of 1
D. Switch to CPU training

Answer: B

Hint: Which technique halves memory usage for activations and gradients with minimal quality impact?

Explanation: Mixed-precision training stores activations and gradients in FP16/BF16 (half the memory of FP32) while maintaining FP32 master weights for numerical stability. On A100 GPUs with Tensor Cores, this also accelerates training by 2-3x. It's the lowest-risk first step for memory reduction.

Why others wrong: Reducing hidden dimensions changes the model architecture and likely hurts quality; gradient accumulation with batch size 1 is extremely slow; CPU training is impractical for large transformers.

Trap: Jumping to gradient accumulation before trying mixed precision — mixed precision is simpler, preserves batch size, and often improves speed.

Mnemonic: Memory tight → mixed precision first → gradient accumulation second → model parallel last

## Q23
Type: multi
Difficulty: 3
Tags: scaling, distributed-training, strategies
Concepts: parallelism-strategies
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

You need to train a 70-billion parameter model that doesn't fit in a single GPU's memory. Which TWO parallelism strategies should you combine? (Select TWO)

A. Data parallelism only — replicate the full model on each GPU
B. Tensor parallelism — split individual layers across GPUs
C. Pipeline parallelism — split sequential layers across GPUs
D. Reduce model size until it fits in one GPU

Answer: B, C

Hint: When a model doesn't fit in one GPU, you need model parallelism — which two strategies split the model itself?

Explanation: For models exceeding single-GPU memory, tensor parallelism splits individual layer computations across GPUs (e.g., splitting attention heads), while pipeline parallelism distributes sequential layers across GPUs. Combining them (often called 3D parallelism when adding data parallelism) enables training of very large models across GPU clusters.

Why others wrong: Data parallelism alone requires the full model to fit in each GPU; reducing model size changes the architecture and likely degrades quality.

Trap: Thinking data parallelism alone can train models larger than GPU memory — it replicates the entire model, so each GPU must hold the full model.

Mnemonic: Model too big for 1 GPU → tensor (split layers) + pipeline (split stages); Model fits → data parallelism

## Q24
Type: single
Difficulty: 1
Tags: model-development, loss-function, regression
Concepts: loss-function-selection
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

You are building a regression model to predict house prices. The dataset contains several extreme outlier prices. Which loss function is most robust to these outliers?

A. Mean Squared Error (MSE)
B. Mean Absolute Error (MAE)
C. Huber loss
D. Cross-entropy loss

Answer: C

Hint: Which loss function combines the benefits of MSE (smooth gradients) and MAE (outlier robustness)?

Explanation: Huber loss behaves like MSE for small errors (providing smooth gradients for faster convergence) and like MAE for large errors (being robust to outliers). This makes it ideal for regression tasks with outliers, as it doesn't let extreme values dominate the gradient.

Why others wrong: MSE squares errors, making it highly sensitive to outliers; MAE is robust but has non-smooth gradients at zero; cross-entropy is for classification, not regression.

Trap: Choosing MAE for outlier robustness — while correct that MAE is more robust than MSE, Huber loss provides better convergence properties.

Mnemonic: Outliers in regression → Huber = best of both (MSE smoothness + MAE robustness)

## Q25
Type: single
Difficulty: 2
Tags: model-development, embeddings, similarity
Concepts: embedding-similarity
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

You are building a product recommendation system that matches user queries to product descriptions. You need to convert both queries and descriptions into vectors for similarity search. Which Google Cloud service provides text embeddings optimized for this use case?

A. Cloud Natural Language API entity extraction
B. Vertex AI Text Embeddings API with task_type RETRIEVAL_DOCUMENT and RETRIEVAL_QUERY
C. TF-IDF vectorization in BigQuery ML
D. Word2Vec trained on your product catalog

Answer: B

Hint: Which embedding service differentiates between query and document embeddings for retrieval?

Explanation: Vertex AI Text Embeddings API provides state-of-the-art embeddings with task-specific optimization. Setting task_type to RETRIEVAL_QUERY for user queries and RETRIEVAL_DOCUMENT for product descriptions produces embeddings optimized for asymmetric semantic retrieval, where queries and documents have different characteristics.

Why others wrong: NL API extracts entities but doesn't produce dense embeddings for similarity; TF-IDF is sparse and misses semantic meaning; Word2Vec is outdated and doesn't capture contextual semantics.

Trap: Using the same task_type for both queries and documents — asymmetric retrieval requires different embedding strategies for queries vs. documents.

Mnemonic: Query ↔ Document matching = RETRIEVAL_QUERY + RETRIEVAL_DOCUMENT; Same-type comparison = SEMANTIC_SIMILARITY

## Q26
Type: single
Difficulty: 2
Tags: model-development, attention, transformer
Concepts: attention-mechanisms
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

You are designing a custom transformer model and need to reduce the quadratic memory cost of self-attention for processing long documents (100K+ tokens). Which attention variant should you implement?

A. Multi-head attention with more heads
B. Flash Attention with tiled computation
C. Cross-attention between encoder and decoder
D. Single-head attention to reduce parameters

Answer: B

Hint: Which attention implementation reduces memory usage through hardware-aware computation?

Explanation: Flash Attention uses tiled computation and kernel fusion to compute exact attention without materializing the full N×N attention matrix in GPU memory. This reduces memory from O(N²) to O(N) while maintaining mathematical equivalence to standard attention, enabling processing of much longer sequences.

Why others wrong: More attention heads increase computation, not reduce memory; cross-attention is for encoder-decoder architectures, not memory reduction; single-head attention reduces parameters slightly but doesn't address quadratic memory scaling.

Trap: Thinking Flash Attention is an approximation — it computes exact attention but uses hardware-aware tiling to avoid materializing the full attention matrix.

Mnemonic: Long sequences + memory constraint = Flash Attention (exact but O(N) memory)

## Q27
Type: single
Difficulty: 1
Tags: model-development, activation-functions, neural-networks
Concepts: activation-selection
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

You are building a neural network for a multi-class classification task with 10 mutually exclusive categories. Which activation function should you use in the output layer?

A. Sigmoid
B. Softmax
C. ReLU
D. Tanh

Answer: B

Hint: Mutually exclusive categories means probabilities must sum to 1 — which function ensures this?

Explanation: Softmax normalizes the output into a probability distribution where all values sum to 1, making it ideal for mutually exclusive multi-class classification. Each output represents the probability of belonging to that class.

Why others wrong: Sigmoid outputs independent probabilities (used for multi-label, not multi-class); ReLU is for hidden layers, not classification output; Tanh outputs range [-1,1], not probabilities.

Trap: Using sigmoid for multi-class — sigmoid treats each class independently (multi-label), while softmax enforces mutual exclusivity.

Mnemonic: Mutually exclusive = softmax (sums to 1); Independent labels = sigmoid (each 0-1)

## Q28
Type: single
Difficulty: 3
Tags: model-development, knowledge-distillation, compression
Concepts: knowledge-distillation
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

You have a high-performing Gemini Pro model for customer intent classification, but inference costs are too high for your volume. You want to create a smaller, cheaper model that maintains most of the quality. Which approach is most effective?

A. Prune the Gemini Pro model's weights
B. Distill Gemini Pro's knowledge into a smaller model using soft labels
C. Quantize Gemini Pro to INT8
D. Use Gemini Flash directly without any training

Answer: B

Hint: Which technique transfers a large model's knowledge to a smaller one by training on the large model's output probabilities?

Explanation: Knowledge distillation trains a smaller "student" model to mimic a larger "teacher" model's soft probability outputs, not just the hard labels. The soft labels carry information about inter-class relationships that hard labels miss, enabling the student to achieve near-teacher quality at a fraction of the cost.

Why others wrong: You can't prune Gemini Pro's weights (it's a managed API model); quantization reduces precision but doesn't fundamentally reduce model size for API models; Gemini Flash may work but isn't trained on your specific task's knowledge.

Trap: Choosing Gemini Flash — while cheaper, it hasn't learned from Gemini Pro's task-specific performance. Distillation transfers that specific knowledge.

Mnemonic: Big model too expensive → distill to small model; Same model too slow → quantize/prune

## Q29
Type: single
Difficulty: 2
Tags: model-development, data-augmentation, images
Concepts: image-augmentation
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

You are training an image classification model but only have 500 labeled images per class. The model is overfitting after 10 epochs. Which technique is most likely to improve generalization?

A. Increase the model's layer count for more capacity
B. Apply data augmentation (random crop, flip, rotation, color jitter)
C. Remove dropout layers to preserve information
D. Train for more epochs with a lower learning rate

Answer: B

Hint: Overfitting with limited data — which technique effectively increases training data diversity?

Explanation: Data augmentation creates synthetic variations of existing training images through geometric and photometric transformations. This effectively increases dataset diversity without requiring new labeled data, reducing overfitting by exposing the model to more visual variations during training.

Why others wrong: Increasing capacity worsens overfitting with limited data; removing dropout removes regularization; training longer amplifies overfitting.

Trap: Adding more model capacity to "learn better" — with limited data, more capacity = more overfitting.

Mnemonic: Limited data + overfitting → augmentation (more diversity) + regularization (less capacity)

## Q30
Type: single
Difficulty: 2
Tags: model-development, contrastive-learning, representations
Concepts: contrastive-learning
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

You are building a visual similarity search system for a fashion retailer. You need embeddings where similar-looking items are close together and different items are far apart. Which training objective is most appropriate?

A. Cross-entropy classification loss
B. Contrastive loss (e.g., triplet loss or InfoNCE)
C. Mean squared error regression
D. Generative adversarial loss

Answer: B

Hint: Which loss function explicitly optimizes for similar items being close and dissimilar items being far in embedding space?

Explanation: Contrastive learning objectives like triplet loss directly optimize the embedding space geometry: pulling anchor-positive pairs closer and pushing anchor-negative pairs apart. This produces embeddings where visual similarity directly corresponds to distance in embedding space, ideal for similarity search.

Why others wrong: Cross-entropy classifies into fixed categories but doesn't optimize embedding distances; MSE is for regression; GAN loss is for generation, not representation learning.

Trap: Using classification loss for similarity — it produces discriminative features but doesn't guarantee meaningful distance relationships in embedding space.

Mnemonic: Similarity search = contrastive loss (optimize distances); Category prediction = classification loss

## Q31
Type: single
Difficulty: 3
Tags: model-development, curriculum-learning, training-strategy
Concepts: curriculum-learning
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

You are training a complex multi-task model that struggles to converge. The model needs to learn basic text understanding before handling complex reasoning tasks. Which training strategy should you employ?

A. Train all tasks simultaneously with equal loss weights
B. Use curriculum learning — start with simpler tasks and gradually introduce harder ones
C. Only train on the hardest task to force the model to learn everything
D. Randomly shuffle task difficulty each epoch

Answer: B

Hint: Just like human education, some models learn better when concepts are introduced in order of difficulty.

Explanation: Curriculum learning presents training data in a meaningful order, from simple to complex. For multi-task learning, starting with foundational tasks (text understanding) before introducing complex ones (reasoning) helps the model build a strong representation foundation, improving convergence and final performance.

Why others wrong: Equal-weight simultaneous training can cause task interference and slow convergence; training only on hard tasks misses foundational learning; random shuffling prevents curriculum benefits.

Trap: Assuming all tasks should be weighted equally — some tasks benefit from being learned in a specific order.

Mnemonic: Curriculum = "school order" — easy first, hard later; the model builds understanding progressively

## Q32
Type: multi
Difficulty: 2
Tags: model-development, generative-ai, safety
Concepts: output-safety
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

You are deploying a Gemini-based application for a children's education platform. Which TWO safety measures should you implement? (Select TWO)

A. Configure safety filters to block harmful content categories at the strictest level
B. Disable all safety filters to avoid false positives
C. Add output validation with a separate content classifier before displaying to users
D. Allow all content and rely on parents to monitor

Answer: A, C

Hint: Defense in depth — use multiple layers of content safety for a children's platform.

Explanation: For a children's platform, you should configure Gemini's built-in safety filters at the strictest thresholds AND add a secondary content classifier as defense-in-depth. The built-in filters catch most harmful content, while the secondary classifier catches edge cases and domain-specific inappropriate content.

Why others wrong: Disabling safety filters on a children's platform is irresponsible; relying solely on parental monitoring is insufficient for an educational platform.

Trap: Relying on only one layer of safety — no single filter catches everything, so defense in depth is essential for high-risk audiences.

Mnemonic: Children's platform = maximum safety filters + secondary classifier (defense in depth)

## Q33
Type: single
Difficulty: 2
Tags: model-development, quantization-aware, training
Concepts: quantization-aware-training
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

You need to deploy a TensorFlow model on mobile devices with limited memory. Post-training quantization (INT8) degraded accuracy by 5%. How can you reduce this accuracy loss?

A. Apply quantization-aware training (QAT) and then quantize to INT8
B. Use FP16 quantization instead of INT8
C. Increase the model size to compensate for quantization errors
D. Deploy the FP32 model and accept slower inference

Answer: A

Hint: Which technique simulates quantization effects during training so the model learns to be robust to reduced precision?

Explanation: Quantization-aware training inserts fake quantization nodes during training, allowing the model to learn weights that are robust to quantization effects. This typically recovers most of the accuracy lost from post-training quantization, achieving near-FP32 accuracy with INT8 inference.

Why others wrong: FP16 uses more memory than INT8 and may still lose some accuracy; increasing model size defeats the purpose of quantization; keeping FP32 doesn't solve the memory constraint.

Trap: Thinking post-training quantization is the only option — QAT almost always produces better INT8 models.

Mnemonic: Post-training quantization hurts accuracy → QAT during training → model learns to handle INT8

## Q34
Type: single
Difficulty: 3
Tags: model-development, rl, reward-model
Concepts: reward-modeling
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

You are fine-tuning an LLM with RLHF for a customer service application. Your reward model consistently gives high scores to verbose responses regardless of accuracy. What should you do?

A. Increase the reinforcement learning training iterations
B. Add a length penalty to the reward function and collect more preference data focused on conciseness
C. Switch to supervised fine-tuning only
D. Increase the temperature during generation

Answer: B

Hint: The reward model has learned a shortcut (verbosity = quality) — how do you correct this bias?

Explanation: The reward model has learned a spurious correlation between response length and quality. Adding an explicit length penalty prevents the model from gaming the reward through verbosity. Collecting additional preference data where concise accurate responses are ranked higher than verbose ones retrains the reward model to value accuracy over length.

Why others wrong: More RL iterations amplify the verbosity bias; switching to SFT loses the benefits of alignment; increasing temperature adds randomness but doesn't fix the reward model's bias.

Trap: Thinking more RLHF training will fix it — more training with a biased reward model makes the bias worse (reward hacking).

Mnemonic: Reward model bias → fix the reward (add penalty + better data), don't train more with bad reward

## Q35
Type: single
Difficulty: 1
Tags: model-development, validation, stratified
Concepts: stratified-split
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

You have a dataset with 95% negative and 5% positive examples for a binary classification task. How should you split this data into training and validation sets?

A. Random split 80/20
B. Stratified split to maintain the 95/5 ratio in both sets
C. Put all positive examples in training and negatives in validation
D. Oversample positives before splitting

Answer: B

Hint: The class distribution must be preserved in both training and validation — which split method ensures this?

Explanation: Stratified splitting ensures both training and validation sets maintain the same class distribution (95% negative, 5% positive). This prevents the validation set from having too few or too many positive examples by chance, giving a reliable performance estimate on the minority class.

Why others wrong: Random split may put too few positives in validation (or training), giving unreliable metrics; segregating classes defeats the purpose of validation; oversampling before splitting leaks information from training to validation.

Trap: Oversampling before splitting — synthetic positive examples may appear in both train and validation, causing data leakage and overly optimistic metrics.

Mnemonic: Imbalanced data → stratified split first, then oversample training only (never before split)

## Q36
Type: single
Difficulty: 2
Tags: mlops, pipeline-triggers, continuous-training
Concepts: pipeline-triggers
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

You want your ML pipeline to automatically retrain the model when data drift is detected. Which combination of Google Cloud services achieves this?

A. Cloud Scheduler triggering Vertex AI Pipelines on a fixed schedule
B. Vertex AI Model Monitoring detecting drift → Cloud Functions triggering Vertex AI Pipelines
C. Pub/Sub topic with manual publishing → Cloud Run retraining job
D. BigQuery scheduled queries checking for new data

Answer: B

Hint: Which setup provides automatic drift detection AND pipeline triggering without manual intervention?

Explanation: Vertex AI Model Monitoring continuously analyzes incoming prediction requests for distribution shifts. When drift exceeds configured thresholds, it can publish to Pub/Sub or trigger Cloud Functions, which in turn start a Vertex AI Pipeline for retraining. This creates a closed-loop continuous training system driven by actual data changes.

Why others wrong: Cloud Scheduler retrains on a schedule regardless of drift; manual Pub/Sub publishing isn't automatic; BigQuery scheduled queries check data arrival, not distribution drift.

Trap: Using time-based retraining instead of drift-based — time-based may retrain when unnecessary or miss critical drift between scheduled runs.

Mnemonic: Drift-based retraining = Model Monitoring → trigger → Pipeline; Time-based = Cloud Scheduler (wasteful)

## Q37
Type: single
Difficulty: 2
Tags: mlops, feature-store, online-serving
Concepts: feature-store-online
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

Your fraud detection model needs real-time features like "number of transactions in the last 5 minutes" during online prediction. Historical training used batch-computed features from BigQuery. How should you serve these features in production?

A. Query BigQuery in real-time during each prediction request
B. Use Vertex AI Feature Store with online serving and streaming feature ingestion
C. Cache features in Memorystore and update every hour
D. Embed all feature computation in the model's preprocessing layer

Answer: B

Hint: Real-time features need low-latency serving and streaming updates — which service provides both?

Explanation: Vertex AI Feature Store with online serving provides millisecond-latency feature lookups for real-time prediction. Streaming ingestion updates features as new events arrive (e.g., each new transaction updates the 5-minute count), ensuring the model always uses fresh feature values.

Why others wrong: BigQuery real-time queries have too high latency for fraud detection; hourly Memorystore updates miss rapid fraud patterns; embedding computation in the model preprocessing can't access cross-entity features like "all transactions for this card."

Trap: Querying BigQuery for real-time features — BigQuery is optimized for analytical queries, not millisecond-latency point lookups.

Mnemonic: Real-time feature serving = Feature Store online; Batch feature computation = BigQuery/Dataflow

## Q38
Type: single
Difficulty: 3
Tags: mlops, pipeline-testing, unit-test
Concepts: pipeline-testing
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

You are writing unit tests for a Vertex AI Pipeline that includes data validation, feature engineering, training, and evaluation components. Which testing strategy provides the most confidence with reasonable test execution time?

A. Test the entire pipeline end-to-end with production data
B. Unit test each component with mock inputs, then run an integration test with a small synthetic dataset
C. Only test the training component since it's the most complex
D. Manually inspect pipeline outputs after each run

Answer: B

Hint: Which strategy balances thoroughness (testing all components) with speed (not requiring full production runs)?

Explanation: Unit testing each pipeline component with mock inputs verifies individual logic quickly. An integration test with a small synthetic dataset then validates that components work together correctly. This two-tier approach catches both component-level bugs and integration issues without the cost and time of full production runs.

Why others wrong: End-to-end with production data is slow, expensive, and hard to debug failures; testing only training misses data validation and feature engineering bugs; manual inspection doesn't scale and misses regressions.

Trap: Only running end-to-end tests — when they fail, it's hard to identify which component caused the failure.

Mnemonic: ML testing pyramid: unit tests (fast, many) → integration tests (medium) → end-to-end (slow, few)

## Q39
Type: single
Difficulty: 1
Tags: mlops, model-registry, lifecycle
Concepts: model-lifecycle
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

Your team trains multiple model versions weekly. You need to track which versions are in staging, production, and retired. Which Vertex AI feature manages model version lifecycle?

A. Vertex AI Experiments
B. Vertex AI Model Registry with version aliases
C. Cloud Storage with folder structure per version
D. A manual tracking spreadsheet

Answer: B

Hint: Which feature provides built-in version management with labels for lifecycle stages?

Explanation: Vertex AI Model Registry stores model artifacts with versioning and supports aliases (e.g., "production," "staging," "champion," "challenger") to track lifecycle state. It integrates with deployment endpoints and pipeline automation for seamless version promotion.

Why others wrong: Experiments tracks training runs, not deployed model lifecycle; Cloud Storage lacks built-in versioning semantics; spreadsheets are error-prone and not integrated with deployment.

Trap: Confusing Experiments (training phase tracking) with Model Registry (deployment lifecycle tracking).

Mnemonic: Training tracking = Experiments; Model lifecycle = Model Registry; Deployment = Endpoints

## Q40
Type: single
Difficulty: 2
Tags: mlops, data-validation, tfdv
Concepts: data-validation-pipeline
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

You want to automatically detect when incoming training data has anomalies (unexpected null values, out-of-range values, new categorical values) before it enters the training pipeline. Which tool should you integrate?

A. BigQuery data quality rules
B. TensorFlow Data Validation (TFDV) with a schema generated from baseline data
C. Python assert statements in the data loading code
D. Cloud Data Loss Prevention (DLP) API

Answer: B

Hint: Which tool generates a data schema from baseline and automatically validates new data against it?

Explanation: TFDV generates a schema from a baseline dataset, capturing expected data distributions, ranges, and categories. When new data arrives, TFDV validates it against this schema and flags anomalies: unexpected null rates, out-of-range values, new categories, and distribution drift. It integrates natively with TFX and Vertex AI Pipelines.

Why others wrong: BigQuery rules need manual definition and don't understand ML data distributions; assert statements don't learn from data patterns; DLP is for sensitive data detection (PII, credit cards), not ML data quality.

Trap: Using DLP for data quality — DLP finds sensitive data, not data distribution anomalies.

Mnemonic: ML data quality = TFDV (learns schema from data); Sensitive data = DLP; Business rules = BigQuery

## Q41
Type: single
Difficulty: 3
Tags: mlops, canary-analysis, automated
Concepts: automated-canary-analysis
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

You are deploying a new model version and want to automatically evaluate it against the current production model using real traffic before full rollout. The evaluation should consider latency, error rates, and a custom business metric. How should you implement this?

A. Deploy both versions and manually compare dashboards
B. Use Vertex AI Endpoints traffic splitting with Cloud Monitoring metrics and a Cloud Function to auto-promote or rollback based on thresholds
C. Run an A/B test for one month before deciding
D. Deploy the new version to a separate endpoint and send duplicate traffic

Answer: B

Hint: Which approach automates the canary evaluation and promotion/rollback decision?

Explanation: Vertex AI Endpoints support traffic splitting to route a percentage of traffic to the new version. Cloud Monitoring collects latency, error rates, and custom metrics from both versions. A Cloud Function evaluates these metrics against predefined thresholds and automatically promotes the new version (increase traffic) or rolls back (route all traffic to the old version).

Why others wrong: Manual dashboard comparison doesn't automate decisions; one month is too long for canary analysis; duplicate traffic wastes resources and doesn't test under real serving conditions.

Trap: Running canary analysis too long — the point is quick automated evaluation, not a prolonged experiment.

Mnemonic: Automated canary = traffic split + metric comparison + auto-promote/rollback

## Q42
Type: single
Difficulty: 2
Tags: mlops, secrets-management, training
Concepts: secrets-in-pipelines
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

Your Vertex AI Pipeline needs to access an external database to pull training data. The database credentials must not be hardcoded or stored in the pipeline code. How should you securely provide credentials?

A. Pass credentials as pipeline parameters
B. Use Secret Manager and grant the pipeline's service account access to the secret
C. Store credentials in a Cloud Storage config file
D. Set credentials as environment variables in the container image

Answer: B

Hint: Which Google Cloud service is purpose-built for managing secrets with access control?

Explanation: Secret Manager provides encrypted, versioned secret storage with fine-grained IAM access control. The pipeline's service account can be granted access to specific secrets, which are fetched at runtime. No credentials are stored in code, config files, or container images.

Why others wrong: Pipeline parameters are logged and visible in the UI; Cloud Storage config files lack encryption and audit trails; environment variables in images are baked in and visible to anyone with image access.

Trap: Passing credentials as pipeline parameters — they appear in the pipeline run metadata and logs.

Mnemonic: Secrets = Secret Manager (encrypted, audited, access-controlled); never in code/config/params

## Q43
Type: single
Difficulty: 2
Tags: mlops, pipeline-scheduling, vertex-ai
Concepts: pipeline-scheduling
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

You need to retrain your recommendation model every Sunday at 2 AM using the latest user interaction data. Which approach is most maintainable on Google Cloud?

A. A cron job on a Compute Engine VM that calls the Vertex AI API
B. Vertex AI Pipeline Schedules with a cron expression
C. Cloud Scheduler triggering a Cloud Function that starts the pipeline
D. A developer manually triggering the pipeline each Sunday

Answer: B

Hint: Vertex AI has built-in pipeline scheduling — which option requires the least additional infrastructure?

Explanation: Vertex AI Pipeline Schedules allow you to configure recurring pipeline runs using cron expressions directly in the Vertex AI console or SDK. No additional infrastructure (VMs, Cloud Functions) is needed, making it the most maintainable option.

Why others wrong: A Compute Engine VM requires maintenance and monitoring; Cloud Scheduler + Cloud Function works but adds unnecessary components; manual triggering doesn't scale and is error-prone.

Trap: Building a Cloud Scheduler → Cloud Function → Pipeline chain when Vertex AI has built-in scheduling.

Mnemonic: Vertex AI Pipeline scheduling = built-in cron; don't add Cloud Scheduler unless you need complex trigger logic

## Q44
Type: single
Difficulty: 3
Tags: mlops, genai-ops, prompt-versioning
Concepts: prompt-management
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

Your team maintains 50+ prompts for various Gemini-powered features. Prompts need versioning, A/B testing, and rollback capabilities. How should you manage prompt lifecycle on Google Cloud?

A. Store prompts in Cloud Storage with object versioning
B. Use Vertex AI Prompt Management with prompt versions and evaluation
C. Keep prompts in a Git repository and deploy via CI/CD
D. Hardcode prompts in application code

Answer: B

Hint: Which Vertex AI feature is purpose-built for prompt versioning, evaluation, and management?

Explanation: Vertex AI Prompt Management provides structured prompt versioning, comparison, evaluation against test datasets, and deployment management. It supports A/B testing between prompt versions and rollback, treating prompts as first-class ML artifacts rather than code strings.

Why others wrong: Cloud Storage versioning lacks evaluation and A/B testing capabilities; Git + CI/CD works for versioning but lacks built-in prompt evaluation; hardcoded prompts are impossible to manage at scale.

Trap: Treating prompts like code in Git — while version control is important, prompts need evaluation and A/B testing infrastructure that Git alone doesn't provide.

Mnemonic: Prompt lifecycle = Vertex AI Prompt Management; Code lifecycle = Git + CI/CD

## Q45
Type: single
Difficulty: 2
Tags: mlops, artifact-lineage, containers
Concepts: container-image-management
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

Your ML pipeline builds custom Docker containers for training and serving. You need to manage these containers with vulnerability scanning and image signing. Which Google Cloud service should you use?

A. Docker Hub
B. Artifact Registry with container analysis and Binary Authorization
C. Cloud Storage for storing Docker tar files
D. Compute Engine container registry

Answer: B

Hint: Which Google Cloud native service provides container management with security features?

Explanation: Artifact Registry is Google Cloud's managed container registry that supports vulnerability scanning (Container Analysis), image signing, and Binary Authorization for deployment security. It integrates with Vertex AI custom training and prediction for seamless ML container workflows.

Why others wrong: Docker Hub is external and lacks Google Cloud security integration; Cloud Storage can store tarballs but has no container management features; there's no "Compute Engine container registry."

Trap: Using Docker Hub for ML containers — it lacks vulnerability scanning integration with Google Cloud's security tooling.

Mnemonic: ML containers = Artifact Registry (scan + sign + deploy); Python packages also = Artifact Registry

## Q46
Type: multi
Difficulty: 3
Tags: mlops, pipeline-optimization, caching
Concepts: pipeline-caching-strategy
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

Your Vertex AI Pipeline runs daily and takes 6 hours. The data preprocessing step (2 hours) often processes the same data when no new data arrives. Which TWO techniques reduce pipeline runtime? (Select TWO)

A. Enable pipeline step caching to skip steps with unchanged inputs
B. Run the entire pipeline even when no new data arrives
C. Use Dataflow for the preprocessing step to parallelize computation
D. Remove the preprocessing step entirely

Answer: A, C

Hint: Which two approaches address the problem from different angles — avoiding unnecessary work and speeding up necessary work?

Explanation: Pipeline step caching skips steps when their inputs haven't changed (avoiding the 2-hour preprocessing when data is the same). Dataflow parallelizes the preprocessing computation when it does need to run, potentially reducing it from 2 hours to minutes. Together, they minimize both unnecessary runs and runtime when runs are needed.

Why others wrong: Running the full pipeline when no data changes wastes 2+ hours; removing preprocessing entirely would break the pipeline's data quality guarantees.

Trap: Only using caching — it helps when data hasn't changed, but when new data arrives you still want fast preprocessing via Dataflow.

Mnemonic: Skip unnecessary work = caching; Speed up necessary work = parallelization (Dataflow)

## Q47
Type: single
Difficulty: 1
Tags: deployment, serving-pattern, online-batch
Concepts: serving-patterns
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

A marketing team needs to score their entire customer database (10 million records) overnight to select targets for tomorrow's email campaign. Which serving pattern is most appropriate?

A. Online prediction with an always-on endpoint
B. Batch prediction with Vertex AI batch jobs
C. Real-time streaming with Pub/Sub
D. On-device prediction with TensorFlow Lite

Answer: B

Hint: Scoring millions of records overnight is a classic batch workload — which serving pattern fits?

Explanation: Batch prediction processes large datasets asynchronously, spinning up resources for the job and shutting them down when complete. It's cost-effective for scoring millions of records when results aren't needed immediately, as there's no cost for idle endpoint time.

Why others wrong: Online endpoints charge for always-on resources and can't efficiently process 10M records; streaming is for continuous real-time processing; on-device doesn't apply to server-side batch scoring.

Trap: Using online endpoints for batch scoring — you'd pay for idle endpoint time and the API call overhead per record.

Mnemonic: Score now, one at a time = online; Score many later = batch; Score continuously = streaming

## Q48
Type: single
Difficulty: 2
Tags: deployment, multi-model, endpoint
Concepts: multi-model-serving
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

You have three models (sentiment, intent, entity extraction) that are always called together when processing customer messages. Each model is small and doesn't need its own GPU. How should you deploy them cost-effectively?

A. Deploy each model on a separate Vertex AI endpoint
B. Package all three models in a single custom container and deploy to one endpoint
C. Use Cloud Functions to call each model's separate endpoint
D. Deploy on three separate Compute Engine VMs

Answer: B

Hint: When models are always called together and are small, what's the most resource-efficient deployment?

Explanation: Packaging all three models in a single custom container on one endpoint eliminates the overhead of three separate endpoints (3x minimum resources, 3x network calls). Since the models are small and always used together, a single container can serve all three with a single API call, reducing both cost and latency.

Why others wrong: Separate endpoints triple the minimum compute cost; Cloud Functions add latency for three sequential calls; Compute Engine VMs require manual management.

Trap: Deploying each model separately "for modularity" — when models are always co-invoked, co-location saves cost and reduces latency.

Mnemonic: Always together + small models = one container; Independent + large models = separate endpoints

## Q49
Type: single
Difficulty: 3
Tags: deployment, gpu-sharing, cost-optimization
Concepts: gpu-sharing-deployment
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

You have 20 small ML models deployed on Vertex AI, each using less than 2GB of GPU memory. Currently, each model has its own GPU, resulting in high costs. How can you reduce GPU costs?

A. Switch all models to CPU-only serving
B. Use Vertex AI multi-model endpoints with GPU sharing via NVIDIA MPS
C. Consolidate all 20 models into a single model
D. Schedule models to share GPUs by time-slicing manually

Answer: B

Hint: Multiple small models can share a single GPU — which Vertex AI feature enables this?

Explanation: Vertex AI supports deploying multiple models to the same endpoint and GPU using NVIDIA Multi-Process Service (MPS). Each model gets isolated GPU memory and compute while sharing the physical GPU. This can reduce GPU costs by 10-20x when individual models are GPU-underutilized.

Why others wrong: CPU-only may increase latency significantly for some models; consolidating 20 models into one is architecturally impractical; manual time-slicing is fragile and wastes GPU during transitions.

Trap: Switching to CPU to save cost — GPU sharing preserves the latency benefits of GPU inference while sharing the cost.

Mnemonic: Small models + expensive GPUs = share GPUs (MPS); Large models = dedicated GPUs

## Q50
Type: single
Difficulty: 2
Tags: deployment, autoscaling, vertex-ai
Concepts: endpoint-autoscaling
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

Your prediction endpoint receives 100 QPS during business hours but drops to near zero at night. You want to minimize cost while maintaining low latency during peak hours. How should you configure the endpoint?

A. Set a fixed number of replicas for peak load
B. Configure autoscaling with min replicas = 1 and target CPU utilization
C. Use a serverless endpoint to scale to zero
D. Deploy on preemptible VMs for cost savings

Answer: C

Hint: Near-zero traffic at night — which option avoids paying for idle resources?

Explanation: Vertex AI serverless endpoints (private endpoints with scale-to-zero) automatically scale based on traffic, including scaling to zero when there's no traffic. This eliminates costs during off-hours while auto-scaling up for peak hours, providing the best cost optimization for highly variable workloads.

Why others wrong: Fixed replicas waste money during low-traffic hours; autoscaling with min=1 still pays for one replica at night; preemptible VMs can be interrupted and don't address scaling.

Trap: Setting min replicas to 1 "just in case" — if traffic drops to zero, even one replica is wasteful.

Mnemonic: Traffic drops to zero = scale to zero (serverless); Always some traffic = autoscale with min=1

## Q51
Type: single
Difficulty: 2
Tags: deployment, model-optimization, tensorrt
Concepts: tensorrt-optimization
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

You need to reduce your model's inference latency from 200ms to under 50ms for real-time fraud detection. The model runs on NVIDIA GPUs. Which optimization is most likely to achieve this speedup?

A. Increase the number of GPU replicas
B. Optimize the model with TensorRT for GPU-specific graph optimization
C. Switch to a larger GPU with more CUDA cores
D. Increase the batch size for better GPU utilization

Answer: B

Hint: Which tool performs GPU-specific optimizations like layer fusion and precision calibration?

Explanation: TensorRT optimizes neural network inference on NVIDIA GPUs through layer fusion, kernel auto-tuning, precision calibration (FP16/INT8), and memory optimization. These optimizations can reduce latency by 2-10x without changing the model architecture, making it the most effective path from 200ms to 50ms.

Why others wrong: More replicas increase throughput, not reduce single-request latency; a larger GPU helps but doesn't achieve the 4x speedup TensorRT provides; increasing batch size increases latency for individual requests.

Trap: Adding replicas to reduce latency — more replicas handle more concurrent requests but each request still takes 200ms.

Mnemonic: Latency reduction = optimize the model (TensorRT); Throughput increase = add replicas

## Q52
Type: single
Difficulty: 3
Tags: deployment, blue-green, rollback
Concepts: blue-green-deployment
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

You are deploying a critical model update that changes the output format. The update is not backward-compatible with existing client applications. How should you deploy to allow instant rollback if issues arise?

A. In-place update of the existing endpoint
B. Blue-green deployment with a new endpoint, DNS switch, and the old endpoint kept warm
C. Canary deployment with gradual traffic shift
D. Deploy and immediately delete the old version

Answer: B

Hint: Non-backward-compatible changes need instant switchover and rollback — which pattern provides this?

Explanation: Blue-green deployment creates a completely new endpoint (green) alongside the existing one (blue). After validating the green endpoint, DNS or load balancer configuration switches all traffic instantly. If issues arise, switching back to blue provides immediate rollback. The old endpoint stays warm during the transition period.

Why others wrong: In-place update has no rollback path; canary deployment sends mixed output formats to clients simultaneously (breaking non-backward-compatible changes); deleting the old version eliminates rollback capability.

Trap: Using canary deployment for non-backward-compatible changes — clients would receive responses in two different formats simultaneously.

Mnemonic: Breaking changes = blue-green (all at once); Compatible changes = canary (gradual); blue-green keeps old version warm for rollback

## Q53
Type: single
Difficulty: 2
Tags: deployment, serving-container, custom-prediction
Concepts: custom-prediction-routine
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

Your model requires complex pre-processing (feature lookup, text normalization, embedding) and post-processing (threshold logic, response formatting) around the core inference call. How should you implement this on Vertex AI?

A. Handle all pre/post-processing in the client application
B. Use a Vertex AI custom prediction routine (CPR) with pre/post-processing methods
C. Deploy three separate endpoints: pre-processing, model, post-processing
D. Add pre/post-processing to the model's TensorFlow SavedModel signature

Answer: B

Hint: Which Vertex AI feature lets you add custom code around the model's predict method?

Explanation: Custom Prediction Routines (CPR) allow you to define custom preprocess() and postprocess() methods that wrap the model's predict call. All logic runs in a single container on the same endpoint, minimizing latency and keeping the preprocessing/postprocessing logic co-located with the model.

Why others wrong: Client-side processing increases client complexity and creates consistency issues; three endpoints add latency and operational overhead; modifying the SavedModel signature is limited and doesn't support arbitrary Python logic.

Trap: Splitting processing across multiple endpoints — this adds network latency and creates more failure points.

Mnemonic: Custom logic around prediction = CPR (one endpoint, three steps); Standard model = default prediction

## Q54
Type: single
Difficulty: 1
Tags: deployment, endpoint-logging, prediction
Concepts: prediction-logging
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

You need to log all prediction requests and responses from your Vertex AI endpoint for debugging and compliance. Which feature should you enable?

A. Cloud Audit Logs
B. Vertex AI endpoint request-response logging to BigQuery
C. Cloud Trace for latency analysis
D. Custom application-level logging in the serving container

Answer: B

Hint: Which Vertex AI feature automatically logs prediction inputs and outputs to a queryable data store?

Explanation: Vertex AI endpoints support request-response logging that automatically captures prediction inputs and outputs and stores them in BigQuery. This provides queryable, structured logs for debugging, compliance auditing, and downstream analysis like monitoring data drift.

Why others wrong: Cloud Audit Logs capture API calls but not prediction payloads; Cloud Trace measures latency, not request content; custom logging requires code changes and doesn't integrate with BigQuery automatically.

Trap: Thinking Cloud Audit Logs capture prediction content — they only log that a prediction API call was made, not what was sent/returned.

Mnemonic: Prediction content logging = BigQuery table; API call audit = Cloud Audit Logs; Latency = Cloud Trace

## Q55
Type: single
Difficulty: 1
Tags: monitoring, concept-drift, detection
Concepts: concept-drift
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

After deploying a loan default prediction model, its accuracy has gradually decreased over 6 months even though the input feature distributions haven't changed. What type of drift is most likely occurring?

A. Data drift — input distributions have shifted
B. Concept drift — the relationship between inputs and outcomes has changed
C. Prediction drift — model outputs have changed
D. Training-serving skew — preprocessing differs

Answer: B

Hint: When inputs look the same but predictions get worse, the real-world relationship between features and target has changed.

Explanation: Concept drift occurs when the underlying relationship between input features and the target variable changes. In lending, economic conditions, regulations, or borrower behavior changes can alter what makes a loan likely to default, even when the feature distributions appear stable.

Why others wrong: Data drift would show changed input distributions; prediction drift is a symptom, not a root cause; training-serving skew would cause immediate errors, not gradual degradation.

Trap: Confusing concept drift with data drift — data drift changes the inputs; concept drift changes what the inputs mean for the outcome.

Mnemonic: Same inputs, different outcomes = concept drift; Different inputs = data drift

## Q56
Type: single
Difficulty: 2
Tags: monitoring, feature-attribution, debugging
Concepts: feature-attribution-monitoring
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

Your model's overall accuracy is stable, but you notice certain customer segments are getting worse predictions. Which Vertex AI monitoring feature helps identify which features are driving the degradation for specific segments?

A. Overall prediction drift monitoring
B. Feature attribution drift monitoring with sliced analysis
C. Latency monitoring per endpoint
D. Training data statistics comparison

Answer: B

Hint: Which monitoring approach shows how individual features' influence on predictions has changed for specific data slices?

Explanation: Feature attribution drift monitoring tracks how much each feature contributes to predictions over time. Combined with sliced analysis (breaking down by customer segment), it reveals which features have shifted in importance for specific segments, pinpointing the root cause of segment-specific degradation.

Why others wrong: Overall prediction drift misses segment-level issues; latency monitoring measures speed, not accuracy; training data statistics show historical distributions but not how feature importance has changed in production.

Trap: Only monitoring overall metrics — segment-level degradation can hide behind stable aggregate metrics (Simpson's paradox).

Mnemonic: Overall OK but segments bad = slice the monitoring; Feature attribution = why predictions changed

## Q57
Type: single
Difficulty: 2
Tags: monitoring, alerting, slo
Concepts: ml-slo-alerting
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

You need to set up alerting for your ML model endpoint. Which set of metrics should trigger alerts for model health (not just infrastructure health)?

A. CPU utilization, memory usage, disk I/O
B. Prediction latency P99, error rate, prediction drift score, feature skew score
C. Network bandwidth, connection count
D. Container restart count, pod status

Answer: B

Hint: Model health metrics reflect prediction quality and behavior, not just infrastructure status.

Explanation: ML-specific SLOs should monitor prediction latency (user experience), error rates (reliability), prediction drift (output distribution changes), and feature skew (training-serving inconsistency). These metrics detect model-level problems that infrastructure metrics miss, like a model silently returning degraded predictions.

Why others wrong: CPU/memory/disk/network metrics are infrastructure concerns that don't reflect model quality; container restarts indicate infrastructure issues, not model health.

Trap: Only monitoring infrastructure — the model can be producing garbage predictions while CPU and memory look perfectly healthy.

Mnemonic: Infra health = CPU/memory/disk; Model health = latency + errors + drift + skew

## Q58
Type: single
Difficulty: 3
Tags: monitoring, ground-truth, delayed-labels
Concepts: delayed-ground-truth
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

Your churn prediction model predicts whether a customer will churn in the next 30 days. Ground truth (whether they actually churned) isn't available until 30 days after the prediction. How should you monitor model performance during this delay?

A. Wait 30 days before monitoring any metrics
B. Use proxy metrics (reduced app usage, support ticket frequency) as early indicators, and compute actual accuracy on a 30-day lag
C. Assume the model is correct if no complaints are received
D. Only monitor prediction distribution without evaluating accuracy

Answer: B

Hint: When ground truth is delayed, what can serve as early warning signals before actual outcomes are known?

Explanation: Proxy metrics that correlate with churn (declining usage, increased support contacts) provide early signals of model performance. Meanwhile, a 30-day lagged accuracy computation using actual churn data validates model predictions on a rolling basis. This two-tier approach provides both early warnings and eventual ground-truth validation.

Why others wrong: Waiting 30 days means issues go undetected for a month; no complaints doesn't mean predictions are correct; monitoring only prediction distribution misses accuracy entirely.

Trap: Not monitoring anything because ground truth is delayed — proxy metrics and lagged evaluation together provide useful signal.

Mnemonic: Delayed labels → proxy metrics for early warning + lagged accuracy for ground truth

## Q59
Type: single
Difficulty: 2
Tags: responsible-ai, model-cards, documentation
Concepts: model-cards
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

Your organization requires documentation for every deployed ML model covering intended use, limitations, fairness evaluation results, and performance metrics across demographic groups. Which artifact should you create?

A. A README file in the model's repository
B. A Model Card following Google's Model Card framework
C. An email to stakeholders with model details
D. A Confluence page with training logs

Answer: B

Hint: Which standardized documentation format is designed specifically for communicating ML model details to stakeholders?

Explanation: Model Cards are a standardized framework (pioneered by Google) for documenting ML models. They include intended use, limitations, ethical considerations, performance across demographic groups, training data details, and evaluation results. They serve as a single source of truth for model governance and stakeholder communication.

Why others wrong: README files lack structure for ML-specific concerns; email is ephemeral and not standardized; Confluence pages aren't standardized for ML documentation.

Trap: Thinking any documentation format is sufficient — Model Cards provide a structured framework ensuring all critical ML governance aspects are covered.

Mnemonic: Model Card = "nutrition label for ML models" — standardized, comprehensive, stakeholder-facing

## Q60
Type: single
Difficulty: 3
Tags: responsible-ai, differential-privacy, training
Concepts: differential-privacy-training
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

You are training a model on sensitive healthcare data and need to ensure individual patient records cannot be extracted from the model. The privacy budget (epsilon) is set to 1.0. What does a lower epsilon value mean?

A. Less privacy protection but better model utility
B. Stronger privacy protection but potentially reduced model utility
C. Faster training speed
D. More training data is required

Answer: B

Hint: In differential privacy, epsilon is the privacy budget — lower means tighter privacy.

Explanation: Epsilon (ε) in differential privacy controls the privacy-utility tradeoff. Lower epsilon means more noise is added to gradients during training, making it harder to extract individual records but potentially reducing model accuracy. An epsilon of 1.0 provides strong privacy; values closer to 0 provide even stronger guarantees at the cost of utility.

Why others wrong: Lower epsilon provides more privacy, not less; epsilon doesn't directly affect training speed; data requirements depend on model complexity, not epsilon.

Trap: Thinking higher epsilon = more privacy — it's the opposite. Higher epsilon = less noise = less privacy.

Mnemonic: Epsilon = privacy "spending" — lower epsilon = spend less privacy = stronger protection (but noisier model)

## Q61
Type: single
Difficulty: 2
Tags: responsible-ai, counterfactual-fairness, bias
Concepts: counterfactual-fairness
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

Your hiring model may be biased against certain demographic groups. You want to test whether changing a candidate's demographic attributes (while keeping all other attributes the same) would change the model's prediction. Which fairness analysis technique is this?

A. Disparate impact analysis
B. Counterfactual fairness testing
C. Calibration analysis across groups
D. Equal opportunity analysis

Answer: B

Hint: Changing one attribute while holding others constant = "what if this person were in a different group?"

Explanation: Counterfactual fairness testing changes protected attributes (e.g., gender, race) while keeping all other features identical, then checks if the model's prediction changes. If it does, the model's decision depends on the protected attribute, indicating potential unfairness.

Why others wrong: Disparate impact looks at outcome rates across groups, not individual counterfactuals; calibration checks if predicted probabilities match actual rates per group; equal opportunity checks true positive rates across groups.

Trap: Confusing disparate impact (group-level statistical comparison) with counterfactual fairness (individual-level "what if" analysis).

Mnemonic: Counterfactual = "What if this person were in a different group?" — change one thing, check the prediction

## Q62
Type: single
Difficulty: 1
Tags: responsible-ai, vertex-ai, explainability-methods
Concepts: integrated-gradients
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

You want to explain why your image classification model classified a specific image as "defective." You need pixel-level attribution showing which parts of the image influenced the prediction. Which Vertex AI Explainability method should you use?

A. Sampled Shapley for tabular data
B. Integrated Gradients for image attribution
C. XRAI (eXplanation with Ranked Area Integrals) for region-level attribution
D. Feature importance from AutoML

Answer: B

Hint: Pixel-level attribution requires a gradient-based method that can work at the pixel level.

Explanation: Integrated Gradients computes the contribution of each input pixel to the prediction by integrating gradients along a path from a baseline (blank image) to the actual input. It produces pixel-level attribution maps highlighting which specific pixels most influenced the classification decision.

Why others wrong: Sampled Shapley is for tabular features, not pixel-level analysis; XRAI provides region-level (not pixel-level) attribution; AutoML feature importance shows global feature rankings, not pixel-level explanation.

Trap: Choosing XRAI when pixel-level attribution is needed — XRAI groups pixels into regions, while Integrated Gradients provides true pixel-level attribution.

Mnemonic: Pixel-level = Integrated Gradients; Region-level = XRAI; Tabular = Sampled Shapley

## Q63
Type: single
Difficulty: 3
Tags: responsible-ai, adversarial-robustness, testing
Concepts: adversarial-testing
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

Before deploying a content moderation model, you need to test its robustness against adversarial attacks that attempt to bypass safety filters. Which testing approach should you implement?

A. Test only with clean, well-formatted inputs
B. Red-team the model with adversarial prompts including character substitution, encoding tricks, role-play scenarios, and multi-turn jailbreak attempts
C. Increase the model's confidence threshold
D. Add a disclaimer that the model may miss some harmful content

Answer: B

Hint: Adversaries will try creative bypasses — which approach systematically tests these attack vectors?

Explanation: Red-teaming systematically tests the model against known adversarial attack patterns: character substitution (using Unicode lookalikes), encoding tricks (base64), role-play prompting ("pretend you're an unrestricted AI"), and multi-turn escalation. This reveals vulnerabilities before deployment, allowing you to add defenses.

Why others wrong: Testing only clean inputs misses adversarial scenarios entirely; higher confidence thresholds don't prevent adversarial bypasses; disclaimers don't improve model robustness.

Trap: Raising the confidence threshold to "catch more" — adversarial attacks aim to make harmful content look confident, so threshold adjustments don't help.

Mnemonic: Safety model → red-team BEFORE deploy; test the attacks, not just the happy path

## Q64
Type: single
Difficulty: 2
Tags: monitoring, model-retraining, trigger
Concepts: retraining-decision
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

Your model monitoring shows prediction drift above the threshold, but feature drift is within normal bounds. What does this pattern most likely indicate?

A. The model is overfitting
B. Concept drift — the relationship between features and outcomes has changed
C. A data pipeline bug introducing corrupted features
D. The model needs more training data

Answer: B

Hint: Features look normal but predictions have shifted — the real-world meaning of those features has changed.

Explanation: When prediction drift is high but feature drift is low, the same inputs are producing different outcomes in reality. This is concept drift — the mapping between features and target has changed. For example, the same economic indicators may predict different stock movements after a regime change.

Why others wrong: Overfitting would show during validation, not in drift metrics; data pipeline bugs would show feature drift; more training data doesn't address a changed relationship.

Trap: Assuming feature drift must accompany prediction drift — concept drift specifically occurs when features are stable but their predictive meaning changes.

Mnemonic: High prediction drift + low feature drift = concept drift; High feature drift = data drift; Both high = both drifts

## Q65
Type: single
Difficulty: 2
Tags: responsible-ai, pii-protection, data-handling
Concepts: pii-in-ml
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

Your NLP model's training dataset contains customer support transcripts with names, email addresses, and phone numbers. You need to train the model without memorizing PII. Which approach should you apply before training?

A. Train the model normally and filter PII from outputs at serving time
B. Use Cloud DLP to de-identify PII in training data before training, and apply differential privacy during training
C. Manually review all transcripts to remove PII
D. Use a smaller model that can't memorize as much

Answer: B

Hint: PII protection needs both pre-training (remove PII from data) and during-training (prevent memorization) measures.

Explanation: Cloud DLP automatically identifies and redacts PII (names, emails, phone numbers) from training data. Differential privacy during training adds noise to prevent the model from memorizing any remaining sensitive patterns. This defense-in-depth approach provides robust PII protection at scale.

Why others wrong: Filtering PII only at serving time means the model has already memorized it (extractable via adversarial prompts); manual review doesn't scale; model size doesn't prevent memorization (even small models can memorize).

Trap: Only filtering PII at serving time — the model still contains memorized PII that adversarial attacks can extract.

Mnemonic: PII protection = DLP before training (remove) + differential privacy during training (prevent memorization)

## Q66
Type: single
Difficulty: 3
Tags: monitoring, ab-testing, statistical-significance
Concepts: experiment-analysis
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

You are running an A/B test comparing a new recommendation model against the production model. After 3 days, the new model shows a 2% improvement in click-through rate, but the p-value is 0.15. What should you do?

A. Deploy the new model since it shows improvement
B. Continue the test until the p-value drops below 0.05 or the sample size reaches the pre-calculated minimum
C. Stop the test and keep the old model since p > 0.05
D. Reduce the significance threshold to 0.15

Answer: B

Hint: Statistical significance requires sufficient sample size — what should you do when results are inconclusive?

Explanation: A p-value of 0.15 means the result isn't statistically significant at the conventional 0.05 level — you can't confidently rule out that the improvement is due to random chance. You should continue the test until reaching the pre-calculated minimum sample size for the desired effect size and significance level.

Why others wrong: Deploying on non-significant results risks a false positive; stopping early misses a potentially real improvement; lowering the threshold to fit the data is p-hacking.

Trap: Stopping the test early when results look promising — this inflates false positive rates due to multiple testing (peeking problem).

Mnemonic: p > 0.05 = keep testing (if sample size not reached); p < 0.05 + sufficient samples = conclude; Never change the threshold to fit the data

## Q67
Type: single
Difficulty: 2
Tags: scaling, data-labeling, active-learning
Concepts: active-learning
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

You have 1 million unlabeled images and budget to label only 10,000 of them. You want the labeled set to maximize model performance. Which data selection strategy should you use?

A. Randomly sample 10,000 images
B. Use active learning to select the most informative images for labeling
C. Label the first 10,000 images chronologically
D. Cluster images and label one per cluster

Answer: B

Hint: Which strategy iteratively selects the examples that would most improve the model?

Explanation: Active learning uses the current model to identify examples it's most uncertain about, then prioritizes those for labeling. These high-uncertainty examples are the most informative for improving the model's decision boundary, making each labeled example more valuable than a random selection.

Why others wrong: Random sampling doesn't prioritize informative examples; chronological selection introduces time bias; one per cluster provides breadth but not depth on difficult cases.

Trap: Thinking random sampling is sufficient — active learning can achieve the same performance with 3-10x fewer labeled examples.

Mnemonic: Limited labeling budget → active learning (label what confuses the model most)

## Q68
Type: single
Difficulty: 1
Tags: model-development, cross-validation, evaluation
Concepts: cross-validation-strategy
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

You have 2,000 samples for training a classification model and want reliable performance estimates. The data has no temporal or group dependencies. Which evaluation strategy should you use?

A. Hold out 20% for testing
B. Stratified k-fold cross-validation with k=5
C. Leave-one-out cross-validation
D. Train on all data and report training accuracy

Answer: B

Hint: With limited data, which strategy maximizes both training data usage and evaluation reliability?

Explanation: Stratified k-fold cross-validation trains on 4/5 of the data and evaluates on 1/5, rotating through all folds. Stratification ensures each fold maintains the class distribution. This gives a more reliable performance estimate than a single hold-out split while using all data for both training and evaluation.

Why others wrong: A single 80/20 split is sensitive to which data ends up in which set; leave-one-out is computationally expensive for 2,000 samples; training accuracy doesn't estimate generalization.

Trap: Using a simple train/test split with small data — the single split may not be representative, giving misleading performance estimates.

Mnemonic: Small data = k-fold (use all data); Large data = single hold-out is fine; Always stratify for imbalanced classes

## Q69
Type: single
Difficulty: 3
Tags: model-development, multi-task-learning, shared-layers
Concepts: multi-task-architecture
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

You are building a model that simultaneously predicts customer churn probability and expected lifetime value. These tasks share some underlying patterns (customer engagement) but have different output formats. Which architecture is most appropriate?

A. Two completely separate models
B. A shared-bottom multi-task model with task-specific heads
C. A single model with one output that predicts both values
D. Predict churn first, then use the prediction as input to a separate LTV model

Answer: B

Hint: Related tasks with shared patterns but different outputs — which architecture shares learning while keeping separate outputs?

Explanation: A shared-bottom multi-task model uses common lower layers to learn shared representations (customer engagement patterns) and task-specific upper layers (heads) for each output type. This improves both tasks through shared learning while respecting their different output formats (probability for churn, continuous value for LTV).

Why others wrong: Separate models miss shared learning opportunities; a single output can't produce both a probability and a continuous value in different ranges; sequential prediction introduces error propagation and doesn't enable shared learning.

Trap: Building separate models for related tasks — multi-task learning with shared representations often outperforms both individual models.

Mnemonic: Related tasks, different outputs = shared bottom + separate heads; Unrelated tasks = separate models

## Q70
Type: single
Difficulty: 2
Tags: mlops, vertex-ai-pipelines, conditional
Concepts: conditional-pipeline
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

Your ML pipeline should automatically deploy a new model only if its validation accuracy exceeds the currently deployed model's accuracy by at least 2%. Otherwise, it should skip deployment. How should you implement this logic?

A. Add a manual approval step after evaluation
B. Use a conditional component in Vertex AI Pipelines that compares metrics and gates the deployment step
C. Always deploy and rollback if performance drops
D. Set a Cloud Monitoring alert to trigger deployment

Answer: B

Hint: Which pipeline feature allows branching logic based on metric comparisons?

Explanation: Vertex AI Pipelines supports conditional components (using dsl.Condition or kfp.dsl.If) that evaluate conditions at runtime. You can compare the new model's validation accuracy against the deployed model's accuracy and conditionally execute the deployment step only if the improvement threshold is met.

Why others wrong: Manual approval slows down the pipeline; always deploying risks serving worse models; Cloud Monitoring alerts operate outside the pipeline and can't gate pipeline steps.

Trap: Always deploying and relying on rollback — this exposes users to a potentially worse model before the rollback occurs.

Mnemonic: Conditional deployment = pipeline gate (compare metrics before deploy); never "deploy and hope"

## Q71
Type: single
Difficulty: 1
Tags: deployment, model-format, serving
Concepts: model-format-selection
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

You trained a PyTorch model and need to deploy it on Vertex AI for online prediction. Which model format should you export?

A. TensorFlow SavedModel format
B. PyTorch TorchScript (scripted or traced) or the model file with a custom serving container
C. ONNX format for Vertex AI AutoML
D. Pickle file (.pkl)

Answer: B

Hint: Vertex AI supports PyTorch natively — which format preserves PyTorch model logic for serving?

Explanation: Vertex AI supports PyTorch models through TorchScript (a serialized format) or by packaging the model with a custom serving container. TorchScript captures both model architecture and weights in a deployment-ready format, while custom containers give full control over the serving logic.

Why others wrong: Converting to TensorFlow SavedModel is unnecessary since Vertex AI supports PyTorch; ONNX isn't used with AutoML; pickle files are not production-safe and have security risks.

Trap: Thinking you need to convert PyTorch to TensorFlow for Vertex AI — Vertex AI supports PyTorch natively through pre-built serving containers.

Mnemonic: PyTorch deploy = TorchScript or custom container; TensorFlow deploy = SavedModel; Both work natively on Vertex AI

## Q72
Type: single
Difficulty: 2
Tags: monitoring, model-performance, segmented
Concepts: segmented-monitoring
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

Your overall model accuracy is 92%, but stakeholders report poor performance for specific product categories. How should you investigate?

A. Retrain the model with more data
B. Set up segmented monitoring to track accuracy per product category and identify underperforming segments
C. Increase the model's complexity
D. A/B test a new model immediately

Answer: B

Hint: The first step is diagnosis, not action — which approach identifies exactly where performance is poor?

Explanation: Segmented monitoring breaks down overall metrics by meaningful dimensions (product categories). This reveals which segments are underperforming (e.g., accuracy might be 98% for electronics but 60% for clothing) and guides targeted improvements rather than broad retraining that may not fix the specific issue.

Why others wrong: Retraining without diagnosis may not fix the segment-specific issue; more complexity doesn't target specific segments; A/B testing is premature without understanding the root cause.

Trap: Jumping to retraining without first understanding which segments are failing and why.

Mnemonic: Overall OK but complaints = segment the metrics; diagnose before you fix

## Q73
Type: single
Difficulty: 2
Tags: scaling, experiment-reproducibility, seed
Concepts: reproducible-training
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

Your team cannot reproduce training results across different runs on Vertex AI. Same code, same data, but different final metrics. Which factor is most likely causing irreproducibility?

A. Different Vertex AI regions
B. Non-deterministic operations (random initialization, data shuffling) without fixed random seeds
C. Using a different Python version
D. Network latency variations

Answer: B

Hint: What causes random variation between training runs with the same code and data?

Explanation: Random number generators control weight initialization, data shuffling order, dropout masks, and data augmentation. Without fixed seeds, each run uses different random values, producing different training trajectories and final metrics. Setting seeds for all random number generators (Python random, NumPy, framework-specific) is the primary fix.

Why others wrong: Different regions don't affect training logic; Python version differences would cause errors, not metric variation; network latency doesn't affect model training calculations.

Trap: Fixing only one random seed — you must fix seeds for all sources of randomness (Python, NumPy, TensorFlow/PyTorch, CUDA) for full reproducibility.

Mnemonic: Different results each run = fix ALL random seeds (Python + NumPy + framework + CUDA)

## Q74
Type: single
Difficulty: 3
Tags: model-development, gradient-accumulation, memory
Concepts: gradient-accumulation
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

You need to train with an effective batch size of 256, but GPU memory only fits a batch of 32. You don't want to add more GPUs. Which technique achieves the same training dynamics as batch size 256 on a single GPU?

A. Use mixed-precision training to double the batch size
B. Use gradient accumulation with 8 micro-batches of 32
C. Use gradient checkpointing to reduce memory
D. Reduce the model size until batch size 256 fits

Answer: B

Hint: Which technique simulates a large batch by accumulating gradients over multiple forward-backward passes before updating?

Explanation: Gradient accumulation runs 8 forward-backward passes with batch size 32, accumulating gradients without updating weights. After 8 micro-batches (8 × 32 = 256), it performs one weight update using the accumulated gradients. This produces mathematically identical training dynamics to batch size 256, at the cost of 8x slower iterations.

Why others wrong: Mixed precision reduces memory by ~2x (fitting 64, not 256); gradient checkpointing reduces activation memory but not weight/optimizer memory; reducing model size changes the architecture.

Trap: Thinking mixed precision alone solves the problem — it roughly doubles batch size capacity (to ~64), not enough for 256.

Mnemonic: Effective batch size = micro_batch × accumulation_steps; 32 × 8 = 256 effective

## Q75
Type: single
Difficulty: 2
Tags: mlops, feature-store, batch-serving
Concepts: feature-store-batch
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

You need to compute features for batch prediction jobs that run nightly. The features require aggregating data from BigQuery (transaction history) and Cloud Storage (user behavior logs). How should you design the feature pipeline?

A. Compute features inline during each batch prediction job
B. Use Vertex AI Feature Store with a batch ingestion pipeline that pre-computes and stores features from both sources
C. Cache features in Cloud Memorystore
D. Export all data to CSV and compute features in pandas

Answer: B

Hint: Pre-computing and storing features separately from prediction enables reuse and consistency — which service manages this?

Explanation: Vertex AI Feature Store with batch ingestion pre-computes features from multiple sources (BigQuery + Cloud Storage) and stores them in a managed feature repository. Batch prediction jobs can then look up pre-computed features quickly. This separates feature computation from prediction, enabling feature reuse across models and ensuring consistency.

Why others wrong: Inline feature computation is slow and repeated for each job; Cloud Memorystore is for online serving, not batch; CSV/pandas doesn't scale for batch workloads and breaks feature governance.

Trap: Computing features inline during each batch job — this wastes compute on repeated calculations and risks inconsistency across models.

Mnemonic: Batch features = Feature Store batch ingestion (pre-compute, store, reuse); Online features = Feature Store online serving

## Q76
Type: single
Difficulty: 1
Tags: deployment, vpc-peering, network
Concepts: private-prediction
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

Your organization requires that prediction traffic never traverses the public internet. All communication must stay within Google Cloud's private network. Which deployment configuration should you use?

A. Public endpoint with IP allowlisting
B. Vertex AI private endpoint with VPC peering
C. Cloud Armor in front of a public endpoint
D. Endpoint with API key authentication

Answer: B

Hint: Which Vertex AI endpoint type keeps traffic entirely on Google Cloud's private network?

Explanation: Vertex AI private endpoints use VPC peering to route prediction traffic entirely within Google Cloud's private network. No traffic touches the public internet, meeting strict network isolation requirements for regulated industries.

Why others wrong: IP allowlisting still sends traffic over the public internet; Cloud Armor protects public endpoints but traffic still traverses the internet; API keys authenticate but don't change the network path.

Trap: Thinking IP allowlisting = private — it restricts WHO can connect but traffic still goes over the public internet.

Mnemonic: Private network only = VPC peering private endpoint; Internet + access control = public endpoint + allowlist

## Q77
Type: single
Difficulty: 2
Tags: responsible-ai, watermarking, genai
Concepts: ai-content-watermarking
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

Your organization uses Gemini to generate marketing content. Regulators require that AI-generated content be identifiable. Which technique should you implement?

A. Add a visible disclaimer "Generated by AI" to all content
B. Use SynthID digital watermarking to embed imperceptible markers in generated content
C. Maintain a database of all generated content for manual checking
D. Restrict AI-generated content to internal use only

Answer: B

Hint: Which Google technology embeds invisible but detectable markers in AI-generated content?

Explanation: SynthID is Google DeepMind's digital watermarking technology that embeds imperceptible markers into AI-generated content (text, images, audio, video). These markers are invisible to humans but can be detected programmatically, enabling identification of AI-generated content without affecting quality or usability.

Why others wrong: Visible disclaimers can be removed; maintaining a database doesn't scale and only works for content you generated; restricting to internal use doesn't address the regulatory requirement.

Trap: Relying solely on visible disclaimers — they can be stripped out when content is shared, while SynthID watermarks are persistent and unremovable.

Mnemonic: AI content identification = SynthID (invisible, persistent watermark); visible disclaimer = removable, insufficient

## Q78
Type: single
Difficulty: 3
Tags: scaling, data-poisoning, defense
Concepts: data-poisoning-defense
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

You are training a model using data collected from user submissions. You suspect some submissions may be adversarial attempts to poison the training data. Which defense strategy should you implement?

A. Remove all user-submitted data and use only curated datasets
B. Apply robust data cleaning: outlier detection, label validation with multiple annotators, and influence function analysis to identify suspicious training examples
C. Increase the model size to be more robust to noise
D. Train for fewer epochs to limit memorization

Answer: B

Hint: Which approach systematically identifies and removes malicious training examples?

Explanation: A multi-layered defense against data poisoning includes: outlier detection to find statistical anomalies, label validation with multiple independent annotators to catch mislabeled examples, and influence function analysis to identify which training examples disproportionately affect model predictions. Together, these techniques identify and remove potentially poisoned data.

Why others wrong: Removing all user data eliminates valuable training signal; larger models are actually more susceptible to memorizing poisoned data; fewer epochs reduce overall learning, not just memorization of poisoned examples.

Trap: Thinking larger models are more robust — they have more capacity to memorize poisoned examples, making them more vulnerable.

Mnemonic: Data poisoning defense = outlier detection + multi-annotator validation + influence analysis (detect, verify, analyze)

## Q79
Type: single
Difficulty: 2
Tags: model-development, ensemble, methods
Concepts: ensemble-selection
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

You have three models for a classification task: a neural network, a gradient boosted tree, and a logistic regression. Each model has different strengths. How should you combine them for best performance?

A. Use only the neural network since it's the most complex
B. Stacking — train a meta-learner on the outputs of all three models
C. Hard voting — let each model vote and use the majority prediction
D. Use the model with the highest individual accuracy

Answer: B

Hint: Which ensemble method learns the optimal way to combine diverse model outputs?

Explanation: Stacking trains a meta-learner (e.g., logistic regression) that takes the three models' predictions as input features and learns the optimal combination weights. It outperforms simple voting because it learns which model to trust more in which situations, leveraging the diversity of different model architectures.

Why others wrong: Using only the best individual model discards useful diversity; hard voting treats all models equally even when one is better in certain regions; selecting by highest accuracy ignores complementary strengths.

Trap: Defaulting to the single best model — diverse ensemble models with stacking almost always outperform the best individual model.

Mnemonic: Diverse models + learned combination = stacking (best); Equal-weight combination = voting (simpler but weaker)

## Q80
Type: single
Difficulty: 2
Tags: mlops, model-versioning, ab-test
Concepts: champion-challenger
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

You want to safely test a new model against the production model using real traffic. 10% of users should see the new model's predictions. How should you configure this on Vertex AI?

A. Deploy both models to separate endpoints and route traffic at the application layer
B. Deploy both model versions to the same endpoint with 90/10 traffic split
C. Deploy the new model and switch 100% of traffic, then monitor
D. Run both models offline and compare outputs

Answer: B

Hint: Which Vertex AI feature allows splitting live traffic between model versions on a single endpoint?

Explanation: Vertex AI Endpoints support traffic splitting between multiple deployed model versions. By setting 90% to the champion and 10% to the challenger on the same endpoint, you test the new model with real traffic without application-layer changes. Monitoring both versions' metrics enables data-driven promotion decisions.

Why others wrong: Separate endpoints require application-layer routing logic; switching 100% immediately risks degradation; offline comparison doesn't test real serving conditions.

Trap: Deploying to separate endpoints — this requires application changes and doesn't provide seamless traffic management.

Mnemonic: Champion-challenger testing = same endpoint, traffic split; promote when challenger wins

## Q81
Type: single
Difficulty: 3
Tags: deployment, model-mesh, scalability
Concepts: multi-endpoint-strategy
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

You manage 200 ML models that serve different product recommendation categories. Traffic patterns vary significantly — some models get millions of requests daily while others get only hundreds. How should you architect the serving infrastructure?

A. Deploy all 200 models on a single large VM
B. Deploy each model on its own dedicated endpoint with autoscaling
C. Group models by traffic pattern: high-traffic models on dedicated endpoints, low-traffic models on shared multi-model endpoints
D. Deploy all models on a single Vertex AI endpoint

Answer: C

Hint: Different traffic patterns need different scaling strategies — which architecture matches resources to usage?

Explanation: Grouping models by traffic pattern optimizes resource utilization. High-traffic models get dedicated endpoints with independent autoscaling to handle their load. Low-traffic models share multi-model endpoints with GPU sharing, avoiding the waste of 200 nearly-idle dedicated endpoints. This balances performance and cost.

Why others wrong: A single VM is a single point of failure and can't scale; 200 dedicated endpoints waste resources on low-traffic models; a single endpoint can't efficiently handle 200 models with vastly different traffic patterns.

Trap: Deploying each model on its own endpoint "for isolation" — this wastes resources for low-traffic models (paying for GPU/CPU that's mostly idle).

Mnemonic: High traffic = dedicated endpoint; Low traffic = shared endpoint; Match resources to usage patterns

## Q82
Type: single
Difficulty: 2
Tags: monitoring, latency, optimization
Concepts: inference-latency-debugging
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

Your model's P99 inference latency has increased from 50ms to 500ms over the past week, but model accuracy hasn't changed. What should you investigate first?

A. Retrain the model with newer data
B. Check input data size distribution — increasing input sizes (longer texts, higher resolution images) may be causing longer inference times
C. Replace the model with a simpler architecture
D. Increase the number of model replicas

Answer: B

Hint: Latency increase without accuracy change suggests an input-side change, not a model-side problem.

Explanation: A 10x latency increase with stable accuracy suggests the model itself hasn't changed — the inputs have. Common causes include increasing input text lengths, higher resolution images, or larger batch sizes in requests. Checking input data distribution reveals whether the serving workload has changed.

Why others wrong: Retraining won't fix latency issues; replacing the model is premature without diagnosis; more replicas increase throughput but don't fix per-request latency.

Trap: Adding replicas to fix latency — replicas handle more concurrent requests but each request still takes 500ms.

Mnemonic: Latency up + accuracy stable = inputs changed; Latency up + accuracy down = model degraded; Diagnose before you fix

## Q83
Type: multi
Difficulty: 3
Tags: responsible-ai, model-governance, lifecycle
Concepts: ml-governance-framework
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

Your organization is implementing ML governance for regulatory compliance. Which TWO practices are essential components of an ML governance framework? (Select TWO)

A. Model cards documenting intended use, limitations, and fairness evaluations for every deployed model
B. Using only open-source models to avoid vendor lock-in
C. Automated model approval workflows with human oversight for high-risk models
D. Deploying all models without review to maintain development velocity

Answer: A, C

Hint: ML governance requires both documentation (transparency) and process controls (accountability).

Explanation: Model cards provide transparency about model capabilities, limitations, and fairness considerations. Automated approval workflows with human oversight ensure that high-risk models undergo appropriate review before deployment, balancing governance with development speed. Together, they create accountable, auditable ML systems.

Why others wrong: Open-source vs. proprietary is a technical choice, not a governance requirement; deploying without review is the opposite of governance.

Trap: Thinking governance means slowing everything down — automated workflows with risk-based human oversight maintain velocity for low-risk models while ensuring review for high-risk ones.

Mnemonic: ML governance = transparency (model cards) + accountability (approval workflows) + oversight (human review for high-risk)

## Q84
Type: single
Difficulty: 2
Tags: model-development, learning-rate, scheduler
Concepts: learning-rate-scheduling
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

You are fine-tuning a pre-trained model and notice the loss oscillates wildly during training. Which learning rate strategy should you apply?

A. Increase the learning rate for faster convergence
B. Use a warmup schedule followed by cosine decay
C. Keep a constant high learning rate throughout
D. Double the batch size

Answer: B

Hint: Oscillating loss = learning rate too high — which schedule starts low and gradually changes?

Explanation: A warmup schedule starts with a very low learning rate and gradually increases it, allowing the model to stabilize before full-speed training. Cosine decay then smoothly reduces the learning rate, preventing oscillation in later training. This combination is standard practice for fine-tuning pre-trained models.

Why others wrong: Higher learning rate worsens oscillation; constant high learning rate causes the oscillation; doubling batch size is a different optimization axis.

Trap: Increasing the learning rate when loss oscillates — oscillation typically means the learning rate is already too high.

Mnemonic: Loss oscillating = LR too high → warmup + cosine decay; Loss plateauing = LR too low → increase or add warmup

## Q85
Type: single
Difficulty: 3
Tags: model-development, positional-encoding, context
Concepts: position-encoding-types
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

You are building a custom transformer model that needs to handle input sequences longer than what it was trained on (extrapolation to longer contexts). Which positional encoding method provides the best length generalization?

A. Absolute sinusoidal positional encoding
B. Learned absolute positional embeddings
C. Rotary Position Embedding (RoPE)
D. No positional encoding

Answer: C

Hint: Which encoding method represents relative positions and can extrapolate beyond training lengths?

Explanation: Rotary Position Embedding (RoPE) encodes positions by rotating query and key vectors, naturally representing relative positions between tokens. This relative approach generalizes better to sequences longer than those seen during training, as the rotation mechanics work at any position. Absolute encodings (sinusoidal or learned) break down at unseen positions.

Why others wrong: Absolute sinusoidal encoding fails at positions beyond training length; learned embeddings have no values for unseen positions; no encoding loses all position information.

Trap: Choosing sinusoidal encoding because "it's mathematical" — sinusoidal encodes absolute position, which doesn't generalize to longer sequences.

Mnemonic: Length generalization = RoPE (relative, rotary); Fixed length = absolute encodings work fine

## Q86
Type: single
Difficulty: 1
Tags: mlops, environment, reproducibility
Concepts: environment-management
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

Your training pipeline produces different results when run by different team members due to library version differences. How should you standardize the execution environment?

A. Document required versions in a README
B. Use Docker containers with pinned dependency versions in a requirements file
C. Ask all team members to use the same laptop model
D. Run all training in Google Colab

Answer: B

Hint: Which approach locks down the entire execution environment including OS, Python, and library versions?

Explanation: Docker containers encapsulate the complete execution environment: OS, Python version, libraries, and configurations. With pinned dependencies (exact version numbers in requirements.txt), every run uses identical software regardless of who runs it or on which machine. This is the foundation of reproducible ML pipelines.

Why others wrong: README documentation relies on humans following instructions correctly; same laptop model doesn't control software versions; Colab environments change over time as Google updates them.

Trap: Using "latest" versions in requirements — this causes the exact reproducibility problem. Always pin exact versions.

Mnemonic: Reproducible environment = Docker + pinned versions; "works on my machine" = you need Docker

## Q87
Type: single
Difficulty: 2
Tags: deployment, streaming-prediction, dataflow
Concepts: streaming-inference
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

You need to score IoT sensor readings in real-time as they arrive from thousands of devices. Each reading needs feature enrichment from a lookup table before prediction. Which architecture minimizes end-to-end latency?

A. Batch collect readings every minute and send to a Vertex AI batch prediction job
B. Use Dataflow streaming pipeline: ingest from Pub/Sub → enrich features → call Vertex AI online endpoint → write results to BigQuery
C. Store readings in BigQuery and run predictions hourly
D. Process on each IoT device locally

Answer: B

Hint: Real-time IoT processing = streaming pipeline — which Google Cloud service provides this?

Explanation: A Dataflow streaming pipeline ingests readings from Pub/Sub in real-time, enriches them with feature lookups (from Bigtable or Memorystore), calls the Vertex AI endpoint for prediction, and writes results for downstream consumption. This provides low-latency end-to-end processing for streaming IoT data.

Why others wrong: Batch collection adds up to 1 minute of delay; hourly BigQuery processing has too much latency; IoT devices typically lack the compute for model inference.

Trap: Using batch processing for real-time IoT — even 1-minute batching can be too slow for time-sensitive IoT applications.

Mnemonic: Streaming IoT = Pub/Sub → Dataflow → Vertex AI endpoint → results store

## Q88
Type: single
Difficulty: 3
Tags: model-development, mixture-of-experts, architecture
Concepts: moe-architecture
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

You are designing a model architecture that needs to handle diverse input types (technical documents, casual chat, code) with high quality but limited inference compute budget. Which architecture provides the best quality-per-FLOP ratio?

A. A single dense transformer with all parameters active for every input
B. A Mixture-of-Experts (MoE) model that routes each input to relevant expert subnetworks
C. A smaller dense model with more training data
D. Multiple specialized models with a router

Answer: B

Hint: Which architecture activates only a subset of parameters per input while maintaining total model capacity?

Explanation: MoE models use a gating network to route each input to a small subset of specialized expert subnetworks. This provides the capacity of a very large model (total parameters) with the inference cost of a much smaller one (only active parameters per input). Different experts naturally specialize for different input types.

Why others wrong: Dense transformers activate all parameters for every input, wasting compute on irrelevant capacity; a smaller dense model has less capacity overall; multiple separate models require managing routing infrastructure externally.

Trap: Confusing MoE's total parameter count with its inference cost — a 100B parameter MoE might only activate 10B per input.

Mnemonic: Diverse inputs + compute budget = MoE (route to experts, activate only what's needed)

## Q89
Type: single
Difficulty: 2
Tags: mlops, cost-management, vertex-ai
Concepts: training-cost-optimization
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

Your weekly model retraining job on Vertex AI costs $5,000 per run using on-demand NVIDIA A100 GPUs. The job can tolerate interruptions and restart from checkpoints. How can you reduce training costs by approximately 60-70%?

A. Switch to a smaller GPU type
B. Use Vertex AI training with spot/preemptible VMs and checkpoint-based resumption
C. Reduce the training dataset size by 70%
D. Train less frequently (monthly instead of weekly)

Answer: B

Hint: Which VM pricing option offers 60-70% discounts for interruptible workloads?

Explanation: Spot (preemptible) VMs on Google Cloud cost 60-91% less than on-demand pricing. Since the training job can tolerate interruptions and resume from checkpoints, using spot VMs with regular checkpointing provides the same training results at a fraction of the cost. Vertex AI custom training supports spot VM configuration.

Why others wrong: Smaller GPUs may increase training time, offsetting savings; reducing data size hurts model quality; training monthly means the model is stale for weeks.

Trap: Avoiding spot VMs because of interruption risk — with checkpoint-based resumption, interruptions only cause minor delays, not data loss.

Mnemonic: Fault-tolerant training + checkpoints = spot VMs (60-70% savings); Time-critical = on-demand

## Q90
Type: single
Difficulty: 1
Tags: deployment, health-check, endpoint
Concepts: endpoint-health
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

Your Vertex AI endpoint returns HTTP 503 errors intermittently during high traffic. What is the most likely cause?

A. The model file is corrupted
B. All replicas are at capacity and new requests are being rejected — autoscaling needs tuning
C. The model's prediction logic has a bug
D. The endpoint's IAM permissions are misconfigured

Answer: B

Hint: HTTP 503 = Service Unavailable — what does this mean for a serving endpoint?

Explanation: HTTP 503 during high traffic indicates all serving replicas are at capacity and cannot accept additional requests. This typically means autoscaling hasn't provisioned enough replicas for the traffic spike, or autoscaling is not configured aggressively enough (min replicas too low, scaling too slow).

Why others wrong: A corrupted model would fail consistently, not intermittently; prediction bugs would return 500 errors, not 503; IAM issues would return 403 Forbidden.

Trap: Confusing 503 (capacity) with 500 (server error) — 503 specifically indicates the service is temporarily overloaded, not broken.

Mnemonic: 503 = overloaded (scale up); 500 = broken (fix code); 403 = forbidden (fix IAM); 404 = not found

## Q91
Type: single
Difficulty: 3
Tags: model-development, catastrophic-forgetting, continual
Concepts: catastrophic-forgetting
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

You fine-tuned a pre-trained model on domain-specific data. The model now performs well on domain tasks but has significantly degraded on general tasks it could previously handle. What is this phenomenon and how should you address it?

A. Underfitting — increase the learning rate for better learning
B. Catastrophic forgetting — use elastic weight consolidation (EWC) or mix general data into the fine-tuning dataset
C. Overfitting — add more dropout
D. Vanishing gradients — use residual connections

Answer: B

Hint: When a model forgets what it previously knew after learning something new — what's this called?

Explanation: Catastrophic forgetting occurs when fine-tuning overwrites the pre-trained model's knowledge of general tasks. Elastic Weight Consolidation (EWC) penalizes changes to weights important for previous tasks, preserving general knowledge while learning new tasks. Alternatively, mixing a small percentage of general-domain data into fine-tuning maintains performance on both domains.

Why others wrong: It's not underfitting (the model performs well on the new domain); dropout addresses overfitting, not forgetting; vanishing gradients cause training failure, not selective forgetting.

Trap: Increasing the learning rate to "learn both" — this actually worsens catastrophic forgetting by making larger changes to pre-trained weights.

Mnemonic: Fine-tune → forgot the old stuff = catastrophic forgetting; Fix = EWC (protect important weights) or mix in old data

## Q92
Type: single
Difficulty: 2
Tags: mlops, data-pipeline, quality
Concepts: data-quality-monitoring
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

Your ML pipeline ingests data from an external API that occasionally changes its response schema without notice (new fields, renamed fields, changed types). How should you protect your pipeline?

A. Parse the API response permissively and ignore schema changes
B. Implement a schema validation layer using a contract (e.g., Pydantic model or protobuf) that fails fast on unexpected changes
C. Check the API documentation weekly for updates
D. Log all API responses for later analysis

Answer: B

Hint: Which approach detects schema changes immediately before they corrupt your data pipeline?

Explanation: A schema validation layer (using Pydantic, protobuf, or similar) defines the expected API response structure as a contract. When the API changes its schema, validation fails immediately with clear error messages, preventing corrupted data from entering the pipeline. This is a "fail fast" approach that catches issues at ingestion, not at training time.

Why others wrong: Permissive parsing silently introduces data quality issues; manual documentation checking is unreliable; logging without validation doesn't prevent corruption.

Trap: Being "flexible" with API parsing — this lets schema changes silently corrupt your training data, causing mysterious model degradation weeks later.

Mnemonic: External data = validate on entry (fail fast); Internal data = trust but monitor (validate periodically)

## Q93
Type: single
Difficulty: 2
Tags: deployment, grpc-rest, serving-protocol
Concepts: serving-protocol-selection
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

Your model serving endpoint needs to handle both low-latency single predictions from a mobile app and high-throughput batch predictions from an internal service. Which serving configuration minimizes latency for both use cases?

A. REST API for everything
B. gRPC for internal batch service (lower overhead, streaming support) and REST for the mobile app (broader compatibility)
C. WebSocket connections for both
D. GraphQL API for flexible querying

Answer: B

Hint: Different clients have different protocol needs — which combination optimizes for both?

Explanation: gRPC provides lower overhead, multiplexing, and streaming support, making it ideal for the internal batch service's high-throughput needs. REST is universally supported by mobile frameworks and provides simplicity for single prediction requests. Vertex AI endpoints support both protocols simultaneously.

Why others wrong: REST for everything adds unnecessary overhead for high-throughput batch calls; WebSockets are for long-lived connections, not request-response patterns; GraphQL adds complexity without serving-specific benefits.

Trap: Using REST for everything because it's simpler — gRPC's binary protocol and streaming can reduce batch prediction latency by 50%+ over REST.

Mnemonic: Internal high-throughput = gRPC (binary, fast); External mobile/web = REST (universal); Both on same endpoint

## Q94
Type: single
Difficulty: 3
Tags: model-development, tokenizer-training, custom
Concepts: custom-tokenizer
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

You are adapting an LLM for a specialized medical domain. The model's default tokenizer splits medical terms like "electroencephalography" into many subwords, reducing the effective context window. What should you do?

A. Increase the model's maximum context length
B. Extend the tokenizer vocabulary with domain-specific tokens and retrain the embedding layer for new tokens
C. Replace all medical terms with abbreviations in the training data
D. Use character-level tokenization for better coverage

Answer: B

Hint: When the tokenizer doesn't efficiently handle domain vocabulary, which component needs updating?

Explanation: Extending the tokenizer vocabulary with frequent domain-specific terms (full medical terminology) reduces the number of tokens needed to represent specialized text, effectively increasing usable context. The embedding layer is then retrained to learn representations for the new tokens while keeping existing token embeddings frozen.

Why others wrong: Increasing context length doesn't fix the inefficient tokenization; abbreviations lose information and require preprocessing; character-level tokenization drastically increases sequence length for all text.

Trap: Just increasing context length to fit more tokens — this doesn't fix the root cause (inefficient tokenization wastes tokens on every medical term).

Mnemonic: Domain text = many subwords per term → add domain tokens to vocabulary + retrain embeddings

## Q95
Type: single
Difficulty: 1
Tags: monitoring, data-pipeline, freshness
Concepts: data-freshness-monitoring
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

Your model relies on daily-updated features from a data pipeline. One morning, the pipeline fails silently and the model starts serving predictions based on stale (3-day-old) data. How should you prevent this?

A. Retrain the model daily regardless of data freshness
B. Monitor feature freshness (time since last update) and alert when features exceed a staleness threshold
C. Schedule the pipeline to run three times daily for redundancy
D. Cache the most recent features and serve them indefinitely

Answer: B

Hint: Which monitoring approach detects stale features before they affect predictions?

Explanation: Feature freshness monitoring tracks when each feature was last updated and alerts when the staleness exceeds a configured threshold (e.g., >24 hours for daily features). This catches silent pipeline failures before stale data degrades predictions, enabling rapid remediation.

Why others wrong: Daily retraining doesn't help if the data itself is stale; running the pipeline three times doesn't help if the underlying data source is the problem; indefinite caching is exactly the anti-pattern that causes stale data issues.

Trap: Running the pipeline more frequently without monitoring — if the data source is down, running the pipeline more often still produces stale data.

Mnemonic: Feature freshness monitoring = "is the data actually fresh?" alert; Pipeline scheduling = "did the pipeline run?" (different question)

## Q96
Type: single
Difficulty: 2
Tags: scaling, labeling, vertex-ai
Concepts: vertex-ai-labeling
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

You need to label 50,000 images for a custom classification model. You have domain experts available but want to ensure labeling quality and track inter-annotator agreement. Which service should you use?

A. Ask domain experts to label images in a shared spreadsheet
B. Use Vertex AI Data Labeling Service with multiple annotators per image and agreement metrics
C. Use a Gemini prompt to auto-label all images
D. Hire a single annotator for consistency

Answer: B

Hint: Which managed service provides multi-annotator labeling with built-in quality metrics?

Explanation: Vertex AI Data Labeling Service provides managed labeling workflows with multiple annotators per task, automatic inter-annotator agreement computation, and quality metrics. It supports custom labeling instructions, specialist pools, and consensus-based label resolution.

Why others wrong: Spreadsheets don't scale and lack agreement metrics; auto-labeling with Gemini may introduce systematic biases; a single annotator creates bottlenecks and has no quality cross-check.

Trap: Relying on a single labeler for "consistency" — single annotator consistency is actually a source of systematic bias. Multiple annotators with agreement metrics produce higher quality labels.

Mnemonic: Quality labels = multiple annotators + agreement metrics; Fast labels = auto-labeling (then validate a sample)

## Q97
Type: single
Difficulty: 2
Tags: mlops, ab-testing, implementation
Concepts: online-ab-testing
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

You want to measure the business impact of a new recommendation model compared to the production model. Users must have a consistent experience (always see the same model) during the test. How should you implement this A/B test?

A. Randomly assign each request to a model version
B. Use consistent hashing on user ID to assign users to treatment groups, ensuring each user always sees the same model
C. Alternate between models hourly
D. Show the new model to internal users only

Answer: B

Hint: Consistent user experience in A/B testing requires sticky assignment — which method achieves this?

Explanation: Consistent hashing on user ID deterministically assigns each user to a treatment group. This ensures the same user always sees the same model version throughout the experiment, preventing contamination from mixed experiences and enabling accurate user-level metric comparison.

Why others wrong: Random per-request assignment gives users inconsistent experiences (switching between models); hourly alternation introduces time-of-day confounds; internal-only testing doesn't represent real user behavior.

Trap: Random per-request assignment — if a user sees different models on consecutive visits, you can't measure the user-level impact.

Mnemonic: A/B test = sticky user assignment (consistent hashing on user ID); per-request random = inconsistent experience

## Q98
Type: single
Difficulty: 3
Tags: model-development, speculative-decoding, inference
Concepts: speculative-decoding
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

You want to speed up autoregressive inference of a large language model without reducing output quality. The model generates tokens one at a time, creating a latency bottleneck. Which technique can accelerate generation while maintaining identical output?

A. Increase the beam search width for more parallel candidates
B. Use speculative decoding — a small draft model proposes multiple tokens that the large model verifies in parallel
C. Reduce the model's vocabulary size
D. Generate tokens in random order instead of left-to-right

Answer: B

Hint: Which technique uses a fast draft model to "speculate" ahead, then verifies in batch with the full model?

Explanation: Speculative decoding uses a small, fast draft model to generate multiple candidate tokens ahead. The large target model then verifies all candidates in a single forward pass (batched verification), accepting correct tokens and rejecting incorrect ones. This produces identical outputs to standard autoregressive decoding but with 2-3x speedup by converting sequential verification into parallel.

Why others wrong: Wider beam search doesn't speed up per-token generation; reducing vocabulary changes the model; random-order generation breaks autoregressive dependencies.

Trap: Thinking speculative decoding changes the output — the verification step ensures the output is identical to what the large model would have generated alone.

Mnemonic: Speculative decoding = "fast draft + big verify" — small model guesses ahead, big model checks in batch

## Q99
Type: single
Difficulty: 2
Tags: deployment, model-warm-up, latency
Concepts: model-warmup
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

After deploying a new model version, the first few prediction requests have 10x higher latency than subsequent requests. What is causing this and how should you fix it?

A. The model file needs re-downloading — use a faster storage backend
B. Cold start latency from model loading and JIT compilation — configure model warmup with representative requests
C. Network congestion — increase bandwidth
D. The model is too large — compress it

Answer: B

Hint: First requests slow, subsequent fast = what needs to happen before the model is ready for production traffic?

Explanation: Cold start occurs when a model is first loaded: weights are loaded into memory, computation graphs are compiled, and any lazy initialization occurs. Configuring model warmup sends representative prediction requests during startup, ensuring the model is fully initialized before receiving real traffic.

Why others wrong: The model file is already downloaded at deployment; network congestion would affect all requests; model compression doesn't address cold start.

Trap: Ignoring cold start because "it only happens once" — in autoscaling scenarios, every new replica has a cold start, potentially affecting many users.

Mnemonic: First request slow = cold start → model warmup requests fix it; Affects every new replica in autoscaling

## Q100
Type: single
Difficulty: 2
Tags: responsible-ai, bias-mitigation, preprocessing
Concepts: bias-mitigation-strategies
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

Your classification model shows significantly lower accuracy for minority demographic groups. After investigation, you find the training data has 10x fewer examples from minority groups. Which approach most directly addresses this data imbalance?

A. Remove demographic features from the model input
B. Oversample minority groups and/or use class weights to ensure equal representation during training
C. Lower the classification threshold for minority groups
D. Report the bias and stop using the model

Answer: B

Hint: When training data under-represents a group, the model under-learns that group — which fix directly addresses the data imbalance?

Explanation: Oversampling minority groups increases their representation in training batches, ensuring the model sees enough examples to learn patterns for these groups. Class weights achieve a similar effect by increasing the loss penalty for minority group errors. Both techniques directly address the root cause: insufficient learning signal from under-represented groups.

Why others wrong: Removing demographic features doesn't fix the learning imbalance (the model still sees fewer minority examples); threshold adjustment treats symptoms not causes; stopping model use is extreme when the issue is fixable.

Trap: Removing demographic features to "remove bias" — the model can still learn biased patterns from correlated features (proxy discrimination). Address the data imbalance directly.

Mnemonic: Data imbalance → oversample/reweight (fix training); Threshold bias → adjust thresholds (fix deployment); Both → address data AND deployment

## Q101
Type: single
Difficulty: 3
Tags: scaling, transfer-learning, domain-adaptation
Concepts: domain-adaptation
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

You have a pre-trained image classification model that works well on natural photos but performs poorly on satellite imagery. You have only 200 labeled satellite images. Which transfer learning strategy maximizes performance on satellite imagery?

A. Train a new model from scratch on the 200 satellite images
B. Freeze all pre-trained layers and train only a new classification head
C. Freeze early layers (edge/texture detectors), fine-tune later layers (high-level features), and train a new classification head
D. Fine-tune all layers with a high learning rate

Answer: C

Hint: Early CNN layers learn universal features (edges, textures) while later layers learn domain-specific features — which layers need adaptation?

Explanation: Early layers of CNNs learn domain-agnostic features (edges, textures, shapes) that transfer well across domains. Later layers learn domain-specific features (objects, compositions) that need adaptation. With only 200 examples, freezing early layers prevents overfitting on low-level features while fine-tuning later layers adapts the model to satellite imagery characteristics.

Why others wrong: Training from scratch on 200 images will severely overfit; freezing all layers limits adaptation; fine-tuning all layers with high LR will overwrite useful pre-trained features.

Trap: Freezing all pre-trained layers — this provides some transfer but doesn't adapt the model's understanding to satellite imagery's different visual characteristics.

Mnemonic: Transfer learning with little data: freeze early (universal) → fine-tune late (domain-specific) → train head (task-specific)

## Q102
Type: single
Difficulty: 2
Tags: model-development, beam-search, decoding
Concepts: decoding-strategies
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

You are deploying an LLM for a legal document generation task that requires factual accuracy and deterministic outputs. Which decoding strategy is most appropriate?

A. Top-k sampling with k=50 for creative outputs
B. Temperature sampling with T=1.0
C. Greedy decoding or beam search with low temperature for deterministic, high-quality outputs
D. Nucleus sampling (top-p) with p=0.9

Answer: C

Hint: Factual accuracy and determinism require minimizing randomness — which decoding strategy does this?

Explanation: Greedy decoding always selects the most probable token, producing deterministic outputs. Beam search explores multiple paths and selects the highest-probability sequence. Both minimize randomness, which is essential for legal documents where factual accuracy and reproducibility matter more than creativity.

Why others wrong: Top-k and nucleus sampling introduce randomness; temperature=1.0 maintains full distribution randomness; all sampling strategies sacrifice determinism for diversity.

Trap: Using temperature sampling for factual tasks — any temperature > 0 introduces randomness that can produce different (potentially wrong) outputs each time.

Mnemonic: Factual/legal → greedy/beam (deterministic); Creative → sampling (temperature/top-k/top-p)

## Q103
Type: single
Difficulty: 1
Tags: mlops, version-control, notebooks
Concepts: notebook-versioning
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

Your data science team develops models in Jupyter notebooks. They struggle with version control because notebook files contain output cells (images, tables, large data) that create messy diffs. How should they manage notebook version control?

A. Manually clear all outputs before every commit
B. Use pre-commit hooks (e.g., nbstripout) to automatically strip outputs before committing, keeping only code and markdown cells in version control
C. Store notebooks in Google Drive instead of Git
D. Convert all notebooks to Python scripts

Answer: B

Hint: Which approach automates the cleanup without relying on humans to remember?

Explanation: nbstripout as a pre-commit hook automatically removes outputs, execution counts, and metadata from notebooks before they enter version control. This produces clean diffs showing only code changes, while developers retain outputs in their working copies for local development.

Why others wrong: Manual clearing is error-prone (humans forget); Google Drive has no diff/merge capabilities; converting to scripts loses the notebook's narrative/visualization benefits.

Trap: Manually clearing outputs — someone will inevitably forget, committing a 50MB notebook with embedded images.

Mnemonic: Notebooks in Git = nbstripout hook (auto-clean); outputs stay local, only code goes to Git

## Q104
Type: single
Difficulty: 3
Tags: deployment, serving-optimization, batching
Concepts: dynamic-batching
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

Your model serving endpoint receives many small individual prediction requests. GPU utilization is only 10% because each request doesn't fully utilize the GPU's parallel processing capability. How can you increase GPU utilization without increasing latency?

A. Switch to CPU serving since GPU is underutilized
B. Enable dynamic batching — the server collects multiple incoming requests and processes them as a batch, adding minimal latency
C. Increase the model size to use more GPU
D. Reduce the number of GPU replicas

Answer: B

Hint: GPUs excel at parallel computation — which serving feature groups individual requests for parallel processing?

Explanation: Dynamic batching collects individual prediction requests over a short time window (typically 5-50ms) and groups them into a batch for GPU processing. This dramatically increases GPU utilization by processing many requests in parallel, with each request only seeing the small batching delay. Triton Inference Server and TensorFlow Serving both support this.

Why others wrong: Switching to CPU loses the GPU's parallel processing advantage; increasing model size doesn't improve utilization of existing capacity; fewer replicas don't improve per-request GPU usage.

Trap: Switching to CPU because GPU is "wasted" — the fix is to use the GPU properly (batching), not to downgrade the hardware.

Mnemonic: Low GPU utilization + many small requests = dynamic batching; collect → batch → process in parallel

## Q105
Type: single
Difficulty: 2
Tags: model-development, label-smoothing, regularization
Concepts: label-smoothing
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

Your classification model achieves 99% training accuracy but 85% validation accuracy after fine-tuning. You want a regularization technique that prevents the model from being overconfident in its predictions. Which technique specifically addresses overconfidence?

A. L2 regularization on model weights
B. Label smoothing — replace hard one-hot targets with soft targets (e.g., 0.9 for correct class, 0.1 spread across others)
C. Early stopping at the best validation epoch
D. Reduce the learning rate

Answer: B

Hint: Overconfidence means the model outputs probabilities too close to 0 or 1 — which technique softens the targets?

Explanation: Label smoothing replaces hard targets (0 and 1) with soft targets (e.g., 0.9 and 0.033). This prevents the model from driving logits to extreme values to match hard targets, producing better-calibrated probabilities and serving as a regularizer that reduces overfitting.

Why others wrong: L2 regularization constrains weights but doesn't directly address output confidence; early stopping helps overfitting generally but doesn't fix calibration; lower learning rate slows training but doesn't regularize.

Trap: Choosing L2 regularization — it reduces weight magnitudes but doesn't specifically address overconfident predictions. Label smoothing directly targets the confidence calibration issue.

Mnemonic: Model too confident (99% sure of everything) → label smoothing (soften targets to prevent extreme outputs)

## Q106
Type: single
Difficulty: 2
Tags: monitoring, model-staleness, retraining
Concepts: model-age-monitoring
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

Your organization has 50 deployed models, each trained at different times. Some models haven't been retrained in over a year. How should you track and prioritize which models need retraining?

A. Retrain all models monthly regardless of performance
B. Track model age, performance drift metrics, and business impact per model — prioritize retraining for high-impact models with significant drift
C. Only retrain when users complain about predictions
D. Replace all models with foundation model API calls

Answer: B

Hint: Which approach combines monitoring signals to make data-driven retraining decisions?

Explanation: Tracking model age (time since last training), performance drift (prediction quality degradation), and business impact (revenue or user impact) creates a prioritized retraining queue. High-impact models with significant drift get retrained first, while stable low-impact models can wait — efficiently allocating limited ML engineering resources.

Why others wrong: Monthly retraining wastes resources on stable models; waiting for complaints is reactive and misses gradual degradation; replacing everything with API calls isn't always feasible or cost-effective.

Trap: Retraining all models on a fixed schedule — some models are stable for years while others drift weekly. Data-driven prioritization is more efficient.

Mnemonic: Retraining priority = drift × impact × age; Fix high-drift high-impact first

## Q107
Type: single
Difficulty: 3
Tags: model-development, kv-cache, optimization
Concepts: kv-cache-optimization
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

Your LLM serving endpoint runs out of GPU memory when handling many concurrent long-context requests. Each request allocates a KV cache that grows linearly with sequence length. Which technique reduces KV cache memory while maintaining output quality?

A. Reduce the model's number of attention heads
B. Use Grouped Query Attention (GQA) to share KV heads across multiple query heads, reducing KV cache size
C. Disable the KV cache entirely
D. Limit all requests to 512 tokens

Answer: B

Hint: Which attention variant reduces the number of unique KV pairs stored in cache?

Explanation: Grouped Query Attention (GQA) shares key-value heads among multiple query heads, reducing the KV cache size by the grouping factor while maintaining most of the quality of multi-head attention. For example, 32 query heads sharing 8 KV heads reduces KV cache by 4x, enabling more concurrent long-context requests.

Why others wrong: Reducing attention heads changes the model architecture; disabling KV cache forces recomputation of all previous tokens at each step (extremely slow); limiting to 512 tokens prevents long-context usage.

Trap: Disabling KV cache to save memory — this makes inference quadratically slower as every token must recompute attention over all previous tokens.

Mnemonic: KV cache too big → GQA (share KV heads, keep quality); MHA → GQA → MQA = more sharing = less cache

## Q108
Type: single
Difficulty: 2
Tags: mlops, cicd, model-testing
Concepts: ml-cicd-pipeline
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

You are building a CI/CD pipeline for your ML model. Which tests should run automatically before a model can be deployed to production?

A. Only unit tests for the prediction function
B. Unit tests (prediction function), integration tests (data pipeline + model), model quality tests (accuracy > threshold on held-out set), and fairness tests (performance across demographic groups)
C. Only model accuracy on the test set
D. Manual testing by the data science team

Answer: B

Hint: ML CI/CD should test code correctness, integration, model quality, AND fairness — which option covers all layers?

Explanation: A comprehensive ML CI/CD pipeline includes: unit tests verifying prediction function logic, integration tests ensuring the data pipeline and model work together, model quality gates ensuring accuracy meets thresholds on held-out data, and fairness tests verifying equitable performance across groups. All must pass before production deployment.

Why others wrong: Only testing the prediction function misses data pipeline and model quality issues; only accuracy misses fairness and integration issues; manual testing doesn't scale and isn't automated.

Trap: Only testing accuracy — a model can be accurate overall while performing terribly for specific user groups (fairness issues).

Mnemonic: ML CI/CD tests = unit + integration + quality + fairness (all four must pass)

## Q109
Type: single
Difficulty: 1
Tags: deployment, endpoint-pricing, cost
Concepts: endpoint-cost-model
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

Your team has deployed 5 models on Vertex AI, each on its own endpoint with a minimum of 1 replica. Monthly traffic is only 100 predictions total. What is the primary cost concern?

A. Prediction API call charges
B. Idle compute cost — 5 endpoints with minimum replicas running 24/7 regardless of traffic
C. Model storage costs
D. Network egress charges

Answer: B

Hint: With only 100 predictions/month, what costs the most: the predictions or the always-on infrastructure?

Explanation: Vertex AI endpoints charge for compute time (vCPU, GPU, memory) of running replicas, not just for predictions. With 5 endpoints each maintaining at least 1 replica 24/7, you're paying for 5 always-on servers processing only ~3 predictions per day total. The idle compute cost far exceeds the actual prediction costs.

Why others wrong: 100 API calls/month costs pennies; model storage is minimal for most models; network egress is negligible for small prediction responses.

Trap: Not considering idle endpoint cost — many teams deploy multiple low-traffic endpoints without realizing each one runs 24/7 at minimum.

Mnemonic: Low traffic + many endpoints = idle cost problem; consolidate endpoints or use serverless (scale to zero)

## Q110
Type: single
Difficulty: 3
Tags: responsible-ai, federated-learning, privacy
Concepts: federated-learning
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

Multiple hospitals want to collaboratively train a disease prediction model, but patient data cannot leave each hospital's premises due to privacy regulations. Which ML approach enables this collaboration?

A. Each hospital trains its own model independently
B. Federated learning — train a shared model by exchanging model updates (gradients) instead of raw data
C. Anonymize all data and upload to a central cloud server
D. Use synthetic data generated from each hospital's records

Answer: B

Hint: Which approach trains a shared model without any raw data leaving its source?

Explanation: Federated learning trains a global model by having each hospital train on its local data and share only model updates (gradient aggregation). The central server aggregates these updates to improve the shared model, then distributes the improved model back. Raw patient data never leaves the hospital, satisfying privacy regulations.

Why others wrong: Independent models miss the benefit of cross-hospital patterns; anonymization can be reversed (re-identification attacks); synthetic data may not capture the full complexity of real patient data.

Trap: Thinking anonymization is sufficient for healthcare data — research shows anonymized health records can often be re-identified through quasi-identifiers.

Mnemonic: Data can't leave → federated learning (share gradients, not data); Data can travel → centralized training is simpler

## Q111
Type: single
Difficulty: 2
Tags: scaling, bigquery-ml, vertex-ai-integration
Concepts: bqml-vertex-integration
Domain: Domain 2 — Scaling Prototypes into ML Models
DomainNumber: 2

You trained a classification model using BigQuery ML (CREATE MODEL) and want to deploy it for online predictions with low latency. What is the recommended approach?

A. Call BigQuery ML.PREDICT for each online request
B. Export the BigQuery ML model to Vertex AI Model Registry and deploy to a Vertex AI endpoint
C. Re-implement the model in TensorFlow
D. Use Cloud Functions to query BigQuery for each prediction

Answer: B

Hint: BigQuery is designed for batch analytics, not low-latency serving — which path moves the model to a serving-optimized platform?

Explanation: BigQuery ML models can be exported to Vertex AI Model Registry, which then allows deployment to Vertex AI endpoints optimized for low-latency online predictions. This preserves the model trained in BigQuery while serving it through infrastructure designed for real-time requests.

Why others wrong: BigQuery ML.PREDICT has query startup latency unsuitable for online serving; re-implementing in TensorFlow is unnecessary work; Cloud Functions calling BigQuery still has BigQuery's query latency.

Trap: Using ML.PREDICT for online serving — each "prediction" is actually a BigQuery query with startup overhead, adding seconds of latency.

Mnemonic: BigQuery ML = train; Vertex AI endpoint = serve; Export bridges the two

## Q112
Type: single
Difficulty: 2
Tags: mlops, pipeline-parallelism, vertex-ai
Concepts: pipeline-parallel-steps
Domain: Domain 4 — Automating ML Pipelines and MLOps
DomainNumber: 4

Your Vertex AI Pipeline has three independent feature engineering steps (text features, numeric features, image features) that currently run sequentially, taking 3 hours total. Each step takes about 1 hour. How should you optimize the pipeline runtime?

A. Run the pipeline on a larger machine
B. Configure the three feature engineering steps to run in parallel using the pipeline SDK's parallel construct
C. Combine all feature engineering into a single step
D. Cache the results and skip feature engineering

Answer: B

Hint: Independent steps with no dependencies can run simultaneously — which pipeline feature enables this?

Explanation: The Kubeflow Pipelines SDK allows declaring steps without dependencies on each other, causing them to run in parallel. By removing the artificial sequential dependency between the three independent feature engineering steps, they run simultaneously on separate workers, reducing total time from 3 hours to approximately 1 hour.

Why others wrong: A larger machine doesn't parallelize separate pipeline steps; combining into one step may lose modularity and doesn't parallelize; caching only helps when inputs haven't changed.

Trap: Running independent steps sequentially by default — the pipeline SDK runs steps in parallel only when their dependency graph allows it. Make sure not to create unnecessary dependencies.

Mnemonic: Independent steps = run in parallel (remove false dependencies); Dependent steps = must be sequential

## Q113
Type: single
Difficulty: 1
Tags: deployment, model-update, zero-downtime
Concepts: rolling-update
Domain: Domain 5 — Deploying and Serving Models
DomainNumber: 5

You need to update your model to a new version without any downtime. Users should not experience errors or latency spikes during the transition. Which deployment strategy achieves this?

A. Delete the old model and deploy the new one
B. Rolling update — deploy the new version alongside the old, gradually shifting traffic as new replicas come online
C. Stop the endpoint, swap the model, restart
D. Deploy the new model on a completely different endpoint

Answer: B

Hint: Which strategy keeps serving predictions continuously while transitioning to the new version?

Explanation: Rolling updates deploy new model replicas gradually while keeping old replicas running. Traffic shifts to new replicas as they pass health checks, ensuring continuous serving throughout the update. If new replicas fail health checks, the rollout stops and traffic stays on the old version.

Why others wrong: Deleting the old model causes downtime; stopping the endpoint causes downtime; a different endpoint requires application changes.

Trap: Deploying to a new endpoint to avoid risk — while safe, it requires application-level routing changes and doesn't provide seamless transition.

Mnemonic: Zero downtime model update = rolling update (old serves while new starts up)

## Q114
Type: single
Difficulty: 3
Tags: responsible-ai, ai-regulations, compliance
Concepts: eu-ai-act
Domain: Domain 6 — Monitoring, Optimization, and Responsible AI
DomainNumber: 6

Your organization deploys an AI system for credit scoring in the EU. Under the EU AI Act, credit scoring is classified as "high-risk." Which requirements must you comply with?

A. No specific requirements — only social scoring is regulated
B. Risk assessment, human oversight, transparency to affected individuals, technical documentation, and ongoing monitoring with conformity assessment
C. Just add an "AI-generated" label to credit decisions
D. Only notify the EU AI Office about the system

Answer: B

Hint: High-risk AI systems under the EU AI Act have comprehensive requirements — which answer covers all of them?

Explanation: The EU AI Act requires high-risk AI systems (including credit scoring) to implement: risk management systems, data governance, technical documentation, transparency to users and affected individuals, human oversight capabilities, accuracy/robustness/cybersecurity standards, quality management, logging, and conformity assessment before deployment.

Why others wrong: Credit scoring IS explicitly regulated as high-risk; labeling alone is insufficient; notification alone doesn't meet the comprehensive requirements.

Trap: Thinking high-risk requirements are just transparency — they span the entire AI lifecycle from development through deployment and monitoring.

Mnemonic: EU AI Act high-risk = documentation + transparency + human oversight + monitoring + conformity assessment (the full lifecycle)

## Q115
Type: single
Difficulty: 2
Tags: model-development, few-shot, prompting
Concepts: few-shot-prompting
Domain: Domain 3 — Developing ML Models
DomainNumber: 3

You need to classify customer feedback into 5 categories using Gemini. You have 10 labeled examples per category. You don't have time or budget for fine-tuning. Which approach gives the best classification accuracy?

A. Zero-shot prompting with category descriptions only
B. Few-shot prompting with 2-3 representative examples per category in the prompt, plus clear category definitions
C. Send all 50 examples as context and ask the model to memorize the patterns
D. Use the Gemini API with no prompt engineering

Answer: B

Hint: With limited labeled examples and no fine-tuning, which prompting strategy best leverages them?

Explanation: Few-shot prompting provides the model with representative examples that demonstrate the expected input-output mapping. Including 2-3 diverse examples per category (10-15 total in the prompt) plus clear category definitions gives the model enough pattern information to classify accurately. This is the sweet spot between too few examples (zero-shot ambiguity) and too many (context window waste and potential confusion).

Why others wrong: Zero-shot has higher error rates without examples; all 50 examples may exceed useful context length and include redundant information; no prompt engineering relies entirely on the model's training data.

Trap: Including all 50 examples in the prompt — more examples doesn't always mean better. Carefully selected diverse examples outperform dumping everything into the context.

Mnemonic: Few-shot sweet spot = 2-3 diverse examples per class + clear definitions; Too many examples = diminishing returns + context waste
