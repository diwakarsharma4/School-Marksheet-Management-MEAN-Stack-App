const router = express.Router();

router.route('/marksheet/create').get(marksheetController.createMarksheetControllerFn);
router.route('/marksheet/getOne/:id').get(marksheetController.getOneMarksheetControllerFn);
router.route('/marksheet/getAll').get(marksheetController.getAllMarksheetControllerFn);
router.route('/marksheet/update/:id').get(marksheetController.updateMarksheetControllerFn);
router.route('/marksheet/delete/:id').get(marksheetController.deleteMarksheetControllerFn);

module.exports = router;
