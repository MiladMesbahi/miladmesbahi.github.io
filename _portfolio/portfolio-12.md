---
title: "Bayesian Optimization for Wide Landscapes (BOWL)"
excerpt: "Developed my own BayesOpt algo BOWL, combining Entropy‐SGD and Most Probable Descent (MPD) to find robust optima in black-box functions."
collection: portfolio
category: research
order: 2
completion_date: 2025-05-01
---
BOWL (Bayesian Optimization for Wide Landscapes) seeks robust optima—wide, flat basins that remain near-optimal under perturbations by combining Entropy-SGD with an MPD gradient oracle to guide black-box exploration.

### Highlights

- Hybrid local-entropy objective steers search toward flat regions.  
- MPD oracle (\(v^* \propto -\Sigma^{-1}\mu\)) picks descent directions from the GP posterior.  
- Benchmarks (Hartmann-3D, Levy, Branin) show faster convergence and improved robustness against noise.

### Limitations

- Not yet peer-reviewed—still in preprint form.  
- High computational cost from the inner Entropy-SGD loop.  
- Sensitive to tuning of Langevin-step sizes and GP update frequency. 

👉 [GitHub Repository](https://github.com/MiladMesbahi/BOWL) | 📄 [Full BOWL Report (PDF)](/files/BOWL_PAPER.pdf)  
