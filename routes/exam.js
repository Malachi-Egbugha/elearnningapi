const express = require('express');
const router = require('express-promise-router')();
//const {validateBody, schemas, loginschemas} = require('../helpers/routehelpers');
//const {protect} = require('../middleware/auth');

const ExamController = require('../controllers/exam');

router.route('/createupdate')
.post(ExamController.create);


router.route('/read')
.post(ExamController.read);


module.exports = router;