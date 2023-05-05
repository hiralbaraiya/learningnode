const mongoose = require("mongoose");
const User = mongoose.model("User");
const { createToken } = require("../helpers/auth");
const { errorResponse, successResponse } = require("../helpers");

const signUp = (req, res, next) => {
  const { email, password } = req.body;
  const user = new User({ email, password });
  return User.findOne({ email })
    .then(async (existingUser) => {
      if (existingUser) {
        errorResponse(req, res, "Email already exist", 400);
      } else {
        user
          .save()
          .then((doc) => {
            const token = createToken(doc);
            successResponse(
              req,
              res,
              {
                email: doc.email,
                token,
                id: doc._id,
              },
              200
            );
          })
          .catch((err) => {
            errorResponse(req, res, err.message, 400);
          });
      }
    })
    .catch((err) => {
      errorResponse(req, res, err.message, 400);
    });
};

module.exports = { signUp };
