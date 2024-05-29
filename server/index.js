const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const employeeModel = require('./models/Employee')
const app = express();
const route =require('./routes')

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/employee");



app.post('/signup',(req,res)=>{
    employeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})
route(app);


app.listen(3001, () => {
    console.log("server is running")
});