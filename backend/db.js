const mysql = require('mysql');

// Database configuration
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'travelagency',
};

// Create a database connection pool
const pool = mysql.createPool(dbConfig);

// Handle connection errors
pool.on('error', (err) => {
  console.error('Database connection error:', err);
});

module.exports = pool;
