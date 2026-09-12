# Domain localization diagnosis

Status: repaired locally; deployment pending

- [x] Confirm the study route rendering path.
- [x] Trace the domain API/data source.
- [x] Compare English and Traditional Chinese taxonomy values.
- [x] Identify root cause and remediation options.

## Repair progress

- [x] Add a locale-aware canonical domain catalog.
- [x] Group and filter APIs by `domainNumber`.
- [x] Update Practice and Study UI selection state.
- [x] Prevent unresolved AIF-C01 domains during import validation.
- [x] Add regression tests and run project gates.

## Finding

The locale filter applies to question rows, but `domain` is an unlocalized free-text
field. The Study screen groups and renders it verbatim. The AIF-C01 `zh-TW` rows
contain English names, Chinese names, spelling variants, and `Unknown`, so one
conceptual five-domain taxonomy appears as twelve list entries.

Before migration, the local snapshot contained 955 `zh-TW` AIF-C01 rows and
962 English rows. The 955 Chinese-locale rows were split across twelve raw labels.

The parser contributes to the inconsistency through an English-only numeric domain
map and an `Unknown` fallback. The seed script then copies those values to D1.

Production D1 verification was attempted with a read-only Wrangler query, but the
configured Cloudflare account returned authorization error 7403. The screenshot's
counts total 1,975 and remain the production evidence; the local snapshot
independently reproduces the same mixed-label shape. Production accumulation from
non-idempotent reseeding is plausible, but not live-confirmed.

## Recommended model

- Use `(examCode, domainNumber)` as the canonical identity and filtering key.
- Store localized display names separately, keyed by locale.
- Group counts by `domain_number`, not raw `domain` text.
- Normalize imported AIF-C01 rows and reject `domainNumber = 0` / `Unknown` during validation.
- Replace the zh-TW UI label `選擇 Domain` with `選擇領域` if full Chinese terminology is desired.

## Repair result

- Domain lists, counts, and filters now use `domainNumber` and localized labels.
- Runtime queries deduplicate historical rows by hash and exclude unresolved Domain 0 rows.
- The local question snapshot retains all 2,241 questions. Its AIF-C01 subset
  contains 955 `zh-TW` and 962 English questions with zero unresolved domains.
- 122 Domain 0 rows were recovered by reparsing their source headings. The 65
  legacy set-j rows were reviewed across domains 1–5, restored, and annotated in
  the raw source instead of being removed.
- `node scripts/migrate-aif-domains.mjs` is idempotent; a second run reported
  `0 normalized, 0 restored, 2241 total`.
- `pnpm verify` passes all five gates, including the new parser regression check.
- `git diff --check` passes, and local SSR returned HTTP 200 for `/` and
  `/practice/aif-c01?domainNumbers=2%2C3`.
- In-app browser visual verification was unavailable because no browser instance
  was connected; production remains unchanged until deployment.
