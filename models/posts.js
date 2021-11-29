/* eslint-disable */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    static associate(models) {
      posts.belongsToMany(models.users, {
        through: "likes",
        foreignKey: "posts_id",
      });
      posts.belongsToMany(models.users, {
        through: "scraps",
        foreignKey: "posts_id",
      });
      posts.belongsToMany(models.departments, {
        through: "posts_departments",
        foreignKey: "posts_id",
      });
      posts.hasMany(models.posts_replies, {
        foreignKey: "posts_id",
      });
      posts.belongsTo(models.users, {
        foreignKey: "users_id",
      });
    }
  }
  posts.init(
    {
      users_id: DataTypes.INTEGER,
      weather: DataTypes.INTEGER,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      body: DataTypes.TEXT,
      thumbnail: DataTypes.STRING,
      likes: DataTypes.INTEGER,
      scraps: DataTypes.INTEGER,
      public: DataTypes.BOOLEAN,
      allow_reply: DataTypes.BOOLEAN,
      is_reported: DataTypes.INTEGER,
      is_blocked: DataTypes.BOOLEAN,
      link: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "posts",
    }
  );
  return posts;
};
