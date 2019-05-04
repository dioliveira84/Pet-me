const express = require('express');
const controller = require('../controllers/ongs');

let router = express.Router();
router.route('/').get(controller.renderOngs);

module.exports = router;