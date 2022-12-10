"use strict";
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const { authRouter } = require("./api/v1/routes");
const { errorHandler } = require("./api/v1/middlewares");
const indexRouter = require("./api/v1/routes/index.route");
// const usersRouter = require("./api/v1/routes/users");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));
app.use(cors());

app.use("/v1/auth", authRouter);
// app.use("/users", usersRouter);
app.use(errorHandler);

module.exports = app;
