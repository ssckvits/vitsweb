const submit = document.getElementById('#submit').addEventListener('click', () => {
    const load1 = getElementById('load1');

    load1.style.zIndex = '9999'
    load1.style.zIndex = '1'

    setTimeout(() => {
        window.location.href = 'ASCII.html';
    }, 1500);
});