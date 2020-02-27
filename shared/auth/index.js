const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const { User } = require('../database');


passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => User.findOne({ where: { email } })
  .then((user) => user && user.authenticate(password))
  .then((user) => done(null, user || false))
  .error((err) => done(err, false))));


passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((id, done) => {
  done(null, id);
});

module.exports = {
  initialize(options = {}) {
    return passport.initialize(options);
  },
  authenticate(strategy, options = {}) {
    return passport.authenticate(strategy, { ...options, failWithError: true });
  },
};
