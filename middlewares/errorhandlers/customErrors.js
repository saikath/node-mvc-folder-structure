'use strict'

var exports;

process.on('uncaughtException', function(err) {
    if (err) {
        console.error("Error ---> ", err);
        console.log("Error Stack ---> ", err.stack);
    }
});

module.exports = function(err, req, res, next) {
    if (err) {
        switch (err.message) {
            case 'DATABASE_ERROR':
                res.body.message = 'DATABASE_ERROR';
                res.body.errors.push({ database: "database issues" });
                res.response(res.body);
                break;
            default:
                res.body.message = 'CUSTOM_MESSAGE';
                res.body.errors.push({ err: err.message });
                res.response(res.body);
        }
    }
    next()
}