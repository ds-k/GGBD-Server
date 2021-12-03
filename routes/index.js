const express = require("express");
const main = require("./main");
const user = require("./user");
const post = require("./post");
const department = require("./department");
const contact = require("./contact");
const hospital = require("./hospital");
const photo = require("./photo");

const router = express.Router();

router.use("/", main);
router.use("/user", user);
router.use("/post", post);
router.use("/department", department);
router.use("/contact", contact);
router.use("/hospital", hospital);
router.use("/photo", photo);

module.exports = router;
