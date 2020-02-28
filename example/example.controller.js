const { Example } = require('../shared/database');
const logger = require('../shared/logger');

function getCurrentDate(req, res) {
  Example.create({ description: 'Sample text' })
    .then((data) => { res.json(data); })
    .catch((err) => logger.error(err));
}

module.exports = {
  getCurrentDate,
};
