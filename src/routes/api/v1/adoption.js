
const express = require('express');
const controller = require('../../../controllers/controllersApi/adoption');

const router = express.Router();
const multer = require('multer');
const multerConfig = require('../../../config/multer')
const configAuth = require('../../../config/auth');

router.route('/forms').get(configAuth.ensureAuthenticated, controller.renderPetAdotion);


module.exports = router;