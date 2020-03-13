const router = require('express').Router();
const { authenticate } = require('../shared/auth');
const ctrl = require('./event.controller');

// router
//   // Public routes
//   .get('/', ctrl.getAllEvents)
//   .get('/next', ctrl.getNextEvent)
//   .get('/latest', ctrl.getLatestEvent)
//   .get('/:id', ctrl.getEventById)
//   // Protected routes
//   .use(authenticate('jwt'))
//   .post('/', ctrl.createEvent)
//   .delete('/:id', ctrl.deleteEvent)
//   .patch('/:id', ctrl.updateEvent);

module.exports = router;
