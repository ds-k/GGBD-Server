const { posts } = require("../../models");
const { users } = require("../../models");
const { likes } = require("../../models");
const { scraps } = require("../../models");
const { departments } = require("../../models");

module.exports = async (req, res) => {
  const { slug } = req.params;
  const postData = await posts.findOne({
    where: { slug },
    include: [
      {
        model: departments,
        attributes: ["id", "name"],
      },
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
};
