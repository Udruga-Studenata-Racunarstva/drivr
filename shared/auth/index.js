const LocalStrategy = require('passport-local').Strategy;
const { ExtractJwt, Strategy } = require('passport-jwt');
const passport = require('passport');
const { User } = require('../database');


passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => User.findOne({ where: { email } })
  .then((user) => user && user.authenticate(password))
  .then((user) => done(null, user || false))
  .error((err) => done(err, false))));

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'),
  secretOrKey: process.env.AUTH_JWT_SECRET || 'secret',
  issuer: process.env.AUTH_JWT_ISSUER || 'usr',
  audience: 'scope:setup',
};

passport.use(new Strategy({ ...jwtOptions }, (payload, done) => {
  User.findOne({ where: { id: payload.id }, raw: true })
    .then((user) => done(null, user || false))
    .error((err) => done(err, false));
}));

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = {
  initialize() {
    return passport.initialize({ usernameField: 'email' });
  },
  authenticate(strategy) {
    return passport.authenticate(strategy, { usernameField: 'email', failWithError: true });
  },
  checkIfAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    return res.json('Nope');
  },
};
