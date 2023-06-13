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
            <h2>Regjistrohu</h2>
            <div class="form-control">
              <label for="username">Emri i përdoruesit</label>
              <input
                type="text"
                id="username"
                placeholder="Shëno emrin tuaj të përdoruesit"
              />
            </div>
            <div class="form-control">
              <label for="email">Adresa Elektornike</label>
              <input
                type="text"
                id="email"
                placeholder="Shëno adresën elektronike"
              />
            </div>
            <div class="form-control">
              <label for="password">Fjalëkalimi</label>
              <input
                type="password"
                id="password"
                placeholder="Shëno fjalëkalimin"
              />
            </div>
            <div class="form-control">
              <label for="password2">Konfirmimi i Fjalëkalimit</label>
              <input
                type="password"
                id="password2"
                placeholder="Shëno fjalëkalimin përsëri"
              />
            </div>
            <div class="buttons">
              <Link to = "/" class="cancel-button">Kthehu Mbrapa</Link> 
              <button type="submit">Regjistrohu</button>
            </div>
            <Link to = "/login">Keni llogari, kycuni</Link>
          </form>
        </div>
      </div>
    </main>
  </body>
    )
}

export default Signup