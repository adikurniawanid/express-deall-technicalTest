"use strict";
const express = require("express");
const router = express.Router();
const { UserController } = require("../controllers");
const { authorization, isAdmin } = require("../middlewares");

router.get("/profile", authorization, UserController.profile);
router.get("/:username", authorization, UserController.get);
router.get("/", authorization, UserController.list);
router.delete("/", isAdmin, UserController.delete);

module.exports = router;
