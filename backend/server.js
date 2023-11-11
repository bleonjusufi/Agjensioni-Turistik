const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const url = 'mongodb+srv://PrTravelAgency:BleonLorena@travelagency.eg9c6mq.mongodb.net/?retryWrites=true&w=majority'

async function connect() {
    try{
        await mongoose.connect(url)
        console.log("Connected to MongoDB");
    }catch (error) {
        console.error(error);
    }
}

connect();

app.post("/addEmployee", (req, res) =>{
  EmployeeModel.create(req.body)
  .then(employees => res.json(employees))
  .catch(err => res.json(err))
})
/*
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

  async function connect() {
    try{
        await mongoose.connect(url)
        console.log("Connected to MongoDB");
    }catch (error) {
        console.error(error);
    }
}

connect();

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  });
  
  const User = mongoose.model('User', userSchema);
  
  app.post('/signup', async (req, res) => {
    try {
      const {
        username,
        email,
        password,
        password2
      } = req.body;
  
      if (!username || !email || !password || !password2) {
        return res.status(400).json({ msg: 'Please fill in all required fields' });
      }
  
      if (password !== password2) {
        return res.status(400).json({ msg: 'Passwords do not match' });
      }
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ msg: 'Email is already registered' });
      }
  
      const newUser = new User({
        username,
        email,
        password
      });
  
      await newUser.save();
  
      res.status(200).json({ msg: 'Signup successful' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ msg: 'Signup failed' });
    }
  });
  

*/

app.listen(8081, () => {
    console.log("Server running on port 8081")
})