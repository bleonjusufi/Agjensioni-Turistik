import React from "react";
import Header from "./Header";
import aboutUs from '../Images/aboutus3.jpg';
import about from '../Images/about.jpg';
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

            <div className="about-info row3">
                <div className="column3">
                
                    <p>
                      As a new company in the market and the Tours Operation, 
                      PRISHTINA TOUR & TRAVEL is focused on providing services to the highest levels. 
                      Focusing on the maximum quality of service, professional staff, 
                      colossal investments that have been with a great goal to become the number one tour operator, 
                      Prishtina Tour & Travel in 2014 soon moved into the elite top transport companies and tourism in Albania. 
                      Our company allows you to touch any part of the land unexplored Albanian archaeological sites,
                      the Albanian Alps, castles, monuments of the great historical importance and any other place that you dreamed. 
                      Prishtina Tour & Travel 2014 offers all these services with the best means of transportation, the latest technology which offers convenience, 
                      comfort and fun. VIP transport for everyone that wants wireless connection, comfortable seats and a travel experience that you’ve 
                      never experienced. Transporting clients is supported not only within Albanian territory but in every European country and our service
                      wherever required. A qualified staff expects to serve 24/7 7 to make your vacations a great experience, 
                      trips to any place that you have dreamed
                    </p>
                </div>
                <div className="column3">
                  <img src={about} alt="about" className="agent"/>
                </div>
            </div>
         </div>
     </>
    );
}

export default About;