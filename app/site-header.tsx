"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const links = [
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/speaking", label: "Speaking" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const menu = useRef<HTMLDetailsElement>(null);
  const toggle = useRef<HTMLElement>(null);
  useEffect(() => {
    if (menu.current) menu.current.open = false;
  }, [pathname]);

  return (
    <header className="site-header container">
      <div className="header-row">
        <Link
          className="site-brand"
          href="/"
          aria-label="Joaquin Vizcarra, home"
        >
          Joaquin Vizcarra
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
              {link.href === "/contact" && <span aria-hidden="true"> ↗</span>}
            </Link>
          ))}
        </nav>
        <details
          className="mobile-menu"
          ref={menu}
          onKeyDown={(event) => {
            if (event.key === "Escape" && menu.current?.open) {
              menu.current.open = false;
              toggle.current?.focus();
            }
          }}
        >
          <summary className="menu-toggle" ref={toggle}>
            Menu <span aria-hidden="true">+</span>
          </summary>
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                onClick={() => {
                  if (menu.current) menu.current.open = false;
                }}
              >
                {link.label}
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
