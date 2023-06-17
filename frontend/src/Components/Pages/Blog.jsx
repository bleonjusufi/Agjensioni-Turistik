import React from "react";
import Header from "./Header";
import '../CSS/Blog.css';
import Dubai from '../Images/Dubai.jpg'
import Maldives from '../Images/Maldives.jpg'
import AlRiviera from '../Images/AlbanianRiviera.jpg'
import Antalya from '../Images/Antalya.jpg'
import Milan from '../Images/Milan.jpg'
import Paris from '../Images/Paris.jpg'
import { Link } from "react-router-dom";

function Blog() {
    return (
        <>
        <Header />
        <div className="container">
            <div className="main">
            <div className="row">
                <div className="blog-column">
                    <div className="blog-card">
                        <img src={Dubai} alt="Dubai" className="blog-img"/>
                        <div className="container">
                            <h2>Is Dubai worth it ?</h2>
                            <p className="title">Dubai, UAE</p>
                            <p>Dubai is about to become the best city on earth by the year 2050
                                here are 10 places to visit while you are there
                            </p> <br></br>
                            <Link to = "#" id="blog-button">Read more</Link> 
                            <br></br>
                            <span><br></br></span>
                        </div>
                    </div>
                </div>
                <div className="blog-column">
                    <div className="blog-card">
                        <img src={Maldives} alt="Maldives" className="blog-img"/>
                        <div className="container">
                            <h2>Honeymoon in Maldives</h2>
                            <p className="title">Maldives</p>
                            <p>Maldives is the ideal place for honeymoon, here are listed the best things to do there
                                with your loved one
                            </p> <br></br>
                            <Link to = "#" id="blog-button">Read more</Link> 
                            <br></br>
                            <span><br></br></span>
                        </div>
                    </div>
                </div>
                <div className="blog-column">
                    <div className="blog-card">
                        <img src={AlRiviera} alt="AlRiviera" className="blog-img"/>
                        <div className="container">
                            <h2>Albanian Riviera Guide:</h2>
                            <p className="title">Albania</p>
                            <p>Albania’s small size—it'makes it ripe for exploration, from the trendy capital of Tirana to the Albanian Alps.
                            </p>
                            <br></br>
                            <Link to = "#" id="blog-button">Read more</Link>
                            <br></br>
                            <span><br></br></span> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="blog-column">
                    <div className="blog-card">
                        <img src={Antalya} alt="Antalya" className="blog-img"/>
                        <div className="container">
                            <h2>Best resorts in Antalya</h2>
                            <p className="title">Antalya, Turkey</p>
                            <p>Antalya is always known for its luxurious resorts but 
                                this year there have been massive changes
                            </p> <br></br>
                            <Link to = "#" id="blog-button">Read more</Link> 
                            <br></br>
                            <span><br></br></span>
                        </div>
                    </div>
                </div>
                <div className="blog-column">
                    <div className="blog-card">
                        <img src={Milan} alt="Milan" className="blog-img"/>
                        <div className="container">
                            <h2>Explore Milan</h2>
                            <p className="title">Milan, Italy</p>
                            <p>Milan is a vibrant and cosmopolitan city located in the northern part of the country.
                            One of the first things that strikes visitors...
                            </p> <br></br>
                            <Link to = "#" id="blog-button">Read more</Link> 
                            <br></br>
                            <span><br></br></span>
                        </div>
                    </div>
                </div>
                <div className="blog-column">
                    <div className="blog-card">
                        <img src={Paris} alt="Paris" className="blog-img"/>
                        <div className="container">
                            <h2>The city of light</h2>
                            <p className="title">Paris, France</p>
                            <p>Known as the "City of Light," Paris is celebrated for its unrivaled beauty, iconic landmarks and artistic heritage.
                            </p>
                            <br></br>
                            <Link to = "#" id="blog-button">Read more</Link>
                            <br></br>
                            <span><br></br></span> 
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Blog