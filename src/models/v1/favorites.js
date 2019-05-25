'use strict';

const mongoose = require('mongoose');
const scm = require('../../schemas/v1/favotites');

module.exports = mongoose.model('favorites', scm.schema);