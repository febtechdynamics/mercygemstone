import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Basic validation for demonstration purposes
    if (!email) {
      setEmailError("Email is required");
      return;
    }
    if (!password) {
      setPasswordError("Password is required");
      return;
    }

    // Simulate authentication for now (replace with actual API call)
    setTimeout(() => {
      if (email === "user@example.com" && password === "password123") {
        // Successful login
        console.log("Login successful!");
        // Redirect to the desired page or perform other actions
      } else {
        // Invalid credentials
        setEmailError("Invalid email or password");
        setPasswordError("Invalid email or password");
      }
    }, 1000); // Delay for simulation
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="error-message">{emailError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
