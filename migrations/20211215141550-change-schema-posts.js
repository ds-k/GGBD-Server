/* eslint-disable */
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("posts", "departments_id", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.dropTable("posts_departments");
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("posts", "departments_id");
    await queryInterface.createTable("posts_departments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      posts_id: {
        type: Sequelize.INTEGER,
      },
      departments_id: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
};
