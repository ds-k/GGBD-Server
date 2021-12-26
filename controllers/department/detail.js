const { departments } = require("../../models");

module.exports = async (req, res) => {
  try {
    const { name } = req.params;
    const getData = await departments.findOne({
      where: { name },
      attributes: ["id", "name", "description"],
    });
    const data = getData.get({ plain: true });
    res.status(200).json(data);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
