const router = require('express').Router();
const example = require('./example');
const user = require('./user');

router.get('/', (req, res) => {
  res.send('Hello');
});

router.use('/example', example);
router.use('/user', user);

module.exports = router;
