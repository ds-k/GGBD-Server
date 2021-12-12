const router = require("express").Router();

const {
  get,
  detail,
  post,
  update,
  remove,
  reply,
} = require("../controllers/post");

router.get("/:department", get); // * 글 정보 전체 가져오기
router.get("/detail/:slug", detail); // * 글 정보 개별 가져오기
router.post("/", post); // * 글 정보 생성하기
router.patch("/", update); // * 글 수정하기
router.delete("/", remove); // * 글 삭제하기
router.get("/reply/:slug", reply); // * 글 댓글 불러오기

module.exports = router;
