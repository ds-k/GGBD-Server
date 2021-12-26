/* eslint-disable no-useless-escape */
/* eslint-disable camelcase */
const jwt = require("jsonwebtoken");
const { posts } = require("../../models");
const { users } = require("../../models");

module.exports = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
    const { id } = req.query;

    await jwt.verify(token, process.env.ACCESS_SECRET, async (_, decode) => {
      const info = await users.findOne({ where: { id: decode.id } });

      if (info) {
        await posts.update(req.body, { where: { id } });

        if (req.body.slug) {
          res.status(200).json({ message: "ok", slug: req.body.slug });
        } else {
          res.status(200).json({ message: "ok" });
        }
      }
    });
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
