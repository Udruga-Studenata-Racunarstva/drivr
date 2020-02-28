
const { hooks } = require('sequelize/lib/hooks');
const mapValues = require('lodash/mapValues');

const Hooks = mapValues(hooks, (_, key) => key);

// eslint-disable-next-line func-names
Hooks.withType = (hookType, hook) => function (...args) {
  return hook.call(this, hookType, ...args);
};

module.exports = Hooks;
