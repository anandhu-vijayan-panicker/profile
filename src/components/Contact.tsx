import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaStackOverflow } from "react-icons/fa";
import { profile } from "../data/profile";

const socials = [
  { label: "Email", href: `mailto:${profile.email}`, icon: HiOutlineMail },
  { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedinIn },
  { label: "GitHub", href: profile.github, icon: FaGithub },
  { label: "WhatsApp", href: profile.whatsapp, icon: FaWhatsapp },
  { label: "Stack Overflow", href: profile.stackoverflow, icon: FaStackOverflow },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          className="contact-card card"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <header className="section-header section-header--row" style={{ marginBottom: "var(--space-5)" }}>
            <h2>Contact <span>Me</span></h2>
            <span className="section-num">( 05 )</span>
          </header>

          <div className="contact-grid">
            <div className="contact-info">
              <a href={`mailto:${profile.email}`} className="contact-row">
                <HiOutlineMail /> {profile.email}
              </a>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="contact-row">
                <HiOutlinePhone /> {profile.phone}
              </a>
              <p className="contact-row">
                <HiOutlineLocationMarker /> {profile.location}
              </p>
            </div>

            <div className="contact-socials">
              <p className="contact-socials__label">Connect</p>
              <div className="contact-socials__grid">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="contact-social-btn">
                    <Icon />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-actions">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              <HiOutlineMail /> Email Me
            </a>
            <a href={profile.resumePdf} target="_blank" rel="noopener noreferrer" className="btn-outline">
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>

      <style>{`
        .contact-card {
          padding: var(--space-5);
          background: var(--bg-white) !important;
          border: 2px solid var(--lavender-border) !important;
        }
        .contact-grid {
          display: grid;
          gap: var(--space-5);
          margin-bottom: var(--space-5);
        }
        @media (min-width: 700px) {
          .contact-grid { grid-template-columns: 1fr 1fr; }
        }
        .contact-info { display: flex; flex-direction: column; gap: var(--space-2); }
        .contact-row {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: 0.88rem;
        }
        a.contact-row:hover { color: var(--orange); }
        .contact-row svg { color: var(--orange); flex-shrink: 0; }
        .contact-socials__label {
          font-weight: 700;
          font-size: 0.9rem;
          margin-bottom: var(--space-3);
        }
        .contact-socials__grid {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-2);
        }
        .contact-social-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-1);
          padding: var(--space-3);
          min-width: 4.5rem;
          border-radius: var(--radius);
          border: 1px solid var(--border);
          background: var(--bg);
          font-size: 0.65rem;
          font-weight: 600;
          color: var(--text-muted);
          transition: border-color 0.2s;
        }
        .contact-social-btn:hover { border-color: var(--orange); color: var(--orange); }
        .contact-social-btn svg { font-size: 1.25rem; }
        .contact-actions {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-3);
          justify-content: center;
        }
      `}</style>
    </section>
  );
}
