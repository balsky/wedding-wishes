"use strict";

const { responseCode } = require("../utils/constant");

module.exports = ({ code, data, error }, req, res, next) => {
  if (responseCode.SUCCESS.includes(code)) {
    const newData = {
      code,
      messsage:
        code === 201
          ? `Success create data`
          : code === 200
          ? `Success get data`
          : `Success`,
      data,
    };
    res.status(code).json(newData);
  } else if (error) {
    next({ code, error });
  }
};
