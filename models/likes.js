/* eslint-disable */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class likes extends Model {
    static associate(models) {
      likes.belongsTo(models.posts, {
        foreignKey: "posts_id",
      });
      likes.belongsTo(models.users, {
        foreignKey: "users_id",
      });
    }
  }
  likes.init(
    {
      users_id: DataTypes.INTEGER,
      posts_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "likes",
    }
  );
  return likes;
};
