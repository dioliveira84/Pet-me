const mongoose = require('mongoose');
const aws = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const s3 = new aws.S3();

let anexo = new mongoose.Schema({

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
    
    id_projeto: {

        type: String,
        required: true,
        index: true
    },
    name: {
      type: String,
    },
    size: {
      type: Number,
    },
    key: {
      type: String,
    },
    url: {
      type: String,
    },
    status:{
      type:String,
      required:true
    }
    
}, { collection: 'anexo' });


anexo.pre('save', function () {
  if (!this.url) {
    this.url = `${process.env.APP_URL}/files/${this.key}`;
  }
});

anexo.pre('remove', function () {
  if (process.env.STORAGE_TYPE === 's3') {
    return s3
      .deleteObject({
        Bucket: process.env.BUCKET_NAME,
        Key: this.key,
      })
      .promise()
      .then((response) => {
        console.log(response.status);
      })
      .catch((response) => {
        console.log(response.status);
      });
  }
  return promisify(fs.unlink)(path.resolve(__dirname, '..', '..', 'tmp', 'uploads', this.key));
});

module.exports.schema = anexo;