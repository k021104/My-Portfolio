import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Menu, X } from "lucide-react";
import "../styles/Navbar.css";

const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Detect which section is visible on scroll
  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY + 120;

      navItems.forEach((item) => {
        const section = document.getElementById(item.toLowerCase());
        if (!section) return;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollY >= top && scrollY < bottom) {
          setActiveSection(item.toLowerCase());
        }
      });
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      {/* ── Navbar ── */}
      <header className="navbar">
        <div className="navbar__inner">

          {/* Logo */}
          <a href="#home" className="navbar__logo">
            <span className="logo__dot" />
            Krishna Chavda
          </a>

          {/* Desktop Links */}
          <nav className="navbar__nav">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`nav__link ${activeSection === item.toLowerCase() ? "nav__link--active" : ""}`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop Social Icons */}
          <div className="navbar__socials">
            <a href="https://github.com/k021104" target="_blank" rel="noopener noreferrer" className="social__btn" title="GitHub">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/krishna-chavda-589b13313/" target="_blank" rel="noopener noreferrer" className="social__btn" title="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </header>

      {/* Spacer so content does not hide under fixed navbar */}
      <div className="navbar__spacer" />

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Dark overlay behind drawer */}
            <motion.div
              className="drawer__overlay"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />

            {/* Drawer panel */}
            <motion.div
              className="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
            >
              <p className="drawer__name">Krishna Chavda</p>

              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`drawer__link ${activeSection === item.toLowerCase() ? "drawer__link--active" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}

              {/* Social icons inside drawer */}
              <div className="drawer__socials">
                <a href="https://github.com/k021104" target="_blank" rel="noopener noreferrer" className="social__btn">
                  <Github size={18} />
                </a>
                <a href="https://www.linkedin.com/in/krishna-chavda-589b13313/" target="_blank" rel="noopener noreferrer" className="social__btn">
                  <Linkedin size={18} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}