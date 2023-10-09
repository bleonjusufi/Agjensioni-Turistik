import React from "react";
import Header from "./Header";
import '../CSS/Home.css';
import { Link } from "react-router-dom";
import Footer from '../Pages/Footer.jsx';
import HomePhoto from '../Images/homePhoto.jpg';
import NewYork from '../Images/newyorkk.jpg';
import Mykonos from '../Images/Mykonos.jpg';
import Rome from '../Images/romee.jpg';
import { BsCurrencyEuro } from 'react-icons/bs';
import { BsFillTicketDetailedFill } from 'react-icons/bs';


function Home() {
    return(
       <>
        <Header />   
        <div className="home-container">
            <div className="home-wrapper1">
            <img src={HomePhoto} alt="HomePhoto" className="nyc picture"/>
            <h1 className="offers-text mainText">The World Is Yours</h1>
            <h3 className="text3">Home Page</h3>
            </div>

            <div className="tours-div">
                <h1 className="home-header">TRENDING TOURS</h1>
                <h3 className="home-header3">*Pack And Go* </h3>

                <div className="row-conntainer">
                <div className="row">
                <div className="offers-column">
                    <div className="offers-card">
                        <Link to = "/NewYork"> <img src={NewYork} alt="NewYork" className="offers-img"/></Link> 
                        <div className="container">
                            <Link to = "/NewYork"><h2 className="bottom-left linkClass">Prishtine - NewYork</h2></Link>
                            <p> 
                            Explore the iconic landmarks, vibrant neighborhoods, and endless possibilities of the city that never sleeps. 
                            From Broadway's magic to the Statue of Liberty's embrace, 
                            New York beckons with unforgettable experiences.
                            Your adventure begins here!
                            
                            </p>
                            <br />
                            <p className="title">1010<BsCurrencyEuro/> 5 days</p>
                       
                            <Link to = "/bookingForm" id="offers-button">Book now</Link> 
                            <br></br>
                            <span><br></br></span>
                        </div>
                    </div>
                </div>
                <div className="offers-column">
                    <div className="offers-card">
                    <Link to = "/Mykonos"> <img src={Mykonos} alt="Mykonos" className="offers-img"/></Link>
                        <div className="container">
                        <Link to = "/Mykonos"><h2 className="bottom-left linkClass">Prishtine - Mykonos</h2></Link>
                            <p> 
                            Escape to Mykonos and let the tranquility of the Greek Isles envelop your senses.
                             Discover a world where time slows down, and the essence of life's true beauty comes to life. 
                            Your journey to the heart of Mykonos awaits, where dreams are woven into reality.
                            </p>
                            <br />
                            <p className="title">899<BsCurrencyEuro/>  6 days</p>
                       
                            <Link to = "/bookingForm" id="offers-button">Book now</Link> 
                            <br></br>
                            <span><br></br></span>
                        </div>
                    </div>
                </div>
                <div className="offers-column">
                    <div className="offers-card">
                    <Link to = "/Rome"> <img src={Rome} alt="Rome" className="offers-img"/></Link>
                        <div className="container">
                        <Link to = "/Rome"><h2 className="bottom-left linkClass">Prishtine - Rome</h2></Link>
                            <p> 
                            Let the charm of Rome captivate your heart, and immerse yourself in a journey of history, culture
                             and pure enchantment. Your adventure awaits in the Eternal City, 
                            where every step leads to a new chapter in the story of Rome. 
                            Your unforgettable Roman adventure awaits!
                            </p>
                            <br />
                            <p className="title">659<BsCurrencyEuro/>  5 days</p>
                       
                            <Link to = "/bookingForm" id="offers-button">Book now</Link>
                            <br></br>
                            <span><br></br></span> 
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </div>

            <div className="home-values">
                <h1 className="home-header">We Are Prishtina Tour & Travel</h1>
                <h3 className="home-header3">* TRAVEL AGENCY IN PRISHTINA* </h3>

                <div class="row">
                    <div class="column">
                        <BsFillTicketDetailedFill/>
                        <h3>We offer daily tickets</h3>
                        <p>Register to our site and get notified for every tour</p>
                    </div>
                    <div class="column"></div>
                    <div class="column"></div>
                </div>

                </div>
        </div>
            
       </>
    )
}

export default Home