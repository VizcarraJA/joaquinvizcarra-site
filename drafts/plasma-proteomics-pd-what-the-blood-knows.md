---
title: "What the Blood Knows About Parkinson's: Proteomics, Big Data, and the Limits of Inference"
date: "2026-04-07"
description: "A new plasma proteomics model classifies Parkinson's disease from a single blood draw with impressive accuracy. But it reads motor burden, not synuclein pathology — and it struggles with the differential diagnosis that matters most in a movement disorder clinic."
image: "/writing/plasma-proteomics-pd-what-the-blood-knows.png"
imageAlt: "Schematic of plasma proteomic signal and its relationship to downstream neurodegeneration versus upstream molecular pathology in Parkinson's disease."
---

A patient arrives in a movement disorder clinic. He is sixty-three, a retired schoolteacher. His wife noticed his left arm stopped swinging when he walked about a year ago. His handwriting has grown small. He has some trouble getting out of low chairs. On examination the findings are there — subtle, asymmetric, classic. The diagnosis of Parkinson's disease is made clinically, because that is how we make it. There is no blood test. There is no imaging result that confirms it. A neurologist with enough experience, in the right clinical context, looks at the patient and knows.

That clinical reality — diagnostic certainty without a confirmatory biomarker — has been the defining frustration of Parkinson's disease for decades. So when a paper appears in *Nature Medicine* in March 2026 reporting that a deep learning model can classify Parkinson's disease from a single blood draw with 92% area under the curve, using nothing but plasma protein levels, it is worth reading carefully. Not to ask whether it is impressive — it is — but to ask what, exactly, it has found, and what work it cannot yet do.

---

The paper describes ProtAIDe-Dx, developed by An, Pichet Binette, and colleagues through the Global Neurodegeneration Proteomics Consortium. The architecture is genuinely ambitious. Using SomaLogic 7k aptamer-based profiling — approximately 7,595 proteins measured simultaneously from plasma — the model was trained on 17,187 participants across 19 collection sites, drawing on well-characterized longitudinal cohorts that span the full spectrum of clinical settings where neurodegenerative disease is evaluated. The output is not a binary classification but a probability for each of six conditions — Alzheimer's disease, Parkinson's disease, frontotemporal dementia, ALS, stroke and TIA, and healthy controls — allowing it to represent co-pathology and diagnostic uncertainty simultaneously at the individual level. Performance figures are strong, particularly for ALS (95% balanced classification accuracy) and PD (81%). In BioFINDER-2, used as an external validation dataset, it added meaningful discriminative information over standard clinical biomarkers.

These are not trivial results. The framework they demonstrate — high-dimensional plasma proteomics, joint learning across multiple neurodegenerative conditions, simultaneous co-pathology profiling from a single blood draw — represents a genuine methodological step. But the Parkinson's disease findings, taken together, tell a more specific and more interesting story than the headline accuracy suggests.

---

The most scientifically revealing result sits not in the primary performance metrics but in the validation data.

PD probability scores from ProtAIDe-Dx correlated with UPDRS motor scores in a BioFINDER-2 subsample of 100 participants — a moderate-to-strong correlation with R=0.48 and p=6×10⁻¹⁰. When you plot that relationship and color the points by CSF alpha-synuclein seed amplification assay (SAA) status, something important becomes visible. SAA-positive and SAA-negative patients are thoroughly intermixed throughout the distribution. At every level of PD proteomic probability, you find both groups. The model is sorting patients by how severely parkinsonism has affected the body. It is not sorting them by the presence or absence of synuclein pathology. Those are different axes, and in this data they do not align.

This is the SAA dissociation the paper reports. The two-cutoff strategy for predicting CSF alpha-synuclein positivity achieved 93% specificity and 94% negative predictive value — the model can reasonably exclude synuclein pathology — but only 33% positive predictive value. It cannot confirm it.

A useful counterpoint is what the model does in cognitively unimpaired individuals: when healthy controls carry positive CSF alpha-synuclein status, the model assigns them lower control probabilities (p=0.028), appropriately reading early synuclein pathology as a departure from the healthy state. The model is not blind to the synuclein signal. What it cannot do is use that signal to stratify patients who already have clinical parkinsonism. Once motor disease is established, the proteomic landscape the model reads tells you how severe it is — not what is driving it at the molecular level.

The proteins most discriminative for PD in the model include cardiac troponin T and proteins related to ciliary neurotrophic factor signaling. The embedding the model shares between ALS and PD is enriched for muscle structure, sarcomere organization, and cytoskeletal biology. These are downstream signals — real, clinically correlated with severity, and genuinely detectable from blood. They are the biological residue of what chronic motor system degeneration leaves behind in the peripheral circulation. They are not a window into the upstream molecular events that initiated the disease, nor into the specific pathological substrate that distinguishes one parkinsonian syndrome from another.

---

The supplementary differential diagnosis data makes this limitation concrete in the terms that matter most for clinical practice.

In a subsample of BioFINDER-2, the model was tested on distinguishing PD (n=78), DLB (n=48), PSP (n=34), and MSA (n=16). This is the task that occupies much of the difficult diagnostic work in a movement disorder clinic — not "does this patient have parkinsonism" but "which kind." The accuracy was 52%, against a null accuracy of 44%. The result is statistically significant (p=0.012), and the authors appropriately note that the model was not trained for this specific task and that the MSA group of 16 limits robustness.

Still, the practical implication is clear. When asked to navigate within parkinsonism — to separate idiopathic Lewy body disease from DLB, from tau-driven PSP, from the autonomic-predominant MSA — the model is essentially at the floor of clinical usefulness. The same proteomic signal that tracks motor severity well enough to classify parkinsonism against broader neurodegeneration loses most of its discriminative power precisely where the clinical question is hardest and the diagnostic stakes are highest.

This is a precise description of what the approach currently achieves, not an indictment of the underlying strategy. The model can detect parkinsonism as a class. It cannot yet say which kind. In a movement disorder clinic, the second question is often more consequential than the first.

---

Several explanations for this pattern are not mutually exclusive.

The most structurally compelling is that plasma proteomics largely reflects the downstream systemic consequences of neurodegeneration rather than its upstream molecular cause. PD, DLB, PSP, and MSA all produce progressive motor system failure, autonomic dysfunction, and years of disability. The cardiovascular, musculoskeletal, and immune changes that follow from that shared trajectory may leave broadly similar fingerprints in the peripheral circulation — not because the diseases are biologically identical, but because the body's response to chronic motor neurodegeneration is convergent across causes. The molecular differences that separate these syndromes are in the brain; the blood-brain barrier is not cooperative in surfacing them.

Medication confounding is a separate and practically important concern that this paper cannot resolve. Virtually every clinically diagnosed PD patient in the training cohorts is on dopaminergic therapy. Levodopa, dopamine agonists, and MAO-B inhibitors alter catecholamine metabolism and inflammatory signaling in ways that are detectable in plasma proteomics. The model was trained in a setting where disease and treatment are inseparable, and the proteomic signal it learned likely reflects both. Whether the signature is driven primarily by the disease or modified substantially by its treatment cannot be determined from this data.

A third consideration concerns the training labels themselves. PD diagnosis across 19 consortium sites was made clinically, without biomarker confirmation in most cases. For a disease where clinical diagnostic accuracy in specialized settings ranges from 70 to 85 percent, and where early misdiagnosis with essential tremor, MSA, PSP, or drug-induced parkinsonism is not uncommon, the ground truth the model was trained on is imperfect. The model is learning to classify what clinicians call PD — which is not always what a neuropathologist, or a SAA assay, would confirm.

A fourth interpretation is worth holding open. Alpha-synuclein aggregation is the current definitional criterion for biological PD under the NSD-ISS framework. But LRRK2-associated PD can present with typical clinical disease and absent or atypical Lewy body pathology at autopsy. GBA-associated parkinsonism does not always yield consistent SAA positivity. The relationship between synuclein aggregation and the systemic proteomic state the model captures may be genuinely variable across genetic and clinical subtypes — not because the model is missing a signal that is there, but because the signal itself is heterogeneous in ways that the clinical label does not resolve.

---

There are specific translational scenarios where this approach has real potential, even given these constraints.

The simultaneous probability output across six conditions is structurally useful for co-pathology quantification. The clinical question I encounter in practice is rarely a clean binary about whether a patient has PD. More often it is: what else is accumulating alongside the motor disease, and is there an independent Alzheimer's process contributing to the cognitive trajectory? A tool that returns a probability landscape across multiple concurrent pathologies — even an imperfect one — provides information that no single-analyte biomarker can offer.

The 94% negative predictive value for CSF alpha-synuclein status points toward a triage role: identifying patients unlikely to yield positive SAA results and directing the more resource-intensive confirmatory workup toward those where it is more likely to change management. For healthcare systems where CSF biomarker access is constrained, that screening function has practical value independent of standalone diagnostic accuracy.

For clinical trials, continuous probability profiles across multiple conditions could support more precise enrollment enrichment. A neuroprotection trial in early PD wishing to exclude participants with significant comorbid AD pathology has no clean blood-based screen for that purpose today. Proteomic probability profiles could inform that boundary — not definitively, but probabilistically enough to be useful at the level of cohort composition.

The above-chance parkinsonian differential accuracy (52% vs. 44%), modest as it is, also carries a proof-of-concept implication. The model was not trained for that task; the discrimination emerges from embeddings optimized for something else. That it achieves any separation at all suggests the proteomic space contains substructure relevant to parkinsonian subtyping. A model trained specifically for that differential, with balanced representation of PD, DLB, PSP, and MSA, biomarker-confirmed diagnoses, and medication status as an explicit variable, would be a direct test of whether plasma proteomics can do the hard clinical work — or whether the signal convergence across motor neurodegenerative diseases is fundamental and irreducible.

---

The deepest contribution of this paper may be methodological rather than immediately clinical.

It demonstrates what becomes possible when you apply a high-rank measurement platform — nearly eight thousand proteins — to a problem that has resisted lower-dimensional approaches. Parkinson's disease has not yielded a reliable single blood biomarker despite decades of effort. Its genetic architecture is diffuse. Its clinical presentation is heterogeneous. It exists in a body simultaneously aging, acquiring comorbidities, and responding to treatment. Plasma proteomics handles that complexity differently than any single-analyte assay can, integrating signal from the whole organism rather than a single pathway.

The patterns it finds may not be the patterns we would have chosen to look for. Cardiac troponin is not what most movement disorder neurologists would name as a candidate PD biomarker. That is part of what makes the finding worth following. The model has identified that something systemic — in the heart, the muscle, the vasculature — correlates reliably with parkinsonian motor burden. Whether those signals can be sharpened into tools for differential diagnosis, whether they carry independent prognostic information beyond what synuclein-anchored biomarker frameworks already provide, and whether they reflect disease-specific biology or shared motor consequence — these are answerable questions that this paper opens without closing.

The schoolteacher with the small handwriting and the asymmetric arm swing will continue to be diagnosed the way he is diagnosed today. That will not change quickly. But the question of what the blood can tell us about the biology running beneath his clinical presentation — how severe it is, where it is going, what comorbidities are accumulating — is more tractable than it was a year ago.

Plasma proteomics is not yet the answer. It has, however, begun to describe the shape of the problem more precisely than single biomarkers allow.
