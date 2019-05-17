const mongoose = require('mongoose');
const aws = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const s3 = new aws.S3();

const pet = new mongoose.Schema(
  {
    createdAt: {
      index: true,
      type: Date,
      default: Date.now,
    },
    tipo: {
      type: String,
      required: false,
      index: true,
    },
    nome: {
      type: String,
      required: false,
    },
    raca: {
      type: String,
      required: false,
      index: true,
    },
    sexo: {
      type: String,
      required: false,
      index: true,
    },
    tamanho: {
      type: String,
      required: false,
      index: true,
    },
    idade: {
      type: Number,
      required: false,
      index: true,
    },
    endereco: {
      type: String,
      required: false,
      index: true,
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
  },
  {
    collection: 'pet',
  },
);

pet.pre('save', function () {
  if (!this.url) {
    this.url = `${process.env.APP_URL}/files/${this.key}`;
  }
});

pet.pre('remove', function () {
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

module.exports.schema = pet;
