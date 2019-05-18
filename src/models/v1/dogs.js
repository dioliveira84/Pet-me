'use strict';

const mongoose = require('mongoose');
const scm = require('../../schemas/v1/dogs');

module.exports = mongoose.model('dogs', scm.schema);