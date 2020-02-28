const pick = require('lodash/pick');
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

const login = ({ user }, res) => {
  console.log(user.generateToken());
  const token = user.generateToken();
  return res.json({ data: { token, user: pick(user, ['fullName', 'email', 'password']) } });
};

module.exports = { createUser, login, check };
