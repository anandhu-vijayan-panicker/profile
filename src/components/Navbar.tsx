import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { profile, navLinks } from "../data/profile";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <div className="container nav__inner">
          <a
            href="#hero"
            className="nav__logo"
            onClick={(e) => { e.preventDefault(); scrollTo("hero"); }}
          >
            <img src={profile.photo} alt="" className="nav__avatar" width={44} height={44} />
            <span className="nav__name">{profile.shortName}</span>
          </a>

          <nav className="nav__links" aria-label="Main">
            {navLinks.map((link) => (
              <button key={link.id} type="button" onClick={() => scrollTo(link.id)} className="nav__link">
                {link.label}
              </button>
            ))}
          </nav>

          <div className="nav__actions">
            <a
              href={profile.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="nav__resume btn-primary"
            >
              Resume
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="nav__icon" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="nav__icon" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>

          <button type="button" className="nav__burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="nav__mobile" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {navLinks.map((link, i) => (
              <motion.button
                key={link.id}
                type="button"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
              </motion.button>
            ))}
            <a href={profile.resumePdf} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          height: var(--nav-h);
          display: flex;
          align-items: center;
          transition: background 0.2s, box-shadow 0.2s;
        }
        .nav--scrolled {
          background: rgba(255,255,255,0.94);
          backdrop-filter: blur(10px);
          box-shadow: var(--shadow);
        }
        .nav__inner {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          width: 100%;
        }
        .nav__logo {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          flex-shrink: 0;
        }
        .nav__avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--lavender-border);
        }
        .nav__name {
          font-weight: 800;
          font-size: 1rem;
          letter-spacing: -0.02em;
        }
        @media (max-width: 640px) {
          .nav__name { display: none; }
        }
        .nav__links {
          display: none;
          flex: 1;
          justify-content: center;
          gap: 0.1rem;
        }
        @media (min-width: 1024px) { .nav__links { display: flex; } }
        .nav__link {
          padding: 0.4rem 0.65rem;
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-muted);
          border-radius: 100px;
        }
        .nav__link:hover { color: var(--text); background: var(--lavender); }
        .nav__actions {
          display: none;
          align-items: center;
          gap: var(--space-2);
          margin-left: auto;
        }
        @media (min-width: 1024px) { .nav__actions { display: flex; } }
        .nav__resume { padding: 0.5rem 1rem !important; font-size: 0.8rem !important; }
        .nav__icon {
          width: 2rem;
          height: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 2px solid var(--lavender-border);
          color: var(--text-muted);
          font-size: 0.8rem;
        }
        .nav__icon:hover { border-color: var(--orange); color: var(--orange); }
        .nav__burger {
          display: flex;
          margin-left: auto;
          font-size: 1.4rem;
        }
        @media (min-width: 1024px) { .nav__burger { display: none; } }
        .nav__mobile {
          position: fixed;
          inset: 0;
          z-index: 999;
          background: var(--bg-white);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: var(--space-4);
          padding: var(--space-6);
        }
        .nav__mobile button {
          font-size: 1.2rem;
          font-weight: 700;
        }
      `}</style>
    </>
  );
}
