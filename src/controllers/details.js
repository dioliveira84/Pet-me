const pet = require('../models/v1/pet');


module.exports.renderDetails =  async (req, res, next) => {

    const user = req.user
   resultPet = await pet.findById({"_id":req.body.id})

   console.log(resultPet)
    res.render('petdetails', { title:'Detalhes',resultPet});
 
 }