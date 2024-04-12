$(document).ready(function() {
    // Form validation for signup form
    $('#signupForm').submit(function(event) {
        var username = $('#username').val();
        var email = $('#email').val();
        var password = $('#password').val();

        // Simple validation (you can add more complex validation as needed)
        if (username === '' || email === '' || password === '') {
            alert('Please fill in all fields.');
            event.preventDefault(); // Prevent form submission
        } else if (password.length < 6) {
            alert('Password must be at least 6 characters.');
            event.preventDefault(); // Prevent form submission
        }
    });

    // Example of adding dynamic content
    $('#addContentBtn').click(function() {
        var newContent = '<div>New Content</div>';
        $('#dynamicContent').append(newContent);
    });

    // Example of adding animation
    $('#animateBtn').click(function() {
        $('#animatedElement').animate({ left: '250px' });
    });

    // Set cookie on signup
    document.cookie = 'signup=true; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/';
    
    // Set data in local storage on signup
    localStorage.setItem('signupData', JSON.stringify({ username: username, email: email }));
});
