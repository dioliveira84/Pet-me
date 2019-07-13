
const passport = require('passport');

module.exports.userLogin = (req, res,next) => {

  passport.authenticate('local', {
    successRedirect: '/regulamento',
    failureRedirect: '/login',
    failureFlash: true
  })(req, res, next);
};
