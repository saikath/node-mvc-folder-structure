'use strict'

var module, exports;

/**
 * This function returns a single object from multiple objects
 * params    {target} Object     the target object will be here
 * params    {source} Object     the source object to be copied from
 * return    {target} Object     a single object made from multiple 
                                 property(which contain object) of source object
 */
module.exports = function(target, source) {

  if (target && typeof target === 'object' && source && typeof source === 'object') {
    return function() {
      for (var key in source) {
        if (!target[key]) {
          target[key] = source[key]
        } else {
          print("same property name found -- makeSingleObject");
        }
      }
    }
  } else {
    return function() {
      print("target and source must be object")
    }
  }

}
