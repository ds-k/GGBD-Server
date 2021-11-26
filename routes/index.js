const express = require("express");
const main = require("./main");
const user = require("./user");

const router = express.Router();

router.use("/", main);
router.use("/user", user);

module.exports = router;
