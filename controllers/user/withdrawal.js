const jwt = require("jsonwebtoken");
const { users } = require("../../models");

module.exports = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
    await jwt.verify(token, process.env.ACCESS_SECRET, async (_, decode) => {
      const info = await users.findOne({ where: { id: decode.id } });

      if (info) {
        await users.destroy({ where: { id: decode.id } });

        res.status(200).send({ message: "회원탈퇴 되었습니다." });
      }
    });
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
