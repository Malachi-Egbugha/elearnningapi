const express = require('express');
const router = require('express-promise-router')();
const {validateBody, schemas, loginschemas} = require('../helpers/routehelpers');
const {protect} = require('../middleware/auth');

const UsersController = require('../controllers/users');



router.route('/updateuser/:id')
.put(UsersController.updateuser);

router.route('/secret')
.get(protect,  UsersController.secret);


module.exports = router;