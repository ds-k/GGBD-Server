const router = require("express").Router();
const { post, like, scrap } = require("../controllers/record");

router.get("/post", post); // * 작선한 글
router.get("/like", like); // * 응원한 글
router.get("/scrap", scrap); // * 스크랩한 글

module.exports = router;
