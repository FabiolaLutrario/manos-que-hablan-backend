require('dotenv').config({ path: "../.env" })
const { Sequelize } = require("sequelize");

const { DB_NAME, DB_HOST, DB_USER, DB_PASSWORD } = process.env

const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
  logging: false,
});

module.exports = db;