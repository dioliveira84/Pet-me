'use strict';

const mongoose = require('mongoose');
const scm = require('../../schemas/v1/cats');

module.exports = mongoose.model('cats', scm.schema);