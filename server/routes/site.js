const express = require('express');
const router = express.Router();

const siteController = require('../controller/SiteController');


router.get('/', siteController.index);


module.exports = router;