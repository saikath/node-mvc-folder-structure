'use strict'
var module, exports;
/**
 * ///////////         This file contains all global varibale and functions //////
 *
 *
 */

global.print = console.log; // alias for console.log

/**
 * This will return `n`(max 8 times) number of `../` string
 * ex:- dslash(3) => "../../../" 
 */
global.dslash = function(number) {
  number = number || 1;
  return "../../../../../../../../../../../../../../../../../../../../../../../../".substr(0, number * 3);
}

module.exports = {};
