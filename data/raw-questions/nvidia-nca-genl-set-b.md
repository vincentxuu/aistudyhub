---
exam: NCA-GENL
lang: en
---

## Q1
Type: single
Difficulty: 1
Tags: transformer, architecture
Concepts: transformer-architecture
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

What is the core mechanism that makes Transformer models effective for processing sequences?

A. Recurrent connections that process tokens one at a time
B. The self-attention mechanism, which allows every token to attend to every other token in the sequence simultaneously
C. Convolutional filters applied to word embeddings
D. Decision tree ensembles over token frequencies

Answer: B

Hint: Transformers replaced recurrence with a mechanism that processes all positions in parallel.

Explanation: Self-attention computes weighted relationships between all token pairs in a sequence, enabling Transformers to capture long-range dependencies without the sequential bottleneck of RNNs. This parallel processing is what makes Transformers highly efficient and effective for language tasks.

Why others wrong: Recurrent connections are RNNs, not Transformers; convolutional filters are CNNs; decision trees are a completely different model family.

Trap: Confusing Transformers with RNNs — Transformers explicitly removed recurrence in favor of attention.

Mnemonic: Transformer = "Attention Is All You Need" — self-attention replaces recurrence

## Q2
Type: single
Difficulty: 2
Tags: transformer, attention
Concepts: multi-head-attention
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

In a Transformer model, what is the purpose of multi-head attention?

A. To reduce the number of parameters in the model
B. To allow the model to attend to different representation subspaces in parallel, capturing different types of relationships (e.g., syntactic, semantic) simultaneously
C. To process input tokens sequentially for better accuracy
D. To replace the need for positional encoding

Answer: B

Hint: One attention head captures one kind of relationship — what if you need several kinds at once?

Explanation: Multi-head attention runs several attention operations in parallel, each projecting queries, keys, and values into different subspaces. Different heads can learn different relationship patterns — one might capture syntactic structure while another captures semantic similarity. The outputs are concatenated and linearly projected.

Why others wrong: Multi-head attention adds parameters (more heads = more projections); it processes in parallel, not sequentially; positional encoding is still needed.

Trap: Thinking more heads always means better performance — there's a point of diminishing returns, and heads can become redundant.

Mnemonic: Multi-head = multiple perspectives on the same sequence, combined

## Q3
Type: single
Difficulty: 2
Tags: transformer, positional-encoding
Concepts: positional-encoding
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

Why do Transformer models need positional encoding?

A. To reduce the vocabulary size
B. Because self-attention treats input as an unordered set — positional encoding injects information about token position so the model knows the order of words in a sentence
C. To encrypt the input for security
D. To normalize the input values

Answer: B

Hint: Self-attention computes pairwise relationships but doesn't inherently know which token comes first.

Explanation: Self-attention is permutation-invariant — it produces the same output regardless of token order. Positional encodings (sinusoidal or learned) add position information to token embeddings, allowing the model to distinguish "dog bites man" from "man bites dog."

Why others wrong: Vocabulary size is determined by the tokenizer; encoding serves ordering, not encryption; normalization is handled by layer norm.

Trap: Assuming self-attention inherently understands order — without positional encoding, "the cat sat on the mat" and "mat the on sat cat the" would look identical.

Mnemonic: Attention sees everything at once but has no sense of order — positional encoding adds the "where"

## Q4
Type: single
Difficulty: 1
Tags: nvidia-tools, nemo
Concepts: nvidia-nemo
Domain: Domain 2 — Software Development
DomainNumber: 2

What is NVIDIA NeMo primarily used for?

A. Video game rendering
B. A framework for building, customizing, and deploying generative AI models — including LLMs, speech, and multimodal models — on NVIDIA hardware
C. Managing Kubernetes clusters
D. Designing printed circuit boards

Answer: B

Hint: NeMo is NVIDIA's flagship generative AI framework — what does it help you do with models?

Explanation: NVIDIA NeMo is an end-to-end framework for generative AI that supports training, customization (fine-tuning, RLHF), and deployment of LLMs, speech models, and multimodal models. It's designed to work with NVIDIA GPUs and includes components like NeMo Customizer, Guardrails, and Curator.

Why others wrong: Gaming uses separate NVIDIA SDKs; Kubernetes management is separate tooling; PCB design is unrelated.

Trap: Thinking NeMo is only for training — it covers the full lifecycle from data curation to deployment.

Mnemonic: NeMo = NVIDIA's End-to-end Model Operations framework

## Q5
Type: single
Difficulty: 2
Tags: nvidia-tools, tensorrt-llm
Concepts: tensorrt-llm
Domain: Domain 2 — Software Development
DomainNumber: 2

What does TensorRT-LLM do in the NVIDIA AI stack?

A. It trains LLMs from scratch
B. It optimizes LLM inference by applying techniques like kernel fusion, quantization, and in-flight batching to dramatically reduce latency and increase throughput on NVIDIA GPUs
C. It converts models to run on CPUs
D. It generates training data

Answer: B

Hint: TensorRT has always been about inference optimization — the LLM variant specializes this for language models.

Explanation: TensorRT-LLM is NVIDIA's library for optimizing LLM inference on GPUs. It applies GPU-specific optimizations like kernel fusion, INT8/FP8 quantization, KV cache optimization, and in-flight batching to maximize inference speed and throughput while maintaining model quality.

Why others wrong: TensorRT-LLM is for inference optimization, not training; it targets NVIDIA GPUs, not CPUs; it optimizes serving, not data generation.

Trap: Confusing training optimization with inference optimization — TensorRT-LLM only works at inference time on already-trained models.

Mnemonic: TensorRT-LLM = make LLM inference fast on NVIDIA GPUs

## Q6
Type: single
Difficulty: 2
Tags: nvidia-tools, triton
Concepts: triton-inference-server
Domain: Domain 2 — Software Development
DomainNumber: 2

What is the primary role of NVIDIA Triton Inference Server?

A. A database for storing model weights
B. A model serving platform that hosts multiple models (including LLMs), handles concurrent requests, supports dynamic batching, and provides a standardized API for inference across different frameworks
C. A tool for labeling training data
D. A monitoring dashboard for GPU temperatures

Answer: B

Hint: Triton is the "web server" of AI inference — it receives requests and routes them to models.

Explanation: Triton Inference Server is NVIDIA's production model serving platform. It supports multiple frameworks (TensorRT, PyTorch, TensorFlow, ONNX), handles concurrent requests with dynamic batching, and provides HTTP/gRPC APIs. It's the serving layer that sits in front of TensorRT-LLM optimized models.

Why others wrong: Model storage is separate from serving; data labeling is a different workflow; GPU monitoring is handled by DCGM/nvidia-smi.

Trap: Confusing TensorRT-LLM (optimization library) with Triton (serving platform) — TensorRT-LLM optimizes the model, Triton serves it.

Mnemonic: Triton = the waiter that serves AI models to applications (multi-framework, multi-model)

## Q7
Type: single
Difficulty: 1
Tags: nvidia-tools, nim
Concepts: nvidia-nim
Domain: Domain 2 — Software Development
DomainNumber: 2

What are NVIDIA NIM microservices?

A. A social media management tool
B. Pre-packaged, optimized AI inference containers that provide industry-standard APIs for deploying foundation models with minimal setup — abstracting away the complexity of model optimization and serving
C. A code editor plugin
D. A hardware benchmarking tool

Answer: B

Hint: NIM makes deploying AI models as easy as pulling a Docker container and calling an API.

Explanation: NVIDIA NIM (NVIDIA Inference Microservices) packages optimized models into containers with standard APIs (OpenAI-compatible). Developers can deploy state-of-the-art models without manually configuring TensorRT-LLM, Triton, or other infrastructure — NIM handles the optimization stack internally.

Why others wrong: NIM is for AI deployment, not social media; it's infrastructure, not IDE tooling; it serves models, doesn't benchmark hardware.

Trap: Thinking NIM and Triton are the same — NIM uses Triton internally but provides a higher-level, application-ready abstraction.

Mnemonic: NIM = "NVIDIA makes inference easy" — container in, API out

## Q8
Type: single
Difficulty: 3
Tags: nvidia-tools, nemo-guardrails
Concepts: nemo-guardrails
Domain: Domain 5 — Trustworthy AI
DomainNumber: 5

How does NVIDIA NeMo Guardrails differ from simple prompt-based content filtering?

A. It doesn't — they are the same approach
B. NeMo Guardrails provides a programmable framework with Colang (a domain-specific language) for defining conversational flows, input/output rails, and retrieval rails — offering structured, auditable safety controls beyond ad-hoc prompt instructions
C. NeMo Guardrails only works with NVIDIA models
D. NeMo Guardrails replaces the LLM entirely

Answer: B

Hint: Prompt-based filtering is fragile — NeMo Guardrails provides a structured, programmable alternative.

Explanation: NeMo Guardrails uses Colang to define explicit conversational rules (input rails, output rails, dialog flows) that are enforced programmatically rather than relying on prompt instructions that the LLM might ignore. This provides more reliable, auditable safety controls.

Why others wrong: Guardrails adds structured enforcement beyond prompt filtering; it works with any LLM, not just NVIDIA's; it wraps the LLM, doesn't replace it.

Trap: Assuming "just tell the LLM not to do X" in the system prompt is sufficient — LLMs can be jailbroken past prompt instructions, but programmatic rails are harder to bypass.

Mnemonic: Prompt filter = suggestion to LLM, NeMo Guardrails = enforced rules around LLM

## Q9
Type: single
Difficulty: 2
Tags: fine-tuning, lora
Concepts: lora
Domain: Domain 3 — Experimentation
DomainNumber: 3

What is LoRA (Low-Rank Adaptation) in the context of LLM fine-tuning?

A. A technique that retrains all model parameters on new data
B. A parameter-efficient fine-tuning method that freezes the original model weights and trains small low-rank decomposition matrices alongside them, dramatically reducing the number of trainable parameters while achieving quality close to full fine-tuning
C. A data augmentation technique
D. A method for compressing model files on disk

Answer: B

Hint: Instead of updating billions of parameters, LoRA adds a small number of trainable parameters alongside the frozen original.

Explanation: LoRA freezes the pre-trained weights and injects trainable low-rank matrices (A and B) into each layer. For a weight matrix W, instead of updating W directly, it learns ΔW = A×B where A and B have much lower rank. This typically reduces trainable parameters by 10-100x while maintaining most of the fine-tuning quality.

Why others wrong: Full parameter retraining is standard fine-tuning, not LoRA; data augmentation increases training data; LoRA is about training efficiency, not file compression.

Trap: Thinking LoRA modifies the original weights — it adds separate small matrices that are merged at inference time.

Mnemonic: LoRA = Low-Rank Adapters frozen beside the original (train tiny, keep quality)

## Q10
Type: single
Difficulty: 3
Tags: fine-tuning, qlora
Concepts: qlora
Domain: Domain 3 — Experimentation
DomainNumber: 3

How does QLoRA improve upon standard LoRA?

A. By using more training data
B. By quantizing the frozen base model to 4-bit precision while keeping the LoRA adapter weights in higher precision, enabling fine-tuning of very large models on consumer GPUs with minimal quality loss
C. By training more parameters
D. By removing the need for a GPU

Answer: B

Hint: Q + LoRA — the Q stands for quantization. What does quantizing the base model achieve?

Explanation: QLoRA combines 4-bit NormalFloat quantization of the frozen base model with standard LoRA adapters in BFloat16. This reduces memory requirements by ~4x compared to LoRA (which keeps the base in 16-bit), making it possible to fine-tune 65B+ models on a single 48GB GPU while maintaining quality through double quantization and paged optimizers.

Why others wrong: Data quantity is unchanged; QLoRA trains fewer parameters due to quantization overhead; it still requires a GPU for efficient training.

Trap: Assuming quantization always degrades quality — QLoRA's NormalFloat4 format and double quantization minimize quality loss.

Mnemonic: QLoRA = Quantized base (4-bit) + LoRA adapters (16-bit) = big models on small GPUs

## Q11
Type: single
Difficulty: 2
Tags: fine-tuning, peft
Concepts: peft-methods
Domain: Domain 3 — Experimentation
DomainNumber: 3

Which of the following is NOT a parameter-efficient fine-tuning (PEFT) method?

A. LoRA (Low-Rank Adaptation)
B. Prefix tuning
C. Full fine-tuning of all model weights
D. Prompt tuning (learning soft prompts)

Answer: C

Hint: PEFT means training only a small fraction of parameters — which option trains all of them?

Explanation: Full fine-tuning updates all model parameters, making it the opposite of parameter-efficient. PEFT methods (LoRA, prefix tuning, prompt tuning, adapters) freeze most parameters and only train a small set, reducing compute, memory, and storage costs.

Why others wrong: LoRA trains low-rank matrices (~0.1% of parameters); prefix tuning learns prefix tokens; prompt tuning learns continuous prompt embeddings — all are PEFT.

Trap: Thinking "fine-tuning" always means full parameter updates — PEFT methods are also fine-tuning, just more efficient.

Mnemonic: PEFT = freeze most, train few (LoRA, prefix, prompt, adapters)

## Q12
Type: single
Difficulty: 2
Tags: quantization, inference
Concepts: model-quantization
Domain: Domain 2 — Software Development
DomainNumber: 2

What is the main benefit of quantizing an LLM from FP16 to INT8?

A. It improves the model's accuracy on all tasks
B. It reduces the model's memory footprint by approximately half and can increase inference speed, with a small and often acceptable trade-off in output quality
C. It doubles the number of model parameters
D. It eliminates the need for a GPU

Answer: B

Hint: Cutting the precision from 16-bit to 8-bit cuts the memory per parameter in half.

Explanation: Quantization reduces the numerical precision of model weights — FP16 uses 16 bits per value, INT8 uses 8. This halves memory requirements, enabling larger models to fit on available hardware, and often increases throughput because lower-precision operations are faster on modern GPUs. The quality trade-off is typically small for well-calibrated quantization.

Why others wrong: Quantization generally has a small negative effect on accuracy; parameter count stays the same (only precision changes); quantized models still run best on GPUs.

Trap: Confusing parameter count with precision — quantization changes how each parameter is stored, not how many there are.

Mnemonic: Quantization = same parameters, fewer bits per parameter = smaller + faster

## Q13
Type: single
Difficulty: 3
Tags: quantization, techniques
Concepts: quantization-methods
Domain: Domain 2 — Software Development
DomainNumber: 2

What is the difference between post-training quantization (PTQ) and quantization-aware training (QAT)?

A. They produce identical results
B. PTQ quantizes a model after training is complete (faster, no retraining needed), while QAT simulates quantization effects during training so the model learns to be robust to lower precision (better quality, but requires retraining)
C. PTQ only works with INT8 and QAT only works with INT4
D. QAT is always faster than PTQ

Answer: B

Hint: One applies quantization after the fact; the other bakes quantization awareness into training itself.

Explanation: PTQ is applied to a finished model — it's quick but may degrade quality, especially at very low precisions (INT4). QAT incorporates fake quantization nodes during training, letting the model adapt its weights to be resilient to precision loss. QAT typically yields better quality but requires access to training data and compute.

Why others wrong: They produce different quality results; both can target various precisions; QAT requires retraining and is slower overall.

Trap: Always choosing PTQ because it's faster — for aggressive quantization (INT4), QAT often preserves quality much better.

Mnemonic: PTQ = quick and easy (post-hoc), QAT = slow but robust (trained for it)

## Q14
Type: single
Difficulty: 1
Tags: tokenization, basics
Concepts: tokenization
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

What is tokenization in the context of LLMs?

A. A security authentication process
B. The process of splitting text into smaller units (tokens) that the model processes — these can be words, subwords, or characters depending on the tokenizer
C. Converting text to images
D. Encrypting user data

Answer: B

Hint: LLMs don't process raw text — they need it broken into processable units first.

Explanation: Tokenization converts raw text into a sequence of tokens (the model's vocabulary units). Modern LLMs typically use subword tokenization (BPE, SentencePiece) that can represent any text as a sequence of known subword units, balancing vocabulary size with coverage.

Why others wrong: Authentication tokens are a different concept; tokenization produces numerical IDs, not images; it's processing, not encryption.

Trap: Assuming tokens are always whole words — modern tokenizers split rare words into subword pieces.

Mnemonic: Tokenization = text → pieces the model can digest

## Q15
Type: single
Difficulty: 2
Tags: tokenization, bpe
Concepts: byte-pair-encoding
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

How does Byte Pair Encoding (BPE) tokenization work?

A. It splits every word into individual characters
B. It starts with individual characters and iteratively merges the most frequent adjacent pairs to build a vocabulary of subword units — common words stay whole while rare words get split into known subword pieces
C. It uses a fixed dictionary of English words
D. It randomly assigns tokens to text

Answer: B

Hint: BPE is a bottom-up algorithm — it starts small (characters) and merges up (frequent pairs).

Explanation: BPE begins with characters and repeatedly merges the most frequent pair into a new token until reaching the desired vocabulary size. This creates a vocabulary where common words and subwords are single tokens, while rare words are composed of multiple subword tokens — ensuring any text can be represented.

Why others wrong: Pure character tokenization produces very long sequences; fixed dictionaries can't handle new words; BPE is deterministic, not random.

Trap: Thinking BPE can't handle words it hasn't seen — it can always fall back to character-level tokenization.

Mnemonic: BPE = Bottom-up Pair merging until vocab is big Enough

## Q16
Type: single
Difficulty: 2
Tags: inference, kv-cache
Concepts: kv-cache
Domain: Domain 2 — Software Development
DomainNumber: 2

What is the KV cache in LLM inference, and why is it important?

A. A general-purpose disk cache for model files
B. A memory structure that stores the key and value tensors from previous tokens during autoregressive generation, so they don't need to be recomputed for each new token — trading memory for speed
C. A cache for storing user queries
D. A backup of the model weights

Answer: B

Hint: During generation, the model produces one token at a time. Without caching, it would recompute attention for all previous tokens each step.

Explanation: In autoregressive generation, each new token attends to all previous tokens. The KV cache stores the key-value pairs from prior tokens, avoiding redundant computation. Without it, generating token N would require O(N²) computation; with it, each step only computes attention for the new token against cached KV pairs.

Why others wrong: It's not disk-based; it stores intermediate attention computations, not queries; it's separate from model weights.

Trap: Thinking the KV cache is free — it consumes significant GPU memory that grows linearly with sequence length, often becoming the memory bottleneck for long sequences.

Mnemonic: KV cache = remember past attention computations so you don't redo them

## Q17
Type: single
Difficulty: 3
Tags: inference, continuous-batching
Concepts: continuous-batching
Domain: Domain 2 — Software Development
DomainNumber: 2

What is continuous batching (also called in-flight batching) in LLM serving?

A. Processing all requests sequentially, one at a time
B. A scheduling technique where new requests can join a running batch as earlier requests finish, rather than waiting for all requests in a static batch to complete before starting new ones — significantly improving GPU utilization and throughput
C. Splitting a single request across multiple GPUs
D. Batching training data during model training

Answer: B

Hint: In static batching, a short response waits for a long response to finish. Continuous batching eliminates that waste.

Explanation: Static batching groups requests and processes them together, but all must finish before new ones start — short responses wait for long ones. Continuous batching inserts new requests into available slots as previous ones complete, keeping the GPU continuously utilized. This is a key optimization in TensorRT-LLM and Triton.

Why others wrong: Sequential processing wastes GPU parallelism; model parallelism is a different concept; this is about inference batching, not training.

Trap: Assuming static batching is good enough — for variable-length LLM outputs, continuous batching can improve throughput by 2-3x.

Mnemonic: Static batch = everyone waits for the slowest; Continuous batch = new passengers board as others exit

## Q18
Type: single
Difficulty: 2
Tags: evaluation, bleu
Concepts: bleu-score
Domain: Domain 3 — Experimentation
DomainNumber: 3

What does the BLEU score measure when evaluating text generation?

A. The emotional tone of the generated text
B. The overlap of n-grams (word sequences) between the generated text and reference translations — originally designed for machine translation evaluation
C. The reading level of the text
D. The inference speed of the model

Answer: B

Hint: BLEU = Bilingual Evaluation Understudy — it was made for translation, comparing generated text to reference text.

Explanation: BLEU calculates the precision of n-gram matches between generated text and one or more reference translations. Higher BLEU means more n-grams in the generated text also appear in the reference. It includes a brevity penalty to penalize overly short outputs. While widely used, it has known limitations for open-ended generation.

Why others wrong: BLEU measures lexical overlap, not sentiment; readability is separate; speed is unrelated to text quality.

Trap: Treating BLEU as the definitive quality metric — it only measures surface-level n-gram overlap, not semantic quality or fluency.

Mnemonic: BLEU = how many word sequences match between output and reference

## Q19
Type: single
Difficulty: 2
Tags: evaluation, rouge
Concepts: rouge-score
Domain: Domain 3 — Experimentation
DomainNumber: 3

How does ROUGE differ from BLEU in evaluating generated text?

A. They are identical metrics
B. BLEU measures precision (what fraction of generated n-grams appear in the reference), while ROUGE measures recall (what fraction of reference n-grams appear in the generated text) — ROUGE is better suited for summarization evaluation
C. ROUGE only works for poetry
D. BLEU is newer than ROUGE

Answer: B

Hint: Precision asks "Is my output correct?" Recall asks "Did I cover everything important?"

Explanation: BLEU focuses on precision (how much of the output matches the reference), while ROUGE focuses on recall (how much of the reference is captured in the output). For summarization, recall is key — you want to know if the summary captures the important content from the source, making ROUGE more appropriate.

Why others wrong: They measure different aspects (precision vs. recall); ROUGE works for any text; BLEU was actually introduced first.

Trap: Using BLEU for summarization — a short but precise summary scores well on BLEU but poorly on ROUGE if it misses key content.

Mnemonic: BLEU = precision (output quality), ROUGE = recall (coverage quality)

## Q20
Type: single
Difficulty: 2
Tags: evaluation, perplexity
Concepts: perplexity
Domain: Domain 3 — Experimentation
DomainNumber: 3

What does perplexity measure for a language model?

A. The physical complexity of the model architecture
B. How well the model predicts the next token in a sequence — lower perplexity means the model assigns higher probability to the actual next tokens, indicating better language modeling
C. The number of parameters in the model
D. The diversity of the training data

Answer: B

Hint: Perplexity is the exponentiated average negative log-likelihood — informally, how "surprised" the model is by the test data.

Explanation: Perplexity quantifies how well a language model predicts a test set. A perplexity of 10 means the model is as uncertain as if it were choosing uniformly among 10 options per token. Lower perplexity = better prediction = better language model. It's a standard intrinsic evaluation metric for LLMs.

Why others wrong: It measures prediction quality, not architecture complexity; it's unrelated to parameter count; it evaluates the model, not the data.

Trap: Assuming low perplexity guarantees high-quality generation — perplexity measures prediction, not downstream task performance.

Mnemonic: Perplexity = how surprised the model is (lower = less surprised = better)

## Q21
Type: single
Difficulty: 1
Tags: llm, decoder-only
Concepts: decoder-architecture
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

Most modern large language models (like GPT, LLaMA, and Gemma) use which Transformer architecture variant?

A. Encoder-only (like BERT)
B. Decoder-only, which generates text autoregressively one token at a time using causal (masked) self-attention
C. Encoder-decoder (like T5)
D. None — they don't use Transformers

Answer: B

Hint: GPT stands for "Generative Pre-trained Transformer" — the "Generative" part requires autoregressive decoding.

Explanation: Decoder-only Transformers use causal self-attention (each token can only attend to previous tokens) and generate text autoregressively. This architecture dominates modern LLMs because it naturally supports open-ended text generation. Encoder-only (BERT) is for understanding tasks; encoder-decoder (T5) combines both.

Why others wrong: BERT-style encoder-only is for classification/extraction; encoder-decoder is used for translation/summarization; all modern LLMs use Transformers.

Trap: Thinking all Transformer variants are interchangeable — the architecture choice fundamentally determines what tasks the model can do.

Mnemonic: Generation = Decoder-only, Understanding = Encoder-only, Both = Encoder-Decoder

## Q22
Type: single
Difficulty: 2
Tags: llm, attention-masking
Concepts: causal-attention
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

In a decoder-only Transformer, what is causal (masked) self-attention?

A. Attention that only looks at the first token
B. A modification to self-attention where each token can only attend to tokens at the same or earlier positions in the sequence — preventing the model from "seeing the future" during generation
C. Attention that randomly masks out tokens for regularization
D. Attention applied only to the last token

Answer: B

Hint: During generation, a token shouldn't use information from tokens that haven't been generated yet.

Explanation: Causal attention applies a triangular mask so that position i can only attend to positions ≤ i. This ensures autoregressive consistency — each token's representation depends only on preceding context, matching how the model generates text one token at a time during inference.

Why others wrong: It attends to all preceding tokens, not just the first; it's deterministic masking, not random dropout; it attends to all prior positions, not just the last.

Trap: Confusing causal masking with dropout masking — causal masking is structural (always the same pattern), not regularization.

Mnemonic: Causal = can only look back, never forward (like reading left-to-right)

## Q23
Type: single
Difficulty: 2
Tags: nvidia-tools, nemo-customizer
Concepts: nemo-customizer
Domain: Domain 3 — Experimentation
DomainNumber: 3

What is the role of NVIDIA NeMo Customizer in the NeMo framework?

A. A tool for customizing the NVIDIA GPU driver settings
B. A service that enables fine-tuning and customization of foundation models using techniques like LoRA, P-tuning, and full supervised fine-tuning, managed through an API
C. A UI theme customization tool
D. A hardware configuration wizard

Answer: B

Hint: "Customizer" in the NeMo context means customizing the model's behavior for your specific use case.

Explanation: NeMo Customizer provides a managed service for fine-tuning foundation models. It supports multiple fine-tuning methods (LoRA, P-tuning, full SFT) and handles the infrastructure complexity, letting users customize models through API calls without managing GPU clusters directly.

Why others wrong: GPU drivers are configured separately; NeMo Customizer is about model customization, not UI; it's a software service, not hardware configuration.

Trap: Thinking you need to manage your own training infrastructure — NeMo Customizer abstracts away cluster management.

Mnemonic: NeMo Customizer = fine-tune models via API (LoRA, P-tuning, SFT)

## Q24
Type: single
Difficulty: 2
Tags: nvidia-tools, nemo-evaluator
Concepts: nemo-evaluator
Domain: Domain 3 — Experimentation
DomainNumber: 3

What does NVIDIA NeMo Evaluator help you do?

A. Evaluate GPU performance benchmarks
B. Systematically assess the quality of LLM outputs across dimensions like accuracy, safety, coherence, and task-specific metrics — providing structured evaluation pipelines for comparing models or configurations
C. Evaluate employee performance
D. Evaluate network bandwidth

Answer: B

Hint: After customizing a model with NeMo Customizer, how do you know if it actually improved?

Explanation: NeMo Evaluator provides standardized evaluation pipelines for LLMs, measuring quality across multiple dimensions. It enables systematic comparison of base vs. fine-tuned models, different configurations, or competing models using reproducible evaluation workflows and benchmarks.

Why others wrong: GPU benchmarks use separate tools; employee evaluation is HR; network evaluation is infrastructure.

Trap: Evaluating models manually by reading a few outputs — NeMo Evaluator provides systematic, reproducible assessment.

Mnemonic: NeMo Evaluator = automated, multi-dimensional model quality assessment

## Q25
Type: single
Difficulty: 1
Tags: prompt-engineering, chain-of-thought
Concepts: chain-of-thought
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

What is chain-of-thought (CoT) prompting?

A. Linking multiple LLMs together in a chain
B. A prompting technique that encourages the model to show its step-by-step reasoning process before giving a final answer, improving performance on complex reasoning tasks
C. A technique for chaining API calls
D. A method for training models on sequential data

Answer: B

Hint: "Let's think step by step" — this simple addition can dramatically improve reasoning.

Explanation: Chain-of-thought prompting asks the model to articulate intermediate reasoning steps rather than jumping to an answer. This improves performance on arithmetic, logic, and multi-step reasoning tasks because the model can decompose complex problems and catch errors in its own reasoning.

Why others wrong: It's a single-model prompting technique, not multi-model chaining; it's about prompt design, not API architecture; it's an inference technique, not a training method.

Trap: Using CoT for simple factual questions — it helps with reasoning tasks but adds unnecessary verbosity for straightforward lookups.

Mnemonic: CoT = "show your work" for LLMs — step-by-step reasoning = better answers

## Q26
Type: single
Difficulty: 2
Tags: prompt-engineering, system-prompt
Concepts: system-prompts
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

What is the purpose of a system prompt in an LLM API call?

A. To authenticate the API request
B. To set the model's behavior, personality, and constraints for the entire conversation — it defines the context and rules before any user interaction
C. To specify the GPU to use
D. To configure the network timeout

Answer: B

Hint: The system prompt is like giving an actor their character description before they go on stage.

Explanation: System prompts establish the model's role, tone, capabilities, and limitations for a conversation. They're processed before user messages and influence all subsequent responses. Well-crafted system prompts are crucial for building consistent, controlled LLM applications.

Why others wrong: Authentication uses API keys; system prompts are content-level, not infrastructure-level; networking is separate from prompt configuration.

Trap: Treating system prompts as absolute constraints — they guide behavior but determined users can sometimes bypass them, which is why guardrails are also needed.

Mnemonic: System prompt = the model's instruction manual for this conversation

## Q27
Type: single
Difficulty: 3
Tags: inference, speculative-decoding
Concepts: speculative-decoding
Domain: Domain 2 — Software Development
DomainNumber: 2

What is speculative decoding and how does it speed up LLM inference?

A. It generates text from multiple models and picks the best one
B. A technique where a smaller, faster draft model generates candidate tokens that the larger target model then verifies in parallel — if the draft tokens match what the target would have generated, they're accepted without full computation, speeding up inference while maintaining the target model's quality
C. It predicts which users will send requests next
D. It skips tokens to generate text faster

Answer: B

Hint: Verification is cheaper than generation — use a fast model to guess, then verify cheaply with the big model.

Explanation: Speculative decoding exploits the asymmetry between generation (slow, sequential) and verification (fast, parallelizable). The draft model proposes several tokens, and the target model verifies them all in one forward pass. Accepted tokens are free speedup; rejected tokens just revert to normal generation. Quality is identical to the target model.

Why others wrong: It uses two models but they work together, not competitively; it doesn't predict users; it doesn't skip content.

Trap: Thinking speculative decoding degrades quality — by construction, it produces exactly the same output distribution as the target model alone.

Mnemonic: Speculative decoding = fast model guesses, big model checks (quality guaranteed)

## Q28
Type: single
Difficulty: 2
Tags: fine-tuning, data-preparation
Concepts: fine-tuning-data
Domain: Domain 3 — Experimentation
DomainNumber: 3

When preparing data for supervised fine-tuning of an LLM, what format is typically required?

A. Raw, unstructured text files
B. Structured instruction-response pairs (or conversation turns) where each example shows the desired input and the expected output the model should learn to produce
C. SQL database tables
D. Image-text pairs

Answer: B

Hint: Fine-tuning teaches the model to produce specific outputs for specific inputs — the data must demonstrate this.

Explanation: Supervised fine-tuning (SFT) requires pairs of inputs and desired outputs. For instruction tuning, these are instruction-response pairs; for chat models, they're multi-turn conversations. Each example teaches the model the expected behavior pattern. Data quality directly determines fine-tuning quality.

Why others wrong: Raw text is for pre-training, not fine-tuning; SQL is for databases; image-text pairs are for multimodal models.

Trap: Using low-quality or inconsistent training pairs — "garbage in, garbage out" applies strongly to fine-tuning.

Mnemonic: SFT data = show the model exactly what you want (instruction → response)

## Q29
Type: single
Difficulty: 2
Tags: evaluation, mmlu
Concepts: llm-benchmarks
Domain: Domain 3 — Experimentation
DomainNumber: 3

What does the MMLU (Massive Multitask Language Understanding) benchmark evaluate?

A. The model's ability to generate creative stories
B. The model's knowledge and reasoning across 57 academic subjects ranging from STEM to humanities, testing whether the model has broad, factual understanding across diverse domains
C. The model's inference speed
D. The model's ability to follow instructions

Answer: B

Hint: MMLU tests whether the model "knows" things across many academic fields — like a comprehensive exam.

Explanation: MMLU consists of multiple-choice questions spanning 57 subjects (math, history, medicine, law, etc.) at varying difficulty levels. It measures a model's breadth of knowledge and reasoning ability, making it one of the most widely-reported LLM benchmarks for comparing model capabilities.

Why others wrong: MMLU tests factual knowledge, not creative writing; it measures knowledge, not speed; instruction following is tested by other benchmarks (IFEval, MT-Bench).

Trap: Treating MMLU as the only important benchmark — it measures knowledge breadth but not generation quality, safety, or instruction following.

Mnemonic: MMLU = 57-subject exam for LLMs — do you know math AND history AND medicine?

## Q30
Type: single
Difficulty: 1
Tags: nvidia-tools, rapids
Concepts: nvidia-rapids
Domain: Domain 2 — Software Development
DomainNumber: 2

What is NVIDIA RAPIDS?

A. A graphics rendering engine
B. A suite of GPU-accelerated data science libraries that provide familiar pandas-like and scikit-learn-like APIs but execute on GPUs for dramatically faster data processing and machine learning
C. A network protocol
D. A project management tool

Answer: B

Hint: RAPIDS makes your existing pandas/sklearn code run on GPUs — same API, much faster.

Explanation: RAPIDS includes cuDF (GPU DataFrame, like pandas), cuML (GPU ML, like scikit-learn), cuGraph (GPU graph analytics), and more. Data scientists can use familiar Python APIs while getting 10-100x speedups from GPU acceleration, which is especially valuable for large-scale data preprocessing and feature engineering.

Why others wrong: Rendering is handled by other NVIDIA SDKs; RAPIDS is a compute library, not a network protocol; it's for data processing, not project management.

Trap: Thinking RAPIDS requires learning new APIs — it intentionally mirrors pandas and scikit-learn interfaces.

Mnemonic: RAPIDS = pandas + sklearn on GPU steroids

## Q31
Type: single
Difficulty: 2
Tags: llm, context-window
Concepts: context-window
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

What is the "context window" of an LLM, and why does it matter?

A. The physical window where the model runs on screen
B. The maximum number of tokens the model can process in a single input-output interaction — it limits how much text the model can consider when generating a response, affecting both input length and generation capabilities
C. The time window for API rate limiting
D. The model's training data date range

Answer: B

Hint: Context window determines how much text the model can "see" at once — both your input and its output must fit.

Explanation: The context window (e.g., 4K, 32K, 128K, 1M tokens) sets the maximum combined length of input and output. Longer contexts allow processing larger documents, maintaining longer conversations, and including more RAG-retrieved content, but also increase memory usage and compute cost.

Why others wrong: It's a token limit, not a display window; rate limiting is separate; the knowledge cutoff is about training data, not context size.

Trap: Confusing context window with knowledge cutoff — context window limits what the model sees in this request, knowledge cutoff limits what it learned during training.

Mnemonic: Context window = how much text the model can hold in its working memory right now

## Q32
Type: single
Difficulty: 3
Tags: inference, model-parallelism
Concepts: tensor-parallelism
Domain: Domain 2 — Software Development
DomainNumber: 2

When deploying a very large LLM that doesn't fit on a single GPU, what is tensor parallelism?

A. Running the same model copy on multiple GPUs for redundancy
B. Splitting individual weight matrices across multiple GPUs so each GPU computes part of every layer, requiring high-bandwidth inter-GPU communication (like NVLink) because GPUs must exchange partial results at each layer
C. Training the model on multiple datasets simultaneously
D. Compressing the model to fit on one GPU

Answer: B

Hint: If one matrix is too big for one GPU, split it across GPUs — but they need to talk to each other constantly.

Explanation: Tensor parallelism distributes weight matrices across GPUs within a layer. For a matrix multiply Y = XW, different GPUs hold different columns of W and compute partial results, which are then combined via all-reduce. This requires very fast inter-GPU communication (NVLink preferred), as partial results exchange happens at every layer.

Why others wrong: Redundancy is data parallelism/replication; this splits the model itself; multi-dataset training is a different concept; it's an alternative to compression.

Trap: Confusing tensor parallelism with pipeline parallelism — tensor splits within layers (needs fast communication), pipeline splits between layers (more tolerant of latency).

Mnemonic: Tensor parallel = split matrices across GPUs (fast link required)

## Q33
Type: single
Difficulty: 2
Tags: rag, reranking
Concepts: reranking
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

In a RAG pipeline, what is the purpose of a reranker?

A. To re-sort the training data
B. To re-score retrieved documents using a more sophisticated cross-encoder model, improving the ranking quality beyond what the initial embedding-based retrieval provides — the initial retrieval is fast but approximate, while the reranker is slow but precise
C. To rank users by their query frequency
D. To sort the final output alphabetically

Answer: B

Hint: Initial retrieval casts a wide net; the reranker picks the best catches from that net.

Explanation: Embedding-based retrieval (bi-encoder) is fast but imprecise. A reranker (cross-encoder) takes each retrieved document paired with the query and produces a more accurate relevance score. This two-stage approach (fast retrieval → precise reranking) combines speed with quality. NVIDIA NeMo Retriever includes reranking capabilities.

Why others wrong: Reranking is at inference time on retrieved documents; it scores documents by query relevance, not user frequency; it ranks by relevance, not alphabetically.

Trap: Skipping the reranker because "embedding retrieval is good enough" — reranking typically improves answer quality significantly, especially when the top retrieved documents are close in similarity score.

Mnemonic: Retrieve many (fast, rough) → Rerank few (slow, precise) → Send best to LLM

## Q34
Type: single
Difficulty: 2
Tags: nvidia-tools, nemo-curator
Concepts: nemo-curator
Domain: Domain 3 — Experimentation
DomainNumber: 3

What is NVIDIA NeMo Curator used for?

A. Managing museum collections
B. Preparing and curating large-scale training datasets for LLMs — including deduplication, quality filtering, language detection, and content classification to ensure high-quality training data
C. Curating playlists
D. Managing GPU inventory

Answer: B

Hint: "Curator" means someone who selects and organizes — in NeMo, it curates training data.

Explanation: NeMo Curator provides GPU-accelerated tools for processing massive text datasets: exact and fuzzy deduplication, quality scoring, language identification, PII detection, and domain classification. High-quality training data is the foundation of high-quality models, making data curation a critical step.

Why others wrong: It curates data, not museum or music content; it's a software tool for data processing, not hardware management.

Trap: Underestimating the importance of data curation — "data quality > model architecture" is a widely accepted principle.

Mnemonic: NeMo Curator = clean, deduplicate, and filter training data at GPU speed

## Q35
Type: single
Difficulty: 1
Tags: llm, pre-training
Concepts: pre-training
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

What is the pre-training phase of an LLM?

A. The phase where the model is deployed to production
B. The initial training phase where the model learns general language understanding by predicting the next token on a massive corpus of text data, before any task-specific fine-tuning
C. A quality assurance testing phase
D. The phase where the model's hardware is configured

Answer: B

Hint: Pre-training comes before fine-tuning — what does the model learn in this foundational phase?

Explanation: Pre-training exposes the model to billions of tokens of text, learning general language patterns, world knowledge, and reasoning abilities through next-token prediction. This creates a foundation model that can then be fine-tuned for specific tasks. Pre-training is extremely compute-intensive — often requiring thousands of GPUs for weeks.

Why others wrong: Deployment comes after training; QA is separate; hardware setup precedes training but isn't part of it.

Trap: Thinking pre-training produces a useful model by itself — pre-trained models need alignment (instruction tuning, RLHF) to follow instructions well.

Mnemonic: Pre-training = learn language on massive data → Fine-tuning = learn specific tasks

## Q36
Type: single
Difficulty: 2
Tags: fine-tuning, instruction-tuning
Concepts: instruction-tuning
Domain: Domain 3 — Experimentation
DomainNumber: 3

What is instruction tuning, and how does it differ from pre-training?

A. They are the same process
B. Instruction tuning fine-tunes a pre-trained model on instruction-response pairs to teach it to follow human instructions — while pre-training learns general language patterns, instruction tuning teaches the model to be a useful assistant
C. Instruction tuning uses more data than pre-training
D. Instruction tuning removes the model's language knowledge

Answer: B

Hint: A pre-trained model can predict the next word but can't follow instructions — instruction tuning bridges that gap.

Explanation: Pre-trained LLMs are good at text completion but poor at following instructions. Instruction tuning fine-tunes them on diverse instruction-response examples (e.g., "Summarize this article: [article]" → [summary]), teaching the model to understand and execute user requests across many task types.

Why others wrong: They're sequential phases; instruction tuning uses far less data (thousands to millions of examples vs. billions of tokens); it adds capability, not removes knowledge.

Trap: Thinking a pre-trained model is ready to use — without instruction tuning, it completes text rather than following instructions.

Mnemonic: Pre-trained = knows language, Instruction-tuned = knows how to help

## Q37
Type: single
Difficulty: 2
Tags: trustworthy-ai, hallucination
Concepts: hallucination-types
Domain: Domain 5 — Trustworthy AI
DomainNumber: 5

What are the two main types of LLM hallucination?

A. Visual and auditory hallucinations
B. Intrinsic hallucination (contradicting the provided source material) and extrinsic hallucination (generating plausible claims that cannot be verified from the source — they may or may not be true)
C. Hardware and software hallucinations
D. Training and inference hallucinations

Answer: B

Hint: One type contradicts what was given; the other adds information not found in the source.

Explanation: Intrinsic hallucinations directly contradict source information (clearly wrong). Extrinsic hallucinations introduce claims not in the source — these are harder to catch because they might actually be true, but they're ungrounded. RAG and citation mechanisms help detect and reduce both types.

Why others wrong: LLM hallucinations are text generation issues, not sensory; they're content issues, not infrastructure; both occur during inference.

Trap: Only looking for obviously wrong statements — extrinsic hallucinations that happen to be true are still problematic because the model generated them without evidence.

Mnemonic: Intrinsic = contradicts source (clearly wrong), Extrinsic = not in source (maybe wrong)

## Q38
Type: single
Difficulty: 3
Tags: nvidia-tools, nim-selection
Concepts: nim-model-selection
Domain: Domain 2 — Software Development
DomainNumber: 2

When choosing a NVIDIA NIM microservice for deployment, what factors determine the appropriate model tier?

A. Only the model's parameter count
B. A combination of task complexity, latency requirements, throughput needs, and cost constraints — smaller models (e.g., 8B) offer lower latency and cost for simpler tasks, while larger models (e.g., 70B+) provide better quality for complex reasoning but require more GPU resources
C. The color of the NVIDIA GPU being used
D. The model's release date

Answer: B

Hint: Matching model size to task requirements is a key production architecture decision — not every task needs the biggest model.

Explanation: NIM offers models at various sizes. Selecting the right tier involves balancing quality needs (complex tasks need larger models), latency SLAs (smaller models respond faster), throughput requirements (smaller models handle more concurrent requests), and cost (GPU resources scale with model size). Many applications use a routing strategy with different tiers for different tasks.

Why others wrong: Parameter count is one factor but not the only one; GPU color is irrelevant; newer isn't always better for every use case.

Trap: Always deploying the largest available model — this wastes resources on simple tasks and may not meet latency requirements.

Mnemonic: Right-size the model: Task complexity × Latency × Throughput × Cost

## Q39
Type: single
Difficulty: 1
Tags: llm, embedding-models
Concepts: embedding-vs-generative
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

What is the difference between an embedding model and a generative LLM?

A. They are the same thing
B. An embedding model converts text into fixed-size numerical vectors for similarity search and classification, while a generative LLM produces new text token by token — they serve different purposes and are often used together in RAG
C. Embedding models are always larger
D. Generative LLMs can't process text input

Answer: B

Hint: One produces vectors (for searching/comparing), the other produces text (for answering/creating).

Explanation: Embedding models (e.g., BGE, E5, NVIDIA NV-Embed) map text to dense vectors for retrieval and classification. Generative LLMs (e.g., LLaMA, Mixtral) produce text responses. In RAG, the embedding model retrieves relevant documents, and the generative LLM uses them to answer questions — they're complementary.

Why others wrong: They have fundamentally different architectures and purposes; embedding models are typically much smaller; generative LLMs absolutely process text input.

Trap: Trying to use a generative LLM for efficient similarity search — embeddings models are specifically designed and much more efficient for this purpose.

Mnemonic: Embedding = text → vector (for search), Generative = text → text (for answers)

## Q40
Type: single
Difficulty: 2
Tags: trustworthy-ai, red-teaming
Concepts: ai-red-teaming
Domain: Domain 5 — Trustworthy AI
DomainNumber: 5

What is AI red teaming?

A. A team that paints AI hardware red
B. The practice of adversarially testing AI systems by deliberately trying to make them produce harmful, biased, or incorrect outputs — identifying vulnerabilities before deployment so they can be mitigated
C. A team that writes marketing copy for AI products
D. A quality assurance team that only tests happy paths

Answer: B

Hint: Red teaming comes from military exercises — the "red team" plays the adversary to find weaknesses.

Explanation: AI red teaming involves adversarial testing where testers deliberately try to elicit harmful outputs, bypass safety controls, expose biases, or find failure modes. This proactive approach identifies vulnerabilities before real users encounter them, informing guardrail design and safety improvements.

Why others wrong: It's a security/safety practice, not physical; it's adversarial testing, not marketing; it specifically focuses on edge cases and failure modes, not happy paths.

Trap: Thinking standard QA testing is sufficient — red teaming specifically targets edge cases, adversarial inputs, and creative misuse that normal testing misses.

Mnemonic: Red team = think like an attacker → find weaknesses → fix before deployment

## Q41
Type: single
Difficulty: 2
Tags: nvidia-tools, ai-enterprise
Concepts: nvidia-ai-enterprise
Domain: Domain 2 — Software Development
DomainNumber: 2

What is NVIDIA AI Enterprise?

A. A video game
B. A comprehensive software platform that packages NVIDIA's AI frameworks, tools, and runtimes (NeMo, Triton, TensorRT-LLM, NIM, RAPIDS) with enterprise-grade support, security, and certifications for production deployment
C. A cloud computing service like AWS
D. An AI model marketplace

Answer: B

Hint: AI Enterprise bundles all of NVIDIA's AI software with the support and certifications enterprises need for production.

Explanation: NVIDIA AI Enterprise provides a curated, supported, and certified stack of NVIDIA AI software. It includes everything from data processing (RAPIDS) to model customization (NeMo) to inference (TensorRT-LLM, Triton, NIM), with enterprise SLAs, security patches, and long-term support that production environments require.

Why others wrong: It's a software platform, not a game; it runs on various clouds and on-premise, not a cloud itself; it includes tools and runtime, not just a model catalog.

Trap: Thinking individual open-source NVIDIA tools are equivalent to AI Enterprise — the enterprise version adds support, security, and certified configurations.

Mnemonic: AI Enterprise = NVIDIA's full AI stack, packaged for production with enterprise support

## Q42
Type: single
Difficulty: 3
Tags: fine-tuning, rlhf-dpo
Concepts: dpo
Domain: Domain 3 — Experimentation
DomainNumber: 3

How does Direct Preference Optimization (DPO) differ from RLHF for aligning LLMs?

A. DPO produces worse results than RLHF
B. DPO eliminates the need for a separate reward model by directly optimizing the language model using preference pairs, making alignment simpler and more stable compared to RLHF's multi-stage process of reward modeling followed by reinforcement learning
C. DPO requires more compute than RLHF
D. DPO doesn't use any human feedback

Answer: B

Hint: RLHF has two stages (train reward model, then RL). DPO collapses this into one stage.

Explanation: RLHF requires training a reward model on human preferences, then using RL (typically PPO) to optimize the LLM against that reward model — a complex, unstable process. DPO reformulates this as a single supervised learning objective directly on preference pairs (chosen vs. rejected responses), simplifying the pipeline significantly.

Why others wrong: DPO often produces comparable results more easily; it's typically less compute-intensive; it still uses human preference data, just differently.

Trap: Thinking DPO and RLHF are completely different approaches — they optimize the same objective, just with different algorithms.

Mnemonic: RLHF = preferences → reward model → RL; DPO = preferences → direct optimization (skip the middleman)

## Q43
Type: single
Difficulty: 2
Tags: inference, model-formats
Concepts: model-formats
Domain: Domain 2 — Software Development
DomainNumber: 2

What is the GGUF format commonly used for?

A. Storing training datasets
B. A file format for storing quantized LLM weights that is designed for efficient local inference — commonly used with llama.cpp and other local inference frameworks for running LLMs on consumer hardware
C. Storing configuration files
D. Packaging Docker containers

Answer: B

Hint: GGUF is the format you encounter when downloading models to run locally with llama.cpp.

Explanation: GGUF (GPT-Generated Unified Format) stores model weights in various quantization levels (Q4_0, Q5_K_M, Q8_0, etc.) optimized for CPU and consumer GPU inference. It's the standard format for the llama.cpp ecosystem, enabling local LLM inference on laptops and workstations.

Why others wrong: Training data uses different formats; GGUF stores model weights, not configs; Docker uses its own format.

Trap: Thinking GGUF is only for low-quality inference — higher quantization levels (Q8, FP16) maintain near-original quality.

Mnemonic: GGUF = the format for running LLMs locally (llama.cpp ecosystem)

## Q44
Type: single
Difficulty: 2
Tags: rag, embedding-search
Concepts: approximate-nearest-neighbor
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

Why do vector databases use approximate nearest neighbor (ANN) search instead of exact nearest neighbor search?

A. ANN produces more accurate results
B. Exact nearest neighbor search becomes computationally prohibitive for large datasets with high-dimensional vectors — ANN algorithms (like HNSW and IVF) trade a small amount of accuracy for dramatically faster search speeds, enabling practical real-time retrieval
C. ANN uses less storage space
D. Exact search is not mathematically possible

Answer: B

Hint: Checking every vector in a million-vector database for each query is too slow — ANN finds "good enough" results much faster.

Explanation: Exact nearest neighbor search has O(n×d) complexity per query (n vectors, d dimensions), which is impractical for millions of vectors. ANN algorithms (HNSW, IVF-PQ, ScaNN) use index structures to narrow the search space, achieving sub-millisecond queries with >95% recall on typical workloads.

Why others wrong: Exact search is more accurate by definition; ANN may use additional storage for index structures; exact search is possible but impractically slow.

Trap: Insisting on exact search for perfect accuracy — the 1-5% recall loss from ANN is usually negligible compared to the 100-1000x speedup.

Mnemonic: ANN = approximate but fast (99% as good, 100x faster)

## Q45
Type: single
Difficulty: 1
Tags: llm, model-sizes
Concepts: model-scaling
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

When an LLM is described as "7B" or "70B," what does this number refer to?

A. The size of the training dataset in bytes
B. The number of trainable parameters (weights) in the model — 7B means approximately 7 billion parameters, which determines the model's capacity, memory requirements, and generally correlates with capability
C. The number of training examples used
D. The context window size in tokens

Answer: B

Hint: B stands for "billion" — billion what?

Explanation: The number refers to the model's parameter count. More parameters generally mean more capacity to learn and represent knowledge, but also require more memory and compute for inference. A 7B model at FP16 needs about 14GB of GPU memory just for weights, while a 70B model needs about 140GB.

Why others wrong: Training data size is separate; training examples are counted differently; context window is measured in tokens and is a separate specification.

Trap: Assuming bigger is always better — smaller models (7B, 8B) can match or beat larger models on specific tasks when properly fine-tuned.

Mnemonic: 7B = 7 billion parameters → ~14GB GPU memory (FP16) → larger = more capable but more expensive

## Q46
Type: single
Difficulty: 3
Tags: nvidia-tools, nemo-retriever
Concepts: nemo-retriever
Domain: Domain 1 — Core Machine Learning and AI Knowledge
DomainNumber: 1

What capabilities does NVIDIA NeMo Retriever provide for building RAG systems?

A. It only provides a vector database
B. An end-to-end retrieval pipeline with embedding models for encoding, a reranking model for improving result quality, and integration with vector databases — all optimized for NVIDIA GPUs with NIM microservices for easy deployment
C. It only generates text responses
D. It only handles document chunking

Answer: B

Hint: NeMo Retriever covers the full "R" in RAG — embedding, indexing, retrieving, and reranking.

Explanation: NeMo Retriever provides GPU-accelerated embedding models (NV-Embed), reranking models (NV-RerankQA), and integration patterns with vector databases. These components are available as NIM microservices, making it straightforward to deploy production-quality retrieval pipelines for RAG applications.

Why others wrong: It provides models and pipeline components, not just a database; it handles retrieval, not generation; it covers embedding, retrieval, and reranking, not just chunking.

Trap: Building RAG retrieval from scratch when NeMo Retriever provides optimized, pre-built components.

Mnemonic: NeMo Retriever = Embed + Index + Retrieve + Rerank (the full retrieval stack)

## Q47
Type: single
Difficulty: 2
Tags: trustworthy-ai, governance
Concepts: ai-governance
Domain: Domain 5 — Trustworthy AI
DomainNumber: 5

What does AI governance encompass in an enterprise setting?

A. Only technical model performance monitoring
B. The policies, processes, and organizational structures that ensure AI systems are developed and deployed responsibly — including risk assessment, compliance with regulations, accountability frameworks, model documentation, and audit trails
C. Only legal compliance
D. Only data privacy

Answer: B

Hint: Governance is broader than any single dimension — it's the organizational framework for responsible AI.

Explanation: AI governance spans technical, legal, ethical, and organizational dimensions. It includes risk assessment frameworks, regulatory compliance (GDPR, EU AI Act), model cards and documentation, bias auditing processes, accountability structures, and incident response procedures. Good governance makes trustworthy AI systematic, not ad-hoc.

Why others wrong: Governance is broader than just monitoring, legal, or privacy — it encompasses all of these and more.

Trap: Treating governance as only a compliance checkbox — effective governance is an ongoing organizational practice, not a one-time exercise.

Mnemonic: AI Governance = Policies + Processes + People + Accountability (organizational, not just technical)

## Q48
Type: single
Difficulty: 2
Tags: fine-tuning, data-quality
Concepts: fine-tuning-data-quality
Domain: Domain 3 — Experimentation
DomainNumber: 3

Why is data quality more important than data quantity for fine-tuning LLMs?

A. Because fine-tuning always uses less data than pre-training anyway
B. Because LLMs are sensitive to the patterns in fine-tuning data — a small set of high-quality, diverse, correctly-labeled examples teaches better behavior than a large set of noisy, inconsistent, or low-quality examples that can degrade model performance
C. Because GPUs can only process small datasets
D. Because large datasets always cause overfitting

Answer: B

Hint: Would you rather learn from 100 excellent examples or 10,000 mediocre ones?

Explanation: LLMs learn behavioral patterns from fine-tuning data very effectively. Low-quality examples teach bad habits — inconsistent formatting, wrong answers, or contradictory behavior. Research consistently shows that 1,000 high-quality examples often outperform 100,000 noisy ones for fine-tuning. NeMo Curator helps ensure data quality.

Why others wrong: Data size being small isn't the reason quality matters; GPU memory limits batches, not datasets; overfitting is about data-model fit, not raw dataset size.

Trap: "Just get more data" — for fine-tuning, curating existing data is usually more impactful than collecting more.

Mnemonic: Fine-tuning: Quality × Diversity > Quantity (1K great > 100K mediocre)

## Q49
Type: multi
Difficulty: 3
Tags: nvidia-tools, stack-overview
Concepts: nvidia-ai-stack
Domain: Domain 2 — Software Development
DomainNumber: 2

Which THREE components form the core NVIDIA AI inference stack for deploying LLMs? (Select three)

A. TensorRT-LLM (model optimization)
B. Microsoft Excel
C. Triton Inference Server (model serving)
D. NIM microservices (application-ready containers)

Answer: A, C, D

Hint: Think about the three layers: optimize the model, serve it, and package it for easy deployment.

Explanation: The NVIDIA inference stack layers three components: TensorRT-LLM optimizes the model for GPU inference (kernel fusion, quantization), Triton Inference Server handles request management and model serving, and NIM packages everything into application-ready containers with standard APIs. Together, they provide end-to-end inference deployment.

Why others wrong: Excel is a spreadsheet application with no role in AI inference.

Trap: Thinking you need to use all three explicitly — NIM abstracts TensorRT-LLM and Triton internally, so application developers can use just NIM.

Mnemonic: NVIDIA inference stack: TensorRT-LLM (optimize) → Triton (serve) → NIM (deploy)

## Q50
Type: single
Difficulty: 2
Tags: evaluation, human-evaluation
Concepts: human-vs-auto-eval
Domain: Domain 3 — Experimentation
DomainNumber: 3

When should you use human evaluation instead of automated metrics (BLEU, ROUGE, perplexity) for assessing LLM outputs?

A. Never — automated metrics are always sufficient
B. When evaluating subjective qualities like helpfulness, naturalness, safety, and user satisfaction that automated metrics cannot reliably capture — human evaluation is essential for assessing whether outputs actually meet user needs
C. Only for commercial products
D. Only when automated metrics give perfect scores

Answer: B

Hint: Can a number tell you if a response was truly helpful? Some qualities require human judgment.

Explanation: Automated metrics measure surface-level properties (n-gram overlap, perplexity) but miss qualities that matter most to users — was the response actually helpful? Natural? Safe? Appropriate in tone? Human evaluation captures these subjective but critical dimensions, which is why it remains the gold standard for LLM quality assessment.

Why others wrong: Automated metrics have known blind spots; human evaluation benefits all applications; it's needed regardless of automated scores.

Trap: Over-relying on automated metrics because they're cheaper — a high BLEU score doesn't mean the output is actually useful to a human reader.

Mnemonic: Automated metrics = what's in the text, Human evaluation = is the text actually good
