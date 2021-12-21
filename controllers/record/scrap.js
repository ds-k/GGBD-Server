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

    const data = await posts.findAll({
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
          where: { users_id: id },
        },
      ],
      where: {
        public: true,
      },
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json(revise(data));
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
