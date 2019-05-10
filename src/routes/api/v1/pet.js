//@ts-check
'use strict';

const express = require('express');
const controller = require('../../../controllers/controllersApi/pet');

let router = express.Router();

const multer = require("multer");
const multerConfig = require("../../../config/multer");

router.route('/create').post(multer(multerConfig).single("file"),controller.createPet);
router.route('/list').get(controller.listPet);
router.route('/update').post(controller.updatetPet);
router.route('/delete/:id').post(controller.deletetPet);


module.exports = router;