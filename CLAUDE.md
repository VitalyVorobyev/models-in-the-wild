# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Build the talk **Frontier Models in the Wild** iteratively with Vitaly.

## What this talk is about

This is an R&D-first internal workshop. The five projects are concrete demonstrations, but the main message is larger:

- agentic workflows are useful beyond software implementation;
- they can change research, knowledge management, communication, handoffs, and cross-department problem solving;
- the workflow matters more than isolated prompting tricks.

## How Vitaly works

1. Brainstorm conversationally with an LLM first; voice mode is especially useful.
2. Crystallize the idea into a small durable Markdown starter bundle.
3. Hand the repository to Claude Code or Codex.
4. Keep long-term context in docs + agent instructions + reusable skills.
5. Give the model freedom to be creative and proactive; do not specify every last detail.
6. Explicitly ask the model to challenge assumptions and remain critical.
7. Prefer reproducible evidence, tests, measurements, primary sources, and concrete artifacts over persuasive narratives.
8. Stronger models should reduce micromanagement and orchestration complexity, not increase it.

## Deck rules

- Fixed title: **Frontier Models in the Wild**.
- Visual, sparse, demo-driven. Avoid walls of text.
- One idea per slide.
- Use the projects to reveal different aspects of the workflow; do not force the same template onto all five.
- Distinguish rigid intent/invariants/evidence from flexible implementation.
- Keep company implications concrete and cross-departmental.
- Never fabricate metrics, project history, or lessons. Use placeholders when evidence is missing.
- Treat this repository as the durable source of truth, not chat history.

Read `skills/deck-authoring/SKILL.md` before changing the deck structure.

## Commands

`deck/` is the only package. **bun, not npm** — a `package-lock.json` appearing here is a defect.

```bash
cd deck && bun install
bun run dev          # Vite dev server on :4330
bun run lint         # Biome
bun run typecheck    # tsc --noEmit
bun run build        # typecheck + production bundle
bun run build:pages  # the same, with --base=/models-in-the-wild/ (what CI deploys)
```

`lint`, `typecheck` and `build` each run as their own CI job on every PR. Do not weaken any of
them to make a change pass.

There are no tests. If you need one, propose it rather than asserting a gate that does not exist.

## How content flows

Docs are the contract; the deck renders them. Work upstream first.

```
docs/talk-brief.md      audience, 60-min format, core thesis, the five projects + their URLs
docs/narrative.md       workflow spine, rigid-vs-flexible framing, escalation ladder
docs/projects/*.md      one file per project — the raw material a slide may use
        ↓
docs/slide-map.md       the deck contract: the 22-slide sequence, currently v0.2
        ↓
deck/src/slides/        one file per slide, in that order
```

- `docs/projects/cv-atlas.md` is the only project written up. `project-template.md` is the shape
  for the other four and is explicitly **not** to be filled from guesswork.
- Slides 12–19 are placeholders for projects 2–5. That is policy, not a TODO list.
- Changing slide order or count means editing `docs/slide-map.md` and `deck/src/slides/index.ts`
  in the same change. They must agree.

## Deck architecture

```
deck/src/
├── main.tsx          @fontsource imports, stylesheets, mount
├── App.tsx           Reveal initialization; maps over the slide array, holds no copy
├── styles/
│   ├── tokens.css    the Vitavision type scale, spacing and palette
│   ├── base.css      Reveal integration and resets
│   └── components.css the layout archetypes
├── components/       Slide, SectionOpener, SlideHeader, Split, Grid, HairlineTable,
│                     ImageSlot, TeachesUs, Tree, ExternalLink, VitavisionLogo, Notes
├── content/
│   ├── projects.ts   the five projects — names, URLs, one-liners, capabilities
│   └── images.ts     slot id → imported asset; the only file to touch when adding art
├── slides/           01-title.tsx … 22-closing.tsx, plus index.ts (the ordered sequence)
└── assets/images/    screenshots and photos
```

Load-bearing details, each of which broke the deck during the port:

- **Reveal must stay at `width: 1920, height: 1080, margin: 0, center: false`.** The slides were
  authored against a fixed canvas and size themselves with `space-between` and `flex: 1`;
  centring them collapses every one of those layouts.
- **`Slide` renders its layout on a `<div>` inside the `<section>`, not on the section itself.**
  Reveal sets `display` on the active section and would override the flex column.
- **`#root` needs an explicit height**, or Reveal measures a zero-height container and renders
  the deck at its 0.2 minimum scale.
- **Never widen a `text-transform` reset to `p`** — it beats the uppercase mono kickers.
- Reveal 6 removed `dist/` from its exports map: import `reveal.js/reveal.css`, not
  `reveal.js/dist/reveal.css`.

Adding an image is a one-line edit in `content/images.ts`; slides already reference the slots by
id and render a dashed placeholder until a file appears. Put art in `src/assets/images/` rather
than `public/` so Vite rewrites its URL for the Pages base path.

## Deployment

`main` deploys to https://vitalyvorobyev.github.io/models-in-the-wild/ via
`.github/workflows/deploy.yml`. Pages is already configured with GitHub Actions as the source.
The base path is applied by `build:pages`, not by `vite.config.ts`, so local `dev` stays at `/`.

## The design handoff

`design_handoff_frontier_models_deck/` is the Claude Design export the current deck was built
from. It is a **reference**, not source, and it is superseded by the working deck:

- Do not edit it, and never read `deck-stage.js` (136 KB), `support.js` (69 KB) or
  `image-slot.js` (65 KB) — generated preview runtime, not code.
- Its `.dc.html` references a `_ds/vitavision-*` bundle that is not in the repo, so the logo and
  the font families do not resolve when previewing it in a browser. That is expected; the deck
  itself has them. The authoritative font and colour values live in
  `/Users/vitalyvorobyev/vitavision/src/index.css`, which is a separate project — copy values
  from it, never depend on it.
- `VitavisionLogo.tsx` is ported from that same design system, minus its framer-motion animation.
