const express = require('express');
const mongoose = require('mongoose');
const app = express();

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

app.listen(8080, () => {
    console.log("Server running on port 8080")
})