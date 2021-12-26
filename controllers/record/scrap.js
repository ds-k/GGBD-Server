/* eslint-disable no-useless-escape */
/* eslint-disable camelcase */
const { posts } = require("../../models");
const { users } = require("../../models");
const { likes } = require("../../models");
const { scraps } = require("../../models");

module.exports = async (req, res) => {
  const { id } = req.query;

  try {
    const revise = (data) => {
      return data.map((el) => {
        return {
          ...el.get({ plain: true }),
          user: el.user.nickname,
          likes: el.likes.length,
          scraps: el.scraps.length,
        };
      });
    };

    const data = await scraps.findAll({
      where: { users_id: id },
      include: {
        model: posts,
        where: {
          public: true,
        },
        include: [
          {
            model: users,
            attributes: ["nickname"],
          },
          {
            model: likes,
            attributes: ["id"],
          },
          {
            model: scraps,
            attributes: ["id"],
          },
        ],
      },
      order: [["createdAt", "DESC"]],
    });

    const result = data.map((el) => el.post);

    res.status(200).json(revise(result));
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
