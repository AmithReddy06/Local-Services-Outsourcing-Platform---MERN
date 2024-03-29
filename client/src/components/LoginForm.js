

// components/LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Import the CSS file

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Sending login request to server:', loginData);
      // Make an HTTP request to send login data to the server
      console.log("going in for logging in the user ")
      const response = await axios.post('http://localhost:5000/api/login', loginData);

      // Optionally, you can store authentication tokens or user information in the state/context
      // For simplicity, let's assume a successful login and redirect to the home page
      console.log('Login successful:', response.data);

      // Redirect to home page (search interface) after successful login
      navigate('/search');
    } catch (error) {
      console.error('Error submitting login form:', error);
      // Handle errors or display error messages to the user
    }
  };

  return (
    <div className="login-container"> {/* Apply a class to the container div */}
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form"> {/* Apply a class to the form */}
        {/* Input fields for email and password */}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={loginData.email}
          onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
          className="login-input" 
        />
        <br />
        
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={loginData.password}
          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
          className="login-input" 
        />
        <br />
        <button type="submit" className="login-button">Login</button> {/* Apply a class to the button */}
      </form>
    </div>
  );
};

export default LoginForm;
