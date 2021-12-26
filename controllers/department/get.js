const { departments } = require("../../models");

module.exports = async (_, res) => {
  try {
    const getData = await departments.findAll({
      attributes: ["id", "name"],
      order: [["name", "ASC"]],
    });
    const data = getData.map((el) => el.get({ plain: true }));
    res.status(200).json(data);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
