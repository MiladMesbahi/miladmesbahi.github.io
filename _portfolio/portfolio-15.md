---
title: "Reinforcement Learning Drone Racing"
excerpt: "End-to-End PPO Policy Design for Autonomous High-Speed Gate Navigation."
collection: portfolio
category: robotics
order: 1
completion_date: 2025-12-04
---

I developed an end-to-end reinforcement learning pipeline that trains a quadrotor to race through sequential gates using a custom Proximal Policy Optimization (PPO) implementation in NVIDIA Isaac Sim. This involved writing PPO from scratch, designing a compact but expressive reward function, building a gate-relative observation space, and implementing a domain-randomized reset strategy to enable stable, fast, and directionally-aware flight. By randomizing dynamics parameters (thrust-to-weight, drag, and inner-loop gains), the policy learns behaviors that generalize for sim-to-real transfer. The resulting controller achieves smooth, consistent, and collision-free multi-lap performance.

<img src="/images/drone_racing.png" alt="engine" class="content-image" />

### Highlights

- Implemented PPO from first principles with clipped objective, GAE, and adaptive KL-penalty.
- Achieved an average lap time of 5.72 seconds with no crashes.
- Designed dense + sparse rewards for progress, heading alignment, and accurate gate-pass detection.
- Built a gate-frame observation space for geometric awareness and stable high-speed navigation.
- Added domain randomization to strengthen sim-to-real transfer.

📽️ Watch the drone in action!
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 1em auto;">
  <iframe 
    src="https://youtu.be/tzjplSZInUk" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
  </iframe>
</div>