/* eslint-disable */
"use strict";

const fakeReply = require("../fakeData/fakeReply");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "departments_replies",
      fakeReply(300, "departments_id", 42)
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("departments_replies", null, {});
  },
};
