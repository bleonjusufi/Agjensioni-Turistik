import React from "react";
import {Link} from 'react-router-dom'
import '../CSS/booking.css'

function bookingForm() {
    return (
        <body className="body">
    <main>
      <div class="container">
        <div class="log-in__container">
          <form id="form" class="form" autocomplete="off">
            <h2>Booking Form</h2>
            <div class="form-control">
              <label for="text">Leaving From</label>
              <input
                type="text"
                id="from"
                placeholder="Enter from where you leaving..."
              />
            </div>
            <div class="form-control">
              <label for="text">Going To</label>
              <input
                type="password"
                id="to"
                placeholder="Enter your destination..."
              />
            </div>
            <div class="form-control">
              <label for="date">Going Date</label>
              <input
                type="date"
                id="date"
              />
            </div>
            <div class="form-control">
              <label for="date">Coming Back Date</label>
              <input
                type="date"
                id="date"
              />
            </div>
            <div class="form-control">
              <label for="number">Adults</label>
              <input
                type="number"
                id="integer"
                placeholder="Enter passanger number.."
              />
            </div>
            <div class="form-control">
              <label for="integer">Children</label>
              <input
                type="number"
                id="integer"
                placeholder="Enter children number.."
              />
            </div>
            <div class="buttons">
              <Link to = "/" class="cancel-button">Return</Link> 
              <button type="submit">Book</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  </body>
    )
}

export default bookingForm