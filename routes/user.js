const router = require("express").Router();
const {
  googleLogin,
  kakaoLogin,
  get,
  logout,
  update,
} = require("../controllers/user");

router.get("/", get); // * 유저 정보
router.patch("/", update); // *  유저 정보 수정
router.post("/login/kakao", kakaoLogin); // * 유저 카카오 로그인
router.post("/login/kakao", googleLogin); // * 유저 구글로그인
router.delete("/logout", logout); // * 유저 로그아웃

module.exports = router;
