const express = require('express');
const passport = require('passport');
const session = require('express-session');
const flash = require('express-flash');
const methodOverride = require('method-override');
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
app.use(flash());
app.use(methodOverride('_method'));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');

app.use('/api', requestLogger, router);
app.use('/', client);

// Handle non-existing routes.
app.use(express.static('public'));
app.use((req, res) => res.status(404).end());

module.exports = app;
