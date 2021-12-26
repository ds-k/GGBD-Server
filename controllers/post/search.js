const { Op } = require("sequelize");
const { posts } = require("../../models");
const { departments } = require("../../models");
const { users } = require("../../models");
const { likes } = require("../../models");
const { scraps } = require("../../models");

module.exports = async (req, res) => {
  try {
    const { query } = req.params;
    const { offset, limit } = req.query;

    const postData = await posts.findAll({
      where: {
        title: {
          [Op.like]: `%${query}%`,
        },
      },
      offset: Number(offset),
      limit: Number(limit),

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
        { model: departments, attributes: ["id", "name"] },
      ],
    });
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
    res.status(200).json(revise(postData));
  } catch (e) {
    res.send(e.message);
  }
};
