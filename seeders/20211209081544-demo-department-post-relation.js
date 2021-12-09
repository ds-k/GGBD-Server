/* eslint-disable */
"use strict";

const fakePair = require("../fakeData/fakePair");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "posts_departments",
      fakePair(500, 42, "posts_id", "departments_id")
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("posts_departments", null, {});
  },
};
