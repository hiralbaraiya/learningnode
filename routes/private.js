const express = require("express");
const { listUsers } = require("../controller/users");
const router = express.Router();

router.get("/listUsers", listUsers);

module.exports = router;
