---
title: "An Autonomous VIO Quadrotor"
excerpt: "A fully autonomous quadrotor system integrating path planning, minimum-jerk trajectory generation, nonlinear control, and visual-inertial state estimation."
collection: portfolio
category: robotics
order: 1
completion_date: 2025-05-01
---

 <img src="/images/CrazyFlie20.jpg" alt="Rover 2" class="content-img"/>

This project involved designing and implementing an autonomous quadrotor capable of navigating complex, GPS-denied environments using onboard sensing and computation. The system integrated global A* path planning, flat-output trajectory generation, and a geometric SE(3) controller with visual-inertial state estimation via an error-state Kalman filter.

### Highlights

- **Planning**: Generated collision-free trajectories using a voxel-based A* search and sparse minimum-jerk polynomial fitting.
- **Control**: Tuned a nonlinear SE(3) controller to track aggressive maneuvers with aerodynamic drag compensation.
- **State Estimation**: Fused IMU and stereo vision data using an error-state Kalman filter for accurate 6-DOF pose tracking.
- **Extra Credit**: Added real-time local replanning with a two-mode state machine to dynamically avoid obstacles and recover from drift.

Results demonstrated high tracking accuracy across benchmark scenarios (EuRoC MAV datasets), with replanning improving robustness and reduced upfront planning time.

👉 [GitHub Repository](https://github.com/MiladMesbahi/Quadrotor) | 📄 [Full Report (PDF)](/files/Project_3_Report.pdf)



