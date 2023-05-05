const jwt = require("jsonwebtoken");
const { errorResponse } = require("../helpers");
const mongoose = require("mongoose");
const User = mongoose.model("User");

const apiAuth = async (req, res, next) => {
  if (!(req.headers && req.headers["x-token"])) {
    return errorResponse(req, res, "Token is not provided", 401);
  }
  const token = req.headers["x-token"];
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded.user;
    const person = await User.findOne({
      email: req.user.email,
    });
    if (!person) {
      return errorResponse(req, res, "Person is not found in system", 401);
    }
    req.user = person;
    return next();
  } catch (error) {
    return errorResponse(
      req,
      res,
      "Incorrect token is provided, try re-login",
      401
    );
  }
};

module.exports = apiAuth;
