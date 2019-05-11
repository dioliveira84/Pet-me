const mongoose = require('mongoose');

let adoption = new mongoose.Schema({
    createdAt: {
        index: true,
        type: Date,
        default: Date
    },
    id_user: {
        type: String,
        required: true,
        index: true
    },
    id_pet: {
        type: String,
        required: true,
    }
    
}, { collection: 'adoption' });

module.exports.schema = adoption;