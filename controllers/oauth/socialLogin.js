const axios = require("axios");
const jwt = require("jsonwebtoken");
const { users } = require("../../models");
const { likes } = require("../../models");
const { scraps } = require("../../models");

module.exports = async (req, res) => {
  try {
    const socialAccessToken = req.body.tokenData.data.access_token;
    const { state } = req.body;
    const getUserInfoUrl =
      state === "kakao"
        ? "https://kapi.kakao.com/v2/user/me"
        : `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${socialAccessToken}`;

    const userInfo = await axios.get(getUserInfoUrl, {
      headers: {
        Authorization: `Bearer ${socialAccessToken}`,
      },
    });

    let userInfoValue = {};

    if (state === "kakao") {
      userInfoValue = {
        ...userInfoValue,
        nickname: userInfo.data.properties.nickname,
        img: userInfo.data.properties.profile_image ?? "guest",
        loginType: "kakao",
        description: "한줄 소개를 적어주세요.",
      };
    } else {
      userInfoValue = {
        nickname: userInfo.data.given_name,
        img: userInfo.data.picture ?? "guest",
        loginType: "google",
        description: "한줄 소개를 적어주세요.",
      };
    }

    await users.findOrCreate({
      where: { social_id: userInfo.data.id },
      defaults: userInfoValue,
      include: [
        {
          model: likes,
          required: false,
          attributes: ["posts_id"],
        },
        {
          model: scraps,
          required: false,
          attributes: ["posts_id"],
        },
      ],
    });

    const userData = await users.findOne({
      where: { social_id: userInfo.data.id },
      include: [
        {
          model: likes,
          required: false,
          attributes: ["posts_id"],
        },
        {
          model: scraps,
          required: false,
          attributes: ["posts_id"],
        },
      ],
    });

    const payload = userData.get();

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

    res.status(200).json({ accessToken, ...payload });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};
