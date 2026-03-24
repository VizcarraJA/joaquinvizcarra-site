---
title: "Risk Stratification Is Not Personalization"
date: "2026-03-19"
description: "Why predicting who is at risk for falls or progression in Parkinson's disease is a different problem from understanding why—and why that distinction determines whether AI integration produces personalized care or better-informed triage."
image: "/writing/risk-stratification-is-not-personalization.png"
imageAlt: "Illustration of a clinical decision point in Parkinson's disease where a risk score diverges into multiple mechanistic pathways."
---

Imagine a fall risk score comes back for a patient with Parkinson's disease. The model has incorporated gait sensor data, motor assessments, medication records, and several years of clinical documentation. The output is clear: high risk. Twelve-month fall probability in the upper quartile.

Now the clinical question arrives. What do you do differently for this patient than you would have done without the score?

If the answer is a fall prevention referral, physical therapy, and a home safety assessment, then something important has been left unresolved. Those interventions are reasonable defaults. They are not personalized. A patient falling because of freezing of gait requires a different approach than one falling because of orthostatic hypotension, or because of cognitive impairment affecting hazard perception, or because of medication timing producing peak-dose instability. The risk score identified the patient. It did not identify the problem.

This is the gap between risk stratification and personalized care, and it sits at the center of an assumption that the field has not examined carefully enough.

## What the Integration Project Promises

The case for data integration in Parkinson's disease rests on a compelling logic. Clinical features, digital sensors, biomarkers, imaging, genetics, and electronic health records each capture a partial view of a complex disease. Combining them should produce a more complete picture than any single source allows. Better prediction of who will fall, who will progress rapidly, who will develop cognitive impairment—these are meaningful clinical goals, and the technical approaches to achieve them are advancing.

The language that surrounds this work, however, has drifted toward a stronger claim. Integration is regularly framed as the path to personalized care. The implication is that if we can predict outcomes with sufficient accuracy, we will be able to tailor interventions to individual patients in ways that meaningfully improve their trajectories.

That implication deserves scrutiny.

## Prediction and Mechanism Are Different Problems

A model that discriminates well between patients who will fall and patients who will not has solved a prediction problem. It has not solved a mechanism problem.

Prediction requires identifying features that co-vary with outcomes. Mechanism requires identifying the causal pathways through which outcomes arise. These are related but distinct. A model can achieve strong discrimination by learning statistical associations across data streams without capturing anything about why those associations hold, or which pathway is operative for a given patient.

In many clinical contexts, strong prediction is sufficient. If a screening tool reliably identifies patients who warrant further evaluation, its mechanistic opacity may not matter much. The clinician who receives the flag can conduct the evaluation and determine the path forward.

Parkinson's disease is more demanding. The most important outcomes (falls, motor progression, cognitive decline, autonomic dysfunction) each have multiple contributing mechanisms that require different interventions. Falls in PD arise from freezing of gait, from orthostatic hypotension, from cognitive impairment affecting environmental awareness, from axial rigidity, from medication-related instability, and from combinations of these. An intervention that reduces falls through one mechanism may be irrelevant or even counterproductive for a patient whose falls arise through a different one. The clinician who receives a high-risk flag still needs to determine the operative mechanism before choosing an approach. The score has not moved that question forward.

The same applies to cognitive trajectory. Predicting who will develop dementia is useful for prognosis and trial enrollment. Predicting whether a given patient's cognitive changes reflect Lewy body pathology, vascular burden, medication effects, or sleep disruption—and what can be modified—requires something the current generation of predictive models does not provide.

## What This Means for Integration

The integration project is not wrong. Combining data streams is necessary, and better prediction is a genuine step forward. The more precise point is that the project, as currently framed, may be solving for the wrong output.

Most multimodal models in PD are trained to predict outcomes: who falls, who progresses, who converts. The optimization target is discriminative accuracy. This is reasonable given the state of the field and the data available. But discriminative accuracy at the outcome level does not require, and does not produce, mechanistic attribution at the patient level.

Moving from prediction to personalization requires a different study design, a different modeling approach, and a different definition of the outcome. It requires longitudinal data with sufficient density and resolution to identify which mechanism is driving an event for a specific patient. It requires outcome definitions that distinguish between mechanisms, rather than collapsing them into a binary endpoint. It requires models that produce mechanism-attributed predictions, not just risk scores.

Some of this work is beginning to appear. Causal inference frameworks are being applied to observational cohorts in PD to disentangle contributing pathways. Longitudinal digital phenotyping is generating data streams dense enough to track fluctuations in motor performance over time, which may help attribute specific events to specific mechanisms. These are early efforts, and their clinical translation remains uncertain.

## The Value of Getting the Claim Right

None of this is an argument against the integration project. It is an argument for precision about what the project can and cannot deliver.

If the integration of multimodal data produces better-informed triage, that is valuable. Earlier identification of high-risk patients, more consistent flagging across practice settings, improved trial enrichment—these outcomes are worth building toward, and better prediction is the right tool for achieving them.

Personalized care, in the sense that the term implies to most patients and clinicians, requires something more. It requires knowing what is driving this patient's trajectory and what can be changed about it. The distance between those two things is the mechanism problem, and it runs through the center of what the field is trying to build.

Clarity about this distinction does not slow progress. It directs it. The integration work and the mechanistic work are not in competition. They are sequential. The field needs both, in the right order, with honest accounting of what each can accomplish.

In late May, at the [7th World Parkinson Congress](https://wpc2026.org/) in Phoenix, I will be discussing what integration of big data and AI can realistically deliver for Parkinson's care—and where the harder problems begin.
