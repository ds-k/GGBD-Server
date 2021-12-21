const { Op } = require("sequelize");
const { posts } = require("../../models");

module.exports = async (req, res) => {
  try {
    const { q } = req.params;
    const { offset, limit } = req.query;
    console.log(q, offset, limit);

    const postData = await posts.findAll({
      where: {
        title: {
          [Op.like]: `%${q}%`,
        },
      },
      offset: Number(offset),
      limit: Number(limit),
      attributes: ["id", "title"],
    });
    res.send(postData);
  } catch (e) {
    console.log(e);
    res.send(e.message);
  }
};
