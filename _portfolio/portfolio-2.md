---
title: "Autonomous Pick-and-Place System"
excerpt: "Robotic block stacking with AprilTag tracking and closed-loop control."
collection: portfolio
---
Built a robotic pick-and-place system using the **Franka Emika Panda** arm, capable of handling both static and moving blocks.

<div class="glider-contain">
  <div class="glider">
    <img src="/images/hardware.png" alt="Rover 2" class="content-image" />
    <img src="/images/staticsim.png" alt="Rover 2 course" class="content-image" />
    <img src="/images/staticsim2.png" alt="Rover wiring" class="content-image" />
    <img src="/images/dynamicsim.png" alt="Rover wiring" class="content-image" />
  </div>

  <button aria-label="Previous" class="glider-prev">«</button>
  <button aria-label="Next" class="glider-next">»</button>
  <div role="tablist" class="dots"></div>
</div>

### Highlights

- **Object Detection**:
  - Used **AprilTags + OpenCV** to detect block poses in real time
  - Dynamically adjusted poses to align coordinate frames and avoid grasping failures

- **Control System**:
  - Closed-loop motion pipeline with:
    - Pose correction
    - Inverse kinematics (pseudoinverse method)
    - Gripper feedback for grasp validation

- **Static Blocks**:
  - Averaged multiple scans for noise rejection
  - Used re-scans and ID-verification for robustness
  - Achieved **100% grasp success rate** in simulation

- **Dynamic Blocks**:
  - Implemented pre-programmed **sweeping trajectories** for pickup on a rotating platform
  - Achieved **71.4% grasp success rate** in simulation with minimal computation

📄 [Full Project Report (PDF)](/files/Intro_to_Robo__Final_Project_Group_Report.pdf)


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
