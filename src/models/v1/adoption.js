'use strict';

const mongoose = require('mongoose');
const scm = require('../../schemas/v1/adoption');

module.exports = mongoose.model('adoption', scm.schema);