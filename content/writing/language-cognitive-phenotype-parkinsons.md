---
title: "Language as a Window into the Cognitive Phenotype of Parkinson's Disease"
date: "2026-03-17"
description: "A study using NLP to analyze connected speech discriminated Parkinson's disease patients with and without mild cognitive impairment from each other and from healthy controls. The action verb finding opens a clinically meaningful question."
---

Cognitive impairment in Parkinson's disease is common, heterogeneous, and consequential. Roughly a third of patients have mild cognitive impairment at diagnosis, and the majority will develop dementia over the course of the disease. The cognitive phenotype — whether a given patient has intact cognition, mild impairment, or frank dementia — shapes prognosis, clinical trial eligibility, medication tolerability, and the nature of care planning conversations. Characterizing it well matters.

Formal neuropsychological assessment remains the standard, but it is resource-intensive, time-consuming, and not consistently available across the spectrum of clinical settings where Parkinson's disease is managed. There is a long-standing interest in finding scalable, ecologically valid markers of cognitive state that can be captured without a full testing battery.

A study published in *npj Parkinson's Disease* in 2025 by Aresta, Battista, Salvatore and colleagues takes a computational approach to this problem using connected speech. The investigators enrolled 70 Italian-speaking participants across three groups: 20 patients with PD and mild cognitive impairment (PD-MCI), 16 patients with PD and intact cognition (PD-nMCI), and 34 healthy controls. Participants completed a picture description task, and speech samples were transcribed and analyzed using CLAN software to extract 35 linguistic features spanning lexico-semantic, phonological, morphosyntactic, and pragmatic domains. A support vector machine classifier with recursive feature elimination was trained to perform four binary classifications: all PD versus healthy controls, PD-nMCI versus healthy controls, PD-MCI versus healthy controls, and PD-nMCI versus PD-MCI.

---

The classification results were reasonable across all four comparisons. All patients with PD versus healthy controls reached an AUC of 77% and accuracy of 77%. The subgroup comparisons performed better: PD-nMCI versus healthy controls reached an AUC of 85% and accuracy of 84%, while PD-MCI versus healthy controls reached an AUC of 83% and accuracy of 83%. The most clinically challenging comparison — PD-nMCI versus PD-MCI, distinguishing patients with intact cognition from those with mild impairment — reached an AUC of 75% and accuracy of 76%. SHAP analysis identified the features driving each classification, and calibration plots confirmed reasonable probability calibration across most comparisons.

The lexico-semantic and morphosyntactic features were the most consistently discriminative. Retracing ratio, utterance error ratio, and open class word production appeared across multiple classifiers. These are features capturing how fluently patients construct and monitor their own speech — how often they restart or revise a message, how frequently they produce utterances with grammatical or phonological errors, and how much their speech is anchored in content-carrying words.

---

The finding that stands out most is the role of action verbs, particularly in distinguishing PD-nMCI patients from healthy controls and from PD-MCI patients.

Action verbs are not a generic linguistic category. They are words describing physical movement and purposeful action, and their processing depends on the integrity of frontostriatal networks. The frontostriatum is the same circuit compromised by dopaminergic neurodegeneration in Parkinson's disease. Work from Adolfo García and colleagues has established that action-concept processing relies on motor and premotor areas — the regions most directly affected in PD — and that deficits in action verb production emerge as a relatively selective marker of frontostriatal dysfunction.

In this study, action verb ratio was negatively correlated with MDS-UPDRS III score in the PD-nMCI group (r = −0.50, p = 0.05), meaning patients with more severe motor symptoms produced fewer action verbs in connected speech. This correlation did not reach significance in the other subgroups. The finding supports the interpretation that action verb deficits in PD-nMCI reflect shared frontostriatal network pathology — the same circuits driving motor impairment are also involved in the semantic processing of action concepts, and their depletion is detectable in speech before broader cognitive decline takes hold.

This is clinically meaningful because it connects a measurable linguistic variable to a known biological substrate in a disease where those connections are rarely direct. Most digital biomarkers in PD describe a symptom. This one may be describing a mechanism.

---

The study has real limitations that matter for how far its conclusions can travel.

The sample is small: 70 participants across three groups, with the PD-nMCI group at only 16 patients. The authors used nested cross-validation and recursive feature elimination specifically to mitigate overfitting risk given the high features-to-sample ratio, and these choices were appropriate. Still, the classification performance estimates carry wide confidence intervals, and replication in a larger, independent cohort is necessary before these results inform clinical practice.

The sample is also exclusively Italian-speaking, and the linguistic features — particularly lexico-semantic ones like action verb and open class word ratios — may behave differently across languages. Italian morphosyntax is richer than English morphosyntax, and some of the morphosyntactic simplification patterns identified in this sample may manifest differently in other populations. Cross-linguistic validation is a necessary next step that the authors acknowledge directly.

All participants were assessed in the ON state of dopaminergic medication, which is standard practice for cognitive assessments in PD. Dopamine bioavailability influences speech and language performance, and the linguistic profile in the OFF state — or across the wearing-off cycle — remains uncharacterized. This matters for the practical deployment of speech-based assessment outside of controlled clinical visits.

---

The clinical direction this study points toward is worth taking seriously. A picture description task is brief, non-invasive, and non-fatiguing. It requires no specialized equipment beyond a recording device. If automated analysis of connected speech can reliably characterize cognitive phenotype in Parkinson's disease across languages and care settings, it becomes a candidate for cognitive screening in clinical contexts where formal neuropsychological testing is unavailable — community neurology practices, remote consultations, longitudinal home monitoring.

The gap between that possibility and current evidence is still wide. This study is a proof of concept with a small Italian sample. Building toward clinical utility requires larger cohorts, cross-linguistic replication, longitudinal designs that track cognitive trajectories, and integration with existing clinical workflows. Tools like the Toolkit to Examine Lifelike Language (TELL), mentioned by the authors, represent early infrastructure for that kind of deployment.

The action verb finding, if it replicates, would give clinicians something they rarely have in PD: a passively collectable speech variable with a mechanistic connection to the disease process, trackable across visits without adding to the burden of already long clinical encounters.

---

*Aresta S, Battista P, Palmirotta C et al. "Digital phenotyping of Parkinson's disease via natural language processing." npj Parkinson's Disease 11, 182 (2025). [https://doi.org/10.1038/s41531-025-01050-8](https://doi.org/10.1038/s41531-025-01050-8)*
