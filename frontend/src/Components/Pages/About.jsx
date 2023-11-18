import React from "react";
import Header from "./Header";
import Plane from '../Images/plane.jpg';
import { SiYourtraveldottv } from 'react-icons/si';
import { TbZoomMoney } from 'react-icons/tb';
import { FcServices } from 'react-icons/fc';
import '../CSS/aboutUs.css';
import { Link } from "react-router-dom";
import Footer from '../Pages/Footer.jsx';

function About() {
    return (
        <>
        <Header />
        <div className="container-aboutUs">
          <div className="head">
            <img src={Plane} alt="aboutUs" className="nyc"/>
            <h1 className="about-title">About Us</h1>
          </div>
  
          <div className="travel-offer">
            <h2 className="aboutUs-text">Prishtina Tour & Travel | Travel Agency</h2>
            <hr className="aboutus"/>
            </div>

            <div className="general-info">
                <h2 className="questions">Why us?</h2>
                <p>
                Your Gateway to Extraordinary Adventures. Our team's deep-rooted love for exploration,
                 seamless planning, and personalized touch ensures that every journey becomes an unforgettable tale. 
                 Immerse yourself in authentic experiences, traverse hidden gems, and forge lasting connections. 
                 Join us in embracing the world's wonders, one remarkable destination at a time. 
                Your adventure begins with Prishtina Tour & Travel – where every moment is a passport to the extraordinary
                </p>

                <h2 className="questions qu">What makes us different?</h2>
                <p>
                At Prishtina Tour & Travel, we don't just plan trips; we design transformative experiences. 
                Our unwavering commitment to personalized service, off-the-beaten-path exploration, and a deep understanding of diverse cultures sets us apart.
                 We go beyond the ordinary to curate journeys that linger in your heart and mind, creating a symphony of moments that are uniquely yours.
                </p>

                <h2 className="questions qu">How do we measure success?</h2>
                <p>
                At Prishtina Tour & Travel, success is measured not merely by miles traveled, but by the smiles inspired.
                We gauge our achievements through the lasting connections we forge, the authentic cultural experiences we provide,
                and the unforgettable memories we create for each traveler. 
                Our true triumph lies in knowing that we've ignited a sense of wonder, broadened horizons, and left a positive impact on the destinations we explore. 
                It's when our clients return home with hearts full of cherished moments that we consider our mission accomplished.
                </p>
            </div>

            <div className="values">
              <h2 className="values-header">Our Values</h2>
              <hr className="hr3" />
              <div className="row3">
                <div className="column3">
                <SiYourtraveldottv className="icons airplane"/>
                <h3>Best Tours</h3>
                <p className="value-text">
                Our Best Tours Await. 
                We take immense pride in crafting journeys that redefine exploration.
                With meticulous planning and a passion for perfection,
                we offer nothing less than the best.
                Join us and discover the world through a lens of unparalleled experiences.
                </p>
                </div>

                <div className="column3">
                <FcServices className="icons"/>
                <h3>Best Service</h3>
                <p className="value-text">
                   At every step, we are committed to providing you with the very best service, 
                   meticulously curated to cater to your every need.
                   From personalized itineraries that reflect your unique preferences to seamless 
                   logistics that ensure a stress-free adventure, we redefine the meaning of exceptional travel. 
                </p>
                </div>

                <div className="column3">
                <TbZoomMoney className="icons money"/>
                <h3>Best Prices</h3>
                <p className="value-text">
                  We believe that exceptional travel should be accessible to all.
                  Our traveling agency offers you a range of unbeatable prices without compromising on quality.
                  Whether you're seeking luxury or budget-friendly options, we ensure that every dollar you invest
                  in your journey is met with unmatched experiences. 
                </p>
                </div>
              </div>
            </div>

            <div className="ending">
              <h2>Explore our offers now!</h2>
              <Link to = "/offers" ><button className="book more">Offers Here</button></Link>
        
            </div>

         </div>
         <Footer />
     </>
    );
}

export default About;