const { posts } = require("../../models");
const { users } = require("../../models");
const { likes } = require("../../models");
const { scraps } = require("../../models");

module.exports = async (req, res) => {
  const { order } = req.params;

  const options = {
    offset: 0,
    limit: 4,
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
    attributes: {
      exclude: ["body"],
    },
    // group: ["posts.id"],
    // attributes: [
    //   "*",
    //   sequelize.fn("COUNT", sequelize.col("likes.id")),
    //   sequelize.fn("COUNT", sequelize.col("scraps.id")),
    // ],
  };
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

  try {
    if (order === "created-at") {
      const data = await posts.findAll({
        ...options,
        where: {
          public: true,
        },
        order: [["createdAt", "DESC"]],
      });
      res.status(200).json(revise(data));
    } else if (order === "likes") {
      const data = await posts.findAll({
        ...options,
        where: {
          public: true,
        },
      });
      const sortData = revise(data).sort((a, b) => a.likes - b.likes);
      res.status(200).json(sortData);
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
