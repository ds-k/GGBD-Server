/* eslint-disable */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class likes extends Model {
    static associate(models) {}
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
