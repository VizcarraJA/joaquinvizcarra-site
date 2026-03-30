import Link from "next/link";
import { getAllPostsMeta } from "@/lib/posts";

export default function WritingIndexPage() {
  const posts = getAllPostsMeta();
  const latest = posts[0];
  const rest = posts.slice(1);

  return (
    <div className="writing-index">
      <h1 className="h1">Writing</h1>
      <p className="p">
        Essays on Parkinson&apos;s disease, clinical uncertainty, translational
        research, and practical uses of artificial intelligence in neurology.
      </p>

      {latest ? (
        <section style={{ marginBottom: 24 }}>
          <div className="h3">Latest Essay</div>
          <article className="highlight">
            <Link href={`/writing/${latest.slug}`}>{latest.title}</Link>
            <div className="postmeta">
              {latest.date} · {latest.readingTime} min read
            </div>
            <div className="postmeta" style={{ marginTop: 4 }}>
              {latest.description}
            </div>
          </article>
        </section>
      ) : null}

      {rest.length > 0 ? (
        <section>
          <div className="h3">All Essays</div>
          <div className="postlist">
            {rest.map((p) => (
              <article key={p.slug} className="postitem">
                <Link href={`/writing/${p.slug}`}>{p.title}</Link>
                <div className="postmeta">
                  {p.date} · {p.readingTime} min read
                </div>
                <div className="postmeta">{p.description}</div>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
