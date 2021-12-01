const { users } = require("../../models");

module.exports = async (req, res) => {
  const user = await users.create({
    nickname: "노트북",
    img: "https://images.unsplash.com/photo-1531265726475-52ad60219627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2691&q=80",
    description: "안녕하세요. 저는 노트북입니다.",
    loginType: "google",
  });
  res.json(user);
};
