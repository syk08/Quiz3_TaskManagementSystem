import React, { useState } from 'react';
import axios from 'axios';




function RegistrationPage({ onRegister, switchToLogin }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the backend registration endpoint
      console.log('Form Data:', formData);
      const response = await axios.post('http://localhost:3001/register', formData);
      console.log(response.data);
      // Trigger the callback to switch to the login page
      switchToLogin();
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div>
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Enter your username" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <button onClick={switchToLogin}>Login</button>
      </p>
    </div>
  );
}



export default RegistrationPage;