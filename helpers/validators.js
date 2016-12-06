'use strict'

var module, exports;

exports.isMobileNumber = function (m) {
    return /^(\+91)?\d{10}$/.test(m.toString())
}

exports.isString = function (s) {
    return typeof s === 'string' ? true : false
}

exports.isPassWord = function (p) {
    return /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/.test(p.toString());
}