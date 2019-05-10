const mongoose = require('mongoose');

let userLogin = new mongoose.Schema({
    createdAt: {
        index: true,
        type: Date,
        default: Date
    },
    usuario: {
        type: String,
        required: true,
        index: true
    },
    senha: {
        type: String,
        required: true,
       
    },
    contato_phone: {
        type: String,
        required: true,
        index: true
    },
    endereco: {
        type: String,
        required: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        index: true
    }
    
}, { collection: 'userLogin' });

module.exports.schema = userLogin;