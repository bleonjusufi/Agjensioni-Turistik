import React, { useState } from 'react';
import '../../CSS/addEmployee.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function AddEmployee() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !surname || !email || !phone) {
      setError('All fields are required');
      setSuccess(null);
      return;
    }

    setError(null);

    try {
      // Make API call
      await axios.post("http://localhost:8080/api/addEmployee", { name, surname, email, phone });
      setSuccess('Employee added successfully!');
      // Optionally, reset the form fields after a successful submission
      setName('');
      setSurname('');
      setEmail('');
      setPhone('');
    } catch (error) {
      console.error('Error adding employee:', error);
      setError('An error occurred while adding the employee.');
      setSuccess(null);
    }
  };

  return (
    <div className="add">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Surname:</label>
          <input type="text" name="surname" value={surname} onChange={(e) => setSurname(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Telephone Number:</label>
          <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <button type="submit">Add New Employee</button>
        <Link to="/employees">
          <button>Go Back</button>
        </Link>
  
      </form>
    </div>
  );
}
