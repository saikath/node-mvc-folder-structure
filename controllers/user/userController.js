'use strict'

var module, exports;

var db = require(dslash(2) + 'db/models');

module.exports.getAllUser = function(req, res, next) {
  db.user.findUser(function(err, data) {
    if (err) {
      next(err);
    } else {
      res.body.message = "USER_NOT_FOUND";
      res.body.errors.push({ login: "issue with login" });
      res.body.data = { data: data };
      res.response(res.body);
    }
  });
}

module.exports.error = function(req, res, next) {
  db.user.error(function(err, data) {
    if (err) {
      next(err);
    } else {
      res.body.message = "USER_NOT_FOUND";
      res.body.errors.push({ login: "issue with login" });
      res.body.data = { data: data };
      res.response(res.body);
    }
  });
}
