'use strict'
var module, exports;
var winston = require('winston');
var serverCnfg = require('../configs').server;
/**
 * ///////////         This file contains all global varibale and functions //////
 *
 *
 */

global.print = console.log; // alias for console.log

/**
 * This will return `n`(max 8 times) number of `../` string
 * ex:- dslash(3) => "../../../" 
 */
global.dslash = function (number) {
    number = number || 1;
    return "../../../../../../../../../../../../../../../../../../../../../../../../".substr(0, number * 3);
};

/**
 * This will return a new custom error instance in the format
 *  {
 *   name: "errorName",
 *   errors:{
 *     from : message
 *    }
 *  }
 */
global.customError = function (name, source, errList) {
    //Error.call(this);
    //Error.captureStackTrace(this, this.constructor);
    var e = {}
    e.name = name;
    e.errors = {};
    if (!Array.isArray(errList) && typeof errList === 'object') {
        Object.keys(errList).forEach(function (err) {
            e.errors[err] = {};
            e.errors[err].message = errList[err];
            e.errors[err].path = source;
        });
    }
    return e;
};

global.logger = new(winston.Logger)({
    transports: [
      new(winston.transports.Console)({
            level: 'info'
        }),
      new(winston.transports.File)({
            name: 'error-file',
            filename: serverCnfg.errorLog,
            level: 'error'
        })
    ]
});

module.exports = {};