---
title: "Autonomous Rovers"
excerpt: "Hands-on development of two autonomous ground vehicles."
collection: portfolio
---

Over the course of my undergraduate studies at UCLA, I worked on two autonomous rover projects that shaped my early
foundation in robotics. 

### 1. Senior Capstone Project
<div class="glider-contain">
  <div class="glider">
    <img src="/images/rover2.jpg" alt="Rover 2" class="content-image" />
    <img src="/images/rover2course.png" alt="Rover 2 course" class="content-image" />
    <img src="/images/wiring.png" alt="Rover wiring" class="content-image" />
  </div>

  <button aria-label="Previous" class="glider-prev">«</button>
  <button aria-label="Next" class="glider-next">»</button>
  <div role="tablist" class="dots"></div>
</div>

For my undergraduate capstone, I was the **mechanical lead** and **co-lead programmer**, 
for an advanced autonomous rover built over two quarters in a team of 5.  

**The challenge:** Navigate a black-line course, avoid obstacles, climb a hill, and pick up/stack numbered discs ("burger patties") based on dice rolls — all autonomously and under 5 minutes.

#### System Overview:
- **Drive System**: 4-wheel mecanum drive for full omnidirectional motion
- **Manipulator**: Stepper-driven vertical carriage and dual-servo laser-cut claw for stacking
- **Perception**:
  - IR Sensor Array for line-following and intersection detection
  - Ultrasonic Sensor for obstacle avoidance
  - Camera + Raspberry Pi Zero 2 W for dice number detection** via OpenCV
- **Controls**:
  - Dual-Arduino architecture to split control and perception logic
  - Custom finite state machine for real-time sequencing of navigation, pick-up, and delivery tasks

#### Notable Achievements:
- Only team to implement camera-based die recognition**
- Successfully completed full challenge with functional delivery and stacking
- Designed within a $500 budget, using V-slot aluminum extrusion and modular acrylic mounts

📄 [Final Presentation PDF](/files/MAE%20162E%20FINAL%20PRESENTATION.pdf)

### 2. Pink Lemonade (Intro Robotics Project)

<img src="/images/auto1.jpg" alt="Pink Lemonade Rover" class="content-img" />

This was my first hands-on robotics experience. Our team built an autonomous rover designed to navigate a basic obstacle
course and retrieve a cylindrical object.

Key features included:
- Rubberized claw for cylindrical object retrieval
- Autonomous navigation via optimized Arduino logic
- Rapid prototyping with Prusa Slicer and UCLA makerspace tools

I led the mechanical design using SolidWorks, creating a chassis that integrated all major components — sensors, motors,
battery pack, and claw. Most parts were custom-fabricated using 3D printing and laser cutting at UCLA's fabrication lab, which also ended up being an introduction to additive manufacturing as well.

Overall, we finished **2nd** in the competition out of 8 other UCLA teams.



