/* eslint-disable */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class scraps extends Model {
    static associate(models) {
      scraps.belongsTo(models.posts, {
        foreignKey: "posts_id",
      });
      scraps.belongsTo(models.users, {
        foreignKey: "users_id",
      });
    }
  }
  scraps.init(
    {
      users_id: DataTypes.INTEGER,
      posts_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "scraps",
    }
  );
  return scraps;
};
