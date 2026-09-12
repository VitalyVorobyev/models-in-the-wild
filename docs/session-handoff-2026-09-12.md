# Frontier Models in the Wild — session handoff

**Status:** narrative/content handoff from the ChatGPT workshop discussion, 2026-09-12  
**Audience:** internal R&D-first workshop, about one hour  
**Title:** **Frontier Models in the Wild**

## Core purpose

This is not primarily a talk about faster coding.

The five weekend projects are evidence for a broader claim:

> Frontier models can change the class and scale of problems that one engineer or a small team can attack — across research, knowledge work, communication, content, information filtering, and software.

The company message is to **think bigger and cross-departmentally**. Agentic workflows can improve how knowledge is collected, structured, challenged, communicated, and transferred between departments, not only how fast software is produced.

The projects are real artifacts, but the main subject is the **workflow and mindset that made them possible**.

## Recurring workflow

**Conversation / brainstorming → concept → persistent context → Claude Code / Codex → artifact → evidence → critique → iteration**

Principles:

- Early ideation works well as a conversational brainstorm; ChatGPT voice mode is especially useful.
- Once the idea is stable enough, create a small starter bundle: problem definition, concept, system design, roadmap, research notes.
- Hand that bundle to Claude Code or Codex.
- The long-term context backbone is the repository itself: `docs/`, `AGENTS.md` / `CLAUDE.md`, skills, tests, benchmarks, durable decisions, research notes.
- The chat is temporary; the repository is the durable project memory.
- Do not specify every implementation detail. Give the agent freedom to be creative and proactive.
- Explicitly ask the agent to challenge assumptions rather than agree by default.
- Require conclusions to be grounded in reproducible evidence rather than narratives.
- Stronger models should require less prompt trickery and micromanagement, not more orchestration.
- **Intent / invariants / evidence are rigid. Design / implementation / exploration are flexible.**
- Key phrase: **Freedom to explore. Obligation to verify.**

---

## 01 — CV Atlas

### Origin
Vitaly was learning computer vision and needed a system behind the huge amount of information he was learning.

### What it is
A reference and summary system, increasingly also a map of relationships between papers, ideas, concepts, algorithms and models. Newer directions include narrative stories and exploration of authors.

Public site: https://vitavision.dev/atlas

Likely live demo:
https://vitavision.dev/atlas/narratives/foundation-models-for-vision

### Agentic part
Work starts from original publication PDFs.

Specialized skills:
- read primary papers;
- maintain an internal paper index;
- create summaries;
- identify relationships to existing works;
- identify related concepts;
- author algorithm / concept / model pages.

The point is not one-shot paper summarization. The agent maintains an evolving, connected knowledge system.

### Workshop lesson
> From reading papers to maintaining an evolving body of knowledge.

### Company implication
A company or department could maintain one or several living knowledge atlases that continuously turn primary evidence, experiments, documents and technical work into navigable shared knowledge.

---

## 02 — Family Documents Organizer

### Origin
The pain was time spent finding documents. There was no structured electronic storage, folder hierarchies were not expressive enough, and a clean standard PDF workflow was missing.

### What it is
A small bespoke personal information system for family documents. It is not publicly deployed because it contains sensitive data.

### Workflow
Vitaly places a new image or PDF in an `originals/` folder and asks Claude to:
1. find the new item;
2. understand what it is;
3. derive the appropriate type / categories from the corpus;
4. wire it into the catalog and structure.

The document types and category structure were largely derived from the actual data with Claude.

The resulting category structure is already enough for practical retrieval; there is no complicated search/grouping architecture.

Claude can also answer higher-level questions about the corpus, for example extract data needed for a tax declaration from salary reports.

Important nuance: the application / register is local-only, but Vitaly does **not** use local LLMs here; Claude is the working agent.

### Workshop lesson
> Agents make very small, bespoke software economically rational.

Also:

> Not every useful AI-assisted information system needs embeddings, RAG infrastructure, enterprise search or a complex backend. Sometimes well-structured files plus an agent are enough.

### Company implication
Small-scale team or departmental document registers can be built around the actual workflow instead of forcing every information problem into a large enterprise system.

---

## 03 — Deutsch-Atlas

Public app: https://deutsch.vitavision.dev  
Repository: https://github.com/VitalyVorobyev/deutsch-textbook

### Stage 1 — evidence before product
The project began with literature research:

> What are proven effective ways for an adult to learn a language?

The literature references and distilled principles became core authoring / learning skills.

Then Vitaly added Goethe-Institut standards for German levels:
- grammar requirements;
- vocabulary requirements;
- CEFR-level expectations.

This provides a **verifiable content backbone**, not merely model intuition about what belongs at A2 or B1.

### Stage 2 — curriculum and content
From that foundation the system produces and maintains:
- learning plan;
- lessons;
- vocabulary / word cards;
- grammar exercises;
- reading texts;
- listening material.

### Stage 3 — editorial tooling
Vitaly then built a separate editorial application:
- traces themes through language levels;
- gives an overview of the whole corpus;
- shows formal statistics;
- shows grammar / content coverage.

Once generation became cheap, maintaining coherence, quality and verifiable coverage became a first-class problem.

### Stage 4 — audio studio
A separate audio studio uses local generative models to create:
- realistic human voices;
- natural environmental sounds;
- listening scenes.

There are 12 recurring characters with distinct voices and generated visual identities.

### Stage 5 — actual learning product
Other features include:
- optional local LLM review of free-form written answers;
- progress synchronization between devices through a database hosted on Vitaly's Cloudflare;
- English, Russian and Ukrainian explanatory prose.

The multilingual prose is **not formal translation**. It is independently authored for each native language, allowing explanations to refer to language-specific contrasts.

Most importantly: Vitaly genuinely uses the system to learn German.

### Workshop lesson
> Start with evidence and standards, then let agents create inside that verified framework.

And:

> Cheap generation moves the bottleneck from producing content to controlling quality, coverage and consistency.

Deutsch-Atlas is no longer just one application; it resembles a small educational publishing / production ecosystem.

### Company implication
The same pattern can apply to technical training, onboarding, service knowledge, application engineering, product education, sales training and internal documentation.

---

## 04 — CV Tech Radar

Public site:
https://vitalyvorobyev.github.io/cv-tech-radar/

Repository:
https://github.com/VitalyVorobyev/cv-tech-radar

### Problem
Computer vision is extremely active. The challenge is not storing knowledge; it is coping with the continuous flow of new information.

Tech Radar is oriented toward **practical technologies that may be applicable**, rather than general concepts or foundational research.

Key distinction:
- **Atlas:** accumulated knowledge and relationships.
- **Radar:** incoming information flow and prioritization.

### Daily pipeline
1. Collect new paper abstracts from arXiv.
2. Deterministic keyword filters score them; some keywords add points and some reduce them.
3. This reduces the daily stream to a smaller candidate set.
4. Claude evaluates that shortlist semantically.
5. Claude produces a short ranked daily digest and estimates likely practical interest.
6. Instead of roughly a hundred abstracts, Vitaly gets about **10–15 candidates**, ordered by expected relevance.

### Agentic principle
> Use deterministic machinery to reduce the search space; use frontier models where semantic judgment is actually valuable.

### Workshop lesson
> Frontier models can become a continuously running intelligence layer between an information firehose and the humans who need to make decisions.

### Company implication
The pattern generalizes to technology updates, competitors, patents, supplier changes, customer feedback, support/service reports, quality events and internal experiment reports.

This is about increasing the **information bandwidth of an organization**, not programming faster.

---

## 05 — ScoreQuant

Repository:
https://github.com/VitalyVorobyev/scorequant

### Origin
The project began almost accidentally.

Vitaly visited a former colleague from particle physics and said that with the new agentic engineering workflow it felt possible to attack almost any technical problem in a surprisingly short time.

The colleague described a difficult data-analysis problem involving:
- multidimensional template fitting;
- normalized score space;
- seed selection;
- Voronoi quantization;
- numerical optimization of seed positions;
- retained Fisher information.

The initial request was modest:

> Turn this procedure into a publishable software library.

### Turning point
During brainstorming and literature/theory work, Claude proposed a theorem and a proof.

Vitaly asked ChatGPT for an independent critical check; it did not find an immediate flaw.

Do **not** present this as “Claude proved a theorem and ChatGPT confirmed it.” The important point is that this triggered a change in ambition:

> Maybe formal mathematical research itself can be done inside an agentic workflow.

### Research infrastructure that followed
The project developed:
- literature search;
- structured index of known claims/results;
- numerical counterexample registry;
- numerical checks of proposed/proved statements;
- explicit open questions;
- researcher-agent / reviewer-agent workflow;
- continued critical analysis;
- exploration of Lean formalization for proofs.

Current outputs include:
- an advanced Python library for Fisher-information-aware quantization;
- a draft research paper;
- a growing body of theory and open questions.

### Workshop lesson
> The point is not that AI can be trusted to “do mathematics.” The point is that frontier models make it practical for a very small team to run a surprisingly complete research loop.

That loop can cover literature review, hypothesis generation, derivation, implementation, experiments, adversarial review, counterexample search, documentation and formal verification.

Key message:

> **The stronger the agent becomes, the more important verification becomes — not micromanagement.**

Again:

> **Freedom to explore. Obligation to verify.**

### Company implication
This expands the scope furthest: agentic workflows can support genuine R&D and discovery, not just implementation of known solutions.

---

## Five projects as five capabilities

These should not feel like five versions of the same coding demo.

| Project | Capability |
|---|---|
| Family Documents Organizer | **Organize** — turn a small messy corpus into a useful structure |
| CV Atlas | **Understand** — accumulate knowledge, relationships and narratives |
| CV Tech Radar | **Filter** — handle a continuous high-volume information stream |
| Deutsch-Atlas | **Create & operate** — build and maintain a large evidence-grounded content/product system |
| ScoreQuant | **Discover** — explore new technical and mathematical territory |

Main synthesis:

> **Think beyond coding. Agentic workflows can help us organize, understand, filter, create, communicate and discover across the company.**

---

## Current deck status

The repository currently has a 22-slide Reveal/React deck.

The first implementation already covers:
- title;
- five-project montage;
- central question;
- workflow;
- context backbone;
- rigid-vs-flexible principle;
- CV Atlas;
- company implication.

Slides 12–19 contain the other four projects:
- Family Documents Organizer;
- Deutsch-Atlas;
- CV Tech Radar;
- ScoreQuant.

The project data currently marks these four stories as placeholders. That was intentional.

They are now discussed. The material in this document should be treated as the authoritative narrative input for the next iteration.

The existing design language should be preserved unless there is a clear reason to change it. Avoid turning every project into an identical template; each should demonstrate a different kind of agentic capability.

---

## Next iteration

1. Replace placeholder content for the four clarified projects.
2. Update their `story` status / metadata accordingly.
3. Keep each project concise enough for a one-hour workshop.
4. Prefer visual process diagrams, real screenshots and live-demo transitions over prose-heavy slides.
5. Make Atlas vs Radar explicit: **accumulated knowledge vs continuous incoming stream**.
6. For Deutsch-Atlas, show the progression:
   **research evidence → standards → authored corpus → editorial tooling → audio studio → real learning product**.
7. For ScoreQuant, preserve the accidental/improvised origin, then show:
   **library request → candidate theorem → verification infrastructure → research workflow → library + paper**.
8. Revisit the synthesis slides (`Five Capabilities`, `Beyond Coding`, `Closing`) so they express the broader R&D / cross-department message.
9. Do not frame the takeaway as “AI writes software faster.”
10. Do not claim mathematical results are established merely because multiple LLMs agree. Emphasize literature, independent critique, numerical evidence, counterexamples, tests and Lean exploration.
11. Keep the tone practical and skeptical rather than evangelical.
12. Leave room for live demos. The slides support the presenter; they should not duplicate the websites.

## Desired ending

A possible final progression:

**Coding productivity → individual leverage → new kinds of personal tools → persistent knowledge/information workflows → cross-department capability → R&D and discovery**

Final challenge to the audience:

> Do not ask only: “How can an LLM make my current work faster?”  
> Ask: **“What useful thing do we currently not even attempt because it would take too much time, coordination or specialized implementation?”**
