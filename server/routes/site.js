const express = require('express');
const router = express.Router();

const siteController = require('../controller/SiteController');


router.post('/login', siteController.login);
router.post('/signup', siteController.signup);
router.get('/', siteController.index);


module.exports = router;