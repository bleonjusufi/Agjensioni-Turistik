import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../../CSS/addEmployee.css';

export default function UpdateEmployee() {
  const [updatedEmployeeData, setUpdatedEmployeeData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/employees/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        if (data.success && data.employee) {
          setUpdatedEmployeeData({
            name: data.employee.Name,
            surname: data.employee.Surname,
            email: data.employee.Email,
            phone: data.employee.Phone,
          });
        } else {
          console.error('Employee details not available');
        }
      } catch (error) {
        console.error('Error fetching employee details:', error);
      }
    };

    fetchEmployeeDetails();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedEmployeeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateEmployee = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/api/employees/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedEmployeeData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // After a successful update, navigate to the employees page or wherever needed
      navigate('/employees');
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  return (
    <div className="add-employee">
      <h2>Update Employee</h2>
      <form onSubmit={handleUpdateEmployee}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={updatedEmployeeData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Surname:</label>
          <input
            type="text"
            name="surname"
            value={updatedEmployeeData.surname}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={updatedEmployeeData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Telephone Number:</label>
          <input
            type="text"
            name="phone"
            value={updatedEmployeeData.phone}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Update Employee</button>
      </form>
    </div>
  );
}
