# Current narrative — v0.6

## The claim

This is not primarily a talk about faster coding.

> Frontier models can change the class and scale of problems that one engineer or a small
> team can attack — across research, knowledge work, communication, content, information
> filtering, and software.

The five weekend projects are evidence for that claim. The subject of the talk is the workflow
and mindset that made them possible, and what the same workflow could do across departments.

## Opening

Start with real artifacts, not definitions: the five projects exist and work, shown in order of
scale. State the claim. Then explain the enabler and the method:

- **The enabler is modern models in an agentic harness**, not a prompting trick. (v0.6 dropped
  the v0.3 "The question" slide for this reason: "not better prompting, a workflow" undersold
  what the models themselves changed.)
- **The workflow is a loop**, not a list. Conversation and a small Markdown starter bundle
  happen once; then durable context → agent execution → artifact → evidence and critique runs
  many times, and every pass revises the files. **Measurable success criteria are written into
  the durable context before the agent starts and are what the evidence stage checks.**
- **The repository is the memory.** Agent instructions (how to work, what to challenge), docs
  (problem, design, roadmap, decisions), skills (reusable procedures), tests and artifacts
  (evidence that outlives the chat). Shown project-agnostically: every one of the five projects
  has an agent doc and `docs/`; three have skills; four have tests.
- **Constrain the intent, not the implementation.** Fix only the decisions that matter — intent,
  hard constraints, the evidence standard, acceptance criteria — and give the model room to
  bring its own expertise. Specify every detail and the solution is bounded by what you already
  know; leave room and it explores designs and tools you would not have reached, and you learn
  something. (Replaces v0.3's "Rigid vs Flexible" table, which Vitaly never liked.)

## Five projects, five capabilities

The projects are presented in order of the capability they demonstrate, which is also an
escalation in scale — from a tool for one family to a research programme. They must not feel
like five versions of the same coding demo; each section uses its own shape and its own
evidence.

| # | Project | Capability | What the agent does |
|---|---|---|---|
| 01 | Family Documents Organizer | **Organize** | turn a small messy corpus into a useful structure |
| 02 | CV Atlas | **Understand** | accumulate knowledge, relationships and narratives |
| 03 | CV Tech Radar | **Filter** | handle a continuous high-volume information stream |
| 04 | Deutsch-Atlas | **Create & operate** | build and maintain a large evidence-grounded content system |
| 05 | ScoreQuant | **Discover** | explore new technical and mathematical territory |

Each project opens on one dark slide (name, subtitle, link, hero visual — no standalone title
card), shows its mechanism with real evidence, and closes with a one-sentence company
implication on an accent slide. The synthesis does not recap the five: slide 28 states what they share and what becomes possible (explore, learn, create).

Project mechanisms, as the deck shows them (carried over from the v0.5 editorial pass, which
checked each against the repository):

- Family Documents: scan → Claude classification → register / normalized PDF → source-linked
  derived result. Keep the implementation simple. Small custom tools become worth attempting.
- Atlas: papers and metadata → connected knowledge → one narrative path. Show the actual graph.
- Radar: daily intake → deterministic scoring → capped queue (25) → Claude judgment → ranked
  digest. Daily runs are manual. The public board is cumulative, not one day's digest.
- Deutsch-Atlas: research and standards support the shared corpus; Redaktion controls coverage
  and editorial work, Tonwerk produces reviewed audio, the learner product consumes both.
  Coverage is not proof of teaching quality.
- ScoreQuant: show quantization before the research origin. Separate actual optimizer states,
  hard information retention and soft optimization. Then show verification changing a claim.
  Model agreement is not proof; numerical checks are not proof; Lean is partial.

Atlas and Radar sit back-to-back on purpose: accumulated connected knowledge versus continuous
information-flow filtering.

## Ending

The conclusion (what the five projects share; what becomes possible: explore, learn and
create at the same time) → the take-home question → closing: this deck was built the same
way.

> Do not ask only: "How can an LLM make my current work faster?"
> Ask: **"What useful thing do we currently not even attempt because it would take too much
> time, coordination or specialized implementation?"**

The ScoreQuant implication: missing expertise is no longer a reason not to start; agents bring the skill we lack, a formal proof included; the independent checks decide what stands. ("Freedom to explore. Obligation to verify." was rejected as a motto.)

Tone throughout: practical and skeptical, not evangelical. Statements, not captions; the
"do not claim" hedges live in `docs/projects/*.md`, not on slides. The slides support the
presenter and leave room for live demos; they do not duplicate the websites.
