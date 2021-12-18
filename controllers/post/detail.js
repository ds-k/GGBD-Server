const { posts } = require("../../models");
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
    ],
  });

  res.status(200).json(postData);
};
