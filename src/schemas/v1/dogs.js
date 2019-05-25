const mongoose = require('mongoose');

let dogs = new mongoose.Schema({
    createdAt: {
        index: true,
        type: Date,
        default: Date.now
    },
    nome: {
        type: String,
        required: true,
        index: true
    },

    
}, { collection: 'dogs' });

module.exports.schema = dogs;