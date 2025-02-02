window.onload = function () {
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

document.querySelector('.button').addEventListener('click', () => {
    const load1 = document.getElementById('load1');

    load1.style.zIndex = '9999'
    load1.style.opacity = '1'

    setTimeout(() => {
        window.location.href='/nexnova/nexnova.html';
    }, 1000);
});

//