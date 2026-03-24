---
title: "The FDA's New Bayesian Guidance and the Hardest Question in Parkinson's Trials"
date: "2026-03-24"
description: "The FDA's new Bayesian guidance changes what clinical trials can ask and answer. For Parkinson's disease, where proving disease modification has always been the hardest problem, this matters more than most."
ogImage: "/images/bayesian-pd-trials-og.png"
---

Proving that a drug slows Parkinson's disease is one of the hardest problems in clinical medicine. Not because we lack candidates. Not because trials are impossible to run. But because the question itself is structurally difficult: how do you distinguish a drug that genuinely changes the underlying disease from one that simply makes patients feel better while they take it?

In January 2026, the FDA issued a long-awaited draft guidance endorsing Bayesian statistical methods for use in clinical trials of drugs and biologics. A perspective in JAMA by Lee, Harrell, LaVange, and Spiegelhalter offers a lucid explanation of what this guidance means and why it matters. For movement disorders specialists, I think the implications deserve a closer look than the general clinical trial audience might give them.

---

**The disease modification problem**

When a patient takes levodopa, their symptoms improve. When they stop, the improvement fades. That is a symptomatic effect. A disease-modifying therapy would do something different: it would slow, halt, or reverse the underlying neurodegeneration. Symptoms might still improve, but the trajectory of the disease itself would change.

The difficulty is that you cannot directly observe neurodegeneration in real time. You observe its downstream effects: motor scores, cognitive tests, quality of life, biomarkers. And all of those can be influenced by symptomatic treatments as well.

The delayed-start design was developed specifically to navigate this problem. The logic is elegant. In Period 1, one group of patients receives active drug while the other receives placebo. In Period 2, everyone switches to active drug. If the drug is purely symptomatic, the two groups should converge once both are on treatment: the placebo group catches up. If the drug genuinely modifies disease, the group that started earlier maintains an advantage that cannot be explained by current treatment status alone. That persistent separation is evidence of disease modification.

The ADAGIO trial of rasagiline used this design, as did the PROUD trial of pioglitazone. The design has become the standard framework for disease modification claims in PD. Its logic is sound. Its execution is demanding.

---

**What Bayesian methods add**

The FDA guidance, and the JAMA perspective interpreting it, make a case that Bayesian inference solves several problems that frequentist methods handle awkwardly.

The central difference is what each framework actually answers. A frequentist p-value answers: "How unlikely is this data if the treatment does nothing?" A Bayesian posterior probability answers: "Given what we knew before and what this trial showed, what is the probability the treatment works?" For a clinician deciding whether to enroll patients in the next trial, or a regulator deciding whether to approve a drug, the Bayesian question is the one that matters.

In a delayed-start trial, the Bayesian framework does something particularly useful: it makes Period 1 data formally available as evidence for Period 2 analysis. The Period 1 results, showing whether early-treated patients diverged from placebo, become a prior distribution for the Period 2 analysis. This is not a trick. It is a principled way of using information you already have rather than discarding it and starting fresh.

The FDA guidance also clarifies that the prior does not have to be a leap of faith. It can be a pre-specified, transparent assumption that is subjected to sensitivity analysis. A skeptical prior centered at zero assumes the drug does nothing until proven otherwise. An informative prior centered on the Period 1 effect size reflects what you actually observed. The posterior shows you how much the data shifts your belief in each case.

The figure from the JAMA perspective illustrates this beautifully. Three distributions: the prior (what you believed going in), the data likelihood (what the trial observed), and the posterior (the synthesis). With a weak prior, the posterior tracks the data almost exactly. With a moderate prior aligned with the data, the posterior is tighter and more confident. The prior is a dial, not a distortion.

---

**Try it yourself**

The simulation below lets you explore this directly in the context of a delayed-start Parkinson's disease trial. The outcome is the sustained UPDRS-III advantage of the early-start group over the delayed-start group at trial end — the signal the design is built to detect.

Adjust the sliders to set your prior belief (informed by Period 1 data or prior trials), the Period 2 sample size, and the observed Period 2 effect. Watch how the three distributions respond and how the posterior probabilities update across the decision regions.

<iframe src="/tools/bayesian-delayed-start.html" width="100%" height="680" frameborder="0" style="border-radius:12px;border:1px solid #e3e5ea;margin:8px 0 24px;"></iframe>

A few things worth noticing. First, drag the sample size to 400 per arm and watch the likelihood narrow dramatically — at that scale, the prior barely matters. Second, set a skeptical prior and a modest observed effect: you still get a meaningful posterior probability of disease modification because the trial data carries real weight. Third, set a moderate prior informed by Period 1 data and a similar effect in Period 2: the posterior is considerably more confident than either source of information alone.

That last scenario is what the FDA guidance now formally enables: using Period 1 data as a prior rather than treating Period 2 as if Period 1 never happened.

---

**Why this is especially relevant for Parkinson's disease**

PD trials face a specific set of structural challenges that Bayesian methods are well-suited to address.

Sample sizes in PD trials are large and enrollment is slow. Any approach that allows principled use of existing data — from natural history cohorts like PPMI, from prior Phase 2 trials, from international registries — has the potential to reduce the sample size needed in Phase 3 without compromising rigor. The FDA guidance explicitly acknowledges this use case.

PD is also heterogeneous. Patients with GBA mutations have different trajectories than patients with LRRK2 mutations or idiopathic disease. Bayesian hierarchical models can borrow information across subgroups adaptively, sharpening estimates in smaller strata without requiring each to be independently powered. That is directly applicable to the biomarker-stratified trials that the field is beginning to run.

The disease modification question, which the delayed-start design is built to answer, is inherently a question about probability and direction of effect, not about rejecting a null hypothesis. "What is the probability that this drug slowed progression?" is a question the posterior can answer directly. "Is p less than 0.05?" is not the same question, and answering it does not answer the one that matters.

---

**What the guidance does not resolve**

Lee and colleagues are careful about this, and it deserves emphasis.

Bayesian methods do not make priors irrelevant — they make them explicit. A poorly chosen prior can bias a trial just as surely as a flawed randomization scheme. The FDA guidance requires that priors be prespecified, justified, and subjected to sensitivity analysis. That is the correct standard. It means more methodological work upfront, not less.

The guidance also does not lower the evidentiary bar for approval. A high posterior probability of efficacy still requires a well-designed trial, pre-specified endpoints, and transparent assumptions. The framework is more flexible. It is not more permissive.

For the delayed-start design specifically, the interpretive challenges remain. Sustained separation between groups at trial end is consistent with disease modification, but it can also reflect other mechanisms. The Bayesian framework quantifies uncertainty about the effect; it does not resolve mechanistic ambiguity.

---

For movement disorders specialists, this guidance is worth understanding now rather than waiting for the first Bayesian-designed PD trial to reach Phase 3. The methodological framework will shape how trials are designed, how interim analyses are conducted, and how evidence accumulates across a development program. The simulation above is meant to make the core logic tangible rather than abstract. The prior is not a guess. It is organized knowledge — from Period 1, from natural history, from prior trials — brought formally into the analysis where it belongs.

---

*Lee JJ, Harrell FE Jr, LaVange LM, Spiegelhalter DJ. Embracing Bayesian Methods in Clinical Trials: FDA's Long-Awaited Draft Guidance. JAMA. Published online March 23, 2026. [https://doi.org/10.1001/jama.2026.4179](https://doi.org/10.1001/jama.2026.4179)*
