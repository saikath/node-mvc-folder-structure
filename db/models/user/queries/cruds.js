'use strict'

var module, exports;

module.exports = function(User) {

  return function() {
    return {
      /**
       * { This function return all users }
       *
       * @param      {<type>}  User    The user
       */
      findUser: function(cb) {
        User.find({ _id: undefined }, function(err, data) {
          if (err) {
            cb(err);
          } else {
            cb(null, data);
          }
        })
      },
      /**
       * { This function return all users }
       *
       * @param      {<type>}  User    The user
       */
      error: function(cb) {
        User.find({ _id: undefined }, function(err, data) {
          if (err) {
            cb(err);
          } else {
            cb(new Error("DATABASE_ERROR"));
          }
        })
      }

    };
  }()
}
