
const express = require('express');
const controller = require('../../../controllers/controllersApi/estados');

const router = express.Router();
const multer = require('multer');
const multerConfig = require('../../../config/multer')
const configAuth = require('../../../config/auth');

router.route('/create').post(configAuth.ensureAuthenticated, controller.createEstados);
router.route('/list').get(controller.listEstados);
router.route('/update').post(controller.updatetEstados);
router.route('/delete/:id').post(controller.updatetEstados);

module.exports = router;