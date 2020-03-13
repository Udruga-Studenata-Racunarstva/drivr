const { Example } = require('../shared/database');
const logger = require('../shared/logger');
const send = require('../shared/mail');

function getCurrentDate(req, res) {
  Example.create({ description: 'Sample text' })
    .then((data) => { res.json(data); })
    .catch((err) => logger.error(err));
}

function sendInvite(req, res) {
  send({ data: req.body }, 'EventInvite');
}

module.exports = {
  getCurrentDate, sendInvite,
};
