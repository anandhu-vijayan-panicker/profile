import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__logo">{profile.shortName}.</span>
        <p>© {new Date().getFullYear()} {profile.name}</p>
      </div>
      <style>{`
        .footer {
          padding: var(--space-5) 0 var(--space-6);
          border-top: 1px solid var(--lavender-border);
        }
        .footer__inner {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: var(--space-2);
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .footer__logo { font-weight: 800; color: var(--text); }
      `}</style>
    </footer>
  );
}
