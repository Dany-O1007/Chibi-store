document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signupForm');

    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        form.classList.add('was-validated');
    }, false);
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        age: document.getElementById('age').value,
        address: document.getElementById('address').value
    };

    console.log(JSON.stringify(formData)); // This will log the JSON object to the console
});

// JavaScript Document