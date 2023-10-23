import React from 'react'
import '../CSS/dashSidebar.css';
import {MdLineStyle, MdOutlineMail, MdOutlineLocalOffer, MdOutlineRateReview,MdOutlineMiscellaneousServices} from 'react-icons/md';
import {IoPeopleSharp} from 'react-icons/io5';
import {BsCheckCircle, BsPeople} from 'react-icons/bs';
import {BiSolidBookHeart} from 'react-icons/bi';


export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Admin Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <MdLineStyle className='dashIcons'/>
                         Home
                    </li>
                    <li className="sidebarListItem">
                        <BsPeople className='dashIcons'/>
                         Users
                    </li>
                    <li className="sidebarListItem">
                        <BsCheckCircle className='dashIcons'/>
                         Bookings
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Admin Configurations</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <MdLineStyle className='dashIcons'/>
                         Home Offers
                    </li>
                    <li className="sidebarListItem">
                        <MdOutlineLocalOffer className='dashIcons'/>
                         Offers
                    </li>
                    <li className="sidebarListItem">
                        <MdOutlineRateReview className='dashIcons'/>
                         Reviews
                    </li>
                    <li className="sidebarListItem">
                        <BiSolidBookHeart className='dashIcons'/>
                         Blogs
                    </li>
                    <li className="sidebarListItem">
                        <MdOutlineMiscellaneousServices className='dashIcons'/>
                         Services
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <MdOutlineMail className='dashIcons'/>
                        Feedback
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <IoPeopleSharp className='dashIcons'/>
                        Employees
                    </li>
                </ul>
            </div>

        </div>
    </div>
  )
}
