const router = require("express").Router();

const { get } = require("../controllers/hospital");

router.get("/", get); // * 병원 정보

module.exports = router;
