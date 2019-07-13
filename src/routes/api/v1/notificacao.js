// @ts-check

const express = require('express');
const controller = require('../../../controllers/controllersApi/notificacao');

const router = express.Router();
const multer = require('multer');
//const multerConfig = require('../../../config/multer')
//multer(multerConfig).single('file')

const configAuth = require('../../../config/auth');

router.route('/create').post(configAuth.ensureAuthenticated, controller.createProblem);
router.route('/list').get(controller.listProblem);
//router.route('/update').post(configAuth.ensureAuthenticated,controller.updatetPet);
//router.route('/delete/:id').post(configAuth.ensureAuthenticated,controller.deletetPet);
//router.route('/massivo').post(configAuth.ensureAuthenticated,controller.massivo);
module.exports = router;
