---
title: "The Ecology of Care: Why Big Data Has to Reach Where Patients Actually Are"
date: "2026-06-10"
description: "The evidence base for Parkinson's disease is built at the narrow apex of the care system and applied to the wide base that never reaches it. A new viewpoint, and the argument I made at the World Parkinson Congress, on what that means for AI."
image: "/writing/ecology-of-care-figure1.png"
imageAlt: "Figure adapted from Vizcarra 2026: the ecology of Parkinson's disease care in the United States, showing annual care layers per 1000 people living with diagnosed PD narrowing from 1000 to 600 to 91 to about 30 to about 10."
---

Much of what I know about Parkinson's disease, and much of what my field knows, comes from a relatively small and selected group of people. The cohorts that anchor our biomarker studies, the participants in our clinical trials, the patients followed in expert centers year after year: their data becomes a large share of the evidence. They are also a thin slice of everyone living with the disease.

A viewpoint I published this month in *Movement Disorders Clinical Practice* puts a number on that slice. Start with 1000 people living with diagnosed Parkinson's disease in the United States. In a given year, roughly 600 have at least one neurology visit. Only 91 see a movement disorder specialist. About 30 receive care in a multidisciplinary expert center. Around 10 are enrolled in a structured registry or longitudinal cohort. Figure 1 draws this as a set of nested boxes, each a fraction of the one around it, narrowing fast.

---

The figure is usually read as a story about access, and it is one. There is a second reading worth drawing out alongside it.

The innermost box, the roughly 10 people per 1000 at the apex, is where most published movement disorders neuroscience comes from. It is where our best-characterized phenotypes, our most cited biomarker findings, and much of our trial evidence originate. In that sense the pyramid of care and the pyramid of evidence tend to point in opposite directions. Care narrows as you move inward toward the specialist and the research center. Evidence is generated at that narrow core and then generalized outward, applied back to the 990 people who never reach it. We build much of our knowledge at the tip and apply it across the base.

That arrangement would carry little risk if the tip were a representative sample of the base. In practice it is a selected one. The people who reach an expert-center cohort tend to be those who can travel, who have the insurance and the time, and who were referred by a clinician already attuned to research. The outer layers are larger, and they tend to be more vulnerable and more unevenly served: Black and Hispanic patients are substantially less likely to see a neurologist at all, and disparities in rehabilitation and follow-up compound from there. The populations least represented in the evidence are often the same populations the evidence is ultimately meant to serve.

---

This inversion has been livable because the front door to Parkinson's care has stayed relatively narrow. Most people arrive after motor symptoms are unmistakable, and the system, for all its gaps, has roughly matched that pace.

That is changing. Wearable movement data can flag Parkinson's years before a clinical diagnosis. Plasma proteomic signatures and blood-based alpha-synuclein seed amplification assays are moving in the same direction, toward identifying risk before motor onset. Each of these widens the front door. Each pushes more people, earlier, into a diagnostic pathway whose downstream layers were built for a smaller and later-arriving population, and most of those people will live their disease somewhere in the outer boxes. Earlier detection delivers value in proportion to what the system underneath it can absorb. If the entrance widens faster than the layers behind it, the likely result is more diagnoses without a matching improvement in care.

---

The usual framing of AI in Parkinson's benefits from a similar shift in perspective. The common version casts AI as a way to sharpen diagnosis and monitoring inside the expert settings that already have labeled data and the infrastructure to use it. That captures part of the opportunity. A second and arguably larger part points the technology outward: identifying primary care patients who warrant expedited neurological assessment, supporting monitoring between specialist visits that may happen once a year or less, recognizing decline in long-term care settings where most residents with Parkinson's see no neurologist at all. The emphasis shifts toward redistributing expertise as much as refining it.

That perspective also shapes what counts as a good model. A tool trained on tertiary-center data and validated in the same setting has demonstrated that it can discriminate there. Whether it travels to the community clinic, the hospital ward, and the nursing home is a separate question, and one worth asking earlier in development. The measures that matter for deployment include whether the development population resembles the place the model will actually run, whether validation spans those settings, and whether the tool improves access, timeliness, and continuity alongside accuracy. For system-level uses like triage and monitoring, implementation outcomes can matter as much as the area under the curve.

The economics are beginning to point the same way. The CMS ACCESS model, launching in July 2026, ties payment to demonstrated outcomes in technology-enabled chronic disease management. Parkinson's sits outside its current condition tracks, but the structure signals the trajectory of US reimbursement: payment for continuity of care delivered at population scale, with AI-augmented workflows as one of the more plausible ways to deliver it within narrow per-patient margins.

---

I made a version of this argument a few weeks ago at the World Parkinson Congress in Phoenix, in a session on artificial intelligence, big data, and digital devices in Parkinson's care. My talk, *From Big Data to Personalized Care*, made the case that the field has a translation problem more than a data problem. The data exists. The computational methods are maturing. The layer still to be built is the one that carries inference and delivery to the people the tools were designed for.

The ecology offers a map the field has often worked without. With it in view, progress starts to look less like sharpening what happens at the inner 10 and more like extending those gains to the outer 990. The full argument, and Figure 1 in its original form, are open access at [10.1002/mdc3.70705](https://doi.org/10.1002/mdc3.70705).
