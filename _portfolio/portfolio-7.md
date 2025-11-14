---
title: "UCLA Thermoscience Research"
excerpt: "Researched the Fluid Dynamics of String Mass Exchangers in Liquid Desiccant Applications"
collection: portfolio
category: research
order: 3
completion_date: 2024-06-01
---
Served as lead undergraduate researcher at UCLA’s **Thermosciences Laboratory** under Dr. Sungtaek Ju, investigating how string tension, material properties, and morphology influence the flow behavior of liquid desiccants in string-based mass exchangers.  The work focused on understanding capillary-driven film formation, droplet coalescence, and transport efficiency for energy-efficient dehumidification systems.

<div class="glider-contain">
  <div class="glider">
    <img src="/images/lab1.png" alt="String tension apparatus" class="content-image small-img" />
    <img src="/images/lab2.png" alt="Droplet tracking and analysis" class="content-image small-img" />
  </div>

  <button aria-label="Previous" class="glider-prev">«</button>
  <button aria-label="Next" class="glider-next">»</button>
  <div role="tablist" class="dots"></div>
</div>

### Highlights

- **Experimental Design & Execution**
  - Built a fully controlled setup to measure tension in cotton strings, including 3D printed and laser cut parts through the UCLA maker space.  
  - Ran stress tests to to quantify how tension alters bead formation, spacing, and motion.
  - Highlighted a previously overlooked variable (string tension) that did have an impact on fluid flow.

- **Automation & Analysis**
  - Developed MATLAB image processing algorithms to capture string curvature and automate droplet tracking  
  - Enabled faster, more consistent quantification of fluid behavior across multiple trials
  - Helped create lab tutorial videos for future researchers to use for reference.   

👉 [GitHub Repository](https://github.com/MiladMesbahi/Thermoscience-Laboratory-MatLab-Processing) | 

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
<script>
  window.addEventListener('load', function() {
    const imgs = document.querySelectorAll('.glider img.content-image');
    const updateSizes = () => {
      const w = window.innerWidth;
      imgs.forEach(img => {
        img.style.height = 'auto';
        img.style.margin = '0.6rem auto';
        img.style.display = 'block';
        img.style.borderRadius = '6px';
        img.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.05)';

        // 📱 Mobile (under 768px)
        if (w < 768) {
          img.style.width = '50%';
          img.style.maxWidth = '50%';
        }
        // 💻 Tablet (768–1200px)
        else if (w < 1500) {
          img.style.width = '40%';
          img.style.maxWidth = '40%';
        }
        // 🖥️ Desktop (1200px and up)
        else {
          img.style.width = '28%';
          img.style.maxWidth = '28%';
        }
      });
    };

    updateSizes();
    window.addEventListener('resize', updateSizes);
  });
</script>

