window.onload = function() {
  setTimeout(() => {
    console.log("Window loaded"); 
    const element = document.getElementById('shape-bg-ctn');
    
    if (element) {
      console.log("Element found!"); 
      element.classList.add('visible');
    } else {
      console.log("Element not found"); 
    }
  }, 500);
};


const vote = document.querySelector('.vote');
const div5 = document.querySelector('.div5');

div5.addEventListener('mouseenter', () => {
  div5.style.opacity = '0.2';
  vote.style.opacity = '1';
  vote.style.zIndex = '1';
});

vote.addEventListener('mouseenter', () => {
  div5.style.opacity = '0.1';
  vote.style.opacity = '1';
  vote.style.scale = '1.1';
  vote.style.background = '#070a11'
});

vote.addEventListener('mouseleave', () => {
  vote.style.scale = '1'
  vote.style.background = 'transparent'
});

div5.addEventListener('mouseleave', () => {
  div5.style.opacity = '1';
  vote.style.opacity = '0';
});

// vote.addEventListener('click', () => {
//   window.location.href='/nexnova/vote.html';
// });

const glryBtn = document.querySelector('glry-view');

glryBtn.addEventListener('load', () => {
  glryBtn.style.zIndex = '199'
});

