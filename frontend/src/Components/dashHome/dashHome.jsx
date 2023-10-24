import React from 'react'
import '../CSS/dashHome.css';


export default function dashHome() {
  return (
    <div className='dashHome'>
       <div className="card-container5">
      <div className="card5">
        <h2>Users</h2>
        <p>Number of Users</p>
      </div>
      <div className="card5">
        <h2>Bookings</h2>
        <p>Number of Bookings</p>
      </div>
      <div className="card5">
        <h2>Employees</h2>
        <p>Number of Employees</p>
      </div>
    </div>

    <div className="widgetContainer">
       <div className="widgeSm">
         <span className="widgeTittle">New Joined Members</span>
       </div>

       <div className="widgeLg">
       <span className="widgeTittle">Latest Bookings</span>
       </div>
    </div>
    </div>
  )
}
