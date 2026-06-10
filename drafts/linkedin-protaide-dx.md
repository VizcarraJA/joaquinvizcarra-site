# LinkedIn — ProtAIDe-Dx / Plasma Proteomics Essay

---

A paper just published in *Nature Medicine* can classify Parkinson's disease from a blood draw — 7,595 proteins, a deep learning model, 17,000+ participants — with 92% AUC.

It's one of the most technically ambitious proteomics papers I've read in a while.

But two findings buried in the data tell you more about where the field actually stands than the headline number does.

**Finding one:** The model's PD probability scores correlated strongly with motor severity (UPDRS, R=0.48). When you plot that relationship and color the dots by CSF alpha-synuclein SAA status, SAA-positive and SAA-negative patients are thoroughly intermixed throughout the distribution. The model is ranking patients by how much parkinsonism has affected their body. It is not ranking them by synuclein pathology.

**Finding two:** In a supplementary analysis, the model was tested on distinguishing PD from DLB, PSP, and MSA. Accuracy: 52%. Null accuracy: 44%.

That second number is the one that matters most for how I think about this as a movement disorder clinician. The task that is hardest and most consequential in my practice — which kind of parkinsonism — is the one the model can barely do.

This is probably a property of what plasma proteomics is measuring. PD, DLB, PSP, and MSA all produce chronic motor system failure, autonomic dysfunction, years of disability. The cardiovascular, musculoskeletal, and inflammatory signals that follow from that shared trajectory look broadly similar in peripheral blood — because the body's response to motor neurodegeneration is convergent across causes. The molecular differences that separate these syndromes live in the brain, not the blood.

There is still a lot here worth taking seriously. Joint learning across six conditions, simultaneous co-pathology probability profiles, single blood draw — the framework is genuinely useful for co-morbidity quantification and trial enrichment in ways single-analyte biomarkers can't match. The 94% negative predictive value for SAA status is a plausible triage tool. And the fact that even untrained embeddings distinguish parkinsonism subtypes at above-chance accuracy suggests there is biologically relevant substructure in the proteomic space that a task-specific model might exploit.

That model — trained specifically for parkinsonian differential diagnosis, balanced across PD, DLB, PSP, and MSA, with biomarker-confirmed labels and medication status as a covariate — is the experiment the field should run next.

Until then, this is a compelling proof of framework. Impressive at detecting parkinsonism. Not yet capable of saying which kind.

Full essay at the link below.

---

**Hashtags:** #Parkinsons #Proteomics #Neurology #MovementDisorders #BiomarkerScience #ClinicalAI #NatureMedicine
