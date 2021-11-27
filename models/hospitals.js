/* eslint-disable */
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class hospitals extends Model {
    static associate(models) {}
  }
  hospitals.init(
    {
      region: DataTypes.STRING,
      name: DataTypes.STRING,
      homepage: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "hospitals",
    }
  );
  return hospitals;
};
