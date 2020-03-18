const router = require('express').Router();
const { checkIfAuthenticated } = require('../shared/auth');
const ctrl = require('./gui.controller');


router
  .get('/', checkIfAuthenticated, (req, res) => {
    res.render('pages/index', { user: req.user });
  })
  .get('/events', checkIfAuthenticated, (req, res) => {
    res.render('pages/events', { user: req.user });
  })
  .get('/login', (req, res) => {
    res.render('pages/login');
  });
module.exports = router;
