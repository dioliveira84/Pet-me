// @ts-check

const express = require('express');
const controller = require('../../../controllers/controllersApi/pet');

const router = express.Router();
const multer = require('multer');
const multerConfig = require('../../../config/multer')
const configAuth = require('../../../config/auth');

router.route('/create').post(configAuth.ensureAuthenticated, multer(multerConfig).single('file'), controller.createPet);
router.route('/list').get(controller.listPet);
router.route('/update').post(controller.updatetPet);
router.route('/delete/:id').post(controller.deletetPet);
router.route('/massivo').post(controller.massivo);
module.exports = router;
