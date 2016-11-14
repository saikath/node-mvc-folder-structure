'use strict'
/**
 * { item_description } This middleware is responsible for custom response body building
 *  {
 *    success: Boolean,
 *    status: Number,
 *    data: response / Array ,
 *    errors: [{
 *     type: String,
 *     Message: String
 *    }]
 *  }
 */
var module, exports;
var langs = require('../../langs');

module.exports = function(req, res, next) {
    var originalSend = res.send;
    res.body = {};
    res.body.data = {};
    res.body.message = "";
    res.body.errors = [];
    res.response = function(response, lang) {
            response.success = response.errors.length ? false : true;
            var message = langs[lang || 'en-us'][response.success ? 'success' : 'errors'][response.message || 'CUSTOM_MESSAGE'];
            response.message = message.message;
            response.statusCode = message.code;
            res.send(response.statusCode, response)
        }
        //res.send.errors = [];
        //res.send.data = {};

    next();
}