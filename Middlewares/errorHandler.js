"use strict";

const { responseCode } = require("../utils/constant");

module.exports = ({ code, error }, req, res, next) => {
  if (responseCode.ERROR_CLIENT.includes(code)) {
    const newError = {
      code,
      message: error,
    };
    res.status(code).json(newError);
  } else if (responseCode.ERROR_SERVER.includes(code)) {
    const newError = {
      code,
      message: `server error please report to administrator`,
    };
    res.status(code).json(newError);
  } else {
    res.status(code).json(error);
  }
};
