import React, { useState } from "react";
import {Link} from 'react-router-dom'
import '../CSS/Signup.css'

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        // Handle successful signup, e.g., redirect the user to the login page.
        console.log('Signup successful!');
      } else {
        // Handle errors, e.g., display an error message.
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
    return (
      <body className="body">
      <main>
        <div className="container">
          <div className="sign-up__container">
            <form id="form" className="form" autoComplete="off" onSubmit={handleSubmit}>
              <h2>Sign Up</h2>
              <div className="form-control">
                <label htmlFor="username">Your Name</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter Your Name"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label htmlFor="password2">Confirm Password</label>
                <input
                  type="password"
                  id="password2"
                  name="password2"
                  placeholder="Confirm Password"
                  value={formData.password2}
                  onChange={handleChange}
                />
              </div>
              <div className="buttons">
                <a href="/" className="cancel-button">Return</a>
                <button type="submit">Sign Up</button>
              </div>
              <a href="/login">Already have an account! Login here</a>
            </form>
          </div>
        </div>
      </main>
    </body>
    )
}

export default Signup