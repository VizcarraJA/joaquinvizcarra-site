"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/speaking", label: "Speaking" },
  { href: "/publications", label: "Publications" },
  { href: "/writing", label: "Writing" },
  { href: "/contact", label: "Contact", accent: true }
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className={`header${scrolled || menuOpen ? " header--scrolled" : ""}`}>
      <div className="container header-inner">
        <Link className="brand" href="/">
          Joaquin Vizcarra, M.D.
        </Link>

        <nav className="desktop-nav" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              className={`navlink${link.accent ? " navlink--contact" : ""}`}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" />
                <line x1="18" y1="4" x2="4" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="19" y2="6" />
                <line x1="3" y1="11" x2="19" y2="11" />
                <line x1="3" y1="16" x2="19" y2="16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen ? (
        <div className="mobile-menu-panel">
          <nav
            id="mobile-nav"
            className="container"
            aria-label="Mobile Primary"
          >
            {links.map((link) => (
              <Link
                key={`mobile-${link.href}`}
                className="mobile-navlink"
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
