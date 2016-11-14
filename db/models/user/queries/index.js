'use strict'

var module, exports;

var mongoose = require('mongoose');
var userModel = require('../')(mongoose);
var helpers = require(dslash(4) + 'helpers');
var queries = {};
eval(helpers.autoFileLoader('queries'));

Object.keys(queries).map(function(elem) {
  helpers.makeSingleObject(exports, queries[elem](userModel))()
  return;
})
