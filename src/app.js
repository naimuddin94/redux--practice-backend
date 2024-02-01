const express = require("express");
const cors = require("cors");
const globalErrorHandler = require("./lib/globalErrorHandler");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the redux-practice server");
});

app.get("*", (req, res, next) => {
  const error = new Error(`Couldn't find ${req.originalUrl} on the server`);
  error.status = 404;
  next(error);
});

app.use(globalErrorHandler);

module.exports = app;
