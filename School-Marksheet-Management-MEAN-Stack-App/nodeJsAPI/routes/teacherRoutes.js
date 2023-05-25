var express = require('express');
var userController = require('../src/teachers/teacherController');
const router = express.Router();

router.route('/teacher/login').post(userController.loginUserControllerFn);
router.route('/teacher/create').post(userController.createUserControllerFn);

module.exports = router;