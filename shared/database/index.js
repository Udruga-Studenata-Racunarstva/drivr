const Sequelize = require('sequelize');


const dbConfig = {
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
  adapter: process.env.DATABASE_ADAPTER,
};

const sequelize = new Sequelize({ dbConfig });

module.exports = sequelize;
