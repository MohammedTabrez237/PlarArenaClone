document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("news-slider");
  const slideWidth = slider.children[0].offsetWidth; // Get the width of a single card
  const totalSlides = slider.children.length; // Total number of cards
  let currentIndex = 0;

  // Clone all slides for smooth looping
  for (let i = 0; i < totalSlides; i++) {
    const clonedSlide = slider.children[i].cloneNode(true);
    slider.appendChild(clonedSlide);
  }

  // Function to move slides
  function moveToNextSlide() {
    currentIndex++;
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    // Reset position to the beginning without animation after the last slide
    if (currentIndex === totalSlides) {
      setTimeout(() => {
        slider.style.transition = "none"; // Disable animation
        slider.style.transform = `translateX(0px)`; // Reset to the first slide 
        currentIndex = 0; // Reset index
      }, 500);
    }
  }

  // Start automatic sliding
  const slideInterval = setInterval(moveToNextSlide, 5000);

  // Pause slider on hover
  slider.addEventListener("mouseover", () => clearInterval(slideInterval));
  slider.addEventListener("mouseout", () => setInterval(moveToNextSlide, 5000));
});
