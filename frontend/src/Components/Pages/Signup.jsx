import React from "react";
import {Link} from 'react-router-dom'
import '../CSS/Signup.css'

function Signup() {
    return (
        <body className="body">
    <main>
      <div class="container">
        <div class="sign-up__container">
          <form id="form" class="form" autocomplete="off">
            <h2>Sign Up</h2>
            <div class="form-control">
              <label for="username">Your Name</label>
              <input
                type="text"
                id="username"
                placeholder="Enter Your Name"
              />
            </div>
            <div class="form-control">
              <label for="email">Email Address</label>
              <input
                type="text"
                id="email"
                placeholder="Enter Email Address"
              />
            </div>
            <div class="form-control">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
              />
            </div>
            <div class="form-control">
              <label for="password2">Confirm Password</label>
              <input
                type="password"
                id="password2"
                placeholder="Confirm Password"
              />
            </div>
            <div class="buttons">
              <Link to = "/" class="cancel-button">Return</Link> 
              <button type="submit">Sign Up</button>
            </div>
            <Link to = "/login">Already have an account! Login here</Link>
          </form>
        </div>
      </div>
    </main>
  </body>
    )
}

export default Signup