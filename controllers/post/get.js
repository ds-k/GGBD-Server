/* eslint-disable camelcase */
const { posts } = require("../../models");
const { departments } = require("../../models");

module.exports = async (req, res) => {
  const { offset, limit, id, weather, by } = req.query;
  console.log(by);
  const weatherObj = {
    전체: "undefined",
    맑음: "sunny",
    구름: "cloudy",
    비: "rainy",
  };
  // const order = by !== undefined && by === "createdAt" ? "DESC" : "ASC";

  try {
    if (
      weather !== "undefined" &&
      weather !== "" &&
      weather !== "전체" &&
      id !== "0"
    ) {
      // 날씨에 따라 각 진료과 id별로 보내주는 쿼리
      const data = await departments.findAll({
        offset: Number(offset),
        limit: Number(limit),
        where: {
          id,
        },
        attributes: [],
        include: {
          model: posts,
          where: {
            weather: weatherObj[weather],
          },
        },
        // order: [`${by}`, `${order}`],
      });
      if (data.length !== 0) {
        const revised = data[0].posts;
        res.status(200).json(revised);
      } else {
        res.status(200).json(data);
      }
    } else if (id === "0") {
      // 날씨가 지정된 경우
      if (weather !== "undefined" && weather !== "" && weather !== "전체") {
        const data = await posts.findAll({
          offset: Number(offset),
          limit: Number(limit),
          where: {
            weather: weatherObj[weather],
          },
        });
        res.status(200).json(data);
      } else {
        // 날씨 관계없이 모든 글
        const data = await posts.findAll({
          offset: Number(offset),
          limit: Number(limit),
        });
        res.status(200).json(data);
      }
    } else {
      // 날씨 관계없이 진료과에 따라
      const data = await departments.findAll({
        offset: Number(offset),
        limit: Number(limit),
        where: {
          id,
        },
        attributes: [],
        include: {
          model: posts,
        },
      });

      if (data.length !== 0) {
        const revised = data[0].posts;
        res.status(200).json(revised);
      } else {
        res.status(200).json(data);
      }
    }
  } catch (e) {
    res.status(501).json({ message: e.message });
  }
};
