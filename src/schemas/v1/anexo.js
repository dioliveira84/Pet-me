const mongoose = require('mongoose');

let anexo = new mongoose.Schema({

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
    url:{
      type:Date,
      required:true
    },
    status:{
      type:String,
      required:true
    }
    
}, { collection: 'anexo' });

module.exports.schema = anexo;