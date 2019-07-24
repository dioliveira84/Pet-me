const mongoose = require('mongoose');

let projeto = new mongoose.Schema({
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
    titulo: {
        type: String,
        required: true,
        index: true
    },
    descricao:{
      type:String,
      required:true
    },
    status:{
      type:String,
      required:true
    },
    prazo:{
      type:String,
      required:true
    },
    valor:{
      type:String,
      required:true
    },
    comite:{
      type:Boolean
    },
    dt_update :{
      
      type: Date,
      default: Date.now
    }
    
}, { collection: 'projeto' });

module.exports.schema = projeto;