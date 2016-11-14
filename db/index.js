'use strict'

var exports, module;

var mongoose = require('mongoose');
var models = require('./models');
var gplugins = require('./gplugins');
var configDb = require('../configs').db;

typeof gplugins === 'function' ? mongoose.plugin(gplugins) : false;

/*
 *This function initialize the database connection
 */

module.exports.connect = function() {
  mongoose.connect(configDb.mongodbUrl, function(err) {
    if (!err) {
      print("Database Connected : ", configDb.port);
    } else {
      throw new Error('Database Connection Error ', err);
    }
  });
}
