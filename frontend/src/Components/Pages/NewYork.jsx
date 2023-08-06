import React from "react";
import Header from './Header';
import { Link } from "react-router-dom";
import '../CSS/NewYork.css';
import NewYorkk from '../Images/nyc.jpg';
import Footer from '../Pages/Footer.jsx';
import { HiLocationMarker } from 'react-icons/hi';
import HeroSlider, {Slider} from 'hero-slider';

function NewYork() {
    return (
     <>
        <Header />
        <div className="wrap">
            <div className="head">
            <img src={NewYorkk} alt="NewYork" className="nyc"/>
            <h1 className="offers-text">Prishtine - New York</h1>
            </div>

            <div className="travel-offer">
                <h2 className="ny-header">Prishtine - New York City</h2>
                <hr className="ny"/>
            
                    <div className="row2">
                        <div className="textDiv column2">
                            <h3><HiLocationMarker className="HiLocationMarker"/> Prishtine - New York City</h3>
                            <p>
                            Welcome to our agency, your gateway to an unforgettable New York City experience! Embark on a journey with us that promises to immerse you in the vibrant energy, 
                            iconic landmarks, and cultural diversity that define the heart of the Big Apple.
                            When you choose to explore New York City with our agency, you're choosing a curated adventure that goes beyond the ordinary. 
                            Our expertly crafted itineraries ensure you won't miss a single moment of the city's magic, 
                            from the towering marvels of Times Square to the serene beauty of Central Park.
                            Our team of seasoned travel professionals is dedicated to making your visit seamless and extraordinary. 
                            Discover hidden gems tucked away in diverse neighborhoods, savor the culinary delights that span the globe, and witness world-class entertainment
                            that only New York City can offer.
                            </p>
                        </div>
                        <div className="slideshow-container column2">
                            <HeroSlider>
                             </HeroSlider>
                        </div>
                    </div>
                </div>
            </div>
    </>
        )
  }
  export default NewYork