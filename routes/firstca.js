const express = require('express');
const router = require('express-promise-router')();
//const {validateBody, schemas, loginschemas} = require('../helpers/routehelpers');
//const {protect} = require('../middleware/auth');

const FirstcaController = require('../controllers/firstca');

router.route('/createupdate')
.post(FirstcaController.create);


router.route('/read')
.post(FirstcaController.read);

router.route('/readfirstca')
.post(FirstcaController.readone);

router.route('/deletefirstcas/:firstcaId')
.delete(FirstcaController.deleteFirstcas);



module.exports = router;