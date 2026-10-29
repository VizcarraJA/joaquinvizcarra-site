import { LinkArrow } from "@/app/components/LinkArrow";
import Image from "next/image";
import Link from "next/link";
import { PersonJsonLd } from "@/app/components/JsonLd";
import {
  leadershipRoles,
  profile,
  researchThemes,
  selectedPublications,
  selectedTalks,
} from "@/lib/site-data";
import { createPageMetadata, siteDescription } from "@/lib/metadata";

export const metadata = {
  ...createPageMetadata(
    "Movement Disorders Neurologist & Clinical AI Researcher",
    siteDescription,
    "/",
  ),
  title: {
    absolute: "Joaquin Vizcarra, MD, MSTR | Parkinson's Disease & Clinical AI",
  },
};

export default function HomePage() {
  const featuredPublications = selectedPublications
    .filter((paper) => paper.featured)
    .slice(0, 4);

  return (
    <div className="container home-page">
      <PersonJsonLd />
      <section className="home-hero" aria-labelledby="home-title">
        <div>
          <p className="eyebrow">Joaquin A. Vizcarra, MD, MSTR</p>
          <h1 className="home-title" id="home-title">
            Joaquin<span>Vizcarra</span>
          </h1>
          <p className="home-identity">
            Movement disorders neurologist.
            <br />
            Researcher in Parkinson&apos;s disease and clinical AI.
          </p>
          <p className="home-appointment">
            {profile.title}, {profile.institution}
            <br />
            {profile.primaryDepartment}
            <br />
            Secondary appointment in the {profile.secondaryDepartment}
          </p>
        </div>
        <figure className="home-portrait">
          <Image
            src="/headshot.jpg"
            alt="Joaquin Vizcarra, movement disorders neurologist"
            width={520}
            height={650}
            sizes="(max-width: 480px) 96px, (max-width: 760px) 160px, 220px"
            priority
          />
          <figcaption>
            Clinical practice informs
            <br />
            every research question.
          </figcaption>
        </figure>
      </section>
      <p className="home-statement">
        My work connects clinical experience with AI and multimodal data to
        understand Parkinson&apos;s disease and{" "}
        <span>extend access to informed care.</span>
      </p>

      <section className="home-research" aria-labelledby="research-title">
        <div className="section-heading">
          <h2 id="research-title">Research directions</h2>
          <span className="section-label">
            Parkinson&apos;s disease / Clinical AI
          </span>
        </div>
        <div>
          {researchThemes.map((theme, index) => (
            <article className="research-row" key={theme.id}>
              <span className="research-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>
                <Link href={`/research#${theme.id}`}>
                  {theme.title}
                  <LinkArrow />
                </Link>
              </h3>
              <p>{theme.body}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="home-lower">
        <section aria-labelledby="selected-work-title">
          <div className="section-heading">
            <h2 id="selected-work-title">Selected work</h2>
            <Link className="text-link" href="/publications">
              All publications <LinkArrow />
            </Link>
          </div>
          <div className="publication-list">
            {featuredPublications.map((paper) => (
              <article className="publication-item" key={paper.id}>
                <p className="publication-meta">
                  <span>{paper.journal}</span>
                  <span aria-hidden="true"> · </span>
                  {paper.status === "in-press" ? (
                    <span className="publication-status">In press</span>
                  ) : (
                    <span>{paper.year}</span>
                  )}
                </p>
                <h3 className="publication-title">
                  {paper.url ? (
                    <a href={paper.url} target="_blank" rel="noreferrer">
                      {paper.title}
                      <LinkArrow />
                    </a>
                  ) : (
                    paper.title
                  )}
                </h3>
              </article>
            ))}
          </div>
        </section>
        <div className="home-aside">
          <section aria-labelledby="leadership-title">
            <div className="section-heading">
              <h2 id="leadership-title">Leadership &amp; service</h2>
            </div>
            <ul className="leadership-list">
              {leadershipRoles.slice(0, 3).map((role) => (
                <li key={role.title}>
                  <h3>{role.title}</h3>
                  <p>{role.organization}</p>
                </li>
              ))}
            </ul>
            <Link className="text-link" href="/about">
              More about me <LinkArrow />
            </Link>
          </section>
          <section className="home-speaking" aria-labelledby="speaking-title">
            <div className="section-heading">
              <h2 id="speaking-title">Speaking</h2>
              <Link className="text-link" href="/speaking">
                All talks <LinkArrow />
              </Link>
            </div>
            {selectedTalks.slice(0, 2).map((talk) => (
              <article className="home-talk" key={talk.id}>
                <time dateTime={talk.dateISO}>{talk.date}</time>
                <h3>
                  {talk.url ? (
                    <a href={talk.url} target="_blank" rel="noreferrer">
                      {talk.venue}
                      <LinkArrow />
                    </a>
                  ) : (
                    talk.venue
                  )}
                </h3>
                <p>{talk.title}</p>
              </article>
            ))}
          </section>
        </div>
      </div>
      <section className="home-contact" aria-label="Contact">
        <p>For research, speaking, and academic inquiries</p>
        <a href={`mailto:${profile.email}`}>
          {profile.email} <LinkArrow />
        </a>
      </section>
    </div>
  );
}
