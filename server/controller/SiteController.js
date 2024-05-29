const employeeModel = require('../models/Employee')

class SiteController{
    async index(req,res){
        res.render('/')
    }
    login(req,res){
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
    }
    sigup(req, res){
        employeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
    }

}
module.exports = new SiteController();
