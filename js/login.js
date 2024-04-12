$(document).ready(function() {
    // Form validation for login form
    $('#loginForm').submit(function(event) {
        var email = $('#email').val();
        var password = $('#password').val();

        // Simple validation (you can add more complex validation as needed)
        if (email === '' || password === '') {
            alert('Please fill in all fields.');
            event.preventDefault(); // Prevent form submission
        }
    });

    // Retrieve cookie
    var loggedIn = document.cookie.includes('loggedIn=true');
    if (loggedIn) {
        alert('Welcome back!');
    }

    // Retrieve data from local storage
    var userData = localStorage.getItem('signupData');
    if (userData) {
        var parsedData = JSON.parse(userData);
        console.log('Username:', parsedData.username);
        console.log('Email:', parsedData.email);
    }
});
