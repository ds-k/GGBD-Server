/* eslint-disable camelcase */
const { departments_replies } = require("../../models");
const { users } = require("../../models");
const { departments } = require("../../models");

module.exports = async (req, res) => {
  const { departmentId } = req.params;

  try {
    const data = await departments.findAll({
      where: {
        id: departmentId,
      },
      attributes: ["id", "name", "description"],
      include: {
        model: departments_replies,
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
      order: [[departments_replies, "id", "DESC"]],
    });

    res.status(200).json(...data);
  } catch (e) {
    res.status(501).json({ message: e.message });
  }
};
