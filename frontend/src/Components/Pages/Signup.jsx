import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    emri: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      // Make a POST request to the Node.js backend
      const response = await axios.post('http://localhost:8080/Signup', formData);

      // Handle the response (you may want to redirect the user or show a success message)
      console.log(response.data);
    } catch (error) {
      // Handle errors (you may want to show an error message to the user)
      console.error('Registration failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="emri" value={formData.name} onChange={handleChange} required />
      </label>
      <br />

      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <br />

      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </label>
      <br />
      
      <label>
        Confirm Password:
        <input
          type="password"
          name="password2"
          value={formData.password2}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <button type="submit">Register</button>
    </form>
  );
};

export default Signup;