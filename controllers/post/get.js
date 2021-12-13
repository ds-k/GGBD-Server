/* eslint-disable camelcase */
const { posts } = require("../../models");
const { departments } = require("../../models");

module.exports = async (req, res) => {
  // const { department } = req.params;
  const { offset, limit, id } = req.query;

  try {
    if (id === "0") {
      const data = await posts.findAll({
        offset: Number(offset),
        limit: Number(limit),
      });
      res.status(200).send(data);
    } else {
      const data = await departments.findAll({
        offset: Number(offset),
        limit: Number(limit),
        where: {
          id,
        },
        attributes: [],
        include: {
          model: posts,
        },
      });
      const revised = data[0].posts;
      res.status(200).send(revised);
    }
  } catch (e) {
    res.status(501).json({ message: e.message });
  }
};
