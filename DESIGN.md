---
version: 1.0
name: Vivancedata Design System
description: >
  The Vivancedata design language. Structurally derived from Vercel's Geist system —
  a stark ink-on-near-white sheet where a single ink tone carries headings, CTAs, and
  every border, with depth expressed as a 1px hairline rather than a shadow — but
  brand-preserving: Vivancedata's deep green survives as the accent (`brand`) that
  Geist spends on Vercel blue, and the single permitted flourish is a green-to-cyan
  mesh gradient confined to the hero. Geist Sans drives tightly-tracked display type,
  Geist Mono labels technical eyebrows, and buttons split by context: pills for
  marketing CTAs, 6px squares for app and nav chrome.
source: Analysis of Vercel's Geist system (vercel.com home, AI Gateway, customers, pricing)
---

# Vivancedata Design System

This file is the **token contract**. `src/styles/globals.css` and `tailwind.preset.ts`
implement it; both sites consume it through the published `@vivancedata/ui` package.
When they disagree, this file is wrong or the code is — fix one, not neither.

## What was adapted from Geist, and why

Geist is a developer-platform language. Vivancedata sells AI consulting to startups
*and* to blue-collar industries — construction, HVAC, manufacturing, logistics. A
verbatim Geist clone reads as credible to an engineer and cold to an operations
director, so four deliberate departures:

| Geist | Vivancedata | Reason |
|---|---|---|
| `#0070f3` link blue as the accent | deep green `152 52% 20%` as `brand` | The brand survives; the discipline is what we borrowed |
| Cyan/violet/magenta/amber hero mesh | green → teal → cyan hero mesh | One flourish, still ours |
| Light sheet only (undocumented dark) | full light + dark token pair | 571 `dark:` classes and a live theme toggle already ship |
| Fixed `-2.4px` display tracking at 48px | `em`-relative tracking, `clamp()` sizing | The source values were sampled at a narrow viewport; taken literally they *shrink* the existing 56px hero |

## Colors

Tokens are HSL triplets in CSS custom properties, consumed as `hsl(var(--token))`.
This convention is load-bearing: it is what lets ~1,900 existing semantic utility
classes (`bg-background`, `text-foreground`, `border-border`) re-skin without edits.

| Token | Light | Dark | Role |
|---|---|---|---|
| `--background` | `0 0% 98%` | `0 0% 0%` | The page sheet |
| `--card`, `--popover` | `0 0% 100%` | `0 0% 4%` | Surfaces lifted off the sheet |
| `--foreground` | `0 0% 9%` | `0 0% 93%` | Headings, high-emphasis text |
| `--muted-foreground` | `0 0% 30%` | `0 0% 63%` | Body copy, nav links |
| `--muted` | `0 0% 95%` | `0 0% 9%` | Faint alternating panels, inset wells |
| `--accent` | `0 0% 96%` | `0 0% 11%` | **Neutral hover wash — not a brand color** |
| `--border`, `--input` | `0 0% 92%` | `0 0% 15%` | The 1px structural hairline |
| `--primary` | `0 0% 9%` | `0 0% 93%` | CTA fill (ink pill; inverts in dark) |
| `--primary-foreground` | `0 0% 100%` | `0 0% 9%` | Text on CTA |
| `--secondary` | `0 0% 100%` | `0 0% 4%` | White/dark pill, hairline-bordered |
| `--brand` | `152 52% 20%` | `152 45% 45%` | Links, focus, eyebrows, mesh — the green |
| `--ring` | `var(--brand)` | `var(--brand)` | Focus ring |

### Two tokens that are traps

**`--accent` is a pale hover wash, not an accent color.** In shadcn semantics
`bg-accent` / `text-accent-foreground` are hover and active states, used throughout
both apps. Putting the green here would turn every hover across 52 routes solid
green. The green lives in `--brand`, which is a *new* token added for this purpose.

**`--secondary` changed meaning.** It was green (`152 38% 36%`); under this system it
is a white pill with a hairline. Every `bg-secondary` / `text-secondary-foreground`
call site needs an audit rather than a blind swap.

### Contrast constraints (measured, sRGB, WCAG 2.1)

| Pair | Ratio | Verdict |
|---|---|---|
| `foreground` on `background` (light) | 17.2:1 | AAA |
| `muted-foreground` on `background` (light) | 8.2:1 | AAA |
| `brand` on `background` (light) | 9.3:1 | AAA |
| `brand` on `background` (dark) | 7.0:1 | AAA body, AAA large |

The greys below `muted-foreground` **do not** clear 4.5:1 — the Geist `mute` tier
(`0 0% 56%`) lands at 3.1:1 and `faint` (`0 0% 63%`) at 2.5:1. They are legitimate
for decorative metadata, logo-strip labels, and input placeholders. **Never set
copy a user must read in them.** If it matters, it is `muted-foreground` or darker.

## Typography

**Geist Sans** for all UI and prose, **Geist Mono** for code and uppercase section
eyebrows. No third face, no italic, no light or black weight. Loaded via
`next/font/google` and exposed as `--font-geist-sans` / `--font-geist-mono`.

Weight is effectively binary: **600** for headings, **500** for buttons and labels,
**400** for everything else.

| Token | Size | Weight | Tracking | Use |
|---|---|---|---|---|
| `display-xl` | `clamp(3rem, 6vw, 4.75rem)` | 600 | `-0.05em` | Hero headline |
| `display` | `clamp(2.5rem, 4.5vw, 3.5rem)` | 600 | `-0.045em` | Band headlines |
| `heading-1` | `2rem` | 600 | `-0.04em` | Major section headings |
| `heading-2` | `1.5rem` | 600 | `-0.03em` | Sub-sections |
| `heading-3` | `1.25rem` | 600 | `-0.02em` | Card headings |
| `heading-4` | `1.125rem` | 600 | `-0.015em` | Dense card headings |
| `eyebrow` | `0.75rem` | 500 | `0.02em` | **Geist Mono**, uppercase |
| `body-lg` | `1.125rem` | 400 | `0` | Lead paragraphs |
| `body` | `1rem` | 400 | `0` | Default copy |
| `body-sm` | `0.875rem` | 400 | `0` | Secondary copy, table cells |
| `caption` | `0.75rem` | 400 | `0` | Captions, metadata |
| `code` | `0.875rem` | 400 | `0` | **Geist Mono** |

Tracking is negative at heading scale and above, and expressed in `em` so it scales
with the type rather than crushing small renderings. Body sits at neutral spacing.
The `eyebrow` takes *positive* tracking — a departure from the source's `0`, because
uppercase monospace at 12px sets too tight without it.

## Shapes

| Token | Value | Use |
|---|---|---|
| `sm` | `6px` | Nav and app buttons, inputs, selects |
| `md` | `12px` | Feature cards, code blocks |
| `lg` | `16px` | Pricing cards, large panels |
| `pill-category` | `64px` | Category tab pills |
| `pill` | `100px` | Marketing CTA pills |
| `full` | `9999px` | Avatars, circular icon buttons |

`--radius` is `0.75rem` (12px), the card default. The radius language is bimodal on
purpose: tight 6px squares for functional chrome, full pills for marketing CTAs,
12–16px on content cards in between. **Do not mix the two button shapes within one
context** — marketing CTAs stay pills, app and nav controls stay 6px squares.

## Elevation

Depth is a hairline first and a shadow only when a surface genuinely floats. The
five neumorphic dual-direction shadows this system replaced are gone.

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | 1px `--border`, no shadow | Cards, inputs, dividers. **The default.** |
| 1 — Whisper | `--shadow-1`: `0 1px 1px rgb(0 0 0 / 0.04)` | Lightly raised cards |
| 2 — Floating | `--shadow-2`: `0 2px 2px rgb(0 0 0 / 0.04), 0 8px 16px -4px rgb(0 0 0 / 0.08)` | Menus, modals, tooltips |

## Spacing

4px base. `xs 4 · sm 8 · md 16 · lg 24 · xl 32 · 2xl 40 · 3xl 64 · 4xl 96 · section 128`.
Card interiors sit at 24–32px; section bands run 96–128px of vertical rhythm.
Button padding is horizontal-only — height comes from line-height.

## The one flourish

A single multi-stop mesh gradient, **confined to the hero**, running green → teal →
cyan off the `brand` token. This is the entire decorative system. There is no second
one: no glows, no glass, no cursor effects, no floating shapes, no parallax. Those
components were retired from this package deliberately, and re-adding a decorative
system is the specific failure this design guards against.

## Do

- Keep the sheet near-white and let ink carry headings, CTAs, and borders.
- Define cards and inputs with a 1px hairline **before** reaching for a shadow.
- Reserve `--brand` for links, focus, eyebrows, and the hero mesh.
- Set display headings in Geist Sans 600 with negative `em` tracking.
- Step the text ladder deliberately: `foreground` → `muted-foreground` → decorative greys.

## Don't

- Don't fill large surfaces with `--brand`; it is an accent, not chrome.
- Don't put brand color in `--accent` — that token is a neutral hover wash.
- Don't set readable copy in the sub-`muted-foreground` greys (3.1:1 and 2.5:1).
- Don't mix pill and square buttons in one context.
- Don't pile on shadows; flat is the default and level 2 is the ceiling.
- Don't set body copy in pure black — the ink is `0 0% 9%`, and body steps lighter.
- Don't add a second decorative system.
