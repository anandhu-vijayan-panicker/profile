import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { projects, profile } from "../data/profile";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <header className="section-header">
          <h2>Latest <span>Works</span></h2>
          <p>Mobile apps, platforms, and web solutions built for real businesses.</p>
        </header>

        <div className="grid-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              className={`card card--hover card--${project.color} project-card`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="project-card__img-wrap">
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-card__img"
                  loading="lazy"
                />
              </div>
              <div className="project-card__body">
                <span className="project-card__cat">{project.category}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-card__tags">
                  {project.stack.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="projects-cta">
          <a href={profile.portfolio} target="_blank" rel="noopener noreferrer" className="btn-outline">
            View All Projects <HiArrowRight />
          </a>
        </div>
      </div>

      <style>{`
        .project-card {
          overflow: hidden;
          padding: 0;
          display: flex;
          flex-direction: column;
        }
        .project-card__img-wrap {
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: var(--bg-white);
        }
        .project-card__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.35s ease;
        }
        .project-card:hover .project-card__img { transform: scale(1.04); }
        .project-card__body {
          padding: var(--space-4);
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .project-card__cat {
          font-size: 0.68rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .project-card__body h3 {
          font-size: 1rem;
          font-weight: 700;
          margin: var(--space-1) 0 var(--space-2);
        }
        .project-card__body p {
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: var(--space-3);
          flex: 1;
        }
        .project-card__tags {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-1);
        }
        .projects-cta {
          text-align: center;
          margin-top: var(--space-5);
        }
      `}</style>
    </section>
  );
}
