// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const carousel = document.querySelector('.carousel');
const slides = carousel.querySelectorAll('.slides li');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let slideIndex = 0;
const numSlides = 3;

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (let i = slideIndex; i < slideIndex + numSlides; i++) {
    if (slides[i]) {
      slides[i].style.display = 'inline-block';
    }
  }
}

prevBtn.addEventListener('click', () => {
  slideIndex -= numSlides;
  if (slideIndex < 0) {
    slideIndex = slides.length - numSlides;
  }
  showSlides();
});

nextBtn.addEventListener('click', () => {
  slideIndex += numSlides;
  if (slideIndex > slides.length - numSlides) {
    slideIndex = 0;
  }
  showSlides();
});

// Call showSlides function to initially display the first 3 slides
showSlides();
