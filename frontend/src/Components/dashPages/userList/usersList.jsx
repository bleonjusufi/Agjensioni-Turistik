import React from 'react'
import Topbar from '../../Topbar/topbar';
import Sidebar from '../../sidebar/Sidebar';
import '../../CSS/userList.css';
import Dashboard from '../../Dashboard';



export default function usersList() {
  return (
    <div className='usersList'>
      <div className="dashboardDiv">
        <Dashboard/>
      </div>
      <div className="otherContainer">
        </div>        
      <h1>lori</h1>
    </div>
  )
}
