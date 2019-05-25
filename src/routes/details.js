//@ts-check
'use strict';

const express = require('express');
const controller = require('../controllers/details');

let router = express.Router();
router.route('/').post(controller.renderDetails);

module.exports = router;