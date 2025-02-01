
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
    const sq2 = getElementById('sq2');
    
})