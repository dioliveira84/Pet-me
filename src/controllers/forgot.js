
const crypto = require('crypto');
const userLogin = require('../models/v1/userLogin');
const envEmail = require('../services/emailServices');
const async = require('async');
const bcrypt = require('bcrypt');
const bcryptSalt     = 10;



module.exports.renderForgot =  (req, res, next) => {
    const user = req.user
    res.render('forgot', { title:'Alteração de Senha',user});
 
 }

 module.exports.renderReset =  (req, res, next) => {
  const token = req.params.token
  res.render('Reset', { title:'Alteração de Senha',token});

}


 
module.exports.resetPassword =  (req, res, next) => {
   

    async.waterfall([
        function(done) {
          crypto.randomBytes(20, function(err, buf) {
            var token = buf.toString('hex');
            done(err, token);
          });
        },
        function(token, done) {
           
            userLogin.findOne({ "email":req.body.email }).then(user => {

        
           if (!user) {
             req.flash('error', 'No account with that email address exists.');
             return res.redirect('/forgot');
           }
    
           user.resetPasswordToken = token;
           user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    
             user.save(function(err) {
             done(err, token, user);
            });
          });
        },
        function(token, user) {
     
             console.log(user.email)
          var mailOptions = {
            to: user.email,
            subject: 'Altere sua senha',
            text: 'Você está prestes a mudar sua senha.\n\n' +
              'Por favor, clique no link abaixo para refazer sua senha. \n\n' +
              'http://' + req.headers.host + '/forgot/reset/' + token + '\n\n' 
              
          };
          envEmail.send(mailOptions.to,mailOptions.subject,mailOptions.text)
        }
      ], function(err) {
        if (err) return next(err);
        res.redirect('/forgot');
      })

      const sendEmailToScreen  = req.body.email.split('@');
      const resultSplitEmail = `${sendEmailToScreen[0][0]}${sendEmailToScreen[0][1]}**********@${sendEmailToScreen[1]}`

      res.render('sendEmail',{resultSplitEmail});
 
 }

 module.exports.setNewPassWord = (req,res,next) => {

    async.waterfall([
        function(done) {
            userLogin.findOne({ "resetPasswordToken": req.body.token, "resetPasswordExpires": { $gt: Date.now() } }, function(err, user) {
            if (!user) {
              req.flash('error', 'Password reset token is invalid or has expired.');
              return res.redirect('back');
            }
    
            const salt     = bcrypt.genSaltSync(bcryptSalt);
            const hashPass = bcrypt.hashSync(req.body.password, salt);

            
            user.password = hashPass;
            user.resetPasswordToken = undefined;
            user.resetPasswordExpires = undefined;
    
            
            user.save(function(err) {
    
              console.log(user)
              done(err, user);
              
            });
          });
        },
        function(user, done) {
          var mailOptions = {
            to: user.email,
            subject: 'Sua senha foi alterada com sucesso !!',
            text: 'Olá,\n\n' +
              'A senha da conta:' + user.email + ' foi alterada com êxito.\n'
          };


          envEmail.send(mailOptions.to,mailOptions.subject,mailOptions.text)


        }
      ], function(err) {
        res.redirect('/login');
      });
      res.redirect('/login');

 }