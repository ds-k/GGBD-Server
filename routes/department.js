const router = require("express").Router();

const { get, detail, reply } = require("../controllers/department");

router.get("/", get); // * 진료과 정보 전체 가져오기
router.get("/:name", detail); // * 진료과 정보 개별 가져오기
router.get("/reply/:name", reply); // * 진료과 댓글 가져오기

module.exports = router;
