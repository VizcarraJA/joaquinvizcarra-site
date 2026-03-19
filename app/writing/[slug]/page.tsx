import { notFound } from "next/navigation";
import { getPostHtmlBySlug, getPostSlugs } from "@/lib/posts";
import Image from "next/image";
import type { Metadata } from "next";

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
    const ogImage = meta.ogImage ?? meta.image;

    return {
      title: `${meta.title} | Joaquin Vizcarra, M.D.`,
      description: meta.description,
      openGraph: {
        title: meta.title,
        description: meta.description,
        url: `https://joaquinvizcarra.com/writing/${slug}`,
        type: "article",
        ...(ogImage && {
          images: [{ url: ogImage, width: 1200, height: 627, alt: meta.title }]
        })
      },
      twitter: {
        card: ogImage ? "summary_large_image" : "summary",
        title: meta.title,
        description: meta.description,
        ...(ogImage && { images: [ogImage] })
      }
    };
  } catch {
    return {};
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
        <h1>{meta.title}</h1>
        <div className="small" style={{ marginBottom: 18 }}>
          {meta.date}
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
      </article>
    );
  } catch {
    notFound();
  }
}
