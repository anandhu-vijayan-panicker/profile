import { stats } from "../data/profile";
import Marquee from "./Marquee";

export default function Stats() {
  const items = [...stats, ...stats];

  return (
    <section className="section section--compact stats-section" aria-label="Statistics">
      <div className="stats-section__card card marquee--on-white">
        <Marquee duration={22} direction="left">
          {items.map((stat, i) => (
            <div key={`${stat.label}-${i}`} className="stats-marquee__item">
              <span className="stats-marquee__value">{stat.value}</span>
              <span className="stats-marquee__label">{stat.label}</span>
            </div>
          ))}
        </Marquee>
      </div>

      <style>{`
        .stats-section {
          padding-top: var(--space-4);
          padding-bottom: var(--space-4);
        }
        .stats-section__card {
          padding: var(--space-5) 0;
          background: var(--bg-white) !important;
          border: 2px solid var(--lavender-border) !important;
          border-radius: var(--radius-lg);
          margin: 0 var(--space-5);
          max-width: 1120px;
          margin-left: auto;
          margin-right: auto;
        }
        .stats-marquee__item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-width: 10rem;
          padding: 0 var(--space-5);
          text-align: center;
          flex-shrink: 0;
        }
        .stats-marquee__value {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 800;
          color: var(--orange);
          line-height: 1.1;
        }
        .stats-marquee__label {
          font-size: 0.78rem;
          color: var(--text-muted);
          font-weight: 500;
          margin-top: var(--space-1);
        }
      `}</style>
    </section>
  );
}
