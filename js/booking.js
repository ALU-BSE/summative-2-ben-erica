$(document).ready(function() {
    // Event listener for selecting an option
    $('.form-control').change(function() {
        var selectedOption = $(this).val();
        // Store selected option in local storage
        localStorage.setItem('selectedOption', selectedOption);
    });

    // Event listener for clicking the next button
    $('.layer3-svg').click(function() {
        // Retrieve selected option from local storage
        var selectedOption = localStorage.getItem('selectedOption');
        if (selectedOption) {
            // Redirect to payment.html with selected option as query parameter
            window.location.href = 'payment.html?selectedOption=' + selectedOption;
        } else {
            alert('Please select an option before proceeding.');
        }
    });

    // Event listener for clicking the back button
    $('.layer4-svg').click(function() {
        // Redirect to profile.html
        window.location.href = 'profile.html';
    });

    // Check if there's a saved option in local storage
    var savedOption = localStorage.getItem('selectedOption');
    if (savedOption) {
        // Set the selected option in the dropdown
        $('.form-control').val(savedOption);
    }

    // Animation for hovering over the next button
    $('.layer3-svg').hover(function() {
        $(this).animate({ width: '+=10px' }, 'fast');
    }, function() {
        $(this).animate({ width: '-=10px' }, 'fast');
    });

    // Set cookie for the visit
    document.cookie = 'visit=bookingPage';
});
