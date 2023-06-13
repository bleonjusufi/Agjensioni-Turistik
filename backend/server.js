const express = require('express');
const mysql = require('mysql');
const app = express();


app.listen(8080, () => {
    console.log("Server running on port 8080")
})