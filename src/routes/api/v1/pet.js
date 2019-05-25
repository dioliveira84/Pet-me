// @ts-check

const express = require('express');
const controller = require('../../../controllers/controllersApi/pet');

const router = express.Router();
const multer = require('multer');
const multerConfig = require('../../../config/multer')
const configAuth = require('../../../config/auth');

router.route('/create').post(configAuth.ensureAuthenticated, multer(multerConfig).single('file'), controller.createPet);
router.route('/list').get(controller.listPet);
router.route('/update').post(configAuth.ensureAuthenticated,controller.updatetPet);
router.route('/delete/:id').post(configAuth.ensureAuthenticated,controller.deletetPet);
router.route('/massivo').post(configAuth.ensureAuthenticated,controller.massivo);
module.exports = router;
