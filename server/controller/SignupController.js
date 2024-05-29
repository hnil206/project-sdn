
class SigupController{
    sigup(req, res){
        employeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
    }
}
module.exports = new SigupController();
