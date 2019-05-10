'use strict';

const mongoose = require('mongoose');
const scm = require('../../schemas/v1/pet');

module.exports = mongoose.model('pet', scm.schema);