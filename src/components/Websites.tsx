import { motion } from "framer-motion";
import { HiOutlineExternalLink } from "react-icons/hi";
import { websites } from "../data/profile";

const statusClass: Record<string, string> = {
  Live: "status--live",
  "Domain Expired": "status--warn",
};

export default function Websites() {
  return (
    <section id="websites" className="section section--compact">
      <div className="container">
        <header className="section-header">
          <h2>Websites & <span>Web Apps</span></h2>
          <p>Live client projects with SEO and modern stacks.</p>
        </header>

        <ul className="web-list">
          {websites.map((site, i) => (
            <motion.li
              key={site.url}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <a href={site.url} target="_blank" rel="noopener noreferrer" className="web-item card card--hover">
                <div className="web-item__main">
                  <span className="web-item__url">
                    {site.label} <HiOutlineExternalLink />
                  </span>
                  <p>{site.description}</p>
                </div>
                <span className={`web-item__status ${statusClass[site.status] || ""}`}>{site.status}</span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>

      <style>{`
        .web-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }
        .web-item {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: space-between;
          gap: var(--space-3);
          padding: var(--space-4);
          background: var(--bg-white) !important;
          border: 1px solid var(--border) !important;
        }
        .web-item__url {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-weight: 700;
          font-size: 0.88rem;
          color: var(--orange);
          margin-bottom: var(--space-1);
        }
        .web-item__main p {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.45;
          max-width: 36rem;
        }
        .web-item__status {
          font-size: 0.68rem;
          font-weight: 700;
          padding: 0.25rem 0.65rem;
          border-radius: 100px;
          white-space: nowrap;
        }
        .status--live {
          background: var(--mint);
          color: #047857;
        }
        .status--warn {
          background: var(--yellow);
          color: #b45309;
        }
      `}</style>
    </section>
  );
}
