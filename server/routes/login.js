const express = require('express');
const router = express.Router();
const loginController = require('../controller/LoginController');
router.post('/login', loginController.login);
module.exports = router;
