/*
 *initialize global helpers
 */
require('./helpers').globalHelpers;

/*
 * importing modules
 */
var express = require('express'),
    app = express(),
    configServer = require('./configs').server,
    middlewares = require('./middlewares'),
    errorHandler = require('./middlewares/errorhandlers'),
    db = require('./db'),
    routers = require('./routers'),
    mongoose;

//initializing database mongodb
db.connect(app);

//attaching middlewares
app = middlewares(app);

//controller/routers initialize
routers(app); //database models and app as parameter

//error handle middlewares
app.use(errorHandler.customErrors);

//start listining
app.listen(configServer.port, function () {
    console.log("Server Running : " + configServer.port);
});