// @ts-check

const express = require('express');
const controller = require('../../../controllers/controllersApi/user');

const router = express.Router();

router.route('/create').post(controller.createUser);
router.route('/list').get(controller.listUser);
router.route('/update').post(controller.updatetUser);
router.route('/delete').post(controller.deletetUser);

module.exports = router;
