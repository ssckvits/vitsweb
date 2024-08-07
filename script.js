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
  alert("Registrations haven't opened yet, please try again later.");
}

