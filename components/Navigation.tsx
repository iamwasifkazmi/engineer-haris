"use client";

import { useEffect, useState } from "react";
import { navLinks, personalInfo } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`site-header fixed top-0 left-0 right-0 z-50 ${
          scrolled || menuOpen ? "header-scrolled" : ""
        }`}
      >
        <div className="header-bar">
          <nav
            className="header-inner"
            aria-label="Main navigation"
          >
            <a href="#" className="header-brand">
              <span className="header-brand-mark">
                HK<span className="text-gold">.</span>
              </span>
              <span className="header-brand-name">{personalInfo.name}</span>
            </a>

            <ul className="header-nav">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="header-nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="header-actions">
              <div className="header-theme">
                <ThemeToggle />
              </div>

              <a
                href={`mailto:${personalInfo.email}`}
                className="header-cta"
              >
                Get in Touch
              </a>

              <button
                type="button"
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                <span className={`hamburger ${menuOpen ? "open" : ""}`} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-menu-overlay ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
        onClick={closeMenu}
      >
        <nav
          className="mobile-menu-panel"
          aria-label="Mobile navigation"
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="mobile-menu-links" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="mobile-menu-link"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-menu-footer">
            <ThemeToggle />
            <a
              href={`mailto:${personalInfo.email}`}
              className="mobile-menu-cta"
              onClick={closeMenu}
            >
              Get in Touch
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
