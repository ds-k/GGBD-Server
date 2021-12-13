const router = require("express").Router();

const { get } = require("../controllers/photo");

router.get("/:weather", get); // * 사진 정보

module.exports = router;
