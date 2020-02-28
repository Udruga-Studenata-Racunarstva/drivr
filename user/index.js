const router = require('express').Router();
const ctrl = require('./user.controller');
const { authenticate, checkIfAuthenticated } = require('../shared/auth');


router
  .post('/register', ctrl.createUser)
  .post('/login', authenticate('local'), ctrl.login)
  .delete('/logout', (req, res) => {
    req.logOut();
    res.json('Logged out successfully');
  })
  .get('/check', checkIfAuthenticated, ctrl.check);

module.exports = router;
