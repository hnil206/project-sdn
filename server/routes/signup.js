const express = require('express');
const router = express.Router();
const signupController = require('../controller/SignupController');
router.post('/login', signupController.sigup);
module.exports = router;
