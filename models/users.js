/* eslint-disable */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    static associate(models) {
      users.hasMany(models.posts, {
        foreignKey: "users_id",
      });
      users.hasMany(models.posts_replies, {
        foreignKey: "users_id",
      });
      users.hasMany(models.departments_replies, {
        foreignKey: "users_id",
      });
      users.belongsToMany(models.posts, {
        through: "likes",
        foreignKey: "users_id",
      });
      users.belongsToMany(models.posts, {
        through: "scraps",
        foreignKey: "users_id",
      });
    }
  }
  users.init(
    {
      nickname: DataTypes.STRING,
      img: DataTypes.STRING,
      description: DataTypes.STRING,
      loginType: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return users;
};
