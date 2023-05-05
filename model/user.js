const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  email: { type: String, required: "email is required!" },
  password: { type: String, required: "password is required!" },
});

mongoose.model("User", User);
