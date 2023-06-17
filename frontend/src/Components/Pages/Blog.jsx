import React from "react";
import Header from "./Header";
import '../CSS/Blog.css';
import Dubai from '../Images/Dubai.jpg'
import Maldives from '../Images/Maldives.jpg'
import AlRiviera from '../Images/AlbanianRiviera.jpg'
import Noimg from '../Images/noimg.jpg'
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
                            <Link to = "/" id="blog-button">Read more</Link> 
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
                            <Link to = "/" id="blog-button">Read more</Link> 
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
                            <Link to = "/" id="blog-button">Read more</Link>
                            <br></br>
                            <span><br></br></span> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="blog-column">
                    <div className="blog-card">
                        <img src={Noimg} alt="Dubai" className="blog-img"/>
                        <div className="container">
                            <h2>Is Dubai worth it ?</h2>
                            <p className="title">Dubai, UAE</p>
                            <p>Dubai is about to become the best city on earth by the year 2050
                                here are 10 places to visit while you are there
                            </p> <br></br>
                            <Link to = "/" id="blog-button">Read more</Link> 
                            <br></br>
                            <span><br></br></span>
                        </div>
                    </div>
                </div>
                <div className="blog-column">
                    <div className="blog-card">
                        <img src={Noimg} alt="Maldives" className="blog-img"/>
                        <div className="container">
                            <h2>Honeymoon in Maldives</h2>
                            <p className="title">Maldives</p>
                            <p>Dubai is about to become the best city on earth by the year 2050
                                here are 10 places to visit while you are there
                            </p> <br></br>
                            <Link to = "/" id="blog-button">Read more</Link> 
                            <br></br>
                            <span><br></br></span>
                        </div>
                    </div>
                </div>
                <div className="blog-column">
                    <div className="blog-card">
                        <img src={Noimg} alt="AlRiviera" className="blog-img"/>
                        <div className="container">
                            <h2>Albanian Riviera Guide:</h2>
                            <p className="title">Albania</p>
                            <p>Albania’s small size—it'makes it ripe for exploration, from the trendy capital of Tirana to the Albanian Alps.
                            </p>
                            <br></br>
                            <Link to = "/" id="blog-button">Read more</Link>
                            <br></br>
                            <span><br></br></span> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="blog-column">
                    <div className="blog-card">
                        <img src={Noimg} alt="Dubai" className="blog-img"/>
                        <div className="container">
                            <h2>Is Dubai worth it ?</h2>
                            <p className="title">Dubai, UAE</p>
                            <p>Dubai is about to become the best city on earth by the year 2050
                                here are 10 places to visit while you are there
                            </p> <br></br>
                            <Link to = "/" id="blog-button">Read more</Link> 
                            <br></br>
                            <span><br></br></span>
                        </div>
                    </div>
                </div>
                <div className="blog-column">
                    <div className="blog-card">
                        <img src={Noimg} alt="Maldives" className="blog-img"/>
                        <div className="container">
                            <h2>Honeymoon in Maldives</h2>
                            <p className="title">Maldives</p>
                            <p>Dubai is about to become the best city on earth by the year 2050
                                here are 10 places to visit while you are there
                            </p> <br></br>
                            <Link to = "/" id="blog-button">Read more</Link> 
                            <br></br>
                            <span><br></br></span>
                        </div>
                    </div>
                </div>
                <div className="blog-column">
                    <div className="blog-card">
                        <img src={Noimg} alt="AlRiviera" className="blog-img"/>
                        <div className="container">
                            <h2>Albanian Riviera Guide:</h2>
                            <p className="title">Albania</p>
                            <p>Albania’s small size—it'makes it ripe for exploration, from the trendy capital of Tirana to the Albanian Alps.
                            </p>
                            <br></br>
                            <Link to = "/" id="blog-button">Read more</Link>
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