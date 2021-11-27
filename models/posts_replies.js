/* eslint-disable */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class posts_replies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  posts_replies.init(
    {
      users_id: DataTypes.INTEGER,
      posts_id: DataTypes.INTEGER,
      reply: DataTypes.STRING,
      is_reported: DataTypes.INTEGER,
      is_blocked: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "posts_replies",
    }
  );
  return posts_replies;
};
