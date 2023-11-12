const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 8080;
const bcrypt = require('bcrypt');
const employeesRoutes = require('./Routes/employees');


app.use(cors({
  origin: 'http://localhost:3000', // Replace with the origin of your React app
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
// Replace with your MySQL database configuration
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'travelagency',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to the database');
  }
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Handle registration endpoint
app.post('/Signup', async (req, res) => {
  const { emri, email, password } = req.body;

  try {
    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);
    const hashedPassword2 = await bcrypt.hash(password2, 10);

    const sql = 'INSERT INTO user (emri, email, password, password2) VALUES (?, ?, ?, ?)';
    db.query(sql, [emri, email, hashedPassword, hashedPassword2], (err, result) => {
      if (err) {
        console.error('Registration failed:', err);
        res.status(500).json({ success: false, message: 'Registration failed' });
      } else {
        console.log('User registered successfully');
        res.status(200).json({ success: true, message: 'User registered successfully' });
      }
    });
  } catch (error) {
    console.error('Password hashing failed:', error);
    res.status(500).json({ success: false, message: 'Password hashing failed' });
  }
});

// Middleware
app.use(bodyParser.json());
app.use('/api', employeesRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});