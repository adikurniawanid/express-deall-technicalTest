"use strict";
const express = require("express");
const router = express.Router();
const { UserController } = require("../controllers");
const { authorization } = require("../middlewares");

router.get("/", authorization, UserController.get);

module.exports = router;
