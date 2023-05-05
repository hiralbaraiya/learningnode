const { signUp } = require("../services/register");
const { errorResponse } = require("../helpers");

const registerUser = async (req, res, next) => {
  try {
    return signUp(req, res, next);
  } catch (err) {
    errorResponse(req, res, "Somthing went wrong", 500);
  }
};

module.exports = {
  registerUser,
};
