const bcrypt = require('bcrypt');
const passport = require('passport');
const userLogin = require('../../models/v1/userLogin');
const bcryptSalt     = 10;
const { forwardAuthenticated } = require('../../config/auth');

module.exports.createUser =   (req, res, next) => {
   

  console.log("req.body",req.body);

   const { usuario, password, phone,endereco,email} = req.body;
   let errors = [];
 
  //  if (!usuario || !password || !email || !endereco || !phone) {
  //    errors.push({ msg: 'Please enter all fields' });
  //  }
 
  //  if (errors.length > 0) {
  //    res.send( {
  //      errors
  //    });
  //  } else {
  
    userLogin.findOne({ "email": email })
    .then(user => {
      if (user !== null) {
          res.send({
            errorMessage: "The username already exists!"
          });
          return;
        }
    
        const salt     = bcrypt.genSaltSync(bcryptSalt);
        const hashPass = bcrypt.hashSync(password, salt);
    
        userLogin.create({
          usuario,
          password: hashPass,
          phone,
          email,
          endereco
        })
        .then(() => {
          res.send("usário cadastrado");
        })
        .catch(error => {
          console.log(error);
        })
    })
    .catch(error => {
      next(error);
    })
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