import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../CSS/employees.css';
import Topbar from '../../Topbar/topbar';
import Sidebar from '../../sidebar/Sidebar';


const offers = [
    {
      ID: 1,
      imageUrl: '...',
      title: '...',
      description: '...',
      price: 1000,
      duration: '5 days',
      bookingLink: '...',
    },
    // Add more offer objects as needed
  ];

export default function offersManagement() {
    return (
        <div className="employees">
                <Topbar/>
                <div className='dashboardContainer'>
                    <Sidebar/>
                    <div className="Wrapper">
          <h1 className='Header'>Offers</h1>
        
          <div className="search-and-add">
            <div className="add-link" >
              <Link to="/addOffer" >Add Offer</Link>
            </div>
          </div>
          
          <table className="table">
            <thead>
              <tr>
                <th>image-url</th>
                <th>Tittle</th>
                <th>Description</th>
                <th>Price</th>
                <th>Duration</th>
                <th>booking_Link</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {offers.map((offer) => (
                <tr key={offer.ID}>
                  <td>{offer.imageUrl}</td>
                  <td>{offer.title}</td>
                  <td>{offer.description}</td>
                  <td>{offer.price}</td>
                  <td>{offer.duration}</td>
                  <td>{offer.bookingLink}</td>
                  <td>
                    <Link to={`/updateOffer/${offer.id}`}>
                      <button className="edit-button">Edit</button>
                    </Link>
                    <Link to={`/deleteOffer/${offer.id}`}>
                      <button className="delete-button">Delete</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
                    
                </div>
            </div>
            
      )
}
