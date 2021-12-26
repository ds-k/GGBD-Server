const router = require("express").Router();
const { kakaoAuth, googleAuth, socialLogin } = require("../controllers/oauth");

router.get("/kakao", kakaoAuth); // * 유저 카카오 인증
router.get("/google", googleAuth); // * 유저 구글 인증
router.post("/login", socialLogin); // * 소셜 로그인

module.exports = router;
