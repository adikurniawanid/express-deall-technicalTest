"use strict";
const { body } = require("express-validator");
const { User } = require("../models");

const registerValidationRules = () => {
  return [
    body("username")
      .notEmpty()
      .bail()
      .withMessage("Username is required")
      .custom(async (value) => {
        if (
          await User.findOne({
            where: {
              username: value,
            },
          })
        ) {
          return Promise.reject("Username already in use");
        }
      }),
    body("password")
      .notEmpty()
      .bail()
      .withMessage("Password is required")
      .isLength({ min: 8, max: 21 })
      .withMessage("Password must between 8 - 21 characters"),
    body("name")
      .notEmpty()
      .withMessage("name is required")
      .isLength({ max: 255 })
      .withMessage("name must be less than 255 characters"),
  ];
};

const loginValidationRules = () => {
  return [
    body("username").notEmpty().bail().withMessage("Username is required"),
    body("password")
      .notEmpty()
      .bail()
      .withMessage("Password is required")
      .isLength({ min: 8, max: 21 })
      .withMessage("Password must between 8 - 21 characters"),
  ];
};

module.exports = {
  registerValidationRules,
  loginValidationRules,
};
