/* eslint-disable camelcase */
const { posts } = require("../../models");
const { users } = require("../../models");
const { likes } = require("../../models");
const { scraps } = require("../../models");
const { departments } = require("../../models");
const { posts_replies } = require("../../models");

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
      {
        model: posts_replies,
        required: false,
        where: {
          is_blocked: false,
        },
        include: {
          model: users,
          required: false,
          attributes: ["id", "nickname", "img"],
        },
      },
    ],
    order: [[posts_replies, "id", "DESC"]],
  });
  const revise = (data) => {
    return {
      ...data.get({ plain: true }),
      user: data.user.nickname,
      likes: data.likes.length,
      scraps: data.scraps.length,
    };
  };

  res.status(200).json(revise(postData));
};
