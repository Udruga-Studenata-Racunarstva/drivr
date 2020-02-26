const bunyan = require('bunyan');

const logger = bunyan.createLogger({
  name: 'usr-log',
  level: 'debug',
  serializers: bunyan.stdSerializers,
});

module.exports = logger;
