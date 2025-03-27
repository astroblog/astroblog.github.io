document.addEventListener("DOMContentLoaded", function () {
 
  let slides = document.querySelectorAll(".slideshow .slide");
  let totalSlides = slides.length;
  let index = 0;
  let playing = false;
  let slideshowTimeout;
  let button = document.getElementById("slideshowControl");
  let prevButton = document.getElementById("prevSlide");
  let nextButton = document.getElementById("nextSlide");
  let defaultInterval = 1000; // Default slide duration

  if (!button || !prevButton || !nextButton || slides.length === 0) {
    console.error("❌ ERROR: One or more elements not found. Check HTML structure.");
    return;
  }

  function showSlide(i) {
    console.log(`🔄 Changing to slide ${i}`);
    slides.forEach((slide, idx) => {
      slide.style.opacity = idx === i ? "1" : "0";
    });
    index = i;
  }

  function startSlideshow() {
    console.log("▶ Starting Slideshow...");
    playing = true;
    button.textContent = "Pause Slideshow";

    function nextSlide() {
      if (index < totalSlides - 1) {
        index++;
        showSlide(index);

        // Get custom duration from `data-duration` or use default
        let slideDuration = slides[index].getAttribute("data-duration") || defaultInterval;
        slideshowTimeout = setTimeout(nextSlide, slideDuration);
      } else {
        console.log("⏹ Slideshow finished.");
        playing = false;
        button.textContent = "Restart Slideshow";
      }
    }

    nextSlide(); // Start the slideshow
  }

  function pauseSlideshow() {
    console.log("⏸ Pausing Slideshow...");
    playing = false;
    button.textContent = "Resume Slideshow";
    clearTimeout(slideshowTimeout);
  }

  button.addEventListener("click", function () {
    if (!playing) {
      if (button.textContent === "Restart Slideshow") {
        index = 0; // Reset to first slide
        showSlide(index);
      }
      startSlideshow();
    } else {
      pauseSlideshow();
    }
  });

  prevButton.addEventListener("click", function () {
    index = Math.max(0, index - 1); // Prevent going below 0
    showSlide(index);
  });

  nextButton.addEventListener("click", function () {
    index = Math.min(totalSlides - 1, index + 1); // Prevent going past last slide
    showSlide(index);
  });

  showSlide(index); // Show the first image initially
});
