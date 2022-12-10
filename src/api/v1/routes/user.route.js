"use strict";
const express = require("express");
const router = express.Router();
const { UserController } = require("../controllers");
const { authorization, isAdmin } = require("../middlewares");

router.get("/about-me", authorization, UserController.get);
router.get("/", isAdmin, UserController.list);

module.exports = router;
