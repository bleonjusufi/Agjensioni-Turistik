import React from 'react'
import '../CSS/dashSidebar.css';
import {MdLineStyle, MdOutlineMail, MdOutlineLocalOffer, MdOutlineRateReview,MdOutlineMiscellaneousServices} from 'react-icons/md';
import {IoPeopleSharp} from 'react-icons/io5';
import {BsCheckCircle, BsPeople, BsCurrencyDollar} from 'react-icons/bs';
import {BiSolidBookHeart} from 'react-icons/bi';
import {Link} from 'react-router-dom';


export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Admin Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <MdLineStyle className='dashIcons'/>
                        <Link to="/" className='link'>Home</Link>
                    </li>
                    <li className="sidebarListItem">
                        <BsPeople className='dashIcons'/>
                        <Link to="/users" className='link'>Users</Link>
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
                        <Link to="/offersManagement" className='link'>Offers</Link>
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
                    <li className="sidebarListItem">
                        <BsCurrencyDollar className='dashIcons'/>
                        Payments
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <IoPeopleSharp className='dashIcons'/>
                        <Link to="/employees" className='link'>Employees</Link>
                    </li>
                </ul>
            </div>

        </div>
    </div>
  )
}
