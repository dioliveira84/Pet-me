const pet = require('../models/v1/pet');

module.exports.renderMyPets =  async (req, res, next) => {
    const user = req.user;
    
    const myPetsResult = await pet.find({"id_user": user.id})
    

    res.render('mypets', { title:'Meus Pets',user,myPetsResult});
 
 };

 module.exports.changeStatusOfMyPets =  async (req, res, next) => {
    const user = req.user;
    const {status,id} = req.body;
    
    const myPetsResult = await pet.findByIdAndUpdate({_id:id},{$set:{status:status}})
    
    console.log(myPetsResult)
    res.redirect('/mypets');
 
 }