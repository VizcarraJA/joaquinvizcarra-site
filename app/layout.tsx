import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "./site-header";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: {
    default: "Joaquin Vizcarra, M.D.",
    template: "%s | Joaquin Vizcarra, M.D."
  },
  description:
    "Movement disorders neurologist at Penn focused on Parkinson's disease, clinically deployable AI, and translational clinical research.",
  metadataBase: new URL("https://joaquinvizcarra.com"),
  authors: [{ name: "Joaquin Vizcarra" }],
  openGraph: {
    title: "Joaquin Vizcarra, M.D.",
    description:
      "Movement disorders neurologist at Penn focused on Parkinson's disease, clinically deployable AI, and translational clinical research.",
    url: "https://joaquinvizcarra.com",
    siteName: "Joaquin Vizcarra, M.D.",
    type: "website",
    images: [
      {
        url: "/headshot.jpg",
        width: 520,
        height: 650,
        alt: "Joaquin Vizcarra, M.D."
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@VizcarraJA",
    creator: "@VizcarraJA",
    title: "Joaquin Vizcarra, M.D.",
    description:
      "Movement disorders neurologist at Penn focused on Parkinson's disease, clinically deployable AI, and translational clinical research.",
    images: ["/headshot.jpg"]
  },
  alternates: {
    types: {
      "application/rss+xml": "https://joaquinvizcarra.com/feed.xml"
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />

        <main className="container main">{children}</main>

        <footer className="footer">
          <div className="container footer-inner">
            <div className="footer-left">
              <div className="footer-title">Joaquin Vizcarra, M.D.</div>
              <div className="footer-sub">
                Parkinson's disease | artificial intelligence | clinical research
              </div>
            </div>
            <div className="footer-right">
              <a
                className="footer-link"
                href="https://scholar.google.com/citations?hl=en&user=wuL0vg8AAAAJ"
                target="_blank"
                rel="noreferrer"
              >
                Google Scholar
              </a>
              <span className="footer-dot">•</span>
              <a
                className="footer-link"
                href="https://x.com/VizcarraJA"
                target="_blank"
                rel="noreferrer"
              >
                X (Twitter)
              </a>
              <span className="footer-dot">•</span>
              <a
                className="footer-link"
                href="https://www.linkedin.com/in/joaquin-vizcarra/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <span className="footer-dot">•</span>
              <Link className="footer-link" href="/contact">
                Contact
              </Link>
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
