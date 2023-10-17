import React from "react";
import Header from './Header';
import { HiLocationMarker } from 'react-icons/hi';
import Mykonoss from '../Images/my.jpg';
import Footer from '../Pages/Footer.jsx';
import '../CSS/mykonos.css';
import my1 from '../Images/mykonosslider4.jpg';
import my2 from '../Images/mykonosslider2.jpg';
import my4 from '../Images/mykonosslider3.jpg';
import { BsCurrencyEuro } from 'react-icons/bs';
import { Link } from "react-router-dom";
import logo from '../Images/logo.png';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { MdContactPage } from 'react-icons/md';



function Mykonos() {
  const images = [
    my1,
    my2,
    my4
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
          <img src={Mykonoss} alt="NewYork" className="nyc"/>
          <h1 className="offers-text">Prishtine - Mykonos</h1>
        </div>

        <div className="travel-offer">
          <h2 className="ny-header">Prishtine - Mykonos</h2>
          <hr className="ny mykonos"/>
        
          <div className="row2">
            <div className="textDiv column2">
              <h3 className="h3-header"><HiLocationMarker className="HiLocationMarker"/> Prishtine - Mykonos</h3>
              <br />
              <p className="paragraph-nyc">
              Welcome to our agency, your gateway to an unforgettable Mykonos experience!
               Embark on a journey with us that promises to immerse you in the vibrant energy, picturesque landscapes,
               and cultural richness that define the heart of this Greek paradise.
               When you choose to explore Mykonos with our agency, you're choosing a tailored adventure that 
               goes beyond the ordinary. Our meticulously designed itineraries ensure you won't miss 
               a single moment of the island's charm, from the stunning beaches and charming villages to the captivating sunsets
               over the Aegean Sea. Our team of experienced travel professionals is dedicated to making your visit seamless and extraordinary.
               Discover hidden gems nestled in charming alleyways, indulge in authentic Greek cuisine that tantalizes your taste buds, and experience
               the warmth of Greek hospitality that makes Mykonos truly special. <br />
                Departure 08:00 <br />
                In Summer every Friday, <br />
                Winter once a month, <br />
                Mykonos - Prishtine <br />
                Once a week, <br />
                Price round 900<BsCurrencyEuro/>


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

export default Mykonos;
