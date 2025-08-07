---
title: "NASA JPL Internship Project"
excerpt: "Dynamical Evaluation of Novel Damping Mechanism for Shock Mitigation in Aerospace Applications"
collection: portfolio
category: work
order: 1
completion_date: 2023-09-01
---

During my internship at NASA JPL, I evaluated **chainmail solids**, a novel damping material developed by a CalTech research lab, as an advanced material for **shock mitigation and vibration damping** in aerospace applications. The work combined engineering testing, data analysis, and dynamics simulation and modeling to understand the chainmail’s behavior.

<div class="glider-contain">
  <div class="glider">
    <img src="/images/chain5.jpg" alt="Rover 2" class="content-image" />
    <img src="/images/chain2.jpg" alt="Rover 2 course" class="content-image" />
    <img src="/images/PSD2.png" alt="Rover wiring" class="content-image" />
    <img src="/images/PSD.png" alt="Rover wiring" class="content-image" />
    <img src="/images/FEM.png" alt="Rover wiring" class="content-image" />
  </div>

  <button aria-label="Previous" class="glider-prev">«</button>
  <button aria-label="Next" class="glider-next">»</button>
  <div role="tablist" class="dots"></div>
</div>

### Highlights

- **Experimental Design**
  - Built a custom vibrational testing setup using an electric shaker and 8 accelerometers  
  - Conducted random vibration tests from **20Hz to 2000Hz**  
  - Chainmail achieved up to **98% reduction in vibration transmissibility** at critical frequencies

- **Signal Processing & Analysis**
  - Developed MATLAB tools to compute **magnitude**, **phase**, **coherence**, **power spectral density**, and **mode shapes**  
  - Visualized and interpreted modal behaviors across axes  
  - Validated experimental results with **Finite Element Method (FEM) simulations**

- **Material Evaluation**
  - Compared chainmail to solid aluminum and other damping materials  
  - Demonstrated strong performance in energy attenuation under dynamic excitation  
  - Investigated chainmail’s **tunability** and **rotational/translational modal behavior**

- **Applications**
  - Findings suggest chainmail structures are highly promising for aerospace vibration control  
  - Further opportunities exist in multi-axis damping and adaptive structural design

📄 [Final Report (PDF)](/files/JPLFinalReport.pdf)


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
