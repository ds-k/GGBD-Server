const router = require("express").Router();

const { get } = require("../controllers/hospital");

router.get("/:region", get); // * 병원 정보

module.exports = router;
