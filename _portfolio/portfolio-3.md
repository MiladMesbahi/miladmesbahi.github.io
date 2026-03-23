---
title: "Autonomous Rovers"
excerpt: "Hands-on development of two autonomous ground vehicles."
collection: portfolio
category: robotics
order: 3
completion_date: 2024-06-01
---
### 1. Senior Capstone Project
<div class="glider-contain">
  <div class="glider">
    <img src="/images/rover2.jpg" alt="Rover 2" class="content-image" />
    <img src="/images/rovercap.png" alt="Rover wiring" class="content-image" />
    <img src="/images/rover2course.png" alt="Rover 2 course" class="content-image" />
    <img src="/images/rovercap3.png" alt="Rover wiring" class="content-image" />
    <img src="/images/wiring.png" alt="Rover wiring" class="content-image" />
  </div>

  <button aria-label="Previous" class="glider-prev">«</button>
  <button aria-label="Next" class="glider-next">»</button>
  <div role="tablist" class="dots"></div>
</div>

For my undergrad capstone, I was the mechanical lead and co‑lead programmer on a fully autonomous rover built over two quarters with a team of five. The challenge was to follow a black‑line course with curves, ramps, and obstacles, stacking numbered discs (representing burger patties 🙂) based on dice rolls, survive a 6‑inch drop, and still finish the course in under five minutes.

We used a 4‑wheel mecanum drive for full omnidirectional motion, a stepper‑driven vertical carriage with a dual‑servo laser‑cut claw for stacking, and IR + ultrasonic sensing for line following and obstacle avoidance. I helped design a dual‑Arduino architecture and a custom finite state machine to coordinate navigation, pickup, and delivery, and we were the only team to add a camera + Raspberry Pi Zero 2 W running OpenCV to read the dice automatically (rather than manually program it in). The whole system came together within a 500 dollar budget using V‑slot extrusion and modular acrylic mounts.

👉 [Code Available upon Request] | 📄 [Final Presentation PDF](/files/MAE%20162E%20FINAL%20PRESENTATION.pdf)

### 2. Pink Lemonade (Intro Robotics Project)

<img src="/images/auto1.jpg" alt="Pink Lemonade Rover" class="content-img" />

This was my first real hands-on robotics project (what really got me excited about the field)! Our team built a small autonomous rover to navigate a simple obstacle course and retrieve a cylindrical object. I led the mechanical design in SolidWorks, laying out a chassis that cleanly integrated sensors, motors, the battery, and a rubberized gripper, and fabricated most parts with 3D printing and laser cutting at the UCLA makerspace. On the software side, we used an Arduino with ultrasonic sensing for basic autonomous navigation.

We ended up placing 2nd out of 8 teams, and it was a great first taste of end‑to‑end robot design.

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
