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
    etapa:{
      type:String,
      required:true
    },
    prazo:{
      type:String,
     
    },
    valor:{
      type:String,
    
    },
    comite:{
      type:Boolean
    },
    iniciativa:{
    
      type:String,
      required:true
    },
    dt_update :{
      
      type: Date,
      default: Date.now
    }
    
}, { collection: 'projeto' });

module.exports.schema = projeto;