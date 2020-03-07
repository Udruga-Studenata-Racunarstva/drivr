const bunyan = require('bunyan');

const logger = bunyan.createLogger({
  name: 'usr-log',
  level: process.env.LOG_LEVEL,
  serializers: bunyan.stdSerializers,
});

module.exports = logger;
