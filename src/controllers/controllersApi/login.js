
const passport = require('passport');

module.exports.userLogin = (req, res,next) => {

  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/help',
    failureFlash: true
  })(req, res, next);
};
