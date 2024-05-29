const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const employeeModel = require('./models/Employee')
const app = express();
app.use(express.json());
app.use(cors());
 
mongoose.connect("mongodb://localhost:27017/employee");

app.post('/login',(req,res)=> {
    const {email, password} = req.body;
    employeeModel.findOne({email: email})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("Success");
            }
            else{
                res.json("Password is incorrect");
            }
        }
        else{res.json("Email or Password is incorrect")}
    })
});

app.post('/signup',(req,res)=>{
    employeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server is running")
});