const router = require('express').Router();
const event = require('./event');
const user = require('./user');

router.get('/', (req, res) => {
  res.send('Boy');
});
router.use('/user', user);
router.use('/event', event);

module.exports = router;
