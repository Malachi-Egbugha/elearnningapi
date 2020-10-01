const express = require('express');
const router = require('express-promise-router')();
const {validateBody, schemas, loginschemas} = require('../helpers/routehelpers');
const {protect} = require('../middleware/auth');

const UsersController = require('../controllers/users');

router.route('/signup')
.post(validateBody(schemas.authSchema), UsersController.signup);

router.route('/signin')
.post(validateBody(loginschemas.authSchema), UsersController.signin);

router.route('/secret')
.get(protect,  UsersController.secret);


module.exports = router;