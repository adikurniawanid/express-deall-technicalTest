"use strict";
const { User } = require("../models");
const { hashPassword, comparePassword, generateJWT } = require("../helpers");

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

  static async login(req, res, next) {
    try {
      const { username, password } = req.body;

      const user = await User.findOne({
        where: {
          username,
        },
      });

      if (user) {
        const isPasswordValid = await comparePassword(password, user.password);

        if (isPasswordValid) {
          res.status(200).json({
            data: {
              token: await generateJWT(user.publicId, user.username),
            },
          });
        } else {
          throw {
            status: 401,
            message: "Invalid email or password",
          };
        }
      } else {
        throw {
          status: 401,
          message: "Invalid email or password",
        };
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AuthController;
