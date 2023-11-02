import React from 'react'
import Topbar from '../../Topbar/topbar';
import Sidebar from '../../sidebar/Sidebar';
import '../../CSS/userList.css';
import Dashboard from '../../Dashboard';



export default function usersList() {
  return (
    <div className="usersList">
            <Topbar/>
            <div className='dashboardContainer'>
                <Sidebar/>
                 <div className="usersWrapper">
                  <h1>Users</h1>
                 </div>
                
            </div>
        </div>
        
  )
}
