const express = require('express');
const router = require('express-promise-router')();
//const {validateBody, schemas, loginschemas} = require('../helpers/routehelpers');
//const {protect} = require('../middleware/auth');

const SecondcaController = require('../controllers/secondca');

router.route('/createupdate')
.post(SecondcaController.create);


router.route('/read')
.post(SecondcaController.read);

router.route('/readsecondca')
.post(SecondcaController.readone);

router.route('/deletesecondcas/:secondcaId')
.delete(SecondcaController.deleteSecondcas);



module.exports = router;