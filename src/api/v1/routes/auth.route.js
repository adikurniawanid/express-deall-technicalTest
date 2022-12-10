"use strict";
const express = require("express");
const router = express.Router();
const { AuthController } = require("../controllers");
const { validation } = require("../middlewares");
const { registerValidationRules } = require("../validations/auth.validation");

router.post(
  "/register",
  registerValidationRules(),
  validation,
  AuthController.register
);

module.exports = router;
