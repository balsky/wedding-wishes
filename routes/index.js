"use strict";
const express = require("express");
const router = express.Router();
const Wishes = require("./wishesRoute");
router.use("/wishes", Wishes);

module.exports = router;
