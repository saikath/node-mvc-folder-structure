'use strict'

var module, exports;

var helpers = require(dslash(2) + 'helpers');
var files = {}
eval(helpers.autoFileLoader('files'));

module.exports = function(router) {

  router.get('/user', files['userController'].getAllUser)
  router.get('/error', files['userController'].error);
  return router;
}
