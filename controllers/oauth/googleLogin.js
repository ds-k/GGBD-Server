const axios = require("axios");
const jwt = require("jsonwebtoken");
const { users } = require("../../models");

module.exports = async (req, res) => {
  try {
    const googleAccessToken = req.body.tokenData.data.access_token;

    const userInfo = await axios.get(
      `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${googleAccessToken}`,
      {
        headers: {
          Authorization: `Bearer ${googleAccessToken}`,
        },
      }
    );

    const [user] = await users.findOrCreate({
      where: { social_id: userInfo.data.id },
      defaults: {
        nickname: userInfo.data.given_name,
        img: userInfo.data.picture,
        loginType: "google",
        description: "한줄 소개를 적어주세요.",
      },
    });

    const payload = user.get();

    const accessToken = await jwt.sign(payload, process.env.ACCESS_SECRET, {
      expiresIn: "12h",
    });
    const refreshToken = await jwt.sign(payload, process.env.REFRESH_SECRET, {
      expiresIn: "50d",
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "none",
    });
    res.header("accessToken", accessToken).status(200).json(payload);
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};
