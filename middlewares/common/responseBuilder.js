'use strict'
/**
 * { This middleware is responsible for custom response body building } 
 *  {
 *    success: Boolean,
 *    status: Number,
 *    data: response / Array ,
 *    errors: {
        field: {
          message: "INSERT ERROR REASON HERE",
          type: "ERROR TYPE",
          errorValue: "ERROR VALUE",
          expectedValue: "EXPECTED VALUE",
          from: "LOCATION FROM WHICH THE ERROR IS COMMING"
         }
      }
 *  }
 */
var module, exports;
var langs = require(dslash(2) + 'langs');

module.exports = function (req, res, next) {
    var originalSend = res.send;
    res.body = {};
    res.body.data = {};
    res.body.message = "";
    res.body.errors = {};
    res.response = function (response, lang) {
        response.success = Object.keys(response.errors).length ? false : true;
        var message = langs[req.query.lang || 'en-us'][response.success ? 'success' : 'errors'][response.message || 'CUSTOM_MESSAGE'];
        response.message = message.message;
        response.statusCode = message.code;
        res.status(response.statusCode).send(response);
    };
    next();
};