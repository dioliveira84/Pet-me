'use strict';

const mongoose = require('mongoose');
const scm = require('../../schemas/v1/cadastro');

module.exports = mongoose.model('cadastro', scm.schema);