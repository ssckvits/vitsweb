document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.querySelector('.registration button[type="submit"]');
    const popupCard = document.getElementById('popup-card');
    const closePopup = document.getElementById('close-popup');
    const form = document.querySelector('.registration form');
    const inputs = form.querySelectorAll('input');

    submitButton.addEventListener('click', function(event) {
        // Check if all fields are filled
        let allFilled = true;
        inputs.forEach(input => {
            if (!input.value) {
                allFilled = false;
            }
        });

        if (allFilled) {
            event.preventDefault(); // Prevent the form from submitting

            // Show the popup
            popupCard.style.display = 'block';

            // Prevent scrolling
            document.body.classList.add('no-scroll');

            // Scroll to the top of the page
            window.scrollTo(0, 0);

            // Clear all input fields
            inputs.forEach(input => input.value = '');
        } else {
            alert('Please fill in all fields.');
        }
    });

    closePopup.addEventListener('click', function() {
        popupCard.style.display = 'none'; // Hide the popup

        // Allow scrolling again
        document.body.classList.remove('no-scroll');
    });
});