// @ts-check

const express = require('express');
const controller = require('../../../controllers/controllersApi/post');

const router = express.Router();
const multer = require('multer');
const multerConfig = require('../../../config/multer')
//const configAuth = require('../../../config/auth');

const authServiceJwt = require('../../../config/authJwt')


router.route('/file').post(multer(multerConfig).single('file'), controller.createFile);
router.route('/list/:id').get(controller.listAnexo);
router.route('/delete/:id').delete(controller.deleteAnexo)

module.exports = router;
