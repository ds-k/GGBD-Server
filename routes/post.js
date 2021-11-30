const router = require("express").Router();

const { get, detail, post, update, remove } = require("../controllers/post");

router.get("/", get); // * 글 정보 가져오기
router.get("/:id", detail); // * 글 정보 가져오기
router.post("/", post); // * 글 정보 생성하기
router.patch("/", update); // * 글 수정하기
router.delete("/", remove); // * 글 삭제하기

module.exports = router;
