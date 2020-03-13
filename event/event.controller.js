const fs = require('fs');
const path = require('path');
const { Event } = require('../shared/database');
const logger = require('../shared/logger');

const assetDir = `${process.cwd()}assets/images`;

const getAllEvents = (req, res) => {
  Event.findAll()
    .then((result) => res.json(result))
    .catch((err) => {
      logger.error(err);
      res.sendStatus(404);
    });
};
const getLatestEvent = (req, res) => {
  Event.findOne({
    order: [['createdAt', 'DESC']],
  }).then((result) => res.json(result))
    .catch((err) => {
      logger.error(err);
      res.sendStatus(404);
    });
};
const getEventById = (req, res) => {
  Event.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((result) => res.json(result))
    .catch((err) => {
      logger.error(err);
      res.sendStatus(404);
    });
};
const createEvent = (req, res) => {
  const {
    type, description, eventDate, imgUrl, locationId,
  } = req.body;
  try {
    if (fs.existsSync(path.join(assetDir, imgUrl))) {
      res.status(401).send('Image already exists');
    }
  } catch (error) {
    logger.error(error);
    res.send('Image upload failed');
  }

  Event.create({
    type,
    description,
    eventDate,
    locationId,
  });
};
const deleteEvent = (req, res) => {

};
const updateEvent = (req, res) => {

};


module.exports = {
  getAllEvents,
  getLatestEvent,
  getEventById,
  createEvent,
  deleteEvent,
  updateEvent,
};
