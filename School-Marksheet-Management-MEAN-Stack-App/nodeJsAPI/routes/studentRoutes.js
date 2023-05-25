

router.route('/student/login').post(userController.loginUserControllerFn);
router.route('/student/create').get(userController.createUserControllerFn);

module.exports = router;
