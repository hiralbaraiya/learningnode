const mongoose = require("mongoose");
const User = mongoose.model("User");
const { errorResponse, successResponse } = require("../helpers");

const listAllUsers = (req, res, next) => {
  return User.find({})
    .select("email")
    .then((users) => {
      successResponse(req, res, users, 200);
    })
    .catch((err) => {
      errorResponse(req, res, err.message, 400);
    });
};

module.exports = { listAllUsers };
