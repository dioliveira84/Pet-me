'use strict';

const mongoose = require('mongoose');
const scm = require('../../schemas/v1/notificacao');

module.exports = mongoose.model('notificacao', scm.schema);