/* eslint-disable camelcase */
const jwt = require("jsonwebtoken");
const { scraps } = require("../../models");
const { users } = require("../../models");

module.exports = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];

    await jwt.verify(token, process.env.ACCESS_SECRET, async (_, decode) => {
      const info = await users.findOne({ where: { id: decode.id } });
      const { users_id, posts_id } = req.query;

      if (info) {
        await scraps.destroy({ where: { users_id, posts_id } });
        res.status(200).json({ posts_id: { posts_id } });
      }
    });
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
