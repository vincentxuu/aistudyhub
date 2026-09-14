---
exam: NCP-AAI
lang: en
---

## Q1
Type: single
Difficulty: 2
Tags: agent-architecture, supervisor-pattern
Concepts: supervisor-agent
Domain: Domain 1 — Agent Architecture and Design
DomainNumber: 1

In a multi-agent system, a supervisor agent receives user requests, delegates subtasks to specialized worker agents, and synthesizes their outputs. What is a key risk of this architecture compared to a peer-to-peer agent topology?

A. Worker agents cannot access external tools
B. The supervisor becomes a single point of failure and a bottleneck for all inter-agent communication
C. Worker agents must share the same LLM backbone
D. The system cannot scale beyond three worker agents

Answer: B

Hint: Think about what happens when the central coordinator goes down or gets overloaded.

Explanation: A supervisor (hub-and-spoke) pattern routes all communication through one agent, making it a single point of failure and potential throughput bottleneck. Peer-to-peer topologies distribute communication but are harder to coordinate.

Why others wrong: Workers can independently call tools (A); workers can use different models (C); there's no inherent limit on worker count (D).

Trap: Assuming supervisor patterns are always superior because they're simpler to reason about — they trade resilience for simplicity.

Mnemonic: Supervisor = single hub = single point of failure

## Q2
Type: single
Difficulty: 3
Tags: agent-architecture, graph-topology
Concepts: agent-graph-design
Domain: Domain 1 — Agent Architecture and Design
DomainNumber: 1

An enterprise deploys a customer support system where an intake agent routes queries to one of four domain-specific agents (billing, technical, shipping, returns). Each domain agent can escalate to a human review agent. The human review agent can reassign back to any domain agent. Which graph topology best describes this system?

A. Linear pipeline with fixed sequential stages
B. Directed acyclic graph (DAG) with no cycles
C. Directed cyclic graph with conditional routing and feedback loops
D. Fully connected mesh where every agent communicates with every other

Answer: C

Hint: Can a query revisit a node it has already passed through?

Explanation: The human review agent can reassign back to domain agents, creating cycles in the execution graph. The intake agent provides conditional routing. This combination makes it a directed cyclic graph, not a DAG or pipeline.

Why others wrong: A pipeline has no branching (A); a DAG forbids cycles but reassignment creates one (B); a full mesh implies all-to-all communication which isn't the case here (D).

Trap: Calling this a DAG because the main flow looks linear — the reassignment path from human review back to domain agents creates a cycle.

Mnemonic: Reassignment = feedback loop = cyclic graph

## Q3
Type: single
Difficulty: 2
Tags: agent-architecture, event-driven
Concepts: event-driven-agents
Domain: Domain 1 — Agent Architecture and Design
DomainNumber: 1

Which architectural pattern is most appropriate when agents must react to external triggers (webhooks, database changes, sensor data) rather than being invoked by a user query?

A. Sequential pipeline with polling intervals
B. Event-driven architecture with message queues and publish-subscribe messaging
C. Synchronous request-response with long polling
D. Batch processing with scheduled cron jobs

Answer: B

Hint: Think about which pattern naturally handles asynchronous, unpredictable triggers.

Explanation: Event-driven architecture with pub/sub messaging decouples producers from consumers, allowing agents to react to events as they arrive without polling or blocking. This is the standard pattern for reactive agent systems.

Why others wrong: Polling wastes resources and introduces latency (A); long polling blocks threads (C); batch processing introduces unacceptable delay for real-time triggers (D).

Trap: Choosing polling because it's simpler — it doesn't scale with high-frequency events and wastes compute.

Mnemonic: External triggers = events = event-driven + pub/sub

## Q4
Type: single
Difficulty: 3
Tags: agent-architecture, capability-boundaries
Concepts: agent-decomposition
Domain: Domain 1 — Agent Architecture and Design
DomainNumber: 1

When decomposing a complex workflow into multiple agents, what is the primary principle for deciding agent boundaries?

A. Each agent should correspond to one LLM API call
B. Each agent should encapsulate a coherent capability domain with clear input/output contracts, minimizing cross-agent dependencies
C. Agents should be split based on programming language boundaries
D. Each agent should handle exactly one user intent

Answer: B

Hint: Think about software engineering principles like cohesion and coupling applied to agent design.

Explanation: Agent boundaries should follow high cohesion and low coupling principles. Each agent encapsulates a domain of expertise with well-defined interfaces, making the system modular, testable, and maintainable. Splitting by API calls or language is arbitrary.

Why others wrong: One API call per agent is too granular (A); language boundaries are irrelevant for agent design (C); one intent per agent ignores shared capabilities and creates redundancy (D).

Trap: Splitting agents too granularly, creating excessive inter-agent communication overhead.

Mnemonic: Agent boundary = capability boundary, high cohesion + low coupling

## Q5
Type: single
Difficulty: 1
Tags: agent-architecture, agentic-vs-workflow
Concepts: agent-workflow-distinction
Domain: Domain 1 — Agent Architecture and Design
DomainNumber: 1

What distinguishes an agentic AI system from a fixed workflow automation?

A. Agentic systems are always faster than fixed workflows
B. Agentic systems can dynamically decide which tools to invoke and in what order based on intermediate results, whereas fixed workflows follow predetermined steps
C. Fixed workflows cannot use APIs
D. Agentic systems do not require an LLM

Answer: B

Hint: Think about who decides the next step — the system or a predefined script.

Explanation: The defining characteristic of an agentic system is autonomous decision-making: the agent observes intermediate results and dynamically chooses its next action. Fixed workflows execute a static sequence regardless of intermediate outputs.

Why others wrong: Agentic systems often have higher latency due to reasoning overhead (A); fixed workflows commonly use APIs (C); agentic systems typically require LLMs for reasoning (D).

Trap: Thinking any system that uses an LLM is automatically "agentic" — a fixed prompt-response pipeline using an LLM is still a workflow, not an agent.

Mnemonic: Agent = autonomous decisions; Workflow = predetermined steps

## Q6
Type: single
Difficulty: 2
Tags: agent-architecture, hierarchical-agents
Concepts: hierarchical-multi-agent
Domain: Domain 1 — Agent Architecture and Design
DomainNumber: 1

In a hierarchical multi-agent system with three levels (coordinator → team leads → workers), how should error propagation be designed?

A. All errors should bubble directly to the coordinator for centralized handling
B. Each level should handle errors within its scope first, escalating only unresolvable failures to the parent level with context about what was attempted
C. Errors should be silently logged and the failing subtask skipped
D. Workers should restart from scratch on any error without notifying parent agents

Answer: B

Hint: Think about how software exception handling works with layered architectures.

Explanation: Hierarchical error handling follows the principle of subsidiarity — handle at the lowest capable level, escalate with context only when necessary. This prevents the coordinator from being overwhelmed and keeps error resolution close to where it occurred.

Why others wrong: Bubbling everything up creates a bottleneck and loses local context (A); silent logging masks failures (C); blind restarts waste resources and may loop infinitely (D).

Trap: Centralizing all error handling at the top — it seems cleaner but overwhelms the coordinator and loses diagnostic context.

Mnemonic: Handle locally, escalate with context — subsidiarity principle

## Q7
Type: multi
Difficulty: 3
Tags: agent-architecture, scalability-patterns
Concepts: scaling-multi-agent
Domain: Domain 1 — Agent Architecture and Design
DomainNumber: 1

A multi-agent system must handle 10x traffic spikes during peak hours. Which TWO design patterns are most effective for this? (Select two)

A. Dynamic agent pool with auto-scaling based on queue depth, spawning additional worker agent instances when demand exceeds capacity
B. Hardcoding the maximum number of agents at deployment time
C. Asynchronous task queues with priority-based scheduling to buffer and order work during spikes
D. Synchronous processing with longer timeout values

Answer: A, C

Hint: Think about elasticity and buffering — two complementary strategies for handling variable load.

Explanation: Auto-scaling agent pools provide elastic capacity, while async task queues buffer demand during spikes and prioritize critical work. Together they handle both the compute and scheduling challenges of traffic spikes.

Why others wrong: Hardcoded limits cannot adapt to spikes (B); longer timeouts just delay failures without adding capacity (D).

Trap: Only picking auto-scaling and forgetting about queuing — without buffering, requests are dropped during the scaling-up delay.

Mnemonic: Spikes need two things: elastic compute (auto-scale) + buffer (queue)

## Q8
Type: single
Difficulty: 2
Tags: agent-architecture, agent-interface-contract
Concepts: interface-design
Domain: Domain 1 — Agent Architecture and Design
DomainNumber: 1

When defining the interface contract between agents in a multi-agent system, which element is LEAST important to specify?

A. Input and output schemas with data types and required fields
B. Error response format and retry semantics
C. The internal prompt template used by the receiving agent
D. Timeout and SLA expectations for response time

Answer: C

Hint: Think about encapsulation — what should be hidden vs. exposed.

Explanation: Internal prompt templates are implementation details that should be encapsulated within the agent. Interface contracts should specify external behavior (I/O schemas, error handling, SLAs) without exposing internal implementation, following the principle of information hiding.

Why others wrong: I/O schemas define the data contract (A); error formats enable proper handling (B); SLAs set performance expectations (D) — all are essential contract elements.

Trap: Thinking other agents need to know your prompt to interact properly — that breaks encapsulation and creates tight coupling.

Mnemonic: Interface = what, not how. Prompts are "how" — keep them internal.

## Q9
Type: single
Difficulty: 1
Tags: agent-architecture, idempotency
Concepts: idempotent-operations
Domain: Domain 1 — Agent Architecture and Design
DomainNumber: 1

Why is idempotency important when designing agent tool calls in a system with automatic retries?

A. It ensures the LLM generates the same text every time
B. It prevents duplicate side effects when the same tool call is retried after a timeout or transient failure
C. It makes the agent respond faster
D. It eliminates the need for error handling

Answer: B

Hint: What happens if a payment API call is retried because of a network timeout — but the first call actually succeeded?

Explanation: Idempotent operations produce the same result regardless of how many times they're executed. Without idempotency, retried tool calls (e.g., charge a credit card) can cause duplicate side effects, leading to data corruption or financial errors.

Why others wrong: LLM text generation is inherently non-deterministic (A); idempotency doesn't affect speed (C); error handling is still needed for non-transient errors (D).

Trap: Thinking retries are safe by default — without idempotency, retries can double-charge, double-create, or double-send.

Mnemonic: Idempotent = safe to retry. f(f(x)) = f(x)

## Q10
Type: single
Difficulty: 2
Tags: agent-architecture, guardrail-placement
Concepts: guardrail-architecture
Domain: Domain 1 — Agent Architecture and Design
DomainNumber: 1

In a multi-agent pipeline, where should input/output guardrails be placed for maximum security with minimum latency overhead?

A. Only at the initial user input entry point
B. At the system boundary (user input and final output) plus at each agent-to-agent handoff where trust boundaries change
C. After every single LLM inference call regardless of context
D. Only at the final output before returning to the user

Answer: B

Hint: Think about where trust levels change — not every internal boundary is equally risky.

Explanation: Guardrails should be placed at trust boundaries: the external user interface and any internal handoff where the security context changes (e.g., a tool-calling agent passing to a data-access agent). Placing them everywhere adds unnecessary latency; placing them only at edges misses internal escalation risks.

Why others wrong: Input-only misses output injection risks (A); every-call adds unnecessary overhead at same-trust-level boundaries (C); output-only misses prompt injection at input (D).

Trap: Either over-guarding (every call) or under-guarding (only edges) — the optimal strategy targets trust boundary transitions.

Mnemonic: Guard the gates, not the hallways — gates = trust boundaries

## Q11
Type: single
Difficulty: 3
Tags: agent-architecture, consensus-mechanisms
Concepts: multi-agent-consensus
Domain: Domain 1 — Agent Architecture and Design
DomainNumber: 1

Three specialist agents analyze a medical image and produce different diagnoses. The system must output a single recommendation. Which consensus mechanism provides the best balance of reliability and explainability?

A. Always take the first agent's answer since it processes the image first
B. Weighted voting based on each agent's historical accuracy for the specific image type, with an explanation showing each agent's vote and confidence
C. Random selection among the three to ensure fairness
D. Concatenate all three diagnoses and present them all as equally valid

Answer: B

Hint: Consider both the quality of the decision and whether a clinician can understand why it was made.

Explanation: Weighted voting incorporates each agent's track record, producing more reliable consensus than simple majority voting. Showing individual votes with confidence scores provides the explainability required in medical contexts for human oversight.

Why others wrong: First-response is arbitrary (A); random selection ignores quality signals (C); presenting all three without synthesis doesn't help the clinician decide (D).

Trap: Using simple majority voting — it treats all agents as equally reliable, which wastes the information from historical performance data.

Mnemonic: Medical consensus = weighted votes + explainability trail

## Q12
Type: single
Difficulty: 2
Tags: agent-architecture, agent-lifecycle
Concepts: agent-state-lifecycle
Domain: Domain 1 — Agent Architecture and Design
DomainNumber: 1

Which agent lifecycle state transition requires explicit resource cleanup to prevent memory leaks in a long-running multi-agent system?

A. Idle → Active (when receiving a new task)
B. Active → Waiting (when blocked on an external API call)
C. Active → Terminated (when the agent's task is complete or failed)
D. Idle → Idle (when no tasks are available)

Answer: C

Hint: Which transition means the agent will not be used again?

Explanation: When an agent transitions to Terminated, all resources it holds (memory buffers, open connections, cached embeddings, conversation history) must be explicitly released. Failing to clean up terminated agents in a long-running system causes gradual memory and connection exhaustion.

Why others wrong: Idle→Active acquires resources, no cleanup needed (A); Active→Waiting still holds resources for resumption (B); Idle→Idle is a no-op (D).

Trap: Assuming garbage collection handles agent cleanup — in systems with native resources (GPU memory, file handles, DB connections), explicit cleanup is required.

Mnemonic: Terminate = time to clean up. Don't leave zombie agents holding resources.

## Q13
Type: single
Difficulty: 3
Tags: agent-architecture, backpressure
Concepts: backpressure-design
Domain: Domain 1 — Agent Architecture and Design
DomainNumber: 1

A multi-agent pipeline processes documents: Agent A extracts text, Agent B classifies, Agent C summarizes. Agent B is 5x slower than A and C. Without any flow control, what failure mode will the system exhibit?

A. Agent C will produce empty summaries
B. Agent A's output queue will grow unboundedly, eventually causing out-of-memory errors, while Agent C starves for input
C. All three agents will slow down equally
D. Agent B will automatically speed up to match Agent A's throughput

Answer: B

Hint: What happens when a producer is faster than a consumer with an unbounded buffer between them?

Explanation: Without backpressure, Agent A floods Agent B's input queue since A is 5x faster. The unbounded queue grows until memory is exhausted. Meanwhile, Agent C sits idle waiting for Agent B's slow output. This is the classic producer-consumer imbalance problem.

Why others wrong: Agent C produces nothing (not empty) because it has no input (A); agents don't auto-balance without explicit mechanism (C, D).

Trap: Assuming unbounded queues are fine because "memory is cheap" — in production, unbounded growth always hits a limit.

Mnemonic: Fast producer + slow consumer + no backpressure = queue explosion

## Q14
Type: single
Difficulty: 1
Tags: agent-architecture, tool-registry
Concepts: dynamic-tool-registry
Domain: Domain 1 — Agent Architecture and Design
DomainNumber: 1

What is the primary advantage of a dynamic tool registry over a static tool list in an agentic system?

A. It reduces the size of the LLM's context window
B. It allows tools to be added, removed, or updated at runtime without redeploying the agent
C. It guarantees faster tool execution
D. It eliminates the need for tool descriptions

Answer: B

Hint: Think about what happens when you need to add a new API integration to a running agent.

Explanation: A dynamic tool registry decouples tool availability from agent deployment. New tools can be registered, deprecated tools removed, and tool schemas updated without stopping or redeploying the agent — essential for evolving enterprise systems.

Why others wrong: The registry itself doesn't reduce context (A); execution speed depends on the tool, not the registry (C); descriptions are still needed for the LLM to select tools (D).

Trap: Thinking static tool lists are fine because "we don't add tools often" — in production, tool evolution is continuous.

Mnemonic: Dynamic registry = hot-swap tools without restart

## Q15
Type: single
Difficulty: 2
Tags: agent-architecture, observability-design
Concepts: distributed-tracing-agents
Domain: Domain 1 — Agent Architecture and Design
DomainNumber: 1

When designing observability for a multi-agent system, which identifier is essential for tracing a single user request across all agents it touches?

A. The agent's process ID
B. A correlation ID (trace ID) propagated through all agent-to-agent messages for the same request
C. The user's IP address
D. A timestamp added by each agent

Answer: B

Hint: Think about distributed tracing in microservices — what links related calls together?

Explanation: A correlation/trace ID uniquely identifies a request and is passed through every agent interaction, enabling end-to-end tracing. This is the same principle as distributed tracing in microservices (e.g., OpenTelemetry trace IDs) applied to multi-agent systems.

Why others wrong: Process IDs change across agents (A); IP addresses don't identify specific requests (C); timestamps can collide and don't link related calls (D).

Trap: Using timestamps to correlate — in a distributed system, clock skew makes timestamps unreliable as correlation identifiers.

Mnemonic: One request, one trace ID — propagate it everywhere

## Q16
Type: single
Difficulty: 1
Tags: agent-architecture, stateless-design
Concepts: stateless-agent-benefits
Domain: Domain 1 — Agent Architecture and Design
DomainNumber: 1

What is the primary benefit of designing agents as stateless services that load context from an external store on each invocation?

A. It reduces the quality of agent responses
B. Any instance can handle any request, enabling horizontal scaling and fault tolerance since no instance holds irreplaceable state
C. It eliminates the need for a database
D. It makes the agent faster because there's no state to manage

Answer: B

Hint: If an agent instance crashes, can another instance pick up the work?

Explanation: Stateless agents can be freely scaled, load-balanced, and replaced because no single instance holds critical state. State lives in an external store (database, cache) accessible to all instances. This is a foundational pattern for resilient distributed systems.

Why others wrong: Statelessness doesn't affect response quality if context is loaded properly (A); external state still needs a store (C); loading state on each call adds latency, not removes it (D).

Trap: Thinking stateless means "no state" — it means state is externalized, not eliminated.

Mnemonic: Stateless agent = cattle, not pets. Any instance can serve any request.

## Q17
Type: multi
Difficulty: 3
Tags: agent-architecture, failure-modes
Concepts: multi-agent-failure-analysis
Domain: Domain 1 — Agent Architecture and Design
DomainNumber: 1

A multi-agent code review system has an Analyzer agent, a Security Scanner agent, and a Style Checker agent running in parallel. Which TWO failure handling strategies should be implemented? (Select two)

A. Circuit breaker pattern — if one agent fails repeatedly, stop sending requests to it temporarily and use degraded mode
B. Ignoring all failures and returning whatever results are available
C. Timeout with fallback — if an agent doesn't respond within the SLA, use cached results or a simplified backup analysis
D. Restarting the entire pipeline from scratch on any single agent failure

Answer: A, C

Hint: Think about graceful degradation — the system should be useful even when parts fail.

Explanation: Circuit breakers prevent cascading failures by isolating failing agents. Timeouts with fallbacks ensure the system returns useful (if degraded) results rather than hanging indefinitely. Together they provide resilience without all-or-nothing behavior.

Why others wrong: Silently ignoring failures masks serious issues (B); restarting everything is wasteful when only one parallel branch failed (D).

Trap: Treating parallel agent failures as all-or-nothing — the system should degrade gracefully, returning available results while indicating which analyses are missing.

Mnemonic: Parallel agents: circuit breaker + timeout/fallback = graceful degradation

## Q18
Type: single
Difficulty: 2
Tags: agent-architecture, agent-memory-architecture
Concepts: shared-vs-private-memory
Domain: Domain 1 — Agent Architecture and Design
DomainNumber: 1

In a multi-agent system, when should agents use shared memory versus private memory?

A. Always use shared memory so all agents have the same information
B. Use shared memory for common context (user profile, conversation history) and private memory for agent-specific working state (intermediate reasoning, draft outputs)
C. Always use private memory to prevent agents from interfering with each other
D. Memory architecture doesn't matter as long as the LLM is large enough

Answer: B

Hint: Think about what information needs coordination vs. what is internal working state.

Explanation: Shared memory provides a consistent view of common context (user data, conversation state) while private memory isolates each agent's working state to prevent interference. This mirrors the shared/private memory model in concurrent programming.

Why others wrong: All-shared causes contention and leaks internal reasoning (A); all-private loses shared context and causes inconsistency (C); memory architecture significantly impacts behavior regardless of model size (D).

Trap: Putting everything in shared memory "for transparency" — it exposes intermediate reasoning that may confuse other agents.

Mnemonic: Shared = common ground; Private = scratch paper

## Q19
Type: single
Difficulty: 2
Tags: agent-development, structured-output
Concepts: structured-output-parsing
Domain: Domain 2 — Agent Development
DomainNumber: 2

An agent must return results in a strict JSON schema for downstream processing. What is the most reliable approach to ensure valid structured output from an LLM?

A. Include "please return JSON" in the system prompt and hope for the best
B. Use constrained decoding or a structured output API (e.g., response_format with JSON schema) combined with schema validation on the output
C. Parse the raw text output with regex to extract JSON
D. Fine-tune the model on JSON examples and skip validation

Answer: B

Hint: Think about guarantees vs. best-effort — which approach can enforce the schema?

Explanation: Constrained decoding forces the model to produce tokens that conform to a grammar or schema, while post-generation validation catches edge cases. Together they provide near-guaranteed schema compliance, which prompt instructions alone cannot.

Why others wrong: Prompt-only approaches frequently produce malformed JSON (A); regex parsing is fragile and fails on nested structures (C); fine-tuning improves likelihood but cannot guarantee compliance (D).

Trap: Trusting prompt instructions for structured output — LLMs frequently omit closing brackets, add comments, or use wrong field names.

Mnemonic: Structured output = constrained decoding + validation. Trust but verify.

## Q20
Type: single
Difficulty: 3
Tags: agent-development, tool-selection
Concepts: dynamic-tool-selection
Domain: Domain 2 — Agent Development
DomainNumber: 2

An agent has access to 50+ tools. Including all tool descriptions in the prompt exceeds the context window. What is the most effective strategy?

A. Truncate tool descriptions to fit within the context window
B. Use a two-stage approach: first retrieve the most relevant tools using semantic search over tool descriptions, then include only the top-k tools in the agent's prompt
C. Randomly sample a subset of tools for each request
D. Split the tools across multiple agents and always invoke all of them

Answer: B

Hint: Think about how RAG retrieves relevant documents — the same principle applies to tool selection.

Explanation: Semantic retrieval over tool descriptions acts as a tool-RAG system: given the user query, it finds the most relevant tools and includes only those in the prompt. This keeps the context focused and reduces irrelevant tool hallucinations.

Why others wrong: Truncation loses critical information about tool parameters (A); random sampling misses relevant tools (C); invoking all agents wastes resources on irrelevant tools (D).

Trap: Including all tools and relying on the LLM to ignore irrelevant ones — with 50+ tools, the model often confuses similar tools or hallucinates non-existent parameters.

Mnemonic: Too many tools? RAG for tools — retrieve then include.

## Q21
Type: single
Difficulty: 2
Tags: agent-development, conversation-management
Concepts: conversation-state-management
Domain: Domain 2 — Agent Development
DomainNumber: 2

In a multi-turn agentic conversation, the context window is approaching its limit. Which strategy preserves the most relevant information while freeing context space?

A. Clear the entire conversation history and start fresh
B. Use rolling summarization — compress older turns into a summary while keeping recent turns and all tool call results verbatim
C. Drop every other message to halve the context
D. Switch to a larger model mid-conversation

Answer: B

Hint: Think about what information decays in value (old chit-chat) vs. what must be preserved (recent context, tool results).

Explanation: Rolling summarization compresses older, less-relevant turns into a concise summary while preserving recent interactions and tool outputs that may be referenced. This maintains continuity without losing critical context.

Why others wrong: Clearing everything loses all context (A); dropping alternating messages creates incoherent history (C); switching models mid-conversation doesn't free context and may lose compatibility (D).

Trap: Summarizing too aggressively — if tool call results are summarized, the agent may lose exact values it needs to reference.

Mnemonic: Old turns → summarize; Recent turns + tool results → keep verbatim

## Q22
Type: single
Difficulty: 1
Tags: agent-development, error-recovery
Concepts: retry-strategies
Domain: Domain 2 — Agent Development
DomainNumber: 2

When an agent's tool call fails due to a transient API error (HTTP 503), what is the recommended retry strategy?

A. Retry immediately in a tight loop until it succeeds
B. Exponential backoff with jitter — wait progressively longer between retries with random variation to avoid thundering herd
C. Never retry — report the error to the user immediately
D. Retry exactly once after a fixed 60-second delay

Answer: B

Hint: What happens if 100 agents all retry simultaneously after a shared service recovers?

Explanation: Exponential backoff increases wait time between retries (1s, 2s, 4s...) to give the failing service time to recover. Adding jitter (random variation) prevents synchronized retries from multiple clients from overwhelming the service — the thundering herd problem.

Why others wrong: Tight loops amplify the overload that caused the 503 (A); never retrying wastes the opportunity for a quick recovery (C); fixed 60s is too rigid and wasteful for brief outages (D).

Trap: Retrying without jitter — synchronized retries create periodic load spikes that prevent recovery.

Mnemonic: Transient error → back off exponentially + add randomness

## Q23
Type: single
Difficulty: 3
Tags: agent-development, tool-composition
Concepts: tool-chaining-patterns
Domain: Domain 2 — Agent Development
DomainNumber: 2

An agent needs to: (1) search a database, (2) call an external API with the search results, and (3) format the combined data. The API has a 30% failure rate. How should the tool chain be designed?

A. Execute all three steps in a single tool call that handles everything internally
B. Design each step as a separate tool with the agent orchestrating the chain, implementing retry logic for the API call and a fallback path that skips step 2 if the API is unavailable
C. Run all three tools in parallel since they're independent
D. Cache the API results permanently so step 2 never needs to run again

Answer: B

Hint: Think about separation of concerns and where to handle the unreliable step.

Explanation: Separate tools allow the agent to handle failures granularly — retrying the unreliable API step without redoing the database search, and potentially offering degraded results without the API data. Monolithic tool calls hide failure points from the agent's decision-making.

Why others wrong: A single tool hides the failure point from the agent (A); steps 2 and 3 depend on previous outputs so they can't run in parallel (C); permanent caching leads to stale data (D).

Trap: Making step 2 part of step 1 — when the API fails, the agent can't distinguish a search failure from an API failure.

Mnemonic: Unreliable step = separate tool + retry + fallback. Let the agent see and decide.

## Q24
Type: single
Difficulty: 2
Tags: agent-development, streaming-output
Concepts: streaming-agent-responses
Domain: Domain 2 — Agent Development
DomainNumber: 2

When should an agent use streaming output instead of waiting for the complete response?

A. Only when the response will be longer than 1000 tokens
B. When the user experience benefits from seeing incremental progress, such as during long reasoning chains, multi-step tool use, or document generation
C. Never — streaming introduces too much complexity
D. Only when using GPU acceleration

Answer: B

Hint: Think about the user sitting and waiting — when does seeing partial progress help?

Explanation: Streaming provides a better user experience during long-running operations by showing progress incrementally. For agentic systems, this includes showing which tool is being called, intermediate reasoning steps, and partial results during multi-step processes.

Why others wrong: Token count alone doesn't determine streaming value — a fast 2000-token response may not need it (A); streaming is well-supported by modern frameworks (C); streaming is independent of hardware (D).

Trap: Over-streaming by showing raw LLM token generation for simple responses — streaming adds value mainly for long or multi-step operations.

Mnemonic: Long wait? Stream it. Quick response? Just return it.

## Q25
Type: single
Difficulty: 2
Tags: agent-development, prompt-versioning
Concepts: prompt-management
Domain: Domain 2 — Agent Development
DomainNumber: 2

In production agentic systems, why should prompt templates be version-controlled separately from application code?

A. Because prompts change more frequently than code and need independent A/B testing, rollback, and audit trails without requiring application redeployment
B. Because prompts are too large to store in code repositories
C. Because version control systems cannot handle text files
D. Because prompts should be kept secret from developers

Answer: A

Hint: Think about how often you tune a prompt vs. how often you deploy code changes.

Explanation: Prompts evolve rapidly during optimization and often need A/B testing against live traffic. Separating prompt versioning from application deployment enables faster iteration cycles, independent rollback when a prompt regression is detected, and audit trails for compliance.

Why others wrong: Prompts are typically small text (B); version control handles text perfectly (C); developers need prompt access for debugging (D).

Trap: Hardcoding prompts in application code — it couples prompt tuning to the full deployment pipeline, slowing iteration from minutes to hours.

Mnemonic: Prompts change daily, code changes weekly — separate versioning for different rhythms

## Q26
Type: multi
Difficulty: 3
Tags: agent-development, guardrails-implementation
Concepts: input-output-safety
Domain: Domain 2 — Agent Development
DomainNumber: 2

When implementing safety guardrails for an agent that processes user-uploaded documents, which TWO protections are most critical? (Select two)

A. File type validation and size limits to prevent resource exhaustion from malicious uploads
B. Content scanning for prompt injection attempts embedded within documents, where document text is designed to hijack the agent's instructions
C. Checking the upload timestamp is within business hours
D. Requiring users to read a terms-of-service page before uploading

Answer: A, B

Hint: Think about the two main attack vectors: resource attacks and content-based attacks.

Explanation: Malicious uploads can exploit agents through two vectors: resource exhaustion (e.g., a 10GB file or a zip bomb) and content-based attacks (e.g., prompt injection hidden in document text). File validation prevents the former; content scanning for injection attempts prevents the latter.

Why others wrong: Business hours restriction doesn't prevent attacks (C); ToS acceptance is a legal measure, not a technical safeguard (D).

Trap: Only validating file types without scanning content — a valid PDF can contain prompt injection in its text that hijacks the agent when the document is processed.

Mnemonic: Two attack vectors for uploads: size/type bombs + content injection. Guard both.

## Q27
Type: single
Difficulty: 2
Tags: agent-development, tool-authentication
Concepts: credential-management
Domain: Domain 2 — Agent Development
DomainNumber: 2

How should an agent system manage API credentials for the tools it invokes?

A. Embed credentials directly in the agent's system prompt so it can include them in tool calls
B. Use a secrets manager (e.g., HashiCorp Vault, AWS Secrets Manager) with short-lived tokens, and inject credentials at the tool execution layer — never expose them to the LLM
C. Store credentials in the agent's conversation history for easy reference
D. Use the same API key for all tools to simplify management

Answer: B

Hint: What happens if the LLM hallucinates and outputs the credential in a user-facing response?

Explanation: Credentials must never enter the LLM's context because the model could leak them in responses. A secrets manager provides short-lived, rotatable tokens injected only at the tool execution layer, following the principle of least privilege.

Why others wrong: Prompt-embedded credentials can be leaked by the LLM (A); conversation history is visible to users (C); shared credentials violate least-privilege and make revocation impossible (D).

Trap: Putting credentials in the system prompt "because the LLM needs them to call tools" — the LLM should select tools and provide parameters, but credential injection happens at a lower layer.

Mnemonic: Credentials: never in the prompt, always in the execution layer

## Q28
Type: single
Difficulty: 1
Tags: agent-development, testing
Concepts: agent-testing-strategy
Domain: Domain 2 — Agent Development
DomainNumber: 2

What is the most important type of test for validating an agent's behavior before production deployment?

A. Unit tests that verify individual function implementations
B. End-to-end scenario tests that simulate realistic multi-turn conversations with expected tool calls and outputs, verifying the agent's decision-making across the full workflow
C. Load tests that only check response time
D. Manual testing by the developer

Answer: B

Hint: An agent's value is in its decisions, not its individual functions.

Explanation: Agents are decision-making systems. End-to-end scenario tests verify the complete decision chain: given a user query, does the agent select the right tools, in the right order, with the right parameters, and produce a correct final response? Unit tests miss the orchestration logic that makes agents valuable.

Why others wrong: Unit tests verify components but not their orchestration (A); load tests check performance, not correctness (C); manual testing doesn't scale or provide regression protection (D).

Trap: Over-investing in unit tests for tool wrappers while neglecting scenario tests for the agent's reasoning and tool selection behavior.

Mnemonic: Test the agent's decisions, not just its parts. Scenario > unit for agents.

## Q29
Type: single
Difficulty: 2
Tags: agent-development, context-injection
Concepts: context-window-optimization
Domain: Domain 2 — Agent Development
DomainNumber: 2

An agent's context window is 128K tokens. The conversation history is 20K, the system prompt is 5K, and tool descriptions take 15K. How much effective context remains for RAG-retrieved documents and reasoning?

A. 128K — the full context is always available
B. Approximately 88K tokens, but practical capacity is lower because model performance degrades with very long contexts, so budget ~60-70K for retrieved content
C. 0 — the context is already full
D. 108K — subtract only the system prompt

Answer: B

Hint: The arithmetic gives 88K, but models don't use long contexts perfectly — what's the practical limit?

Explanation: 128K - 20K - 5K - 15K = 88K raw available. However, LLM performance degrades in the "lost in the middle" phenomenon, where information in the center of long contexts is less likely to be attended to. Practical budgeting should leave headroom and place critical information at the start and end.

Why others wrong: All components compete for context space (A); the context is far from full (C); tool descriptions and conversation history also consume context (D).

Trap: Using all 88K available tokens — model attention weakens in the middle of very long contexts, so effective capacity is less than raw capacity.

Mnemonic: Raw capacity ≠ effective capacity. Budget for "lost in the middle."

## Q30
Type: single
Difficulty: 3
Tags: agent-development, multi-modal-tools
Concepts: multimodal-agent-development
Domain: Domain 2 — Agent Development
DomainNumber: 2

An agent processes customer support tickets that include both text descriptions and attached screenshots. When designing the tool pipeline, what is the key challenge?

A. Screenshots cannot be processed by any AI system
B. Aligning the visual content from screenshots with the textual description to form a coherent understanding, then routing to the appropriate specialist agent based on the combined context
C. Text and images must always be processed in separate conversations
D. Screenshots should be ignored and only text should be processed

Answer: B

Hint: The text might say "see the error in the screenshot" — the agent needs to understand both together.

Explanation: Multimodal agent development requires fusing information across modalities. A customer saying "the button shown in the screenshot doesn't work" requires the agent to identify the button visually, understand the described behavior, and route based on the combined understanding.

Why others wrong: Modern vision-language models process screenshots well (A); separating modalities loses cross-references (C); ignoring screenshots misses critical diagnostic information (D).

Trap: Processing text and images independently and merging only at the end — cross-references between modalities are lost.

Mnemonic: Multimodal = fuse early, route on combined understanding

## Q31
Type: single
Difficulty: 2
Tags: evaluation, task-success-rate
Concepts: evaluation-metrics
Domain: Domain 3 — Evaluation and Tuning
DomainNumber: 3

Which metric most directly measures whether an agentic system is achieving its intended goal?

A. Average tokens generated per request
B. Task completion rate — the percentage of user requests that reach a successful end state as defined by the task specification
C. Model perplexity on a held-out dataset
D. Number of tool calls per request

Answer: B

Hint: The ultimate test of an agent is whether it accomplishes what the user asked.

Explanation: Task completion rate directly measures whether the agent achieves its objective. While efficiency metrics (tokens, tool calls) and model quality metrics (perplexity) are informative, they don't directly indicate whether the user's goal was met.

Why others wrong: Token count measures verbosity, not success (A); perplexity measures language model quality, not task completion (C); more tool calls may indicate inefficiency or thoroughness — neither correlates directly with success (D).

Trap: Optimizing for proxy metrics (latency, token count) instead of the outcome metric (did it work?).

Mnemonic: The best metric answers: "Did the agent do the job?" = task completion rate

## Q32
Type: single
Difficulty: 3
Tags: evaluation, agent-trajectory
Concepts: trajectory-evaluation
Domain: Domain 3 — Evaluation and Tuning
DomainNumber: 3

Beyond final output correctness, why is evaluating an agent's trajectory (the sequence of reasoning steps and tool calls) important?

A. Trajectory evaluation is only useful for debugging, not production evaluation
B. An agent can arrive at the correct answer through unsafe, inefficient, or unreliable reasoning paths that will fail on slightly different inputs, so trajectory evaluation catches brittle success
C. Trajectory evaluation replaces the need for output evaluation
D. It is only needed for agents that use more than five tools

Answer: B

Hint: A student can get the right answer by lucky guessing — is that the same as understanding?

Explanation: Correct outputs from incorrect reasoning are "brittle success" — they'll fail when inputs change slightly. Trajectory evaluation verifies that the agent's reasoning path is sound, efficient, and safe, ensuring reliable performance across diverse inputs rather than just on the test set.

Why others wrong: Trajectory eval is essential in production for catching reliability issues (A); both trajectory and output evaluation are needed (C); the number of tools is irrelevant to the need for trajectory evaluation (D).

Trap: Only checking if the final answer is right — an agent that makes five unnecessary API calls and one unsafe data access before reaching the right answer has a problematic trajectory.

Mnemonic: Right answer, wrong path = brittle. Evaluate the journey, not just the destination.

## Q33
Type: single
Difficulty: 2
Tags: evaluation, automated-evaluation
Concepts: llm-as-judge
Domain: Domain 3 — Evaluation and Tuning
DomainNumber: 3

When using an LLM as a judge to evaluate another agent's outputs, what is the most significant bias to guard against?

A. The judge LLM preferring longer responses regardless of quality (verbosity bias)
B. The judge LLM being too slow for real-time evaluation
C. The judge LLM requiring too many API calls
D. The judge LLM producing outputs in the wrong language

Answer: A

Hint: Studies show LLM judges consistently rate longer responses higher — even when shorter ones are more accurate.

Explanation: Verbosity bias is a well-documented issue where LLM judges score longer, more detailed responses higher than concise correct answers. Other biases include position bias (favoring the first option) and self-enhancement bias (preferring outputs from the same model family). Mitigations include rubric-based scoring and multi-judge panels.

Why others wrong: Latency is an operational concern, not a quality bias (B); API costs are practical, not evaluative issues (C); language mismatch is a configuration error, not a systematic bias (D).

Trap: Trusting LLM judge scores without calibration — verbosity bias can make a rambling, partly-correct answer score higher than a concise, fully-correct one.

Mnemonic: LLM judges love long answers. Calibrate for verbosity bias.

## Q34
Type: single
Difficulty: 1
Tags: evaluation, regression-testing
Concepts: eval-regression-detection
Domain: Domain 3 — Evaluation and Tuning
DomainNumber: 3

After updating an agent's system prompt, which evaluation approach best catches regressions?

A. Running a few manual test queries and checking results visually
B. Re-running a comprehensive evaluation suite of diverse test cases and comparing results against the previous prompt version's baseline scores
C. Checking only the specific queries that motivated the prompt change
D. Deploying to production and monitoring user complaints

Answer: B

Hint: How do you know the fix for query X didn't break queries Y and Z?

Explanation: A comprehensive evaluation suite with baseline comparison catches unintended regressions across diverse scenarios. Prompt changes often have unexpected side effects on queries unrelated to the original improvement target.

Why others wrong: Manual testing is not reproducible or comprehensive (A); testing only the motivation cases misses regressions on other cases (C); production complaints are too late and costly (D).

Trap: Only testing the scenarios the prompt change was designed to improve — prompt changes frequently cause regressions on unrelated queries.

Mnemonic: Changed the prompt? Run the FULL eval suite, not just the fix cases.

## Q35
Type: multi
Difficulty: 3
Tags: evaluation, multi-agent-evaluation
Concepts: evaluating-multi-agent-systems
Domain: Domain 3 — Evaluation and Tuning
DomainNumber: 3

When evaluating a multi-agent system, which TWO aspects require specialized evaluation beyond single-agent metrics? (Select two)

A. Inter-agent communication quality — whether agents correctly pass context, maintain coherence, and avoid information loss at handoff points
B. The font size of the user interface
C. Emergent behaviors — unplanned interactions between agents that may cause loops, deadlocks, or escalating resource consumption
D. The color scheme of the logging dashboard

Answer: A, C

Hint: Multi-agent systems have failure modes that single agents never exhibit.

Explanation: Multi-agent evaluation must cover inter-agent coordination (information loss at handoffs, context degradation across agents) and emergent behaviors (infinite delegation loops, deadlocks from circular dependencies, resource races). These failure modes don't exist in single-agent systems.

Why others wrong: UI font size and dashboard colors are styling concerns, not evaluation metrics (B, D).

Trap: Evaluating each agent independently and declaring the system works — multi-agent failures emerge from interactions, not individual agent defects.

Mnemonic: Multi-agent eval = handoff quality + emergent behavior detection

## Q36
Type: single
Difficulty: 2
Tags: evaluation, cost-tracking
Concepts: agentic-cost-evaluation
Domain: Domain 3 — Evaluation and Tuning
DomainNumber: 3

In agentic systems, why is cost-per-task a more useful metric than cost-per-token?

A. Because tokens are free in agentic systems
B. Because agents vary widely in how many LLM calls, tool invocations, and retry loops they use per task, so per-token cost hides the true cost of accomplishing user goals
C. Because cost-per-token cannot be calculated
D. Because all tasks use the same number of tokens

Answer: B

Hint: Two agents might both answer a question — one with a single call, the other with five tool calls and three retries.

Explanation: Agentic systems exhibit high variance in resource consumption per task. A simple query might cost 1K tokens while a complex research task uses 50K tokens across multiple LLM calls plus tool invocations. Cost-per-task reveals the true economics of serving user requests and enables accurate budgeting.

Why others wrong: Tokens have real costs (A); per-token cost is calculable but insufficient (C); tasks vary enormously in token usage (D).

Trap: Optimizing per-token cost without watching per-task cost — a cheaper model that needs 5x more reasoning loops may cost more per task.

Mnemonic: Cost per task = total cost to do the job. Tokens are a component, not the whole picture.

## Q37
Type: single
Difficulty: 2
Tags: evaluation, safety-evaluation
Concepts: red-teaming-agents
Domain: Domain 3 — Evaluation and Tuning
DomainNumber: 3

What distinguishes red-teaming for agentic systems from red-teaming for standard LLMs?

A. Agentic red-teaming only tests the prompt
B. Agentic red-teaming must also test tool abuse, privilege escalation through tool chains, data exfiltration via tool outputs, and multi-step attack sequences that exploit the agent's autonomous decision-making
C. Standard LLMs are harder to red-team than agents
D. Red-teaming is unnecessary for agentic systems because guardrails are sufficient

Answer: B

Hint: Agents can DO things, not just SAY things — how does that change the attack surface?

Explanation: Standard LLM red-teaming focuses on generating harmful text. Agentic red-teaming must additionally test whether an attacker can manipulate the agent into taking harmful actions: calling unintended tools, accessing unauthorized data, or chaining tool calls to escalate privileges beyond what any single call would allow.

Why others wrong: Prompt testing is only one component of agentic red-teaming (A); agents have a larger attack surface than text-only LLMs (C); guardrails should be tested, not assumed sufficient (D).

Trap: Red-teaming only the LLM component and ignoring tool abuse — the most dangerous agent attacks exploit the tool-calling loop, not the text generation.

Mnemonic: LLM red-team = harmful text. Agent red-team = harmful text + harmful actions.

## Q38
Type: single
Difficulty: 2
Tags: evaluation, latency-analysis
Concepts: agentic-latency-profiling
Domain: Domain 3 — Evaluation and Tuning
DomainNumber: 3

An agent's end-to-end response time is 12 seconds. Profiling shows: LLM inference (3 calls) = 6s, tool execution = 4s, network overhead = 2s. Which optimization yields the largest improvement?

A. Switching to a slightly faster LLM that saves 0.5s per call
B. Parallelizing the two independent tool calls that currently run sequentially, reducing tool time from 4s to ~2.5s
C. Compressing network payloads to save 0.2s
D. Adding a caching layer that won't help because queries are unique

Answer: A

Hint: Calculate the actual savings: 0.5s × 3 calls vs. 4s - 2.5s vs. 0.2s savings.

Explanation: Faster LLM saves 0.5s × 3 calls = 1.5s total. Parallelizing tools saves ~1.5s (4s → 2.5s). Both yield similar savings, but the LLM optimization applies to ALL requests while tool parallelization only helps when there are independent tools. However, looking at the options more carefully: A saves 1.5s, B saves 1.5s, C saves 0.2s. A is the best single optimization because it benefits every request path.

Why others wrong: B saves the same amount but only on requests with parallelizable tools; C saves only 0.2s (C); D is stated as not applicable (D).

Trap: Optimizing the smallest component (network) because it seems easiest — always optimize the largest contributor first.

Mnemonic: Profile first, optimize the biggest contributor. 3 LLM calls × savings = multiplied impact.

## Q39
Type: single
Difficulty: 3
Tags: evaluation, fine-tuning-decision
Concepts: fine-tune-vs-prompt
Domain: Domain 3 — Evaluation and Tuning
DomainNumber: 3

An agent correctly handles 85% of customer queries with prompt engineering alone. Fine-tuning could improve this to 92%, but requires labeled data and ongoing maintenance. When is fine-tuning justified?

A. Always — higher accuracy is always worth the cost
B. When the 7% improvement addresses high-stakes queries (e.g., billing errors, safety issues) where the cost of failure exceeds the ongoing fine-tuning investment, and the distribution of queries is stable enough to justify the maintenance
C. Never — prompt engineering is always sufficient
D. Only when the model has fewer than 7B parameters

Answer: B

Hint: Think about it as a cost-benefit analysis: what is the cost of those 15% failures vs. the cost of fine-tuning?

Explanation: Fine-tuning decisions should be based on the business impact of the improvement. If the 7% improvement covers high-value or high-risk scenarios, the ROI justifies the investment. But if the failing 15% are low-stakes queries, prompt engineering at 85% may be the optimal cost-performance point.

Why others wrong: Accuracy improvement must justify the cost (A); prompt engineering has limits and fine-tuning has a role (C); model size isn't the deciding factor (D).

Trap: Fine-tuning reflexively to chase higher accuracy without analyzing whether the improvement targets matter.

Mnemonic: Fine-tune when failure cost × improvement > fine-tuning cost + maintenance

## Q40
Type: single
Difficulty: 2
Tags: evaluation, hallucination-detection
Concepts: groundedness-evaluation
Domain: Domain 3 — Evaluation and Tuning
DomainNumber: 3

Which evaluation metric specifically measures whether an agent's response is supported by the retrieved context rather than fabricated?

A. BLEU score
B. Groundedness — the proportion of claims in the response that can be attributed to the provided source documents
C. F1 score
D. Response latency

Answer: B

Hint: You want to know: is this fact in the documents, or did the agent make it up?

Explanation: Groundedness measures whether each claim in the agent's output is supported by evidence in the retrieved documents. It specifically targets hallucination — content the agent generates that has no basis in the provided context. This is critical for RAG-based agents where factual accuracy depends on retrieval quality.

Why others wrong: BLEU measures n-gram overlap with a reference, not factual grounding (A); F1 measures precision/recall, not source attribution (C); latency measures speed, not accuracy (D).

Trap: Using BLEU or ROUGE as groundedness proxies — they measure surface similarity to a reference text, not whether claims are supported by source documents.

Mnemonic: Groundedness = "can I find this in the docs?" Hallucination = "nope, agent made it up"

## Q41
Type: single
Difficulty: 1
Tags: deployment, inference-optimization
Concepts: model-serving-optimization
Domain: Domain 4 — Deployment and Scaling
DomainNumber: 4

What is the primary purpose of batching multiple inference requests together when deploying an LLM for an agentic system?

A. To reduce the quality of responses
B. To increase GPU utilization by processing multiple requests in a single forward pass, amortizing the fixed overhead of model weight loading across requests
C. To ensure requests are processed in chronological order
D. To reduce the model's parameter count

Answer: B

Hint: GPUs are most efficient when processing many tokens in parallel rather than one request at a time.

Explanation: Batching amortizes the fixed cost of loading model weights and utilizing GPU compute across multiple requests. A single request may use only 10% of GPU capacity, while a batch of 8 requests can achieve 80%+ utilization, dramatically improving throughput and cost efficiency.

Why others wrong: Batching doesn't affect quality (A); ordering is handled by queuing, not batching (C); batching doesn't change model size (D).

Trap: Thinking batching only helps throughput — it also reduces per-request cost by sharing GPU resources.

Mnemonic: Batch = fill the GPU. Empty GPU = wasted money.

## Q42
Type: single
Difficulty: 2
Tags: deployment, blue-green
Concepts: deployment-strategies
Domain: Domain 4 — Deployment and Scaling
DomainNumber: 4

A company wants to deploy an updated agent with zero downtime and instant rollback capability. Which deployment strategy is most appropriate?

A. Stop the old agent, deploy the new agent, then start it
B. Blue-green deployment — run the new version alongside the old, shift traffic after validation, keep the old version running for instant rollback
C. Deploy directly to production and monitor for errors
D. Deploy during a scheduled maintenance window

Answer: B

Hint: How do you test the new version with zero downtime and one-click rollback?

Explanation: Blue-green deployment maintains two identical environments. Traffic is shifted to the new (green) environment after validation while the old (blue) remains running. If issues are detected, traffic is instantly shifted back to blue — achieving zero downtime and instant rollback.

Why others wrong: Stopping the old agent causes downtime (A); direct production deployment has no rollback (C); maintenance windows cause downtime (D).

Trap: Confusing blue-green with canary deployment — blue-green switches all traffic at once, while canary gradually increases traffic to the new version.

Mnemonic: Blue = old, Green = new. Bad green? Switch back to blue instantly.

## Q43
Type: single
Difficulty: 3
Tags: deployment, resource-management
Concepts: gpu-memory-planning
Domain: Domain 4 — Deployment and Scaling
DomainNumber: 4

An agentic system uses a 70B parameter model with 16-bit precision. Each agent instance also needs ~2GB for KV-cache. How many agent instances can run concurrently on a node with 8×A100 80GB GPUs using tensor parallelism across all 8 GPUs?

A. 1 instance with no room for more
B. Approximately 2 instances — the model requires ~140GB spread across 8 GPUs (17.5GB per GPU), KV-cache adds ~2GB per instance per GPU shard, leaving room for a second instance
C. 50 instances since GPUs have unlimited memory
D. 0 instances — the model doesn't fit

Answer: B

Hint: Calculate: 70B × 2 bytes = 140GB for model weights. Total GPU memory = 8 × 80GB = 640GB. How much is left?

Explanation: Model weights: 70B × 2 bytes (fp16) = 140GB distributed across 8 GPUs = 17.5GB per GPU. KV-cache: ~2GB per instance spread across GPUs. Available per GPU: 80 - 17.5 = 62.5GB. This allows several instances, but KV-cache grows with sequence length and batch size, practically limiting concurrent instances to ~2-3 with comfortable margins.

Why others wrong: There's clearly room for more than 1 (A); GPU memory is finite (C); the model fits across 8 GPUs easily (D).

Trap: Forgetting that KV-cache scales with sequence length and batch size — a long context agent conversation may consume far more than the 2GB baseline estimate.

Mnemonic: Model weights + KV-cache per instance = total GPU budget. Don't forget KV-cache grows!

## Q44
Type: single
Difficulty: 2
Tags: deployment, auto-scaling
Concepts: scaling-policies
Domain: Domain 4 — Deployment and Scaling
DomainNumber: 4

Which auto-scaling metric is most appropriate for an agentic inference service with variable request complexity?

A. CPU utilization percentage
B. Request queue depth (number of pending requests) — because variable complexity means CPU/GPU utilization doesn't correlate linearly with demand
C. Network bandwidth usage
D. Disk I/O operations per second

Answer: B

Hint: A simple query and a 10-tool-call complex query use very different resources — which metric captures demand regardless of per-request resource variance?

Explanation: Queue depth directly measures unmet demand regardless of individual request complexity. GPU/CPU utilization can be misleading because a few complex requests might show high utilization while many simple requests queue up, or vice versa. Queue depth captures the user-facing reality: are requests waiting?

Why others wrong: CPU utilization varies by request complexity, not just demand (A); network bandwidth doesn't reflect compute demand (C); LLM inference is compute-bound, not I/O-bound (D).

Trap: Using GPU utilization — it might be at 90% serving one very long complex request while 50 simple requests wait in the queue.

Mnemonic: Variable complexity → queue depth. It measures what users feel: are they waiting?

## Q45
Type: single
Difficulty: 2
Tags: deployment, model-routing
Concepts: multi-model-routing
Domain: Domain 4 — Deployment and Scaling
DomainNumber: 4

An agentic system routes requests to different model sizes based on query complexity. Simple classification uses a 7B model, complex reasoning uses a 70B model. What is this deployment pattern called?

A. Model distillation
B. Model routing or cascading — directing requests to the most cost-effective model that can handle the task's complexity
C. Model fine-tuning
D. Model ensembling

Answer: B

Hint: Think of it as traffic routing based on complexity — like express vs. regular checkout lanes.

Explanation: Model routing directs requests to appropriately-sized models based on task complexity, optimizing the cost-quality tradeoff. Simple tasks don't need expensive large models, while complex tasks benefit from them. This is sometimes called model cascading when a small model tries first and escalates to a larger one on failure.

Why others wrong: Distillation creates smaller models from larger ones (A); fine-tuning specializes a model (C); ensembling combines outputs from multiple models for the same query (D).

Trap: Using the largest model for everything "to be safe" — most queries can be handled by smaller models at a fraction of the cost.

Mnemonic: Simple query → small model. Complex query → big model. Route by complexity.

## Q46
Type: single
Difficulty: 3
Tags: deployment, state-management
Concepts: session-state-deployment
Domain: Domain 4 — Deployment and Scaling
DomainNumber: 4

A multi-turn agent system is deployed across multiple replicas behind a load balancer. How should session state be managed to ensure conversation continuity?

A. Use sticky sessions to pin each user to a specific replica
B. Externalize all session state to a distributed store (Redis, DynamoDB) with a session ID, so any replica can serve any request — avoiding sticky sessions which create hot spots and complicate failover
C. Store session state in each replica's local memory
D. Require users to resend their entire conversation history with each message

Answer: B

Hint: What happens to a sticky session when its pinned replica goes down?

Explanation: External state stores decouple session state from specific replicas, enabling true stateless scaling. Any replica can serve any request by loading state from the shared store. Sticky sessions create uneven load, complicate scaling, and lose state on replica failure.

Why others wrong: Sticky sessions create hot spots and single-point failures (A); local memory is lost on restart or scaling events (C); resending full history wastes bandwidth and fails with long conversations (D).

Trap: Using sticky sessions for simplicity — they work until a replica fails and all its pinned users lose their conversation state.

Mnemonic: Stateless replicas + shared state store = scale freely, fail gracefully

## Q47
Type: single
Difficulty: 1
Tags: deployment, containerization
Concepts: container-best-practices
Domain: Domain 4 — Deployment and Scaling
DomainNumber: 4

What is the primary benefit of containerizing agent services for deployment?

A. Containers make LLMs generate better responses
B. Containers package the agent with all its dependencies into a portable, reproducible unit that runs consistently across development, staging, and production environments
C. Containers eliminate the need for GPUs
D. Containers automatically fix bugs in agent code

Answer: B

Hint: "It works on my machine" — containers solve this problem.

Explanation: Containerization ensures environment consistency by packaging the agent, its runtime, libraries, and configuration into a self-contained image. This eliminates "works on my machine" issues and enables reliable deployment across different environments.

Why others wrong: Containers don't affect model quality (A); containers can use GPU passthrough but don't eliminate the need (C); containers package code, not fix it (D).

Trap: Thinking containers are only for microservices — agent systems benefit equally from reproducible, portable deployment units.

Mnemonic: Container = consistent environment everywhere. Package once, run anywhere.

## Q48
Type: multi
Difficulty: 3
Tags: deployment, edge-deployment
Concepts: edge-agent-deployment
Domain: Domain 4 — Deployment and Scaling
DomainNumber: 4

When deploying an agentic system at the edge (on-premises or on-device), which TWO constraints differ most from cloud deployment? (Select two)

A. Limited compute resources requiring smaller, quantized models and careful memory management
B. The need for user authentication
C. Restricted or intermittent network connectivity requiring local tool execution and offline-capable agent workflows
D. The need for version control

Answer: A, C

Hint: Edge = less compute + less network. How does that change agent design?

Explanation: Edge deployment constrains compute (requiring model compression, quantization, smaller models) and network (requiring offline-capable workflows, local tool execution, cached knowledge). Cloud deployment assumes abundant compute and reliable connectivity, so agent designs must be fundamentally adapted.

Why others wrong: Authentication is needed in both edge and cloud (B); version control is a development concern, not a deployment constraint (D).

Trap: Deploying a cloud-designed agent to the edge without adaptation — large models won't fit, and cloud API tools won't work offline.

Mnemonic: Edge = small model + offline tools. Cloud ≠ edge.

## Q49
Type: single
Difficulty: 2
Tags: deployment, canary-release
Concepts: canary-deployment
Domain: Domain 4 — Deployment and Scaling
DomainNumber: 4

How does canary deployment differ from blue-green deployment for agentic systems?

A. Canary deployment is faster than blue-green
B. Canary deployment gradually shifts a small percentage of traffic to the new version, monitoring for issues before increasing, while blue-green switches all traffic at once
C. Blue-green requires more servers than canary
D. Canary deployment doesn't require monitoring

Answer: B

Hint: A canary in a coal mine detects danger early — how does that metaphor apply to deployment?

Explanation: Canary deployment routes a small percentage (e.g., 5%) of traffic to the new version first. If metrics look good, traffic is gradually increased. This limits blast radius — only a small fraction of users are affected if the new version has issues. Blue-green switches 100% at once.

Why others wrong: Speed depends on configuration, not the strategy (A); both require running two versions simultaneously (C); monitoring is essential for canary — it's how you decide to increase traffic (D).

Trap: Using canary without proper metrics — if you can't detect degradation at 5% traffic, you'll promote a broken version.

Mnemonic: Canary = small test first, grow gradually. Blue-green = all-or-nothing switch.

## Q50
Type: single
Difficulty: 2
Tags: cognition, reasoning-frameworks
Concepts: cot-vs-react
Domain: Domain 5 — Cognition, Planning, and Memory
DomainNumber: 5

What is the key difference between Chain-of-Thought (CoT) reasoning and ReAct (Reasoning + Acting) in agentic systems?

A. CoT is faster than ReAct
B. CoT generates a reasoning chain before producing an answer, while ReAct interleaves reasoning steps with tool actions, allowing the agent to observe real-world feedback and adjust its plan mid-execution
C. ReAct cannot use tools
D. CoT requires fine-tuning while ReAct works with any model

Answer: B

Hint: CoT thinks then answers. ReAct thinks, acts, observes, thinks again — an iterative loop.

Explanation: CoT produces a linear reasoning chain leading to a conclusion. ReAct extends this by interleaving reasoning ("I need to search for X") with actions (actually searching) and observations (processing search results), creating a feedback loop that adapts to real-world information.

Why others wrong: ReAct is typically slower due to tool calls (A); ReAct explicitly integrates tool actions (C); both work with prompting (D).

Trap: Treating CoT and ReAct as interchangeable — CoT is pure reasoning while ReAct grounds reasoning in real-world observations.

Mnemonic: CoT = think→answer. ReAct = think→act→observe→think→...

## Q51
Type: single
Difficulty: 3
Tags: cognition, tree-of-thought
Concepts: tot-reasoning
Domain: Domain 5 — Cognition, Planning, and Memory
DomainNumber: 5

Tree-of-Thought (ToT) reasoning explores multiple reasoning paths simultaneously and prunes unpromising branches. For which type of agentic task is ToT most beneficial compared to linear CoT?

A. Simple factual question answering
B. Complex planning tasks with multiple viable strategies where early commitment to one path may lead to dead ends, such as multi-step debugging or strategic decision-making
C. Token classification tasks
D. Translating text between languages

Answer: B

Hint: When is exploring multiple paths before committing more valuable than following one path?

Explanation: ToT excels when the problem space has multiple viable approaches and dead ends. By exploring several reasoning branches in parallel and evaluating partial solutions before committing, ToT avoids the "commitment trap" of linear CoT where an early wrong assumption corrupts the entire reasoning chain.

Why others wrong: Simple QA doesn't benefit from branching exploration (A); classification is typically single-step (C); translation follows a linear input→output pattern (D).

Trap: Applying ToT to every task — the overhead of exploring multiple branches is only justified when the search space is complex and dead ends are costly.

Mnemonic: ToT = explore many paths, prune bad ones. Best for complex decisions with dead ends.

## Q52
Type: single
Difficulty: 2
Tags: cognition, working-memory
Concepts: agent-working-memory
Domain: Domain 5 — Cognition, Planning, and Memory
DomainNumber: 5

An agent is processing a long document in a multi-step analysis. Which working memory strategy prevents information loss between analysis steps?

A. Rely entirely on the LLM's context window to hold all intermediate results
B. Use a scratchpad — a structured working memory that stores intermediate results, extracted facts, and partial conclusions in an external key-value store, injecting relevant entries into the prompt at each step
C. Discard intermediate results and re-derive them when needed
D. Compress the entire document into a single embedding vector

Answer: B

Hint: Humans use notepads to track complex analysis — agents need the equivalent.

Explanation: A scratchpad provides persistent structured storage for intermediate results that the agent can read from and write to across reasoning steps. Unlike relying on context alone, it survives context window limits and provides organized, queryable access to prior computations.

Why others wrong: Context window has limits and older information gets deprioritized (A); re-derivation wastes compute and may produce different results (C); a single embedding loses all structural detail (D).

Trap: Trusting the context window to perfectly preserve intermediate results across many steps — attention to middle content degrades.

Mnemonic: Scratchpad = agent's notepad. Write it down, read it back, never lose intermediate work.

## Q53
Type: single
Difficulty: 3
Tags: cognition, self-reflection
Concepts: reflection-mechanism
Domain: Domain 5 — Cognition, Planning, and Memory
DomainNumber: 5

An agent completes a task but produces an incorrect result. A reflection mechanism reviews the output, identifies the error, and triggers a corrected attempt. What is the main risk of recursive self-reflection?

A. The agent will always produce better results with more reflection rounds
B. Infinite reflection loops — the agent may repeatedly identify "errors" in its corrections, never converging on a final answer, or may degrade a correct answer through over-correction
C. Reflection is computationally free
D. Self-reflection eliminates the need for human evaluation

Answer: B

Hint: What if the corrected version is worse, prompting another "correction" that's also wrong?

Explanation: Recursive reflection can oscillate between different wrong answers or over-correct a good answer. Without a stopping condition (max iterations, confidence threshold, convergence check), the agent may loop indefinitely. Additionally, each reflection round consumes tokens and time, so diminishing returns set in quickly.

Why others wrong: More reflection can degrade results through over-correction (A); reflection has token/latency costs (C); automated reflection complements but doesn't replace human evaluation (D).

Trap: Not setting a maximum reflection depth — reflection loops are one of the most common failure modes in agentic systems.

Mnemonic: Reflect, but set a limit. Max 2-3 rounds, then stop. Infinite reflection = infinite cost.

## Q54
Type: single
Difficulty: 2
Tags: cognition, plan-execution
Concepts: plan-and-execute
Domain: Domain 5 — Cognition, Planning, and Memory
DomainNumber: 5

In the plan-and-execute agent pattern, what happens when the execution of a plan step produces an unexpected result?

A. The agent should continue with the remaining plan steps regardless
B. The agent should re-evaluate the plan, potentially replanning the remaining steps based on the unexpected observation, while preserving results from successfully completed steps
C. The entire plan should be discarded and execution restarted from scratch
D. The unexpected result should be ignored

Answer: B

Hint: Military planning has a saying: "no plan survives first contact with the enemy."

Explanation: Adaptive replanning preserves completed work while adjusting future steps based on new information. This is more efficient than restarting and more robust than blindly continuing a plan whose assumptions are violated.

Why others wrong: Continuing with violated assumptions leads to cascading failures (A); full restart wastes completed work (C); ignoring unexpected results leads to incorrect outcomes (D).

Trap: Either rigidly following the original plan or completely restarting — the middle ground is partial replanning that leverages completed work.

Mnemonic: Plan → Execute → Surprise? → Replan remaining steps, keep done work.

## Q55
Type: single
Difficulty: 2
Tags: cognition, long-term-memory
Concepts: episodic-semantic-memory
Domain: Domain 5 — Cognition, Planning, and Memory
DomainNumber: 5

An agent serving a customer support role needs to remember past interactions across sessions. Which memory type stores "this user had a billing dispute last month that was resolved with a refund"?

A. Procedural memory — how to perform tasks
B. Episodic memory — specific past events and experiences with temporal and contextual details
C. Semantic memory — general knowledge and facts
D. Working memory — current task state

Answer: B

Hint: This is a specific event that happened at a specific time — not general knowledge.

Explanation: Episodic memory stores specific past events with their context (who, what, when, where, how). A particular customer's billing dispute is an episode, not general knowledge (semantic) or a skill (procedural). Retrieving episodic memories allows the agent to personalize interactions based on history.

Why others wrong: Procedural memory stores skills and procedures (A); semantic memory stores general facts like "refunds take 5-7 business days" (C); working memory is short-term for the current task (D).

Trap: Storing customer history as semantic memory — it loses the temporal context and specificity needed to reference individual past interactions.

Mnemonic: Episodic = "remember that time when..." Semantic = "in general, ..."

## Q56
Type: single
Difficulty: 1
Tags: cognition, context-window
Concepts: context-management-strategy
Domain: Domain 5 — Cognition, Planning, and Memory
DomainNumber: 5

When an agent's conversation exceeds the LLM's context window, what is the most common mitigation?

A. Crash and restart the conversation
B. Sliding window with summarization — summarize older messages and keep only the most recent messages in full, maintaining both continuity and detail for recent context
C. Truncate the beginning of the conversation silently
D. Switch to a model with an infinite context window

Answer: B

Hint: Think about how you handle a very long meeting — you remember the summary of earlier discussion and the details of the recent points.

Explanation: Sliding window with summarization maintains conversation continuity by preserving a summary of older context while keeping recent messages in full detail. This balances completeness (nothing is completely lost) with recency (recent context is fully detailed).

Why others wrong: Crashing is unacceptable UX (A); silent truncation loses early context without acknowledgment (C); no model has infinite context (D).

Trap: Simple truncation without summarization — it drops early context that may contain critical information like the user's original intent.

Mnemonic: Old turns → summary. Recent turns → full. Never just drop.

## Q57
Type: single
Difficulty: 3
Tags: cognition, meta-reasoning
Concepts: metacognitive-monitoring
Domain: Domain 5 — Cognition, Planning, and Memory
DomainNumber: 5

An agent can assess its own confidence in a response and decide whether to answer directly or seek additional information. What is this capability called?

A. Model distillation
B. Metacognitive monitoring — the ability to evaluate one's own reasoning quality and knowledge gaps, enabling calibrated decision-making about when to act vs. when to gather more information
C. Transfer learning
D. Gradient descent

Answer: B

Hint: "Thinking about your own thinking" — what cognitive science term describes this?

Explanation: Metacognitive monitoring allows an agent to assess its own confidence, identify knowledge gaps, and decide whether its current information is sufficient to act or whether it needs to call tools, ask clarifying questions, or defer to a human. This is crucial for reliable agentic systems.

Why others wrong: Distillation is model compression (A); transfer learning applies knowledge across domains (C); gradient descent is an optimization algorithm (D).

Trap: Assuming LLMs can't assess their own confidence — while not perfectly calibrated, trained confidence estimation is possible and useful for routing decisions.

Mnemonic: Metacognition = agent knows what it doesn't know

## Q58
Type: single
Difficulty: 1
Tags: knowledge-integration, chunking
Concepts: document-chunking
Domain: Domain 6 — Knowledge Integration and Data Handling
DomainNumber: 6

When preparing documents for a RAG-based agent, why is chunk size important?

A. Chunk size only affects storage cost
B. Too-small chunks lose context and miss cross-paragraph relationships, while too-large chunks dilute relevant information with noise and waste context window space when retrieved
C. All chunks must be exactly 512 tokens
D. Chunk size doesn't matter because the embedding model handles any size

Answer: B

Hint: Goldilocks problem — too small loses context, too large adds noise.

Explanation: Chunk size is a critical RAG parameter. Small chunks may split a concept across two chunks, making neither independently useful. Large chunks include irrelevant information that dilutes the signal and wastes precious context window space. Optimal size depends on document type and query patterns.

Why others wrong: Chunk size primarily affects retrieval quality, not storage (A); optimal size varies by use case (C); embedding models have input limits and quality degrades with mismatched sizes (D).

Trap: Using one-size-fits-all chunking — structured documents (tables, code) need different chunking strategies than prose paragraphs.

Mnemonic: Chunk too small → lost context. Chunk too big → noise. Find the sweet spot.

## Q59
Type: single
Difficulty: 2
Tags: knowledge-integration, reranking
Concepts: retrieval-reranking
Domain: Domain 6 — Knowledge Integration and Data Handling
DomainNumber: 6

In a RAG pipeline, what is the purpose of a reranker after the initial vector similarity search?

A. To generate additional search results
B. To apply a more sophisticated cross-encoder model that scores each query-document pair jointly, improving relevance ranking beyond what bi-encoder similarity can achieve
C. To remove all retrieved documents
D. To translate documents into a different language

Answer: B

Hint: Bi-encoders embed query and document independently. Cross-encoders see them together. Which captures interactions better?

Explanation: Bi-encoder similarity search is fast but encodes query and document independently, missing fine-grained interactions. A cross-encoder reranker jointly processes the query-document pair, capturing nuanced relevance signals. This two-stage approach (fast retrieval then precise reranking) balances speed and quality.

Why others wrong: Rerankers reorder, not generate (A); rerankers filter and reorder, not remove all (C); rerankers assess relevance, not translate (D).

Trap: Skipping reranking because "embedding similarity is good enough" — reranking typically improves retrieval quality by 10-30% for complex queries.

Mnemonic: Retrieve many (fast, approximate) → Rerank few (slow, precise)

## Q60
Type: single
Difficulty: 3
Tags: knowledge-integration, multi-index
Concepts: multi-source-retrieval
Domain: Domain 6 — Knowledge Integration and Data Handling
DomainNumber: 6

An agent needs to answer queries using knowledge from internal documentation (updated weekly), real-time API data (live prices), and historical databases (SQL). How should the knowledge integration be designed?

A. Convert everything to embeddings in a single vector store
B. Use a router that classifies the query intent to determine which knowledge source(s) to query, with dedicated retrieval pipelines for each source type: vector search for docs, API calls for live data, and SQL for structured historical data
C. Always query all three sources for every query
D. Use only the most recently updated source

Answer: B

Hint: Different data types need different retrieval methods — can you use SQL on real-time API data?

Explanation: Each knowledge source has different access patterns, freshness requirements, and query interfaces. A router-based architecture classifies the query to determine which source(s) are relevant, then uses purpose-built retrieval for each type. This is more efficient and accurate than forcing all data into one format.

Why others wrong: Embedding live API data loses real-time freshness, and SQL data needs structured queries (A); querying all sources wastes resources and may introduce noise (C); recent ≠ relevant (D).

Trap: Forcing all knowledge into a vector store — structured data (SQL) and real-time data (APIs) are better accessed through their native interfaces.

Mnemonic: Different data, different access. Route by query type, retrieve by data type.

## Q61
Type: single
Difficulty: 2
Tags: knowledge-integration, knowledge-freshness
Concepts: incremental-indexing
Domain: Domain 6 — Knowledge Integration and Data Handling
DomainNumber: 6

A knowledge base of 100,000 documents receives ~500 updates daily. What indexing strategy balances freshness and resource efficiency?

A. Full reindexing of all 100,000 documents every hour
B. Incremental indexing — detect changed documents via timestamps or content hashes, and reindex only the modified documents, with periodic full reindexing to catch drift
C. Never reindex after the initial load
D. Randomly reindex 1% of documents each hour

Answer: B

Hint: Only 0.5% of documents change daily — why reprocess the other 99.5%?

Explanation: Incremental indexing processes only changed documents, reducing compute by ~99.5% compared to full reindexing. Periodic full reindexing catches any documents missed by change detection. This approach balances freshness (new content is indexed quickly) with efficiency (unchanged content isn't reprocessed).

Why others wrong: Full reindexing wastes resources on unchanged documents (A); never reindexing means answers reference outdated content (C); random reindexing has no guarantee of catching updates (D).

Trap: Full reindexing "to be safe" — at 100K documents, this is computationally expensive and unnecessary when only 500 change daily.

Mnemonic: 500 changed out of 100K → index only the 500. Periodic full reindex as a safety net.

## Q62
Type: single
Difficulty: 2
Tags: knowledge-integration, metadata-filtering
Concepts: metadata-enriched-retrieval
Domain: Domain 6 — Knowledge Integration and Data Handling
DomainNumber: 6

How does metadata filtering improve RAG retrieval quality?

A. It makes embedding generation faster
B. It narrows the search space before vector similarity is computed — for example, filtering by document date, department, or access level — reducing irrelevant results and improving precision
C. It replaces the need for vector embeddings
D. It increases the number of results returned

Answer: B

Hint: Searching 100K documents vs. searching the 5K documents from the relevant department — which is more precise?

Explanation: Metadata filtering applies structured constraints (date range, category, access level) to narrow the candidate set before semantic search. This prevents semantically similar but contextually irrelevant documents from appearing in results — for example, filtering by "engineering department" before searching for "deployment guide."

Why others wrong: Metadata filtering doesn't affect embedding speed (A); it complements, not replaces, vector search (C); it reduces results by filtering, not increases them (D).

Trap: Relying solely on semantic similarity without metadata filtering — a marketing "deployment guide" and an engineering "deployment guide" may be semantically similar but contextually very different.

Mnemonic: Metadata filter = narrow the haystack before searching for the needle

## Q63
Type: multi
Difficulty: 3
Tags: knowledge-integration, graph-rag
Concepts: knowledge-graph-integration
Domain: Domain 6 — Knowledge Integration and Data Handling
DomainNumber: 6

An agent must answer complex queries that require reasoning over entity relationships (e.g., "which products share suppliers with our highest-revenue product?"). Which TWO approaches together provide the best solution? (Select two)

A. Standard vector RAG over product descriptions
B. A knowledge graph that explicitly models entity relationships (products, suppliers, revenue) enabling graph traversal queries
C. Storing all data in a flat CSV file
D. A hybrid approach combining graph queries for relationship traversal with vector RAG for unstructured context, using the graph to identify relevant entities and RAG to enrich with detailed descriptions

Answer: B, D

Hint: Relationships need graph structure; descriptions need semantic search. Which combination covers both?

Explanation: Knowledge graphs excel at relationship-aware queries that require traversing connections between entities. Hybrid graph+vector RAG combines the graph's structural reasoning with vector search's semantic understanding, enabling both "which entities are connected?" and "tell me more about this entity."

Why others wrong: Standard vector RAG doesn't capture explicit relationships (A); flat CSV can't express graph relationships or enable traversal (C).

Trap: Using only vector RAG for relationship queries — embedding similarity finds similar descriptions but can't traverse "supplier of" or "revenue greater than" relationships.

Mnemonic: Relationships → graph. Descriptions → vectors. Complex queries → both.

## Q64
Type: single
Difficulty: 2
Tags: knowledge-integration, embedding-models
Concepts: embedding-model-selection
Domain: Domain 6 — Knowledge Integration and Data Handling
DomainNumber: 6

When selecting an embedding model for a RAG-based agent, which factor should be prioritized?

A. The embedding model's parameter count — bigger is always better
B. Domain-specific retrieval quality — how well the model distinguishes relevant from irrelevant documents for your specific use case, measured through retrieval benchmarks on representative queries
C. The model's text generation quality
D. The model's training date — newest is always best

Answer: B

Hint: An embedding model perfect for legal documents may perform poorly on medical texts. What matters?

Explanation: Embedding models should be evaluated on retrieval quality for your specific domain. A smaller model fine-tuned on domain-relevant data often outperforms a larger general-purpose model. Evaluation should use representative queries and documents from your actual use case.

Why others wrong: Larger models aren't always better for specific domains (A); embedding models don't generate text (C); newer doesn't mean better for specific domains (D).

Trap: Choosing the highest-ranked model on general benchmarks (MTEB) without testing on your domain — benchmark rankings don't transfer perfectly across domains.

Mnemonic: Best embedding = best retrieval for YOUR domain. Benchmark ≠ your use case.

## Q65
Type: single
Difficulty: 1
Tags: knowledge-integration, hybrid-search
Concepts: hybrid-search-strategy
Domain: Domain 6 — Knowledge Integration and Data Handling
DomainNumber: 6

Why do production RAG systems often combine keyword search (BM25) with vector semantic search?

A. To double the number of results
B. Keyword search catches exact matches (product codes, error IDs, proper nouns) that semantic search may miss, while semantic search catches paraphrased or conceptually related queries — together they provide broader coverage
C. Because vector search is always broken
D. Because keyword search is faster than vector search

Answer: B

Hint: "Error ERR-4521" is an exact match problem. "How do I fix the login issue?" is a semantic problem.

Explanation: Keyword (BM25) and semantic search have complementary strengths. BM25 excels at exact term matching (identifiers, codes, names) while semantic search handles paraphrasing and conceptual similarity. Hybrid search uses both, typically with a fusion algorithm (e.g., reciprocal rank fusion) to combine results.

Why others wrong: Hybrid doesn't just double results, it improves coverage quality (A); vector search works well for semantic queries (C); speed depends on implementation (D).

Trap: Using only semantic search — it can miss exact identifier matches that keyword search finds trivially.

Mnemonic: Exact terms → keyword. Fuzzy meaning → semantic. Real queries → both.

## Q66
Type: single
Difficulty: 1
Tags: nvidia-platform, nim-overview
Concepts: nvidia-nim-microservices
Domain: Domain 7 — NVIDIA Platform Implementation
DomainNumber: 7

What is NVIDIA NIM (NVIDIA Inference Microservices)?

A. A training framework for large language models
B. A set of optimized, containerized microservices that provide GPU-accelerated inference for AI models with standard API endpoints, enabling easy deployment of foundation models
C. A data labeling tool
D. A cloud storage service for model weights

Answer: B

Hint: NIM packages inference into deployable containers with optimized performance.

Explanation: NVIDIA NIM provides pre-optimized, containerized inference microservices for foundation models. Each NIM container includes the model, TensorRT-LLM optimization, and an API endpoint, making it straightforward to deploy high-performance AI inference without manual optimization.

Why others wrong: NIM is for inference, not training (A); NIM serves models, not labels data (C); NIM is compute, not storage (D).

Trap: Confusing NIM with NeMo — NeMo is for training and customization, NIM is for optimized inference deployment.

Mnemonic: NIM = NVIDIA Inference Microservices. Optimized model serving in a container.

## Q67
Type: single
Difficulty: 2
Tags: nvidia-platform, nemo-guardrails
Concepts: nemo-guardrails-config
Domain: Domain 7 — NVIDIA Platform Implementation
DomainNumber: 7

In NVIDIA NeMo Guardrails, what is the role of Colang (Conversational Language)?

A. A general-purpose programming language that replaces Python
B. A domain-specific language for defining conversational flows, safety rules, and guardrail logic that controls how the agent responds to various inputs and prevents harmful outputs
C. A query language for databases
D. A markup language for web pages

Answer: B

Hint: Colang defines "if user says X, then do Y" — it's a conversation control language.

Explanation: Colang is NeMo Guardrails' domain-specific language for declaring conversational safety rules. It defines flows (expected conversation patterns), actions (what the system should do), and guardrails (what to block or redirect) in a human-readable format that doesn't require traditional programming.

Why others wrong: Colang is specific to NeMo Guardrails, not general-purpose (A); it's for conversations, not databases (C); it's not for web rendering (D).

Trap: Thinking guardrails must be implemented in Python — Colang provides a higher-level abstraction specifically designed for conversational safety rules.

Mnemonic: Colang = Conversation Language for guardrails. Define rules, not code.

## Q68
Type: single
Difficulty: 3
Tags: nvidia-platform, triton-inference
Concepts: triton-inference-server
Domain: Domain 7 — NVIDIA Platform Implementation
DomainNumber: 7

An agentic system needs to serve three models simultaneously: an LLM for reasoning, a reranker for RAG, and an embedding model for retrieval. How does NVIDIA Triton Inference Server help?

A. It can only serve one model at a time
B. Triton can host multiple models concurrently, manage GPU memory allocation across them, and dynamically batch requests for each model independently — enabling efficient multi-model serving on shared GPU infrastructure
C. It converts all models to the same format
D. It trains models faster

Answer: B

Hint: Triton is like a traffic controller for multiple models on shared GPUs.

Explanation: Triton Inference Server supports concurrent multi-model serving with independent batching, GPU memory management, and model version control. For agentic pipelines requiring multiple models (LLM + reranker + embedder), Triton efficiently shares GPU resources while maintaining each model's performance characteristics.

Why others wrong: Triton explicitly supports multi-model concurrency (A); Triton supports multiple frameworks natively (ONNX, TensorRT, PyTorch) without converting (C); Triton is for inference, not training (D).

Trap: Running each model on separate GPU instances — Triton's multi-model serving can share GPUs more efficiently.

Mnemonic: Triton = multi-model GPU traffic controller. Many models, shared GPUs, smart scheduling.

## Q69
Type: single
Difficulty: 2
Tags: nvidia-platform, tensorrt-llm
Concepts: tensorrt-llm-optimization
Domain: Domain 7 — NVIDIA Platform Implementation
DomainNumber: 7

What is the primary optimization that TensorRT-LLM applies to accelerate LLM inference on NVIDIA GPUs?

A. It reduces the number of model parameters by removing layers
B. It compiles the model into an optimized execution plan with kernel fusion, quantization support, and memory-efficient attention implementations tailored to the specific GPU architecture
C. It increases the model's training data
D. It moves computation from GPU to CPU

Answer: B

Hint: TensorRT-LLM doesn't change the model — it optimizes how the model runs on the GPU.

Explanation: TensorRT-LLM applies GPU-specific optimizations: fusing multiple operations into single GPU kernels (reducing memory transfers), enabling various quantization levels (FP8, INT8, INT4), and implementing memory-efficient attention (FlashAttention, paged attention). These optimizations are compiled for the specific GPU architecture being used.

Why others wrong: It doesn't remove layers or reduce parameters (A); it's for inference optimization, not training (C); it keeps computation on GPU, that's the whole point (D).

Trap: Thinking TensorRT-LLM changes the model — it optimizes the execution plan for the model's architecture on specific GPU hardware.

Mnemonic: TensorRT-LLM = GPU-optimized compiler for LLM inference. Same model, faster execution.

## Q70
Type: single
Difficulty: 2
Tags: nvidia-platform, nemo-retriever
Concepts: nemo-retriever-pipeline
Domain: Domain 7 — NVIDIA Platform Implementation
DomainNumber: 7

What is the primary capability of NVIDIA NeMo Retriever in an agentic RAG pipeline?

A. It generates text responses to user queries
B. It provides optimized embedding generation and retrieval services with GPU-accelerated vector search, including document ingestion, chunking, embedding, and nearest-neighbor retrieval as a managed pipeline
C. It trains LLMs from scratch
D. It creates data visualization dashboards

Answer: B

Hint: NeMo Retriever handles the "R" (Retrieval) part of RAG, not the "G" (Generation).

Explanation: NeMo Retriever provides the complete retrieval pipeline for RAG: document ingestion, intelligent chunking, GPU-accelerated embedding generation, vector indexing, and fast nearest-neighbor search. It integrates with NIM for inference and NeMo Guardrails for safety, forming a complete NVIDIA RAG stack.

Why others wrong: Text generation is handled by the LLM/NIM, not the retriever (A); NeMo Retriever is for retrieval, not training (C); it's not a visualization tool (D).

Trap: Confusing NeMo Retriever with NeMo framework — NeMo Retriever is specifically for RAG retrieval, while NeMo framework is broader (training, customization).

Mnemonic: NeMo Retriever = RAG pipeline: ingest → chunk → embed → search

## Q71
Type: single
Difficulty: 3
Tags: nvidia-platform, nim-deployment
Concepts: nim-production-deployment
Domain: Domain 7 — NVIDIA Platform Implementation
DomainNumber: 7

When deploying a NIM microservice for an agentic application, which configuration is most critical for production reliability?

A. Setting the GPU temperature threshold to exactly 70°C
B. Configuring health checks, resource limits (GPU memory, CPU), auto-scaling policies based on request queue depth, and graceful shutdown procedures that drain in-flight requests before termination
C. Maximizing the batch size to the largest possible value
D. Disabling logging to improve performance

Answer: B

Hint: Production reliability requires the service to be observable, bounded, scalable, and gracefully shutdownable.

Explanation: Production NIM deployments need: health checks for liveness/readiness detection; resource limits to prevent one service from starving others; auto-scaling to handle demand; and graceful shutdown to complete in-flight requests during rolling updates. These are standard production-readiness requirements.

Why others wrong: GPU temperature is managed by hardware, not application config (A); maximum batch size can cause OOM errors (C); logging is essential for debugging production issues (D).

Trap: Maximizing batch size for throughput — large batches increase latency and risk out-of-memory errors with variable-length inputs.

Mnemonic: Production NIM = health checks + resource limits + auto-scale + graceful shutdown

## Q72
Type: single
Difficulty: 2
Tags: nvidia-platform, ai-enterprise
Concepts: nvidia-ai-enterprise
Domain: Domain 7 — NVIDIA Platform Implementation
DomainNumber: 7

What is NVIDIA AI Enterprise in the context of deploying agentic systems?

A. A free community project for hobbyists
B. An end-to-end software platform that provides enterprise-grade support, security patches, certified containers, and optimized runtimes for deploying AI (including NIM, NeMo, and Triton) in production environments
C. A single GPU model
D. A social media platform for AI researchers

Answer: B

Hint: Enterprise = production-grade, supported, certified, and secured.

Explanation: NVIDIA AI Enterprise is the commercial software platform that bundles NIM, NeMo, Triton, and related tools with enterprise support (SLAs, security patches, certified containers). It provides the production-ready, supported stack that enterprises need beyond the open-source components.

Why others wrong: AI Enterprise is a commercial product, not a free project (A); it's a software platform, not hardware (C); it's not a social network (D).

Trap: Assuming open-source NVIDIA tools are sufficient for enterprise production — AI Enterprise adds support, security, and certification needed for regulated environments.

Mnemonic: NVIDIA AI Enterprise = production-grade stack with support and security

## Q73
Type: single
Difficulty: 3
Tags: nvidia-platform, blueprint
Concepts: nvidia-agent-blueprints
Domain: Domain 7 — NVIDIA Platform Implementation
DomainNumber: 7

NVIDIA provides agent blueprints (reference architectures) for common agentic patterns. What is the primary benefit of using a blueprint vs. building from scratch?

A. Blueprints are the only way to use NVIDIA hardware
B. Blueprints provide tested, optimized reference implementations with pre-configured NIM services, NeMo Guardrails integration, and deployment scripts — reducing time-to-production and avoiding common architectural pitfalls
C. Blueprints cannot be customized
D. Blueprints are required for NCP-AAI certification

Answer: B

Hint: A blueprint is like an architect's proven floor plan — you can customize it, but you start with something that works.

Explanation: Agent blueprints encode best practices and tested configurations for common patterns (RAG agents, multi-agent systems, tool-using agents). They include pre-integrated NVIDIA components, deployment automation, and guardrails — saving weeks of integration work and avoiding pitfalls the NVIDIA team has already solved.

Why others wrong: You can use NVIDIA hardware without blueprints (A); blueprints are designed to be customized (C); certification doesn't require blueprint usage (D).

Trap: Building everything from scratch "for flexibility" — blueprints provide a proven starting point that can be customized, avoiding reinventing solved problems.

Mnemonic: Blueprint = proven starting point + customizable. Don't reinvent the wheel.

## Q74
Type: single
Difficulty: 2
Tags: monitoring, agent-observability
Concepts: observability-stack
Domain: Domain 8 — Run, Monitor, and Maintain
DomainNumber: 8

Which three pillars of observability are essential for monitoring a production agentic system?

A. Logs (structured event records), metrics (numeric measurements over time), and traces (end-to-end request path tracking across agents and tools)
B. Only logs are sufficient
C. CPU temperature, fan speed, and power consumption
D. Social media mentions, customer reviews, and app store ratings

Answer: A

Hint: The three pillars of observability in distributed systems apply directly to agentic systems.

Explanation: Logs provide detailed event records for debugging; metrics provide aggregate measurements for alerting and dashboards; traces show the complete request path across multiple agents and tools. Together they enable debugging individual failures (logs), detecting trends (metrics), and understanding system behavior (traces).

Why others wrong: Logs alone miss patterns and cross-agent flows (B); hardware metrics are infrastructure concerns, not application observability (C); external feedback is important but not observability (D).

Trap: Only implementing logging — without metrics you miss trends, and without traces you can't follow a request across multiple agents.

Mnemonic: Three pillars: Logs (what happened), Metrics (how much), Traces (the journey)

## Q75
Type: single
Difficulty: 3
Tags: monitoring, anomaly-detection
Concepts: agent-anomaly-detection
Domain: Domain 8 — Run, Monitor, and Maintain
DomainNumber: 8

An agent's average tool call count per request suddenly increases from 3 to 12 without any code changes. What is the most likely cause and how should monitoring detect this?

A. The agent learned to be more thorough — this is always positive
B. A degradation in a tool's reliability is causing retries, or a change in input distribution is triggering more complex reasoning paths — monitoring should alert on tool call count anomalies using statistical baselines (e.g., mean + 3σ)
C. The monitoring system is broken
D. Users are sending longer messages

Answer: B

Hint: A 4x increase in tool calls without code changes means something changed in the environment.

Explanation: Sudden behavioral changes without code changes indicate environmental shifts: a flaky tool causing retry storms, degraded retrieval quality causing additional searches, or changed input patterns. Statistical anomaly detection (Z-scores, moving averages) should flag significant deviations from baseline behavior.

Why others wrong: Increased tool calls usually indicate inefficiency or failures, not improvement (A); the monitoring system reported the change, so it's working (C); message length doesn't directly cause 4x tool call increase (D).

Trap: Ignoring increased tool calls because "the agent is still producing correct outputs" — the underlying cause (often tool reliability degradation) will worsen.

Mnemonic: Sudden behavior change + no code change = environment change. Monitor baselines, alert on anomalies.

## Q76
Type: single
Difficulty: 2
Tags: monitoring, cost-monitoring
Concepts: agentic-cost-control
Domain: Domain 8 — Run, Monitor, and Maintain
DomainNumber: 8

An agentic system processes an average of 5,000 requests/day. Occasionally, a single request enters a reasoning loop that consumes $50+ in LLM tokens. What monitoring safeguard should be implemented?

A. Remove all tools to prevent looping
B. Per-request token budget limits with automatic termination when exceeded, combined with alerts for requests approaching the limit and analysis of terminated requests to identify patterns
C. Ignore outlier costs because they're rare
D. Reduce the model's temperature to zero

Answer: B

Hint: Think about credit card fraud detection — you set spending limits and alert on unusual patterns.

Explanation: Per-request token budgets prevent runaway costs from infinite loops or unexpectedly complex reasoning chains. Automatic termination stops the bleeding, while alerts and analysis enable proactive identification and fixing of the patterns that cause expensive requests.

Why others wrong: Removing tools cripples the agent's functionality (A); rare outliers at $50+ can accumulate significantly (C); temperature affects randomness, not looping behavior (D).

Trap: Setting the budget too low and terminating legitimate complex requests — analyze the distribution to set appropriate limits.

Mnemonic: Per-request budget = financial circuit breaker. Set limit, terminate, alert, analyze.

## Q77
Type: single
Difficulty: 2
Tags: monitoring, feedback-loops
Concepts: production-feedback-loop
Domain: Domain 8 — Run, Monitor, and Maintain
DomainNumber: 8

How should user feedback (thumbs up/down, corrections) be integrated into an agentic system's improvement cycle?

A. Directly use feedback to modify the agent's system prompt in real-time
B. Collect feedback systematically, analyze it to identify failure patterns and improvement opportunities, then implement changes through the standard development cycle (prompt updates, tool improvements, or fine-tuning) with proper evaluation before deployment
C. Ignore negative feedback because users don't understand AI
D. Automatically fine-tune the model on every negative feedback instance

Answer: B

Hint: Feedback is a signal, not a direct instruction — it needs analysis before action.

Explanation: User feedback is valuable but noisy. Systematic collection and analysis reveals patterns (which query types fail most, which tools produce bad results). Changes based on aggregated insights are implemented through normal development processes with evaluation to prevent regressions.

Why others wrong: Real-time prompt modification based on individual feedback is unstable and exploitable (A); negative feedback contains important improvement signals (C); auto-fine-tuning on individual instances causes catastrophic forgetting and doesn't verify improvement (D).

Trap: Acting on individual feedback instances instead of patterns — one user's "thumbs down" might be an outlier, but 50 thumbs-downs on similar queries is a signal.

Mnemonic: Feedback → Aggregate → Analyze patterns → Implement → Evaluate → Deploy

## Q78
Type: single
Difficulty: 1
Tags: monitoring, health-checks
Concepts: service-health-monitoring
Domain: Domain 8 — Run, Monitor, and Maintain
DomainNumber: 8

What is the difference between a liveness probe and a readiness probe for an agent service?

A. They are the same thing with different names
B. A liveness probe checks if the service process is alive (restart if dead), while a readiness probe checks if the service can accept new requests (stop routing traffic if not ready, e.g., during model loading)
C. Liveness checks the network, readiness checks the disk
D. Only readiness probes are needed in production

Answer: B

Hint: A chef can be alive (in the kitchen) but not ready (still prepping ingredients).

Explanation: Liveness probes detect crashed or hung processes that need restarting. Readiness probes detect services that are alive but temporarily unable to handle requests (loading a model, warming up caches, draining connections). Kubernetes uses these to manage traffic routing and container lifecycle independently.

Why others wrong: They serve different purposes (A); both check application-level health, not specific hardware (C); both are needed — liveness catches crashes, readiness prevents routing to unready instances (D).

Trap: Only implementing liveness checks — without readiness probes, Kubernetes routes traffic to instances that are still loading models, causing errors.

Mnemonic: Liveness = "are you alive?" (restart if not). Readiness = "can you work?" (stop traffic if not).

## Q79
Type: single
Difficulty: 3
Tags: monitoring, incident-response
Concepts: agent-incident-management
Domain: Domain 8 — Run, Monitor, and Maintain
DomainNumber: 8

During an incident where an agent is producing incorrect financial calculations, what is the correct order of response?

A. Fix the code first, then investigate the root cause
B. Mitigate immediately (disable the financial calculation tool or route to a simpler fallback), communicate the issue to stakeholders, investigate the root cause using traces and logs, implement and verify the fix, then deploy with monitoring
C. Ignore it because the error rate is below 5%
D. Restart all agent instances and hope it resolves

Answer: B

Hint: Incident response follows: mitigate → communicate → investigate → fix → verify → deploy.

Explanation: For high-impact incidents, mitigation comes first to stop ongoing harm (disable the faulty capability). Communication keeps stakeholders informed. Investigation using observability data identifies the root cause. The fix is verified in a non-production environment before deployment with enhanced monitoring.

Why others wrong: Fixing before mitigating allows continued harm during the fix window (A); any error rate in financial calculations is unacceptable (C); blind restarts don't address root causes (D).

Trap: Jumping straight to code fixes — every minute of investigation is another minute of incorrect financial calculations reaching users.

Mnemonic: MCIVD: Mitigate, Communicate, Investigate, Verify, Deploy

## Q80
Type: multi
Difficulty: 2
Tags: monitoring, sla-metrics
Concepts: agent-sla-definition
Domain: Domain 8 — Run, Monitor, and Maintain
DomainNumber: 8

Which TWO metrics are most important in an agentic system's SLA (Service Level Agreement)? (Select two)

A. P95 end-to-end response time — the latency within which 95% of requests complete, accounting for all agent reasoning and tool calls
B. The number of lines of code in the agent
C. Task success rate — the percentage of requests that achieve the intended outcome, measuring the agent's reliability from the user's perspective
D. The size of the model's vocabulary

Answer: A, C

Hint: SLAs should cover the two things users care about most: speed and correctness.

Explanation: P95 latency captures the user's experience of speed (including worst-case scenarios), while task success rate captures whether the agent actually does its job. Together they cover the two fundamental user expectations: responses should be timely and correct.

Why others wrong: Lines of code is a development metric, not an SLA metric (B); vocabulary size is a model characteristic, not a service metric (D).

Trap: Using average latency instead of P95 — averages hide outliers that frustrate users. The 95th percentile captures the "slow request" experience.

Mnemonic: SLA = Speed (P95 latency) + Success (task completion rate)

## Q81
Type: single
Difficulty: 2
Tags: monitoring, model-drift
Concepts: behavioral-drift-detection
Domain: Domain 8 — Run, Monitor, and Maintain
DomainNumber: 8

After a model provider updates their LLM API (same model name, new version), an agent's task success rate drops by 8%. How should this be detected and prevented?

A. Trust that model providers always maintain backward compatibility
B. Implement continuous evaluation against a golden test set, with automated alerts when metrics drop below thresholds, and pin model versions when possible to control update timing
C. Ignore the drop if users haven't complained
D. Switch to a completely different model provider

Answer: B

Hint: How do you know a model update broke your agent if you're not continuously testing?

Explanation: Continuous evaluation against a curated golden test set detects performance changes regardless of cause. Pinning model versions prevents surprise regressions from provider updates. When an update is detected (or intentionally applied), the golden test set catches regressions before they reach users.

Why others wrong: Model providers don't guarantee behavioral compatibility across versions (A); an 8% drop likely affects users even if they haven't complained yet (C); switching providers is disruptive and doesn't prevent the same issue (D).

Trap: Assuming same model name = same behavior. Model updates frequently change subtle behaviors that affect downstream agents.

Mnemonic: Pin versions + golden test set = detect drift before users do

## Q82
Type: single
Difficulty: 2
Tags: monitoring, log-management
Concepts: structured-agent-logging
Domain: Domain 8 — Run, Monitor, and Maintain
DomainNumber: 8

What information should be included in structured logs for agent tool calls?

A. Only the tool name
B. Tool name, input parameters (with sensitive data redacted), output summary, execution duration, success/failure status, the trace ID linking to the parent request, and the agent's reasoning for selecting this tool
C. The full conversation history up to that point
D. Only errors, not successful tool calls

Answer: B

Hint: Think about what you'd need to debug a tool call that went wrong three days ago.

Explanation: Comprehensive structured logging for tool calls enables debugging (what happened?), performance analysis (how long?), security auditing (what data?), and behavior understanding (why this tool?). Sensitive data must be redacted, and trace IDs link tool calls to their parent request for end-to-end tracing.

Why others wrong: Tool name alone is insufficient for debugging (A); full conversation is too verbose and may contain PII (C); successful calls provide baseline data essential for detecting anomalies (D).

Trap: Logging only failures — without baseline data from successful calls, you can't establish what "normal" looks like or detect degradation trends.

Mnemonic: Tool logs: WHO called WHAT with WHICH inputs, HOW LONG it took, and WHY

## Q83
Type: single
Difficulty: 1
Tags: safety, jailbreak-defense
Concepts: prompt-injection-types
Domain: Domain 9 — Safety, Ethics, and Compliance
DomainNumber: 9

What is the difference between direct prompt injection and indirect prompt injection in an agentic system?

A. They are the same attack with different names
B. Direct injection is when a user crafts malicious input to manipulate the agent's behavior, while indirect injection is when malicious instructions are embedded in external data sources (documents, web pages, tool outputs) that the agent processes
C. Direct injection is more dangerous than indirect injection
D. Indirect injection only affects chatbots, not agents

Answer: B

Hint: Direct = the user is the attacker. Indirect = a third party planted the attack in data the agent reads.

Explanation: Direct prompt injection comes from the user's input. Indirect injection is more insidious — it's embedded in data the agent retrieves (a webpage, a document in the knowledge base, an API response). Agents with tool access are especially vulnerable because they ingest external data that may contain hidden instructions.

Why others wrong: They are distinct attack vectors requiring different defenses (A); indirect injection is often more dangerous because it's harder to detect (C); indirect injection is especially relevant for agents that retrieve external data (D).

Trap: Only defending against direct injection — indirect injection through RAG-retrieved documents or tool outputs is a major blind spot in many agent systems.

Mnemonic: Direct = user attacks. Indirect = data attacks. Agents read data → vulnerable to indirect.

## Q84
Type: single
Difficulty: 2
Tags: safety, data-isolation
Concepts: multi-tenant-safety
Domain: Domain 9 — Safety, Ethics, and Compliance
DomainNumber: 9

An agentic system serves multiple tenants (organizations) with shared infrastructure. What is the most critical safety requirement?

A. Using the same model for all tenants
B. Strict data isolation — ensuring one tenant's data, conversation history, and knowledge base cannot be accessed by agents serving another tenant, through authentication, authorization, and context isolation at every layer
C. Load balancing evenly across tenants
D. Using different UI themes for each tenant

Answer: B

Hint: If Tenant A's trade secrets appear in Tenant B's agent responses, what's the consequence?

Explanation: Multi-tenant data isolation is non-negotiable. Without strict isolation, cross-tenant data leakage can occur through shared context windows, cached embeddings, or improperly scoped tool calls. Every layer (LLM context, RAG retrieval, tool execution) must enforce tenant boundaries.

Why others wrong: Same model is fine if data is isolated (A); load balancing is performance, not security (C); UI themes are cosmetic (D).

Trap: Assuming model-level isolation is sufficient — data leakage can occur through shared vector stores, cached results, or improperly filtered RAG retrieval.

Mnemonic: Multi-tenant = every layer must check: "whose data is this?" No shortcuts.

## Q85
Type: single
Difficulty: 3
Tags: safety, output-safety
Concepts: safety-classification
Domain: Domain 9 — Safety, Ethics, and Compliance
DomainNumber: 9

An agent generates a response that is factually correct but could cause harm if misapplied (e.g., correct chemistry information that could be used for dangerous purposes). How should the safety system handle this?

A. Block all chemistry-related responses
B. Apply contextual safety evaluation — assess the query intent, user context, and potential for harm to decide between providing the information with appropriate caveats, providing a safer alternative, or declining with an explanation
C. Always provide the information because accuracy is paramount
D. Replace the response with "I can't help with that" regardless of context

Answer: B

Hint: A chemistry student asking about reactions vs. someone asking how to make something dangerous — same information, different contexts.

Explanation: Contextual safety avoids both over-blocking (preventing legitimate use) and under-blocking (enabling harm). The system should evaluate the specific request context, user history, and potential harm pathways, then choose the appropriate response strategy rather than applying blanket rules.

Why others wrong: Blanket topic blocking prevents legitimate educational use (A); ignoring harm potential is irresponsible (C); generic refusals are unhelpful and frustrating for legitimate queries (D).

Trap: Binary thinking (block vs. allow) — most safety decisions are contextual, requiring nuanced evaluation of intent and risk.

Mnemonic: Safety = context-aware, not category-based. Evaluate intent, not just topic.

## Q86
Type: single
Difficulty: 2
Tags: safety, audit-trail
Concepts: compliance-logging
Domain: Domain 9 — Safety, Ethics, and Compliance
DomainNumber: 9

For regulatory compliance in a financial services agent, what must the audit trail capture?

A. Only the final response sent to the user
B. The complete decision chain: user input, agent reasoning, all tool calls with parameters and results, guardrail evaluations, and final output — with tamper-proof storage and retention policies meeting regulatory requirements
C. Only errors and failures
D. A summary of daily activity

Answer: B

Hint: A regulator asks "why did the agent recommend this investment?" — can you reconstruct the entire decision path?

Explanation: Financial regulations require reconstructing the complete decision-making process. Audit trails must capture every step from input to output, including internal reasoning and tool calls, stored in tamper-proof format (append-only, cryptographically signed) with appropriate retention periods.

Why others wrong: Final output alone doesn't explain how the decision was made (A); compliance requires logging all actions, not just failures (C); daily summaries lack the granularity needed for investigation (D).

Trap: Only logging I/O without intermediate steps — regulators need to see the reasoning chain, not just what went in and out.

Mnemonic: Compliance audit = every step, tamper-proof, retained. "Show me how you decided."

## Q87
Type: multi
Difficulty: 3
Tags: safety, bias-mitigation
Concepts: agent-fairness
Domain: Domain 9 — Safety, Ethics, and Compliance
DomainNumber: 9

An HR screening agent shows disparate impact — it recommends male candidates at a higher rate than female candidates with similar qualifications. Which TWO steps are most important to address this? (Select two)

A. Remove gender-related fields from the input data and audit the model for proxy variables (zip codes, hobbies, university names) that correlate with gender
B. Ignoring the disparity because the model is "just being objective"
C. Implement fairness metrics (demographic parity, equalized odds) in the evaluation pipeline, with ongoing monitoring and threshold-based alerts for disparate impact
D. Using a smaller model to reduce bias

Answer: A, C

Hint: Removing obvious features isn't enough — proxy variables can encode the same bias. Continuous monitoring catches it.

Explanation: Removing direct gender features is necessary but insufficient because proxy variables can encode the same information. Fairness metrics in the evaluation pipeline detect disparate impact quantitatively, while ongoing monitoring catches new biases that emerge over time as input distributions change.

Why others wrong: ML bias is systematic and must be actively addressed (B); model size doesn't determine bias (D).

Trap: Only removing gender fields and assuming bias is solved — proxy variables (university prestige, extracurricular activities) can strongly correlate with protected attributes.

Mnemonic: Remove + audit proxies + measure fairness + monitor continuously = fair agent

## Q88
Type: single
Difficulty: 2
Tags: safety, tool-permissions
Concepts: least-privilege-tools
Domain: Domain 9 — Safety, Ethics, and Compliance
DomainNumber: 9

An agent has tools for reading and writing to a database. A prompt injection attempts to make the agent delete all records. What architectural safeguard prevents this?

A. Relying on the LLM to recognize and refuse the injection
B. Principle of least privilege — the agent's database credentials should have only the minimum permissions required (e.g., SELECT and INSERT, no DELETE), so even if the agent is manipulated, it cannot execute destructive operations
C. Using a larger model that is more resistant to injection
D. Adding "never delete data" to the system prompt

Answer: B

Hint: If the agent can't delete because its database user has no DELETE permission, injection doesn't matter.

Explanation: Least privilege at the infrastructure level provides defense-in-depth: even if all software safeguards (prompts, guardrails) are bypassed by a sophisticated injection, the agent physically cannot execute destructive operations because its credentials don't allow them. This is the most reliable safety layer.

Why others wrong: LLMs can be fooled by sophisticated injections (A); larger models are also vulnerable to injection (C); prompt instructions can be overridden by injection (D).

Trap: Relying solely on prompt-level guardrails — they can be bypassed. Infrastructure-level permissions (least privilege) are the last line of defense.

Mnemonic: Least privilege = the agent CAN'T, not just SHOULDN'T. Permissions > prompts for safety.

## Q89
Type: single
Difficulty: 1
Tags: safety, content-moderation
Concepts: input-output-moderation
Domain: Domain 9 — Safety, Ethics, and Compliance
DomainNumber: 9

At which points in an agentic pipeline should content moderation be applied?

A. Only on user input
B. On both user input and agent output — input moderation catches harmful requests before processing, output moderation catches harmful content generated by the model or retrieved from external sources
C. Only on agent output
D. Content moderation is unnecessary for agents

Answer: B

Hint: Input = block harmful requests. Output = block harmful responses. Both sides need coverage.

Explanation: Input moderation prevents processing of harmful, illegal, or policy-violating requests. Output moderation catches harmful content the agent might generate, retrieve from external sources, or construct from seemingly innocent pieces. Both are necessary for comprehensive safety.

Why others wrong: Input-only moderation misses harmful outputs generated from benign inputs (A); output-only moderation wastes resources processing harmful requests (C); agents with tool access and external data retrieval need moderation (D).

Trap: Only moderating input — retrieval-augmented agents may construct harmful content from individually benign retrieved passages.

Mnemonic: Moderate both ends: input (block bad requests) + output (block bad responses)

## Q90
Type: single
Difficulty: 2
Tags: safety, pii-protection
Concepts: pii-in-agent-pipelines
Domain: Domain 9 — Safety, Ethics, and Compliance
DomainNumber: 9

An agent processes customer support tickets that may contain PII (names, emails, SSNs). How should PII be handled in the agent pipeline?

A. Store all PII in the agent's logs for debugging
B. Detect and redact PII before it enters the LLM context using a PII detection model, store only redacted versions in logs, and apply PII re-identification only at the final output stage when needed for the response
C. Ignore PII because the model has been trained on similar data
D. Block all tickets that contain PII

Answer: B

Hint: The LLM doesn't need to see "John Smith, SSN 123-45-6789" to solve a billing issue.

Explanation: PII minimization in the agent pipeline reduces privacy risk and liability. PII is detected and replaced with tokens ([NAME_1], [EMAIL_1]) before reaching the LLM, with a mapping table for re-identification only at the final output stage. Logs only contain redacted data.

Why others wrong: Logging PII violates privacy regulations (A); training on similar data doesn't make PII exposure safe (C); blocking PII-containing tickets would block most real customer requests (D).

Trap: Logging unredacted data for debugging — it creates a liability even if the agent handles PII correctly in responses.

Mnemonic: PII flow: Detect → Redact → Process → Re-identify (only if needed in final output)

## Q91
Type: single
Difficulty: 3
Tags: safety, adversarial-robustness
Concepts: adversarial-testing
Domain: Domain 9 — Safety, Ethics, and Compliance
DomainNumber: 9

An adversary discovers that including the phrase "Ignore previous instructions" in a document uploaded to the agent's knowledge base can hijack the agent's behavior. What defense-in-depth strategy addresses this?

A. Scan uploaded documents for the exact phrase "Ignore previous instructions"
B. Multi-layered defense: sanitize uploaded content with instruction-detection classifiers, separate data and instruction channels in the prompt architecture, use a privileged system prompt that the LLM is trained to prioritize, and implement output guardrails as a final safety net
C. Disable document uploads entirely
D. Use a regex filter for known attack phrases

Answer: B

Hint: A determined attacker will vary the phrasing — exact phrase matching will fail. What's the robust approach?

Explanation: Defense-in-depth combines multiple layers: content sanitization catches obvious injection attempts, prompt architecture separates data from instructions (making injection harder to exploit), system prompt privilege hierarchies prioritize legitimate instructions, and output guardrails catch any harmful behavior that slips through.

Why others wrong: Exact phrase matching is trivially bypassed with paraphrasing (A); disabling uploads removes a core feature (C); regex is easily bypassed with Unicode tricks, misspellings, or rephrasing (D).

Trap: Pattern matching for known attack strings — attackers have infinite variations ("Disregard above", "New instructions:", Unicode homoglyphs). Classifier-based detection is needed.

Mnemonic: Defense in depth: sanitize input + separate channels + privilege hierarchy + guardrail output

## Q92
Type: single
Difficulty: 2
Tags: safety, transparency
Concepts: ai-transparency
Domain: Domain 9 — Safety, Ethics, and Compliance
DomainNumber: 9

What is the primary purpose of disclosing to users that they are interacting with an AI agent rather than a human?

A. To reduce the agent's workload
B. To enable informed consent and set appropriate expectations — users should know they're interacting with AI so they can calibrate their trust, understand the system's limitations, and make informed decisions about sharing sensitive information
C. Because the law requires it in every jurisdiction
D. To make users less likely to use the service

Answer: B

Hint: Would you share your SSN differently depending on whether you're talking to a human or an AI?

Explanation: AI transparency enables informed consent: users calibrate trust (not blindly trusting AI medical advice), understand limitations (the agent may hallucinate), and make privacy decisions (sharing sensitive data with an AI system vs. a human). While many jurisdictions require disclosure, the ethical reason is informed consent.

Why others wrong: Disclosure doesn't reduce workload (A); not all jurisdictions mandate disclosure yet (C); transparency builds trust, not avoidance (D).

Trap: Thinking AI transparency discourages usage — research shows transparency builds trust when users understand the AI is competent and its limitations are clear.

Mnemonic: Transparency = informed consent + calibrated trust + privacy awareness

## Q93
Type: single
Difficulty: 1
Tags: human-ai, escalation
Concepts: human-escalation-design
Domain: Domain 10 — Human-AI Interaction and Oversight
DomainNumber: 10

When should an agentic system escalate to a human operator?

A. Never — fully autonomous systems should handle everything
B. When the agent's confidence is below a threshold, the task involves high-stakes decisions (financial, medical, legal), the agent detects it's outside its trained domain, or the user explicitly requests human assistance
C. After every single response for human review
D. Only when the system crashes

Answer: B

Hint: Think about the cost of an incorrect autonomous decision — when is that cost too high?

Explanation: Human escalation balances automation efficiency with safety. Low-confidence responses, high-stakes domains, out-of-domain queries, and explicit user requests are standard escalation triggers. The threshold should be calibrated to the cost of autonomous errors vs. the cost of human involvement.

Why others wrong: Full autonomy is inappropriate for high-stakes decisions (A); reviewing every response eliminates the efficiency benefit of AI (C); waiting for crashes misses all quality-related escalation needs (D).

Trap: Setting the escalation threshold too high ("bother humans only when the agent is stuck") — for high-stakes decisions, even moderate uncertainty should trigger escalation.

Mnemonic: Escalate when: low confidence, high stakes, out of domain, or user asks

## Q94
Type: single
Difficulty: 2
Tags: human-ai, feedback-design
Concepts: human-feedback-mechanisms
Domain: Domain 10 — Human-AI Interaction and Oversight
DomainNumber: 10

What is the most effective way to collect actionable feedback from users of an agentic system?

A. A single thumbs up/down button
B. Layered feedback — a quick reaction (thumbs up/down) for all responses, with optional detailed feedback (what was wrong, what was expected) that captures the specific failure mode, collected at the point of interaction
C. A monthly satisfaction survey
D. Monitoring social media complaints

Answer: B

Hint: Quick feedback tells you WHAT failed; detailed feedback tells you WHY.

Explanation: Layered feedback maximizes both collection rate (low-friction quick reaction) and diagnostic value (optional detailed feedback for failure analysis). Collecting feedback at the point of interaction captures specific context that monthly surveys cannot.

Why others wrong: Thumbs up/down alone lacks diagnostic detail (A); monthly surveys lose context and have low response rates (C); social media misses most users and arrives too late (D).

Trap: Only collecting binary feedback — it tells you something went wrong but not what or why, making improvement difficult.

Mnemonic: Quick = what went wrong. Detailed = why. Collect both at the moment.

## Q95
Type: single
Difficulty: 3
Tags: human-ai, calibrated-trust
Concepts: trust-calibration
Domain: Domain 10 — Human-AI Interaction and Oversight
DomainNumber: 10

Users of an agentic system show two problematic trust patterns: some over-rely on the agent (accepting incorrect financial advice without verification) while others under-trust it (manually verifying every correct calculation). How should the system design address both?

A. Remove all confidence indicators so users can't judge the agent's certainty
B. Provide calibrated confidence indicators and show the agent's reasoning chain — helping over-trusting users identify uncertain outputs that need verification, and helping under-trusting users see the evidence behind correct outputs to build appropriate trust
C. Make the agent never express uncertainty
D. Add a disclaimer that the agent is always wrong

Answer: B

Hint: Trust calibration requires two-way information: users need to know when to trust AND when to verify.

Explanation: Calibrated confidence indicators help both trust extremes: they signal "verify this" to over-trusting users when confidence is low, and "this is well-supported" to under-trusting users when confidence is high. Showing reasoning enables users to independently assess output quality rather than blindly trusting or distrusting.

Why others wrong: Removing confidence info prevents trust calibration (A); hiding uncertainty causes over-reliance (C); blanket distrust disclaimers cause under-trust (D).

Trap: One-directional solutions — adding disclaimers only reduces over-trust while worsening under-trust. Good design calibrates trust in both directions.

Mnemonic: Confidence + reasoning = calibrated trust. Over-trusters check uncertainty; under-trusters see evidence.

## Q96
Type: single
Difficulty: 2
Tags: human-ai, progressive-autonomy
Concepts: autonomy-levels
Domain: Domain 10 — Human-AI Interaction and Oversight
DomainNumber: 10

A company is deploying an agentic system for invoice processing. What is the recommended approach for granting autonomy?

A. Full autonomy from day one to maximize ROI
B. Progressive autonomy — start with human-in-the-loop for all decisions, gradually increase agent autonomy as confidence in the system grows, based on measured accuracy and monitored performance at each autonomy level
C. Never give the agent any autonomy
D. Let each user choose their own autonomy level without any guidelines

Answer: B

Hint: How do you build trust in a new employee? Start supervised, gradually increase independence.

Explanation: Progressive autonomy follows the principle of earned trust. Starting with full human oversight enables validation of the agent's accuracy and edge case handling. As metrics prove reliability, autonomy increases incrementally — from "suggest and wait for approval" to "act and notify" to "act autonomously for routine cases."

Why others wrong: Full autonomy without validation risks systematic errors at scale (A); no autonomy defeats the purpose of automation (C); unguided autonomy choices lead to inappropriate trust levels (D).

Trap: Rushing to full autonomy for efficiency — a single systematic error in invoice processing at scale can be far more costly than the time saved.

Mnemonic: Autonomy ladder: suggest → act-and-confirm → act-and-notify → full auto. Climb with data.

## Q97
Type: single
Difficulty: 2
Tags: human-ai, handoff-design
Concepts: agent-human-handoff
Domain: Domain 10 — Human-AI Interaction and Oversight
DomainNumber: 10

When an agent escalates a conversation to a human operator, what information must be included in the handoff?

A. Only the user's latest message
B. A structured summary including: the user's original intent, conversation history, what the agent attempted, why it's escalating, any relevant retrieved documents or tool outputs, and the agent's assessment of the situation
C. The agent's entire system prompt
D. Only the error message

Answer: B

Hint: The human operator should be able to continue seamlessly, not ask the user to repeat everything.

Explanation: Effective handoff provides the human with enough context to continue without making the user repeat themselves. This includes what was tried (so the human doesn't repeat failed approaches), why escalation occurred (so they know what to focus on), and relevant data (so they have the same information the agent had).

Why others wrong: The latest message lacks context from the conversation (A); system prompts are internal implementation details (C); error messages don't capture the user's needs or what was attempted (D).

Trap: Dumping the raw conversation log — humans need a structured summary, not a raw transcript they have to parse.

Mnemonic: Handoff = summary (what, why, what was tried) + context (history, data) + assessment

## Q98
Type: single
Difficulty: 1
Tags: human-ai, user-control
Concepts: user-agency
Domain: Domain 10 — Human-AI Interaction and Oversight
DomainNumber: 10

Why is it important that users can always interrupt or override an agent's multi-step operation?

A. It slows the agent down, which improves quality
B. Users maintain agency and control — they can stop an operation that's heading in the wrong direction, correct course mid-execution, or cancel actions they didn't intend, preventing the agent from completing potentially harmful or wasteful operations
C. It's only needed for debugging
D. Interruption should only be available to administrators

Answer: B

Hint: What if the agent starts deleting files you didn't want deleted, and you have no stop button?

Explanation: User control is a fundamental principle of human-AI interaction. Agents execute multi-step operations that may take minutes and involve irreversible actions. Without interrupt capability, users are powerless spectators if the agent misinterprets their intent or encounters an edge case.

Why others wrong: Interruption isn't about speed (A); all users, not just developers, need control (C); all users should have this ability, not just admins (D).

Trap: Assuming interruption is rarely needed because the agent is "usually right" — the consequences of the rare wrong case can be severe.

Mnemonic: User control = always available stop button. Agency, not spectating.

## Q99
Type: single
Difficulty: 3
Tags: human-ai, collaborative-design
Concepts: human-agent-collaboration
Domain: Domain 10 — Human-AI Interaction and Oversight
DomainNumber: 10

In a collaborative document editing agent, the agent suggests edits and the human accepts, rejects, or modifies them. How should the system learn from the human's modification patterns?

A. Automatically apply the human's modifications to all future documents
B. Track modification patterns to identify systematic preference differences (e.g., the human always changes passive voice to active, or prefers shorter sentences), then incorporate validated patterns as agent preferences while maintaining the human's ability to override — creating an adaptive system that improves without losing human control
C. Ignore the modifications since the agent's original suggestions were optimal
D. Remove the collaboration feature and let the agent work alone

Answer: B

Hint: Each modification is a signal about the human's preferences — how do you turn signals into learning without losing control?

Explanation: Pattern-based learning from modifications creates a virtuous improvement cycle. Validated patterns (confirmed across multiple instances) become agent preferences, reducing future modification needs. The human retains override capability, ensuring the agent never locks into incorrect learned preferences.

Why others wrong: Blindly applying modifications may be context-specific, not universal preferences (A); ignoring feedback misses valuable learning signals (C); removing collaboration loses the human's domain expertise (D).

Trap: Over-learning from individual modifications — a single edit might be context-specific, not a general preference. Pattern validation across multiple instances prevents overfitting.

Mnemonic: Modification → pattern → validated preference → adaptive agent. Human always overrides.

## Q100
Type: multi
Difficulty: 2
Tags: human-ai, accessibility
Concepts: inclusive-agent-design
Domain: Domain 10 — Human-AI Interaction and Oversight
DomainNumber: 10

Which TWO design principles ensure an agentic system is accessible to users with different abilities? (Select two)

A. Multiple interaction modalities — supporting text, voice, and visual interfaces so users can interact through their preferred or required channel
B. Using only small font sizes to fit more information on screen
C. Clear, jargon-free communication with adjustable verbosity — allowing users to choose between concise and detailed responses based on their comprehension needs and preferences
D. Requiring all users to pass a technical assessment before using the system

Answer: A, C

Hint: Accessibility means the system works for everyone — how do you accommodate different needs?

Explanation: Multiple modalities accommodate physical accessibility needs (vision, hearing, motor impairments), while adjustable verbosity accommodates cognitive accessibility needs (expertise levels, language proficiency, processing preferences). Together they ensure the agent is usable by a diverse user population.

Why others wrong: Small fonts reduce readability and accessibility (B); technical barriers exclude users who need the system most (D).

Trap: Designing only for the "average user" — accessible design benefits everyone through flexibility and clarity.

Mnemonic: Accessible agent = multiple channels + adjustable detail. Everyone communicates differently.

## Q101
Type: single
Difficulty: 2
Tags: human-ai, explanation-design
Concepts: agent-explainability
Domain: Domain 10 — Human-AI Interaction and Oversight
DomainNumber: 10

When an agent recommends a complex action (e.g., restructuring a database schema), what level of explanation is most helpful to the human decision-maker?

A. No explanation — just execute the action
B. A layered explanation: a one-sentence summary of what and why, followed by expandable details showing the agent's reasoning, evidence from the codebase, alternatives considered, and potential risks — enabling both quick assessment and deep evaluation
C. A 10-page technical report for every recommendation
D. Only show the SQL commands to be executed

Answer: B

Hint: A busy engineer needs the gist quickly, but should be able to dig into details when the recommendation seems wrong.

Explanation: Layered explanations respect the human's time (quick summary for routine decisions) while enabling deep evaluation when needed (expandable details for complex or uncertain decisions). This matches how humans actually consume information — scan first, drill down selectively.

Why others wrong: No explanation prevents informed decision-making (A); 10-page reports for every recommendation cause alert fatigue (C); SQL alone doesn't explain why or what alternatives were considered (D).

Trap: Over-explaining every recommendation — humans develop "explanation fatigue" and stop reading, which is worse than no explanation.

Mnemonic: Layer it: summary for scanning, details for digging. Respect the human's time.

## Q102
Type: single
Difficulty: 3
Tags: human-ai, autonomous-boundaries
Concepts: autonomy-boundaries
Domain: Domain 10 — Human-AI Interaction and Oversight
DomainNumber: 10

An agent managing cloud infrastructure detects a potential cost optimization that would save $5,000/month by resizing instances, but carries a 2% risk of temporary service degradation. Should the agent act autonomously?

A. Yes — the cost savings clearly outweigh the risk
B. No — the agent should present the optimization opportunity with its analysis (savings, risks, affected services, rollback plan), and request human approval because the action has production impact and is not easily reversible in real-time
C. Yes, but only during business hours
D. No — the agent should never suggest cost optimizations

Answer: B

Hint: Would you want an automated system resizing your production database without asking?

Explanation: Production infrastructure changes with potential service impact should require human approval, regardless of the expected benefit. The agent adds value by detecting the opportunity and preparing the analysis, but the decision to accept the risk belongs to a human who understands the business context (e.g., upcoming launch, SLA commitments).

Why others wrong: Cost savings don't override the need for human judgment on production risk (A); business hours don't change the risk profile (C); detecting opportunities is valuable even if action requires approval (D).

Trap: Giving agents blanket autonomy over infrastructure — a 2% degradation risk during a product launch could be catastrophic, while the same risk during quiet periods might be acceptable.

Mnemonic: Production impact + risk = human decides. Agent's job: detect, analyze, recommend. Human's job: approve.

## Q103
Type: single
Difficulty: 2
Tags: agent-development, function-calling
Concepts: parallel-function-calls
Domain: Domain 2 — Agent Development
DomainNumber: 2

An agent needs to fetch weather data, stock prices, and news headlines simultaneously to compose a morning briefing. What tool-calling optimization should be applied?

A. Call each tool sequentially, waiting for each to complete before starting the next
B. Issue parallel function calls for all three independent data sources simultaneously, reducing total latency from the sum of individual call times to the maximum single call time
C. Only fetch the data the user asked about most recently
D. Cache yesterday's data and present it as today's

Answer: B

Hint: These three data sources don't depend on each other — why wait for one to finish before starting the next?

Explanation: When tool calls are independent (no data dependencies between them), parallel execution reduces total latency from sequential (T1 + T2 + T3) to concurrent (max(T1, T2, T3)). Most modern agent frameworks support parallel function calling for independent tools.

Why others wrong: Sequential execution wastes time on independent calls (A); omitting data sources provides an incomplete briefing (C); stale data defeats the purpose of a morning briefing (D).

Trap: Defaulting to sequential tool calls — many developers write tools as a sequential pipeline even when there are no data dependencies between them.

Mnemonic: Independent tools? Call them in parallel. Latency = max(all calls), not sum.

## Q104
Type: single
Difficulty: 3
Tags: agent-development, error-classification
Concepts: error-taxonomy
Domain: Domain 2 — Agent Development
DomainNumber: 2

An agent's error log shows: 40% tool timeout errors, 30% malformed tool input errors, 20% incorrect tool selection errors, and 10% hallucinated tool name errors. Which error category should be prioritized for fixing?

A. Hallucinated tool names because they're the most unusual
B. Tool timeout errors because they're the most frequent — but after investigation, malformed input errors should likely be prioritized because they indicate a systematic prompt or schema issue that, once fixed, may also reduce incorrect selections and hallucinations
C. All categories equally
D. None — 100% of requests eventually succeed after retries

Answer: B

Hint: Which error type is most likely a root cause that contributes to other error types?

Explanation: Malformed inputs suggest the agent doesn't understand tool schemas properly — a fundamental issue that may cascade into incorrect tool selection (choosing the wrong tool because it misunderstands parameters) and even hallucinated names (inventing tools when existing ones seem incompatible). Fixing the schema understanding addresses multiple error categories.

Why others wrong: Hallucinated names are symptoms, often of deeper tool understanding issues (A); equal priority doesn't focus on root causes (C); retries mask problems and waste resources (D).

Trap: Only fixing the most frequent error — root cause analysis often reveals that the second or third most common error is upstream and causes multiple downstream errors.

Mnemonic: Find the root cause that causes cascading errors. Frequency ≠ priority.

## Q105
Type: single
Difficulty: 2
Tags: evaluation, ab-testing
Concepts: agent-ab-testing
Domain: Domain 3 — Evaluation and Tuning
DomainNumber: 3

When A/B testing two versions of an agent (e.g., different prompts), what statistical pitfall must be avoided?

A. Testing for too long
B. Peeking at results before statistical significance is reached and making early decisions, or running the test without controlling for confounding variables like time-of-day effects on query complexity
C. Having too many test users
D. Using the same metrics as production

Answer: B

Hint: Checking results daily and stopping "when it looks good" invalidates the statistical test.

Explanation: Early peeking inflates false-positive rates because multiple comparisons without correction increase the chance of seeing significance by chance. Confounding variables (time, user segment, query type) can make one variant appear better when the difference is due to the population, not the prompt.

Why others wrong: Longer tests reduce noise (A); more users increase statistical power (C); using production metrics ensures the test measures what matters (D).

Trap: Stopping an A/B test early because variant B "looks 5% better" after one day — the effect may be noise that disappears with more data.

Mnemonic: A/B test: no peeking, reach significance, control confounds. Patience = valid results.

## Q106
Type: single
Difficulty: 2
Tags: evaluation, dataset-contamination
Concepts: eval-dataset-integrity
Domain: Domain 3 — Evaluation and Tuning
DomainNumber: 3

Why must evaluation datasets for an agent be carefully isolated from training and prompt development data?

A. To save storage space
B. Contaminated evaluation datasets give falsely optimistic results — if the agent was optimized on the same examples used for evaluation, the scores reflect memorization rather than generalization, making the evaluation meaningless for predicting real-world performance
C. Because different teams should manage different datasets
D. To comply with data format standards

Answer: B

Hint: Testing a student with the same questions they practiced on doesn't measure their understanding.

Explanation: Data contamination inflates evaluation metrics without improving real-world performance. If prompt engineering used the same examples as evaluation, the agent appears to perform well on known cases while potentially failing on novel queries. Clean evaluation requires held-out data the agent has never "seen" during development.

Why others wrong: Storage is not the concern (A); organizational separation helps but isn't the primary reason (C); format standards are irrelevant (D).

Trap: Using "representative" examples for both prompt development and evaluation — they become contaminated the moment they influence the prompt.

Mnemonic: Evaluation = exam. Development data = practice problems. Never the same set.

## Q107
Type: single
Difficulty: 3
Tags: deployment, rate-limiting
Concepts: rate-limiting-strategies
Domain: Domain 4 — Deployment and Scaling
DomainNumber: 4

An agentic system must enforce rate limits to prevent abuse, but different request types have vastly different costs (a simple FAQ lookup vs. a multi-tool research task). What rate limiting strategy is most appropriate?

A. Fixed rate limit of N requests per minute for all request types
B. Token-bucket rate limiting with cost-weighted tokens — simple requests consume 1 token while complex multi-tool requests consume proportionally more, with per-user and per-organization buckets and graceful degradation for exceeded limits
C. No rate limiting because users are authenticated
D. Blocking users after any failed request

Answer: B

Hint: A simple "10 requests per minute" limit treats a 100ms lookup the same as a 30-second research task — is that fair?

Explanation: Cost-weighted rate limiting ensures fair resource allocation by charging "more" for expensive operations. A user making 100 simple lookups and a user making 10 complex research tasks may consume similar resources, so they should face similar rate limits in terms of resource consumption, not request count.

Why others wrong: Fixed rate limits are unfair — they either over-restrict simple queries or under-restrict complex ones (A); authenticated users can still abuse resources (C); blocking on failure is too aggressive (D).

Trap: Using request count as the only rate limiting dimension — a single complex agentic request can consume 100x the resources of a simple one.

Mnemonic: Rate limit by cost, not count. Complex requests = more tokens from the bucket.

## Q108
Type: single
Difficulty: 2
Tags: cognition, task-decomposition
Concepts: hierarchical-task-decomposition
Domain: Domain 5 — Cognition, Planning, and Memory
DomainNumber: 5

An agent receives the request: "Research competitors, analyze their pricing, and create a comparison report." How should task decomposition be designed?

A. Attempt everything in a single LLM call
B. Hierarchical decomposition: break into sub-tasks (1. identify competitors → 2. gather pricing data for each → 3. analyze pricing patterns → 4. generate comparison report), with each sub-task producing structured output that feeds into the next
C. Skip directly to creating the report
D. Ask the user to manually break it into sub-tasks

Answer: B

Hint: Complex tasks need to be broken into manageable steps with clear inputs and outputs.

Explanation: Hierarchical decomposition breaks a complex task into a sequence of simpler sub-tasks, each with clear inputs, outputs, and success criteria. This enables the agent to use appropriate tools at each step, validate intermediate results, and recover from failures without restarting the entire task.

Why others wrong: A single call can't handle multi-step research (A); skipping to the report lacks the research foundation (C); users shouldn't need to do the agent's planning work (D).

Trap: Decomposing too granularly — each sub-task should be a meaningful unit of work, not an individual API call.

Mnemonic: Complex request → sub-tasks with clear I/O → structured pipeline

## Q109
Type: single
Difficulty: 2
Tags: knowledge-integration, citation
Concepts: source-attribution
Domain: Domain 6 — Knowledge Integration and Data Handling
DomainNumber: 6

Why should a RAG-based agent include source citations in its responses?

A. To increase the response length
B. Citations enable users to verify the agent's claims by checking the original source, build trust through transparency, and help identify when retrieved information is outdated or from unreliable sources
C. Because all LLMs require citations in their output format
D. To avoid copyright claims

Answer: B

Hint: "Trust but verify" — how can a user verify if they don't know where the information came from?

Explanation: Source citations serve three critical functions: verifiability (users can check claims), trust (transparency about information sources), and quality signals (users can assess source reliability and recency). In enterprise settings, citations are often required for compliance and audit trails.

Why others wrong: Length is not the goal (A); LLMs don't inherently require citations (C); copyright is a separate concern (D).

Trap: Including citations without verifying they actually support the claims — hallucinated citations (real-looking but fake references) are worse than no citations.

Mnemonic: Citations = verify + trust + quality. Show your sources, let users check.

## Q110
Type: single
Difficulty: 3
Tags: nvidia-platform, nim-customization
Concepts: nim-model-customization
Domain: Domain 7 — NVIDIA Platform Implementation
DomainNumber: 7

An enterprise wants to deploy a domain-specific agent using NVIDIA NIM. The base model performs well but makes errors on industry-specific terminology. What is the recommended NVIDIA workflow?

A. Train a new model from scratch
B. Use NeMo framework to fine-tune or apply LoRA adapters to the base model on domain-specific data, then export the customized model as a NIM microservice with TensorRT-LLM optimization for production deployment
C. Edit the model weights manually
D. Only use prompt engineering, never fine-tune

Answer: B

Hint: NeMo for customization, NIM for deployment — they're complementary.

Explanation: The NVIDIA customization-to-deployment workflow: (1) NeMo for parameter-efficient fine-tuning (LoRA, P-tuning) on domain data, (2) export the customized model with TensorRT-LLM optimization, (3) deploy as a NIM container. This provides domain accuracy with production-grade inference performance.

Why others wrong: Training from scratch is wasteful when the base model is mostly correct (A); manual weight editing is not feasible for modern models (C); prompt engineering alone may not solve systematic terminology errors (D).

Trap: Fine-tuning without TensorRT-LLM optimization — the customized model may be accurate but too slow for production latency requirements.

Mnemonic: NeMo customize → TensorRT-LLM optimize → NIM deploy. The NVIDIA pipeline.

## Q111
Type: single
Difficulty: 2
Tags: monitoring, alerting
Concepts: alert-design
Domain: Domain 8 — Run, Monitor, and Maintain
DomainNumber: 8

What is "alert fatigue" and how does it affect agentic system operations?

A. Physical tiredness from watching dashboards
B. When too many non-actionable alerts fire, operators start ignoring them — including critical alerts — because the signal-to-noise ratio is too low, leading to missed incidents and degraded response times
C. When the alerting system runs out of memory
D. When users receive too many agent responses

Answer: B

Hint: The boy who cried wolf — what happens when every small issue triggers an urgent alert?

Explanation: Alert fatigue occurs when operators are overwhelmed by non-critical alerts, causing them to miss or ignore genuinely critical ones. In agentic systems, this means production incidents (agent loops, data leaks, cost spikes) may go unaddressed because the team has been desensitized by constant low-priority alerts.

Why others wrong: Alert fatigue is psychological, not physical (A); it's a human problem, not a system resource problem (C); it's about operator alerts, not user responses (D).

Trap: Setting aggressive alert thresholds "to be safe" — too many alerts is as dangerous as too few because critical alerts get lost in the noise.

Mnemonic: Too many alerts → all alerts ignored → critical incidents missed. Tune for signal, not noise.

## Q112
Type: single
Difficulty: 2
Tags: safety, responsible-ai
Concepts: responsible-ai-principles
Domain: Domain 9 — Safety, Ethics, and Compliance
DomainNumber: 9

Which principle of responsible AI is most directly violated when an agent is deployed without informing users about its limitations?

A. Scalability
B. Transparency — users cannot make informed decisions about trusting the agent's outputs if they are unaware of its potential for errors, biases, or out-of-domain failures
C. Performance optimization
D. Cost efficiency

Answer: B

Hint: Can users trust appropriately if they don't know what the agent can and can't do?

Explanation: Transparency in responsible AI requires that users understand the system's capabilities, limitations, and potential failure modes. Without this information, users may over-trust the agent on tasks where it's unreliable, or under-trust it on tasks where it excels.

Why others wrong: Scalability is a technical concern, not an ethical principle (A); performance is an engineering goal (C); cost efficiency is a business metric (D).

Trap: Thinking transparency means showing the model's weights or internal architecture — it means communicating capabilities, limitations, and confidence to end users in understandable terms.

Mnemonic: Transparency = users know what the agent can and can't do. Informed trust.

## Q113
Type: single
Difficulty: 3
Tags: agent-architecture, versioning
Concepts: agent-version-management
Domain: Domain 1 — Agent Architecture and Design
DomainNumber: 1

A multi-agent system has 5 agents with interdependent behaviors. When Agent C is updated, it changes the output format that Agents D and E consume. How should version management be designed?

A. Update all agents simultaneously and hope for the best
B. Use semantic versioning for agent interfaces with backward-compatible changes as minor versions and breaking changes as major versions, enforce version compatibility checks at agent-to-agent communication boundaries, and support running multiple versions concurrently during migration
C. Never update any agent once deployed
D. Let each agent team manage their versions independently without coordination

Answer: B

Hint: This is the same problem as microservice API versioning — how do you handle breaking interface changes?

Explanation: Semantic versioning for agent interfaces enables controlled evolution: minor updates are backward-compatible, major updates signal breaking changes. Version checks at communication boundaries prevent incompatible agents from interacting. Running multiple versions concurrently enables gradual migration without big-bang deployments.

Why others wrong: Simultaneous updates are risky and often impossible at scale (A); never updating prevents improvement (C); uncoordinated versioning causes incompatibility (D).

Trap: Not treating agent interfaces as versioned APIs — when Agent C changes its output format, Agents D and E break silently.

Mnemonic: Agent interfaces = APIs. Version them, check compatibility, migrate gradually.

## Q114
Type: single
Difficulty: 2
Tags: agent-development, guardrails-testing
Concepts: guardrail-eval
Domain: Domain 2 — Agent Development
DomainNumber: 2

How should guardrails be tested to ensure they work correctly without over-blocking legitimate requests?

A. Deploy guardrails and wait for user complaints about blocked requests
B. Test with a comprehensive suite including adversarial attacks (should be blocked), legitimate edge cases (should not be blocked), and ambiguous cases (should be correctly classified), measuring both the false positive rate (over-blocking) and false negative rate (under-blocking)
C. Only test with adversarial attacks to ensure they're blocked
D. Disable guardrails during testing

Answer: B

Hint: Guardrails must block what they should AND allow what they should. Test both directions.

Explanation: Effective guardrail testing requires balanced evaluation: adversarial tests verify blocking capability, legitimate edge case tests verify that guardrails don't over-block, and ambiguous cases verify correct classification. The false positive rate (blocking legitimate requests) is as important as the false negative rate (missing attacks).

Why others wrong: User complaints are too late and costly (A); testing only attacks misses over-blocking (C); testing without guardrails is pointless (D).

Trap: Only testing adversarial attacks and celebrating 100% block rate — if the guardrails also block 20% of legitimate requests, they're unusable.

Mnemonic: Guardrail test = attack blocked? + legitimate allowed? + ambiguous correct? Balance both error types.

## Q115
Type: single
Difficulty: 3
Tags: evaluation, statistical-significance
Concepts: eval-methodology
Domain: Domain 3 — Evaluation and Tuning
DomainNumber: 3

An evaluation shows Agent A has 82% accuracy and Agent B has 84% accuracy on 200 test cases. Can you conclude Agent B is better?

A. Yes — 84% is clearly higher than 82%
B. Not necessarily — with 200 test cases, a 2% difference (4 questions) is likely within the statistical margin of error. A confidence interval calculation or significance test is needed to determine whether the difference is statistically meaningful
C. No — Agent A is always better because it was tested first
D. Yes, but only if Agent B is newer

Answer: B

Hint: If you flipped a coin 200 times, you wouldn't expect exactly 100 heads every time. How much variation is "normal"?

Explanation: A 2% difference on 200 samples means ~4 questions. With a binomial confidence interval, the 95% CI for 82% accuracy on 200 samples is approximately ±5.3%, and for 84% it's approximately ±5.1%. The intervals overlap heavily, so the difference is not statistically significant — you cannot conclude B is better.

Why others wrong: Raw percentage comparison without statistical testing is misleading (A); testing order is irrelevant (C); model age is irrelevant to statistical comparison (D).

Trap: Treating small accuracy differences as meaningful without significance testing — this leads to "random walk" optimization where you keep the noisier of two equivalent options.

Mnemonic: Small difference + small sample = noise, not signal. Always check significance.

## Q116
Type: single
Difficulty: 2
Tags: deployment, graceful-degradation
Concepts: degraded-mode-operation
Domain: Domain 4 — Deployment and Scaling
DomainNumber: 4

When the primary LLM service is unavailable, how should an agentic system degrade gracefully?

A. Show a blank page
B. Fall back to a smaller, locally-hosted model for basic queries, present cached responses for common questions, clearly communicate reduced capabilities to users, and queue complex requests for processing when the primary service recovers
C. Crash and wait for the service to return
D. Switch to a random alternative provider without testing

Answer: B

Hint: An airline still handles customers when their computer system goes down — they switch to manual processes with reduced service.

Explanation: Graceful degradation maintains partial functionality: a local model handles simple queries, cached responses cover common cases, and complex queries are queued. Clear communication sets user expectations. This is far better than complete outage and maintains user trust.

Why others wrong: Blank page is complete failure (A); crashing provides no value (C); untested providers may produce incompatible or incorrect results (D).

Trap: Having no fallback plan — "our LLM provider never goes down" is not a resilience strategy.

Mnemonic: Primary down? Degrade gracefully: smaller model + cache + queue + communicate.

## Q117
Type: single
Difficulty: 2
Tags: cognition, goal-decomposition
Concepts: goal-oriented-planning
Domain: Domain 5 — Cognition, Planning, and Memory
DomainNumber: 5

In goal-oriented agent planning, what is the difference between forward chaining and backward chaining?

A. They always produce the same plan
B. Forward chaining starts from the current state and works toward the goal, while backward chaining starts from the goal and works backward to identify what conditions must be met — backward chaining is often more efficient for well-defined goals
C. Forward chaining is for simple tasks, backward chaining is for complex tasks
D. They refer to the order of tool execution

Answer: B

Hint: Building a house: forward = "I have land, what's step 1?" vs. backward = "I need a house, what's the last step before done?"

Explanation: Forward chaining explores actions from the current state, which can lead to unnecessary exploration. Backward chaining starts from the goal and identifies required preconditions, pruning irrelevant actions early. For agents with well-defined goals, backward chaining produces more focused plans.

Why others wrong: They can produce different plans with different efficiency (A); both can handle any complexity level (C); they're about planning direction, not execution order (D).

Trap: Always using forward chaining because it's more intuitive — for goal-directed tasks, backward chaining avoids wasting effort on actions that don't contribute to the goal.

Mnemonic: Forward = explore from now. Backward = work back from goal. Goal is clear? Go backward.

## Q118
Type: single
Difficulty: 2
Tags: knowledge-integration, vector-db-selection
Concepts: vector-database-criteria
Domain: Domain 6 — Knowledge Integration and Data Handling
DomainNumber: 6

When selecting a vector database for an agentic RAG system, which capability is most important for production use?

A. Support for the largest possible number of dimensions
B. Efficient approximate nearest neighbor (ANN) search with filtering support, horizontal scalability, real-time index updates, and production features like high availability, backup, and access control
C. The prettiest admin dashboard
D. Support for SQL queries only

Answer: B

Hint: Production = scale + availability + real-time updates + security. Not just fast search.

Explanation: Production vector databases need: fast ANN search with metadata filtering (hybrid search), horizontal scaling for growing data, real-time updates (not batch-only), and operational features (HA, backups, RBAC). Pure search speed without these is insufficient for enterprise agentic systems.

Why others wrong: Dimension count is rarely the bottleneck (A); dashboards are nice but not critical (C); SQL-only databases don't natively support vector operations (D).

Trap: Choosing based on benchmark search speed alone — production needs also include update latency, filtering, scalability, and operational features.

Mnemonic: Production vector DB = fast search + filters + scale + HA + updates + security

## Q119
Type: single
Difficulty: 3
Tags: nvidia-platform, multi-gpu
Concepts: multi-gpu-inference
Domain: Domain 7 — NVIDIA Platform Implementation
DomainNumber: 7

When deploying a large model across multiple GPUs using NVIDIA's stack, what is the difference between tensor parallelism and pipeline parallelism?

A. They are the same technique
B. Tensor parallelism splits individual layers across GPUs (each GPU computes a portion of every layer), while pipeline parallelism assigns different layers to different GPUs (each GPU processes complete layers but different stages of the model)
C. Tensor parallelism is for training only
D. Pipeline parallelism is always faster

Answer: B

Hint: Think of an assembly line (pipeline) vs. a team working on the same part simultaneously (tensor).

Explanation: Tensor parallelism distributes the computation within each layer across GPUs, requiring high-bandwidth interconnects (NVLink). Pipeline parallelism assigns different model layers to different GPUs, creating a pipeline where micro-batches flow through stages. Tensor parallelism reduces per-layer latency; pipeline parallelism reduces memory per GPU.

Why others wrong: They solve different aspects of multi-GPU distribution (A); both work for inference (C); speed depends on the model, hardware, and communication bandwidth (D).

Trap: Using pipeline parallelism when tensor parallelism would be better (or vice versa) — tensor parallelism is preferred when GPU interconnect bandwidth is high (NVLink), pipeline parallelism when it's low (PCIe).

Mnemonic: Tensor = split layers across GPUs (needs fast links). Pipeline = stack layers on GPUs (needs less bandwidth).

## Q120
Type: single
Difficulty: 2
Tags: monitoring, capacity-planning
Concepts: inference-capacity-planning
Domain: Domain 8 — Run, Monitor, and Maintain
DomainNumber: 8

How should capacity be planned for an agentic system with unpredictable query complexity?

A. Provision for average load and hope for the best
B. Analyze the distribution of request complexity (simple/medium/complex), provision for the P95 load with auto-scaling for spikes, maintain a buffer for unexpected complexity spikes, and use queue-based load shedding to gracefully handle overload
C. Provision for the maximum possible load at all times
D. Use a single server and limit user access

Answer: B

Hint: Average capacity + unexpected spike = outage. Max capacity at all times = wasted money. What's the middle ground?

Explanation: Capacity planning for agentic systems must account for complexity variance. P95 provisioning with auto-scaling handles most cases efficiently, while queue-based load shedding prevents total failure during extreme spikes. Understanding the complexity distribution enables right-sizing the base capacity.

Why others wrong: Average provisioning can't handle spikes (A); maximum provisioning is cost-prohibitive (C); single server has no redundancy or scalability (D).

Trap: Using request count for capacity planning instead of weighted complexity — 100 simple queries and 100 complex multi-tool queries need very different resources.

Mnemonic: P95 base + auto-scale for spikes + queue for overflow = cost-effective resilience

## Q121
Type: single
Difficulty: 3
Tags: safety, supply-chain
Concepts: model-supply-chain-security
Domain: Domain 9 — Safety, Ethics, and Compliance
DomainNumber: 9

An agentic system uses a third-party embedding model downloaded from an open repository. What supply-chain security risk does this introduce?

A. No risk — open-source models are always safe
B. The model may contain embedded backdoors (trojan triggers that activate on specific inputs), data poisoning that produces biased or incorrect embeddings, or malicious code in the model loading pipeline — all potentially undetectable through normal testing
C. The model will be slower than commercial alternatives
D. Open-source models don't support embeddings

Answer: B

Hint: Would you run arbitrary code downloaded from the internet without verifying its source?

Explanation: Model supply chain attacks are a growing concern. Backdoored models can behave normally on clean inputs while producing manipulated outputs on trigger inputs. Poisoned embeddings may systematically misrepresent certain concepts. Malicious model files can execute code during loading (pickle deserialization attacks).

Why others wrong: Open-source models carry the same supply-chain risks as any software (A); speed depends on architecture, not licensing (C); many excellent embedding models are open-source (D).

Trap: Trusting model hubs implicitly because they're well-known — popular repositories have had malicious models uploaded that passed basic checks.

Mnemonic: Model = code. Untrusted model = untrusted code. Verify source, scan for backdoors.

## Q122
Type: single
Difficulty: 1
Tags: human-ai, user-expectations
Concepts: expectation-management
Domain: Domain 10 — Human-AI Interaction and Oversight
DomainNumber: 10

How should an agentic system set user expectations about its capabilities?

A. Claim it can do everything to maximize adoption
B. Clearly communicate what the agent can and cannot do during onboarding, provide scope-appropriate confidence indicators during use, and gracefully decline out-of-scope requests with suggestions for alternative resources
C. Provide no information about capabilities and let users discover them
D. Understate capabilities to avoid disappointment

Answer: B

Hint: Setting accurate expectations leads to satisfied users; over-promising leads to frustrated users.

Explanation: Accurate expectation setting during onboarding prevents both over-reliance and under-utilization. In-use confidence indicators help users calibrate trust per-response. Graceful scope management (declining with alternatives) maintains trust while being honest about limitations.

Why others wrong: Over-claiming creates disappointment and erodes trust (A); no guidance leads to frustration and misuse (C); understating leads to under-utilization (D).

Trap: Over-promising capabilities to drive adoption — short-term gains are offset by long-term trust erosion when the agent fails to deliver.

Mnemonic: Promise accurately, deliver consistently, decline gracefully. Trust is earned over time.

## Q123
Type: single
Difficulty: 2
Tags: agent-development, memory-persistence
Concepts: persistent-memory-implementation
Domain: Domain 2 — Agent Development
DomainNumber: 2

An agent needs to remember user preferences across sessions (e.g., preferred response format, frequently asked topics, past corrections). How should this be implemented?

A. Store preferences in the LLM's weights through fine-tuning after each session
B. Use a persistent user profile store (database or key-value store) that loads relevant preferences into the system prompt at session start, and updates the profile based on explicit user feedback and observed patterns
C. Rely on the user to re-state their preferences at the start of each session
D. Store preferences in browser cookies

Answer: B

Hint: How does a good assistant remember your preferences without you repeating them?

Explanation: A persistent user profile store decouples preference storage from the LLM and conversation context. Loading relevant preferences at session start provides continuity, while updating based on feedback creates a learning system. This is more reliable than in-context learning and more user-friendly than manual re-specification.

Why others wrong: Fine-tuning per-user is impractical and doesn't scale (A); requiring re-specification is poor UX (C); cookies are client-side, unreliable, and limited in capacity (D).

Trap: Storing everything in the system prompt — user profiles can grow large and consume valuable context window space. Load only relevant preferences.

Mnemonic: User profile DB → load relevant prefs at session start → update from feedback

## Q124
Type: single
Difficulty: 3
Tags: evaluation, multi-turn-eval
Concepts: multi-turn-evaluation
Domain: Domain 3 — Evaluation and Tuning
DomainNumber: 3

Evaluating a single-turn response is straightforward, but what makes multi-turn agent evaluation fundamentally more challenging?

A. Multi-turn conversations are just multiple single-turn evaluations
B. Multi-turn evaluation must assess coherence across turns (does the agent contradict itself?), context utilization (does it remember earlier information?), progressive reasoning (does it build on previous steps?), and recovery from errors — none of which single-turn evaluation captures
C. Multi-turn conversations are too short to evaluate
D. Multi-turn evaluation only requires checking the last response

Answer: B

Hint: A conversation is more than the sum of its parts — what emergent properties exist across turns that don't exist within a single turn?

Explanation: Multi-turn evaluation introduces dimensions that don't exist in single-turn: temporal coherence (no self-contradiction), context retention (remembering earlier statements), progressive reasoning (building arguments across turns), and error recovery (correcting earlier mistakes). These require evaluating the conversation as a unit, not individual turns.

Why others wrong: Multi-turn has emergent properties that single-turn evaluation misses (A); multi-turn conversations can be very long (C); earlier turns set context that affects later turns (D).

Trap: Evaluating each turn independently and averaging scores — this misses coherence issues where individual turns are fine but the conversation as a whole is contradictory or incoherent.

Mnemonic: Multi-turn eval = coherence + memory + progression + recovery. The whole > sum of parts.

## Q125
Type: single
Difficulty: 2
Tags: deployment, secret-management
Concepts: secrets-in-deployment
Domain: Domain 4 — Deployment and Scaling
DomainNumber: 4

When deploying agentic services using containers, how should secrets (API keys, database passwords) be managed?

A. Hardcode them in the container image
B. Inject them at runtime through environment variables from a secrets manager (e.g., HashiCorp Vault, AWS Secrets Manager), never baking them into images, and rotate them on a schedule with zero-downtime rotation support
C. Store them in a public configuration file
D. Include them in the container's Dockerfile

Answer: B

Hint: If someone pulls your container image from a registry, should they get your API keys?

Explanation: Secrets injected at runtime from a secrets manager never exist in the container image, source code, or configuration files. This prevents exposure through image registries, source control, or container inspection. Automated rotation with zero-downtime support ensures secrets don't become stale or compromised.

Why others wrong: Hardcoded secrets in images are exposed to anyone with image access (A); public config files are publicly readable (C); Dockerfiles are in source control and image layers (D).

Trap: Using environment variables hardcoded in docker-compose.yml — this is still baking secrets into configuration. They should come from a secrets manager.

Mnemonic: Secrets: never in code, never in images, never in config. Always from a secrets manager, always rotated.

## Q126
Type: single
Difficulty: 2
Tags: cognition, abstraction-levels
Concepts: reasoning-abstraction
Domain: Domain 5 — Cognition, Planning, and Memory
DomainNumber: 5

When an agent reasons at too low a level of abstraction (focusing on implementation details rather than strategy), what problem occurs?

A. The agent produces faster responses
B. The agent gets lost in details, makes locally optimal but globally suboptimal decisions, and fails to see the bigger picture — similar to how a chess player focusing only on the next move misses strategic opportunities
C. The agent uses fewer tokens
D. The agent becomes more creative

Answer: B

Hint: Can't see the forest for the trees — what's the agent equivalent?

Explanation: Low-level reasoning leads to "tunnel vision" where the agent optimizes individual steps without considering the overall goal. For example, an agent might find the optimal database query for each sub-question without recognizing that a single different query could answer all questions more efficiently.

Why others wrong: Detail-level reasoning is typically slower due to more steps (A); it usually uses more tokens through verbose reasoning (C); it constrains rather than enhances creativity (D).

Trap: Assuming more detailed reasoning is always better — strategic reasoning at the right abstraction level often produces better outcomes with less effort.

Mnemonic: Right abstraction = right decisions. Too low = tunnel vision. Too high = misses details. Find the sweet spot.

## Q127
Type: single
Difficulty: 2
Tags: knowledge-integration, data-quality
Concepts: knowledge-base-quality
Domain: Domain 6 — Knowledge Integration and Data Handling
DomainNumber: 6

A RAG agent consistently retrieves irrelevant documents despite the query being clear. After verifying the embedding model is performing well, what is the most likely cause?

A. The vector database is too slow
B. The knowledge base contains noisy, duplicated, or poorly structured documents that pollute the embedding space — data quality issues rather than model quality issues
C. The user is typing too fast
D. The LLM is hallucinating search results

Answer: B

Hint: Garbage in, garbage out — if the documents are messy, embeddings will be messy.

Explanation: Poor document quality is the most common cause of bad RAG retrieval after ruling out model issues. Duplicates inflate certain topics, noisy text (headers, footers, boilerplate) creates misleading embeddings, and poor structure (mixing topics within chunks) reduces retrieval precision.

Why others wrong: Database speed affects latency, not relevance (A); typing speed is irrelevant (C); the LLM doesn't perform the retrieval step (D).

Trap: Blaming the embedding model or vector database for retrieval issues that are actually data quality problems — always audit the knowledge base first.

Mnemonic: Bad retrieval? Check the data first: duplicates, noise, structure. Model is usually not the problem.

## Q128
Type: single
Difficulty: 3
Tags: nvidia-platform, nemo-customization
Concepts: nemo-peft
Domain: Domain 7 — NVIDIA Platform Implementation
DomainNumber: 7

What is the advantage of using LoRA (Low-Rank Adaptation) through NeMo framework compared to full fine-tuning for customizing an agent's LLM?

A. LoRA always produces better results than full fine-tuning
B. LoRA trains only a small number of additional parameters (typically <1% of the base model), reducing compute requirements by 10-100x, enabling multiple customizations as swappable adapters on a single base model, and reducing the risk of catastrophic forgetting
C. LoRA doesn't require any training data
D. LoRA modifies the base model's weights permanently

Answer: B

Hint: Why retrain all 70 billion parameters when adjusting a few million achieves similar results?

Explanation: LoRA adds small trainable matrices to frozen base model layers, learning domain-specific adaptations without modifying the full model. Benefits: dramatically reduced compute/memory requirements, multiple adapters shareable on one base model, preserved general capabilities (less forgetting), and easy rollback by removing the adapter.

Why others wrong: Full fine-tuning can produce better results for some tasks (A); LoRA still requires training data (C); LoRA preserves the base weights and adds separate adapter weights (D).

Trap: Thinking LoRA is always a perfect substitute for full fine-tuning — for tasks requiring significant behavioral changes, full fine-tuning may still be necessary.

Mnemonic: LoRA = small adapter on frozen giant. Cheap to train, easy to swap, safe for the base model.

## Q129
Type: single
Difficulty: 2
Tags: monitoring, runbook
Concepts: incident-runbooks
Domain: Domain 8 — Run, Monitor, and Maintain
DomainNumber: 8

What should an incident runbook for an agentic system include that traditional service runbooks don't?

A. Contact information for the on-call team
B. Agent-specific diagnostic procedures: how to check for reasoning loops, how to inspect the agent's last N decisions and tool calls, how to verify guardrails are functioning, how to switch to degraded mode without tool access, and how to drain active conversations gracefully
C. Server hardware specifications
D. The company's org chart

Answer: B

Hint: What debugging steps are unique to agentic systems compared to traditional APIs?

Explanation: Agentic system runbooks need procedures unique to agents: inspecting decision logs for loops, verifying guardrail health, checking tool availability, draining multi-turn conversations (not just HTTP requests), and switching to degraded modes that preserve basic functionality.

Why others wrong: Contact info is in all runbooks, not agent-specific (A); hardware specs are infrastructure documentation (C); org charts are organizational, not operational (D).

Trap: Reusing standard API runbooks for agentic systems — they miss agent-specific failure modes like reasoning loops, guardrail bypasses, and conversation state corruption.

Mnemonic: Agent runbook extras: reasoning loops? guardrails healthy? tools alive? conversations draining?

## Q130
Type: single
Difficulty: 3
Tags: safety, eu-ai-act
Concepts: regulatory-compliance
Domain: Domain 9 — Safety, Ethics, and Compliance
DomainNumber: 9

Under the EU AI Act, an agentic system used for job candidate screening is classified as "high-risk." What compliance requirements does this impose?

A. No additional requirements compared to low-risk systems
B. Mandatory requirements including: risk management system, high-quality training data documentation, transparency and information to deployers, human oversight mechanisms, accuracy and robustness testing, and registration in the EU AI database before deployment
C. Only a privacy policy is required
D. The system must be open-source

Answer: B

Hint: High-risk = high compliance burden. What safeguards does the EU require?

Explanation: The EU AI Act's high-risk classification (which includes employment/recruitment AI) imposes extensive requirements: documented risk management, data governance, transparency to users and deployers, human oversight capability, accuracy/robustness benchmarks, logging for post-market monitoring, and registration in the EU database.

Why others wrong: High-risk systems have extensive additional requirements (A); privacy policy alone is insufficient (C); open-source is not required (D).

Trap: Assuming US-centric compliance standards are sufficient globally — the EU AI Act has specific, detailed requirements that differ from voluntary frameworks like NIST AI RMF.

Mnemonic: EU AI Act high-risk = risk management + data quality + transparency + human oversight + testing + registration

## Q131
Type: single
Difficulty: 2
Tags: agent-development, workflow-patterns
Concepts: map-reduce-agents
Domain: Domain 2 — Agent Development
DomainNumber: 2

A document analysis task requires summarizing 50 pages. Each page can be summarized independently, but the final summary must synthesize all page summaries. Which agentic pattern is most appropriate?

A. Process all 50 pages in a single LLM call
B. Map-reduce pattern — map: summarize each page independently (parallelizable), reduce: synthesize all page summaries into a coherent final summary
C. Summarize only the first and last pages
D. Ask the user to summarize the document themselves

Answer: B

Hint: Independent sub-tasks that need to be combined — what distributed computing pattern does this match?

Explanation: Map-reduce naturally fits this task: the map phase processes pages independently (embarrassingly parallel), producing page summaries. The reduce phase combines these into a coherent final summary. This handles documents exceeding the context window while leveraging parallelism for speed.

Why others wrong: 50 pages typically exceed context limits (A); partial summarization misses most content (C); manual summarization defeats the purpose of automation (D).

Trap: Processing pages sequentially when they can be parallelized — map-reduce's key advantage is enabling parallel processing of independent sub-tasks.

Mnemonic: Independent parts? Map them in parallel. Need a combined result? Reduce them together.

## Q132
Type: single
Difficulty: 2
Tags: evaluation, user-satisfaction
Concepts: user-centric-evaluation
Domain: Domain 3 — Evaluation and Tuning
DomainNumber: 3

Why might an agent score highly on automated evaluation benchmarks but receive poor user satisfaction ratings?

A. Users always prefer worse-performing systems
B. Automated benchmarks measure task completion on curated test cases, but users care about response latency, communication style, handling of ambiguity, graceful failure behavior, and the effort required to interact — dimensions that benchmarks typically don't measure
C. Automated benchmarks are always wrong
D. User satisfaction is not a valid metric

Answer: B

Hint: A correct answer delivered rudely, slowly, and requiring three clarifying questions — technically correct but poor experience.

Explanation: Benchmarks optimize for correctness on well-defined tasks. User satisfaction includes subjective dimensions: was the response timely? Was the language natural? Did the agent handle ambiguity gracefully or ask excessive clarifying questions? Did errors degrade gracefully or crash? These experiential factors dominate real-world satisfaction.

Why others wrong: Users prefer better-performing systems, but "better" includes more than correctness (A); benchmarks are useful but incomplete (C); user satisfaction is a critical metric (D).

Trap: Optimizing only for benchmark scores and neglecting user experience — the highest-scoring agent on benchmarks may not be the one users prefer.

Mnemonic: Benchmarks = task correctness. Users = correctness + speed + style + error handling + effort

## Q133
Type: single
Difficulty: 3
Tags: deployment, disaster-recovery
Concepts: agent-dr-planning
Domain: Domain 4 — Deployment and Scaling
DomainNumber: 4

What additional disaster recovery challenge do agentic systems have compared to traditional stateless APIs?

A. Agentic systems don't need disaster recovery
B. Multi-turn conversation state and in-flight agent operations must be recoverable — unlike stateless APIs where each request is independent, agentic systems have ongoing conversations, pending tool calls, and accumulated context that would be lost without state replication and operation journaling
C. Agentic systems use less memory so DR is simpler
D. Traditional APIs have harder DR requirements

Answer: B

Hint: A stateless API can restart cleanly. An agent mid-conversation with 10 pending tool calls can't.

Explanation: Agentic systems maintain state: conversation history, pending operations, accumulated context, and user session data. Disaster recovery must replicate this state to a standby region and journal in-flight operations so they can resume after failover, rather than just restoring a stateless endpoint.

Why others wrong: All production systems need DR planning (A); agents typically use more memory (C); agents have additional DR requirements beyond APIs (D).

Trap: Applying stateless API DR strategies to stateful agentic systems — restoring the service endpoint is insufficient if conversation state and in-flight operations are lost.

Mnemonic: Stateless API: restart = recovered. Agentic: restart ≠ recovered (state lost). Replicate state + journal operations.

## Q134
Type: single
Difficulty: 2
Tags: cognition, uncertainty-management
Concepts: confidence-estimation
Domain: Domain 5 — Cognition, Planning, and Memory
DomainNumber: 5

How can an agent express calibrated uncertainty to improve decision quality?

A. Always express 100% confidence in every response
B. Use techniques like verbalized probability ("I'm approximately 70% confident"), multiple-sample consistency checking (if the same question produces different answers across samples, confidence should be low), and calibrated escalation thresholds to human reviewers
C. Never express any level of confidence
D. Express uncertainty only in negative responses

Answer: B

Hint: A well-calibrated agent says "I'm 70% confident" and is correct about 70% of the time when it says that.

Explanation: Calibrated uncertainty helps users and downstream systems make appropriate decisions. Verbalized probability provides explicit confidence. Multi-sample consistency measures internal agreement. Together they enable risk-aware decisions: high-confidence answers are acted upon, low-confidence answers trigger verification or escalation.

Why others wrong: False confidence leads to unchecked errors (A); hiding uncertainty prevents appropriate caution (C); uncertainty is relevant in all response types (D).

Trap: Using raw LLM probabilities as calibrated confidence — LLMs are often poorly calibrated (high confidence on wrong answers). Explicit calibration techniques are needed.

Mnemonic: Calibrated uncertainty = correct confidence level. 70% confident = right 70% of the time.

## Q135
Type: single
Difficulty: 2
Tags: knowledge-integration, temporal-relevance
Concepts: time-aware-retrieval
Domain: Domain 6 — Knowledge Integration and Data Handling
DomainNumber: 6

A RAG agent retrieves an old policy document instead of the current one because both are semantically similar. How should this be addressed?

A. Delete all old documents from the knowledge base
B. Implement time-aware retrieval with recency boosting — apply a scoring boost to more recent documents, use metadata filters for document validity dates, and maintain version tracking so superseded documents are deprioritized or archived
C. Ignore the problem because old information is sometimes useful
D. Use keyword search instead of semantic search

Answer: B

Hint: A policy from 2023 and 2026 may have similar wording but very different content. How does the system prefer the current one?

Explanation: Time-aware retrieval addresses the temporal relevance problem in RAG systems. Recency boosting adjusts scores based on document freshness. Validity metadata marks which version is current. Version tracking archives superseded documents so they don't compete with current ones in retrieval.

Why others wrong: Old documents may still be needed for historical queries (A); ignoring the problem gives users outdated information (C); keyword search has the same temporal problem (D).

Trap: Deleting old documents — they may be needed for audit trails, historical queries, or understanding policy evolution.

Mnemonic: Same topic, different dates → recency boost + validity dates + version tracking

## Q136
Type: single
Difficulty: 2
Tags: nvidia-platform, blueprint-rag
Concepts: nvidia-rag-blueprint
Domain: Domain 7 — NVIDIA Platform Implementation
DomainNumber: 7

In an NVIDIA RAG agent blueprint, what is the recommended stack for the retrieval pipeline?

A. Any SQL database with full-text search
B. NeMo Retriever for embedding generation and document processing, a GPU-accelerated vector database (like Milvus) for storage and search, and NIM for the LLM inference that generates the final response from retrieved context
C. A flat file system with grep-based search
D. Only an LLM with no retrieval component

Answer: B

Hint: NVIDIA's stack has specialized components for each part of RAG: embedding → storage → generation.

Explanation: NVIDIA's RAG blueprint uses: NeMo Retriever for GPU-accelerated embedding and document processing (the R in RAG), Milvus or similar vector DB for scalable similarity search with filtering, and NIM for optimized LLM inference (the G in RAG). Each component is GPU-optimized and designed to work together.

Why others wrong: SQL databases aren't optimized for vector similarity search (A); flat files can't handle production-scale retrieval (C); RAG by definition includes retrieval (D).

Trap: Using only a vector database without NeMo Retriever's preprocessing — raw document chunks without intelligent processing produce lower-quality embeddings.

Mnemonic: NVIDIA RAG stack: NeMo Retriever (R) → Vector DB (store) → NIM (G)

## Q137
Type: single
Difficulty: 3
Tags: monitoring, chaos-engineering
Concepts: chaos-testing-agents
Domain: Domain 8 — Run, Monitor, and Maintain
DomainNumber: 8

How should chaos engineering principles be applied to test an agentic system's resilience?

A. Randomly shut down production servers without warning
B. In a controlled staging environment, systematically inject failures — tool timeouts, LLM service degradation, corrupted retrieval results, increased latency — and verify the system degrades gracefully, monitoring that guardrails remain active, conversations are preserved, and users are informed appropriately
C. Never test for failures because it might break something
D. Only test during maintenance windows

Answer: B

Hint: Chaos engineering asks: "what breaks when this fails?" — in a controlled way.

Explanation: Chaos engineering for agents tests resilience against failure modes specific to agentic systems: tool outages, LLM degradation, retrieval corruption, and latency spikes. Controlled injection in staging reveals whether the system degrades gracefully, preserves state, maintains safety guardrails, and communicates issues to users.

Why others wrong: Uncontrolled production chaos is dangerous (A); never testing means failures are only discovered in production (C); maintenance windows don't need chaos testing — normal operation does (D).

Trap: Only testing happy paths — the most dangerous failures in agentic systems come from combinations of degraded components that are only discovered through systematic chaos testing.

Mnemonic: Break it safely in staging → fix the weaknesses → survive failures in production

## Q138
Type: single
Difficulty: 2
Tags: safety, consent-management
Concepts: data-consent-agents
Domain: Domain 9 — Safety, Ethics, and Compliance
DomainNumber: 9

An agentic system needs to process user data for personalization. What consent management approach is required?

A. Process all data by default and opt out if users complain
B. Explicit opt-in consent — clearly explain what data is collected, how it's used for personalization, how long it's retained, and provide easy mechanisms to view, modify, and delete their data at any time
C. Consent is only needed for paid users
D. A terms-of-service checkbox is sufficient for any data use

Answer: B

Hint: GDPR and similar regulations require informed, specific, and freely given consent. What does that look like?

Explanation: Modern data protection regulations (GDPR, CCPA) require explicit, informed consent for data processing. Users must understand what's collected, why, and for how long. They must have easy access to view, modify, and delete their data. Generic ToS acceptance is insufficient for specific processing purposes.

Why others wrong: Default processing violates data protection regulations (A); all users have data rights regardless of payment (C); generic ToS doesn't meet specific consent requirements (D).

Trap: Burying data processing consent in a 50-page terms of service — regulators require specific, understandable consent for each data processing purpose.

Mnemonic: Consent = explicit + informed + specific + revocable. Not a checkbox, a conversation.

## Q139
Type: single
Difficulty: 2
Tags: human-ai, onboarding
Concepts: user-onboarding-design
Domain: Domain 10 — Human-AI Interaction and Oversight
DomainNumber: 10

What is the most effective approach for onboarding new users to an agentic system?

A. Provide a 100-page user manual
B. Interactive guided experience — show the agent's capabilities through 2-3 example interactions, let users try a low-risk task with guided assistance, then gradually reduce guidance as proficiency increases
C. No onboarding — users will figure it out
D. A single tooltip saying "type your question"

Answer: B

Hint: How do you learn a new tool best — reading a manual or trying it with guided help?

Explanation: Interactive onboarding through example interactions shows rather than tells, building user confidence and mental models. Low-risk guided tasks let users experiment safely. Progressive reduction of guidance (scaffolding) builds independence while preventing overwhelming new users.

Why others wrong: Manuals are rarely read (A); no onboarding leads to misuse and frustration (C); a single tooltip doesn't convey capabilities or set expectations (D).

Trap: Over-documenting instead of letting users learn by doing — interactive onboarding has higher engagement and retention than documentation.

Mnemonic: Show, try, guide, release. Not: read, guess, fail, complain.

## Q140
Type: single
Difficulty: 3
Tags: agent-development, tool-versioning
Concepts: tool-version-compatibility
Domain: Domain 2 — Agent Development
DomainNumber: 2

An agent's database query tool is updated to return results in a new format. The agent was trained/prompted with the old format. What is the safest migration approach?

A. Update the tool and hope the agent adapts
B. Implement an adapter layer that translates new format to old format during a transition period, update the agent's prompts and evaluation suite to handle the new format, run A/B tests comparing old and new format handling, then deprecate the adapter once the new format is fully adopted
C. Keep the old format forever
D. Remove the tool and add a new one with a different name

Answer: B

Hint: How do you change the tire on a moving car? You don't — you pull over safely first.

Explanation: The adapter pattern enables zero-downtime migration: existing agent behavior is preserved through format translation while the new format is gradually adopted. A/B testing validates that the new format works correctly before full cutover. This prevents silent failures from format incompatibility.

Why others wrong: Hoping the agent adapts risks production failures (A); never updating prevents improvement (C); renaming creates unnecessary disruption and potentially breaks other tools that reference it (D).

Trap: Updating tool output format without updating the agent's understanding of it — the agent may misparse results, producing silent data corruption.

Mnemonic: Tool format change: adapter bridge → update agent → A/B test → remove bridge

## Q141
Type: single
Difficulty: 2
Tags: evaluation, benchmarks
Concepts: agent-benchmarks
Domain: Domain 3 — Evaluation and Tuning
DomainNumber: 3

What is SWE-bench in the context of agentic AI evaluation?

A. A dataset for image classification
B. A benchmark that evaluates an agent's ability to resolve real-world software engineering issues from GitHub repositories, measuring the agent's capacity for code understanding, debugging, and multi-file code changes — testing practical agentic capabilities beyond text generation
C. A speed benchmark for inference servers
D. A benchmark for speech recognition

Answer: B

Hint: SWE = Software Engineering. What kind of tasks would a software engineering benchmark test?

Explanation: SWE-bench tests whether agents can solve real GitHub issues: reading code, understanding bugs, and producing working fixes across multiple files. It's significant because it tests the full agentic loop (understanding → planning → coding → testing) on real-world tasks, not synthetic benchmarks.

Why others wrong: SWE-bench is for code tasks, not images (A); it tests correctness, not speed (C); it's for code, not speech (D).

Trap: Treating SWE-bench as a complete evaluation — it tests coding ability but not other agentic skills like conversation management, tool orchestration, or safety.

Mnemonic: SWE-bench = real GitHub bugs + agent must fix them. Tests practical coding agent capability.

## Q142
Type: single
Difficulty: 2
Tags: deployment, feature-flags
Concepts: feature-flags-agents
Domain: Domain 4 — Deployment and Scaling
DomainNumber: 4

How can feature flags be used in an agentic system deployment?

A. Feature flags are only useful for web applications
B. Feature flags enable gradual rollout of new agent capabilities (new tools, updated prompts, different models) to specific user segments, with the ability to instantly disable a feature if issues are detected — providing fine-grained control over agent behavior without redeployment
C. Feature flags replace the need for testing
D. Feature flags are the same as environment variables

Answer: B

Hint: What if you could turn on a new tool for 10% of users, watch the metrics, then gradually increase?

Explanation: Feature flags in agentic systems control which capabilities are active for which users. This enables targeted rollouts (new tool for beta users), instant rollback (disable a problematic capability), and experimentation (A/B test different models for different segments) — all without redeployment.

Why others wrong: Feature flags apply to any software system, including agents (A); flags control rollout, not replace testing (C); feature flags are dynamic and often user-segmented, unlike static env vars (D).

Trap: Using only binary feature flags (on/off) — percentage rollouts and user-segment targeting provide much more control for gradual capability releases.

Mnemonic: Feature flag = remote control for agent capabilities. Roll out gradually, kill instantly.

## Q143
Type: single
Difficulty: 3
Tags: cognition, analogy-reasoning
Concepts: analogical-reasoning
Domain: Domain 5 — Cognition, Planning, and Memory
DomainNumber: 5

An agent encounters a novel problem it hasn't seen before. How can analogical reasoning from its episodic memory improve its approach?

A. It can't — agents must have seen the exact problem before
B. The agent retrieves similar past experiences (analogues) from episodic memory, identifies the structural parallels between the past solution and the current problem, and adapts the solution strategy to the new context — transferring learned approaches without requiring exact matches
C. The agent should always ignore past experiences for novel problems
D. Analogical reasoning only works for math problems

Answer: B

Hint: A doctor treats a rare disease by recognizing similarities to a disease they've treated before — same principle.

Explanation: Analogical reasoning enables knowledge transfer: the agent recognizes structural similarities between new and past problems, extracting the applicable solution strategy while adapting to contextual differences. This is particularly powerful in agentic systems that accumulate experience across many interactions.

Why others wrong: Analogical reasoning specifically handles novel problems through similarity transfer (A); past experience often contains useful patterns for new situations (C); analogical reasoning applies broadly across domains (D).

Trap: Requiring exact match for experience transfer — the value of analogical reasoning is precisely that it works across structurally similar but superficially different problems.

Mnemonic: Novel problem + similar past experience = adapted solution. Transfer the pattern, not the exact answer.

## Q144
Type: single
Difficulty: 2
Tags: knowledge-integration, access-control
Concepts: rag-access-control
Domain: Domain 6 — Knowledge Integration and Data Handling
DomainNumber: 6

In an enterprise RAG system, some documents are classified as confidential. How should access control be implemented?

A. Trust that the LLM will not reveal confidential information
B. Enforce access control at the retrieval layer — tag documents with access levels, filter retrieval results based on the requesting user's permissions before they reach the LLM context, ensuring confidential documents are never included in prompts for unauthorized users
C. Put a disclaimer saying "some information may be confidential"
D. Create separate vector databases for each security level and manually assign users

Answer: B

Hint: If the LLM never sees the confidential document, it can't leak its contents. Where should the filter be?

Explanation: Access control must be enforced at retrieval, before documents enter the LLM context. Once confidential text is in the prompt, the LLM may reference or reproduce it. Document-level access tags combined with user permission checks during retrieval ensure unauthorized content never reaches the model.

Why others wrong: LLMs cannot be trusted to enforce access control (A); disclaimers don't prevent leakage (C); separate databases create management overhead and don't scale with complex permission models (D).

Trap: Relying on the LLM's instructions to "not reveal confidential information" — it cannot guarantee this, and prompt injection can override instructions.

Mnemonic: Access control at retrieval, not at generation. Never let unauthorized data into the prompt.

## Q145
Type: single
Difficulty: 3
Tags: human-ai, ethical-dilemmas
Concepts: ethical-decision-framework
Domain: Domain 10 — Human-AI Interaction and Oversight
DomainNumber: 10

An agent must make a recommendation in a situation where different ethical principles conflict (e.g., user privacy vs. organizational transparency). How should the system be designed?

A. The agent should always prioritize the organization over the user
B. The system should have a pre-defined ethical priority framework established by stakeholders, clearly document the reasoning behind priority decisions, escalate genuine dilemmas to human decision-makers rather than resolving them autonomously, and maintain an audit trail of ethical reasoning
C. The agent should ignore ethical considerations and optimize for efficiency
D. Each developer should decide ethical priorities based on their personal values

Answer: B

Hint: Who should decide ethical priorities — the AI, individual developers, or a deliberate organizational process?

Explanation: Ethical priority frameworks should be deliberate organizational decisions, not ad-hoc developer choices or autonomous agent decisions. For genuine dilemmas where principles conflict, human escalation ensures accountability. Documentation and audit trails enable review and improvement of ethical decisions over time.

Why others wrong: Always prioritizing the organization may violate user rights and regulations (A); ignoring ethics creates legal and reputational risk (C); inconsistent personal ethics lead to unpredictable system behavior (D).

Trap: Letting the agent resolve ethical dilemmas autonomously — ethical trade-offs require human judgment, accountability, and the ability to be questioned and appealed.

Mnemonic: Ethics: framework by stakeholders, escalate dilemmas, document reasoning, audit trail.
