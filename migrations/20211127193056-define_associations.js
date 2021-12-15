/* eslint-disable */
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("posts", {
      name: "users-posts",
      fields: ["users_id"],
      type: "foreign key",
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
    await queryInterface.addConstraint("posts", {
      name: "departments-posts",
      fields: ["departments_id"],
      type: "foreign key",
      references: {
        table: "departments",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    await queryInterface.addConstraint("posts_replies", {
      name: "users-posts_replies",
      fields: ["users_id"],
      type: "foreign key",
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    await queryInterface.addConstraint("posts_replies", {
      name: "posts-posts_replies",
      fields: ["posts_id"],
      type: "foreign key",
      references: {
        table: "posts",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    await queryInterface.addConstraint("departments_replies", {
      name: "users-departments_replies",
      fields: ["users_id"],
      type: "foreign key",
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    await queryInterface.addConstraint("departments_replies", {
      name: "departments-departments_replies",
      fields: ["departments_id"],
      type: "foreign key",
      references: {
        table: "departments",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    await queryInterface.addConstraint("likes", {
      name: "users-likes",
      fields: ["users_id"],
      type: "foreign key",
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    await queryInterface.addConstraint("likes", {
      name: "posts-likes",
      fields: ["posts_id"],
      type: "foreign key",
      references: {
        table: "posts",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    await queryInterface.addConstraint("scraps", {
      name: "users-scraps",
      fields: ["users_id"],
      type: "foreign key",
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    await queryInterface.addConstraint("scraps", {
      name: "posts-scraps",
      fields: ["posts_id"],
      type: "foreign key",
      references: {
        table: "posts",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("posts", "departments-posts");
    await queryInterface.removeConstraint("posts", "users-posts");
    await queryInterface.removeConstraint(
      "posts_replies",
      "users-posts_replies"
    );
    await queryInterface.removeConstraint(
      "posts_replies",
      "posts-posts_replies"
    );
    await queryInterface.removeConstraint(
      "departments_replies",
      "users-departments_replies"
    );
    await queryInterface.removeConstraint(
      "departments_replies",
      "departments-departments_replies"
    );
    await queryInterface.removeConstraint("likes", "users-likes");
    await queryInterface.removeConstraint("likes", "posts-likes");
    await queryInterface.removeConstraint("scraps", "users-scraps");
    await queryInterface.removeConstraint("scraps", "posts-scraps");
  },
};
