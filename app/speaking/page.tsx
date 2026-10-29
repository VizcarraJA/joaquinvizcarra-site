import { LinkArrow } from "@/app/components/LinkArrow";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import { selectedTalks } from "@/lib/site-data";

export const metadata = createPageMetadata(
  "Speaking",
  "Invited presentations by Joaquin A. Vizcarra on Parkinson’s disease, clinical artificial intelligence, digital health, and falls research.",
  "/speaking"
);

export default function SpeakingPage() {
  const talks = [...selectedTalks].sort((a, b) => b.dateISO.localeCompare(a.dateISO));

  return (
    <div className="container page-shell">
      <header className="page-heading">
        <p className="eyebrow">Speaking</p>
        <h1>A shared conversation<br />about Parkinson’s care.</h1>
        <p className="page-intro">
          I speak with clinical, research, and patient communities about
          Parkinson’s disease, digital health, and the clinical use of artificial
          intelligence.
        </p>
        <Link className="text-link" href="/contact">Speaking inquiries <LinkArrow /></Link>
      </header>

      <section className="editorial-section" aria-labelledby="talks-heading">
        <div className="section-heading">
          <div>
            <p className="section-label">Invited talks & grand rounds</p>
            <h2 id="talks-heading">Selected presentations.</h2>
          </div>
        </div>
        <div className="talk-list">
          {talks.map((talk) => (
            <article className="talk-item" key={talk.id}>
              <p className="talk-date">
                {talk.dateISO.length > 4 ? <time dateTime={talk.dateISO}>{talk.date}</time> : talk.date}
              </p>
              <div>
                <h3>{talk.title}</h3>
                <p className="talk-venue">{talk.venue}</p>
                <p className="talk-location">{talk.location}</p>
                {talk.url && (
                  <a className="text-link" href={talk.url} target="_blank" rel="noreferrer">
                    Event details <LinkArrow />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial-section split-layout" aria-labelledby="invitations-heading">
        <div>
          <p className="section-label">Invitations</p>
          <h2 id="invitations-heading" className="section-heading">Clinically grounded.<br />Accessible to the audience.</h2>
        </div>
        <div className="prose">
          <p>
            Topics include AI in the Parkinson’s clinic, the use of clinical
            language and multimodal data in research, digital outcome measurement,
            and falls in Parkinson’s disease. I give presentations in English and
            Spanish.
          </p>
          <p>
            For an invitation, please include the audience, event format, date,
            and topic you have in mind.
          </p>
          <Link className="text-link" href="/contact">Get in touch <LinkArrow /></Link>
        </div>
      </section>
    </div>
  );
}
