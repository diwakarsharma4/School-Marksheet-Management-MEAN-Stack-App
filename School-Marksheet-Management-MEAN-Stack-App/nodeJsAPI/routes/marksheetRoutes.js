var express = require('express');
var marksheetController = require('../src/marksheets/marksheetController');
const router = express.Router();

router.route('/marksheet/create').post(marksheetController.createMarksheetControllerFn);
router.route('/marksheet/getOne/:id').get(marksheetController.getOneMarksheetControllerFn);
router.route('/marksheet/getAll').get(marksheetController.getAllMarksheetControllerFn);
router.route('/marksheet/update/:id').patch(marksheetController.updateMarksheetControllerFn);
router.route('/marksheet/delete/:id').delete(marksheetController.deleteMarksheetControllerFn);

module.exports = router;