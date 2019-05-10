const mongoose = require('mongoose');
const aws = require("aws-sdk");
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

const s3 = new aws.S3();


let pet = new mongoose.Schema({
  createdAt: {
    index: true,
    type: Date,
    default: Date.now
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
  },
  name:{
    type: String,
  },
  size:{
    type: Number
  },
  key:{

    type: String,
  },
  url:{
    type: String,
  } 
  

}, {
  collection: 'pet'
});


pet.pre("save", function() {
  if (!this.url) {
    this.url = `${process.env.APP_URL}/files/${this.key}`;
  }
});

pet.pre("remove", function() {
  if (process.env.STORAGE_TYPE === "s3") {
    return s3
      .deleteObject({
        Bucket: process.env.BUCKET_NAME,
        Key: this.key
      })
      .promise()
      .then(response => {
        console.log(response.status);
      })
      .catch(response => {
        console.log(response.status);
      });
  } else {
    return promisify(fs.unlink)(
      path.resolve(__dirname, "..", "..", "tmp", "uploads", this.key)
    );
  }
});

module.exports.schema = pet;