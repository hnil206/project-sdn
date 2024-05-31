const employeeModel = require('../models/Employee')
const bcrypt = require('bcrypt');
class SiteController{
    async index(req,res){
        res.render('/');
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
    async signup(req, res) {
        const { name, email, password } = req.body;
        try {
            const existingUser = await employeeModel.findOne({ email: email });
            if (existingUser) {
                res.json("Email already exists");
            } else {
                const hashedPassword = await bcrypt.hash(password, 10);
                const newUser = await employeeModel.create({ name, email, password: hashedPassword });
                res.json(newUser);
            }
        } catch (err) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

}
module.exports = new SiteController();
