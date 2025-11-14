---
title: "Bayesian Optimization for Wide Landscapes (BOWL)"
excerpt: "Developed my own BayesOpt algo BOWL, combining Entropy‐SGD and Most Probable Descent (MPD) to find robust optima in black-box functions."
collection: portfolio
category: robotics
order: 2
completion_date: 2025-05-01
---
The idea behind is BOWL (Bayesian Optimization for Wide Landscapes) is to extend the Bayesian Optimization algorithm MPD to actively seek optima that exist in wide, flat basins (and hence robust) by combining Entropy-SGD with MPD's gradient oracle to guide black-box exploration.

<img src="/images/flat_min.png" alt="engine" class="content-image" />

### Highlights

- Introduces a hybrid local-entropy objective that steers soptimization toward flat, stable regions of the posterior surface. 
- MPD oracle derived from the GP posterior suggests descent directions that reflect landscape uncertainty.  
- Benchmarks (Hartmann-3D, Levy, Branin) show convergence and robustness against noise.

### Limitations

- Not peer-reviewed; still in preprint form. Needs tuning.
- High computational cost from the inner Entropy-SGD loop.  
- Sensitive to tuning of Langevin-step sizes and GP update frequency. 

👉 [GitHub Repository](https://github.com/MiladMesbahi/BOWL) | 📄 [Full BOWL Report (PDF)](/files/BOWL_PAPER.pdf)  
