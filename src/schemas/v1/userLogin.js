const mongoose = require('mongoose');

let feedbackSchema = new mongoose.Schema({
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
    contato: {
        type: String,
        required: true,
        index: true
    }
}, { collection: 'userLogin' });

module.exports.schema = feedbackSchema;