'use strict'

var module, exports;

var mongoose = require('mongoose');

var imethods = require('./imethods');
var plugins = require('./plugins');
var smethods = require('./smethods');
var hooks = require('./hooks');
var validators = require(dslash(3) + 'helpers').validators
var bcrypt = require('bcrypt');

function createPassHash(p) {
    var salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(p, salt);
}

var userSchema = new mongoose.Schema({
    mobileNumber: {
        type: String,
        required: true,
        validate: {
            validator: validators.isMobileNumber,
            message: "MOBILE_NO_INVALID"
        }
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: validators.isPassWord,
            message: "PASSWORD_INVALID"
        },
        select: false,
        get: createPassHash
    },
    name: {
        type: String,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
});

userSchema = typeof imethods === 'function' ? imethods(userSchema) : userSchema;
userSchema = typeof smethods === 'function' ? smethods(userSchema) : userSchema;
userSchema = typeof plugins === 'function' ? plugins(userSchema) : userSchema;
userSchema = typeof hooks === 'function' ? hooks(userSchema) : userSchema;

module.exports = mongoose.model('User', userSchema);