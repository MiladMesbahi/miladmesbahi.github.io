---
title: "Autonomous Pick-and-Place System"
excerpt: "Robotic block stacking with AprilTag tracking and closed-loop control."
collection: portfolio
category: robotics
order: 2
completion_date: 2024-12-01
---
Developed a robotic **pick-and-place system** using the **Franka Emika Panda** arm capable of identifying, tracking, and stacking both stationary and moving blocks. The project integrated computer vision, motion planning, and feedback control for robust and adaptive manipulation.

<div class="glider-contain">
  <div class="glider">
    <img src="/images/hardware.png" alt="Pick-and-place hardware setup" class="content-image small-img" />
    <img src="/images/staticsim.png" alt="Static simulation results" class="content-image small-img" />
    <img src="/images/staticsim2.png" alt="Simulation environment" class="content-image small-img" />
    <img src="/images/dynamicsim.png" alt="Dynamic grasp simulation" class="content-image small-img" />
  </div>

  <button aria-label="Previous" class="glider-prev">«</button>
  <button aria-label="Next" class="glider-next">»</button>
  <div role="tablist" class="dots"></div>
</div>

### Highlights

- Object Detection
  - Employed AprilTags and OpenCV for real-time block pose estimation  
  - Dynamically adjusted alignment to reduce grasping errors

- Control System
  - Implemented a closed-loop pipeline integrating:
    - Pose correction  
    - Pseudoinverse-based inverse kinematics  
    - Gripper force feedback for grasp validation  

- Static Block Handling
  - Averaged multiple visual frames to reduce sensor noise  
  - Re-verified block identity before each grasp  
  - Achieved 100% grasp success in simulation

- Dynamic Block Handling
  - Designed pre-programmed sweeping trajectories for pickup from a rotating platform  
  - Achieved 71.4% success rate with minimal latency in simulation 

👉 [GitHub Repository](https://github.com/MiladMesbahi/Robot-Arm-Manipulation) | 📄 [Full Project Report (PDF)](/files/Intro_to_Robo__Final_Project_Group_Report.pdf)


<script>
  window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
      slidesToShow: 1,
      dots: '.dots',
      draggable: true,
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      }
    });
  });
</script>
