import React from "react";
import {Link} from 'react-router-dom'
import '../CSS/Login.css'

function Login() {
    return (
        <body className="body">
    <main>
      <div class="container">
        <div class="log-in__container">
          <form id="form" class="form" autocomplete="off">
            <h2>Login</h2>
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
            <div class="buttons">
              <Link to = "/" class="cancel-button">Return</Link> 
              <button type="submit">Login</button>
            </div>
            <Link to = "/signup">Create account</Link>
          </form>
        </div>
      </div>
    </main>
  </body>
    )
}

export default Login