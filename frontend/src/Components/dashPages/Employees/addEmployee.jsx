import React from 'react'
import '../../CSS/addEmployee.css';

export default function addEmployee() {
  return (
    <div className="add-employee">
      <h2>Add Employee</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Surname:</label>
          <input type="text" name="surname" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Telephone Number:</label>
          <input type="text" name="phone" />
        </div>
        <button type="submit">Add New Employee</button>
      </form>
    </div>

  )
}
