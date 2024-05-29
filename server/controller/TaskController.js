const TaskModel = require('../models/TaskModel');

class TaskController {
    async getTask(req, res, next) {
       const task = await TaskModel.find();
       res.send(task)
    }
    
    async createTask(req, res, next) {
        await TaskModel.create(req.body)
            .then(task => res.json(task))
            .catch(err => res.json(err))
       
    }

    async updateTask(req, res, next) {
        const {id} = req.params;
        const {task} = req.body;
        TaskModel.findByIdAndUpdate(id, {task})
            .then(() => res.send("Update successfully !"))
            .catch((err)=>{
                console.log(err);
                res.send({error: err , msg: "Something went wrong !"})
            })
    }
    async deleteTask(req, res, next) {
        const {id} = req.params;
        TaskModel.findByIdAndDelete(id)
            .then(() => res.send("Deleted successfully !"))
            .catch((err)=>{
                console.log(err);
                res.send({error: err , msg: "Something went wrong !"})
            })
    }
}

module.exports = new TaskController();
