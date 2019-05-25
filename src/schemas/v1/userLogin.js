const mongoose = require('mongoose');

let userLogin = new mongoose.Schema({
    createdAt: {
        index: true,
        type: Date,
        default: Date.now
    },
    usuario: {
        type: String,
        required: true,
        index: true
    },
    password: {
        type: String,
        required: true,
       
    },
    phone: {
        type: String,
        required: false,
        index: true
    },
    cidade: {
        type: String,
        required: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        index: true
    },
    photo: String,
    resetPasswordToken: String,
    resetPasswordExpires: Date
}, { collection: 'userLogin' });

module.exports.schema = userLogin;