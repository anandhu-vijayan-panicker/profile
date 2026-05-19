import { motion } from "framer-motion";
import { profile, education, languages } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          className="about__card card card--lavender"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
        >
          <div className="about__grid">
            <div>
              <header className="section-header section-header--row" style={{ marginBottom: "var(--space-4)" }}>
                <h2>About <span>Me</span></h2>
                <span className="section-num">( 01 )</span>
              </header>
              <p className="about__text">{profile.summary}</p>
              <p className="about__meta">📍 {profile.location}</p>
              <div className="about__langs">
                {languages.map((l) => (
                  <span key={l.name} className="about__lang-pill">{l.name}</span>
                ))}
              </div>
            </div>

            <div className="about__edu">
              <h3 className="about__edu-title">Education</h3>
              {education.map((edu, i) => (
                <div key={edu.degree} className={`about__edu-item card card--${["yellow", "mint"][i % 2]}`}>
                  <span className="about__period">{edu.period}</span>
                  <h4>{edu.degree}</h4>
                  <p className="about__field">{edu.field}</p>
                  <p className="about__inst">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .about__card { padding: var(--space-5); border: 2px solid var(--lavender-border) !important; }
        .about__grid {
          display: grid;
          gap: var(--space-5);
        }
        @media (min-width: 800px) {
          .about__grid { grid-template-columns: 1.1fr 1fr; gap: var(--space-6); }
        }
        .about__text {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.65;
          margin-bottom: var(--space-3);
        }
        .about__meta { font-weight: 600; font-size: 0.875rem; margin-bottom: var(--space-4); }
        .about__langs { display: flex; flex-wrap: wrap; gap: var(--space-2); }
        .about__lang-pill {
          background: var(--bg-white);
          padding: 0.35rem 0.85rem;
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 600;
          border: 1px solid var(--border);
        }
        .about__edu-title {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: var(--space-3);
        }
        .about__edu-item {
          padding: var(--space-4);
          margin-bottom: var(--space-3);
        }
        .about__edu-item:last-child { margin-bottom: 0; }
        .about__period {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--orange);
        }
        .about__edu-item h4 {
          font-size: 0.95rem;
          font-weight: 700;
          margin: var(--space-1) 0;
        }
        .about__field { font-size: 0.85rem; font-weight: 600; }
        .about__inst { font-size: 0.8rem; color: var(--text-muted); }
      `}</style>
    </section>
  );
}
