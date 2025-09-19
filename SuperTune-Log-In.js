// Select the form
const form = document.querySelector('.log-in-form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Save only the email (safe to store)
    localStorage.setItem('email', email);

    // For demonstration only (❌ not safe for real apps)
    localStorage.setItem('password', password);

    alert("Email saved successfully!");
});

// Auto-fill saved email when the page loads
window.addEventListener('DOMContentLoaded', () => {
    const savedEmail = localStorage.getItem('email');

    if (savedEmail) {
        document.getElementById('email').value = savedEmail;
    }
});
