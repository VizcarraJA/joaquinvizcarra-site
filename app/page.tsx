import Image from "next/image";
import Link from "next/link";
import { getAllPostsMeta } from "@/lib/posts";
import { researchThemes, selectedPublications, selectedTalks } from "@/lib/site-data";
import { PersonJsonLd } from "@/app/components/JsonLd";
import { ScrollAnimations } from "@/app/components/ScrollAnimations";

export default function HomePage() {
  const posts = getAllPostsMeta();
  const recentPosts = posts.slice(0, 4);

  return (
    <>
      <PersonJsonLd />
      <ScrollAnimations />

      {/* Visually hidden SEO block — crawlable by search engines and AI systems */}
      <div className="sr-only" aria-hidden="true">
        Joaquin Vizcarra, M.D. Also known as Joaquin Vizcarra Pasapera, Joaquin A.
        Vizcarra, JA Vizcarra, and J Vizcarra-Pasapera in academic publications.
        Movement disorders neurologist at the University of Pennsylvania.
      </div>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <p className="hero-eyebrow">Neurology · AI · Clinical Research</p>
              <h1 className="hero-title">
                Shaping how AI transforms Parkinson&apos;s disease care
              </h1>
              <p className="hero-sub">
                I&apos;m a movement disorders neurologist using AI and large-scale data
                to model disease trajectories, predict outcomes, and extend
                specialist-level expertise beyond the clinic.
              </p>
              <div className="hero-buttons">
                <Link href="/research" className="btn btn--primary">
                  Research
                </Link>
                <Link href="/writing" className="btn btn--outline">
                  Writing
                </Link>
                <Link href="/contact" className="btn btn--outline">
                  Contact
                </Link>
              </div>
            </div>

            <div className="hero-photo-wrap">
              <div className="hero-photo-frame" aria-hidden="true" />
              <Image
                src="/headshot.jpg"
                alt="Joaquin Vizcarra, M.D."
                width={520}
                height={650}
                className="hero-photo"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── ROLE BAR ─────────────────────────────────────── */}
      <div className="role-bar">
        <div className="container">
          <div className="role-bar__inner">
            <span className="role-bar__title">
              Instructor of Neurology, University of Pennsylvania
            </span>
            <div className="role-bar__socials">
              <a
                className="role-bar__social-link"
                href="https://scholar.google.com/citations?hl=en&user=wuL0vg8AAAAJ"
                target="_blank"
                rel="noreferrer"
              >
                Google Scholar
              </a>
              <a
                className="role-bar__social-link"
                href="https://x.com/VizcarraJA"
                target="_blank"
                rel="noreferrer"
              >
                X / Twitter
              </a>
              <a
                className="role-bar__social-link"
                href="https://www.linkedin.com/in/joaquin-vizcarra/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a className="role-bar__social-link" href="/feed.xml">
                RSS
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── RESEARCH THEMES ──────────────────────────────── */}
      <section className="page-section page-section--cream fade-in">
        <div className="container">
          <div className="section-eyebrow">
            <div className="section-eyebrow__rule" aria-hidden="true" />
            <span className="section-eyebrow__label">Research</span>
          </div>
          <h2 className="section-title">Research Themes</h2>

          <div className="research-grid">
            {researchThemes.map((theme) => (
              <article key={theme.title} className="research-card">
                <h3 className="research-card__title">{theme.title}</h3>
                <p className="research-card__body">{theme.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SELECTED TALKS ───────────────────────────────── */}
      <section className="page-section page-section--navy fade-in">
        <div className="container">
          <div className="section-eyebrow">
            <div className="section-eyebrow__rule" aria-hidden="true" />
            <span className="section-eyebrow__label section-eyebrow__label--light">
              Speaking
            </span>
          </div>
          <h2 className="section-title section-title--light">Selected Talks</h2>

          <div className="talks-list">
            {selectedTalks.slice(0, 3).map((talk) => (
              <article key={`${talk.title}-${talk.date}`} className="talk-item">
                <div>
                  <div className="talk-item__date">{talk.date}</div>
                  <div className="talk-item__location">{talk.location}</div>
                </div>
                <div>
                  <div className="talk-item__title">{talk.title}</div>
                  <div className="talk-item__venue">{talk.venue}</div>
                </div>
              </article>
            ))}
          </div>

          <Link href="/speaking" className="btn btn--outline-light">
            View All Talks
          </Link>
        </div>
      </section>

      {/* ── SELECTED PUBLICATIONS ────────────────────────── */}
      <section className="page-section page-section--cream-dark fade-in">
        <div className="container">
          <div className="section-eyebrow">
            <div className="section-eyebrow__rule" aria-hidden="true" />
            <span className="section-eyebrow__label">Publications</span>
          </div>
          <h2 className="section-title">Selected Publications</h2>

          <div className="pub-grid">
            {selectedPublications.map((pub, i) => (
              <article key={pub.citation} className="pub-card">
                <div className="pub-card__number">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <p className="pub-card__citation">{pub.citation}</p>
                  <div className="pub-card__journal">
                    {pub.journal} · {pub.year}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <a
            className="btn btn--outline"
            href="https://scholar.google.com/citations?hl=en&user=wuL0vg8AAAAJ"
            target="_blank"
            rel="noreferrer"
          >
            Full List on Google Scholar
          </a>
        </div>
      </section>

      {/* ── RECENT WRITING ───────────────────────────────── */}
      <section className="page-section page-section--cream fade-in">
        <div className="container">
          <div className="section-eyebrow">
            <div className="section-eyebrow__rule" aria-hidden="true" />
            <span className="section-eyebrow__label">Writing</span>
          </div>
          <h2 className="section-title">Recent Writing</h2>

          <div className="writing-grid">
            {recentPosts.map((post) => (
              <article key={post.slug} className="writing-card">
                <div className="writing-card__meta">
                  {post.date} · {post.readingTime} min read
                </div>
                <Link
                  href={`/writing/${post.slug}`}
                  className="writing-card__title"
                >
                  {post.title}
                </Link>
                <p className="writing-card__excerpt">{post.description}</p>
                <Link
                  href={`/writing/${post.slug}`}
                  className="writing-card__link"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>

          <Link href="/writing" className="btn btn--outline">
            Visit Writing
          </Link>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────── */}
      <section className="page-section page-section--cream-dark fade-in">
        <div className="container">
          <div className="contact-inner">
            <div className="section-eyebrow" style={{ alignItems: "center" }}>
              <div className="section-eyebrow__rule" aria-hidden="true" />
              <span className="section-eyebrow__label">Contact</span>
            </div>
            <h2 className="contact-inner__title">Get in Touch</h2>
            <p className="contact-inner__sub">
              For speaking invitations, research collaboration, or academic inquiries.
            </p>
            <Link href="/contact" className="btn btn--primary">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
