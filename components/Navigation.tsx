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
        className={`site-header fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen ? "nav-scrolled py-3" : "bg-transparent py-4"
        }`}
      >
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6"
          aria-label="Main navigation"
        >
          <a
            href="#"
            className="shrink-0 font-display text-xl font-semibold tracking-tight text-cream"
          >
            HK<span className="text-gold">.</span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>

            <a
              href={`mailto:${personalInfo.email}`}
              className="hidden rounded-full border border-gold/30 bg-gold/10 px-5 py-2 text-sm font-medium text-gold transition-all hover:border-gold/60 hover:bg-gold/20 md:inline-flex"
            >
              Get in Touch
            </a>

            <button
              type="button"
              className="menu-toggle md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span className={`hamburger ${menuOpen ? "open" : ""}`} />
            </button>
          </div>
        </nav>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-menu-overlay md:hidden ${menuOpen ? "open" : ""}`}
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
