---
name: Vivancedata Design System
description: >
  Ink on a near-white sheet, depth as a 1px hairline, one deep green, one hero mesh.
  Structurally derived from Vercel's Geist system and brand-preserving: Vivancedata's
  green survives as the accent (`brand`) that Geist spends on Vercel blue; Geist Sans
  drives tightly-tracked display type, Geist Mono labels uppercase eyebrows, and
  buttons split by context (pills for marketing CTAs, 6px squares for app and nav chrome).
  A second, opt-in world (`nightshift`) is recorded at the end of this file: a warm
  near-black sheet, a serif display face, and green reserved for machine state.
  Its tokens carry the `nightshift-` prefix and reach only apps that ask for them.
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

  # ========================================================================
  # The `nightshift` world (opt-in, `data-world="nightshift"` on <html>).
  # Same convention as above: light value first, `-dark` sibling under `.dark`.
  # The inversion is deliberate here -- dark is the canonical sheet and the
  # light value is its daylight counterpart, not the other way round.
  # ========================================================================
  nightshift-background: "hsl(44 24% 96%)"
  nightshift-background-dark: "hsl(60 8% 5%)"
  nightshift-foreground: "hsl(48 12% 9%)"
  nightshift-foreground-dark: "hsl(38 18% 91%)"
  nightshift-card: "hsl(40 30% 98%)"
  nightshift-card-dark: "hsl(60 6% 7%)"
  nightshift-muted: "hsl(44 20% 92%)"
  nightshift-muted-dark: "hsl(55 6% 11%)"
  nightshift-muted-foreground: "hsl(45 6% 34%)"
  nightshift-muted-foreground-dark: "hsl(40 5% 66%)"
  nightshift-accent: "hsl(44 20% 93%)"
  nightshift-accent-dark: "hsl(60 5% 12%)"
  # Cream pill on the warm-black sheet; ink pill on the warm-paper one
  nightshift-primary: "hsl(48 12% 9%)"
  nightshift-primary-dark: "hsl(38 18% 91%)"
  nightshift-primary-foreground: "hsl(44 24% 96%)"
  nightshift-primary-foreground-dark: "hsl(60 8% 5%)"
  # The evidence green. Same hue as the Job Ticket brand (152); lightness only
  nightshift-brand: "hsl(152 52% 24%)"
  nightshift-brand-dark: "hsl(152 42% 58%)"
  nightshift-brand-foreground: "hsl(44 24% 96%)"
  nightshift-brand-foreground-dark: "hsl(60 8% 5%)"
  # Wall labels and field names live here, so this tier is readable, not decorative
  nightshift-mute: "hsl(45 5% 42%)"
  nightshift-mute-dark: "hsl(45 4% 52%)"
  # Decorative only; `aria-hidden` texture
  nightshift-faint: "hsl(45 5% 62%)"
  nightshift-faint-dark: "hsl(45 4% 33%)"
  nightshift-border: "hsl(42 16% 86%)"
  nightshift-border-dark: "hsl(55 7% 14%)"
  nightshift-input: "hsl(42 16% 82%)"
  nightshift-input-dark: "hsl(55 7% 18%)"
  # The structural material of this world, in place of the hero mesh
  nightshift-rule: "hsl(42 16% 86%)"
  nightshift-rule-dark: "hsl(55 7% 14%)"
  nightshift-dot: "hsl(45 8% 74%)"
  nightshift-dot-dark: "hsl(50 6% 31%)"
  nightshift-warning: "hsl(32 76% 38%)"
  nightshift-warning-dark: "hsl(38 78% 62%)"
  nightshift-destructive: "hsl(8 68% 42%)"
  nightshift-destructive-dark: "hsl(8 72% 62%)"
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
  # The serif display scale of the `nightshift` world. One weight (400); scale
  # and italic carry emphasis, because the face has no second weight.
  nightshift-serif-xl:
    fontFamily: "Instrument Serif, Iowan Old Style, Palatino, Georgia, serif"
    fontSize: "clamp(2.75rem, 7vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  nightshift-serif-lg:
    fontFamily: "Instrument Serif, Iowan Old Style, Palatino, Georgia, serif"
    fontSize: "clamp(2.125rem, 4.5vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.018em"
  nightshift-serif-md:
    fontFamily: "Instrument Serif, Iowan Old Style, Palatino, Georgia, serif"
    fontSize: "clamp(1.75rem, 3vw, 2.375rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  nightshift-serif-sm:
    fontFamily: "Instrument Serif, Iowan Old Style, Palatino, Georgia, serif"
    fontSize: "1.375rem"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  # Geist Mono, uppercase: controls, column heads, wall labels
  nightshift-label:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.09em"
  # Geist Mono at reading size: times, job numbers, extracted values, money
  nightshift-data:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.005em"
    fontFeature: "tnum 1, calt 0"
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
  # The `nightshift` control vocabulary. Every control is a pill with an
  # uppercase mono label and a 44px minimum height.
  nightshift-cta-primary:
    backgroundColor: "{colors.nightshift-primary}"
    textColor: "{colors.nightshift-primary-foreground}"
    typography: "{typography.nightshift-label}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "44px"
  nightshift-cta-primary-hover:
    backgroundColor: "hsl(38 18% 91% / 0.85)"
    textColor: "{colors.nightshift-primary-foreground}"
  nightshift-cta-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.nightshift-foreground}"
    typography: "{typography.nightshift-label}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "44px"
  nightshift-cta-secondary-hover:
    backgroundColor: "{colors.nightshift-accent}"
    textColor: "{colors.nightshift-foreground}"
  nightshift-cta-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.nightshift-brand}"
    typography: "{typography.nightshift-label}"
    height: "44px"
  nightshift-cta-quiet-hover:
    backgroundColor: "transparent"
    textColor: "{colors.nightshift-foreground}"
  nightshift-wall-label:
    backgroundColor: "transparent"
    textColor: "{colors.nightshift-mute}"
    typography: "{typography.nightshift-label}"
  nightshift-record-panel:
    backgroundColor: "{colors.nightshift-card}"
    textColor: "{colors.nightshift-foreground}"
    rounded: "0px"
    padding: "0px"
  nightshift-record-row:
    backgroundColor: "transparent"
    textColor: "{colors.nightshift-foreground}"
    typography: "{typography.nightshift-data}"
    padding: "12px 24px"
  nightshift-tab-rest:
    backgroundColor: "transparent"
    textColor: "{colors.nightshift-mute}"
    typography: "{typography.nightshift-label}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "44px"
  nightshift-tab-selected:
    backgroundColor: "{colors.nightshift-primary}"
    textColor: "{colors.nightshift-primary-foreground}"
    typography: "{typography.nightshift-label}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "44px"
  nightshift-input:
    backgroundColor: "{colors.nightshift-background}"
    textColor: "{colors.nightshift-foreground}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "8px 12px"
    height: "44px"
  nightshift-nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.nightshift-mute}"
    typography: "{typography.nightshift-label}"
    rounded: "{rounded.sm}"
    padding: "8px 12px"
  nightshift-nav-link-hover:
    backgroundColor: "transparent"
    textColor: "{colors.nightshift-foreground}"
  nightshift-demo-link:
    backgroundColor: "transparent"
    textColor: "{colors.nightshift-brand}"
    typography: "{typography.nightshift-label}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "44px"
---

# Design System: Vivancedata

**This file contracts two worlds.** The sections immediately below are the default
**Job Ticket** sheet that every app in the fleet loads. A second, opt-in world —
**nightshift** — is recorded at the end of this file under its own heading; only
`vivancedata` runs it, by setting `data-world="nightshift"` on `<html>`. Frontmatter
tokens carrying the `nightshift-` prefix belong to that world and to no other.

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


---

# Design System: Vivancedata — the "nightshift" world

Everything above this line is the **Job Ticket** world: the near-white sheet every
app in the fleet loads by default. Everything below it is `nightshift`, a second,
**opt-in** token set that only `vivancedata` runs. The two share one package, one
Tailwind preset, one spacing scale, one radius scale and one brand hue; they do not
share a sheet, a display face, or a rule about what the green means.

**How an app opts in.** Set `data-world="nightshift"` on `<html>`, and load the
display face as `--font-display`. Nothing else. Apps that do not set the attribute
resolve the tokens at the top of this file and are untouched — `crm`, `learn` and the
three demo sites never see a nightshift value. `--rule` and `--dot` fall back to
`--border` in those worlds, so a component built here degrades rather than breaks.
`vivancedata` also sets `defaultTheme="dark"`, because in this world dark is the
design and light is its daylight counterpart, not a second identity.

**Which rules cross the line.** A rule stated above applies to the Job Ticket world
unless it is restated here. Three of its prohibitions are lifted *inside* nightshift
and nowhere else: this world sets display type in a serif, uses a real italic as its
emphasis mechanism, and has no eyebrow. Everything else above — the hover-wash
meaning of `--accent`, the decorative-grey floor, the one-hue discipline, the
hairline-first depth model — holds harder here, not less.

## Overview

**Creative North Star: "The Night Log"**

A night log is the record a system leaves behind while nobody is watching: a
timestamp, a source, the mess that came in, and the fields something managed to fill.
That is this world. The sheet is a warm near-black (`hsl(60 8% 5%)`) under cream ink
(`hsl(38 18% 91%)`); the structure is a 1px hairline grid and a dot matrix; the
display voice is Instrument Serif at one weight; every machine fact — a time, a job
number, an extracted value, a price, a control label — is set in Geist Mono; and the
green is spent only where a system actually did something right.

The scene the dark ground was chosen from belongs in the record, because it is the
argument for the whole world: an owner-operator reading on a phone at 9pm, in a truck
cab or a shop office after the lights are off. It refuses the AI-consultancy hero —
gradient wash, capability cards, logo wall — and it equally refuses the stark white
platform sheet this site already was.

Density is quiet and ruled: 96 to 128px between bands, hairlines instead of card
edges, one measure per column set in `ch` on the element that carries the type.
Weight is not an instrument here — the serif has one weight and the mono has two —
so scale, italic and the hairline do the work that bold does elsewhere.

**Key Characteristics:**
- Warm near-black sheet under cream ink; dark is canonical, light is its counterpart
- Nothing is a card and nothing casts a shadow; depth is a 1px `rule`
- A dot matrix as atmosphere, masked so no copy is ever set on texture
- Three faces with three jobs: Instrument Serif display, Geist Sans prose, Geist Mono facts
- Green marks affirmative machine state only — never emphasis, never prices, never links in general
- Emphasis is the serif's italic; one word of a sentence turns
- Every control is a mono uppercase pill, 44px minimum
- Browser surfaces (selection, caret, scrollbar, accent) are themed, not left to the UA

## Colors

Two warm neutrals carry the page — a near-black with a green cast and a cream with a
paper cast — and one green appears at small scale as evidence. The frontmatter is
normative; the table maps each variable to its role and its light/dark pair, with the
**dark column canonical**.

| Token | Light | Dark (canonical) | Role |
|---|---|---|---|
| `--background` | `44 24% 96%` | `60 8% 5%` | The sheet. Warm, never neutral grey |
| `--card` | `40 30% 98%` | `60 6% 7%` | A panel bounded by a rule, not a card |
| `--foreground` | `48 12% 9%` | `38 18% 91%` | Display type, filled values, ink |
| `--muted-foreground` | `45 6% 34%` | `40 5% 66%` | Prose, leads, notes |
| `--muted` | `44 20% 92%` | `55 6% 11%` | The one tinted column (recommended tier) |
| `--accent` | `44 20% 93%` | `60 5% 12%` | **Neutral hover wash, as above. Not the green** |
| `--rule` | `42 16% 86%` | `55 7% 14%` | The 1px structural hairline: the world's material |
| `--dot` | `45 8% 74%` | `50 6% 31%` | The dot matrix behind empty half-viewports |
| `--primary` | `48 12% 9%` | `38 18% 91%` | The CTA pill; inverts against the sheet |
| `--brand` | `152 52% 24%` | `152 42% 58%` | Affirmative machine state. Nothing else |
| `--mute` | `45 5% 42%` | `45 4% 52%` | Wall labels and field names — **readable tier here** |
| `--faint` | `45 5% 62%` | `45 4% 33%` | `aria-hidden` texture only |

### Primary
- **Warm near-black** (`background`, dark `hsl(60 8% 5%)`): the sheet. Its hue is
  pushed off neutral so it reads as a room with the lights off rather than as a
  black rectangle. Panels sit two points above it at `card`; that two-point step and
  a hairline are the entire depth model.
- **Cream** (`foreground`, dark `hsl(38 18% 91%)`): display type, filled values, the
  primary pill. Not white — white on this ground glares at 9pm.

### Secondary
- **Evidence Green** (`brand`, dark `hsl(152 42% 58%)`, light `hsl(152 52% 24%)`): the
  only hue in the world. Same brand hue as the Job Ticket green (152); only lightness
  moved, so this is the Vivancedata green seen at night rather than a new colour. In
  the shipped home surface it appears in exactly three roles: the `filled` verdict
  mark, the mono links that open a running demo, and the focus ring. It is ink, never
  light: no glow, no large fill, no tinted panel.

### Tertiary
- **Warning amber** (`warning`, dark `hsl(38 78% 62%)`): the `flag` verdict mark —
  a system noticed something and handed it to a person. The only other hue a reader
  meets on a record.
- **Destructive** (`destructive`, dark `hsl(8 72% 62%)`): form validation messages.
  Nothing else on a marketing surface.

### Neutral
- **Prose grey** (`muted-foreground`): every paragraph, lead and note. 8.3:1 on the
  sheet — this world's prose sits well above the floor because it is read in the dark.
- **Wall grey** (`mute`): column heads, field names, footer column titles, nav links,
  the resting tab. **A readable tier in this world**, not a decorative one.
- **Texture grey** (`faint`): the drifting ledger strip and the quotation marks around
  a sample input. `aria-hidden` by construction.
- **Hairline** (`rule`): every divider, panel edge, band boundary and grid cell edge.
- **Dot** (`dot`): the radial-gradient matrix, 0.75px dots on a 12px pitch.

### Contrast constraints (measured, sRGB, WCAG 2.1, dark sheet)

| Pair | Ratio | Verdict |
|---|---|---|
| `foreground` on `background` | 16.0:1 | AAA |
| `muted-foreground` on `background` | 8.3:1 | AAA |
| `brand` on `background` | 8.9:1 | AAA |
| `mute` on `background` | 5.4:1 | AA |
| `mute` on `card` | 5.2:1 | AA |
| `mute` on `muted` (the tinted tier column) | 4.7:1 | AA |
| `faint` on `background` | 2.6:1 | Decorative only |

### Named Rules

**The Evidence Green Rule.** In this world the green means one thing: *a machine got
this right*. A value a system read and matched, a capability a tier includes, a link
that opens one of those running systems, and the focus ring that is the browser's own
affirmative. It is not emphasis, not a price, not a heading accent, not links in
general, not an icon tint, not a recommendation label. Every one of those was tried
during the build and removed. Audit test: if you cannot name the machine that
verified the thing you just coloured, it is not green.

**The Wall-Label Floor Rule.** `--mute` carries wall labels and field names in this
world, so it is a **readable** tier and must clear 4.5:1 against `card` and against
the tinted `muted` column, not merely against `background`. Dark `--mute` was raised
from 45% to 52% lightness for exactly this. `--faint` keeps the decorative role the
Job Ticket world gives both greys, and is only ever used on `aria-hidden` texture.

**The Judged-On-The-Sheet Rule.** `--dot` is judged rendered on the dark sheet, never
against its light value. At 22% lightness the field was below the threshold where it
reads as material at all — the same markup read as a legible field in the light
counterpart and as an empty half-viewport in the dark, which is how "atmosphere"
becomes "unfinished". It is 31% now. This is the same class of mistake The Dark Mesh
Rule records above; the lesson survived the world change.

**The Stated Placeholder Rule.** This world states its own `::placeholder` colour
(`hsl(var(--mute))`). The package input's `placeholder:text-faint` lands near 2:1 on
this sheet, so inheriting it would have shipped an invisible placeholder. Any world
with a dark canonical sheet states placeholder colour explicitly rather than
inheriting it.

## Typography

**Display Font:** Instrument Serif 400, with its true italic (fallbacks: Iowan Old
Style, Palatino Linotype, Palatino, Georgia, serif)
**Body Font:** Geist Sans (as above)
**Label/Data Font:** Geist Mono (as above)

**Character:** Three voices with three jobs, and the split is the argument of the
page. The serif is the human speaking; the sans explains; the mono is what the
machine wrote down. Loaded per-app via `next/font/google` and exposed as
`--font-display`, `--font-geist-sans`, `--font-geist-mono`. The serif is loaded
*with* its italic, because the italic is not decoration here — it is the emphasis
mechanism, in place of a second weight the face does not have.

### Hierarchy
- **Serif XL** (400, `clamp(2.75rem, 7vw, 6rem)`, 0.98, `-0.02em`): the page's one
  headline. Left-set, capped at ~17ch on the element itself. 96px at desktop.
- **Serif LG** (400, `clamp(2.125rem, 4.5vw, 3.5rem)`, 1.04, `-0.018em`): band
  headlines.
- **Serif MD** (400, `clamp(1.75rem, 3vw, 2.375rem)`, 1.1, `-0.015em`): the hero's
  second beat — the italic turn under the headline.
- **Serif SM** (400, `1.375rem`, 1.25, `-0.01em`): sub-headings, tier names, the
  wordmark, closing lines.
- **Body LG / Body / Body SM / Caption** (Geist Sans, 400): unchanged from the ladder
  above. Leads are Body LG at `muted-foreground`; notes are Caption.
- **Label** (Geist Mono 500, `0.6875rem`, 1.2, `+0.09em`, uppercase): every control,
  column head, field name, nav link and footer column title. Never above a heading.
- **Data** (Geist Mono 400, `0.8125rem`, 1.5, `+0.005em`, tabular): times, job
  numbers, extracted values, the contact address. `font-variant-numeric: tabular-nums`
  and `calt 0` are set on every mono element in this world, so figures line up in
  columns the way measurements should.

Headings in this world take `-0.015em` tracking and 1.1 line-height at the base
layer, overriding the grotesque floor set above — a high-contrast serif closes up on
its own at display size, and `-0.04em` would crush it.

### Named Rules

**The Italic Turn Rule.** Emphasis is the serif's italic, on one word or one short
phrase of a sentence, and never more than once per band. Colouring the emphasis green
is the obvious move and the wrong one: it would make green mean "important" instead
of "verified" everywhere else on the page. Bold does not exist here; the display face
has one weight.

**The Mono-Is-Machine Rule.** Geist Mono is reserved for things a machine produced or
a machine operator types: timestamps, job numbers, extracted values, addresses, and
the controls that operate the systems. A sentence a person would speak — "One-off,
nothing ongoing", a recommendation, a lead paragraph — is set in the sans or the
serif. Mono on a human sentence is costume.

**The Measure-On-The-Type Rule.** `ch` resolves against the element's own font, so
every measure cap (`max-w-[52ch]`, `max-w-[17ch]`) goes on the element that carries
the type, never on a wrapper. A measure set on a wrapper measured the 16px body sans
while the heading set at 96px and produced a 176px column that broke the headline one
word to a line. Caps observed in the build: 17ch display, 26ch the italic turn,
34–46ch leads, 52–62ch prose.

## Layout

The spatial model is a ruled sheet, not a stack of panels. Every band is a full-bleed
section separated from the next by a single `border-t border-rule`; inside it, the
standard centred `container` with 16px side padding carries a 12-column grid. Bands
run `py-3xl` (64px) on mobile and `py-4xl` (96px) from `md`. The 4px spacing scale and
the breakpoints above are unchanged.

Structure is expressed as hairlines rather than as containers: lists take
`border-t` on the parent and `border-b` per row; grids let cells borrow neighbours'
edges so no line is ever doubled; the pricing comparison is one grid ruled on every
cell rather than three cards.

**The Bleed-Pair Rule.** `.bleed` (`margin-inline: -1rem`) cancels the app shell's
horizontal padding so a band's rules and dot fields reach the viewport edge. Its
`-1rem` tracks `main`'s `px-4` in the consuming layout: **they are a pair and must
move together.** Change one without the other and every band rule stops 16px short of
the edge, which reads as a stack of wide cards — the exact thing this world refuses.

The dot matrix occupies the half of a viewport the type leaves empty (42–50% width,
right-aligned, `-z-10`), behind a vertical hairline where it needs something to stand
on. It is masked top and bottom (`.field-dots-fade`, transparent → opaque at 18% →
72%) so no copy is ever set on texture, and it is `aria-hidden` everywhere.

## Elevation & Depth

**There is no elevation in this world.** Nothing is a card and nothing casts a shadow.
Depth is a 1px `rule` and a two-point tonal step from `background` to `card`;
everything sits on the same sheet. `--shadow-1` and `--shadow-2` are still defined so
package components that reference them resolve, but no nightshift surface uses them,
and `.hero-mesh::before` is explicitly disabled — the grid replaced the flourish, and
this world has no second decorative system either.

### Named Rules

**The Hairline-Only Rule.** A panel is bounded by `border-rule` on all four edges, or
it is not a panel. No shadow, no glow, no lift on hover, no backdrop tint except the
nav's own `backdrop-blur` over a translucent sheet.

**The Bounded Tint Rule.** The one filled surface on the page — the recommended
pricing column at `bg-muted` — must be closed by a rule on every edge, including the
final CTA row. Without the closing rule its tint ends in mid-air as a hanging
rectangle, which re-introduces the card the world refuses. Any future tinted region
inherits this: a tint is a region of a ruled sheet, never a floating object.

## Shapes

Two shapes and one drawn mark set.

| Form | Value | Use |
|---|---|---|
| Pill | `100px` (`rounded-pill`) | Every control: primary, secondary, tab, demo link |
| Tight square | `6px` (`rounded-sm`) | Inputs, icon buttons, nav links, focus targets |
| Square | `0px` | Record panels, grid cells, bands — everything structural |

Panels and grid cells have **no radius at all**: a ruled sheet has corners, not
rounded ones. Borders are always 1px and always `rule`. Focus is a 2px `ring`
(`brand`) at 2px offset with a 2px radius, stated at the base layer so it applies to
anything focusable.

**Marks.** The world draws its own small marks rather than pulling them from the icon
library, because at 12–14px the library's 2px stroke fills in and the verdicts have to
read as one family. One grammar: square viewBox, 1.25–1.5px stroke, round caps and
joins, `currentColor` throughout so a mark inherits the tier of the text it sits in.
The set is one arrow (every control that goes somewhere) and four verdicts: `filled`
(check, `brand`), `flag` (triangle, `warning`), `held` (circle-minus, `foreground`),
`absent` (a dash, `mute`).

**The Dash-Not-Cross Rule.** Absence is a rule, not a cross. A red X on a cheaper tier
scolds the reader for reading the cheaper column; a dash says "not this one".

## Components

Controls feel like the buttons on a machine: mono, uppercase, pill-shaped, and quiet
until touched. Every state change is a colour transition over `--duration-fast`
(150ms). Nothing lifts, scales or glows. Minimum height is 44px everywhere — the
audience is on a phone in a truck cab, not a mouse at a desk.

### Buttons
- **Shape:** pill (100px), uppercase Label type, 20px horizontal padding, 44px floor.
- **Primary (`ctaPrimary`):** cream fill (`primary`) with sheet-coloured text; hover
  drops to 85%. **One per band at most** — it marks the only thing to do next.
- **Secondary (`ctaSecondary`):** transparent with a `rule` hairline; hover raises the
  border to `mute` and takes the `accent` wash. For a real alternative, not a fallback.
- **Quiet (`ctaQuiet`):** no container. Mono uppercase `brand` text with the arrow
  mark, which slides 2px on hover; hover moves the text to `foreground`. This is the
  green-link case, and it is only legitimate when the link opens a running system.
- **Focus:** 2px `brand` ring, 2px offset, offset colour `background`.

### Record panel (signature)
The night log's record: a `card`-filled rectangle bounded by `rule`, square-cornered,
with a mono header row (timestamp `/` source, and a wall label on the right), a
quoted sample input in prose grey, and a definition list of extracted fields divided
by `divide-rule`. Field names are wall labels in the left 8rem column; values are
mono `foreground` preceded by a verdict mark. Notes sit under a value in Caption,
indented to the value's text edge. **The `held` verdict is styled as prominently as
`filled`** — a system that refuses to guess is the evidence, and demoting it to an
error style would sell the opposite.

### Tabs
Pills, not a well. Resting: `rule` hairline, `mute` label, hover to `mute` border and
`foreground` text. Selected: `primary` fill, transparent border. Roving tabindex, and
selecting re-fires the panel's settle animation.

### Inputs / Fields
6px square, 1px `input` hairline, sheet-coloured fill (`background`, not `card`, so a
field reads as cut into the sheet), 44px tall, label above in uppercase Label type at
`mute`. Placeholder is `mute` by the base rule. Error state swaps the border and the
focus ring to `destructive` and prints the message in Body SM `destructive` below.

### Navigation
Sticky, `border-b border-rule`, over a translucent sheet (`bg-background/85`, dropping
to `/70` where `backdrop-filter` is supported). Links are uppercase Label at `mute`,
moving to `foreground` on hover — no wash, no underline, no dropdown chrome. The
wordmark is Serif SM beside the logo mark. The nav's one control is the primary pill.
Mobile collapses to the same tokens in a sheet.

### Footer
Same hairline grid: column titles are wall labels, links are Body SM prose grey moving
to `foreground`. The contact address is mono Data at `foreground`, underlined with
`decoration-rule` at a 4px offset — **not green**, because an email address is not a
running system. Social marks are 44px icon squares at `mute`.

### Ledger strip (signature)
A full-width band of mono paperwork marks (RFI numbers, delivery notes, permit codes)
between two rules, drifting horizontally as pure texture: `faint` tier, `aria-hidden`,
duplicated once so the loop closes seamlessly.

### Motion
One authored moment and one ambient drift, and that is the entire motion system.
- **`.settle`** (620ms, `cubic-bezier(0.16, 1, 0.3, 1)`): machine-filled values settle
  into place — opacity 0.32 → 1, 3px rise, 2px blur → 0 — staggered 70ms per row. It
  animates **from an already-visible default**, so a failed or blocked animation still
  leaves readable content, and it re-fires on tab selection because the motion belongs
  to the act of reading a record, not to scrolling past a section.
- **`.drift`** (90s linear, infinite): the ledger strip only. Decorative, `aria-hidden`.
- `prefers-reduced-motion: reduce` kills both outright.

### Browser surfaces
The parts of the page nobody draws are drawn here, and this is a requirement of the
world rather than a polish item: `::selection` at 28% `brand` with `foreground` text,
`caret-color` and `accent-color` on `brand`, `scrollbar-color` on `rule` with a thin
track (plus webkit track/thumb, the thumb inset 3px in the sheet colour and hovering
to `mute`), `text-underline-offset: 0.22em` with a 1px decoration so underlines clear
descenders, and tabular figures on every mono element. Left at UA defaults these
belong to no design system at all, which is the cheapest tell that a page was
assembled rather than built.

## Do's and Don'ts

These are the nightshift world's guardrails. The Job Ticket list above still governs
every app that does not set `data-world`.

### Do:
- **Do** opt in with `data-world="nightshift"` plus `--font-display`, and ship
  `defaultTheme="dark"`; the dark block is the design.
- **Do** build structure out of `border-rule` hairlines — a band boundary, a row
  divider, a grid cell edge — and let cells borrow neighbours' edges.
- **Do** spend `--brand` only on affirmative machine state: a filled value, an
  included capability, a link that opens a running system, the focus ring.
- **Do** carry emphasis with the serif's italic, on one word or phrase, once per band.
- **Do** set every machine fact in Geist Mono with tabular figures, and every human
  sentence in the sans or the serif.
- **Do** put measure caps in `ch` on the element that carries the type.
- **Do** judge `--dot` and any other atmosphere value rendered on the dark sheet.
- **Do** close a tinted region with a rule on every edge, CTA row included.
- **Do** keep `.bleed`'s `-1rem` and the app shell's `px-4` in step; they are a pair.
- **Do** theme the browser surfaces — selection, caret, accent, scrollbar, underline
  offset — in any new world with a dark canonical sheet.
- **Do** keep every control at a 44px minimum height.

### Don't:
- **Don't** put the green on emphasis, prices, headings, icons, a recommendation
  label, or links in general. If no machine verified it, it is not green.
- **Don't** add a card, a shadow, a hover lift or a rounded panel; depth is a hairline.
- **Don't** set copy in `--faint` (2.6:1); it is `aria-hidden` texture only. Wall
  labels and field names are `--mute`, which is a readable tier in this world.
- **Don't** inherit the package input's `placeholder:text-faint` here; state the
  placeholder colour.
- **Don't** set copy on the dot field; it is masked away from the type on purpose.
- **Don't** put an eyebrow or a kicker above a heading in this world. The uppercase
  mono label is a column head or a field name, never a stacked pre-title.
- **Don't** use bold, a second display weight, or a library glyph in place of the
  drawn marks.
- **Don't** animate anything but the two authored moments, and never from an invisible
  default.
- **Don't** carry a nightshift token into another app; the other five consume the
  Job Ticket sheet and a nightshift value there is a fork, not a fix.
