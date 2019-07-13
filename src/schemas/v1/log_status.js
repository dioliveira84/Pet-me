const mongoose = require('mongoose');

let log_status = new mongoose.Schema({
    dt_cadastro: {
        index: true,
        type: Date
    },
    id_user:{
       
      type:String,
      required:true,
      index:true
    },
    id_projeto: {
        type: String,
        required: true,
        index: true
    },
    dt_update:{
      type:Date,
      required:true
    },
    status:{
      type:String,
      required:true
    }
    
}, { collection: 'log_status' });

module.exports.schema = log_status;