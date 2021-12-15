const router = require("express").Router();

const { get, detail, reply, postReply } = require("../controllers/department");

router.get("/", get); // * 진료과 정보 전체 가져오기
router.get("/:name", detail); // * 진료과 정보 개별 가져오기
router.get("/reply/:departmentId", reply); // * 진료과 댓글 가져오기
router.post("/reply", postReply); // * 진료과 댓글 작성하기

module.exports = router;
