import React from "react";
import Header from "./Header";
import '../CSS/Home.css';
import { Link } from "react-router-dom";
import HomePhoto from '../Images/homePhoto.jpg';
import NewYork from '../Images/newyorkk.jpg';
import Mykonos from '../Images/Mykonos.jpg';
import Rome from '../Images/romee.jpg';
import { BsCurrencyEuro } from 'react-icons/bs';
import { BsFillTicketDetailedFill } from 'react-icons/bs';
import { FaCity } from 'react-icons/fa';
import { BsSunglasses } from 'react-icons/bs';
import { BsStars } from 'react-icons/bs';
import Man from '../Images/likeman.jpg';
import HappyMan from '../Images/happyman.png';
import Footer from '../Pages/Footer.jsx';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Avatar1 from '../Images/avatar1.jpg';
import Avatar2 from '../Images/avatar2.jpg';
import Avatar3 from '../Images/avatar3.jpg';



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
                                <div className="book-now">
                                <p className="title">899<BsCurrencyEuro/>  6 days</p>

                                <Link to = "/bookingForm" id="booking-button">Book now</Link> 
                                <br></br>
                                <span><br></br></span>
                                </div>
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
                                <div className="book-now">
                                <p className="title">899<BsCurrencyEuro/>  6 days</p>

                                <Link to = "/bookingForm" id="booking-button">Book now</Link> 
                                <br></br>
                                <span><br></br></span>
                                </div>
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
                            
                                </p>
                                <br />
                                <div className="book-now">
                                <p className="title">899<BsCurrencyEuro/>  6 days</p>

                                <Link to = "/bookingForm" id="booking-button">Book now</Link> 
                                <br></br>
                                <span><br></br></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    </div>
                </div>

                <div className="home-values">
                    <h1 className="home-header">We Are Prishtina Tour & Travel</h1>
                    <h3 className="home-header3 travelH3">* TRAVEL AGENCY IN PRISHTINA* </h3>

                    <div class="row rowContainer">
                        <div class="column">
                            <BsFillTicketDetailedFill className="BsFill"/>
                            <h3>We offer daily tickets</h3>
                            <p>Register to our site and get <br/>
                                notified for every tour</p>
                            <br/>
                            <FaCity className="BsFill"/>
                            <h3>+120 Premium City Tour</h3>
                            <p> Our professional staff travel <br/>
                                all around the world</p>
                        </div>
                        <div class="column">
                            <BsSunglasses className="BsFill"/>
                            <h3>Accessibility Manager</h3>
                            <p>Whenever you will go,<br/>
                            a guide guy will be with the group</p>
                            <br/>
                            <BsStars className="BsFill"/>
                            <h3>5 Stars Acommodation</h3>
                            <p> For our customers, <br/>
                                we offer always the best</p>
                        </div>
                        <div class="column">
                            <img src={HappyMan} alt="likeMan" className="likeman" />
                        </div>
                        
                    </div>

                    </div>

                    <div className="cards-container">
                            <h1 className="home-header">HAPPY TRAVELER</h1>
                            <h3 className="home-header3 travelH3">* Relax & Enjoy * </h3>

                            <div className="slider-container">
                                <Carousel
                                    showArrows={true}  // Enable arrow navigation
                                    infiniteLoop={true}
                                    showStatus={false}
                                    showThumbs={false}
                                >
                                    <div className="card">
                                    <img src={Avatar1} alt="Card 1" />
                                    <h4>John Smith</h4>
                                    <p>From start to finish, my experience with Prishtina Tour&Travel 
                                        has been nothing short of exceptional. 
                                        This journey has left me in awe,
                                        and I couldn't be more grateful for 
                                        the unforgettable memories I've made.
                                        I highly recommend their services to anyone seeking a hassle-free,
                                        unforgettable adventure. </p> 
                                    </div>
                                    <div className="card">
                                    <img src={Avatar2} alt="Card 2" />
                                    <h4>Taylor Rose</h4>
                                    <p>Celebrating my journey with Prishtina Tour&Travel is a must.
                                        Their commitment to crafting exceptional experiences from
                                        start to finish is truly remarkable.
                                        From the moment I engaged with them,
                                        it was evident that every detail was 
                                        meticulously planned and expertly executed. 
                                    </p>
                                    </div>
                                    <div className="card">
                                    <img src={Avatar3} alt="Card 3" />
                                    <h4>Sandra Parc</h4>
                                    <p>From the initial contact, it was clear that Prishtina Tour&Travel 
                                        takes meticulous care in curating unforgettable experiences. 
                                        Their attention to detail and commitment to customer satisfaction have
                                        set a high standard. Even when unexpected situations arose,
                                        their professionalism and dedication shone through.</p>
                                    </div>
                                </Carousel>
                            </div>
                        </div>

                            
                        <div className="endingPoint">
                            <h2 className="home-header end">Subscribe to get last offers from us</h2>
                            <p className="home-header3 endP">-Get notifications for your travel plans by travel experts!- </p>

                        </div>

            </div>
        <Footer/>     
       </>
    )
}

export default Home