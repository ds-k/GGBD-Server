const axios = require("axios");
const jwt = require("jsonwebtoken");
const { users } = require("../../models");

module.exports = async (req, res) => {
  try {
    const kakaoAccessToken = req.body.tokenData.data.access_token;

    const userInfo = await axios.get("https://kapi.kakao.com/v2/user/me", {
      headers: {
        Authorization: `Bearer ${kakaoAccessToken}`,
      },
    });

    const [user] = await users.findOrCreate({
      where: { id: userInfo.data.id },
      defaults: {
        nickname: userInfo.data.properties.nickname,
        img: userInfo.data.properties.profile_image,
        loginType: "kakao",
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
