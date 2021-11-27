/* eslint-disable */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
    },
    {
      sequelize,
      modelName: "posts",
    }
  );
  return posts;
};
