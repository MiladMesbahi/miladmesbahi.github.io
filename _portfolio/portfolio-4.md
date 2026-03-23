---
title: "NASA JPL Internship Project"
excerpt: "Dynamical Evaluation of Novel Damping Mechanism for Shock Mitigation in Aerospace Applications"
collection: portfolio
category: work
order: 1
completion_date: 2023-09-01
---

This was my first engineering internship, and it was a really fun one! I spent the summer at NASA JPL testing “chainmail solids,” a tunable damping material from Professor Chiara Daraio’s lab at Caltech, to see if it could help protect spacecraft hardware from shocks and vibrations. The cool part is that the material behavior is tunable and compliant, so the idea is to build structures that adapt instead of relying only on traditional mounts and dampers. 

I designed and ran vibration tests with randomized shaking and multi‑axis sensing, wrote MATLAB scripts to dig into the frequency response (magnitude, phase, coherence, PSD), and built an FEA model of the chainmail and test setup to line up simulation and experiment. 
<div class="glider-contain">
  <div class="glider">
    <img src="/images/chainmail_hand.png" alt="Rover 2 course" class="content-image" />
    <img src="/images/chain5.jpg" alt="Rover 2" class="content-image" />
    <img src="/images/FEM.png" alt="Rover wiring" class="content-image" />
  </div>

  <button aria-label="Previous" class="glider-prev">«</button>
  <button aria-label="Next" class="glider-next">»</button>
  <div role="tablist" class="dots"></div>
</div>

Big thank you to Dr. Ali Kolaini and my mentor Sean Pham, who gave me a lot of trust and guidance and really showed me how all the dynamics and vibrations concepts from class show up in real hardware. It was a great first look at what mechanical engineering and test work actually feel like in industry.

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
