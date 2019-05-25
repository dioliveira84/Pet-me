//@ts-check
'use strict';

const express = require('express');
const controller = require('../controllers/pet');
const configAuth = require('../config/auth');
let router = express.Router();
router.route('/').get(configAuth.ensureAuthenticated,controller.renderPet);

module.exports = router;