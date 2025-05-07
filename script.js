document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.hidden');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.0000001 
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = Array.from(elements).indexOf(entry.target) * 50;
        setTimeout(() => {
          entry.target.classList.add('visible');
          entry.target.classList.remove('hidden');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  elements.forEach(element => observer.observe(element));
});

const responsiveNav = document.querySelector('.responsiveNav');
const menuToggle = document.querySelector('.expandMenu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('fa-xmark');
    menuToggle.classList.toggle('fa-bars');
    responsiveNav.classList.toggle('active');
});

function submitMessage() {
  alert("Thank you, your response was submitted.");
}

function nexnovaSoon(){
  alert("Sorry, Registrations are Closed. See You Next Time!");
}

// window.addEventListener('load', function () {
//       const loader = document.querySelector('.loading');
//       loader.classList.add('hidden');
// });


const eventDate = new Date("May 09, 2025 09:00:00").getTime();

const countdownInterval = setInterval(function() {
  
  const now = new Date().getTime();

  const timeRemaining = eventDate - now;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = days + " DAYS  " + hours + " HOURS  "
  + minutes + " MINS  ";

  if (timeRemaining < 0) {
    clearInterval(countdownInterval);
    document.getElementById("timer").innerHTML = "Event Has Started";
  }

}, 1000);


document.querySelectorAll(".nexnova-btn").forEach((btn) => {
  btn.addEventListener("click", function () {

    if (window.matchMedia("(max-width: 768px)").matches) {
      window.location.href = "/bigmatch/";
    } else {
      window.location.href = "/bigmatch/"; 
    }
  });
});