document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('error-message');

    // Basic validation
    if (username === '' || email === '' || password === '' || confirmPassword === '') {
        errorMessage.textContent = 'All fields are required!';
    } else if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match!';
    } else {
        errorMessage.textContent = '';
        // Simulate a successful registration
        alert('Registration successful!'); // Replace with actual registration logic
        // Redirect to the login page
        window.location.href = 'login.html'; // Replace with your login page
    }
});

// Redirect to login page on button click
document.getElementById('loginButton').addEventListener('click', function() {
    window.location.href = 'login.html'; // Replace with your login page
});
