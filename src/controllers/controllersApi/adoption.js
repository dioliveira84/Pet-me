const searchUserAdoption = require('../../models/v1/userLogin');
const pet = require('../../models/v1/pet');
const adoptionPet =require('../../models/v1/adoption')
const envEmail = require('../../services/emailServices');


module.exports.renderPetAdotion = async (req, res) => {

    const {id_user,id_pet} = req.body;
    const user = req.user;
    let resultSearchInfoUser = await searchUserAdoption.findById({"_id":id_user});
    let resultSearchInfoPet = await pet.findById({"_id":id_pet});
    
     res.render('adoptionform',{title:'Adoção',user,resultSearchInfoUser,resultSearchInfoPet});

};

module.exports.adoptionSendEmail = async (req, res) => {

  const {id_user,id_pet,textarea} = req.body;
  const user = req.user;

  adoptionPet.create({id_user,id_pet});

  let resultSearchInfoUser = await searchUserAdoption.findById({"_id":id_user});
  let resultSearchInfoPet = await pet.findById({"_id":id_pet});

  var mailOptions = {
    to: resultSearchInfoUser.email,
    subject: 'Adoção',
    text: 'Parabéns '+resultSearchInfoUser.usuario+ '\n\n' +
      'Você está prestes a dar um novo lar para o(a) '+resultSearchInfoPet.nome+'. \n\n' +
      ' Estamos muito felizes em proporcionar esse encontro !!!!.\n\n\n\n' +
      'Messagem: '+ textarea + 'por favor, entre em contato comigo no email: '+req.user.email+
      ' Att,\n\n'+
      'Pet-Me'
  };
  envEmail.send(mailOptions.to,mailOptions.subject,mailOptions.text)
  await pet.findByIdAndUpdate({"_id":id_pet},{$set:{status:'Em Andamento'}})
   res.render('sendEmailAdoptionEnds',{title:'Email',user,resultSearchInfoUser,resultSearchInfoPet});

};

