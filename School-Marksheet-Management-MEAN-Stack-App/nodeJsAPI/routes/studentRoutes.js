var express = require('express');
var userController = require('../src/students/studentController');
const router = express.Router();

router.route('/student/login').post(userController.loginUserControllerFn);
router.route('/student/create').post(userController.createUserControllerFn);

module.exports = router;