/* eslint-disable no-useless-escape */
/* eslint-disable camelcase */
const jwt = require("jsonwebtoken");
const { posts_replies } = require("../../models");
const { users } = require("../../models");

module.exports = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];

    await jwt.verify(token, process.env.ACCESS_SECRET, async (_, decode) => {
      const info = await users.findOne({ where: { id: decode.id } });

      if (info) {
        const { target_id, users_id, reply } = req.body;
        const result = await posts_replies.create({
          posts_id: target_id,
          users_id,
          reply,
          is_reported: 0,
          is_blocked: false,
        });

        if (result) {
          res.status(201).json({ message: "ok" });
        }
      }
    });
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
