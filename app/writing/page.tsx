import Link from "next/link";
import { getAllPostsMeta } from "@/lib/posts";

export default function WritingIndexPage() {
  const posts = getAllPostsMeta();
  const latest = posts[0];
  const rest = posts.slice(1);

  return (
    <div>
      <h1 className="h1">Writing</h1>
      <p className="p">
        Essays on Parkinson's disease, clinical uncertainty, translational research,
        and practical uses of artificial intelligence in neurology.
      </p>

      {latest ? (
        <section className="highlight">
          <div className="h3" style={{ marginBottom: 8 }}>
            Latest Essay
          </div>
          <Link href={`/writing/${latest.slug}`}>{latest.title}</Link>
          <div className="postmeta">
            {latest.date} | {latest.description}
          </div>
        </section>
      ) : null}

      {rest.length > 0 ? (
        <div className="postlist">
          {rest.map((p) => (
            <article key={p.slug} className="postitem">
              <Link href={`/writing/${p.slug}`}>{p.title}</Link>
              <div className="postmeta">
                {p.date} | {p.description}
              </div>
            </article>
          ))}
        </div>
      ) : null}
    </div>
  );
}
