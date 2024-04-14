$(document).ready(function() {
    $('#signupForm').submit(function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Validate password for minimum length and special character
        let password = $('#password').val();
        let regex = /^(?=.*[!@#$%^&*])(?=.*[a-zA-Z0-9]).{6,}$/;
        if (!regex.test(password)) {
            alert('Password must be at least 6 characters long and contain at least one special character (!@#$%^&*)');
            return;
        }

        // Form is valid, proceed with sign-up
        $('#successMessage').slideDown(); // Show success message
        setTimeout(function() {
            $('#successMessage').slideUp(); // Hide success message after 3 seconds
            // You can add code here to set cookies or local storage before redirecting to login.html
            window.location.href = 'login.html'; // Redirect to login page
        }, 3000); // 3 seconds delay
    });
});
