"use strict";
const express = require("express");
const router = express.Router();
const Wishes = require("../Controllers/wishesController");
router.post("/", Wishes.create);
router.get("/", Wishes.findAll);
router.get("/:id", Wishes.findOne);

module.exports = router;
