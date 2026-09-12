# Frontier Models in the Wild — talk repository

Internal 60-minute R&D workshop.

The talk is **not** a showcase of five side projects. The projects are evidence for a broader
idea: frontier models can change how we explore problems, accumulate knowledge, communicate
across departments, and build solutions — not only how fast we write software.

## Start here

1. Read `CLAUDE.md`.
2. Read `docs/talk-brief.md` and `docs/narrative.md`.
3. Use `docs/slide-map.md` as the current deck contract.
4. CV Atlas is specified in `docs/projects/cv-atlas.md`.
5. Do **not** invent the remaining project stories. Leave placeholders until they are
   discussed with Vitaly.

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

`design_handoff_frontier_models_deck/` holds the Claude Design export the current deck was
built from. It is a reference, not source: keep it for comparison, do not edit it, and never
open its three generated `.js` files.
