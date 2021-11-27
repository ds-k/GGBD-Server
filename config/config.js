/* eslint-disable */
require("dotenv").config();

const env = process.env;

const development = {
  username: env.DEV_DB_USERNAME,
  password: env.DEV_DB_PASSWORD,
  database: env.DEV_DB_DBNAME,
  host: env.DEV_DB_HOST,
  dialect: "mysql",
};

const production = {
  username: env.PROD_DB_USERNAME,
  password: env.PROD_DB_PASSWORD,
  database: env.PROD_DB_DBNAME,
  host: env.PROD_DB_HOST,
  dialect: "mysql",
  port: env.PROD_DB_PORT,
};

module.exports = { development, production };
