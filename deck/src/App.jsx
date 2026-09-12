import React, { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';

const projects = [
  ['CV Atlas', 'Living knowledge from primary papers', 'ready'],
  ['Family Documents', 'Private local information system', 'placeholder'],
  ['Deutsch-Atlas', 'Large structured learning/product system', 'placeholder'],
  ['CV Tech Radar', 'Continuous technical intelligence workflow', 'placeholder'],
  ['ScoreQuant', 'Mathematical research + engineering', 'placeholder'],
];

function ProjectCard({ title, subtitle, status }) {
  return (
    <div className={`project-card ${status}`}>
      <div className="project-status">{status}</div>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
}

export default function App() {
  const deckRef = useRef(null);

  useEffect(() => {
    const deck = new Reveal(deckRef.current, {
      embedded: true,
      controls: true,
      progress: true,
      hash: true,
      transition: 'slide',
      width: 1440,
      height: 900,
      margin: 0,
    });
    deck.initialize();
    return () => deck.destroy();
  }, []);

  return (
    <div className="deck-shell">
      <div className="reveal" ref={deckRef}>
        <div className="slides">
          <section className="hero">
            <div className="eyebrow">Internal R&D workshop</div>
            <h1>Frontier Models<br/>in the Wild</h1>
            <p className="lede">Five weekend projects — and a different way to think about R&D work.</p>
          </section>

          <section>
            <div className="eyebrow">Artifacts first</div>
            <h2>These are not demos I prepared for this talk.</h2>
            <div className="project-grid">
              {projects.map(([title, subtitle, status]) => (
                <ProjectCard key={title} title={title} subtitle={subtitle} status={status} />
              ))}
            </div>
          </section>

          <section className="question-slide">
            <div className="eyebrow">The question</div>
            <h2>How can one person build things like this as weekend work?</h2>
          </section>

          <section>
            <div className="eyebrow">My workflow</div>
            <div className="flow">
              {['Talk', 'Concept', 'Context', 'Agents', 'Artifact', 'Evidence', 'Critique', 'Iterate'].map((x, i) => (
                <React.Fragment key={x}>
                  <div className="flow-node">{x}</div>
                  {i < 7 && <div className="arrow">→</div>}
                </React.Fragment>
              ))}
            </div>
            <p className="note">The prompt is temporary. The repository becomes the memory.</p>
          </section>

          <section>
            <div className="eyebrow">Persistent context backbone</div>
            <div className="repo-tree">
              <pre>{`repo/
├── CLAUDE.md / AGENTS.md
├── docs/
│   ├── problem-definition.md
│   ├── system-design.md
│   ├── roadmap.md
│   └── decisions.md
├── skills/
├── tests/
└── product`}</pre>
            </div>
          </section>

          <section>
            <div className="eyebrow">Control where it matters</div>
            <div className="split">
              <div><h3>Rigid</h3><p>intent<br/>constraints<br/>evidence<br/>acceptance criteria</p></div>
              <div><h3>Flexible</h3><p>implementation<br/>architecture proposals<br/>visual design<br/>proactive improvements</p></div>
            </div>
          </section>

          <section>
            <div className="eyebrow">Project 1 — CV Atlas</div>
            <h2>From reading papers to maintaining an evolving body of knowledge.</h2>
            <p className="lede small">Primary PDFs → paper index → summaries → concepts → relations → narratives</p>
          </section>

          <section>
            <div className="eyebrow">CV Atlas — live demo</div>
            <h2>Foundation Models for Vision</h2>
            <p className="lede">Show the narrative and trace it back to structured source knowledge.</p>
            <a className="demo-link" href="https://vitavision.dev/atlas/narratives/foundation-models-for-vision" target="_blank">Open narrative ↗</a>
          </section>

          <section>
            <div className="eyebrow">Company implication</div>
            <h2>From documents we store<br/>to knowledge we can navigate.</h2>
            <p className="lede">One or several living internal atlases across R&D and departments.</p>
          </section>

          {projects.slice(1).map(([title]) => (
            <section key={title} className="placeholder-slide">
              <div className="eyebrow">Project placeholder</div>
              <h2>{title}</h2>
              <p>Story to be developed with Vitaly before implementation.</p>
            </section>
          ))}

          <section>
            <div className="eyebrow">Think bigger than coding</div>
            <h2>What if we redesign how the company<br/>learns, communicates and solves problems?</h2>
          </section>
        </div>
      </div>
    </div>
  );
}
