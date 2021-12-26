/* eslint-disable */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class photos extends Model {
    static associate(models) {}
  }
  photos.init(
    {
      img: DataTypes.STRING,
      weather: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "photos",
    }
  );
  return photos;
};
