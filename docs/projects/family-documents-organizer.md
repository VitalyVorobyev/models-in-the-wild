# Project 01 — Family Documents Organizer

Capability shown: **Organize** — turn a small messy corpus into a useful structure.

Local only. Contains sensitive data; never deployed, never screenshotted without redaction.
Source of the story: `docs/session-handoff-2026-09-12.md`, checked against the project's own
`CLAUDE.md` on 2026-09-12 (structure and tooling only — no document contents were read).

## Why it started

Time spent finding documents. There was no structured electronic storage, folder hierarchies
were not expressive enough, and a clean standard PDF workflow was missing.

## What exists now

A small personal information system for one family's paperwork:

- originals land in dated, read-only batch folders (`00_originals/imported_<YYYY-MM-DD>/`),
  native filenames kept;
- each item becomes a normalized, A4-fitted PDF under `01_ready_pdfs/<category>/`;
- one JSON register (`documents.index.json`) is the single source of truth — a record has a
  title, person, category, period, tags, status, and one or more files with a kind
  (primary / original / translation / signed / source / duplicate);
- a script bakes real page counts and regenerates the README's generated sections;
- a small local viewer (Vite + React, bun) browses the register and renders PDFs natively.

The document types and category structure were largely derived from the actual data, with
Claude. The resulting categories are enough for practical retrieval.

## Why agents mattered

Vitaly drops a new image or PDF into the originals folder and asks Claude to:

1. find the new item;
2. understand what it is;
3. derive the appropriate type and category from the existing corpus;
4. wire it into the catalog and folder structure.

Claude also answers higher-level questions over the corpus — for example, it derives yearly tax
briefs from the register, each figure naming the document it came from.

The register is local-only, but the working agent is Claude, not a local model.

## Interesting development moment

The project's `AGENTS.md` used to be a full copy of `CLAUDE.md`. It drifted stale — it still
described payroll as a single yearly record after the schema had changed — "exactly the kind of
stale instruction an agent would have followed". It is now a twelve-line pointer to the one
authoritative file. Durable context has to be maintained, or it becomes a liability.

## What this project proves

> Agents make very small, custom software economically rational.

> Not every useful AI-assisted information system needs embeddings, RAG infrastructure,
> enterprise search or a complex backend. Sometimes well-structured files plus an agent are
> enough.

## Implication

Small team or departmental document registers can be built around the actual workflow instead
of forcing every information problem into a large enterprise system.

## Evidence (measured 2026-09-12)

| Fact | Source |
| --- | --- |
| 66 logical document records | project `CLAUDE.md` |
| 18 category folders in the ready-PDF tree | `ls 01_ready_pdfs \| wc -l` |
| 7 import batches, 2026-06-21 → 2026-08-28 | `ls 00_originals` |
| No embeddings, vectors, network calls or API clients in the viewer or scripts | `grep -rniE "embedding\|vector\|faiss\|chroma\|openai\|anthropic"` over `document_browser/src` and `scripts/` → 0 hits |
| Search is a token-AND string match over title, person, category, period, status, notes, tags, file labels | project `CLAUDE.md`, "How the browser finds the data" |
| Only automated check is `tsc` strict inside `bun run build` — no tests, no linter | project `CLAUDE.md`, "Commands" |

## Do not claim

- Person-scoped categories and one record may appear on a slide: Vitaly cleared the viewer screenshot and the tutors' welcome letter on 2026-09-13 (first names only, no secrets). Nothing else from the corpus is opened or shown.
- Not a git repository; there is no commit history to cite.
- The viewer has no search backend; do not call it "AI search".

## Editorial evidence update

The previous montage image was found inadequately redacted and removed in v0.5. The viewer and source/result pair are explicit capture gaps, not fabricated examples.
