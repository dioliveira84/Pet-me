// @ts-check

const express = require('express');
const controller = require('../../../controllers/controllersApi/problema');

const router = express.Router();
const multer = require('multer');
//const multerConfig = require('../../../config/multer')
//multer(multerConfig).single('file')
//const configAuth = require('../../../config/auth');

const authServiceJwt = require('../../../config/authJwt')

router.route('/create').post(authServiceJwt.authorize,controller.createProblem);
router.route('/list').get(controller.listProblem);
router.route('/comite/list').get(controller.listProblemComite);
router.route('/update').put(authServiceJwt.authorize,controller.updateComite);
router.route('/delete/:id').delete(authServiceJwt.authorize,controller.deletetPet);
//router.route('/massivo').post(configAuth.ensureAuthenticated,controller.massivo);
module.exports = router;
