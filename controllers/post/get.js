/* eslint-disable camelcase */
const { posts } = require("../../models");
const { users } = require("../../models");
const { likes } = require("../../models");
const { scraps } = require("../../models");

module.exports = async (req, res) => {
  const { offset, limit, id, weather, by } = req.query;

  const options = {
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
            where: {
              public: true,
            },
            order: [["createdAt", "DESC"]],
            offset: Number(offset),
            limit: Number(limit),
          });
          res.status(200).json(revise(data));
        } else {
          const data = await posts.findAll({
            ...options,
            where: {
              public: true,
            },
          });
          const sortData = revise(data).sort((a, b) => a.likes - b.likes);

          res.status(200).json(sortData.slice(offset, limit));
        }
      } else if (weather !== "전체") {
        if (by === "createdAt") {
          const data = await posts.findAll({
            ...options,
            where: {
              weather,
              public: true,
            },
            offset: Number(offset),
            limit: Number(limit),
            order: [["createdAt", "DESC"]],
          });
          res.status(200).json(revise(data));
        } else {
          const data = await posts.findAll({
            ...options,
            where: {
              weather,
              public: true,
            },
          });
          const sortData = revise(data).sort((a, b) => a.likes - b.likes);
          res.status(200).json(sortData.slice(offset, limit));
        }
      }
    } else if (id !== "0") {
      if (weather === "전체") {
        if (by === "createdAt") {
          const data = await posts.findAll({
            ...options,
            where: {
              departments_id: id,
              public: true,
            },
            offset: Number(offset),
            limit: Number(limit),
            order: [["createdAt", "DESC"]],
          });
          res.status(200).json(revise(data));
        } else {
          const data = await posts.findAll({
            ...options,
            where: {
              departments_id: id,
              public: true,
            },
          });
          const sortData = revise(data).sort((a, b) => a.likes - b.likes);
          res.status(200).json(sortData.slice(offset, limit));
        }
      } else if (weather !== "전체") {
        if (by === "createdAt") {
          const data = await posts.findAll({
            ...options,
            where: {
              weather,
              departments_id: id,
              public: true,
            },
            offset: Number(offset),
            limit: Number(limit),
            order: [["createdAt", "DESC"]],
          });
          res.status(200).json(revise(data));
        } else {
          const data = await posts.findAll({
            ...options,
            where: {
              weather,
              departments_id: id,
              public: true,
            },
          });
          const sortData = revise(data).sort((a, b) => a.likes - b.likes);
          res.status(200).json(sortData.slice(offset, limit));
        }
      }
    }
  } catch (e) {
    res.status(501).json({ message: e.message });
  }
};
