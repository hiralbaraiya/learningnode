const { logIn } = require("../services/login");
const { errorResponse } = require("../helpers");

const loginUser = async (req, res, next) => {
  try {
    return logIn(req, res, next);
  } catch (err) {
    errorResponse(req, res, "Somthing went wrong", 500);
  }
};

module.exports = {
  loginUser,
};
