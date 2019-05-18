const mongoose = require('mongoose');

let estados = new mongoose.Schema({
    createdAt: {
        index: true,
        type: Date,
        default: Date.now
    },
  Capital: {
        type: String,
        index: true
    },
    Estado: {
        type: String,
        required: false,
    },
    UF:{
        type: String,
        required: false,
    }
    
    
}, { collection: 'estados' });

module.exports.schema = estados;