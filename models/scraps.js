/* eslint-disable */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class scraps extends Model {
    static associate(models) {}
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
