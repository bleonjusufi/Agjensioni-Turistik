import React from "react";
import Header from "./Header";
import '../CSS/Blog.css';
import Dubai from '../Images/Dubai.jpg'
import { Link } from "react-router-dom";

function Blog() {
    return (
        <>
        <Header />
        <div className="container">
            <div className="row">
                <div className="blog-column">
                    <div className="blog-card">
                        <img src={Dubai} alt="Dubai" className="blog-img"/>
                        <div className="container">
                            <h2>Tourist Attractions in Dubai</h2>
                            <p className="title">Dubai, UAE</p>
                            <p>Dubai is about to become the best city on earth by the year 2050
                                here are 10 places to visit while you are there
                            </p> <br></br>
                            <Link to = "/" className="blog-button">See more</Link> 
                        </div>
                    </div>
                </div>
                <div className="blog-column">
                    <div className="blog-card">
                        <img src={Dubai} alt="Dubai" className="blog-img"/>
                        <div className="container">
                            <h2>Tourist Attractions in Dubai</h2>
                            <p className="title">Dubai, UAE</p>
                            <p>Dubai is about to become the best city on earth by the year 2050
                                here are 10 places to visit while you are there
                            </p> <br></br>
                            <Link to = "/" className="blog-button">See more</Link> 
                        </div>
                    </div>
                </div>
                <div className="blog-column">
                    <div className="blog-card">
                        <img src={Dubai} alt="Dubai" className="blog-img"/>
                        <div className="container">
                            <h2>Tourist Attractions in Dubai</h2>
                            <p className="title">Dubai, UAE</p>
                            <p>Dubai is about to become the best city on earth by the year 2050
                                here are 10 places to visit while you are there
                            </p>
                            <br></br>
                            <Link to = "/" className="blog-button">See more</Link> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Blog