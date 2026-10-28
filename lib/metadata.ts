import type { Metadata } from "next";

export const siteUrl = "https://joaquinvizcarra.com";

export const siteDescription =
  "Joaquin Vizcarra is a movement disorders neurologist and Assistant Professor at the University of Cincinnati, studying Parkinson's disease through clinical AI.";

export function createPageMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  const url = new URL(path, siteUrl).toString();
  const socialTitle = `${title} | Joaquin Vizcarra`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: "Joaquin Vizcarra",
      type: "website",
      images: [
        {
          url: `${siteUrl}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: "Joaquin Vizcarra, MD, MSTR"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      creator: "@VizcarraJA",
      title: socialTitle,
      description,
      images: [`${siteUrl}/opengraph-image`]
    }
  };
}
