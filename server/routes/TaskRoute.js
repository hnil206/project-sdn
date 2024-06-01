const express = require('express');
const router = express.Router();
const TaskController = require('../controller/TaskController');
const multer = require('multer');
const path = require('path');

// Cấu hình multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});


const upload = multer({ storage: storage });


router.post("/delete/:id", TaskController.deleteTask);
router.put("/update/:id", upload.single('image'),TaskController.updateTask);
router.post("/create", upload.single('image'), TaskController.createTask); // Sử dụng upload.single
router.get('/', TaskController.getTask);
router.get("/:id", TaskController.getTaskById);

module.exports = router;
