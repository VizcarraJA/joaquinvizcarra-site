import { getAllPostsMeta } from "@/lib/posts";

export const dynamic = "force-static";

export function GET() {
  const posts = getAllPostsMeta();
  const siteUrl = "https://joaquinvizcarra.com";

  const items = posts
    .map((post) => {
      const postUrl = `${siteUrl}/writing/${post.slug}`;
      return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <dc:creator>Joaquin Vizcarra, M.D.</dc:creator>
    </item>`.trim();
    })
    .join("\n    ");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Joaquin Vizcarra, M.D. — Writing</title>
    <link>${siteUrl}/writing</link>
    <description>Essays on Parkinson's disease, clinical uncertainty, translational research, and practical uses of artificial intelligence in neurology.</description>
    <language>en-us</language>
    <copyright>Joaquin Vizcarra, M.D.</copyright>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600"
    }
  });
}
