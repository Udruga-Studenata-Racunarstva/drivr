const { Example } = require('../shared/database');

function getCurrentDate(req, res) {
  Example.create({ description: 'Sample text' })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
}

module.exports = {
  getCurrentDate,
};
