/* eslint-disable */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class posts_replies extends Model {
    static associate(models) {
      posts_replies.belongsTo(models.posts, {
        foreignKey: "posts_id",
      });
      posts_replies.belongsTo(models.users, {
        foreignKey: "users",
      });
    }
  }
  posts_replies.init(
    {
      users_id: DataTypes.INTEGER,
      posts_id: DataTypes.INTEGER,
      reply: DataTypes.STRING,
      is_reported: DataTypes.INTEGER,
      is_blocked: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "posts_replies",
    }
  );
  return posts_replies;
};
