import React, { useState } from 'react';
import '../../CSS/addEmployee.css';
import axios from 'axios'



export default function AddEmployee() {
  const [name, setName] = useState()
  const [surname, setSurname] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()

  const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/addEmployee", {name, surname, email, phone})
    .then(result => console.log(result))
    .catch(err => console.log(err))

  } 
  return (
    <div className="add-employee">
      <h2>Add Employee</h2>
      <form onSubmit={Submit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Surname:</label>
          <input type="text" name="surname" onChange={(e) => setSurname(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Telephone Number:</label>
          <input type="text" name="phone" onChange={(e) => setPhone(e.target.value)}  />
        </div>
        <button type="submit">Add New Employee</button>
      </form>
    </div>

  )
}
