import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  image?: string;
  imageAlt?: string;
  ogImage?: string;
};

const postsDirectory = path.join(process.cwd(), "content", "writing");

export function getAllPostsMeta(): PostMeta[] {
  const files = fs.readdirSync(postsDirectory);

  const posts = files
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: String(data.title ?? slug),
        date: String(data.date ?? ""),
        description: String(data.description ?? ""),
        image: data.image ? String(data.image) : undefined,
        imageAlt: data.imageAlt ? String(data.imageAlt) : undefined,
        ogImage: data.ogImage ? String(data.ogImage) : undefined
      } satisfies PostMeta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return posts;
}

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export async function getPostHtmlBySlug(slug: string): Promise<{
  meta: PostMeta;
  contentHtml: string;
}> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // Extract raw HTML blocks (iframes, etc.) before remark processes the markdown,
  // replace with placeholders, then restore after — remark-html strips raw HTML
  // even with allowDangerousHtml on some versions.
  const htmlBlocks: string[] = [];
  const contentWithPlaceholders = content.replace(
    /<(iframe|video|audio|object|embed)[^>]*>[\s\S]*?<\/\1>|<(iframe|video|audio|object|embed)[^>]*\/>/gi,
    (match) => {
      htmlBlocks.push(match);
      return `%%HTML_BLOCK_${htmlBlocks.length - 1}%%`;
    }
  );

  const processed = await remark().use(html, { allowDangerousHtml: true }).process(contentWithPlaceholders);
  const contentHtml = processed
    .toString()
    .replace(/%%HTML_BLOCK_(\d+)%%/g, (_, i) => htmlBlocks[parseInt(i)]);

  const meta: PostMeta = {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ""),
    description: String(data.description ?? ""),
    image: data.image ? String(data.image) : undefined,
    imageAlt: data.imageAlt ? String(data.imageAlt) : undefined,
    ogImage: data.ogImage ? String(data.ogImage) : undefined
  };

  return { meta, contentHtml };
}
