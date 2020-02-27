const { User } = require('../shared/database');

const createUser = (req, res) => {
  const {
    email, password, firstName, lastName,
  } = req.body;

  User.create({
    email,
    password,
    firstName,
    lastName,
  }).then((data) => res.json(data)).catch((err) => res.json(err));
};

const check = (req, res) => {
  res.json('We are in');
};

const login = (req, res) => {
  const { email, password } = req.body;
  User.findOne({
    where: {
      email,
    },
  }).then(async (user) => {
    if (await user.authenticate(password)) {
      res.json('Successfully logged in');
    }
  }).catch((err) => res.json(err));
};

module.exports = { createUser, login, check };
