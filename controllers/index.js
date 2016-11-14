'use strict'
var module, exports;

var helpers = require('../helpers')
var router = require('express').Router();
var moduleRouters = {};
eval(helpers.autoFileLoader('moduleRouters'));

module.exports = function(app) {
  app.use('/api/v1/user', moduleRouters['user'](router))
}
