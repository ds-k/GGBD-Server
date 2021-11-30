const router = require("express").Router();

const { get, detail } = require("../controllers/department");

router.get("/", get); // * 진료과 정보 가져오기
router.get("/:id", detail); // * 진료과 정보 가져오기

module.exports = router;
