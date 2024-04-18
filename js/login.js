$(document).ready(function() {
    $('#loginForm').submit(function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Simulate login (replace with actual authentication logic)
        let email = $('#email').val();
        let password = $('#password').val();

        // Check if email and password are provided
        if (email.trim() === '' || password.trim() === '') {
            alert('Please enter your email and password.');
            return;
        }

        // Simulate authentication
        if (email === 'benjaminishimwe2018@gmail.com' && password === '123456@' ) {
            $('#errorMessage').hide(); // Hide error message if previously shown
            $('#successMessage').slideDown(); // Show success message
            setTimeout(function() {
                $('#successMessage').slideUp(); // Hide success message after 3 seconds
                // Add animation (slideshow) before redirecting to profile.html
                $('body').fadeOut(1000, function() {
                    window.location.href = 'profile.html'; // Redirect to profile page
                });
            }, 3000); // 3 seconds delay
        } else {
            $('#successMessage').hide(); // Hide success message if previously shown
            $('#errorMessage').slideDown(); // Show error message
        }
    });
});
