//@ts-check
'use strict';

const express = require('express');
const controller = require('../controllers/mission');

let router = express.Router();
router.route('/').get(controller.renderMission);

module.exports = router;