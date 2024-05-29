const loginRouter = require('./login');
const siteRouter = require('./site');
const sigupRouter = require('./signup');



function route(app){
    app.use('/login', loginRouter);
    app.use('/signup', sigupRouter);
    app.use('/', siteRouter);

}
module.exports = route;
