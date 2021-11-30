const router = require("express").Router();

const { get } = require("../controllers/hospital");

router.get("/", get); // * 유저 정보
// router.patch("/", update); // *  유저 정보 수정
// router.post("/login", login); // * 유저 로그인
// router.delete("/logout", logout); // * 유저 로그아웃

module.exports = router;
