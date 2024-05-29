class LoginController{
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
}
module.exports = new LoginController();
