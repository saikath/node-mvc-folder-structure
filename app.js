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
  controllers = require('./controllers'),
  mongoose;

//initializing database(mongodb)
db.connect(); //this returns a object of created models

//attaching middlewares
app = middlewares(app);

//controller/routers initialize
controllers(app); //database models and app as parameter

//error handle middlewares
app.use(errorHandler.customErrors);

//start listining
app.listen(configServer.port, function() {
  console.log("Server Running : " + configServer.port);
});
