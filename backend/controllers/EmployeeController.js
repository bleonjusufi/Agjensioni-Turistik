// controllers/EmployeeController.js
const employeeModel = require('../models/Employees');

const getAllEmployees = (req, res) => {
  employeeModel.getAllEmployees((err, employees) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Error fetching employees' });
    }
    res.status(200).json({ success: true, employees });
  });
};

const getEmployeeById = (req, res) => {
  const employeeId = req.params.id;
  employeeModel.getEmployeeById(employeeId, (err, employee) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Error fetching employee' });
    }
    res.status(200).json({ success: true, employee });
  });
};

const addEmployee = (req, res) => {
  const employeeData = req.body;
  employeeModel.addEmployee(employeeData, (err, employeeId) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Error adding employee' });
    }
    res.status(200).json({ success: true, message: 'Employee added successfully', employeeId });
  });
};

const updateEmployee = (req, res) => {
  const employeeId = req.params.id;
  const employeeData = req.body;
  employeeModel.updateEmployee(employeeId, employeeData, (err, affectedRows) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Error updating employee' });
    }
    res.status(200).json({ success: true, message: 'Employee updated successfully', affectedRows });
  });
};

const deleteEmployee = (req, res) => {
  const employeeId = req.params.id;
  employeeModel.deleteEmployee(employeeId, (err, affectedRows) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Error deleting employee' });
    }
    res.status(200).json({ success: true, message: 'Employee deleted successfully', affectedRows });
  });
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};