---
exam: NCP-GENL
lang: en
---

## Q1
Type: single
Difficulty: 1
Tags: architecture, grouped-query-attention
Concepts: gqa
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

What is the primary advantage of Grouped Query Attention (GQA) compared to standard Multi-Head Attention (MHA)?

A. It increases the number of attention heads to improve accuracy
B. It reduces the KV cache memory by sharing key-value heads across multiple query heads, achieving a balance between MHA quality and Multi-Query Attention efficiency
C. It removes the need for positional encodings
D. It doubles the context window length

Answer: B

Hint: GQA sits between MHA (every head has its own KV) and MQA (all heads share one KV).

Explanation: GQA groups multiple query heads to share a single set of key-value heads, reducing KV cache memory usage during inference while retaining most of MHA's quality. It was introduced in models like Llama 2 70B to balance inference efficiency and model quality.

Why others wrong: GQA doesn't increase heads — it reduces KV heads; positional encodings are orthogonal; context window is determined by position encoding method, not attention grouping.

Trap: Confusing GQA with MQA — MQA uses a single KV head for all queries (more aggressive), while GQA uses groups (more balanced).

Mnemonic: GQA = "Group discount" on KV heads — share keys among query friends

## Q2
Type: single
Difficulty: 2
Tags: architecture, multi-query-attention
Concepts: mqa
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

A team is deploying a latency-sensitive chatbot and needs to minimize memory usage during autoregressive generation. Which attention variant is the most aggressive at reducing KV cache memory?

A. Multi-Head Attention (MHA)
B. Grouped Query Attention (GQA) with 4 groups
C. Multi-Query Attention (MQA)
D. Sliding Window Attention

Answer: C

Hint: Think about which variant uses the fewest key-value heads.

Explanation: MQA uses a single key-value head shared across all query heads, providing the most aggressive KV cache reduction. This makes it ideal for memory-constrained inference, though it may sacrifice some quality compared to MHA or GQA.

Why others wrong: MHA has maximum KV cache (one per head); GQA is a middle ground; sliding window attention limits context range but doesn't reduce the number of KV heads.

Trap: Assuming sliding window attention reduces KV cache the most — it limits attention range but still uses per-head KV pairs within the window.

Mnemonic: MQA = "Minimum Query Attention" overhead — one KV to rule them all

## Q3
Type: single
Difficulty: 2
Tags: architecture, alibi
Concepts: alibi-positional-encoding
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

How does ALiBi (Attention with Linear Biases) handle positional information differently from learned positional embeddings?

A. ALiBi adds a fixed linear penalty to attention scores based on distance between tokens, without any learned positional parameters
B. ALiBi learns position embeddings during pre-training and freezes them during inference
C. ALiBi uses sinusoidal functions identical to the original Transformer
D. ALiBi requires a separate positional embedding layer before the first attention block

Answer: A

Hint: "Linear Biases" in the name is the key — it biases attention by distance.

Explanation: ALiBi directly modifies attention scores by subtracting a head-specific linear penalty proportional to the distance between query and key positions. It requires no learned positional parameters and enables better length generalization than learned embeddings.

Why others wrong: ALiBi is parameter-free for positions; it differs from sinusoidal by being applied to attention logits, not embeddings; it doesn't use a separate embedding layer.

Trap: Thinking ALiBi is just another embedding — it modifies attention scores directly, not the input representations.

Mnemonic: ALiBi = Attention gets a Linear Bias penalty for distance — faraway tokens get penalized

## Q4
Type: single
Difficulty: 3
Tags: architecture, rope-scaling
Concepts: rope-extrapolation
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

An engineer needs to extend a model trained with RoPE at 4K context to handle 16K tokens at inference time without retraining. Which technique is most appropriate?

A. Simply increasing the max_position_embeddings parameter in the config
B. Applying NTK-aware interpolation to scale the RoPE frequency bases
C. Switching from RoPE to learned positional embeddings
D. Doubling the number of attention heads

Answer: B

Hint: RoPE frequency scaling allows extending context without full retraining.

Explanation: NTK-aware interpolation adjusts the rotary position encoding frequencies to handle longer sequences by scaling the base frequency. Unlike naive linear interpolation which degrades quality, NTK-aware scaling preserves the relative position encoding properties and allows 4x or more context extension with minimal fine-tuning.

Why others wrong: Just changing a config parameter doesn't adjust the learned rotary bases; switching position methods requires retraining; attention heads are unrelated to context length.

Trap: Thinking you can just set a longer max_position — the model needs frequency adjustments to generalize to unseen positions.

Mnemonic: NTK scaling = "stretching the ruler" — same marks, wider spacing

## Q5
Type: single
Difficulty: 1
Tags: architecture, decoder-only
Concepts: causal-attention
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

Why do decoder-only language models like GPT use causal (masked) self-attention rather than bidirectional attention?

A. To reduce computational cost by half
B. To prevent the model from "seeing" future tokens during autoregressive generation, maintaining the left-to-right generation property
C. To enable the model to process images alongside text
D. Because bidirectional attention requires more GPU memory

Answer: B

Hint: Autoregressive means predicting the next token — what happens if the model can see it?

Explanation: Causal masking ensures each token can only attend to itself and preceding tokens, which is essential for autoregressive generation where future tokens haven't been generated yet. Without this mask, the model would "cheat" by looking at the answer during training.

Why others wrong: Causal attention doesn't significantly reduce compute (the matrix multiplication is the same size); multimodal capability is unrelated; memory usage is similar.

Trap: Thinking causal masking is just an efficiency trick — it's a fundamental requirement for valid autoregressive training.

Mnemonic: Causal mask = "no spoilers" — can't peek at future tokens

## Q6
Type: single
Difficulty: 2
Tags: architecture, embedding-dimension
Concepts: model-scaling
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

When scaling a transformer model from 7B to 70B parameters, which architectural change contributes most to the parameter increase?

A. Increasing the vocabulary size from 32K to 128K tokens
B. Increasing the hidden dimension and number of layers
C. Adding more positional encoding dimensions
D. Switching from float32 to float16 weights

Answer: B

Hint: Parameter count is dominated by weight matrices whose size depends on hidden dimension.

Explanation: The vast majority of transformer parameters reside in the feed-forward and attention projection matrices, which scale with hidden dimension squared and linearly with the number of layers. Going from 7B to 70B typically involves roughly doubling the hidden dimension and increasing layers, which causes a ~10x parameter increase.

Why others wrong: Vocabulary embedding is a small fraction; positional encodings add minimal parameters; data type affects memory, not parameter count.

Trap: Overestimating vocabulary's contribution — even at 128K vocab, the embedding matrix is small relative to the stacked transformer layers.

Mnemonic: Parameters live in layers × hidden² — scale those to grow the model

## Q7
Type: single
Difficulty: 3
Tags: architecture, flash-decoding
Concepts: flash-decoding
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

During autoregressive decoding of long sequences, a single query attends to thousands of cached key-value pairs. How does Flash Decoding improve upon standard FlashAttention for this scenario?

A. It reduces the number of KV pairs by pruning unimportant tokens
B. It parallelizes the attention computation across the key-value sequence dimension by splitting KV into blocks processed by separate thread blocks, then reducing partial results
C. It uses approximate attention to skip distant tokens
D. It compresses the KV cache using quantization before computing attention

Answer: B

Hint: Standard FlashAttention parallelizes over batch and heads — Flash Decoding adds parallelism over the sequence dimension.

Explanation: Flash Decoding splits the KV cache into blocks and computes partial attention results in parallel across GPU thread blocks along the sequence dimension, then performs a reduction. This maximizes GPU utilization during the decode phase when batch size per head is just 1, addressing the low parallelism of standard decoding.

Why others wrong: It doesn't prune tokens; it's exact attention, not approximate; KV compression is a separate technique (e.g., KV cache quantization).

Trap: Confusing Flash Decoding with FlashAttention — FlashAttention optimizes the prefill phase; Flash Decoding optimizes the per-token decode phase.

Mnemonic: Flash Decoding = "parallelize the long KV lookup" during generation

## Q8
Type: single
Difficulty: 2
Tags: prompting, tree-of-thought
Concepts: tree-of-thought
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

How does Tree-of-Thought (ToT) prompting differ from Chain-of-Thought (CoT) prompting?

A. ToT uses shorter prompts to save tokens
B. ToT explores multiple reasoning paths in parallel and uses evaluation/backtracking to select the best path, while CoT follows a single linear chain
C. ToT only works with encoder-decoder models
D. ToT requires fine-tuning, while CoT works zero-shot

Answer: B

Hint: Think "tree" vs "chain" — branching vs linear.

Explanation: Tree-of-Thought extends CoT by generating multiple reasoning branches at each step, evaluating them, and potentially backtracking from dead ends. This structured exploration is particularly effective for problems requiring search, such as puzzles and planning tasks, where the first reasoning path isn't always optimal.

Why others wrong: ToT actually uses more tokens due to branching; it works with decoder-only models; both can be applied without fine-tuning.

Trap: Thinking CoT with self-consistency (multiple samples) is the same as ToT — ToT has deliberate branching and evaluation at each step, not just sampling multiple complete chains.

Mnemonic: CoT = one path through the forest; ToT = explore multiple trails, backtrack from dead ends

## Q9
Type: single
Difficulty: 1
Tags: prompting, system-prompt
Concepts: system-prompt-design
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

What is the primary purpose of a system prompt in a chat-based LLM deployment?

A. To compress the model weights for faster inference
B. To establish the model's persona, behavioral constraints, and output format before user interaction begins
C. To fine-tune the model on new data
D. To increase the model's context window

Answer: B

Hint: The system prompt sets the "rules of engagement" before any user message.

Explanation: System prompts define the model's behavior, persona, safety guidelines, and output format. They are processed before user messages and persist throughout the conversation, acting as persistent instructions that shape all subsequent responses.

Why others wrong: System prompts don't affect model weights or compression; they aren't fine-tuning; context window is an architectural property.

Trap: Thinking system prompts are the same as fine-tuning — they guide behavior at inference time without changing model weights.

Mnemonic: System prompt = "stage directions" for the AI actor — set the scene before the play begins

## Q10
Type: single
Difficulty: 3
Tags: architecture, sparse-attention
Concepts: sparse-attention-patterns
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

A research team wants to process documents with 128K tokens efficiently. They're considering different attention patterns. Which approach correctly describes sliding window attention with global tokens?

A. Every token attends to all other tokens, but with lower precision
B. Each token attends to a fixed-size local window of neighbors, while designated global tokens (like [CLS] or every nth token) attend to and are attended by all positions
C. Tokens are randomly selected for attention at each layer
D. Only the first and last 1024 tokens receive attention

Answer: B

Hint: "Sliding window + global" combines local connectivity with strategic full-range attention.

Explanation: Sliding window attention limits each token's attention to a local neighborhood (e.g., 4096 tokens), reducing complexity from O(n²) to O(n×w). Global tokens break this locality by attending to all positions, allowing information to flow across the entire sequence. This pattern is used in models like Longformer and BigBird.

Why others wrong: Lower precision attention is a different optimization; random attention (like in BigBird) is one component, not the full pattern; truncating to first/last tokens loses middle content entirely.

Trap: Thinking sliding window alone is sufficient — without global tokens, information can't flow between distant parts of the document.

Mnemonic: Sliding window = "local gossip" + global tokens = "town crier" that broadcasts to everyone

## Q11
Type: single
Difficulty: 2
Tags: prompting, retrieval-augmented
Concepts: rag-prompting
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

When constructing a RAG prompt, a developer notices the model sometimes ignores the retrieved context and answers from its parametric knowledge. What is the most effective mitigation?

A. Remove all retrieved context and rely solely on the model's training data
B. Add explicit instructions such as "Answer ONLY based on the provided context. If the context doesn't contain the answer, say 'I don't know'"
C. Increase the model temperature to 1.5
D. Use a smaller model that has less parametric knowledge

Answer: B

Hint: The model needs explicit grounding instructions to prioritize context over memory.

Explanation: Explicit grounding instructions in the prompt tell the model to prioritize retrieved context over its parametric knowledge and to acknowledge when the context is insufficient. This reduces hallucination from parametric memory and improves faithfulness to the provided documents.

Why others wrong: Removing context defeats RAG's purpose; high temperature increases randomness and hallucination; a smaller model may still ignore context without proper prompting.

Trap: Thinking RAG automatically makes models faithful to context — without explicit instructions, models default to blending context with parametric knowledge.

Mnemonic: RAG grounding = "read the textbook, not your memory" instruction

## Q12
Type: multi
Difficulty: 3
Tags: architecture, attention-optimization
Concepts: attention-variants
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

Which TWO of the following are true about FlashAttention compared to standard attention? (Select two)

A. It reduces the theoretical computational complexity from O(n²) to O(n log n)
B. It avoids materializing the full n×n attention matrix in GPU HBM by using tiling and recomputation
C. It produces mathematically exact results identical to standard attention
D. It requires specialized hardware not available in standard NVIDIA GPUs

Answer: B, C

Hint: FlashAttention is an IO-aware optimization, not an approximation.

Explanation: FlashAttention uses tiling to compute attention block-by-block in fast SRAM, avoiding the need to store the full attention matrix in slower HBM. Critically, it produces numerically identical results to standard attention — it's a memory-IO optimization, not an approximation. It works on standard NVIDIA GPUs (A100, H100, etc.).

Why others wrong: FlashAttention doesn't change computational complexity (still O(n²) FLOPs); it runs on standard NVIDIA GPUs.

Trap: Assuming FlashAttention is approximate because it avoids materializing the full matrix — it uses careful tiling and recomputation to be exact.

Mnemonic: FlashAttention = "same math, smarter memory" — exact results, less HBM traffic

## Q13
Type: single
Difficulty: 2
Tags: prompting, structured-output
Concepts: structured-generation
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

An API service needs the LLM to return valid JSON every time. Which approach provides the strongest guarantee of valid JSON output?

A. Adding "Please return valid JSON" to the prompt
B. Using constrained decoding (grammar-guided generation) that restricts the token vocabulary at each step to only tokens that would produce valid JSON
C. Setting temperature to 0
D. Post-processing the output with a JSON repair library

Answer: B

Hint: Which approach prevents invalid tokens from being generated in the first place?

Explanation: Constrained decoding (also called grammar-guided generation or structured output) modifies the sampling step to only allow tokens that conform to a specified grammar (like JSON schema). This guarantees 100% valid output by construction, unlike prompt-based approaches that rely on the model's compliance.

Why others wrong: Prompt instructions don't guarantee compliance; temperature=0 is deterministic but can still produce invalid JSON; post-processing is a fallback, not a guarantee.

Trap: Relying on prompts for structured output in production — even the best prompts occasionally produce malformed output.

Mnemonic: Constrained decoding = "guardrails on the highway" — can't leave the valid JSON lane

## Q14
Type: single
Difficulty: 1
Tags: architecture, layer-normalization
Concepts: pre-norm-vs-post-norm
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

Most modern LLMs (like LLaMA and GPT) use Pre-LayerNorm instead of the original Transformer's Post-LayerNorm. What is the main benefit?

A. It reduces the number of parameters
B. It provides more stable training gradients, making training easier without careful learning rate warmup
C. It produces higher-quality outputs at inference time
D. It enables the model to process longer sequences

Answer: B

Hint: Where you place normalization affects gradient flow during training.

Explanation: Pre-LayerNorm applies normalization before the attention and feed-forward sublayers, which creates a more direct gradient path through the residual connections. This stabilizes training, especially for very deep models, and reduces the need for careful learning rate warmup schedules that Post-LayerNorm requires.

Why others wrong: Parameter count is the same; output quality depends on training, not just norm placement; sequence length is orthogonal.

Trap: Thinking Pre-Norm is strictly better at inference — the benefit is primarily during training stability.

Mnemonic: Pre-Norm = "normalize first, then transform" — smoother gradients flow through

## Q15
Type: single
Difficulty: 3
Tags: architecture, speculative-sampling
Concepts: speculative-decoding-math
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

In speculative decoding, a draft model generates K candidate tokens that are then verified by the target model in a single forward pass. If the draft model's acceptance rate per token is p, what is the expected number of accepted tokens per verification step?

A. K × p
B. p / (1 - p), capped at K
C. (1 - p^(K+1)) / (1 - p) minus 1 correction terms
D. K if p > 0.5, otherwise 0

Answer: A

Hint: Each draft token is independently accepted with probability p.

Explanation: With K draft tokens and an independent acceptance probability p per token, the expected number of accepted tokens follows a geometric-like distribution. In the simplified case, E[accepted] ≈ K×p. The actual formula accounts for sequential rejection (once a token is rejected, subsequent tokens are discarded), but K×p is the standard first-order approximation used in practice.

Why others wrong: p/(1-p) is the expected run length of a geometric distribution without the cap context; option C overcomplicates it; K if p>0.5 is a threshold rule, not an expectation.

Trap: Forgetting that rejection of token i causes all tokens i+1..K to be discarded — the tokens aren't independently accepted in practice, but K×p is the standard approximation.

Mnemonic: Speculative acceptance ≈ "draft count × hit rate"

## Q16
Type: single
Difficulty: 2
Tags: prompting, self-consistency
Concepts: self-consistency-decoding
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

What is the key idea behind self-consistency as a decoding strategy for reasoning tasks?

A. The model verifies its own output by asking itself follow-up questions
B. Multiple reasoning paths are sampled using temperature > 0, and the most frequent final answer is selected via majority voting
C. The model compares its answer against a retrieval database
D. The output is constrained to be consistent with the training data distribution

Answer: B

Hint: "Self-consistency" samples diverse paths and takes the majority vote.

Explanation: Self-consistency generates multiple chain-of-thought reasoning paths by sampling with temperature > 0, then selects the final answer that appears most frequently across all paths. This leverages the intuition that correct reasoning tends to converge on the same answer through different paths, while errors are more random.

Why others wrong: It doesn't involve self-questioning; no retrieval database is used; it's a sampling strategy, not a training constraint.

Trap: Confusing self-consistency with beam search — beam search finds the most likely sequence, while self-consistency samples diverse paths and votes on answers.

Mnemonic: Self-consistency = "ask the class and go with the most popular answer"

## Q17
Type: single
Difficulty: 2
Tags: architecture, kv-cache-quantization
Concepts: kv-cache-compression
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

To reduce KV cache memory during inference on long sequences, a team considers quantizing the cached key and value tensors. What is the primary trade-off?

A. Quantized KV caches are slower to read because they need dequantization
B. The model produces deterministic outputs instead of stochastic ones
C. Memory savings from lower precision (e.g., FP8 or INT8) come at the cost of potential minor quality degradation on tasks requiring precise attention patterns
D. The context window length is automatically doubled

Answer: C

Hint: Lower precision = less memory, but attention scores may be less precise.

Explanation: KV cache quantization reduces the per-token memory footprint (e.g., from FP16 to FP8 or INT4), enabling longer sequences or larger batch sizes. The trade-off is that quantized attention computations may introduce small numerical errors, potentially affecting tasks that depend on precise attention patterns, though the impact is often minimal in practice.

Why others wrong: Dequantization overhead is negligible compared to memory savings; quantization doesn't change stochasticity; context window is a model property, not determined by cache precision.

Trap: Assuming KV cache quantization always hurts quality — in practice, FP8 KV caches often have negligible quality impact.

Mnemonic: KV quant = "compress the memory shelf" — fits more tokens, slightly blurrier attention

## Q18
Type: single
Difficulty: 1
Tags: architecture, tokenizer-types
Concepts: bpe-vs-sentencepiece
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

What is the key difference between Byte-Pair Encoding (BPE) and a character-level tokenizer for LLMs?

A. BPE can only handle English text
B. BPE iteratively merges frequent character pairs into subword tokens, creating a variable-length vocabulary that balances token count and coverage
C. Character-level tokenizers always produce shorter sequences
D. BPE requires a separate tokenizer for each language

Answer: B

Hint: BPE builds subwords bottom-up by merging the most common pairs.

Explanation: BPE starts with individual characters and iteratively merges the most frequent adjacent pairs to create subword tokens. This produces a compact vocabulary that handles rare words through subword decomposition while keeping common words as single tokens, unlike character-level tokenizers which treat every character individually.

Why others wrong: BPE is language-agnostic; character-level produces longer sequences (one token per character); BPE uses a shared vocabulary across languages.

Trap: Thinking BPE is word-level — it's subword-level, splitting rare words while keeping common ones intact.

Mnemonic: BPE = "Best Pairs Emerge" — merge the most popular character couples

## Q19
Type: single
Difficulty: 3
Tags: architecture, mixture-of-experts-routing
Concepts: moe-load-balancing
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

In a Mixture-of-Experts (MoE) transformer, the router sometimes sends most tokens to a few popular experts while others are underutilized. What is the standard solution?

A. Remove the underutilized experts and keep only the popular ones
B. Add an auxiliary load-balancing loss that penalizes uneven token distribution across experts
C. Increase the number of experts until all are equally utilized
D. Use random routing instead of learned routing

Answer: B

Hint: The load-balancing loss is a regularization term added during training.

Explanation: An auxiliary load-balancing loss penalizes the router when token distribution across experts is skewed. This is typically formulated as the dot product of the fraction of tokens routed to each expert and the average routing probability for each expert, encouraging uniform utilization and preventing expert collapse.

Why others wrong: Removing experts wastes capacity; adding more experts doesn't fix the routing imbalance; random routing eliminates specialization benefits.

Trap: Thinking load balancing only matters for compute — collapsed experts (receiving few tokens) also degrade model quality because their parameters are undertrained.

Mnemonic: Load-balancing loss = "fairness tax" on the router — spread the work or pay a penalty

## Q20
Type: single
Difficulty: 2
Tags: prompting, constitutional-ai
Concepts: constitutional-prompting
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

In Constitutional AI prompting, what is the role of the "critique and revision" step?

A. An external classifier filters harmful outputs after generation
B. The model is prompted to critique its own initial response against a set of principles, then revise it to better align with those principles
C. A human reviewer manually edits every response
D. The model is retrained on the critique feedback

Answer: B

Hint: Constitutional AI makes the model its own reviewer — critique, then revise.

Explanation: Constitutional AI uses a two-step self-improvement process: the model first generates a response, then is prompted to critique it against a set of constitutional principles (like helpfulness, harmlessness), and finally revises the response to address the critique. This can be applied both at inference time (prompting) and during RLAIF training.

Why others wrong: It's self-critique, not an external classifier; no human is in the loop per-response; the prompting version doesn't involve retraining.

Trap: Confusing Constitutional AI prompting with RLHF — Constitutional AI can work purely at inference time through prompting, without model weight changes.

Mnemonic: Constitutional AI = "model as its own judge" — generate, critique, revise

## Q21
Type: single
Difficulty: 1
Tags: data-preparation, deduplication
Concepts: training-data-dedup
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

Why is deduplication of training data important before fine-tuning an LLM?

A. It reduces the file size to save storage costs
B. Duplicate data can cause the model to memorize and overfit to repeated examples, reducing generalization and potentially causing privacy risks through verbatim memorization
C. Deduplication always improves training speed by 10x
D. It is required by GPU hardware to avoid memory errors

Answer: B

Hint: Repeated data in training leads to memorization — and that has consequences.

Explanation: Duplicate training examples cause the model to disproportionately memorize those examples, leading to overfitting and reduced generalization. Additionally, duplicated personal or sensitive data increases the risk of the model reproducing that data verbatim during inference, creating privacy concerns.

Why others wrong: Storage savings are a side benefit, not the primary reason; speedup varies; hardware doesn't require deduplication.

Trap: Thinking deduplication only matters for large-scale pre-training — it's equally important for fine-tuning datasets where a few duplicates can dominate a small dataset.

Mnemonic: Deduplicate = "don't let the model develop favorite memories"

## Q22
Type: single
Difficulty: 2
Tags: fine-tuning, instruction-tuning
Concepts: instruction-following
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

What is the key difference between instruction tuning and standard supervised fine-tuning (SFT) on task-specific data?

A. Instruction tuning uses reinforcement learning while SFT uses gradient descent
B. Instruction tuning trains on diverse (instruction, response) pairs across many tasks to develop general instruction-following ability, while task-specific SFT trains on a single task format
C. SFT requires more data than instruction tuning
D. Instruction tuning can only be done on models larger than 70B parameters

Answer: B

Hint: Instruction tuning is about breadth (many tasks), task SFT is about depth (one task).

Explanation: Instruction tuning exposes the model to a wide variety of tasks formatted as natural language instructions, developing a general ability to follow instructions. Task-specific SFT focuses on optimizing performance for a single task format. Models like FLAN-T5 and InstructGPT demonstrate how instruction tuning enables zero-shot generalization to new tasks.

Why others wrong: Both use gradient descent; data requirements depend on the task; instruction tuning works at all model scales.

Trap: Thinking instruction tuning is the same as RLHF — instruction tuning is supervised learning on instruction-response pairs, while RLHF uses a reward model.

Mnemonic: Instruction tuning = "learn to follow any recipe"; task SFT = "master one dish"

## Q23
Type: single
Difficulty: 2
Tags: fine-tuning, peft-comparison
Concepts: parameter-efficient-methods
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

A company wants to fine-tune a 70B parameter model on a single A100 80GB GPU. Which approach enables this?

A. Full fine-tuning with gradient accumulation
B. QLoRA — quantizing the base model to 4-bit and training low-rank adapters in FP16/BF16
C. Standard LoRA with the model in FP32
D. Prompt tuning with the model in FP16

Answer: B

Hint: 70B in FP16 needs ~140GB just for weights — you need quantization to fit on 80GB.

Explanation: QLoRA combines 4-bit quantization (NF4 data type) of the base model with LoRA adapters trained in higher precision. The 4-bit model fits in ~35GB, leaving room for optimizer states and activations on an 80GB GPU. Standard LoRA in FP32 would need 280GB just for weights, and full fine-tuning is even larger.

Why others wrong: Full fine-tuning of 70B needs hundreds of GBs; standard LoRA in FP32 needs 280GB for weights alone; prompt tuning in FP16 still needs 140GB for the model.

Trap: Assuming LoRA alone is enough — LoRA reduces trainable parameters but the full model must still fit in memory. QLoRA solves this with quantization.

Mnemonic: QLoRA = "Quantize to fit, LoRA to adapt" — two tricks in one

## Q24
Type: single
Difficulty: 3
Tags: fine-tuning, orpo
Concepts: orpo-alignment
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

How does ORPO (Odds Ratio Preference Optimization) differ from DPO for preference alignment?

A. ORPO requires a separate reward model while DPO does not
B. ORPO combines supervised fine-tuning and preference alignment into a single training phase by adding an odds-ratio-based penalty to the SFT loss, eliminating the need for a separate alignment step
C. ORPO can only be used with encoder-decoder models
D. ORPO requires more preference data than DPO

Answer: B

Hint: ORPO merges SFT and alignment — DPO is a separate step after SFT.

Explanation: ORPO modifies the standard cross-entropy SFT loss to include an odds-ratio penalty that discourages generating rejected responses relative to chosen ones. This means you can achieve both instruction following and preference alignment in a single training run, rather than DPO's two-stage approach (SFT first, then DPO).

Why others wrong: Neither ORPO nor DPO uses a separate reward model (that's RLHF); ORPO works with decoder-only models; ORPO and DPO use similar preference data.

Trap: Assuming all alignment methods need a separate reward model — DPO and ORPO both skip the reward model, but ORPO also skips the separate SFT stage.

Mnemonic: ORPO = "One Round Preference Optimization" — SFT + alignment in one shot

## Q25
Type: single
Difficulty: 1
Tags: data-preparation, data-quality
Concepts: data-filtering
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

When preparing a fine-tuning dataset for an enterprise customer support chatbot, which data quality check is LEAST important?

A. Removing personally identifiable information (PII) from customer messages
B. Ensuring instructions and responses are factually consistent
C. Maximizing the total number of training examples regardless of quality
D. Filtering out toxic or inappropriate language in responses

Answer: C

Hint: Quality beats quantity — a small clean dataset often outperforms a large noisy one.

Explanation: Research consistently shows that fine-tuning data quality matters far more than quantity. A few thousand high-quality examples often outperform tens of thousands of noisy ones. PII removal, factual consistency, and toxicity filtering are all critical for enterprise deployments, while simply maximizing count can introduce noise and harmful patterns.

Why others wrong: PII removal is essential for privacy compliance; factual consistency prevents hallucination; toxicity filtering prevents harmful outputs.

Trap: The "more data is always better" assumption from pre-training doesn't apply to fine-tuning — curation matters more.

Mnemonic: Fine-tuning data = "chef's tasting menu" not "all-you-can-eat buffet"

## Q26
Type: single
Difficulty: 2
Tags: fine-tuning, adapter-merging
Concepts: lora-merging
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

After training a LoRA adapter, a team wants to deploy it without the runtime overhead of separate adapter weights. What technique achieves this?

A. Pruning the adapter weights to zero
B. Merging the LoRA adapter matrices (A and B) back into the base model weights: W_new = W_base + α × B × A
C. Converting the LoRA adapter to a prompt prefix
D. Distilling the adapter into a smaller model

Answer: B

Hint: LoRA's low-rank matrices can be multiplied and added directly to the base weights.

Explanation: LoRA adapters consist of two low-rank matrices (A and B) that produce a delta: ΔW = B × A. After training, this delta can be scaled by α and added directly to the original weight matrix, producing a single merged model with no runtime adapter overhead. This is possible because LoRA modifies the same weight space as the original model.

Why others wrong: Pruning to zero removes the adaptation entirely; prompt prefixes are a different PEFT method; distillation requires a separate training process.

Trap: Thinking merged models are approximate — the merge produces mathematically identical outputs to the separate adapter approach.

Mnemonic: LoRA merge = "bake the seasoning into the dough" — same flavor, no separate spice rack

## Q27
Type: single
Difficulty: 3
Tags: fine-tuning, data-contamination
Concepts: benchmark-contamination
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

An engineer discovers that the fine-tuning dataset accidentally contains examples from the MMLU benchmark. What is the primary risk?

A. The model will refuse to answer MMLU-style questions
B. MMLU evaluation scores will be artificially inflated, giving a misleading measure of the model's actual reasoning ability
C. The model will only be able to answer multiple-choice questions
D. Training will fail due to data format conflicts

Answer: B

Hint: If the model has seen the test questions during training, test scores are meaningless.

Explanation: Benchmark contamination (training on test data) means the model memorizes answers rather than developing genuine understanding. MMLU scores become unreliable as performance metrics, potentially leading to overconfident deployment of a model that actually can't generalize to novel questions.

Why others wrong: The model won't refuse questions; it won't be limited to multiple-choice; training will proceed normally but produce misleading results.

Trap: Thinking contamination only matters if the model memorizes exact answers — even partial overlap biases the evaluation and overstates capability.

Mnemonic: Benchmark contamination = "studying the answer key" — you pass the test but didn't learn

## Q28
Type: multi
Difficulty: 2
Tags: fine-tuning, dpo-mechanics
Concepts: dpo-training
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

Which TWO statements about Direct Preference Optimization (DPO) are correct? (Select two)

A. DPO requires training a separate reward model before the policy can be optimized
B. DPO directly optimizes the policy model using paired preference data (chosen vs rejected responses)
C. DPO uses the reference model (the SFT checkpoint) as an implicit reward through the KL divergence term
D. DPO performs online sampling during training, generating new responses at each step

Answer: B, C

Hint: DPO's key insight is reparameterizing the reward to eliminate the reward model.

Explanation: DPO's mathematical insight is that the optimal policy under a KL-constrained reward maximization can be expressed as a function of the policy itself relative to the reference model, eliminating the need for an explicit reward model. It trains directly on static preference pairs (chosen/rejected), using the SFT model as the reference in its loss function.

Why others wrong: DPO explicitly avoids training a reward model (that's RLHF); DPO uses offline/static preference data, not online sampling (that's online RLHF or RLHF with PPO).

Trap: Confusing DPO with RLHF — DPO is specifically designed to skip the reward model step that RLHF requires.

Mnemonic: DPO = "Direct" means no middleman reward model — compare chosen vs rejected directly

## Q29
Type: single
Difficulty: 2
Tags: data-preparation, synthetic-data
Concepts: synthetic-data-generation
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

A team needs to fine-tune a model for a specialized medical domain but has limited real data. They plan to generate synthetic training data using a larger model. What is the most critical risk to mitigate?

A. The synthetic data will be too large to fit in memory
B. The synthetic data may amplify the teacher model's biases and hallucinations, creating a feedback loop where errors become "ground truth"
C. Synthetic data always produces worse models than real data
D. The resulting model will have the same size as the teacher model

Answer: B

Hint: A student learning from a flawed teacher inherits and amplifies the flaws.

Explanation: Synthetic data generated by LLMs can contain factual errors, hallucinations, and biases from the teacher model. When used as training data, these errors become reinforced in the student model, potentially making them harder to detect because they appear with high confidence. In medical domains, this is particularly dangerous.

Why others wrong: Data size is manageable with streaming; synthetic data can be effective when curated and verified; model size is independent of training data source.

Trap: Assuming a larger teacher model produces perfect synthetic data — even the best models hallucinate, and those hallucinations become "facts" in the student's training.

Mnemonic: Synthetic data risk = "photocopy of a photocopy" — each generation degrades quality

## Q30
Type: single
Difficulty: 1
Tags: fine-tuning, learning-rate-schedule
Concepts: warmup-cosine-decay
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

Why is learning rate warmup commonly used at the start of LLM fine-tuning?

A. To increase the model's vocabulary size gradually
B. To allow the optimizer's moment estimates to stabilize before taking large gradient steps, preventing early training instability
C. To save GPU memory during the first few steps
D. To evaluate the model before training begins

Answer: B

Hint: Adam optimizer's running averages are initialized to zero — they need time to become reliable.

Explanation: At the start of training, Adam's first and second moment estimates are initialized to zero and are unreliable, which can cause excessively large parameter updates. Warmup gradually increases the learning rate, giving these estimates time to stabilize. This prevents catastrophic parameter changes that can derail fine-tuning, especially important when adapting pre-trained models.

Why others wrong: Vocabulary doesn't change during fine-tuning; warmup doesn't affect memory; evaluation is separate from warmup.

Trap: Thinking warmup is optional for fine-tuning — it's even more important than pre-training because the pre-trained weights can be destroyed by large initial updates.

Mnemonic: Warmup = "stretch before exercise" — prepare the optimizer before going full speed

## Q31
Type: single
Difficulty: 2
Tags: data-preparation, tokenizer-training
Concepts: tokenizer-vocabulary
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

A team is fine-tuning a model primarily trained on English text for a Japanese customer support application. They notice poor tokenization of Japanese text. What is the best approach?

A. Replace the tokenizer with a Japanese-only tokenizer and retrain from scratch
B. Extend the existing tokenizer vocabulary with additional Japanese tokens and continue pre-training on Japanese data before fine-tuning
C. Convert all Japanese text to romaji (Latin characters) before training
D. Use character-level tokenization for all text

Answer: B

Hint: You can expand a tokenizer's vocabulary without starting from scratch.

Explanation: Extending the tokenizer vocabulary with domain-specific tokens and performing continued pre-training allows the model to efficiently represent Japanese text while preserving its existing knowledge. This is much more practical than retraining from scratch, and avoids the quality loss from transliteration or character-level tokenization.

Why others wrong: Replacing the tokenizer requires retraining all embeddings from scratch; romaji loses semantic nuance; character-level tokenization creates very long sequences.

Trap: Thinking tokenizer vocabulary is fixed forever — vocabulary extension with continued pre-training is a well-established technique (used in LLaMA adaptations for non-English languages).

Mnemonic: Tokenizer extension = "add new words to the dictionary" — don't rewrite the whole book

## Q32
Type: single
Difficulty: 3
Tags: fine-tuning, catastrophic-forgetting-mitigation
Concepts: replay-regularization
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

A model fine-tuned for legal document analysis has lost its general conversation ability. Which combination of techniques best mitigates catastrophic forgetting while maintaining task performance?

A. Training for more epochs on the legal data
B. Mixing a small fraction of general-domain data into the fine-tuning dataset and using a lower learning rate than pre-training
C. Increasing the model size
D. Removing all regularization to let the model fully adapt

Answer: B

Hint: The cure for forgetting is a reminder — keep some general data in the mix.

Explanation: Data replay (mixing in general-domain examples) maintains the model's broad capabilities while it learns the new task. A lower learning rate prevents aggressive weight updates that overwrite pre-trained knowledge. This combination preserves general abilities while achieving strong task performance, and is the standard approach in production fine-tuning.

Why others wrong: More epochs on task data worsens forgetting; model size doesn't fix the learning dynamics; removing regularization accelerates forgetting.

Trap: Thinking you can fine-tune exclusively on task data and retain general abilities — without replay data, the model inevitably specializes and forgets.

Mnemonic: Catastrophic forgetting cure = "study new subject + review old notes" with "gentle pace"

## Q33
Type: single
Difficulty: 2
Tags: fine-tuning, multi-task
Concepts: multi-task-fine-tuning
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

When fine-tuning a single model on multiple tasks simultaneously, what is the primary challenge in dataset mixing?

A. Each task requires a different model architecture
B. Tasks with more training data dominate the gradient updates, causing the model to underperform on smaller-dataset tasks unless data proportions are carefully balanced
C. Multi-task training always degrades single-task performance
D. The tokenizer must be retrained for each task

Answer: B

Hint: Imbalanced data proportions lead to imbalanced learning — some tasks get "more attention."

Explanation: When datasets vary significantly in size, larger datasets contribute more gradient updates, biasing the model toward those tasks. Techniques like temperature-based sampling (upsampling small datasets, downsampling large ones) help balance learning across tasks. Without this, small but important tasks may show poor performance.

Why others wrong: All tasks share the same architecture; multi-task can actually improve through transfer; the tokenizer is shared.

Trap: Assuming equal mixing is optimal — the best proportions often oversample smaller datasets relative to their natural frequency.

Mnemonic: Multi-task mixing = "class balancing" — give minorities extra representation

## Q34
Type: single
Difficulty: 1
Tags: data-preparation, annotation-quality
Concepts: inter-annotator-agreement
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

When creating preference data for alignment fine-tuning, why is it important to have multiple annotators label each example?

A. To increase the total number of examples
B. To measure inter-annotator agreement, which indicates labeling reliability — low agreement suggests ambiguous examples or unclear guidelines
C. To ensure the dataset is large enough for training
D. Because a single annotator cannot understand the prompts

Answer: B

Hint: Agreement between annotators measures data quality, not just quantity.

Explanation: Inter-annotator agreement (measured by metrics like Cohen's kappa) indicates how consistently annotators apply the labeling criteria. Low agreement reveals ambiguous guidelines, subjective preferences, or unclear examples that may inject noise into training. Filtering or relabeling low-agreement examples improves dataset quality.

Why others wrong: Multiple annotators don't increase example count; dataset size is independent; individual annotators are capable.

Trap: Using majority vote without checking agreement — if annotators consistently disagree, the majority label may not be meaningful.

Mnemonic: Inter-annotator agreement = "if judges disagree, the scoring rules are broken"

## Q35
Type: multi
Difficulty: 3
Tags: fine-tuning, lora-hyperparameters
Concepts: lora-rank-alpha
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

Which TWO statements about LoRA hyperparameters are correct? (Select two)

A. The rank r determines the dimensionality of the low-rank matrices, with higher r allowing more expressive adaptations at the cost of more trainable parameters
B. The scaling factor alpha should always equal the rank r for optimal performance
C. LoRA adapters are typically applied to attention projection matrices (Q, K, V, O) but can be applied to any linear layer
D. Increasing the rank r beyond 64 always improves performance regardless of the task

Answer: A, C

Hint: Rank controls capacity; alpha controls the learning rate of the adaptation.

Explanation: The rank r sets the bottleneck dimension of the A and B matrices, controlling the adaptation's expressiveness (higher r = more parameters = more capacity). LoRA is most commonly applied to attention projections but can target any linear layer including feed-forward layers. Alpha is a scaling factor (effective scaling = alpha/r) that controls the magnitude of the adaptation, and optimal values vary by task.

Why others wrong: Alpha doesn't need to equal r — common practice is alpha = 2×r or different values; higher rank has diminishing returns and can overfit.

Trap: Setting r very high "just in case" — high rank can overfit on small datasets and negates LoRA's parameter efficiency advantage.

Mnemonic: r = "how much new knowledge" (capacity); alpha = "how strongly applied" (magnitude)

## Q36
Type: single
Difficulty: 2
Tags: data-preparation, prompt-template
Concepts: chat-template-format
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

When fine-tuning a chat model, why is it critical to use the exact same chat template (special tokens, role markers) during fine-tuning as will be used during inference?

A. The tokenizer crashes with different templates
B. The model learns to associate specific token patterns with turn boundaries and role behaviors — mismatched templates cause the model to not recognize when to stop generating or which role to adopt
C. Different templates produce different model architectures
D. Chat templates only affect logging, not model behavior

Answer: B

Hint: Special tokens like <|im_start|> and <|im_end|> are signals the model learns to follow.

Explanation: Chat models rely on specific token patterns to identify speaker turns, know when to stop generating, and distinguish system instructions from user messages. If the inference template differs from training (e.g., different role markers or missing stop tokens), the model won't recognize turn boundaries, leading to role confusion, endless generation, or ignoring system prompts.

Why others wrong: The tokenizer handles any template; architecture is unchanged; templates fundamentally affect generation behavior.

Trap: Assuming templates are just formatting — they're control signals that the model has been trained to respond to.

Mnemonic: Chat template = "stage cues" — wrong cues make the actor miss their lines

## Q37
Type: single
Difficulty: 3
Tags: fine-tuning, reward-hacking
Concepts: reward-model-overoptimization
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

During RLHF training, the model's reward scores keep increasing but human evaluators rate the outputs as decreasing in quality. What is this phenomenon called and how is it addressed?

A. Mode collapse — solved by increasing the learning rate
B. Reward hacking (overoptimization) — the policy exploits patterns in the reward model that don't correlate with actual quality; addressed by KL divergence penalty against the reference model and reward model ensembles
C. Gradient explosion — solved by gradient clipping
D. Overfitting — solved by adding more training data

Answer: B

Hint: The reward model is an imperfect proxy — optimizing it too aggressively finds its blind spots.

Explanation: Reward hacking occurs when the policy learns to generate outputs that score highly on the reward model but don't genuinely satisfy human preferences. The reward model is an imperfect proxy, and excessive optimization exploits its weaknesses. The KL divergence penalty constrains the policy to stay close to the SFT reference, preventing extreme exploitation.

Why others wrong: This isn't mode collapse (which is uniform outputs); it's not gradient explosion (numerical issue); more data for RLHF training doesn't fix the proxy problem.

Trap: Trusting reward scores as ground truth — they're learned approximations that can be "gamed" by the policy.

Mnemonic: Reward hacking = "gaming the test" — high scores don't mean real learning; KL penalty = "don't stray too far from home"

## Q38
Type: single
Difficulty: 1
Tags: data-preparation, data-formatting
Concepts: instruction-response-pairs
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

What is the standard format for a supervised fine-tuning (SFT) example for instruction-following?

A. A single long paragraph of text
B. A structured pair consisting of an instruction (input prompt) and the desired response (output), optionally with a system message
C. A multiple-choice question with four options
D. A JSON object containing only the model's confidence scores

Answer: B

Hint: SFT teaches the model to produce specific outputs for specific inputs.

Explanation: SFT examples consist of instruction-response pairs where the instruction defines what the model should do and the response is the target output. Many formats include a system message for behavioral context. This paired structure directly teaches the model the input-output mapping for desired behaviors.

Why others wrong: Unstructured text is for pre-training; multiple-choice is a specific task format; confidence scores are outputs, not training data.

Trap: Thinking SFT data needs to be as large as pre-training data — a few thousand high-quality instruction-response pairs can significantly shift model behavior.

Mnemonic: SFT data = "show and tell" — show the instruction, tell the correct response

## Q39
Type: single
Difficulty: 2
Tags: fine-tuning, continual-pretraining
Concepts: domain-adaptation
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

An organization wants to adapt a general-purpose LLM for the financial domain. They have 50GB of financial reports and documents. What is the recommended training pipeline?

A. Skip pre-training and directly fine-tune on financial QA pairs
B. Continued pre-training on the financial corpus first (domain adaptation), followed by instruction tuning on financial tasks, then optional alignment
C. Pre-train a new model from scratch on only the financial data
D. Use only RAG without any model adaptation

Answer: B

Hint: Domain knowledge → task skills → alignment: a three-stage pipeline.

Explanation: Continued pre-training exposes the model to domain-specific language, terminology, and knowledge through next-token prediction on the financial corpus. Following this with instruction tuning teaches the model to apply this knowledge to specific tasks. This pipeline preserves general abilities while adding deep domain expertise, and is the established best practice.

Why others wrong: Skipping domain pre-training leaves the model without financial terminology understanding; training from scratch wastes the general knowledge; RAG alone may not handle domain-specific reasoning.

Trap: Jumping straight to instruction tuning — the model needs to first "read the textbook" (continued pre-training) before "doing exercises" (instruction tuning).

Mnemonic: Domain adaptation pipeline = "read the textbook → do exercises → get feedback"

## Q40
Type: single
Difficulty: 3
Tags: fine-tuning, nemo-customization
Concepts: nemo-framework-finetuning
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

In NVIDIA NeMo Framework, what is the advantage of using NeMo's built-in PEFT support over implementing LoRA manually with a general-purpose library?

A. NeMo's LoRA uses a different mathematical formulation
B. NeMo integrates PEFT with its distributed training infrastructure (Megatron parallelism), enabling efficient LoRA fine-tuning across multiple GPUs with tensor and pipeline parallelism
C. NeMo's LoRA only works on NVIDIA H100 GPUs
D. NeMo automatically selects the optimal rank without user input

Answer: B

Hint: NeMo's value is integration with its distributed training stack, not different math.

Explanation: NeMo Framework integrates PEFT methods with Megatron-LM's distributed training infrastructure, allowing LoRA adapters to be trained efficiently across multi-GPU and multi-node setups using tensor parallelism and pipeline parallelism. General-purpose libraries like Hugging Face PEFT typically require additional engineering to work with model parallelism at scale.

Why others wrong: The LoRA math is the same; NeMo works on A100 and other GPUs; rank selection is still a hyperparameter.

Trap: Thinking NeMo is only for full pre-training — its PEFT integration makes large-scale fine-tuning practical without writing custom distributed training code.

Mnemonic: NeMo PEFT = "LoRA that knows how to use all your GPUs" — distributed fine-tuning out of the box

## Q41
Type: single
Difficulty: 1
Tags: optimization, pipeline-parallelism
Concepts: pipeline-parallelism
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

What is pipeline parallelism in the context of training large language models?

A. Running multiple independent training jobs simultaneously
B. Splitting the model's layers across multiple GPUs so each GPU processes a different stage of the forward and backward pass
C. Processing multiple data batches on a single GPU in sequence
D. Using multiple CPUs to preprocess data while the GPU trains

Answer: B

Hint: "Pipeline" = different stages on different devices, like an assembly line.

Explanation: Pipeline parallelism distributes consecutive groups of transformer layers across different GPUs. Each GPU processes its assigned layers (stage) and passes activations to the next stage. Micro-batching enables multiple batches to flow through the pipeline simultaneously, reducing idle time (pipeline bubbles).

Why others wrong: Independent jobs is embarrassingly parallel, not pipeline; sequential batches on one GPU is gradient accumulation; CPU preprocessing is data pipeline optimization.

Trap: Confusing pipeline parallelism with data parallelism — pipeline splits the model vertically (by layers), data parallelism replicates the whole model.

Mnemonic: Pipeline parallelism = "assembly line" — each GPU builds one part, passes it down

## Q42
Type: single
Difficulty: 2
Tags: optimization, deepspeed-zero
Concepts: zero-stages
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

A team is training a 13B model on 8 GPUs. With DeepSpeed ZeRO Stage 2, what is partitioned across GPUs?

A. Only the optimizer states
B. Optimizer states and gradients, but model parameters remain replicated on each GPU
C. Optimizer states, gradients, and model parameters
D. Only the training data

Answer: B

Hint: ZeRO stages progressively partition more state: Stage 1=optimizer, Stage 2=+gradients, Stage 3=+parameters.

Explanation: ZeRO Stage 2 partitions both optimizer states and gradients across data-parallel GPUs, while keeping model parameters replicated. This reduces memory per GPU significantly compared to standard data parallelism while avoiding the communication overhead of Stage 3, which also partitions parameters. Stage 2 is often the best balance of memory savings and communication efficiency.

Why others wrong: Stage 1 partitions only optimizer states; Stage 3 partitions everything including parameters; training data distribution is standard data parallelism.

Trap: Jumping to ZeRO Stage 3 for maximum savings — Stage 3 has higher communication overhead and may slow training. Stage 2 is often the practical sweet spot.

Mnemonic: ZeRO stages = "1-2-3 peel the onion" — Stage 1: optimizer, Stage 2: +gradients, Stage 3: +parameters

## Q43
Type: single
Difficulty: 3
Tags: optimization, fsdp
Concepts: fsdp-vs-deepspeed
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

How does PyTorch FSDP (Fully Sharded Data Parallelism) relate to DeepSpeed ZeRO Stage 3?

A. They are completely different approaches with no conceptual overlap
B. FSDP implements the same core idea as ZeRO Stage 3 — sharding parameters, gradients, and optimizer states across GPUs — but is natively integrated into PyTorch
C. FSDP is always faster than DeepSpeed ZeRO Stage 3
D. FSDP only works with models under 10B parameters

Answer: B

Hint: FSDP is PyTorch's native answer to DeepSpeed ZeRO Stage 3.

Explanation: FSDP and DeepSpeed ZeRO Stage 3 both fully shard model parameters, gradients, and optimizer states across data-parallel workers. FSDP's advantage is native PyTorch integration (no external library), while DeepSpeed offers additional features like ZeRO-Infinity (offloading to NVMe). The core memory-saving mechanism is conceptually the same.

Why others wrong: They implement the same core concept; performance depends on implementation details and hardware; FSDP works with models of any size.

Trap: Thinking you need DeepSpeed for sharded training in PyTorch — FSDP provides this natively since PyTorch 1.12.

Mnemonic: FSDP = "PyTorch's native ZeRO-3" — same idea, built into the framework

## Q44
Type: single
Difficulty: 2
Tags: optimization, gptq
Concepts: post-training-quantization
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

What distinguishes GPTQ from simple round-to-nearest (RTN) quantization for LLMs?

A. GPTQ only works with NVIDIA GPUs while RTN works on any hardware
B. GPTQ uses second-order information (approximate Hessian) to minimize the quantization error layer-by-layer, compensating for each weight's quantization error by adjusting remaining weights
C. GPTQ requires access to the original training data
D. RTN always produces better quality than GPTQ

Answer: B

Hint: GPTQ is "smarter rounding" — it considers how rounding one weight affects the output.

Explanation: GPTQ (based on the Optimal Brain Quantization framework) uses approximate second-order (Hessian) information to quantize weights one column at a time, adjusting subsequent weights to compensate for the error introduced by each quantization. This produces significantly better quality at low bit-widths (3-4 bit) compared to naive RTN, which rounds each weight independently.

Why others wrong: Both work on various hardware; GPTQ needs a small calibration set, not full training data; RTN is typically worse at low bit-widths.

Trap: Thinking all quantization methods are equivalent — at 4-bit, GPTQ can maintain near-FP16 quality while RTN may degrade noticeably.

Mnemonic: GPTQ = "smart rounding with error correction" — adjust neighbors when you round one weight

## Q45
Type: single
Difficulty: 2
Tags: optimization, awq
Concepts: activation-aware-quantization
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

How does AWQ (Activation-Aware Weight Quantization) determine which weights are important to preserve at higher precision?

A. It selects weights randomly and preserves 10% at full precision
B. It identifies salient weight channels by observing which channels have large activation magnitudes in calibration data, then scales those channels before quantization to protect them
C. It keeps the first and last layer at full precision and quantizes everything else
D. It uses the weight magnitude directly — larger weights are preserved

Answer: B

Hint: "Activation-Aware" means it looks at what flows through the weights, not just the weights themselves.

Explanation: AWQ's key insight is that a small fraction (~1%) of weight channels are disproportionately important because they process large activations. Instead of keeping these weights at higher precision (mixed-precision), AWQ applies per-channel scaling to protect salient channels before applying uniform quantization, making the important weights more robust to quantization error.

Why others wrong: Selection isn't random; first/last layer preservation is a different strategy; weight magnitude alone is a poor indicator of importance — activation magnitude is what matters.

Trap: Confusing AWQ with mixed-precision quantization — AWQ uses a scaling trick to achieve similar protection while keeping uniform bit-width, which is more hardware-friendly.

Mnemonic: AWQ = "protect the busy highways" — channels carrying heavy traffic (large activations) get special treatment

## Q46
Type: single
Difficulty: 3
Tags: optimization, smoothquant
Concepts: activation-smoothing
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

SmoothQuant addresses a fundamental challenge in quantizing transformer models. What is this challenge and how does SmoothQuant solve it?

A. Weight distributions are too wide — SmoothQuant clips extreme weight values
B. Activation outliers in certain channels make activation quantization difficult — SmoothQuant migrates the quantization difficulty from activations to weights by applying a per-channel smoothing factor
C. The attention mechanism cannot be quantized — SmoothQuant replaces attention with a quantization-friendly alternative
D. Gradient computation is incompatible with quantized weights — SmoothQuant uses straight-through estimators

Answer: B

Hint: The problem is in activations, not weights — some channels have extreme outlier values.

Explanation: Transformer activations often have extreme outlier values concentrated in specific channels, making INT8 activation quantization lose precision. SmoothQuant introduces a mathematically equivalent transformation: dividing activation channels by a smoothing factor and multiplying the corresponding weight channels by the same factor. This "migrates" the difficulty from activations to weights, which are easier to quantize.

Why others wrong: Weight distributions are relatively well-behaved; attention can be quantized; this is about inference quantization, not training gradients.

Trap: Applying activation quantization without smoothing — the outlier channels cause massive quantization error that degrades output quality.

Mnemonic: SmoothQuant = "smooth the bumpy road (activations) by shifting bumps to the car (weights)"

## Q47
Type: single
Difficulty: 1
Tags: optimization, fp8-training
Concepts: fp8-precision
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

What advantage does FP8 (8-bit floating point) training offer on NVIDIA Hopper (H100) GPUs compared to BF16 training?

A. It provides higher numerical precision
B. It approximately doubles the compute throughput for matrix multiplications while maintaining comparable training quality through automatic scaling
C. It reduces the number of training epochs needed
D. It only works for inference, not training

Answer: B

Hint: H100 Tensor Cores have dedicated FP8 hardware that doubles FLOPS over BF16.

Explanation: H100's Tensor Cores support FP8 operations at nearly double the throughput of BF16 (roughly 2000 TFLOPS FP8 vs 1000 TFLOPS BF16). The Transformer Engine automatically manages dynamic scaling to maintain training stability, making FP8 training practical with minimal quality loss for most LLM workloads.

Why others wrong: FP8 has lower precision (by design); epoch count depends on convergence, not precision; FP8 works for both training and inference on H100.

Trap: Assuming FP8 always degrades quality — with proper dynamic scaling (Transformer Engine), FP8 training quality is typically comparable to BF16.

Mnemonic: FP8 on H100 = "half the bits, double the speed" — Transformer Engine keeps quality intact

## Q48
Type: single
Difficulty: 2
Tags: optimization, gradient-accumulation
Concepts: effective-batch-size
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

A researcher has 4 GPUs with batch size 8 per GPU and uses gradient accumulation over 4 steps. What is the effective batch size?

A. 8
B. 32
C. 128
D. 512

Answer: C

Hint: Effective batch = GPUs × per-GPU batch × accumulation steps.

Explanation: The effective batch size is calculated as: num_GPUs (4) × per_GPU_batch_size (8) × gradient_accumulation_steps (4) = 128. Gradients from all micro-batches across all GPUs are accumulated before a single optimizer step, making the model see 128 examples per weight update.

Why others wrong: 8 ignores parallelism and accumulation; 32 ignores accumulation; 512 miscalculates.

Trap: Forgetting to include gradient accumulation steps — they multiply the effective batch size just as more GPUs do.

Mnemonic: Effective batch = GPUs × local batch × accumulation = "total samples per weight update"

## Q49
Type: single
Difficulty: 3
Tags: optimization, communication-overlap
Concepts: computation-communication-overlap
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

In distributed training with data parallelism, how does overlapping gradient communication with backward computation improve throughput?

A. It reduces the total amount of data communicated between GPUs
B. It begins all-reduce communication for earlier layers' gradients while the backward pass is still computing gradients for later layers, hiding communication latency behind computation
C. It eliminates the need for gradient synchronization entirely
D. It uses CPU memory to buffer gradients, freeing GPU memory

Answer: B

Hint: The backward pass computes gradients layer by layer — earlier layers finish first.

Explanation: During backpropagation, gradients are computed from the last layer to the first. As soon as a layer's gradient is computed, its all-reduce communication can begin in the background while the backward pass continues computing gradients for earlier layers. This overlaps communication and computation, reducing the effective synchronization overhead.

Why others wrong: The same data is communicated; gradients must still be synchronized; this is a GPU-side optimization, not CPU offloading.

Trap: Thinking all-reduce must wait until the entire backward pass completes — layer-by-layer overlap is the standard optimization in frameworks like PyTorch DDP.

Mnemonic: Gradient overlap = "mail the letter while still writing the next one" — don't wait until everything's done

## Q50
Type: single
Difficulty: 2
Tags: optimization, continuous-batching
Concepts: in-flight-batching
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

How does continuous (in-flight) batching improve GPU utilization during LLM inference compared to static batching?

A. It processes all requests one at a time in strict order
B. It allows new requests to fill slots freed by completed requests without waiting for the entire batch to finish, preventing shorter responses from blocking on longer ones
C. It increases the maximum sequence length for all requests
D. It reduces the model size by sharing weights across requests

Answer: B

Hint: Static batching = "everyone waits for the slowest person"; continuous = "leave when you're done."

Explanation: In static batching, the batch completes only when the longest generation finishes, leaving GPUs idle for shorter responses. Continuous batching dynamically inserts new requests into freed slots as responses complete, maintaining high GPU utilization. This can improve throughput by 2-4x on variable-length workloads.

Why others wrong: One-at-a-time is the opposite of batching; sequence length is per-request; model weights are always shared in batched inference.

Trap: Thinking static batching is good enough — with variable-length outputs (very common in chat), static batching wastes 50%+ of GPU cycles on padding.

Mnemonic: Continuous batching = "revolving door" — people enter and exit independently, no waiting

## Q51
Type: multi
Difficulty: 3
Tags: optimization, tensor-parallelism-details
Concepts: column-row-parallel
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

In Megatron-LM's tensor parallelism for a transformer's feed-forward network, which TWO of the following are correct? (Select two)

A. The first linear layer is split column-wise, and the second linear layer is split row-wise
B. An all-reduce communication is required after the first linear layer
C. The GeLU activation is applied independently on each GPU's partition without communication
D. Both linear layers are split in the same dimension

Answer: A, C

Hint: Column-parallel followed by row-parallel allows GeLU to be computed locally.

Explanation: Megatron-LM splits the first feed-forward linear layer column-wise (each GPU gets a subset of output features) and the second row-wise (each GPU gets a subset of input features). This clever partitioning means GeLU can be applied locally on each GPU's output without communication. An all-reduce is only needed after the second linear layer (row-parallel), not after the first.

Why others wrong: All-reduce is after the second layer, not the first; the two layers are split in different dimensions (column then row).

Trap: Thinking every split operation requires communication — Megatron's column-then-row pattern minimizes all-reduce calls.

Mnemonic: Megatron FFN = "column-GeLU-row-allreduce" — GeLU lives in the communication-free zone

## Q52
Type: single
Difficulty: 2
Tags: optimization, memory-estimation
Concepts: training-memory-budget
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

For training a 7B parameter model in BF16 with Adam optimizer (FP32 optimizer states), approximately how much GPU memory is needed for model states alone (parameters + gradients + optimizer)?

A. ~14 GB
B. ~28 GB
C. ~56 GB
D. ~112 GB

Answer: D

Hint: Count bytes: parameters (2B) + gradients (2B) + Adam states (4B×2 for m and v + 4B master weights) = 16 bytes per parameter.

Explanation: Per parameter: BF16 parameters (2 bytes) + BF16 gradients (2 bytes) + FP32 master weights (4 bytes) + FP32 first moment (4 bytes) + FP32 second moment (4 bytes) = 16 bytes. For 7B parameters: 7B × 16 bytes = 112 GB. This doesn't include activations, which add more depending on batch size and sequence length.

Why others wrong: 14GB only covers BF16 parameters; 28GB covers parameters+gradients; 56GB forgets master weights in optimizer.

Trap: Only counting model parameter size (2 bytes × 7B = 14GB) — optimizer states dominate training memory, not the model weights.

Mnemonic: Training memory ≈ 16× parameter bytes with Adam — optimizer states are the memory hog

## Q53
Type: single
Difficulty: 1
Tags: optimization, mixed-precision-inference
Concepts: weight-only-quantization
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

What is weight-only quantization and why is it effective for LLM inference?

A. It quantizes both weights and activations to INT4
B. It quantizes only the model weights to low precision (INT4/INT8) while keeping activations in FP16, reducing memory bandwidth bottleneck since LLM inference is typically memory-bound
C. It removes 50% of the weights entirely
D. It converts all computations to integer arithmetic

Answer: B

Hint: LLM inference is memory-bound — reducing weight size directly improves throughput.

Explanation: LLM inference (especially autoregressive decoding) is bottlenecked by memory bandwidth, not compute. Weight-only quantization reduces the amount of data read from memory per token generation while keeping activation computations in higher precision for quality. The weights are dequantized on-the-fly during matrix multiplication.

Why others wrong: Quantizing activations too is a separate technique; weight pruning is different from quantization; the compute uses mixed precision, not pure integer.

Trap: Thinking quantization is only about saving storage — for LLM inference, the primary benefit is reduced memory bandwidth consumption, which directly increases throughput.

Mnemonic: Weight-only quant = "smaller books on the shelf, same quality reading" — memory bandwidth is the bottleneck

## Q54
Type: single
Difficulty: 3
Tags: optimization, pipeline-bubble
Concepts: interleaved-pipeline
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

What causes "pipeline bubbles" in pipeline parallelism, and how does interleaved scheduling (virtual pipeline stages) reduce them?

A. Bubbles are caused by network latency — interleaved scheduling uses faster interconnects
B. Bubbles are GPU idle time during pipeline warmup and cooldown — interleaved scheduling assigns multiple non-consecutive stage chunks to each GPU, reducing the warmup/cooldown ratio by increasing the number of micro-batches relative to stages
C. Bubbles are memory leaks — interleaved scheduling uses garbage collection
D. Bubbles are caused by synchronous weight updates — interleaved scheduling uses asynchronous SGD

Answer: B

Hint: In a pipeline, GPUs are idle while waiting for the pipeline to fill (warmup) and drain (cooldown).

Explanation: With P pipeline stages and M micro-batches, the bubble fraction is approximately (P-1)/M. Interleaved scheduling assigns V virtual stages to each GPU (non-consecutive layer chunks), creating V×P virtual stages. This allows more micro-batches to flow through the pipeline simultaneously, reducing the bubble fraction to (P-1)/(M×V) at the cost of more communication.

Why others wrong: Bubbles are a scheduling issue, not network latency; they're not memory leaks; the weight update strategy is separate.

Trap: Assuming more pipeline stages always helps — more stages increase bubble overhead; interleaving is needed to compensate.

Mnemonic: Pipeline bubbles = "assembly line warm-up time"; interleaving = "split each worker's job into smaller pieces so the line fills faster"

## Q55
Type: single
Difficulty: 2
Tags: optimization, vllm-paged-attention
Concepts: paged-attention
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

What problem does vLLM's PagedAttention solve in LLM serving?

A. It speeds up the attention computation itself
B. It eliminates KV cache memory fragmentation by managing cache in non-contiguous blocks (pages), similar to OS virtual memory, enabling near-zero waste and dynamic memory sharing across requests
C. It reduces the number of attention heads
D. It compresses the model weights to save memory

Answer: B

Hint: Think "virtual memory for KV cache" — pages instead of contiguous allocation.

Explanation: Traditional KV cache management pre-allocates contiguous memory for the maximum sequence length per request, wasting ~60-80% of cache memory on average. PagedAttention stores KV cache in fixed-size blocks that can be non-contiguous, allocated on demand, and shared across requests (e.g., for common prefixes). This dramatically improves memory efficiency and throughput.

Why others wrong: PagedAttention manages memory, not attention speed; it doesn't reduce heads; it's about KV cache, not weight compression.

Trap: Thinking contiguous KV cache allocation is efficient — most requests don't use their full allocated length, wasting the pre-allocated memory.

Mnemonic: PagedAttention = "OS virtual memory for KV cache" — allocate pages on demand, not one big chunk

## Q56
Type: multi
Difficulty: 2
Tags: optimization, quantization-comparison
Concepts: ptq-vs-qat
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

Which TWO statements correctly distinguish Post-Training Quantization (PTQ) from Quantization-Aware Training (QAT)? (Select two)

A. PTQ is applied after training is complete using a small calibration dataset, requiring no retraining
B. QAT simulates quantization during training using fake quantization nodes, allowing the model to learn to compensate for quantization error
C. PTQ always produces better quality than QAT
D. QAT does not require access to any training data

Answer: A, B

Hint: PTQ = post-hoc calibration; QAT = train with quantization in the loop.

Explanation: PTQ quantizes a pre-trained model using calibration data to determine scaling factors, requiring no gradient computation. QAT inserts fake quantization operations during forward passes, allowing gradients to flow through via straight-through estimators, so the model adapts its weights to be quantization-friendly. QAT generally produces better quality at low bit-widths but requires training resources.

Why others wrong: QAT typically produces better quality than PTQ at very low bit-widths; QAT requires training data for the fine-tuning process.

Trap: Defaulting to QAT when PTQ is sufficient — at 8-bit, PTQ quality is usually excellent, and QAT's training cost isn't justified.

Mnemonic: PTQ = "measure and cut after sewing"; QAT = "sew with the measuring tape built in"

## Q57
Type: single
Difficulty: 3
Tags: optimization, sequence-parallelism
Concepts: sequence-parallel-attention
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

How does sequence parallelism complement tensor parallelism in Megatron-LM to reduce activation memory?

A. It splits the vocabulary across GPUs
B. It partitions the sequence dimension for operations that are replicated in tensor parallelism (like LayerNorm and dropout), reducing per-GPU activation memory for these layers
C. It runs different sequences on different GPUs
D. It eliminates the need for all-reduce operations

Answer: B

Hint: In tensor parallelism, some operations (LayerNorm) are still replicated — sequence parallelism addresses this.

Explanation: In tensor parallelism, operations like LayerNorm and dropout are replicated on all GPUs because they don't participate in the tensor-parallel split. Sequence parallelism distributes these operations across GPUs along the sequence dimension, converting all-reduce to reduce-scatter and all-gather operations. This reduces the per-GPU activation memory for these layers by a factor equal to the tensor-parallel degree.

Why others wrong: Vocabulary parallelism is a separate technique; running different sequences is data parallelism; all-reduce is replaced with reduce-scatter/all-gather, not eliminated.

Trap: Thinking tensor parallelism alone handles all activation memory — the replicated layers (LayerNorm, dropout) still consume full activation memory on each GPU without sequence parallelism.

Mnemonic: Sequence parallelism = "share the LayerNorm work" — tensor parallelism's complement for replicated ops

## Q58
Type: single
Difficulty: 1
Tags: optimization, model-sharding
Concepts: model-parallelism-types
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

Which type of parallelism is most appropriate when a model is too large to fit on a single GPU?

A. Data parallelism — replicate the model on each GPU
B. Model parallelism (tensor or pipeline) — split the model across multiple GPUs
C. Gradient accumulation — process smaller batches sequentially
D. Mixed precision — reduce the numerical precision of weights

Answer: B

Hint: If the model doesn't fit on one GPU, you must split it across GPUs.

Explanation: When a model exceeds a single GPU's memory, the model must be partitioned across GPUs. Tensor parallelism splits individual layers across GPUs, while pipeline parallelism distributes different layers to different GPUs. Both enable training and inference of models that exceed single-GPU memory capacity.

Why others wrong: Data parallelism replicates the full model, so it doesn't help if it doesn't fit; gradient accumulation doesn't reduce peak memory; mixed precision helps but may not be enough for very large models.

Trap: Thinking data parallelism with gradient checkpointing can always make a model fit — for very large models, model parallelism is necessary.

Mnemonic: Model too big for one GPU = "split the model, not the data"

## Q59
Type: single
Difficulty: 2
Tags: optimization, activation-checkpointing
Concepts: gradient-checkpointing-tradeoff
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

Activation checkpointing (gradient checkpointing) saves memory during training. What is the trade-off?

A. It reduces model quality by approximating gradients
B. It saves memory by discarding intermediate activations during the forward pass and recomputing them during the backward pass, increasing computation time by approximately 33%
C. It requires twice as many GPUs
D. It only works with models smaller than 1B parameters

Answer: B

Hint: Memory savings come from recomputation — you trade compute for memory.

Explanation: Instead of storing all intermediate activations for backpropagation, activation checkpointing saves only selected checkpoints and recomputes the rest during the backward pass. This can reduce activation memory from O(n) to O(√n) layers, at the cost of one additional forward pass through the checkpointed segments, adding roughly 33% training time overhead.

Why others wrong: Gradients are exact, not approximate; no additional GPUs are needed; it works at any model scale.

Trap: Thinking activation checkpointing changes the gradients — it produces mathematically identical gradients, just computed less efficiently.

Mnemonic: Activation checkpointing = "erase your notes and re-derive during the exam" — same answers, more work

## Q60
Type: single
Difficulty: 2
Tags: deployment, tensorrt-llm-optimization
Concepts: tensorrt-engine
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

What are the primary optimizations that TensorRT-LLM applies when converting a model for inference?

A. It retrains the model with fewer parameters
B. It applies kernel fusion, quantization, KV cache optimization, and generates GPU-specific kernels optimized for the target hardware
C. It converts the model to run on CPUs
D. It replaces transformer layers with simpler architectures

Answer: B

Hint: TensorRT-LLM is a compiler that optimizes models for specific GPU hardware.

Explanation: TensorRT-LLM compiles models into optimized inference engines by fusing multiple operations into single GPU kernels (reducing memory transfers), applying quantization, implementing efficient KV cache management, and generating hardware-specific code for the target GPU architecture (e.g., H100-specific Tensor Core kernels). These optimizations combined can provide 2-5x speedup over naive PyTorch inference.

Why others wrong: It doesn't retrain or reduce parameters; it's GPU-focused, not CPU; the architecture is preserved, just optimized.

Trap: Thinking you can just run PyTorch inference in production — dedicated inference engines like TensorRT-LLM provide massive speedups through hardware-specific optimizations.

Mnemonic: TensorRT-LLM = "compile and optimize for your specific GPU" — fuse, quantize, specialize

## Q61
Type: single
Difficulty: 2
Tags: deployment, triton-ensemble
Concepts: triton-model-pipeline
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

In NVIDIA Triton Inference Server, what is a model ensemble?

A. Running multiple copies of the same model for load balancing
B. A directed acyclic graph (DAG) that chains multiple models together, where the output of one model feeds into the next, enabling multi-step inference pipelines without client-side orchestration
C. A technique for averaging predictions from multiple models
D. Training multiple models simultaneously on the server

Answer: B

Hint: Ensemble in Triton means "pipeline of models," not "average of models."

Explanation: Triton's ensemble feature allows defining a DAG of models where intermediate results flow automatically between models server-side. For example: tokenizer → LLM → post-processor can be a single ensemble. This avoids round-trips between client and server for each step, reducing latency and simplifying client code.

Why others wrong: Multiple copies for load balancing is Triton's model instances feature; prediction averaging is a different meaning of ensemble; Triton is for inference, not training.

Trap: Confusing Triton ensembles with ML ensemble methods (random forest, boosting) — Triton ensembles are inference pipelines, not model averaging.

Mnemonic: Triton ensemble = "inference assembly line" — chain models server-side, no client round-trips

## Q62
Type: single
Difficulty: 1
Tags: deployment, model-versioning
Concepts: model-lifecycle
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

Why is model versioning important in production LLM deployments?

A. To increase the model's context window over time
B. To enable rollback to a previous version if a new deployment causes quality regression, and to support A/B testing between versions
C. To reduce storage costs by keeping only the latest version
D. To automatically retrain the model

Answer: B

Hint: Production systems need the ability to go back — versioning enables safe rollbacks.

Explanation: Model versioning tracks different model iterations in production, enabling quick rollback if a new version degrades quality, supports A/B testing to compare versions with real traffic, and maintains an audit trail. Without versioning, reverting a problematic deployment requires finding and redeploying the previous model manually.

Why others wrong: Context window is architectural, not a versioning concern; versioning keeps multiple versions, not just the latest; retraining is a separate process.

Trap: Deploying new models without versioning — if something goes wrong, you need to rebuild or find the old model.

Mnemonic: Model versioning = "save points in a video game" — always be able to go back

## Q63
Type: single
Difficulty: 3
Tags: deployment, speculative-decoding-deployment
Concepts: draft-model-selection
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

When deploying speculative decoding in production with TensorRT-LLM, what is the key consideration for selecting the draft model?

A. The draft model should be the same size as the target model
B. The draft model must share the same vocabulary as the target model and have a high acceptance rate while being significantly faster — typically 10-20x smaller, trading off between acceptance rate and draft speed
C. The draft model can use any vocabulary since outputs are regenerated by the target
D. The draft model should be fine-tuned on a different dataset than the target

Answer: B

Hint: The draft model proposes, the target model disposes — they must speak the same "language."

Explanation: The draft and target models must share the same tokenizer/vocabulary because the target model verifies draft tokens using its own probability distribution. The draft model should be small enough to generate K tokens faster than the target generates 1 token, while maintaining a high enough acceptance rate to make speculation worthwhile. If acceptance is too low, speculative decoding adds overhead instead of saving time.

Why others wrong: Same-size draft defeats the purpose; different vocabularies make verification impossible; dataset alignment helps acceptance rate.

Trap: Choosing the smallest possible draft model — too small means low acceptance rate, which can make speculative decoding slower than standard autoregressive.

Mnemonic: Draft model selection = "fast writer who thinks similarly to the editor" — speed + agreement

## Q64
Type: single
Difficulty: 2
Tags: deployment, load-balancing
Concepts: llm-load-balancing
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

For an LLM serving system with varying request lengths, why is simple round-robin load balancing suboptimal?

A. It sends too many requests to a single GPU
B. It doesn't account for the fact that different requests have vastly different computational costs — a 2000-token generation takes much longer than a 50-token one, causing uneven GPU utilization
C. Round-robin only works with HTTP, not gRPC
D. It requires more network bandwidth

Answer: B

Hint: LLM requests aren't equal — a long response monopolizes a GPU.

Explanation: Unlike traditional web services where requests have similar costs, LLM requests vary dramatically in computational cost based on input and output length. Round-robin may send multiple long-generation requests to one GPU while others sit idle with short requests. Load-aware balancing (based on current queue depth, pending tokens, or GPU utilization) distributes work more evenly.

Why others wrong: Round-robin distributes evenly by count, not by cost; it works with any protocol; bandwidth isn't the issue.

Trap: Applying standard web-server load balancing to LLM serving — the high variance in request cost requires smarter routing.

Mnemonic: LLM load balancing = "don't give one cashier all the cart-full customers" — balance by workload, not just headcount

## Q65
Type: single
Difficulty: 1
Tags: deployment, latency-metrics
Concepts: ttft-tpot
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

What do TTFT and TPOT measure in LLM inference performance?

A. TTFT measures total training time; TPOT measures parameters optimized per task
B. TTFT (Time To First Token) measures the latency before the first output token is generated; TPOT (Time Per Output Token) measures the average time between successive output tokens
C. Both measure GPU memory usage at different stages
D. TTFT measures tokenizer speed; TPOT measures post-processing time

Answer: B

Hint: TTFT = "how long until I see something"; TPOT = "how fast does it stream."

Explanation: TTFT captures the initial latency users experience (including prompt processing/prefill), which is critical for interactive applications. TPOT measures the streaming speed during generation, affecting how quickly the full response is delivered. Together, they characterize the user's latency experience better than simple throughput metrics.

Why others wrong: Neither relates to training; they measure latency, not memory; they're about model inference, not tokenizer or post-processing.

Trap: Only measuring throughput (tokens/second) — a system with high throughput can still have poor user experience if TTFT is high.

Mnemonic: TTFT = "time to see the first word"; TPOT = "speed of the typing cursor"

## Q66
Type: single
Difficulty: 2
Tags: deployment, nim-microservice
Concepts: nvidia-nim
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

What is NVIDIA NIM and how does it simplify LLM deployment?

A. A training framework for building models from scratch
B. A pre-built, optimized inference microservice container that packages a model with TensorRT-LLM, Triton, and an OpenAI-compatible API, deployable with a single docker command
C. A cloud-only service that cannot be deployed on-premises
D. A dataset management tool for preparing training data

Answer: B

Hint: NIM = "NVIDIA Inference Microservice" — everything you need to serve a model in one container.

Explanation: NVIDIA NIM packages optimized models with the full inference stack (TensorRT-LLM engine, Triton serving, API endpoints) into a single container image. Users can deploy production-ready inference with `docker run`, getting optimized performance without manually configuring TensorRT compilation, Triton setup, or API implementation.

Why others wrong: NIM is for inference, not training; it can be deployed on-premises or in any cloud; it's for model serving, not data management.

Trap: Thinking you need to manually configure TensorRT-LLM + Triton + API server — NIM bundles all of this into a turnkey container.

Mnemonic: NIM = "model in a box" — docker run and you're serving

## Q67
Type: multi
Difficulty: 3
Tags: deployment, serving-optimization
Concepts: prefill-decode-separation
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

Which TWO benefits does separating prefill (prompt processing) from decode (token generation) into different GPU pools provide? (Select two)

A. It allows using different GPU types optimized for each phase — compute-heavy GPUs for prefill and memory-bandwidth-optimized GPUs for decode
B. It ensures all requests have the same latency
C. It prevents long prefill operations from blocking decode operations of in-progress requests, reducing TPOT jitter
D. It eliminates the need for KV cache entirely

Answer: A, C

Hint: Prefill is compute-bound; decode is memory-bound — they have different hardware preferences.

Explanation: Prefill (processing the full prompt) is compute-intensive (parallel matrix operations), while decode (generating one token at a time) is memory-bandwidth-bound. Separating them allows hardware specialization and prevents a large prefill request from stalling the decode phase of another request, which would cause visible generation stuttering.

Why others wrong: Latency still varies by request size; KV cache is still needed — it's transferred from prefill to decode GPUs.

Trap: Running prefill and decode on the same GPUs is simpler but causes "decode stalls" when large prefill requests arrive — disaggregation solves this at the cost of architecture complexity.

Mnemonic: Prefill-decode split = "separate kitchen (prefill) from serving counter (decode)" — cooking doesn't slow down plate delivery

## Q68
Type: single
Difficulty: 2
Tags: deployment, health-monitoring
Concepts: inference-monitoring
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

Which metric is most critical to monitor for detecting KV cache pressure in a production LLM serving system?

A. CPU utilization percentage
B. KV cache utilization percentage — when it approaches 100%, new requests must be queued or rejected, and existing requests may be preempted
C. Network packet loss rate
D. Disk I/O throughput

Answer: B

Hint: KV cache = "working memory" — when it's full, no new conversations can start.

Explanation: KV cache stores the attention state for all active requests. When utilization approaches 100%, the server cannot accept new requests (queueing increases TTFT) and may need to preempt (swap out) active requests' cache to serve new ones. Monitoring KV cache utilization enables proactive scaling before users experience degraded latency.

Why others wrong: CPU utilization is rarely the bottleneck for GPU inference; network and disk metrics are secondary to GPU memory pressure for LLM serving.

Trap: Only monitoring GPU compute utilization — a GPU can be compute-idle but memory-full, rejecting new requests due to KV cache exhaustion.

Mnemonic: KV cache pressure = "restaurant fully booked" — monitor table occupancy, not just kitchen activity

## Q69
Type: single
Difficulty: 1
Tags: deployment, api-rate-limiting
Concepts: rate-limiting
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

Why is token-based rate limiting (tokens per minute) more appropriate than request-based rate limiting for LLM APIs?

A. Token limits are easier to implement
B. Different requests consume vastly different amounts of compute based on input/output token counts — a 10-token request and a 10,000-token request have very different costs despite being "one request"
C. Token limits prevent all forms of abuse
D. Request limits are not supported by modern API gateways

Answer: B

Hint: "One request" can vary 1000x in cost — request counting doesn't capture this.

Explanation: LLM inference cost scales with token count, not request count. A request generating 4000 tokens costs roughly 100x more than one generating 40 tokens. Token-based rate limiting ensures fair resource allocation by accounting for actual compute consumption, preventing a few large requests from monopolizing capacity.

Why others wrong: Token limits require tracking tokens, which is more complex; no rate limiting prevents all abuse; modern gateways support both.

Trap: Using request-per-minute limits from traditional APIs — a user could send a few very large requests that consume more resources than hundreds of small ones.

Mnemonic: Token rate limit = "charge by weight, not by package" — a heavy package costs more to ship

## Q70
Type: single
Difficulty: 3
Tags: deployment, canary-deployment
Concepts: progressive-rollout
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

A team is deploying a newly fine-tuned LLM to replace the current production model. They implement a canary deployment sending 5% of traffic to the new model. Which metrics should trigger an automatic rollback?

A. Only latency increases — quality metrics require manual review
B. Significant degradation in any of: TTFT/TPOT latency percentiles, output quality scores (if automated evaluation exists), error rates, or safety classifier trigger rates compared to the baseline model
C. Any change in output distribution compared to the old model
D. Only if the new model crashes — quality differences are expected

Answer: B

Hint: Canary rollback should cover latency, quality, errors, AND safety — any one degrading is a red flag.

Explanation: A comprehensive canary deployment monitors multiple signal types: latency (TTFT, TPOT p50/p99), error rates (timeouts, OOM, malformed outputs), quality metrics (if automated evaluation like judge LLMs is available), and safety (toxicity classifier triggers, refusal rates). Significant regression in any category compared to the baseline should trigger automatic rollback to prevent user impact.

Why others wrong: Latency alone misses quality and safety regressions; some output change is expected from a new model; waiting for crashes misses subtle quality degradation.

Trap: Only monitoring infrastructure metrics (latency, errors) — a model can serve fast with no errors but produce worse quality outputs.

Mnemonic: Canary metrics = "speed + quality + safety + errors" — all four must be green to proceed

## Q71
Type: single
Difficulty: 2
Tags: deployment, gpu-utilization
Concepts: mig-partitioning
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

NVIDIA Multi-Instance GPU (MIG) allows partitioning an H100 into isolated GPU instances. When is MIG most beneficial for LLM inference?

A. When serving a single model that needs all GPU resources
B. When serving multiple small models or different model versions simultaneously, where each needs guaranteed resources and hardware isolation
C. When training models that require all GPU memory
D. When running batch processing jobs that use the full GPU

Answer: B

Hint: MIG = "multiple virtual GPUs from one physical GPU" — useful when you need isolation.

Explanation: MIG partitions a single GPU into up to 7 isolated instances, each with dedicated compute, memory, and memory bandwidth. This is ideal for serving multiple smaller models (7B, 13B) or different versions on one H100, providing hardware-level isolation without the overhead of GPU time-sharing. Each instance acts as an independent GPU.

Why others wrong: A single large model benefits from the full GPU; training typically needs all resources; batch processing similarly benefits from full GPU access.

Trap: Using MIG for a single 70B model — it would reduce available resources. MIG is for multiplexing smaller workloads.

Mnemonic: MIG = "GPU apartment building" — divide one GPU into isolated units for different tenants

## Q72
Type: single
Difficulty: 2
Tags: deployment, streaming-inference
Concepts: server-sent-events
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

Why is streaming (token-by-token) output delivery important for production LLM APIs?

A. It reduces the total compute required for generation
B. It significantly improves perceived latency by showing partial results immediately — users see the first token after TTFT instead of waiting for the entire response to complete
C. It improves model accuracy
D. It reduces memory usage on the server

Answer: B

Hint: Users prefer seeing partial progress over staring at a blank screen.

Explanation: Streaming delivers tokens as they're generated via Server-Sent Events (SSE) or WebSocket. The user sees the first word after TTFT (often under 1 second) instead of waiting for the entire response (which may take 10+ seconds for long outputs). This dramatically improves perceived responsiveness despite the same total generation time.

Why others wrong: Total compute is identical; model accuracy is unchanged; server memory usage is the same or slightly different.

Trap: Thinking streaming is just a UX preference — for long responses, non-streaming makes the application feel broken with 10+ second blank waits.

Mnemonic: Streaming = "watching the page print" vs non-streaming = "waiting for the fax to arrive"

## Q73
Type: single
Difficulty: 3
Tags: deployment, kv-cache-management
Concepts: prefix-caching
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

How does prefix caching (also called prompt caching) improve throughput in LLM serving systems?

A. It caches the final output for repeated prompts
B. It reuses the KV cache computed for shared prompt prefixes across multiple requests, avoiding redundant prefill computation for common system prompts, few-shot examples, or RAG contexts
C. It stores model weights in CPU cache for faster access
D. It reduces the model size by caching frequently used layers

Answer: B

Hint: Many requests share the same system prompt — why compute its KV cache every time?

Explanation: In production, many requests share identical prompt prefixes (system prompts, few-shot examples, RAG preambles). Prefix caching computes the KV cache for these shared prefixes once and reuses it across requests, skipping the prefill computation for the shared portion. This can reduce TTFT by 50-80% for requests with long shared prefixes.

Why others wrong: Output caching is separate (and defeats the purpose of LLMs); this is about GPU memory, not CPU cache; model weights are not involved.

Trap: Thinking prefix caching only helps identical requests — even partially shared prefixes benefit, and the technique is transparent to the user.

Mnemonic: Prefix caching = "shared textbook" — multiple students read from one copy instead of each buying their own

## Q74
Type: single
Difficulty: 1
Tags: deployment, graceful-shutdown
Concepts: zero-downtime-deployment
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

When updating an LLM inference service, why is it important to drain existing requests before shutting down the old instance?

A. To save on compute costs
B. To avoid abruptly terminating in-progress generations, which would return incomplete responses to users and waste the computation already invested
C. To free up GPU memory for the new instance
D. Because GPUs cannot be stopped while processing

Answer: B

Hint: Cutting off a half-generated response is both wasteful and frustrating for the user.

Explanation: LLM responses can take seconds to minutes to generate. Abruptly killing an inference server terminates all in-progress generations, returning incomplete or error responses. Graceful shutdown stops accepting new requests while allowing existing generations to complete, ensuring all users receive their full responses before the instance goes down.

Why others wrong: Cost savings are minimal compared to user impact; memory is freed after draining; GPUs can be stopped anytime (forcefully).

Trap: Using rolling deployment strategies from stateless web services — LLM inference is stateful (ongoing generation), requiring generation-aware draining.

Mnemonic: Graceful shutdown = "let everyone finish eating before closing the restaurant"

## Q75
Type: single
Difficulty: 2
Tags: deployment, cost-optimization
Concepts: batch-vs-realtime
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

An organization processes 100,000 customer emails daily through an LLM for classification. The results are needed within 4 hours, not in real-time. What deployment strategy minimizes cost?

A. A persistent real-time API server running 24/7
B. Batch processing with auto-scaling GPU instances that spin up, process all emails, and terminate — avoiding paying for idle GPU time during off-peak hours
C. Processing emails one at a time on a CPU server
D. Using the most expensive GPU available for fastest processing

Answer: B

Hint: If you don't need real-time results, don't pay for real-time infrastructure.

Explanation: Batch processing with ephemeral compute instances (e.g., spot/preemptible GPUs) is significantly cheaper than maintaining always-on inference servers. With a 4-hour window, the system can queue all emails, spin up GPU instances with large batch sizes for maximum throughput, and terminate when done. This avoids paying for the 20+ hours of idle time a persistent server would incur.

Why others wrong: 24/7 servers waste money on idle time; CPU processing of 100K emails would take too long; expensive GPUs may not be cost-effective for a latency-insensitive workload.

Trap: Defaulting to real-time serving for batch workloads — many production LLM use cases (classification, extraction, summarization) don't need sub-second latency.

Mnemonic: Batch processing = "night shift workers" — do the job when it's cheap, not when it's real-time

## Q76
Type: multi
Difficulty: 3
Tags: deployment, multi-model-serving
Concepts: model-routing
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

Which TWO strategies are commonly used for intelligent model routing in production LLM systems? (Select two)

A. Routing all requests to the largest available model regardless of complexity
B. Using a lightweight classifier to assess request complexity and route simple queries to smaller, faster models while sending complex ones to larger models
C. Routing based on estimated input/output token count — sending short requests to batch-optimized instances and long requests to streaming-optimized instances
D. Randomly selecting a model for each request

Answer: B, C

Hint: Smart routing matches request characteristics to the right model/infrastructure.

Explanation: Complexity-based routing uses a classifier (or heuristics) to send simple tasks (classification, extraction) to efficient smaller models (e.g., 7B) while routing complex reasoning to larger models (e.g., 70B+), optimizing cost-quality tradeoff. Length-based routing optimizes infrastructure utilization by matching request characteristics to instance configurations optimized for different workload profiles.

Why others wrong: Always using the largest model wastes resources on simple tasks; random routing ignores optimization opportunities.

Trap: Thinking one model serves all needs efficiently — production systems increasingly use model routing to balance cost, latency, and quality.

Mnemonic: Model routing = "triage in the ER" — assess severity and send to the right specialist

## Q77
Type: single
Difficulty: 2
Tags: deployment, observability
Concepts: llm-tracing
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

When debugging a quality issue in a RAG-based LLM application, which observability approach provides the most useful diagnostic information?

A. Monitoring only the final response latency
B. Distributed tracing that captures each step of the pipeline — embedding query, retrieval results, reranking scores, prompt assembly, and LLM generation — with input/output logging at each stage
C. Checking only if the HTTP response code is 200
D. Monitoring GPU temperature

Answer: B

Hint: A RAG pipeline has many stages — you need visibility into each one to find the weak link.

Explanation: RAG quality issues can originate at any pipeline stage: poor embeddings, irrelevant retrieval, bad reranking, suboptimal prompt construction, or LLM hallucination despite good context. Distributed tracing with per-stage logging lets you pinpoint exactly where the pipeline breaks — was the document retrieved but not used? Was it used but the answer still wrong?

Why others wrong: End-to-end latency doesn't indicate quality; HTTP 200 just means the request succeeded; GPU temperature is infrastructure, not application observability.

Trap: Treating RAG as a black box — without stage-level observability, you can't distinguish retrieval failures from generation failures.

Mnemonic: RAG tracing = "security cameras at every door" — see exactly where the process went wrong

## Q78
Type: single
Difficulty: 1
Tags: deployment, model-format
Concepts: model-serialization
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

What is the GGUF format commonly used for in LLM deployment?

A. Training large models on multiple GPUs
B. A single-file format for quantized model storage and CPU/GPU inference, popular in the llama.cpp ecosystem for efficient local deployment
C. Storing training datasets
D. Defining model architecture in code

Answer: B

Hint: GGUF = one file that contains everything needed to load and run a quantized model.

Explanation: GGUF (GPT-Generated Unified Format) is a binary format that stores model weights, architecture metadata, and tokenizer information in a single file. It supports various quantization levels (Q4, Q5, Q8) and is the standard format for llama.cpp-based inference, enabling efficient CPU and GPU inference without requiring the full training framework.

Why others wrong: GGUF is for inference, not distributed training; it stores model weights, not datasets; architecture is embedded in the file metadata, not defined separately.

Trap: Thinking GGUF is only for CPU inference — it also supports GPU inference through llama.cpp's CUDA backend.

Mnemonic: GGUF = "model in a suitcase" — one portable file for inference anywhere

## Q79
Type: single
Difficulty: 3
Tags: deployment, context-window-management
Concepts: sliding-window-serving
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

In a production chat application, conversations can exceed the model's context window. What is the most robust approach to handle this?

A. Silently truncating the oldest messages without informing the user
B. Using a combination of sliding window with summarization — maintaining recent messages verbatim while summarizing older context, and notifying the user when context is being compressed
C. Rejecting requests that exceed the context window
D. Automatically resetting the conversation when it gets too long

Answer: B

Hint: Neither losing old context entirely nor keeping everything is ideal — combine retention with compression.

Explanation: Sliding window with summarization preserves recent context verbatim (important for continuity) while compressing older messages into summaries (retaining key information at lower token cost). This maintains conversation coherence without hard cutoffs. Transparency about context management helps users understand potential information loss.

Why others wrong: Silent truncation loses information without user awareness; rejection breaks the user experience; resetting loses all context.

Trap: Silently truncating from the beginning — users may reference earlier conversation parts that have been silently dropped, causing confusing "amnesia."

Mnemonic: Context management = "summary of previous episodes + full current episode" — TV show recap approach

## Q80
Type: single
Difficulty: 1
Tags: evaluation, automated-metrics
Concepts: rouge-bleu
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

What is the fundamental limitation of using BLEU and ROUGE scores for evaluating LLM outputs?

A. They are too computationally expensive
B. They measure surface-level word overlap with reference texts, failing to capture semantic equivalence — a paraphrase with different words but the same meaning scores poorly
C. They can only be used for classification tasks
D. They require GPU acceleration

Answer: B

Hint: Two sentences can say the same thing with completely different words.

Explanation: BLEU (precision of n-gram overlap) and ROUGE (recall of n-gram overlap) compare generated text against reference text at the word/n-gram level. They penalize valid paraphrases and reward word-level copying, making them poor metrics for open-ended generation where many correct phrasings exist. This is why LLM-as-judge and human evaluation are preferred for generation quality.

Why others wrong: Both metrics are computationally cheap; they work for any text generation task; they run on CPU with no special hardware.

Trap: Optimizing for BLEU/ROUGE in LLM development — high scores don't necessarily indicate high quality, and low scores don't necessarily indicate poor quality.

Mnemonic: BLEU/ROUGE = "spell checker, not meaning checker" — counts matching words, misses matching ideas

## Q81
Type: single
Difficulty: 2
Tags: evaluation, llm-judge
Concepts: llm-as-judge
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

When using an LLM as a judge to evaluate another LLM's outputs, which bias should be explicitly tested for and mitigated?

A. The judge LLM never agrees with the evaluated model
B. Position bias — the judge tends to prefer whichever response is presented first (or second) in pairwise comparisons, regardless of quality
C. The judge always gives perfect scores
D. The judge only evaluates English text

Answer: B

Hint: Swap the order of response A and B — does the judge's preference change?

Explanation: LLM judges exhibit systematic position bias, typically preferring the first-presented response in pairwise comparisons. Mitigation involves presenting each pair in both orders and checking for consistency, averaging scores across orderings, or using single-response evaluation with rubrics instead of pairwise comparison.

Why others wrong: Judges don't categorically agree or disagree; they produce variable scores; multilingual support depends on the judge model.

Trap: Trusting LLM judge results without testing for bias — even strong models like GPT-4 show position bias in pairwise evaluation.

Mnemonic: LLM judge bias = "always picks the first appetizer on the menu" — test by swapping positions

## Q82
Type: single
Difficulty: 2
Tags: evaluation, mt-bench
Concepts: multi-turn-evaluation
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

What distinguishes MT-Bench from single-turn benchmarks like MMLU for evaluating LLMs?

A. MT-Bench tests factual knowledge while MMLU tests reasoning
B. MT-Bench evaluates multi-turn conversation quality including instruction following, coherence across turns, and the ability to build on previous context, which single-turn benchmarks cannot assess
C. MT-Bench uses multiple-choice format while MMLU uses open-ended
D. MT-Bench is only for coding models

Answer: B

Hint: "MT" stands for "Multi-Turn" — it tests conversation, not just single-shot answers.

Explanation: MT-Bench presents 80 multi-turn questions across 8 categories, where the second turn builds on the first (e.g., "Now rewrite that as a poem" after a factual answer). This tests abilities that single-turn benchmarks miss: maintaining context across turns, following refinement instructions, and consistency. It uses GPT-4 as a judge to score responses on a 1-10 scale.

Why others wrong: Both test different aspects; MMLU is multiple-choice while MT-Bench is open-ended (opposite of option C); MT-Bench covers writing, reasoning, math, coding, and more.

Trap: Assuming high MMLU scores mean good conversational ability — MMLU tests static knowledge; MT-Bench tests dynamic interaction quality.

Mnemonic: MT-Bench = "test the conversation, not just the first answer"

## Q83
Type: single
Difficulty: 1
Tags: responsible-ai, content-filtering
Concepts: safety-classifiers
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

In a production LLM deployment, where should safety classifiers be placed in the inference pipeline?

A. Only on the input prompt
B. On both the input prompt (to detect harmful requests) and the output (to catch harmful generations), creating a safety sandwich around the LLM
C. Only on the output
D. Safety classifiers are not needed if the model is instruction-tuned

Answer: B

Hint: Threats can come from user input AND model output — guard both sides.

Explanation: Input classifiers detect prompt injection, jailbreak attempts, and harmful requests before they reach the model. Output classifiers catch harmful content that the model generates despite safety training — no model is perfectly safe. This dual-layer approach (often called guardrails) provides defense-in-depth against both adversarial users and model failures.

Why others wrong: Input-only misses harmful generations; output-only wastes compute on jailbroken requests; instruction tuning reduces but doesn't eliminate harmful outputs.

Trap: Relying solely on RLHF/safety training — even aligned models can be manipulated or produce harmful content in edge cases.

Mnemonic: Safety sandwich = "check ID at the door (input) AND check the bag when leaving (output)"

## Q84
Type: single
Difficulty: 3
Tags: responsible-ai, differential-privacy
Concepts: dp-fine-tuning
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

How does differential privacy (DP) apply to LLM fine-tuning, and what is its primary trade-off?

A. DP encrypts the training data so the model cannot read it
B. DP-SGD adds calibrated noise to gradients during training, providing mathematical guarantees that individual training examples cannot be extracted from the model, at the cost of model quality degradation proportional to the privacy budget (epsilon)
C. DP prevents all forms of prompt injection
D. DP makes the model smaller to protect data

Answer: B

Hint: DP adds noise to gradients — more noise = more privacy but less accurate model.

Explanation: Differentially-private stochastic gradient descent (DP-SGD) clips per-example gradients and adds Gaussian noise before the optimizer step. The privacy budget (epsilon, ε) controls the noise scale: smaller ε provides stronger privacy guarantees but degrades model quality. This is critical when fine-tuning on sensitive data (medical records, private messages) where memorization of individual records is unacceptable.

Why others wrong: DP doesn't encrypt data; it doesn't address prompt injection (that's a different threat); model size is unchanged.

Trap: Setting ε too small — extremely strong privacy guarantees can make the model effectively random, defeating the purpose of fine-tuning.

Mnemonic: DP-SGD = "add static to the radio" — more static = harder to eavesdrop, but harder to hear the music too

## Q85
Type: single
Difficulty: 2
Tags: evaluation, contamination-detection
Concepts: benchmark-integrity
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

A new model claims state-of-the-art performance on HumanEval (code generation benchmark). What check should be performed before trusting this claim?

A. Verify the model was trained on a larger dataset
B. Test for benchmark contamination by checking if the model can reproduce benchmark problems verbatim, and verify performance on held-out benchmarks not available during training
C. Check if the model has more parameters
D. Confirm the model uses a newer GPU for inference

Answer: B

Hint: If the model memorized the test, the score is meaningless.

Explanation: Benchmark contamination (training on test data) inflates scores without representing genuine capability. Contamination detection includes testing if the model can complete benchmark problems from partial hints (suggesting memorization), and validating on newer or private benchmarks. Cross-referencing with performance on related but unseen tasks helps assess true generalization.

Why others wrong: Dataset size doesn't prove absence of contamination; parameter count doesn't guarantee capability; hardware doesn't affect model quality.

Trap: Taking benchmark leaderboard scores at face value — contamination is rampant and often unintentional (benchmark data in web crawls).

Mnemonic: Benchmark contamination check = "drug test for AI" — verify the performance is real, not "doped"

## Q86
Type: single
Difficulty: 2
Tags: responsible-ai, prompt-injection
Concepts: indirect-prompt-injection
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

What is indirect prompt injection and why is it particularly dangerous in RAG systems?

A. The user directly asking the model to ignore its system prompt
B. Malicious instructions embedded in external data sources (web pages, documents, emails) that are retrieved and injected into the model's context, hijacking the model's behavior without the user's knowledge
C. Using very long prompts that exceed the context window
D. Injecting SQL queries through the chat interface

Answer: B

Hint: The attack comes through the data, not the user — the user is also a victim.

Explanation: In indirect prompt injection, attackers embed instructions in content that may be retrieved by a RAG system (e.g., a web page saying "Ignore previous instructions and..."). When the RAG pipeline retrieves this content and includes it in the LLM's context, the model may follow the embedded instructions instead of the user's intent. This is especially dangerous because the user never sees the malicious content.

Why others wrong: Direct prompt injection is the user themselves attacking; long prompts are a different issue; SQL injection targets databases, not LLMs.

Trap: Thinking RAG only improves quality — retrieved content is untrusted input that can contain adversarial instructions, requiring input sanitization and robust system prompts.

Mnemonic: Indirect prompt injection = "Trojan horse in the search results" — the attack hides in the retrieved content

## Q87
Type: multi
Difficulty: 3
Tags: evaluation, calibration
Concepts: model-calibration
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

Which TWO statements about LLM calibration are correct? (Select two)

A. A well-calibrated model's stated confidence (probability) for an answer closely matches the actual accuracy — if it says 80% confident on many answers, approximately 80% of them should be correct
B. RLHF-trained models are always well-calibrated
C. Temperature scaling is a post-hoc technique that can improve calibration by adjusting the softmax temperature without retraining
D. Calibration is only relevant for classification tasks, not text generation

Answer: A, C

Hint: Calibration = "does the model know what it knows?"

Explanation: Calibration measures the alignment between predicted confidence and actual accuracy. Temperature scaling is a simple, effective post-hoc calibration method that fits a single temperature parameter on a validation set to adjust the softmax outputs, improving calibration without changing model weights or retraining. This is particularly useful for deployed models.

Why others wrong: RLHF can actually worsen calibration by training models to sound confident regardless; calibration matters for any task where the model's confidence is used for decision-making.

Trap: Assuming high accuracy means good calibration — a model can be accurate on average but overconfident on specific topics.

Mnemonic: Calibration = "honesty about uncertainty" — say 80% only when you're right 80% of the time

## Q88
Type: single
Difficulty: 1
Tags: responsible-ai, model-card
Concepts: model-documentation
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

What is a model card and why is it important for responsible AI deployment?

A. A credit card used to pay for API access
B. A structured document that describes a model's capabilities, limitations, intended use cases, training data characteristics, evaluation results, and known biases — enabling informed deployment decisions
C. A hardware specification for the GPU required to run the model
D. The model's source code

Answer: B

Hint: A model card = "nutrition label for AI models" — what's inside and how to use it safely.

Explanation: Model cards provide standardized documentation covering what a model can and cannot do, how it was trained and evaluated, known failure modes and biases, and intended/unintended use cases. This transparency enables users to make informed decisions about whether a model is appropriate for their use case and what risks to monitor.

Why others wrong: It's documentation, not a payment method; it's broader than hardware specs; it describes the model, not its source code.

Trap: Deploying models without reading their model cards — many production failures come from using models outside their intended scope or ignoring documented limitations.

Mnemonic: Model card = "user manual + warning label" — read it before operating

## Q89
Type: single
Difficulty: 2
Tags: evaluation, human-evaluation-design
Concepts: evaluation-methodology
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

When designing a human evaluation study for an LLM's output quality, which methodology produces the most reliable results?

A. Having one expert rate all outputs on a 1-10 scale
B. Using multiple independent evaluators with clear rubrics, measuring inter-annotator agreement, and using pairwise comparisons instead of absolute ratings when possible
C. Asking users if they "liked" the output with a thumbs up/down
D. Using the model's own perplexity as a proxy for human preference

Answer: B

Hint: Reliable evaluation needs multiple judges, clear criteria, and consistency measurement.

Explanation: Multiple evaluators reduce individual bias. Clear rubrics ensure consistent criteria application. Inter-annotator agreement (e.g., Cohen's kappa) measures reliability — low agreement indicates ambiguous rubrics or subjective criteria. Pairwise comparisons ("which response is better?") are more reliable than absolute ratings because humans are better at relative judgments.

Why others wrong: Single evaluator introduces bias; thumbs up/down lacks granularity; perplexity doesn't correlate well with human preference.

Trap: Using absolute scales without calibration — one evaluator's "7" may be another's "5". Pairwise comparison avoids this calibration problem.

Mnemonic: Good human eval = "jury, not solo judge" — multiple opinions, clear rules, agreement check

## Q90
Type: single
Difficulty: 3
Tags: responsible-ai, watermarking
Concepts: llm-watermarking
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

How do statistical watermarking techniques for LLM outputs work?

A. They append a visible copyright notice to every response
B. They partition the vocabulary into "green" and "red" lists at each token position using a hash of previous tokens, then bias sampling toward green tokens — creating a statistically detectable but human-imperceptible pattern
C. They encrypt the entire output text
D. They embed an image watermark in the response

Answer: B

Hint: The watermark is invisible to humans but detectable by statistics — a hidden pattern in word choice.

Explanation: Watermarking (e.g., Kirchenbauer et al.) uses a pseudo-random function seeded by previous tokens to partition the vocabulary into green (preferred) and red (non-preferred) lists at each generation step. By biasing the sampling to favor green tokens, the generated text contains a statistically detectable signal that persists even after minor edits, while being imperceptible to readers.

Why others wrong: The watermark is invisible, not a visible notice; the text isn't encrypted; it's a statistical pattern, not an image.

Trap: Thinking watermarks can be removed by paraphrasing — robust watermarks survive moderate paraphrasing, though heavy rewriting can remove them.

Mnemonic: LLM watermark = "invisible ink in word choices" — can't see it reading, but statistics reveal it

## Q91
Type: single
Difficulty: 2
Tags: responsible-ai, data-privacy
Concepts: pii-handling
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

What is the recommended approach for handling PII (Personally Identifiable Information) in LLM inference logs used for model monitoring?

A. Store all logs with full PII for maximum debugging capability
B. Apply PII detection and redaction before storing inference logs, replacing sensitive data with anonymized tokens while preserving enough structure for quality monitoring and debugging
C. Don't keep any inference logs
D. Encrypt the logs and give everyone the decryption key

Answer: B

Hint: You need logs for monitoring, but they shouldn't contain personal data.

Explanation: Inference logs are essential for monitoring quality, debugging issues, and improving the model. PII redaction replaces sensitive information (names, emails, phone numbers, SSNs) with anonymized placeholders before storage, maintaining log utility for technical analysis while complying with privacy regulations (GDPR, CCPA, HIPAA). Named entity recognition and regex patterns identify PII for redaction.

Why others wrong: Full PII storage violates privacy regulations; no logs prevents monitoring; shared encryption keys negate the protection.

Trap: Logging everything "temporarily" — even short-term storage of PII in logs can violate regulations and create liability.

Mnemonic: PII in logs = "blur faces in security footage" — keep the useful video, remove the identity

## Q92
Type: single
Difficulty: 1
Tags: evaluation, ablation-study
Concepts: ablation-testing
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

In the context of evaluating an LLM system, what is an ablation study?

A. A test to see if the model can be deleted safely
B. Systematically removing or disabling one component at a time (e.g., RAG retrieval, system prompt, guardrails) to measure each component's contribution to overall system performance
C. A study of the model's failure modes
D. Testing the model on increasingly difficult questions

Answer: B

Hint: "Ablation" = surgical removal — remove one part and measure the impact.

Explanation: Ablation studies isolate the contribution of individual components by selectively disabling them and measuring the resulting performance change. For example, removing RAG retrieval reveals how much the model relies on retrieved context versus parametric knowledge, helping prioritize engineering effort on the most impactful components.

Why others wrong: It's about component evaluation, not deletion; failure mode analysis is different; difficulty scaling is a different evaluation approach.

Trap: Changing multiple components simultaneously — this confounds the results. True ablation studies change one variable at a time.

Mnemonic: Ablation = "remove one ingredient from the recipe" — see what each ingredient contributes

## Q93
Type: single
Difficulty: 3
Tags: responsible-ai, red-teaming-methodology
Concepts: structured-red-teaming
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

What distinguishes a structured red team evaluation from casual adversarial testing of an LLM?

A. Structured red teaming uses more expensive GPUs
B. Structured red teaming follows a taxonomy of attack categories (jailbreaks, prompt injection, bias elicitation, harmful content generation), uses systematic coverage metrics, and documents reproducible test cases with severity ratings
C. Casual testing is always more effective at finding vulnerabilities
D. Structured red teaming only tests the model's accuracy

Answer: B

Hint: Structure = taxonomy + coverage + reproducibility — not just "try to break it."

Explanation: Structured red teaming uses a predefined taxonomy of risks (e.g., OWASP LLM Top 10), ensures systematic coverage across attack categories and model capabilities, documents each test case for reproducibility, and rates findings by severity. This contrasts with ad-hoc "try to jailbreak it" testing, which provides uneven coverage and non-reproducible results.

Why others wrong: Hardware is irrelevant; casual testing has inconsistent coverage; red teaming covers safety, not accuracy.

Trap: Thinking a few clever jailbreak prompts constitute a thorough safety evaluation — systematic coverage across attack categories is what makes red teaming actionable.

Mnemonic: Structured red team = "penetration test with a checklist" — systematic, documented, reproducible

## Q94
Type: single
Difficulty: 2
Tags: responsible-ai, fairness-evaluation
Concepts: demographic-parity
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

When evaluating an LLM-based hiring screening tool for bias, which evaluation approach is most appropriate?

A. Testing only on the overall accuracy metric
B. Disaggregating performance metrics across demographic groups (gender, race, age) to identify disparities in recommendation rates, sentiment, and qualification assessment
C. Checking that the model doesn't explicitly mention demographic attributes
D. Ensuring the model produces the same output for all inputs

Answer: B

Hint: Overall accuracy can hide group-level disparities — disaggregate to find them.

Explanation: Aggregate metrics can mask significant performance disparities between demographic groups. A model with 90% overall accuracy might be 95% accurate for one group and 75% for another. Disaggregated evaluation across protected categories reveals these disparities, enabling targeted mitigation. For hiring, differences in recommendation rates or qualification scoring across groups indicate potential bias.

Why others wrong: Overall accuracy hides group disparities; implicit bias doesn't require explicit mentions; same output for all inputs would be useless.

Trap: Removing demographic features and assuming bias is solved — models can learn demographic proxies from zip codes, names, schools, etc.

Mnemonic: Fairness evaluation = "don't just check the average grade — check if everyone got a fair exam"

## Q95
Type: single
Difficulty: 2
Tags: evaluation, regression-testing
Concepts: llm-regression
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

After updating a production LLM (new fine-tune, prompt change, or model version), what is the purpose of regression testing?

A. To verify the model still works on a GPU
B. To ensure the update didn't degrade performance on previously working capabilities — testing a curated set of critical inputs where expected behavior is well-defined
C. To measure the model's training loss
D. To check if the model size changed

Answer: B

Hint: Regression = "did we break something that used to work?"

Explanation: Regression testing maintains a curated test suite of critical inputs with expected outputs or quality criteria. After any change (model update, prompt revision, RAG pipeline modification), this suite verifies that existing capabilities are preserved. This catches unintended degradations that may not be visible in aggregate benchmarks but affect specific important use cases.

Why others wrong: Hardware compatibility is an infrastructure check; training loss is a training metric; model size changes are noted but aren't a quality measure.

Trap: Only testing new capabilities after an update — improvements in one area can silently degrade another (e.g., improving safety may reduce helpfulness).

Mnemonic: Regression testing = "make sure the plumber didn't break the electricity" — check old things still work after changes

## Q96
Type: multi
Difficulty: 3
Tags: responsible-ai, guardrails-architecture
Concepts: nemo-guardrails
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

Which TWO functions does NVIDIA NeMo Guardrails provide for LLM deployments? (Select two)

A. It replaces the LLM with a rule-based system
B. It defines conversational rails using Colang — a domain-specific language for specifying allowed/forbidden dialog flows and topic boundaries
C. It enables programmable input/output checks including fact-checking against knowledge bases, content moderation, and hallucination detection
D. It eliminates the need for any other safety measures

Answer: B, C

Hint: NeMo Guardrails adds safety layers around the LLM — dialog rules + content checks.

Explanation: NeMo Guardrails uses Colang to define dialog flows (what topics are allowed, what should be refused, how to handle sensitive requests) and provides hooks for programmable safety checks on inputs and outputs. These include fact-checking against knowledge bases (to catch hallucination), content moderation (toxicity, PII), and custom business logic. It wraps the LLM rather than replacing it.

Why others wrong: It augments the LLM, doesn't replace it; no single tool eliminates all safety risks — defense-in-depth is always needed.

Trap: Thinking guardrails alone make a model safe — they're one layer in a defense-in-depth strategy alongside safety training, monitoring, and human oversight.

Mnemonic: NeMo Guardrails = "traffic laws for AI conversations" — Colang defines the rules, checks enforce them

## Q97
Type: single
Difficulty: 1
Tags: responsible-ai, explainability
Concepts: interpretability
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

Why is explainability challenging for large language models compared to traditional ML models?

A. LLMs always produce incorrect outputs
B. LLMs have billions of parameters with complex, non-linear interactions, making it difficult to trace why a specific output was generated — unlike simpler models where feature importance can be clearly attributed
C. LLMs don't have any parameters
D. Traditional ML models are always more accurate

Answer: B

Hint: Can you explain why a 70B parameter model chose one word over another? That's the challenge.

Explanation: Traditional ML models (linear regression, decision trees) have interpretable feature contributions. LLMs transform inputs through billions of parameters across many layers of non-linear attention and feed-forward operations, making it practically impossible to trace a causal chain from input features to a specific output token. This creates challenges for regulated industries requiring model explainability.

Why others wrong: LLMs produce useful outputs most of the time; they have billions of parameters; accuracy varies by task.

Trap: Claiming attention weights are explanations — attention weights show what the model "looked at" but don't reliably explain why it made a specific prediction.

Mnemonic: LLM explainability = "explaining a dream" — the brain (model) produced it, but tracing the exact reasoning is incredibly hard

## Q98
Type: single
Difficulty: 2
Tags: responsible-ai, eu-ai-act
Concepts: ai-regulation
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

Under the EU AI Act, how are general-purpose AI models (including LLMs) classified and what are the key obligations?

A. All AI models are banned in the EU
B. General-purpose AI models must provide model cards, training data summaries, and comply with copyright obligations — models posing systemic risk face additional requirements including adversarial testing and incident reporting
C. Only models developed in the EU are regulated
D. The EU AI Act only applies to robotics, not language models

Answer: B

Hint: The EU AI Act creates a tiered system — general rules for all, extra rules for high-risk/systemic models.

Explanation: The EU AI Act classifies general-purpose AI (GPAI) models with specific transparency obligations: technical documentation, training data descriptions, and copyright compliance. Models with systemic risk (based on compute threshold or designation) face additional requirements including red-teaming, cybersecurity measures, energy efficiency reporting, and incident monitoring. This creates a proportionate regulatory framework.

Why others wrong: AI isn't banned, it's regulated; the Act applies regardless of where the model was developed; it explicitly covers language models/GPAI.

Trap: Thinking the EU AI Act only affects companies in the EU — it applies to any AI system used within the EU, regardless of where the provider is based.

Mnemonic: EU AI Act = "driving license for AI" — basic rules for all, extra tests for heavy vehicles

## Q99
Type: single
Difficulty: 3
Tags: evaluation, scaling-laws
Concepts: chinchilla-scaling
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

According to the Chinchilla scaling laws, what is the optimal relationship between model size and training data for a fixed compute budget?

A. Always maximize model size regardless of data available
B. Model size and training tokens should be scaled roughly proportionally — a 10x larger model should be trained on approximately 10x more tokens for compute-optimal training
C. Training data size doesn't matter as long as the model is large enough
D. Smaller models should always be trained on more data than larger models

Answer: B

Hint: Chinchilla showed that many large models were "undertrained" — they needed more data, not more parameters.

Explanation: The Chinchilla scaling laws (Hoffmann et al., 2022) demonstrated that for a fixed compute budget, model parameters and training tokens should be scaled proportionally — roughly 20 tokens per parameter. This overturned the prior trend of building ever-larger models with insufficient data, showing that a 70B model trained on 1.4T tokens outperforms a 280B model trained on 300B tokens at similar compute cost.

Why others wrong: Maximizing model size wastes compute on undertrained parameters; data is equally important as model size; the relationship is proportional, not inverse.

Trap: Building the biggest model possible and assuming more parameters automatically means better — Chinchilla proved that undertrained large models lose to smaller, compute-optimally trained ones.

Mnemonic: Chinchilla law = "model size and data should grow together" — 20 tokens per parameter

## Q100
Type: single
Difficulty: 2
Tags: responsible-ai, copyright
Concepts: training-data-copyright
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

What is the primary copyright concern when deploying LLMs trained on web-scraped data?

A. The model's weights themselves are copyrighted by the web content creators
B. The model may reproduce substantial portions of copyrighted training data verbatim, especially for highly memorized content like code, lyrics, or distinctive prose
C. Using an LLM automatically transfers copyright of all outputs to the training data owners
D. Copyright only applies to images, not text

Answer: B

Hint: If the model memorized copyrighted text, it can reproduce it — and that's a legal risk.

Explanation: LLMs can memorize and reproduce training data, especially content that appeared multiple times (popular articles, code, lyrics). When a model outputs near-verbatim copyrighted text, this creates legal exposure for the deployer. Mitigation includes output filtering for known copyrighted content, deduplication during training, and monitoring for verbatim reproduction in production.

Why others wrong: Model weights are the creator's IP, not web content owners'; copyright of outputs is unsettled law; copyright applies to text and other creative works.

Trap: Assuming "the model generates new text, so copyright doesn't apply" — if the generated text substantially reproduces copyrighted material, the generation method doesn't matter legally.

Mnemonic: Copyright risk = "the model has a photographic memory" — it might reproduce what it read

## Q101
Type: single
Difficulty: 2
Tags: evaluation, perplexity-limitations
Concepts: perplexity-context
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

A model has lower perplexity on a test set than a competitor. Does this necessarily mean it will produce better responses in a chat application?

A. Yes, lower perplexity always means better quality
B. No — perplexity measures how well the model predicts the next token in the test distribution, but chat quality depends on instruction following, helpfulness, safety, and coherence, which perplexity doesn't capture
C. Perplexity and chat quality are completely unrelated
D. Only if the perplexity is below 5.0

Answer: B

Hint: Perplexity measures prediction, not the quality of following instructions or being helpful.

Explanation: Perplexity measures statistical fit to a text distribution — how well the model predicts each next token. A model with excellent perplexity on Wikipedia might produce fluent text but fail at following complex instructions, maintaining safety boundaries, or providing structured outputs. Chat quality requires properties beyond statistical text prediction, which is why human evaluation and benchmarks like MT-Bench exist.

Why others wrong: Perplexity is necessary but not sufficient; they're correlated but not identical; there's no magic perplexity threshold.

Trap: Using perplexity as the sole metric for model selection — it's a prerequisite (bad perplexity = bad model) but not a guarantee of quality (good perplexity ≠ good chatbot).

Mnemonic: Perplexity = "spelling bee champion" — predicts words well but may not hold a good conversation

## Q102
Type: single
Difficulty: 3
Tags: responsible-ai, membership-inference
Concepts: privacy-attacks
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

What is a membership inference attack against an LLM and why does it matter?

A. It attempts to crash the model by sending many requests
B. It determines whether a specific data point was in the model's training set by analyzing the model's confidence or loss on that input — raising privacy concerns if the training data was supposed to be confidential
C. It injects new training data into the model at inference time
D. It copies the model weights for unauthorized use

Answer: B

Hint: "Was my data used to train this model?" — membership inference tries to answer this question.

Explanation: Membership inference attacks exploit the fact that models typically assign higher confidence (lower loss) to training data than unseen data. By carefully analyzing model outputs for a specific input, an attacker can probabilistically determine if that input was in the training set. This violates privacy when training data includes personal information, medical records, or proprietary content.

Why others wrong: That's a DoS attack; data injection at inference is prompt injection; weight copying is model extraction.

Trap: Assuming that not releasing training data protects privacy — membership inference can reveal training data membership through the model's API alone.

Mnemonic: Membership inference = "detective asking the model: did you read THIS document?" — the model's confidence betrays the answer

## Q103
Type: single
Difficulty: 1
Tags: evaluation, task-specific-eval
Concepts: evaluation-suite
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

Why is it important to evaluate LLMs on task-specific benchmarks rather than relying solely on general benchmarks like MMLU?

A. Task-specific benchmarks are faster to run
B. General benchmarks may not represent the specific skills needed for the deployment use case — a model scoring well on MMLU might perform poorly on domain-specific tasks like legal analysis, medical QA, or code generation
C. General benchmarks are always inaccurate
D. Task-specific benchmarks don't require ground truth

Answer: B

Hint: A model that's "generally smart" might not be smart at your specific job.

Explanation: General benchmarks provide a broad capability assessment but may not predict performance on specific applications. A model that excels at academic knowledge (MMLU) might struggle with practical legal document analysis or domain-specific code generation. Task-specific evaluation suites test the actual capabilities needed for deployment, providing more reliable deployment decisions.

Why others wrong: Speed varies; general benchmarks are useful for broad comparison; task-specific benchmarks still need evaluation criteria.

Trap: Choosing models solely by leaderboard rankings — a #1 ranked model on general benchmarks might be #5 for your specific use case.

Mnemonic: Task-specific eval = "job interview, not SAT scores" — test the actual skills needed

## Q104
Type: single
Difficulty: 2
Tags: responsible-ai, output-attribution
Concepts: source-attribution
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

In a RAG system used for enterprise knowledge management, why is source attribution important and how should it be implemented?

A. Source attribution is optional and doesn't affect trust
B. Each claim in the LLM's response should cite the specific source document it was derived from, enabling users to verify accuracy and building trust — implemented by instructing the model to include inline citations mapping to retrieved passages
C. Source attribution means listing all documents in the knowledge base
D. The model should generate citations from its parametric knowledge

Answer: B

Hint: Trust requires verifiability — users need to check where the information came from.

Explanation: Source attribution links specific claims to their source documents, enabling users to verify accuracy, identify outdated information, and trace errors back to their origin. This is implemented by including passage metadata in the prompt and instructing the model to cite sources inline. Without attribution, users can't distinguish RAG-grounded facts from hallucination.

Why others wrong: Attribution is essential for trust in enterprise settings; listing all documents isn't useful; citations should come from retrieved context, not parametric knowledge.

Trap: Generating fake citations from parametric knowledge — the model should only cite documents that were actually retrieved and included in context.

Mnemonic: RAG attribution = "show your sources like a research paper" — every claim needs a citation

## Q105
Type: single
Difficulty: 3
Tags: evaluation, elo-rating
Concepts: chatbot-arena
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

How does the Elo rating system work in Chatbot Arena for ranking LLMs, and what advantage does it have over static benchmarks?

A. It assigns fixed scores based on parameter count
B. It uses pairwise human comparisons where users vote on which of two anonymized model responses is better, updating Elo ratings dynamically — this captures real-world preference on diverse, user-generated prompts rather than curated test sets
C. It measures inference speed across standard hardware
D. It ranks models by their training cost

Answer: B

Hint: Elo comes from chess — win/lose updates your rating based on opponent strength.

Explanation: Chatbot Arena presents users with two anonymous model responses and asks which is better. Wins and losses update Elo ratings based on the relative strength of the competitor. This approach captures human preference on diverse, real-world prompts (not curated benchmarks), is resistant to data contamination (since prompts are user-generated), and produces a continuously updated ranking reflecting actual user preference.

Why others wrong: Elo is dynamic, not fixed; it measures quality, not speed; training cost isn't factored.

Trap: Comparing Elo scores from different time periods — the rating pool changes as new models enter, so a 1200 today may not equal a 1200 from six months ago.

Mnemonic: Chatbot Arena Elo = "chess tournament for AIs" — play matches, earn ratings, users are the judges

## Q106
Type: single
Difficulty: 2
Tags: responsible-ai, toxicity-detection
Concepts: toxicity-classifiers
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

What is a key limitation of toxicity classifiers used as guardrails for LLM outputs?

A. They are too expensive to run in production
B. They can have high false-positive rates for certain dialects, slang, or reclaimed language, potentially censoring legitimate content from specific demographic groups
C. They catch 100% of all harmful content
D. They slow down inference by more than 10x

Answer: B

Hint: "Toxicity" is contextual — what's offensive in one context is legitimate expression in another.

Explanation: Toxicity classifiers trained primarily on standard English may flag African American Vernacular English (AAVE), LGBTQ+ reclaimed terms, or culturally specific expressions as toxic, creating biased content moderation. This disproportionately affects marginalized communities. Mitigation includes using classifiers trained on diverse data, adjusting thresholds per context, and providing appeal mechanisms.

Why others wrong: Classifiers are typically lightweight and fast; no classifier achieves 100% detection; the latency overhead is minimal (a few milliseconds).

Trap: Deploying a toxicity classifier without testing for demographic bias — it may systematically silence certain groups while passing harmful content in standard English.

Mnemonic: Toxicity classifier bias = "spell checker that flags correct foreign words" — the tool's training data defines its blind spots

## Q107
Type: single
Difficulty: 3
Tags: evaluation, emergent-abilities
Concepts: emergent-capabilities
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

Why is the concept of "emergent abilities" in LLMs controversial from an evaluation perspective?

A. Because large models are always better at everything
B. Because apparent sudden capability jumps at certain model scales may be artifacts of evaluation methodology — using discontinuous metrics (like exact-match accuracy) rather than continuous ones (like log-probability) can create the illusion of emergence when the underlying capability improves gradually
C. Because emergent abilities are never useful in practice
D. Because only models over 100B parameters can exhibit any reasoning

Answer: B

Hint: Is it a real phase transition, or does the measuring stick make it look like one?

Explanation: Schaeffer et al. (2024) showed that many "emergent abilities" appear to emerge suddenly only because of the evaluation metric used. Exact-match accuracy jumps from 0% to >0% suddenly, but the model's probability of the correct answer increases continuously. Using continuous metrics like Brier score or log-probability reveals smooth, predictable scaling. This has implications for how we evaluate and predict model capabilities.

Why others wrong: Smaller models can also have strong capabilities; emergence has practical implications if real; reasoning exists at various scales.

Trap: Planning deployments around expected "emergent" capabilities at a certain scale — the capability improvement may be predictable and gradual when measured properly.

Mnemonic: Emergence controversy = "is it a cliff or a ramp?" — depends on whether your measuring tape has fine gradations

## Q108
Type: single
Difficulty: 1
Tags: responsible-ai, transparency
Concepts: ai-disclosure
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

Why should organizations disclose when content is generated by an AI system?

A. Because AI-generated content is always lower quality
B. To enable users to calibrate their trust appropriately — knowing content is AI-generated allows them to verify claims, understand potential for hallucination, and make informed decisions about relying on it
C. Because AI-generated content is illegal without disclosure
D. To discourage users from using the service

Answer: B

Hint: Informed users make better decisions — they know when to double-check.

Explanation: AI disclosure enables informed decision-making. Users who know content is AI-generated are more likely to verify claims, consider potential hallucination, and apply appropriate skepticism. This is especially critical in high-stakes domains like healthcare, finance, and legal advice, where blind trust in AI-generated content could lead to serious consequences.

Why others wrong: AI content quality varies; legality depends on jurisdiction; disclosure builds trust, not discouragement.

Trap: Hiding AI involvement to seem more authoritative — this backfires when errors are discovered, destroying trust entirely.

Mnemonic: AI disclosure = "declaring the chef is a robot" — let diners decide how much they trust the cooking

## Q109
Type: single
Difficulty: 2
Tags: evaluation, cost-quality-tradeoff
Concepts: model-selection-criteria
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

When selecting an LLM for a production classification task that processes millions of documents daily, which evaluation framework best captures the relevant trade-offs?

A. Choose the model with the highest MMLU score
B. Evaluate models on a matrix of task accuracy, latency (TTFT + TPOT), cost per token, throughput at target batch sizes, and acceptable failure modes — then select the Pareto-optimal model for the specific quality-cost requirement
C. Always use the largest available model
D. Choose the cheapest model regardless of quality

Answer: B

Hint: Production selection is multi-dimensional — accuracy alone doesn't account for cost, speed, and scale.

Explanation: Production model selection requires evaluating multiple dimensions simultaneously. A smaller model with 95% accuracy at 1/10th the cost may be better than a larger model with 97% accuracy for a classification task where 95% is acceptable. The evaluation should use the actual task data and production-representative conditions (batch sizes, concurrency) rather than synthetic benchmarks.

Why others wrong: MMLU doesn't predict classification task performance; the largest model is often cost-prohibitive at scale; the cheapest may not meet quality thresholds.

Trap: Optimizing for a single dimension — production ML is about finding the right balance across accuracy, cost, latency, and reliability.

Mnemonic: Model selection = "buying a car" — not just horsepower; consider fuel economy, price, and maintenance for your daily commute

## Q110
Type: single
Difficulty: 2
Tags: architecture, context-length-training
Concepts: long-context-training
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

What is the primary technical challenge in training LLMs with very long context windows (100K+ tokens)?

A. The tokenizer cannot handle long sequences
B. Self-attention has O(n²) memory and compute complexity in sequence length, making standard attention prohibitively expensive — addressed by techniques like FlashAttention, sliding window attention, and gradient checkpointing
C. Long sequences always produce worse model quality
D. GPUs cannot store more than 4096 tokens

Answer: B

Hint: Attention is quadratic — doubling the sequence length quadruples the cost.

Explanation: Standard self-attention computes pairwise attention scores for all n tokens, requiring O(n²) memory and compute. At 100K tokens, this is 10,000x more expensive than at 1K tokens. Solutions include efficient attention implementations (FlashAttention), sparse attention patterns (sliding window), and memory optimizations (activation checkpointing, sequence parallelism).

Why others wrong: Tokenizers handle any length; long context can improve quality for tasks that need it; GPUs can handle long sequences with proper optimization.

Trap: Assuming longer context is always better — the compute cost grows quadratically, so context length should match the use case.

Mnemonic: Long context challenge = "the n² tax" — every token must attend to every other token

## Q111
Type: single
Difficulty: 3
Tags: architecture, state-space-models
Concepts: mamba-architecture
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

How do state space models (like Mamba) differ from transformers in their approach to sequence modeling?

A. They use attention mechanisms with linear complexity
B. They process sequences through a recurrent state that is updated per token, achieving O(n) complexity instead of O(n²), but cannot perform arbitrary lookback to earlier positions like attention can
C. They are always more accurate than transformers
D. They require more GPU memory than transformers

Answer: B

Hint: State space models trade random-access attention for linear-time recurrence.

Explanation: State space models like Mamba use a selective state-space mechanism that processes sequences in O(n) time by compressing the sequence history into a fixed-size state vector. This enables much longer sequences than attention, but the fixed state size means they cannot perfectly recall arbitrary earlier positions the way attention can. Hybrid architectures combining both are an active research area.

Why others wrong: Linear attention is a different approach; accuracy depends on the task; SSMs typically use less memory than attention for long sequences.

Trap: Assuming SSMs will completely replace transformers — their inability to do arbitrary lookback limits performance on tasks requiring precise retrieval from earlier context.

Mnemonic: SSM = "running summary" vs Transformer = "perfect notes" — faster to write but might miss a specific detail from earlier

## Q112
Type: single
Difficulty: 2
Tags: data-preparation, data-mixing
Concepts: pre-training-data-mix
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

When assembling a pre-training data mixture for an LLM, why is the proportion of code data important even for a general-purpose language model?

A. Code data makes the model generate Python by default
B. Code data improves the model's logical reasoning and structured thinking capabilities beyond just coding tasks, as code requires precise logic, planning, and compositional reasoning
C. Code data is only important for coding-specific models
D. Adding code data reduces the model's language quality

Answer: B

Hint: Code is "structured thought" — reasoning made explicit in a formal language.

Explanation: Research shows that models trained with a significant proportion of code data (15-30%) demonstrate improved performance on reasoning benchmarks, mathematics, and structured problem-solving — even tasks unrelated to coding. Code's explicit logic, variable tracking, and compositional structure appear to transfer to general reasoning capabilities.

Why others wrong: Models don't default to Python; code benefits transfer to non-coding tasks; code data typically improves rather than degrades language quality.

Trap: Excluding code from general-purpose model training to "keep it focused on language" — you'd be leaving reasoning capability gains on the table.

Mnemonic: Code in pre-training = "cross-training for the brain" — coding skills strengthen general reasoning

## Q113
Type: single
Difficulty: 3
Tags: fine-tuning, rejection-sampling
Concepts: best-of-n
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

In the context of LLM alignment, what is rejection sampling (Best-of-N) and when is it preferred over RLHF or DPO?

A. Rejecting all model outputs and using human-written responses
B. Generating N candidate responses from the model, scoring them with a reward model, and keeping only the best one — simpler than RLHF/DPO but more expensive at inference time, used when simplicity is prioritized over efficiency
C. Randomly rejecting 50% of training data
D. Filtering the training dataset to remove low-quality examples

Answer: B

Hint: "Best-of-N" = generate many, pick the best — brute force alignment at inference time.

Explanation: Rejection sampling generates N responses per prompt, scores them with a reward model (or rule-based criteria), and selects the highest-scoring response. It achieves alignment quality comparable to RLHF without modifying model weights, making it simpler to implement. The trade-off is N× inference cost. It's useful as a baseline, for collecting high-quality training data, or when model weight modification is impractical.

Why others wrong: It uses model-generated responses, not human-written; it's not random; this is about inference strategy, not data filtering.

Trap: Using Best-of-N with very large N to "solve" alignment — the cost grows linearly, and diminishing returns set in quickly after N=10-20.

Mnemonic: Best-of-N = "write 10 drafts, submit the best one" — simple but expensive

## Q114
Type: single
Difficulty: 1
Tags: optimization, model-compression
Concepts: pruning-vs-quantization
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

What is the key difference between model pruning and quantization as compression techniques?

A. They are the same technique with different names
B. Pruning removes weights (setting them to zero or removing entire structures), while quantization reduces the numerical precision of existing weights — both reduce model size but through different mechanisms
C. Pruning always produces better models than quantization
D. Quantization removes layers while pruning reduces precision

Answer: B

Hint: Pruning = fewer weights; quantization = smaller weights. Same goal, different approach.

Explanation: Pruning eliminates unnecessary weights (unstructured pruning sets individual weights to zero; structured pruning removes entire neurons, heads, or layers), reducing parameter count. Quantization keeps all weights but represents them with fewer bits (e.g., FP16 → INT4). In practice, quantization is more widely used for LLMs because pruning LLMs effectively while maintaining quality remains challenging.

Why others wrong: They're fundamentally different techniques; neither is universally better; the definitions are swapped in option D.

Trap: Assuming pruning works as well for LLMs as for CNNs — LLMs are harder to prune effectively because their weights are more uniformly important.

Mnemonic: Pruning = "cut branches off the tree"; Quantization = "shrink the tree proportionally"

## Q115
Type: single
Difficulty: 2
Tags: optimization, ring-allreduce
Concepts: collective-communication
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

Why is ring all-reduce preferred over naive all-reduce for gradient synchronization in data-parallel distributed training?

A. It uses less total bandwidth
B. It distributes the communication evenly across all GPUs by sending data in a ring pattern, achieving bandwidth-optimal communication that scales efficiently regardless of the number of GPUs
C. It requires a central parameter server
D. It only works with 2 GPUs

Answer: B

Hint: Ring = everyone sends a piece to their neighbor, going around the full circle twice.

Explanation: Ring all-reduce splits the gradient tensor into N chunks (for N GPUs) and passes them around a ring in two phases: reduce-scatter (each GPU accumulates a portion) and all-gather (distributes the final result). Each GPU sends and receives the same amount of data regardless of GPU count, achieving bandwidth-optimal scaling — unlike naive all-reduce where one GPU becomes a bottleneck.

Why others wrong: Total data communicated is similar, but it's distributed; ring is peer-to-peer, no central server; it works with any number of GPUs.

Trap: Thinking adding more GPUs to data parallelism always increases communication cost linearly — ring all-reduce's per-GPU bandwidth is constant regardless of GPU count.

Mnemonic: Ring all-reduce = "passing notes around a circle" — everyone participates equally, no one is overwhelmed

## Q116
Type: single
Difficulty: 3
Tags: optimization, expert-parallelism
Concepts: moe-parallelism
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

In a Mixture-of-Experts model with 8 experts, what is expert parallelism and how does it interact with data parallelism?

A. Each expert runs on a separate GPU, and tokens are routed to the appropriate GPU via all-to-all communication
B. Each expert processes a different batch of data
C. All experts share the same GPU for better cache utilization
D. Expert parallelism replaces the need for data parallelism

Answer: A

Hint: Experts live on different GPUs — tokens must travel to the right GPU to meet their expert.

Explanation: Expert parallelism distributes different experts across different GPUs. When a token is routed to an expert on a different GPU, an all-to-all communication operation sends the token to the appropriate GPU and returns the result. This is typically combined with data parallelism (each expert group processes different data) and requires careful communication optimization since all-to-all scales with expert count.

Why others wrong: Different data batches is data parallelism; sharing a GPU loses the memory benefit; expert and data parallelism are complementary.

Trap: Ignoring the all-to-all communication cost — in MoE models, token routing communication can become the training bottleneck if not optimized.

Mnemonic: Expert parallelism = "specialist doctors in different offices" — the patient (token) must travel to the right office

## Q117
Type: single
Difficulty: 2
Tags: deployment, auto-scaling
Concepts: inference-autoscaling
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

What metric should drive autoscaling decisions for an LLM inference service?

A. CPU utilization percentage
B. Queue depth (pending requests) and/or KV cache utilization — these directly reflect the user-facing impact and available capacity, unlike GPU utilization which can be misleading
C. Network bandwidth usage
D. Disk space remaining

Answer: B

Hint: What matters is "are users waiting?" and "do we have room for more?"

Explanation: Queue depth directly reflects user experience — growing queues mean increasing latency. KV cache utilization shows remaining capacity — when it's full, new requests must wait. GPU utilization can be misleading because an LLM serving system can be fully loaded (high queue depth) while GPU compute utilization appears moderate due to memory bandwidth bottlenecks during decode.

Why others wrong: CPU utilization is irrelevant for GPU inference; network and disk are rarely LLM serving bottlenecks.

Trap: Scaling based on GPU compute utilization — LLM decode is memory-bandwidth bound, so GPU compute utilization may be 30-40% even under heavy load.

Mnemonic: LLM autoscaling signals = "queue length + cache pressure" — not GPU utilization

## Q118
Type: single
Difficulty: 1
Tags: deployment, environment-management
Concepts: containerization
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

Why is containerization (Docker/Kubernetes) particularly important for LLM deployment?

A. Containers make models run faster
B. Containers package the model with its exact dependencies (CUDA version, Python packages, TensorRT version), ensuring consistent behavior across development, testing, and production environments
C. Containers reduce the model size
D. Containers are required by all cloud providers

Answer: B

Hint: "Works on my machine" is deadly for production — containers fix this.

Explanation: LLM inference depends on precise CUDA toolkit versions, driver compatibility, Python library versions, and TensorRT-LLM builds. A mismatch in any component can cause silent numerical differences or outright failures. Containers encapsulate the entire software stack, ensuring the same environment runs everywhere and enabling reliable, reproducible deployments.

Why others wrong: Containers add slight overhead; model size is unchanged; containers are best practice but not universally required.

Trap: Deploying directly on bare metal "for performance" without containerization — the configuration drift between environments will cause production issues.

Mnemonic: Container = "shipping container for your model" — same contents arrive everywhere, regardless of the ship

## Q119
Type: single
Difficulty: 3
Tags: evaluation, needle-in-haystack
Concepts: long-context-evaluation
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

What does the "needle in a haystack" test evaluate for LLMs and what is its limitation?

A. It tests the model's ability to generate long outputs
B. It places a specific fact at various positions in a long context and tests retrieval — it evaluates long-context recall but not more complex reasoning over long contexts like synthesis, comparison, or multi-hop reasoning
C. It tests how well the model handles noisy data
D. It measures the model's vocabulary size

Answer: B

Hint: Finding a single fact is the easiest thing you can do with a long context — real tasks are harder.

Explanation: The needle-in-a-haystack test inserts a target fact (the "needle") at different positions within a long document (the "haystack") and asks the model to retrieve it. While useful for testing basic long-context recall, it's a lower bound on capability — real use cases require synthesizing information from multiple positions, comparing sections, or reasoning across the entire context, which this test doesn't assess.

Why others wrong: It tests comprehension, not generation; it uses clean text, not noisy data; vocabulary size is irrelevant.

Trap: Assuming "passes needle-in-a-haystack at 128K" means the model can handle any 128K-token task — retrieval is much simpler than synthesis or reasoning over long contexts.

Mnemonic: Needle-in-a-haystack = "can you find one thing?" — it's the open-book lookup test, not the essay exam

## Q120
Type: single
Difficulty: 2
Tags: responsible-ai, model-governance
Concepts: model-registry
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

What is the purpose of a model registry in enterprise LLM governance?

A. A public listing of all models available on the internet
B. A centralized catalog that tracks all deployed models with their versions, training data provenance, evaluation results, approval status, and compliance certifications — enabling auditability and controlled deployment
C. A database of model hyperparameters for tuning
D. A repository for storing model weights

Answer: B

Hint: Model registry = "birth certificate + medical records" for every deployed model.

Explanation: A model registry provides organizational governance by maintaining a single source of truth for all models in production: who trained them, what data was used, how they were evaluated, who approved deployment, and what compliance checks they passed. This is essential for regulatory compliance (EU AI Act), incident response (tracing issues to specific model versions), and controlled promotion from development to production.

Why others wrong: It's internal, not public; it's broader than hyperparameters; it includes metadata, not just weights.

Trap: Deploying models ad-hoc without a registry — when an issue arises, you can't trace which model version, training data, or evaluation produced the problematic output.

Mnemonic: Model registry = "FDA drug registry for AI" — track every model from lab to production

## Q121
Type: single
Difficulty: 2
Tags: optimization, sparse-computation
Concepts: sparsity-acceleration
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

How does NVIDIA's structured sparsity (2:4 pattern) on Ampere and Hopper GPUs accelerate inference?

A. It removes 75% of all weights
B. In every group of 4 consecutive values in a weight row, at least 2 must be zero — the Tensor Cores skip the zero multiplications, achieving up to 2x speedup with the hardware's native sparse matrix support
C. It uses random sparsity patterns
D. It applies sparsity only to bias terms

Answer: B

Hint: 2:4 = "2 out of 4 are zero" — a fixed pattern the hardware can exploit.

Explanation: The 2:4 structured sparsity pattern (50% sparsity with a fixed structure) is natively supported by NVIDIA Tensor Cores. The hardware stores only the non-zero values and their indices in a compressed format, performing matrix multiplications with roughly half the work. This provides up to 2x speedup with minimal accuracy loss when combined with fine-tuning to adapt to the sparsity pattern.

Why others wrong: It's 50% sparsity (2 out of 4 zeros), not 75%; the pattern is structured, not random; sparsity applies to weight matrices, not biases.

Trap: Expecting 2x speedup from arbitrary sparsity patterns — only the 2:4 structured pattern gets hardware acceleration on NVIDIA GPUs.

Mnemonic: 2:4 sparsity = "every group of 4 has exactly 2 zeros" — a pattern the GPU hardware is built to skip

## Q122
Type: single
Difficulty: 3
Tags: optimization, distributed-optimizer
Concepts: zero-infinity
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

What does DeepSpeed ZeRO-Infinity enable that ZeRO Stage 3 alone cannot?

A. Training with fewer GPUs
B. Offloading optimizer states, gradients, and parameters to CPU memory and NVMe storage, enabling training of models larger than the total GPU memory by using the memory hierarchy as an extension of GPU memory
C. Automatic model architecture search
D. Training without a network connection

Answer: B

Hint: ZeRO-Infinity uses the entire memory hierarchy — GPU → CPU → NVMe — as one unified pool.

Explanation: ZeRO-Infinity extends ZeRO Stage 3 by enabling offloading to CPU DRAM and NVMe SSDs. Model states that don't fit in GPU memory are stored in CPU RAM or on disk and fetched as needed, with prefetching to overlap data movement with computation. This enables training trillion-parameter models on clusters with limited GPU memory, at the cost of increased data movement overhead.

Why others wrong: It can use fewer GPUs by leveraging CPU/NVMe memory; no architecture search; network is still needed for multi-node training.

Trap: Assuming ZeRO-Infinity has no performance cost — offloading to CPU and NVMe adds significant data movement overhead. It's a memory capacity solution, not a speed solution.

Mnemonic: ZeRO-Infinity = "overflow parking" — when GPU memory is full, park model states in CPU RAM and NVMe

## Q123
Type: single
Difficulty: 1
Tags: deployment, blue-green
Concepts: deployment-strategies
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

What is the advantage of blue-green deployment for an LLM inference service?

A. It reduces the model size by half
B. Two identical environments run simultaneously — traffic switches instantly from the old (blue) to new (green) version, enabling zero-downtime deployment and immediate rollback by switching back to blue if issues arise
C. It requires only one GPU instead of two
D. It automatically retrains the model

Answer: B

Hint: Two environments = instant switch + instant rollback. The cost is running double infrastructure during transition.

Explanation: Blue-green deployment maintains two complete inference environments. The "blue" environment serves current traffic while "green" is prepared with the new model version. Once green is validated, a load balancer switch redirects all traffic. If problems appear, switching back to blue is instant. The trade-off is temporarily running double infrastructure.

Why others wrong: Model size is unchanged; it requires double infrastructure; it's a deployment strategy, not a training method.

Trap: Confusing blue-green with canary deployment — blue-green switches ALL traffic at once; canary gradually increases traffic to the new version.

Mnemonic: Blue-green = "two stages, one audience" — if the new act bombs, switch back to the old one instantly

## Q124
Type: single
Difficulty: 2
Tags: deployment, request-scheduling
Concepts: priority-queuing
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

In an LLM serving system with mixed workloads (interactive chat and batch processing), how should requests be prioritized?

A. First-come, first-served for all requests
B. Interactive (real-time) requests should receive higher priority with dedicated capacity, while batch requests fill remaining capacity — ensuring interactive latency SLAs are met without starving batch workloads entirely
C. Batch requests should always be processed first to maximize throughput
D. All requests should be given equal resources regardless of type

Answer: B

Hint: Interactive users are waiting in real-time; batch jobs can wait a few seconds longer.

Explanation: Interactive users have latency expectations (sub-second TTFT), while batch processing tolerates higher latency. Priority queuing ensures interactive requests preempt batch work when capacity is constrained, maintaining user experience. Batch requests fill idle capacity, maximizing overall GPU utilization. This requires request classification and separate queue management.

Why others wrong: FCFS ignores urgency differences; batch-first degrades interactive UX; equal resources waste interactive capacity during idle periods.

Trap: Over-prioritizing interactive requests and starving batch workloads — batch jobs eventually need to complete, so some guaranteed capacity or off-peak processing is needed.

Mnemonic: Request priority = "ER triage" — walk-in patients (interactive) get seen first; scheduled appointments (batch) fill remaining slots

## Q125
Type: single
Difficulty: 3
Tags: deployment, distributed-inference
Concepts: inter-node-inference
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

When deploying a model too large for a single node (e.g., a 405B model requiring 8+ GPUs), what networking consideration is most critical for inference latency?

A. Internet bandwidth
B. Inter-GPU bandwidth — tensor parallel communication requires extremely low latency and high bandwidth (NVLink for intra-node, InfiniBand for inter-node), as communication happens on every forward pass for every token
C. WiFi signal strength
D. Hard disk read speed

Answer: B

Hint: Tensor parallelism requires GPU-to-GPU communication on every single generated token — latency here directly impacts TPOT.

Explanation: In tensor-parallel inference, each token generation requires all-reduce communication between GPUs participating in the tensor split. For a 405B model split across 8 GPUs on 2 nodes, inter-node InfiniBand latency directly adds to every TPOT. NVLink provides 900+ GB/s intra-node, but inter-node InfiniBand (200-400 Gb/s) becomes the bottleneck, making network topology and bandwidth critical deployment considerations.

Why others wrong: Internet isn't relevant for inter-GPU communication; WiFi is unusable for this purpose; disk isn't in the inference path for tensor parallelism.

Trap: Ignoring network topology when planning multi-node inference — the per-token communication cost makes this the primary latency factor, not computation.

Mnemonic: Multi-node inference networking = "the speed of the slowest bridge" — tokens cross GPU-to-GPU links on every generation step

## Q126
Type: single
Difficulty: 2
Tags: evaluation, safety-benchmarks
Concepts: safety-evaluation
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

What is the purpose of safety benchmarks like ToxiGen, RealToxicityPrompts, and BBQ in LLM evaluation?

A. To test if the model can generate toxic content on demand
B. To systematically measure a model's propensity to generate harmful, biased, or toxic content across diverse scenarios, enabling comparison between models and identification of specific failure categories
C. To train models to be more toxic
D. To test model speed on adversarial inputs

Answer: B

Hint: Safety benchmarks standardize "how unsafe is this model?" — like crash tests for cars.

Explanation: Safety benchmarks provide standardized, reproducible evaluation of different risk dimensions: ToxiGen tests toxic language generation for specific groups; RealToxicityPrompts measures toxicity continuation probability; BBQ tests social biases in question-answering. These enable systematic comparison across models and versions, identification of specific safety gaps, and tracking improvement over time.

Why others wrong: They measure unwanted behavior, not enable it; they're evaluation tools, not training data; they test safety, not speed.

Trap: Only evaluating safety on one benchmark — different benchmarks test different dimensions (toxicity, bias, stereotypes), and a model safe on one may fail on another.

Mnemonic: Safety benchmarks = "crash test dummies for AI" — systematic stress testing before deployment

## Q127
Type: single
Difficulty: 2
Tags: architecture, kv-cache-efficiency
Concepts: multi-query-kv-sharing
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

If a model has 32 attention heads with hidden dimension 4096 and uses GQA with 8 KV groups, what is the KV cache memory reduction compared to standard MHA?

A. No reduction
B. 4x reduction — 8 KV head groups instead of 32 individual KV heads
C. 32x reduction
D. 2x reduction

Answer: B

Hint: MHA: 32 KV heads. GQA with 8 groups: 8 KV heads. Ratio = 32/8 = 4x.

Explanation: In standard MHA, each of the 32 heads has its own key and value projections (32 KV heads). GQA with 8 groups means 4 query heads share each KV group (32 queries / 8 groups = 4 per group). The KV cache stores 8 heads instead of 32, a 4x reduction. This significantly reduces memory for long sequences while maintaining most of MHA's quality.

Why others wrong: There is a reduction; 32x would require MQA (single KV head); 2x would require 16 groups.

Trap: Confusing the number of query heads with KV heads — GQA reduces KV heads while keeping all 32 query heads.

Mnemonic: GQA memory savings = "total heads ÷ KV groups" = reduction factor

## Q128
Type: single
Difficulty: 3
Tags: fine-tuning, knowledge-distillation
Concepts: teacher-student-distillation
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

In knowledge distillation from a 70B teacher model to a 7B student model, why is training on the teacher's soft probability distribution (logits) more effective than training on hard labels alone?

A. Soft probabilities are faster to compute
B. The teacher's probability distribution over all vocabulary tokens reveals inter-class similarities and relative likelihood of alternative answers — information that hard labels (argmax) discard
C. Hard labels contain more information than soft probabilities
D. Soft probabilities only work for classification tasks

Answer: B

Hint: "The teacher says A is correct but B is plausible" vs "the answer is A" — the soft distribution carries more signal.

Explanation: When a teacher assigns 0.7 probability to the correct answer and 0.2 to a related alternative, the student learns that these options are semantically similar — "dark knowledge" that hard labels (1.0 for correct, 0.0 for everything else) completely lose. This rich supervision signal, captured through a temperature-softened probability distribution, enables the smaller student to learn more effectively from each example.

Why others wrong: Soft probabilities require the full vocabulary distribution; hard labels contain less information; distillation works for generation tasks too.

Trap: Using only the top-1 token from the teacher — this discards the rich distributional information that makes distillation effective.

Mnemonic: Soft labels = "teacher's thought process" vs hard labels = "teacher's final answer" — the process teaches more

## Q129
Type: single
Difficulty: 2
Tags: optimization, inference-batching
Concepts: dynamic-batching
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

What is the key difference between dynamic batching and continuous batching in LLM inference?

A. They are the same thing
B. Dynamic batching groups requests that arrive within a time window into a batch and processes them together, while continuous batching allows individual requests to join and leave an actively processing batch on a per-iteration basis
C. Dynamic batching is slower than processing one request at a time
D. Continuous batching requires special hardware

Answer: B

Hint: Dynamic batching = "wait for the elevator to fill"; continuous batching = "revolving door."

Explanation: Dynamic batching collects requests up to a timeout or batch size limit, then processes the batch together — all requests must wait for the slowest in the batch. Continuous (in-flight) batching is more granular: as individual requests complete token generation, their slots are immediately filled by waiting requests, maximizing GPU utilization without forcing short responses to wait for long ones.

Why others wrong: They're distinct strategies; batching improves throughput; continuous batching runs on standard GPUs.

Trap: Thinking dynamic batching is "good enough" — for variable-length LLM outputs, continuous batching provides significantly better throughput and latency.

Mnemonic: Dynamic batching = "bus schedule" (wait for departure); Continuous batching = "taxi stand" (next person gets next available slot)

## Q130
Type: single
Difficulty: 1
Tags: responsible-ai, bias-types
Concepts: representation-bias
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

What is representation bias in LLM training data?

A. Using only one programming language in code datasets
B. When certain demographic groups, languages, cultures, or perspectives are underrepresented in the training data, causing the model to perform worse for or make stereotypical assumptions about those groups
C. When the model represents numbers in binary instead of decimal
D. When the model uses too many parameters

Answer: B

Hint: If the training data mostly contains one perspective, the model will default to that perspective.

Explanation: LLMs trained predominantly on English web data learn to reflect the demographics, perspectives, and cultural norms overrepresented in that data. This leads to poorer performance for underrepresented languages, cultures, and demographics, and can perpetuate stereotypes. Mitigation includes diversifying training data, evaluating across demographic groups, and fine-tuning for underserved populations.

Why others wrong: Programming language diversity is a different concern; numerical representation is unrelated; parameter count isn't a bias.

Trap: Assuming a model trained on "the internet" has balanced representation — web data heavily overrepresents English, Western perspectives, and certain demographics.

Mnemonic: Representation bias = "the model speaks for the loudest voices in the training data" — quiet groups get ignored or stereotyped

## Q131
Type: single
Difficulty: 2
Tags: architecture, context-window-evolution
Concepts: context-scaling
Domain: Domain 1 — LLM Foundations and Prompting
DomainNumber: 1

Which technique allows extending a model's effective context window by processing a long document in chunks and maintaining a compressed representation of earlier chunks?

A. Simply concatenating all chunks into one prompt
B. Recurrent memory approaches where earlier chunks are compressed into fixed-size memory tokens that are prepended to subsequent chunks, allowing the model to "remember" without storing full KV caches for the entire document
C. Truncating the document to fit the context window
D. Using a smaller model that has a longer context window

Answer: B

Hint: Compress old context into memory tokens → process new context with those memories → repeat.

Explanation: Approaches like MemoryTransformer, Memorizing Transformers, and Landmark Attention compress earlier segments into compact memory representations (memory tokens or compressed KV states) that are carried forward. This provides effectively unlimited context length at the cost of lossy compression of distant information, rather than the lossless but expensive approach of extending the raw context window.

Why others wrong: Concatenation doesn't work beyond the context window; truncation loses information; a smaller model may lack capability.

Trap: Assuming all context extension methods are equivalent — RAG retrieves specific passages, while recurrent memory maintains a continuous compressed representation of the entire preceding context.

Mnemonic: Recurrent memory = "reading a long book with a notebook" — summarize each chapter, carry notes forward

## Q132
Type: single
Difficulty: 3
Tags: fine-tuning, simpo
Concepts: reference-free-alignment
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

How does SimPO simplify the DPO training pipeline?

A. It uses a more complex loss function with additional hyperparameters
B. It eliminates the need for a reference model by using the average log-probability of the response as an implicit reward, reducing memory usage and simplifying implementation
C. It requires training a separate reward model first
D. It only works with models under 1B parameters

Answer: B

Hint: SimPO = "Simple Preference Optimization" — simpler than DPO by removing the reference model.

Explanation: SimPO replaces DPO's reference model comparison with a length-normalized average log-probability as the implicit reward signal. This eliminates the need to load and forward through a reference model during training, roughly halving memory requirements and simplifying the codebase. It achieves competitive or better results than DPO on many benchmarks despite the simplification.

Why others wrong: SimPO is simpler, not more complex; it avoids reward models entirely; it works at any model scale.

Trap: Thinking removing the reference model must hurt quality — SimPO's implicit reward formulation is often more stable than DPO's reference-dependent one.

Mnemonic: SimPO = "DPO without the baggage" — drop the reference model, use log-probability as reward

## Q133
Type: single
Difficulty: 2
Tags: optimization, kernel-fusion
Concepts: fused-operations
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

Why does kernel fusion improve LLM inference performance?

A. It combines multiple model layers into one
B. It merges multiple sequential GPU operations (like matrix multiply + bias + activation) into a single kernel launch, reducing GPU memory reads/writes and kernel launch overhead
C. It uses multiple GPUs to run one kernel
D. It fuses the model with the tokenizer

Answer: B

Hint: Each separate kernel = a round trip to GPU memory. Fusing = compute everything in one trip.

Explanation: Without fusion, each operation (matmul, bias add, GeLU) reads from and writes to GPU global memory separately, creating memory bandwidth bottleneck. Fused kernels perform all operations in a single pass through GPU SRAM, dramatically reducing memory transfers. For LLM inference where memory bandwidth is the bottleneck, this can provide 2-3x speedup on fused operations.

Why others wrong: It fuses operations, not layers; it's about single-GPU optimization; tokenizer fusion is a different concept (fusing tokenizer into the pipeline).

Trap: Thinking kernel fusion only matters for training — it's even more impactful for inference, where the memory bandwidth bottleneck is more severe.

Mnemonic: Kernel fusion = "doing errands in one trip instead of driving home between each one"

## Q134
Type: single
Difficulty: 1
Tags: deployment, model-warmup
Concepts: inference-warmup
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

Why do LLM inference servers typically need a warmup period before serving production traffic?

A. The GPU hardware needs time to reach operating temperature
B. The first few inference requests trigger JIT compilation of CUDA kernels, lazy memory allocation, and cache population — making them significantly slower than steady-state requests
C. The model needs to be retrained on recent data
D. The server needs to download the model from the internet

Answer: B

Hint: First requests pay the "cold start" penalty — CUDA compilation, memory allocation, cache misses.

Explanation: On first use, CUDA kernels may need JIT compilation, GPU memory is lazily allocated, and various caches (TensorRT engine cache, CUDA context) are cold. These one-time costs make initial requests much slower. Warmup sends synthetic requests before routing production traffic, ensuring all compilation and allocation is complete and caches are warm.

Why others wrong: GPU thermals stabilize in seconds; model weights are loaded before warmup; the model is already on disk/in memory.

Trap: Skipping warmup and wondering why the first users see high latency — always warm up inference servers before sending real traffic.

Mnemonic: Inference warmup = "letting the car engine warm up" — cold starts are rough on everyone

## Q135
Type: single
Difficulty: 3
Tags: deployment, disaggregated-serving
Concepts: disaggregated-architecture
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

What is disaggregated serving in the context of LLM inference architecture?

A. Running each transformer layer on a separate server
B. Separating the storage and serving of model weights, KV cache, and compute into independently scalable components — allowing, for example, a shared KV cache store that multiple compute instances access, or separate prefill and decode pools
C. Using different programming languages for each service component
D. Running the model without any cache

Answer: B

Hint: Disaggregation = break the monolith into independently scalable pieces.

Explanation: Disaggregated serving separates tightly coupled components of traditional inference (model weights, KV cache, compute) into independent services. This enables innovations like: shared KV cache pools (for prefix caching across instances), separate prefill/decode GPU pools (optimized for their different compute profiles), and independent scaling of each component. This is an emerging architecture pattern driven by production scaling challenges.

Why others wrong: Layer-per-server is extreme pipeline parallelism, not disaggregation; language choice is irrelevant; caching is essential, not removed.

Trap: Assuming monolithic serving is always simpler and better — at scale, the inflexibility of monolithic architectures wastes resources and limits optimization.

Mnemonic: Disaggregated serving = "microservices for inference" — break the monolith, scale each piece independently

## Q136
Type: single
Difficulty: 2
Tags: evaluation, contamination-types
Concepts: data-leakage
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

What is the difference between direct contamination and indirect contamination in LLM benchmark evaluation?

A. Direct contamination is intentional; indirect is accidental
B. Direct contamination occurs when benchmark examples appear verbatim in training data, while indirect contamination occurs when training data includes content closely related to benchmark problems (e.g., discussions about benchmark questions, blog posts analyzing them) that provides unfair advantage without verbatim overlap
C. Indirect contamination doesn't affect scores
D. Direct contamination only happens with coding benchmarks

Answer: B

Hint: Verbatim = direct; paraphrased or discussed = indirect — both inflate scores unfairly.

Explanation: Direct contamination is benchmark data appearing verbatim in training crawls. Indirect contamination is more subtle — blog posts discussing MMLU questions, StackOverflow answers to HumanEval problems, or textbook solutions to benchmark math problems. Both inflate evaluation scores without representing genuine capability, but indirect contamination is much harder to detect and filter.

Why others wrong: Both can be accidental (benchmark data ends up in web crawls); indirect contamination does affect scores; all benchmark types are susceptible.

Trap: Only checking for exact-match contamination — indirect contamination through discussions and analyses of benchmarks is pervasive and equally problematic.

Mnemonic: Direct contamination = "copying the exam"; Indirect contamination = "reading the answer key discussion forum"

## Q137
Type: single
Difficulty: 3
Tags: responsible-ai, machine-unlearning
Concepts: model-unlearning
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

What is machine unlearning in the context of LLMs and why is it challenging?

A. Deleting the model entirely and starting over
B. Selectively removing the influence of specific training data from a trained model without full retraining — challenging because individual data points' influence is distributed across billions of parameters with complex interactions
C. Unlearning refers to the model forgetting information over time naturally
D. Teaching the model to forget all languages except one

Answer: B

Hint: A user requests their data be removed from the model — how do you comply without retraining?

Explanation: Machine unlearning aims to remove the influence of specific training examples (e.g., for GDPR right-to-be-forgotten compliance) without expensive full retraining. It's challenging because each training example influences billions of parameters through complex gradient interactions, making surgical removal difficult. Current approaches include influence function approximation, gradient ascent on target data, and fine-tuning to "forget" — all imperfect.

Why others wrong: Full retraining isn't "unlearning"; natural forgetting doesn't happen in static models; the goal is selective removal, not language reduction.

Trap: Assuming you can simply fine-tune the model to forget — the original information may still be extractable through careful prompting even after "unlearning."

Mnemonic: Machine unlearning = "surgically remove one ingredient from a baked cake" — the ingredients are all mixed together

## Q138
Type: single
Difficulty: 2
Tags: optimization, inference-engine-comparison
Concepts: serving-frameworks
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

When choosing between vLLM, TensorRT-LLM, and SGLang for LLM inference, what is the primary trade-off?

A. They all provide identical performance
B. vLLM offers ease of use and broad model support with PagedAttention; TensorRT-LLM provides maximum hardware optimization through compilation but requires more setup; SGLang excels at structured generation and complex serving patterns with RadixAttention
C. TensorRT-LLM is always the fastest for every use case
D. vLLM only supports NVIDIA GPUs while TensorRT-LLM supports all hardware

Answer: B

Hint: Each framework has a "superpower" — pick based on your priority.

Explanation: vLLM excels at ease of deployment with broad model support and PagedAttention for memory efficiency. TensorRT-LLM provides maximum performance through GPU-specific kernel compilation but requires a compilation step and has narrower model support. SGLang is optimized for complex serving patterns with RadixAttention for efficient prefix caching and excels at constrained/structured generation workloads.

Why others wrong: Performance characteristics differ; TensorRT-LLM leads on throughput but not always on flexibility; vLLM supports AMD ROCm too while TensorRT-LLM is NVIDIA-only.

Trap: Assuming the fastest benchmark winner is the best choice — production requirements include ease of use, model support, and specific feature needs.

Mnemonic: vLLM = "easy + flexible"; TensorRT = "maximum speed"; SGLang = "structured + complex patterns"

## Q139
Type: single
Difficulty: 1
Tags: deployment, model-compression-deployment
Concepts: deployment-size
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

A team needs to deploy a 70B parameter model on a single GPU with 80GB memory. The model in FP16 requires ~140GB. What is the most practical solution?

A. Buy a GPU with 140GB memory
B. Quantize the model to 4-bit (INT4/NF4), reducing memory to approximately 35GB plus overhead, fitting comfortably on the 80GB GPU
C. Use CPU-only inference
D. Train a smaller model from scratch

Answer: B

Hint: 70B × 4 bits = ~35GB. 70B × 16 bits = ~140GB. Quantization makes it fit.

Explanation: 4-bit quantization reduces each parameter from 16 bits to 4 bits, cutting the weight memory by 4x (140GB → ~35GB). With additional memory for KV cache and runtime overhead, the model fits on an 80GB GPU. Modern quantization methods (GPTQ, AWQ) maintain quality surprisingly well at 4-bit for most tasks.

Why others wrong: Larger GPUs are expensive and may not exist; CPU inference is too slow for production; training from scratch loses the 70B model's capabilities.

Trap: Thinking 4-bit quantization always ruins quality — for most production tasks, 4-bit 70B models outperform unquantized 7B models.

Mnemonic: 4-bit quantization = "zip file for model weights" — 4x smaller, mostly the same content

## Q140
Type: single
Difficulty: 2
Tags: evaluation, domain-benchmarks
Concepts: vertical-evaluation
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

Why are domain-specific benchmarks (MedQA for medicine, FinBench for finance, LegalBench for law) important even when general benchmarks exist?

A. Domain benchmarks are easier to pass
B. General benchmarks test broad knowledge, but domain benchmarks evaluate specialized reasoning, terminology understanding, compliance awareness, and professional-grade accuracy required for real-world deployment in regulated industries
C. Domain benchmarks are always larger than general benchmarks
D. General benchmarks already cover all domains sufficiently

Answer: B

Hint: A doctor doesn't hire based on SAT scores — they need medical board exam results.

Explanation: Deploying an LLM in healthcare, finance, or legal contexts requires professional-level competence in domain-specific reasoning, terminology, regulations, and edge cases that general benchmarks don't test. MedQA tests clinical reasoning, FinBench evaluates financial analysis, and LegalBench assesses legal reasoning — all capturing domain-specific failure modes that general benchmarks miss.

Why others wrong: Domain benchmarks aren't easier; size varies; general benchmarks by definition can't deeply cover every domain.

Trap: Selecting a model for a medical application based only on MMLU scores — MMLU's medical section is a tiny fraction and doesn't test clinical reasoning depth.

Mnemonic: Domain benchmarks = "board certification exam" — general intelligence isn't enough for professional practice

## Q141
Type: single
Difficulty: 3
Tags: optimization, attention-sink
Concepts: attention-patterns
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

What is the "attention sink" phenomenon observed in LLMs, and how is it relevant to efficient inference?

A. Attention scores sink to zero for all tokens after a certain position
B. LLMs consistently allocate disproportionately high attention to the first few tokens regardless of their semantic relevance — this means these tokens must be preserved in any KV cache optimization scheme (like sliding window) to maintain model quality
C. The model's accuracy sinks as the sequence gets longer
D. Attention computation sinks CPU utilization

Answer: B

Hint: The first token gets way more attention than it "deserves" — and removing it breaks things.

Explanation: StreamingLLM research showed that LLMs develop "attention sinks" — typically the first token(s) receive disproportionate attention scores regardless of content. These tokens serve as a mathematical anchor for the softmax normalization. When implementing sliding window inference (for infinite-length streaming), keeping these initial "sink" tokens alongside the recent window maintains model quality, while removing them causes catastrophic degradation.

Why others wrong: Attention doesn't zero out; quality degradation from long sequences is a different issue; this is about GPU attention computation, not CPU.

Trap: Implementing a naive sliding window that drops the first tokens — this triggers attention score redistribution that dramatically degrades output quality.

Mnemonic: Attention sink = "the anchor token" — the first token holds the attention distribution together like an anchor holds a ship

## Q142
Type: single
Difficulty: 2
Tags: fine-tuning, data-augmentation
Concepts: fine-tuning-data-augmentation
Domain: Domain 2 — Data Preparation and Fine-Tuning
DomainNumber: 2

When fine-tuning an LLM for a task with only 100 labeled examples, which data augmentation technique is most likely to improve results?

A. Duplicating the 100 examples multiple times
B. Using a stronger LLM to rephrase the existing examples in different ways while preserving the labels, creating diverse training variations
C. Adding random noise to the text
D. Translating all examples to another language

Answer: B

Hint: A stronger model can create diverse variations of your sparse training data.

Explanation: LLM-based augmentation generates semantically equivalent but linguistically diverse variants of existing examples. A stronger model can rephrase questions, vary vocabulary, change sentence structure, and add context while preserving the label integrity. This expands the effective training set beyond 100 examples, improving the fine-tuned model's robustness to input variation.

Why others wrong: Duplication causes memorization without diversity; random noise corrupts meaning; translation changes the target language/domain.

Trap: Over-augmenting to the point where synthetic examples dominate — maintain a healthy ratio of original to augmented data.

Mnemonic: LLM augmentation = "asking a thesaurus to rewrite your homework" — same meaning, different words

## Q143
Type: single
Difficulty: 3
Tags: optimization, speculative-decoding-variants
Concepts: medusa-heads
Domain: Domain 3 — Optimization and Acceleration
DomainNumber: 3

How does Medusa differ from traditional speculative decoding for accelerating LLM inference?

A. Medusa uses a larger draft model for higher quality
B. Medusa adds lightweight prediction heads to the target model itself that predict multiple future tokens simultaneously from the current hidden state, eliminating the need for a separate draft model
C. Medusa only works with encoder-decoder models
D. Medusa reduces model quality to increase speed

Answer: B

Hint: Medusa grows extra "heads" on the same model — no separate draft model needed.

Explanation: Medusa adds small MLP heads to the last hidden layer of the target model, where each head predicts a token at a different future position (head 1 predicts t+1, head 2 predicts t+2, etc.). These heads are trained while keeping the base model frozen. During inference, Medusa proposes multiple candidates from these heads, verified by the base model in a tree-attention pattern. This achieves 2-3x speedup without a separate draft model.

Why others wrong: Medusa uses smaller heads, not a larger model; it works with decoder-only models; quality is preserved through verification.

Trap: Thinking all speculative decoding needs two models — Medusa's self-speculative approach is simpler to deploy and manage.

Mnemonic: Medusa = "one model with multiple prediction heads" — like the mythical creature with many heads on one body

## Q144
Type: single
Difficulty: 2
Tags: deployment, safety-monitoring
Concepts: production-safety
Domain: Domain 4 — Deployment and Monitoring
DomainNumber: 4

After deploying an LLM to production, what ongoing safety monitoring should be implemented?

A. Safety evaluation is only needed before deployment
B. Continuous monitoring of safety classifier trigger rates, user feedback/reports, output toxicity scores, and periodic red-team assessments — because the model's behavior can drift with changing user patterns and adversarial attacks evolve over time
C. Checking model weights for corruption once per month
D. Running the original safety benchmarks quarterly

Answer: B

Hint: Safety is not a "test once, done forever" property — the threat landscape evolves.

Explanation: Post-deployment safety monitoring tracks: safety classifier triggers (trending upward may indicate new attack patterns), user reports (real-world feedback on harmful outputs), toxicity score distributions (detecting drift), and periodic re-evaluation (new jailbreak techniques emerge regularly). Novel adversarial prompts are continuously developed, and user populations change — making static pre-deployment evaluation insufficient.

Why others wrong: Safety requires ongoing monitoring; weight corruption checks are infrastructure, not safety; quarterly benchmarks miss evolving threats.

Trap: Assuming a safe pre-deployment evaluation means the model stays safe — new jailbreak techniques and adversarial prompts are discovered weekly.

Mnemonic: Safety monitoring = "security cameras, not just a door lock" — continuous vigilance, not one-time check

## Q145
Type: single
Difficulty: 1
Tags: responsible-ai, hallucination-types
Concepts: hallucination-taxonomy
Domain: Domain 5 — Evaluation and Responsible AI
DomainNumber: 5

What is the difference between intrinsic and extrinsic hallucination in LLM outputs?

A. Intrinsic hallucinations are always worse than extrinsic ones
B. Intrinsic hallucination contradicts information provided in the source/prompt (faithful to nothing), while extrinsic hallucination adds information that cannot be verified from the source (neither confirmed nor denied by the input)
C. Intrinsic hallucination only occurs in small models
D. Extrinsic hallucination is always beneficial

Answer: B

Hint: Intrinsic = contradicts the source; Extrinsic = invents beyond the source.

Explanation: Intrinsic hallucination directly contradicts the input (e.g., saying a document states X when it states the opposite), which is always an error. Extrinsic hallucination introduces information not present in the source — this could be correct (from the model's training knowledge) or fabricated. The distinction matters for RAG systems where faithfulness to retrieved context is critical.

Why others wrong: Intrinsic is always wrong but extrinsic might be correct; model size doesn't determine hallucination type; extrinsic hallucination can be harmful if fabricated.

Trap: Treating all hallucination as equally harmful — intrinsic hallucination (contradicting the source) is more dangerous because it's verifiably wrong, while extrinsic hallucination may actually be correct.

Mnemonic: Intrinsic = "says the book says something it doesn't"; Extrinsic = "makes up extra facts not in the book"
