# Frontier Models in the Wild — talk repository

Internal 60-minute R&D workshop.

The talk is **not** a showcase of five side projects. The projects are evidence for a broader
idea: frontier models can change how we explore problems, accumulate knowledge, communicate
across departments, and build solutions — not only how fast we write software.

## Start here

1. Read `CLAUDE.md`.
2. Read `docs/talk-brief.md` and `docs/narrative.md`.
3. Use `docs/slide-map.md` as the current deck contract.
4. The five projects are specified in `docs/projects/`, one file each, with an evidence table
   and a "do not claim" list. The deck may not say more than those files support.
5. Every number on a slide comes from `deck/src/content/evidence.ts`, with the command that
   measured it. Re-measure; do not edit a figure by hand.

## Running the deck

The deck is a React + Reveal.js app built with Vite. **bun, not npm.**

```bash
cd deck
bun install
bun run dev        # http://localhost:4330
```

Press `S` in the deck for the speaker view — every slide carries its notes.

Other tasks:

```bash
bun run lint       # Biome
bun run typecheck  # tsc --noEmit
bun run build      # typecheck + production bundle
```

## Deployment

Pushing to `main` publishes the deck to
[vitalyvorobyev.github.io/models-in-the-wild](https://vitalyvorobyev.github.io/models-in-the-wild/)
via `.github/workflows/deploy.yml`.

## Design reference

The deck was ported from a Claude Design export that lived at
`design_handoff_frontier_models_deck/`. It was removed once the deck outgrew it; recover it
from history with `git show f4e1d0d --stat` if a value ever needs checking. The live contract
is `deck/src/styles/tokens.css` for the scale and palette, `components.css` for the layouts.
