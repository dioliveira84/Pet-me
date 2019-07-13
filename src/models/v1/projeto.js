'use strict';

const mongoose = require('mongoose');
const scm = require('../../schemas/v1/projeto');

module.exports = mongoose.model('projeto', scm.schema);