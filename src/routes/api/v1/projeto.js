// @ts-check

const express = require('express');
const controller = require('../../../controllers/controllersApi/projeto');

const router = express.Router();
const multer = require('multer');
//const multerConfig = require('../../../config/multer')
//multer(multerConfig).single('file')

const configAuth = require('../../../config/auth');
const authServiceJwt = require('../../../config/authJwt')


router.route('/create').post(authServiceJwt.authorize, controller.createProjeto);
router.route('/list').get(controller.listProjeto);
router.route('/comite/list').get(controller.listProjetoComite);
router.route('/list/:id').get(controller.listMyProject);
router.route('/update').put(authServiceJwt.authorize,controller.updatetProject);
router.route('/comite/update').put(authServiceJwt.authorize,controller.updatetProjectComite);
router.route('/delete/:id').delete(authServiceJwt.authorize,controller.deletetPet);
//router.route('/massivo').post(configAuth.ensureAuthenticated,controller.massivo);
module.exports = router;
