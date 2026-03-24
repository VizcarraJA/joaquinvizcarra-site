# LinkedIn Post — Bayesian FDA Guidance & PD Trials
**Scheduled: Monday, March 31, 2026**
**Format: Image attached + link in first comment**

---

I built an interactive Bayesian clinical trial simulator for Parkinson's disease. Two modes: a standard symptomatic efficacy trial and a delayed-start disease modification trial. Change the prior, adjust the sample size, watch the posterior shift in real time.

It's embedded in the article linked below.

I built it because the FDA just issued draft guidance formally endorsing Bayesian methods for clinical trials, and I think the implications for PD are more specific than the general statistics framing suggests. The simulator makes the mechanics tangible rather than abstract.

Three things in the actual guidance that caught my attention:

**1. Skeptical priors are formally endorsed. PD fits the stated rationale exactly.**
The document says skeptical priors are appropriate when "there have been a number of failed trials for closely related drugs in a therapeutic area." That is the history of PD neuroprotection. CoQ10, creatine, GDNF. LEAP showed in 2019 that even levodopa treats symptoms without modifying disease. A formal skeptical prior means the data has to overcome that track record, not just beat a null.

**2. Natural history data can augment control arms.**
Section III.B of the guidance covers using external data to supplement randomized controls. PPMI, with its decade of longitudinal MDS-UPDRS, biomarkers, and genetic stratification, is the obvious candidate for exactly this. Smaller randomized control arms, same evidentiary standard.

**3. Borrowing across GBA-PD, LRRK2-PD, and idiopathic disease is explicitly in scope.**
Section III.D covers Bayesian hierarchical models across disease subtypes. Each subgroup doesn't need to be independently powered. The model borrows adaptively.

Full commentary + simulator in first comment.

---

**[FIRST COMMENT]**
Full article + simulation: https://joaquinvizcarra.com/writing/bayesian-methods-parkinsons-trials-fda-guidance
