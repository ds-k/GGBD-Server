/* eslint-disable */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class departments_replies extends Model {
    static associate(models) {
      departments_replies.belongsTo(models.users, {
        foreignKey: "users_id",
      });
      departments_replies.belongsTo(models.departments, {
        foreignKey: "departments_id",
      });
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
