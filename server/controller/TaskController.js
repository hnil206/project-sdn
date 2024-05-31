const TaskModel = require('../models/TaskModel');

class TaskController {
    async getTask(req, res, next) {
       const tasks  = await TaskModel.find();
       res.send(tasks )
    }
    
    async createTask(req, res, next) {
        await TaskModel.create(req.body)
            .then(task => res.json(task))
            .catch(err => res.json(err))
       
    }

    async updateTask(req, res, next) {
        // const {id} = req.params.id;
        // const {task} = req.body;
        TaskModel.findByIdAndUpdate({_id :req.params.id},  req.body)
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
    async getTaskById(req, res, next) {
        try {
            const { id } = req.params;
            const task = await TaskModel.findById(id);
            res.send(task);
        } catch (err) {
            console.log(err);
            res.status(500).send({ error: err, msg: "Something went wrong!" });
        }
    }
      
}

module.exports = new TaskController();
