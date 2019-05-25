//@ts-check
'use strict';

const express = require('express');
const controller = require('../controllers/mypets');
const configAuth = require('../config/auth');

let router = express.Router();
router.route('/').get(configAuth.ensureAuthenticated,controller.renderMyPets);
router.route('/').post(configAuth.ensureAuthenticated,controller.changeStatusOfMyPets);
module.exports = router;