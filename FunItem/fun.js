
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
    const submit = document.querySelector('.submit-btn');

    if(ans1.value.trim() !== ""){
        console.log('next2 clicked');

        sq2.style.transform = 'translateX(-110vw)';

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

            submit.style.visibility = 'visible';
            submit.style.opacity = '1';
            submit.style.zIndex = '10';
        }, 1000);
    } else {
        console.log('Not found');

        alert('Please answer the Question')
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
          } else {
            alert("Error submitting form");
          }
        })
        .catch((error) => {
          alert("An error occurred: " + error.message);
        });
    });
  });