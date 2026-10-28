export const profile = {
  displayName: "Joaquin Vizcarra",
  fullName: "Joaquin A. Vizcarra Pasapera",
  credentials: "MD, MSTR",
  title: "Assistant Professor",
  institution: "University of Cincinnati",
  primaryDepartment: "Department of Biostatistics, Health Informatics, and Data Sciences",
  secondaryDepartment: "Department of Neurology and Rehabilitation Medicine",
  email: "contact@joaquinvizcarra.com",
  links: {
    scholar: "https://scholar.google.com/citations?hl=en&user=wuL0vg8AAAAJ",
    linkedin: "https://www.linkedin.com/in/joaquin-vizcarra/",
    uc: "https://researchdirectory.uc.edu/p/augustji",
    orcid: "https://orcid.org/0000-0003-0306-4774"
  }
};

export type ResearchTheme = {
  id: string;
  title: string;
  body: string;
  question: string;
  approach: string;
};

export const researchThemes: ResearchTheme[] = [
  {
    id: "access",
    title: "Access to Parkinson's care",
    body: "I study how technology and AI can extend access to Parkinson's care and specialist expertise.",
    question: "How can we bring specialist knowledge closer to people living with Parkinson's disease?",
    approach: "Patient-centered digital tools, remote assessment, and research into how AI can support clinical care."
  },
  {
    id: "language",
    title: "Clinical language & disease phenotypes",
    body: "I use natural language processing and generative AI to study the clinical detail recorded in Parkinson's care.",
    question: "What can clinical narratives tell us about the differences between patients and how their disease evolves?",
    approach: "Extracting longitudinal information from clinical notes and evaluating how it can characterize symptoms, outcomes, and patient groups."
  },
  {
    id: "falls",
    title: "Falls, prediction & patient subtypes",
    body: "I investigate fall risk and distinct patient subtypes by bringing together clinical, biomarker, and imaging data.",
    question: "Who is at risk of a first or recurrent fall, and which patterns distinguish different groups of patients?",
    approach: "Longitudinal cohorts, prediction methods, and multimodal analyses grounded in clinical questions."
  }
];

export type Publication = {
  id: string;
  title: string;
  journal: string;
  year?: string;
  status: "in-press" | "published";
  url?: string;
  description: string;
  featured: boolean;
};

// In-press titles and status are confirmed by the author. Add bibliographic
// details and public links when the journals make final records available.
export const selectedPublications: Publication[] = [
  {
    id: "first-recurrent-falls",
    title: "Prediction of First and Recurrent Falls in Parkinson's Disease",
    journal: "Annals of Neurology",
    status: "in-press",
    description: "Prediction of first and recurrent falls in Parkinson's disease.",
    featured: true
  },
  {
    id: "longitudinal-fall-patterns",
    title: "Longitudinal Fall Patterns in Parkinson's Disease: Automated Narrative Extraction in 2,811 Patients",
    journal: "npj Parkinson's Disease",
    status: "in-press",
    description: "Automated extraction of longitudinal fall patterns from clinical narratives in 2,811 patients.",
    featured: true
  },
  {
    id: "motor-symptoms-review",
    title: "'State of the Art' Review: Management of Motor Symptoms in Parkinson's Disease",
    journal: "BMJ",
    status: "in-press",
    description: "A review of the management of motor symptoms in Parkinson's disease.",
    featured: true
  },
  {
    id: "ecology-of-care",
    title: "The Ecology of Care in Parkinson's Disease",
    journal: "Movement Disorders Clinical Practice",
    year: "2026",
    status: "published",
    url: "https://doi.org/10.1002/mdc3.70705",
    description: "A perspective on the clinical context in which Parkinson's care takes place.",
    featured: true
  },
  {
    id: "sex-differences-falls",
    title: "Sex Differences in Fall Frequency, Risk Factors, and Outcomes in Parkinson's Disease: A Cross-Sectional Analysis",
    journal: "Movement Disorders Clinical Practice",
    year: "2026",
    status: "published",
    url: "https://doi.org/10.1002/mdc3.70664",
    description: "An analysis of sex differences in falls, associated risk factors, and outcomes.",
    featured: false
  },
  {
    id: "mds-pd-e-diary",
    title: "MDS PD e-Diary: A New Patient-Centered Digital Tool in Development for People with Parkinson's Disease",
    journal: "Movement Disorders Clinical Practice",
    year: "2026",
    status: "published",
    url: "https://doi.org/10.1002/mdc3.70305",
    description: "Development of a patient-centered digital diary with the MDS PD e-Diary Working Group.",
    featured: false
  },
  {
    id: "multimodal-imaging",
    title: "Discordance of Dopaminergic Dysfunction and Subcortical Atrophy by α-Synuclein Status in Sporadic and Genetic Parkinson's Disease",
    journal: "Movement Disorders",
    year: "2026",
    status: "published",
    url: "https://doi.org/10.1002/mds.70186",
    description: "An investigation of imaging measures and α-synuclein status across sporadic and genetic Parkinson's disease.",
    featured: false
  },
  {
    id: "digital-trial-outcomes",
    title: "Assessing Digital Health Technologies for Outcome Measurement in Parkinson's Disease Drug Trials: A Systematic Review",
    journal: "Movement Disorders",
    year: "2026",
    status: "published",
    url: "https://doi.org/10.1002/mds.70097",
    description: "A systematic review of digital technologies used to measure outcomes in Parkinson's drug trials.",
    featured: false
  },
  {
    id: "remote-video-ratings",
    title: "Reliability of Remote Video Ratings of the Scale for Assessment and Rating of Ataxia",
    journal: "Parkinsonism & Related Disorders",
    year: "2025",
    status: "published",
    url: "https://doi.org/10.1016/j.parkreldis.2025.107278",
    description: "An evaluation of the reliability of remote video assessment for ataxia.",
    featured: false
  },
  {
    id: "ai-hyperkinetic-review",
    title: "Artificial Intelligence in the Diagnosis and Quantitative Phenotyping of Hyperkinetic Movement Disorders: A Systematic Review",
    journal: "Journal of Clinical Medicine",
    year: "2024",
    status: "published",
    url: "https://doi.org/10.3390/jcm13237009",
    description: "A systematic review of AI methods for diagnosis and quantitative characterization of hyperkinetic movement disorders.",
    featured: false
  },
  {
    id: "parkinsons-e-diary",
    title: "The Parkinson's Disease e-Diary: Developing a Clinical and Research Tool for the Digital Age",
    journal: "Movement Disorders",
    year: "2019",
    status: "published",
    url: "https://doi.org/10.1002/mds.27673",
    description: "A framework for developing a digital diary for Parkinson's clinical care and research.",
    featured: false
  },
  {
    id: "digital-outcomes-roadmap",
    title: "A Roadmap for Implementation of Patient-Centered Digital Outcome Measures in Parkinson's Disease Obtained Using Mobile Health Technologies",
    journal: "Movement Disorders",
    year: "2019",
    status: "published",
    url: "https://doi.org/10.1002/mds.27671",
    description: "A roadmap for implementing patient-centered digital outcome measures in Parkinson's disease.",
    featured: false
  }
];

export type Talk = {
  id: string;
  title: string;
  venue: string;
  location: string;
  date: string;
  dateISO: string;
  endDate?: string;
  url?: string;
};

export const selectedTalks: Talk[] = [
  {
    id: "apda-ai-2026",
    title: "Artificial Intelligence in the Parkinson's Disease Clinic: Current Realities and Future Directions",
    venue: "APDA: AI for Parkinson's, From Data to Care in an Aging World",
    location: "Johns Hopkins Bloomberg Center · Washington, DC",
    date: "November 19, 2026",
    dateISO: "2026-11-19",
    url: "https://www.apdaparkinson.org/ai-for-parkinsons-agenda/"
  },
  {
    id: "davis-phinney-2026",
    title: "Inteligencia artificial, datos y salud digital en el manejo del Parkinson",
    venue: "Davis Phinney Foundation · Conectando a la comunidad de Parkinson",
    location: "Virtual · Spanish-language conference",
    date: "November 12–14, 2026 · Conference dates",
    dateISO: "2026-11-12",
    endDate: "2026-11-14",
    url: "https://davisphinneyfoundation.org/events/conferencia-de-liderazgo-hispano-2026-conectando-a-la-comunidad-de-parkinson/"
  },
  {
    id: "wpc-2026",
    title: "From Big Data to Personalized Care",
    venue: "7th World Parkinson Congress",
    location: "Phoenix, AZ",
    date: "May 2026",
    dateISO: "2026-05"
  },
  {
    id: "pan-american-2026",
    title: "Is Artificial Intelligence Relevant for the Diagnosis of Parkinson's Disease?",
    venue: "6th Pan American Parkinson's Disease and Movement Disorders Congress",
    location: "Houston, TX",
    date: "February 2026",
    dateISO: "2026-02"
  },
  {
    id: "cleveland-grand-rounds-2025",
    title: "Rethinking Falls in Parkinson's Disease: A Bioinformatics Approach Rooted in Clinical Insight",
    venue: "Neurology Grand Rounds · Cleveland Clinic",
    location: "Cleveland, OH",
    date: "October 2025",
    dateISO: "2025-10"
  },
  {
    id: "nebraska-grand-rounds-2025",
    title: "Rethinking Falls in Parkinson's Disease: A Bioinformatics Approach Rooted in Clinical Insight",
    venue: "Neurology Grand Rounds · University of Nebraska",
    location: "Omaha, NE",
    date: "September 2025",
    dateISO: "2025-09"
  },
  {
    id: "cincinnati-grand-rounds-2025",
    title: "Rethinking Falls in Parkinson's Disease: A Bioinformatics Approach Rooted in Clinical Insight",
    venue: "Neurology Grand Rounds · University of Cincinnati",
    location: "Cincinnati, OH",
    date: "July 2025",
    dateISO: "2025-07"
  },
  {
    id: "pan-american-2024",
    title: "Artificial Intelligence in the Current Care and Diagnosis of Movement Disorders: Myths and Facts",
    venue: "5th Pan American Parkinson's Disease and Movement Disorders Congress",
    location: "Cartagena, Colombia",
    date: "2024",
    dateISO: "2024"
  }
];

export const leadershipRoles = [
  {
    title: "Lead, Artificial Intelligence-Enabled Clinical Research",
    organization: "University of Cincinnati · BHIDS",
    period: "2026–present"
  },
  {
    title: "Co-Vice Chair, Parkinson's e-Diary Development Working Group",
    organization: "International Parkinson and Movement Disorder Society",
    period: "2023–present"
  },
  {
    title: "Steering Committee, Technology Study Group",
    organization: "International Parkinson and Movement Disorder Society",
    period: "2024–present"
  },
  {
    title: "Outreach Grant Program Sub-Committee",
    organization: "MDS Pan American Section",
    period: "2025–present"
  },
  {
    title: "Advanced Leadership Program",
    organization: "International Parkinson and Movement Disorder Society",
    period: "Class of 2026"
  }
];

export const training = [
  {
    title: "Master of Science in Translational Research",
    institution: "University of Pennsylvania",
    period: "2024–2026"
  },
  {
    title: "NIH T32 Training in Neuroengineering and Medicine",
    institution: "University of Pennsylvania · Center for Neuroengineering and Therapeutics",
    period: "2024–2026"
  },
  {
    title: "Movement Disorders Fellowship",
    institution: "University of Pennsylvania",
    period: "2023–2025"
  },
  {
    title: "Neurology Residency · Chief Resident, 2022–2023",
    institution: "Emory University",
    period: "2020–2023"
  },
  {
    title: "Movement Disorders Research Fellowship",
    institution: "University of Cincinnati Gardner Center for Parkinson's Disease",
    period: "2017–2019"
  },
  {
    title: "Doctor of Medicine",
    institution: "Universidad Peruana Cayetano Heredia · Lima, Peru",
    period: "2010–2017"
  }
];
