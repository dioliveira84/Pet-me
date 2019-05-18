//@ts-check
'use strict';

const express = require('express');
const controller = require('../controllers/pet');

let router = express.Router();
router.route('/').get(controller.renderPet);

module.exports = router;