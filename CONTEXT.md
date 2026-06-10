# CONTEXT.md — joaquinvizcarra-site

This file is the living context document for this project. It is meant to be read by AI agents at the start of any session involving this folder. Update it whenever the mission, content inventory, voice rules, or site structure changes in a meaningful way.

---

## Who This Is For

Dr. Joaquin A. Vizcarra, MD — movement disorder neurologist and clinical researcher at the University of Pennsylvania Perelman School of Medicine. Also affiliated with the Center for Neuroengineering and Therapeutics at Penn.

Clinical focus: Parkinson's disease.
Research focus: AI and big data in PD care, digital health outcomes, health services research, clinical bioinformatics.

---

## Mission

This site is a KOL (key opinion leader) presence in the PD/AI space. The goal is to establish Dr. Vizcarra as a credible, distinctive voice at the intersection of clinical movement disorders neurology and the technologies reshaping it — AI, big data, digital endpoints, plasma biomarkers.

The site is not a CV or a paper repository. It is a place where clinical expertise and technology meet in a form that practicing neurologists, researchers, and informed patients can read and trust. The writing earns authority by being specific, honest about limitations, and grounded in what actually happens in clinical practice.

---

## Content Strategy

Essays are the core unit. One per week is the target cadence, mixing:
- **Reactive commentary**: a significant paper just published, a regulatory event, a trial result. React within days while it is still in the news cycle.
- **Substantive anchor pieces**: longer arguments that set up or follow from talks, presentations, or publications. These have a longer shelf life.

LinkedIn posts accompany each essay. They live in `drafts/` and are not published to the site. They are written to work as standalone posts that point back to the full essay — not summaries of the article.

Every essay should pass two tests: Would a movement disorder specialist find this worth their time? Would a clinical researcher in an adjacent field understand it?

---

## Voice and Style Rules

These are firm. Any agent writing for this site must follow them.

- **No em dashes.** Replace with commas, colons, semicolons, or restructured sentences.
- **No negation-style writing.** Avoid "not X but Y," "not just X," "not wrong but," "what has not yet been built," etc. State the positive claim directly.
- **No bullet points in essays.** Prose only. Lists belong in technical documentation, not writing.
- **No excessive bold or headers within essays.** The essays use `---` section breaks and let paragraph structure carry the argument.
- **No emojis in essays.** LinkedIn posts may use them sparingly.
- **Academic but accessible.** The reader is a clinician or researcher, not a general consumer. No need to over-explain basic concepts, but jargon that requires a subspecialty to understand should be defined.
- **First person, measured.** Not promotional. Not breathless. Dr. Vizcarra's voice is direct, intellectually honest, and willing to say when evidence is limited.
- **Clinical grounding matters.** Open with a clinical scene or a concrete observation where possible. The argument should feel like it comes from someone who sees patients.

---

## Site Structure

### Technical
- **Stack:** Next.js 15 (App Router), React 18, TypeScript
- **Deployed:** Vercel — auto-deploys on merge to `main`
- **Fonts:** Source Serif 4 (serif), DM Sans (sans)
- **Analytics:** @vercel/analytics

### Key files
- `content/writing/` — all essays as Markdown files. This is the source of truth for written content. Never hardcode essay content in components.
- `lib/site-data.ts` — talks, publications, and research themes for the homepage. Update this file when adding new talks or publications to the site.
- `app/globals.css` — all design tokens and layout. Navy/cream/gold palette. Full-width section architecture.
- `app/layout.tsx` — Google Fonts, JSON-LD Person schema, 3-column navy footer.
- `app/page.tsx` — homepage sections (hero, research themes, talks, publications, writing grid, contact).
- `app/site-header.tsx` — fixed nav with scroll-activated frosted glass.
- `app/components/ScrollAnimations.tsx` — IntersectionObserver for fade-in animations.
- `app/components/JsonLd.tsx` — PersonJsonLd and ArticleJsonLd structured data for SEO.
- `lib/posts.ts` — reads and parses Markdown files from `content/writing/`. Adds `readingTime` computed from content.

### Essay frontmatter format
```md
---
title: "Title of the essay"
date: "YYYY-MM-DD"
description: "One sentence. Used in meta tags and writing index cards."
image: "/writing/slug-of-essay.png"
imageAlt: "Description of the image for accessibility and SEO."
---
```
`image` and `imageAlt` are optional but recommended. Images live in `public/writing/`.

### Git and deployment workflow
- **Never push directly to `main`.** All changes go through a PR.
- Branch off `main`, open PR, CI must pass (GitHub Actions runs `npm ci` + `npm run build`), then merge.
- Use `gh pr merge --squash --delete-branch` to merge cleanly.
- Vercel auto-deploys after merge.

---

## Content Inventory

### Published essays (as of June 2026)

| File | Title | Date | Theme |
|------|-------|------|-------|
| `ai-in-parkinsons-disease-diagnosis-context-determines-the-standard.md` | AI in Parkinson's Disease Diagnosis: Context Determines the Standard | 2026-02-19 | AI diagnosis, context of use |
| `the-implementation-problem-in-parkinsons-ai-lessons-from-cardiology.md` | The Implementation Problem in Parkinson's AI: Lessons from Cardiology | 2026-02-27 | AI implementation, pragmatic trials |
| `real-world-mobility-parkinsons-mobilised.md` | What a Week of Real-World Walking Data Reveals About Parkinson's Disease | 2026-03-17 | Digital endpoints, Mobilise-D |
| `the-wearable-worked-the-outcomes-didnt-move.md` | The Wearable Worked. The Outcomes Didn't Move. | 2026-03-09 | Wearables, RCT outcomes |
| `bayesian-methods-parkinsons-trials-fda-guidance.md` | The FDA's New Bayesian Guidance and the Hardest Question in Parkinson's Trials | 2026-03-24 | Bayesian methods, FDA, trial design |
| `from-big-data-to-personalized-care-translation-problem.md` | The Gap Between Knowing and Deciding: Why Big Data Hasn't Changed Parkinson's Care | 2026-04-01 | Big data, translation problem, WPC anchor |
| `plasma-proteomics-pd-what-the-blood-knows.md` | What the Blood Knows About Parkinson's: Proteomics, Big Data, and the Limits of Inference | 2026-04-07 | ProtAIDe-Dx, plasma proteomics, biomarkers |
| `wpc-2026-ai-big-data-digital-devices-session-preview.md` | Coming to WPC Phoenix: AI, Big Data, and Digital Devices in Parkinson's Care | 2026-04-16 | WPC 2026 session preview |
| `ecology-of-care-big-data-wpc.md` | The Ecology of Care: Why Big Data Has to Reach Where Patients Actually Are | 2026-06-10 | Ecology of care paper, health services, equity |

### LinkedIn drafts (in `drafts/`)

| File | Corresponding essay |
|------|---------------------|
| `linkedin-post-bayesian-fda.md` | Bayesian methods / FDA guidance |
| `linkedin-post-mobilised.md` | Mobilise-D / real-world mobility |
| `linkedin-post-wearable-rct.md` | Wearable RCT outcomes |
| `linkedin-post-nlp-aresta.md` | NLP / falls (separate paper, not yet an essay) |
| `linkedin-protaide-dx.md` | ProtAIDe-Dx / plasma proteomics |
| `linkedin-wpc-session-announcement.md` | WPC 2026 session (pre-congress) |
| `linkedin-ecology-of-care-paper.md` | Ecology of care paper |
| `content-dashboard.html` | Visual overview of content pipeline |

---

## Published Papers (Recent, Relevant to Site)

- Vizcarra JA. "The Ecology of Care in Parkinson's Disease." *Movement Disorders Clinical Practice*, 2026. DOI: 10.1002/mdc3.70705 — published online, not yet in a volume.
- Vizcarra JA et al. "AI in the Diagnosis and Quantitative Phenotyping of Hyperkinetic Movement Disorders." *Journal of Clinical Medicine*, 2024.
- Vizcarra JA et al. "Reliability of remote video ratings of the scale for assessment and rating of ataxia." *Parkinsonism & Related Disorders*, 2025.

---

## Talks (Recent, Relevant to Site)

- WPC Phoenix, May 2026 — "From Big Data to Personalized Care" (MCS2 session, co-presenters Bill Marks and Anat Mirelman, moderated by Diane Stephenson and Camille Carroll)
- Pan American PD & Movement Disorders Congress, Houston, February 2026 — "Is Artificial Intelligence Relevant for the Diagnosis of Parkinson's Disease?" (debate format)

---

## What to Update in This File

When any of the following change, update the relevant section:
- A new essay is published: add it to the content inventory table
- A new LinkedIn draft is created: add it to the drafts table
- A new paper is published: add it to the papers section
- A new talk is given: add it to the talks section
- `lib/site-data.ts` is updated: verify the talks and publications sections here still match
- Voice or style rules change: update the voice section
- Site structure or frontmatter format changes: update accordingly
