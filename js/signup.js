$(document).ready(function() {
    $('#signupForm').submit(function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Get form values
        let name = $('#name').val();
        let email = $('#email').val();
        let password = $('#password').val();

        // Validate password for minimum length and special character
        let regex = /^(?=.*[!@#$%^&*])(?=.*[a-zA-Z0-9]).{6,}$/;
        if (!regex.test(password)) {
            alert('Password must be at least 6 characters long and contain at least one special character (!@#$%^&*)');
            return;
        }

        // Store data in local storage
        localStorage.setItem('username', name);
        localStorage.setItem('useremail', email);
        localStorage.setItem('userpassword', password);

        // Store data in cookies
        document.cookie = `username=${name}; expires=Thu, 18 Apr 2025 12:00:00 UTC; path=/`;
        document.cookie = `useremail=${email}; expires=Thu, 18 Apr 2025 12:00:00 UTC; path=/`;
        document.cookie = `userpassword=${password}; expires=Thu, 18 Apr 2025 12:00:00 UTC; path=/`;

        // Form is valid, proceed with sign-up
        $('#successMessage').slideDown(); // Show success message
        setTimeout(function() {
            $('#successMessage').slideUp(); // Hide success message after 3 seconds
            window.location.href = 'login.html'; // Redirect to login page
        }, 3000); // 3 seconds delay
    });
});
