# RPG curated content audit

## Scope and delivery

The first playable region is AIF-C01 Domain 1, **Origin Meadows / 起源草原**.
It contains three short quests of three questions each, in Traditional Chinese and English:

| Quest | Concept bucket | Bilingual families | Question formats |
| --- | --- | ---: | --- |
| Recognize the Learning Trails | Learning paradigms | 3 | Single choice |
| Restore the Prediction Observatory | Model lifecycle | 3 | Single choice |
| Recover Voices and Words | Managed AI services | 3 | Single choice |

Nine families represent 18 language records, **not 18 independent questions**.
Language siblings share family IDs. Repeated play of the same question or its translation
must not count as distinct knowledge evidence. These three broad concept buckets are
introductory coverage only, not comprehensive domain mastery or exam readiness.
All other four map regions are marked preparing; no industry or job-role branches are added.
An existing retail scenario remains because it tests batch inference, not to create a retail track.

## Source of truth

- `data/questions.json`: existing bank, unchanged by this work.
- `data/reviews/aif-c01.json`: existing review ledger, unchanged by this work.
- `data/rpg/families.json`: explicit, manually checked bilingual pair and concept mapping.
- `data/rpg/reviews.json`: RPG-only question audits (16 new records plus 2 preserved verified records).
- `data/rpg/questions.json`: generated server-only subset (18 records).
- `data/rpg/sources.json`: titles, successful retrieval status and final URLs of opened AWS sources.
- `scripts/build-rpg-content.mjs`: verifies every selected current hash against a verified audit,
  reviewer, date, source URLs and five required checks before generation.
- `src/lib/rpg/content.ts`: lightweight client metadata without the question bank.
- `src/server/api/rpg.ts`: language-filtered server function using the small curated JSON,
  independent of D1 configuration and existing practice/exam modes.

The semi-supervised pair preserves copies of two existing current-hash verified ledger entries in the RPG ledger, so release does not depend on unrelated pending changes.
All eight other pairs were read in both languages and checked against the AWS sources below.
No audit was inferred from the bank's legacy `reviewed` boolean or keyword matching.
Original stems, choices, answer keys and explanations are preserved. The curated copy sets `reviewed: true` from its verified audit, and its `references` field is replaced with the URLs actually checked in its audit; original
bank references are unchanged. The two source language hashes jointly determine the family content version; changing selected bank content makes the generated-content check fail.

## Retrieval and evidence

Review performed 2026-09-12 using callable **Groundlane `web_fetch`** tools, after checking
full callable inventory. Groundlane succeeded, so no alternate research tool was used.
AWS documentation was generally returned through Groundlane's source-aware Markdown path.
An initially guessed exam-guide path redirected to the guide index and was not used as
scope evidence. The final domain guide was opened successfully:

- [AIF-C01 Domain 1](https://docs.aws.amazon.com/aws-certification/latest/ai-practitioner-01/ai-practitioner-01-domain1.html)
  explicitly includes supervised/unsupervised learning, labeled data, training/inference,
  model fit, inference types, and managed AI service capabilities under tasks 1.1–1.3.
- [AWS supervised and unsupervised comparison](https://aws.amazon.com/compare/the-difference-between-machine-learning-supervised-and-unsupervised/)
  supports labeled training, clustering and regression distinctions.
- [Reinforcement learning](https://aws.amazon.com/what-is/reinforcement-learning/)
  supports the reward-driven alternative used by learning-paradigm distractors.
- [Training ML models](https://docs.aws.amazon.com/machine-learning/latest/dg/training-ml-models.html)
  and [Deploy models for inference](https://docs.aws.amazon.com/sagemaker/latest/dg/deploy-model.html)
  distinguish learning from data and obtaining predictions from a trained model.
- [Batch transform](https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform.html)
  supports bulk predictions without a persistent endpoint; deployment documentation contrasts
  interactive low-latency endpoints. The selected pair makes no pricing claim.
- [Model fit](https://docs.aws.amazon.com/machine-learning/latest/dg/model-fit-underfitting-vs-overfitting.html)
  and [Overfitting](https://aws.amazon.com/what-is/overfitting/) support the typical
  training/test performance gap and mitigation concepts.
- [Transcribe](https://docs.aws.amazon.com/transcribe/latest/dg/what-is.html),
  [Polly](https://docs.aws.amazon.com/polly/latest/dg/what-is.html),
  [Comprehend](https://docs.aws.amazon.com/comprehend/latest/dg/what-is.html),
  [Translate](https://docs.aws.amazon.com/translate/latest/dg/what-is.html),
  [Rekognition](https://docs.aws.amazon.com/rekognition/latest/dg/what-is.html),
  [Lex](https://docs.aws.amazon.com/lexv2/latest/dg/what-is.html), and
  [Titan Image Generator](https://docs.aws.amazon.com/bedrock/latest/userguide/titan-image-models.html)
  were opened to check the three selected service questions and the service distractors.

Per-question IDs, hashes, opened URLs, rationale, timestamps and scope tasks are recorded
in the RPG ledger. This is a targeted question audit, not a renewed audit of the whole bank.

## Known content boundaries

- The starter set contains single-choice items only; no matching, ordering or multi-select
  questions were invented merely to demonstrate the engine's supported formats.
- Some existing auxiliary feedback is generic or truncated. The full explanation remains
  available and is the preferred teaching text. This work does not claim editorial perfection.
- NPC dialogue wraps quests only. It does not modify the question's technical requirements,
  turn fantasy assumptions into answer conditions, or expand exam scope.
- Legacy links in the original bank may be indirect. The RPG ledger records the actual
  sources checked in this audit and the curated copy displays those verified links; the original bank is not relabeled as fully audited.

## Reproduction

```sh
node scripts/build-rpg-content.mjs
node scripts/build-rpg-content.mjs --check
```

Generation/check result: 9 bilingual families, 18 question records, all audit hashes match.
The main integration gate separately verifies API bundling, all question renderers and storage isolation.
