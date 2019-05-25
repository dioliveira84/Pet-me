//@ts-check
'use strict';

const express = require('express');
const controller = require('../controllers/about');

let router = express.Router();
router.route('/').get(controller.renderAbout);

module.exports = router;