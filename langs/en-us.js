'use strict'

var module, exports;

module.exports.errors = {
  PASSWORD_MISMATCH: { message: "Username or Password is incorrect", code: 402 },
  USER_NOT_FOUND: { message: "Requested user not found", code: 402 },
  CUSTOM_MESSAGE: { message: "Please include a message for this response", code: 200 },
  DATABASE_ERROR: { message: "We have found some database errors in servers", code: 500 }
}

module.exports.success = {
  SERVER_RUNNING: { message: "Server is configured properly", code: 200 },
  CUSTOM_MESSAGE: { message: "Please include a message for this response", code: 200 }
}
