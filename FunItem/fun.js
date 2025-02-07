
document.getElementById('next1').addEventListener('click', () => {
  const sq = document.getElementById('sq1');
  const sclName = document.getElementById('school-name');
  const scllabel = document.getElementById('scllabel');
  const next1 = document.getElementById('next1');
  const q1 = document.getElementById('Q1');
  const q1label = document.getElementById('q1label');
  const next2 = document.querySelector('.next2');
  const subtitle = document.querySelector('.subtitle');
  const question1 = document.getElementById('question1');

  if (sclName.value.trim() !== "") {
    console.log('next1 clicked');


    sq.style.transform = 'translateX(-100vw)';
    sq.style.width = '100vw';


    setTimeout(() => {
      sclName.style.visibility = 'hidden';
      scllabel.style.visibility = 'hidden';
      next1.style.visibility = 'hidden';
    }, 30);

    setTimeout(() => {
      console.log('q1 appearing');

      subtitle.style.transform = 'translateY(-50px)'

      question1.style.visibility = 'visible'
      question1.style.opacity = '1'

      q1.style.visibility = 'visible';
      q1.style.opacity = '1';
      q1.style.zIndex = '1';

      q1label.style.visibility = 'visible';
      q1label.style.opacity = '1';
      q1label.style.zIndex = '1';

      next2.style.visibility = 'visible';
      next2.style.opacity = '1';
      next2.style.zIndex = '1';
    }, 1000);
  } else {
    alert('Enter Your School Name');
  }
});



document.querySelector('.next2').addEventListener('click', () => {
  const sq2 = document.getElementById('sq2');
  const ans1 = document.getElementById('Q1');
  const q1label = document.getElementById('q1label');
  const question1 = document.getElementById('question1');
  const next2 = document.querySelector('.next2');
  const question2 = document.getElementById('question2');
  const q2label = document.getElementById('q2label');
  const ans2 = document.getElementById('Q2');
  const next3 = document.querySelector('.next3');

  if (ans1.value.trim() === "00011 01100 01111 10101 00100") {
    console.log('next2 clicked');

    sq2.style.transform = 'translateX(-110vw)';
    sq2.style.width = '100vw'

    setTimeout(() => {
      console.log('q1 hidden');

      question1.style.opacity = '0';
      question1.style.visibility = 'hidden';
      question1.style.zIndex = '-1';

      ans1.style.opacity = '0';
      ans1.style.visibility = 'hidden';
      ans1.style.zIndex = '-1';

      q1label.style.opacity = '0';
      q1label.style.visibility = 'hidden';
      q1label.style.zIndex = '-1';

      next2.style.opacity = '0';
      next2.style.visibility = 'hidden';
      next2.style.zIndex = '-1';
    }, 20);

    setTimeout(() => {
      console.log('q2 appearing');

      question2.style.visibility = 'visible';
      question2.style.opacity = '1';
      question2.style.zIndex = '10';

      ans2.style.visibility = 'visible';
      ans2.style.opacity = '1';
      ans2.style.zIndex = '10';

      q2label.style.visibility = 'visible';
      q2label.style.opacity = '1';
      q2label.style.zIndex = '10';

      next3.style.visibility = 'visible';
      next3.style.opacity = '1';
      next3.style.zIndex = '10';

      // console.log('submit styling');

      // submit.style.visibility = 'visible';
      // submit.style.opacity = '1';
      // submit.style.zIndex = '10';

      // submitInput.style.visibility = 'visible';
      // submitInput.style.opacity = '1';
      // submitInput.style.zIndex = '10';

      // console.log('submit styling end');
    }, 1000);
  } else {
    console.log('Not found');

    const wrong = document.querySelector('.wrong');

    wrong.style.visibility = 'visible';
    wrong.style.opacity = '1';
    wrong.style.zIndex = '10';
  }
});


document.querySelector('.next3').addEventListener('click', () => {
  const sq3 = document.getElementById('sq3');
  const ans2 = document.getElementById('Q2');
  const q3label = document.getElementById('q3label');
  const question3 = document.getElementById('question3');
  const ans3 = document.getElementById('Q3')
  const next3 = document.querySelector('.next3');
  const question2 = document.getElementById('question2');
  const q2label = document.getElementById('q2label');
  const next4 = document.querySelector('.next4');

  if (ans2.value.trim() === "10010 01111 10101 10100 00101 10010") {
    console.log('next3 clicked');

    sq3.style.transform = 'translateX(-110vw)';
    sq3.style.width = '100vw'

    setTimeout(() => {
      console.log('q2 hidden');

      question2.style.opacity = '0';
      question2.style.visibility = 'hidden';
      question2.style.zIndex = '-1';

      ans2.style.opacity = '0';
      ans2.style.visibility = 'hidden';
      ans2.style.zIndex = '-1';

      q2label.style.opacity = '0';
      q2label.style.visibility = 'hidden';
      q2label.style.zIndex = '-1';

      next3.style.opacity = '0';
      next3.style.visibility = 'hidden';
      next3.style.zIndex = '-1';
    }, 20);

    setTimeout(() => {

      question3.style.visibility = 'visible';
      question3.style.opacity = '1';
      question3.style.zIndex = '10';

      ans3.style.visibility = 'visible';
      ans3.style.opacity = '1';
      ans3.style.zIndex = '10';

      q3label.style.visibility = 'visible';
      q3label.style.opacity = '1';
      q3label.style.zIndex = '10';
      
      next4.style.visibility = 'visible';
      next4.style.opacity = '1';
      next4.style.zIndex = '10';

    }, 1000);
  } else {
    console.log('Not found');

    const wrong = document.querySelector('.wrong');

    wrong.style.visibility = 'visible';
    wrong.style.opacity = '1';
    wrong.style.zIndex = '10';
  }
});

document.querySelector('.next4').addEventListener('click', () => {
  console.log('next4 clicked');

  const question3 = document.getElementById('question3');
  const ans3 = document.getElementById('Q3');
  const q3label = document.getElementById('q3label');
  const sq4 = document.getElementById('sq4');
  const next4 = document.querySelector('.next4');
  const question4 = document.getElementById('question4');
  const ans4 = document.getElementById('Q4');
  const q4label = document.getElementById('q4label');
  const next5 = document.querySelector('.next5');

  if (ans3.value.trim() === "01110 00101 10100 10111 01111 10010 01011") {
    console.log('ans3 value is not empty');

    sq4.style.transform = 'translateX(-110vw)';
    sq4.style.width = '100vw';

    setTimeout(() => {
      console.log('timeout');

      question3.style.opacity = '0';
      question3.style.visibility = 'hidden';
      question3.style.zIndex = '-1';

      ans3.style.opacity = '0';
      ans3.style.visibility = 'hidden';
      ans3.style.zIndex = '-1';

      q3label.style.opacity = '0';
      q3label.style.visibility = 'hidden';
      q3label.style.zIndex = '-1';

      next4.style.opacity = '0';
      next4.style.visibility = 'hidden';
      next4.style.zIndex = '-1';
    }, 20);

    setTimeout(() => {
      console.log('q5 appearing');

      question4.style.visibility = 'visible';
      question4.style.opacity = '1';
      question4.style.zIndex = '10';

      Q4.style.visibility = 'visible';
      Q4.style.opacity = '1';
      Q4.style.zIndex = '10';

      q4label.style.visibility = 'visible';
      q4label.style.opacity = '1';
      q4label.style.zIndex = '10';

      next5.style.visibility = 'visible';
      next5.style.opacity = '1';
      next5.style.zIndex = '10';
    }, 1000);
  } else {
    console.log('Not found');

    const wrong = document.querySelector('.wrong');

    wrong.style.visibility = 'visible';
    wrong.style.opacity = '1';
    wrong.style.zIndex = '10';
  }
});

document.querySelector('.next5').addEventListener('click', () => {
  
  const question4 = document.getElementById('question4');
  const ans4 = document.getElementById('Q4');
  const q4label = document.getElementById('q4label');
  const next5 = document.querySelector('.next5');
  const question5 = document.getElementById('question5');
  const ans5 = document.getElementById('Q5');
  const q5label = document.getElementById('q5label');
  const next6 = document.querySelector('.next6');
  const submit = document.querySelector('.submit-btn');
  const submitInput = document.getElementById('submit');

  if (ans4.value.trim() === "10100 01111 10000 01111 01100 01111 10001 11001") {
    console.log('ans4 value is not empty');

    setTimeout(() => {

      question4.style.opacity = '0';
      question4.style.visibility = 'visible';
      question4.style.zIndex = '-1';

      ans4.style.opacity = '0';
      ans4.style.visibility = 'visible';
      ans4.style.zIndex = '-1';

      q4label.style.opacity = '0';
      q4label.style.visibility = 'visible';
      q4label.style.zIndex = '-1';
      
      next5.style.opacity = '0';
      next5.style.visibility = 'visible';
      next5.style.zIndex = '-1';
      
    }, 20);

    setTimeout(() => {

      question5.style.visibility = 'visible';
      question5.style.opacity = '1';
      question5.style.zIndex = '10';

      ans5.style.visibility = 'visible';
      ans5.style.opacity = '1';
      ans5.style.zIndex = '10';

      q5label.style.visibility = 'visible';
      q5label.style.opacity = '1';
      q5label.style.zIndex = '10';

      next6.style.visibility = 'visible';
      next6.style.opacity = '1';
      next6.style.zIndex = '10';
      
    }, 1000);
  } else {
    console.log('Not found');

    const wrong = document.querySelector('.wrong');

    wrong.style.visibility = 'visible';
    wrong.style.opacity = '1';
    wrong.style.zIndex = '10';
  }
});

document.querySelector('.next6').addEventListener('click', () => {
  
  const ans5 = document.getElementById('Q5');

  if (ans5.value.trim() === "00101 10100 01000 00101 10010 01110 00101 10100"){
    const question5 = document.getElementById('question5');
    const q5label = document.getElementById('q5label');
    const submit = document.querySelector('.submit-btn');
    const submitInput = document.getElementById('submit');
    const next6 = document.querySelector('.next6');

    question5.style.opacity = '0';
    question5.style.visibility = 'hidden';
    question5.style.zIndex = '-1';

    ans5.style.opacity = '0';
    ans5.style.visibility = 'hidden';
    ans5.style.zIndex = '-1';

    q5label.style.opacity = '0';
    q5label.style.visibility = 'hidden';
    q5label.style.zIndex = '-1';

    next6.style.opacity = '0';
    next6.style.visibility = 'hidden';
    next6.style.zIndex = '-1';

  setTimeout(() => {
    submit.style.visibility = 'visible';
    submit.style.opacity = '1';
    submit.style.zIndex = '10';
    
    submitInput.style.visibility = 'visible';
    submitInput.style.opacity = '1';
    submitInput.style.zIndex = '10';
  }, 1000);
  } else{
    console.log('Not found');

    const wrong = document.querySelector('.wrong');

    wrong.style.visibility = 'visible';
    wrong.style.opacity = '1';
    wrong.style.zIndex = '10';
  }
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbx4JwMBB862Bi1jdxrRgAR5h3P8NbTcLwTYudMoBJxXb3qgFiMyss4pBoNlKyGLShio/exec';

const form = document.forms['contact-form'];

window.addEventListener("load", function () {
  const form = document.getElementById("formId");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data
    })
      .then((response) => {
        if (response.ok) {
          alert("Success!");
          console.log('success!!!!')
        } else {
          alert("Error submitting form");
        }
      })
      .catch((error) => {
        alert("An error occurred: " + error.message);
      });
  });
});


document.getElementById('submit').addEventListener('click', (event) => {
  const sclname = document.getElementById('school-name').value.trim();
  const ans1 = document.getElementById('Q1').value.trim();
  const ans2 = document.getElementById('Q2').value.trim();
  const ans3 = document.getElementById('Q3').value.trim();
  const ans4 = document.getElementById('Q4').value.trim();
  const ans5 = document.getElementById('Q5').value.trim();
  const form = document.getElementById('formId');
  const success = document.getElementById('success');
  const fail = document.getElementById('fail');


  if (sclname === "" || ans1 === "" || ans2 === "" || ans3 === "" || ans4 === "" || ans5 === "") {
    console.log('submit clicked');

    fail.style.visibility = 'visible'
    fail.style.opacity = '1';
    fail.style.zIndex = '10'
    return;
  }

  console.log('confetti clicked');


  form.style.opacity = '0';
  form.style.visibility = 'hidden';
  form.style.zIndex = '-1';

  setTimeout(() => {
    success.style.visibility = 'visible';
    success.style.opacity = '1';
    success.style.zIndex = 10;
  }, 1000);


  var duration = 3 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 20, spread: 360, ticks: 90, zIndex: 990 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 200 * (timeLeft / duration);
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
  }, 500);
});

document.getElementById('done').addEventListener('click', () => {
  success.style.opacity = '0';
  success.style.visibility = 'hidden';
  success.style.zindex = '-1';

  setTimeout(() => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      window.location.href = "/nexnova/nexnova-mobile.html";
    } else {
      window.location.href = "/nexnova/nexnova.html"; 
    }
  }, 1000);
});

document.querySelector('.fail-close').addEventListener('click', () => {
  const fail = document.getElementById('fail');

  fail.style.opacity = '0';
  fail.style.visibility = 'hidden';
  fail.style.zIndex = '-1';
});

document.querySelector('.wrong-done').addEventListener('click', () => {
  const wrongclose = document.querySelector('.wrong');

  wrongclose.style.opacity = '0';
  wrongclose.style.visibility = 'hidden';
  wrongclose.style.zIndex = '-1';
});