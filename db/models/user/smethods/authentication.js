'use strict'

var exports, module;
var bcrypt = require('bcrypt');

module.exports = function(schema) {
    schema.statics.login = function(username, password, cb) {
        this.findOne({ username: username }, function(err, user) {
            if (!err) {
                if (user) {
                    bcrypt.compare(password, user.password.toString(), function(err, match) {
                        if (!err) {
                            match ? cb(null, user) : cb(null, 'PASSWORD_MISMATCH')
                        } else {
                            cb(err);
                        }
                    });
                } else {
                    cb(null, 'USER_NOT_FOUND');
                }
            } else {
                cb(err);
            }
        })
    }

    return schema;
}