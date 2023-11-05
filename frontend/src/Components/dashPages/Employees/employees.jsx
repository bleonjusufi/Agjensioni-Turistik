import React, { useState } from 'react';
import '../../CSS/employees.css';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Topbar from '../../Topbar/topbar';
import Sidebar from '../../sidebar/Sidebar';

const SearchAndAdd = ({ employees }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = () => {
    // Perform the search in your employee data based on the searchQuery
    const result = employees.find(
      (employee) =>
        employee.name.toLowerCase() === searchQuery.toLowerCase() &&
        employee.surname.toLowerCase() === searchQuery.toLowerCase()
    );
    setSearchResult(result);
  };

  return (
    <div className="search-and-add">
      <div className="search-icon" >
        <FaSearch />
      </div>
      <div className="add-link">
        <Link to="/addEmployee">Add Employee</Link>
      </div>
    </div>
  );
};

function Employees() {
  const employees1 = [
    {
      id: 1,
      name: 'John',
      surname: 'Doe',
      email: 'john.doe@example.com',
      phone: '555-555-5555',
    },
    {
      id: 2,
      name: 'Jane',
      surname: 'Smith',
      email: 'jane.smith@example.com',
      phone: '555-555-5556',
    },
    // Add more employee data as needed
  ];

  return (
    <div className="employees">
      <Topbar />
      <div className='dashboardContainer'>
        <Sidebar />
        <div className="employeesWrapper">
          <h1>Employees</h1>

          <SearchAndAdd employees={employees1} /> {/* Include the SearchAndAdd component here */}
          
          <table className="employee-table">
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
              {employees1.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.surname}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phone}</td>
                  <td>
                    <Link to="/updateEmployee">
                      <button className="edit-button">Edit</button>
                    </Link>

                    <button className="delete-button">Delete</button>
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
