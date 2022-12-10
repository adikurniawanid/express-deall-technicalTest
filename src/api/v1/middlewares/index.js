"use strict";
module.exports = {
  errorHandler: require("./errorHandler.middleware"),
  validation: require("./validation.middleware"),
  authorization: require("./authorization.middleware"),
  isAdmin: require("./isAdmin.middleware"),
};
