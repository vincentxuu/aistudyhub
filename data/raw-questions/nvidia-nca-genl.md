---
exam: NCA-GENL
lang: en
---

## Q1
Type: single
Difficulty: 1
Tags: machine-learning, feature-engineering
Concepts: feature-engineering
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

What is the primary goal of feature engineering in machine learning?

A. To increase the number of rows in the dataset
B. To transform raw data into meaningful inputs that improve model performance
C. To reduce the size of the training dataset
D. To eliminate the need for model training

Answer: B

Hint: Think about what "features" are in the context of machine learning models.

Explanation: Feature engineering transforms raw data into representations that better capture the underlying patterns, enabling models to learn more effectively. It's a fundamental ML skill tested in NCA-GENL.

Why others wrong: Adding rows is data augmentation; reducing dataset size is sampling; feature engineering improves inputs, not eliminates training.

Trap: Confusing feature engineering with data collection or preprocessing — it's specifically about creating informative input representations.

Mnemonic: Raw data → engineered features → better predictions

## Q2
Type: single
Difficulty: 2
Tags: machine-learning, cross-validation
Concepts: cross-validation
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

Why is k-fold cross-validation preferred over a simple train/test split when evaluating model performance?

A. It trains the model faster
B. It provides a more reliable estimate of model performance by evaluating on multiple different test subsets, reducing the impact of how the data happens to be split
C. It always produces higher accuracy scores
D. It eliminates the need for a test set

Answer: B

Hint: Think about the risk of a single split happening to be unrepresentative of the overall data.

Explanation: K-fold cross-validation splits data into k subsets, training on k-1 and testing on the remaining fold, rotating through all folds. This produces a more robust performance estimate by averaging across multiple splits, reducing variance from any single split.

Why others wrong: It doesn't speed up training (it's slower — k training runs); it doesn't inflate scores; it uses multiple test folds, not none.

Trap: Thinking cross-validation always gives better scores — it gives more reliable scores, which may be lower than a lucky single split.

Mnemonic: K folds = K chances to evaluate = more trustworthy estimate

## Q3
Type: single
Difficulty: 1
Tags: machine-learning, model-comparison
Concepts: model-comparison
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

When comparing two classification models, which metric is most appropriate when the classes are heavily imbalanced (e.g., 95% negative, 5% positive)?

A. Accuracy
B. F1 Score
C. Training speed
D. Model size

Answer: B

Hint: With 95% negative class, a model that always predicts "negative" gets 95% accuracy.

Explanation: Accuracy is misleading with imbalanced classes because a naive classifier achieves high accuracy by always predicting the majority class. F1 Score balances precision and recall, providing a more meaningful evaluation for imbalanced datasets.

Why others wrong: Accuracy is inflated by the majority class; training speed and model size are not classification performance metrics.

Trap: The classic trap — high accuracy on imbalanced data often means the model learned nothing useful about the minority class.

Mnemonic: Imbalanced classes → accuracy lies → use F1

## Q4
Type: single
Difficulty: 2
Tags: rag, embedding
Concepts: rag-pipeline
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

In a Retrieval-Augmented Generation (RAG) pipeline, what is the purpose of the embedding step?

A. To compress the text to save storage space
B. To convert text chunks into numerical vectors that capture semantic meaning, enabling similarity search
C. To translate text between languages
D. To remove duplicate documents

Answer: B

Hint: Think about how a system finds documents that are semantically similar to a query.

Explanation: Embeddings convert text into dense vector representations in a high-dimensional space where semantically similar texts are positioned close together. This enables vector similarity search — the retrieval step in RAG.

Why others wrong: Compression reduces size but not for semantic search; embeddings can work across languages but that's not their purpose in RAG; deduplication is a separate preprocessing step.

Trap: Thinking embeddings are about compression — they're about capturing meaning in a searchable numerical form.

Mnemonic: Text → Vectors → Similarity Search → Retrieved Context → Generation

## Q5
Type: single
Difficulty: 2
Tags: rag, data-preparation
Concepts: rag-data-prep
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

When preparing content datasets for RAG, why is chunking strategy important?

A. Smaller chunks always perform better
B. Chunk size affects the trade-off between retrieval precision (finding exactly the relevant part) and context completeness (providing enough surrounding context for the LLM to generate a good response)
C. Chunking is only needed for PDF documents
D. All documents should be chunked into exactly 100 words

Answer: B

Hint: Too small chunks may miss context; too large chunks may include irrelevant information.

Explanation: Chunking strategy directly impacts RAG quality. Small chunks improve retrieval precision but may lack context; large chunks provide more context but may dilute relevance. The optimal strategy depends on the content type and use case.

Why others wrong: Smaller isn't always better (too small loses context); chunking applies to all document types; fixed sizes ignore document structure and content.

Trap: Defaulting to a one-size-fits-all chunking approach without considering the trade-offs.

Mnemonic: Chunk size = precision vs. context trade-off

## Q6
Type: single
Difficulty: 3
Tags: embedding, model-selection
Concepts: embedding-model-selection
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

When selecting an embedding model for text similarity search, which factor is LEAST important?

A. The model's performance on benchmarks relevant to your domain
B. The dimensionality of the output vectors
C. The year the model was first released
D. Whether the model supports the languages in your data

Answer: C

Hint: Model quality depends on performance and fitness for task, not on novelty.

Explanation: Release year alone doesn't determine embedding quality — older models like SBERT or newer ones like BGE-M3 may each be optimal depending on use case. What matters is benchmark performance on relevant tasks, vector dimensions (affecting storage/speed), and language support.

Why others wrong: Domain-relevant benchmarks indicate fitness; dimensionality affects storage and compute; language support is essential for multilingual data.

Trap: Assuming newer models are always better — this is the "latest is greatest" fallacy.

Mnemonic: Year ≠ quality — evaluate on benchmarks, not release dates

## Q7
Type: single
Difficulty: 1
Tags: prompt-engineering, basics
Concepts: prompt-engineering
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

Which of the following is a key principle of effective prompt engineering?

A. Keep prompts as short as possible, even at the cost of clarity
B. Provide clear instructions, relevant context, and specify the desired output format
C. Always use technical jargon to get more precise outputs
D. Ask the model to do as many tasks as possible in a single prompt

Answer: B

Hint: The model can only produce what you clearly describe.

Explanation: Effective prompts include clear task specification, relevant context, and format guidance. These three elements give the LLM the information needed to produce useful, targeted outputs.

Why others wrong: Brevity at the cost of clarity reduces quality; jargon doesn't improve precision; overloading prompts degrades performance on each individual task.

Trap: The myth that shorter prompts are better — clarity and completeness almost always beat brevity.

Mnemonic: Clear instructions + Context + Format = good prompt

## Q8
Type: single
Difficulty: 2
Tags: python, spacy, nlp
Concepts: spacy-nlp
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

What is spaCy primarily used for in Python?

A. Image recognition and computer vision
B. Industrial-strength Natural Language Processing — tokenization, part-of-speech tagging, named entity recognition, and dependency parsing
C. Database management
D. Web scraping

Answer: B

Hint: The name gives a clue — it's about processing natural language, not images or databases.

Explanation: spaCy is a Python library for production-grade NLP, offering tokenization, POS tagging, NER, and dependency parsing. It's explicitly mentioned in the NCA-GENL blueprint as a required Python NLP package.

Why others wrong: Image recognition uses libraries like OpenCV or PyTorch; database management uses SQLAlchemy or similar; web scraping uses BeautifulSoup or Scrapy.

Trap: Confusing spaCy with NLTK — both are NLP libraries, but spaCy is designed for production use with better performance.

Mnemonic: spaCy = speedy NLP in production

## Q9
Type: single
Difficulty: 2
Tags: python, numpy
Concepts: numpy
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

Why is NumPy essential for machine learning in Python?

A. It provides web framework capabilities
B. It offers efficient multi-dimensional array operations and mathematical functions that form the foundation for ML computations
C. It replaces the need for Python entirely
D. It only works with image data

Answer: B

Hint: Machine learning involves a lot of matrix math — which library handles that in Python?

Explanation: NumPy provides the fundamental n-dimensional array object (ndarray) and vectorized mathematical operations that make ML computations efficient. It's the numerical computing backbone that libraries like scikit-learn and TensorFlow build on.

Why others wrong: Web frameworks are Flask/Django; NumPy is a Python library, not a replacement; it works with any numerical data, not just images.

Trap: Thinking NumPy is "just arrays" — it's the computational foundation of the entire Python ML ecosystem.

Mnemonic: NumPy = Numerical Python = the math engine behind ML

## Q10
Type: single
Difficulty: 3
Tags: keras, deep-learning
Concepts: keras
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

When building a text classification model using Keras, which layer type would you use for the output layer with 5 possible categories?

A. Dense layer with 5 units and sigmoid activation
B. Dense layer with 5 units and softmax activation
C. Dense layer with 1 unit and relu activation
D. Embedding layer with 5 dimensions

Answer: B

Hint: Multi-class classification needs an output that represents probability distribution across all classes.

Explanation: For multi-class classification, the output layer needs one unit per class with softmax activation, which produces a probability distribution that sums to 1 across all classes. This is a fundamental Keras/deep learning pattern.

Why others wrong: Sigmoid is for binary or multi-label (independent probabilities); ReLU with 1 unit is for regression; embedding layers are for input representations, not output.

Trap: Using sigmoid for multi-class — sigmoid treats each class independently (multi-label), while softmax enforces mutual exclusivity.

Mnemonic: Multi-class → Softmax (sums to 1), Multi-label → Sigmoid (independent)

## Q11
Type: single
Difficulty: 1
Tags: vector-database, similarity-search
Concepts: vector-database
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

What is the primary purpose of a vector database in an LLM application?

A. To store SQL queries
B. To store and efficiently search high-dimensional vector embeddings for similarity matching
C. To train the LLM model
D. To replace the LLM entirely

Answer: B

Hint: When you convert text to vectors, where do you store them and how do you search through them?

Explanation: Vector databases are purpose-built to store embedding vectors and perform efficient similarity search (approximate nearest neighbor search), which is the core retrieval mechanism in RAG and other LLM applications.

Why others wrong: SQL queries go in relational databases; vector databases don't train models; they complement LLMs, not replace them.

Trap: Confusing vector databases with relational databases — they serve fundamentally different purposes.

Mnemonic: Vector DB = store embeddings + find similar ones fast

## Q12
Type: single
Difficulty: 2
Tags: llm, chatbot, use-cases
Concepts: llm-use-cases
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

Which combination of capabilities makes LLMs suitable for building customer service chatbots?

A. Image generation and video editing
B. Natural language understanding, context retention across conversation turns, and the ability to generate coherent, contextually appropriate responses
C. SQL query execution and database management
D. Real-time video streaming

Answer: B

Hint: Chatbots need to understand what users say and respond naturally across a conversation.

Explanation: Customer service chatbots require understanding user intent (NLU), maintaining conversation context, and generating appropriate responses — all core LLM capabilities. Building chatbots is explicitly listed as an NCA-GENL LLM use case.

Why others wrong: Image generation isn't core to text chatbots; SQL and video streaming are separate capabilities not central to conversational AI.

Trap: Overcomplicating what makes chatbots work — the core is understanding and generating natural language in context.

Mnemonic: Chatbot = Understand + Remember context + Respond naturally

## Q13
Type: single
Difficulty: 1
Tags: software-development, system-components
Concepts: system-components
Domain: Domain 2 — Software Development
DomainNumber: 2

In an AI application architecture, what role does the inference server play?

A. It stores the training data
B. It hosts the trained model and processes incoming requests to generate predictions or outputs
C. It manages user authentication
D. It handles frontend UI rendering

Answer: B

Hint: After a model is trained, it needs to be served somewhere to make predictions.

Explanation: The inference server hosts the trained model and handles prediction requests — it's the component that transforms input data into model outputs in production. Understanding system components is a key NCA-GENL software development skill.

Why others wrong: Training data is stored in data stores/lakes; authentication is handled by auth services; UI rendering is a frontend concern.

Trap: Confusing training infrastructure with serving infrastructure — they have different requirements and architectures.

Mnemonic: Training server = learning, Inference server = predicting

## Q14
Type: single
Difficulty: 2
Tags: software-development, monitoring
Concepts: monitoring
Domain: Domain 2 — Software Development
DomainNumber: 2

Why is it important to monitor an LLM application in production?

A. To track how many users like the color scheme
B. To detect issues like response quality degradation, latency spikes, token usage anomalies, and data drift that could affect the user experience
C. To increase the model's training data automatically
D. To prevent users from asking questions

Answer: B

Hint: Production systems can degrade in ways that aren't visible without active monitoring.

Explanation: Production monitoring detects degradation in response quality, performance issues (latency), cost anomalies (token usage), and data drift — allowing proactive intervention before users are significantly impacted.

Why others wrong: UI preferences are not production monitoring; monitoring doesn't auto-augment training data; monitoring observes behavior, doesn't restrict users.

Trap: Thinking deployment is the end — production monitoring is ongoing and essential for maintaining quality.

Mnemonic: Deploy → Monitor → Detect → Fix → Repeat

## Q15
Type: single
Difficulty: 2
Tags: software-development, deployment
Concepts: deployment
Domain: Domain 2 — Software Development
DomainNumber: 2

Under the guidance of a senior team member, you are helping deploy a new text classification model. Which step should come BEFORE deploying to production?

A. Sending a press release about the new model
B. Running the model on a validation/staging environment to verify it performs as expected on representative data
C. Deleting the previous model version
D. Training the model for one more epoch

Answer: B

Hint: You wouldn't ship software to users without testing it in a staging environment first.

Explanation: Pre-production validation in a staging environment is a critical deployment step — it catches issues before they affect users. The NCA-GENL blueprint specifies this as "assist in deploying and evaluating" under senior guidance.

Why others wrong: Press releases are premature before validation; deleting the previous version removes rollback capability; additional training without validation is risky.

Trap: Skipping staging because "it worked in training" — production data and conditions often differ from training conditions.

Mnemonic: Train → Validate → Stage → Deploy (never skip a step)

## Q16
Type: single
Difficulty: 3
Tags: software-development, hardware
Concepts: hardware-components
Domain: Domain 2 — Software Development
DomainNumber: 2

For running inference on a large language model locally, which hardware component is most critical?

A. A high-resolution monitor
B. A GPU with sufficient VRAM to hold the model weights in memory
C. A mechanical keyboard
D. A high-capacity SSD

Answer: B

Hint: LLMs have billions of parameters that need to be loaded into fast-access memory for inference.

Explanation: GPU VRAM is the primary bottleneck for LLM inference — the model's parameters must fit in GPU memory for efficient inference. This is why GPU selection (and VRAM capacity) is the key hardware decision for LLM deployment.

Why others wrong: Monitor resolution is irrelevant to inference; keyboard type doesn't affect computation; SSD helps with loading but VRAM is the bottleneck during inference.

Trap: Focusing on general system specs (CPU, RAM, storage) rather than the specific bottleneck for LLM inference — GPU VRAM.

Mnemonic: LLM inference bottleneck = GPU VRAM

## Q17
Type: single
Difficulty: 2
Tags: software-development, python-scripting
Concepts: scripting
Domain: Domain 2 — Software Development
DomainNumber: 2

You are asked to write a Python script that preprocesses text data before feeding it to a model. Which operations are typically part of text preprocessing?

A. Resizing images and adjusting contrast
B. Tokenization, lowercasing, removing stop words, and handling special characters
C. Compiling C++ code
D. Creating database indexes

Answer: B

Hint: Text preprocessing transforms raw text into a clean, standardized form for NLP models.

Explanation: Text preprocessing typically includes tokenization (splitting text into tokens), normalization (lowercasing), noise removal (stop words, special characters), and potentially stemming/lemmatization. These are fundamental NLP pipeline steps.

Why others wrong: Image operations are computer vision preprocessing; C++ compilation and database indexing are unrelated to text processing.

Trap: Mixing up text preprocessing with image preprocessing or general data engineering.

Mnemonic: Text prep: Tokenize → Normalize → Clean → Feed to model

## Q18
Type: single
Difficulty: 1
Tags: experimentation, loss-function
Concepts: loss-function
Domain: Domain 3 — Experimentation
DomainNumber: 3

What does a loss function measure in machine learning?

A. The total number of training examples
B. The difference between the model's predictions and the actual correct values — a measure of how wrong the model is
C. The speed of training
D. The size of the model file

Answer: B

Hint: Training aims to minimize something — what is that something?

Explanation: The loss function quantifies the discrepancy between predicted and actual values. Training optimizes model parameters to minimize this loss. Understanding loss functions is explicitly mentioned in the NCA-GENL blueprint under statistical performance metrics.

Why others wrong: Example count, training speed, and model size are not measures of prediction quality.

Trap: Thinking lower loss always means a better model — very low training loss with high validation loss indicates overfitting.

Mnemonic: Loss = how wrong the model is (lower is better, usually)

## Q19
Type: single
Difficulty: 2
Tags: experimentation, model-evaluation
Concepts: explained-variance
Domain: Domain 3 — Experimentation
DomainNumber: 3

What does the R² (coefficient of determination) metric tell you about a regression model?

A. The classification accuracy of the model
B. The proportion of variance in the target variable that is explained by the model — how much of the variation in outcomes the model captures
C. The number of features used
D. The training time in seconds

Answer: B

Hint: R² ranges from 0 to 1 (typically) — what does 0.85 mean in terms of explanation?

Explanation: R² measures explained variance — an R² of 0.85 means the model explains 85% of the variance in the target variable. The NCA-GENL blueprint explicitly lists "explained variance ratio" as a comparison metric.

Why others wrong: R² is for regression, not classification; it doesn't count features or measure time.

Trap: Assuming R² close to 1 is always good — very high R² on training data may indicate overfitting.

Mnemonic: R² = proportion of variance explained (0 = nothing explained, 1 = everything explained)

## Q20
Type: single
Difficulty: 2
Tags: experimentation, rlhf
Concepts: rlhf
Domain: Domain 3 — Experimentation
DomainNumber: 3

What is the role of human feedback in RLHF (Reinforcement Learning from Human Feedback)?

A. Humans manually edit the model's code
B. Human evaluators rank model outputs by quality, and these rankings train a reward model that guides further model optimization
C. Humans provide more training data in text format
D. Humans design the neural network architecture

Answer: B

Hint: RLHF uses human preferences, not human code or data — how do preferences get into the training loop?

Explanation: In RLHF, human evaluators compare model outputs and rank them by quality. These preference rankings train a reward model, which then provides the reward signal for reinforcement learning to improve the base model. The NCA-GENL blueprint mentions RLHF and human annotators.

Why others wrong: Humans don't edit code in RLHF; it's preference-based, not data-based; architecture design is separate from RLHF.

Trap: Thinking RLHF means humans directly correct the model — it's an indirect process through preference rankings and reward modeling.

Mnemonic: Humans rank → Reward model learns → RL optimizes the LLM

## Q21
Type: single
Difficulty: 3
Tags: experimentation, model-comparison
Concepts: model-comparison-methodology
Domain: Domain 3 — Experimentation
DomainNumber: 3

You are comparing two text classification models — one using a traditional ML approach (TF-IDF + logistic regression) and one using a fine-tuned transformer. Which evaluation approach is most rigorous?

A. Compare accuracy on the training set
B. Use the same held-out test set, report multiple metrics (accuracy, F1, precision, recall), and perform statistical significance testing to determine if the performance difference is meaningful
C. Compare which model trains faster
D. Choose based on which model has more parameters

Answer: B

Hint: Rigorous comparison requires consistent evaluation conditions and meaningful metrics.

Explanation: Proper model comparison requires: same evaluation data, multiple relevant metrics (not just accuracy), and statistical testing to distinguish real improvements from random variation. This is the core of the NCA-GENL Experimentation domain.

Why others wrong: Training set performance doesn't predict generalization; speed and size are secondary to task performance; single metrics can be misleading.

Trap: Comparing on training data (overly optimistic) or using a single metric (potentially misleading for imbalanced data).

Mnemonic: Same test set + Multiple metrics + Statistical significance = rigorous comparison

## Q22
Type: single
Difficulty: 2
Tags: experimentation, visualization
Concepts: data-visualization
Domain: Domain 3 — Experimentation
DomainNumber: 3

Which visualization is most appropriate for showing how a classification model's precision and recall trade off at different probability thresholds?

A. A bar chart of accuracy per class
B. A precision-recall curve
C. A pie chart of class distribution
D. A scatter plot of training epochs vs. loss

Answer: B

Hint: You need to visualize how two metrics change together as you adjust the decision threshold.

Explanation: A precision-recall curve plots precision against recall at various classification thresholds, showing the trade-off between the two. This visualization helps identify the optimal threshold for your use case.

Why others wrong: Bar charts don't show threshold trade-offs; pie charts show distribution, not model performance; epoch vs. loss shows training progress, not threshold behavior.

Trap: Confusing ROC curves (TPR vs. FPR) with precision-recall curves — PR curves are preferred for imbalanced datasets.

Mnemonic: Precision-Recall curve = threshold trade-off visualization

## Q23
Type: single
Difficulty: 1
Tags: data-analysis, trends
Concepts: trend-identification
Domain: Domain 4 — Data Analysis
DomainNumber: 4

When analyzing model performance metrics over time, a steadily decreasing accuracy on new data while training accuracy remains high suggests:

A. The model is improving
B. Data drift — the distribution of incoming data has shifted away from what the model was trained on
C. The server needs more memory
D. The training data was too large

Answer: B

Hint: When new data behaves differently from training data, the model's real-world performance drops.

Explanation: Diverging training and production accuracy is a classic sign of data drift — the real-world data distribution has shifted from what the model learned. Identifying such trends is a core data analysis skill in NCA-GENL.

Why others wrong: Declining production accuracy means degradation, not improvement; memory is unrelated to accuracy divergence; training data size doesn't cause this pattern.

Trap: Assuming the model is still working because training metrics look good — production metrics are what matter.

Mnemonic: Training acc stays high + Production acc drops = data drift

## Q24
Type: single
Difficulty: 2
Tags: data-analysis, correlation
Concepts: correlation-analysis
Domain: Domain 4 — Data Analysis
DomainNumber: 4

In analyzing features for a machine learning model, you find that two features have a Pearson correlation coefficient of 0.98. What does this indicate and what should you consider?

A. The features are unrelated
B. The features are highly correlated — they carry nearly the same information, and including both may cause multicollinearity, potentially destabilizing model coefficients
C. Both features should be removed from the dataset
D. The model will definitely overfit

Answer: B

Hint: A correlation close to 1 means two features move almost identically — is that redundant?

Explanation: A correlation of 0.98 indicates near-perfect linear relationship. Including both features adds redundancy and can cause multicollinearity in linear models, inflating coefficient variance. Consider removing one or combining them.

Why others wrong: 0.98 means highly related, not unrelated; removing both loses information; high correlation doesn't guarantee overfitting.

Trap: Keeping both features without considering multicollinearity effects on model stability.

Mnemonic: Correlation ≈ 1 → nearly identical features → pick one or combine

## Q25
Type: single
Difficulty: 2
Tags: data-analysis, insights
Concepts: insight-extraction
Domain: Domain 4 — Data Analysis
DomainNumber: 4

You're analyzing the performance of a sentiment analysis model across different product categories. The model scores 92% on electronics reviews but only 68% on restaurant reviews. What is the most useful insight?

A. The model is broken for restaurant reviews
B. The model likely has a domain coverage gap — its training data may have been skewed toward electronics-style language, and it may not handle the different vocabulary, idioms, and sentiment expressions used in restaurant reviews
C. Restaurant reviews are impossible to analyze
D. The electronics accuracy is suspiciously high

Answer: B

Hint: Performance variation across domains usually reveals something about the training data or domain characteristics.

Explanation: Domain-specific performance gaps typically indicate training data imbalance or domain vocabulary differences. This insight directs remediation — augmenting training data with restaurant reviews or fine-tuning for that domain.

Why others wrong: The model isn't broken, it has a specific gap; restaurant reviews are analyzable with proper training data; 92% on electronics may be legitimately achievable.

Trap: Declaring the model "broken" rather than identifying the specific domain gap and its likely cause.

Mnemonic: Domain gap in performance → domain gap in training data

## Q26
Type: single
Difficulty: 1
Tags: trustworthy-ai, ethics
Concepts: ethical-principles
Domain: Domain 5 — Trustworthy AI
DomainNumber: 5

Which of the following is a core ethical principle of Trustworthy AI?

A. Maximizing profit above all other considerations
B. Fairness — ensuring AI systems do not discriminate against individuals or groups based on protected characteristics
C. Making AI systems as complex as possible
D. Keeping AI development secret from the public

Answer: B

Hint: Trustworthy AI is built on principles that protect people from harm.

Explanation: Fairness is a foundational ethical principle of Trustworthy AI, requiring that systems don't discriminate based on protected characteristics like race, gender, or age. The NCA-GENL blueprint explicitly covers Trustworthy AI ethical principles.

Why others wrong: Profit maximization ignores ethical obligations; complexity is not an ethical goal; secrecy contradicts transparency principles.

Trap: Thinking technical capability alone makes AI trustworthy — trust requires ethical foundations.

Mnemonic: Trustworthy AI = Fair + Transparent + Accountable + Safe

## Q27
Type: single
Difficulty: 2
Tags: trustworthy-ai, bias
Concepts: bias-mitigation
Domain: Domain 5 — Trustworthy AI
DomainNumber: 5

A hiring model consistently rates male candidates higher than equally qualified female candidates. What is the most effective approach to addressing this bias?

A. Ignore it since the model is just reflecting the data
B. Audit the training data for historical bias, apply debiasing techniques, test with fairness metrics across demographic groups, and establish ongoing monitoring
C. Remove all gender-related features and assume the problem is solved
D. Only use the model for male candidates

Answer: B

Hint: Bias mitigation requires multiple steps — data audit, technical fixes, measurement, and monitoring.

Explanation: Addressing AI bias requires a systematic approach: audit data for historical biases, apply technical debiasing methods, measure fairness across groups, and monitor continuously. Simply removing features is insufficient because proxy variables can still encode bias.

Why others wrong: Ignoring bias violates ethical AI principles; removing features alone doesn't eliminate proxy bias; restricting use doesn't fix the underlying problem.

Trap: The "fairness through unawareness" fallacy — removing protected attributes doesn't remove bias because other features can act as proxies.

Mnemonic: Audit → Debias → Measure → Monitor (repeat)

## Q28
Type: single
Difficulty: 2
Tags: trustworthy-ai, privacy
Concepts: data-privacy
Domain: Domain 5 — Trustworthy AI
DomainNumber: 5

What is the relationship between data privacy and data consent in AI systems?

A. They are the same thing
B. Privacy is the right to control personal information, while consent is the mechanism through which individuals authorize the use of their data — both are necessary but distinct concepts
C. Consent makes privacy unnecessary
D. Privacy only applies to medical data

Answer: B

Hint: One is the right, the other is the process of exercising that right.

Explanation: Data privacy is the fundamental right; data consent is the mechanism for exercising that right. Both must be present — having consent without privacy protections (or privacy without meaningful consent) is insufficient. The NCA-GENL blueprint explicitly lists this balance.

Why others wrong: They're related but distinct concepts; consent doesn't eliminate the need for technical privacy protections; privacy applies to all personal data, not just medical.

Trap: Treating consent as a checkbox that makes all privacy concerns disappear — consent must be informed, specific, and accompanied by actual data protections.

Mnemonic: Privacy = the right, Consent = the permission — you need both

## Q29
Type: single
Difficulty: 1
Tags: trustworthy-ai, nvidia-tools
Concepts: nvidia-trustworthy-tools
Domain: Domain 5 — Trustworthy AI
DomainNumber: 5

Which of the following describes how NVIDIA technology helps enhance AI trustworthiness?

A. By making AI models run faster, they become more trustworthy
B. By providing tools and frameworks for model interpretability, safety guardrails, and bias detection that help developers build more responsible AI systems
C. By encrypting all AI models
D. By limiting who can use AI

Answer: B

Hint: Trustworthiness comes from tools that help understand, constrain, and audit AI behavior.

Explanation: NVIDIA contributes to AI trustworthiness through interpretability tools, safety guardrails (like NeMo Guardrails), and bias detection capabilities. These tools help developers build AI systems that are more transparent and accountable.

Why others wrong: Speed doesn't equal trust; encryption is about security, not trustworthiness; restricting access doesn't address the underlying trust issues.

Trap: Equating performance (speed, accuracy) with trustworthiness — they are separate dimensions.

Mnemonic: NVIDIA trust tools: Interpretability + Guardrails + Bias detection

## Q30
Type: single
Difficulty: 2
Tags: machine-learning, feature-engineering, advanced
Concepts: feature-selection
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

What is the difference between feature selection and feature extraction?

A. They are the same thing
B. Feature selection chooses a subset of existing features, while feature extraction creates new features by transforming or combining existing ones (like PCA)
C. Feature selection only works with text data
D. Feature extraction always requires deep learning

Answer: B

Hint: One picks from what you have; the other creates something new from what you have.

Explanation: Feature selection identifies the most relevant existing features to keep (removing irrelevant ones), while feature extraction creates new derived features through transformations like PCA, polynomial features, or embedding representations.

Why others wrong: They're distinct processes; feature selection works with any data type; extraction methods include non-DL techniques like PCA.

Trap: Using the terms interchangeably — they have different implementations and use cases.

Mnemonic: Selection = pick the best existing features, Extraction = create new features from old ones

## Q31
Type: single
Difficulty: 3
Tags: llm, summarization
Concepts: summarization
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

When building an LLM-based summarization system, what is the key challenge of extractive vs. abstractive summarization?

A. Extractive is always better than abstractive
B. Extractive selects and arranges existing sentences (preserving fidelity but potentially lacking fluency), while abstractive generates new text (more fluent but risks introducing information not in the source)
C. They produce identical outputs
D. Abstractive summarization doesn't use LLMs

Answer: B

Hint: One copies from the source; the other writes something new — what are the risks of each?

Explanation: Extractive summarization copies key sentences (high fidelity, potentially choppy), while abstractive generates new text (smoother, but risks hallucination). Modern LLMs excel at abstractive summarization but require careful evaluation for faithfulness.

Why others wrong: Neither approach is universally better; they produce quite different outputs; LLMs are commonly used for abstractive summarization.

Trap: Assuming abstractive is always better because it sounds more natural — faithfulness to the source is often more important.

Mnemonic: Extractive = copy (faithful but rough), Abstractive = rewrite (fluent but risky)

## Q32
Type: single
Difficulty: 2
Tags: software-development, data-pipeline
Concepts: data-pipeline
Domain: Domain 2 — Software Development
DomainNumber: 2

In a production AI system, what is the purpose of a data pipeline?

A. To generate synthetic training data
B. To automate the flow of data from collection through preprocessing, transformation, and delivery to the model or storage system
C. To manually review every data point
D. To compress all data to save storage

Answer: B

Hint: Production systems need automated, reliable data movement from source to model.

Explanation: Data pipelines automate the end-to-end flow of data — from ingestion through cleaning, transformation, and delivery to models or data stores. Monitoring data collection and software processes is an NCA-GENL software development objective.

Why others wrong: Synthetic data generation is a separate process; manual review doesn't scale; compression is one possible step, not the pipeline's purpose.

Trap: Thinking data pipelines only handle raw data — they include transformation, quality checks, and delivery logic.

Mnemonic: Pipeline = Collect → Clean → Transform → Deliver (automated)

## Q33
Type: single
Difficulty: 1
Tags: software-development, api
Concepts: api-integration
Domain: Domain 2 — Software Development
DomainNumber: 2

When integrating an LLM API into an application, what is a "token" in the context of API pricing?

A. A security credential for authentication
B. A unit of text (roughly a word or word-piece) that the model processes — API pricing is typically based on the number of tokens in the input and output
C. A database record
D. A hardware component

Answer: B

Hint: LLMs process text in pieces — what are those pieces called?

Explanation: In LLM APIs, tokens are the units of text processing — roughly 3/4 of a word for English text. Pricing is typically per-token (input and output separately), making token count a key cost driver.

Why others wrong: Authentication tokens are different from text tokens; database records and hardware are unrelated to LLM pricing.

Trap: Confusing "token" in the security sense (auth token) with "token" in the NLP sense (text unit) — they share a name but are completely different concepts.

Mnemonic: LLM token ≈ word piece, API cost = tokens × price_per_token

## Q34
Type: single
Difficulty: 2
Tags: experimentation, annotation
Concepts: human-annotation
Domain: Domain 3 — Experimentation
DomainNumber: 3

When using human annotators to label training data for a sentiment analysis model, what is the most important quality control measure?

A. Having only one annotator label everything for consistency
B. Using multiple annotators per sample and measuring inter-annotator agreement to ensure labeling quality and identify ambiguous examples
C. Allowing annotators to skip difficult examples
D. Using the fastest annotators regardless of accuracy

Answer: B

Hint: One person's labels reflect one perspective — how do you know if the labels are reliable?

Explanation: Inter-annotator agreement (e.g., Cohen's Kappa) measures consistency across multiple annotators. High agreement indicates reliable labels; low agreement identifies ambiguous examples that may need clearer guidelines or expert resolution.

Why others wrong: Single annotator introduces individual bias; skipping difficult examples creates gaps; speed without accuracy produces bad training data.

Trap: Prioritizing annotation speed over quality — poor labels produce poor models, regardless of volume.

Mnemonic: Multiple annotators + Agreement metrics = trustworthy labels

## Q35
Type: single
Difficulty: 3
Tags: experimentation, ablation
Concepts: ablation-study
Domain: Domain 3 — Experimentation
DomainNumber: 3

In an experiment to understand which components of a RAG system contribute most to answer quality, you systematically remove each component and measure the impact. What is this experimental approach called?

A. A/B testing
B. Ablation study — systematically removing components to understand their individual contribution
C. Feature engineering
D. Hyperparameter tuning

Answer: B

Hint: The surgical metaphor — "ablation" means removing something to understand what it does.

Explanation: Ablation studies systematically remove or disable components one at a time to measure their contribution to overall performance. In RAG, you might ablate the reranker, the chunking strategy, or the embedding model to understand each component's impact.

Why others wrong: A/B testing compares two complete variants; feature engineering creates inputs; hyperparameter tuning adjusts parameters without removing components.

Trap: Confusing ablation with A/B testing — A/B compares two complete systems, ablation removes pieces from one system.

Mnemonic: Ablation = remove one piece → measure the damage → understand its value

## Q36
Type: single
Difficulty: 2
Tags: data-analysis, data-quality
Concepts: data-quality
Domain: Domain 4 — Data Analysis
DomainNumber: 4

When ingesting a new dataset for model training, which data quality issue is most likely to silently degrade model performance?

A. The dataset is too large
B. Duplicate records that artificially inflate the representation of certain patterns, causing the model to learn biased or overconfident predictions
C. The data is stored in CSV format
D. Column headers use underscores

Answer: B

Hint: What happens when a model sees the same data point multiple times and thinks it's common?

Explanation: Duplicate records are particularly insidious because they don't cause obvious errors but skew the learned distribution — the model treats duplicated patterns as more common than they actually are, leading to biased predictions.

Why others wrong: Dataset size isn't inherently a quality issue; CSV format and column naming are storage/formatting choices, not quality issues.

Trap: Overlooking duplicates because the data "looks clean" — deduplication should be a standard preprocessing step.

Mnemonic: Duplicates = silent bias — always check before training

## Q37
Type: single
Difficulty: 1
Tags: data-analysis, statistics
Concepts: descriptive-statistics
Domain: Domain 4 — Data Analysis
DomainNumber: 4

What is the purpose of computing descriptive statistics (mean, median, standard deviation) for a dataset before model training?

A. To directly improve model accuracy
B. To understand the distribution, central tendency, and spread of features — identifying potential issues like skewness, outliers, or features on vastly different scales
C. To replace the need for feature engineering
D. To select the best algorithm

Answer: B

Hint: Before building a model, you need to understand what your data looks like.

Explanation: Descriptive statistics provide the essential first look at data distribution — they reveal skewness (may need transformation), outliers (may need handling), and scale differences (may need normalization). This exploratory step guides preprocessing decisions.

Why others wrong: Statistics don't directly improve accuracy; they don't replace feature engineering; algorithm selection depends on more than just statistics.

Trap: Skipping exploratory data analysis and jumping straight to modeling — understanding your data first prevents many downstream issues.

Mnemonic: Look before you model: mean, median, std, min, max, distribution

## Q38
Type: single
Difficulty: 2
Tags: trustworthy-ai, transparency
Concepts: ai-transparency
Domain: Domain 5 — Trustworthy AI
DomainNumber: 5

Why is model interpretability important for Trustworthy AI?

A. Because more interpretable models always perform better
B. Because stakeholders need to understand why an AI system makes specific decisions, especially in high-stakes applications where accountability, debugging, and compliance require explainable outputs
C. Because interpretable models require less data
D. Because regulators always require interpretability

Answer: B

Hint: If you can't explain why a model made a decision, how can you trust or fix it?

Explanation: Interpretability enables understanding, auditing, and improving AI decisions. In high-stakes domains (healthcare, finance, criminal justice), the ability to explain decisions is essential for accountability and compliance.

Why others wrong: Interpretability and performance aren't correlated; data requirements depend on model type; not all regulations require interpretability (though many do).

Trap: Assuming interpretability is only a regulatory checkbox — it's fundamentally about understanding and trusting system behavior.

Mnemonic: Can't explain it? Can't trust it. Can't debug it.

## Q39
Type: single
Difficulty: 3
Tags: rag, evaluation
Concepts: rag-evaluation
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

When evaluating a RAG system, which combination of metrics best captures both retrieval quality and generation quality?

A. Only BLEU score
B. Retrieval metrics (recall@k, precision@k) for the retrieval component, plus generation metrics (faithfulness, relevance, coherence) for the LLM output
C. Training loss only
D. Inference speed only

Answer: B

Hint: RAG has two stages — retrieval and generation — each needs its own evaluation.

Explanation: RAG evaluation requires measuring both stages independently: retrieval quality (did we find the right documents?) and generation quality (did the LLM use them correctly?). Single-metric evaluation misses half the picture.

Why others wrong: BLEU alone doesn't capture retrieval quality or faithfulness; training loss is about model training, not RAG performance; speed is operational, not quality.

Trap: Evaluating only the final output without distinguishing retrieval failures from generation failures — you need to know which stage is causing issues.

Mnemonic: RAG eval = Retrieval metrics + Generation metrics (evaluate both stages)

## Q40
Type: single
Difficulty: 2
Tags: machine-learning, overfitting
Concepts: overfitting-underfitting
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

A model achieves 99% accuracy on the training set but only 60% on the test set. What is this symptom called and how do you address it?

A. Underfitting — make the model more complex
B. Overfitting — the model memorized training data instead of learning generalizable patterns; address with regularization, more training data, simpler model, or dropout
C. Perfect performance — deploy immediately
D. Data leakage — fix the data pipeline

Answer: B

Hint: Huge gap between training and test performance means the model learned the training data too well.

Explanation: A large gap between training and test performance (99% vs 60%) is the classic sign of overfitting — the model memorized specific training examples rather than learning general patterns. Solutions include regularization, data augmentation, and model simplification.

Why others wrong: Underfitting shows poor performance on both sets; 60% test accuracy is not perfect; data leakage would show high scores on both sets.

Trap: Not recognizing overfitting because the training accuracy looks great — always compare training and test performance.

Mnemonic: Train high + Test low = overfitting (model memorized, didn't learn)

## Q41
Type: single
Difficulty: 1
Tags: llm, prompt-engineering
Concepts: few-shot-prompting
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

What is "few-shot prompting" in the context of LLMs?

A. Training the model on a few examples
B. Including a small number of examples in the prompt to show the model the desired input-output pattern, without any model training
C. Limiting the model to a few words of output
D. Using the model for only a few requests

Answer: B

Hint: "Few-shot" refers to examples in the prompt, not in training.

Explanation: Few-shot prompting provides example input-output pairs directly in the prompt (not in training) to demonstrate the desired behavior. This leverages the LLM's ability to learn patterns in-context without parameter updates.

Why others wrong: Few-shot prompting doesn't involve training; it doesn't limit output length; it's not about usage limits.

Trap: Confusing few-shot prompting (in-context learning at inference time) with few-shot learning (training with limited data).

Mnemonic: Few-shot = show examples in the prompt → model follows the pattern

## Q42
Type: single
Difficulty: 2
Tags: software-development, version-control
Concepts: model-versioning
Domain: Domain 2 — Software Development
DomainNumber: 2

Why is version control important for machine learning models and data in production?

A. It makes the files smaller
B. It enables reproducibility, rollback to previous versions if issues arise, and tracking of what changed between model iterations — essential for debugging and compliance
C. It's only needed for code, not models
D. It prevents anyone from modifying the model

Answer: B

Hint: In production, you need to know what changed when something breaks — and be able to undo it.

Explanation: Version control for ML models and data enables reproducibility (recreating any version), rollback (reverting to a known-good state), and audit trail (understanding what changed). This is critical for production reliability and compliance.

Why others wrong: Version control doesn't compress files; it applies to models and data, not just code; it enables controlled modification, not prevention.

Trap: Applying code-only version control practices without also versioning models and data — ML requires all three to be tracked.

Mnemonic: Version control = reproducibility + rollback + audit trail

## Q43
Type: single
Difficulty: 2
Tags: experimentation, hyperparameters
Concepts: hyperparameter-tuning
Domain: Domain 3 — Experimentation
DomainNumber: 3

In the context of LLM API usage, what does the "temperature" parameter control?

A. The physical temperature of the GPU
B. The randomness of the model's output — lower temperature produces more deterministic, focused outputs while higher temperature produces more varied, creative outputs
C. The speed of response generation
D. The maximum response length

Answer: B

Hint: Temperature in statistical mechanics is related to randomness — the same metaphor applies here.

Explanation: Temperature controls the probability distribution over tokens during generation. Low temperature (e.g., 0.1) concentrates probability on the most likely tokens (deterministic), while high temperature (e.g., 1.0+) flattens the distribution (more random, creative).

Why others wrong: It doesn't affect hardware temperature, speed, or length (that's max_tokens).

Trap: Thinking higher temperature always means better creativity — very high temperature produces incoherent text.

Mnemonic: Low temp = focused/predictable, High temp = diverse/creative

## Q44
Type: single
Difficulty: 3
Tags: data-analysis, feature-importance
Concepts: feature-importance
Domain: Domain 4 — Data Analysis
DomainNumber: 4

You've trained a random forest model and need to explain to a stakeholder which input features have the most influence on predictions. Which analysis technique is most appropriate?

A. Looking at the feature names
B. Computing feature importance scores (e.g., mean decrease in impurity or permutation importance) and visualizing them as a ranked bar chart
C. Counting how many features there are
D. Asking the model to explain itself

Answer: B

Hint: Random forests provide built-in feature importance — how do you extract and present it?

Explanation: Feature importance scores quantify each feature's contribution to predictions. Mean decrease in impurity (Gini importance) and permutation importance are standard methods for tree-based models. Presenting as a ranked bar chart makes it accessible to stakeholders.

Why others wrong: Feature names don't indicate importance; counting features doesn't show influence; random forests don't self-explain in natural language.

Trap: Using only default Gini importance without considering its bias toward high-cardinality features — permutation importance is often more reliable.

Mnemonic: Feature importance = measure each feature's contribution → rank → visualize

## Q45
Type: single
Difficulty: 1
Tags: machine-learning, supervised-unsupervised
Concepts: learning-paradigms
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

What is the key difference between supervised and unsupervised learning?

A. Supervised learning is faster
B. Supervised learning uses labeled data (input-output pairs) to learn a mapping, while unsupervised learning finds patterns in unlabeled data without predefined correct answers
C. Unsupervised learning always performs better
D. They use different programming languages

Answer: B

Hint: The difference is about whether the training data includes the "right answer."

Explanation: Supervised learning requires labeled data (each input has a known correct output), while unsupervised learning discovers structure in unlabeled data (clustering, dimensionality reduction). This is a fundamental ML concept in the NCA-GENL blueprint.

Why others wrong: Speed depends on the specific algorithm and data, not the paradigm; neither is universally better; both can be implemented in any language.

Trap: Thinking unsupervised is inferior because it doesn't use labels — it solves different problems (finding structure vs. predicting outcomes).

Mnemonic: Supervised = teacher provides answers, Unsupervised = student finds patterns

## Q46
Type: single
Difficulty: 2
Tags: rag, vector-search
Concepts: hybrid-search
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

What is the advantage of hybrid search (combining keyword search with vector search) in a RAG system?

A. It's always faster than either approach alone
B. It combines the precision of keyword matching for exact terms with the semantic understanding of vector search for conceptual similarity, improving retrieval quality for a wider range of queries
C. It eliminates the need for an embedding model
D. It only works with English text

Answer: B

Hint: Some queries need exact matches; others need conceptual understanding — can you have both?

Explanation: Hybrid search combines BM25/keyword search (precise for exact terms, acronyms, proper nouns) with vector search (captures semantic meaning). This covers more query types than either alone, improving overall retrieval quality in RAG.

Why others wrong: Hybrid may be slower than either alone; it still needs embeddings for the vector component; it works with any language.

Trap: Assuming vector search alone handles everything — it struggles with exact terms, codes, and proper nouns where keyword matching excels.

Mnemonic: Keyword = exact match, Vector = meaning match, Hybrid = best of both

## Q47
Type: single
Difficulty: 2
Tags: software-development, error-handling
Concepts: error-handling
Domain: Domain 2 — Software Development
DomainNumber: 2

When building an application that calls an LLM API, what error handling pattern is most important to implement?

A. Crash the application on any error
B. Implement retry logic with exponential backoff for rate limits and transient errors, with graceful degradation when the API is unavailable
C. Ignore all errors and show the user a blank response
D. Call the API in an infinite loop until it succeeds

Answer: B

Hint: APIs fail — your application should handle failure gracefully, not crash or hang.

Explanation: Production LLM applications must handle API errors gracefully: retry with backoff for transient failures, implement fallbacks for extended outages, and inform users appropriately. This is fundamental to building reliable software with LLM APIs.

Why others wrong: Crashing is the worst user experience; ignoring errors confuses users; infinite loops risk resource exhaustion and API abuse.

Trap: Not implementing retries because "the API is reliable" — all APIs have transient failures, rate limits, and occasional outages.

Mnemonic: Retry with backoff → degrade gracefully → never crash, never hang

## Q48
Type: single
Difficulty: 3
Tags: machine-learning, regularization
Concepts: regularization
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

What is the difference between L1 (Lasso) and L2 (Ridge) regularization?

A. L1 is always better than L2
B. L1 adds the absolute values of coefficients as a penalty (tends to produce sparse models by driving some coefficients to exactly zero), while L2 adds the squared values (shrinks coefficients toward zero but rarely eliminates them)
C. L2 is used for classification and L1 for regression
D. They produce identical results

Answer: B

Hint: One drives coefficients to exactly zero (feature selection), the other just shrinks them.

Explanation: L1 (Lasso) creates sparse solutions by zeroing out less important features (implicit feature selection), while L2 (Ridge) shrinks all coefficients proportionally without eliminating any. This distinction affects model interpretability and feature selection.

Why others wrong: Neither is universally better; both work for classification and regression; they produce quite different model structures.

Trap: Thinking regularization only prevents overfitting — L1's sparsity property also serves as automatic feature selection.

Mnemonic: L1 = Lasso = zero out features (sparse), L2 = Ridge = shrink all features (small but not zero)

## Q49
Type: single
Difficulty: 2
Tags: software-development, testing
Concepts: ml-testing
Domain: Domain 2 — Software Development
DomainNumber: 2

When testing an AI application, why is it important to test with data from underrepresented groups?

A. To make the testing take longer
B. To ensure the model performs fairly across all demographic groups and to identify potential bias that would affect real-world users from those groups
C. To reduce the test dataset size
D. To comply with NVIDIA's testing standards

Answer: B

Hint: A model that works well on average may fail badly for specific groups — how would you know?

Explanation: Testing with underrepresented groups reveals performance disparities that aggregate metrics hide. A model with 90% overall accuracy might have 95% for one group and 70% for another — you can't detect this without disaggregated testing.

Why others wrong: It's about quality, not duration; it adds test cases, not removes them; it's an ethical practice, not just vendor compliance.

Trap: Relying on overall performance metrics without disaggregating by demographic groups — aggregate accuracy can mask significant disparities.

Mnemonic: Average accuracy hides group disparities — test each group separately

## Q50
Type: single
Difficulty: 2
Tags: llm, research-papers
Concepts: research-awareness
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

The NCA-GENL blueprint mentions "reading research papers to keep up with emerging LLM trends." Which of the following is a key trend in LLM research as of 2025-2026?

A. LLMs are getting smaller and less capable
B. Techniques for improving efficiency (smaller models with comparable performance, quantization, distillation) and reducing hallucination through grounding and retrieval
C. Research into replacing all neural networks with rule-based systems
D. Moving away from transformer architectures entirely

Answer: B

Hint: The trend is about making LLMs more practical, reliable, and efficient — not replacing them.

Explanation: Key 2025-2026 LLM trends include efficiency improvements (smaller capable models, quantization, distillation), hallucination reduction (grounding, RAG, attribution), and agent architectures. The field is maturing toward practical reliability.

Why others wrong: Models are becoming more capable and efficient; rule-based systems are a step backward; transformer variants dominate, not disappear.

Trap: Focusing on frontier capability (biggest models) while missing the efficiency and reliability trends that drive practical adoption.

Mnemonic: LLM trends: More efficient + Less hallucination + More agentic

## Q51
Type: single
Difficulty: 1
Tags: machine-learning, neural-networks
Concepts: neural-network-basics
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

What is an activation function in a neural network?

A. A function that turns the network on and off
B. A mathematical function applied to a neuron's output that introduces non-linearity, enabling the network to learn complex patterns beyond simple linear relationships
C. A function that activates the GPU
D. A function that selects which training data to use

Answer: B

Hint: Without something to introduce non-linearity, stacked linear layers are equivalent to a single linear layer.

Explanation: Activation functions (ReLU, sigmoid, tanh, softmax) introduce non-linearity into neural networks. Without them, any number of linear layers could be collapsed into one, making the network unable to learn complex patterns.

Why others wrong: It doesn't control power; it's not hardware-related; it's not about data selection.

Trap: Thinking you can just stack more linear layers to get complexity — without non-linearity, depth adds nothing.

Mnemonic: Activation function = the non-linear ingredient that makes deep learning work

## Q52
Type: single
Difficulty: 2
Tags: software-development, containerization
Concepts: containerization
Domain: Domain 2 — Software Development
DomainNumber: 2

Why is Docker commonly used when deploying machine learning models?

A. It makes the model more accurate
B. It packages the model with all its dependencies into a consistent, reproducible container that runs identically across different environments, eliminating "works on my machine" issues
C. It's required by all cloud providers
D. It compresses the model to make it smaller

Answer: B

Hint: ML models have complex dependencies — how do you ensure they work the same everywhere?

Explanation: Docker containers encapsulate the model, its runtime, libraries, and system dependencies into a portable unit. This ensures consistent behavior across development, testing, and production environments — critical for ML where dependency versions can affect model behavior.

Why others wrong: Containers don't improve accuracy; they're widely used but not universally required; containerization adds overhead, not compression.

Trap: Thinking Docker is just for web apps — ML deployment benefits enormously from containerization due to complex dependency chains.

Mnemonic: Docker = model + dependencies + environment in a portable box

## Q53
Type: single
Difficulty: 3
Tags: experimentation, statistical-significance
Concepts: statistical-significance
Domain: Domain 3 — Experimentation
DomainNumber: 3

After comparing two models on a test set, Model A achieves 87.2% accuracy and Model B achieves 87.8% accuracy. Can you conclude that Model B is better?

A. Yes, 87.8% is clearly better than 87.2%
B. Not necessarily — the 0.6% difference may not be statistically significant, and you should perform a statistical test (like a paired t-test or McNemar's test) to determine if the difference is meaningful or could be due to random variation
C. No, both models are exactly equal
D. Yes, because accuracy is the definitive metric

Answer: B

Hint: Small differences in performance could be due to chance — how do you know if it's real?

Explanation: A 0.6% accuracy difference could easily be within random variation. Statistical significance tests determine whether the observed difference likely reflects a real performance gap or is just noise from the specific test set split.

Why others wrong: Raw numbers without significance testing are inconclusive; they're unlikely to be exactly equal; accuracy alone doesn't account for statistical uncertainty.

Trap: Treating any numerical difference as meaningful — this is a very common mistake in ML experimentation.

Mnemonic: Small difference + No significance test = no conclusion

## Q54
Type: single
Difficulty: 2
Tags: data-analysis, visualization
Concepts: visualization-types
Domain: Domain 4 — Data Analysis
DomainNumber: 4

Which visualization would best show the distribution of prediction errors across different ranges?

A. A pie chart
B. A histogram of error values, showing how prediction errors are distributed across bins from small to large
C. A line chart of time
D. A word cloud

Answer: B

Hint: You want to see how errors are spread out — what chart shows distributions?

Explanation: Histograms visualize the distribution of continuous values across bins, making it easy to see whether errors are normally distributed, skewed, or have outliers. This is essential for understanding model behavior and identifying systematic error patterns.

Why others wrong: Pie charts show proportions of categories; line charts show trends over time; word clouds are for text analysis.

Trap: Using the wrong chart type makes it impossible to see the pattern — distribution analysis requires histograms or density plots.

Mnemonic: Distribution question → Histogram answer

## Q55
Type: single
Difficulty: 1
Tags: trustworthy-ai, fairness
Concepts: fairness-metrics
Domain: Domain 5 — Trustworthy AI
DomainNumber: 5

What does "demographic parity" mean in the context of AI fairness?

A. The model uses demographic data as features
B. The model's positive prediction rate is approximately equal across different demographic groups, regardless of the base rate
C. Each demographic group has equal representation in the training data
D. The model is trained separately for each demographic group

Answer: B

Hint: Parity = equality — equal what, across which groups?

Explanation: Demographic parity (also called statistical parity) requires that the proportion of positive predictions is similar across demographic groups. It's one of several fairness metrics, each with different trade-offs and applicable contexts.

Why others wrong: It's about output rates, not input features; it's about prediction rates, not training data balance; it doesn't require separate models.

Trap: Confusing demographic parity (equal prediction rates) with equalized odds (equal error rates) — they're different fairness criteria that can conflict.

Mnemonic: Demographic parity = same positive prediction rate for all groups

## Q56
Type: single
Difficulty: 2
Tags: rag, chunking
Concepts: chunking-strategies
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

When chunking documents for a RAG system, why might you overlap chunks (i.e., each chunk shares some text with the next)?

A. To increase storage costs
B. To prevent important information from being split across chunk boundaries, ensuring that context at the edges of one chunk is also available in the adjacent chunk
C. To create exact duplicates
D. To make retrieval slower

Answer: B

Hint: What happens when an important sentence falls right at the boundary between two chunks?

Explanation: Chunk overlapping ensures that information near chunk boundaries isn't lost. Without overlap, a key sentence that's split between two chunks might not be fully captured in either, degrading retrieval quality.

Why others wrong: Overlap does increase storage slightly but that's not its purpose; overlapping creates partial repetition with intent, not duplicates; it doesn't significantly affect speed.

Trap: Skipping overlap to save storage — the retrieval quality improvement usually outweighs the small storage cost.

Mnemonic: Overlap chunks = no lost information at boundaries

## Q57
Type: single
Difficulty: 3
Tags: software-development, gpu-optimization
Concepts: gpu-optimization
Domain: Domain 2 — Software Development
DomainNumber: 2

When running LLM inference on a GPU, what is "batching" and why is it important?

A. Running one request at a time for maximum accuracy
B. Grouping multiple inference requests together so the GPU can process them in parallel, significantly improving throughput and GPU utilization compared to processing requests sequentially
C. Splitting one large request into smaller pieces
D. Backing up GPU memory

Answer: B

Hint: GPUs are massively parallel processors — how do you take advantage of that parallelism?

Explanation: Batching groups multiple requests for simultaneous GPU processing, leveraging the GPU's parallel architecture. This dramatically improves throughput and cost efficiency compared to processing requests one at a time, where the GPU sits mostly idle.

Why others wrong: Sequential processing wastes GPU parallelism; chunking inputs is a different concept; memory backup is unrelated.

Trap: Not batching because individual request latency seems acceptable — throughput (requests per second) often matters more than single-request latency.

Mnemonic: GPU = massively parallel → batch requests → maximize utilization

## Q58
Type: single
Difficulty: 2
Tags: experimentation, evaluation-metrics
Concepts: generation-metrics
Domain: Domain 3 — Experimentation
DomainNumber: 3

When evaluating the quality of LLM-generated text, what does "faithfulness" measure?

A. How much the text sounds like a human wrote it
B. The degree to which the generated text accurately reflects and doesn't contradict the source material or retrieved context — whether the LLM stays true to its sources
C. How creative the text is
D. How long the generated text is

Answer: B

Hint: In RAG, "faithful" means the answer sticks to what the documents actually say.

Explanation: Faithfulness measures whether generated text accurately represents its source material without introducing unsupported claims. It's a critical quality metric for RAG systems — an unfaithful response hallucinated information beyond its sources.

Why others wrong: Naturalness is "fluency"; creativity is separate from faithfulness; length doesn't indicate quality.

Trap: Confusing faithfulness with relevance — a response can be relevant to the question but unfaithful to the source documents.

Mnemonic: Faithful = sticks to sources, doesn't make things up

## Q59
Type: single
Difficulty: 1
Tags: data-analysis, exploratory
Concepts: eda
Domain: Domain 4 — Data Analysis
DomainNumber: 4

What is the first step you should take when given a new dataset to analyze?

A. Immediately train a model on it
B. Perform exploratory data analysis (EDA) — examine the data shape, types, missing values, distributions, and basic statistics to understand what you're working with
C. Delete columns you think are unimportant
D. Convert all values to strings

Answer: B

Hint: You wouldn't cook with ingredients you haven't looked at — same principle.

Explanation: Exploratory Data Analysis (EDA) is the essential first step: understanding data dimensions, types, missing values, distributions, and relationships before any modeling. This prevents bad decisions based on incorrect assumptions about the data.

Why others wrong: Training without understanding data leads to poor models; deleting columns without analysis loses potentially important features; converting types without understanding them corrupts information.

Trap: Jumping straight to modeling without EDA — the most common data science mistake.

Mnemonic: New data? EDA first: shape, types, nulls, distributions, stats

## Q60
Type: single
Difficulty: 2
Tags: trustworthy-ai, guardrails
Concepts: guardrails
Domain: Domain 5 — Trustworthy AI
DomainNumber: 5

What are "guardrails" in the context of LLM applications?

A. Physical barriers around server rooms
B. Programmable safety constraints that control what an LLM can and cannot do — filtering harmful outputs, enforcing topic boundaries, preventing data leakage, and ensuring responses stay within acceptable parameters
C. Hardware protection for GPUs
D. Network firewalls

Answer: B

Hint: Guardrails in driving prevent cars from going off the road — what's the AI analogy?

Explanation: AI guardrails are configurable safety mechanisms that constrain LLM behavior — they filter harmful content, enforce topic boundaries, prevent sensitive data exposure, and ensure outputs stay within defined parameters. NVIDIA's NeMo Guardrails is a key tool in this space.

Why others wrong: They're software, not physical; they protect output quality, not hardware; they're application-level, not network-level.

Trap: Thinking guardrails are optional — in production, unconstrained LLMs are a liability.

Mnemonic: Guardrails = safety boundaries for AI behavior (like bumpers in bowling)

## Q61
Type: single
Difficulty: 3
Tags: machine-learning, gradient-descent
Concepts: gradient-descent
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

In gradient descent optimization, what happens when the learning rate is set too high?

A. Training becomes more stable
B. The optimization overshoots the minimum, causing the loss to oscillate wildly or diverge instead of converging to a good solution
C. The model converges faster to the optimal solution
D. The model requires less training data

Answer: B

Hint: Imagine taking huge steps when trying to find the lowest point in a valley — you might jump over it.

Explanation: A too-high learning rate causes the optimizer to take steps that are too large, overshooting the loss minimum. This leads to oscillating or diverging loss, preventing the model from learning. Finding the right learning rate is a key training skill.

Why others wrong: High learning rates decrease stability; overshooting prevents convergence; learning rate doesn't affect data requirements.

Trap: Thinking faster steps (higher learning rate) always mean faster convergence — there's an optimal range.

Mnemonic: Too high = overshoot, Too low = snail pace, Just right = convergence

## Q62
Type: single
Difficulty: 2
Tags: software-development, scaling
Concepts: scaling
Domain: Domain 2 — Software Development
DomainNumber: 2

What is the difference between horizontal and vertical scaling for an AI inference service?

A. They are the same thing
B. Vertical scaling adds more resources (CPU, GPU, RAM) to a single machine, while horizontal scaling adds more machines to distribute the workload — horizontal is typically better for handling variable traffic patterns
C. Horizontal scaling only works with CPUs
D. Vertical scaling requires a complete system rewrite

Answer: B

Hint: Up (more power in one machine) vs. out (more machines working together).

Explanation: Vertical scaling (scale up) adds more resources to a single machine, while horizontal scaling (scale out) adds more machines. For inference services with variable traffic, horizontal scaling offers better elasticity and redundancy.

Why others wrong: They solve the same problem differently; horizontal works with any hardware; vertical usually just requires hardware/VM changes.

Trap: Defaulting to vertical scaling because it's simpler — for production inference with variable load, horizontal scaling provides better availability and cost efficiency.

Mnemonic: Vertical = bigger machine (scale up), Horizontal = more machines (scale out)

## Q63
Type: single
Difficulty: 2
Tags: experimentation, a-b-testing
Concepts: a-b-testing
Domain: Domain 3 — Experimentation
DomainNumber: 3

When A/B testing two versions of an LLM-based feature, what is essential for valid results?

A. Showing both versions to the same users
B. Randomly assigning users to groups, running the test long enough to achieve statistical significance, and controlling for confounding variables like time of day or user demographics
C. Always choosing the cheaper version
D. Running the test for exactly 24 hours

Answer: B

Hint: Valid A/B testing requires randomization, sufficient sample size, and controlled conditions.

Explanation: Valid A/B testing requires random assignment (preventing selection bias), sufficient duration (achieving statistical significance), and controlled conditions (isolating the variable being tested). Without these, results may be misleading.

Why others wrong: Showing both to the same users creates order effects; cost shouldn't be the only criterion; arbitrary time limits may not achieve significance.

Trap: Stopping the test as soon as one version "looks better" — premature stopping leads to false conclusions.

Mnemonic: Valid A/B = Random groups + Sufficient time + Statistical significance

## Q64
Type: single
Difficulty: 3
Tags: data-analysis, anomaly-detection
Concepts: anomaly-detection
Domain: Domain 4 — Data Analysis
DomainNumber: 4

You're monitoring an LLM application's input data and notice that 5% of incoming queries have a significantly different distribution from the training data. What should you do?

A. Ignore it since 5% is small
B. Investigate the anomalous queries to understand whether they represent a new use pattern, data quality issue, or potential attack, and determine whether the model handles them appropriately — 5% can cause significant issues if those queries get wrong answers
C. Retrain the model immediately
D. Block all anomalous queries

Answer: B

Hint: 5% might seem small, but what if those 5% are getting completely wrong answers?

Explanation: Distribution anomalies require investigation — they might indicate legitimate new use patterns (requiring model adaptation), data quality issues (requiring pipeline fixes), or adversarial inputs (requiring security measures). The impact matters more than the percentage.

Why others wrong: Ignoring anomalies risks systematic failures; retraining without understanding is premature; blocking may reject legitimate queries.

Trap: Dismissing a small percentage as insignificant — if those queries get wrong answers, 5% of users are having a bad experience.

Mnemonic: Anomaly detected → Investigate (new pattern? data issue? attack?) → Appropriate response

## Q65
Type: single
Difficulty: 1
Tags: machine-learning, transfer-learning
Concepts: transfer-learning
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

What is transfer learning?

A. Transferring data from one database to another
B. Taking a model trained on a large general dataset and adapting it to a specific task with less data — leveraging the knowledge the model already learned
C. Copying a model from one server to another
D. Translating a model from one programming language to another

Answer: B

Hint: Instead of training from scratch, you start with what the model already knows.

Explanation: Transfer learning leverages a pre-trained model's knowledge (learned from a large dataset) and adapts it to a new, often smaller task-specific dataset. This dramatically reduces the data and compute needed for the new task — it's the foundation of how LLMs are fine-tuned for specific applications.

Why others wrong: It's about transferring knowledge, not data or files; it's about model knowledge, not code translation.

Trap: Thinking transfer learning means simply using a pre-trained model without any adaptation — the key is adapting (fine-tuning) for the specific task.

Mnemonic: Transfer learning = start with someone else's homework, finish with yours
