const { departments } = require("../../models");

module.exports = async (_, res) => {
  try {
    const getData = await departments.findAll();
    const data = getData.map((el) => el.get({ plain: true }).name);
    res.status(200).json(data);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
