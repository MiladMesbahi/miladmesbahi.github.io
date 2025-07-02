---
title: "Arduino-based Guitar Tuner"
excerpt: "Guitar Tuner Built From Scratch Using Physics Principles"
collection: portfolio
category: engineering
order: 7
completion_date: 2021-12-01
---

### Guitar Tuner — Signal Processing with Arduino + Python

Built a guitar tuner using physics-based signal analysis, Python, and an Arduino with a microphone input to detect and evaluate guitar string frequencies.

<div class="glider-contain">
  <div class="glider">
    <img src="/images/maintune.png" alt="Rover wiring" class="content-image" />
    <img src="/images/tuner2.jpg" alt="Rover 2 course" class="content-image" />
    <img src="/images/tuner3.jpg" alt="Rover wiring" class="content-image" />
  </div>

  <button aria-label="Previous" class="glider-prev">«</button>
  <button aria-label="Next" class="glider-next">»</button>
  <div role="tablist" class="dots"></div>
</div>

### Highlights

- **Signal Capture**: Used Arduino + microphone to record sound waves in real time.
- **Frequency Analysis**: Applied Fast Fourier Transforms (FFT) in Python to extract dominant frequencies and identify note pitches.
- **Accuracy**:
  - Successfully identified most guitar strings with good precision.
  - Slightly underestimated low E (82.4 Hz), resulting in consistently flat readings.

📄 [Final Report (PDF)](/files/ArduinoBasedGuitarTuner.pdf)

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
