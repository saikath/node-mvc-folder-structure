'use strict'

var exports;

exports.mongodbUrl = process.env.NODE_ENV === 'development' ? 'mongodb://localhost/nodemvc' : 'mongodb://localhost/nodemvc';
exports.port = 27017;
exports.defaultLimit = 10;
exports.defaultSkip = 0;
exports.defaultSortType = 1;
