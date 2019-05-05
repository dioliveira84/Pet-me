'use strict';

const mongoose = require('mongoose');
const scm = require('../../schemas/v1/userLogin');

module.exports = mongoose.model('userLogin', scm.schema);