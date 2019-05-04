//@ts-check
'use strict';

const express = require('express');
const controller = require('../controllers/logout');

let router = express.Router();
router.route('/').get(controller.renderLogout);

module.exports = router;