const router = require('express').Router();
const ctrl = require('./example.controller');

router
  .get('/', ctrl.getCurrentDate)
  .post('/invite', ctrl.sendInvite);

module.exports = router;
