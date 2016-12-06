'use strict'

var module, exports;

var db = require(dslash(2) + 'db/models');

module.exports.signIn = function (req, res, next) {
    db.user.signin(req.body, function (err, user) {
        if (err) {
            next(err);
        } else {
            if (user.err) {
                next(user);
            } else {
                res.body.data = user.data;
                res.body.message = user.msg;
                res.response(res.body);
            }
        }
    });
}

module.exports.logIn = function (req, res, next) {
    db.user.login(req.body.username, req.body.password, function (err, user) {
        if (err) {
            next(err);
        } else {
            if (user.err) {
                next(user);
            } else {
                res.body.data = user.data;
                res.body.message = user.msg
                res.response(res.body);
            }
        }
    });
}

module.exports.getAlluser = function (req, res, next) {
    db.user.getAlluser(function (err, users) {
        if (err) {
            next(err);
        } else {
            if (users.err) {
                users.mainMsg = 'NO_DATA_FOUND';
                next(users);
            } else {
                res.body.data = users.data;
                res.body.message = users.msg
                res.response(res.body);
            }
        }
    });
}