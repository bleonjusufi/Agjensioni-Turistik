import React from "react";
import Header from "./Header";
import '../CSS/Contact.css'

function Contact() {
    return (
        <>
        <Header />
        <div className="container">
            <div className="contact-us">
                <div className="send-us__msg">
                    <h3 className="contact-msg__title">Send us a message</h3>
                    <label htmlFor="name">Your Name</label> <br></br>
                    <input type="text" autoComplete="off" /> 
                    <br></br> <br></br>
                    <label htmlFor="email">Your Email</label> <br></br>
                    <input type="email" />
                    <br></br> <br></br>
                    <label htmlFor="msg">Your Message</label> <br></br>
                    <textarea name="" placeholder="Write message here" id="" cols="30" rows="7"></textarea>
                    <br></br> <br></br>
                    <button type="submit" className="send-btn">Send Message</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact