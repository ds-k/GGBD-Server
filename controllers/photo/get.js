const jwt = require("jsonwebtoken");
const { photos } = require("../../models");
const { users } = require("../../models");

module.exports = async (req, res) => {
  try {
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];

    await jwt.verify(token, process.env.ACCESS_SECRET, async (_, decode) => {
      const info = await users.findOne({ where: { id: decode.id } });

      if (info) {
        const { weather } = req.params;
        const { id } = req.query;

        const idNum = id ?? 1;

        const randomInt = Number(idNum) + Math.floor(Math.random() * 4) + 1;
        let randomId = randomInt % 5 === 0 ? 5 : randomInt % 5;

        if (weather === "구름") {
          randomId += 5;
        } else if (weather === "비") {
          randomId += 10;
        }

        const getData = await photos.findOne({
          where: {
            weather,
            id: randomId,
          },
          attributes: ["id", "img"],
        });
        const data = getData;
        res.status(200).json(data);
      }
    });
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
