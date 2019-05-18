const mongoose = require('mongoose');

let cats = new mongoose.Schema({
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

    
}, { collection: 'cats' });

module.exports.schema = cats;