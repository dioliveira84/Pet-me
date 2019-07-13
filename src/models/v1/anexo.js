'use strict';

const mongoose = require('mongoose');
const scm = require('../../schemas/v1/anexo');

module.exports = mongoose.model('anexo', scm.schema);