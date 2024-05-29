const express = require('express');
const router = express.Router();


const TaskController = require('../controller/TaskController');

router.post("/delete/:id", TaskController.deleteTask);
router.put("/update/:id", TaskController.updateTask);
router.post("/create", TaskController.createTask);
router.get('/', TaskController.getTask);

module.exports = router;
