

router.route('/teacher/login').get(userController.loginUserControllerFn);
router.route('/teacher/create').post(userController.createUserControllerFn);

module.exports = router;
