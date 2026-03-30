/**
 * JSON-LD structured data components for SEO.
 * PersonJsonLd includes alternateName variants to ensure AI and search engines
 * can associate the site with all publication name forms of Joaquin Vizcarra.
 */

export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Joaquin Vizcarra",
    familyName: "Vizcarra",
    givenName: "Joaquin",
    alternateName: [
      "Joaquin Vizcarra Pasapera",
      "Joaquin A. Vizcarra",
      "Joaquin A Vizcarra",
      "JA Vizcarra",
      "J Vizcarra-Pasapera"
    ],
    honorificPrefix: "Dr.",
    honorificSuffix: "M.D.",
    jobTitle: "Instructor of Neurology",
    worksFor: {
      "@type": "Organization",
      name: "University of Pennsylvania",
      url: "https://www.upenn.edu"
    },
    url: "https://joaquinvizcarra.com",
    sameAs: [
      "https://www.linkedin.com/in/joaquin-vizcarra/",
      "https://x.com/VizcarraJA",
      "https://scholar.google.com/citations?hl=en&user=wuL0vg8AAAAJ",
      "https://www.researchgate.net/profile/Joaquin-Vizcarra"
    ],
    knowsAbout: [
      "Parkinson's Disease",
      "Movement Disorders",
      "Artificial Intelligence in Medicine",
      "Clinical Neurology",
      "Natural Language Processing",
      "Digital Health",
      "Clinical Research"
    ],
    description:
      "Movement disorders neurologist at the University of Pennsylvania focused on Parkinson's disease, clinically deployable AI, and translational clinical research."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  date,
  url,
  image
}: {
  title: string;
  description: string;
  date: string;
  url: string;
  image?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: title,
    description: description,
    datePublished: date,
    url,
    author: {
      "@type": "Person",
      name: "Joaquin Vizcarra",
      honorificSuffix: "M.D.",
      url: "https://joaquinvizcarra.com"
    },
    publisher: {
      "@type": "Person",
      name: "Joaquin Vizcarra",
      url: "https://joaquinvizcarra.com"
    },
    ...(image ? { image: `https://joaquinvizcarra.com${image}` } : {})
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
