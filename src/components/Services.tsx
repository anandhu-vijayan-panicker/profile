import { motion } from "framer-motion";
import { services } from "../data/profile";

const icons: Record<string, React.ReactNode> = {
  mobile: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="5" y="2" width="14" height="20" rx="2" />
    </svg>
  ),
  web: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  api: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  cloud: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
};

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <header className="section-header">
          <h2>Services I <span>Offer</span></h2>
          <p>Designed to meet your product and business needs.</p>
        </header>

        <div className="grid-2 services-grid">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              className={`card card--hover card--${s.color} service-card`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <div className="service-card__icon">{icons[s.icon]}</div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .services-grid { grid-template-columns: repeat(4, 1fr); }
        }
        .service-card {
          padding: var(--space-4);
        }
        .service-card__icon {
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-white);
          border-radius: 50%;
          margin-bottom: var(--space-3);
        }
        .service-card h3 {
          font-size: 0.95rem;
          font-weight: 700;
          margin-bottom: var(--space-2);
        }
        .service-card p {
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
}
