/* eslint-disable */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class departments_replies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  departments_replies.init(
    {
      users_id: DataTypes.INTEGER,
      departments_id: DataTypes.INTEGER,
      reply: DataTypes.STRING,
      is_reported: DataTypes.INTEGER,
      is_blocked: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "departments_replies",
    }
  );
  return departments_replies;
};
