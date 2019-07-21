var config = require('../config/configEmail');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(config.sendgrigKey);

exports.send =  async (to,subject,body) =>{

    const msg = {
        to: to,
        from:'bigbets@gmail.com',
        subject: subject,
        html: body,
      };

       console.log(msg)

      sgMail.send(msg);
}
