const express = require("express");

const { employeesRouter } = require("./routes/employeesRoutes");

const { errorHandler } = require("./middlewares/errorHandler");

const { notFoundHandler } = require("./middlewares/notFoundHandler");

const app = express();

app.use(express.json());

app.use("/employees", employeesRouter);

app.use(notFoundHandler);

app.use(errorHandler);

module.exports = app;
