/* eslint-disable camelcase */
const { posts } = require("../../models");
const { users } = require("../../models");
const { likes } = require("../../models");
const { scraps } = require("../../models");

module.exports = async (req, res) => {
  const { offset, limit, id, weather, by } = req.query;

  // 전체거나 / id가 있거나,
  // weather가 전체거나, / weather가 있거나,
  // by가 "createdAt"이거나, / "likes"이거나

  // const order = by !== undefined && by === "createdAt" ? "DESC" : "ASC";

  const options = {
    offset: Number(offset),
    limit: Number(limit),
    include: [
      {
        model: users,
        attributes: ["nickname"],
      },
      {
        model: likes,
        attributes: ["id"],
      },
      {
        model: scraps,
        attributes: ["id"],
      },
    ],
  };

  const revise = (data) => {
    return data.map((el) => {
      return {
        ...el.get({ plain: true }),
        user: el.user.nickname,
        likes: el.likes.length,
        scraps: el.scraps.length,
      };
    });
  };

  try {
    if (id === "0") {
      if (weather === "전체") {
        if (by === "createdAt") {
          const data = await posts.findAll({
            ...options,
            order: [["createdAt", "DESC"]],
          });
          res.status(200).json(revise(data));
        } else {
          const data = await posts.findAll({
            ...options,
          });
          const sortData = revise(data).sort((a, b) => a.likes - b.likes);
          res.status(200).json(sortData);
        }
      } else if (weather !== "전체") {
        if (by === "createdAt") {
          const data = await posts.findAll({
            ...options,
            where: {
              weather,
            },
            order: [["createdAt", "DESC"]],
          });
          res.status(200).json(revise(data));
        } else {
          const data = await posts.findAll({
            ...options,
            where: {
              weather,
            },
          });
          const sortData = revise(data).sort((a, b) => a.likes - b.likes);
          res.status(200).json(sortData);
        }
      }
    } else if (id !== "0") {
      if (weather === "전체") {
        if (by === "createdAt") {
          const data = await posts.findAll({
            ...options,
            where: {
              departments_id: id,
            },
            order: [["createdAt", "DESC"]],
          });
          res.status(200).json(revise(data));
        } else {
          const data = await posts.findAll({
            ...options,
            where: {
              departments_id: id,
            },
          });
          const sortData = revise(data).sort((a, b) => a.likes - b.likes);
          res.status(200).json(sortData);
        }
      } else if (weather !== "전체") {
        if (by === "createdAt") {
          const data = await posts.findAll({
            ...options,
            where: {
              weather,
              departments_id: id,
            },
            order: [["createdAt", "DESC"]],
          });
          res.status(200).json(revise(data));
        } else {
          const data = await posts.findAll({
            ...options,
            where: {
              weather,
              departments_id: id,
            },
          });
          const sortData = revise(data).sort((a, b) => a.likes - b.likes);
          res.status(200).json(sortData);
        }
      }
    }
  } catch (e) {
    res.status(501).json({ message: e.message });
  }
};
