// Array to store user credentials
const users = [];

const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

// Login form submission
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Check if the entered username and password match the stored values
        const user = users.find(user => user.username == username && user.password ==password);
        if (user) {
            alert('Login successful!');
            // Redirect to the desired page or perform other actions
            window.location.href = 'expense-tracker.html'; // Replace with your desired page
        } else {
            alert('Invalid username or password!');
        }
    });
}

// Sign up form submission
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Check if the username is already taken
        const usernameTaken = users.some(user => user.username === username);
        if (usernameTaken) {
            alert('Username already taken. Please choose a different one.');
            return;
        }

        // Store the user's information in the users array
        users.push({ username, email, password });

        alert('Sign up successful!');
        // Redirect to the login page
        window.location.href = 'login.html';
    });
}

// Helper function to get the logged-in user
function getLoggedInUser() {
    const username = sessionStorage.getItem('loggedInUser');
    return users.find(user => user.username === username);
}

// Logout function
function logout() {
    sessionStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
}

// Check if a user is logged in on page load
window.addEventListener('load', () => {
    const loggedInUser = getLoggedInUser();
    if (loggedInUser) {
        // User is logged in, redirect to the expense tracker page
        window.location.href = 'expense-tracker.html';
    }
});