"use strict";
const jwt = require("jsonwebtoken");
const config = require("../../../config/jwt.config");

module.exports = async (publicIdParam, usernameParam, isAdminParam) => {
  return await jwt.sign(
    { publicId: publicIdParam, username: usernameParam, isAdmin: isAdminParam },
    config.JWT_SECRET_KEY
  );
};
