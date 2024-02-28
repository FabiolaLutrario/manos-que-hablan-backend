const { Sequelize } = require("sequelize");
const db = new Sequelize("manos-que-hablan", "postgres", null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});
module.exports = db;