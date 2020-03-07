const router = require('express').Router();
const ctrl = require('./user.controller');
const { authenticate } = require('../shared/auth');


router
  .post('/register', ctrl.createUser)
  .post('/login', authenticate('local'), ctrl.login)
  .delete('/logout', (req, res) => {
    req.logOut();
    res.json('Logged out successfully');
  })
  .use(authenticate('jwt'))
  .get('/check', ctrl.check)
  .get('/', ctrl.getAll);


module.exports = router;
