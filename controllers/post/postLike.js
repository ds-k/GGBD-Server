/* eslint-disable no-useless-escape */
/* eslint-disable camelcase */
const jwt = require("jsonwebtoken");
const { likes } = require("../../models");
const { users } = require("../../models");

module.exports = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];

    await jwt.verify(token, process.env.ACCESS_SECRET, async (_, decode) => {
      const info = await users.findOne({ where: { id: decode.id } });
      const { users_id, posts_id } = req.body;

      if (info) {
        await likes.create({
          users_id,
          posts_id,
        });

        res.status(201).json({ posts_id });
      }
    });
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
