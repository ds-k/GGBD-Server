/* eslint-disable */
"use strict";

const fakeReply = require("../fakeData/fakeReply");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "posts_replies",
      fakeReply(500, "posts_id", 500)
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("posts_replies", null, {});
  },
};
