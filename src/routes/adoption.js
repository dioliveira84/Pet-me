
const express = require('express');
const controller = require('../controllers/controllersApi/adoption');

const router = express.Router();
const multer = require('multer');
const multerConfig = require('../config/multer')
const configAuth = require('../config/auth');

router.route('/').post(configAuth.ensureAuthenticated, controller.renderPetAdotion);
router.route('/').get(configAuth.ensureAuthenticated, controller.renderPetAdotion);
router.route('/sendemail').post(configAuth.ensureAuthenticated, controller.adoptionSendEmail);

module.exports = router;