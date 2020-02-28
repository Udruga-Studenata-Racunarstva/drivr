const { promisify } = require('util');
const app = require('./app');
const logger = require('./shared/logger');

const runApp = promisify(app.listen.bind(app));
runApp(process.env.PORT)
  .then(() => logger.info(`Server running on port: ${process.env.PORT}`));
