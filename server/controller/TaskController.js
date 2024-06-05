const TaskModel = require('../models/TaskModel');
const fs = require('fs');
const path = require('path');


class TaskController {
    async getTask(req, res, next) {
        try {
            const tasks = await TaskModel.find();
            res.send(tasks);
        } catch (err) {
            console.log(err);
            res.status(500).send({ error: err, msg: "Something went wrong!" });
        }
    }

    async createTask(req, res, next) {
        try {
            const { name, description, price, stock } = req.body;
            const newTask = new TaskModel({
                name,
                description,
                price,
                stock,
                image: req.file ? req.file.filename : null
            });

            const task = await newTask.save();
            res.json(task);
        } catch (err) {
            console.log("Error in createTask:", err); 
            res.status(500).send({ error: err, msg: "Something went wrong!" });
        }
    }

    async updateTask(req, res, next) {
        try {
            let taskUpdate = req.body;
           

            // Check if a new file is uploaded
            if (req.file) {
                taskUpdate.image = req.file.filename; // Use filename instead of path

                // Find the current task to delete the old image
                const currentTask = await TaskModel.findById(req.params.id);
                if (currentTask.image) {
                    // Delete the old image from the server
                    const oldImagePath = path.join(__dirname, '..', 'uploads', currentTask.image);
                    fs.unlink(oldImagePath, (err) => {
                        if (err) console.log("Error deleting old image:", err);
                    });
                }
            }

            const updatedTask = await TaskModel.findByIdAndUpdate(
                req.params.id,
                taskUpdate,
                { new: true }
            );

            res.send("Update successfully!");
        } catch (err) {
            console.log("Error in updateTask:", err); 
            res.send({ error: err, msg: "Something went wrong!" });
        }
    }

    async deleteTask(req, res, next) {
        try {
            const { id } = req.params;
            const updatedTask = await TaskModel.findByIdAndUpdate(
                id,
                { isDeleted: true },
                { new: true }
            );
            res.send(updatedTask);
        } catch (err) {
            console.log("Error in deleteTask:", err);
            res.status(500).send({ error: err, msg: "Something went wrong!" });
        }
    }
    async getTaskById(req, res, next) {
        try {
            const { id } = req.params;
            const task = await TaskModel.findById(id);
            res.send(task);
        } catch (err) {
            console.log("Error in getTaskById:", err); // Log chi tiết lỗi
            res.status(500).send({ error: err, msg: "Something went wrong!" });
        }
    }
}

module.exports = new TaskController();
