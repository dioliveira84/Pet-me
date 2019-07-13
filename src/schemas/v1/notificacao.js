const mongoose = require('mongoose');

let notificacao = new mongoose.Schema({
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
    valor: {
        type: String,
        required: true,
        index: true
    },
    premio:{
      type:String,
      required:true
    },
    id_projeto:{
      type:String,
      required:true
    }
    
}, { collection: 'notificacao' });

module.exports.schema = notificacao;