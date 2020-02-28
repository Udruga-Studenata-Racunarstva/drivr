const express = require('express');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const logger = require('./shared/logger');
const router = require('./router');

// if (process.env.NODE_ENV !== 'production') {
// eslint-disable-next-line global-require
require('dotenv').config();
// }


function requestLogger(req, res, next) {
  logger.info({ req });
  next();
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());


app.use('/api', requestLogger, router);

// Handle non-existing routes.
app.use((req, res) => res.status(404).end());

module.exports = app;
