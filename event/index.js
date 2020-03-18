const router = require('express').Router();
// const multer = require('multer');
const { authenticate } = require('../shared/auth');
const ctrl = require('./event.controller');

// const upload = multer({ dest: '../assets/image' });

router
  // Public routes
  .get('/', ctrl.getAllEvents)
  .get('/latest', ctrl.getLatestEvent)
  .get('/:id', ctrl.getEventById)
  // Protected routes
  .use(authenticate('jwt'))
  .post('/', ctrl.createEvent)
  .delete('/:id', ctrl.deleteEvent)
  .patch('/:id', ctrl.updateEvent);

module.exports = router;
