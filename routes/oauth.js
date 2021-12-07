const router = require("express").Router();
const {
  kakaoAuth,
  googleAuth,
  kakaoLogin,
  googleLogin,
} = require("../controllers/oauth");

router.get("/kakao", kakaoAuth); // * 유저 카카오 인증
router.get("/google", googleAuth); // * 유저 구글 인증
router.post("/kakao/login", kakaoLogin); // * 카카오 로그인
router.post("/google/login", googleLogin); // * 구글 로그인

module.exports = router;
