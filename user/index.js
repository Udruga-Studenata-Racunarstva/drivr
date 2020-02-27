const router = require('express').Router();
const ctrl = require('./user.controller');
const { authenticate } = require('../shared/auth');


router
  .post('/register', ctrl.createUser)
  .post('/login', authenticate('local'), ctrl.login);

module.exports = router;
