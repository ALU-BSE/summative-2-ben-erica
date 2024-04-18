// Function to show the logout confirmation modal
function showLogoutModal() {
    $('#logoutModal').modal('show');
}

// Function to handle logout
function logout() {
    // Perform logout actions here (e.g., clear session, redirect to login page)
    console.log('Logout clicked');
    // Redirect to login page
    window.location.href = 'login.html';
}

$(document).ready(function() {
    // Bind click event to logout button
    $('#logoutBtn').click(function(e) {
        e.preventDefault(); // Prevent default action (i.e., following the link)
        showLogoutModal();
    });

    // Bind click event to confirm logout button in modal
    $('#confirmLogout').click(function() {
        // Save user preferences before logout using cookies or local storage
        saveUserPreferences();
        logout();
    });

    // Function to save user preferences using cookies or local storage
    function saveUserPreferences() {
        // Example: Save user theme preference using local storage
        localStorage.setItem('theme', 'dark');
        // Example: Save user language preference using cookies
        document.cookie = 'lang=en; expires=Fri, 31 Dec 9999 23:59:59 GMT';
    }

    // Function to retrieve user preferences from cookies or local storage
    function getUserPreferences() {
        //  Retrieve user theme preference from local storage
        const theme = localStorage.getItem('theme');
        console.log('User theme preference:', theme);
        //  Retrieve user language preference from cookies
        const cookies = document.cookie.split(';');
        cookies.forEach(cookie => {
            const [name, value] = cookie.trim().split('=');
            if (name === 'lang') {
                console.log('User language preference:', value);
            }
        });
    }

    // Call function to retrieve user preferences when the page loads
    getUserPreferences();
});
