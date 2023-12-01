import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import "../CSS/Offers.css";
import Mykonos from "../Images/Mykonos.jpg";
import Rome from "../Images/romee.jpg";
import Bali from "../Images/Bali.jpg";
import Monaco from "../Images/MONACOO.jpg";
import Egypt from "../Images/egyypt.jpg";
import Couple from "../Images/girl.jpg";
import { BsCurrencyEuro } from "react-icons/bs";
import Footer from "../Pages/Footer.jsx";
import BookingForm from "./bookingForm";
import NewYork from "../Images/newyorkk.jpg";

const offerData = [
  {
    id: 1,
    imageUrl: NewYork,
    title: "Prishtine - NewYork",
    description:
      " Explore the iconic landmarks, vibrant neighborhoods, and endless possibilities of the city that never sleeps.",
    price: "1010",
    duration: "5 days",
    linkTo: "/newYork",
    bookingLink: "/bookingForm",
  },
  {
    id: 2,
    imageUrl: Mykonos,
    title: "Prishtine - Mykonos",
    description:
      "  Escape to Mykonos and let the tranquility of the Greek Isles envelop your senses.Travel to Mykonos now!",
    price: "899",
    duration: "6 days",
    linkTo: "/mykonos",
    bookingLink: "/bookingForm",
  },
  {
    id: 3,
    imageUrl: Rome,
    title: "Prishtine - Rome",
    description:
      "Let the charm of Rome captivate your heart, and immerse yourself in a journey of history, culture and pure enchantment.",
    price: "659",
    duration: "5 days",
    bookingLink: "/bookingForm",
  },
  {
    id: 4,
    imageUrl: Bali,
    title: "Prishtine - Bali",
    description:
      "Let Balis healing energy rejuvenate your body and soul.Indulge in relaxation with world-class spas and wellness retreats. ",
    price: "449",
    duration: "3 days",
    bookingLink: "/bookingForm",
  },
  {
    id: 5,
    imageUrl: Monaco,
    title: "Prishtine - Monaco ",
    description:
      " Feel the thrill of the iconic Monte Carlo Casino, where elegance meets chance in grand style. ",
    price: "789",
    duration: "4 days",
    bookingLink: "/bookingForm",
  },
  {
    id: 6,
    imageUrl: Egypt,
    title: "Prishtine - Egypt ",
    description:
      " From the majestic Pyramids to the timeless Nile River, this land of pharaohs invites you on an unforgettable odyssey. ",
    price: "1229",
    duration: "7 days",
    bookingLink: "/bookingForm",
  },
  // Add more offer data objects as needed
];

function Offers() {
  const createCard = (offer) => (
    <div key={offer.id} className="offers-column">
      <div className="offers-card">
        <Link to={offer.linkTo || "#"}>
          <img src={offer.imageUrl} alt={offer.title} className="offers-img" />
        </Link>
        <div className="container">
          <Link to={offer.linkTo || "#"}>
            <h2 className="bottom-left linkClass">{offer.title}</h2>
          </Link>
          <p>{offer.description}</p>
          <br />
          <p className="title">
            {offer.price}
            <BsCurrencyEuro /> {offer.duration}
          </p>
          {offer.bookingLink && (
            <Link to={offer.bookingLink} id="offers-button">
              Book now
            </Link>
          )}
          <br />
          <span>
            <br />
          </span>
        </div>
      </div>
    </div>
  );

  const createRow = (rowOffers) => (
    <div className="row" key={rowOffers[0].id}>
      {rowOffers.map((offer) => createCard(offer))}
    </div>
  );

  const chunkedOffers = [];
  for (let i = 0; i < offerData.length; i += 3) {
    chunkedOffers.push(offerData.slice(i, i + 3));
  }

  return (
    <>
      <Header />
      <div className="content">
        <div>
          <img src={Couple} className="coupleImg" alt="couple-img" />
          <h1 className="offers-text">Offers</h1>
        </div>

        <div className="container">
          <div className="mainClass">
            {chunkedOffers.map((rowOffers) => createRow(rowOffers))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Offers;
