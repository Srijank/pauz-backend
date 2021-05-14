const express = require("express");
const router = express.Router();

const { signin, checkToken } = require("../controllers/auth");
const { addUser } = require("../controllers/user");

// creating a user
router.post("/", addUser);

module.exports = router;