/* eslint-disable */
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        nickname: "커피포트",
        img: "https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3852&q=80",
        description: "안녕하세요. 저는 커피포트입니다.",
        loginType: "google",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nickname: "아메리카노",
        img: "https://images.unsplash.com/photo-1527903789995-dc8ad2ad6de0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
        description: "안녕하세요. 저는 아메리카노입니다.",
        loginType: "google",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nickname: "시계줄",
        img: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2667&q=80",
        description: "안녕하세요. 저는 시계줄입니다.",
        loginType: "google",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nickname: "물병",
        img: "https://images.unsplash.com/photo-1493898719456-b0e84bba5fcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
        description: "안녕하세요. 저는 물병입니다.",
        loginType: "google",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nickname: "에센스",
        img: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
        description: "안녕하세요. 저는 에센스입니다.",
        loginType: "kakao",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nickname: "핸드크림",
        img: "https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80",
        description: "안녕하세요. 저는 핸드크립입니다.",
        loginType: "kakao",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nickname: "충전기",
        img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80",
        description: "안녕하세요. 저는 충전기입니다.",
        loginType: "kakao",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nickname: "물티슈",
        img: "https://images.unsplash.com/photo-1494200483035-db7bc6aa5739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
        description: "안녕하세요. 저는 물티슈입니다.",
        loginType: "kakao",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
