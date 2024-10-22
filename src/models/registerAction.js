const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // confirmpassword: {
    //     type: String,
    //     required: true
    // },
})

const Register = new mongoose.model("Register", registerSchema);

module.exports = Register;