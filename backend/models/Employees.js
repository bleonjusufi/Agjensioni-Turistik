const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    phone: Number
})

const EmployeeModel = mongoose.model("employees", EmployeeSchema)
module.exports = EmployeeModel