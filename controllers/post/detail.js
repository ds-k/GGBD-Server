const { posts } = require("../../models");

module.exports = async (req, res) => {
  const { slug } = req.params;
  const postData = await posts.findOne({ where: { slug } });

  res.status(200).json(postData);
};
