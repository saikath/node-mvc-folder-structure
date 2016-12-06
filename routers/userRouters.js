'use strict'

var module, exports;

var router = require('express').Router();
var user = require('../controllers').user

router.post('/signin', user.userController.signIn);
router.post('/login', user.userController.logIn);
router.get('/allusers', user.userController.getAlluser);

module.exports = router;