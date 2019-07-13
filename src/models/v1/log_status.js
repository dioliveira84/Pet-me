'use strict';

const mongoose = require('mongoose');
const scm = require('../../schemas/v1/log_status');

module.exports = mongoose.model('log_status', scm.schema);