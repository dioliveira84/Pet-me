const express = require('express');
const controller = require('../../../controllers/controllersApi/createuser');

const router = express.Router();

router.route('/login/auth').post(controller.createJwt);
router.route('/login/getlogin').post(controller.authenticate);

module.exports = router;