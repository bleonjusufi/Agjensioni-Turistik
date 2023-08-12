import React from "react";
import Header from "./Header";
import aboutUs from '../Images/aboutus3.jpg';
import '../CSS/aboutUs.css';

function About() {
    return (
        <>
        <Header />
        <div className="container-aboutUs">
          <div className="head">
            <img src={aboutUs} alt="aboutUs" className="nyc"/>
            <h1 className="offers-text">About Us</h1>
          </div>
  
          <div className="travel-offer">
            <h2 className="aboutUs-text">About Us</h2>
            <hr className="aboutus"/>
            </div>

            <div className="about-info">
                
            </div>
         </div>
     </>
    );
}

export default About;