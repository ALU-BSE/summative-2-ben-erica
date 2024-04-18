$(document).ready(function() {
    // Function to check if all fields are filled and message is at least 50 characters long
    function validateForm() {
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Please fill in all fields.');
            return false;
        }

        if (message.length < 50) {
            alert('Message must be at least 50 characters long.');
            return false;
        }

        return true;
    }

    // Event listener for form submission
    $('#feedbackForm').submit(function(event) {
        event.preventDefault(); // Prevent default form submission

        if (validateForm()) {
            // Store feedback data in local storage
            var feedbackData = {
                name: $('#name').val(),
                email: $('#email').val(),
                message: $('#message').val()
            };
            localStorage.setItem('feedbackData', JSON.stringify(feedbackData));

            // Set cookie for feedback submitted status
            document.cookie = 'feedbackSubmitted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT';

            // Display confirmation message
            $('#feedbackMessage').text('Feedback submitted.');

            // Clear form fields and reset feedback message after a delay
            setTimeout(function() {
                $('#feedbackForm')[0].reset(); // Reset form fields
                $('#feedbackMessage').text(''); // Clear feedback message
            }, 3000); // 3 seconds delay before clearing the form

            // Optionally, redirect to another page after submission
            // window.location.href = 'thankyou.html';
        }
    });
});
