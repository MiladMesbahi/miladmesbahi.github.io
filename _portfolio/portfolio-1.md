---
title: "An Autonomous VIO Quadrotor"
excerpt: "A fully autonomous quadrotor system integrating path planning, minimum-jerk trajectory generation, nonlinear control, and visual-inertial state estimation."
collection: portfolio
category: robotics
order: 1
completion_date: 2025-05-01
---

 <img src="/images/CrazyFlie20.jpg" alt="Rover 2" class="content-img"/>

This project was about getting a quadrotor to fly on its own through cluttered spaces without GPS, using only its onboard cameras and IMU. I tied together global planning, smooth trajectory generation in the quadrotor’s differentially flat space, low-level control, and visual–inertial state estimation into one end-to-end system, then added real-time replanning so the drone could react to obstacles and drift as it flew.

+ Planned collision-free 3D paths on a voxel map, then converted them into minimum-jerk 5th-order polynomial trajectories in the flat outputs.

+ Tuned a nonlinear SE(3) controller (with simple drag compensation) to track fast, agile motions.

+ Fused stereo vision and IMU data with an error-state Kalman filter to estimate the drone’s full 6-DOF pose without GPS.

+ Added a real-time local replanning state machine that detects impending collisions or drift and quickly switches the drone onto a freshly computed short-horizon path.

Results demonstrated high tracking accuracy across benchmark scenarios (EuRoC MAV datasets), with replanning improving robustness and reduced upfront planning time.

👉 [GitHub Repository](https://github.com/MiladMesbahi/Quadrotor) | 📄 [Full Report (PDF)](/files/Project_3_Report.pdf)



