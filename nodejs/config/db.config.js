const Sequelize = require("sequelize");
require("dotenv").config();

const { HOST,USER,PASSWORD,DB,DB_PORT} = process.env;
const sequelize = new Sequelize(DB,USER, PASSWORD, {
  host: HOST,
  port: DB_PORT,
  dialect: "postgres",
  password:PASSWORD

});

module.exports = sequelize;