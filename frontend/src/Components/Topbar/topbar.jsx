import React from 'react'
import {IoMdNotificationsOutline, IoIosSettings} from 'react-icons/io';
import adminAvatar1 from '../Images/adminAvatarGirl.jpg';

export default function topbar() {
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="topLeft">
          <span className="admin-logo">dashboard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
              <IoIosSettings className='IoMdNotificationsOutline'/>
            </div>
          <div className="topbarIconContainer">
            <IoMdNotificationsOutline className='IoMdNotificationsOutline'/>
            <span className="topIconBadge">2</span>
          </div>
         <img src={adminAvatar1} alt="admin" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}
