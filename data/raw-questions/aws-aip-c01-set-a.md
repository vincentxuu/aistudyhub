---
exam: AIP-C01
lang: en
---

## Q1
Type: single
Difficulty: 1
Tags: foundation-model, bedrock, model-selection
Concepts: fm-selection
Domain: Domain 1 — Foundation Model Integration, Data Management, and Compliance
DomainNumber: 1

A company wants to build a customer service chatbot using Amazon Bedrock. The chatbot needs to handle multi-turn conversations in English and follow detailed instructions. Which approach should the developer take to select the most appropriate foundation model?

A. Always select the largest available model because larger models produce better results
B. Evaluate multiple foundation models on the Amazon Bedrock playground using representative prompts, comparing response quality, latency, and cost
C. Use the cheapest available model to minimize costs regardless of quality
D. Build a custom model from scratch using Amazon SageMaker instead

Answer: B

Hint: Think about how Amazon Bedrock lets you compare models before committing.

Explanation: Amazon Bedrock provides a playground for testing multiple foundation models with your own prompts. The best practice is to evaluate models against your specific use case, balancing quality, latency, and cost — not defaulting to the largest or cheapest option.

Why others wrong: Largest isn't always best (may be slower, costlier with no quality gain); cheapest may produce poor responses; building from scratch is unnecessary when pre-trained FMs are available.

Trap: Assuming bigger models are universally better — in practice, smaller models can outperform on specific tasks while being faster and cheaper.

Mnemonic: Playground = test before you invest

## Q2
Type: single
Difficulty: 2
Tags: rag, knowledge-base, embeddings
Concepts: rag-architecture
Domain: Domain 1 — Foundation Model Integration, Data Management, and Compliance
DomainNumber: 1

A developer is building a RAG application using Amazon Bedrock Knowledge Bases. The company's documents are stored in Amazon S3 and include technical manuals averaging 200 pages each. What is the most important consideration when configuring the chunking strategy?

A. Use the largest possible chunk size to include maximum context in each retrieval
B. Choose a chunk size that balances semantic completeness of passages with the foundation model's context window limit, and configure overlap to preserve context across chunk boundaries
C. Skip chunking entirely and send full documents to the model
D. Use the smallest possible chunk size of one sentence per chunk for maximum precision

Answer: B

Hint: Consider the trade-off between too much and too little context per chunk.

Explanation: Effective chunking requires balancing semantic completeness (large enough to capture meaning) with the FM's context window constraints. Overlap between chunks ensures that important context spanning chunk boundaries is not lost during retrieval.

Why others wrong: Largest chunks may exceed context windows and dilute relevance; skipping chunking sends too much irrelevant context; single-sentence chunks lose surrounding context needed for understanding.

Trap: Thinking bigger chunks are always better — overly large chunks reduce retrieval precision and can exceed model limits.

Mnemonic: Chunk = Goldilocks zone + overlap for safety

## Q3
Type: single
Difficulty: 1
Tags: embeddings, vector-store
Concepts: vector-embeddings
Domain: Domain 1 — Foundation Model Integration, Data Management, and Compliance
DomainNumber: 1

What is the primary purpose of generating vector embeddings in a RAG pipeline?

A. To compress documents for cheaper storage in Amazon S3
B. To convert text into numerical representations that capture semantic meaning, enabling similarity-based retrieval
C. To encrypt sensitive data before storing it in the knowledge base
D. To translate documents from one language to another

Answer: B

Hint: Think about how a computer can understand the "meaning" of text for search purposes.

Explanation: Vector embeddings transform text into high-dimensional numerical vectors where semantically similar content has similar vector representations. This enables similarity search — finding relevant documents based on meaning rather than exact keyword matches.

Why others wrong: Embeddings aren't for compression or encryption; while multilingual models exist, the primary purpose of embeddings in RAG is semantic similarity search, not translation.

Trap: Confusing embeddings with encryption or compression — they are about representing meaning, not securing or shrinking data.

Mnemonic: Embeddings = meaning in numbers → similar meaning = nearby vectors

## Q4
Type: single
Difficulty: 2
Tags: bedrock, data-management, compliance
Concepts: data-residency
Domain: Domain 1 — Foundation Model Integration, Data Management, and Compliance
DomainNumber: 1

A European financial services company needs to use Amazon Bedrock while ensuring customer data remains within the EU to comply with GDPR. What should the developer configure?

A. Enable server-side encryption on all S3 buckets used by the application
B. Deploy the Bedrock application in an EU AWS Region (such as eu-west-1), ensure all data sources and vector stores are in the same Region, and verify that Bedrock API calls are made to the regional endpoint
C. Use VPN connections between the company's data center and any AWS Region
D. Sign a separate data processing agreement with each foundation model provider

Answer: B

Hint: GDPR data residency requirements are primarily addressed by keeping data within specific geographic regions.

Explanation: AWS Bedrock processes data within the selected Region. To satisfy GDPR data residency requirements, you must deploy in an EU Region and ensure all related resources (S3 buckets, vector stores, endpoints) are co-located in that Region so customer data never leaves the EU.

Why others wrong: Encryption protects data but doesn't restrict its location; VPN secures transit but data is still processed in the destination Region; DPAs are important but don't enforce data residency technically.

Trap: Thinking encryption alone satisfies GDPR — GDPR requires data to stay within certain jurisdictions, which is about Region selection, not just encryption.

Mnemonic: GDPR = Geography Dictates Processing Region

## Q5
Type: single
Difficulty: 3
Tags: rag, hybrid-search, retrieval
Concepts: hybrid-retrieval
Domain: Domain 1 — Foundation Model Integration, Data Management, and Compliance
DomainNumber: 1

A developer's RAG application retrieves irrelevant passages when users query with product SKU codes like "WX-4521-BLK," but works well for natural language queries. What is the best approach to fix this?

A. Increase the number of retrieved chunks from 5 to 50
B. Configure hybrid search that combines semantic vector search with keyword-based search, so exact-match queries like SKU codes use keyword matching while natural language queries benefit from semantic search
C. Replace the embedding model with a larger one
D. Add the SKU codes to the system prompt of the foundation model

Answer: B

Hint: Semantic search excels at meaning; keyword search excels at exact matches. What if you used both?

Explanation: SKU codes are exact identifiers that semantic search may not handle well because embeddings capture meaning, not exact string patterns. Hybrid search combines vector-based semantic search with keyword-based (lexical) search, letting the system handle both natural language and exact-match queries effectively.

Why others wrong: More chunks adds noise without fixing the core retrieval problem; a larger embedding model won't fix exact-match issues; putting SKUs in the system prompt doesn't scale and doesn't solve retrieval.

Trap: Assuming semantic search handles all query types — it struggles with codes, IDs, and exact strings that have no semantic meaning.

Mnemonic: SKU = String, use Keyword search; Natural language = use Neural (semantic) search; Both = Hybrid

## Q6
Type: single
Difficulty: 2
Tags: bedrock, model-customization, fine-tuning
Concepts: fine-tuning-vs-rag
Domain: Domain 1 — Foundation Model Integration, Data Management, and Compliance
DomainNumber: 1

A developer needs to adapt a foundation model to consistently use the company's specific JSON output format and domain-specific terminology. The terminology is stable and rarely changes. Which approach is most appropriate?

A. Use RAG with a knowledge base containing example outputs
B. Fine-tune the foundation model on a curated dataset of correctly formatted examples using the company's terminology
C. Add the JSON schema to every user prompt
D. Use a smaller model that natively outputs JSON

Answer: B

Hint: When the desired behavior is consistent and stable, embedding it into the model weights is more reliable than prompting.

Explanation: Fine-tuning is ideal when you need a model to consistently adopt a specific style, format, or terminology that doesn't change frequently. It embeds the behavior into model weights, producing more reliable outputs than repeated prompt instructions.

Why others wrong: RAG is for dynamic knowledge retrieval, not formatting behavior; adding schema to every prompt is fragile and wastes tokens; smaller models may not handle domain complexity well.

Trap: Defaulting to RAG for everything — RAG excels at injecting dynamic knowledge, not teaching the model consistent formatting behavior.

Mnemonic: Stable behavior → Fine-tune; Dynamic knowledge → RAG

## Q7
Type: single
Difficulty: 1
Tags: bedrock, inference, api
Concepts: bedrock-api
Domain: Domain 1 — Foundation Model Integration, Data Management, and Compliance
DomainNumber: 1

Which Amazon Bedrock API should a developer use to invoke a foundation model for a single text completion request?

A. CreateModelCustomizationJob
B. InvokeModel
C. CreateKnowledgeBase
D. ListFoundationModels

Answer: B

Hint: Think about the action name that means "call the model to get a response."

Explanation: The InvokeModel API is the primary endpoint for sending a prompt to a foundation model and receiving a response. It supports both text and image inputs depending on the model, and returns the model's generated output.

Why others wrong: CreateModelCustomizationJob starts a fine-tuning job; CreateKnowledgeBase sets up a RAG knowledge base; ListFoundationModels returns available models but doesn't invoke them.

Trap: Confusing model invocation with model management APIs — InvokeModel is for getting responses, the others are for setup and configuration.

Mnemonic: Invoke = "call to action" = send prompt, get response

## Q8
Type: single
Difficulty: 3
Tags: rag, metadata-filtering, retrieval
Concepts: metadata-filtering
Domain: Domain 1 — Foundation Model Integration, Data Management, and Compliance
DomainNumber: 1

A multi-tenant SaaS application uses a shared Amazon Bedrock Knowledge Base for all customers. Each customer should only be able to query their own documents. How should the developer implement this securely?

A. Create a separate knowledge base for each customer
B. Apply metadata filters on retrieval queries using customer-specific metadata tags that were added during document ingestion, ensuring each query includes a filter matching the requesting customer's tenant ID
C. Use different embedding models for each customer
D. Implement row-level security in Amazon S3

Answer: B

Hint: Think about how to partition data within a single knowledge base without duplicating infrastructure.

Explanation: Metadata filtering allows you to tag documents with tenant-specific metadata during ingestion and filter retrieval results at query time. This provides logical data isolation within a shared knowledge base, which is more cost-effective and manageable than creating separate knowledge bases per tenant.

Why others wrong: Separate knowledge bases per customer doesn't scale well and increases operational overhead; different embedding models add complexity without solving the isolation problem; S3 doesn't have row-level security, and retrieval filtering must happen at the vector store level.

Trap: Over-engineering with separate knowledge bases per tenant — metadata filtering achieves the same isolation more efficiently.

Mnemonic: Multi-tenant = Metadata tags + filter on query = logical isolation

## Q9
Type: single
Difficulty: 2
Tags: prompt-engineering, few-shot
Concepts: prompt-engineering
Domain: Domain 1 — Foundation Model Integration, Data Management, and Compliance
DomainNumber: 1

A developer wants a foundation model to classify customer support tickets into categories. The model occasionally misclassifies ambiguous tickets. What prompt engineering technique would most reliably improve classification accuracy?

A. Increase the temperature parameter to generate more diverse outputs
B. Provide few-shot examples in the prompt showing correctly classified tickets, including edge cases, along with a clear output format specification
C. Use a system prompt that says "Be more accurate"
D. Reduce the max tokens parameter to force shorter responses

Answer: B

Hint: Models learn patterns from examples — showing them what correct classification looks like helps.

Explanation: Few-shot prompting provides the model with concrete examples of correctly classified inputs, helping it learn the classification patterns. Including edge cases addresses ambiguous scenarios, and specifying the output format ensures consistent structured responses.

Why others wrong: Higher temperature increases randomness, making classification less consistent; vague instructions like "be more accurate" don't help; reducing max tokens may truncate valid responses.

Trap: Trying to improve accuracy with temperature or vague instructions — structured examples are far more effective for classification tasks.

Mnemonic: Few-shot = show, don't just tell

## Q10
Type: single
Difficulty: 2
Tags: bedrock-agents, action-groups, lambda
Concepts: bedrock-agents
Domain: Domain 1 — Foundation Model Integration, Data Management, and Compliance
DomainNumber: 1

A developer is creating a Bedrock Agent that needs to look up order status from an internal API and update shipping addresses in a database. How should the developer configure the agent's capabilities?

A. Put all the API logic in the system prompt and let the model generate API calls as text
B. Define action groups with OpenAPI schemas describing the available operations, backed by AWS Lambda functions that execute the actual API calls and database updates
C. Give the agent direct database credentials in the prompt
D. Use a single Lambda function for all operations without defining action groups

Answer: B

Hint: Bedrock Agents use action groups to define what actions they can take, with Lambda handling execution.

Explanation: Bedrock Agents use action groups defined by OpenAPI schemas to understand available operations. Each action group is backed by Lambda functions that execute the actual business logic. This separation lets the agent reason about which action to take while Lambda handles secure execution.

Why others wrong: Generating API calls as text is unreliable and insecure; exposing database credentials in prompts is a security risk; without action group definitions, the agent can't reason about which operation to invoke.

Trap: Skipping action group definitions — without them, the agent doesn't know what tools are available or how to invoke them properly.

Mnemonic: Agent = Brain (reasoning) + Action Groups (muscles) + Lambda (execution)

## Q11
Type: single
Difficulty: 3
Tags: rag, evaluation, retrieval-metrics
Concepts: rag-evaluation
Domain: Domain 1 — Foundation Model Integration, Data Management, and Compliance
DomainNumber: 1

A developer notices their RAG application sometimes generates correct answers but based on irrelevant retrieved context, and other times retrieves relevant context but generates incorrect answers. Which evaluation approach best diagnoses these separate failure modes?

A. Only measure end-to-end accuracy of final answers
B. Evaluate retrieval quality (context relevance, recall) and generation quality (faithfulness, answer correctness) independently using separate metrics, then correlate failures to identify which component needs improvement
C. Increase the number of retrieved chunks until answers improve
D. Switch to a different foundation model

Answer: B

Hint: RAG has two components — retrieval and generation — and each can fail independently.

Explanation: RAG evaluation requires separate metrics for retrieval (did we find relevant context?) and generation (did the model use the context correctly?). Measuring both independently reveals whether poor answers stem from bad retrieval, bad generation, or both — enabling targeted fixes.

Why others wrong: End-to-end metrics hide which component failed; more chunks may add noise; switching models doesn't fix retrieval issues.

Trap: Only measuring final answer quality — this hides whether the retrieval or generation step is failing, making targeted improvement impossible.

Mnemonic: RAG = Retrieval + Generation; evaluate each separately to find the weak link

## Q12
Type: single
Difficulty: 1
Tags: bedrock, streaming, api
Concepts: streaming-response
Domain: Domain 1 — Foundation Model Integration, Data Management, and Compliance
DomainNumber: 1

A developer wants to display foundation model responses to users in real-time as they are generated, similar to a typing effect. Which Bedrock API should they use?

A. InvokeModel with a polling loop
B. InvokeModelWithResponseStream
C. BatchInvokeModel
D. GetModelInvocationLogging

Answer: B

Hint: The API name literally describes what it does — invoke with a response stream.

Explanation: InvokeModelWithResponseStream returns the model's response as a stream of chunks, allowing the application to display tokens to the user as they are generated. This creates a more responsive user experience compared to waiting for the entire response.

Why others wrong: InvokeModel returns the complete response at once; polling would add unnecessary latency and complexity; BatchInvokeModel is for batch processing, not real-time; GetModelInvocationLogging is for audit logs.

Trap: Using InvokeModel and simulating streaming on the frontend — this adds latency because the full response must complete before anything is displayed.

Mnemonic: Stream = show as you go; InvokeModelWithResponseStream = type-as-you-think

## Q13
Type: single
Difficulty: 2
Tags: converse-api, multi-turn, tool-use
Concepts: converse-api
Domain: Domain 1 — Foundation Model Integration, Data Management, and Compliance
DomainNumber: 1

A developer is building a multi-turn conversational application that needs to work with different foundation models on Bedrock without rewriting the integration code for each model. Which API should they use?

A. InvokeModel with model-specific request formats
B. The Converse API, which provides a unified interface for multi-turn conversations across different foundation models
C. Amazon Lex for conversation management
D. A custom abstraction layer that translates between model formats

Answer: B

Hint: Amazon Bedrock offers an API specifically designed for model-agnostic conversations.

Explanation: The Converse API provides a consistent, model-agnostic interface for multi-turn conversations on Bedrock. It handles message formatting, conversation history, and tool use uniformly across models, eliminating the need to write model-specific integration code.

Why others wrong: InvokeModel requires model-specific request/response formats; Amazon Lex is a separate service for building chatbots, not for direct FM interaction; a custom abstraction layer is unnecessary when the Converse API already provides this.

Trap: Building a custom translation layer when Bedrock already provides the Converse API — it's a common case of reinventing the wheel.

Mnemonic: Converse = one API, many models, consistent conversations

## Q14
Type: single
Difficulty: 3
Tags: knowledge-base, opensearch, indexing
Concepts: vector-store-selection
Domain: Domain 1 — Foundation Model Integration, Data Management, and Compliance
DomainNumber: 1

A company's RAG application needs to store 50 million document embeddings with sub-second retrieval latency, support metadata filtering, and handle frequent document updates. Which vector store configuration for Amazon Bedrock Knowledge Bases best meets these requirements?

A. Amazon OpenSearch Serverless with vector search collection, using HNSW indexing algorithm and metadata fields mapped to filterable attributes
B. Amazon S3 with client-side vector similarity computation
C. Amazon DynamoDB with a sort key for vector similarity
D. Amazon RDS PostgreSQL with pgvector using brute-force search

Answer: A

Hint: At 50 million vectors, you need a purpose-built vector search engine with efficient approximate nearest neighbor algorithms.

Explanation: OpenSearch Serverless vector collections support HNSW (Hierarchical Navigable Small World) indexing for efficient approximate nearest neighbor search at scale. It handles metadata filtering natively, scales to millions of vectors with sub-second latency, and supports real-time document updates.

Why others wrong: S3 has no vector search capability; DynamoDB doesn't support vector similarity natively; pgvector with brute-force search won't meet latency requirements at 50M vectors.

Trap: Assuming any database can handle vector search at scale — at 50M vectors, you need specialized indexing algorithms like HNSW, not brute-force linear scans.

Mnemonic: 50M vectors + fast + filters = OpenSearch Serverless + HNSW

## Q15
Type: single
Difficulty: 2
Tags: bedrock, model-access, provisioned-throughput
Concepts: provisioned-throughput
Domain: Domain 1 — Foundation Model Integration, Data Management, and Compliance
DomainNumber: 1

A production application using Amazon Bedrock experiences throttling during peak hours, causing increased latency and failed requests. The application needs consistent, predictable performance. What should the developer implement?

A. Add retry logic with exponential backoff and hope traffic decreases
B. Purchase Provisioned Throughput for the foundation model to guarantee a dedicated number of model units, ensuring consistent performance regardless of traffic
C. Switch to a smaller, less popular model
D. Cache all possible responses in DynamoDB to avoid calling Bedrock

Answer: B

Hint: On-demand has shared capacity limits; there's a way to reserve dedicated capacity.

Explanation: Provisioned Throughput in Bedrock reserves dedicated model processing capacity (measured in model units), guaranteeing consistent inference performance. This eliminates throttling from shared on-demand capacity during peak usage and provides predictable latency for production workloads.

Why others wrong: Retries add latency and don't guarantee throughput; switching models may degrade quality; caching can't cover open-ended generative responses.

Trap: Relying solely on retry logic for a production application — retries handle transient errors but don't solve sustained capacity issues.

Mnemonic: Provisioned = reserved seat; On-demand = standby line

## Q16
Type: single
Difficulty: 1
Tags: guardrails, content-filtering
Concepts: bedrock-guardrails
Domain: Domain 1 — Foundation Model Integration, Data Management, and Compliance
DomainNumber: 1

What is the primary purpose of Amazon Bedrock Guardrails?

A. To increase the speed of model inference
B. To implement safeguards that filter harmful content, block sensitive information, and enforce topic boundaries on foundation model inputs and outputs
C. To reduce the cost of API calls
D. To automatically fine-tune models based on user feedback

Answer: B

Hint: Think about safety controls that sit between users and the model.

Explanation: Bedrock Guardrails act as configurable safety filters applied to model inputs and outputs. They can block harmful content categories, redact personally identifiable information (PII), enforce denied topics, and apply word filters — providing governance over what the model processes and generates.

Why others wrong: Guardrails add a small processing overhead (don't speed up inference); they're a safety feature, not a cost optimization tool; they filter content, not retrain models.

Trap: Thinking guardrails replace responsible prompt engineering — they're an additional safety layer, not a substitute for well-designed prompts.

Mnemonic: Guardrails = safety barriers on the AI highway

## Q17
Type: single
Difficulty: 2
Tags: lambda, bedrock, integration
Concepts: lambda-bedrock-integration
Domain: Domain 2 — Implementation and Integration
DomainNumber: 2

A developer is implementing a serverless application that uses AWS Lambda to call Amazon Bedrock. The Lambda function occasionally times out when invoking large language models. What is the most likely cause and fix?

A. The Lambda function's IAM role doesn't have Bedrock permissions
B. The Lambda function's timeout is set too low for the model's inference time — increase the timeout and consider using streaming responses to start processing output before generation completes
C. The Lambda function's memory is too low
D. The VPC configuration is blocking Bedrock access

Answer: B

Hint: Foundation models can take several seconds to generate responses, and Lambda has a configurable timeout.

Explanation: LLM inference can take 10-60+ seconds depending on prompt length, model size, and output length. Lambda's default timeout is 3 seconds, which is insufficient. Increasing the timeout (up to 15 minutes) and using streaming responses allows processing to begin before the full response is generated.

Why others wrong: Missing IAM permissions would cause access denied errors, not timeouts; memory affects compute power but the primary issue is timeout duration; VPC issues cause connection errors, not timeouts on successful connections.

Trap: Assuming Lambda timeouts are always due to code issues — with LLMs, inference time is the bottleneck, not code execution.

Mnemonic: LLM = Long-running Language Model → Lambda needs longer timeout

## Q18
Type: single
Difficulty: 1
Tags: api-gateway, bedrock, architecture
Concepts: api-integration
Domain: Domain 2 — Implementation and Integration
DomainNumber: 2

A developer wants to expose their Bedrock-powered chatbot as a REST API for a mobile application. Which AWS architecture is most appropriate?

A. Direct Bedrock API calls from the mobile app using embedded AWS credentials
B. Amazon API Gateway fronting an AWS Lambda function that invokes Bedrock, with API keys or Cognito authentication for the mobile app
C. An EC2 instance running a proxy to Bedrock
D. AWS AppSync with a direct Bedrock data source

Answer: B

Hint: Never embed AWS credentials in client applications — use a serverless backend as a proxy.

Explanation: API Gateway + Lambda provides a secure, scalable serverless architecture. API Gateway handles authentication, rate limiting, and request routing. Lambda invokes Bedrock server-side, keeping AWS credentials secure. Cognito or API keys authenticate mobile clients.

Why others wrong: Embedding credentials in mobile apps is a critical security vulnerability; an EC2 proxy adds unnecessary infrastructure management; AppSync is for GraphQL and doesn't have a native Bedrock data source.

Trap: Embedding AWS credentials in the mobile app for "simplicity" — this is a serious security anti-pattern that exposes your AWS account.

Mnemonic: Mobile → API Gateway → Lambda → Bedrock (credentials stay server-side)

## Q19
Type: single
Difficulty: 2
Tags: step-functions, orchestration, bedrock
Concepts: workflow-orchestration
Domain: Domain 2 — Implementation and Integration
DomainNumber: 2

A developer needs to build a multi-step document processing pipeline: extract text from a PDF, summarize it, translate the summary, then store results. Some steps may fail and need retries. Which AWS service best orchestrates this workflow?

A. Amazon SQS with separate Lambda consumers for each step
B. AWS Step Functions with optimized integrations for Bedrock, using retry and error handling configurations for each state
C. A single Lambda function that calls all steps sequentially
D. Amazon EventBridge with scheduled rules

Answer: B

Hint: This is a multi-step workflow with error handling needs — there's an AWS service designed specifically for this.

Explanation: Step Functions provides visual workflow orchestration with built-in retry logic, error handling, and Bedrock optimized integrations. Each processing step becomes a state in the workflow, with configurable retries and fallback paths. This is more maintainable and observable than custom orchestration code.

Why others wrong: SQS requires custom orchestration logic for step ordering; a single Lambda risks timeout with long-running chains and has no built-in retry per step; EventBridge is event-driven routing, not sequential workflow orchestration.

Trap: Putting all steps in one Lambda function — this creates a monolith that's hard to debug, has no per-step retry, and may timeout for long pipelines.

Mnemonic: Multi-step + retries + visibility = Step Functions

## Q20
Type: single
Difficulty: 3
Tags: bedrock-agents, return-of-control, human-in-the-loop
Concepts: agent-return-of-control
Domain: Domain 2 — Implementation and Integration
DomainNumber: 2

A Bedrock Agent is designed to process refund requests. Company policy requires a human supervisor to approve refunds over $500 before the agent executes them. How should the developer implement this requirement?

A. Add a condition in the system prompt telling the agent not to process refunds over $500
B. Configure the action group with Return of Control (ROC) enabled, so the agent returns the planned action to the application when a high-value refund is detected, allowing the application to implement a human approval step before continuing execution
C. Use a separate Lambda function that checks refund amounts after the agent processes them
D. Set a maximum token limit to prevent the agent from generating refund actions

Answer: B

Hint: Bedrock Agents support a mechanism where they can pause and hand control back to the calling application.

Explanation: Return of Control (ROC) allows a Bedrock Agent to pause its execution and return the planned action to the calling application. The application can then implement human approval workflows, and once approved, resume the agent's execution. This is the proper pattern for human-in-the-loop scenarios.

Why others wrong: Prompt-based restrictions are unreliable and can be bypassed; post-execution checking means the refund was already processed; token limits have nothing to do with action execution control.

Trap: Relying on prompt instructions to enforce business rules — prompts are suggestions, not security controls. Use Return of Control for enforceable business logic.

Mnemonic: ROC = Return Of Control = agent pauses, human decides, then agent resumes

## Q21
Type: single
Difficulty: 2
Tags: langchain, bedrock, framework
Concepts: framework-integration
Domain: Domain 2 — Implementation and Integration
DomainNumber: 2

A developer is using LangChain to build a conversational RAG application with Amazon Bedrock. They need to maintain conversation history across multiple turns. Which approach correctly integrates conversation memory?

A. Store the entire conversation in the system prompt and resend it with every request
B. Use LangChain's ConversationBufferMemory or ConversationSummaryMemory with the Bedrock LLM, which automatically manages conversation history and injects it into prompts
C. Store conversation in a text file and read it before each request
D. Rely on the foundation model to remember previous turns natively

Answer: B

Hint: LangChain provides memory abstractions specifically designed for managing conversation context.

Explanation: LangChain's memory modules (ConversationBufferMemory, ConversationSummaryMemory, etc.) handle conversation history management. They automatically inject relevant history into prompts when calling the Bedrock LLM, managing token limits by summarizing or truncating as needed.

Why others wrong: Manually managing system prompts doesn't handle token limits or summarization; text file storage requires custom integration code; foundation models are stateless and don't remember across API calls.

Trap: Assuming foundation models remember previous turns — each API call is stateless, so conversation history must be explicitly managed by the application.

Mnemonic: LLM = stateLess Language Model → memory must be external

## Q22
Type: single
Difficulty: 2
Tags: sns, sqs, async-invocation
Concepts: async-processing
Domain: Domain 2 — Implementation and Integration
DomainNumber: 2

A developer's Bedrock application needs to process large documents asynchronously and notify users when processing is complete. The processing takes 3-5 minutes per document. What architecture best handles this?

A. Use a synchronous API Gateway endpoint that waits for processing to complete
B. Accept the request via API Gateway, place a message on an SQS queue, process with a Lambda function that invokes Bedrock, and send a completion notification via SNS or WebSocket
C. Use API Gateway with a 5-minute timeout
D. Spin up an EC2 instance per document for parallel processing

Answer: B

Hint: Long-running tasks should be processed asynchronously to avoid blocking the client.

Explanation: This pattern decouples request acceptance from processing. SQS provides reliable message queuing, Lambda processes documents asynchronously with Bedrock, and SNS (or WebSockets) notifies users upon completion. This handles variable processing times without blocking clients.

Why others wrong: Synchronous endpoints with 3-5 minute waits provide poor UX and risk timeouts; API Gateway maximum timeout is 29 seconds; EC2 per document is wasteful and complex to manage.

Trap: Trying to make synchronous endpoints work for long-running tasks — API Gateway has a 29-second timeout, so you must go async.

Mnemonic: Long task = Queue it (SQS) + Process it (Lambda) + Notify them (SNS)

## Q23
Type: single
Difficulty: 3
Tags: bedrock-agents, chain-of-thought, orchestration
Concepts: agent-orchestration
Domain: Domain 2 — Implementation and Integration
DomainNumber: 2

A Bedrock Agent with multiple action groups is selecting the wrong action group for certain queries, leading to incorrect tool invocations. The agent's instructions are well-written. What should the developer do to diagnose and fix this?

A. Remove all action groups except the most commonly used one
B. Enable the agent's trace output to examine the chain-of-thought reasoning, review the action group descriptions for ambiguity, add clearer differentiation in descriptions, and consider adding few-shot examples in the agent instructions
C. Increase the temperature parameter to get more varied responses
D. Switch to a different foundation model

Answer: B

Hint: Bedrock Agents expose their reasoning process through traces — use them to understand why the wrong tool was selected.

Explanation: Agent traces reveal the step-by-step reasoning process, showing why a particular action group was selected. Often, incorrect selection stems from ambiguous or overlapping action group descriptions. Reviewing traces identifies the confusion point, and clarifying descriptions with distinct use cases resolves it.

Why others wrong: Removing action groups reduces capability; higher temperature increases randomness in tool selection; switching models without understanding the root cause may not fix description ambiguity.

Trap: Guessing at the problem instead of examining traces — the agent's reasoning is transparent through the trace API, so always start there.

Mnemonic: Wrong tool? Check the Trace → fix the Description → test again

## Q24
Type: single
Difficulty: 1
Tags: s3, data-source, knowledge-base
Concepts: data-source-configuration
Domain: Domain 2 — Implementation and Integration
DomainNumber: 2

Which data sources can be used with Amazon Bedrock Knowledge Bases for RAG? (Select the best answer.)

A. Only Amazon S3
B. Amazon S3, Confluence, SharePoint, Salesforce, and web crawler, among other supported connectors
C. Only relational databases like RDS and DynamoDB
D. Only data stored in Amazon Redshift

Answer: B

Hint: Bedrock Knowledge Bases support multiple data source types beyond just S3.

Explanation: Amazon Bedrock Knowledge Bases supports multiple data source connectors including S3 (for documents), Confluence (for wikis), SharePoint (for enterprise documents), Salesforce (for CRM data), and web crawlers. This enables RAG applications to access knowledge from diverse enterprise sources.

Why others wrong: S3 is supported but not the only option; relational databases and Redshift are not primary document sources for Knowledge Bases (though data could be exported to S3).

Trap: Assuming Knowledge Bases only work with S3 — while S3 is the most common source, enterprise connectors extend RAG to many data repositories.

Mnemonic: Knowledge Bases = S3 + Confluence + SharePoint + Salesforce + Web crawler + more

## Q25
Type: single
Difficulty: 2
Tags: dynamodb, session, conversation
Concepts: session-management
Domain: Domain 2 — Implementation and Integration
DomainNumber: 2

A developer is building a multi-user chatbot on Bedrock where each user needs a persistent conversation history across sessions. Which approach is most scalable for storing conversation histories?

A. Store conversations in Lambda environment variables
B. Use Amazon DynamoDB with the user ID as the partition key and session/timestamp as the sort key, storing conversation messages as items with a TTL for automatic cleanup of old conversations
C. Store all conversations in a single JSON file on S3
D. Keep conversations in Amazon ElastiCache only

Answer: B

Hint: You need persistent, per-user storage with fast reads and automatic cleanup — think serverless database.

Explanation: DynamoDB provides fast, scalable per-user storage with a natural key structure (user ID partition, timestamp sort). TTL automatically expires old conversations, preventing unbounded storage growth. This pattern is widely used for serverless chat applications.

Why others wrong: Lambda env vars are limited in size and ephemeral; a single S3 file creates a bottleneck and doesn't support concurrent access well; ElastiCache is volatile memory and loses data on eviction or restart.

Trap: Using in-memory stores like ElastiCache as the primary store — they lose data on restart. Use them as a cache in front of DynamoDB, not as a replacement.

Mnemonic: DynamoDB = Durable, Dynamic, per-user conversation storage with TTL cleanup

## Q26
Type: single
Difficulty: 3
Tags: bedrock, parallel-invocation, performance
Concepts: parallel-processing
Domain: Domain 2 — Implementation and Integration
DomainNumber: 2

A developer needs to generate summaries for 10,000 articles using Bedrock. Sequential processing would take too long. What is the most efficient architecture?

A. Use a single Lambda function with a for loop calling InvokeModel 10,000 times
B. Use Step Functions Distributed Map to fan out processing, with each branch invoking a Lambda function that calls Bedrock, and configure concurrency limits to avoid throttling while maximizing throughput
C. Use a single EC2 instance with multithreading
D. Submit all 10,000 articles in a single Bedrock API call

Answer: B

Hint: Processing 10,000 items efficiently requires controlled parallelism with concurrency management.

Explanation: Step Functions Distributed Map enables massively parallel processing by fanning out work items across Lambda invocations. Concurrency limits prevent Bedrock throttling while maximizing throughput. This approach is serverless, scalable, and provides built-in monitoring and error handling per item.

Why others wrong: Sequential Lambda processing is too slow and risks timeout; a single EC2 instance can't match the parallelism; Bedrock API calls process one prompt at a time (batch APIs have limits).

Trap: Parallelizing without concurrency control — unlimited concurrent Bedrock calls will hit throttling limits, causing failures and retries that slow everything down.

Mnemonic: 10K items = Distributed Map + concurrency limits = controlled parallelism

## Q27
Type: single
Difficulty: 2
Tags: kms, encryption, bedrock
Concepts: encryption-at-rest
Domain: Domain 2 — Implementation and Integration
DomainNumber: 2

A developer needs to encrypt the data used for model customization in Amazon Bedrock with a customer-managed key. What AWS service should they use?

A. AWS Secrets Manager
B. AWS Key Management Service (KMS) with a customer-managed key (CMK), configured in the Bedrock model customization job settings
C. AWS Certificate Manager
D. Amazon Macie

Answer: B

Hint: Customer-managed encryption keys are managed through a specific AWS service that integrates with most AWS services.

Explanation: AWS KMS customer-managed keys (CMKs) provide customer-controlled encryption for Bedrock resources including model customization data, knowledge bases, and agent configurations. You specify the KMS key ARN when creating Bedrock resources to encrypt data at rest with your own key.

Why others wrong: Secrets Manager stores secrets, not encryption keys for data at rest; Certificate Manager manages SSL/TLS certificates; Macie is for sensitive data discovery, not encryption.

Trap: Confusing Secrets Manager (for storing secrets like API keys) with KMS (for managing encryption keys) — they serve different purposes.

Mnemonic: KMS = Key Management Service = your encryption keys, your control

## Q28
Type: single
Difficulty: 2
Tags: cloudwatch, logging, monitoring
Concepts: model-invocation-logging
Domain: Domain 2 — Implementation and Integration
DomainNumber: 2

A developer needs to log all prompts and responses sent to Amazon Bedrock for auditing and debugging purposes. How should they configure this?

A. Implement custom logging in each Lambda function that calls Bedrock
B. Enable Model Invocation Logging in Amazon Bedrock settings, which sends input/output data to Amazon CloudWatch Logs and optionally to an S3 bucket
C. Use AWS CloudTrail, which automatically logs all API request and response bodies
D. Set up a proxy layer that intercepts and logs all traffic

Answer: B

Hint: Bedrock has a built-in feature for logging model inputs and outputs — no custom code needed.

Explanation: Model Invocation Logging is a native Bedrock feature that captures all prompts, model responses, and metadata. Logs can be sent to CloudWatch Logs for real-time analysis or S3 for long-term archival. CloudTrail logs API calls but not the request/response bodies.

Why others wrong: Custom logging is fragile and may miss calls; CloudTrail captures API metadata (who called what) but not prompt/response content; a proxy layer adds complexity and latency.

Trap: Assuming CloudTrail captures prompt content — it only logs the API call metadata (caller, timestamp, parameters), not the actual model inputs and outputs.

Mnemonic: CloudTrail = who called; Model Invocation Logging = what was said

## Q29
Type: single
Difficulty: 1
Tags: iam, security, least-privilege
Concepts: iam-bedrock
Domain: Domain 3 — AI Safety, Security, and Governance
DomainNumber: 3

A developer needs to grant a Lambda function permission to invoke a specific foundation model on Bedrock. Which IAM policy follows the principle of least privilege?

A. Attach the AdministratorAccess managed policy to the Lambda execution role
B. Create a policy that allows bedrock:InvokeModel on the specific model ARN (e.g., arn:aws:bedrock:us-east-1::foundation-model/anthropic.claude-3-sonnet)
C. Allow bedrock:* on all resources
D. Use the Lambda function's default execution role without any Bedrock permissions

Answer: B

Hint: Least privilege means granting only the specific permissions needed for the specific resources required.

Explanation: The principle of least privilege requires granting only the minimum permissions needed. Specifying bedrock:InvokeModel on a specific model ARN ensures the Lambda function can only invoke that particular model, not create resources, access other models, or perform administrative actions.

Why others wrong: AdministratorAccess grants full AWS account access; bedrock:* allows all Bedrock operations on all models; no permissions means the function can't call Bedrock at all.

Trap: Using wildcard permissions (bedrock:*) for convenience — this violates least privilege and gives unnecessary access to model management, guardrails, and other Bedrock features.

Mnemonic: Least privilege = specific action + specific resource ARN

## Q30
Type: single
Difficulty: 2
Tags: guardrails, pii, data-protection
Concepts: pii-redaction
Domain: Domain 3 — AI Safety, Security, and Governance
DomainNumber: 3

A healthcare application using Bedrock must ensure that patient names, dates of birth, and medical record numbers are never included in model responses. How should the developer implement this?

A. Add instructions in the system prompt telling the model to never output PII
B. Configure Bedrock Guardrails with sensitive information filters that detect and redact PII patterns including names, dates, and ID numbers from both model inputs and outputs
C. Post-process all model responses with a custom regex filter
D. Use a smaller model that generates less detailed responses

Answer: B

Hint: Bedrock has built-in PII detection and redaction capabilities through Guardrails.

Explanation: Bedrock Guardrails include sensitive information filters that can detect and automatically redact various PII types (names, dates, IDs, etc.) from model inputs and outputs. This provides a reliable, configurable safety layer without relying on prompt-based instructions or custom code.

Why others wrong: Prompt instructions are not reliable for safety-critical PII filtering; custom regex may miss variations and requires ongoing maintenance; smaller models can still output PII.

Trap: Trusting prompt instructions to handle PII — models can still include PII despite instructions, especially in complex scenarios. Guardrails provide enforcement, not suggestions.

Mnemonic: PII protection = Guardrails (enforcement) > prompts (suggestions)

## Q31
Type: single
Difficulty: 3
Tags: prompt-injection, security, input-validation
Concepts: prompt-injection-defense
Domain: Domain 3 — AI Safety, Security, and Governance
DomainNumber: 3

A developer's Bedrock application accepts user input that is inserted into a prompt template. A security review identifies that users could potentially inject instructions that override the system prompt. Which combination of defenses best mitigates prompt injection attacks?

A. Input length limits only
B. Implement multiple layers: Bedrock Guardrails to filter malicious patterns, input validation to sanitize user inputs, clear separation between system instructions and user input in the prompt structure, and output validation to detect when the model deviates from expected behavior
C. Use a different foundation model that is immune to prompt injection
D. Encrypt the system prompt so users can't see it

Answer: B

Hint: Prompt injection defense requires multiple layers — no single technique is sufficient.

Explanation: Prompt injection is a class of attacks where user input manipulates model behavior. Defense requires depth: Guardrails filter known attack patterns, input validation sanitizes inputs, structured prompt templates separate trusted and untrusted content, and output validation catches unexpected model behavior. No single layer is sufficient.

Why others wrong: Length limits alone don't prevent injection; no model is immune to all prompt injection; hiding the system prompt doesn't prevent injection, as the attack is in the user input.

Trap: Believing any single defense is sufficient — prompt injection requires defense in depth because each layer can be bypassed individually.

Mnemonic: Prompt injection defense = layers like an onion (validate input + Guardrails + separation + validate output)

## Q32
Type: single
Difficulty: 2
Tags: vpc, privatelink, network-security
Concepts: vpc-endpoint
Domain: Domain 3 — AI Safety, Security, and Governance
DomainNumber: 3

A company's security policy requires that all traffic to Amazon Bedrock must stay within the AWS network and never traverse the public internet. How should the developer configure network access?

A. Use a NAT Gateway to route Bedrock traffic through the VPC
B. Create a VPC Interface Endpoint (AWS PrivateLink) for Amazon Bedrock, which routes API traffic through the AWS private network without traversing the public internet
C. Use AWS Direct Connect to create a dedicated connection to Bedrock
D. Configure a security group to block public internet access

Answer: B

Hint: AWS PrivateLink creates private connections between VPCs and AWS services.

Explanation: VPC Interface Endpoints powered by AWS PrivateLink create a private connection between your VPC and Bedrock. API traffic flows through the AWS internal network, never touching the public internet. This satisfies security requirements for private connectivity to AWS services.

Why others wrong: NAT Gateway still routes through the internet; Direct Connect is for on-premises to AWS connectivity, not for VPC-to-service; security groups control access but don't change the network path.

Trap: Assuming NAT Gateway provides private connectivity — NAT Gateway enables internet access for private subnets, meaning traffic still goes through the public internet.

Mnemonic: PrivateLink = Private path between VPC and AWS services

## Q33
Type: single
Difficulty: 1
Tags: responsible-ai, bias, fairness
Concepts: responsible-ai
Domain: Domain 3 — AI Safety, Security, and Governance
DomainNumber: 3

A developer is building a resume screening application using a foundation model. What is the primary responsible AI concern with this use case?

A. The model might generate responses too slowly
B. The model could perpetuate or amplify biases present in its training data, leading to unfair discrimination against candidates based on protected characteristics like gender, race, or age
C. The model might use too many tokens per resume
D. The model could generate responses in the wrong language

Answer: B

Hint: Think about the societal impact when AI makes decisions that affect people's opportunities.

Explanation: Foundation models trained on historical data may encode biases present in that data. In resume screening, this could lead to systematic discrimination against certain demographic groups. This is a high-stakes application requiring careful bias testing, monitoring, and human oversight.

Why others wrong: Speed and token usage are operational concerns, not ethical ones; language issues are localization problems, not responsible AI concerns.

Trap: Treating AI bias as a theoretical concern — in hiring, biased AI can cause real harm and legal liability.

Mnemonic: Historical data biases → AI amplifies them → real-world discrimination

## Q34
Type: single
Difficulty: 2
Tags: cloudtrail, audit, compliance
Concepts: audit-logging
Domain: Domain 3 — AI Safety, Security, and Governance
DomainNumber: 3

An auditor needs to know which IAM users and roles have been invoking Amazon Bedrock models, when they made calls, and from which IP addresses. Which AWS service provides this information?

A. Amazon CloudWatch Metrics
B. AWS CloudTrail, which logs all Bedrock API calls with details including the caller identity, timestamp, source IP, and request parameters
C. Amazon Bedrock Model Invocation Logging
D. AWS Config

Answer: B

Hint: There's an AWS service specifically designed to audit who did what, when, and from where across all AWS services.

Explanation: AWS CloudTrail provides a complete audit trail of all API calls made to AWS services including Bedrock. Each log entry includes the IAM identity, timestamp, source IP, and request details. This is the primary service for security auditing and compliance.

Why others wrong: CloudWatch Metrics shows aggregated performance data, not individual API calls; Model Invocation Logging captures prompt/response content, not caller identity; AWS Config tracks resource configuration changes, not API calls.

Trap: Confusing CloudTrail (who called what) with Model Invocation Logging (what was said) — auditors typically need the former for identity and access auditing.

Mnemonic: CloudTrail = detective trail → who, when, where, what API

## Q35
Type: single
Difficulty: 3
Tags: model-access, cross-account, organizations
Concepts: cross-account-access
Domain: Domain 3 — AI Safety, Security, and Governance
DomainNumber: 3

A company has separate AWS accounts for development, staging, and production. They want to ensure that only the production account can access a custom fine-tuned model, while development and staging accounts can only use base foundation models. How should this be implemented?

A. Use the same AWS credentials across all accounts
B. Implement Service Control Policies (SCPs) in AWS Organizations that restrict bedrock:InvokeModel to base model ARNs in dev/staging accounts, while allowing custom model access only in the production account's OU
C. Manually monitor API calls and revoke access if a non-production account uses the custom model
D. Store the custom model in a private S3 bucket accessible only from the production VPC

Answer: B

Hint: AWS Organizations provides centralized governance policies that can restrict services and resources across accounts.

Explanation: Service Control Policies (SCPs) in AWS Organizations provide preventive guardrails across accounts. By restricting custom model ARNs in dev/staging OUs while allowing them in the production OU, you enforce model access boundaries centrally. SCPs are evaluated before IAM policies, making them an effective governance tool.

Why others wrong: Sharing credentials across accounts is a security anti-pattern; manual monitoring is reactive, not preventive; custom models aren't stored in S3, they're managed by Bedrock.

Trap: Relying on IAM policies alone — IAM policies can be modified by account admins. SCPs provide organization-level controls that account admins can't override.

Mnemonic: SCP = Super Control Policy = organization-level access boundaries

## Q36
Type: single
Difficulty: 2
Tags: guardrails, denied-topics, content-policy
Concepts: topic-filtering
Domain: Domain 3 — AI Safety, Security, and Governance
DomainNumber: 3

A legal services chatbot must never provide specific legal advice, only general legal information. How should the developer configure this using Bedrock Guardrails?

A. Add "Do not give legal advice" to the system prompt
B. Configure denied topics in Bedrock Guardrails with topic definitions describing specific legal advice patterns (e.g., "recommending specific legal actions," "interpreting laws for specific cases"), with sample phrases that trigger the filter
C. Limit the model's response length to prevent detailed advice
D. Only use a model that was not trained on legal data

Answer: B

Hint: Bedrock Guardrails have a feature specifically for blocking conversations about certain topics.

Explanation: Denied topics in Guardrails let you define topic categories that the model should refuse to engage with. By defining "specific legal advice" as a denied topic with representative sample phrases, the guardrail actively blocks the model from providing case-specific legal recommendations while still allowing general legal information.

Why others wrong: System prompt instructions are not reliably enforced; response length doesn't determine whether content is advice vs. information; all general-purpose models have some legal knowledge.

Trap: Relying on system prompts for compliance-critical restrictions — Guardrails provide enforceable topic blocking, while prompts are best-effort.

Mnemonic: Denied topics = hard boundary; system prompt = soft suggestion

## Q37
Type: single
Difficulty: 1
Tags: data-privacy, model-training
Concepts: data-privacy
Domain: Domain 3 — AI Safety, Security, and Governance
DomainNumber: 3

A customer is concerned that their data sent to Amazon Bedrock will be used to train foundation models. What is AWS's policy on this?

A. All customer data is used to improve foundation models by default
B. AWS does not use customer inputs or outputs from Amazon Bedrock to train AWS or third-party models; customer data remains private and is not shared with model providers
C. Data is used for training unless the customer opts out
D. Only anonymized data is used for training

Answer: B

Hint: AWS has a clear commitment regarding customer data privacy with Bedrock.

Explanation: AWS explicitly states that customer data processed through Amazon Bedrock is not used to train or improve foundation models — neither AWS's own nor third-party models. Customer content stays private and within the customer's control, which is a key differentiator for enterprise adoption.

Why others wrong: AWS does not use Bedrock customer data for training by default or otherwise; there is no opt-out needed because data is never used; the policy is not about anonymization but about complete non-use of customer data for training.

Trap: Applying concerns about consumer AI products (which may use data for training) to AWS enterprise services — AWS has different, stronger data privacy commitments.

Mnemonic: Your data, your control — Bedrock never trains on customer data

## Q38
Type: single
Difficulty: 2
Tags: security, secrets-manager, api-keys
Concepts: secrets-management
Domain: Domain 3 — AI Safety, Security, and Governance
DomainNumber: 3

A Bedrock Agent's action group needs to call a third-party API that requires an API key. Where should the developer store this API key?

A. Hardcode it in the Lambda function code
B. Store it in AWS Secrets Manager and retrieve it at runtime in the Lambda function, with the Lambda execution role having permission to access only that specific secret
C. Pass it as a Lambda environment variable in plaintext
D. Store it in the action group's OpenAPI schema

Answer: B

Hint: Sensitive credentials should never be hardcoded or stored in plaintext — use a dedicated secrets management service.

Explanation: AWS Secrets Manager provides encrypted storage for sensitive credentials with fine-grained IAM access control, automatic rotation capabilities, and audit logging. The Lambda function retrieves the secret at runtime, and the execution role limits access to only the required secret.

Why others wrong: Hardcoding secrets in code exposes them in version control; plaintext environment variables are visible in the Lambda console and logs; OpenAPI schemas define API structure, not credentials.

Trap: Using Lambda environment variables for secrets — while convenient, they're stored in plaintext and visible to anyone with Lambda console access.

Mnemonic: Secrets Manager = vault for credentials; environment variables = sticky note on monitor

## Q39
Type: single
Difficulty: 1
Tags: cost-optimization, model-selection
Concepts: cost-management
Domain: Domain 4 — Operational Efficiency and Optimization
DomainNumber: 4

A developer's Bedrock application uses a large, expensive foundation model for all requests, including simple ones like "What are your business hours?" What is the most effective cost optimization strategy?

A. Reduce the quality of all responses to save tokens
B. Implement intelligent routing that sends simple queries to a smaller, cheaper model and complex queries to the larger model, optimizing cost while maintaining quality where it matters
C. Cache all possible responses and never call Bedrock
D. Set a very low max_tokens limit for all responses

Answer: B

Hint: Not all queries need the same model — match model capability to query complexity.

Explanation: Intelligent model routing analyzes incoming queries and routes them to appropriately sized models. Simple factual queries can be handled by cheaper, smaller models with equal quality, while complex reasoning tasks benefit from larger models. This can reduce costs by 50-80% for mixed workloads.

Why others wrong: Reducing quality degrades user experience uniformly; caching can't handle all possible queries; low token limits truncate legitimate responses.

Trap: Using the most capable model for everything — it's like using a semi-truck for grocery shopping. Match the vehicle to the journey.

Mnemonic: Smart routing = right model for the right job = save money without losing quality

## Q40
Type: single
Difficulty: 2
Tags: caching, prompt-caching, latency
Concepts: prompt-caching
Domain: Domain 4 — Operational Efficiency and Optimization
DomainNumber: 4

A RAG application prepends a large, static context document (8,000 tokens) to every query. This increases both cost and latency. How can the developer optimize this?

A. Remove the context document to reduce costs
B. Use Amazon Bedrock prompt caching to cache the static context prefix, so subsequent requests that share the same prefix only process the new, variable portion — reducing both latency and cost
C. Compress the context document using zip before sending it
D. Split the document across multiple smaller API calls

Answer: B

Hint: If the same large text prefix is sent with every request, there's a feature to avoid reprocessing it each time.

Explanation: Bedrock prompt caching stores processed static prompt prefixes so they don't need to be re-encoded for each request. When the same prefix is reused, only the new variable portion is processed, significantly reducing latency (by avoiding re-encoding) and cost (cached tokens are cheaper).

Why others wrong: Removing context defeats the purpose of RAG; models don't accept compressed input; splitting into multiple calls increases complexity and doesn't save total tokens.

Trap: Not realizing that sending the same 8,000-token prefix repeatedly is wasteful — prompt caching exists specifically for this scenario.

Mnemonic: Same prefix every time? Cache it! Pay once, reuse many.

## Q41
Type: single
Difficulty: 2
Tags: cloudwatch, metrics, monitoring
Concepts: operational-monitoring
Domain: Domain 4 — Operational Efficiency and Optimization
DomainNumber: 4

A production Bedrock application needs monitoring for performance degradation. Which CloudWatch metrics are most important to track for a generative AI application?

A. Only track S3 bucket size
B. Monitor InvocationLatency (response time), InvocationCount (traffic volume), ThrottledCount (capacity issues), and InputTokenCount/OutputTokenCount (cost and usage patterns)
C. Only track Lambda execution duration
D. Monitor CPU utilization of the foundation model

Answer: B

Hint: Track metrics that reflect user experience (latency), capacity (throttling), and cost (tokens).

Explanation: These Bedrock-specific CloudWatch metrics provide a comprehensive operational picture: InvocationLatency reveals performance degradation, ThrottledCount signals capacity issues, InvocationCount tracks traffic patterns, and token counts enable cost monitoring and anomaly detection.

Why others wrong: S3 bucket size is irrelevant to model performance; Lambda duration doesn't capture Bedrock-specific metrics; customers don't have visibility into foundation model CPU — Bedrock is a managed service.

Trap: Trying to monitor foundation model infrastructure metrics — Bedrock is fully managed, so focus on service-level metrics like latency, throughput, and token usage.

Mnemonic: Monitor LITT: Latency, Invocations, Throttles, Tokens

## Q42
Type: single
Difficulty: 3
Tags: cost-optimization, batch-inference
Concepts: batch-processing
Domain: Domain 4 — Operational Efficiency and Optimization
DomainNumber: 4

A company needs to generate product descriptions for 100,000 items in their catalog. The descriptions are not needed in real-time and can be delivered within 24 hours. What is the most cost-effective approach?

A. Use InvokeModel in a tight loop from a single Lambda function
B. Use Amazon Bedrock batch inference, which processes large volumes of prompts at a discounted rate compared to real-time inference, and delivers results to an S3 bucket
C. Deploy a self-managed LLM on SageMaker for this one-time job
D. Use InvokeModelWithResponseStream for faster processing

Answer: B

Hint: When you don't need real-time responses, there's a cheaper way to process large volumes.

Explanation: Bedrock batch inference is designed for high-volume, non-time-sensitive workloads. It processes prompts asynchronously at a significant discount compared to on-demand pricing, outputting results to S3. This is ideal for catalog-scale content generation where a 24-hour turnaround is acceptable.

Why others wrong: Sequential Lambda calls are slow and use expensive on-demand pricing; deploying a self-managed model for a one-time job is over-engineering; streaming doesn't reduce cost, it just delivers individual responses faster.

Trap: Using real-time inference for batch workloads — batch inference exists specifically for high-volume, latency-tolerant jobs at lower cost.

Mnemonic: Not urgent? Batch it! Same results, lower bill.

## Q43
Type: single
Difficulty: 2
Tags: inference-parameters, temperature, top-p
Concepts: inference-parameters
Domain: Domain 4 — Operational Efficiency and Optimization
DomainNumber: 4

A developer's application uses Bedrock for two tasks: creative marketing copy generation and structured data extraction from invoices. What inference parameter settings should they use for each task?

A. Use the same default parameters for both tasks
B. Use higher temperature (0.7-1.0) and higher top-p for creative marketing copy to encourage diverse outputs, and lower temperature (0.0-0.2) with lower top-p for data extraction to maximize determinism and accuracy
C. Use temperature 0 for both tasks to ensure consistency
D. Use the maximum temperature for both tasks to get the most creative responses

Answer: B

Hint: Creative tasks benefit from randomness; extraction tasks need precision.

Explanation: Temperature and top-p control output randomness. Creative tasks like marketing copy benefit from higher values that introduce variety and originality. Data extraction needs deterministic, accurate outputs, so lower values reduce hallucination and ensure the model faithfully extracts structured information.

Why others wrong: Same parameters for all tasks ignores their different requirements; temperature 0 for creative writing produces repetitive, bland copy; maximum temperature for extraction introduces errors and hallucinations.

Trap: Setting temperature to 0 for everything — while this maximizes consistency, it produces uncreative, repetitive outputs for generative tasks.

Mnemonic: Creative = hot (high temp); Extraction = cold (low temp)

## Q44
Type: single
Difficulty: 3
Tags: latency-optimization, model-distillation
Concepts: model-distillation
Domain: Domain 4 — Operational Efficiency and Optimization
DomainNumber: 4

A developer's Bedrock application using Claude 3 Sonnet meets quality requirements but has p99 latency of 8 seconds, exceeding the 3-second SLA. Switching to a smaller model degrades quality below acceptable levels. What optimization approach should the developer consider?

A. Accept the higher latency and renegotiate the SLA
B. Use Amazon Bedrock model distillation to create a smaller, faster model that learns from the larger model's outputs on your specific use case, maintaining quality while reducing latency
C. Add more retries to reduce average latency
D. Use multiple Regions and route to the fastest one

Answer: B

Hint: There's a technique to create a smaller model that mimics a larger model's behavior on your specific task.

Explanation: Model distillation uses a larger "teacher" model to train a smaller "student" model on your specific use case. The student model learns the teacher's behavior patterns, producing similar quality outputs at significantly reduced latency and cost. Bedrock supports automated distillation workflows.

Why others wrong: Accepting higher latency doesn't solve the problem; more retries increase average latency; multi-Region routing helps availability but p99 latency is about the model's generation time, not network routing.

Trap: Thinking the only options are "big & slow" or "small & bad" — distillation creates a model that's small, fast, AND good for your specific use case.

Mnemonic: Distillation = big model teaches small model your specific tricks

## Q45
Type: single
Difficulty: 1
Tags: hallucination, evaluation, output-quality
Concepts: hallucination-detection
Domain: Domain 5 — Testing, Validation, and Troubleshooting
DomainNumber: 5

A developer notices their Bedrock-powered Q&A application sometimes generates plausible but factually incorrect information not present in the provided context. What is this problem called, and what is the primary mitigation?

A. Model drift — retrain the model periodically
B. Hallucination — implement grounding by verifying model outputs against the retrieved context and using citations to trace answers back to source documents
C. Overfitting — use a larger training dataset
D. Underfitting — increase the model size

Answer: B

Hint: When a model "makes up" information, it's generating content that has no basis in the provided data.

Explanation: Hallucination occurs when foundation models generate confident but fabricated information. In RAG applications, grounding — verifying that answers are supported by retrieved context and requiring citations — is the primary mitigation. This allows both automated checks and user verification of answer sources.

Why others wrong: Model drift is gradual degradation over time; overfitting and underfitting are training-time issues, not generation-time problems.

Trap: Assuming the model is "lying" — hallucination is a probabilistic artifact of how language models generate text, not intentional fabrication.

Mnemonic: Hallucination = AI "sees" things not in the data; Grounding = anchor answers to real sources

## Q46
Type: single
Difficulty: 2
Tags: testing, evaluation, model-evaluation
Concepts: model-evaluation
Domain: Domain 5 — Testing, Validation, and Troubleshooting
DomainNumber: 5

A developer needs to systematically evaluate whether their fine-tuned model performs better than the base model for their specific task. Which evaluation approach is most rigorous?

A. Ask a few colleagues to try both models and share their opinions
B. Create a benchmark dataset with ground-truth answers, evaluate both models on the same dataset using automated metrics (accuracy, F1, ROUGE/BLEU for generation) and human evaluation, and perform statistical significance testing on the results
C. Compare the models' parameter counts
D. Check which model generates longer responses

Answer: B

Hint: Rigorous evaluation needs a consistent benchmark, quantitative metrics, and statistical significance.

Explanation: A proper evaluation uses a held-out benchmark dataset with known correct answers, applies consistent automated metrics across both models, includes human evaluation for aspects that automated metrics miss (coherence, helpfulness), and uses statistical testing to confirm differences aren't due to random variation.

Why others wrong: Anecdotal feedback is not systematic or reproducible; parameter count doesn't predict task-specific performance; response length is not a quality metric.

Trap: Relying on vibes instead of data — "this model feels better" isn't evidence. Systematic evaluation with benchmark datasets and metrics is essential.

Mnemonic: Benchmark + Metrics + Statistics = evidence-based model comparison

## Q47
Type: single
Difficulty: 2
Tags: troubleshooting, context-window, truncation
Concepts: context-window-management
Domain: Domain 5 — Testing, Validation, and Troubleshooting
DomainNumber: 5

A RAG application's responses suddenly become less accurate for complex queries that retrieve many context chunks. The developer suspects the context exceeds the model's context window. How should they diagnose and fix this?

A. Switch to a model with an unlimited context window
B. Monitor input token counts against the model's context window limit, implement context summarization or re-ranking to prioritize the most relevant chunks within the window, and use token counting before each invocation to prevent silent truncation
C. Remove the RAG component entirely
D. Reduce all chunk sizes to 50 tokens each

Answer: B

Hint: When too much context overwhelms the model, the solution is to be selective about what context to include.

Explanation: Exceeding the context window causes silent truncation or degraded performance. Monitoring token counts reveals the issue. Re-ranking prioritizes the most relevant chunks, and context summarization compresses less critical information. Pre-invocation token counting prevents exceeding limits.

Why others wrong: No model has unlimited context; removing RAG removes the knowledge; tiny chunks lose semantic coherence.

Trap: Assuming "more context is always better" — beyond the context window, additional context is truncated or, within the window, too much noise can degrade model performance (the "lost in the middle" problem).

Mnemonic: Context window = suitcase with size limit → pack the most important items first

## Q48
Type: single
Difficulty: 3
Tags: troubleshooting, agent, debugging
Concepts: agent-debugging
Domain: Domain 5 — Testing, Validation, and Troubleshooting
DomainNumber: 5

A Bedrock Agent intermittently enters an infinite loop, repeatedly calling the same action group without progressing. The issue happens with certain types of user queries. How should the developer diagnose and fix this?

A. Increase the agent's maximum iterations and hope it eventually breaks the loop
B. Analyze the agent trace logs to identify the loop pattern, check if the action group's response format is unclear to the agent, add explicit stop conditions in the agent instructions, and configure a maximum iteration limit as a safety net
C. Delete and recreate the agent
D. Switch to a different foundation model

Answer: B

Hint: The agent's reasoning is visible through traces — look at why it keeps choosing the same action.

Explanation: Infinite loops in agents typically occur when the action group's response doesn't clearly signal completion to the agent, causing it to retry. Trace logs reveal the reasoning pattern. Fixing requires clarifying action group response formats, adding explicit completion signals in instructions, and setting maximum iteration limits as a safeguard.

Why others wrong: Increasing iterations without fixing the root cause wastes resources; deleting and recreating without understanding the issue will reproduce it; switching models may not resolve the fundamental action group response clarity issue.

Trap: Increasing the iteration limit without investigating the root cause — this just makes the infinite loop run longer before eventually failing.

Mnemonic: Agent loop? Trace → find the stuck logic → fix the exit condition → add a safety limit

## Q49
Type: single
Difficulty: 2
Tags: testing, regression, ci-cd
Concepts: regression-testing
Domain: Domain 5 — Testing, Validation, and Troubleshooting
DomainNumber: 5

A developer updates the prompt template used in their Bedrock application. How should they ensure the change doesn't degrade response quality?

A. Manually test a few examples and deploy if they look good
B. Run the updated prompt against a regression test suite containing representative inputs with expected outputs, compare quality metrics against the baseline, and only deploy if metrics meet or exceed the threshold
C. Deploy to production and monitor for user complaints
D. Run a spell check on the new prompt

Answer: B

Hint: Prompt changes need the same rigor as code changes — automated testing against known baselines.

Explanation: Prompt changes can have subtle, widespread effects on output quality. A regression test suite with representative examples and expected outputs catches degradation before deployment. Comparing automated metrics against a baseline ensures the change maintains or improves quality across all tested scenarios.

Why others wrong: Manual testing is not comprehensive enough; deploying untested changes to production risks degraded user experience; spell checking doesn't validate response quality.

Trap: Treating prompts as "just text" that doesn't need testing — prompt changes are engineering changes that can break your application as severely as code changes.

Mnemonic: Prompts are code — test them like code (regression suite + metrics + baseline comparison)

## Q50
Type: single
Difficulty: 3
Tags: troubleshooting, latency, performance
Concepts: latency-troubleshooting
Domain: Domain 5 — Testing, Validation, and Troubleshooting
DomainNumber: 5

A developer's RAG application has acceptable latency for most queries but intermittent spikes where response time jumps from 2 seconds to 15 seconds. The spikes don't correlate with traffic volume. What is the most likely cause and how should they troubleshoot?

A. The internet connection is unstable
B. Instrument each pipeline component (embedding generation, vector search, context assembly, model invocation) with timing metrics to isolate which step causes the spike, check for cold starts in Lambda functions, throttling from Bedrock or the vector store, and variable context sizes that change model inference time
C. Restart the application servers
D. Upgrade to a more expensive support plan

Answer: B

Hint: With multiple components in the RAG pipeline, any one of them could be the bottleneck — you need timing data for each.

Explanation: Intermittent latency spikes in RAG applications can originate from any pipeline component. Instrumenting each step with timing metrics isolates the culprit. Common causes include Lambda cold starts (first invocation after idle), Bedrock throttling (capacity limits), vector store query spikes, and variable context sizes that affect model inference time.

Why others wrong: Network instability would affect all requests uniformly; restarting doesn't address root cause; support plans don't fix application performance.

Trap: Assuming latency spikes have a single cause — in a multi-component pipeline, different spikes may have different root causes, so comprehensive instrumentation is essential.

Mnemonic: Spike hunting = instrument every step → find the bottleneck → fix that component
