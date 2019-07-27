'use strict';

const express = require('express');
const controller = require('../../../controllers/forgotBigbets');

let router = express.Router();
router.route('/').get(controller.renderForgot);
router.route('/').post(controller.resetPassword);
router.route('/reset').post(controller.setNewPassWord);
router.route('/reset/:token').get(controller.renderReset);
module.exports = router;