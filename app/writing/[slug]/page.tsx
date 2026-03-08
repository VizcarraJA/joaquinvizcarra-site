import { notFound } from "next/navigation";
import { getPostHtmlBySlug, getPostSlugs } from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArticleJsonLd } from "@/app/components/JsonLd";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;
    const { meta } = await getPostHtmlBySlug(slug);
    const ogImages = meta.image
      ? [{ url: meta.image, alt: meta.imageAlt ?? meta.title, width: 1600, height: 900 }]
      : [{ url: "/headshot.jpg", alt: "Joaquin Vizcarra, M.D." }];

    return {
      title: `${meta.title} | Joaquin Vizcarra, M.D.`,
      description: meta.description,
      authors: [{ name: "Joaquin Vizcarra" }],
      openGraph: {
        title: meta.title,
        description: meta.description,
        url: `https://joaquinvizcarra.com/writing/${slug}`,
        siteName: "Joaquin Vizcarra, M.D.",
        type: "article",
        publishedTime: meta.date,
        authors: ["Joaquin Vizcarra"],
        images: ogImages
      },
      twitter: {
        card: "summary_large_image",
        title: meta.title,
        description: meta.description,
        site: "@VizcarraJA",
        creator: "@VizcarraJA",
        images: meta.image ? [meta.image] : ["/headshot.jpg"]
      }
    };
  } catch {
    return { title: "Joaquin Vizcarra, M.D." };
  }
}

export default async function WritingPostPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const { slug } = await params;
    const { meta, contentHtml } = await getPostHtmlBySlug(slug);

    return (
      <article className="article">
        <ArticleJsonLd
          title={meta.title}
          description={meta.description}
          date={meta.date}
          url={`https://joaquinvizcarra.com/writing/${slug}`}
          image={meta.image}
        />

        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep" aria-hidden="true">/</span>
          <Link href="/writing">Writing</Link>
          <span className="breadcrumb-sep" aria-hidden="true">/</span>
          <span>{meta.title}</span>
        </nav>

        <h1>{meta.title}</h1>

        <div className="small">
          {meta.date} · {meta.readingTime} min read
        </div>

        {meta.image ? (
          <figure className="article-figure">
            <Image
              src={meta.image}
              alt={meta.imageAlt ?? meta.title}
              width={1600}
              height={900}
              className="article-image"
              sizes="(max-width: 768px) 100vw, 760px"
              priority
            />
          </figure>
        ) : null}

        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />

        <footer className="author-bio">
          <strong>Joaquin Vizcarra, M.D.</strong> is a movement disorders neurologist at
          the University of Pennsylvania. His research focuses on clinically deployable AI,
          risk stratification, and digital health tools for Parkinson&apos;s disease.
          He serves on the MDS Technology Task Force.
        </footer>
      </article>
    );
  } catch {
    notFound();
  }
}
