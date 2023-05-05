const mongoose = require("mongoose");
const User = mongoose.model("User");
const { createToken } = require("../helpers/auth");
const { errorResponse, successResponse } = require("../helpers");

const logIn = (req, res, next) => {
  const { email, password } = req.body;
  return User.findOne({ email }).then(async (existingUser) => {
    if (existingUser) {
      if (existingUser.password == password) {
        const token = createToken(existingUser);
        successResponse(
          req,
          res,
          {
            email: existingUser.email,
            id: existingUser._id,
            token,
          },
          200
        );
      } else {
        errorResponse(req, res, "Invalid Credentials", 401);
      }
    } else {
      errorResponse(req, res, "User Not Found", 401);
    }
  });
};

module.exports = { logIn };
