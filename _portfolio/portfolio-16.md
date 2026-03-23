---
title: "Safe Set Learning for Black-Box Robot Systems"
excerpt: "Dual Gaussian process control barrier framework for safe exploration."
collection: portfolio
category: robotics
order: 1
completion_date: 2025-12-02
---
I came up with this project idea by asking how we should think about safety when our models are wrong or incomplete, which is almost always the case on real robots. I liked that control barrier functions give really nice theory and are widely used, but I wanted to see if you could keep that structure while letting experience drive what “safe” actually means instead of relying on fixed hand‑tuned rules.

We used a dual‑GP setup: one GP learns the dynamics residual so the safety filter reasons over a corrected model with uncertainty, and a second GP learns a barrier‑like safety score from rollouts, capturing how the safe set tightens near boundaries or under disturbances. Together they feed a robust CBF QP that filters any nominal controller online, plus a SafeOpt‑style Bayesian optimizer that probes the current safe frontier to slowly grow the certified safe region.

<img src="/images/safety.png" alt="engine" class="content-image" />

In a simple 1D double‑integrator with unknown wind, this combo adapted to the model mismatch, expanded the verified safe set over episodes, and avoided constraint violations, beating both plain LQR and a mismatched analytic CBF. The main challenge is still how we label “safe vs. unsafe” for the barrier GP without crashing anything (right now it's a bit heuristic and relies on decent prior information) but the results were promising enough that I’d like to revist this line of work later.


👉 [Code Available upon Request]| 📄 [Full Report (PDF)](/files/SafeSet.pdf)
