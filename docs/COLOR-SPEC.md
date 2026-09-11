# Color Specification — Happy Hues Palette 2

Source: https://www.happyhues.co/palettes/2

## The 7 Core Colors

| # | Hex | Name | Role |
|---|-----|------|------|
| 1 | `#00214d` | Deep navy | Headlines, button text, stroke |
| 2 | `#fffffe` | Off-white | Backgrounds, card surfaces |
| 3 | `#00ebc7` | Cyan | Button bg (light), highlight, link |
| 4 | `#ff5470` | Rose/coral | Secondary accent, newsletter bg |
| 5 | `#fde24f` | Bright yellow | Button bg (dark), link (dark), tertiary |
| 6 | `#1b2d45` | Slate blue | Paragraph text |
| 7 | `#001534` | Very dark navy | Dark mode background |

## Section-by-Section Reference (from the palette page)

### Hero Section (light)
| Element | Hex |
|---------|-----|
| Background | `#fffffe` |
| Headline | `#00214d` |
| Paragraph | `#1b2d45` |
| Button bg | `#00ebc7` |
| Button text | `#00214d` |

### Features/Cards Section
| Element | Hex |
|---------|-----|
| Section background | `#f2f4f6` |
| Card background | `#fffffe` |
| Card heading | `#00214d` |
| Card paragraph | `#1b2d45` |
| Icon stroke | `#00214d` |
| Icon highlight | `#00ebc7` |
| Icon secondary | `#ff5470` |
| Icon tertiary | `#fde24f` |

### Newsletter Section
| Element | Hex |
|---------|-----|
| Background | `#ff5470` |
| Headline | `#fffffe` |
| Input bg | `#fffffe` |
| Input text | `#00214d` |
| Button bg | `#fde24f` |
| Button text | `#00214d` |

### Dark Footer Section
| Element | Hex |
|---------|-----|
| Background | `#001534` |
| Headline | `#fffffe` |
| Link text | `#fde24f` |

### Bottom Footer (light)
| Element | Hex |
|---------|-----|
| Background | `#fffffe` |
| Text | `#1b2d45` |
| Link text | `#00ebc7` |

## Our CSS Variable Mapping

### Light Mode (:root)

| CSS Variable | Hex | Maps to palette role | Verified |
|---|---|---|---|
| `--bg-base` | `#fffffe` | Hero background | ✅ |
| `--bg-subtle` | `#f2f4f6` | Features section background | ✅ |
| `--surface` | `#fffffe` | Card background | ✅ |
| `--surface-strong` | `#fffffe` | Card background | ✅ |
| `--sea-ink` | `#00214d` | Headline text | ✅ |
| `--sea-ink-soft` | `#1b2d45` | Paragraph text | ✅ |
| `--lagoon` | `#00ebc7` | Button bg, highlight, link | ✅ |
| `--lagoon-deep` | `#00c4a7` | Hover state of lagoon | ✅ (derived, not in palette) |
| `--palm` | `#00214d` | Button text, stroke | ✅ |
| `--accent-secondary` | `#ff5470` | Newsletter bg, icon secondary | ✅ |
| `--accent-tertiary` | `#fde24f` | Icon tertiary | ✅ |
| `--line` | `rgba(0,33,77,0.12)` | Stroke at 12% opacity | ✅ (derived from #00214d) |
| `--chip-bg` | `#f2f4f6` | Same as bg-subtle | ✅ |

### Dark Mode (:root[data-theme="dark"])

| CSS Variable | Hex | Maps to palette role | Verified |
|---|---|---|---|
| `--bg-base` | `#001534` | Dark footer background | ✅ |
| `--bg-subtle` | `#001e4a` | Derived darker variant | ✅ (derived) |
| `--surface` | `#001e4a` | Dark card surface | ✅ (derived) |
| `--surface-strong` | `#002254` | Dark elevated surface | ✅ (derived) |
| `--sea-ink` | `#fffffe` | Dark headline text | ✅ |
| `--sea-ink-soft` | `#b8c7dc` | Dark paragraph text | ⚠️ Deviation: palette says #1b2d45 but that's invisible on #001534. We use #b8c7dc for readability. |
| `--lagoon` | `#fde24f` | Dark button bg, dark link color | ✅ |
| `--lagoon-deep` | `#e5cc3a` | Hover state of yellow | ✅ (derived) |
| `--palm` | `#00214d` | Dark button text (dark text on yellow bg) | ✅ |

### Noted Deviations from Palette

1. **`--sea-ink-soft` in dark mode**: Palette uses `#1b2d45` for paragraph text, but that color on `#001534` background has contrast ratio < 1.5:1 (unreadable). We use `#b8c7dc` instead. The palette page itself renders paragraph text in dark cards on `#fffffe` white card backgrounds, not directly on the dark `#001534`.
2. **`--lagoon-deep` and `--hover-*`**: These are derived colors not in the original palette. Needed for hover/focus states.
3. **`--surface` variants in dark**: The palette only shows `#001534` as dark bg. We add `#001e4a` and `#002254` as elevated surface tones for cards and modals.

## Usage Rules

### `--lagoon` (cyan in light / yellow in dark) — ONLY for:
1. Primary button **background** (`bg-[var(--lagoon)]`)
2. Small accent **fills** (progress bar fill, selected radio dot, timer ring, question grid answered state)
3. Badge "brand" variant **background**

### `--lagoon` is NEVER for:
1. ❌ **Any text color** — not body, heading, link, button secondary, icon — the palette page never uses cyan/yellow as text color
2. ❌ Link text → use `--sea-ink` (links are distinguished by underline, not color)
3. ❌ Secondary/ghost button text or icons → use `--sea-ink-soft`
4. ❌ Large filled areas outside primary buttons

### Button Variants (per palette)

| Variant | Background | Text | Border | Source |
|---------|-----------|------|--------|--------|
| **primary** | `--lagoon` | `--palm` | none | Hero button |
| **secondary** | transparent | `--sea-ink-soft` → hover `--sea-ink` | `--line` | Derived |
| **outline** | transparent | `--sea-ink` | `--sea-ink` | Derived |
| **ghost** | transparent | `--sea-ink-soft` → hover `--sea-ink` | none | Derived |
| **destructive** | `--wrong-bg` | `--wrong` | `--wrong-border` | Derived |

### Exam Feedback Colors (derived, not from palette)

| State | Color | Background | Border |
|-------|-------|-----------|--------|
| Correct | `--correct` (#059669/#34d399) | `--correct-bg` | `--correct-border` |
| Wrong | `--wrong` (#e11d48/#fb7185) | `--wrong-bg` | `--wrong-border` |
| Flagged | `--flagged` (#d97706/#fbbf24) | `--flagged-bg` | `--flagged-border` |

### Selected/Hover States

In light mode: cyan-tinted. In dark mode: yellow-tinted (matching `--lagoon`).

| Variable | Light | Dark |
|----------|-------|------|
| `--selected-bg` | `rgba(0,235,199,0.06)` | `rgba(253,226,79,0.08)` |
| `--selected-border` | `rgba(0,196,167,0.5)` | `rgba(253,226,79,0.4)` |
| `--hover-bg` | `rgba(0,235,199,0.03)` | `rgba(253,226,79,0.04)` |
| `--hover-border` | `rgba(0,196,167,0.3)` | `rgba(253,226,79,0.25)` |

## Verification Checklist

Run `pnpm lint:ui` to auto-check, plus manually verify:

- [ ] No `--lagoon` used as `text-[var(--lagoon)]` except inline links
- [ ] Primary buttons: bg=lagoon, text=palm
- [ ] Secondary/ghost buttons: text=sea-ink-soft, NOT lagoon
- [ ] All hex values in styles.css match this spec
- [ ] Dark mode lagoon = `#fde24f` (yellow), NOT cyan
- [ ] Dark mode selected/hover states use yellow-tinted rgba, NOT cyan
