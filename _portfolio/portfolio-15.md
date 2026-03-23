---
title: "Reinforcement Learning Drone Racing"
excerpt: "End-to-End Proximal Policy Optimization (PPO) for Autonomous High-Speed Gate Navigation."
collection: portfolio
category: robotics
order: 1
completion_date: 2025-12-04
---

I built an end-to-end reinforcement learning system that teaches a quadrotor to race through a sequence of gates at high speed using a custom Proximal Policy Optimization (PPO) setup in NVIDIA Isaac Sim. The policy maps simulated onboard observations directly to motor commands, learning smooth, directional, and crash-free flight over multiple laps.

<img src="/images/drone_racing.png" alt="engine" class="content-image" />

I implemented PPO from scratch (with clipping, GAE, and KL control), designed a compact gate-relative observation space, and crafted dense + sparse rewards for progress, heading alignment, and clean gate passes. I also added a curriculum-style reset scheme that randomizes which gate the drone starts near and its position/heading around that gate, plus domain randomization over thrust-to-weight, drag, and inner-loop gains at each reset, so the policy becomes robust to changing dynamics and better suited for sim-to-real transfer.

👉 [GitHub Repository](https://github.com/MiladMesbahi/Drone-Racing-RL)
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 1em auto;">
  <iframe 
    src="https://www.youtube.com/embed/tzjplSZInUk"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
  </iframe>
</div>


