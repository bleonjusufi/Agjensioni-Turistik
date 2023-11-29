const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 8080;
const bcrypt = require('bcrypt');
const employeesRoutes = require('./Routes/employees');
const db = require('./db.js');


app.use(cors({
  origin: 'http://localhost:3000', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api', employeesRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});