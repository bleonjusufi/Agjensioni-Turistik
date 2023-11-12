// models/EmployeeModel.js
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'travelagency',
});

const getAllEmployees = (callback) => {
  const sql = 'SELECT * FROM employees';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error fetching employees:', err);
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

const getEmployeeById = (employeeId, callback) => {
  const sql = 'SELECT * FROM employees WHERE id = ?';
  db.query(sql, [employeeId], (err, result) => {
    if (err) {
      console.error('Error fetching employee by ID:', err);
      callback(err, null);
    } else {
      callback(null, result[0]);
    }
  });
};

const addEmployee = (employeeData, callback) => {
  const { name, surname, email, phone } = employeeData;
  const sql = 'INSERT INTO employees (name, surname, email, phone) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, surname, email, phone], (err, result) => {
    if (err) {
      console.error('Error adding employee:', err);
      callback(err, null);
    } else {
      callback(null, result.insertId);
    }
  });
};

const updateEmployee = (employeeId, employeeData, callback) => {
  const { name, surname, email, phone } = employeeData;
  const sql = 'UPDATE employees SET name=?, surname=?, email=?, phone=? WHERE id=?';
  db.query(sql, [name, surname, email, phone, employeeId], (err, result) => {
    if (err) {
      console.error('Error updating employee:', err);
      callback(err, null);
    } else {
      callback(null, result.affectedRows);
    }
  });
};

const deleteEmployee = (employeeId, callback) => {
  const sql = 'DELETE FROM employees WHERE id=?';
  db.query(sql, [employeeId], (err, result) => {
    if (err) {
      console.error('Error deleting employee:', err);
      callback(err, null);
    } else {
      callback(null, result.affectedRows);
    }
  });
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
