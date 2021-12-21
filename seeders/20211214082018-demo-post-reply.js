/* eslint-disable */
"use strict";

const fakeReply = require("../fakeData/fakeReply");
const fakePair = require("../fakeData/fakePair");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "posts_replies",
      fakeReply(500, "posts_id", 500)
    );
    await queryInterface.bulkInsert(
      "likes",
      fakePair(500, 10, "posts_id", "users_id")
    );
    await queryInterface.bulkInsert(
      "scraps",
      fakePair(500, 10, "posts_id", "users_id")
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("posts_replies", null, {});
    await queryInterface.bulkDelete("likes", null, {});
    await queryInterface.bulkDelete("scraps", null, {});
  },
};
