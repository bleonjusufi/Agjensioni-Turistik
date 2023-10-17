import React from "react";
import Header from './Header';
import { HiLocationMarker } from 'react-icons/hi';
import Romee from '../Images/Sunset-Rome.jpg';
import Footer from '../Pages/Footer.jsx';
import '../CSS/mykonos.css';
import rome1 from '../Images/romewallpaper.jpg';
import rome2 from '../Images/romeslider.jpg';
import rome4 from '../Images/romeslider3.jpg';
import { BsCurrencyEuro } from 'react-icons/bs';
import { Link } from "react-router-dom";
import logo from '../Images/logo.png';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { MdContactPage } from 'react-icons/md';



function Rome() {
  const images = [
    rome1,
    rome2,
    rome4
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
          <img src={Romee} alt="NewYork" className="nyc"/>
          <h1 className="offers-text">Prishtine - Rome</h1>
        </div>

        <div className="travel-offer">
          <h2 className="ny-header">Prishtine- Rome,Itali</h2>
          <hr className="ny mykonos"/>
        
          <div className="row2">
            <div className="textDiv column2">
              <h3 className="h3-header"><HiLocationMarker className="HiLocationMarker"/> Prishtine - Rome</h3>
              <br />
              <p className="paragraph-nyc">
              Embarking on a journey to Rome, Italy is like stepping into a captivating time capsule, 
              where ancient history and modern life seamlessly intertwine. 
              As you wander through the cobbled streets of this enchanting city,
               you'll be transported back in time while savoring the vibrant culture and culinary delights of the present.<br />
               Your first stop might be the iconic Colosseum, a colossal amphitheater that once hosted thrilling gladiator battles.
                As you stand in its shadow, you can almost hear the echoes of ancient cheers and roars. 
                Nearby, the Roman Forum beckons, inviting you to explore the ruins of temples, basilicas, 
                and marketplaces that once formed the heart of ancient Rome. <br />
                Departure 08:00 <br />
                In Summer every Friday, <br />
                Winter once a month, <br />
                Rome - Prishtine <br />
                Once a week, <br />
                Price round 749<BsCurrencyEuro/>


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
                </div>
              ))}
              <a className="prev" onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)}>&#10094;</a>
              <a className="next" onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)}>&#10095;</a>
            </div>
          </div>
        </div>

        <div className="buttonClass">
        <Link to = "/bookingForm" ><button className="book">Book now</button></Link>
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

export default Rome;
