"use strict";
const express = require("express");
const router = express.Router();
const { AuthController } = require("../controllers");
const { validation } = require("../middlewares");
const {
  registerValidationRules,
  loginValidationRules,
} = require("../validations/auth.validation");

router.post(
  "/register",
  registerValidationRules(),
  validation,
  AuthController.register
);

router.post("/login", loginValidationRules(), validation, AuthController.login);

module.exports = router;
