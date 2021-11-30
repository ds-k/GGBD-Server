const express = require("express");
const main = require("./main");
const user = require("./user");
const post = require("./post");
const department = require("./department");
const contact = require("./contact");

const router = express.Router();

router.use("/", main);
router.use("/user", user);
router.use("/post", post);
router.use("/department", department);
router.use("/contact", contact);

module.exports = router;
