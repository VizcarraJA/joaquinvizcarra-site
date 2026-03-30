import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Source_Serif_4, DM_Sans } from "next/font/google";
import SiteHeader from "./site-header";
import { Analytics } from "@vercel/analytics/next";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap"
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Joaquin Vizcarra, M.D.",
    template: "%s | Joaquin Vizcarra, M.D."
  },
  description:
    "Movement disorders neurologist at Penn focused on Parkinson's disease, clinically deployable AI, and translational clinical research.",
  keywords: [
    "Joaquin Vizcarra",
    "Joaquin Vizcarra Pasapera",
    "Joaquin A. Vizcarra",
    "JA Vizcarra",
    "J Vizcarra-Pasapera",
    "Parkinson's disease",
    "movement disorders",
    "neurology",
    "artificial intelligence",
    "clinical research",
    "University of Pennsylvania"
  ],
  metadataBase: new URL("https://joaquinvizcarra.com"),
  authors: [{ name: "Joaquin Vizcarra" }],
  alternates: {
    canonical: "https://joaquinvizcarra.com",
    types: {
      "application/rss+xml": "https://joaquinvizcarra.com/feed.xml"
    }
  },
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
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${dmSans.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <SiteHeader />

        <main id="main">{children}</main>

        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div>
                <div className="footer-col__name">Joaquin Vizcarra, M.D.</div>
                <div className="footer-col__sub">
                  Instructor of Neurology
                  <br />
                  University of Pennsylvania
                </div>
              </div>
              <div>
                <div className="footer-col__heading">Navigation</div>
                <nav className="footer-links" aria-label="Footer navigation">
                  <Link className="footer-link" href="/about">
                    About
                  </Link>
                  <Link className="footer-link" href="/research">
                    Research
                  </Link>
                  <Link className="footer-link" href="/speaking">
                    Speaking
                  </Link>
                  <Link className="footer-link" href="/publications">
                    Publications
                  </Link>
                  <Link className="footer-link" href="/writing">
                    Writing
                  </Link>
                </nav>
              </div>
              <div>
                <div className="footer-col__heading">Connect</div>
                <nav className="footer-links" aria-label="Social links">
                  <a
                    className="footer-link"
                    href="https://scholar.google.com/citations?hl=en&user=wuL0vg8AAAAJ"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Google Scholar
                  </a>
                  <a
                    className="footer-link"
                    href="https://x.com/VizcarraJA"
                    target="_blank"
                    rel="noreferrer"
                  >
                    X (Twitter)
                  </a>
                  <a
                    className="footer-link"
                    href="https://www.linkedin.com/in/joaquin-vizcarra/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a
                    className="footer-link"
                    href="mailto:contact@joaquinvizcarra.com"
                  >
                    Email
                  </a>
                  <a className="footer-link" href="/feed.xml">
                    RSS Feed
                  </a>
                </nav>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-bottom__tagline">
                Parkinson&apos;s disease · artificial intelligence · clinical research
              </div>
              <div className="footer-bottom__copy">
                © {new Date().getFullYear()} Joaquin Vizcarra
              </div>
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
