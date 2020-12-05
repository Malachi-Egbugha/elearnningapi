const express = require('express');
const router = require('express-promise-router')();
//const {validateBody, schemas, loginschemas} = require('../helpers/routehelpers');
//const {protect} = require('../middleware/auth');

const ExamController = require('../controllers/exam');

router.route('/createupdate')
.post(ExamController.create);


router.route('/read')
.post(ExamController.read);

router.route('/readexam')
.post(ExamController.readone);

router.route('/deleteexams/:examId')
.delete(ExamController.deleteExams);



module.exports = router;