// window.addEventListener('load', function() {
//   const WiFiloader = document.getElementById('wifi-loader');

//   console.log('loaded')

//   WiFiloader.style.zIndex = '-1'
//   WiFiloader.style.opacity = '0'

//   function checkInternet() {
//     if (navigator.onLine) {
//       console.log('page online');
//     } else{
//       console.log('page offline');
//       WiFiloader.style.zIndex = '9999'
//       WiFiloader.style.opacity = '1'
//     }
//   }
// });

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
        window.location.href = '/nexnova/agenda.html';
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

// document.querySelectorAll('.pic').addEventListener('click', () => {
//     const load1 = document.getElementById('load1');

//     load1.style.zIndex = '9999'
//     load1.style.opacity = '1'

//     setTimeout(() => {
//         link.href = 'https://whatsapp.com/channel/0029VafD2jtJP20wQwyCkz0t';
//     }, 1500);
// });

document.querySelectorAll(".pop").forEach(function (element) {

    const popimg = document.getElementById('most-popular');

    popimg.style.zIndex = '999';

    element.addEventListener("click", function () {
        const load1 = document.getElementById('load1');

        load1.style.zIndex = '9999';
        load1.style.opacity = '1';

        window.location.href = "https://whatsapp.com/channel/0029VafD2jtJP20wQwyCkz0t";
    });
});

