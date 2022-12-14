"use strict";
const { User } = require("../models");
const jwt = require("jsonwebtoken");
const config = require("../../../config/jwt.config");

module.exports = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      throw {
        status: 401,
        message: "Unauthorized User",
      };
    } else {
      const decoded = jwt.verify(
        req.headers.authorization,
        config.JWT_SECRET_KEY
      );

      const publicId = decoded.publicId;
      const username = decoded.username;
      const isAdmin = decoded.isAdmin;

      const selectedUser = await User.findOne({
        attributes: ["publicId"],
        where: {
          publicId,
          username,
          isAdmin,
        },
      });
      if (selectedUser && isAdmin) {
        req.user = selectedUser;
        next();
      } else {
        throw {
          status: 401,
          message: "Unauthorized User",
        };
      }
    }
  } catch (error) {
    next(error);
  }
};
