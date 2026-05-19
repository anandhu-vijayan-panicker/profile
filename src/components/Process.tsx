import { motion } from "framer-motion";
import { workflow, experience } from "../data/profile";

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <header className="section-header">
          <h2>Work <span>Experience</span></h2>
          <p>3+ years building mobile apps, web platforms, and enterprise systems.</p>
        </header>

        <div className="workflow-row">
          {workflow.map((step, i) => (
            <motion.div
              key={step.step}
              className="workflow-step card"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <span className="workflow-step__num">{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="exp-list">
          {experience.map((job, i) => (
            <motion.article
              key={job.company}
              className={`card card--${["lavender", "mint", "pink"][i % 3]} exp-card`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <div className="exp-card__head">
                <div>
                  <h4>{job.role}</h4>
                  <p className="exp-card__company">{job.company} · {job.location}</p>
                  <p className="exp-card__type">{job.type}</p>
                </div>
                <span className="exp-card__period">{job.period}</span>
              </div>
              <ul className="exp-card__list">
                {job.highlights.map((h) => (
                  <li key={h.slice(0, 48)}>{h}</li>
                ))}
              </ul>
              <div className="exp-card__tags">
                {job.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        .workflow-row {
          display: grid;
          gap: var(--space-3);
          margin-bottom: var(--space-6);
        }
        @media (min-width: 700px) {
          .workflow-row { grid-template-columns: repeat(4, 1fr); }
        }
        .workflow-step {
          padding: var(--space-4);
          background: var(--bg-white) !important;
          border: 2px solid var(--lavender-border) !important;
        }
        .workflow-step__num {
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--orange);
          display: block;
          margin-bottom: var(--space-2);
        }
        .workflow-step h3 {
          font-size: 0.9rem;
          font-weight: 700;
          margin-bottom: var(--space-1);
        }
        .workflow-step p {
          font-size: 0.78rem;
          color: var(--text-muted);
          line-height: 1.45;
        }
        .exp-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }
        .exp-card { padding: var(--space-5); }
        .exp-card__head {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: var(--space-2);
          margin-bottom: var(--space-3);
        }
        .exp-card h4 { font-size: 1rem; font-weight: 700; }
        .exp-card__company { font-size: 0.85rem; color: var(--text-muted); }
        .exp-card__type { font-size: 0.78rem; color: var(--text-muted); }
        .exp-card__period {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--orange);
          white-space: nowrap;
        }
        .exp-card__list {
          list-style: none;
          margin-bottom: var(--space-3);
        }
        .exp-card__list li {
          font-size: 0.82rem;
          color: var(--text-muted);
          padding: 0.2rem 0 0.2rem 0.9rem;
          position: relative;
          line-height: 1.45;
        }
        .exp-card__list li::before {
          content: "•";
          position: absolute;
          left: 0;
          color: var(--orange);
        }
        .exp-card__tags {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-1);
        }
      `}</style>
    </section>
  );
}
