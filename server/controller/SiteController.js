class SiteController{
    async index(req,res){
        res.render('/')
    }
}
module.exports = new SiteController();
