---
title: "The Gap Between Knowing and Deciding: Why Big Data Hasn't Changed Parkinson's Care"
description: "The field has a translation problem, not a data problem. What it actually takes to move from population-level patterns to individual clinical decisions in Parkinson's disease."
date: "2026-04-01"
---

The amount of Parkinson's disease data that exists today would have been unimaginable twenty years ago. PPMI has enrolled thousands of participants across multiple continents with longitudinal biospecimens, imaging, and clinical assessments going back more than a decade. The UK Biobank contributes hundreds of thousands of individuals with genetic and phenotypic data that researchers are still mining. Electronic health records hold millions of clinic visits. Wearable devices generate continuous motor data streams from patients who never set foot in a research center.

And yet most patients still have their disease managed the same way they did in 2005. A twenty-minute clinic visit. A brief motor exam. Clinical intuition refined over years of practice. The treatment algorithm hasn't changed in structure. The decisions being made at the bedside look essentially the same.

That is the translation problem. And it is the problem worth talking about in 2026.

## Big Data Has Given Us Real Knowledge

This is not an argument that the data has been useless. It hasn't.

PPMI transformed our understanding of PD heterogeneity. We now have solid evidence that Parkinson's disease is not one entity. There are patients who progress rapidly and patients who plateau for years. There are predominantly motor phenotypes and predominantly non-motor ones. There are patients who develop dementia within five years of diagnosis and patients who never do. The data has made these distinctions visible at a resolution that clinical observation alone could never achieve.

Predictive models built on these cohorts are genuinely accurate at the group level. Models predicting falls, cognitive decline, and motor progression have published AUC values that would have seemed ambitious a decade ago. The Mobilise-D consortium produced real-world gait data from over 1,000 patients across nine countries and demonstrated that continuous walking speed during daily life predicts outcomes with precision that clinic-based assessments miss. This is progress. It is real.

The problem is not the knowledge. The problem is what happens — or doesn't happen — between the model and the patient.

## Three Obstacles That Don't Get Enough Attention

**The first is heterogeneity of the wrong kind.** PD datasets, however large, are not representative of your outpatient clinic. PPMI participants are, on average, younger, healthier, more motivated, and more likely to live near a major academic medical center than the patients most neurologists see every week. A model trained on PPMI may perform beautifully in cross-validation and fail quietly when it encounters an 80-year-old with early cognitive impairment, atrial fibrillation, and a two-hour commute to the nearest movement disorders center.

External validation is not optional. It is the actual work. The literature is full of models that were validated internally and published with confidence, then quietly disappeared because nobody could replicate the performance in a different population. The field knows this. It keeps happening anyway.

**The second obstacle is outcome mismatch.** Large datasets tend to optimize for what is easy to collect. MDS-UPDRS scores, DaT scan results, hospitalization records, mortality. These are in the chart. They are measurable. They are not always what patients care about most.

Falls matter to patients. The ability to drive matters. Handwriting, swallowing, getting through a full workday, being present at a grandchild's birthday without freezing at the door. These outcomes are hard to operationalize at scale. The field has mostly built models that predict chart variables because those are the variables available. That's an understandable constraint. It is also a reason why models that perform well statistically sometimes produce outputs that feel clinically thin.

**The third obstacle is the last mile.** Even when a model works, even when it predicts the right outcome in a generalizable population using variables that matter, getting that prediction into a clinical decision at the right moment is harder than it sounds. Most tools fail here.

The output lands in a dashboard that requires a separate login. Or it surfaces in a report that arrives three weeks after the visit when the decision has already been made. Or it produces a risk score without a recommended action, leaving the clinician to figure out what "high risk" means operationally. The workflow doesn't bend to accommodate the tool. The tool gets ignored.

This is the most underappreciated obstacle in clinical AI broadly, and it is acutely present in Parkinson's disease. Movement disorders clinics are busy. Specialists see complex patients with long histories. Adding a layer of AI-generated output to that encounter requires either a genuine reduction in cognitive load or a genuine improvement in outcomes — and the tool has to demonstrate which one it delivers, quickly, or it gets abandoned.

## What Personalized Care Actually Requires

The phrase "personalized care" is used so often in PD that it has become ambient. It shows up in grant abstracts, conference themes, and pharma positioning. Most of the time it means precision at the population level: identifying subgroups that respond differently to a treatment, or biomarker-stratified trial designs. That is valuable. It is not personalized care in the sense that matters to a patient in your office.

Actual personalized care requires three things the field is still building.

It requires **actionable outputs**. Not "this patient has a 67% probability of falling in the next 12 months." That is a risk estimate. An actionable output tells the clinician what to do differently because of that estimate. Refer for physical therapy. Adjust the levodopa dose. Schedule a gait assessment before the next visit. The model has to be coupled to a clinical pathway or it generates anxiety without direction.

It requires **temporal alignment**. The prediction has to arrive when the decision is being made. A fall risk score that is generated at enrollment and reviewed at month 12 is not part of the care loop. It is documentation. Tools that influence care must be integrated into the visit workflow, which means they have to load fast, require minimal input, and produce output in a format that a clinician can act on in the time they have.

It requires **interpretability**. Not just the statistical kind, though that matters. A specialist who cannot explain to a patient why the model flagged them as high risk cannot use that output as part of shared decision-making. Interpretability is a clinical communication requirement as much as it is a technical one.

## What Phoenix Will Be About

The 7th World Parkinson Congress convenes in Phoenix in May with sessions spanning AI diagnosis, digital biomarkers, wearable endpoints, large language models in clinical documentation, and trial design. My own talk sits squarely in the middle of this: what it takes to move from population-level data to decisions that change what happens in individual care.

My honest read on where the field is: the data infrastructure is good and getting better. The models are more accurate than they were five years ago. The translation layer — from model to decision to outcome — is where most work stalls, where most tools quietly fail, and where the most important work is still being done.

The field is not short on data. It is not short on algorithms. It is short on tools that close the last mile. That gap is the thing worth building toward.

I will write about what I hear and see in Phoenix. The conversations at a congress like this one often reveal where the serious researchers think the real problems are — not always what the session titles say.
