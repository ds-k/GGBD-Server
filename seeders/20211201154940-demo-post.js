/* eslint-disable */
"use strict";

const fakePost = require("../fakeData/fakePost");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("posts", fakePost(500));
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("posts", null, {});
  },
};
