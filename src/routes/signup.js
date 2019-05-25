//@ts-check
'use strict';

const express = require('express');
const controller = require('../controllers/signup');

let router = express.Router();
router.route('/').get(controller.renderSignup);

module.exports = router;