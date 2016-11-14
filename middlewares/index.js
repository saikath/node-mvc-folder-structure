'use strict'

var module, exports;
/*
 *importing middlewares
 */
var bodyParser = require('body-parser'),
  mo = require('method-override'),
  common = require('./common'),
  cors = require('cors');


module.exports = function(app) {
  //attaching cors
  app.use(common.prettyConsole)
    .use(common.responseBuilder)
    .use(cors())
    //attaching body parser
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({
      extended: true
    }))
    //attaching method override
    .use(mo())
    /*        //attaching session
            .use(session({
                resave: true,
                saveUninitialized: false,
                secret: 'driveNeO123#',
                cookie: {
                    maxAge: 24 * 60 * 60 * 1000
                }
            }))*/
  return app;
}
