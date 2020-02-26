const router = require('express').Router();
const example = require('./example');

router.get('/', (req, res) => {
  res.send('Hello');
});

router.use('/example', example);

module.exports = router;
