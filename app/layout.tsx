import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import SiteHeader from "./site-header";
import { profile } from "@/lib/site-data";
import { siteDescription, siteUrl } from "@/lib/metadata";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Joaquin Vizcarra, MD, MSTR",
    template: "%s | Joaquin Vizcarra",
  },
  description: siteDescription,
  authors: [{ name: "Joaquin Vizcarra", url: siteUrl }],
  keywords: [
    "Joaquin Vizcarra",
    "Joaquin A. Vizcarra",
    "Joaquin Vizcarra Pasapera",
    "Parkinson's disease",
    "movement disorders",
    "clinical AI",
    "natural language processing",
    "falls prediction",
    "University of Cincinnati",
  ],
  openGraph: {
    type: "website",
    siteName: "Joaquin Vizcarra",
    locale: "en_US",
    title: "Joaquin Vizcarra, MD, MSTR",
    description: siteDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Joaquin Vizcarra, movement disorders neurologist and clinical AI researcher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@VizcarraJA",
    title: "Joaquin Vizcarra, MD, MSTR",
    description: siteDescription,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${plexMono.variable}`}
    >
      <body>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <footer className="site-footer container">
          <div className="footer-main">
            <div>
              <Link href="/" className="footer-name">
                {profile.displayName}, {profile.credentials}
              </Link>
              <p>
                {profile.title}
                <br />
                {profile.institution}
              </p>
            </div>
            <nav className="footer-social" aria-label="Professional profiles">
              <a href={profile.links.scholar} target="_blank" rel="noreferrer">
                Google Scholar <span aria-hidden="true">↗</span>
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a href={profile.links.orcid} target="_blank" rel="noreferrer">
                ORCID <span aria-hidden="true">↗</span>
              </a>
            </nav>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Joaquin Vizcarra</p>
            <nav aria-label="Footer navigation">
              <Link href="/research">Research</Link>
              <Link href="/publications">Publications</Link>
              <Link href="/speaking">Speaking</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
