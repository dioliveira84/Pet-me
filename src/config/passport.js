// const passport = require('passport');
// const LocalStrategy = require('passport-local');
// const user = require('../models/v1/userLogin');

// passport.use(
//   new LocalStrategy(
//     {
//       usernameField: 'user[email]',
//       passwordField: 'user[password]',
//     },
//     (email, password, done) => {
//       user
//         .findOne({ email })
//         .then((data) => {
//           if (!data || !user.validatePassword(password)) {
//             return done(null, false, { errors: { 'email or password': 'is invalid' } });
//           }

//           return done(null, user);
//         })
//         .catch(done);
//     },
//   ),
// );
