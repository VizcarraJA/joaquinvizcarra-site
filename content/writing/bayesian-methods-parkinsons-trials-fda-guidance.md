---
title: "The FDA's New Bayesian Guidance and the Hardest Question in Parkinson's Trials"
date: "2026-03-24"
description: "The FDA's new Bayesian guidance changes what clinical trials can ask and answer. For Parkinson's disease, where proving disease modification has always been the hardest problem, this matters more than most."
ogImage: "/images/bayesian-pd-trials-og.png"
---

Proving that a drug slows Parkinson's disease is structurally hard in a way most clinical problems aren't. Symptomatic improvement and disease modification look nearly identical in a short trial. A drug that makes patients feel better for 18 months may or may not be doing anything to the underlying neurodegeneration, and conventional trial designs struggle to tell the difference.

The FDA issued a draft guidance on Bayesian methods for clinical trials back in January. Yesterday, a perspective in JAMA from Lee, Harrell, LaVange, and Spiegelhalter offered a lucid response to it. For PD specifically, I think the guidance has more targeted implications than either piece makes explicit.

---

**The disease modification problem**

When a patient starts levodopa, symptoms improve. When they stop, the improvement fades. That is symptomatic. Disease modification would look different: the underlying trajectory changes, not just the current symptom level. The problem is that you measure both through the same signals, MDS-UPDRS scores, gait, cognition, biomarkers, and those signals respond to symptomatic treatment too.

The delayed-start design was developed to separate these two things. In Period 1, one group starts active drug while the other takes placebo. In Period 2, both groups are on drug. If the effect is purely symptomatic, the groups converge: the late starters catch up once they begin treatment. If the drug modifies disease, the early starters hold an advantage that persists beyond what current treatment explains. Appealing on paper. In practice it is hard to execute and even harder to interpret cleanly.

ADAGIO applied this to rasagiline. LEAP applied it to levodopa, 445 patients, 80 weeks. Both groups converged by the end. Levodopa treats symptoms and leaves disease trajectory unchanged. That result is worth sitting with: if the most effective drug in PD fails the disease modification test, the bar for the next candidate is real. A Bayesian analysis of LEAP would have produced a posterior centered near zero, and that is exactly what a skeptical prior for the next trial should reflect.

---

**What Bayesian methods add**

A frequentist p-value tells you whether observed data would be unlikely if the treatment had no effect. A Bayesian posterior tells you what you should now believe about the treatment effect, given what you knew before the trial and what the trial showed. These are related but genuinely different questions. The second is the one that matters when deciding whether to approve a drug or enroll patients in a Phase 3.

In a delayed-start trial, Bayesian analysis can do something the frequentist approach handles poorly: it lets Period 1 results function as a prior for Period 2. The data you already collected informs the analysis of the data you are collecting, rather than being set aside. The FDA guidance formalizes this under specific requirements: the prior must be prespecified in the protocol, justified with supporting evidence, and subjected to sensitivity analysis. It is more methodological work, not less.

The figure in the JAMA paper makes the mechanics visible. Three distributions: prior, likelihood, posterior. With a weak prior, the posterior follows the data. With a stronger prior, it pulls. The prior is a dial. Where you set it depends on what you actually know before the trial starts, and the guidance is explicit that "I'll figure it out later" is not acceptable.

---

**Try it yourself**

The simulation has two modes. The first is a symptomatic efficacy trial measuring MDS-UPDRS improvement over placebo. The second is a delayed-start disease modification trial asking whether the early-start group holds a persistent advantage at the end of Period 2.

<iframe src="/tools/bayesian-delayed-start.html" width="100%" height="700" frameborder="0" style="border-radius:12px;border:1px solid #e3e5ea;margin:8px 0 24px;"></iframe>

Try the skeptical preset in the disease modification mode. Even with a prior centered at zero, a large enough observed effect shifts the posterior substantially. Then push sample size to 400 per arm and watch the prior become nearly irrelevant. That tension, how much the prior matters at different sample sizes, is the central practical question for any sponsor considering this design. Most early PD trials are small. The prior carries real weight there.

---

**Why this is especially relevant for Parkinson's disease**

The FDA guidance explicitly covers using natural history data to augment concurrent control arms (Section III.B). PPMI has tracked thousands of patients with longitudinal MDS-UPDRS, biomarkers, and genetic stratification for over a decade. Formally incorporating those trajectories into the prior for a Phase 3 control arm could reduce the randomized sample size without changing the evidentiary standard. The REBYOTA approval in 2022 established the precedent: the Phase 3 analysis formally borrowed from Phase 2, and it held up at review.

The guidance also endorses skeptical priors when there have been "a number of failed trials or drug development programs for closely related drugs in a therapeutic area." CoQ10. Creatine. GDNF. LEAP. The field has not run out of candidates, but it has accumulated a meaningful prior. A skeptical prior formalizes that history rather than pretending it does not exist.

PD is also genetically heterogeneous in ways that compound the sample size problem. A trial powered for idiopathic disease may be dramatically underpowered in GBA-PD or LRRK2-PD. Bayesian hierarchical models can borrow information across subtypes adaptively. Section III.D of the guidance covers this directly, and I think this is probably the most underappreciated application in the field right now. Most current genetic subtype trials are too small to be definitive on their own. A hierarchical framework that borrows intelligently across related populations might change that.

The disease modification question is also fundamentally probabilistic. "What is the probability this drug slowed progression?" is what we want to know. A posterior answers it. A p-value answers something related but different, and the translation is rarely as clean as it looks in a paper.

---

**What the guidance leaves open**

Bayesian methods make priors explicit and consequential. A poorly specified prior can bias a trial as readily as bad randomization. The FDA guidance requires prespecification, justification, and sensitivity analysis. That is the right standard. It means a sponsor thinking about Bayesian design has to do the hard prior elicitation work during design, not after unblinding.

The evidentiary bar for approval stays the same. A high posterior probability still requires a well-designed trial, prespecified endpoints, and transparent assumptions. More flexible statistical machinery is not the same as a lower regulatory threshold.

The interpretive challenge for delayed-start persists regardless of the statistical framework. Sustained group separation at trial end is consistent with disease modification. It is also consistent with carry-over effects, practice effects, and differential dropout. Bayesian analysis quantifies uncertainty about the effect size. The mechanistic question requires other evidence.

One substantial gap: endpoints. The guidance says nothing about whether MDS-UPDRS, clinical global impression, neurofilament light chain, alpha-synuclein, or DaT imaging are appropriate for disease modification claims in PD. That stays in the domain of disease-specific guidances and pre-IND discussions. The statistical framework and the outcome measure question are separate problems, and the guidance only addresses one of them.

---

Movement disorders specialists will encounter Bayesian-designed PD trials before long. The framework will affect how interim analyses run, how evidence accumulates across a development program, and how data from PPMI and genetic substudies gets used formally rather than informally. The simulation above is meant to make the mechanics visible. The prior is organized knowledge from Period 1, from natural history, from prior trials, brought into the analysis where it belongs.

---

*Lee JJ, Harrell FE Jr, LaVange LM, Spiegelhalter DJ. Embracing Bayesian Methods in Clinical Trials: FDA's Long-Awaited Draft Guidance. JAMA. Published online March 23, 2026. [https://doi.org/10.1001/jama.2026.4179](https://doi.org/10.1001/jama.2026.4179)*

*Verschuur CVM, Suwijn SR, Boel JA, et al. Randomized Delayed-Start Trial of Levodopa in Parkinson's Disease. N Engl J Med. 2019;380:315–324. [https://doi.org/10.1056/NEJMoa1809983](https://doi.org/10.1056/NEJMoa1809983)*
