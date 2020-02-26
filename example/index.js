const router = require('express').Router();
const ctrl = require('./example.controller');

router
  .get('/', ctrl.getCurrentDate);

module.exports = router;
