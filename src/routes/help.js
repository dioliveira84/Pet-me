//@ts-check
'use strict';

const express = require('express');
const controller = require('../controllers/help');

let router = express.Router();
router.route('/').get(controller.renderHelp);

module.exports = router;