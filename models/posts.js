/* eslint-disable */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    static associate(models) {
      posts.hasMany(models.likes, {
        foreignKey: "posts_id",
      });
      posts.hasMany(models.scraps, {
        foreignKey: "posts_id",
      });
      posts.hasMany(models.posts_replies, {
        foreignKey: "posts_id",
      });
      posts.belongsTo(models.departments, {
        foreignKey: "departments_id",
      });
      posts.belongsTo(models.users, {
        foreignKey: "users_id",
      });
    }
  }
  posts.init(
    {
      users_id: DataTypes.INTEGER,
      weather: DataTypes.STRING,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      body: DataTypes.TEXT,
      thumbnail: DataTypes.STRING,
      public: DataTypes.BOOLEAN,
      allow_reply: DataTypes.BOOLEAN,
      is_reported: DataTypes.INTEGER,
      is_blocked: DataTypes.BOOLEAN,
      slug: DataTypes.STRING,
      departments_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "posts",
    }
  );
  return posts;
};
