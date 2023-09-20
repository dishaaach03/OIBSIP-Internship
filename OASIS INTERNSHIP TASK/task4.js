document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get the input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // You can replace this with your own authentication logic
    // For simplicity, let's assume the username is "user" and the password is "password"
    if (username === "user" && password === "password") {
        // Redirect to another page (e.g., success.html) on successful login
        window.location.href =" http://127.0.0.1:5501/level%202%20task%203.html";
    } else {
        // Display an error message if authentication fails
        document.getElementById("errorMessage").textContent = "Invalid username or password.";
    }
});
