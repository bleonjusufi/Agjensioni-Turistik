import React, { useState, useEffect } from 'react';
import '../../CSS/employees.css';
import { Link } from 'react-router-dom';
import Topbar from '../../Topbar/topbar';
import Sidebar from '../../sidebar/Sidebar';

function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch data from your backend when the component mounts
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/employees');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Server Response:', data);

      // Ensure data is an array before setting the state
      setEmployees(Array.isArray(data.employees) ? data.employees : []);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  return (
    <div className="employees">
      <Topbar />
      <div className='dashboardContainer'>
        <Sidebar />
        <div className="Wrapper">
          <h1 className='Header'>Employees</h1>
          <div className="search-and-add">
            <div className="add-link" >
              <Link to="/addEmployee" >Add Employee</Link>
            </div>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Email</th>
                <th>Telephone Number</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.ID}>
                  <td>{employee.Name}</td>
                  <td>{employee.Surname}</td>
                  <td>{employee.Email}</td>
                  <td>{employee.Phone}</td>
                  <td>
                    <Link to={`/updateEmployee/${employee.ID}`}>
                      <button className="edit-button">Edit</button>
                    </Link>
                    <Link to={`/deleteEmployee/${employee.ID}`}>
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
  );
}

export default Employees;
