---
title: "MATLAB Quarter Car Model Controls"
excerpt: "Active Suspension System Design using MATLAB and Simulink"
collection: portfolio
category: engineering
---

### Active Suspension System — Quarter-Car Model (MATLAB + Simulink)

Designed a feedback controller for an active car suspension system using MATLAB and Simulink, with the goal of minimizing vehicle oscillations and thus enhance theoretical passenger comfort.

<div class="glider-contain">
  <div class="glider">
    <img src="/images/control0.jpg" alt="Rover 2" class="content-image" />
    <img src="/images/control1.jpg" alt="Rover 2 course" class="content-image" />
    <img src="/images/control2.jpg" alt="Rover wiring" class="content-image" />
    <img src="/images/control3.jpg" alt="Rover wiring" class="content-image" />
    <img src="/images/control4.jpg" alt="Rover wiring" class="content-image" />
  </div>

  <button aria-label="Previous" class="glider-prev">«</button>
  <button aria-label="Next" class="glider-next">»</button>
  <div role="tablist" class="dots"></div>
</div>

**Key Highlights**

- **System Modeling**: Constructed a quarter-car model and derived transfer functions using Laplace transforms to represent the relationship between actuator input, disturbance forces, and system response.
- **Control Design**: Applied classical control methods -> Bode plots, Nyquist diagrams, and root locus—to develop controllers that met performance specs (e.g., <5% overshoot, <1s settling time).
- **Simulation & Optimization**:
  - Used MATLAB’s SISOTOOL for fine-tuning the compensator.
  - Achieved smooth system responses to road disturbances with minimal residual oscillations.

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
