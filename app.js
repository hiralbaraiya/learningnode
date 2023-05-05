const express = require("express");
require("dotenv").config();
require("./config");
require("./model");
const publicRoutes = require("./routes/public");
const privateRoutes = require("./routes/private");
const apiAuth = require("./middlewares/apiAuth");

const app = express();
app.use(express.json());
app.use("/pub", publicRoutes);
app.use("/api", apiAuth, privateRoutes);

module.exports = app;
