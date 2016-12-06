'use strict'

var exports, module;

var mongoose = require('mongoose');
var gplugins = require('./gplugins');
var configDb = require('../configs').db;
var models = require('./models');
typeof gplugins === 'function' ? mongoose.plugin(gplugins) : false;

/*
 *This function initialize the database connection
 */

module.exports.connect = function (app) {
    mongoose.connect(configDb.mongodbUrl)
    mongoose.connection.once('open', function () {
        print("Database Connected : ", mongoose.connection.port);
    });
    mongoose.connection.on('error', function (err) {
        if (err) {
            throw new Error('Database Connection Error ', err);
        }
    })
}