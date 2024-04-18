$(document).ready(function() {
    // Function to show pop-up message when pay button is clicked
    $('#payButton').click(function() {
        var paymentMethod = $('input[name="paymentMethod"]:checked').val();
        var phoneNumber = $('#phoneNumber').val();
        
        if (!paymentMethod || !phoneNumber) {
            alert("Please select a payment method and enter your phone number.");
            return;
        }
        
        // Show pop-up message for payment
        alert("Proceed payment on the phone");

        // Store payment method and phone number in local storage
        localStorage.setItem("paymentMethod", paymentMethod);
        localStorage.setItem("phoneNumber", phoneNumber);

        // Set a cookie for payment method
        document.cookie = "paymentMethod=" + paymentMethod + "; expires=Thu, 15 Apr 2025 12:00:00 UTC; path=/";

        // Redirect to confirmer.html after payment confirmation
        window.location.href = "confirmer.html";
    });

    // Animate radio options and phone number input
    $('.radio-options label').click(function() {
        $(this).toggleClass('selected');
    });
    $('#phoneNumber').focus(function() {
        $(this).addClass('focused');
    });
    $('#phoneNumber').blur(function() {
        $(this).removeClass('focused');
    });

    // Animation for clicking layer3-svg (next page) and layer4-svg (back to booking.html)
    $('.layer3-svg').click(function() {
        // Add animation here for transitioning to confirmer.html
        $(this).addClass('animated');
        setTimeout(function() {
            window.location.href = "confirmer.html";
        }, 500); // Adjust timing as needed
    });
    $('.layer4-svg').click(function() {
        // Add animation here for transitioning back to booking.html
        $(this).addClass('animated');
        setTimeout(function() {
            window.location.href = "booking.html";
        }, 500); // Adjust timing as needed
    });
});
