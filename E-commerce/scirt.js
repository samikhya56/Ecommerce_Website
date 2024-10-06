document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Basic validation (You can expand this as needed)
    if (username === '' || password === '') {
        errorMessage.textContent = 'Both fields are required!';
    } else {
        errorMessage.textContent = '';
        // Simulate a successful login
        alert('Login successful!'); // Replace with actual login logic
        // You can redirect to another page using: window.location.href = 'homepage.html';
        window.location.href = 'index.html';
    }
});
