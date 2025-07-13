document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Hardcoded credentials (for demo purposes)
    const validEmail = 'dhanyasri.ec22@bitsathy.ac.in';
    const validPassword = 'dhan123';

    // Get input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if credentials match the hardcoded ones
    if (email == validEmail && password == validPassword) {
        alert('Login successful!');
        window.location.href = 'index.html'; // Redirect to the home page
    } else {
        alert('Invalid email or password!');
    }
});