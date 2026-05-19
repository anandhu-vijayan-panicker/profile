import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <motion.div className="container hero__grid">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="hero__name-row">
            <h1 className="hero__title">I&apos;m {profile.firstName}</h1>
            <span className="hero__wave" aria-hidden>👋</span>
          </div>
          <h1 className="hero__title">{profile.lastName}</h1>
          <p className="hero__role">
            a <span>{profile.title.toLowerCase()}</span>
          </p>
          <p className="hero__bio">{profile.heroBio}</p>
          <div className="hero__actions">
            <a
              href="#projects"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              See My Works <HiArrowRight />
            </a>
            <a
              href={profile.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            {profile.availability}
          </div>
          <div className="hero__arch">
            <img src={profile.photo} alt={profile.name} className="hero__photo" loading="eager" />
          </div>
        </motion.div>
      </motion.div>

      <style>{`
        .hero {
          padding: calc(var(--nav-h) + var(--space-6)) 0 var(--space-8);
          scroll-margin-top: var(--nav-h);
        }
        .hero__grid {
          display: grid;
          gap: var(--space-6);
          align-items: center;
        }
        @media (min-width: 900px) {
          .hero__grid {
            grid-template-columns: 1fr 0.85fr;
            gap: var(--space-7);
          }
        }
        .hero__name-row {
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }
        .hero__wave { font-size: 1.75rem; line-height: 1; }
        .hero__title {
          font-size: clamp(2rem, 5.5vw, 3rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
        }
        .hero__role {
          font-size: clamp(1.15rem, 3vw, 1.5rem);
          font-weight: 600;
          color: var(--text-muted);
          margin: var(--space-2) 0 var(--space-4);
        }
        .hero__role span {
          color: var(--text);
          background: linear-gradient(transparent 65%, var(--yellow-border) 65%);
        }
        .hero__bio {
          color: var(--text-muted);
          max-width: 32rem;
          margin-bottom: var(--space-5);
          line-height: 1.65;
          font-size: 0.9rem;
        }
        .hero__actions {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-3);
        }
        .hero__visual {
          position: relative;
          display: flex;
          justify-content: center;
        }
        .hero__arch {
          width: min(320px, 85vw);
          height: min(320px, 85vw);
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid var(--lavender-border);
          background: var(--lavender);
          box-shadow: var(--shadow);
        }
        .hero__photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
        }
        .hero__badge {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          display: flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-2) var(--space-4);
          background: var(--bg-white);
          border: 2px solid var(--mint-border);
          border-radius: 100px;
          font-size: 0.7rem;
          font-weight: 700;
          box-shadow: var(--shadow);
          white-space: nowrap;
        }
        @media (min-width: 900px) {
          .hero__badge { left: 0; transform: none; }
        }
        .hero__badge-dot {
          width: 7px;
          height: 7px;
          background: #4caf50;
          border-radius: 50%;
        }
      `}</style>
    </section>
  );
}
