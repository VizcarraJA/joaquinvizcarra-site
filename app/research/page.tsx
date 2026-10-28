import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import { researchThemes, selectedPublications } from "@/lib/site-data";

export const metadata = createPageMetadata(
  "Research",
  "Research on access to Parkinson’s care, generative AI and natural language phenotyping, and falls prediction using clinical, biomarker, and imaging data.",
  "/research"
);

const relatedPublicationIds: Record<string, string[]> = {
  access: ["ecology-of-care", "mds-pd-e-diary"],
  language: ["longitudinal-fall-patterns", "ai-hyperkinetic-review"],
  falls: ["first-recurrent-falls", "sex-differences-falls", "multimodal-imaging"]
};

export default function ResearchPage() {
  return (
    <div className="container page-shell">
      <header className="page-heading">
        <p className="eyebrow">Research</p>
        <h1>Parkinson’s care.<br />Clinical intelligence.</h1>
        <p className="page-intro">
          My research starts with problems in Parkinson’s care: who can access
          expertise, what the clinical record can tell us, and how to anticipate
          consequential changes in a patient’s course.
        </p>
      </header>

      {researchThemes.map((theme, index) => {
        const publications = (relatedPublicationIds[theme.id] ?? [])
          .map((id) => selectedPublications.find((publication) => publication.id === id))
          .filter((publication) => publication !== undefined);

        return (
          <section className="editorial-section research-detail" id={theme.id} key={theme.id} aria-labelledby={`${theme.id}-heading`}>
            <div className="research-detail__grid">
              <div>
                <p className="section-label">{String(index + 1).padStart(2, "0")} / Research area</p>
                <h2 className="section-heading" id={`${theme.id}-heading`}>{theme.title}</h2>
                <p className="body-copy">{theme.body}</p>
              </div>
              <div>
                <dl className="detail-list">
                  <div className="detail-row">
                    <dt>The clinical question</dt>
                    <dd>{theme.question}</dd>
                  </div>
                  <div className="detail-row">
                    <dt>The approach</dt>
                    <dd>{theme.approach}</dd>
                  </div>
                </dl>
                {publications.length > 0 && (
                  <div>
                    <p className="section-label">Related work</p>
                    <ul className="publication-list">
                      {publications.map((publication) => (
                        <li className="publication-item" key={publication.id}>
                          <Link className="text-link" href={`/publications#${publication.id}`}>
                            {publication.title} <span aria-hidden="true">↗</span>
                          </Link>
                          <p className="publication-meta">
                            {publication.journal}
                            {publication.status === "in-press" ? " · In press" : publication.year ? ` · ${publication.year}` : ""}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })}

      <section className="editorial-section split-layout" aria-labelledby="collaboration-heading">
        <div>
          <p className="section-label">Collaboration</p>
          <h2 id="collaboration-heading" className="section-heading">From a clinical question to a shared project.</h2>
        </div>
        <div className="prose">
          <p>
            I welcome conversations with clinicians, researchers, health systems,
            and patient organizations working on these questions. My interests
            span clinical cohorts, digital measurement, language models, and the
            practical delivery of Parkinson’s care.
          </p>
          <Link className="text-link" href="/contact">Discuss a collaboration <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </div>
  );
}
