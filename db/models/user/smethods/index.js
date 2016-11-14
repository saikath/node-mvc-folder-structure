'use strict'

var module, exports;

var autoFileLoader = require(dslash(4) + 'helpers').autoFileLoader;
var smethods = {};
eval(autoFileLoader('smethods'));

module.exports = function(schema) {
  schema = smethods['authentication'](schema);
  return schema;
}
