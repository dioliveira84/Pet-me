const express = require('express');
const controller = require('../../../controllers/controllersApi/logout');

const router = express.Router();

router.route('/logout').get(controller.userLogout);

module.exports = router;