const { listAllUsers } = require("../services/users");
const { errorResponse } = require("../helpers");

export const listUsers = async (req, res, next) => {
  try {
    return listAllUsers(req, res, next);
  } catch (err) {
    errorResponse(req, res, "Somthing went wrong", 500);
  }
};
