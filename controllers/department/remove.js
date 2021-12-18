/* eslint-disable camelcase */
const jwt = require("jsonwebtoken");
const { departments_replies } = require("../../models");
const { users } = require("../../models");

module.exports = async (req, res) => {
  const { id } = req.query;

  try {
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];

    await jwt.verify(token, process.env.ACCESS_SECRET, async (_, decode) => {
      const info = await users.findOne({ where: { id: decode.id } });

      if (info) {
        await departments_replies.destroy({
          where: { id },
        });

        res.status(200).json({ message: "ok" });
      }
    });
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
