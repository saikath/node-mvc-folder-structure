'use strict'

var module, exports;

var userRouter = require('./userRouters.js');

module.exports = function (app) {
    app.use('/api/v1/user', userRouter);



    /**
     * Always keep this route at lasr 
     */
    app.use('*', function (req, res, next) {
        next({
            err: 'apinotfound',
            msg: 'NO_API_FOUND',
            mainMsg: "NOT_FOUND"
        });
    })
}