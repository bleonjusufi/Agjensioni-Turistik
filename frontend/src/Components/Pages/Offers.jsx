import React from "react";
import Header from './Header';
import { Link } from "react-router-dom";
import '../CSS/Offers.css';
import NewYork from '../Images/newyorkk.jpg';
import Mykonos from '../Images/Mykonos.jpg';
import Rome from '../Images/romee.jpg';
import Bali from '../Images/Bali.jpg';
import Monaco from '../Images/MONACOO.jpg';
import Egypt from '../Images/egyypt.jpg';
import offersPhoto from '../Images/couple-travel.jpg';
import { BsCurrencyEuro } from 'react-icons/bs';
import Footer from '../Pages/Footer.jsx';
import BookingForm from './bookingForm';

function Offers() {
    return (
     <>
        <Header />
        <div className="content">
            <div>
            <img src={offersPhoto} className="coupleImg" alt="couple-img" />
            <h1 className="offers-text">Offers</h1>
            </div>
          
        <div className="container">
            <div className="mainClass">
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
            <div className="row">
                <div className="offers-column">
                    <div className="offers-card">
                        <img src={Bali} alt="Bali" className="offers-img"/>
                        <div className="container">
                            <h2 className="bottom-left">Prishtine - Bali</h2>
                            <p> 
                            Escape to an island paradise where beauty knows no bounds.
                             Bali awaits with its sun-kissed beaches, emerald rice terraces, and warm hospitality.
                             Indulge in relaxation with world-class spas and wellness retreats. 
                             Let Bali's healing energy rejuvenate your body and soul.
                            </p>
                            <br />
                            <p className="title">2599<BsCurrencyEuro/> 10 days</p>
                       
                            <Link to = "/bookingForm" id="offers-button">Book now</Link>
                            <br></br>
                            <span><br></br></span>
                        </div>
                    </div>
                </div>
                <div className="offers-column">
                    <div className="offers-card">
                        <img src={Monaco} alt="Monaco" className="offers-img"/>
                        <div className="container">
                            <h2 className="bottom-left">Prishtine - Monaco</h2>
                            <p> 
                            Feel the thrill of the iconic Monte Carlo Casino, where elegance meets chance in grand style.
                             Explore the winding streets of Monaco-Ville, where history and tradition blend seamlessly.
                             Experience the splendor of this chic and captivating destination.
                             Monaco, where dreams come to life!
                            </p>
                            <br />
                            <p className="title">505<BsCurrencyEuro/> 4 days</p>
                       
                            <Link to = "/bookingForm" id="offers-button">Book now</Link>
                            <br></br>
                            <span><br></br></span>
                        </div>
                    </div>
                </div>
                <div className="offers-column">
                    <div className="offers-card">
                        <img src={Egypt} alt="Egypt" className="offers-img"/>
                        <div className="container">
                            <h2 className="bottom-left">Prishtine - Egypt</h2>
                            <p> 
                            Unravel the mysteries of ancient wonders in Egypt, a land steeped in history and awe-inspiring marvels.
                             From the majestic Pyramids to the timeless Nile River,
                             this land of pharaohs invites you on an unforgettable odyssey.
                             Egypt, where the past and present coexist in harmony.
                            </p>
                            <br />
                            <p className="title">999<BsCurrencyEuro/> 7 days</p>
                       
                            <Link to = "/bookingForm" id="offers-button">Book now</Link>
                            <br></br>
                            <span><br></br></span> 
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

export default Offers