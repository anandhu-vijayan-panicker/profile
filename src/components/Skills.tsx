import { skillCategories } from "../data/profile";
import Marquee from "./Marquee";

function SkillCard({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="skill-marquee__card">
      <img src={icon} alt="" width={32} height={32} loading="lazy" />
      <span>{name}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section section--compact skills-section">
      <div className="container">
        <header className="section-header">
          <h2>
            Technical <span>Skills</span>
          </h2>
          <p>Tools and technologies I use daily.</p>
        </header>
      </div>

      <div className="container skills-marquees">
        {skillCategories.map((cat, ci) => (
          <div key={cat.title} className="skills-marquee-row">
            <div className="skills-marquee-row__label">
              <h3>{cat.title}</h3>
            </div>
            <Marquee
              duration={ci % 2 === 0 ? 32 : 38}
              direction={ci % 2 === 0 ? "left" : "right"}
            >
              {[...cat.skills, ...cat.skills, ...cat.skills].map((skill, i) => (
                <SkillCard key={`${skill.name}-${i}`} name={skill.name} icon={skill.icon} />
              ))}
            </Marquee>
          </div>
        ))}
      </div>

      <style>{`
        .skills-section .section-header {
          margin-bottom: var(--space-5);
        }
        .skills-marquees {
          display: flex;
          flex-direction: column;
          gap: var(--space-5);
        }
        .skills-marquee-row__label {
          margin-bottom: var(--space-3);
        }
        .skills-marquee-row__label h3 {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text);
        }
        .skill-marquee__card {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: var(--space-2);
          min-width: auto;
          padding: var(--space-2) var(--space-4);
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          flex-shrink: 0;
          box-shadow: var(--shadow);
        }
        .skill-marquee__card img {
          object-fit: contain;
        }
        .skill-marquee__card span {
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--text-muted);
          white-space: nowrap;
        }
      `}</style>
    </section>
  );
}
