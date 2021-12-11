const { hospitals } = require("../../models");

module.exports = async (_, res) => {
  try {
    const getData = await hospitals.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    const data = getData.map((el) => el.get({ plain: true }));
    res.status(200).json(data);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
