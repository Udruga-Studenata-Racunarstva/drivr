const router = require('express').Router();

router
  .get('/', (req, res) => {
    res.render('pages/index');
  })
  .get('/login', (req, res) => {
    res.render('pages/login');
  });

module.exports = router;
