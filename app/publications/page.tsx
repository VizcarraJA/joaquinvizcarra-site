import { LinkArrow } from "@/app/components/LinkArrow";
import { createPageMetadata } from "@/lib/metadata";
import { profile, selectedPublications } from "@/lib/site-data";

export const metadata = createPageMetadata(
  "Publications",
  "Selected research by Joaquin A. Vizcarra on Parkinson’s disease, falls, clinical AI, digital health, and movement disorders, including recent work in press.",
  "/publications"
);

export default function PublicationsPage() {
  const inPress = selectedPublications.filter((publication) => publication.status === "in-press");
  const published = selectedPublications.filter((publication) => publication.status === "published");

  return (
    <div className="container page-shell">
      <header className="page-heading">
        <p className="eyebrow">Publications</p>
        <h1>Selected work.</h1>
        <p className="page-intro">
          Research on Parkinson’s disease, clinical AI, and digital approaches to
          understanding and delivering care.
        </p>
        <div className="profile-links">
          <a className="text-link" href={profile.links.scholar} target="_blank" rel="noreferrer">
            Full record on Google Scholar <LinkArrow />
          </a>
          <a className="text-link" href={profile.links.orcid} target="_blank" rel="noreferrer">
            ORCID <LinkArrow />
          </a>
        </div>
      </header>

      {[
        { title: "In press", label: "Forthcoming publications", publications: inPress, id: "in-press" },
        { title: "Published work", label: "Selected publications", publications: published, id: "published" }
      ].map((group) => (
        <section className="editorial-section" aria-labelledby={`${group.id}-heading`} key={group.id}>
          <div className="section-heading">
            <div>
              <p className="section-label">{group.label}</p>
              <h2 id={`${group.id}-heading`}>{group.title}</h2>
            </div>
          </div>
          <div className="publication-list">
            {group.publications.map((publication) => (
              <article className="publication-item" id={publication.id} key={publication.id}>
                <p className="publication-meta">
                  <span>{publication.journal}</span>
                  {publication.year && <span> · {publication.year}</span>}
                  {publication.status === "in-press" && <span className="publication-status"> · In press</span>}
                </p>
                <h3 className="publication-title">
                  {publication.url ? (
                    <a href={publication.url} target="_blank" rel="noreferrer">
                      {publication.title} <LinkArrow />
                    </a>
                  ) : publication.title}
                </h3>
                {publication.status === "published" && <p className="publication-description">{publication.description}</p>}
              </article>
            ))}
          </div>
        </section>
      ))}

      <p className="page-endnote">
        This is a selection of my work. Google Scholar includes the broader
        publication record and citation information.
      </p>
    </div>
  );
}
