---
title: "Bayesian Optimization for Wide Landscapes (BOWL)"
excerpt: "Developed my own BayesOpt algo BOWL, combining Entropy‐SGD and Most Probable Descent (MPD) to find robust optima in black-box functions."
collection: portfolio
category: robotics
order: 2
completion_date: 2025-05-01
---
I spun up BOWL (Bayesian Optimization for Wide Landscapes - cool name ik!) as a researchy side project after reading Entropy-SGD and wondering how its “wide valleys” idea could be combined with Bayesian optimization in truly black-box settings. Since Bayesian "most probable descent" (MPD) gives you a way to approximate descent directions from a GP posterior (even without true gradients), you could theoretically plug that into an entropy-style inner loop and bias BayesOpt toward flat, robust basins instead of sharp, brittle optima.
<img src="/images/flat_min.png" alt="engine" class="content-image" />

I ended up building a hybrid algorithm where a GP + MPD-like gradient oracle feeds an Entropy-SGD–inspired Langevin inner loop, wrapped in a simple acquisition policy for global exploration. It seemed to work on classic toy problems/benchmarks in the BO space (Hartmann-3D, Levy, Branin) and does find good wide solutions, but it stayed mostly in low-dimensional, synthetic domains rather than becoming a fully practical optimizer. 

For me, BOWL mainly showcases how I like to connect ideas across papers and prototype new hybrids, and it’s something I’d be excited to revisit and push further down the line.

👉 [GitHub Repository](https://github.com/MiladMesbahi/BOWL) | 📄 [Full BOWL Report (PDF)](/files/BOWL_PAPER.pdf)  
