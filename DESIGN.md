---
name: Vivancedata Design System
description: >
  Ink on a near-white sheet, depth as a 1px hairline, one deep green, one hero mesh.
  Structurally derived from Vercel's Geist system and brand-preserving: Vivancedata's
  green survives as the accent (`brand`) that Geist spends on Vercel blue; Geist Sans
  drives tightly-tracked display type, Geist Mono labels uppercase eyebrows, and
  buttons split by context (pills for marketing CTAs, 6px squares for app and nav chrome).
colors:
  # Surfaces. Light value first; the `-dark` sibling is the same token under `.dark`.
  background: "hsl(0 0% 98%)"
  background-dark: "hsl(0 0% 0%)"
  foreground: "hsl(0 0% 9%)"
  foreground-dark: "hsl(0 0% 93%)"
  card: "hsl(0 0% 100%)"
  card-dark: "hsl(0 0% 4%)"
  muted: "hsl(0 0% 95%)"
  muted-dark: "hsl(0 0% 9%)"
  muted-foreground: "hsl(0 0% 30%)"
  muted-foreground-dark: "hsl(0 0% 63%)"
  accent: "hsl(0 0% 96%)"
  accent-dark: "hsl(0 0% 11%)"
  border: "hsl(0 0% 92%)"
  border-dark: "hsl(0 0% 15%)"
  # CTA ink and its pill counterpart
  primary: "hsl(0 0% 9%)"
  primary-dark: "hsl(0 0% 93%)"
  primary-foreground: "hsl(0 0% 100%)"
  primary-foreground-dark: "hsl(0 0% 9%)"
  secondary: "hsl(0 0% 100%)"
  secondary-dark: "hsl(0 0% 4%)"
  secondary-foreground: "hsl(0 0% 9%)"
  secondary-foreground-dark: "hsl(0 0% 93%)"
  # The one brand hue
  brand: "hsl(152 52% 20%)"
  brand-dark: "hsl(152 45% 45%)"
  brand-foreground: "hsl(0 0% 100%)"
  brand-foreground-dark: "hsl(0 0% 4%)"
  # Decorative greys (below 4.5:1 -- never readable copy)
  mute: "hsl(0 0% 56%)"
  mute-dark: "hsl(0 0% 49%)"
  faint: "hsl(0 0% 63%)"
  faint-dark: "hsl(0 0% 40%)"
  # Semantic status
  destructive: "hsl(0 100% 47%)"
  destructive-dark: "hsl(0 90% 55%)"
  destructive-foreground: "hsl(0 0% 100%)"
  success: "hsl(142 71% 35%)"
  success-dark: "hsl(142 65% 45%)"
  success-foreground: "hsl(0 0% 100%)"
  success-foreground-dark: "hsl(0 0% 4%)"
  success-muted: "hsl(142 71% 35% / 0.1)"
  success-muted-dark: "hsl(142 65% 45% / 0.15)"
  warning: "hsl(38 91% 55%)"
  warning-dark: "hsl(38 91% 60%)"
  warning-foreground: "hsl(0 0% 9%)"
  warning-muted: "hsl(38 91% 55% / 0.1)"
  warning-muted-dark: "hsl(38 91% 60% / 0.15)"
  info: "hsl(212 100% 48%)"
  info-dark: "hsl(212 100% 60%)"
  info-foreground: "hsl(0 0% 100%)"
  info-foreground-dark: "hsl(0 0% 4%)"
  info-muted: "hsl(212 100% 48% / 0.1)"
  info-muted-dark: "hsl(212 100% 60% / 0.15)"
  # Hero mesh stops -- brighter in dark than in light, on purpose
  mesh-1: "hsl(152 52% 35%)"
  mesh-1-dark: "hsl(152 58% 46%)"
  mesh-2: "hsl(168 60% 45%)"
  mesh-2-dark: "hsl(168 62% 50%)"
  mesh-3: "hsl(187 80% 55%)"
  mesh-3-dark: "hsl(187 78% 56%)"
  # Charts trace the mesh, plus amber and blue
  chart-1: "hsl(152 52% 30%)"
  chart-1-dark: "hsl(152 45% 50%)"
  chart-2: "hsl(168 55% 40%)"
  chart-2-dark: "hsl(168 55% 50%)"
  chart-3: "hsl(190 60% 45%)"
  chart-3-dark: "hsl(190 65% 55%)"
  chart-4: "hsl(38 91% 55%)"
  chart-4-dark: "hsl(38 91% 60%)"
  chart-5: "hsl(212 100% 48%)"
  chart-5-dark: "hsl(212 100% 65%)"
typography:
  display-xl:
    fontFamily: "Geist, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 6vw, 4.75rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.05em"
  display:
    fontFamily: "Geist, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.045em"
  heading-1:
    fontFamily: "Geist, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.04em"
  heading-2:
    fontFamily: "Geist, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.03em"
  heading-3:
    fontFamily: "Geist, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.02em"
  heading-4:
    fontFamily: "Geist, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.45
    letterSpacing: "-0.015em"
  eyebrow:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.333
    letterSpacing: "0.02em"
  body-lg:
    fontFamily: "Geist, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
  body:
    fontFamily: "Geist, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0"
  body-sm:
    fontFamily: "Geist, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: "0"
  caption:
    fontFamily: "Geist, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.333
    letterSpacing: "0"
  code:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: "0"
rounded:
  sm: "6px"
  md: "12px"
  lg: "16px"
  xl: "16px"
  2xl: "20px"
  pill-category: "64px"
  pill: "100px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "40px"
  3xl: "64px"
  4xl: "96px"
  section: "128px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "0 16px"
    height: "40px"
  button-primary-hover:
    backgroundColor: "hsl(0 0% 9% / 0.9)"
    textColor: "{colors.primary-foreground}"
  button-primary-pill:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "0 32px"
    height: "48px"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.secondary-foreground}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "0 16px"
    height: "40px"
  button-secondary-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.foreground}"
  button-outline:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "0 16px"
    height: "40px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "0 16px"
    height: "40px"
  button-ghost-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.foreground}"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.brand}"
    typography: "{typography.body-sm}"
  input:
    backgroundColor: "{colors.card}"
    textColor: "{colors.foreground}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "8px 12px"
    height: "40px"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
    padding: "24px"
  badge:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: "2px 10px"
  badge-outline:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: "2px 10px"
  status-badge-success:
    backgroundColor: "{colors.success-muted}"
    textColor: "{colors.success}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: "2px 10px"
  nav-link:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
    height: "36px"
  nav-link-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.foreground}"
  eyebrow:
    backgroundColor: "transparent"
    textColor: "{colors.brand}"
    typography: "{typography.eyebrow}"
  tab-pill-active:
    backgroundColor: "{colors.card}"
    textColor: "{colors.foreground}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill-category}"
    padding: "6px 12px"
---

# Design System: Vivancedata

## Overview

**Creative North Star: "The Job Ticket"**

A job ticket is the one sheet a trade business trusts: near-white paper, black ink,
ruled hairlines, a stamped reference number in monospace, and one coloured mark where
it matters. That is this system. The sheet is `background`, the ink is `foreground`,
the rules are the 1px `border` hairline, the stamp is the uppercase Geist Mono eyebrow,
and the single coloured mark is the deep green `brand`. Nothing on the ticket is
decorated for its own sake; the one exception is a green-to-cyan mesh confined to the
hero, the way a ticket has one printed header. The underlying discipline is
Geist-derived: Vercel's ink-and-hairline sheet, borrowed for its restraint and
re-inked in Vivancedata's green so a founder-led AI practice reads as credible to an
operations director, not only to an engineer.

This file is the **token contract**. `src/styles/globals.css` and `tailwind.preset.ts`
implement it; both sites consume it through the published `@vivancedata/ui` package.
When they disagree, this file is wrong or the code is: fix one, not neither.

The density is calm and paper-like: 96 to 128px of vertical rhythm between bands,
24 to 32px inside a card, one accent per screen. Weight is nearly binary (600 for
headings, 500 for controls, 400 for everything else), tracking is negative at
heading scale and neutral at body scale, and the only face on the page is Geist.
Confirmed rejections: no glows, glass, cursor effects, floating shapes or parallax;
no third typeface, no italic, no light or black weight; no neumorphic shadows.

### What was adapted from Geist, and why

Geist is a developer-platform language. Vivancedata sells AI consulting to startups
*and* to blue-collar industries (construction, HVAC, manufacturing, logistics). A
verbatim Geist clone reads as credible to an engineer and cold to an operations
director, so four deliberate departures:

| Geist | Vivancedata | Reason |
|---|---|---|
| `#0070f3` link blue as the accent | deep green `152 52% 20%` as `brand` | The brand survives; the discipline is what we borrowed |
| Cyan/violet/magenta/amber hero mesh | green → teal → cyan hero mesh | One flourish, still ours |
| Light sheet only (undocumented dark) | full light + dark token pair | 571 `dark:` classes and a live theme toggle already ship |
| Fixed `-2.4px` display tracking at 48px | `em`-relative tracking, `clamp()` sizing | The source values were sampled at a narrow viewport; taken literally they *shrink* the existing 56px hero |

### Adoption

Measured 2026-09-01 against the running marketing site (`localhost:3100`, 1280px
viewport, both themes) and learning platform (`localhost:3101`), consuming
`@vivancedata/ui` v0.4.0. This document is the contract; the sites are behind it in
the following specific ways.

- **Marketing home (`/`, 20 sections, 105 headings):** every heading size sits on the
  ladder (76 / 56 / 32 / 24 / 20 / 18px), but only 65 of 105 carry a type token's exact
  tracking; the other 40 fall back to the global `-0.03em` floor or Tailwind's
  `tracking-tight` (`-0.025em`), and 3 h3s set weight 700 against the 600 rule. The
  hero headline is an `h2` at `display-xl`; the page has no `h1`.
- **Six marketing routes (`/`, `/pricing`, `/services`, `/industries/hvac-trades`,
  `/about`, `/contact`; 191 headings):** 175 are on-ladder sizes. The 16 off-ladder
  cases are the `/pricing` and `/contact` page titles at 48px weight 400 (Tailwind
  `text-5xl`, no type token) and 13 `h4` elements on `/industries/hvac-trades` that wear
  the 12px eyebrow style.
- **Learning platform (`/`, `/courses`; 28 headings):** 10 are off-ladder (72, 36, 30,
  16px) and every h1/h2 is weight 700. Its home page carries 15 gradient-bearing
  elements: a second decorative system this contract forbids.
- **Colour, faces and controls land as specified.** Body is Geist 16px `foreground`
  on the 98% sheet; paragraphs are `muted-foreground`; body links are `brand`; the
  only faces present are Geist (1,723 elements on `/`) and Geist Mono (34). The nav
  CTA is an ink 6px square at 40px; hero CTAs are 100px pills at 48px; inputs are 6px,
  hairlined, white, 40px. Dark mode inverts correctly (black sheet, 93% ink, 63% body
  grey, 4% card, 15% hairline, light CTA pill). Eyebrows render as Geist Mono 12px,
  `+0.02em`, `brand` (18 on `/`, 15 on the HVAC page).
- **Elevation is the widest gap.** On `/`, 50 elements carry Tailwind's default
  `shadow-sm`, 14 `shadow-lg`, 5 `shadow-xl` and 4 `shadow-2xl`, against 8 on
  `--shadow-1` and none on `--shadow-2`. `/pricing` cards wear two teal-tinted
  shadows (`rgba(15,118,110,0.22) 0 25px 60px -45px` and
  `rgba(13,148,136,0.55) 0 35px 80px -50px`) that exist nowhere in this contract.
- **The dark mesh renders dim locally, and that is a stale install, not the
  release.** `/`, `/services` and `/about` paint the mesh from `.hero-mesh::before`;
  the light stop resolves to `hsl(152 52% 35%)` as specified, but the dark stop
  resolved to `hsl(152 45% 30%)` — the pre-correction value. The cause is
  `vivancedata/node_modules/@vivancedata/ui`, which is a **v0.3.0** directory left
  over from before the fix and shadows the workspace symlink; the v0.4.0 tag tarball
  and the v0.4.0 copy installed in `crm/` both carry the raised
  `152 58% 46% / 168 62% 50% / 187 78% 56%`. Measure the mesh against a fresh
  install: a dim dark hero on a dev server means the app's own `node_modules` is
  behind, and `npm install` is the fix.

**Key Characteristics:**
- Near-white sheet, one ink tone for headings, CTAs and every border
- Depth is a 1px hairline; shadows are a two-step exception, not a default
- One brand hue (deep green) reserved for links, focus, eyebrows and the hero mesh
- Geist Sans at binary weights with negative `em` tracking; Geist Mono eyebrows
- Bimodal button shape: pills for marketing CTAs, 6px squares for app and nav chrome
- Full light and dark token pair; the CTA inverts, the mesh brightens

## Colors

Achromatic greys carry the whole page; one desaturated deep green is the only hue,
and it is spent on small, meaningful marks. Tokens are HSL triplets in CSS custom
properties, consumed as `hsl(var(--token))`. This convention is load-bearing: it is
what lets ~1,900 existing semantic utility classes (`bg-background`, `text-foreground`,
`border-border`) re-skin without edits. The frontmatter is normative; the table below
maps each CSS variable to its role and its light/dark pair.

| Token | Light | Dark | Role |
|---|---|---|---|
| `--background` | `0 0% 98%` | `0 0% 0%` | The page sheet |
| `--card`, `--popover` | `0 0% 100%` | `0 0% 4%` | Surfaces lifted off the sheet |
| `--foreground` | `0 0% 9%` | `0 0% 93%` | Headings, high-emphasis text |
| `--muted-foreground` | `0 0% 30%` | `0 0% 63%` | Body copy, nav links |
| `--muted` | `0 0% 95%` | `0 0% 9%` | Faint alternating panels, inset wells |
| `--accent` | `0 0% 96%` | `0 0% 11%` | **Neutral hover wash, not a brand color** |
| `--border`, `--input` | `0 0% 92%` | `0 0% 15%` | The 1px structural hairline |
| `--primary` | `0 0% 9%` | `0 0% 93%` | CTA fill (ink pill; inverts in dark) |
| `--primary-foreground` | `0 0% 100%` | `0 0% 9%` | Text on CTA |
| `--secondary` | `0 0% 100%` | `0 0% 4%` | White/dark pill, hairline-bordered |
| `--brand` | `152 52% 20%` | `152 45% 45%` | Links, focus, eyebrows, mesh: the green |
| `--ring` | `var(--brand)` | `var(--brand)` | Focus ring |
| `--mute`, `--faint` | `0 0% 56%`, `0 0% 63%` | `0 0% 49%`, `0 0% 40%` | Decorative greys only (see below) |
| `--radius` | `0.75rem` | `0.75rem` | Consumed by app-side arbitrary values; not dead |

### Primary
- **Ink** (`foreground` / `primary`, `hsl(0 0% 9%)`; `hsl(0 0% 93%)` in dark): the single
  tone that carries headings, the primary CTA fill, and, at lower lightness steps,
  every border. It is not pure black; the sheet is not pure white. In dark mode the
  CTA inverts to a light pill on a black sheet.
- **Sheet** (`background`, `hsl(0 0% 98%)`; `hsl(0 0% 0%)` in dark): the page. Cards sit
  on it at `card` (pure white in light, 4% in dark), lifted by a hairline rather than a
  shadow.

### Secondary
- **Vivance Green** (`brand`, `hsl(152 52% 20%)`; `hsl(152 45% 45%)` in dark): the only
  brand hue, and the only hue on a normal page. Spent on body links, the focus ring,
  the uppercase eyebrow, a `text-brand` phrase inside a display headline, and the
  three hero mesh stops. It is lightened in dark mode so it still clears AA on true
  black (7.0:1). Never a large chrome fill.

### Tertiary
- **Mesh stops** (`mesh-1/2/3`, green → teal → cyan): exist only to paint the hero
  wash. Brighter in dark mode than in light; see The Dark Mesh Rule under Elevation.
- **Status** (`success`, `warning`, `info`, `destructive`, each with a `-muted` 10%
  tint and a `-foreground`): app-side semantics for badges, alerts and form states.
  They are functional signals, not palette; they never appear on marketing surfaces
  as decoration.
- **Charts** (`chart-1..5`): green, teal and cyan tracing the mesh, plus the warning
  amber and info blue. Data only.

### Neutral
- **Body grey** (`muted-foreground`, `hsl(0 0% 30%)`; `hsl(0 0% 63%)` in dark): every
  paragraph, every nav link. The lowest grey a reader may be asked to read.
- **Well** (`muted`, `hsl(0 0% 95%)`): faint alternating panels, inset tab lists,
  skeleton bases.
- **Hover wash** (`accent`, `hsl(0 0% 96%)`): the hover and active fill on ghost,
  outline and secondary controls and on nav triggers.
- **Hairline** (`border` / `input`, `hsl(0 0% 92%)`; `hsl(0 0% 15%)` in dark): the 1px
  structural line on cards, inputs, dividers and pills.
- **Decorative greys** (`mute` `hsl(0 0% 56%)`, `faint` `hsl(0 0% 63%)`): logo-strip
  labels, input placeholders, metadata. Never copy.

### Contrast constraints (measured, sRGB, WCAG 2.1)

| Pair | Ratio | Verdict |
|---|---|---|
| `foreground` on `background` (light) | 17.2:1 | AAA |
| `muted-foreground` on `background` (light) | 8.2:1 | AAA |
| `brand` on `background` (light) | 9.3:1 | AAA |
| `brand` on `background` (dark) | 7.0:1 | AAA body, AAA large |

### Named Rules

**The Hover-Wash Rule.** `--accent` is a pale hover wash, not an accent color. In
shadcn semantics `bg-accent` / `text-accent-foreground` are hover and active states,
used throughout both apps. Putting the green here would turn every hover across 52
routes solid green. The green lives in `--brand`, which is a *new* token added for
this purpose.

**The Secondary Audit Rule.** `--secondary` changed meaning. It was green
(`152 38% 36%`); under this system it is a white pill with a hairline. Every
`bg-secondary` / `text-secondary-foreground` call site needs an audit rather than a
blind swap.

**The Decorative Grey Rule.** The greys below `muted-foreground` do not clear 4.5:1:
the Geist `mute` tier (`0 0% 56%`) lands at 3.1:1 and `faint` (`0 0% 63%`) at 2.5:1.
They are legitimate for decorative metadata, logo-strip labels, and input
placeholders. Never set copy a user must read in them. If it matters, it is
`muted-foreground` or darker.

**The One Hue Rule.** The deep green `brand` is the only brand hue. Status colours are
signals, chart colours are data; neither is ever used as decoration or chrome.

## Typography

**Display Font:** Geist Sans (with Inter, ui-sans-serif, system-ui)
**Body Font:** Geist Sans (same face)
**Label/Mono Font:** Geist Mono (with ui-monospace, SFMono-Regular, Menlo)

**Character:** One sans at two weights does all the talking; the mono face appears
only as a small uppercase stamp above a section, the way a ticket number sits above
the job description. No third face, no italic, no light or black weight. Loaded via
`next/font/google` and exposed as `--font-geist-sans` / `--font-geist-mono`.

Weight is effectively binary: **600** for headings, **500** for buttons and labels,
**400** for everything else.

### Hierarchy
- **Display XL** (600, `clamp(3rem, 6vw, 4.75rem)`, 1.02, `-0.05em`): the hero headline.
  One per page; renders at 76px on a 1280px viewport.
- **Display** (600, `clamp(2.5rem, 4.5vw, 3.5rem)`, 1.05, `-0.045em`): band headlines
  and interior page titles (56px at 1280px).
- **Heading 1** (600, `2rem`, 1.2, `-0.04em`): major section headings.
- **Heading 2** (600, `1.5rem`, 1.25, `-0.03em`): sub-sections.
- **Heading 3** (600, `1.25rem`, 1.4, `-0.02em`): card headings.
- **Heading 4** (600, `1.125rem`, 1.45, `-0.015em`): dense card headings.
- **Eyebrow** (500, `0.75rem`, 1.333, `+0.02em`, uppercase, **Geist Mono**, `brand`):
  the section stamp. Set with the `.eyebrow` class.
- **Body LG** (400, `1.125rem`, 1.6): lead paragraphs under a headline.
- **Body** (400, `1rem`, 1.5): default copy.
- **Body SM** (400, `0.875rem`, 1.43): secondary copy, table cells, button labels.
- **Caption** (400, `0.75rem`, 1.333): captions, metadata, badges.
- **Code** (400, `0.875rem`, 1.43, **Geist Mono**): inline and block code.

Bare heading elements with no type class inherit a floor of `-0.03em` tracking and
1.15 line-height from `globals.css`; the tokens above override it per size.

### Named Rules

**The Em-Tracking Rule.** Tracking is negative at heading scale and above, and
expressed in `em` so it scales with the type rather than crushing small renderings.
Body sits at neutral spacing. The eyebrow takes *positive* tracking, a departure from
the source's `0`, because uppercase monospace at 12px sets too tight without it.

**The Binary Weight Rule.** Headings are 600, never bold (700). The type scale carries
its own weight and tracking; a heading component only sets colour and balance.

**The Ladder Rule.** Every heading takes a named type token (`display-xl` through
`heading-4`). Tailwind's `text-5xl` / `text-3xl` and `font-bold` are not a heading
style in this system, and a 48px weight-400 page title is a defect, not a variant.

## Layout

The spatial model is a centred column on a full-bleed band. `Section` owns the band
(`w-full`) and pushes its children to a centred column of `max-w-7xl` (1280px) with
16px side padding, 24px from 640px and 32px from 1024px; `narrow` bands cap at
`max-w-4xl` and `wide` at `max-w-screen-2xl`. `Container` offers the same column
standalone (`sm` 768px, default 1280px, `lg` 1280px screen, `xl` 1536px). The Tailwind
container is centred with 32px padding and a 1400px `2xl` screen.

Spacing is a 4px base: `xs 4 · sm 8 · md 16 · lg 24 · xl 32 · 2xl 40 · 3xl 64 · 4xl 96 ·
section 128`. Card interiors sit at 24 to 32px; section bands run 96 to 128px of
vertical rhythm (`Section` padding steps: 32/48, 48/64, 64/96, 96/128 mobile/desktop).
Button padding is horizontal-only; height comes from line-height and a fixed control
height (32 / 40 / 44 / 48px).

Breakpoints are Tailwind's defaults (`sm` 640, `md` 768, `lg` 1024, `xl` 1280,
`2xl` 1536) with the container capped at 1400px. Display sizes fluidly `clamp()`
between viewports rather than stepping at breakpoints.

Stacking order is tokenised (`--z-dropdown` 1000 → `--z-sticky` 1020 → `--z-fixed`
1030 → `--z-modal-backdrop` 1040 → `--z-modal` 1050 → `--z-popover` 1060 →
`--z-tooltip` 1070); nothing sets an ad-hoc z-index above these.

## Elevation & Depth

Depth is a hairline first and a shadow only when a surface genuinely floats. The
five neumorphic dual-direction shadows this system replaced are gone. Cards, inputs
and dividers are level 0: a 1px `border` and no shadow. Tonal layering (the white
`card` on the 98% sheet, the 4% card on black) does the rest.

### Shadow Vocabulary
- **Level 0, Flat** (1px `--border`, no shadow): cards, inputs, dividers. **The default.**
- **Level 1, Whisper** (`--shadow-1`: `0 1px 1px rgb(0 0 0 / 0.04)`; dark
  `0 1px 1px rgb(0 0 0 / 0.5)`): lightly raised cards (`Card variant="raised"`).
- **Level 2, Floating** (`--shadow-2`: `0 2px 2px rgb(0 0 0 / 0.04), 0 8px 16px -4px
  rgb(0 0 0 / 0.08)`; dark `0 2px 2px rgb(0 0 0 / 0.5), 0 8px 16px -4px rgb(0 0 0 / 0.6)`):
  menus, modals, tooltips, featured tiles (`Card variant="elevated"`, `DialogContent`).

`shadow-elevation-1/2/3` are aliases: 1 and 2 map to the levels above and 3 collapses
into 2 deliberately. The system has no third step.

### The one flourish

A single multi-stop mesh gradient, **confined to the hero**, running green → teal →
cyan off the `brand` token. This is the entire decorative system. There is no second
one: no glows, no glass, no cursor effects, no floating shapes, no parallax. Those
components were retired from this package deliberately, and re-adding a decorative
system is the specific failure this design guards against. It is painted by
`.hero-mesh::before` as three radial gradients at 0.28 / 0.22 / 0.18 alpha, isolated
behind the hero's content.

### Named Rules

**The Hairline-First Rule.** Define cards and inputs with a 1px hairline before
reaching for a shadow. Flat is the default and level 2 is the ceiling.

**The Dark Mesh Rule.** The stops (`--mesh-1/2/3`) are brighter in dark mode than in
light, which looks wrong in the token table and is correct on screen. The mesh is an
additive wash over `--background`; in dark mode that ground is pure black, so stops
dimmed on the usual instinct disappear entirely. They were 30/35/40% lightness and the
flourish was invisible in the theme that loads by default. Judge any future change to
them rendered on the dark hero, never by their relationship to the light values.

## Shapes

The radius language is bimodal on purpose: tight 6px squares for functional chrome,
full pills for marketing CTAs, 12 to 16px on content cards in between.

| Token | Value | Use |
|---|---|---|
| `sm` | `6px` | Nav and app buttons, inputs, selects |
| `md` | `12px` | Feature cards, code blocks |
| `lg` | `16px` | Pricing cards, large panels |
| `xl`, `2xl` | `16px`, `20px` | Retuned aliases so existing `rounded-xl` / `rounded-2xl` call sites sharpen without edits |
| `pill-category` | `64px` | Category tab pills |
| `pill` | `100px` | Marketing CTA pills |
| `full` | `9999px` | Avatars, circular icon buttons, badges |

`--radius` is `0.75rem` (12px), the card default. Borders are always 1px and always
`border` (the global `*` rule sets it); there are no 2px strokes except the active
underline tab, which is a 2px `brand` bottom border. Nothing is clipped into an
angled or organic silhouette; the sheet is rectangular and its cards are softly
squared.

### Named Rules

**The Two-Shape Rule.** Do not mix the two button shapes within one context.
Marketing CTAs stay pills; app and nav controls stay 6px squares. `Button` defaults
to `square` because most call sites are app chrome; marketing opts in with
`shape="pill"`.

## Components

Controls feel like ruled paper: quiet, hairlined, and instant. Every interactive
state is a colour change over `--duration-fast` (150ms); nothing lifts, scales or
glows on hover. Focus is a 2px `ring` (`brand`) offset 2px from the control on
`background`.

### Buttons
- **Shape:** tight square (6px) by default; marketing CTAs opt into the pill (100px).
- **Primary (`default`):** ink fill (`primary`) with white text; hover drops to 90%
  opacity. Sizes: `sm` 32px / 12px text / 12px padding; default 40px / 14px / 16px;
  `lg` 44px / 16px / 24px; `xl` 48px / 16px / 32px; icon 32 / 40 / 48px squares.
  Weight 500. In dark mode the fill inverts to a light pill.
- **Secondary:** white (`secondary`) fill with a 1px hairline; hover takes the
  `accent` wash. The pill counterpart to the ink CTA.
- **Outline:** sheet-coloured (`background`) with a hairline; hover takes the `accent`
  wash. The hairline is the whole treatment: no backdrop blur, no lift.
- **Ghost:** transparent until hover, then the `accent` wash.
- **Link:** `brand` text, underline on hover with a 4px offset. Links carry the green,
  not ink.
- **Destructive / Success:** filled with the status colour, 90% on hover.
- **Hover / Focus:** colour transition over 150ms; `focus-visible` ring 2px `brand`
  with 2px offset; disabled at 50% opacity with pointer events off. Loading state
  swaps the label for a spinning 16px stroke icon and "Loading...".

### Cards / Containers
- **Corner Style:** softly squared (12px, `rounded-md`); pricing and large panels 16px.
- **Background:** `card` (white; 4% in dark). `outline` variant sits on `background`;
  `ghost` is transparent and borderless.
- **Shadow Strategy:** none by default (level 0). `raised` adds `--shadow-1`;
  `elevated` adds `--shadow-2`. See Elevation & Depth.
- **Border:** 1px `border` hairline on every variant except `ghost`.
- **Internal Padding:** 24px (`p-6`) in header, content and footer; content and
  footer drop their top padding to sit flush under the header. Title is 20px, 600,
  tight tracking, 24px from 640px; description is 14px `muted-foreground`.

### Inputs / Fields
- **Style:** 6px square, 1px `input` hairline, `card` fill, 40px tall, 14px text,
  12px horizontal padding (`sm` 36px / 12px text; `lg` 48px / 16px padding).
  Placeholder in `faint`. Optional 16px start/end icon in `muted-foreground` with
  40px padding on that side.
- **Focus:** 2px `brand` ring offset 2px. The `ghost` variant has no border and takes
  the `accent` wash on focus instead.
- **Error / Disabled:** disabled at 50% opacity with a not-allowed cursor.

### Badges
- **Style:** full pill, 12px 600 text, 2px by 10px padding. Default is ink on white;
  `outline` is a hairline with `foreground` text; `brand` is the green fill; status
  variants fill with `success` / `warning` / `info` / `destructive`, and their
  `-muted` siblings tint the background at 10% and colour the text.
- **State:** `StatusBadge` wraps the outline badge with a status-coloured hairline,
  10% tint, status-coloured text and a 12px inline icon (`success`, `error`,
  `warning`, `pending`, `info`).

### Navigation
- **Style:** triggers are 36px tall, 14px weight 500, 16px horizontal padding, 12px
  radius, on `background`; hover and focus take the `accent` wash; open or active
  triggers sit on a 50% `accent` wash with a rotating 12px chevron. The dropdown
  viewport is a `popover` panel with a hairline and 12px radius. Nav CTA is the
  square ink button. Mobile collapses to the same tokens in a sheet.

### Tabs
- **Style:** the list is a `muted` well with 4px padding and 12px radius; triggers
  are 14px weight 500, 12px by 6px padding, 6px radius; the active trigger lifts onto
  `background` with a small shadow. `ghost` uses the `accent` wash; `pill` is the
  64px category pill that goes `card`-white when active; `underline` drops the well
  and marks the active tab with a 2px `brand` bottom border.

### Dialog
- **Style:** a `popover` panel with a hairline, 16px radius, 24px padding, max
  512px wide, centred, on `--shadow-2` (one of the few level-2 surfaces). The overlay
  is 50% black with a small backdrop blur. Opens with a 200ms scale-in and closes
  with a fade.

### Eyebrow (signature)
The uppercase Geist Mono stamp that labels a band like a spec sheet: 12px, weight 500,
`+0.02em`, `brand`. It sits above a display or heading-1 headline with 16 to 24px
below it. It is a `<p>` or `<span>`, never a heading element.

### Section (signature)
The band component. `mesh` variant applies `.hero-mesh` and is the only place the
flourish may appear; `muted` is a 50% `muted` wash; `card` is a hairlined 12px panel.

### Motion
Three durations (`--duration-fast` 150ms for control colour, `--duration-default`
200ms for surfaces and entrances, `--duration-slow` 300ms for slide-ins), all
`ease-out`. Entrances are a 200ms fade or a 200ms scale from 0.98. Reduced motion
collapses every animation and transition to 0.01ms.

## Do's and Don'ts

### Do:
- **Do** keep the sheet near-white and let ink carry headings, CTAs, and borders.
- **Do** define cards and inputs with a 1px hairline before reaching for a shadow.
- **Do** reserve `--brand` for links, focus, eyebrows, and the hero mesh.
- **Do** set display headings in Geist Sans 600 with negative `em` tracking.
- **Do** step the text ladder deliberately: `foreground` → `muted-foreground` → decorative greys.
- **Do** give every heading a named type token (`display-xl` through `heading-4`), and set eyebrows with `.eyebrow` on a non-heading element.
- **Do** judge the dark mesh stops rendered on the dark hero, never by their relationship to the light values.

### Don't:
- **Don't** fill large surfaces with `--brand`; it is an accent, not chrome.
- **Don't** put brand color in `--accent`; that token is a neutral hover wash.
- **Don't** set readable copy in the sub-`muted-foreground` greys (3.1:1 and 2.5:1).
- **Don't** mix pill and square buttons in one context.
- **Don't** pile on shadows; flat is the default and level 2 is the ceiling.
- **Don't** set body copy in pure black; the ink is `0 0% 9%`, and body steps lighter.
- **Don't** add a second decorative system.
- **Don't** reach for Tailwind's default `shadow-sm` / `shadow-lg` / `shadow-xl` or a tinted shadow; the only shadows are `--shadow-1` and `--shadow-2`.
- **Don't** set headings at weight 700 or at `text-5xl` / `text-3xl` sizes off the ladder.
