import { siteDescription, siteUrl } from "@/lib/metadata";

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
    honorificSuffix: "M.D., M.S.T.R.",
    jobTitle: "Assistant Professor",
    worksFor: {
      "@type": "CollegeOrUniversity",
      name: "University of Cincinnati",
      url: "https://www.uc.edu",
      department: [
        {
          "@type": "Organization",
          name: "Department of Biostatistics, Health Informatics, and Data Sciences",
          description: "Primary appointment"
        },
        {
          "@type": "Organization",
          name: "Department of Neurology and Rehabilitation Medicine",
          description: "Secondary appointment"
        }
      ]
    },
    url: siteUrl,
    sameAs: [
      "https://researchdirectory.uc.edu/p/augustji",
      "https://www.linkedin.com/in/joaquin-vizcarra/",
      "https://x.com/VizcarraJA",
      "https://scholar.google.com/citations?hl=en&user=wuL0vg8AAAAJ",
      "https://www.researchgate.net/profile/Joaquin-Vizcarra"
    ],
    knowsAbout: [
      "Parkinson's Disease",
      "Movement Disorders",
      "Clinical Artificial Intelligence",
      "Access to Parkinson's Care",
      "Natural Language Processing",
      "Parkinson's Disease Phenotyping",
      "Falls Prediction",
      "Multimodal Clinical Research"
    ],
    description: siteDescription
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
