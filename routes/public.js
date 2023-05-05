const express = require("express");
const { registerUser } = require("../controller/register");
const Validator = require("../middlewares/validator");
const {loginUser}=require("../controller/login")

const router = express.Router();

router.post("/signup", Validator("signup"), registerUser);
router.post("/login", loginUser);

module.exports = router;
