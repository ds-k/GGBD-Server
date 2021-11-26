const router = require("express").Router();

const { login } = require("../controllers/user");

router.get("/", (req, res) => {
  res.send("user router");
});

router.get("/login", login);

module.exports = router;
