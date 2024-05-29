const {Router} = require('express');

const router = Router();

const TaskController = require('../controller/TaskController')


router.get('/task', TaskController.getTask)

module.exports = router;