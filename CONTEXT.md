# CONTEXT.md — joaquinvizcarra-site

Living project memory. Read before work in this folder and update when confirmed identity, strategy, inventory, or implementation changes.

**Status: October 28, 2026 deployed and verified.** The user selected the Clinical Perspective design and supplied three missing in-press papers plus the APDA agenda. [PR #20](https://github.com/VizcarraJA/joaquinvizcarra-site/pull/20) was squash-merged into `main` as `b29f20c76c47b1e9ff02e7f225353af8584c5380`. GitHub CI and Vercel preview passed before merge; Vercel production deployment succeeded and the new site is live at https://joaquinvizcarra.com. The local checkout is on the updated `main` branch.

## Identity and Audience

Dr. Joaquin A. Vizcarra, MD, MSTR is a movement disorders neurologist and Assistant Professor at the University of Cincinnati, appointed September 2026. Primary appointment: Department of Biostatistics, Health Informatics, and Data Sciences (BHIDS). Secondary appointment: Department of Neurology and Rehabilitation Medicine. He leads Artificial Intelligence-Enabled Clinical Research at BHIDS (2026–present).

Use **Assistant Professor**, as confirmed by the user and supplied CV. The public UC directory adds a Research modifier; do not silently replace the user's confirmed title. Penn Instructor of Neurology (July 2025–June 2026), movement disorders fellowship, neuroengineering training, and MSTR belong in his background rather than current affiliation.

This is a **personal academic site**. Priority visitors are senior academic leaders, recruiters, executives, prospective collaborators, and others interested in his clinical and research work who could create professional opportunities. Clinical focus: Parkinson's disease. Clinical AI is the method and research approach.

The **Clinical Intelligence Lab** is forthcoming and has not launched. The CV lists a PI role, but the user's current clarification governs public framing. Do not imply an operating lab, established team, active recruitment program, or independent lab website without confirmation.

## Mission and Content Strategy

Make Joaquin's clinical identity, research agenda, contributions, and leadership clear quickly. Support career advancement and collaboration through selected papers, specific society roles, invited talks, and current projects. Use measured first-person prose and clear professional contact information.

Current research pillars:

1. **Access to Parkinson's care:** technology and AI to extend access to clinical care and specialist expertise.
2. **Clinical language and Parkinson's phenotyping:** generative AI and natural language processing to characterize disease and identify meaningful differences between patients.
3. **Falls prediction and patient subtypes:** multimodal clinical, biomarker, imaging, and other data to study fall risk and distinct patient groups.

For each project, establish the clinical question, Joaquin's role, collaborators, stage, and public outputs. Describe research aims as aims; avoid implying validated tools, deployment, or demonstrated patient benefit without evidence. Describe MDS, APDA, and other society involvement through specific roles and activities.

**The public opinion blog is retired.** The writing index and article page routes have been removed, so `/writing` and former `/writing/[slug]` URLs return 404 with a friendly navigation page. `/feed.xml` returns 410 Gone, a plain-text retirement notice, and `X-Robots-Tag: noindex`. No unrelated redirects are used. The removed URLs remain crawlable so search engines can observe 404 and 410 responses. Six Markdown essay sources and three unpublished essay drafts remain in the repository, which is public; no website route or feed publishes them. There is no recurring essay cadence or weekly publishing obligation. Static essay images and the standalone Bayesian simulator in `public/tools/` remain available at their existing paths, without blog promotion.

Keep maintenance event-driven: update projects, publications, appointments, leadership, and talks when milestones occur. LinkedIn drafts remain private material and do not establish a site publishing schedule.

## Selected Overhaul

Navigation: Research, Publications, Speaking, About, Contact, with Home accessible through the name. Speaking remains a distinct destination to make invited presentations and professional reach easy to assess. A lab destination should wait for a confirmed launch.

Homepage narrative: clinician/researcher introduction and appointment; selected evidence; three active research areas; leadership and talks; contact. Papers have direct links where available. In-press papers supplied by the user have no invented DOI or publisher URL.

The user explicitly selected **Clinical Perspective** from the visual directions and said “i love” that design. Its direction is strong editorial typography, restrained decoration, spacious sections, compact evidence lists, and a smaller portrait. Implement responsive navigation, adequate text contrast, and content visible without animation JavaScript.

The three important papers missing from the CV are now identified below. All three are user-confirmed as in press, as of October 28, 2026. Complete author lists, publication dates, and DOIs remain unprovided and must not be invented. Confirm project details and public outputs before claiming results or deployment.

## Voice and Style Rules

These remain firm for public writing and retained essay material.

- **No em dashes.** Use commas, colons, semicolons, or restructured sentences.
- **No negation-style writing.** Avoid “not X but Y,” “not just X,” and similar framing. State the positive claim directly.
- **No bullet points in essays.** Prose only; lists are appropriate in technical documentation and suitable site components.
- **No excessive bold or headers within essays.** Retained essays use `---` section breaks and paragraph structure.
- **No emojis in essays.** LinkedIn posts may use them sparingly.
- **Academic but accessible.** Write for clinicians and researchers; define jargon requiring subspecialty knowledge.
- **First person, measured.** Direct, intellectually honest, specific, and candid about evidence limits. Avoid promotional or breathless claims.
- **Clinical grounding matters.** Use concrete observations from clinical practice where relevant.

## Existing Site and Technical Facts

- **Stack:** Next.js 15 (App Router), React 18, TypeScript.
- **Deployment:** Vercel, auto-deploys on merge to `main`.
- **Fonts:** Instrument Sans and IBM Plex Mono.
- **Link icons:** Use the shared `LinkArrow` SVG component. Unicode arrow characters rendered as emoji on mobile and were replaced on October 29, 2026. Keep icons monochrome, proportional to nearby type, and hidden from assistive technology.
- **Analytics:** `@vercel/analytics`.
- **Public profile routes:** `/`, `/research`, `/publications`, `/about`, `/speaking`, `/contact`.
- **Retired endpoints:** `/writing` and former article URLs return 404; `/feed.xml` returns 410.
- **Search discovery:** `/sitemap.xml` lists only the six profile pages, without artificial modification dates. `/robots.txt` allows crawling and links the sitemap. Shared page metadata supplies canonical URLs and current social metadata.
- The deployed redesign replaces the old Penn affiliation, card-heavy navy/cream/gold design, and reliance on scroll animations.

### Key files

- `lib/site-data.ts`: shared current profile, research areas, selected talks, leadership, and publications.
- `app/page.tsx`: clinician/researcher introduction, research, selected evidence, professional reach, and contact.
- `app/globals.css`: design tokens and full-width section layout.
- `app/layout.tsx`: site-wide Google Fonts, metadata, navigation, and footer. The homepage includes Person schema.
- `app/site-header.tsx`: responsive navigation for the six profile pages.
- The legacy `ScrollAnimations.tsx` helper is removed; page content is visible without animation JavaScript.
- `app/components/JsonLd.tsx`: current UC Assistant Professor Person schema. No blog article schema remains.
- `lib/metadata.ts`: `createPageMetadata`, current site description, and canonical site URL.
- `app/sitemap.ts`, `app/robots.ts`, `app/not-found.tsx`: search discovery and friendly 404 handling.
- `app/opengraph-image.tsx`, `app/icon.svg`: a branded 1200×630 social preview and JV favicon.
- `content/writing/`: six retained essay Markdown sources, outside public routes. Never hardcode essay content in components or re-publish without a new request.
- `lib/posts.ts`: Markdown parsing and computed reading time.
- `drafts/`: private essay and LinkedIn drafts, not public posts.

Retained essay frontmatter uses `title`, `date` (`YYYY-MM-DD`), and `description`; optional `image` and `imageAlt` refer to assets in `public/writing/`. This documents existing content rather than a publishing instruction.

### Git and deployment workflow

- **Never push directly to `main`.** All changes go through a PR.
- Branch off `main`, open a PR, and pass CI (GitHub Actions runs `npm ci` and `npm run build`) before merging.
- Use `gh pr merge --squash --delete-branch` to merge cleanly.
- Vercel auto-deploys after merge.

## Existing Content Inventory

There are **six formerly published essay sources and three unpublished essay drafts**. Earlier context incorrectly listed all nine as published. Public essay routes are removed in the local implementation; the sources are retained for reference.

| Formerly published source in `content/writing/` | Original date |
| --- | --- |
| `ai-in-parkinsons-disease-diagnosis-context-determines-the-standard.md` | 2026-02-19 |
| `the-implementation-problem-in-parkinsons-ai-lessons-from-cardiology.md` | 2026-02-27 |
| `the-wearable-worked-the-outcomes-didnt-move.md` | 2026-03-09 |
| `real-world-mobility-parkinsons-mobilised.md` | 2026-03-17 |
| `bayesian-methods-parkinsons-trials-fda-guidance.md` | 2026-03-24 |
| `ecology-of-care-big-data-wpc.md` | 2026-06-10 |

Unpublished essay sources in `drafts/`: `from-big-data-to-personalized-care-translation-problem.md`, `plasma-proteomics-pd-what-the-blood-knows.md`, and `wpc-2026-ai-big-data-digital-devices-session-preview.md`.

Private LinkedIn drafts cover Bayesian/FDA guidance, Mobilise-D, wearable RCT outcomes, NLP/falls, ProtAIDe-Dx, WPC, Ecology of Care, and the UC appointment. `drafts/content-dashboard.html` reflects the former publishing pipeline and should not establish current strategy.

## Selected Evidence for Updated Content

The CV lists 46 peer-reviewed publications, plus books and other outputs. That count is a CV inventory, not a confirmed current total. The user subsequently supplied these three missing papers, all **in press**:

- “Prediction of First and Recurrent Falls in Parkinson’s Disease.” *Annals of Neurology*.
- “Longitudinal Fall Patterns in Parkinson’s Disease: Automated Narrative Extraction in 2,811 Patients.” *npj Parkinson's Disease*.
- “‘State Of the Art’ Review: Management of Motor Symptoms in Parkinson's Disease.” *BMJ*.

Use the user's supplied status and titles. Do not add DOI links, final dates, or full author lists without verification.

Relevant papers already in the CV include:

- Vizcarra JA. “The Ecology of Care in Parkinson's Disease.” *Movement Disorders Clinical Practice*, 2026. DOI: `10.1002/mdc3.70705`.
- Vizcarra JA et al. “Sex Differences in Fall Frequency, Risk Factors, and Outcomes in Parkinson's Disease: A Cross-Sectional Analysis.” *Movement Disorders Clinical Practice*, 2026. DOI: `10.1002/mdc3.70664`.
- Rábano-Suárez P et al., including Vizcarra JA. “MDS PD e-Diary: A New Patient-Centered Digital Tool in Development for People with Parkinson's Disease.” *Movement Disorders Clinical Practice* 13 (2026): 1020–1025.
- Vizcarra JA et al. “Artificial Intelligence in the Diagnosis and Quantitative Phenotyping of Hyperkinetic Movement Disorders: A Systematic Review.” *Journal of Clinical Medicine* 13(23) (2024): 7009.
- Vizcarra JA et al. “Reliability of remote video ratings of the scale for assessment and rating of ataxia.” *Parkinsonism & Related Disorders* 132 (2025): 107278.

Confirm final metadata and selection during implementation. The five papers above were already in the CV and are distinct from the three subsequently supplied in-press papers.

### Leadership confirmed by the CV

- Lead, Artificial Intelligence-Enabled Clinical Research, UC BHIDS, 2026–present.
- Co-Vice Chair, MDS Parkinson's e-Diary Development Working Group, 2023–present.
- Steering Committee, MDS Technology Study Group, 2024–present.
- Outreach Grant Program Sub-Committee, MDS Pan American Section, 2025–present.
- MDS Advanced Leadership Program, Class of 2026.

### Talks

- **Upcoming, November 12–14, 2026:** Davis Phinney Foundation virtual Hispanic leadership conference, “Conectando a la comunidad de Parkinson.” The public program names Joaquin A. Vizcarra and Mayela Rodríguez for “Inteligencia artificial, datos y salud digital en el manejo del Parkinson.” Event dates are verified; an individual session date/time is not established. [Verified event page](https://davisphinneyfoundation.org/events/conferencia-de-liderazgo-hispano-2026-conectando-a-la-comunidad-de-parkinson/).
- **Upcoming, Thursday, November 19, 2026:** “Artificial Intelligence in the Parkinson’s Disease Clinic: Current Realities and Future Directions.” APDA conference, “AI for Parkinson's: From Data to Care in an Aging World,” Johns Hopkins University Bloomberg Center, Washington, DC. The [official event page](https://www.apdaparkinson.org/ai-for-parkinsons/) verifies the date, venue, and 9 AM–5 PM conference schedule. The supplied [official agenda](https://www.apdaparkinson.org/ai-for-parkinsons-agenda/) verifies the talk title and shared Session 3 schedule of 11:35 AM–12:25 PM. No individual talk time is established. The user also supplied a Zoom Events link; its session-specific content has not been verified.
- **May 2026:** “From Big Data to Personalized Care,” 7th World Parkinson Congress, Phoenix. Session: AI, Big Data, and Digital Devices in Parkinson's Care; co-presenters Bill Marks and Anat Mirelman, moderators Diane Stephenson and Camille Carroll.
- **February 2026:** “Is Artificial Intelligence Relevant for the Diagnosis of Parkinson's Disease?” 6th Pan American Parkinson's Disease and Movement Disorders Congress, Houston, debate format.
- **2025:** “Rethinking Falls in Parkinson's Disease: A Bioinformatics Approach Rooted in Clinical Insight,” grand rounds at UC, University of Nebraska, and Cleveland Clinic.

## Local Verification

The final production build passed compilation, TypeScript validation, and prerendering. Existing `node_modules` files were unloaded iCloud placeholders and stalled local commands, so verification used an identical temporary application copy with the exact versions from `package-lock.json`; all 19 application source files were compared with the workspace. The project's dependency files were unchanged.

Browser checks covered all six pages at 320px, the homepage at 390px and 768px, and the desktop design at 1280px. No horizontal overflow was observed. Mobile navigation, Escape handling, active-page indication, page-specific metadata, and research-to-publication anchors were checked. Twenty HTTP checks verified public pages, six retired essays and the writing index, the 410 feed with noindex, private-source URLs, the six-page sitemap, favicon, and 1200×630 PNG social image.

After deployment, the live homepage was inspected in the browser. Production HTTP checks passed for all six public pages, the retired writing index and a former essay (404), feed (410 with noindex), sitemap, and social preview image. The deployed Git tree matched the tested local tree exactly. This deployment record is a local documentation update after the release commit; no application changes were made after validation.

## Maintaining This Context

October 29, 2026: the user requested professional mobile arrow icons and alternatives to the rust/red accent. The vector arrow fix passed a production build and browser checks at 390px (including expanded mobile navigation) and 320px (publication links), with no horizontal overflow. Deep teal, ink blue, muted olive, and charcoal are being presented as color alternatives; the live accent remains unchanged pending the user's preference.

Update confirmed appointments, research scope, projects, papers, leadership, and talks as they change. Record final local verification and deployment status separately. Keep inventory accurate and preserve voice rules and the PR workflow. Do not copy medical license or certification numbers into project documentation.
