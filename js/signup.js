document.addEventListener('DOMContentLoaded', function () {
    // Form submission event listener
    document.getElementById('signUpForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        // Perform form validation
        let username = document.getElementById('username').value.trim();
        let email = document.getElementById('email').value.trim();
        let password = document.getElementById('password').value.trim();
        if (username === '' || email === '' || password === '') {
            alert('Please fill in all fields.');
        } else {
            // Here you can perform further actions, such as sending the form data to a server
            alert('Sign up successful!');
            // Reset the form
            document.getElementById('signUpForm').reset();
        }
    });
});
