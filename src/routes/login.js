//@ts-check
'use strict';

const express = require('express');
const controller = require('../controllers/login');

let router = express.Router();
router.route('/').get(controller.renderLogin);

module.exports = router;