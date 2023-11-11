import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/Signup.css'

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

    if (formData.password !== formData.password2) {
      alert("Passwords don't match");
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/Signup', formData);
      console.log(response.data);
    } catch (error) {
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