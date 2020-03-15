const express = require('express');
const passport = require('passport');
const logger = require('./shared/logger');
const router = require('./router');
const client = require('./gui');

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  require('dotenv').config();
}

function requestLogger(req, res, next) {
  logger.info({ req });
  next();
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

app.set('view engine', 'ejs');

app.use('/api', requestLogger, router);
app.use('/app', client);

// Handle non-existing routes.
app.use(express.static('public'));
app.use((req, res) => res.status(404).end());

module.exports = app;
