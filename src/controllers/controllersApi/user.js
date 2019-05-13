const bcrypt = require('bcryptjs');
const passport = require('passport');
const userLogin = require('../../schemas/v1/userLogin');
const { forwardAuthenticated } = require('../../config/auth');

module.exports.createUser =  (req, res, next) => {
   

   const { name, email, password, password2 } = req.body;
   let errors = [];
 
   if (!name || !email || !password || !password2) {
     errors.push({ msg: 'Please enter all fields' });
   }
 
   if (password != password2) {
     errors.push({ msg: 'Passwords do not match' });
   }
 
   if (password.length < 6) {
     errors.push({ msg: 'Password must be at least 6 characters' });
   }
 
   if (errors.length > 0) {
     res.render('register', {
       errors,
       name,
       email,
       password,
       password2
     });
   } else {
      userLogin.findOne({ email: email }).then(user => {
       if (user) {
         errors.push({ msg: 'Email already exists' });
         res.render('register', {
           errors,
           name,
           email,
           password,
           password2
         });
       } else {
         const newUser = new User({
           name,
           email,
           password
         });
 
         bcrypt.genSalt(10, (err, salt) => {
           bcrypt.hash(newUser.password, salt, (err, hash) => {
             if (err) throw err;
             newUser.password = hash;
             newUser
               .save()
               .then(user => {
                 req.flash(
                   'success_msg',
                   'You are now registered and can log in'
                 );
                 res.send('usuário cadastrado');
               })
               .catch(err => console.log(err));
           });
         });
       }
     });
   }




 }

 module.exports.listUser =  (req, res, next) => {
    res.send("Listar usuário");
 }
 module.exports.updatetUser =  (req, res, next) => {
    res.send("Atualizar usuário");
 }

 module.exports.deletetUser =  (req, res, next) => {
    res.send("Deletar usuário");
 }