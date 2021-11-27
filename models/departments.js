/* eslint-disable */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class departments extends Model {
    static associate(models) {
      departments.hasMany(models.departments_replies, {
        foreignKey: "departments_id",
      });
      departments.belongsToMany(models.posts, {
        through: "posts_departments",
        foreignKey: "departments_id",
      });
    }
  }
  departments.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "departments",
    }
  );
  return departments;
};
