const pet = require('../models/v1/pet');


module.exports.renderDetails =  async (req, res, next) => {

    const user = req.user
   resultPet = await pet.findById({"_id":req.body.id})
  const isAdoption = resultPet.status == "Adotado" || resultPet.status == "Em Andamento" ?true : false;
    res.render('petdetails', { title:'Detalhes',resultPet,isAdoption});
 
 }