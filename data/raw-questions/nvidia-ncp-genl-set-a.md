---
exam: NCP-GENL
lang: en
---

## Q1
Type: single
Difficulty: 1
Tags: transformer, attention-mechanism
Concepts: self-attention
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

What is the primary advantage of the self-attention mechanism in transformer architectures compared to recurrent neural networks?

A. It uses less GPU memory during training
B. It can process all positions in a sequence in parallel, capturing long-range dependencies without sequential computation
C. It eliminates the need for tokenization
D. It always produces shorter inference times regardless of sequence length

Answer: B

Hint: Think about how RNNs process tokens one by one versus how transformers handle the entire sequence.

Explanation: Self-attention computes relationships between all positions simultaneously, enabling parallel processing and effective capture of long-range dependencies. RNNs must process sequentially, making them slower and prone to vanishing gradients over long sequences.

Why others wrong: Transformers actually use more memory due to quadratic attention; tokenization is still required; inference time grows quadratically with sequence length in standard attention.

Trap: Assuming transformers are always faster — they trade sequential bottleneck for memory, and attention cost is O(n²) in sequence length.

Mnemonic: Self-attention = "see everything at once" vs RNN = "one step at a time"

## Q2
Type: single
Difficulty: 2
Tags: prompting, chain-of-thought
Concepts: chain-of-thought-prompting
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

A developer needs an LLM to solve multi-step arithmetic problems accurately. Which prompting technique is most likely to improve performance on this type of task?

A. Reducing the temperature to 0
B. Chain-of-thought prompting that asks the model to show its reasoning step by step
C. Increasing the max token limit to 4096
D. Using a system prompt that says "Be accurate"

Answer: B

Hint: Complex reasoning benefits from breaking a problem into intermediate steps.

Explanation: Chain-of-thought (CoT) prompting elicits intermediate reasoning steps, significantly improving performance on arithmetic and logical reasoning tasks. Research shows that asking models to "think step by step" helps them decompose complex problems rather than jumping to a final answer.

Why others wrong: Low temperature reduces randomness but doesn't improve reasoning; increasing token limits doesn't change reasoning quality; vague instructions like "Be accurate" provide no structural guidance.

Trap: Thinking that temperature=0 solves reasoning errors — it only makes outputs deterministic, not more correct.

Mnemonic: CoT = "show your work" like a math teacher demands

## Q3
Type: single
Difficulty: 1
Tags: architecture, positional-encoding
Concepts: positional-encoding
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

Why do transformer models require positional encodings or positional embeddings?

A. To reduce the vocabulary size
B. Because the self-attention mechanism has no inherent notion of token order
C. To compress the input sequence into fewer tokens
D. To enable the model to generate longer outputs

Answer: B

Hint: Unlike RNNs, transformers process all tokens simultaneously — so what tells them about order?

Explanation: Self-attention is permutation-invariant — it computes the same output regardless of token order. Positional encodings inject sequence position information so the model can distinguish "the cat sat on the mat" from "the mat sat on the cat."

Why others wrong: Vocabulary size is set by the tokenizer; positional encodings don't compress inputs; output length is controlled by generation parameters, not positional encoding.

Trap: Confusing positional encoding with tokenization — they serve completely different purposes.

Mnemonic: Positional encoding = GPS coordinates for each token in the sequence

## Q4
Type: single
Difficulty: 2
Tags: prompting, few-shot
Concepts: few-shot-prompting
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

When designing a few-shot prompt for a sentiment classification task, what is the most important consideration for selecting examples?

A. Using as many examples as possible to fill the context window
B. Selecting diverse, representative examples that cover different classes and edge cases
C. Only including examples where the model previously failed
D. Using examples from a different domain to improve generalization

Answer: B

Hint: Quality and coverage matter more than quantity in few-shot examples.

Explanation: Effective few-shot prompting requires diverse, representative examples that illustrate the expected output format and cover the range of classes. Poorly chosen examples can bias the model or fail to demonstrate important distinctions.

Why others wrong: Filling the context wastes tokens and may confuse the model; only failure cases creates bias; cross-domain examples may mislead rather than help generalize.

Trap: Believing more examples always means better results — a few well-chosen examples often outperform many mediocre ones.

Mnemonic: Few-shot = "show, don't tell" — pick examples that teach by demonstration

## Q5
Type: single
Difficulty: 3
Tags: architecture, kv-cache
Concepts: kv-cache
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

During autoregressive generation, a 13B-parameter LLM with 40 layers, 40 attention heads, and a head dimension of 128 is generating tokens with a batch size of 1 and a sequence length of 2048. Approximately how much GPU memory does the KV cache consume in FP16?

A. ~400 MB
B. ~1.6 GB
C. ~6.4 GB
D. ~12.8 GB

Answer: A

Hint: KV cache size = 2 × num_layers × num_heads × head_dim × seq_len × batch_size × bytes_per_element.

Explanation: KV cache = 2 (K and V) × 40 layers × 40 heads × 128 dim × 2048 seq × 1 batch × 2 bytes (FP16) = 2 × 40 × 40 × 128 × 2048 × 2 = ~838 MB. The closest answer is ~400 MB if the model uses grouped-query attention (GQA) with fewer KV heads, which is common in modern 13B models. Understanding KV cache sizing is critical for deployment planning.

Why others wrong: 1.6 GB, 6.4 GB, and 12.8 GB overestimate for a 13B model at this sequence length; these would correspond to larger models or longer sequences.

Trap: Forgetting that modern models use GQA/MQA to reduce KV heads, or confusing model parameter memory with KV cache memory.

Mnemonic: KV cache = 2 × layers × KV_heads × dim × seq × bytes — the "hidden" memory cost of generation

## Q6
Type: single
Difficulty: 2
Tags: architecture, rotary-embedding
Concepts: rope
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

What is the key advantage of Rotary Position Embedding (RoPE) over learned absolute positional embeddings?

A. RoPE eliminates the need for attention masks
B. RoPE encodes relative position information directly into the attention computation, enabling better length generalization
C. RoPE reduces the number of model parameters by half
D. RoPE allows models to skip the embedding layer entirely

Answer: B

Hint: Think about what happens when a model encounters sequences longer than those seen during training.

Explanation: RoPE applies rotation matrices to query and key vectors, encoding relative positions through the angle between rotated vectors. This relative encoding enables better extrapolation to sequence lengths beyond training, unlike absolute embeddings which break down at unseen positions.

Why others wrong: Attention masks are still needed for causal generation; RoPE adds minimal parameters but doesn't halve them; the embedding layer is still required for token representations.

Trap: Assuming RoPE perfectly generalizes to any length — it still degrades beyond training length, just more gracefully than absolute embeddings.

Mnemonic: RoPE = "Rotate to Relate" — rotation angle encodes relative distance

## Q7
Type: single
Difficulty: 1
Tags: prompting, zero-shot
Concepts: zero-shot-prompting
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

What distinguishes zero-shot prompting from few-shot prompting?

A. Zero-shot uses a fine-tuned model while few-shot uses a pre-trained model
B. Zero-shot provides no task examples in the prompt, relying only on instructions, while few-shot includes demonstration examples
C. Zero-shot is always more accurate than few-shot
D. Zero-shot requires a larger model than few-shot

Answer: B

Hint: The "shot" in zero/few-shot refers to the number of examples provided.

Explanation: Zero-shot prompting describes the task through instructions alone without examples, relying on the model's pre-trained knowledge. Few-shot prompting includes input-output demonstration pairs that guide the model's behavior through pattern matching.

Why others wrong: Both can use the same model; accuracy depends on the task; model size is independent of prompting strategy.

Trap: Thinking zero-shot is inferior — for well-defined tasks, clear instructions can outperform poorly chosen few-shot examples.

Mnemonic: Zero-shot = "just tell me what to do" vs Few-shot = "show me what to do"

## Q8
Type: single
Difficulty: 3
Tags: architecture, mixture-of-experts
Concepts: moe
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

In a Mixture-of-Experts (MoE) transformer with 8 experts per layer and a top-2 routing strategy, what is the primary challenge during training?

A. The model cannot learn to route tokens to different experts
B. Load imbalance where some experts receive disproportionately more tokens, leading to wasted capacity and communication bottlenecks
C. MoE models always require more training data than dense models
D. The top-2 routing causes gradient explosion in all cases

Answer: B

Hint: What happens if the router keeps sending most tokens to the same 2 experts?

Explanation: Load imbalance is the central challenge in MoE training — without auxiliary load-balancing losses, the router may collapse to routing most tokens to a few "popular" experts. This wastes the capacity of underused experts and creates communication hotspots in distributed training.

Why others wrong: Routers do learn to differentiate; MoE can be data-efficient since only a subset of parameters are active; gradient explosion is not inherent to top-k routing.

Trap: Thinking more experts always means better performance — without proper load balancing, adding experts can actually hurt quality.

Mnemonic: MoE balance = "everyone gets customers" — a router that plays favorites wastes restaurant tables

## Q9
Type: single
Difficulty: 2
Tags: adaptation, model-selection
Concepts: model-adaptation-strategies
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

A company has a general-purpose 70B LLM and needs it to follow specific output formatting for a customer service application. The team has limited GPU resources. Which adaptation strategy is most appropriate?

A. Pre-train a new model from scratch on customer service data
B. Use prompt engineering with structured output instructions and few-shot examples
C. Fine-tune all 70B parameters on formatting examples
D. Distill the model to 7B parameters first

Answer: B

Hint: Consider the simplest approach that matches the constraint — limited GPU resources and a formatting-only requirement.

Explanation: For output formatting requirements with limited compute, prompt engineering is the most resource-efficient approach. Structured instructions and few-shot examples can effectively guide a capable 70B model's output format without any training. Fine-tuning all parameters would require substantial GPU resources.

Why others wrong: Pre-training from scratch is enormously expensive; full fine-tuning of 70B requires massive GPU clusters; distillation is complex and may lose capabilities, and is overkill for a formatting issue.

Trap: Jumping to fine-tuning when the problem is output format — prompt engineering should always be tried first for formatting and style adjustments.

Mnemonic: Adaptation ladder: prompt → PEFT → full fine-tune → pre-train (climb only as high as needed)

## Q10
Type: single
Difficulty: 2
Tags: architecture, tokenization
Concepts: bpe-tokenization
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

When adapting a pre-trained LLM to a new language with a significantly different script (e.g., Thai or Arabic), what tokenization challenge is most likely to degrade performance?

A. The model will refuse to generate text in the new language
B. The existing BPE vocabulary was trained on a different character distribution, causing excessive token fragmentation and longer sequences for the new language
C. BPE tokenization cannot handle non-Latin scripts at all
D. The positional embeddings will overflow

Answer: B

Hint: BPE merges are learned from training data — what happens when the test language was underrepresented?

Explanation: BPE vocabularies reflect the character and subword distribution of training data. For underrepresented languages, common words may be split into many single-character or byte tokens, drastically increasing sequence length, reducing effective context, and hurting both speed and quality.

Why others wrong: Models don't refuse, they just perform poorly; BPE handles any script via byte-level fallback; positional embeddings don't overflow, but longer sequences may exceed context length.

Trap: Assuming a "multilingual" model handles all languages equally — tokenizer efficiency varies dramatically across languages.

Mnemonic: Undertrained tokenizer = "spelling out every word letter by letter" in the new language

## Q11
Type: single
Difficulty: 1
Tags: fine-tuning, data-preparation
Concepts: data-curation
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

What is the primary purpose of data deduplication when preparing a fine-tuning dataset for an LLM?

A. To increase the dataset size through augmentation
B. To prevent the model from memorizing and overfitting to repeated examples, which can cause repetitive outputs
C. To convert all data to the same file format
D. To remove all data that the model has already seen during pre-training

Answer: B

Hint: What happens when a model sees the exact same example many times during training?

Explanation: Duplicate examples cause the model to assign disproportionate weight to repeated content, leading to memorization, overfitting, and repetitive generation patterns. Deduplication ensures each training signal is unique, improving generalization.

Why others wrong: Deduplication reduces, not increases, dataset size; format conversion is preprocessing, not deduplication; we generally can't know what was in pre-training data.

Trap: Thinking deduplication only means exact matches — near-duplicates (paraphrases, templates) can cause similar issues.

Mnemonic: Dedup = "no echoes in training" — each example should teach something new

## Q12
Type: single
Difficulty: 2
Tags: fine-tuning, lora
Concepts: lora
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

In LoRA (Low-Rank Adaptation), why are low-rank matrices injected specifically into the attention weight matrices rather than all layers?

A. Attention weights are the only trainable parameters in a transformer
B. Attention layers capture task-specific knowledge most efficiently, and targeting them provides the best performance-to-parameter ratio
C. LoRA cannot mathematically be applied to feed-forward layers
D. Feed-forward layers are automatically updated through backpropagation without LoRA

Answer: B

Hint: LoRA can technically be applied anywhere — the question is where it's most effective.

Explanation: While LoRA can be applied to any linear layer, research shows that attention projection matrices (Q, K, V, O) are the most effective targets because they govern how the model attends to and transforms information. Applying LoRA here provides the best trade-off between added parameters and task performance.

Why others wrong: All transformer weights can be trainable; LoRA is mathematically valid for any linear layer; feed-forward layers are not auto-updated without explicit LoRA or gradient flow.

Trap: Assuming LoRA must be applied to all layers — in practice, targeting attention layers alone often matches or exceeds full-layer LoRA with fewer parameters.

Mnemonic: LoRA on attention = "steering the spotlight" — small adjustments to where the model looks have outsized impact

## Q13
Type: single
Difficulty: 2
Tags: fine-tuning, rlhf
Concepts: rlhf
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

In RLHF (Reinforcement Learning from Human Feedback), what is the role of the reward model?

A. It generates training data for the base LLM
B. It scores model outputs based on learned human preferences, providing the reward signal for PPO optimization
C. It replaces the need for any human annotation
D. It directly modifies the LLM's weights through gradient descent

Answer: B

Hint: The reward model sits between human preferences and the RL training loop.

Explanation: The reward model is trained on human comparison data (preferred vs rejected responses) to predict human preference scores. During PPO training, it evaluates the LLM's outputs and provides scalar reward signals that guide the policy toward generating more preferred responses.

Why others wrong: The reward model scores outputs, not generates data; it's trained on human annotations, not a replacement; PPO handles the weight updates, not the reward model directly.

Trap: Confusing the reward model with the policy model — the reward model only scores, the policy model generates and gets updated.

Mnemonic: Reward model = "the judge" who learned from human preferences, PPO = "the coach" who trains the player

## Q14
Type: single
Difficulty: 1
Tags: fine-tuning, sft
Concepts: supervised-fine-tuning
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

What is the standard format for supervised fine-tuning (SFT) data when training an instruction-following LLM?

A. Raw text documents without any structure
B. Instruction-response pairs (or instruction-input-response triples) that demonstrate the desired behavior
C. Multiple-choice questions with answer keys
D. Unlabeled web crawl data

Answer: B

Hint: SFT teaches the model to follow instructions — what format demonstrates that?

Explanation: SFT data consists of (instruction, response) pairs or (instruction, input, response) triples. Each example shows the model what a good response looks like for a given instruction, teaching it the pattern of instruction-following through supervised learning.

Why others wrong: Raw text is for pre-training; MCQ format is for evaluation, not fine-tuning; unlabeled data is for unsupervised pre-training.

Trap: Using evaluation-format data (MCQ) for fine-tuning — this teaches the model to answer MCQs, not to follow general instructions.

Mnemonic: SFT data = "here's what I want, here's a perfect answer" — learning by example

## Q15
Type: single
Difficulty: 3
Tags: fine-tuning, dpo
Concepts: dpo
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

How does Direct Preference Optimization (DPO) differ from the standard RLHF pipeline?

A. DPO requires more human preference data than RLHF
B. DPO eliminates the need for a separate reward model and PPO training loop by directly optimizing the policy using preference pairs with a closed-form loss
C. DPO can only be used with models smaller than 7B parameters
D. DPO produces identical results to RLHF but takes longer to train

Answer: B

Hint: DPO's key innovation is simplifying the RLHF pipeline — what steps does it remove?

Explanation: DPO reformulates the RLHF objective into a simple classification-like loss over preference pairs (chosen vs rejected responses). This eliminates the need to train a separate reward model and run an unstable PPO optimization loop, making preference alignment significantly simpler and more stable.

Why others wrong: DPO uses the same preference data format; it works at any model scale; results can differ from RLHF, and DPO is typically faster, not slower.

Trap: Assuming simpler always means worse — DPO often matches or exceeds RLHF quality while being easier to tune.

Mnemonic: DPO = "direct route" to alignment — skip the reward model middleman

## Q16
Type: single
Difficulty: 2
Tags: fine-tuning, nemo
Concepts: nemo-customization
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

When using NVIDIA NeMo Framework for fine-tuning a large language model, what is the recommended approach for handling a custom dataset?

A. Upload raw text files directly to the training script
B. Convert data into JSONL format with structured fields, validate schema compliance, and use NeMo's data preprocessing pipeline
C. Store data in a SQL database and query during training
D. Embed all data into the model's tokenizer vocabulary

Answer: B

Hint: NeMo expects structured, preprocessed data — not raw files fed directly.

Explanation: NeMo Framework expects fine-tuning data in JSONL format with specific schema fields. The preprocessing pipeline handles tokenization, packing, and efficient data loading. Proper formatting and validation prevent silent data quality issues during training.

Why others wrong: Raw text lacks the structure NeMo needs; SQL queries during training create I/O bottlenecks; embedding data into the tokenizer vocabulary conflates data with vocabulary expansion.

Trap: Skipping data validation — malformed JSONL entries can cause silent failures or degraded training quality.

Mnemonic: NeMo data = "structured, validated, JSONL" — clean input, clean output

## Q17
Type: single
Difficulty: 3
Tags: fine-tuning, catastrophic-forgetting
Concepts: catastrophic-forgetting
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

A team fine-tunes a general-purpose LLM on medical Q&A data. After fine-tuning, the model excels at medical questions but fails at basic math and common sense tasks it previously handled well. What technique best mitigates this issue?

A. Increasing the learning rate to ensure the model learns the medical domain faster
B. Mixing a proportion of general-purpose instruction data into the medical fine-tuning dataset to preserve broad capabilities
C. Training for more epochs on the medical data alone
D. Removing all non-medical knowledge from the base model first

Answer: B

Hint: The model "forgot" its general skills — how do you remind it while learning new ones?

Explanation: Catastrophic forgetting occurs when fine-tuning on a narrow domain overwrites the model's general capabilities. Mixing general-purpose data with domain-specific data maintains the model's broad knowledge while still learning the new domain. This is a standard practice in production fine-tuning.

Why others wrong: Higher learning rate accelerates forgetting; more epochs on narrow data worsens forgetting; removing general knowledge is the opposite of what's needed.

Trap: Thinking domain specialization requires exclusive domain data — balance between new and retained knowledge is essential.

Mnemonic: Mixed data = "don't forget your roots while learning new tricks"

## Q18
Type: single
Difficulty: 2
Tags: fine-tuning, qlora
Concepts: qlora
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

What does QLoRA add on top of standard LoRA to reduce memory requirements?

A. It uses float64 precision for all computations
B. It quantizes the base model weights to 4-bit NormalFloat while keeping LoRA adapter weights in higher precision (BF16), and uses double quantization and paged optimizers
C. It removes half of the model's layers before fine-tuning
D. It trains only the first and last layers of the model

Answer: B

Hint: The "Q" in QLoRA stands for quantization — what gets quantized and what stays high-precision?

Explanation: QLoRA combines 4-bit NormalFloat quantization of frozen base weights with BF16 LoRA adapters. Double quantization reduces the memory overhead of quantization constants, and paged optimizers handle memory spikes. This enables fine-tuning 65B models on a single 48GB GPU.

Why others wrong: Float64 would quadruple memory; removing layers destroys model capability; training only boundary layers misses the most important attention layers.

Trap: Thinking quantization hurts quality — QLoRA matches full-precision LoRA quality because gradients and adapters stay in BF16.

Mnemonic: QLoRA = "freeze and compress the base, train lightweight adapters at full precision"

## Q19
Type: single
Difficulty: 1
Tags: data-preparation, tokenization
Concepts: tokenization-pipeline
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

In the context of LLM fine-tuning, what is the purpose of adding special tokens like <|im_start|> and <|im_end|> to training data?

A. To increase the vocabulary size for better compression
B. To mark structural boundaries (such as turns in a conversation) so the model learns to generate properly formatted outputs
C. To prevent the model from generating those tokens during inference
D. To encrypt the training data for security purposes

Answer: B

Hint: Chat models need to know where one message ends and another begins.

Explanation: Special tokens serve as structural delimiters in training data, marking boundaries between system prompts, user messages, and assistant responses. The model learns to generate these tokens at appropriate positions, enabling proper multi-turn conversation formatting during inference.

Why others wrong: Special tokens are added for structure, not compression; the model should generate them appropriately, not avoid them; they have no encryption purpose.

Trap: Thinking special tokens are optional — without them, the model can't distinguish between roles or turns in conversation.

Mnemonic: Special tokens = "punctuation for conversations" — they tell the model who's speaking and when

## Q20
Type: single
Difficulty: 3
Tags: fine-tuning, data-quality
Concepts: data-contamination
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

During fine-tuning, a team notices that their model achieves 98% accuracy on their held-out evaluation set but performs poorly when deployed. What is the most likely cause?

A. The model is undertrained and needs more epochs
B. Data contamination — the evaluation set leaked into the training data, either through exact duplication or near-duplicate paraphrases
C. The GPU was too slow during training
D. The learning rate was too low

Answer: B

Hint: Suspiciously high eval scores + poor real-world performance is a classic symptom of what problem?

Explanation: When evaluation performance dramatically exceeds real-world performance, data contamination is the most likely culprit. The model memorized evaluation examples rather than learning generalizable patterns. This can happen through exact duplicates, near-duplicates, or training on data sources that contain the benchmark.

Why others wrong: Undertraining would show low eval scores; GPU speed doesn't affect model quality; low learning rate would show lower, not inflated, eval scores.

Trap: Celebrating high benchmark scores without sanity-checking against held-out real-world data — always test on truly unseen data.

Mnemonic: 98% on eval + poor in prod = "the student saw the exam answers beforehand"

## Q21
Type: single
Difficulty: 1
Tags: distributed-training, data-parallelism
Concepts: data-parallelism
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

In data parallelism, how is the training workload distributed across multiple GPUs?

A. Each GPU trains a different model on the same data
B. The model is replicated on each GPU, and each GPU processes a different mini-batch of data, synchronizing gradients after each step
C. The dataset is stored on one GPU and streamed to others
D. Each GPU handles a different layer of the model

Answer: B

Hint: "Data" parallelism means splitting the data — what stays the same across GPUs?

Explanation: Data parallelism replicates the full model on each GPU. Each GPU computes forward and backward passes on a different data shard, then gradients are synchronized (typically via all-reduce) so all replicas stay identical. This linearly scales throughput with GPU count for models that fit on one GPU.

Why others wrong: Training different models is ensemble training; storing data on one GPU creates a bottleneck; splitting by layer is model/pipeline parallelism.

Trap: Confusing data parallelism with model parallelism — in data parallelism, every GPU has the complete model.

Mnemonic: Data parallelism = "same recipe, different ingredients" — each GPU cooks the same model with different data batches

## Q22
Type: single
Difficulty: 2
Tags: distributed-training, tensor-parallelism
Concepts: tensor-parallelism
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

What is the key difference between tensor parallelism and pipeline parallelism for training large models?

A. Tensor parallelism is slower than pipeline parallelism in all cases
B. Tensor parallelism splits individual layers' weight matrices across GPUs (intra-layer), while pipeline parallelism assigns different layers to different GPUs (inter-layer)
C. Pipeline parallelism requires more GPUs than tensor parallelism
D. Tensor parallelism does not require any inter-GPU communication

Answer: B

Hint: "Tensor" = splitting a single matrix; "Pipeline" = splitting the layer stack.

Explanation: Tensor parallelism partitions weight matrices within a layer across GPUs, requiring high-bandwidth communication (NVLink) for each forward/backward pass. Pipeline parallelism assigns consecutive layers to different GPUs, requiring communication only at stage boundaries. They are often combined: tensor parallelism within a node, pipeline parallelism across nodes.

Why others wrong: Speed depends on hardware topology; GPU count depends on model size, not the parallelism type; tensor parallelism requires intensive inter-GPU communication within each layer.

Trap: Using tensor parallelism across nodes with slow interconnects — it requires NVLink-level bandwidth; pipeline parallelism is better for cross-node splitting.

Mnemonic: Tensor = "split the brick" (intra-layer), Pipeline = "split the wall" (inter-layer)

## Q23
Type: single
Difficulty: 2
Tags: optimization, mixed-precision
Concepts: mixed-precision-training
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

In mixed-precision training with FP16/BF16, why is it essential to maintain a master copy of weights in FP32?

A. FP32 weights are needed for inference only
B. Small gradient updates can underflow in FP16, causing weights to stagnate; FP32 master weights accumulate these small updates accurately before casting back to FP16
C. FP32 weights train faster than FP16 weights
D. GPU hardware cannot perform computations in FP16

Answer: B

Hint: Think about what happens when you add a very small number (gradient) to a much larger number (weight) in low precision.

Explanation: In FP16, the limited mantissa means that small gradient updates may round to zero when added to larger weight values. Maintaining FP32 master weights allows accurate accumulation of small updates. The FP16 copy is used for fast forward/backward passes, while FP32 ensures correct optimization.

Why others wrong: Master weights are for training, not just inference; FP32 is slower per operation; modern GPUs have dedicated FP16/BF16 hardware (Tensor Cores).

Trap: Thinking BF16 solves all precision issues — BF16 has the same exponent range as FP32 (reducing overflow/underflow) but still has limited mantissa precision.

Mnemonic: FP32 master = "the accountant" — keeps precise books while FP16 workers do the heavy lifting

## Q24
Type: single
Difficulty: 3
Tags: optimization, flash-attention
Concepts: flash-attention
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

FlashAttention achieves significant speedup over standard attention primarily by which mechanism?

A. Using a simpler attention formula that approximates the standard one
B. Tiling the computation to keep data in fast GPU SRAM, minimizing slow HBM reads/writes, making it IO-aware rather than compute-optimized
C. Reducing the number of attention heads by half
D. Skipping attention computation for padding tokens only

Answer: B

Hint: The bottleneck in standard attention isn't compute — it's memory bandwidth.

Explanation: FlashAttention restructures the attention computation into tiles that fit in GPU SRAM (on-chip memory), avoiding the need to materialize the full N×N attention matrix in slow HBM (off-chip memory). This IO-aware approach reduces memory reads/writes from O(N²) to O(N²/M) where M is SRAM size, achieving 2-4x speedup without approximation.

Why others wrong: FlashAttention computes exact attention, not an approximation; it doesn't change the number of heads; padding optimization is a separate concern and minor compared to the IO savings.

Trap: Thinking FlashAttention trades accuracy for speed — it produces mathematically identical results to standard attention.

Mnemonic: FlashAttention = "work in the fast cache, not the slow warehouse" — same math, smarter memory access

## Q25
Type: single
Difficulty: 2
Tags: optimization, gradient-checkpointing
Concepts: gradient-checkpointing
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

Gradient checkpointing (activation recomputation) trades what resource for what benefit?

A. It trades disk space for faster training
B. It trades compute time (recomputing activations during backward pass) for reduced GPU memory usage by not storing all intermediate activations
C. It trades model accuracy for smaller model size
D. It trades network bandwidth for less CPU usage

Answer: B

Hint: During backpropagation, you need activations from the forward pass — what if you didn't save them all?

Explanation: Gradient checkpointing saves memory by discarding most intermediate activations during the forward pass and recomputing them during the backward pass. This typically adds ~33% compute overhead but can reduce activation memory by 60-80%, enabling training of larger models or batches on the same hardware.

Why others wrong: It operates entirely in GPU memory, not disk; accuracy is unaffected since recomputed activations are identical; it doesn't involve network or CPU trade-offs.

Trap: Thinking the recomputation overhead is prohibitive — the ~33% compute cost is often well worth the memory savings that enable larger batch sizes.

Mnemonic: Gradient checkpointing = "take notes at chapter summaries, re-read pages when needed"

## Q26
Type: single
Difficulty: 1
Tags: optimization, batch-size
Concepts: gradient-accumulation
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

When GPU memory is insufficient for a desired batch size, what technique simulates a larger effective batch size without increasing memory usage?

A. Increasing the learning rate
B. Gradient accumulation — performing multiple forward-backward passes and summing gradients before updating weights
C. Reducing the model's vocabulary size
D. Using CPU offloading for the optimizer states

Answer: B

Hint: You want a batch of 64 but can only fit 8 — how do you get the same gradient signal?

Explanation: Gradient accumulation runs multiple micro-batches sequentially, accumulating gradients without updating weights, then performs one optimizer step. For example, 8 micro-batches of size 8 produce the same gradient as one batch of 64, using only the memory of a single micro-batch.

Why others wrong: Learning rate doesn't change effective batch size; vocabulary size affects embedding memory, not batch size; CPU offloading helps memory but is a separate technique.

Trap: Forgetting to scale the learning rate when changing effective batch size — linear scaling rule suggests scaling LR proportionally.

Mnemonic: Gradient accumulation = "saving up coins before making one big purchase"

## Q27
Type: single
Difficulty: 3
Tags: optimization, deepspeed
Concepts: zero-optimizer
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

In DeepSpeed ZeRO Stage 3, what is partitioned across GPUs compared to standard data parallelism?

A. Only the input data is partitioned
B. Optimizer states, gradients, and model parameters are all partitioned across GPUs, so no single GPU holds the full model
C. Only the optimizer states are partitioned
D. The training dataset is repartitioned at each epoch

Answer: B

Hint: ZeRO stages progressively partition more — Stage 1 = optimizer, Stage 2 = + gradients, Stage 3 = + parameters.

Explanation: ZeRO Stage 3 partitions all three memory consumers across data-parallel GPUs: optimizer states (Stage 1), gradients (Stage 2), and model parameters (Stage 3). Each GPU stores only 1/N of each, gathering parameters on-demand for computation. This enables training models far larger than single-GPU memory.

Why others wrong: Standard data parallelism already splits data; Stage 3 goes beyond just optimizer states (that's Stage 1); dataset repartitioning is unrelated to ZeRO.

Trap: Confusing ZeRO stages — Stage 1 only partitions optimizer states; you need Stage 3 for full memory reduction including parameters.

Mnemonic: ZeRO 1-2-3 = "share the optimizer, share the gradients, share the model" — progressive sharing

## Q28
Type: single
Difficulty: 2
Tags: optimization, learning-rate
Concepts: learning-rate-scheduling
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

Why is a warmup phase commonly used at the beginning of LLM training?

A. To allow the GPU to reach optimal operating temperature
B. To gradually increase the learning rate from near-zero, preventing large, destabilizing gradient updates when the model's weights are randomly initialized
C. To preload the dataset into GPU memory
D. To run a validation pass before training begins

Answer: B

Hint: At initialization, gradients can be large and noisy — what does a small learning rate prevent?

Explanation: Early in training, model weights produce noisy, high-variance gradients. Starting with a large learning rate can cause divergence or loss spikes. Warmup gradually increases the learning rate, allowing the model to find a stable optimization trajectory before applying full-strength updates.

Why others wrong: GPU temperature is hardware-managed; data loading is separate from LR scheduling; validation before training is useful but unrelated to warmup.

Trap: Thinking warmup is optional for LLM training — skipping it often causes early training instability, especially with Adam-based optimizers.

Mnemonic: LR warmup = "stretching before a sprint" — start gentle, then accelerate

## Q29
Type: single
Difficulty: 2
Tags: optimization, quantization
Concepts: post-training-quantization
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

What is the trade-off when applying GPTQ (post-training quantization) to compress a model from FP16 to INT4?

A. The model's vocabulary is reduced by 75%
B. Model size is reduced ~4x with minimal accuracy loss for most tasks, but some nuanced reasoning and rare-knowledge recall may degrade
C. The model can no longer be fine-tuned
D. Inference speed always decreases with quantization

Answer: B

Hint: You're representing each weight with 4 bits instead of 16 — what's gained and what might be lost?

Explanation: GPTQ calibrates quantization per layer using a small calibration dataset, minimizing reconstruction error. The 4x size reduction enables deployment on consumer GPUs. Most capabilities are preserved, but tasks requiring subtle distinctions (nuanced reasoning, rare factual recall) may show degradation due to reduced numerical precision.

Why others wrong: Vocabulary is unchanged; quantized models can be further fine-tuned with QLoRA; inference is typically faster due to reduced memory bandwidth requirements.

Trap: Assuming INT4 quantization always maintains full model quality — benchmark on your specific use case before deploying.

Mnemonic: GPTQ INT4 = "compressing a photo to JPEG — smaller file, usually looks fine, sometimes loses fine detail"

## Q30
Type: single
Difficulty: 3
Tags: optimization, nccl
Concepts: communication-backend
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

In a multi-node training setup with 8 GPUs per node, a team observes that gradient synchronization accounts for 40% of step time. Which optimization would most directly reduce this communication overhead?

A. Switching from AdamW to SGD optimizer
B. Using gradient compression (e.g., PowerSGD) combined with overlapping communication with backward-pass computation
C. Increasing the model size to better utilize GPU compute
D. Reducing the number of training epochs

Answer: B

Hint: You need to reduce the time spent on gradient all-reduce — attack both the volume and the timing.

Explanation: Gradient compression (PowerSGD, TopK) reduces the volume of data transmitted during all-reduce. Overlapping communication with computation hides latency by starting gradient synchronization for earlier layers while later layers are still computing. Together, these can reduce communication overhead from 40% to under 15%.

Why others wrong: Optimizer choice doesn't affect communication volume; larger models increase communication; fewer epochs avoid the problem but don't solve it.

Trap: Only addressing one dimension — compression alone or overlap alone may be insufficient; combining both techniques is typically needed for significant improvement.

Mnemonic: Communication optimization = "send less (compress) + send during work (overlap)" — a two-pronged attack

## Q31
Type: single
Difficulty: 1
Tags: deployment, tensorrt-llm
Concepts: tensorrt-llm
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

What is the primary purpose of NVIDIA TensorRT-LLM in the deployment stack?

A. To train LLMs from scratch on NVIDIA GPUs
B. To optimize and compile LLM inference for maximum throughput and minimum latency on NVIDIA GPUs
C. To store LLM weights in a database
D. To provide a web UI for interacting with LLMs

Answer: B

Hint: TensorRT has always been about inference optimization — what does the LLM variant add?

Explanation: TensorRT-LLM compiles and optimizes LLM architectures for inference on NVIDIA GPUs. It applies kernel fusion, quantization, KV cache management, in-flight batching, and tensor parallelism specifically designed for autoregressive generation, achieving significant speedup over generic inference frameworks.

Why others wrong: TensorRT-LLM is for inference, not training; it's a compute engine, not storage; UI is handled by separate application layers.

Trap: Confusing TensorRT-LLM with the training framework (NeMo) — they serve opposite ends of the model lifecycle.

Mnemonic: TensorRT-LLM = "F1 racing engine for inference" — take a trained model and make it run as fast as possible

## Q32
Type: single
Difficulty: 2
Tags: deployment, in-flight-batching
Concepts: in-flight-batching
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

What advantage does in-flight batching (continuous batching) provide over static batching for LLM inference?

A. It reduces model accuracy to improve throughput
B. It allows new requests to join and completed requests to leave the batch dynamically, improving GPU utilization by not waiting for the longest sequence to finish
C. It eliminates the need for a GPU entirely
D. It processes requests in strict FIFO order without any batching

Answer: B

Hint: In static batching, all requests must finish before new ones start — what's wasted?

Explanation: Static batching pads all sequences to the longest one and waits for all to complete, wasting GPU cycles on padding and completed-but-waiting requests. In-flight batching dynamically inserts and removes requests at each iteration, keeping the GPU fully utilized with real computation throughout.

Why others wrong: Accuracy is unchanged; GPUs are still required; in-flight batching is a form of batching, not its absence.

Trap: Thinking batching is all-or-nothing — in-flight batching is a smarter batching strategy, not the removal of batching.

Mnemonic: In-flight batching = "revolving door" vs static batching = "everyone enters and exits together"

## Q33
Type: single
Difficulty: 2
Tags: deployment, triton
Concepts: triton-inference-server
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

In NVIDIA Triton Inference Server, what is the purpose of model ensembles?

A. To train multiple models simultaneously
B. To chain multiple models together into a pipeline (e.g., tokenizer → LLM → post-processor) that executes as a single inference request
C. To randomly select one of several models for each request
D. To replicate the same model across GPUs for redundancy

Answer: B

Hint: Some inference workflows require multiple processing steps — how does Triton handle that?

Explanation: Triton model ensembles define a DAG of models that execute as a unified pipeline. A typical LLM deployment chains preprocessing (tokenization), the model itself, and postprocessing (detokenization, filtering). Triton manages data flow between steps, reducing overhead from separate API calls.

Why others wrong: Ensembles are for inference pipelines, not training; routing is handled by different Triton features; GPU replication is model instances, not ensembles.

Trap: Confusing Triton ensembles with ML ensemble methods (Random Forest, etc.) — Triton ensembles are about pipelining, not combining predictions.

Mnemonic: Triton ensemble = "assembly line" — each station does one job, product flows through automatically

## Q34
Type: single
Difficulty: 1
Tags: deployment, containerization
Concepts: deployment-containers
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

What is the primary benefit of deploying LLMs using NVIDIA GPU-optimized containers (NGC containers)?

A. They make the model smaller
B. They provide pre-configured environments with optimized drivers, libraries, and frameworks, ensuring reproducibility and reducing deployment friction
C. They eliminate the need for GPUs during inference
D. They automatically improve model accuracy

Answer: B

Hint: What problem do containers solve in ML deployment? Think dependencies, versions, and compatibility.

Explanation: NGC containers bundle CUDA, cuDNN, TensorRT, and framework versions that are tested together, eliminating "works on my machine" issues. They ensure that the inference environment exactly matches the validated configuration, reducing deployment failures from driver/library mismatches.

Why others wrong: Containers don't change model size; GPUs are still needed; accuracy depends on the model, not the container.

Trap: Using generic Docker containers instead of NGC — missing optimized CUDA/cuDNN versions can reduce performance by 30-50%.

Mnemonic: NGC container = "pre-built toolkit" — all the right tools, pre-tested, ready to go

## Q35
Type: single
Difficulty: 3
Tags: deployment, scaling
Concepts: autoscaling-inference
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

An LLM inference service experiences traffic spikes during business hours (10x baseline). The team needs to balance cost with latency SLAs. Which autoscaling strategy is most appropriate?

A. Running at peak capacity 24/7 to guarantee low latency
B. Using predictive autoscaling based on historical traffic patterns combined with reactive scaling for unexpected spikes, with GPU instances pre-warmed from a standby pool
C. Scaling to zero instances outside business hours and cold-starting on demand
D. Using CPU-only instances during low traffic and GPU instances during peaks

Answer: B

Hint: You need to handle predictable patterns AND unexpected spikes — what covers both?

Explanation: Predictive autoscaling pre-provisions GPU instances based on known traffic patterns (business hours), while reactive scaling handles unexpected spikes. Pre-warmed standby instances (models loaded in memory but not serving) eliminate cold-start latency. This combination minimizes cost while meeting latency SLAs.

Why others wrong: 24/7 peak capacity wastes 90% of resources during off-hours; cold-starting LLMs takes minutes, violating SLAs; CPU inference for LLMs is too slow for production latency requirements.

Trap: Underestimating LLM cold-start time — loading a 70B model from disk to GPU takes 2-5 minutes, making pure reactive scaling insufficient.

Mnemonic: Autoscaling = "predict + react + pre-warm" — three layers of defense against traffic spikes

## Q36
Type: single
Difficulty: 2
Tags: deployment, monitoring
Concepts: inference-monitoring
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

Which metrics are most critical to monitor for an LLM inference service in production?

A. Only GPU temperature and fan speed
B. Time to first token (TTFT), tokens per second (TPS), request queue depth, GPU memory utilization, and error rate
C. Only the total number of API calls per day
D. Model training loss and validation accuracy

Answer: B

Hint: Think about what the user experiences (latency) and what the infrastructure needs (utilization, errors).

Explanation: TTFT measures perceived latency for the first response token. TPS indicates generation throughput. Queue depth reveals capacity saturation. GPU memory utilization predicts OOM risks. Error rate catches failures. Together, these metrics cover user experience, system health, and capacity planning.

Why others wrong: Hardware metrics alone miss application-level issues; call count lacks latency/quality dimensions; training metrics are irrelevant for inference monitoring.

Trap: Monitoring only throughput (TPS) without latency (TTFT) — high throughput with high latency means many users waiting a long time.

Mnemonic: LLM monitoring = "TTFT + TPS + Queue + Memory + Errors" — the five vital signs

## Q37
Type: single
Difficulty: 2
Tags: deployment, model-serving
Concepts: speculative-decoding
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

How does speculative decoding speed up LLM inference?

A. By skipping attention computation for certain tokens
B. By using a smaller draft model to propose multiple tokens, then verifying them in parallel with the larger target model, accepting correct predictions and rejecting wrong ones
C. By reducing the model's vocabulary to the most common tokens
D. By caching all possible responses in advance

Answer: B

Hint: The bottleneck in autoregressive generation is sequential token-by-token decoding — how do you generate multiple tokens at once?

Explanation: Speculative decoding uses a fast, small model to "guess" multiple future tokens. The large model verifies all guesses in one forward pass (which costs the same as generating one token due to parallel processing). Accepted tokens are free speedup; rejected tokens fall back to standard generation. This can achieve 2-3x speedup.

Why others wrong: Attention is still fully computed for verification; vocabulary stays unchanged; caching all responses is impossible for open-ended generation.

Trap: Thinking the draft model must be very accurate — even a 50-70% acceptance rate provides significant speedup since verification is essentially free.

Mnemonic: Speculative decoding = "suggest and verify" — the intern drafts, the expert approves in bulk

## Q38
Type: single
Difficulty: 3
Tags: deployment, multi-gpu
Concepts: deployment-parallelism
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

A team needs to deploy a 70B-parameter model in FP16 for inference. Each GPU has 80GB of memory. What is the minimum number of GPUs needed, and which parallelism strategy should be used?

A. 1 GPU with model compression
B. 2 GPUs with tensor parallelism — the model requires ~140GB (70B × 2 bytes) plus KV cache overhead, which exceeds single-GPU capacity
C. 8 GPUs with data parallelism
D. 4 GPUs with pipeline parallelism only

Answer: B

Hint: 70B parameters × 2 bytes/param (FP16) = 140GB. How many 80GB GPUs does that require?

Explanation: A 70B FP16 model requires ~140GB for weights alone, plus KV cache and runtime memory. Two 80GB GPUs (160GB total) provide sufficient headroom. Tensor parallelism is preferred for inference because it splits each layer's computation across GPUs, maintaining low latency. Pipeline parallelism introduces bubble overhead.

Why others wrong: 1 GPU can't hold 140GB; 8 GPUs with data parallelism replicates the full model on each GPU (still need 2+ per replica); pipeline parallelism alone adds unnecessary latency for just 2 GPUs.

Trap: Forgetting KV cache memory — weights alone need 140GB, but generation requires additional memory for KV cache that grows with sequence length and batch size.

Mnemonic: FP16 model memory = params × 2 bytes, then add ~20% for KV cache and overhead

## Q39
Type: single
Difficulty: 1
Tags: deployment, api-gateway
Concepts: rate-limiting
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

Why is rate limiting essential for a production LLM inference API?

A. To improve model accuracy by reducing the number of requests
B. To prevent resource exhaustion from excessive requests, ensure fair access across users, and protect against denial-of-service attacks
C. To reduce the model's parameter count
D. To automatically retrain the model when request volume increases

Answer: B

Hint: LLM inference is expensive — what happens when one user sends thousands of requests?

Explanation: LLM inference consumes significant GPU resources per request. Without rate limiting, a single user or bot can monopolize resources, causing latency spikes or outages for all users. Rate limiting enforces fair usage quotas, protects infrastructure stability, and mitigates abuse.

Why others wrong: Rate limiting doesn't affect accuracy; it doesn't change the model; retraining is unrelated to request management.

Trap: Setting rate limits too conservatively — overly aggressive limits frustrate legitimate users; find the balance between protection and usability.

Mnemonic: Rate limiting = "traffic lights for API highways" — keep traffic flowing, prevent jams

## Q40
Type: single
Difficulty: 2
Tags: deployment, ab-testing
Concepts: model-versioning
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

When rolling out a new version of a fine-tuned LLM in production, what deployment strategy minimizes risk to users?

A. Immediately replace the old model with the new one for all users
B. Canary deployment — route a small percentage of traffic to the new model, monitor key metrics (latency, error rate, user satisfaction), and gradually increase traffic if metrics are healthy
C. Deploy the new model only on weekends when traffic is lower
D. Run both models indefinitely without ever decommissioning the old one

Answer: B

Hint: How do you test a new model in production without risking all users?

Explanation: Canary deployment routes 1-5% of traffic to the new model initially, allowing real-world validation with limited blast radius. If metrics (TTFT, error rate, safety violations, user ratings) remain healthy, traffic is gradually increased. If issues arise, traffic is instantly rolled back to the proven model.

Why others wrong: Full cutover risks all users; weekend-only deployment doesn't reduce per-request risk; running both indefinitely wastes resources and adds operational complexity.

Trap: Only monitoring technical metrics (latency, errors) during canary — also monitor response quality, safety, and user satisfaction signals.

Mnemonic: Canary deployment = "canary in the coal mine" — send a small group first, ensure safety before everyone follows

## Q41
Type: single
Difficulty: 1
Tags: evaluation, benchmarking
Concepts: llm-benchmarks
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

What is the purpose of using standardized benchmarks (e.g., MMLU, HumanEval, GSM8K) when evaluating LLMs?

A. To train the model on benchmark data for better scores
B. To provide reproducible, comparable measurements of specific capabilities (knowledge, coding, math) across different models and versions
C. To determine the model's optimal GPU requirements
D. To replace the need for any task-specific evaluation

Answer: B

Hint: Why do we use standardized tests in education? The same principle applies to LLM evaluation.

Explanation: Standardized benchmarks enable apples-to-apples comparison of model capabilities across different architectures, sizes, and training approaches. MMLU measures broad knowledge, HumanEval measures coding ability, and GSM8K measures math reasoning. Consistent evaluation methodology makes results reproducible and comparable.

Why others wrong: Training on benchmarks is data contamination; benchmarks don't determine hardware needs; they complement but don't replace task-specific evaluation.

Trap: Over-optimizing for benchmarks ("teaching to the test") — high benchmark scores don't guarantee good real-world performance on your specific use case.

Mnemonic: Benchmarks = "ruler for models" — same measuring tool lets you compare fairly

## Q42
Type: single
Difficulty: 2
Tags: evaluation, perplexity
Concepts: perplexity
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

A language model achieves a perplexity of 15 on a test corpus, while another achieves 45 on the same corpus. What does this comparison tell us?

A. The model with perplexity 45 generates more diverse text
B. The model with perplexity 15 assigns higher probability to the test corpus on average, indicating better language modeling ability for that data
C. Perplexity 45 means the model is 3x more accurate
D. The two models have identical performance since both perplexities are finite

Answer: B

Hint: Lower perplexity means the model is less "surprised" by the data — what does that imply?

Explanation: Perplexity measures how well a model predicts a text corpus — it's the exponentiation of the average negative log-likelihood. Lower perplexity means the model assigns higher probability to the actual next tokens, indicating better modeling of the data distribution. However, perplexity alone doesn't measure generation quality or task performance.

Why others wrong: Diversity isn't measured by perplexity; lower perplexity means better, not higher; both being finite doesn't mean equal performance.

Trap: Using perplexity as the sole quality metric — a model can have low perplexity but still generate repetitive, unsafe, or unhelpful text.

Mnemonic: Perplexity = "confusion score" — lower = less confused = better language modeling

## Q43
Type: single
Difficulty: 2
Tags: responsible-ai, bias
Concepts: bias-detection
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

During evaluation, a team discovers that their LLM generates significantly different quality responses when the prompt mentions different demographic groups. What is the most appropriate next step?

A. Remove all mentions of demographics from the training data
B. Conduct a systematic bias audit across multiple demographic dimensions, document the findings, apply targeted debiasing techniques (e.g., balanced fine-tuning data, output filtering), and re-evaluate
C. Ignore the discrepancy since the model is performing well on benchmarks
D. Add a disclaimer to the API documentation and ship as-is

Answer: B

Hint: You've detected a potential bias — what's the responsible engineering response?

Explanation: A systematic bias audit quantifies the disparity across demographics, identifies root causes (training data imbalance, representation gaps), and informs targeted interventions. Debiasing may include rebalancing training data, applying preference learning with equity-focused data, or adding output guardrails. Re-evaluation confirms the fix works.

Why others wrong: Removing demographics entirely causes the model to default to biased assumptions; ignoring bias is irresponsible; disclaimers don't fix the underlying issue.

Trap: Thinking debiasing is a one-time fix — it requires ongoing monitoring as models are updated and deployed in new contexts.

Mnemonic: Bias found → Audit → Fix → Verify → Monitor — the responsible AI loop

## Q44
Type: single
Difficulty: 1
Tags: responsible-ai, guardrails
Concepts: output-guardrails
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

What is the purpose of implementing output guardrails in a production LLM system?

A. To increase the model's generation speed
B. To filter, modify, or block model outputs that violate safety policies, contain harmful content, or breach compliance requirements before they reach the end user
C. To compress the model's outputs for storage
D. To translate outputs into multiple languages automatically

Answer: B

Hint: The model can generate anything — what sits between the model and the user to catch problems?

Explanation: Output guardrails are post-generation safety layers that inspect model outputs for policy violations (harmful content, PII leakage, hallucinated medical/legal advice, etc.) before delivery. They can block, redact, or flag problematic content, providing a defense-in-depth layer even when the model itself is well-aligned.

Why others wrong: Guardrails add latency, not speed; they're not for compression; translation is a separate capability.

Trap: Relying solely on guardrails without also improving the model — guardrails are a safety net, not a substitute for responsible training and alignment.

Mnemonic: Guardrails = "editorial review before publishing" — catch what the author (model) missed

## Q45
Type: single
Difficulty: 3
Tags: evaluation, human-evaluation
Concepts: human-eval-design
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

When designing a human evaluation protocol for comparing two LLM outputs, which approach produces the most reliable results?

A. Having one expert rate each output on a 1-10 scale
B. Using multiple independent annotators with blinded pairwise comparisons, clear rubrics, inter-annotator agreement measurement, and randomized presentation order
C. Asking the LLM itself to judge which output is better
D. Counting the number of words in each output as a quality proxy

Answer: B

Hint: What makes scientific experiments reliable? Apply the same principles to evaluation.

Explanation: Rigorous human evaluation requires blinding (annotators don't know which model produced which output), multiple annotators (reducing individual bias), clear rubrics (ensuring consistency), inter-annotator agreement (measuring reliability), and randomized order (eliminating position bias). This protocol produces statistically valid comparisons.

Why others wrong: Single-annotator absolute scores are unreliable and biased; LLM-as-judge has its own biases; word count is not a quality metric.

Trap: Assuming LLM-as-judge can replace human evaluation — LLM judges have systematic biases (verbosity preference, position bias, self-preference) that require careful calibration.

Mnemonic: Good human eval = "blind, multiple, rubric'd, agreed, randomized" — BMRAR

## Q46
Type: single
Difficulty: 2
Tags: responsible-ai, hallucination
Concepts: hallucination-mitigation
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

Which combination of techniques is most effective for reducing hallucinations in a deployed LLM?

A. Increasing the model's temperature to generate more creative responses
B. Retrieval-Augmented Generation (RAG) for grounding in source documents, combined with citation requirements and output verification against retrieved sources
C. Training the model for more epochs to memorize more facts
D. Removing all factual questions from the allowed input types

Answer: B

Hint: The model "makes things up" — how do you anchor it to verified information?

Explanation: RAG provides the model with relevant, factual source documents at inference time, grounding its responses in real data. Requiring citations forces the model to attribute claims to specific sources. Output verification cross-checks generated statements against retrieved passages, catching unsupported claims before they reach users.

Why others wrong: Higher temperature increases randomness and hallucination; more training epochs risk overfitting, not better factuality; restricting inputs doesn't fix the underlying issue.

Trap: Thinking RAG eliminates hallucinations entirely — the model can still misinterpret retrieved documents or generate unsupported extrapolations.

Mnemonic: Anti-hallucination = "ground + cite + verify" — anchor to sources, show your work, check the facts

## Q47
Type: single
Difficulty: 2
Tags: evaluation, red-teaming
Concepts: red-teaming
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

What is the primary goal of red-teaming an LLM before production deployment?

A. To improve the model's benchmark scores
B. To systematically probe the model for failure modes, safety vulnerabilities, and harmful outputs by simulating adversarial user behavior
C. To test the model's inference speed under load
D. To verify the model's training data is properly licensed

Answer: B

Hint: In security, red teams try to break things — what's the equivalent for an LLM?

Explanation: Red-teaming involves adversarial testing where evaluators deliberately try to elicit harmful, biased, or policy-violating outputs through creative prompting strategies (jailbreaks, role-playing, multi-turn manipulation). Findings inform safety mitigations, guardrail improvements, and alignment fine-tuning before public deployment.

Why others wrong: Red-teaming is about safety, not benchmarks; load testing is separate; data licensing is a legal review process.

Trap: Doing red-teaming only once before launch — it should be an ongoing process as new attack vectors emerge and the model is updated.

Mnemonic: Red-teaming = "hire hackers to find holes before real attackers do"

## Q48
Type: single
Difficulty: 1
Tags: responsible-ai, pii
Concepts: pii-handling
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

When an LLM system processes user inputs that may contain personally identifiable information (PII), what is the fundamental privacy requirement?

A. Store all PII in plaintext for debugging purposes
B. Implement PII detection and handling — minimize collection, apply anonymization/redaction, enforce data retention policies, and prevent the model from memorizing or regurgitating PII
C. Share PII with third-party analytics services for better insights
D. Display PII in all log files for transparency

Answer: B

Hint: Privacy regulations (GDPR, CCPA) set clear requirements — what are the core principles?

Explanation: Responsible AI systems must detect PII in inputs, minimize what's collected, anonymize or redact before processing/logging, enforce retention limits, and prevent the model from memorizing personal data. This protects users' privacy rights and ensures regulatory compliance (GDPR, CCPA, HIPAA, etc.).

Why others wrong: Plaintext PII storage violates privacy regulations; sharing with third parties without consent is illegal; PII in logs is a data breach risk.

Trap: Assuming the model won't memorize PII from prompts — LLMs can memorize and regurgitate training data, including PII, if not properly handled.

Mnemonic: PII handling = "detect, minimize, redact, retain, prevent" — the 5 privacy pillars

## Q49
Type: single
Difficulty: 3
Tags: evaluation, model-comparison
Concepts: elo-rating
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

A team uses Chatbot Arena-style Elo ratings to compare their fine-tuned model against baseline. After 500 pairwise comparisons, Model A has Elo 1150 and Model B has Elo 1050. What is the correct interpretation?

A. Model A is exactly 10% better than Model B at all tasks
B. Model A is preferred by human judges more often than Model B, with the 100-point gap suggesting roughly 64% win rate, but this doesn't measure specific capability dimensions
C. Model B should be immediately discarded
D. The 100-point difference is always statistically insignificant

Answer: B

Hint: Elo ratings come from chess — what does a rating gap tell you about expected win rates?

Explanation: Elo ratings capture relative preference strength from pairwise comparisons. A 100-point gap corresponds to roughly 64% expected win rate for the higher-rated model. However, Elo is one-dimensional — a model preferred overall may still lose on specific tasks (coding, math). Statistical significance depends on the number of comparisons and confidence intervals.

Why others wrong: Elo doesn't translate to percentage improvement on specific metrics; both models may serve different use cases; 500 comparisons with 100-point gap can be significant depending on confidence intervals.

Trap: Over-interpreting Elo as a comprehensive quality measure — it captures aggregate human preference, not specific capability strengths.

Mnemonic: Elo = "popularity contest score" — tells you who wins more often, not why

## Q50
Type: single
Difficulty: 2
Tags: responsible-ai, compliance
Concepts: ai-governance
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

An enterprise deploying an LLM for automated customer communications in the EU must comply with the AI Act. Which classification most likely applies, and what does it require?

A. Minimal risk — no requirements beyond basic transparency
B. High-risk — the system must maintain technical documentation, implement risk management, ensure data governance, enable human oversight, and undergo conformity assessment
C. Unacceptable risk — the system must be banned entirely
D. The EU AI Act does not apply to LLMs

Answer: B

Hint: The EU AI Act classifies AI systems by risk level — customer-facing automated communication systems fall into which category?

Explanation: Automated customer communication systems that make decisions affecting consumers are likely classified as high-risk under the EU AI Act. This requires comprehensive documentation, risk management systems, data quality controls, human oversight mechanisms, transparency obligations, and potential third-party conformity assessments before deployment.

Why others wrong: Minimal risk applies to chatbots with simple transparency requirements only; outright bans are for social scoring and real-time biometric surveillance; the AI Act explicitly covers general-purpose AI models.

Trap: Assuming chatbots are always "minimal risk" — the classification depends on the use case and potential impact, not the technology type.

Mnemonic: EU AI Act high-risk = "document, manage risk, govern data, enable human oversight, assess conformity" — DMGHA
