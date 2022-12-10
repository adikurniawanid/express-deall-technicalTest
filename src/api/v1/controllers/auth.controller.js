"use strict";
const { User } = require("../models");
const { hashPassword } = require("../helpers");

class AuthController {
  static async register(req, res, next) {
    try {
      const { name, username, password } = req.body;

      const user = await User.create({
        name,
        username,
        password: await hashPassword(password),
      });

      if (user) {
        res.status(201).json({
          message: "Success register user",
        });
      } else {
        throw {
          status: 409,
          message: "Failed register user",
        };
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AuthController;
