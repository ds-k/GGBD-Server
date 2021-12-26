const router = require("express").Router();
const { get, logout, update, withdrawal } = require("../controllers/user");

router.get("/", get); // * 유저 정보
router.patch("/", update); // *  유저 정보 수정
router.post("/logout", logout); // * 유저 로그아웃
router.delete("/", withdrawal); // * 유저 탈퇴

module.exports = router;
