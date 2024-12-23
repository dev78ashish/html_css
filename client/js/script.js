localStorage.setItem("isAuthenticated", "false");

// Client-side form submission logic
document.getElementById("loginForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const response = await fetch("http://localhost:5000/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (response.ok) {
    localStorage.setItem("isAuthenticated", "true"); // Set isAuthenticated to true
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert(result.message); // Show error message
  }
  const result = await response.json();
  // alert(result.message);

});

document.getElementById("signupForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const response = await fetch("http://localhost:5000/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });
  if (response.ok) {
    alert("Signup successful! Please log in.");
    window.location.href = "login.html"; // Redirect to login page if needed
  } else {
    alert(result.message); // Show error message
  }
  const result = await response.json();
  // alert(result.message);
});
