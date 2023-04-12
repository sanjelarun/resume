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



// This is for the dataset

// Get references to the buttons and textarea
var yesButton = document.querySelector('.button.run');
var noButton = document.querySelector('.button.reset');
var sendButton = document.querySelector('.button.help');
var feedbackTextarea = document.querySelector('.feedback');
var codeTextarea = document.querySelector('.code');

// Add event listener to the "Yes" button
yesButton.addEventListener('click', function() {
  // Send AJAX request to Flask app
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/update_csv');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    if (xhr.status === 200) {
      alert('CSV files updated successfully!');
    }
  };
  xhr.send(JSON.stringify({ action: 'yes', code: codeTextarea.value }));
});

// Add event listener to the "No" button
noButton.addEventListener('click', function() {
  // Send AJAX request to Flask app
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/update_csv');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    if (xhr.status === 200) {
      alert('CSV files updated successfully!');
    }
  };
  xhr.send(JSON.stringify({ action: 'no', code: codeTextarea.value }));
});

// Add event listener to the "Sent it to Arun" button
sendButton.addEventListener('click', function() {
  // Send AJAX request to Flask app
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/update_csv');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    if (xhr.status === 200) {
      alert('CSV files updated successfully!');
    }
  };
  var feedback = feedbackTextarea.value;
  xhr.send(JSON.stringify({ action: 'send', code: codeTextarea.value, feedback: feedback }));
});