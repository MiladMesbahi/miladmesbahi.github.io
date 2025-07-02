---
title: "Robotic Arm Manipulator Mechanical Design"
excerpt: "6 DoF Manufacturing Manipulator (CAD)"
collection: portfolio
category: engineering
order: 3
completion_date: 2022-06-01
---
As a final project in my Computer Aided Design (CAD) course at UCLA, I worked with a team of four to design a robotic manipulator inspired by the flexibility and adaptability of an octopus tentacle.

<div class="glider-contain">
  <div class="glider">
    <img src="/images/cad1.jpg" alt="Rover 2" class="content-image" />
    <img src="/images/cad3.jpg" alt="Rover 2 course" class="content-image" />
    <img src="/images/cad2.jpg" alt="Rover wiring" class="content-image" />
    <img src="/images/cad4.jpg" alt="Rover wiring" class="content-image" />
  </div>

  <button aria-label="Previous" class="glider-prev">«</button>
  <button aria-label="Next" class="glider-next">»</button>
  <div role="tablist" class="dots"></div>
</div>

### Highlights

- **Design Goals**:
  - Achieved 6 degrees of freedom
  - Emulated flexible, ball-joint-like motion
  - Maintained simplicity using axial and planar revolutions with Servo-Motor CAD

- **System Design**:
  - Five subassemblies: grabber, wrist, forearm, stand, and base
  - Combined off-the-shelf components with custom 3D-printed ABS parts

- **Manufacturing Considerations**:
  - Designed for cost-efficiency and ease of assembly
  - Lightweight (~3 kg) and low-cost (< $450) build

📄 [Final Report (PDF)](/files/MAE94FinalProjectReport.pdf)

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
