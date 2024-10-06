// dashboard.js

// Function to execute on page load
window.onload = function() {
    // Display a welcome message
    welcomeMessage();
};

// Function to display a welcome message
function welcomeMessage() {
    alert("Welcome to the Admin Dashboard! Please select an option from the menu.");
}

// Example of potential future features
function logOut() {
    // Logic for logging out (e.g., clearing session storage, redirecting)
    alert("You have been logged out.");
    // Redirect to login page (if needed)
    window.location.href = 'admin-logout.html';
}

// Optional: Add event listeners for menu items if needed
document.querySelector('nav').addEventListener('click', function(event) {
    const target = event.target;

    if (target.tagName === 'A') {
        // Handle link clicks if you want to add any specific logic
        console.log(`Navigating to: ${target.href}`);
    }
});
