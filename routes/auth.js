const express = require("express");
const router = express.Router();
const {validateBody, schemas, loginschemas} = require('../helpers/routehelpers');
const {signup, signin} = require('../controllers/auth');
//const {userSignupValidator} = require('../validator');
router.post("/signup",validateBody(schemas.authSchema),signup);
router.post("/signin",validateBody(loginschemas.authSchema), signin);
module.exports = router;