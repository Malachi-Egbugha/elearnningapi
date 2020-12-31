const express = require('express');
const router = require('express-promise-router')();
//const {validateBody, schemas, loginschemas} = require('../helpers/routehelpers');
//const {protect} = require('../middleware/auth');

const GradeController = require('../controllers/grade');

router.route('/createupdate')
.post(GradeController.create);

router.route('/deletegrade/:gradeId')
.delete(GradeController.deleteGrade);

router.route('/read')
.post(GradeController.read);





module.exports = router;