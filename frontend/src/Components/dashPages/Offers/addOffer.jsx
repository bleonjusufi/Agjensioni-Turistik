import React, { useState } from 'react';
import axios from 'axios';
import '../../CSS/addEmployee.css';
import { Link } from 'react-router-dom';

const AddOffer = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');
  const [bookingLink, setBookingLink] = useState('');
  const [imageURL, setImageURL] = useState(''); // New state for image_url
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !price || !duration || !bookingLink || !imageURL) {
      setError('All fields are required');
      setSuccess(null);
      return;
    }

    setError(null);

    try {
      // Make API call
      await axios.post("http://localhost:8080/api/offers", {
        title,
        description,
        price,
        duration,
        bookingLink,
        image_url: imageURL, // Pass imageURL to the backend
      });
      setSuccess('Offer added successfully!');
      // Optionally, reset the form fields after a successful submission
      setTitle('');
      setDescription('');
      setPrice('');
      setDuration('');
      setBookingLink('');
      setImageURL('');
    } catch (error) {
      console.error('Error adding offer:', error);
      setError('An error occurred while adding the offer.');
      setSuccess(null);
    }
  };

  return (
    <div className="add">
      <h2>Add Offer</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <label>Image URL:</label>
          <input type="text" name="imageURL" value={imageURL} onChange={(e) => setImageURL(e.target.value)} required />
        </div>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Price:</label>
          <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div>
          <label>Duration:</label>
          <input type="text" name="duration" value={duration} onChange={(e) => setDuration(e.target.value)} required />
        </div>
        <div>
          <label>Booking Link:</label>
          <input type="text" name="bookingLink" value={bookingLink} onChange={(e) => setBookingLink(e.target.value)} required />
        </div>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <button type="submit">Add New Offer</button>
        <Link to="/offers">
          <button>Go Back</button>
        </Link>
      </form>
    </div>
  );
}

export default AddOffer;
