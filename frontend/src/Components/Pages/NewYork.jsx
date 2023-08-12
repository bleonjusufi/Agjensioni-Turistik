import React from "react";
import Header from './Header';
import { HiLocationMarker } from 'react-icons/hi';
import NewYorkk from '../Images/nyc.jpg';
import Footer from '../Pages/Footer.jsx';
import '../CSS/NewYork.css';
import ny1 from '../Images/ny1.jpg';
import ny2 from '../Images/ny2.jpg';
import ny4 from '../Images/ny4jpg.jpg';
import { BsCurrencyEuro } from 'react-icons/bs';
import { Link } from "react-router-dom";
import logo from '../Images/logo.png';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { MdContactPage } from 'react-icons/md';



function NewYork() {
  const images = [
    ny1,
    ny2,
    ny4
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

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
              <h3 className="h3-header"><HiLocationMarker className="HiLocationMarker"/> Prishtine - New York City</h3>
              <br />
              <p className="paragraph-nyc">
                Welcome to our agency, your gateway to an unforgettable New York City experience! Embark on a journey with us that promises to immerse you in the vibrant energy, 
                iconic landmarks, and cultural diversity that define the heart of the Big Apple.
                When you choose to explore New York City with our agency, you're choosing a curated adventure that goes beyond the ordinary. 
                Our expertly crafted itineraries ensure you won't miss a single moment of the city's magic, 
                from the towering marvels of Times Square to the serene beauty of Central Park.
                Our team of seasoned travel professionals is dedicated to making your visit seamless and extraordinary. 
                Discover hidden gems tucked away in diverse neighborhoods, savor the culinary delights that span the globe, and witness world-class entertainment
                that only New York City can offer. <br /> 
                Departure 07:30 <br />
                In Summer every Monday, <br />
                Winter once a month, <br />
                New York - Prishtine <br />
                Once a month, <br />
                Price round 1010<BsCurrencyEuro/>


              </p>
            </div>
            <div className="slideshow-container column2">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`mySlides fade ${index === currentIndex ? 'active' : ''}`}
                >
                  <div className="numbertext">{index + 1} / {images.length}</div>
                  <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
                  <div className="text">Caption Text</div>
                </div>
              ))}
              <a className="prev" onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)}>&#10094;</a>
              <a className="next" onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)}>&#10095;</a>
            </div>
          </div>
        </div>

        <div className="buttonClass">
        <Link to = "#" ><button className="book">Book now</button></Link>
        </div>

        <div className="info">
            <div className="row3">
                <div className="column2">
                    <h2 className="agents-title">Talk to our agents</h2>
                    <ul>
                        <li>9 am - 7 pm Monday through Saturday.
                            Otherwise, email us anytime. 
                            On average we provide quotes within 6 hours during business hours and the next day
                             during off business hours.
                             Privately guided trips allow you to be in control of all the details of your trip 
                             - departure times, accommodations, extra nights, extra activities, extra experiences 
                             - what you want and how you want it. </li>
                    </ul>
                </div>

                <div className="column2">
                  <div className="info-agency">
                    <img src={logo} alt="logo" className="logoPhoto" />
                        <br />
                        <div className="contact">
                        <BsFillTelephoneFill className="Fill fill2"/>  <HiOutlineMail className="Fill "/> <MdContactPage className="Fill"/>
                        <h3 className="h3-info">Phone </h3>
                        <h3 className="h3-info">Email </h3>
                        <h3 className="h3-info"> Contact Us</h3>
                        </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NewYork;
