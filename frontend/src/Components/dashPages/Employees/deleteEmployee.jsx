import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../CSS/deleteEmployee.css';

const DeleteEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const confirmed = window.confirm('Are you sure you want to delete this employee?');

    if (confirmed) {
      handleDeleteEmployee();
    } else {
      // If user cancels, navigate back to the employees page or wherever needed
      navigate('/employees');
    }
  }, [id, navigate]);

  const handleDeleteEmployee = async () => {
    try {
      // Replace deleteEmployeeFunction with the actual logic to delete the employee
      // For example, you might use fetch or axios to make a DELETE request to your API
      await fetch(`http://localhost:8080/api/employees/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // After successful deletion, navigate or perform additional actions
      navigate('/employees');
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  return (
    <div className="delete-employee">
      <h2>Delete Employee</h2>
      <p>Are you sure you want to delete this employee?</p>
      <button onClick={handleDeleteEmployee}>Yes, Delete</button>
      <button onClick={() => navigate('/employees')}>Cancel</button>
    </div>
  );
};

export default DeleteEmployee;
