'use strict'

var exports, module;
var bcrypt = require('bcrypt');

module.exports = function (schema) {
    var queries = {};

    queries.login = function (username, password, cb) {
        return this.findOne({
                mobileNumber: username
            })
            .select('+password')
            .exec(function (err, user) {
                if (err) {
                    return cb(err);
                } else if (user) {
                    print("user ", user);
                    bcrypt.compare(password, user.password.toString(), function (err, match) {
                        if (err) {
                            return cb(err);
                        } else {
                            return match ? cb(null, {
                                data: user,
                                msg: 'LOGIN_SUCCESSFUL'
                            }) : cb(null, {
                                err: 'password',
                                msg: 'PASS_MISMATCH'
                            })
                        }
                    });
                } else {
                    return cb(null, {
                        err: 'login',
                        msg: 'LOGIN_ERROR'
                    });
                }
            });
    };

    queries.signin = function (data, cb) {
        return this.create(data, function (err, user) {
            if (err) {
                return cb(err);
            } else {
                return user ? cb(null, {
                    data: user,
                    msg: 'SUCCESSFUL_SIGNUP'
                }) : cb(null, {
                    err: 'signup',
                    msg: 'SIGNUP_ERROR'
                });
            }
        });
    };

    queries.getAlluser = function (query, cb) {
        if (query && typeof query === 'function') {
            cb = query;
            query = {};
        } else if (query && typeof query !== 'object') {
            query = {};
        } else if (cb && typeof cb !== 'function') {
            cb = function () {}
        }

        return this.find(query, function (err, users) {
            if (err) {
                print(err);
                return cb(err);
            } else {
                return users.length ? cb(null, {
                    data: users,
                    msg: 'USER_FOUND'
                }) : cb(null, {
                    err: 'noresource',
                    msg: 'USER_NOT_FOUND'
                });
            }
        });
    };

    schema.statics = queries;
    return schema;
};