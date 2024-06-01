const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {type: String, require: true},
    description: {type: String, require: true},
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    image: {type: String} 
},
{
    timestamps: true
});

module.exports = mongoose.model("tasks", taskSchema);