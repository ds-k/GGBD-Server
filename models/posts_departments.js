/* eslint-disable */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class posts_departments extends Model {
    static associate(models) {}
  }
  posts_departments.init(
    {
      posts_id: DataTypes.INTEGER,
      departments_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "posts_departments",
    }
  );
  return posts_departments;
};
