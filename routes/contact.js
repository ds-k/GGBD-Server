const router = require("express").Router();

const { post } = require("../controllers/contact");

router.post("/", post); // * 문의하기

module.exports = router;
