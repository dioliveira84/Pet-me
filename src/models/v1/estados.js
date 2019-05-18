'use strict';

const mongoose = require('mongoose');
const scm = require('../../schemas/v1/estados');

module.exports = mongoose.model('estados', scm.schema);