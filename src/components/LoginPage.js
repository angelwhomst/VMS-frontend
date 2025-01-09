import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"; // Include your CSS for styling

function LoginPage() {
  const navigate = useNavigate(); // Hook to programmatically navigate
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement your login logic here
    // Example: If login is successful, navigate to the dashboard page

    // For demonstration, navigate to the /dashboard route after login
    navigate("/dashboard"); // This redirects to the Dashboard route
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="textbox">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="textbox">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="button" className="login-btn" onClick={handleLogin}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
