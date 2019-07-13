const bcrypt = require('bcrypt');
const passport = require('passport');
const userLogin = require('../../models/v1/userLogin');
const envEmail = require('../../services/emailServices');
const bcryptSalt     = 10;
const { forwardAuthenticated } = require('../../config/auth');
const msgWelcome = require('../../config/configEmail');


module.exports.createUser =   (req, res, next) => {
   

  console.log("req.body",req.body);

   const { usuario, password,cidade,email} = req.body;
   let errors = [];
  
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
          email,
          cidade
        })
        .then(() => {
          
          res.redirect("/login");
          envEmail.send(email,'Seja Bem Vindo',msgWelcome.msgWelcome.replace('{0}',usuario))

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