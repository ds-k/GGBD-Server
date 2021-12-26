const { hospitals } = require("../../models");

module.exports = async (req, res) => {
  try {
    const { region } = req.params;
    if (region === "전체") {
      const getData = await hospitals.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      const data = getData.map((el) => el.get({ plain: true }));
      res.status(200).json(data);
    } else {
      const getData = await hospitals.findAll({
        where: { region: region.replace("-", " ") },
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      const data = getData.map((el) => el.get({ plain: true }));
      res.status(200).json(data);
    }
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
