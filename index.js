document.addEventListener("DOMContentLoaded", function () {
    const carouselSlide = document.querySelector(".carousel-slide");
    const prevButton = document.querySelector(".carousel-prev");
    const nextButton = document.querySelector(".carousel-next");
    const carouselItems = document.querySelectorAll(".carousel-item");
  
    let counter = 0;
    const slideWidth = carouselItems[0].clientWidth;

    nextButton.addEventListener("click", () => {
      if (counter >= carouselItems.length - 1) return;
      counter++;
      carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
    });
 
    prevButton.addEventListener("click", () => {
      if (counter <= 0) return;
      counter--;
      carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
    });
  });