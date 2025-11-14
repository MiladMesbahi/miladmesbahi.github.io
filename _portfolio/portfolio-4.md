---
title: "NASA JPL Internship Project"
excerpt: "Dynamical Evaluation of Novel Damping Mechanism for Shock Mitigation in Aerospace Applications"
collection: portfolio
category: work
order: 1
completion_date: 2023-09-01
---

I was tasked with evaluating chainmail solids, a novel damping material developed by a CalTech research lab, for its potential to mitigate shocks and vibrations in aerospace systems. My project spanned hands-on engineering, data analysis, and dynamic model building and simulation to understand how the material performs in aerospace conditions.

<div class="glider-contain">
  <div class="glider">
    <img src="/images/chain5.jpg" alt="Rover 2" class="content-image" />
    <img src="/images/chainmail_hand.png" alt="Rover 2 course" class="content-image" />
    <img src="/images/PSD2.png" alt="Rover wiring" class="content-image" />
    <img src="/images/PSD.png" alt="Rover wiring" class="content-image" />
    <img src="/images/FEM.png" alt="Rover wiring" class="content-image" />
  </div>

  <button aria-label="Previous" class="glider-prev">«</button>
  <button aria-label="Next" class="glider-next">»</button>
  <div role="tablist" class="dots"></div>
</div>

### Highlights
- Designed a vibrational testing setup for randomized shaking and multi-axis measurement.
- Analyzed modal behavior through MATLAB for signal analysis, dissecting magnitude, phase, coherence, and power spectral density. I also built custom scripts to actually visualize the real modal responses.
- Created and validated a finite element model of the chainmail and test setup.
- Benchmarked chainmail’s damping properties against standard aerospace materials.
- Presented findings with JPL’s dynamics team, highlighting chainmail's promise for vibration control and inspiring discussions on adaptive structures for space applications.

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
