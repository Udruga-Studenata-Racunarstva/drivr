
const express = require('express');
require('dotenv').config();
const logger = require('./shared/logger');
const router = require('./router');


function requestLogger(req, res, next) {
  logger.info({ req });
  next();
}

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', requestLogger, router);

// Handle non-existing routes.
app.use((req, res) => res.status(404).end());

module.exports = app;
