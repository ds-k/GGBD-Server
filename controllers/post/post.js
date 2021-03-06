/* eslint-disable no-useless-escape */
/* eslint-disable camelcase */
const jwt = require("jsonwebtoken");
const { posts } = require("../../models");
const { users } = require("../../models");

module.exports = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];

    await jwt.verify(token, process.env.ACCESS_SECRET, async (_, decode) => {
      const info = await users.findOne({ where: { id: decode.id } });

      if (info) {
        const {
          id,
          weather,
          thumbnail,
          value,
          isActive,
          isPublic,
          departmentId,
          title,
          description,
        } = req.body;

        const result = await posts.create({
          users_id: id,
          departments_id: departmentId,
          weather,
          title,
          description,
          thumbnail,
          body: value,
          public: isPublic,
          allow_reply: isActive,
          is_reported: 0,
          is_blocked: false,
          slug: `${id} ${new Date()
            .toLocaleDateString()
            .replaceAll(". ", "")} ${title}`
            // eslint-disable-next-line no-useless-escape
            .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gim, "")
            .replace(/\s/g, "-"),
        });

        res.status(201).json({ message: "ok", slug: result.dataValues.slug });
      }
    });
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
