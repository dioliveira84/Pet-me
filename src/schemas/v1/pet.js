const mongoose = require('mongoose');

let feedbackSchema = new mongoose.Schema({
  createdAt: {
    index: true,
    type: Date,
    default: Date
  },
  tipo: {
    type: String,
    required: true,
    index: true
  },
  nome: {
    type: String,
    required: true,

  },
  raca: {
    type: String,
    required: true,
    index: true
  },
  sexo: {
    type: String,
    required: true,
    index: true
  },
  tamanho: {
    type: String,
    required: true,
    index: true
  },
  idade: {
    type: Number,
    required: true,
    index: true
  },
  endereco: {
    type: String,
    required: true,
    index: true
  },
  foto: {
    type: String,
    required: true,
    index: true
  }

}, {
  collection: 'pet'
});

module.exports.schema = feedbackSchema;