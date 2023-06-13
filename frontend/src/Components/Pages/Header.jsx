import React from "react";
import '../CSS/Header.css';
import {Link} from 'react-router-dom';
import logo from '../Images/logo.png'

function Header() {
    return(
        <div className="header">
            <div className="container">
            <div className="header-wrapper">
                <div className="logo">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className="navbar">
                    <ul className="header-navigation__list">
                        <Link to = "/" className="li">Home</Link>
                        <Link to = "/offers" className="li">Offers</Link>
                        <Link to = "/blog" className="li">Blog</Link>
                        <Link to = "/about" className="li">About Us</Link>
                        <Link to = "/contact" className="li">Contact Us</Link>
                    </ul>
                </div>
                <div className="registration">
                    <Link to = "/login" className="user-login__btn">Login</Link>
                    <Link to = "/signup" className="user-signup__btn">Sign Up</Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Header