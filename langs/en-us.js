'use strict'

var module, exports;

module.exports.errors = {
    INTERNAL_ERROR: {
        message: "Internal Server Error",
        code: 500
    },
    NOT_FOUND: {
        message: "No data found",
        code: 404
    },
    NO_API_FOUND: {
        message: "This Api Is Not Implemented Till Now",
        code: 404
    },
    NO_DATA_FOUND: {
        message: "No Data Found!!",
        code: 402
    },
    PASSWORD_MISMATCH: {
        message: "Username or Password is incorrect",
        code: 402
    },
    USER_NOT_FOUND: {
        message: "Requested user not found",
        code: 402
    },
    CUSTOM_MESSAGE: {
        message: "Please include a message for this response",
        code: 404
    },
    DATABASE_ERROR: {
        message: "We have found some database errors in servers",
        code: 500
    },
    PASS_MISMATCH: {
        message: "Password Missmatch",
        code: 401
    },
    SIGNUP_ERROR: {
        message: "Signup Error",
        code: 401
    },
    ValidationError: {
        message: "Validation Error",
        code: 401
    },
    LOGIN_ERROR: {
        message: "Invalid Credentials",
        code: 402
    },
    MOBILE_NO_INVALID: {
        message: "Mobile Number Must Be 10 Digit"
    },
    PASSWORD_INVALID: {
        message: "Password Must Be Min 8 Character Which contains At least One Upper,Lower,Digit And Special Character"
    }
}

module.exports.success = {
    SUCCESS: {
        message: "success",
        code: 200
    },
    SUCCESSFUL_SIGNUP: {
        message: "Sign Up Successful",
        code: 201
    },
    LOGIN_SUCCESSFUL: {
        message: "Login Successful",
        code: 200
    },
    SERVER_RUNNING: {
        message: "Server is configured properly",
        code: 200
    },
    CUSTOM_MESSAGE: {
        message: "Please include a message for this response",
        code: 200
    },
    USER_FOUND: {
        message: "We have found the user",
        code: 200
    }
}