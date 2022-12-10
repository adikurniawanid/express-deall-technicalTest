"use strict";
const { User } = require("../models");

class AuthController {
  static async get(req, res, next) {
    try {
      const user = await User.findOne({
        attributes: [
          "publicId",
          "name",
          "username",
          "isAdmin",
          "createdAt",
          "updatedAt",
        ],
        where: {
          publicId: req.user.publicId,
        },
      });

      if (user) {
        res.status(200).json({
          data: user,
        });
      } else {
        throw {
          status: 404,
          message: "User not found",
        };
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AuthController;
