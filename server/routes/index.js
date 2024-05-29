const siteRouter = require('./site');
const taskRouter = require('./TaskRoute');

function route(app){
    app.use('task', taskRouter);
    app.use('/', siteRouter);

}
module.exports = route;
