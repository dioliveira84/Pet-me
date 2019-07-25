const mongoose = require('mongoose');

let cadastro = new mongoose.Schema({
    dt_cadastro: {
        index: true,
        type: Date,
        default: Date.now
    },
    id_user:{
       
      type:String,
      required:true,
      index:true
    },
    area: {
        type: String,
        required: true,
        index: true
    },
    iniciativa:{
      type:String,
      required:true
    },
    descricao:{
      type:String,
      required:true
    },
     comite:{
      type:Boolean,
      index:true
    },
    status:{
      type:String,
      required:true
    }
    
}, { collection: 'cadastro' });

module.exports.schema = cadastro;