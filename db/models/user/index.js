'use strict'

var module, exports;

var mongoose = require('mongoose');

var imethods = require('./imethods');
var plugins = require('./plugins');
var smethods = require('./smethods');

module.exports = function(mongoose, configDb) {
    var userSchema = new mongoose.Schema({
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        name: {
            type: String
        }
    }, {
        versionKey: false,
        timestamps: true
    });

    userSchema = typeof imethods === 'function' ? imethods(userSchema) : userSchema;
    userSchema = typeof smethods === 'function' ? smethods(userSchema) : userSchema;
    userSchema = typeof plugins === 'function' ? plugins(userSchema) : userSchema;

    return mongoose.model('User', userSchema);

}