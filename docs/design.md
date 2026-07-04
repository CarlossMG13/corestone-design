---
version: alpha
name: Corestone
description: Dark-mode design system for a long-term technical software studio — solid stone neutrals, a single blue accent, and a constrained multicolor signature aura.

colors:
  # Stone — neutrals (surfaces & text)
  stone-950: "#0B0B0D"
  stone-900: "#131316"
  stone-800: "#1D1D21"
  stone-700: "#2A2A2F"
  stone-500: "#6B6B72"
  stone-300: "#A8A8AE"
  stone-100: "#E4E4E7"
  stone-50: "#F7F7F8"
  # Semantic surface & text aliases
  surface: "#0B0B0D"
  surface-elevated: "#131316"
  surface-hover: "#1D1D21"
  border: "#2A2A2F"
  border-hover: "#6B6B72"
  on-surface: "#F7F7F8"
  on-surface-secondary: "#E4E4E7"
  on-surface-muted: "#A8A8AE"
  # Core — single UI accent
  core-600: "#1E4FD6"
  core-500: "#3B6BF0"
  core-400: "#6E8FF5"
  primary: "#1E4FD6"
  primary-hover: "#3B6BF0"
  on-primary: "#F7F7F8"
  accent: "#6E8FF5"
  # Copper — secondary accent, minimal use
  copper-500: "#D97757"
  # Corestone Aura — signature gradient (fixed order, non-negotiable)
  aura-blue: "#3B6BF0"
  aura-violet: "#8B5CF6"
  aura-pink: "#D6478C"
  aura-amber: "#E0A526"
  # Semantic states
  success: "#3FB27F"
  warning: "#E0A526"
  error: "#E5484D"

typography:
  display:
    fontFamily: Inter
    fontSize: 4.5rem
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.02em
  h1:
    fontFamily: Inter
    fontSize: 2.5rem
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 1.75rem
    fontWeight: 600
    lineHeight: 1.3
  h3:
    fontFamily: Inter
    fontSize: 1.25rem
    fontWeight: 500
    lineHeight: 1.4
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  caption:
    fontFamily: Inter
    fontSize: 0.8125rem
    fontWeight: 400
    lineHeight: 1.4
  mono:
    fontFamily: JetBrains Mono
    fontSize: 0.8125rem
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.02em

rounded:
  sm: 6px
  md: 10px
  lg: 16px
  xl: 24px

spacing:
  "1": 4px
  "2": 8px
  "3": 12px
  "4": 16px
  "6": 24px
  "8": 32px
  "12": 48px
  "16": 64px
  "24": 96px
  "32": 128px

components:
  button-primary:
    backgroundColor: "{colors.core-600}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 14px 28px
  button-primary-hover:
    backgroundColor: "{colors.core-500}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 14px 28px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-secondary}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 13px 27px
  button-secondary-hover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-secondary}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 13px 27px
  input:
    backgroundColor: "{colors.surface-hover}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 10px 12px
  card:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 28px 24px
  card-hover:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 28px 24px
  card-featured:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 26px 22px
  hero:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.on-surface}"
    typography: "{typography.display}"
    rounded: "{rounded.xl}"
    padding: 72px 48px
  nav:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 16px 24px
  badge-stack:
    backgroundColor: "{colors.surface-hover}"
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.mono}"
    rounded: "{rounded.sm}"
    padding: 7px 12px
  badge-status:
    backgroundColor: "{colors.surface-hover}"
    textColor: "{colors.copper-500}"
    typography: "{typography.mono}"
    rounded: "{rounded.sm}"
    padding: 6px 10px
---

# Corestone Design System

## Overview

Corestone is a Mexico-based software development studio positioned as a long-term technical partner: "we know what we do, no need to shout — we build, we ship, we stay." The system runs in **dark mode by default** (never pure black) and reads as solid, confident, and engineered. The name splits into its two forces — *Core* (technical energy, a single blue accent) and *Stone* (mineral solidity, warm neutrals). The one expressive element is the **Corestone Aura**: a fixed four-color glow that frames a single focal container per view. It must never become decoration. Two anti-patterns govern everything: this is not a consumer/wellness app (no free-floating rainbow glow), and it is not a loud marketing skin (no radius-full bubbles, no more than one primary action or one active aura per view).

## Colors

The palette is a warm-neutral **Stone** ramp from `stone-950` (page background) up to `stone-50` (primary text), giving a dark surface hierarchy without pure black: `stone-900` for elevated cards and sections, `stone-800` for hover and inputs, `stone-700` for hairline borders. Text runs `stone-50` primary, `stone-100` secondary, `stone-300` tertiary/muted, `stone-500` for the quietest labels. **Core** is the only interactive accent: `core-600` fills the primary button, `core-500` is its hover, `core-400` carries accent text — all clear WCAG AA against `stone-950`. **Copper** (`copper-500`) is a secondary accent reserved for status badges and rare editorial detail. The **Aura** tokens (`aura-blue → aura-violet → aura-pink → aura-amber`) are a brand asset, not a palette to sample from freely — they only ever appear together, in that order, inside the aura effect. `aura-blue` is intentionally the same value as `core-500` so the signature glow stays anchored to the rest of the brand. Semantic states are `success #3FB27F`, `warning #E0A526` (identical to `aura-amber`), and `error #E5484D`.

## Typography

Two families carry the system. **Inter** handles all UI and body text — a neutral, engineered humanist sans that stays legible at caption sizes and confident at display. **JetBrains Mono** is used deliberately and only for technical signal: stack badges and code snippets, never body copy. The scale is `display` (72px/600) and `h1` (40px/600) for hero and page titles at tight `-0.02em` tracking and 1.1–1.15 line-height; `h2` (28px/600) and `h3` (20px/500) for section structure at 1.3–1.4; `body-lg` (18px) and `body` (16px) at a comfortable 1.6 for reading; `caption` (13px) and `mono` (13px) for metadata and badges. Weight never exceeds 600 — the brand's authority comes from structure and contrast, not heavy type.

## Layout

Spacing follows a strict 4px base scale — `4, 8, 12, 16, 24, 32, 48, 64, 96, 128` — applied consistently so rhythm reads as intentional. Density is **comfortable**, not tight and not airy: cards use 24–32px padding, hero containers 48–72px, sections separate on the larger steps (64–96px). Content sits in a centered container (~880px reading width for editorial pages, wider for app grids), with multi-card layouts on an even 20–24px gutter. The grid stays calm and aligned; whitespace is used to signal confidence rather than to fill space.

## Elevation & Depth

Depth is expressed through **surface layering and hairline borders, not shadows**. Elevation reads as a step up the Stone ramp — `stone-950` page → `stone-900` card → `stone-800` hover — bounded by a 1px `stone-700` border that lifts to `stone-500` on hover. The only glows in the system are functional and rare: a subtle blue `box-shadow` on the primary button hover (`0 0 24px rgba(59,107,240,0.4)`), and the Corestone Aura on exactly one focal container per view. Flat, matte surfaces are the default; light does not spill unless it means something.

## Shapes

Corners are **moderate** — they signal structure, not softness. The radius scale is `sm 6px` (inputs, badges), `md 10px` (buttons), `lg 16px` (cards), `xl 24px` (hero, modals, large containers). Nothing in the system uses `radius-full` on cards or containers; fully round shapes read as a consumer bubble and are off-brand. Radii grow with the container's importance and size, keeping the language coherent from a 6px badge to a 24px hero frame.

## Components

**Buttons:** the primary button fills `core-600`, shifts to `core-500` on hover with a subtle blue glow, at `md` radius — **maximum one primary button visible per view.** The secondary button is transparent with a `stone-700` border that brightens to `stone-500` on hover; no glow, ever. **Cards** sit on `stone-900` with a 1px `stone-700` border, `lg` radius, 24–32px padding, and lift to a `stone-500` border on hover — no aura. Exactly one **featured card** per section is the second permitted aura location: it stays a plain card at rest and reveals the rotating aura frame only on `hover`, using the marco + solid-inner-layer technique. The **hero** container is the primary aura location — aura always on, always rotating. **Nav** uses a glassmorphism treatment — translucent `stone-950` (~55%) with a `backdrop-filter` blur + saturate, a translucent white hairline bottom border, and a faint inset top highlight; opacity rises as a fallback where `backdrop-filter` is unsupported. It sticks to the top and never carries aura. **Stack badges** use `stone-800` fill with 13px JetBrains Mono in `stone-300` at `sm` radius; **status badges** reuse that shape in `copper-500`. **Inputs** use `stone-800` fill, `sm` radius, `stone-700` border.

### Corestone Aura — implementation rules

The aura is the signature element and is strictly constrained. **At most one aura element is active per view — never two simultaneously.** Only two locations are permitted: the **hero** container of each main page (aura permanent, always rotating) and **one** featured card per section (aura on `hover` only, never at rest). It must **never** appear on navigation, footer, secondary buttons, body text, or inputs. The **required technique** is a frame (`padding` + `overflow: hidden`) with an oversized conic-gradient layer rotating behind it (`transform: rotate`, 6–8s `linear infinite`) and a solid inner layer (`background: stone-900`) that covers everything except the border. **Do not use the `mask-composite` / `@property` border-clip technique** — it was tested and failed in some render engines (the gradient covered the inner content instead of only the border); the frame + solid-inner-layer method is validated and working. The gradient is always `aura-blue → aura-violet → aura-pink → aura-amber → aura-blue` in that fixed order. Respect `prefers-reduced-motion: reduce` by disabling the rotation and leaving the gradient static.

## Do's and Don'ts

**Do**
- Keep the Aura gradient to its four colors in fixed order (`blue → violet → pink → amber`) — it's a brand asset, not a sampler.
- Limit each view to at most one active aura and one primary button.
- Build the aura with the frame + solid-inner-layer technique and respect `prefers-reduced-motion`.
- Use `core` blue as the only interactive accent; reserve `copper` for status badges and rare editorial detail.
- Express depth through the Stone surface ramp and 1px borders, keeping surfaces matte.
- Use JetBrains Mono only for stack badges and code — a deliberate technical signal.

**Don't**
- Don't put the aura on nav, footer, secondary buttons, inputs, or body text.
- Don't run two aura elements — or leave the featured card's aura on at rest — in the same view.
- Don't use `radius-full` on cards or containers, or push type weight past 600.
- Don't scatter the aura colors as a general palette or reorder the gradient stops.
- Don't reach for the `mask-composite`/`@property` border-clip approach — it fails in some engines.
- Don't use pure black (`#000`) for surfaces; the base is `stone-950`.
