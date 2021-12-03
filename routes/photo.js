const router = require("express").Router();

const { get } = require("../controllers/photo");

router.get("/", get); // * 사진 정보

module.exports = router;
