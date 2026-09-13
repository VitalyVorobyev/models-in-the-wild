# Project 02 — CV Atlas

Capability shown: **Understand** — accumulate knowledge, relationships and narratives.

Public site: https://vitavision.dev/atlas

## Why it started

Vitaly was learning computer vision and needed a system behind the huge amount of information he was absorbing. A pile of notes or bookmarks was not enough.

## What it is now

Primarily a reference and summary system, but increasingly a connected knowledge model:

- works and ideas are related to each other;
- concepts, algorithms and models have their own pages;
- narrative stories explain larger developments;
- author exploration is an active WIP direction.

## Agentic workflow inside the project

The important point is **not website generation**.

Vitaly works from original publication PDFs. A specialized skill:

- reads the source material;
- maintains an internal paper index;
- creates/updates summaries;
- identifies relations to existing items;
- identifies related concepts.

Another skill authors algorithm/concept/model web pages.

This is closer to continuously maintaining a knowledge system than asking for isolated paper summaries.

## Demo

Show the first narrative story:

https://vitavision.dev/atlas/narratives/foundation-models-for-vision

Use the demo to show the transition:

**primary papers → structured knowledge → relationships → narrative**

## Atlas vs Radar

The next project, CV Tech Radar, looks similar from a distance and is the opposite in kind:

| | CV Atlas | CV Tech Radar |
| --- | --- | --- |
| Input | papers Vitaly chooses to read | everything arXiv `cs.CV` publishes today |
| Time | grows for years | resets every morning |
| Output | connected pages and narratives | a ranked digest, most of it Ignore |
| Question | what do we know, and how does it connect? | what arrived that deserves attention? |
| Agent's job | maintain relationships | judge a deterministic shortlist |

Accumulated knowledge versus continuous information-flow filtering. The deck states this
contrast on its own slide, right after the Atlas section.

## Evidence (measured 2026-09-12, in the `vitavision` repository)

| Fact | Source |
| --- | --- |
| 52 algorithm pages, 35 concept pages, 50 model pages | `ls content/{algorithms,concepts,models} \| wc -l` |
| 145 indexed papers, 115 paper notes in the private vault | `docs/papers/index.yaml`, `ls docs/atlas-vault/papers` |
| About 500 author pages built | `ls dist/authors \| wc -l` |
| Narrative `foundation-models-for-vision`, dated 2026-08-23 | `content/narratives/foundation-models-for-vision.md` |
| Skills: `paper-ingest`, `algo-page`, `deep-model-page`, `concept-page`, `tech-writer`, `authorial-technical-editor` | `.claude/skills/` |

## Company implication

A company does not need to leave technical knowledge scattered across people, PDFs, slide decks, chats and project folders.

One or several living internal atlases could continuously organize evidence, concepts, decisions and relationships across domains and departments.

Key phrase to explore on slides:

> From documents we store to knowledge we can navigate.

## Editorial evidence update

v0.5 uses actual narrative relationships and source-paper author metadata; the deck graph is a curated subset, not a new Atlas product.
