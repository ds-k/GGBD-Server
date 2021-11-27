/* eslint-disable */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class posts_departments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
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
