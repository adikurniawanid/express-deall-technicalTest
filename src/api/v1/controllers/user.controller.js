"use strict";
const { User } = require("../models");

class UserController {
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

  static async list(req, res, next) {
    try {
      const option = {
        attributes: [
          "publicId",
          "name",
          "username",
          "isAdmin",
          "createdAt",
          "updatedAt",
        ],
        where: {},
      };

      if (req.query.isAdmin) {
        option.where.isAdmin = req.query.isAdmin;
      }

      if (req.query.limit) {
        option.limit = Number(req.query.limit);
        if (req.query.page) {
          option.offset = Number(
            req.query.page * req.query.limit - req.query.limit
          );
        }
      }

      const users = await User.findAll(option);

      if (users) {
        res.status(200).json({
          data: users,
        });
      } else {
        throw {
          status: 404,
          message: "User list not found",
        };
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
