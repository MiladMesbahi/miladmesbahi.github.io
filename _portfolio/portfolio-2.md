---
title: "Autonomous Pick-and-Place System"
excerpt: "Robotic block stacking with AprilTag tracking and closed-loop control."
collection: portfolio
category: robotics
order: 2
completion_date: 2024-12-01
---
This was my first real robotics project at Penn GRASP. I built a vision‑guided pick‑and‑place system on a Franka Emika Panda arm that could spot, track, and stack both stationary and moving blocks. Using AprilTags and OpenCV for real‑time pose estimation, I fed those measurements into a closed‑loop control pipeline with pose correction, pseudoinverse IK, and gripper feedback to confirm successful grasps. In simulation, the system hit near‑perfect success on static blocks (by averaging multiple camera frames and re‑checking tags) and a strong success rate on dynamic blocks grabbed off a rotating platform with carefully timed sweeping motions.

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
