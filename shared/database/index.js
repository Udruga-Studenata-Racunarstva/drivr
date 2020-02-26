const Sequelize = require('sequelize');
const invoke = require('lodash/invoke');
const Example = require('../../example/example.model');
require('dotenv').config();

const dbConfig = {
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
  dialect: process.env.DATABASE_ADAPTER || 'postgres',
};

const sequelize = new Sequelize({ ...dbConfig });

function defineModel(Model, connection = sequelize) {
  const { DataTypes } = connection.Sequelize;
  const fields = invoke(Model, 'fields', DataTypes, connection) || {};
  const options = invoke(Model, 'options') || {};
  Object.assign(options, { sequelize: connection });
  return Model.init(fields, options);
}

const models = {
  Example: defineModel(Example),
};


const db = {
  Sequelize,
  sequelize,
  ...models,
};

module.exports = db;
