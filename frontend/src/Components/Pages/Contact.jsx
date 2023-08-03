import React from "react";
import Header from "./Header";
import '../CSS/Contact.css'
import {Link} from 'react-router-dom';
import {FaHome} from 'react-icons/fa';
import {FaPhone} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';
import {FaGlobe} from 'react-icons/fa';
import Footer from '../Pages/Footer.jsx';

function Contact() {
    return (
        <>
        <Header />
        <div className="container">
            <div className="main">
            <div className="contact-us">
                <div className="row">
                    <div className="box-1">
                        <h3 className="box-1__title">
                            Send us a message
                        </h3>
                        <form className="box-1__form">
                            <label htmlFor="name">Your Name</label> <br></br>
                            <input type="text" />
                            <br></br> <br></br>
                            <label htmlFor="email">Your Email</label> <br></br>
                            <input type="email" />
                            <br></br><br></br>
                            <label htmlFor="message">Your Message</label> <br></br>
                            <textarea name="" id="" cols="30" rows="7"></textarea>
                        </form>
                        <br></br> <br></br>
                        <button type="submit" className="box-1__btn">Send Message</button>
                    </div>
                    <div className="box-2">
                        <h3 className="box-2__title">
                            Contact Information
                        </h3>
                        <div className="contact-info">
                            <div className="first-row">
                        <div className="address">
                            <FaHome />
                            <Link to = "/" className="contact-link">Address <br></br> 
                                Bregu i Diellit 10, 10000 Prishtine
                            </Link>
                        </div>
                        <div className="phone">
                            <FaPhone />
                            <Link to = "/contact" className="contact-link">Phone <br></br>
                                +383 49 488 909 <br></br>
                                +383 49 544 005
                            </Link>
                        </div>
                        </div>
                        <div className="second-row">
                        <div className="email">
                            <FaEnvelope />
                            <Link to = "/contact" className="contact-link">Email <br></br>
                                prishtina-info@gmail.com <br></br>
                                prishtina-contact@gmail.com
                            </Link>
                        </div>
                        <div className="website">
                            <FaGlobe />
                            <Link to = "/" className="contact-link">Website <br></br>
                                http://localhost:3000
                            </Link>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Contact