---
title: "MARL-AUV for Spatiotemporal Mapping"
excerpt: "Multi-agent reinforcement learning for spatiotemporal mapping of dynamic coastal plumes."
collection: portfolio
category: research
order: 1
completion_date:
---

**ICRA-26 submission accepted!**

We study how fleets of AUVs can map the Douro River plume over multiple days while dealing with strong currents, limited batteries, and intermittent communication. Using years of high‑resolution Delft3D simulations of the Douro estuary as our testbed, we combine an Gaussian process salinity model with a multi‑head deep Q‑network that decides, for each AUV, both where to go and how fast to travel. The policy learns to trade off information gain and energy, enabling multi‑robot teams that both reduce mapping error and perform long‑term environmental monitoring.

Our ICRA 2026 work shows consistent gains over single‑robot and multi‑robot baselines across unseen months and years in the dataset. Ongoing work includes extending from 2D surface maps to 3D fields, testing on real LAUVs, replacing the current GP architecture with more scalable learned models, and digging deeper into multi‑agent communication and credit assignment.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 1em auto;">
  <iframe 
    src="https://www.youtube.com/embed/PeT4anrqZY4?autoplay=1&mute=1" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
  </iframe>
</div>