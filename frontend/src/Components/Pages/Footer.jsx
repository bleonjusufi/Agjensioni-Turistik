import React from "react";
import '../CSS/Footer.css';
import {Link} from 'react-router-dom';
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

function Footer() {

    return (
        <>
          <footer>
          
                <div className="container2">

                    <div className="left" >
                    <h3 className="titles bottom-left">About Us</h3>
                    <p>
                        Prishtina Tour & Travel is dedicated to providing you with the best travel experiences and making your dreams come true!
                    </p>
                    </div>

                    <div className="middle">
                    <h3 className="titles bottom-left">Contact</h3>
                    <p className="middle-p">Email:  info@prishtina-travel.com</p>
                    <p className="middle-p">Phone:  +1 (123) 456-7890</p>
                    <p className="middle-p">Address:  123 Ahmet Krasniqi, Prishtine, Kosovo</p>
                    </div>

                    <div className="middle2" >
                    <h3 className="titles bottom-left">Follow Us</h3>
                    <ul className="socialLinks">
                        <li>
                        <Link to = "#" className="links"><BsFacebook/></Link>
                        </li>
                        <li>
                        <Link to = "#" className="links"><BsInstagram/></Link>
                        </li>
                        <li>
                        <Link to = "#" className="links"><BsTwitter/></Link>
                        </li>
                    </ul>
                    </div>

                    <div className="right">
                    <h3 className="titles bottom-left">Subscribe</h3>
                    <br />
                    <input type="email" placeholder="write email here..." />
                    <br /> <br />
                    <button className="submit-btn">Submit</button>
                </div>
                </div>

                <hr />
                <div className="bottom">
                    <p>&copy; {new Date().getFullYear()} Prishtina Tour & Travel. All rights reserved.</p>
                </div>
    </footer>
        </>

    )
    
}

export default Footer