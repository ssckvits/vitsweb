const svgBg = document.querySelector('.svg-bg');

svgBg.addEventListener('load', () => {

    svgBg.style.zIndex = '-1'
});

window.addEventListener('load', function () {
    const WiFiloader = document.getElementById('wifi-loader');
    const body = document.body;

    function checkInternet() {
        if (navigator.onLine) {
            console.log('Internet connected');

            WiFiloader.style.zIndex = '-1';
            WiFiloader.style.opacity = '0';

            body.classList.remove('no-animation');
            body.style.pointerEvents = 'auto';
        } else {
            console.log('No internet connection');

            // WiFiloader.style.zIndex = '1000';
            // WiFiloader.style.opacity = '1';

            // body.classList.add('no-animation');
            // body.style.pointerEvents = 'none';
        }
    }

    // body.classList.add('no-animation');

    checkInternet();

    window.addEventListener('online', checkInternet);
    window.addEventListener('offline', checkInternet);
});

document.querySelector('.agenda-btn').addEventListener('click', () => {
    const load1 = document.getElementById('load1');

    load1.style.zIndex = '9999'
    load1.style.opacity = '1'

    setTimeout(() => {
        window.location.href = '/nexnova/agenda-mobile.html';
    }, 1500);
});

document.querySelector('.button').addEventListener('click', () => {
    const load1 = document.getElementById('load1');

    load1.style.zIndex = '9999'
    load1.style.opacity = '1'

    setTimeout(() => {
        window.location.href = '/index.html';
    }, 1500);
});