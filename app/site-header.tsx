"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/writing", label: "Writing" },
  { href: "/research", label: "Research" },
  { href: "/speaking", label: "Speaking" },
  { href: "/publications", label: "Publications" },
  { href: "/contact", label: "Contact" }
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <Link className="brand" href="/">
          Joaquin Vizcarra, M.D.
        </Link>

        <nav className="desktop-nav" aria-label="Primary">
          {links.map((link) => (
            <Link key={link.href} className="navlink" href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="mobile-menu-button"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen ? (
        <nav id="mobile-nav" className="container mobile-menu-panel" aria-label="Mobile Primary">
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
      ) : null}
    </header>
  );
}
