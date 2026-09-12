# Handoff: Frontier Models in the Wild — deck v0.1

## Overview
A 22-slide draft of the internal R&D workshop deck **Frontier Models in the Wild** (60 min), built from the repo's `docs/` (talk-brief, narrative, slide-map, projects/cv-atlas). It replaces the Reveal.js skeleton in `deck/src/App.jsx` as the current design reference. Projects 2–5 are deliberate placeholders per `CLAUDE.md` — nothing was invented.

## About the design files
The bundled `.dc.html` and `.js` files are **design references created in HTML** — they show the intended look, copy and slide order. They are not meant to ship as-is. The task is to **recreate the slides inside the existing `deck/` app** (React + Reveal.js + Vite) using its patterns, or replace Reveal with a simpler static approach if preferred. Slide markup in the reference is plain inline-styled HTML, so it ports 1:1.

## Fidelity
**High-fidelity.** Colors, type, spacing and copy are final for the draft. Recreate closely; do not restyle.

## Suggested workflow in Claude Code
1. Drop this folder into the repo root (e.g. `design_handoff_frontier_models_deck/`).
2. Open `Frontier Models in the Wild.dc.html` in a browser to see the slides (arrow keys navigate; all files must sit together).
3. Ask Claude Code: *"Read design_handoff_frontier_models_deck/README.md and port the 22 slides into deck/src, replacing the skeleton in App.jsx. Keep slide order, copy and styling; keep placeholders for projects 2–5."*
4. Update `docs/slide-map.md` to v0.2 with the title sequence below; keep `skills/deck-authoring/SKILL.md` rules.

## Title sequence (chapter-style noun phrases)
1. Frontier Models in the Wild (title, dark)
2. Five Artifacts
3. The Question
4. The Workflow
5. The Context Backbone
6. Rigid vs Flexible
7. Project 1 — CV Atlas (section, dark)
8. CV Atlas: Why It Exists
9. CV Atlas: From Papers to Living Knowledge
10. CV Atlas: Live Demo
11. Company Implication: A Living Knowledge Atlas (accent bg)
12–19. Project 2–5 section (dark) + "What It Teaches Us" (placeholder) pairs
20. Five Projects, Five Capabilities
21. Beyond Coding
22. Closing — This deck followed the same workflow (dark)

## Canvas
1920 × 1080, scaled to fit. Slide padding: 96px top, 120px sides, 88px bottom.

## Design tokens (Vitavision — "The Technical Journal")
Colors (HSL):
- Paper background: hsl(210 40% 98%)
- Surface / card: hsl(0 0% 100%)
- Foreground (body): hsl(215 25% 27%)
- Heading ink: hsl(215 30% 12%)
- Muted text / kickers: hsl(215 16% 47%)
- Hairline border: hsl(214 32% 91%); strong: hsl(214 32% 80%)
- Primary / accent surface: hsl(215 19% 35%) with text hsl(210 40% 98%)
- Link: hsl(215 70% 38%)
- Dark slide bg: hsl(222 47% 11%); dark surface: hsl(217 33% 17%); dark text: hsl(210 40% 96%); dark muted: hsl(215 20% 65%); dark border: hsl(215 25% 27%)
- Brand cyan (URLs on dark slides only): hsl(191 75% 55%)

Type (fonts ship in the repo's design system; Google Fonts equivalents: Inter, Source Serif 4, Geist Mono):
- Headings: "Source Serif 4 Variable", weight 500, letter-spacing −0.015 to −0.02em, line-height 1–1.08
- Body/UI: Inter
- Kickers, numbers, URLs, code: Geist Mono
Scale: display 112px · question 96px · title 64px · subtitle 44px · body 34px · small 28px · mono 24px (minimum). Kickers: mono, uppercase, letter-spacing 0.22em.

Spacing: kicker→title 20px; title→content 48px; item gap 28px; card padding 24–32px; grid gaps 16–24px.
Radius: 4px everywhere. No shadows. Placeholders: 1px dashed border.

## Slide layouts
- **Dark section openers** (1, 7, 12, 14, 16, 18, 22): flex column, space-between; kicker top ("Project 0N / 05"), display title + subtitle centered block, mono URL in brand cyan bottom-left, dashed "PLACEHOLDER" chip bottom-right where applicable.
- **Five Artifacts**: 5-column card grid; each card = 220px image slot, "0N" mono, serif name (34px), one-liner (28px muted), mono URL pinned to bottom.
- **The Workflow**: 4×2 grid of white cards (number, serif label, mono description); closing line below.
- **Context Backbone / Closing**: two-column; left text, right dark `<pre>` repo tree (28px mono, line-height 1.6, padding 48/56).
- **Rigid vs Flexible / Five Capabilities**: hairline tables (top border strong, row borders default, 28–30px row padding), no card boxes.
- **CV Atlas: Live Demo**: 5/7 split; left kicker, title, mono trace list, primary button "Open narrative ↗" (bg hsl(215 19% 35%), 20×32 padding, 28px/600); right screenshot slot.
- **Company Implication**: full accent background, 96px serif quote, two-column Today / Possible now.
- **What It Teaches Us**: 3 dashed cards with template questions (why agents mattered · interesting moment · company implication) + "PLACEHOLDER · do not fill from guesswork".

## Interactions
Keyboard/click navigation, smooth slide transition; external links open in new tab. No other state.

## Assets
- Vitavision logo mark (from the vitcv library) on the title slide.
- Empty image slots (ids: art-cv-atlas, art-family-docs, art-deutsch, art-radar, art-scorequant, atlas-overview, atlas-narrative) — replace with real screenshots.

## Files
- `Frontier Models in the Wild.dc.html` — all 22 slides (inline-styled `<section>`s; speaker notes in `data-speaker-notes`)
- `deck-stage.js`, `image-slot.js`, `support.js` — runtime helpers for previewing the reference only
- `scratchpad.md` — planning notes
