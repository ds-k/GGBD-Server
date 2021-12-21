const router = require("express").Router();

const {
  get,
  detail,
  post,
  update,
  remove,
  reply,
  main,
  postLike,
  deleteLike,
  postScrap,
  deleteScrap,
  search,
} = require("../controllers/post");

router.get("/:department", get); // * 글 정보 전체 가져오기
router.get("/detail/:slug", detail); // * 글 정보 개별 가져오기
router.post("/post", post); // * 글 생성하기
router.patch("/", update); // * 글 수정하기
router.delete("/", remove); // * 글 삭제하기
router.get("/reply/:slug", reply); // * 글 댓글 불러오기
router.get("/main/:order", main);
router.post("/postLike", postLike); // * 응원하기
router.delete("/deleteLike", deleteLike); // * 응원 취소하기
router.post("/postScrap", postScrap); // * 스크랩하기
router.delete("/deleteScrap", deleteScrap); // * 스크랩 취소하기
router.get("/search/:q", search); // * 글 검색하기

module.exports = router;
