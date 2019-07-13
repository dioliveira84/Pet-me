
const passport = require('passport');

module.exports.userLogin = (req, res,next) => {

  //passport.authenticate('local', {
   // successRedirect: '/',
    //failureRedirect: '/login',
    //failureFlash: true
  //})(req, res, next);

  res.status(200).json({user:user})
};
