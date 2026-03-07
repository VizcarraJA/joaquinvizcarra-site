import Image from "next/image";
import Link from "next/link";
import { getAllPostsMeta } from "@/lib/posts";
import { researchThemes, selectedPublications, selectedTalks } from "@/lib/site-data";
import { PersonJsonLd } from "@/app/components/JsonLd";

export default function HomePage() {
  const posts = getAllPostsMeta();
  const latest = posts[0];
  const recent = posts.slice(1, 4);

  return (
    <div>
      <PersonJsonLd />
      <section className="grid-hero">
        <div>
          <h1 className="h1">
            Advancing access to expert Parkinson's care through clinically useful AI.
          </h1>
          <p className="p">
            I am a movement disorders neurologist developing clinically deployable,
            data-informed tools that improve diagnosis, risk stratification, and
            neurological decision-making beyond specialty centers.
          </p>

          <div className="buttonrow">
            <Link className="btn" href="/research">
              Research
            </Link>
            <Link className="btn" href="/writing">
              Writing
            </Link>
            <Link className="btn" href="/contact">
              Contact
            </Link>
          </div>
        </div>

        <aside className="card">
          <Image
            src="/headshot.jpg"
            alt="Headshot of Joaquin Vizcarra, M.D."
            width={520}
            height={650}
            className="hero-img"
            priority
          />
          <div className="small" style={{ marginTop: 10 }}>
            Joaquin Vizcarra, M.D.
            <br />
            Instructor of Neurology, University of Pennsylvania
          </div>
        </aside>
      </section>

      <section className="section">
        <div className="h3">Research Themes</div>
        <div className="columns">
          {researchThemes.slice(0, 3).map((theme) => (
            <article key={theme} className="card">
              <p className="p" style={{ marginBottom: 0 }}>
                {theme}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="h3">Selected Talks</div>
        <div className="postlist">
          {selectedTalks.slice(0, 3).map((talk) => (
            <article key={`${talk.title}-${talk.date}`} className="postitem">
              <strong>{talk.title}</strong>
              <div className="postmeta">
                {talk.venue} | {talk.location} | {talk.date}
              </div>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 12 }}>
          <Link className="btn" href="/speaking">
            All Selected Talks
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="h3">Selected Publications</div>
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
        <div style={{ marginTop: 12 }}>
          <a
            className="btn"
            href="https://scholar.google.com/citations?hl=en&user=wuL0vg8AAAAJ"
            target="_blank"
            rel="noreferrer"
          >
            Full List on Google Scholar
          </a>
        </div>
      </section>

      <section className="section">
        <div className="h3">Recent Writing</div>
        {latest ? (
          <article className="highlight">
            <Link href={`/writing/${latest.slug}`}>{latest.title}</Link>
            <div className="postmeta">
              {latest.date} | {latest.description}
            </div>
          </article>
        ) : null}

        {recent.length > 0 ? (
          <div className="postlist" style={{ marginTop: 12 }}>
            {recent.map((post) => (
              <article key={post.slug} className="postitem">
                <Link href={`/writing/${post.slug}`}>{post.title}</Link>
                <div className="postmeta">
                  {post.date} | {post.description}
                </div>
              </article>
            ))}
          </div>
        ) : null}

        <div style={{ marginTop: 12 }}>
          <Link className="btn" href="/writing">
            Visit Writing
          </Link>
        </div>
      </section>
    </div>
  );
}
