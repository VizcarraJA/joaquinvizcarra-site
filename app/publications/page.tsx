import { selectedPublications } from "@/lib/site-data";

export default function PublicationsPage() {
  return (
    <div className="article">
      <h1>Selected Publications</h1>
      <p>
        A curated selection of recent work. For the complete publication record,
        please see Google Scholar.
      </p>

      <div className="postlist">
        {selectedPublications.map((pub) => (
          <article key={pub.citation} className="postitem">
            <div>{pub.citation}</div>
            <div className="postmeta">
              {pub.journal} | {pub.year}
            </div>
          </article>
        ))}
      </div>

      <p style={{ marginTop: 16 }}>
        <a
          href="https://scholar.google.com/citations?hl=en&user=wuL0vg8AAAAJ"
          target="_blank"
          rel="noreferrer"
        >
          View full list on Google Scholar
        </a>
      </p>
    </div>
  );
}
