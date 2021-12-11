const jwt = require("jsonwebtoken");
const { users } = require("../../models");

module.exports = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
    await jwt.verify(token, process.env.ACCESS_SECRET, async (_, decode) => {
      const info = await users.findOne({ where: { id: decode.id } });
      if (!info) {
        res.status(401).json({ message: "일치하는 유저가 없습니다." });
      }
    });
    return res.status(200).json({ message: "로그아웃 되었습니다." });
  } catch (e) {
    return res.status(501).json({ message: e.message });
  }
};
