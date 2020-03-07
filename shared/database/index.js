const Sequelize = require('sequelize');
const invoke = require('lodash/invoke');
const forEach = require('lodash/forEach');
const User = require('../../user/user.model');
const Event = require('../../event/event.model');
const Hooks = require('./hooks');
require('dotenv').config();

const dbConfig = {
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER,
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

function addHooks(model, models) {
  const hooks = invoke(model, 'hooks', Hooks, models);
  forEach(hooks, (it, type) => model.addHook(type, it));
}

const models = {
  User: defineModel(User),
  Event: defineModel(Event),
};

forEach(models, (model) => {
  invoke(model, 'associate', models);
  addHooks(model, Hooks, models);
});


const db = {
  Sequelize,
  sequelize,
  ...models,
};

module.exports = db;
