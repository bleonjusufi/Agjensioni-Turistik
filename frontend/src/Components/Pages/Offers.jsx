import React from "react";
import Header from './Header';
import { Link } from "react-router-dom";
import '../CSS/Offers.css';
import NewYork from '../Images/newyorkk.jpg';
import Mykonos from '../Images/Mykonos.jpg';
import Rome from '../Images/romee.jpg';
import Bali from '../Images/Bali.jpg';
import Monaco from '../Images/MONACOO.jpg';
import Egypt from '../Images/egypt.jpg';
import offersPhoto from '../Images/couple-travel.jpg';

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
                        <img src={NewYork} alt="NewYork" className="offers-img"/>
                        <div className="container">
                            <h2 className="bottom-left">NewYork</h2>
                            <p className="title">"The City That Never Sleeps"</p>
                            <p>Explore the iconic landmarks, vibrant neighborhoods, and endless possibilities of the city that never sleeps. 
                                From Broadway's magic to the Statue of Liberty's embrace, 
                                New York beckons with unforgettable experiences.
                            </p> <br></br>
                            <Link to = "#" id="offers-button">Read more</Link> 
                            <br></br>
                            <span><br></br></span>
                        </div>
                    </div>
                </div>
                <div className="offers-column">
                    <div className="offers-card">
                        <img src={Mykonos} alt="Mykonos" className="offers-img"/>
                        <div className="container">
                            <h2 className="bottom-left">Mykonos</h2>
                            <p className="title">Unleash the Magic of the Greek Isles!</p>
                            <p>Escape to Mykonos and let the tranquility of the Greek Isles envelop your senses. 
                                Discover a world where time slows down, and the essence of life's true beauty comes to life.
                                 Your journey to the heart of Mykonos awaits, 
                                where dreams are woven into reality.
                            </p> <br></br>
                            <Link to = "#" id="offers-button">Read more</Link> 
                            <br></br>
                            <span><br></br></span>
                        </div>
                    </div>
                </div>
                <div className="offers-column">
                    <div className="offers-card">
                        <img src={Rome} alt="Rome" className="offers-img"/>
                        <div className="container">
                            <h2 className="bottom-left">Albanian Riviera Guide:</h2>
                            <p className="title">Albania</p>
                            <p>Albania’s small size—it'makes it ripe for exploration, from the trendy capital of Tirana to the Albanian Alps.
                            </p>
                            <br></br>
                            <Link to = "#" id="offers-button">Read more</Link>
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
                            <h2 className="bottom-left">Best resorts in Bali</h2>
                            <p className="title">Bali, Turkey</p>
                            <p>Bali is always known for its luxurious resorts but 
                                this year there have been massive changes
                            </p> <br></br>
                            <Link to = "#" id="offers-button">Read more</Link> 
                            <br></br>
                            <span><br></br></span>
                        </div>
                    </div>
                </div>
                <div className="offers-column">
                    <div className="offers-card">
                        <img src={Monaco} alt="Monaco" className="offers-img"/>
                        <div className="container">
                            <h2 className="bottom-left">Explore Monaco</h2>
                            <p className="title">Monaco, Italy</p>
                            <p>Monaco is a vibrant and cosmopolitan city located in the northern part of the country.
                            One of the first things that strikes visitors...
                            </p> <br></br>
                            <Link to = "#" id="offers-button">Read more</Link> 
                            <br></br>
                            <span><br></br></span>
                        </div>
                    </div>
                </div>
                <div className="offers-column">
                    <div className="offers-card">
                        <img src={Egypt} alt="Egypt" className="offers-img"/>
                        <div className="container">
                            <h2 className="bottom-left">The city of light</h2>
                            <p className="title">Egypt, France</p>
                            <p>Known as the "City of Light," Egypt is celebrated for its unrivaled beauty, iconic landmarks and artistic heritage.
                            </p>
                            <br></br>
                            <Link to = "#" id="offers-button">Read more</Link>
                            <br></br>
                            <span><br></br></span> 
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
     </>

        
    )
}

export default Offers